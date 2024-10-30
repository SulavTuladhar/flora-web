import React, { useMemo, useState } from "react";
import InputComponent, { InputProps } from "../Input/Input";
import ButtonComponent from "../button.component";
import { Controller, useForm } from "react-hook-form";
import { input } from "@nextui-org/theme";
import { convertToZodSchema } from "@/packages/core/utils/form.schema";

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
  name: { type: "string", required: true },
  password: {
    type: "string",
    required: true,
    // minLength: {
    //   value: 8,
    //   message: "Password must have at least 8 characters",
    // },
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
              name={key}
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
