// import React from "react";
// class Slideshow extends React.Component {
//   state = { slidesIndex: 0 };

//   changeIndex = (slides) => {
//     if (this.state.slidesIndex < slides.length - 1) {
//       this.setState({ slidesIndex: this.state.slidesIndex + 1 });
//     } else {
//       this.setState({ slidesIndex: this.state.slidesIndex - 1 });
//     }
//   };
//   render() {
//     let baseUrl = "/Assets/Images/slideshow/";
//     let slides = [`${baseUrl}1.jpg`, `${baseUrl}2.jpg`];
//     setInterval(() => {
//       this.changeIndex(slides);
//     }, 5000);

//     return (
//       <img
//         className="slideshow"
//         alt="slideshow"
//         src={slides[this.state.slidesIndex]}
//       />
//     );
//   }
// }

// export default Slideshow;
