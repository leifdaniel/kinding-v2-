document.getElementById("back-icon").addEventListener("click", () => {
    window.location.href = "/html/root.html";
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
  if (event.target == modal[2]) {
    modal[2].style.display = "none";
  }
  if (event.target == modal[3]) {
    modal[3].style.display = "none";
  }

}

// COPY TEXT TO CLIPBOARD

var copyEmailBtn = document.querySelector('.clipboard');
copyEmailBtn.addEventListener('click', function(event) {
  // Select the email link anchor text
  var emailLink = document.querySelector('.clipboard-text');
  var range = document.createRange();
  range.selectNode(emailLink);
  window.getSelection().addRange(range);
  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy email command was ' + msg);
  } catch(err) {
    console.log('Oops, unable to copy');
  }
  window.getSelection().removeAllRanges();
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
});

// COPY TEXT TO CLIPBOARD -- popup






// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btn[0].onclick = function() {
  modal[0].style.display = "block";
}
btn[1].onclick = function() {
  modal[1].style.display = "block";
}
btn[2].onclick = function() {
  modal[2].style.display = "block";
}
btn[3].onclick = function() {
  modal[3].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal[0].style.display = "none";
}
span[1].onclick = function() {
  modal[1].style.display = "none";
}
span[2].onclick = function() {
  modal[2].style.display = "none";
}
span[3].onclick = function() {
  modal[3].style.display = "none";
}
