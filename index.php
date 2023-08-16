<?php
// put full path to Smarty.class.php
require('includes/smarty/Smarty.class.php');
$smarty = new Smarty();
$smarty->setCaching('Smarty::CACHING_OFF');
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
        $smarty->assign("pageTitle", ucfirst($_GET['page']));
        $smarty->assign("getContent", strtolower($_GET['page']));
    }
}

if (isset($_GET['data'])) {
    $smarty->assign("subPage", ucfirst($_GET['data']));
    //
} else {
    $smarty->assign("subPage", "");
}
$smarty->display('index.tpl');