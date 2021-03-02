// Display when video is loaded
$(window).on("load", function () {
  setTimeout(function () {
    $(".wrapper").css("opacity", "1");
  }, 750);
});

// Scroll reveal implemented on hero section only
// Since billionaires don't really have time to wait for animation
window.sr = ScrollReveal();
sr.reveal(".video-container", {
  duration: 3000,
  origin: "top",
  delay: 700,
});
sr.reveal(".nav", {
  duration: 3000,
  origin: "top",
  delay: 2000,
});
sr.reveal(".header", {
  duration: 3000,
  origin: "bottom",
  delay: 3000,
});
//*  For more animations - Use same timers on $(document).scroll

// Nav menu toggle function
$("#toggle").click(function () {
  $(this).toggleClass("on");
  $("#menucta").toggleClass("active");
});
$("#menucta ul li a").click(function () {
  $(this).toggleClass("on");
  $("#menucta").toggleClass("active");
});
$(".close-btn").click(function () {
  $(this).toggleClass("on");
  $("#menucta").toggleClass("active");
});

// Nav bar on scroll function
$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// Smooth scroll implementation
// Credit: CSS-Tricks
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

// Block form submission
$("#contact-submit").click(function (event) {
  event.preventDefault();
  $("#contact-submit").text("temporalily disabled");
});
