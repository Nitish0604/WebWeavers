
// import React, { useState } from "react";
// import { GoogleMap, Marker, DirectionsRenderer,withGoogleMap} from "react-google-maps";
// import getDirections from './getDirections';

// const Directions = withGoogleMap(() =>  {
//   const [directions, setDirections] = useState(null);

//   const handleDirectionsChange = async () => {
//     const origin = { lat: 37.7833, lng: -122.4167 };
//     const destination = { lat: 37.8333, lng: -122.4167 };

//     const directions = await getDirections(origin, destination);

//     setDirections(directions);
//   };

//   return (
//     <GoogleMap
//       defaultZoom={13}
//       center={{ lat: 37.7833, lng: -122.4167 }}
//     >
//       <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//       <Marker position={{ lat: 37.8333, lng: -122.4167 }} />

//       {directions && (
//         <DirectionsRenderer directions={directions} />
//       )}
//     </GoogleMap>
//   );
// });

// export default Directions;



// import React, { useState } from "react";
// import { GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
// import getDirections from "./getDirections";

// const Directions = () => {
//   const [directions, setDirections] = useState(null);

//   const handleDirectionsChange = async () => {
//     const origin = await navigator.geolocation.getCurrentPosition();
//     const destination = { lat: 37.4225, lng: -122.0841 };

//     const directions = await getDirections(origin, destination);

//     setDirections(directions);
//   };

//   return (
//     <GoogleMap
//       defaultZoom={13}
//       center={{ lat: 37.7833, lng: -122.4167 }}
//     >
//       <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//       <Marker position={{ lat: 37.4225, lng: -122.0841 }} />

//       {directions && (
//         <DirectionsRenderer directions={directions} />
//       )}
//     </GoogleMap>
//   );
// };

// export default Directions;


// import React, { useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
//   withGoogleMap,
// } from "react-google-maps";
// import getDirections from "./getDirections";

// const Directions = withGoogleMap(() => {
//   const [directions, setDirections] = useState(null);

//   const handleDirectionsChange = async () => {
//     const origin = await navigator.geolocation.getCurrentPosition();
//     const destination = { lat: 37.4225, lng: -122.0841 };

//     const directions = await getDirections(origin, destination);

//     setDirections(directions);
//   };

//   return (
//     <GoogleMap
//       defaultZoom={13}
//       center={{ lat: 37.7833, lng: -122.4167 }}
//     >
//       <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//       <Marker position={{ lat: 37.4225, lng: -122.0841 }} />

//       {directions && (
//         <DirectionsRenderer directions={directions} />
//       )}
//     </GoogleMap>
//   );
// });
// export default Directions;



// import React, { useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
//   withGoogleMap,
// } from "react-google-maps";
// import getDirections from "./getDirections";

// const Directions = withGoogleMap(() => {
//   const [directions, setDirections] = useState(null);

//   const handleDirectionsChange = async () => {
//     const origin = await navigator.geolocation.getCurrentPosition();
//     const destination = { lat: 37.4225, lng: -122.0841 };

//     const directions = await getDirections(origin, destination);

//     setDirections(directions);
//   };

//   return (
//     <GoogleMap
//       defaultZoom={13}
//       center={{ lat: 37.7833, lng: -122.4167 }}
//       containerElement={<div style={{ height: '400px' }} />}
//       mapElement={<div style={{ height: '100%' }} />}
//     >
//       <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//       <Marker position={{ lat: 37.4225, lng: -122.0841 }} />

//       {directions && (
//         <DirectionsRenderer directions={directions} />
//       )}
//     </GoogleMap>
//   );
// });

// export default Directions;



// import React, { useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
//   withGoogleMap,
// } from "react-google-maps";
// import getDirections from "./getDirections";

// const Directions = withGoogleMap(() => {
//   const [directions, setDirections] = useState(null);

//   const handleDirectionsChange = async () => {
//     const origin = await navigator.geolocation.getCurrentPosition();
//     const destination = { lat: 37.4225, lng: -122.0841 };

//     const directions = await getDirections(origin, destination);

