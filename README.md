# Em and Leigh's Project

## Basic Story
We want to create an app that makes popular mocktails accessible, displays their ingredient lists, a recipe for mixing the drink, and drink photo. We want users to be able to see pictures of all of the drinks, click on a particular drink, and view its recipe. We also want users to be able to upload their own mocktail recipe and render that new mocktail in the photo menu.

## Core Features of MVP
 - Upload Form Bar
 - Ingredients and recipe display
 - Photo menu of all mocktails
 - Header with photo/logo

## API Data We Will Use
* www.thecocktaildb.com/api/
* www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
* www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${drink.id}

## Challenges Expected
We want to fetch all of the non-alcoholic drinks from the Cocktail API, but after fetching their IDs, we will need to run a second fetch() to get all of the actual drink information/ingredients/etc.

## Requirements Met
1. App will include HTML/CSS/JS frontend that accesses data from a public API.
2. App will run on a single page, with no redirects, with a single HTML file.
3. Event listeners will include searching, toggling between drinks when clicked, buttons to bring up a list of filtered drinks.
4. Iterate through all of the mocktails to get their ID, then pull their data by ID.
5. We will be so good at following the coding practices!
