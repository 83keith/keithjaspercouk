<?php
function isDevEnvironment() {
    if (isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] == 'localhost') {
        return true;
    } else {
        return false;
    }
}