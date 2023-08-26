
/* 
   const card = document.getElementById('card1');
    card.addEventListener('click', () =>{

    document.getElementById('card2').style.width="80px";
    document.getElementById('card1').style.width="700px";
   })
 */

   const cards = document.querySelectorAll('div.cards');

cards.forEach(card => {
  card.addEventListener("click", cambio);
});

function cambio(event) {
  event.target.classList.toggle('card1');
  event.target.classList.toggle('cards');
}

 




