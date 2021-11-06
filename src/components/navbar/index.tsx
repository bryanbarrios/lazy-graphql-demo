import { FC } from 'react';
import Container from '../container';
import Logo from '../logo';
import NavbarItems from './navbar-items';
import { GitHubIcon } from '@components/icons';

const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border border-gray-100 py-4">
      <Container className="flex items-center">
        <Logo className="mr-4" />
        <NavbarItems />
        <a
          className="text-gray-400 hover:text-gray-500 transition-colors ease-in duration-150 inline-block ml-auto"
          href="https://www.github.com/bryanbarrios/suspense-graphql-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Github repository</span>
          <GitHubIcon />
        </a>
      </Container>
    </nav>
  );
};

export default Navbar;
