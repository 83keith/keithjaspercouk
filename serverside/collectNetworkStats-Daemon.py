#!/usr/bin/env python3
import psutil
import time
import mysql.connector
UPDATE_DELAY = 300  # in seconds

def get_size(bytes):
    """
    Returns size of bytes in a nice format
    """
    for unit in ['', 'K', 'M', 'G', 'T', 'P']:
        if bytes < 1024:
            return f"{bytes:.2f}{unit}B"
        bytes /= 1024

        # get the network I/O stats from psutil
io = psutil.net_io_counters()
# extract the total bytes sent and received
bytes_sent, bytes_recv = io.bytes_sent, io.bytes_recv
while True:
    mydb = mysql.connector.connect(
            host="localhost",
            user="keithjaspercouk",
            password="keith",
            database="keithjaspercouk"
            )
    dblink = mydb.cursor()

    # get the stats again
    io_2 = psutil.net_io_counters()
    # new - old stats gets us the speed
    us, ds = io_2.bytes_sent - bytes_sent, io_2.bytes_recv - bytes_recv
    # print the total download/upload along with current speeds
    print(f"Upload: {get_size(io_2.bytes_sent)}   "
          f", Download: {get_size(io_2.bytes_recv)}   "
          f", Last 10 Seconds (UP): {get_size(us)}  "
          f", Last 10 Seconds (Down): {get_size(ds)}      ", end="\r\n")
    # update the bytes_sent and bytes_recv for next iteration
    bytes_sent, bytes_recv = io_2.bytes_sent, io_2.bytes_recv

    sql = "INSERT INTO networkusage (up, down) VALUES (%s, %s)"
    val = (us, ds)
    dblink.execute(sql, val)
    mydb.commit()
    dblink.close()
    mydb.close()
    time.sleep(UPDATE_DELAY)
