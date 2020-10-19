## Overview

_**ADM Inventory Management** is an app that lists medications from an Automated Device Machine (ADM). You can also use this app to set par levels based on the usage of a certain medication from a specific location._

<br>

## MVP

- Gather the medication's description, par level, and quantity on hand with the use of Ruby on Rails.
- Make changes on the inventory by performing CRUD.
- Render data and building the app with React.
- A table will be used to show an inventory of an ADM.
- Styling the app with CSS.

<br>

### Goals

- _Project Pitch and setting up Rails on Monday, October 19._
- _Finish the backend and test, debug, and create the React app on Tuesday, October 20._
- _Create table and render data on Wednesday, October 21._
- _Work on other functionality, debug, and start styling on Thursday, October 22._
- _Continue styling on Friday, October 23._
- _Between Saturday October 24 & Sunday October 25: Finishing touches and maybe one Post MVP._
- _Project Presentation on Monday, October 26._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Creates the app and its functionality._ |
|   React Router   | _Creates links and paths between screens._ |
| Axios | _Gathers data from the backend._ |
|     Ruby on Rails      | _Receives and sends data to/from the frontend._ |
|  CORS  | _API calls._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

![https://whimsical.com/KXyyfGHYzTMo2tmEHVLn2C](url)

#### Component Hierarchy

``` structure

src
|__ App.js
|__ components/
      |__ DeleteMed.jsx
      |__ Table.jsx
      |__ shared
            |__ Layout.jsx
            |__ Header.jsx
            |__ Footer.jsx
|__ screens/
      |__ AddMed.jsx
      |__ DetailMed.jsx
      |__ EditMed.jsx
      |__ Home.jsx
|__ services/
      |__ apiconfig.js
      |__ devices.js
      |__ meds.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| App | functional |   y   |   y   | _The main component. Holds routes._                 |
|    Header    | functional |   n   |   n   | _The header will contain the name of the hospital._               |
|  Home  | functional |   y   |   n   | _Home will contain the list of devices and the table._       |
|   Table    |   functional    |   y   |   n   | _The table will render the inventory of the device._      |
| AddMed | functional |   y   |   y   | _This will add a medication._                 |
| DetailMed | functional |   y   |   y   | _This will show the selected medication._                 |
| EditMed | functional |   y   |   y   | _This will edit the medication's par level._                 |
| DeleteMed | functional |   y   |   y   | _This will delete the medication from the device._                 |
| Layout | functional |   n   |   y   | _This will render the header and the footer._                 |
|    Footer    | functional |   n   |   n   | _The footer will show my name._ |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend    |    H     |     3 hrs      |     hrs     |     hrs    |
| Create React App |    H     |     3 hrs      |      hrs     |     hrs     |
| Create Table    |    M     |     3 hrs      |      hrs     |     hrs    |
| Render Data    |    H     |     2 hr      |      hrs     |     hrs    |
| CRUD    |    H     |     4 hrs      |      hrs     |     hrs    |
| CSS    |    H     |     5 hrs      |      hrs     |     hrs    |
| Debug    |    H     |     3 hrs      |      hrs     |     hrs    |
| Deploy    |    H     |     3 hrs      |      hrs     |     hrs    |
| TOTAL               |          |     26 hrs      |      hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![imageAlt](https://i.imgur.com/8615DRG.png)

<br>

***

## Post-MVP

- Apply Authentication to the app.
- Able to look into more than one hospital.
- Sorting the table for convenience.
- Be able to do more functionality (e.g. adding a device, add users of devices) based on access levels.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
