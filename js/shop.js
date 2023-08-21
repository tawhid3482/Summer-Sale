let total = 0;
let discountPrice = 0;
let cardItemNumber = 1;

function btnClick(saikat) {
   const cardItem = saikat.childNodes[3].childNodes[3].innerText;
   const p = document.createElement('p');
   p.innerText = `${cardItemNumber}. ${cardItem}`;
   cardItemNumber++;
   const newText = document.getElementById('my-p');
   newText.append(p);
   const price = saikat.childNodes[3].childNodes[5].innerText.split(' ')[0];
   total = total + parseFloat(price);
   const applyButton = document.getElementById('btn-1');

   if (total >= 200) {
      applyButton.removeAttribute('disabled');
   }
   else {
      applyButton.setAttribute('disabled', true);
   }
   const makePur = document.getElementById('make-purchase-btn')

   if (total >= 1) {
      makePur.removeAttribute('disabled')
   }
   else {
      makePur.setAttribute('disabled', true)
   }

   document.getElementById('totalPrice').innerText = total.toFixed(2);
}

document.getElementById('btn-1').addEventListener('click', function () {
   const input1 = document.getElementById('input-1').value;

   if (input1 === 'SELL200') {
      discountPrice = total * 0.2;
      document.getElementById('discount-price').innerText = discountPrice.toFixed(2);

      const grandTotalShow = total - discountPrice;
      document.getElementById('grandTotal').innerText = grandTotalShow.toFixed(2);
   }
   else {
      discountPrice = 0;
      document.getElementById('discount-price').innerText = '0.00';
   }
});

function resetBtn() {
   document.getElementById('btn-3');
   window.location.href = 'index.html';
}
