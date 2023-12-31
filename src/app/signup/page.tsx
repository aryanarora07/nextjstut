"use client";

import { Axios } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";



export default function SignupPage()
{   
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const onSignup = async () => {
        
    }

    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2">        
                <h1>
            SIGNUP
            </h1>
                <hr />
                <label htmlFor="username">username</label>
                <input
                    className="p-2 border   text-black border-gray-300 rounded-lg mb-4 
                    focus:outline-none focus:border-gray-600"
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="USERNAME"
            />
            <label htmlFor="email">email</label>
                <input
                    className="p-2 border  text-black border-gray-300 rounded-lg mb-4 
                    focus:outline-none focus:border-gray-600"
                    type="text"
                    id="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="email"
            /> 
            <label htmlFor="password">password</label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 
                    focus:outline-none focus:border-gray-600"
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
            />  
            <button
               onClick={onSignup} 
                className="p-2 border border-gray-300 rounded-lg mb-4
            focus:outline-none focus:border-gray-600"> Signup Here</button>
            <Link href="/login">Visit Login Page</Link>            
        </div>
        

    );
}