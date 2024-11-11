$(document).ready(function () {
    console.log("PanCancerAwareApp scripts initialized.");
  
    // Highlight active navigation link
    $("nav a").on("click", function () {
      $("nav a").removeClass("active");
      $(this).addClass("active");
    });
  
    // Smooth scrolling for internal links (if added in the future)
    $("a[href^='#']").on("click", function (event) {
      event.preventDefault();
      const target = $($(this).attr("href"));
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
      }
    });
  
    // General utility functions (can expand as needed)
    function showToast(message, duration = 3000) {
      const toast = $("<div class='toast'></div>").text(message);
      $("body").append(toast);
      toast.fadeIn(400).delay(duration).fadeOut(400, function () {
        $(this).remove();
      });
    }
  
    // Example: Call utility function
    // showToast("Welcome to PanCancerAwareApp!", 5000);
  });
  