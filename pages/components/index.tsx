import { isNotEmptyObject } from "@/packages/core/utils/util.functions";
import FormContainer from "@/packages/design-system/components/Form/Form";
import InputComponent, {
  InputProps,
} from "@/packages/design-system/components/Input/Input";
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { MdSearch } from "react-icons/md";

function index() {
  return (
    <div className="w-[90%] mx-auto my-4 flex flex-col gap-4">
      <h1 className="text-center">Components Examples</h1>
      <hr />
      <InputExample />
      <hr />
      <FormExample />
    </div>
  );
}

const InputExample = () => {
  return (
    <div className="my-2">
      <h2 className="font-bold">Input</h2>
      <div className="grid grid-cols-2 gap-4">
        <InputComponent
          placeholder={""}
          label="Input with error"
          errorMessage={"something went wrong"}
          isInvalid={true}
          onValueChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          value={""}
          name={""}
        />
        <InputComponent
          placeholder={""}
          label="Input without Error"
          errorMessage={"something went wrong"}
          isInvalid={false}
          onValueChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          value={""}
          name={""}
        />
        <InputComponent
          placeholder={""}
          label="Input with end content"
          errorMessage={"something went wrong"}
          isInvalid={false}
          onValueChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          endContent={
            <div className="h-full flex items-center">
              <MdAlternateEmail />
            </div>
          }
          value={""}
          name={""}
        />
        <InputComponent
          placeholder={"Input with start content"}
          label=""
          errorMessage={"something went wrong"}
          isInvalid={false}
          onValueChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          startContent={
            <MdSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          value={""}
          name={""}
        />
      </div>
    </div>
  );
};

const FormExample = () => {
  const [output, setOutput] = useState({});

  const inputs: InputProps[] = [
    {
      placeholder: "",
      label: "Input with error",
      errorMessage: "something went wrong",
      isInvalid: true,
      value: "",
      name: "Input with error",
    },
    {
      placeholder: "",
      label: "Input without error",
      errorMessage: "something went wrong",
      isInvalid: false,
      value: "",
      name: "Input without error",
    },
  ];
  return (
    <div>
      <h2 className="font-bold">Form Container Example</h2>
      <FormContainer
        inputs={inputs}
        columns={0}
        onSubmit={function (values): void {
          console.log({ values });
          setOutput(values);
        }}
        endPoint={"/users/create"}
      />
      {isNotEmptyObject(output)
        ? Object.entries(output).map(([key, value]: [string, any]) => (
            <p key={key}>
              {key} - {value}
            </p>
          ))
        : null}
    </div>
  );
};

export default index;
