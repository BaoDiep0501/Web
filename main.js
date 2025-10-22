// Nav active state (giữ khi đổi trang)
$(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  $(".nav__link").each(function(){
    if($(this).attr("href") === path) $(this).addClass("is-active");
  });

  // Smooth scroll cho các link có data-scroll
  $("[data-scroll]").on("click", function(e){
    const target = $(this).attr("href") || $(this).data("scroll");
    if(target && target.startsWith("#")){
      e.preventDefault();
      $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 500);
    }
  });

  // Back to top
  const $toTop = $(".to-top");
  $(window).on("scroll", ()=> {
    if(window.scrollY > 400) $toTop.addClass("show"); else $toTop.removeClass("show");
  });
  $toTop.on("click", ()=> $("html, body").animate({scrollTop:0}, 500));

  // Validate form liên hệ (đơn giản)
  $("#contactForm").on("submit", function(e){
    e.preventDefault();
    const ok = this.checkValidity();
    $(".form__msg").text(ok ? "Đã gửi! (mẫu – bạn thay logic sau)" : "Vui lòng điền đầy đủ thông tin.");
    if(ok) this.reset();
  });
});
