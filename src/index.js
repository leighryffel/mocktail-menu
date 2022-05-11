// define global variables
const drinkImageMenu = document.querySelector('#drink-menu');

const userInputMocktail = document.getElementById("add-new-form");
const userInputName = document.querySelector('#new-name');
const userInputImage = document.querySelector('#new-image');
const userInputIngredients = document.querySelector('#new-ingredients');
const userInputInstructions = document.querySelector('#new-instructions');

const randomButton = document.querySelector("#random-button");

const drinkTitle = document.querySelector('.name')
const drinksImage = document.querySelector('.detail-image')
const drinkInstructions = document.getElementById('recipe-display')
const drinkIngredientsUl = document.querySelector('#ingredients-list')


// event listener to fetch starting cocktail and mocktail list
// event listeners to set up submit button and random button
document.addEventListener('DOMContentLoaded', function() {
    fetchRandomCocktail();
    fetchMocktails();
    userInputMocktail.addEventListener('submit', createNewMocktail);
    randomButton.addEventListener('click', fetchRandomCocktail);
})

// fetch function for random cocktail to display on page
function fetchRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => renderDrink(data))
}

// fetch function for all mocktails
function fetchMocktails(){ 
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(res => res.json())
    .then(data => addDrinkToMenu(data))
}

function renderDrink(data) {
    let drinksArr = data
    drinkTitle.innerHTML = drinksArr.drinks[0].strDrink

    let drinkImage = drinksArr.drinks[0].strDrinkThumb
    drinksImage.src = drinkImage

    let drinkInst = drinksArr.drinks[0].strInstructions
    drinkInstructions.innerHTML = drinkInst

    createIngredients(data)
}

function createIngredients(data){
    drinkIngredientsUl.innerHTML=""
    for (i = 1; i < 16; i ++) {
        newLi = document.createElement('li');
        const drinkIng = data.drinks[0][`strIngredient${i}`];
        const drinkMeasure = data.drinks[0][`strMeasure${i}`];
        if (drinkIng === " " || drinkIng === "" || drinkMeasure === " " || drinkMeasure === "") {
            newLi.innerHTML = ""
        } else if(drinkIng !== null && drinkMeasure !== null){
            newLi.textContent = drinkMeasure + " " + drinkIng;
            drinkIngredientsUl.append(newLi);
        } else if (drinkIng !== null) {
            newLi.innerHTML = ""
        }
    }
}

    // const drinkIng1 = data.drinks[0].strIngredient1
    // const drinkMeasure1 = data.drinks[0].strMeasure1
    // newLi = document.createElement('li')
    // if (drinkMeasure1 !== null && drinkIng1 !== null) {
    //     newLi.textContent = `${drinkIng1}, ${drinkMeasure1}`;
    //     drinkIngredientsUl.append(newLi);
    // } else if (drinkIng1 !== null){
    //     newLi.textContent = drinkIng1
    //     drinkIngredientsUl.append(newLi)
    // } else {
    //     newLi.innerHTML = ""
    // }

//     const drinkIng2 = data.drinks[0].strIngredient2
//     const drinkMeasure2 = data.drinks[0].strMeasure2
//     newLi = document.createElement('li')
//     if (drinkMeasure2 !== null && drinkIng2 !== null) {
//         newLi.textContent = `${drinkIng2}, ${drinkMeasure2}`
//         drinkIngredientsUl.append(newLi)
//     } else if (drinkIng2 !== null){
//         newLi.textContent = drinkIng2
//         drinkIngredientsUl.append(newLi)
//     } else {
//         newLi.innerHTML = ""
//     }

//     const drinkIng3 = data.drinks[0].strIngredient3
//     const drinkMeasure3 = data.drinks[0].strMeasure3
//     newLi = document.createElement('li')
//     if (drinkMeasure3 !== null && drinkIng3 !== null) {
//         newLi.textContent = `${drinkIng3}, ${drinkMeasure3}`
//         drinkIngredientsUl.append(newLi)
//     } else if (drinkIng3 !== null){
//         newLi.textContent = drinkIng3
//         drinkIngredientsUl.append(newLi)
//     } else {
//         newLi.innerHTML = ""
//     }

//     const drinkIng4 = data.drinks[0].strIngredient4
//     const drinkMeasure4 = data.drinks[0].strMeasure4
//     newLi = document.createElement('li')
//     if (drinkMeasure4 !== null && drinkIng4 !== null) {
//         newLi.textContent = `${drinkIng4}, ${drinkMeasure4}`
//         drinkIngredientsUl.append(newLi)
//     } else if (drinkIng4 !== null){
//         newLi.textContent = drinkIng4
//         drinkIngredientsUl.append(newLi)
//     } else {
//         newLi.innerHTML = ""
//     }

//     const drinkIng5 = data.drinks[0].strIngredient5
//     const drinkMeasure5 = data.drinks[0].strMeasure5
//     newLi = document.createElement('li')
//     if (drinkMeasure5 !== null && drinkIng5 !== null) {
//         newLi.textContent = `${drinkIng5}, ${drinkMeasure5}`
//         drinkIngredientsUl.append(newLi)
//     } else if (drinkIng5 !== null){
//         newLi.textContent = drinkIng5
//         drinkIngredientsUl.append(newLi)
//     } else {
//         newLi.innerHTML = ""
//     }
//     const drinkIng6 = data.drinks[0].strIngredient6
//     const drinkMeasure6 = data.drinks[0].strMeasure6
//     newLi = document.createElement('li')
//     if (drinkMeasure6 !== null && drinkIng6 !== null) {
//         newLi.textContent = `${drinkIng6}, ${drinkMeasure6}`
//         drinkIngredientsUl.append(newLi)
//     } else if (drinkIng6 !== null){
//         newLi.textContent = drinkIng6
//         drinkIngredientsUl.append(newLi)
//     } else {
//         newLi.innerHTML = ""
//     }
// }

function addDrinkToMenu(data) {
    let drinksObj = Object.values(data);
    let nestedDrinks = drinksObj[0];
    for (let i = 0; i < nestedDrinks.length; i++) { 
        const newImg = document.createElement('img');
        newImg.className = "menu-image";
        newImg.src = nestedDrinks[i].strDrinkThumb;
        drinkImageMenu.appendChild(newImg);
        newImg.idDrink = nestedDrinks[i].idDrink;
        // console.log(newImg.idDrink)
        newImg.addEventListener('click', () => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${newImg.idDrink}`)
            .then(res => res.json())
            .then(data => renderDrink(data))
        })
    }
};

const createNewMocktail = event => {
    event.preventDefault();
    const userInputMocktail = {
        "strDrink": userInputName.value,
        "strIngredient1": userInputIngredients.value,
        "strDrinkThumb": userInputImage.value,
        "strInstructions": userInputInstructions.value,
        "idDrink" : (Math.random(0))*100
    }
    if (userInputName.value) {
        addUserDrink(userInputMocktail)
    }
}

function addUserDrink(data) {
    const newImg = document.createElement('img');
    newImg.className = "menu-image";
    newImg.src = data.strDrinkThumb;
    drinkImageMenu.prepend(newImg);
    userInputName.value = ""
    userInputImage.value = ""
    userInputIngredients.value = ""
    userInputInstructions.value = ""
}

function featureUserDrink(data){
    drinkTitle.innerHTML = data.strDrink
    drinksImage.src = data.strDrinkThumb
    drinkInstructions.innerHTML = data.strInstructions
}