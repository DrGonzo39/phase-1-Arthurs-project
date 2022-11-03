# The John Jay Learning Center

My webiste is designed to give you a brief explanation about John Jay, and his importance 
to American History. I chose to keep my text brief, and to have my functionality display 
the names of influential people that John Jay was associated with, and some information 
so that the user can learn more if they want to

# Functionality

I have a db.json here becasue I wrote my own data here instead of using an API.
As my list of names on the website would come from this data, I have a DOMContentLoaded
event that fetches that data, and renders it on an existing <ul> on the page as a list.
the rest of the functions and events exist within this one, as they all interact with names 
on this list. If you drag your mouse over a name on the list, I have a function that
renders the title and author of the best written bio for that person. If you click on the 
name, that person's life years, and a brief description of their relation to John Jay renders
in my box at the bottom of the page.

# Image

The image of Jay in the center of the page is the property of the John Jay Homestead Museum
in Katonah, New York. Which is part of New York State Parks and Recreation, and since it is 
over 100 years old, it is in the public domain!

