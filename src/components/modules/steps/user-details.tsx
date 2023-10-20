import { useFormContext } from 'react-hook-form';
import DateField from '../../ui/mui-components/custom-components/date-input/date-input';
import TextInputField from '../../ui/mui-components/custom-components/text/text-input';

function UserDetails() {
  const { control } = useFormContext();

  return (
    <>
      <TextInputField
        label={'Фамилия'}
        control={control}
        fieldName={'lastName'}
        defaultValue={''}
      />
      <TextInputField
        label={'Имя'}
        control={control}
        fieldName={'firstName'}
        defaultValue={''}
      />
      <TextInputField
        label={'Отчество'}
        control={control}
        fieldName={'fatherName'}
        defaultValue={''}
      />
      <TextInputField
        label={'Номер телефона'}
        placeholder={'+7XXXXXXXX-XX'}
        control={control}
        fieldName={'tel'}
        defaultValue={''}
      />
      <DateField
        type={'date'}
        label={'Дата рождения'}
        control={control}
        fieldName={'birthDate'}
        defaultValue={''}
      />
    </>
  );
}
export default UserDetails;
