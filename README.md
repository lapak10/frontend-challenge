# FinCompare Front-end Challenge's Solution
>Submitted by - Anand Kumar Chaudhary ( anand.kmk@gmail.com )
## Project Setup
![Final Preview](http://g.recordit.co/KZvmf4yv2w.gif)

### Clone
(Recommended) Clone this repo to your local machine using this command: <br />

`git clone https://github.com/lapak10/frontend-challenge/` <br/>

Or, directly download the zip file from this repo and unzip it on your local machine.


Open your terminal, navigate into the project directory and run:
### `npm install`
This will install all the required npm packages for the project.

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Tools Used
- [ReactJs](https://reactjs.org/) For making Single Page Application and it's User Interface.
- [MDBoostrap](https://mdbootstrap.com/docs/react/layout/overview/) Pre-built, ready to use opensource React Bootstrap components.
- [Ergast API](http://ergast.com) Used as a readonly backend of this application.
- [Visual Studio Code](https://code.visualstudio.com/) My preferred code editor.

## Explanation (My Approach)
As per the challenge statement, we can divide our app into two, High-level components :
- `HomePage Component` => Containing year list (or grid) from 2005 to 2015.
- `SeasonPage Component`=> Containg a list of all races in a single year, also highlights the champion of that year.

Futhermore, we can subdivide these two components into smaller ones and take out common components.
- `Route Component` => Important component which is reponsible for switching between `HomePage` and `SeasonPage` with proper route params.
- `NavBar Component` => MenuBar which will be on top of both the Home page and Season Page and takes optional `year` and `page` `props` which helps determine the title of the page.
- `CountryFlag Component` => A small utility component which helps render country flags taking country name as `prop`
- `YearCard Component` => Single grid component which shows single year button on `HomePage Component` having two required `props` namely `year` and `winnerid` which contains the year to display and that year's champion code.