#!/usr/bin/env python3
import boto3
import json
import datetime
import time
import decimal

class Encoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, decimal.Decimal): return float(obj)


dynamodb = boto3.resource('dynamodb', region_name='eu-north-1')

table = dynamodb.Table('networkUsage')
attr = boto3.dynamodb.conditions.Attr('timeStamp')

now = datetime.datetime.now()
nowhr = now.isoformat()
threehours = now - datetime.timedelta(minutes = 1440)
threehourshr = threehours.isoformat()

#print (now, threehours)
response = table.scan(
    FilterExpression=attr.between(threehourshr, nowhr),
)
json_string = json.dumps(response['Items'], indent=2, cls = Encoder)
print(json_string)
