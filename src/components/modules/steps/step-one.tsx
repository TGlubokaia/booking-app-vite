import { useFormContext } from 'react-hook-form';

function StepOne() {
  const { register } = useFormContext();

  return (
    <>
      <label>Количество взрослых</label>
      <input type="number" {...register('adults')} />
      <label>Количество детей от 5 до 12 лет</label>
      <input {...register('middleChildhood')} />
      <label>Количество детей до 5 лет</label>
      <input {...register('earlyChildhood')} />
      <label>Тип номера</label>
      <input {...register('suit')} />
      <label>Количество ночей</label>
      <input type="number" {...register('nights')} />
      <label>Страховка</label>
      <input {...register('isInsured')} />
    </>
  );
}

export default StepOne;
