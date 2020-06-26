# Forkify. Website for recipes search!

My second project. To build it I used numerous new (to me) tools. Here is a short list: *Node.js* and *npm*, *AJAX*, *local storages* etc. Also the most advanced features of ES6 JS were used. 

## How to use

* You can **search** recipes by typing *keywords* inside the input field. For example, *pizza*, *broccoli*, *tomato* etc. Press **search** or **enter** button.

* List of the **recipe results** will be displayed *on the left*. **Choose the one** you fell in love with and *its information* will pop *at the center*. Also you can **flip the pages** of recipes list by pressing *page buttons*. 

* Here (inside of the recipe's field) you **can change** *servings number* depending on your needs. 

* Press **"add to shopping list"** button to add ingredients to your *shopping list*. Inside of the *shopping list* you can **delete** ingredients or **change their quantity** by pressing "+" / "-" buttons.

* Also you can **favourite** your recipe by pressing "heart" button, which is placed *to the right*. *Favourited recipes* are placed inside of the *local storage* and are **stored through multiple browser sessions**. Can be accessed **by pointing "heart" symbol** at the top right corner. You can **access** you recipe by *clicking its icon*.

## How to launch

* Need **final version**? Simply check out link of the app. It is *in the header* next to the *description*. 

* **Deployment code** is located in "*public*" folder. 

* To launch **development code** download *zip file* on your computer. Extract it into the empty folder. Then open npm to install all dependencies. Inside project's directory type:

  ```
  npm init
  ```
  now run the code:
  
  ```
  npm run start
  ```
  You are ready to go and search for your cooking recipes ;)
  
## Project structure

* **/dist/** depository includes code ready for deployment.

* **/src/** depository includes development code:

  * **/src/js/** depository includes development JavaScript code: **/src/js/models/** includes files responsible for logic *behind the scenes* and **/src/js/views/** includes files responsible for  information *displayed onto User Interface*.
  
  * **/index.html** - core HTML file.

* **/.babelrc** - file that includes *ruleset*, by which Babel should conduct. 
    
* **/.gitignore** is a list filled with *exceptions for Git*. Once the whole project is commited exceptions will be ignored. 

* **/webpack.config.js** - file includes webpack configurations.
         
* **/.package.json** and **/.package-lock.json** both keep the list of requirements, which allow npm to download all necessary dependencies for further successful project loading. 

## What I've learned 

* How to **Setup a Workflow** using *Node.js* and *npm*. Its core dependencies allowed me to optimize my code and *not to worry about the server side* of my project.  

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
