var marka = 'Opel' // Marka değişkeni
var model = 'Astra' // Model değişkeni
var otomatik = 'yes' // Otomatik değişkeni

/* if/else statement */

/*
if (otomatik == 'yes') {
  console.log('Araç Otomatiktir.') // if statement'in içindeki kodları çalıştırır.
} else {
  console.log('Araç otomatik değildir.') // else statement'in içindeki kodları çalıştırır.
}


otomatik = true // Otomatik değişkeni true yapıyoruz.

if (otomatik) {
  console.log(marka + ' ' + model + ' otomatiktir.') // if statement'in içindeki kodları çalıştırır.
}


if (otomatik == 'true') {
  console.log('true') // if statement'in içindeki kodları çalıştırır.
}


if(10 ==='10'){
 console.log('sayılar eşit');
}

*/

/* SWİTCH statement */

// 1 : manuel
// 2 : otomatik
var vites = '2' // Vites değişkeni

if (vites == 1) {
  // Vites değişkeni 1 ise
  console.log('manuel') // Manuel yazdırır.
} else if (vites == '2') {
  // Vites değişkeni 2 ise
  console.log('otomatik') // Otomatik yazdırır.
} else {
  // Vites değişkeni 1 ve 2 değilse
  console.log('Yanlış bir değer') // Yanlış bir değer yazdırır.
}

vites = '3' // Vites değişkeni 3 yapıyoruz.
switch (
  vites // Vites değişkeni ile switch statement'i karşılaştırıyoruz.
) {
  case '1': // Vites değişkeni 1 ise
    console.log('Araç manuel') // Manuel yazdırır.
    break // Switch statement'i kırıyoruz.
  case '2': // Vites değişkeni 2 ise
    console.log('Araç otomatik') // Otomatik yazdırır.
    break // Switch statement'i kırıyoruz.
  default: // Vites değişkeni 1 ve 2 değilse
    console.log('yanlış değer') // Yanlış bir değer yazdırır.
}
