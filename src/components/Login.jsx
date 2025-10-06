import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase"
const Login = () => {
   const [isSignIn, setForm] = useState(true)
   const [errorMsg, setErrMsg] = useState(null)
   const name = useRef(null)
   const email = useRef(null)
   const password = useRef(null)
   const handleForm = () => { setForm(!isSignIn) }
   const handleSubmit = () => {
      const message = checkValidData(email.current.value, password.current.value)
      setErrMsg(message)
      if (message) return;

      if (!isSignIn) {
         // Sign Up Logic
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
               const user = userCredential.user;
            }).catch((error) => {
               setErrMsg(error.code + error.message)
            })
      } else {
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
               const user = userCredential.user
            }).catch((error) => {
               setErrMsg(error.message)
            })
      }
   }
   return (
      <div>
         <Header />
         <div className="absolute">
            <img className="w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg" alt="" />
         </div>
         <form onSubmit={(e) => e.preventDefault()} action="" className="rounded-lg text-white w-3/12 my-56 mx-auto left-0 right-0 absolute bg-black p-12 bg-opacity-80">
            <h1 className="text-3xl mb-4 font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (
               <>
                  <input type="text" ref={name} placeholder="Full Name" className="rounded-md w-full py-4 px-4 my-3 bg-black bg-opacity-0 border border-#616161" />
               </>
            )}
            <input ref={email} type="text" placeholder="Email" className="rounded-md w-full py-4 px-4 my-3 bg-black bg-opacity-0 border border-#616161" />
            <input ref={password} type="text" placeholder="Password" className="rounded-md w-full py-4 px-4 my-3 bg-black bg-opacity-0 border border-#616161" />
            <p className="text-red-500">{errorMsg}</p>
            <button className="rounded-md bg-[#e60914] py-3 w-full my-4" onClick={handleSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <div className="flex gap-1">
               <p>{isSignIn ? "New to NetflixGPT? " : "Already a member? "} </p> <a className="cursor-pointer underline underline-offset-1" onClick={handleForm}> {isSignIn ? "Sign Up" : "Sign In"}</a>
            </div>
         </form>
      </div>
   )
}

export default Login