$(document).ready(function() {

  //open the modal

    /*$(".image_gallery").click(function() {
        $("#myModal").show();
        
    });*/
    
     /*var im = $(".image_gallery");
    var s = $(".slides");
    
   
     for (var i = 0; i < im.length; i++)
     {
       
          var element = im[i];
            var pic = $(element);
            var $myParagraph = $(s[i]);
          pic.click(function() {
            $("#myModal").show(); 
           
             
          });
          
           $myParagraph.show();

     }*/
    
    
});
 
 const elem = document.getElementsByClassName("onclick_img");
  	 const m = document.getElementById("myModal");
  	  
  	 var slideIndex = 1;
	var arrSlide = Array.from(document.getElementsByClassName('onclick_img'));

  	 //open the modal

  	 function openModal()
  	 {
  	 	document.getElementById("myModal").style.display = "block";
  	 }
	// Close the Modal
	function closeModal() 
	{
  		document.getElementById("myModal").style.display = "none";
	} 

	function currentSlide(n) 
	{
  		showSlides(slideIndex = n);
	}

	// Next/previous controls
	function plusSlides(n) 
	{
  		showSlides(slideIndex += n);
	}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
  
  
}