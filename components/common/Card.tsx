import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded-lg shadow-md p-4 w-full max-w-sm">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-2" />
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Card;
