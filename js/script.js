const text = document.getElementById("text");
const numbersQuantity = 5;

const rndArray = generateRndArray(numbersQuantity, 1, 100);
printArray(rndArray, text);
setTimeout(() => {
    text.innerHTML = "";
}, 30000);
setTimeout(() => {
    const userArray = intPromptRepeat(numbersQuantity, `Inserisci uno dei ${numbersQuantity} numeri che hai visto`);
    text.innerHTML = (`Hai inserito ${arrayMatch(rndArray, userArray)} dei ${numbersQuantity} numeri visualizzati`);
}, 30500);

///////////////////////////////////////

// Funzione per la generazione di un intero random compreso tra (min) e (max) inclusi
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRndArray(length, min, max) {
    let array = [];
    while (array.length < length) {
        const thisRndNumber = getRndInteger(min, max);
        if (!array.includes(thisRndNumber)) {
            array.push(thisRndNumber);
        }
    }
    return array;
}

function printArray(array, htmlElement) {
    for (let i = 0; i < array.length; i++) {
        htmlElement.innerHTML += `${array[i]} `;
    }
}

function intPromptRepeat (times, phrase) {
    let array = [];
    let insertionIndex = 1;
    let insertionPhrase = `\nInserimento n° ${insertionIndex}`;
    while (array.length < times) {
        const thisUserNumber = parseInt(prompt(phrase + insertionPhrase));
        insertionPhrase = `\nInserimento n° ${insertionIndex}`;
        if (!isNaN(thisUserNumber)) {
            if (!array.includes(thisUserNumber)) {
                array.push(thisUserNumber);
                insertionIndex++;
                insertionPhrase = `\nInserimento n° ${insertionIndex}`;
            } else {
                insertionPhrase += "\nNumero già inserito";
            }
        } else {
            insertionPhrase += "\nDevi inserire un numero";
        }
    }
    return array;
}

function arrayMatch (array1, array2) {
    let matchedElementsArray = [];
    let matchings = 0;
    for (let i1 = 0; i1 < array1.length; i1++) {
        const thisArray1Element = array1[i1];
        for (let i2 = 0; i2 < array2.length; i2++) {
            const thisArray2Element = array2[i2];
            if (thisArray1Element === thisArray2Element && !matchedElementsArray.includes(thisArray2Element)) {
                matchedElementsArray.push(thisArray2Element);
                matchings++;
                break;
            }
        }
    }
    return matchings;
}