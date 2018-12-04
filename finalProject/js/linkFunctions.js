/****************************************************************************/
                            //LINK FUNCTIONS
                //implements functionality of navigation links
/****************************************************************************/


/****************************************************************************/
                              //VARIABLES
/****************************************************************************/

var homeLink = document.getElementById("homeLink");
var galleryLink = document.getElementById("galleryLink");
var createLink = document.getElementById("createLink");

/****************************************************************************/
                              //FUNCTIONS
/****************************************************************************/


// when homelink is clicked
  $(homeLink).click(function(event) {
    event.preventDefault();
      $(homeContents).show();
      $(galleryContents).hide();
      $(createContents).hide();
      console.log("home clicked");
  });

// when gallery link is clicked
  $(galleryLink).click(function(event) {
    event.preventDefault();
      $(homeContents).hide();
      $(galleryContents).show();
      $(createContents).hide();
      console.log("home clicked");
  });

// when create link is clicked
  $(createLink).click(function(event) {
    event.preventDefault();
      $(homeContents).hide();
      $(galleryContents).hide();
      $(createContents).show();
      console.log("home clicked");
  });
