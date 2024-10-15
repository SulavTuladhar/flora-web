import React, { useMemo, useState } from "react";
import InputComponent, { InputProps } from "../Input/Input";
import ButtonComponent from "../button.component";
import { Controller, useForm } from "react-hook-form";
import { input } from "@nextui-org/theme";
interface FormInput {
  [any: string]: {
    name: string;
  };
}

interface FormProps {
  inputs: FormInput;
  columns: number;
  onSubmit: (value: Object) => void;
  endPoint: string;
}

interface InputValues {
  [key: string]: string;
}

const registerOptions = {
  name: { required: "Name is required" },
  email: { required: "Email is required" },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    },
  },
};

function FormContainer({ inputs, columns, onSubmit, endPoint }: FormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const sanitizedInputs = useMemo(() => {
    Object.entries(input).forEach(([key, value], index) => {
      return (
        <Controller
          name={key}
          control={control}
          render={({ field }) => (
            <InputComponent
              key={index}
              label={undefined}
              errorMessage={undefined}
              isInvalid={false}
              value={""}
              name={""}
            />
          )}
        />
      );
    });
  }, [inputs]);

  return (
    <form className={`grid grid-cols-${columns} gap-4`}>
      {/* {sanitizedInputs} */}
      {/* <ButtonComponent label="Submit" onClick={() => onSubmit(inputValues)} /> */}
    </form>
  );
}

export default FormContainer;