//     setDirections(directions);
//   };

//   return (
//     <div style={{ height: `400px` }}>
//       <GoogleMap
//         defaultZoom={13}
//         center={{ lat: 37.7833, lng: -122.4167 }}
//         // loadingElement={<div style={{ height: `100%` }} />}
//         // containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       >
//         <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//         <Marker position={{ lat: 37.4225, lng: -122.0841 }} />

//         {directions && (
//           <DirectionsRenderer directions={directions} />
//         )}
//       </GoogleMap>
//     </div>
//   );
// });

// export default Directions;


// import React, { useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
//   withGoogleMap,
// } from "react-google-maps";
// import getDirections from "./getDirections";

// const Directions = withGoogleMap(() => {
//   const [directions, setDirections] = useState(null);

//   const handleDirectionsChange = async () => {
//     const origin = await navigator.geolocation.getCurrentPosition();
//     const destination = { lat: 37.4225, lng: -122.0841 };

//     const directions = await getDirections(origin, destination);

//     setDirections(directions);
//   };

//   return (
//     <div style={{ height: `400px` }}>
//       <GoogleMap
//         defaultZoom={13}
//         center={{ lat: 37.7833, lng: -122.4167 }}
//         mapElement={<div style={{ height: `100%` }} />}
//         onMapLoad={() => {
//           // Set the map container element
//           const mapContainer = document.getElementById("map-container");
//           mapContainer.classList.add("map-loaded");
//         }}
//       >
//         <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//         <Marker position={{ lat: 37.4225, lng: -122.0841 }} />

//         {directions && (
//           <DirectionsRenderer directions={directions} />
//         )}
//       </GoogleMap>
//     </div>
//   );
// });

// export default Directions;

// import React, { useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
//   withGoogleMap,
// } from "react-google-maps";
// import getDirections from "./getDirections";

// const Directions = withGoogleMap(() => {
//   const [directions, setDirections] = useState(null);

//   const handleDirectionsChange = async () => {
//     const origin = await navigator.geolocation.getCurrentPosition();
//     const destination = { lat: 37.4225, lng: -122.0841 };

//     const directions = await getDirections(origin, destination);

//     setDirections(directions);
//   };

//   return (
//     <div style={{ height: `400px` }} id="map-container">
//       <GoogleMap
//         defaultZoom={13}
//         center={{ lat: 37.7833, lng: -122.4167 }}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       >
//         <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//         <Marker position={{ lat: 37.4225, lng: -122.0841 }} />

//         {directions && (
//           <DirectionsRenderer directions={directions} />
//         )}
//       </GoogleMap>
//     </div>
//   );
// });

// export default Directions;



// import React, { useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
//   withGoogleMap,
// } from "react-google-maps";
// import getDirections from "./getDirections";

// const Directions = withGoogleMap(() => {
//   const [directions, setDirections] = useState(null);

//   const handleDirectionsChange = async () => {
//     const origin = await navigator.geolocation.getCurrentPosition();
//     const destination = { lat: 37.4225, lng: -122.0841 };

//     const directions = await getDirections(origin, destination);

//     setDirections(directions);
//   };

//   return (
//     <div style={{ height: `400px` }}>
//       <GoogleMap
//         defaultZoom={13}
//         defaultCenter={{ lat: 37.7833, lng: -122.4167 }}
//         containerElement={<div style={{ height: `100%` }} />} // Provide a valid height
//         mapElement={<div style={{ height: `100%` }} />} // Provide a valid height
//       >
//         <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//         <Marker position={{ lat: 37.4225, lng: -122.0841 }} />

//         {directions && (
//           <DirectionsRenderer directions={directions} />
//         )}
//       </GoogleMap>
//     </div>
//   );
// });

// export default Directions;





// import React, { useState, useEffect } from "react";
// import { LoadScript, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
// import getDirections from "./getDirections";

// const Directions = () => {
//   const [directions, setDirections] = useState(null);

//   useEffect(() => {
//     const handleDirectionsChange = async () => {
//       const origin = await navigator.geolocation.getCurrentPosition();
//       const destination = { lat: 37.4225, lng: -122.0841 };

