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

    return (
        <div>
            <h1 className="text-center text-white text-6xl my-4">
                SIGNUP
                <hr />
                <label htmlFor="username">username</label>
                <input
                    className="p-4 border border-gray-300 rounded-lg mb-4 
                    focus:outline-none focus:border-gray-600` "
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="USERNAME"
                />
            </h1>
        </div>
    );
}