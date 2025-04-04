$(document).ready(function(){
    $(".fullpage").fullpage({
        controlArrows: false,
        navigation: false,
        onLeave: function(origin, destination, direction, trigger){
            var origin = this;
    
            if(destination.index == 0){
                $(".circle1").removeClass("active");
            }
    
            else if(destination.index == 1){
                $(".circle2").addClass("active");
                $(".p2_background").addClass("active");
                $(".p2_line").addClass("active");
                $(".profile").addClass("active");
                $(".my_pic").addClass("active");
                $(".license").addClass("active");
                $(".work").addClass("active");
                $(".introduce").addClass("active");
                $(".skill").addClass("active");
            }
            else if(destination.index == 2){
                $(".circle3").addClass("active");
                $(".p3_background").addClass("active");
                $(".p3_line").addClass("active");
                $(".artwork").addClass("active");
                $(".category").addClass("active");
                $(".artwork_cap").addClass("active");
                $(".artwork_container").addClass("active");
            }

            if(destination.index != 0){
                $(".circle1").addClass("active");
            }
            if(destination.index != 1){
                $(".circle2").removeClass("active");
                $(".p2_background").removeClass("active");
                $(".p2_line").removeClass("active");
                $(".profile").removeClass("active");
                $(".my_pic").removeClass("active");
                $(".license").removeClass("active");
                $(".work").removeClass("active");
                $(".introduce").removeClass("active");
                $(".skill").removeClass("active");
            }
            if(destination.index != 2){
                $(".circle3").removeClass("active");
                $(".p3_background").removeClass("active");
                $(".p3_line").removeClass("active");
                $(".artwork").removeClass("active");
                $(".category").removeClass("active");
                $(".artwork_cap").removeClass("active");
                $(".artwork_container").removeClass("active");
            }
        }

    });
    // nav 클릭시 섹션 이동
    $(".nav_wrap > ul > li").click(function(){
        var nav_num = $(this).index();
        fullpage_api.moveTo(nav_num + 1);
    });

    // p3 스크롤 막기
    $(".artwork_container").on("mouseenter", function() {
        fullpage_api.setAllowScrolling(false);
    });

    $(".artwork_container").on("mouseleave", function() {
        fullpage_api.setAllowScrolling(true);
    });
});