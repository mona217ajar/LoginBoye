
function findDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    console.log(n);
    findMessage(n);
  
}

function findMessage(day){
    if(day=="Wednesday"){
        $("#message").text("today is wednesdy bruh");
    }
    else
    {
        $("#message").text("i shat myself");

    }
}



$(document).ready(function () 

{
    $("#homePage").hide();

    console.log("Jquery works");
    $("#login").click(function () {
        event.preventDefault();
        if ($("#uname").val() == '1' && $("#pwd").val() == '1') {
/*            
 */         $("#loginPage").fadeOut(500);
            $("#homePage").fadeIn(600);
            findDay();
                       
            }
        else {
            alert("Please try again");
        }
        $("#logout").click(function () { 
           $("form")[0].reset();
            $("#loginPage").show();
           $("#homePage").hide();
            
        });
    });
});

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