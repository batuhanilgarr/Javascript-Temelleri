/* var p = document.getElementsByTagName('p')[0] // p tagunun ilk elemanını alır

p.innerHTML = 'Komple Uygulamalı Web geliştirme' // p tagının içini değiştirir

console.log(p) // <p>Paragraf</p>


var ul = document.querySelector('ul') // querySelector ile ul  elemanlarını alır

ul.textContent = '<li>Liste</li>' // ul tagının içini değiştirir

console.log(ul.textContent) // textContent ile texti alır
*/




var p = document.getElementsByTagName('p')[0] // p tagunun ilk elemanını alır

p.innerHTML = '<b>Komple Uygulamalı Web geliştirme</b>' // p tagının içini değiştirir

var ul = document.querySelector('ul') // querySelector ile ul  elemanlarını alır

ul.innerHTML = '<li>item1</li><li>item2</li><li>item3</li>' // ul tagının içine li elemanlarını ekler değiştirir değiştirir
