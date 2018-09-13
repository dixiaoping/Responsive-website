/*get website urlparm*/
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	return r != null ? r[2] : "1";
}
$(".navbar-nav li").eq(getQueryString("id")-1).find("a").addClass('nav-activecurrent')
$(document).on("click", ".back-to-top", function() {
  $("body,html").animate({scrollTop: 0}, 200);
});
/*valifited information true */
var obj={
    verifyInput:function(ele){
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if(!myreg.test($(ele).val())) {
            $(".verify-message").css({display:"block"});
            $(ele).val("");
        } else {
            $(".verify-message").css({display:"none"});
        }
    },
    fChkMail:function (ele){
    var reg = /^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z-][0-9a-zA-Z-]+\.){1,4}[a-z]{2,3}$/;
    var regCheck=reg.test($(ele).val());
        if(regCheck){
            $(".verify-emailmessage").css({display:"none"});
            return regCheck;
        }else{
            $(ele).val("");
            $(".verify-emailmessage").css({display:"block"});
        }
   },
    commentLimmit :function(commentWord,commentMax){
        var str=commentWord.value;
        var strlen=str.length;
        if(strlen>commentMax){
            alert("You can enter up to "+commentMax+" words");
            commentWord.value=str.substr(0,commentMax);
        }
    }
};
$(".wx-gz").hover(function(){$(".wx-ewmbottom").css({display: "block"});},function() {$(".wx-ewmbottom").css({display: "none"});});
$(".wx-gz").click(function() {
	if ($(this).attr("data-flag") == "true") {
		$(".wx-ewmbottom").css({display: "block"});
		$(this).attr("data-flag", "false");
	} else {
		$(".wx-ewmbottom").css({display: "none"});
		$(this).attr("data-flag", "true");
	}
});
/*about us*/
$(document).on("click",".commonbtn",function(){
    var index=$(this).index();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".commoncontent").eq(index).css({display:"block"}).addClass("active").siblings().css({display:"none"}).removeClass("active");
})
/*get country name*/
function getCountry(str){
   var endNum=str.indexOf("(");
   if(endNum >0){
     return str.substring(0, endNum);
   }else{
    var endsecond=str.indexOf(":")
    return str.substring(0, endsecond);
   }
}
/*about us*/
$(".aritical-titlelist").click(function() {
    var index = $(this).index();
    $(this).addClass("aritical-titlecolor").siblings().removeClass("aritical-titlecolor");
    $(".artical-con").eq(index).addClass("active").siblings().removeClass("active");
    $("body,html").animate({
        scrollTop: $(".lop-about").offset().top - 50
    }, 300);
})