//       const directions = await getDirections(origin, destination);

//       setDirections(directions);
//     };

//     handleDirectionsChange();
//   }, []);

//   return (
//     <div style={{ height: `400px`, width: '100%' }}>
//       <LoadScript
//         googleMapsApiKey="AIzaSyANqKqINknDlf-BmVEMtyiWct0hM_q8tCA" // Replace with your actual API key
//         libraries={["places"]}
//       >
//         <GoogleMap
//           mapContainerStyle={{
//             height: "100%",
//             width: "100%",
//           }}
//           center={{ lat: 37.7833, lng: -122.4167 }}
//           zoom={13}
//         >
//           <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//           <Marker position={{ lat: 37.4225, lng: -122.0841 }} />

//           {directions && (
//             <DirectionsRenderer directions={directions} />
//           )}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default Directions;




// import React, { useState, useEffect } from "react";
// import { LoadScript, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
// import getDirections from "./getDirections";

// const Directions = () => {
//   const [directions, setDirections] = useState(null);

//   useEffect(() => {
//     const handleDirectionsChange = async () => {
//       const successCallback = async (position) => {
//         const origin = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };
//         const destination = { lat: 37.4225, lng: -122.0841 };

//         const directions = await getDirections(origin, destination);

//         setDirections(directions);
//       };

//       const errorCallback = (error) => {
//         console.error(error);
//       };

//       navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//     };

//     handleDirectionsChange();
//   }, []);

//   return (
//     <div style={{ height: `400px`, width: '100%' }}>
//       <LoadScript
//         googleMapsApiKey="AIzaSyANqKqINknDlf-BmVEMtyiWct0hM_q8tCA" // Replace with your actual API key
//         libraries={["places"]}
//       >
//         <GoogleMap
//           mapContainerStyle={{
//             height: "100%",
//             width: "100%",
//           }}
//           center={{ lat: 37.7833, lng: -122.4167 }}
//           zoom={13}
//         >
//           <Marker position={{ lat: 37.7833, lng: -122.4167 }} />
//           <Marker position={{ lat: 37.4225, lng: -122.0841 }} />
//           {directions && (
//             <DirectionsRenderer directions={directions} />
//           )}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };
// export default Directions;



// import React, { useState, useEffect } from "react";
// import { LoadScript, GoogleMap, DirectionsService } from "@react-google-maps/api";
// import getDirections from "./getDirections";

// const DirectionsMap = () => {
//   const [directions, setDirections] = useState(null);

//   useEffect(() => {
//     const handleDirectionsChange = async () => {
//       try {
//         const origin = await getCurrentLocation();
//         const destination = { lat: 88.501464, lng: 22.674254 }; // Replace with actual destination coordinates

//         const directions = await getDirections(origin, destination);

//         setDirections(directions);
//       } catch (error) {
//         console.error("Error fetching directions:", error);
//       }
//     };

//     handleDirectionsChange();
//   }, []);

//   const getCurrentLocation = () => {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const origin = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };
//           resolve(origin);
//         },
//         (error) => {
//           reject(error);
//         }
//       );
//     });
//   };

//   return (
//     <div style={{ height: "500px", width: "100%" }}>
//       <LoadScript
//         googleMapsApiKey="AIzaSyANqKqINknDlf-BmVEMtyiWct0hM_q8tCA" // Replace with your actual API key
//         libraries={["places"]}
//       >
//         <GoogleMap
//           mapContainerStyle={{
//             height: "100%",
//             width: "100%"
//           }}
//           zoom={13}
//           center={directions ? directions.routes[0].legs[0].start_location : null}
//         >
//           {directions && (
//             <DirectionsService
//               options={{
//                 destination: directions.routes[0].legs[0].end_location,
//                 origin: directions.routes[0].legs[0].start_location,
//                 travelMode: "DRIVING"
//               }}
//               callback={(result) => {
//                 if (result !== null) {
//                   setDirections({ ...directions, routes: [result] });
//                 }
//               }}
//             />
//           )}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default DirectionsMap;




