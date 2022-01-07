# UFOs Analysis
## Module 11 

## Project Overview 
### Purpose of Module 11
In this module, we were introduced to JavaScript and expanded our HTML, Bootstrap, and CSS knowledge to build a dynamic webpage. The goal of the module was to use JavaScript to create functions that work together to display data and can create filters to sort the data. We ultimately used JavaScript functions to iterate through an array of objects and append them to a table. We were then tasked with to neatly display the data into an interactive webpage.  

### Overview of Assignment 
For this assignment, we were asked to create an interactive webpage that displays UFO data from a JavaScript array into a table that can be filtered based on user-selected criteria. The filters a user could select in regard to the UFO sighting data are: date, city, state, country, and shape. To accomplish this, we created functions in JavaScript that will build a table, store filters in an object, and filter the table accordingly. The JavaScript code also utilizes the Data-Driven Documents library to react according to the user applied filters. We also compiled our findings into a dynamic webpage that contains an article, an interactive table, and easy to use filters. The website can now be used to provide the user with an in-depth analysis of UFO sightings. 

### Resources 
#### The data for the table came from **__ data.js __** and the 
#### Software :
	- Python 7.22.0
	- VS Code 1.62.1
	
## Results 
The end result of our JavaScript and HTML code is an interactive webpage displaying UFO sighting data. When first opening the webpage, you will first see a “UFO Sightings” link that can be used to reset any filters the user applies. After clicking this link, you are simply brought back to this main page. 
The text circled in red in the following image is the "refresh" link:
<img width="1176" alt="Screen Shot 2022-01-07 at 3 31 35 PM" src="https://user-images.githubusercontent.com/92558842/148614618-7544bc7b-c09e-428a-bfe4-9da1012c949c.png">

Under that link is the title of the webpage as a Jumbotron header, “The Truth Is Out There” with an image taken from NASA. Next, the webpage displays the article “UFO Sightings: Fact or Fancy? Ufologists Weigh In”. Lastly, the webpage displays the filters where a user can simply type in a date, city, state, country, or shape on which they wish to discover UFO sightings pertaining to that search. The table next to the filters will respond to the filters accordingly and if no input is received, the table will display all the UFO Sightings. 
The filetrs a user can use on the webpage and snanpshot of the full table are shown in the image below. 
<img width="1174" alt="Screen Shot 2022-01-07 at 3 32 54 PM" src="https://user-images.githubusercontent.com/92558842/148614726-cc003433-8e85-4059-b315-a0d823c576a0.png">
If for example, the user wishes to search for UFO sightings in Texas, they would simply type "tx" in the state filter as shown in the image below, leave the other filters blank, and the table will respond wtih that change.
<img width="1170" alt="Screen Shot 2022-01-07 at 3 33 43 PM" src="https://user-images.githubusercontent.com/92558842/148614813-94b77300-acf6-44a3-9679-dd98dcc5793f.png">

In essence, someone who wishes to expand their analysis on UFO sightings, could either scroll through the initial table of all findings, or can refine their search buy entering their desired filters (filling all filters is not necessary) so that they are provided with an in-depth visualization of the sightings. The user can then refresh the page with the “UFO Sightings” link at the top of the page or simply delete the filters they previoulsy typed in. 

## Summary 
While the new website is efficient and user friendly, there is always room for improvement. One potential drawback of the new design that is quite easy to fix, is that if you enter all the search criteria given as an example in the search box, no results are given. This leads me to another potenial issue that is out of our control- not having a large dataset. While having all of the filters can potentialy aid in the users UFO research, there are hardly any situations where all filters are necesary for an event. Also, with the new design, the table changes as the user completes their input in the filter search. While this is quick, not all users may like that - many may prefer the previous design with a "Filter Now" button. 
I would recommend to relocate the “UFO Sightings” url and make that into a button named “Refresh Table” so it is more clear where the user can reset the filters. I would also recommend changing the filters from user input to a drop-down menu that the user can select from to ease the filtering process. It could also aid ones analysis if we easily displayed how many results were given for each filter or created an option for the user to save the results. 
