// import axios with configuration
import axios from "./axios";

// Use console.log() to output an array with all of your article data from the API:

// axios.get("/articles/17").then(({ data }) => {
//     console.log(data.data)
// });

//Create a new article using axios and then console.log() its ID:

// axios.post("/articles",
//     {
//         title: "Ajax article",
//         content: "Article cooontent",
//         tags: ['Simon', 'Sam', 'Adam']
//     }
// ).then(({ data }) => {
//     console.log(data.data.id)
// });

// Fetch one of your articles from the API and console.log() it:

// axios.get("/articles/99").then(({ data }) => {
//     console.log(data.data)
// });

// Add a new tag to one of your articles and `console.log()` the tags array from the response:

// axios.put("/articles/99",
//     {
//         title: "Ajax article",
//         content: "Article cooontent",
//         tags: ["Simon", "Sam", "Adam", "Jakob"]
//     }).then(({ data }) => console.log(data.data.tags));

// Delete an article and `console.log()` "Deleted" once you get back a response

// axios.delete("/articles/24").then(({ data }) => console.log("Deleted"));

// Add a comment to an article using axios and `console.log()` its ID

// axios.post("/articles/17/comments", {
//     email: "x@y.co.uk",
//     comment: "Parrots",
// }).then(({ data }) => console.log(data.data.id));