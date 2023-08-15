$('.tab').hover( function(){
  if($(this).hasClass("workTab")){
    $(".workTab").addClass("active");
    $(".aboutTab").removeClass("active");
    $(".contactTab").removeClass("active");
    $(".resumeTab").removeClass("active");
    $(".linkedTab").removeClass("active");

  } else if($(this).hasClass("aboutTab")){
    $(".aboutTab").addClass("active");
    $(".workTab").removeClass("active");
    $(".contactTab").removeClass("active");
    $(".resumeTab").removeClass("active");
    $(".linkedTab").removeClass("active");

  } else if($(this).hasClass("contactTab")){
    $(".contactTab").addClass("active");
    $(".aboutTab").removeClass("active");
    $(".workTab").removeClass("active");
    $(".resumeTab").removeClass("active");
    $(".linkedTab").removeClass("active");

  } else if($(this).hasClass("resumeTab")){
    $(".resumeTab").addClass("active");
    $(".aboutTab").removeClass("active");
    $(".contactTab").removeClass("active");
    $(".workTab").removeClass("active");
    $(".linkedTab").removeClass("active");

  } else if($(this).hasClass("linkedTab")){
    $(".linkedTab").addClass("active");
    $(".aboutTab").removeClass("active");
    $(".contactTab").removeClass("active");
    $(".resumeTab").removeClass("active");
    $(".workTab").removeClass("active");
 }
/*mouse leave*/
}, function(){
    $(".workTab").removeClass("active");
    $(".aboutTab").removeClass("active");
    $(".contactTab").removeClass("active");
    $(".resumeTab").removeClass("active");
    $(".linkedTab").removeClass("active");
});


/* Get clicks going to sections, maybe add click and anchor, might have to change list to anchor */

