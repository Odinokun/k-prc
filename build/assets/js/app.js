!function t(s,e,i){function a(n,l){if(!e[n]){if(!s[n]){var r="function"==typeof require&&require;if(!l&&r)return r(n,!0);if(o)return o(n,!0);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}var d=e[n]={exports:{}};s[n][0].call(d.exports,function(t){var e=s[n][1][t];return a(e||t)},d,d.exports,t,s,e,i)}return e[n].exports}for(var o="function"==typeof require&&require,n=0;n<i.length;n++)a(i[n]);return a}({1:[function(t,s,e){$(function(){t("./modules/svg4everybody")(),t("./modules/smoothScroll")(),t("./modules/scroll2ancor")(),t("./modules/slick")(),t("./modules/tabs")(),t("./modules/mobileMenu")(),t("./modules/mouse-up")(),t("./modules/masked")(),t("./modules/masonry")(),t("./modules/video")()})},{"./modules/masked":2,"./modules/masonry":3,"./modules/mobileMenu":4,"./modules/mouse-up":5,"./modules/scroll2ancor":6,"./modules/slick":7,"./modules/smoothScroll":8,"./modules/svg4everybody":9,"./modules/tabs":10,"./modules/video":11}],2:[function(t,s,e){s.exports=function(){$(function(){$(".phone-mask").mask("+7 (999) 999-99-99")})}},{}],3:[function(t,s,e){s.exports=function(){function t(){$("#friday__masonry").masonry({columnWidth:".grid-sizer",itemSelector:".friday__item",gutter:0,percentPosition:!0,horizontalOrder:!0})}t(),setTimeout(t,300),$(".friday__filter .btn").on("click",function(){$("#friday__masonry").masonry(),t(),setTimeout(t,300)})}},{}],4:[function(t,s,e){s.exports=function(){$("#burger label").on("click",function(){$(".header-nav__list").toggleClass("active"),$("body").toggleClass("fix")})}},{}],5:[function(t,s,e){s.exports=function(){$(function(){$(window).scroll(function(){$(this).scrollTop()>1400?$(".mouse-icon__wrap--up").addClass("active"):$(".mouse-icon__wrap--up").removeClass("active")}),$(".mouse-icon__wrap--up").click(function(){$("body,html").animate({scrollTop:0},800)})})}},{}],6:[function(t,s,e){s.exports=function(){$(function(){return $("a.mouse-icon__wrap[href*=\\#]").on("click",function(t){t.preventDefault();var s=$(this);$("html, body").stop().animate({scrollTop:$(s.attr("href")).offset().top-0+"px"},1e3)}),!1})}},{}],7:[function(t,s,e){s.exports=function(){$(".top-slider__list").slick({dots:!0,infinite:!0,arrows:!1,speed:1e3,fade:!0,autoplay:!0,cssEase:"linear"}),$(".advantage-slider__list").on("afterChange",function(t,s,e,i){$(".slick-cloned").css("visibility","visible")}),$(".advantage-slider__list").slick({speed:1e3,dots:!1,infinite:!0,speed:600,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1e3,settings:{slidesToShow:2}},{breakpoint:550,settings:{slidesToShow:1}}]}),$(".contacts-slider__list").slick({dots:!1,infinite:!1,arrows:!0,speed:1e3,fade:!0,autoplay:!1,cssEase:"linear"}),$(".autstaffing-tabs__list ").on("init",function(t,s){var e=s.slideCount;e<10&&(e="0"+e),$("#autstaffing-tabs__counter-all").html(e)}),$(".autstaffing-tabs__list").on("afterChange",function(t,s,e,i){var a=e+1;a<10&&(a="0"+a),$("#autstaffing-tabs__counter-tab").html(a)}),$(".autstaffing-tabs__list").slick({arrows:!0,speed:100,fade:!0,autoplay:!1,cssEase:"linear",nextArrow:'<a class="btn btn-bw" href="">Еще</a>',dots:!0,dotsClass:"custom_paging",customPaging:function(t,s){return s+=1,s<10&&(s="0"+s),s}}),$(".autstaffing-advantage-slider__list").on("afterChange",function(t,s,e,i){$(".slick-cloned").css("visibility","visible")}),$(".autstaffing-advantage-slider__list").slick({speed:1e3,dots:!1,infinite:!0,speed:600,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1e3,settings:{slidesToShow:2}},{breakpoint:550,settings:{slidesToShow:1}}]}),$(".about-advantage-slider__list").on("afterChange",function(t,s,e,i){$(".slick-cloned").css("visibility","visible");var a=e+1;$(".about-advantage-slider__slogan").fadeOut(0),$(".about-advantage-slider__slogan-"+a).fadeIn(100)}),$(".about-advantage-slider__list").slick({speed:1e3,dots:!1,infinite:!0,speed:600,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1e3,settings:{slidesToShow:2}},{breakpoint:550,settings:{slidesToShow:1}}]}),$(".safety-advantage-slider__list").on("afterChange",function(t,s,e,i){$(".slick-cloned").css("visibility","visible")}),$(".safety-advantage-slider__list").slick({speed:1e3,dots:!1,infinite:!0,speed:600,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1e3,settings:{slidesToShow:2}},{breakpoint:550,settings:{slidesToShow:1}}]}),$(".safety-tabs__list ").on("init",function(t,s){var e=s.slideCount;e<10&&(e="0"+e),$("#safety-tabs__counter-all").html(e)}),$(".safety-tabs__list").on("afterChange",function(t,s,e,i){var a=e+1;a<10&&(a="0"+a),$("#safety-tabs__counter-tab").html(a)}),$(".safety-tabs__list").slick({arrows:!0,speed:100,fade:!0,autoplay:!1,cssEase:"linear",nextArrow:'<a class="btn btn-bw" href="">Еще</a>',dots:!0,dotsClass:"custom_paging",customPaging:function(t,s){return s+=1,s<10&&(s="0"+s),s}}),$(".autsorsing-advantage-slider__list").on("afterChange",function(t,s,e,i){$(".slick-cloned").css("visibility","visible")}),$(".autsorsing-advantage-slider__list").slick({speed:1e3,dots:!1,infinite:!0,speed:600,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1e3,settings:{slidesToShow:2}},{breakpoint:550,settings:{slidesToShow:1}}]}),$(".autsorsing-tabs__list ").on("init",function(t,s){var e=s.slideCount;e<10&&(e="0"+e),$("#autsorsing-tabs__counter-all").html(e)}),$(".autsorsing-tabs__list").on("afterChange",function(t,s,e,i){var a=e+1;a<10&&(a="0"+a),$("#autsorsing-tabs__counter-tab").html(a)}),$(".autsorsing-tabs__list").slick({arrows:!0,speed:100,fade:!0,autoplay:!1,cssEase:"linear",nextArrow:'<a class="btn btn-bw" href="">Еще</a>',dots:!0,dotsClass:"custom_paging",customPaging:function(t,s){(s+=1)<10&&(s="0"+s)}}),$(".audit-tab-01__slider-list").on("init",function(t,s){var e=s.slideCount;e<10&&(e="0"+e),$("#audit-tab__counter-all").html(e)}),$(".audit-tab-01__slider-list").on("afterChange",function(t,s,e,i){var a=e+1;a<10&&(a="0"+a),$("#audit-tab__counter-tab").html(a)}),$(".audit-tab-01__slider-list").slick({arrows:!0,speed:100,fade:!0,autoplay:!1,cssEase:"linear",nextArrow:'<a class="btn btn-wr" href="">Еще</a>',dots:!1}),$(".audit-tab-03__list ").on("init",function(t,s){var e=s.slideCount;e<10&&(e="0"+e),$("#audit-tab-03__counter-all-01").html(e)}),$(".audit-tab-03__list").on("afterChange",function(t,s,e,i){var a=e+1;a<10&&(a="0"+a),$("#audit-tab-03__counter-tab-01").html(a)}),$(".audit-tab-03__list").slick({arrows:!0,speed:100,fade:!0,autoplay:!1,cssEase:"linear",nextArrow:'<a class="btn btn-bw" href="">Еще</a>',dots:!0,dotsClass:"custom_paging",customPaging:function(t,s){(s+=1)<10&&(s="0"+s)}})}},{}],8:[function(t,s,e){s.exports=function(){$(function(){try{$.browserSelector(),$("html").hasClass("chrome")&&$.smoothScroll()}catch(t){}})}},{}],9:[function(t,s,e){s.exports=function(){$(function(){svg4everybody()})}},{}],10:[function(t,s,e){s.exports=function(){$(".migration-sec__btn-wrap .btn").on("click",function(){var t=$(this).data("tab");$(".btn").removeClass("active"),$(this).addClass("active"),$(".migration-sec__table").fadeOut(0),$(".migration-sec__table-"+t).fadeIn()}),$(".service-sec__tab-item").on("click",function(){var t=$(this).data("tab");$(".service-sec__tab-item").removeClass("active"),$(this).addClass("active"),$(".service-header__cover").fadeOut(0),$(".service-header__cover-"+t).fadeIn()}),$(".vacancies-item__tab-btn").on("click",function(){var t=$(this).data("tab");$(".vacancies-item__tab-btn").removeClass("active"),$(this).addClass("active"),$(".vacancies-item__tab-text").removeClass("active"),$(".vacancies-item__tab-text-"+t).addClass("active")}),$(".audit__tab-btn").on("click",function(){var t=$(this).data("tab");$(".audit__tab-btn").removeClass("active"),$(this).addClass("active"),$(".audit-tab").removeClass("active"),$(".audit-tab-"+t).addClass("active")})}},{}],11:[function(t,s,e){s.exports=function(){$(".article-sec__video-cover").on("click",function(){$(this).addClass("hidden")})}},{}]},{},[1]);