import { useFormContext } from 'react-hook-form';

function StepTwo() {
  const { register } = useFormContext();

  return (
    <>
      <label>Фамилия</label>
      <input {...register('lastName')} />
      <label>Имя</label>
      <input {...register('firstName')} />
      <label>Отчество</label>
      <input {...register('earlyChildhood')} />
      <label>fatherName</label>
      <input {...register('suit')} />
      <label>Номер телефона</label>
      <input {...register('tel')} />
      <label>Дата рождения</label>
      <input type="date" {...register('birthDate')} />
    </>
  );
}

export default StepTwo;
