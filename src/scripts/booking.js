// Simple Flights & Hotels booking simulation

document.addEventListener('DOMContentLoaded', () => {

  const flightForm = document.querySelector('#flights form');
  const hotelForm = document.querySelector('#hotels form');

  flightForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const from = flightForm.querySelector('input[placeholder="City or Airport"]').value;
    const to = flightForm.querySelectorAll('input')[1].value;
    const date = flightForm.querySelector('input[type="date"]').value;
    alert(`Flight booked from ${from} to ${to} on ${date}`);
  });

  hotelForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = hotelForm.querySelector('input[placeholder="Enter City"]').value;
    const checkin = hotelForm.querySelector('input[type="date"]').value;
    const checkout = hotelForm.querySelectorAll('input[type="date"]')[1].value;
    alert(`Hotel booked in ${city} from ${checkin} to ${checkout}`);
  });

});
