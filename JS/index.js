

const cards = document.querySelectorAll('div.cards');

cards.forEach(carta => {
   carta.addEventListener('click',() => {
      removeCard()
   carta.classList.add('active'); 
   })
   
}) //


function removeCard() {
   cards.forEach(cards => {
   cards.classList.remove('active');  
   })
};
