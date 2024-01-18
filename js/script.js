document.addEventListener("DOMContentLoaded", function () 

{
    // Elements dari html file
    var kelilingButton = document.getElementById("KelilingButton");
    var luasButton = document.getElementById("LuasButton");
    var menuKeliling = document.getElementById("MenuKeliling");
    var menuLuas = document.getElementById("MenuLuas");

    var inputBar = document.querySelector(".InputBar");
    var buttonBawah = document.querySelector(".ButtonBawah");
    var hButton = document.getElementById("HButton");

    // Display Keliling Menu when Keliling Button is clicked
    kelilingButton.addEventListener("click", function () 
    {
        menuKeliling.style.display = "block";
        menuLuas.style.display = "none";
        inputBar.style.display = "block";
        buttonBawah.style.display = "block";
        hButton.style.display = "block";
        lastButtonClicked = "keliling";
    });

    // Display Luas Menu when Luas Button is clicked
    luasButton.addEventListener("click", function () 
    {
        menuKeliling.style.display = "none";
        menuLuas.style.display = "block";
        inputBar.style.display = "block";
        buttonBawah.style.display = "block";
        hButton.style.display = "block";
        lastButtonClicked = "luas"
    });

});
