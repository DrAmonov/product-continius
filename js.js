var elBody = document.querySelector('body');
var elButton = document.querySelector('button');

elButton.addEventListener('click',  function() {
    elBody.classList.toggle('dark');
}); 
