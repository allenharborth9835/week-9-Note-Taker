# Note Taker Starter Code
<img src="https://img.shields.io/badge/license-Unlicensed-blue" alt="Unlicensed">   

 ## Description
  In this project, I had to create a website to take in notes and hold them for the user for review later. I first organized the folders and then added a routes folder for the routes of the website. I divided my routes into two files: an api file and an html file. The html file simply creates a route for the notes page and the index page, both found in the public folder. The api file I first pull in the necessary functions and then create a function to pull in the data from db.json. I then create a route for the notes page to pull in the current notes. The next route creates a unique id then pulls in the body data to create a new note then pulls in the previous list of notes and adds the new note in the list. Then it writes in the data for the db.json file. The next function deletes the note after the delete button is pressed and rewrites the file and updates the notes for the user. I finally made a server file to bring the routes together and creates a server for the web page.  

  ## Table of Contents
  * [Installation](#installation)
  * [Contributions](#contributions)
  * [Usage](#usage)
  * [License](#license)
  * [Contact-Info](#contact-info)
## Installation  

Node must be installed please go to https://nodejs.org/en/ to install node.
After node is installed simply type “npm Install” to install all of the necessary packages needed for this project.


## Contributions

The front end code was given for the project by class
Github repo: https://github.com/coding-boot-camp/miniature-eureka

## Usage
![snapshot](img/snapshot_note_taker.jpg)

This page is great for storing notes. Simply enter the page and type in your commit and click the save button and click on comments on the left to review comments already created.

## License
  <div style="height:300px; width:90%; overflow:auto;">

      This is free and unencumbered software released into the public domain.
    
      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
  </div>
For more information, please refer to [https://unlicense.org](https://unlicense.org)

## Contact-Info
this project was created by Allen D Harborth  
Github(s)[allenharborth9835](https://github.com/allenharborth9835)

get in contact by sending an email at allenharborth9835@gmail.com
