$(document).ready(function () {
    console.log("hi");
    $("#bar").click(function () {
        console.log("oki");
        $(".mob-navbar ul").slideToggle()
    })
})