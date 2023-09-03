<?php

namespace keithjaspercouk\AwsFunctions;

class AwsFunctions
{
    //Pass variables to class
    public function __construct()
    {
        //TODO : get credientials from secure file
    }

    private function getAuthCredentials()
    {
        // Get auth credentials from secure location.
    }
}

//TODO: Seperate into seperate file as required

namespace keithjaspercouk\AwsFunctions\DynamoDB;

use Exception;
use keithjaspercouk\AwsFunctions\AwsFunctions;

class DynamoDB extends AwsFunctions
{
    public function queryDynamoDB()
    {
        if (isset($_GET['test'])) {
            $return = <<<EOT
            [
                {
                  "dataUP": 136787.0,
                  "timeStamp": "2023-09-03T10:08:33.853569",
                  "dataDOWN": 130430.0
                },
                {
                  "dataUP": 30521.0,
                  "timeStamp": "2023-09-03T10:23:34.448470",
                  "dataDOWN": 23173.0
                },
                {
                  "dataUP": 590475.0,
                  "timeStamp": "2023-09-03T09:58:33.398267",
                  "dataDOWN": 178087.0
                },
                {
                  "dataUP": 150021.0,
                  "timeStamp": "2023-09-03T10:13:34.047986",
                  "dataDOWN": 111570.0
                },
                {
                  "dataUP": 37137.0,
                  "timeStamp": "2023-09-03T10:18:34.244733",
                  "dataDOWN": 32672.0
                },
                {
                  "dataUP": 1030827.0,
                  "timeStamp": "2023-09-03T10:03:33.647323",
                  "dataDOWN": 15935378.0
                }
              ]
              
EOT;
            return $return;
        } else {
            try {
                //Shouldnt be here, but for the purpose of showing different type of intergrations leaving as python call until major upgrades
                //FIXME: use autodeployed /serverside/getServerStats.py instead of manual file (allows for updating through CI/CD later)
                return json_encode(shell_exec('/home/ubuntu/getdata.py'));
            } catch (Exception $e) {
                print_r($e);
            }
        }
    }
}
