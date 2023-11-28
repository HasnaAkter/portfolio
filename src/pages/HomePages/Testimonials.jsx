import img1 from "../../assets/pp.jpg";

const Testimonials = () => {
  return (
    <div className="max-w-screen-lg mx-auto ">
         <h3 className="font-bold text-4xl text-center my-3 capitalize">My Clients Reviews</h3>
      <div className="card card-side bg-base-100 shadow-xl md:flex my-10">
        <figure className="md:w-1/3">
          <img
            src={img1}
            alt="Movie"
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body md:w-2/3 p-6">
          <h2 className="card-title font-bold text-4xl md:text-5xl">“</h2>
          <p className="text-base md:text-lg">
            Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi nihil eaque aperiam accusamus,
            aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea
            voluptatem, quisquam sit nisi totam nesciunt veniam.
          </p>
          <br />
          <p className="font-bold text-lg md:text-xl">SM Hena</p>
          <p>CEO of Henaz Group</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;





// import React from 'react';
// import img1 from "../../assets/pp.jpg";

// const testimonialData = [
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   // Add more testimonial items as needed
// ];

// const Testimonials = () => {
//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <h3 className="font-bold text-4xl text-center my-3 capitalize">My Clients Reviews</h3>
//       <div className="flex space-x-4">
//         {testimonialData.map((testimonial) => (
//           <div key={testimonial.id} className="card bg-base-100 shadow-xl w-80">
//             <figure>
//               <img
//                 src={img1}
//                 alt={`Profile of ${testimonial.author}`}
//                 className="object-cover w-full h-32"
//               />
//             </figure>
//             <div className="card-body p-4">
//               <h2 className="card-title font-bold text-4xl">“</h2>
//               <p className="text-base">
//                 {testimonial.content}
//               </p>
//               <br />
//               <p className="font-bold text-lg">{testimonial.author}</p>
//               <p>{testimonial.position}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;






















// import img1 from "../../assets/pp.jpg";

// const testimonialData = [
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   // Add more testimonial items as needed
// ];

// const Testimonials = () => {
//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <h3 className="font-bold text-4xl text-center my-3 capitalize">My Clients Reviews</h3>
//       {testimonialData.map((testimonial) => (
//         <div key={testimonial.id} className="card card-side bg-base-100 shadow-xl md:flex my-10">
//           <figure className="md:w-1/3">
//             <img
//               src={img1}
//               alt={`Profile of ${testimonial.author}`}
//               className="object-cover w-full h-full"
//             />
//           </figure>
//           <div className="card-body md:w-2/3 p-6">
//             <h2 className="card-title font-bold text-4xl md:text-5xl">“</h2>
//             <p className="text-base md:text-lg">
//               {testimonial.content}
//             </p>
//             <br />
//             <p className="font-bold text-lg md:text-xl">{testimonial.author}</p>
//             <p>{testimonial.position}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Testimonials;


















// import img1 from "../../assets/pp.jpg";

// const testimonialData = [
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   {
//     id: 1,
//     author: "SM Hena",
//     position: "CEO of Henaz Group",
//     content: "Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil eaque aperiam accusamus, aut quam ipsa optio, molestias voluptate sequi quos eveniet! Ea voluptatem, quisquam sit nisi totam nesciunt veniam."
//   },
//   // Add more testimonial items as needed
// ];

// const Testimonials = () => {
//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <h3 className="font-bold text-4xl text-center my-3 capitalize">My Clients Reviews</h3>
//       {testimonialData.map((testimonial) => (
//         <div key={testimonial.id} className="card card-side bg-base-100 shadow-xl md:flex my-10">
//           <figure className="md:w-1/3">
//             <img
//               src={img1}
//               alt={`Profile of ${testimonial.author}`}
//               className="object-cover w-full h-full"
//             />
//           </figure>
//           <div className="card-body md:w-2/3 p-6">
//             <h2 className="card-title font-bold text-4xl md:text-5xl">“</h2>
//             <p className="text-base md:text-lg">
//               {testimonial.content}
//             </p>
//             <br />
//             <p className="font-bold text-lg md:text-xl">{testimonial.author}</p>
//             <p>{testimonial.position}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Testimonials;

