import React from "react";
import { InputValues } from "../Input.types";
import { InputWrapper, Label } from "../Input.style";

export default function InputLocation({
  label,
  name,
  errors,
  touchedFields,
  register,
}: InputValues) {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <input
        placeholder="Enter IATA code(ex: SAW)"
        {...register(name, {
          required: true,
          pattern: {
            value: /^[a-zA-Z]{3}$/,
            message: "Please enter a 3 letter code",
          },
        })}
      />
      {touchedFields[name] && errors[name] && (
        <p className="text-red-500 text-xs">{`${errors[name]?.message}`}</p>
      )}
    </InputWrapper>
  );
}
