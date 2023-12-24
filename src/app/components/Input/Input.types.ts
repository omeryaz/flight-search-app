import { PropsWithChildren } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Control } from "react-hook-form";
import { SearchFormData } from "../SearchForm/SearchForm.types";

export interface InputValues extends PropsWithChildren {
  name: keyof SearchFormData;
  label: string;
  register: UseFormRegister<any>;
  touchedFields: Record<string, boolean>;
  errors: FieldErrors;
}

export interface InputDateValues extends PropsWithChildren {
  name: keyof SearchFormData;
  label: string;
  control: Control<SearchFormData>;
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
  isDisabled?: boolean;
}
