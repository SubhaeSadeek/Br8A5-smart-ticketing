//   apply button funtionality

function discountTitle(percentageDiscount){
    const discountTotalContainer = document.getElementById('discount-total-container');
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'mx-6', 'font-medium', 'text-base','py-3');
  //    discount text header title
   const textTitle = document.createElement('p');
   textTitle.innerText = "Total Discount";
   div.appendChild(textTitle);
   // discount text amount 
   const amountDiscounted = document.createElement('p');
   amountDiscounted.innerText = 'BDT ' + totalCost*percentageDiscount/100;
   div.appendChild(amountDiscounted);
  
   discountTotalContainer.appendChild(div);
}

function inputAreaHidden(){
    const couponArea = document.getElementById('coupon-input-area');
    couponArea.classList.add('hidden');
}
function discountedGrandTotal(percentageDiscount){
   const discountedGrandAmount = totalCost- totalCost*percentageDiscount/100;
   const grandTotalElement = document.getElementById('grand-total-price');
   grandTotalElement.innerText = discountedGrandAmount; 
}