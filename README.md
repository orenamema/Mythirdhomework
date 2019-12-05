# Password Generator Homework 

## Introduction

This is a password generator website that can be accessed at index.html.In this assignment I was asked to create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

To create this application I have used several ressources online as well as from the in class material. I have used console.log for the prompts as well as if statements to make sure the conditions were met.

 ![alt text](https://github.com/orenamema/Mythirdhomework/raw/master/password.gif)


There are 3 files:

* `index.html`
* `style.css`
* `script.js`

## Requirements

The user will be prompted to choose from the following password criteria:

* Length must be between 8 and 128 characters
* Character type:
* Special characters 
* Numeric characters
* Lowercase characters
* Uppercase characters 


## Website

Here are the characters available for the password:
```javascript 
    var capS = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
    var lowS = "abcdefghijklmnopqrstuvwxyz";
    var numS = "1234567890";
    var specS = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
```
    
For Loop
  
The following For loop allows the website to generate a random password using the characters mentioned above.
  
  
```javascript 
  for(var i = 0; i < pwLen; i++){
        password = password + userSelection.charAt(Math.floor(Math.random() * Math.floor(userSelection.length - 1)));
    } 
```
    
