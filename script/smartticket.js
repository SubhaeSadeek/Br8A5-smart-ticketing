// seat selection manipulation
const seatMaps = document.getElementsByClassName('kbd');


//  Total cost --
    let totalCost = 0;
//  Seat number count --
    let totalSeat = 0;
// Seat left ---
    let remainingSeat = 40;

for(let i = 0; i < seatMaps.length; i++) {
    let seatMap = seatMaps[i];
    seatMap.addEventListener('click', function(){

      if(totalSeat < 4){
         seatMap.classList.add('bg-green-500');
         seatMap.classList.add('text-white');
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
         dataFiledsContainer.classList.add('border-b-2', 'border-mygray40')
        // seat left
          remainingSeat -= 1;
          document.getElementById('remaing-seats').innerText = remainingSeat;
        
       // calculating selected seat Number
       
         totalSeat = totalSeat + 1;
        }
       else {
           alert("Only 4 seat can be");
       }

    })
  }
    


            

