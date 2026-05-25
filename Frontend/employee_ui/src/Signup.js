import React, { useState } from "react";
import axios from "axios";

function Signup({ setShowSignup }) {

    const [user, setUser] = useState({
        username: "",
        password: "",
        fullName: "",
        email: "",
        department: "",
        phone: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const register = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:9090/auth/register",
                user
            );

            setMessage(res.data);

        } catch (err) {
            console.log(err);
            setMessage("Server Error");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">

            <div className="card shadow p-4" style={{ width: "420px" }}>

                <h3 className="text-center mb-3">Register User</h3>

                <form onSubmit={register}>

                    <input name="username" placeholder="Username"
                        className="form-control mb-2"
                        onChange={handleChange} required />

                    <input name="password" type="password"
                        placeholder="Password"
                        className="form-control mb-2"
                        onChange={handleChange} required />

                    <input name="fullName" placeholder="Full Name"
                        className="form-control mb-2"
                        onChange={handleChange} />

                    <input name="email" placeholder="Email"
                        className="form-control mb-2"
                        onChange={handleChange} />

                    <input name="department" placeholder="Department"
                        className="form-control mb-2"
                        onChange={handleChange} />

                    <input name="phone" placeholder="Phone Number"
                        className="form-control mb-3"
                        onChange={handleChange} />

                    <button className="btn btn-success w-100">
                        Register
                    </button>

                </form>

                {/* BACK BUTTON */}
                <button
                    className="btn btn-secondary w-100 mt-2"
                    onClick={() => setShowSignup(false)}
                >
                    Back to Login
                </button>

                {message && (
                    <p className="text-center mt-3 text-danger">
                        {message}
                    </p>
                )}

            </div>

        </div>
    );
}

export default Signup;