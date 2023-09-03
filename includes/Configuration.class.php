<?php
DEFINE('DATABASE_HOST', 'localhost');
if (isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] == 'localhost') {
    DEFINE('DATABASE_USER', 'root');
    DEFINE('DATABASE_PASS', '');
} else {
    DEFINE('DATABASE_USER', 'keithjaspercouk');
    // YES this is a silly password (host rules in effect.)
    DEFINE('DATABASE_PASS', 'keith');
}
DEFINE('DATABASE_NAME', 'keithjaspercouk');
