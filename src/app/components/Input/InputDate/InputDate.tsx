import { InputDateValues } from "../Input.types";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { InputWrapper, Label } from "../Input.style";

export default function InputDate({
  control,
  name,
  label,
  children,
  isDisabled,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: InputDateValues) {
  const isDepartureDate = name === "departureDate";
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            className="focus:outline-none w-full disabled:opacity-50"
            selected={field.value ? new Date(field.value) : new Date()}
            onChange={(date) => {
              if (date) {
                field.onChange(date);
                isDepartureDate ? setStartDate(date) : setEndDate(date);
              }
            }}
            dateFormat="yyyy/MM/dd"
            startDate={startDate}
            disabled={isDisabled}
            endDate={endDate}
            {...(isDepartureDate
              ? { selectsStart: true }
              : { selectsEnd: true })}
            minDate={!isDepartureDate ? startDate : null}
          />
        )}
      />
      {children}
    </InputWrapper>
  );
}
