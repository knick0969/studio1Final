$(document).ready(function(){
        // SHOW ANSWER ON SUPPORT.HTML
        $('.support .showAnswer').click(function(){
            event.preventDefault();
            $(this).closest('.support').find('.text').slideToggle(300)
        });
        
        // CLOSE NOTIFICATION
        $('.notification .close-notification').click(function(){
           $(this).parent().fadeOut(200); 
        });
        
        // ACTIVE/INACTIVE STATE BUTTONS SETTINGS
        $('.settings .line .active').text('ACTIVE');
        $('.settings .line .inactive').text('INACTIVE');
        $('.settings .line .state').click(function(){
            $(this).toggleClass('active inactive'); 
                if ($(this).hasClass('active')) {
                    $(this).text('ACTIVE');
                } else if ($(this).hasClass('inactive')){
                    $(this).text('INACTIVE');
                }
        });
});
