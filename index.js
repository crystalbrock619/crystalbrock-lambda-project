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
        
    }
}
function contactbutton(){
  window.open("./contact.html"); 
  }
function seeprojects(){
  window.open("./projects.html"); 
  }
