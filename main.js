$(document).ready(function () {
    
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');   
        $('#sidebarCollapse:first-child').css('border: none')
        $('#icon').toggleClass('fa-align-justify fa-times')
    }); 



    // Breakpoint for Large Dropdown Menu 
    $(window).resize(function () {
        if ($(window).width() >= 1200) {

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $(".navbar .dropdown-menu").mouseleave(function () {
                $(this).removeClass("show");
            });
        } 
    });
});