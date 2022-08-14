document.querySelector('a') // a elementi seçiliyor

var a = document.querySelector('a') // a elementi seçiliyor ve a değişkenine atanıyor

a.getAttribute('href') // a elementinin href değeri alınıyor

a.setAttribute('href', 'www.google.com') // a elementinin href değeri değiştiriliyor

a.setAttribute('href', 'https://www.google.com') // a elementinin href değeri değiştiriliyor ve https://www.google.com değeri alınıyor ve https değeri alınıyor

var img_1 = document.querySelectorAll('img') // tüm img elementleri seçiliyor ve img_1 değişkenine atanıyor

var img_1 = document.querySelectorAll('img')[0] // tüm img elementleri seçiliyor ve img_1 değişkenine atanıyor ve 0. indeksli img elementi alınıyor

img_1.setAttribute('src') // img_1 değişkenindeki img elementinin src değeri alınıyor

img_1.setAttribute('src','https://t4.ftcdn.net/jpg/01/98/20/59/240_F_198205913_kttt6OrPW8KJ2QhiPEF2mW3lMxmjvdhV.jpg') // img_1 değişkenindeki img elementinin src değeri değiştiriliyor ve yeni değer alınıyor
