import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import Button from "./Button";
import Error from "./Error";

export default function LoginForm() {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [key]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.fName.trim()) newErrors.fName = "First name is required";
    if (!form.lName.trim()) newErrors.lName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValidation = validateForm();
    if (Object.keys(formValidation).length > 0) {
      setErrors(formValidation);
      return;
    }

    setErrors({});
    console.log("here is form value", form);
  };
  return (
    <div className="w-full h-screen bg-amber-50 flex justify-center items-center">
      <div className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto border-5 rounded-lg shadow-lg border-amber-100 p-3">
        <Heading text={"Login Form"} />
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            type={"text"}
            placeholder={"First name"}
            value={form.fName}
            onchange={(value) => handleChange("fName", value)}
            dynamicClass={errors.fName && "outline-rose-500"}
          />
          {errors.fName && <Error error={errors.fName} />}

          <Input
            type={"text"}
            placeholder={"Last name"}
            value={form.lName}
            onchange={(value) => handleChange("lName", value)}
            dynamicClass={errors.lName && "outline-rose-500"}
          />
          {errors.lName && <Error error={errors.lName} />}

          <Input
            type={"email"}
            placeholder={"Email"}
            value={form.email}
            onchange={(value) => handleChange("email", value)}
            dynamicClass={errors.email && "outline-rose-500"}
          />
          {errors.email && <Error error={errors.email} />}

          <Input
            type={"password"}
            placeholder={"Password"}
            value={form.password}
            onchange={(value) => handleChange("password", value)}
            dynamicClass={errors.password && "outline-rose-500"}
          />
          {errors.password && <Error error={errors.password} />}

          <Button type={"submit"} text={"Submit"} />
        </form>
      </div>
    </div>
  );
}
