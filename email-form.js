var gForm = document.getElementById('gform');
gForm.addEventListener('submit', (e) => {
  setTimeout(function() {
    var subscribeForm = document.getElementById('subscribeForm');
    subscribeForm.setAttribute("style", "-webkit-animation: fadeOut 1s; animation: fadeOut 1s; animation-fill-mode: fowards; ");
    gForm.setAttribute("style", "display: none;");

    subscribeForm.innerHTML = `<h1>email added</h1>`
    subscribeForm.setAttribute("style", "-webkit-animation: fadeIn 1s; animation: fadeIn 1s; animation-fill-mode: forwards; ");
  }, 500);
})