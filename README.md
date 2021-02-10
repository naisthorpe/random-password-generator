# random-password-generator

## What

This is a random password generator that uses JavaScript for its functionality.

--------

## Why

This was a homework assignment for Week 3 of my 

-----

## How

I started by establishing undefined variables to store user input, acceptable character lists, and empty arrays to push random characters to. After that I set my user input variable equal to prompts to assign their values. I used a while loop to ensure that the number entered was between 8 and 128.

Using that input, I created conditional statements to push strings of acceptable characters to an empty array if the condition was true. I then joined that array to a single string. From there I created a for loop to generate a random index and used the random index to select and push a random character from the joined string to an empty array of characters. The length of the array was determined by the user input. This array of characters was then joined into a single string and then returned as the final value.

-----

## Site Link

https://naisthorpe.github.io/aisthorpe-portfolio/

------
## Site Image

![Screenshot of site](assets\images\random-password-site-screenshot.png)