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
        event.preventDefault();
        $("#message").text("It's just " + day + ", long way to go pal");
        setValue = new Array(20, 700, 625);
        console.log(setValue);
        setTimeout(drawChart,500);
    }
    else {
        $("#message").text("i shat myself");
        event.preventDefault();


    }
}



$(document).ready(function () {
    $("#homePage").hide();
    $("#invalidID").hide();
    $("#bye").hide();

    console.log("Jquery works");
    $("#login").click(function () {
        event.preventDefault();
        if ($("#uname").val() == 'hrishi' && $("#pwd").val() == 'poop') {

            $("#displayName").text("Welcome " + $("#uname").val());
            $("#loginPage").fadeOut(300);
            $("#homePage").fadeIn(800);
            findDay();

        }
        else {
            // alert("Please try again");
            $("#pwd").effect("shake", { times:3 }, 500);
            $("form")[0].reset();
            $("#invalidID").fadeIn(300);
            
            
        }
        $("#logout").click(function () {
            $("#loginPage").hide(600);
            $("#homePage").fadeOut(300);
            $("#bye").fadeIn();
            console.log("black skie");
            setTimeout(byeScreen,1500);

        

        });
    });
});

function byeScreen(){
    $("#bye").fadeOut(1000);
    $("#homePage").hide();
    $("form")[0].reset();
    $("#invalidID").hide();
    $("#loginPage").fadeIn(600);
    $("#homePage").fadeOut(300);
}



function drawChart() {
    var ctx = document.getElementById("myChart");

    var dataConfig = {
        labels: [
            "Optimism",
            "Anxiety",
            "Tired"
        ],
        datasets: [
            {
                data: [setValue[0], setValue[1], setValue[2]],
                backgroundColor: [
                    "#FFC255",
                    "#F6A296",
                    "#CA5EAF"
                ],
                hoverBackgroundColor: [
                    "#FFC255",
                    "#F6A296",
                    "#CA5EAF"
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

