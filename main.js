$(function() {
  const path = location.pathname.split("/").pop() || "index.html";
  $(".nav__link").each(function() {
    if ($(this).attr("href") === path) $(this).addClass("is-active");
  });

  // Nút "Về đầu trang"
  const $toTop = $(".to-top");
  $(window).on("scroll", () => {
    if (window.scrollY > 400) $toTop.addClass("show");
    else $toTop.removeClass("show");
  });
  $toTop.on("click", () => $("html, body").animate({ scrollTop: 0 }, 500));

  // Form liên hệ mẫu (nếu có)
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    const ok = this.checkValidity();
    $(".form__msg").text(ok ? "Đã gửi (mẫu demo)" : "Vui lòng nhập đủ thông tin");
    if (ok) this.reset();
  });
});
