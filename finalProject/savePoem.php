<?
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $img = $_POST['base64data']; // Your data 'data:image/png;base64,AAAFBfj42Pj4';
  $img = str_replace('data:image/png;base64,', '', $img);
  $img = str_replace(' ', '+', $img);

  //echo($img);
  $poemImageData = base64_decode($img);
  file_put_contents('savedPoemFolder/'+$fileNameData+'.png', $poemImageData);
  echo("done");
}
?>
