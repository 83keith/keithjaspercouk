<?php
if (isset($_GET['request_type']) && $_GET['request_type'] == 'payment') {
    if (isset($_GET['result']) && $_GET['result'] == 'success') {
        $array['result'] = "success";
    } else {
        $array['result'] = "failed";
    }
    $return = array_merge($_POST, $array);
    echo json_encode($return);
} else {
    echo json_encode("no request found");
}