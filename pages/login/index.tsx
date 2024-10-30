"use client";
import ButtonComponent from "@/packages/design-system/components/button.component";
import InputComponent from "@/packages/design-system/components/Input/Input";
import { httpClient } from "@/utils/http";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email,
      password,
    };
    try {
      console.log("yaha aye ta ? ");
      const res = await httpClient.POST("/auth/login", data);
      const resData = res.data;
      setCookie("token", resData.token);
      setCookie("user", resData.data);
      setIsLoading(false);
      router.push("/");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-[#E6B17E] h-[100vh] w-full flex items-center justify-center px-20">
      <div className="flex-1">
        <form className="mx-auto w-[50%]">
          <h1 className="text-center font-bold text-2xl mb-6">Login</h1>
          <InputComponent
            placeholder={""}
            label="Email"
            errorMessage={"something went wrong"}
            isInvalid={false}
            onValueChange={(val) => setEmail(val)}
            value={email}
            name={""}
            size="sm"
          />
          <InputComponent
            placeholder={""}
            label="Password"
            errorMessage={"something went wrong"}
            isInvalid={false}
            onValueChange={(val) => setPassword(val)}
            value={password}
            name={""}
            size="sm"
          />
          <ButtonComponent label={"Login"} onClick={(e) => onSubmit(e)} />
        </form>
      </div>
    </div>
  );
}
