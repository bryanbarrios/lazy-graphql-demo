import { Link } from 'react-router-dom';

const NavbarItems = () => {
  const internalLinks = [{ title: 'Home', to: '/' }];

  return (
    <ul className="space-x-6 list-none inline-flex">
      {internalLinks.map(({ title, to }, index) => (
        <li key={index}>
          <Link
            className="text-gray-600 font-medium hover:text-gray-500 transition-colors ease-in duration-150"
            to={to}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarItems;
