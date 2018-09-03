    $("#startbtn").click(function(){
    $(".jumbotron").hide(1000);
}); 
$("#startbtn").click(function(){
    $(".pop1").css("display","block");
}); 

$("#btn1").click(function(){
    $(".pop1").css("display","none");
}); 
$("#btn1").click(function(){
    $(".pop2").css("display","block");
}); 

$("#btn2").click(function(){
    $(".pop2").css("display","none");
}); 
$("#btn2").click(function(){
    $(".pop3").css("display","block");
}); 

$("#btn3").click(function(){
    $(".pop3").css("display","none");
}); 
$("#btn3").click(function(){
    $(".pop4").css("display","block");
}); 

$("#btn4").click(function(){
    $(".pop4").css("display","none");
}); 
$("#btn4").click(function(){
    $(".pop5").css("display","block");
}); 

$("#btn5").click(function(){
    $(".pop5").css("display","none");
}); 

$("#btn5").click(function(){
    $(".boogydiv, #boogy").css("display","block");
}); 
$("#boogybtn").click(function(){
    $(".boogydiv, #boogy").css("display","none");
}); 

$("#boogybtn").click(function(){
    $(".main").css("display","block");
}); 

$(".yes").click(function () {
    var result=$(".yes").val("Yes! because i LOOOOOVE this website!");
    $(".yes").attr('value', 'Congrats! This is the wrong button! Remember: everything is NOT how it looks like :)');
})


$("#no").click(function(){
    $(".main").css("display","none");
}); 

$("#no").click(function(){
    $(".video").css("display","block");
}); 

$("#go").click(function(){
    $(".video").css("display","none");
}); 

$("#go").click(function(){
    $(".troll").css("display","block");
}); 

$(".trollbtn").click(function () {
    var result=$(".trollbtn").val("Click me!");
    $(".trollbtn").attr('value', 'Good human! 🐶');
})

$("#out").click(function(){
    $(".troll").css("display","none");
}); 

$("#boogy").hover(function(){
    var audio= new Audio('res/laugh.mp3');
audio.play();
}); 
