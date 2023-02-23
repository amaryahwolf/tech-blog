# Tech Talk
 
## [Deployed Application](https://akw-tech-talk.herokuapp.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is a full-stack application created so that developers have a space to share their technical and creative writing about development, new advancements and favorite technologies. Users can write, update and delete blog posts, as well as read other developers post and leave comments about their work. This application uses Node.js, Express.js, bcrypt, mySQL, Sequelize, sessions, Handlebars, Bootstrap, and Google Fonts.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To run the application, simply enter the URL in any browser. <br>
To install the application locally, ensure that [Node.js](https://nodejs.org/en/download/) is installed, then clone the repository from Github. Connect a [MySQL workbench](https://www.mysql.com/products/workbench/) to the application through the config/connection.js file, and create a databse in the workbench using the schema.sql file in the db folder. Run the installation script ```npm run install```, followed by the seed script ```npm run seed``` and lastly the start script ```npm run start```. View the application in any browser at http://localhost:3001/.

## Usage
The user is greeted by the homepage filled with blog posts by various developers. Further utilization of the application requires signing up or logging in, which can be done on the Login page. After logging in, the user can create their own blog post, update an existing blog post, or delete a blog post. From the homepage, the user can then click on the title of the blog post and leave a comment.
![Screenshot of application](public/images/tech-talk-screenshot.png)

## Credits
Collaborators: Amaryah Wolf

## License
This application is covered under the MIT license.

## Contributing
[Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Tests
N/A

## Questions
For additional questions, find me on [github](https://github.com/amaryahwolf) or email me at amaryahwolf@gmail.com.