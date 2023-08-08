import React from 'react';

const ToggleSwitch = ({ isDarkMode, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode} onChange={onToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;