$(document).ready(function()
{

    //////////////////////// Title Bar ////////////////////////

    let main = $("#mainContainer");
    main.addClass("container");
    
    let wrapper = $("<div>");
    wrapper.attr("id","wrapper");
    wrapper.draggable();
    wrapper.addClass("wrapperStyle");
    main.html(wrapper);

    let titleBar = $("<div>");
    titleBar.attr("id","titleBar");
    titleBar.addClass("titleBarStyle");
    wrapper.append(titleBar);

    let appTitle = $("<div>");
    appTitle.attr("id","appTitle");
    appTitle.addClass("appTitleStyle");
    titleBar.append(appTitle);

    let appName = $("<p>");
    appName.addClass("appName");
    appName.text("Calculator");
    appTitle.append(appName);

    let circlesWhole = $("<div>");
    circlesWhole.attr("id","circlesWhole");
    circlesWhole.addClass("circleStyle");
    titleBar.append(circlesWhole);

    let circle1 = $("<div>");
    circle1.addClass("circle1Style");
    circlesWhole.append(circle1);

    let circle2 = $("<div>");
    circle2.addClass("circle2Style");
    circlesWhole.append(circle2);

    let circle3 = $("<div>");
    circle3.addClass("circle3Style");
    circlesWhole.append(circle3);

    //////////////////////// Text Area ////////////////////////

    let display = $("<input>");
    display.attr("id","display");
    display.addClass("displayStyle")
    display.attr("type","text");
    display.attr("placeholder","0");
    display.attr("value", "0");
    wrapper.append(display);

    //////////////////////// Buttons Area ////////////////////////

    let buttonArea = $("<div>");
    buttonArea.attr("id","btnArea");
    buttonArea.addClass("btnAreaStyle");
    wrapper.append(buttonArea);

    let btnRow1 = $("<div>").addClass("btnRow1");
    buttonArea.append(btnRow1);

    let btn7 = $("<button>");
    btn7.addClass("btnStyle btnValue");
    btn7.text("7");
    btnRow1.append(btn7);

    let btn8 = $("<button>");
    btn8.addClass("btnStyle btnValue");
    btn8.text("8");
    btnRow1.append(btn8);

    let btn9 = $("<button>");
    btn9.addClass("btnStyle btnValue");
    btn9.text("9");
    btnRow1.append(btn9);

    let btnC = $("<button>");
    btnC.addClass("btnStyle");
    btnC.css({"background-color":"gray", "color":"#000"});
    btnC.text("C");
    btnRow1.append(btnC);

    let btnRow2 = $("<div>").addClass("btnRow1");
    buttonArea.append(btnRow2);

    let btn4 = $("<button>");
    btn4.addClass("btnStyle btnValue");
    btn4.text("4");
    btnRow2.append(btn4);

    let btn5 = $("<button>");
    btn5.addClass("btnStyle btnValue");
    btn5.text("5");
    btnRow2.append(btn5);

    let btn6 = $("<button>");
    btn6.addClass("btnStyle btnValue");
    btn6.text("6");
    btnRow2.append(btn6);

    let btnDivide = $("<button>");
    btnDivide.addClass("btnStyle btnValue");
    btnDivide.css({"background-color":/*"#d9dad7"*/"gray", "color":"#000"});
    btnDivide.text("/");
    btnRow2.append(btnDivide);

    let btnRow3 = $("<div>").addClass("btnRow1");
    buttonArea.append(btnRow3);

    let btn1 = $("<button>");
    btn1.addClass("btnStyle btnValue");
    btn1.text("1");
    btnRow3.append(btn1);

    let btn2 = $("<button>");
    btn2.addClass("btnStyle btnValue");
    btn2.text("2");
    btnRow3.append(btn2);

    let btn3 = $("<button>");
    btn3.addClass("btnStyle btnValue");
    btn3.text("3");
    btnRow3.append(btn3);

    let btnMultiply = $("<button>");
    btnMultiply.addClass("btnStyle btnValue");
    btnMultiply.css({"background-color":"gray", "color":"#000"});
    btnMultiply.text("*");
    btnRow3.append(btnMultiply);

    let btnRow4 = $("<div>").addClass("btnRow1");
    buttonArea.append(btnRow4);

    let btn0 = $("<button>");
    btn0.addClass("btnStyle btnValue");
    btn0.text("0");
    btnRow4.append(btn0);

    let btnPlus = $("<button>");
    btnPlus.addClass("btnStyle btnValue");
    btnPlus.css({"background-color":"gray", "color":"#000","font-size":"20px"});
    btnPlus.text("+");
    btnRow4.append(btnPlus);

    let btnMinus = $("<button>");
    btnMinus.addClass("btnStyle btnValue");
    btnMinus.css({"background-color":"gray", "color":"#000","font-size":"20px"});
    btnMinus.text("-");
    btnRow4.append(btnMinus);

    let btnEqual = $("<button>");
    btnEqual.addClass("btnStyle");
    btnEqual.css({"background-color":"red", "color":"#fff","font-size":"20px"});
    btnEqual.text("=");
    btnRow4.append(btnEqual);

    ////////////////////////// Clear Button Function /////////////////////////

    btnC.click(function(){
        display.val("0");
    });

    ////////////////////////// Buttons Functionality /////////////////////////

    let resultDisplayed = false;

    $(".btnValue").click(function(){
        if(resultDisplayed == true)
        {
            resultDisplayed = false;
            display.val("0");
            display.val($(this).text());

        }
        else
        {
            if(display.val() == 0)
            {
                display.val($(this).text());
            }
            else
            {
                display.val(display.val() + $(this).text());
            }
        }
    });

    btnEqual.click(function(){
        resultDisplayed = true;
        var result;
        try {
            result = (eval((display.val())));
        }

        catch (e) {
                    if (e instanceof SyntaxError) {
                        alert("Error! Resetting values.");
                        display.val("0");
                        // $("#result").val("0");
                    }
                    if (e instanceof TypeError) {
                        alert("Error! Resetting values.");
                        display.val("0");
                        // $("#result").val("0");
                    }
        }

        display.val(result);
    });


});