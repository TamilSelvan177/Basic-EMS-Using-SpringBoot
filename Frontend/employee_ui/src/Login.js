import React, { useState } from "react";
import axios from "axios";

function Login({ setIsLoggedIn, setShowSignup }) {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const login = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:9090/auth/login",
                user
            );

            if (res.data !== "Invalid Credentials") {
                localStorage.setItem("token", res.data);
                setIsLoggedIn(true);
            } else {
                setError("Invalid Username or Password");
            }

        } catch (err) {
            console.log(err);
            setError("Server not responding");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100"
            style={{ background: "#ffffff" }}>

            <div className="card shadow p-4" style={{ width: "360px" }}>

                <h3 className="text-center mb-4">Employee Login</h3>

                <form onSubmit={login}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="form-control mb-3"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control mb-3"
                        onChange={handleChange}
                        required
                    />

                    <button className="btn btn-primary w-100">
                        Login
                    </button>

                </form>

                {/* SIGNUP BUTTON */}
                <button
                    type="button"
                    className="btn btn-success w-100 mt-2"
                    onClick={() => setShowSignup(true)}
                >
                    Create Account
                </button>

                {error && (
                    <p className="text-danger text-center mt-3">
                        {error}
                    </p>
                )}

            </div>
        </div>
    );
}

export default Login;