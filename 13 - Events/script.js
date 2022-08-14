var btn = document.querySelector('#changetext') // btn elementi
var btn2 = document.querySelector('#changetext2') // btn elementi



var p = document.querySelector('p') // p elementi

btn.addEventListener('click', function () { // addEventListener is a method that takes two arguments, the event and the function to run
  p.textContent = 'Button Click' // p elementine textContent ekliyoruz
})





var h1 = document.querySelector('#title') // h1 elementi

h1.addEventListener('click', changeColor) // addEventListener is a method that takes two arguments, the event and the function to run

btn2.addEventListener('click', changeColor);

function changeColor(){ // changeColor fonksiyonu
  h1.style.color = "red" // h1 elementinin rengini değiştiriyoruz
}


var lis = document.querySelectorAll('li') // ul elementinin içindeki li elementlerini seçiyoruz

for (var i = 0; i < lis.length; i++) { // for döngüsü

 lis[i].addEventListener('click', function () {

   this.style.color = 'red' // this değişkeni ile li elementinin rengini değiştiriyoruz
   this.style.textDecoration = 'line-through' // this değişkeni ile li elementinin çizgili yapıp yapmayacağını belirtiyoruz

 });

}
