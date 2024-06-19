import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LongFormInput from "./base/LongFormInput";
import LongButton from "./base/LongButton";
import { storeTokensAfterLogin } from "../utils/Authentication";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof formData
  ) => {
    setFormData((prevState) => ({ ...prevState, [field]: event.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("api/auth/login", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      storeTokensAfterLogin(data);

      navigate("/home");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="container flex-column">
      <LongFormInput
        label="Username"
        value={formData.username}
        onChange={(event) => handleChange(event, "username")}
      />
      <LongFormInput
        label="Password"
        value={formData.password}
        onChange={(event) => handleChange(event, "password")}
      />
      <LongButton text="Login" isDisabled={false} handler={handleSubmit} />
    </div>
  );
};

export default Register;
