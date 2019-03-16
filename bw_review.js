"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Emmanuel Cortes Castaneda
   Date: 3.12.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

// Upon loading the page the init function will load up
window.onload = init;

function init() {
      // Will store the span element with the id of stars and a nested img
      var stars = document.querySelectorAll("span#stars img");

      // Will change the cursor style to a pointer while the mouse enters the star range
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

// Function that will light the stars
function lightStars(e) {
      var starNumber = e.target.alt;
      // Will select all of the span element with the id of stars that has an img nested within
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }

      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }

      // Command to display the rating in star
      document.getElementById("rating").value = starNumber + " star(s)";
      // Once the mouse leaves the stars range the function turnOffStars will be ran
      e.target.addEventListener("mouseleave", turnOffStars);
      // Once a click has been detected the event listener will be removed
      e.target.addEventListener("click", function () {
            e.target.removeEventListener("mouseleave", turnOffStars)
      })
}

// Function that will turn off the stars
function turnOffStars(e) {
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }

      document.getElementById("rating").value = "";
}

function updateCount() {

      // This variable will store the value of the comment text area box
      var commentText = document.getElementById("comment").value;
      // Calculate the text
      var charCount = countCharacters(commentText);
      // References the wordCount input box
      var wordCountBox = document.getElementById("wordCount");
      // Displays the value of the characters out of 1000
      wordCount.value = charCount + "/1000";

      // This if else statement will change the background color and the font color depending on the character count
      if (charCount > 1000) {
            wordCountBox.style.color = "white";
            wordCountBox.style.backgroundColor = "red";
      } else {
            wordCountBox.style.color = "black";
            wordCountBox.style.backgroundColor = "white"

      }
}

function countCharacters(textStr) {

}

/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}