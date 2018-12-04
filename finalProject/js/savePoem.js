/****************************************************************************/
                          //SAVING USER POEMS
/****************************************************************************/

//i think id want there to be a specific button that people click when theyre
//happy with their poems and want to save them/upload them

function savePoem() {
  // canvas.todataurl takes whats on the canvas and turns it into data as
  // a png if im understanding correctly
  let poemImageData = canvas.toDataURL('png');

  let dataToSend = {
    base64data : poemImageData ,
    filename : filename;
  }

  /* make an ajax request to php -> to save image on the server */
  $.ajax({
    type: "POST",
    url: 'savePoem.php',
    dataType: 'text',
    data: { dataToSend },
    success:function(response){
      console.log("response:: "+response);
    }
  });
}
