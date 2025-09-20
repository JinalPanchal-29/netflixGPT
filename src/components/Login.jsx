import { useState } from "react"
import Header from "./Header"
const Login = () => {
    const [isSignIn, setForm] = useState(true)
    const handleForm = () => {setForm(!isSignIn)}
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg" alt="" />
            </div>
            <form action="" className="rounded-lg text-white w-3/12 my-56 mx-auto left-0 right-0 absolute bg-black p-12 bg-opacity-80">
                <h1 className="text-3xl mb-4 font-bold">{isSignIn? "Sign In": "Sign Up"}</h1>
                {!isSignIn && (
                    <>
                        <input type="text" placeholder="Full Name" className="rounded-md w-full py-4 px-4 my-3 bg-black bg-opacity-0 border border-#616161" />
                    </>
                )}
                <input type="text" placeholder="Email or mobile number" className="rounded-md w-full py-4 px-4 my-3 bg-black bg-opacity-0 border border-#616161" />
                <input type="text" placeholder="Password" className="rounded-md w-full py-4 px-4 my-3 bg-black bg-opacity-0 border border-#616161" />
                <button className="rounded-md bg-[#e60914] py-3 w-full my-4">{isSignIn? "Sign In": "Sign Up"}</button>
                <div className="flex">
                    <p>{isSignIn ? "New to NetflixGPT? " : "Already a member? "}</p> <a onClick={handleForm}> {isSignIn? "Sign Up" : "Sign In"}</a>
                </div>
            </form>
        </div>
    )
}

export default Login