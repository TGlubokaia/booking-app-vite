import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { ChangeEvent, forwardRef, useState } from 'react';

const CustomCheckbox = forwardRef((props: CheckboxProps, ref) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (e: ChangeEvent) => {
    props.onChange(e.target.checked);
    setValue(e.target.checked);
  };
  return (
    <Checkbox
      inputRef={ref}
      checked={value}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      icon={<CheckBoxOutlineBlankIcon sx={{ color: '#000000' }} viewBox="3 3 18 18" />}
      checkedIcon={<CheckBoxOutlinedIcon sx={{ color: '#000000' }} viewBox="3 3 18 18" />}
    />
  );
});

export default CustomCheckbox;
