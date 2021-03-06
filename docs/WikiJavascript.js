


$(document).ready(function(){
  // click search button to activate getWikiAPI
  $("#searchButton").click(function(){
       $("#pageOutput").empty();
       console.log($("#searchText").val()); 
       getWikiAPI($("#searchText").val());
    });    
  // press enter to activate getWikiAPI
  $("#searchText").keypress(function(e){
     if (e.which === 13){
       $("#searchButton").click();  
     } 
  });  
  // click random button to activate getRandomPage  
  $("#randomButton").click(function(){
       getRandomPage(); 
    });
});
// global search variable
searchText = "bees";

// AJAX call for Wikipedia search
function getWikiAPI(searchText){
    if(searchText !== ""){        
    let ourURL =`https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=${searchText}&callback=?&origin=*`;
   console.log(searchText);
    $.ajax(ourURL,{
        dataType: "json",
        success: function(data){
           console.log(data);
           for(let i=0; i<data[1].length; i++){
               var link = data[3][i];
               var title= data[1][i];
               var text = data[2][i];
               $("#pageOutput").append(`<li id="listItem"><a href =${link}>${title}</a><br>${text}</li>`);
       }
       $("#searchText").val("");
       }
    });    
}
}

// AJAX call for random search
function getRandomPage(){
      window.open("https://en.wikipedia.org/wiki/Special:Random");
};