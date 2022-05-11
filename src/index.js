// define global variables
const drinkImageMenu = document.querySelector('#drink-menu');

const drinkTitle = document.querySelector('.name')
const drinksImage = document.querySelector('.detail-image')
const drinkInstructions = document.getElementById('recipe-display')
const drinkIngredientsUl = document.querySelector('#ingredients-list')

const randomButton = document.querySelector("#random-button");

const userInputMocktail = document.getElementById("add-new-form");
const userInputName = document.querySelector('#new-name');
const userInputImage = document.querySelector('#new-image');
const userInputIngredients = document.querySelector('#new-ingredients');
const userInputInstructions = document.querySelector('#new-instructions');

// event listener to fetch starting mocktail list, set up random and submit buttons
document.addEventListener('DOMContentLoaded', function() {
    fetchRandomMocktail();
    fetchMocktails();
    randomButton.addEventListener('click', fetchRandomMocktail);
    userInputMocktail.addEventListener('submit', createNewMocktail);
})

// array of all mocktail ID numbers (manually created from API)
const mocktailArray = [12560, 12562, 12862, 15106, 12710, 12564, 12708, 12654, 12656, 12658, 12572, 12730, 12732, 12734, 17108, 12890, 12736, 12668, 12768, 12670, 12672, 12674, 12712, 12954, 12738, 12770, 17176, 12688, 12720, 12714, 12690, 12698, 12696, 12692, 12694, 12702, 12704, 12716, 12774, 12776, 12744, 12746, 12748, 12618, 12718, 15092, 12630, 12750, 13032, 12780, 13036, 12722, 12724, 12782, 12784, 12786, 12726, 12728];

// fetch function to pick a random mocktail to display on page
function fetchRandomMocktail() {
    let rand = Math.floor(Math.random()*mocktailArray.length);
    let randValue = mocktailArray[rand];
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${randValue}`)
    // fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => renderDrink(data))
}

// fetch function to get all mocktails
function fetchMocktails(){ 
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(res => res.json())
    .then(data => addDrinkToMenu(data))
}

// function to render one featured mocktail in the browser
function renderDrink(data) {
    let drinksArr = data
    drinkTitle.innerHTML = drinksArr.drinks[0].strDrink

    let drinkImage = drinksArr.drinks[0].strDrinkThumb
    drinksImage.src = drinkImage

    let drinkInst = drinksArr.drinks[0].strInstructions
    drinkInstructions.innerHTML = drinkInst

    createIngredients(data)
}

// function to iterate through ingredients and measurements, and display them in browser
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

// function to append all fetched mocktails to the photo menu
function addDrinkToMenu(data) {
    let drinksObj = Object.values(data);
    let nestedDrinks = drinksObj[0];
    for (let i = 0; i < nestedDrinks.length; i++) { 
        const newImg = document.createElement('img');
        newImg.className = "menu-image";
        newImg.src = nestedDrinks[i].strDrinkThumb;
        drinkImageMenu.appendChild(newImg);
        newImg.idDrink = nestedDrinks[i].idDrink;
        newImg.addEventListener('click', () => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${newImg.idDrink}`)
            .then(res => res.json())
            .then(data => renderDrink(data))
        })
    }
};

// function to create a mocktail from user input after form is submitted
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

// function to create a new picture in the menu from the user submission
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

// function to put the user's drink in the browser if its new photo is clicked
function featureUserDrink(data){
    drinkTitle.innerHTML = data.strDrink
    drinksImage.src = data.strDrinkThumb
    drinkInstructions.innerHTML = data.strInstructions
}