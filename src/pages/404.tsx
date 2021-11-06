import { FC } from 'react';
import { Logo } from '@components/index';
import { Link } from 'react-router-dom';
import { RightArrowIcon } from '@components/icons';

const NotFoundPage: FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center items-center space-y-4 p-4">
      <Logo size={72} className="animate-spin" />
      <h1 className="text-3xl md:text-6xl font-extrabold text-gray-700">Page not found.</h1>
      <p className="text-gray-500">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <Link to="/" className="text-blue-500 font-medium inline-flex items-center hover:text-blue-600">
        <span className="mr-2">Go back home</span>
        <RightArrowIcon />
      </Link>
    </div>
  );
};

export default NotFoundPage;
