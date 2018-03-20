$(document).ready(function(){
    $('.features-video__img').on('click', function(){
        $('iframe').show();
    })


    $('.calling-comment__arrow-right').on('click', function () {
        currentImg = $('.calling-comment-content__front.cur');
        currentImgIndex = $('.calling-comment-content__front.cur').index();
        nextImgIndex = currentImgIndex + 1;
        nextImg = $('.calling-comment-content__front').eq(nextImgIndex - 1);
        currentImg.fadeOut(500);
        currentImg.removeClass('cur');

        if(nextImgIndex == ($('.calling-comment-content__front:last').index() + 1)){
            $('.calling-comment-content__front').eq(0).fadeIn(500);
            $('.calling-comment-content__front').eq(0).addClass('cur');
        }
        console.log(currentImgIndex)
        nextImg.stop().fadeIn(500)
        nextImg.addClass('cur')
    })

    $('.calling-comment__arrow-left').on('click', function () {
        currentImg = $('.calling-comment-content__front.cur');
        currentImgIndex = $('.calling-comment-content__front.cur').index();
        prevImgIndex = currentImgIndex - 1;
        prevImg = $('.calling-comment-content__front').eq(prevImgIndex - 1);
        currentImg.fadeOut(500);
        currentImg.removeClass('cur');

        prevImg.stop().fadeIn(500);
        prevImg.addClass('cur');
    })
})