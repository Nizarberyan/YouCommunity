<?php

class db
{
    public static $db = null;

    public function __construct()
    {
        self::$db = Database::getInstance();
    }
    public function getInst()
    {
        if (self::$db === null) {
            self::$db = new self();
        }
    }
}

// phpinfo();