
document.addEventListener("DOMContentLoaded", function(){
var phantu = document.createElement('h1');
phantu.innerHTML = 'xin chào các bạn đoạn text này được render bởi js'
var body = document.getElementById('addelement');
console.log(body);
body.appendChild(phantu);
    var btnclick = document.getElementById('btn-click');
    console.log(btnclick);
    btnclick.onclick = function() {
        // alert('btn vừa click');
        var card = document.getElementsByClassName('card');
        card[0].classList.toggle('dichphai');
    }
}, false);