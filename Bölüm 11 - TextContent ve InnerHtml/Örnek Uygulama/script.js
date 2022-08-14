var models = [
  // models
  { name: 'Mazda', selected: false }, // model
  { name: 'Toyota', selected: true }, // model
  { name: 'Volvo', selected: false }, // model
  { name: 'Renault', selected: false }, // model
  { name: 'Mercedes', selected: true }, // model
  { name: 'BMW', selected: false }, // model
  { name: 'Audi', selected: true }, // model
  { name: 'Fiat', selected: false }, // model
]

var html = document.querySelector('.list-group') // html elementi seçiliyor

models.forEach(function (model) {
  // her model içindeki her bir eleman için işlem yapılıyor

  if (model.selected) {
    var li = '' // içi boş olan li elementi oluşturuluyor
    // eğer model seçili ise

    var li = "<li class='list-group-item active'>" + model.name + '</li>' // her model içindeki her bir elemanın html kodu oluşturuluyor

  } else { // eğer model seçili değil ise

    var li = "<li class='list-group-item'>" + model.name + '</li>' // her model içindeki her bir elemanın html kodu oluşturuluyor

  }

  html.innerHTML += li // html elementine oluşturulan li kodu ekleniyor.
})
