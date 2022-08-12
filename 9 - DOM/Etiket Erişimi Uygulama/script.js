/*

#1 : id'si todoList olan etiketi seçip liste işaretini görünmez yapın. (list-style : none)

Cevap :
var todolist = document.getElementById('todolist');
todolist.style.listStyleType = 'none';


#2 : Tüm Liste elemanlarının üstünü çiziniz. (text-decoration : line-through)

Cevap :
var listItems = document.querySelectorAll('li');
listItems.forEach(function(item){
    item.style.textDecoration = 'line-through'
});


#3 : Kullanıcının saatine göre gerekli aşamaları işaretleyiniz. Örneğin saat 22:00 iken hazırlığa kadar olan tüm elemanlar işaretlensin.

Cevap :

(new Date().getHours())

*/


var date = new Date();
var hour = date.getHours();
var element;

for(var i = hour; i>=8;i--){
 element = document.getElementById('item_'+i);
 element.style.textDecoration = 'line-through';
 element.querySelector('input').checked = true;
}