import React from 'react';
import Select from 'react-select';
import { languageOptions } from '../../constants/languageOptions';
import { dropdownCustomStyles } from '../../constants/dropdownCustomStyles';

const LanguageDropdown = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Choose your language`}
      options={languageOptions}
      styles={dropdownCustomStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)} 
    />
  );
};

export default LanguageDropdown