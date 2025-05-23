import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Loader from '../Loader/Loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    loading?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
}

const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ label, loading = false, variant = 'primary', className, ...props }, ref) => (
        <button
            ref={ref}
            className={twMerge(
                'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium px-4 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50',
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {loading ? <Loader /> : label}
        </button>
    )
);

Button.displayName = 'Button';
export default Button;
