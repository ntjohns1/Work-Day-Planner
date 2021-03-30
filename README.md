# Work-Day-Planner

https://ntjohns1.github.io/Work-Day-Planner/


## Description

I began the project by using the setInterval method combined with moment.js to display the clock element at the top of the page that updates dynamically every second. 
To create the hour block elements in the list, I created an array of business hours and ran a for loop using jQuery to create elements from the array.
Then I used conditional statements to compare the current hour in moment.js to the the hours set in my array.
Then I used a series of functions to add event listeners to each line's respective save buttons with functions that save the text content from the text areas on each line to local storage, and I used the getItem method to retrieve local storage on the page load. 
If I had more time to work on this project I'm pretty sure I could have found a way to set the local storage without creating a separate function for each line, and I would make the UI a little neater, but the basic functionality I was expecting was accomplished. 

Technologies Used: HTML, CSS, JavaScript, API


## Usage

![image](https://user-images.githubusercontent.com/77765270/110432208-d43d0180-807c-11eb-8fec-0af49bdf708a.png)


## Credits

https://github.com/ntjohns1


## License

Licensed under the MIT license.
---

