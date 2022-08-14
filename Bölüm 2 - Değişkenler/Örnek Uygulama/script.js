var ad = prompt("Adınızı giriniz : ");
var ogrno = prompt("Öğrenci numaranızı giriniz : ");
var cinsiyet = prompt("Cinsiyet : "); //erkek için true, kadın için false
var ders = prompt("Dersi Adı : ");
var not1 = prompt("1. notunuzu giriniz : ");
var not2 = prompt("2. notunuzu giriniz : ");

var ortalama = (Number(not1) + Number(not2)) / 2


console.log(ogrno + " numaralı " + ad + " ("+cinsiyet+")" + " isimli öğrencinin " + ders + " dersinden aldığı ortalama " + ortalama);