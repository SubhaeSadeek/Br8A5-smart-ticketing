// seat selection manipulation
const seatMaps = document.getElementsByClassName('btn-seat');


//  Total cost --
    let totalCost = 0;
//  Seat number count --
    let totalSeat = 0;
// Seat left ---
    let remainingSeat = 40;
// selectoin controle
let isSelected = false 

for(let i = 0; i < seatMaps.length; i++) {
    let seatMap = seatMaps[i];
    seatMap.addEventListener('click', function(){

      if(totalSeat < 4){
        seatMap.classList.add('text-white');
         seatMap.classList.add('bg-green-500');
         seatMap.setAttribute('disabled', '');
         
        // getting seat number
         let seatName = seatMap.innerText;
        //  appending seat number with seat class and price

         let dataFiledsContainer = document.getElementById('data-fields');
         const bookingDescription = document.createElement('div');
         bookingDescription.classList.add('flex', 'justify-between', 'mx-6','pb-4', 'font-normal', 'text-mygray60', 'text-base');
        // booked seat - appended
         const seatBooked = document.createElement('p');
         seatBooked.innerText = seatName;
         bookingDescription.appendChild(seatBooked);
        // seat class - appended
         const seatClass = document.createElement('p');
         seatClass.innerText = "Economy";
         bookingDescription.appendChild(seatClass);
        // seat price - appended
         const seatPrice = document.createElement('p');
         seatPrice.innerText = "550";
         bookingDescription.appendChild(seatPrice);
        // appending to container to final display
         dataFiledsContainer.appendChild(bookingDescription); 
         dataFiledsContainer.classList.add('mx-6', 'border-b-2', 'border-mygray40')
        // seat left
          remainingSeat -= 1;
          document.getElementById('remaing-seats').innerText = remainingSeat;
        
       // calculating selected seats
       totalSeat +=  1;
       document.getElementById('seat-total-selected').innerText = totalSeat;
          //Total Price
          totalCost += 550;
        document.getElementById('total-price').innerText = totalCost;
      //Grand Total 
      document.getElementById('grand-total-price').innerText = totalCost;
      
      const btnApply = document.getElementById('btn-apply');  
         
      isSelected = true
        
          if (totalSeat === 4) {
            btnApply.removeAttribute('disabled')
          }
          else {
              btnApply.setAttribute('disabled', true)
          }
        }
       else {
           alert("Only 4 seat can be selected at a time!");
       }

    })
  }

// apply button funtionalitiy
  const buttonApply = document.getElementById('btn-apply');
  buttonApply.addEventListener('click', function(){
    const inputCouponApply = document.getElementById('input-coupon-apply');
    const inputCouponValue = inputCouponApply.value;

    if(inputCouponValue === "NEW15"){
      discountTitle(15);
      inputAreaHidden();
      discountedGrandTotal(15);
    }

    else if(inputCouponValue === "Couple 20"){
      discountTitle(20);
      inputAreaHidden();
      discountedGrandTotal(20);
    }

    else{
      alert('Please give the right coupon code!');
    }
  })

// next button functionality






    


            

