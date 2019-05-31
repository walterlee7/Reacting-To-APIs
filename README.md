## React API Fetch - Studio Ghibli

This is a React project to fetches an external API array of objects from the Studio Ghibli website: https://ghibliapi.herokuapp.com/.

The API brings various bits of info from the twenty-one Studio Ghibli movies.

To add movie covers for each movie, each locally saved movie image was converted into an Image URL string. After the external API fetch was completed, an object injection of each movie Image URL was added to the API array, which then was array mapped to display all movies.

Credit given to Joel Venable (https://github.com/JoelVenable) for helping me with the syntax for local image file imports into an Image URL string, and image URL object injection into the fetched API.

To reveal movie info, a click method was added on the img element to reveal info via css line-height and opacity.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

