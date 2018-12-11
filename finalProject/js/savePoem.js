/****************************************************************************/
                          //SAVING USER POEMS
/****************************************************************************/

//i think id want there to be a specific button that people click when theyre
//happy with their poems and want to save them/upload them

function savePoem(fileName,author) {
  // canvas.todataurl takes whats on the canvas and turns it into data as
  // a png if im understanding correctly
  let canvas = document.getElementById("defaultCanvas0");
  let poemImageData = canvas.toDataURL('image/png');
  let fileNameData = fileName;
  let authorNameData = author;
  console.log(fileNameData);
  let dataToSend = {
  base64data : poemImageData ,
    filename : fileNameData ,
    author : authorNameData 
}
//let dataToSend = new FormData();
//dataToSend.append("base64data",poemImageData);
//dataToSend.append("filename",fileNameData);

  /* make an ajax request to php -> to save image on the server */
  $.ajax({
    type: "POST",
    url: 'savePoem.php',
    dataType: 'text',
    data: dataToSend,
    success:function(response){
      console.log("response:: "+response);
    }
  });
}
