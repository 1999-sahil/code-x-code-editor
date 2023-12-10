import React from 'react';
import Select from 'react-select';
import monacoThemes from 'monaco-themes/themes/themelist';
import { dropdownCustomStyles } from '../../constants/dropdownCustomStyles';

const ThemeDropdown = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder={`Select Theme`}
      options={
        Object.entries(monacoThemes).map(([themeId, themeName]) => ({
          label: themeName,
          value: themeId,
          key: themeId,
        }))
      }
      value={theme}
      styles={dropdownCustomStyles}
      onChange={handleThemeChange} 
    />
  )
}

export default ThemeDropdown;