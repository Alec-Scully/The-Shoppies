# The Shoppies

Welcome to my submission to the [Shopify](https://www.shopify.com/) Fall 2021 Web Developer Intern Challenge!

### To run this app after cloning:
```javascript
  cd the-shoppies
  npm install
  npm start
```

## Challenge Prompt: 
Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.

## Challenge Technical Requirements:
* Search results should come from [OMDB's API](http://www.omdbapi.com/).
* Each search result should list at least its title, year of release and a button to nominate that film.
* Updates to the search terms should update the result list
* Movies in search results can be added and removed from the nomination list.
* If a search result has already been nominated, disable its nominate button.
* Display a banner when the user has 5 nominations.

## Extras
We were challenged to expand a bit on one or two extras for the site to function better.
For my first extra, I decided to save the nominations into local storage, so they persist even when a user leaves the page.
For my second extra, I noticed the API only returned 10 movies at a time. I added pagination and a tracker of the total amount of search results.

## Connect with Me!
If you'd like to connect with me you can find me here:
* https://www.linkedin.com/in/alec-scully/
* scullyalec@gmail.com
