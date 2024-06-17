

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";

// export const Login = () => {
  //   const [user, setUser] = useState({
//     email: "", 
//     password: "",
//   });

//   const navigate = useNavigate();
//   const {storeTokenInLS}=useAuth();
// //   const URL=`${API}/api/auth/login`;
  

//   // let handle the input field value
//   const handleInput = (e) => {
  //     let name = e.target.name;
//     let value = e.target.value;

//     setUser({
  //       ...user,
  //       [name]: value,
  //     });
//   };



// const handleSubmit=async(e)=>{
  //     e.preventDefault();
  //     try {
    //       const response=await fetch(`http://localhost:5000/api/auth/login`,{
      //         method:"POST",
      //       headers:{
//         'Content-Type':"application/json",

//       },
//       body:JSON.stringify(user),
//       });
//       console.log("login form",response);
//       // const res_data = await response.json();
//       if (response.ok) {
//         alert("login successful");
//         const res_data = await response.json();
//         storeTokenInLS(res_data.token);
//         // localStorage.setItem("token",res_data.token);
//         setUser({  email: "", password: "" });
//         // toast.success("Login Succesful");
//         navigate("/")

//         console.log(response);  
//       }
//       else{
  //         // toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
  //         console.log("invalid credentials");
  //       }
//     } catch (error) {
//       console.log(error);
//     }
// };
//   return (
  //     <>
  //       <section>
  //         <main>
  //           <div className="section-registration">
  //             <div className="container grid grid-two-cols">
  //               <div className="registration-image reg-img">
  //                 <img
  //                   src="/images/login.png"
//                   alt="a nurse with a cute look"
//                   width="400"
//                   height="500"
//                 />
//               </div>
//               {/* our main registration code  */}
//               <div className="registration-form">
//                 <h1 className="main-heading mb-3">Login form</h1>
//                 <br />
//                 {/* <form > */}
//                 <form onSubmit={handleSubmit}>
//                   <div>
//                     <label htmlFor="email">email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={user.email}
//                       onChange={handleInput}
//                       placeholder="Enter your email"
//                       id="email"
//                       required
//                       autoComplete="off"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="password">password</label>
//                     <input
//                       type="password"
//                       name="password"
//                       autoComplete="off"
//                       required
//                       id="password"
//                       value={user.password}
//                       onChange={handleInput}
//                       placeholder="password"
//                     />
//                   </div>
//                   <br />
//                   <button type="submit" className="btn btn-submit">
//                     Login
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {toast} from "react-toastify";

// // import { useAuth } from "../store/auth";
// import { useAuth } from "../store/auth";
// export const Login = () => {
//   const [user, setUser] = useState({
//     email: "", 
//     password: "",
//   });

//   // const { storeTokenInLS } = useAuth();
//   const navigate = useNavigate();
//   const {storeTokenInLS,API}=useAuth();
//   const URL=`${API}/api/auth/login`;

//   // Handle input field value changes
//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(URL, {
//         method: "POST",
//         headers: {
//           'Content-Type': "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       const res_data = await response.json();
//       if (response.ok) {
//         toast.success("Login successful");
//         storeTokenInLS(res_data.token);
//         setUser({ email: "", password: "" });
//         navigate("/");
//       } else {
//         toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
//         // const res_data = await response.json();
//         // alert(res_data.message || "Invalid credentials");
//         console.error("Invalid credentials:", res_data);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <section>
//       <main>
//         <div className="section-registration">
//           <div className="container grid grid-two-cols">
//             <div className="registration-image reg-img">
//               <img
//                 src="/images/login.png"
//                 alt="a nurse with a cute look"
//                 width="400"
//                 height="500"
//               />
//             </div>
//             <div className="registration-form">
//               <h1 className="main-heading mb-3">Login form</h1>
//               <br />
//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleInput}
//                     placeholder="Enter your email"
//                     id="email"
//                     required
//                     autoComplete="off"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={user.password}
//                     onChange={handleInput}
//                     placeholder="Enter your password"
//                     id="password"
//                     required
//                     autoComplete="off"
//                   />
//                 </div>
//                 <br />
//                 <button type="submit" className="btn btn-submit">
//                   Login
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </section>
//   );
// };
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  const URL = `${API}/api/auth/login`;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        toast.success("Login successful");
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.error("Invalid credentials:", res_data);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image reg-img">
              <img
                src="/images/login.png"
                alt="a nurse with a cute look"
                width="400"
                height="500"
              />
            </div>
            <div className="registration-form">
              <h1 className="main-heading mb-3">Login form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter your email"
                    id="email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    id="password"
                    required
                    autoComplete="off"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
