import { FieldValues } from "react-hook-form";

export type StepInfoType = {
  title: string;
  required?: string[];
};

export type InfoType = {
  [key: number]: StepInfoType;
};

export type StepType = number;

export type SuitCategoryType = {
  [key: string]: string;
};

export type FieldsType = string[] | [];

export type BookingStepType = {
  handleBack: () => void;
  handleNext: () => void;
  isDisabledButton: boolean;
  step: number;
};


export type Type1 = ("adults" | "nights")[];
export type Type2 = ('lastName' | 'firstName' | 'tel' | 'birthDate')[];
export type Type3 = Type1 | Type2 | [];
