<?php
use keithjaspercouk\BackendAuthentication;
session_start();
require_once('../includes/Configuration.class.php');
require_once('../includes/classes/BackendAuthentication.class.php');

$auth = new \keithjaspercouk\BackendAuthentication\BackendAuthentication();

if (!isset($_SESSION['loggedin'])) {
    echo $auth->BackendLoginForm();
} else {
    $auth->DisplayConsole();
}