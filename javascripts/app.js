;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  
  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
  $('input, textarea').placeholder();
  
  
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  
  
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  
  
  $.fn.foundationTopBar           ? $doc.foundationTopBar({breakPoint: 940}) : null;
  
  
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  
    
    $.fn.foundationTabs             ? $doc.foundationTabs() : null;
    
  
  
    $("#featured").orbit();
  

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

   // Expand Panel
  $("#open").click(function(){
    $("div#panel").slideDown("slow");
  
  }); 
  
  // Collapse Panel
  $("#close").click(function(){
    $("div#panel").slideUp("slow"); 
  });   
  
  // Switch buttons from "Log In | Register" to "Close Panel" on click
  $("#toggle a").click(function () {
    $("#toggle a").toggle();
  }); 

  $('#signinButton').click(function(e){
     e.preventDefault();
    var user =$('#user').val();
    var pass =$('#pass').val();
    console.log("This notifies you if the password is working");
    
    $.ajax({
      url:'xhr/login.php',
      type:'post',
      dataType:'json',
      data:{
        username:user,
        password:pass
      },
      success:function(response){
        console.log("Test User");
        if(response.error){
          alert(response.error);
        } else{
          window.location.assign('admin.html')
        };
      }
    });
  });


$('#register').on('click', function(){
  var username= $('#username').val(),
  email= $('#email').val(),
  password= $('#password').val();

  $.ajax({
    url:'xhr/register.php',
    type:'post',
    datatype:'json',
    data:{
      username:username,
      email:email,
      password:password
    },

    success: function(response){
      if (response.error){
        alert(reponse.error);
      }else{
        window.location.assign('admin.html');
      }
    }
  });
});

})(jQuery, this);
