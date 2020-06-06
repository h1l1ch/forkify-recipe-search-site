# Forkify. Website for recipes search.

My second project. To build it I used numerous new (to me) tools. Here is a short list: *Node.js* and *npm*, *AJAX*, *local storages* etc. Also the most advanced features of ES6 JS were used. 


## Launch

* To simply check the **final version** of the app click the *link* above next to the description. 

* **Public code** of the app used for *deployment* is located in "*dist* folder. 

* To launch the **development code** on your computer download *zip file*. Extract in project empty folder. To install all dependencies *open npm* and type:

  ```
  npm init
  ```
  now run the code:
  
  ```
  npm run start
  ```
  You are ready to go and search for your cooking recipes ;)

## What I've learned 

* How to **Setup a Workflow** using *Node.js* and *npm*. Its core dependencies allowed me to optimize my code and not to worry about the server side of my project.  

* First time worked with **AJAX** and implemented **API calls** using *"axios"* library to send promises to the recipes server, fetching data and catching the errors.

* Opened a new (for me) feature called **local storage**. It helps to store *favourite recipes* list information throughout multiple sessions locally in user's browser.

* Thoroughly used all *Next Generation* features of *ES6*, such as: 

    * **Import** & **export** to spit modules of the code into separate distinctive files according to their purposes.
    
    * **Classes**, **arrow functions**, **spread** etc. As many old browsers do not support ES6 JavaScript *babel* helps to solve this problem.
    
## Built With

* [Node.js](https://nodejs.org/en/) - runtime environment used to optimize my code. Npm provided multiple dependencies to make my coding much easier.

* [axios](https://github.com/axios/axios) - dependency used for API calls and HTTP requests.

* [Babel](https://babeljs.io/) - dependency used for converting all ES6 code into ES5 code recognized by older versions of the browsers. 

* [Webpack](https://webpack.js.org/) - core dependency used for compiling the code and bundling all dependecies into four core assets (.js, .css, .html and .png).


## Authors

* **Philip Chislou** - *Final work* - [Philip Chislou](https://github.com/h1l1ch).
* **Jonas Schmedtmann** - *Template* - [Jonas Schmedtmann](https://github.com/jonasschmedtmann).


## Acknowledgments

* Many thanks to **Jonas**! My first online *Udemy teacher* for babysitting me :) and providing a great opportunity to practice the core set of JS skills, which helped me to build a strong foundation of me as a front-end developer. 
