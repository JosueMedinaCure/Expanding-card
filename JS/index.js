

   const card = document.getElementById('card1');
    card.addEventListener('click', () =>{

    document.getElementById('card2').style.width="80px";
    document.getElementById('card1').style.width="700px";
   })


   const cards = document.getElementById('card2');
    cards.addEventListener('click', () =>{

    document.getElementById('card1').style.width="80px";
    document.getElementById('card2').style.width="700px";
   })
    
 




