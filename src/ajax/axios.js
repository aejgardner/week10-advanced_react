// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer ER9OO2YIiQEj44Okj74Q595RyMiS9H6TnijS5mrLJnLPaCQuRX0hg0LJERWO4pM1BClQMZodvvvD1gJT",
    },

});