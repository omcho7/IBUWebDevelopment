/*To whomever it may regard,
  Eventhough the project requirements do not include adding javascript,
  this part of the code is required for the Cookie Modal to work.
  Basically, it is just needed for the cookie modal to turn on upon launching the site,
  and the accept and close buttons to close the modal upon pressing them.
  thank you for your understanding */
window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('cookieModal'));
    myModal.show();
  }

  // Close the modal when either button is clicked
  document.getElementById('option1').addEventListener('click', function() {
    var myModal = bootstrap.Modal.getInstance(document.getElementById('cookieModal'));
    myModal.hide();
  });

  document.getElementById('option2').addEventListener('click', function() {
    var myModal = bootstrap.Modal.getInstance(document.getElementById('cookieModal'));
    myModal.hide();
  });



  // Get the button for scroll to top
var scrollToTopButton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
