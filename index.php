<?php

use keithjaspercouk\AwsFunctions\DynamoDB\DynamoDB;
use keithjaspercouk\MySQLConnection\MySQLConnection;


//FIXME: change include/require to autoloader
require_once('includes/Configuration.class.php');
require_once('includes/MySQLConnection.class.php');
try {
    $data = new MySQLConnection(DATABASE_HOST, DATABASE_USER, DATABASE_PASS, DATABASE_NAME);
} catch (Exception $e) {
    var_dump($e);
    print "<br/> Database connection failed";
    exit();
}

// TODO: handle index.php better
// try using case statements to separte the if's
//      if isset / case / elseif / case
//  research other method
//  definatly build a site constructor class to handle all of this
//  try and get index.php to under 20 lines of code

if (!isset($_GET['API'])) {
    // put full path to Smarty.class.php
    require('includes/smarty/Smarty.class.php');
    require('includes/basic_functions.php');
    $smarty = new Smarty();
    if (isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] == 'localhost') {
        $smarty->setCaching('Smarty::CACHING_OFF');
    }
    $smarty->setTemplateDir('./template');
    $smarty->setCompileDir('./includes/smarty/templates_c');
    $smarty->setCacheDir('./includes/smarty/cache');
    $smarty->setConfigDir('./includes/configs');
    $smarty->assign("getContent", "home");
    $smarty->assign("pageTitle", ucfirst("Home"));
    if (isset($_GET['page'])) {
        if (strlen($_GET['page']) > 1 && strlen($_GET['page']) < 3) {
            $smarty->assign("pageTitle", strtoupper($_GET['page']));
            $smarty->assign("getContent", strtolower($_GET['page']));
        } else {
            if (!isset($_GET['data'])) {
                $smarty->assign("pageTitle", ucfirst($_GET['page']));
                $smarty->assign("getContent", strtolower($_GET['page']));
            } else {
                $smarty->assign("pageTitle", ucfirst($_GET['page'] . " | " . ucfirst($_GET['data'])));
                $smarty->assign("getContent", strtolower($_GET['page']));
            }
        }
    }


    $nav = $data->query("SELECT * FROM navigation WHERE visible=1")->fetchAll();

    // BUG: generate a correct 404 (only works if through index.php but ... meh bigger problems if that doesnt work)
    // var_dump(array_search($_GET['page'], array_column($nav, $_GET['page'])));
    // if (isset($_GET['page']) && array_search($_GET['page'], $nav, ) !== false) {
    //     http_response_code(404);
    //         $smarty->display("404.tpl");
    //     return;
    // }
    $smarty->assign("navigation_array", $nav);
    if (isset($_GET['page'])) {
        foreach ($nav as $value) {
            if (strlen($_GET['page']) == 2) {
                if ($value['name'] == strtoupper($_GET['page'])) {
                    $current = $value['icon'];
                }
            } else {
                if ($value['name'] == ucfirst($_GET['page'])) {
                    $current = $value['icon'];
                }
            }
        }
    } else {
        $current = "fa-house";
    }

    if (isset($_GET['data'])) {
        foreach ($nav as $value) {
            if ($value['name'] == ucfirst($_GET['data'])) {
                $current = str_replace('fa-lg', 'fa-xs', $value['icon']);
            }
        }
    }

    // Download Graph data
    if (isset($_GET['page']) && $_GET['page'] == 'graph') {
        $curlSession = curl_init();
        if (isDevEnvironment()) {
            curl_setopt($curlSession, CURLOPT_URL, 'http://localhost/?API=serverstats&test=a');
        } else {
            curl_setopt($curlSession, CURLOPT_URL, 'http://keithjasper.co.uk/?API=serverstats');
        }
        curl_setopt($curlSession, CURLOPT_CRLF, true);
        curl_setopt($curlSession, CURLOPT_RETURNTRANSFER, true);
        try {
            if (isDevEnvironment()) {
                $data = curl_exec($curlSession);
            } else {
                $data = json_decode(curl_exec($curlSession));
            }
            //$data = str_replace(array('\\n', '\\'), '', $data);
        } catch (Exception $e) {
            var_dump($e);
        }

        $smarty->assign('GraphData', $data);
        curl_close($curlSession);
    }


    $smarty->assign("currentIcon", $current);
    if (isset($_GET['data'])) {
        $smarty->assign("subPage", ucfirst($_GET['data']));
        //
    } else {
        $smarty->assign("subPage", "");
    }
    $output = $smarty->fetch('index.tpl');
    //$output = trim(preg_replace('/[\t\n\r\s]+/', ' ', $output));
    echo $output;
} else {
    $caselogic = strtolower($_GET['API']);
    switch ($caselogic) {
        case "serverstats":
            require_once('includes/MySQLConnection.class.php');
            $db = new MySQLConnection(DATABASE_HOST, DATABASE_USER, DATABASE_PASS, DATABASE_NAME);
            $data = $db->query("SELECT * from networkusage WHERE timeStamp <= NOW() and timestamp  >= NOW() - INTERVAL 1 WEEK;")->fetchAll();
            echo json_encode($data);
    }
}
