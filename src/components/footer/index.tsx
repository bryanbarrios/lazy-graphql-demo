import { FC } from 'react';
import Container from '../container';
import Logo from '../logo';

const Footer: FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-4">
      <Container className="flex justify-between items-center">
        <Logo />
        <span className="text-sm text-gray-400">Built with React &#38; GraphQL</span>
      </Container>
    </footer>
  );
};

export default Footer;
