import { HomeIcon } from '@components/icons';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../icon-button';

interface ILink {
  title: string;
  to: string;
  icon: ReactElement;
}

const NavbarItems = () => {
  const internalLinks: ILink[] = [{ title: 'Home', to: '/', icon: <HomeIcon /> }];

  return (
    <ul className="space-x-4 list-none inline-flex">
      {internalLinks.map(({ title, to, icon }, index) => (
        <li key={index}>
          <Link to={to}>
            <IconButton
              ariaLabel={title}
              icon={icon}
              className=" border border-gray-200 text-gray-400 hover:text-gray-500 hover:border-gray-400 transition duration-200"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarItems;
