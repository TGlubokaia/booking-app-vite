import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { StepType } from '../../core/utils/types';
import { checkIsValid, getRequiredStepFields } from '../../core/utils/utils';
import { schema } from './schema';
import BookingSteps from '../../components/modules/booking-steps';

function BookingForm() {
  const methods = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
  const { watch, formState, handleSubmit } = methods;
  const { errors } = formState;

  const [step, setStep] = useState(0);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const handleButton = async (step: StepType) => {
    const fieldsRequired = getRequiredStepFields(step);
    const isValid = checkIsValid(errors, fieldsRequired);
    let isRequiredFilled;

    if (fieldsRequired.length) {
      isRequiredFilled = watch(fieldsRequired).every(Boolean);
    } else {
      isRequiredFilled = true;
    }
    console.log('filled', isRequiredFilled);
    console.log('isValid', isValid);

    if (isRequiredFilled && isValid) {
      setIsDisabledButton(false);
    } else {
      setIsDisabledButton(true);
    }
  };

  const handleBack = () => {
    handleButton(step - 1);
    setStep((prev) => prev - 1);
  };

  const handleNext = () => {
    handleButton(step + 1);
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    console.log('useEffect');
    const subscription = watch((value, { name, type }) => [value, name, type]);
    return () => subscription.unsubscribe();
  }, [watch, isDisabledButton]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} onChange={() => handleButton(step)}>
        <BookingSteps
          handleBack={handleBack}
          handleNext={handleNext}
          step={step}
          isDisabledButton={isDisabledButton}
        />
      </form>
    </FormProvider>
  );
}

export default BookingForm;
