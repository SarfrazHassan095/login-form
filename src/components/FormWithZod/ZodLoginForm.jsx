import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "./Button";
import Input from "./Input";

const loginFormScheme = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(6, "Password must be atleast 6 character long"),
});

export default function ZodLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormScheme),
    defaultValues: {
      names: [{ email: "" }, { password: "" }],
    },
  });

  const onSubmit = (data) => {
    console.log("here is form data", data);
  };
  return (
    <div className="h-screen w-full bg-amber-50 flex justify-cneter items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 p-4 border-4 border-amber-300 mx-auto flex flex-col gap-3"
      >
        <Input type="text" placeholder="Email" {...register("email")} />
        {errors.email && (
          <p className="text-sm text-rose-500">{errors.email.message}</p>
        )}
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-rose-500">{errors.password.message}</p>
        )}

        <Button type="submit" text={"Submit"} />
      </form>
    </div>
  );
}
