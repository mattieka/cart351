<?php

class MyDB extends SQLite3
   {
      function __construct()
      {
         $this->open('../db/graffitiGallery.db');
      }
   }

try
{
   $db = new MyDB();
   echo ("Opened or created graffiti gallery data base successfully<br \>");
}
catch(Exception $e)
{
   die($e);
}
?>
