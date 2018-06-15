$(document).ready(function(){
    var triggers = $('ul.triggers li');
    var images = $('ul.images');
    var lastElem = triggers.length-1;
    var imgWidth = images.width();
    var target;

    triggers.first().addClass('selected');
    
    function sliderResponse(target){
        console.log(target);
        $('.images').stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
        triggers.removeClass('selected').eq(target).addClass('selected');
    }

    triggers.click(function(e){
        if (!$(this).hasClass('selected')){
            target = $(this).index();
            sliderResponse(target);
        };
    });

    $('.gallery_img').on('click', function(){
        $('body').css({'overflow-y': 'hidden'});
        $('.work-modal').addClass('active_modal');
        $('.custom_modal').addClass('active_custom_modal');
    });
    $('.under_modal').on('click', function(){
        $('body').css({'overflow-y': 'scroll'});
        $('.work-modal').removeClass('active_modal');
        $('.custom_modal').removeClass('active_custom_modal');
        $('.images').addClass('hidden').delay(2000);
    });

    // Image Gallery Stuff
    $('.gallery_img').on('click', function(){
        var imageSetId = $(this).data('images');
        $('#' + imageSetId).removeClass('hidden');
        console.log(imageSetId)
    });

    // console.log(imgWidth)
})