$(document).ready(function () {
  // Start Header
  // start banner
  // $(".carousel").carousel({
  //     interval: 1000
  // });
  // end banner
  // End Header

  // Start Info Section
  $(window).scroll(function () {
    let getScrollY = $(this).scrollTop();
    if (getScrollY >= 220) {
      $(".infotexts").addClass("fromlefts");
      $(".infopics").addClass("fromrights");
    } else {
      $(".infotexts").removeClass("fromlefts");
      $(".infopics").removeClass("fromrights");
    }
  });
  // End Info Section

  // Start ADV Section
  $("#videos").click(function(){
    var getmodal = $(this).data("bs-target");
    var videourl = $(this).data("video");
    var videourlwithauto = videourl+"?autoplay=1";
    
    $(getmodal + " iframe").attr("src", videourlwithauto);
    $(getmodal + " .btn-close").click(function(){
      $(getmodal + " iframe").attr("src", videourl);
    })
    $(getmodal).click("hidden.bs.modal",function(){
      $(getmodal + " iframe").attr("src", videourl); 
    })
  })
  // End ADV Section

  // Start Premises Section
  $("#light-slider").lightSlider({
    auto: true,
    item: 4,
    loop: true,
    pauseOnHover: true,
    slideMove: 1,
    speed: 600,
  });
  // End Premises Section

  //  Start Pricing Section
  $(window).scroll(function () {
    let getScroll = $(this).scrollTop();
    if (getScroll >= 2450) {
      $(".cardones").addClass("movelefts");
      $(".cardtwos").addClass("movebottoms");
      $(".cardthrees").addClass("moverights");
    } else {
      $(".cardones").removeClass("movelefts");
      $(".cardtwos").removeClass("movebottoms");
      $(".cardthrees").removeClass("moverights");
    }
  });
  // End Pricing Section

  // Start Join Us Section
  $("#accordion").accordion();
  // End Join Us Section

  $("#getyear").text(new Date().getUTCFullYear());

  $(window).scroll(function () {
    var getprogress = $("#progresses");
    var getprogressval = $("#progressvalues");
    var getScrollTop = $(this).scrollTop();

    // var getscrollheight = $(document).height();
    // var getclientheight = $(window).height();
    // var calcheight = getscrollheight - getclientheight;

    //by js
    var getscrollheight = document.documentElement.scrollHeight;
    var getclientheight = document.documentElement.clientHeight;
    var calcheight = getscrollheight - getclientheight;

    var finalheight = Math.floor((getScrollTop * 100) / calcheight);
    getprogressval.text(`${finalheight}%`);

    getprogress.css({
      background: `conic-gradient(steelblue ${finalheight}%, #eee ${finalheight}%)`,
    });
  });
});
