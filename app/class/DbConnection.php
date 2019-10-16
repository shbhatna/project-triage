<?php

class DbConnection
{
  protected static $connection;

  // function __create() {
  //
  // }

    static function getConnection() {
      if (self::$connection) {
        return self::$connection;
      }

      try {
          $dsn = 'mysql:host='.getEnv('MYSQL_HOST').';dbname='.getEnv('MYSQL_DATABASE').';charset=utf8';
          error_log($dsn);
          self::$connection = new PDO(
             $dsn,
             getEnv('MYSQL_USER'),
             getEnv('MYSQL_PASSWORD'),
             [
                 PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                 PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                 PDO::ATTR_EMULATE_PREPARES   => false
             ]
           );
      } catch (\PDOException $e) {
          throw new \PDOException($e->getMessage(), (int)$e->getCode());
      }
      return self::$connection;
    }
}
