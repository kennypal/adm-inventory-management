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

- Desktop/Tablet

![imageAlt](https://i.imgur.com/x01LzQs.png)

- Mobile

![imageAlt](https://i.imgur.com/pkC6gbb.png)

#### Component Tree

https://whimsical.com/KXyyfGHYzTMo2tmEHVLn2C

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

![imageAlt](https://i.imgur.com/jKVuUGW.png)

<br>

***

## Post-MVP

- Apply Authentication to the app.
- Able to look into more than one hospital.
- Sorting the table for convenience.
- Be able to do more functionality (e.g. adding a device, add users of devices) based on access levels.

***

## Code Showcase

```
const renderHeader = () => {
    let headerElement = [
      "item",
      "description",
      "par level",
      "quantity on hand",
      "",
      "",
    ];

    return headerElement.map((title, index) => {
      return <th key={index}>{title.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return meds.map((med, idx) => {
      return (
        <tr key={med.id}>
          <td>{idx + 1}</td>
          <td>{med.description}</td>
          <td className="par-level">{med.par_level}</td>
          <td className="quantity">{med.quantity_on_hand}</td>
          <td className="delete-button">
            <DeleteMed
              deviceId={deviceId}
              medicationId={med.id}
              meds={meds}
              setMeds={setMeds}
            />
          </td>
          <td className="edit-button">
            <Link to={`/${deviceId}/edit/${med.id}`}>
              <button>Edit</button>
            </Link>
          </td>
        </tr>
      );
    });
```
This is my first time creating a table. When I was thinking about it I thought it was hard. But just referencing it to the source below, it wasn't that bad.

## Code Issues & Resolutions

- Association Type Mismatch Error. I had to change my association between two tables to resolve the issue.
- `Warning: A component is changing a controlled input of type text to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.` To solve this, I had to add a spread operator on my setter inside the handlechange function.
- Accessing IDs since I have nested URLs. This was tricky but it's just a matter of using props and useParams.

## Sources

https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb (For creating the table)