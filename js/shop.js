let total = 0;
let discountPrice = 0;
function btnClick(saikat){
 const cardItem = saikat.childNodes[3].childNodes[3].innerText
const p = document.createElement('p')
p.innerText = cardItem
const newText = document.getElementById('my-p')
newText.append(p)
const price = saikat.childNodes[3].childNodes[5].innerText.split(' ')[0]
 total = total + parseFloat(price)
 document.getElementById('totalPrice').innerText = total.toFixed(2)

 if (total >= 200) {
    discountPrice = total * 0.2
    document.getElementById('discount-price').innerText = discountPrice.toFixed(2)
 }
 else {
    discountPrice = 0;
    document.getElementById('discount-price').innerText = '0.00';
  }
 const grandTotalShow = total - discountPrice
 document.getElementById('grandTotal').innerText = grandTotalShow.toFixed(2)
 
}