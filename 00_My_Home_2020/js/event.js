( function ( $ ) {
    $(function(){
        $('#list .calendar_wrap table tbody tr td').click(function(){
            var $i = $(this).attr('class');
            $("#list>.list_wrap>ul>li." + $i).addClass('ani').delay(4000) .queue(function(){ $(this).removeClass("ani").dequeue(); });
        });
    });
    
}( jQuery ) );