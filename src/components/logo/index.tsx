import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ILogoProps {
  size?: number;
  className?: string;
}

const Logo: FC<ILogoProps> = ({ size = 40, className }) => {
  return (
    <Link to="/" className={className}>
      <span className="sr-only">Go home</span>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="22" stroke="url(#paint0_linear_3:3)" strokeWidth="20" strokeDasharray="4 4" />
        <defs>
          <linearGradient id="paint0_linear_3:3" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00FF38" />
            <stop offset="0.510417" stopColor="#0085FF" />
            <stop offset="1" stopColor="#0500FF" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
};

export default Logo;
