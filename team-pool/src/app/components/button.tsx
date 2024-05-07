import { ReactNode, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, color, ...props }) => {
    return (
        <button
            className={twMerge(`flex items-center justify-center text-center bg-clip-padding p-4 rounded-full min-w-32 hover:bg-[#9290C3] ${color ? color : 'bg-[#5FD475]'} ${className}`)}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;