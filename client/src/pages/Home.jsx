
// import Lottie from 'lottie-react';
// import Animation from "./myani.json";
// // import React, { useState, useEffect } from "react";

// import { Analytics } from "../../components/Analytics";

// export const Home = () => {
// //   useEffect(()=>{
// //     document.title="Rider Infinity"
// //   },[]);
//     return (
//       <>
//         <main>
//           <section className="section-hero">
//             <div className="container grid grid-two-cols">
//               <div className="hero-content">
//                 <p>Lets Create Something Different</p>
//                 <h1>Welcome to Rider Infinity</h1>
//                 <p>
//                 I'm a software developer and entrepreneur, running Rider Infinity. With years of experience in coding and design, I specialize in creating user-friendly software solutions that simplify complex tasks. Let's build something great together.
//                 </p>
//                 <div className="btn btn-group">
//                   <a href="/contact">
//                     <button className="btn">Connect Now</button>
//                   </a>
//                   <a href="/service">
//                     <button className="btn secondary-btn">Learn More</button>
//                   </a>
//                 </div>
//               </div>
  
//               {/* hero images  */}
//               <div className="hero-image">
//               <Lottie animationData={Animation} style={{ width: '500px', height: '500px' }} />                
//               </div>
//             </div>
//           </section>
//         </main>
  
//         {/* 2nd section  */}
//         <Analytics />
       
//         {/* 3rd section  */}
//         <section className="section-hero">
//           <div className="container grid grid-two-cols">
//             {/* hero images  */}
//             <div className="hero-image">
//               <img
//                 src="/images/innovation.png"
//                 alt="coding together"
//                 width="400"
//                 height="500"
//               />
//               {/* <Analytics/> */}
              
//             </div>
  
//             <div className="hero-content">
//               <p>We are here to help you</p>
//               <h1>Get Started Today</h1>
//               <p>
//               Coupling my readiness for work with a proven track record of delivering outstanding results, I am the skilled professional you can rely on to get the job done efficiently, effectively, and to the highest possible standards.
//               </p>
//               <div className="btn btn-group">
//                 <a href="/contact">
//                   <button className="btn">Connect Now</button>
//                 </a>
//                 <a href="/service">
//                   <button className="btn secondary-btn">Learn More</button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   };

import { Analytics } from "../../components/Analytics";
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';

export const Home = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch('https://lottie.host/36b1b2c8-0feb-45fc-b501-01713d36acd0/ZFDdXkA5de.json');
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error fetching animation:', error);
      }
    };

    fetchAnimation();
  }, []);

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Let's Create Something Different</p>
              <h1>Welcome to Rider Infinity</h1>
              <p>
                I'm a software developer and entrepreneur, running Rider Infinity. With years of experience in coding and design, I specialize in creating user-friendly software solutions that simplify complex tasks. Let's build something great together.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
            <div>
              {animationData ? (
                <Lottie 
                  loop 
                  animationData={animationData} 
                  play 
                  style={{ width: 400, height: 400 }} 
                />
              ) : (
                <p>Loading animation...</p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <Analytics />

      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/images/innovation.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Coupling my readiness for work with a proven track record of delivering outstanding results, I am the skilled professional you can rely on to get the job done efficiently, effectively, and to the highest possible standards.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

