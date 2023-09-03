<?php
namespace keithjaspercouk\BackendDisplayConsole;

use Smarty;
use keithjaspercouk\MySQLConnection\MySQLConnection;

require_once("../includes/smarty/Smarty.class.php");
require_once("../includes/MySQLConnection.class.php");

class BackendDisplayConsole {
    private $smarty;
    private $db;
    public function __construct() {
        $this->db = new MySQLConnection(DATABASE_HOST, DATABASE_USER, DATABASE_PASS, DATABASE_NAME);

        $this->smarty = new Smarty();   
        if (isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] == 'localhost') {
            $this->smarty->setCaching('Smarty::CACHING_OFF');
        }
        $this->smarty->setTemplateDir('../template');
        $this->smarty->setCompileDir('../includes/smarty/templates_c');
        $this->smarty->setCacheDir('../includes/smarty/cache');
        $this->smarty->setConfigDir('../includes/configs');
    }

    public function InitialiseTemplates() {
        //nothing here yet
    }

    public function GetNavigation() {
        return $this->db->query('SELECT * FROM Navigation')->fetchAll();
    }
    public function ShowNav() {
        if (isset($_POST['Delete'])) {
            $this->db->query('DELETE FROM navigation WHERE id=? LIMIT 1', $_POST['id']);
        } elseif (isset($_POST['Save'])) {
                if (isset($_POST['visible'])) {
                    $visible = 1;
                } else {
                    $visible = 0;
                }
                $this->db->query("UPDATE navigation SET name=?, icon=?, href=?, visible=? WHERE id=?", $_POST['name'], $_POST['icon'], $_POST['href'], $visible, $_POST['id']);
        } elseif ($_POST['new']) {
            if (isset($_POST['visible'])) {
                $visible = 1;
            } else {
                $visible = 0;
            }
            $this->db->query("INSERT INTO navigation (name, icon, href, visible) VALUES (?,?,?,?)", $_POST['name'], $_POST['icon'], $_POST['href'], $visible);
        }
        $this->smarty->assign('nav', $this->GetNavigation());
        $this->smarty->display('BackendNavigation.tpl');

    }
}
