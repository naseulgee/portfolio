(function ($) {
    $(function () {


        $('.category-nav ul li').click(function () {
            $('.category-nav ul li').removeClass('on');
            $(this).toggleClass('on');
        });

        $('.category-nav ul li.all').click(function () {
            $('.P_list>ul>li').show(200);
        });
        $('.category-nav ul li.illust').click(function () {
            $('.P_list>ul>li').hide(200);
            $('.P_list>ul>li.illust').show(200);
        });
        $('.category-nav ul li.3Dprinting').click(function () {
            $('.P_list>ul>li').hide(200);
            $('.P_list>ul>li.3Dprinting').show(200);
        });
        $('.category-nav ul li.crafts').click(function () {
            $('.P_list>ul>li').hide(200);
            $('.P_list>ul>li.crafts').show(200);
        });
        $('.category-nav ul li.video').click(function () {
            $('.P_list>ul>li').hide(200);
            $('.P_list>ul>li.video').show(200);
        });

        $('.P_list ul li').click(function () {
            var $ii = $(this).html();
            var $iinext = $(this).prev().html();
            var $iiprev = $(this).next().html();
            $('.pop_wrap').addClass('on');
            $('div.pop_wrap div.monitorwrap div.top div.contentswrap div.contents').html($ii);

            $('div.contentswrap div.next-prev img.next').click(function () {
                $('div.pop_wrap div.monitorwrap div.top div.contentswrap div.contents').html($iinext);
            });
            $('div.contentswrap div.next-prev img.prev').click(function () {
                $('div.pop_wrap div.monitorwrap div.top div.contentswrap div.contents').html($iiprev);
            });
        });
        $('div.contentswrap div.close').click(function () {
            $('.pop_wrap').removeClass('on');
            $('.videoC').remove();
        });
    });

}(jQuery));
