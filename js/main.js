

$(document).ready(function(){

console.log("Jquery works");
$("#login").click(function(){
    if( $("#uname").val()=='admin' && $("#pwd").val()=='password') {
/*             $("#first").hide();
            $("#second").append("<p>Hello, admin</p> <br/><input type='button' id='logout' value='Log Out' />");
 */        }
    else {
        alert("Please try again");
    }

})
/* 
console.log("whattup dawg i work");

function loginCheck(form){
    console.log("login bouisss");
    if(form.uname.value=="hrishi" && form.pwd.value=="1234")
    {
        console.log("Validated");
        
    }
    else{
        alert("eat shit dickhead")
    }
} */