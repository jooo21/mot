$(document).ready(function(){
    var $footer = $("#footer").find(".inner");
    var $footerA = $(".footerA");
    var $footerBtn =$(".footerBtn").find("a");

    $footerA.on("click",function(e){
        e.preventDefault();
        $(this).toggleClass("on");

    })

    $footerBtn.on("click",function(e){
        e.preventDefault();
        $(this).parent().toggleClass("on");

        if($(this).parent().hasClass("on")){
            $footer.addClass("on");
        }else{
            $footer.removeClass("on");
        }
        
    })
});