<?php
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


$nav = generateNavigation();
if (isset($_GET['page']) && !array_search($_GET['page'], $nav)) {
    http_response_code(404);
        $smarty->display("404.tpl");
    return;
}
$smarty->assign("navigation_array", $nav);
if (isset($_GET['page'])) {
    foreach ($nav as $value) {
        if (strlen($_GET['page']) == 2) {
            if ($value['name'] == strtoupper($_GET['page'])) {
                $current = str_replace('fa-lg', 'fa-xs', $value['icon']);
            }
        } else {
            if ($value['name'] == ucfirst($_GET['page'])) {
                $current = str_replace('fa-lg', 'fa-xs', $value['icon']);
            }
        }
    }
} else {
    $current = str_replace('fa-lg', 'fa-xs', '<i class="fa-solid fa-house fa-lg"></i>');
}

if (isset($_GET['data'])) {
    foreach ($nav as $value) {
        if ($value['name'] == ucfirst($_GET['data'])) {
            $current = str_replace('fa-lg', 'fa-xs', $value['icon']);
        }
    }
}

if (strlen($current) < 11) { $current = '<i class="fa-solid fa-terminal fa-xs"></i>'; }

$smarty->assign("currentIcon", $current);
if (isset($_GET['data'])) {
    $smarty->assign("subPage", ucfirst($_GET['data']));
    //
} else {
    $smarty->assign("subPage", "");
}
$output = $smarty->fetch('index.tpl');
$output = trim(preg_replace('/[\t\n\r\s]+/', ' ', $output));
echo $output;