
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
    drawChart();
  
}

function findMessage(day){
    if(day=="Monday" || day=="Wednesday"){
        $("#message").text("It's just "+day+" long way to go pal");
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
            
            $("#displayName").text("Welcome "+ $("#uname").val());
            $("#loginPage").fadeOut(700);
            $("#homePage").fadeIn(1000);
            findDay();
                       
            }
        else {
            alert("Please try again");
        }
        $("#logout").click(function () { 
           $("form")[0].reset();
            $("#loginPage").fadeIn(1000);
           $("#homePage").fadeOut(700);
            
        });
    });
});


function dataValue(a,b,c){
    var dataValue=[a,b,c];
}

function drawChart(){
    var ctx = document.getElementById("myChart");

var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 5000, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF4394",
                "#36A2EB",
                "#FFCE56"
            ]
						
						
        }]
};

var options = { 
	cutoutPercentage:50,
};


var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options,
    
});
}

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