//Global variable counter to keep track of current pic
var Zimgnumber = 0;
var Oimgnumber = 0;
//Name of the folder that contains the pics
var picFolder = 'assets';
//Array of picture file names
var picfilesZelda = ['Zelda1.jpg', 'Zelda2.jpg', 'Zelda3.jpg', 'Zelda4.jpg', 'Zelda5.jpg', 'Zelda6.jpg', 'Zelda7.jpg', 'Zelda8.jpg', 'Zelda9.jpg', 'Zelda10.jpg'];
var picfilesOscar = ['Oscar1.jpg', 'Oscar2.jpg', 'Oscar3.jpg', 'Oscar4.jpg', 'Oscar5.jpg', 'Oscar6.jpg', 'Oscar7.jpg', 'Oscar8.jpg', 'Oscar9.jpg', 'Oscar10.jpg', 'Oscar11.jpg', 'Oscar12.jpg', 'Oscar13.jpg', 'Oscar14.jpg', 'OscarandChris6_15.jpg']
//Empty array of image objects
var imagesZelda = [];
var imagesOscar = [];
//populate image objects into images array and set each ones src attribute to one of the files in picfiles
for (var i=0; i < picfilesZelda.length; i++) {
  imagesZelda[i] = new Image();
  imagesZelda[i].src = picFolder + '/' + picfilesZelda[i];
}
for (var i=0; i < picfilesOscar.length; i++) {
  imagesOscar[i] = new Image();
  imagesOscar[i].src = picFolder + '/' + picfilesOscar[i];
}
//variable to store the number of images in the images array
var imgcountZelda = imagesZelda.length -1;
var imgcountOscar = imagesOscar.length -1;
function slide(num, name) {
  if (name == 'Zelda') {
  //Increment or decrement in range 1 to imgcount
  Zimgnumber = (Zimgnumber + num) % imgcountZelda;
  //Loop to last img in images array if prev is clicked when on first image in images array
  Zimgnumber = Zimgnumber < 0 ? imgcountZelda-1 : Zimgnumber;
  //Set the src attribute for the image on the page to the src of the array image
  document.getElementById('targetZ').src = imagesZelda[Zimgnumber].src;
  }
  if (name == 'Oscar') {
    //Increment or decrement in range 1 to imgcount
  Oimgnumber = (Oimgnumber + num) % imgcountOscar;
  //Loop to last img in images array if prev is clicked when on first image in images array
  Oimgnumber = Oimgnumber < 0 ? imgcountOscar-1 : Oimgnumber;
  //Set the src attribute for the image on the page to the src of the array image
  document.getElementById('targetO').src = imagesOscar[Oimgnumber].src;
  }
}
//Once page is loaded set src attribute of image on page to the first image in the array
window.addEventListener('load', (event) => {
  document.getElementById('targetZ').src = imagesZelda[0].src;
  document.getElementById('targetO').src = imagesOscar[0].src;
})

//Search My Site
function search() {
    var site = "crystalbrock.org"
    //get user text from search text box
    var lookFor = document.getElementById("txtlookfor").value;
    //if search box not empty do the search
    if(lookFor.length>0) {
      //Build URL for the search
      var query="http://www.google.com/search?q=" + encodeURIComponent(lookFor) + " site:" + site;
      //Set Address bar equal to query
      location.href=query
    }
    else{
      //if text box empty show alert
      alert("Please type the word or phrase that you would like to search for.");
    }
}
function contactbutton(){
  window.open("./contact.html"); 
  }
function seeprojects(){
  window.open("./projects.html"); 
  }
