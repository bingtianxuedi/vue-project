window.onload=function(){
    $('.installation').nextAll().hide();
    $(".installation").click(function(){
        if($(this).nextAll().is(':hidden')){
            $(this).nextAll().show();
        }else{
            $(this).nextAll().hide();
        }
    });
}

