<?php
// put required html mark up
echo"<html>\n";
echo"<head>\n";
echo"<title> Output from the Grafitti Gallery Database </title> \n";
//include CSS Style Sheet
echo "<link rel='stylesheet' type='text/css' href='css/galleryStyle.css'>";
echo"</head>\n";
// start the body ...
echo"<body>\n";
// place body content here ...
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
   $sql_select='SELECT * FROM artCollection';
   $sql_select1="SELECT * FROM artCollection WHERE creationDate >=Date('2002-01-01') AND artist = 'Sarah'";
   $sql_select2 = "SELECT creationDate, artist FROM artCollection WHERE artist = 'Harold' OR artist = 'Sarah' ORDER BY creationDate";

   // the result set
   $result = $db->query($sql_select2);
   if (!$result) die("Cannot execute query.");
   // fetch first row ONLY...
   $row = $result->fetchArray(SQLITE3_ASSOC);
   print_r($row);
//new stuff
   $result->reset();
echo "<h3> Query Results:::</h3>";
echo"<div id='back'>";
// get a row...
while($row = $result->fetchArray(SQLITE3_ASSOC))
{
echo "<div class ='outer'>";
echo "<div class ='content'>";
// go through each column in this row
// retrieve key entry pairs
foreach ($row as $key=>$entry)
{
  //if the column name is not 'image'
   if($key!="image")
   {
     // echo the key and entry
       echo "<p>".$key." :: ".$entry."</p>";
   }
}

// put image in last
 echo "</div>";
 // access by key
 $imagePath = $row["image"];
 echo "<img src = $imagePath\>";
 echo "</div>";
}//end while
echo"</div>";
}

catch(Exception $e)
{
   die($e);
}
echo"</body>\n";
echo"</html>\n";
?>
