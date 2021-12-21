
let arrResult = [];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

function renderColoda(){

    //формируем колоду
    let coloda = [];

    for (let i = 1; i <= 2; i++) {

        for (let j = 1; j<= 8; j++) {
            coloda.push(j);
        }
    }
    coloda = shuffle(coloda);
    //выводим колоду на экран
    const cards = document.querySelector('.cards');
    cards.textContent = '';

    coloda.forEach((element,index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id',index);
        const span = document.createElement('span');
        span.textContent = element;
        card.append(span);
        cards.append(card);
    });
    return cards;
}


const cards = renderColoda();







    //логика игры
const openCard = (item,span)=>{
    item.style.backgroundColor = 'transparent';
    span.style.opacity = 1;
}

const closeCard = (arrCard) =>{
    setTimeout(function(){
        arrCard.forEach((item)=>{
            item.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            item.querySelector('span').style.opacity = 0;
        })
    },1000)
}

const resetIdCard = (arrId) =>{
    const cards = document.querySelectorAll('.card');
    cards[arrId[0]].setAttribute('id', arrId[0]);
    cards[arrId[1]].setAttribute('id', arrId[1]);
}

let count = 0,
arrCards = [],
arrTwoCard = [],
arrIdCard = [];

const btn = document.querySelector('.btn');

cards.addEventListener('click',(event)=>{
    const target = event.target;

    if  ( !target.closest('.card')) return;
    const card = target.closest('.card');
    const span = card.querySelector('span');
    const id = +card.getAttribute('id');
    if (id === -1) {
        alert('Выберите другую карту');
        return;
    }
    if (count < 2 ){
        openCard(card, span);
        card.setAttribute('id', -1);
        count++;
        arrTwoCard.push(span.textContent);
        arrIdCard.push(id);
        arrCards.push(card);

    }
    if (count == 2){
        count = 0;
      
        if (arrTwoCard[0] == arrTwoCard[1]) arrResult.unshift(arrTwoCard);

        else{
            resetIdCard(arrIdCard);
            closeCard(arrCards);
        }
        arrCards = [];
        arrTwoCard = [];
        arrIdCard = [];

    }
    console.log(arrResult);
    if (arrResult.length === 8){
        btn.style.display = 'block';
        cards = renderColoda();
    }


})


