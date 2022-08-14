// var mavi = document.querySelector('#mavi')

// mavi.addEventListener('click', function () {
//   this.style.display = 'none'
// })

// var kirmizi = document.querySelector('#kirmizi')

// kirmizi.addEventListener('click', function () {
//   this.style.display = 'none'
// })

// var sari = document.querySelector('#sari')

// sari.addEventListener('click', function () {
//   this.style.display = 'none'
// })


// yada



var kutular = document.querySelectorAll(".kutu"); // kutular değişkenine querySelectorAll ile tüm kutuları seçiyoruz

kutular.forEach(function (kutu) { // forEach ile kutuları döngüye sokuyoruz

 kutu.addEventListener('click', function () { // addEventListener is a method that takes two arguments, the event and the function to run

  kutu.style.display = 'none'; // kutu elementinin display değerini none yapıyoruz

 });

});