// import React, { useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';

// const Directions = () => {
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1IjoidGFubWF5MjgwOSIsImEiOiJjbG1kODNydTgxbzFnM2h0ZnQwYmt2eWI0In0.ZCUP3q95o1R3nPyiyeAgqw'; // Replace with your Mapbox access token

//     const initializeMap = () => {
//       const map = new mapboxgl.Map({
//         container: 'map-container',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-74.5, 40],
//         zoom: 9,
//       });

//       setMap(map);
//     };

//     if (!map) {
//       initializeMap();
//     }

//     return () => {
//       if (map) {
//         map.remove();
//       }
//     };
//   }, [map]);

//   useEffect(() => {
//     if (map) {
//       // Add your code for displaying directions here (using Mapbox Directions API or any other service)
//         map.addControl(new MapboxDirections({
//         accessToken: mapboxgl.accessToken,
//         unit: 'metric',
//         profile: 'mapbox/driving',
//       }));
//     }
//   }, [map]);

//   return <div id="map-container" style={{ height: '400px' }} />;
// };

// export default Directions;



// import React, { useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import axios from 'axios';

// const DirectionsMap = () => {
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1IjoidGFubWF5MjgwOSIsImEiOiJjbG1kODNydTgxbzFnM2h0ZnQwYmt2eWI0In0.ZCUP3q95o1R3nPyiyeAgqw'; // Replace with your Mapbox access token

//     const initializeMap = () => {
//       const map = new mapboxgl.Map({
//         container: 'map-container',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-74.5, 40],
//         zoom: 9,
//       });

//       setMap(map);

//       const getDirections = async () => {
//         try {
//           const origin = await getCurrentLocation();
//           const destination = [-77.03, 38.91]; // Replace with your destination coordinates

//           const response = await axios.get(
//             `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.lng},${origin.lat};${destination[0]},${destination[1]}`,
//             {
//               params: {
//                 access_token: mapboxgl.accessToken,
//               }
//             }
//           );

//           const directionsData = response.data;
//           console.log('Directions Data:', directionsData);
//         } catch (error) {
//           console.error('Error fetching directions:', error);
//         }
//       };

//       getDirections();
//     };

//     if (!map) {
//       initializeMap();
//     }

//     return () => {
//       if (map) {
//         map.remove();
//       }
//     };
//   }, [map]);

//   const getCurrentLocation = () => {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const coordinates = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };
//           resolve(coordinates);
//         },
//         (error) => {
//           reject(error);
//         }
//       );
//     });
//   };

//   return <div id="map-container" style={{ height: '700px' }} />;
// };

// export default DirectionsMap;





// import React, { useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import axios from 'axios';
// import * as turf from '@turf/turf';
// const Directions = () => {
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1IjoidGFubWF5MjgwOSIsImEiOiJjbG1kODNydTgxbzFnM2h0ZnQwYmt2eWI0In0.ZCUP3q95o1R3nPyiyeAgqw'; // Replace with your Mapbox access token

//     const initializeMap = () => {
//       const map = new mapboxgl.Map({
//         container: 'map-container',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-74.5, 40],
//         zoom: 9,
//       });

//       setMap(map);

//       const getDirections = async () => {
//         try {
//           const origin = await getCurrentLocation();
//           const destination = [-77.03, 38.91]; // Replace with your destination coordinates

//           const response = await axios.get(
//             `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.lng},${origin.lat};${destination[0]},${destination[1]}`,
//             {
//               params: {
//                 access_token: mapboxgl.accessToken,
//               }
//             }
//           );

//           const directionsData = response.data;

//           // Draw the route on the map
//           const route = directionsData.routes[0].geometry;
//           const routeData = turf.lineString(route.coordinates);
//           const routeLayer = {
//             id: 'route',
//             type: 'line',
//             source: {
//               type: 'geojson',
//               data: routeData,
//             },
//             layout: {
//               'line-join': 'round',
//               'line-cap': 'round',
//             },
//             paint: {
//               'line-color': '#3887be',
//               'line-width': 5,
//               'line-opacity': 0.75,
//             },
//           };

