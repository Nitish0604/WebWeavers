// import React, { useState, useEffect,useRef } from 'react';
// import { ReactDOM } from 'react';
// //import logo from "../assets/Govlogo.png"
// //import logo1 from "../assets/git1.avif"
// //import logo2 from "../assets/mypic.jpeg"





// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;
// function ImageSlider() {
//   const [index, setIndex] = useState(0);
//   const timeoutRef = useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }
  
//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {colors.map((backgroundColor, index) => (
//           <div
//             className="slide"
//             key={index}
//             style={{ backgroundColor }}
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {colors.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ReactDOM.render(<ImageSlider/>, document.getElementById("App"));


// export default ImageSlider;