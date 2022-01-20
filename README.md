# MVC-challenge

## Description
  This is a CMS-style blog site where you can view blog posts, add blog posts and comment on blog posts. You also have the ability to edit and delete your blog posts.

  ## Table of Contents
  [Installation](#Installation)  
  [Usage](#Usage)  
  [Contributing](#Contributing)   
  [Testing](#Testing)  
  [Questions](#Questions)  
  [License](#License) 
  
  ## Installation
  1. See Contributing for forking the repo
  2. Once these files are local on your machine
  3. Run 'npm install bcrypt connect-session-sequelize dotenv express express-handlebars express-session mysql2 sequelize' in the terminal to install npm to create the necessary dependencies
  
  ## Usage
  # on local machine
  1. Open command line and type 'mysql -u root -p' to login to MYSQL
  2. Enter password (found in the .env file)
  3. Type 'source db/schema.sql'
  4. Disconnect from MYSQL by typing 'quit' in the command line that you have open for MYSQL
  5. Open bash terminal and type 'npm run seed' to seed the database
  6. Type 'npm start' to connect to the server
  7. Open brower and navigate to http://localhost:3002/
  8. You have options to login, signup, view blog posts, post your own blog post, comment on other blog posts and logout. See steps 2 thru 14 below "on Heroku" for more detail
  9. Once satisfied return to bash and disconnect from the server by typing ctrl + c on your keyboard

  # on Heroku
  1. Follow this link to the application: http://
  2. Press the Login button to login
  3. Press Click here to signup
  4. Fill in fields and press Signup
  5. You can view all blog posts by pressing home in the navigation bar
  6. In the home screen you can click on blog title and you will be taken to the comments page where you can view other coments and leave your own comments
  7. Once you have submitted your own comment it will be listed under the comments section
  8. Click on Dashboard in the navigation bar to be taken to the dashboard page where you can view all of your blog posts. 
  9. Here you can create a new blog post by filling our the fields and pressing create.
  10. Once you've created you own blog post it will be listed under the your posts section
  11. In the your posts section you can click on the title of the blog post and you'll be taken to an edit post screen
  12. In the edit post screen you can edit the title and/or body of the post and press Update. You can also delete the post by pressing the delete button
  13. Lastly press the logout button in the navigation bar to logout
  14. Once you're logged out you can view other blog posts and comments but won't be able to add comments or access the dashboard page to add new blog posts.

  ## Contributing  
  
  ### Add to Project  
  To work on or add to this project follow these steps  
  1. Fork the repository  
  2. Add you changes  
  3. Submit a pull request for approval  
  
  ### Issues
  To add issues in GitHub follow these steps
  1. Click on the issues tab
  2. Click 'New issue' button
  3. Give the issue a title and comments
  4. Click 'Submit new issue' button

  [Click here to view current GitHub Issues](https://github.com/kimberlyamaya/MVC-challenge/issues)   

  ## Testing

  1. Make sure you're logged out
  2. Click on dashboard in the navigation bar, this should route you to the login page because this page is not allows unless you're logged in
  3. Click on home in the navigation bar, click on a title of a blog post, you will see other's comments but won't have the ability to comment on blog posts
  4. Now log in and all of the above should work

  ## Questions

  ### Contact
  For any questions please contact Kimberly Amaya 
  
  Email: [Link to Email](mailto:kimberly_kimbell@yahoo.com)  
  GitHub: [Link to GitHub Account](https://github.com/kimberlyamaya)  
  
  ## License
  This project contains a license from MIT 
  [Click here to see the license](license.md)
  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://mit-license.org/) 