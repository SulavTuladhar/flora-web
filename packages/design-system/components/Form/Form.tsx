import React, { useMemo, useState } from "react";
import InputComponent, { InputProps } from "../Input/Input";
import ButtonComponent from "../button.component";

interface FormProps {
  inputs: InputProps[];
  columns: number;
  onSubmit: () => void;
  endPoint: string;
}

interface InputValues {
  [key: string]: string;
}

function FormContainer({ inputs, columns, onSubmit, endPoint }: FormProps) {
  const [inputValues, setInputValues] = useState<InputValues>(() =>
    inputs.reduce((acc, input) => ({ ...acc, [input.name]: "" }), {})
  );

  const handleInputChange = (name: string, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const sanitizedInputs = useMemo(() => {
    return inputs.map((input, index) => (
      <InputComponent
        key={index}
        {...input}
        onValueChange={(value) => handleInputChange(input.name, value)}
        value={inputValues[input.name]}
      />
    ));
  }, [inputs, inputValues]);

  return (
    <form className={`grid grid-cols-${columns} gap-4`}>
      {sanitizedInputs}
      <ButtonComponent label="Submit" onClick={onSubmit} />
    </form>
  );
}

export default FormContainer;
