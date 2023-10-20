import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from 'react-hook-form';
import CustomFormControl from '../../form-control';
import CustomFormHelperText from '../../form-helper-text';
import CustomCheckbox from '../../checkbox';
import CustomSwitchButton from '../../switch';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useImperativeHandle, useRef } from 'react';
import CustomLabel from '../../../label';

interface CheckboxProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  label: string;
  fieldName: TFieldName;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const CustomCheckboxField = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: CheckboxProps<TFieldsValues, TFieldName>,
) => {
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController({
    name: props.fieldName,
    control: props.control,
    defaultValue: props.defaultValue,
  });
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);

  const minWidth400 = useMediaQuery('(min-width:400px)');
  // const touchpad = useMediaQuery('(hover: none) and (pointer: coarse)');

  return (
    <CustomFormControl error={!!error}>
      <CustomLabel>{props.label}</CustomLabel>

      {minWidth400 ? (
        <CustomCheckbox {...rest} ref={inputRef} />
      ) : (
        <CustomSwitchButton {...rest} ref={inputRef} />
      )}

      <CustomFormHelperText id={props.fieldName}>
        {error ? error.message : ''}
      </CustomFormHelperText>
    </CustomFormControl>
  );
};

export default CustomCheckboxField;
