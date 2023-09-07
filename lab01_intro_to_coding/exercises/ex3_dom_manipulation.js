/*
  Exercise 3
  DOM manipulation with vanilla JS
*/

// Task
// What does DOM stand for? Document oobject Model 

// Task
// Open the file index.html in AWS Cloud9. Click "Preview" > "Preview File index.html". (Note that you can open it in a new window). 
//What do you see? A pink rectangle and an add element button 
// If you are working locally, navigate to the excercise directory and start a python http server `python3 -m http.server 900`, press Control-c to stop the server 

// Task
// Delete the div with the class rectangle from index.html and refresh the preview.

// Task
// What does the following code do? 
// selects 'viz' and 'button' elements, log information about 'viz', and defines 'addChildToViz' function
//the overall purpose seems to interact with specific things on the DOM
const viz = document.body.querySelector(".viz");
const button = document.body.querySelector("#button");


console.log(viz, viz.children);

const addChildToViz = (data) => {
  const newChild = document.createElement("div");
  newChild.className = "rectangle";
  newChild.style.height = data.petallength * 20 + "px"; // Adjust the scaling as needed
  viz.appendChild(newChild);
};
// Task
// Modify index.html to make this event listener work
// Where can you see the results of the console.log below? How is it different from in previous exercises?
// the dev console in a browser, it is differnt because its ocming from a 'fetch' api 
//
// ////////////////////////////////////////
//
//button.addEventListener("click", addChildToViz); 
//function drawIrisData() {
//   window
//     .fetch("./iris_json.json")
//     .then(data => data.json())
//     .then(data => {
//       console.log(data);
//     });
// }
//
// drawIrisData();
//
////////////////////////////////////////

// Task
// Modify the code above to visualize the Iris dataset in the preview of index.html.
// Feel free to add additional CSS properties in index.html, or using JavaScript, as you see fit.



button.addEventListener("click", () => {
  // Fetch and visualize Iris data
  window
    .fetch("./iris_json.json")
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      data.forEach((item) => {
        addChildToViz(item);
      });
    });
});