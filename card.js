const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// =========================================== 1 ==================================================== //


function findCard(value, suit) {
    for(let i = 0 ; i < cardData.length; i++){
        if((cardData[i]['suit'] === suit) && (cardData[i]['value'] === value)){
            console.log("true");
        }
    }
}

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


function getSuits(cardData) { 
    const cardSuit = [];
    for(let i = 0; i < cardData.length; i++){
        cardSuit.push(cardData[i].suit);
    }
    return cardSuit;
}
/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //


function getSuitCount(cardData) {
            const cardSuit = [];
        for(let i = 0; i < cardData.length; i++){
                cardSuit.push(cardData[i].suit);
        }
        // console.log(cardSuit);
        var heartC = 0;
        var clubC = 0;
        var diamondC = 0;

        for(let i = 0; i < cardSuit.length; i++){
            if(cardSuit[i] === 'heart'){
                heartC += 1;
            } 
            if(cardSuit[i] === 'club'){
                clubC += 1;
            }
            if(cardSuit[i] === 'diamond'){
                diamondC += 1;
            }

        }
        console.log(`heart : ${heartC}`);
        console.log(`club : ${clubC}`);
        console.log(`diamond : ${diamondC}`);
}
/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ============================================== //

function getSuitValues(cardData) {
    // write your code here
}

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/



