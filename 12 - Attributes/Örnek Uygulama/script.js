// HTML kısmındaki yerleri javascript ile doldurma

var models = [
  {
    name: 'Mazda CX-3',
    image: 'img/mazda.jpg',
    link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion-at',
  },
  {
    name: 'BMW 418d',
    image: 'img/bmw.jpg',
    link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe',
  },
  {
    name: 'Volvo S60',
    image: 'img/volvo.jpg',
    link: 'http://www.arabalar.com.tr/volvo/s60/2018/2-0-d4-advance',
  },
]

setInterval(function () { // setInterval ile her 1 saniye için bir fonksiyon çağırıyoruz

  var index = Math.floor(Math.random() * models.length) // 0 ile 3 arasında rastgele bir sayı üretiyoruz

  var img = document.querySelector('.card-img-top') // img elementi
  var title = document.querySelector('.card-title') // title elementi
  var a = document.querySelector('a') // a elementi

  console.log(index)

  img.setAttribute('src', models[index].image) // img elementine src atributu ekliyoruz

  a.setAttribute('href', models[index].link) // a elementine href atributu ekliyoruz

  title.textContent = models[index].name // title elementine name değeri ekliyoruz

}, 1000) // 1000 milisaniye = 1 saniye
