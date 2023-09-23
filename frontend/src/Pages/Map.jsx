import { React, useState, useRef, useCallback } from "react";
import ReactMapGl, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
//import Icon from "../assets/download.png";
//import { AiFillStar } from "react-icons/ai";
import Navbar from "../Components/Navbar";
import { Link } from 'react-router-dom';
import ew8 from '../assets/envlogo11-1.png';
import logoFinal from "../assets/logoFinal.png"
import Footer from "../Components/Footer";

const Map = () => {
  const mapRef = useRef();


  const [lng, setLng] = useState(78.078743);
  const [lat, setLat] = useState(21.7679);
  const [lng1, setLng1] = useState(88.403088);
  const [lat1, setLat1] = useState(22.513429);
  const [zoom, setZoom] = useState(3);
  const [showPopup, setShowPopup] = useState(true);

  const stores = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [76.7516309, 28.3631189],
        },
        properties: {
          description:
            '<strong><a href="http://www.truckeroodc.com/www/" target="_blank">Food Stall</a></strong><p> Rating: 3.6</p>',
          // icon: "bar",
          name: "M/s. Green Waves Environmental Solution,",
          address: "Vill.+ P.O.-Jarua, P.S.-Polba, Hoogly-712138",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [76.7516309, 9.3631189],
        },
        properties: {
          description:
            '<strong><a href="http://www.truckeroodc.com/www/" target="_blank">Food Stall</a></strong><p> Rating: 3.6</p>',
          // icon: "bar",
          name: "M/s. Green Waves Environmental Solution,",
          address: "Vill.+ P.O.-Jarua, P.S.-Polba, Hoogly-712138",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [79.7516309, 21.3631189],
        },
        properties: {
          description:
            '<strong><a href="http://www.truckeroodc.com/www/" target="_blank">Food Stall</a></strong><p> Rating: 3.6</p>',
          // icon: "bar",
          name: "M/s. Green Waves Environmental Solution,",
          address: "Vill.+ P.O.-Jarua, P.S.-Polba, Hoogly-712138",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.441464, 22.694254],
        },
        properties: {
          description:
            '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
          // icon: "music",
          name: "M/s Lubrina Recycling Pvt. ltd",
          address:
            "P.O. Bakrahat,P.S. Bishnupur, Distt.-24 Pgs(S), Pin-743377.",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.501464, 22.674254],
        },
        properties: {
          description:
            '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
          // icon: "music",
          name: "M/s. Root Recycling",
          address: "Khasra NO. 911, Village Padli Gurjar, Roorkee, Haridwar",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [83.2114934, 17.7033563],
        },
        properties: {
          description:
            '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
          // icon: "music",
          name: "M/s. P. U. Steel and Electro Process pvt. Ltd",
          address:
            "Ruiya Industrial complex P.O. Patuliar PSKhadarDistt. 24, PGS (N), West Bengal - 750119",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [91.753943, 26.180598],
        },
        properties: {
          description:
            '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
          // icon: "music",
          name: "M/s Old N Furniture 323",
          address:
            "K.P. Mondal Road, PO& PS Budge Budge, Dist-24 PGS(S), Pin-700137",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [72.330638, 23.296945],
        },
        properties: {
          description:
            '<strong><a href="#" target="_blank">Food Stall</a></strong><p> </p>',
          // icon: "music",
          name: "M/s. P. U. Steel and Electro Process pvt. Ltd.,",
          address:
            "Ruiya Industrial complex P.O. Patuliar PSKhadar Distt. 24, PGS (N), West Bengal - 750119",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [73.789471, 15.548569],
        },
        properties: {
          description:
            '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
          // icon: "music",
          name: "M/s. Bhanu Metal Industries",
          address: "RawliMehdood , Hpase-2, Gangotri Enclave, Haridwar",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [91.753943, 26.180598],
        },
        properties: {
          description:
            '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
          // icon: "music",
          name: "M/s J.S. Pigments Pvt",
          address: "ltd, Vill.+ P.O.-Jarua, P.S.-Polba, Hoogly-712138",
          distance: 0,
        },
      },
    ],
  };
  const onSelect = useCallback(({ longitude, latitude }) => {
    console.log(longitude, latitude);
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 1500,
      zoom: 15,
    });
    console.log(mapRef.current);
  }, []);

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    var ans = Math.round(d * 100) / 100;
    // console.log("Distance in meters " + d * 1000);
    return ans;
  }
  return (
    <div>
    <div className=" flex flex-col space-y-28" >
      <div className=" z-[100]">
        <Navbar />
      </div>
     

      <div class=" bg-black w-full flex justify-around z-[50] ">
        <div className=" bg-slate-700 w-[70%] p-1">
          <div className="w-full h-full ">
            <ReactMapGl
              ref={mapRef}
              mapboxAccessToken="pk.eyJ1IjoidGFubWF5MjgwOSIsImEiOiJjbG1kODNydTgxbzFnM2h0ZnQwYmt2eWI0In0.ZCUP3q95o1R3nPyiyeAgqw"
              initialViewState={{
                longitude: lng,
                latitude: lat,
                zoom: zoom,
              }}
              className="w-[50%] h-full"
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              {stores.features.map((store) => (
                <Marker
                  longitude={store.geometry.coordinates[0]}
                  latitude={store.geometry.coordinates[1]}
                  anchor="bottom"
                // offset={PointLike}
                >
                  {/* <img src={Icon} /> */}
                </Marker>
              ))}
              {/* {showPopup && (
          <Popup
            longitude={88.402464}
            latitude={22.574254}
            anchor="bottom"
            onClose={() => setShowPopup(false)}
          >
            You are here
          </Popup>
        )} */}

              <GeolocateControl />
              <FullscreenControl />
              <NavigationControl />
            </ReactMapGl>
          </div>
        </div>
        <div class="bg-slate-200 w-[30%] h-screen flex flex-col shadow-xl overflow-y-scroll example">
          <div class="bg-[#ffffff] p-5 rounded-lg w-full mb-2 h-fit flex justify-center font-semibold text-xl sticky top-0 shadow-xl">
            Nearby Facilites
          </div>
          {stores.features.map((store) => (
            <div class="bg-white p-5 rounded-lg w-full h-fit border-[#F4C82AB] border-opacity-50 mb-2 shadow-md ">
              <div class="flex justify-between">
                <span
                  class="font-semibold text-lg cursor-pointer hover:text-black text-slate-600"
                  onClick={() =>
                    onSelect({
                      longitude: store.geometry.coordinates[0],
                      latitude: store.geometry.coordinates[1],
                    })
                  }
                // onClick={() => flyToStore(store)}
                >
                  {store.properties.name}{" "}
                </span>
              </div>
              <div class="text-base text-slate-500">
                {store.properties.address}{" "}
              </div>
              <div class="text-sm font-medium text-slate-500">
                {getDistanceFromLatLonInKm(
                  lat1,
                  lng1,
                  store.geometry.coordinates[1],
                  store.geometry.coordinates[0]
                )}{" "}
                km away from your location
              </div>
              {/* <Link to='/direction'>
                <span className="flex space-x-4">
                  <a class="text-blue-600 hover:text-blue-800 flex items-center mt-5">
                    Get Directions
                  </a>
                </span>
                </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>

  );
};

export default Map;