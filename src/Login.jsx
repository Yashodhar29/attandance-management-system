import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css"; // Import CSS for styling
import axios from "axios";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit =async (data) => {
    const response = await axios.post("http://localhost:5000/api/login", data);
    if(response.data.success){
      localStorage.setItem("token", response.data.token);
      window.location.href = "/dashboard";
    }
    else{
      alert("Invalid username or password");
    }


    console.log(data);
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      {/* Left Side - Signup Form */}
      <div className="left">
        <h2>Login for Teachers</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            {...register("username", { required: true })}
          />
          {errors.username && <p className="error">Username is required</p>}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="error">Email is required</p>}

          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <img src="./src/assets/show.png" alt="show password" />
            ) : (
                <img src="./src/assets/hide.png" alt="hide password" />
              )}
            </button>
          </div>
          {errors.password && <p className="error">Password is required</p>}

          <input type="submit" value="Signup" className="submit-btn" />
        </form>
      </div>

      {/* Right Side - Image Section */}
      <div className="right">
        <img src="./src/assets/doodle.jpg" alt="Signup" />
      </div>
    </div>
  );
};

export default Login;
