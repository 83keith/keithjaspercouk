<?php

namespace keithjaspercouk\BackendAuthentication;
use keithjaspercouk\BackendDisplayConsole\BackendDisplayConsole;

require_once('BackendDisplayConsole.class.php');
        
class BackendAuthentication
{
    private $password = false;
    public function __construct()
    {
        $host = $_SERVER['HTTP_HOST'];
        switch ($host) {
            case 'localhost':
                //TOOD: get password from local server
                $this->password = "test";
                break;
            default:
                //TODO: get password from aws
                $this->password = shell_exec("cat /home/ubuntu/authpassword");
                break;
        }

        if ($this->password == false) {
            exit("failed to retrieve password");
        }
    }

    public function BackendLoginForm()
    {
        if (isset($_POST['password'])) {
            if ($this->password == $_POST['password']) {
                $_SESSION['loggedin'] = true;
                header("Location: ./");
            } else {
                $failed = "Login Failed <br />";
            }
        }
        $form = <<<EOT
            <html>
            <head>
            <title>Login</title>
            </head>
            <body>
            {$failed}
            <form method="POST" action="./">
            <input type="text" name="password" />
            <input type="submit" name="Submit" />
            </body>
            </html>
        EOT;

        return $form;
    }

    public function DisplayConsole()
    {
        $console = new BackendDisplayConsole();
        $console->ShowNav();
    }
}
