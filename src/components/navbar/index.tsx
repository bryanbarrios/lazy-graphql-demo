import { FC } from 'react';
import Container from '../container';
import Logo from '../logo';
import NavbarItems from './navbar-items';
import { GitHubIcon } from '@components/icons';
import SearchBar from '@components/search-bar';

const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border border-gray-100 py-4">
      <Container className="flex items-center justify-between mb-3 md:mb-0">
        <div className="flex flex-1">
          <Logo className="md:mr-4" />
          <SearchBar className="hidden md:flex" />
        </div>
        <div className="flex flex-1 justify-center">
          <NavbarItems />
        </div>
        <div className="flex flex-1 justify-end">
          <a
            className="text-gray-400 hover:text-gray-500 transition-colors ease-in duration-150 inline-block"
            href="https://www.github.com/bryanbarrios/suspense-graphql-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Github repository</span>
            <GitHubIcon />
          </a>
        </div>
      </Container>
      <Container className="flex md:hidden">
        <SearchBar />
      </Container>
    </nav>
  );
};

export default Navbar;