//           map.addLayer(routeLayer);
//         } catch (error) {
//           console.error('Error fetching directions:', error);
//         }
//       };

//       getDirections();
//     };

//     if (!map) {
//       initializeMap();
//     }

//     return () => {
//       if (map) {
//         map.remove();
//       }
//     };
//   }, [map]);

//   const getCurrentLocation = () => {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const coordinates = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };
//           resolve(coordinates);
//         },
//         (error) => {
//           reject(error);
//         }
//       );
//     });
//   };

//   return <div id="map-container" style={{ height: '700px' }} />;
// };

// export default Directions;



// import React, { useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import axios from 'axios';
// import * as turf from '@turf/turf';

// const Directions = () => {
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     let mapInstance = null;

//     mapboxgl.accessToken = 'pk.eyJ1IjoidGFubWF5MjgwOSIsImEiOiJjbG1kODNydTgxbzFnM2h0ZnQwYmt2eWI0In0.ZCUP3q95o1R3nPyiyeAgqw';

//     const initializeMap = () => {
//       const map = new mapboxgl.Map({
//         container: 'map-container',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-74.5, 40],
//         zoom: 9,
//       });

//       setMap(map);
//       mapInstance = map;

//       const getDirections = async () => {
//         try {
//           const origin = await getCurrentLocation();
//           const destination = [-77.03, 38.91];

//           const response = await axios.get(
//             `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.lng},${origin.lat};${destination[0]},${destination[1]}`,
//             {
//               params: {
//                 access_token: mapboxgl.accessToken,
//               }
//             }
//           );

//           const directionsData = response.data;

//           const route = directionsData.routes[0].geometry;
//           const routeData = turf.lineString(route.coordinates);
//           const routeLayer = {
//             id: 'route',
//             type: 'line',
//             source: {
//               type: 'geojson',
//               data: routeData,
//             },
//             layout: {
//               'line-join': 'round',
//               'line-cap': 'round',
//             },
//             paint: {
//               'line-color': '#3887be',
//               'line-width': 5,
//               'line-opacity': 0.75,
//             },
//           };

//           map.addLayer(routeLayer);
//         } catch (error) {
//           console.error('Error fetching directions:', error);
//         }
//       };

//       getDirections();
//     };

//     if (!map) {
//       initializeMap();
//     }

//     return () => {
//       if (mapInstance) {
//         mapInstance.remove();
//       }
//     };
//   }, [map]);

//   const getCurrentLocation = () => {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const coordinates = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };
//           resolve(coordinates);
//         },
//         (error) => {
//           reject(error);
//         }
//       );
//     });
//   };

//   return <div id="map-container" style={{ height: '700px' }} />;
// };

// export default Directions;




import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import * as turf from '@turf/turf'; // Import Turf.js

const DirectionsMap = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGFubWF5MjgwOSIsImEiOiJjbG1kODNydTgxbzFnM2h0ZnQwYmt2eWI0In0.ZCUP3q95o1R3nPyiyeAgqw'; // Replace with your Mapbox access token

    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: 'map-container',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9,
      });

      setMap(map);

      const getDirections = async () => {
        try {
          const origin = await getCurrentLocation();
          const destination = [-77.03, 38.91]; // Replace with your destination coordinates

          const response = await axios.get(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.lng},${origin.lat};${destination[0]},${destination[1]}`,
            {
              params: {
                access_token: mapboxgl.accessToken,
              }
            }
          );

          const directionsData = response.data;

          // Draw the route on the map
          const route = directionsData.routes[0].geometry;
          const routeData = turf.lineString(route.coordinates);
          const routeLayer = {
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: routeData,
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75,
            },
          };

          map.addLayer(routeLayer);
        } catch (error) {
          console.error('Error fetching directions:', error);
        }
      };

      getDirections();
    };

    if (!map) {
      initializeMap();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          resolve(coordinates);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  return <div id="map-container" style={{ height: '400px' }} />;
};

export default DirectionsMap;
