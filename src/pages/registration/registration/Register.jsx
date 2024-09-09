
import  { useState } from "react";
import FormInput from "../../../Components/action/FormInput"
import { Link, } from "react-router-dom";
// import axios from "axios";
// useNavigate
const App =()=>{
  const [values,setValues] = useState({
  
    email:"",
    password:"",
    names:""
   
  });
  // const Navigate =useNavigate()
  const inputs=[
    {
      id:1,
      name:"names",
      type:"text",
      placeholder:"Names",
      errorMessage:"Names needed ",
      label:"Your Names",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"email should be valid and should incloude @ symbols",
      label:"email",
      required:true
    },

    {
      id:3,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"password should be 8-12 characters include at least 1 letter and 1 symbol",
      label:"password",
      // pattern:"/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g",
      required:true
    },
 

    

  ];

  const handleSubmit = async(e) =>{
    e.preventDefault();
  console.log(values);
//     try{
     
// await axios.post(' https://leoncarbackend.onrender.com/register',values)
//     .then(() =>{
//       alert('User Registered successfully');
//      Navigate('/login');
 
      
//     })
//   }
//     catch(err){
//       console.log(err)
//     }
 
  };



  const onChange =(e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  return(
    <>
       <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
   
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          >
          </div>
        </div>
    
   
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Leon-shop"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up your account
            </h2>
          </div>
             
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
              <form onSubmit={handleSubmit} >
       
       <div className="contain">
       {inputs.map((input)=>(
         <FormInput key={input.id}
         {...input}value={values[input.name]}
         onChange={onChange} />
       ))}
       <div className="head">
       <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                  
                    strokeLinecap="round"
                  
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <p className="ml-3">Sign Up</p>
                </button>
       <p>If you do have an account got <Link to="/Login"><b> <button className="p-3 bg-blue-400 hover:bg-fuchsia-100">Login</button></b></Link> </p></div>
       </div>
     </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default App ;