import { stepsInfo } from '../../core/utils/utils';
import { BookingStepType } from '../../core/utils/types';
import Confirmation from './steps/confirmation';
import StepOne from './steps/step-one';
import StepTwo from './steps/step-two';

function BookingSteps(props: BookingStepType) {
  return (
    <>
      <h3>{stepsInfo[props.step].title}</h3>
      <div>
        {props.step == 0 && <StepOne />}
        {props.step == 1 && <StepTwo />}
        {props.step == 2 && <Confirmation />}
      </div>

      {props.step > 0 && (
        <button onClick={props.handleBack}>
          {props.step < 2 ? 'Назад к расчету стоимости' : 'Назад к данным покупателя'}
        </button>
      )}
      <button
        onClick={props.step < 2 ? props.handleNext : undefined}
        disabled={props.isDisabledButton}
      >
        {props.step < 2 ? 'Далее' : 'Оплатить'}
      </button>
    </>
  );
}

export default BookingSteps;
