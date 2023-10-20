import { FieldErrors, FieldValues } from 'react-hook-form';

import { FieldsType, InfoType, StepType, SuitCategoryType, Type3 } from './types';

const userFields: Type3 = ['lastName', 'firstName', 'tel', 'birthDate'];
const priceFields: Type3 = ['adults', 'nights'];

const stepsInfo: InfoType = {
  0: {
    title: 'Расчет стоимости',
    required: priceFields,
  },
  1: {
    title: 'Данные покупателя',
    required: userFields,
  },
  2: {
    title: 'Подтверждение заказа',
  },
};

const suitCategories: SuitCategoryType = {
  econom: 'Эконом',
  standard: 'Стандарт',
  lux: 'Люкс',
};

const getRequiredStepFields = (step: StepType) => {
  let fieldsRequired: Type3;
  switch (step) {
    case 0: {
      fieldsRequired = priceFields;
      break;
    }
    case 1: {
      fieldsRequired = userFields;
      break;
    }
    default:
      return [];
  }

  return fieldsRequired;
};

const checkIsValid = (errors: FieldErrors, fieldsRequired: Type3) => {
  const invalidFields = Object.keys(errors);
  if (invalidFields.length == 0) {
    return true;
  }
  if (invalidFields.some((element) => fieldsRequired.includes(element))) {
    return false;
  }
  return true;
};

export {
  checkIsValid,
  getRequiredStepFields,
  priceFields,
  stepsInfo,
  suitCategories,
  userFields,
};
