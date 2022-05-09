# Em and Leigh's Project

## Basic Story
We want to create an app that makes popular mocktails accessible, displays their ingredient lists, a recipe for mixing the drink, and necessary equipment. We want users to be able to see pictures of all of the drinks, click on a particular drink, and view its recipe. We also want users to be able to search for a particular ingredient and view all drinks that contain that ingredient.

## Core Features of MVP
 - Search Bar
 - Ingredients and equipment display
 - Photos of all mocktails
 - Header, navigation bar
 - Buttons to display drinks by "vibes" or "seasons"
 - Form of some kind that uploads a new drink and persists

## API Data We Will Use
www.thecocktaildb.com/api/
www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=1

## Challenges Expected
We want to fetch all of the non-alcoholic drinks from the Cocktail API, but after fetching their IDs, we will need to run a second fetch() to get all of the actual drink information/ingredients/etc.

## Requirements Met
1. App will include HTML/CSS/JS frontend that accesses data from a public API.
2. App will run on a single page, with no redirects, with a single HTML file.
3. Event listeners will include searching, toggling between drinks when clicked, buttons to bring up a list of filtered drinks.
4. Iterate through all of the mocktails to get their ID, then pull their data by ID.
5. We will be so good at following the coding practices!