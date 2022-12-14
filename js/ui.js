$(document).ready(function(){
    $("#container").addClass("start");

	$("nav li").click(function() {
        $("#container").css("max-width", "100%");
        var id = $(this).attr("data-rol");
        $("nav li").removeClass("on");
        $(this).addClass("on");
        
        $(".content").removeClass("prev this next");
        // 클릭 시 가지고 있던 클래스를 모두 지운다.
        $("#" + id).addClass("this").prevAll().addClass("prev");
		//클릭한 메뉴와 매칭 되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev클래스를 지정한다.
        $("#" + id).nextAll().addClass("next");
        // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다.
    });

    // 로고 클릭 시
    $(".logo_box").click(function() {
		$("nav li").removeClass("on");
		$(".content").removeClass("prev this next");
		$("#container").css("max-width", "1200px");
	});
    
    // 롤링 배너 왼쪽
    $(".roll_left").click(function() {
        $(".pj_roll li").eq(0).insertAfter(".pj_roll li:last-child");
    });
    // 롤링 배너 오른쪽
    $(".roll_right").click(function() {
        $(".pj_roll li").eq(-1).insertBefore(".pj_roll li:first-child");
    });

    // FAQ 게시판
    $(".accordio_box ol li").click(function() {
        $(".accordio_box ol li").removeClass("on");
        $(this).addClass("on");
    });
    // 팝업 닫기
    $(".close").click(function() {
        $(".thankyou_message").css("display", "none");
    });
});