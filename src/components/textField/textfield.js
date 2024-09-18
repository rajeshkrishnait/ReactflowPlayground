import React from 'react';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import styles from './textfield.module.scss';

const Textfield = ({
  defaultValue = 'Editable Text',
  onSubmit = () => {},
  onChange = () => {}, // New onChange prop
  isPreviewFocusable = true,
  placeholder = 'Click to edit...',
  ...rest
}) => {
  return (
    <Editable
      defaultValue={defaultValue}
      isPreviewFocusable={isPreviewFocusable}
      onSubmit={onSubmit}
      placeholder={placeholder}
      {...rest}
      className={styles['default-textfield']}
    >
      <EditablePreview />
      <EditableInput 
        onChange={onChange} 
        className={styles['custom-input']} 
        as="textarea" // Ensures the input is treated as a textarea
      />
    </Editable>
  );
};

export default Textfield;
