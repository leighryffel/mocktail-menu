//attempt 1 to append to div at top of page

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(res => res.json())
    .then(data => renderDrinks(data))



    function renderDrinks (data) {
        for(const element in data) {
            console.log(data.key['strDrinkThumb'])


        let drinkMenu = document.getElementById('drink-menu')
       let cakeImages = data.strDrinkThumb
        // drinkMenu.append()
        }
    
    }











// Pseudocode Outline:


// define variables
// write fetch request to collect data for all non-alcoholic drinks from cocktail API
// fetch('www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
//     .then(res => res.json())
//     .then(data => getDrinkId(data))



//      function getDrinkId(data) {
//          let innerDrinks = Object.values(data)
//          for(const e in (innerDrinks)) {
//              console.log(e)
//          }
//         }
     
    
    
    
    
    
// write .forEach() function to iterate through the non-alcoholic drinks and find their IDs, store in new array

// write fetch request to collect data for the non-alcoholic IDs from cocktail API

// create event listener to run the fetch functions after the DOM loads

// create function to put information from the fetched mocktails in the browser

// Idea from the database creator:

// Use the filters for non aloholic and create category buttons in your 
// app. Then list the cocktails to browse, then do another lookup on the
// ID once a user clicks on the cocktail for the details.