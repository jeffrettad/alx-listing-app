

import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => (
  <button onClick={onClick} class ={px-4 py-2 bg-blue-600 text-white rounded ${className}}>
    {label}
  </button>
);

export default Button;
