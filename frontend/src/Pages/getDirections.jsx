// // import { DirectionsService } from "react-google-maps";
// import { DirectionsService } from "@react-google-maps/api";

// const getDirections = async (origin, destination) => {
//   const directionsService = new DirectionsService();
//   const directionsRequest = {
//     origin,
//     destination,
//     travelMode: "DRIVING",
//   };

//   const directionsResponse = await directionsService.route(directionsRequest);

//   return directionsResponse.routes[0];
// };
// export default getDirections;


import { DirectionsService } from "@react-google-maps/api";

const getDirections = async (origin, destination) => {
  const directionsService = new DirectionsService();
  const directionsRequest = {
    origin,
    destination,
    travelMode: "DRIVING"
  };

  const directionsResponse = await directionsService.route(directionsRequest);

  return directionsResponse.routes[0];
};

export default getDirections;
