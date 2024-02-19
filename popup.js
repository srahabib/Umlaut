document.getElementById('copySS').addEventListener('click', function(event) {
  copyAndAnimateButton(event.target, 'ß');
});

document.getElementById('copyAE').addEventListener('click', function(event) {
  copyAndAnimateButton(event.target, 'ä');
});

document.getElementById('copyOE').addEventListener('click', function(event) {
  copyAndAnimateButton(event.target, 'ö');
});

document.getElementById('copyUE').addEventListener('click', function(event) {
  copyAndAnimateButton(event.target, 'ü');
});

document.getElementById('copyAEU').addEventListener('click', function(event) {
  copyAndAnimateButton(event.target, 'Ä');
});

document.getElementById('copyOEU').addEventListener('click', function(event) {
  copyAndAnimateButton(event.target, 'Ö');
});

document.getElementById('copyUEU').addEventListener('click', function(event) {
  copyAndAnimateButton(event.target, 'Ü');
});

function copyAndAnimateButton(button, text) {
  copyToClipboard(text);
  button.style.transform = 'scale(0.8)'; // Make the button smaller
  setTimeout(function() {
    button.style.transform = 'scale(1)'; // Revert the button back to normal size
  }, 200); // Adjust the delay as needed
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Copied to clipboard: ' + text);
  }, function(err) {
    console.error('Failed to copy: ', err);
  });
}
