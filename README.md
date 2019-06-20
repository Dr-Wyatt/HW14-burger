# The Burger Palace

## Overview

This is a Heroku App that uses the JAWS DB Add-on to provide a real time database to Add and Devour burgers

## How it works

Adding a new Burger inserts this new burger into the DB with an initial value of 'false' for Devoured. This then populates under the 
"Ordered Burgers" column. 
Clicking the "Devour!" button changes the "Devoured" value to 'true' in the DB. This then moves the burger from the "Ordered Burgers" column to the
"Devoured Burgers" column.
Clicking the "Reorder!" button changes the "Devoured" value to 'false' in the DB. This then moves the burger from the "Devoured Burgers" column to the 
"Ordered Burgers" column.

