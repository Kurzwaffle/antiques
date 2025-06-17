import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-burgundy-700 text-white hover:bg-burgundy-800 focus:ring-burgundy-500',
    secondary: 'bg-gold-500 text-gray-900 hover:bg-gold-600 focus:ring-gold-400',
    outline: 'border border-burgundy-700 text-burgundy-700 hover:bg-burgundy-50 focus:ring-burgundy-500',
    text: 'text-burgundy-700 hover:text-burgundy-800 hover:bg-burgundy-50 focus:ring-burgundy-500'
  };
  
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm rounded-md',
    md: 'py-2 px-4 text-base rounded-lg',
    lg: 'py-3 px-6 text-lg rounded-lg'
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};