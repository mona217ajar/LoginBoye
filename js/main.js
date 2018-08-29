var setValue = [0, 0, 0];

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

function findMessage(day) {
    if (day == "Monday" || day == "Wednesday") {
        $("#message").text("It's just " + day + " long way to go pal");
        setValue = new Array(400, 700, 625);
        console.log(setValue);
        drawChart();
    }
    else {
        $("#message").text("i shat myself");

    }
}



$(document).ready(function () {
    $("#homePage").hide();
    $("#invalidID").hide();

    console.log("Jquery works");
    $("#login").click(function () {
        event.preventDefault();
        if ($("#uname").val() == '1' && $("#pwd").val() == '1') {

            $("#displayName").text("Welcome " + $("#uname").val());
            $("#loginPage").fadeOut(700);
            $("#homePage").fadeIn(1000);
            findDay();

        }
        else {
            // alert("Please try again");
            $("#pwd").effect("shake", { times:3 }, 300);
            $("form")[0].reset();
            $("#invalidID").fadeIn(300);
            
        }
        $("#logout").click(function () {
            $("form")[0].reset();
            $("#invalidID").hide();
            $("#loginPage").fadeIn(1000);
            $("#homePage").fadeOut(700);

        });
    });
});




function drawChart() {
    var ctx = document.getElementById("myChart");

    var dataConfig = {
        labels: [
            "Red",
            "Blue",
            "Yellow"
        ],
        datasets: [
            {
                data: [setValue[0], setValue[1], setValue[2]],
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
        cutoutPercentage: 50,
    };


    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: dataConfig,
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