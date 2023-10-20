import { BookingStepType } from '../../core/utils/types';
import { stepsInfo } from '../../core/utils/utils';
import ButtonBlock from './button-block';
import Confirmation from './steps/confirmation';
import PriceDetails from './steps/price-details';
import UserDetails from './steps/user-details';

function BookingSteps(props: BookingStepType) {
  return (
    <>
      <h3>{stepsInfo[props.step].title}</h3>
      <div>
        {props.step == 0 && <PriceDetails />}
        {props.step == 1 && <UserDetails />}
        {props.step == 2 && <Confirmation />}
      </div>

      <ButtonBlock {...props} />
    </>
  );
}

export default BookingSteps;
