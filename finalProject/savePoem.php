<?
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $img = $_POST['base64data']; // Your data 'data:image/png;base64,AAAFBfj42Pj4';
  $img = str_replace('data:image/png;base64,', '', $img);
  $img = str_replace(' ', '+', $img);
  $fileNameData = $_POST['filename'];
  $authorNameData = $_POST['author'];
//  $fileNameData = $_POST['filename'];

//  echo($fileNameData);
  $poemImageData = base64_decode($img);
file_put_contents('savedPoemFolder/'.$fileNameData.'_'.$authorNameData.'.png', $poemImageData);
//  echo("done");
}
?>
