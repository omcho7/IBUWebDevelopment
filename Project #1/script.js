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