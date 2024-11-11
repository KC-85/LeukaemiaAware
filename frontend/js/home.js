$(document).ready(function () {
    console.log("Home page loaded.");
  
    // Event handler for "Learn More" button
    $("#learn-more").on("click", function () {
      alert("Learn more about pancreatic cancer awareness!");
      window.location.href = "research.html"; // Navigate to research page
    });
  
    // Event handler for "Contact Us" button
    $("#contact-us").on("click", function () {
      alert("Contact us via email at support@pancanceraware.com.");
      window.location.href = "profile.html"; // Navigate to profile page
    });
  
    // Example animation using jQuery
    $(".home-page h1").fadeIn(1000).css("color", "#6a1b9a");
  });
  