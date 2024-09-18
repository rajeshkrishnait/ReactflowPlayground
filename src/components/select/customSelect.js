// CustomSelect.js
import React from 'react';
import { Select } from '@chakra-ui/react';

import styles from './select.module.scss'
const CustomSelect = ({ options = [], placeholder = 'Select an option', onChange, size = 'md', isDisabled = false, ...rest }) => {
  return (
    <Select 
      className={styles['default']}
      placeholder={placeholder}
      onChange={onChange}
      size={size}
      isDisabled={isDisabled}
      {...rest}  // This will allow additional Chakra UI props to be passed
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelect;
