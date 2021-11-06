import { FC } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../navbar';
import Footer from '../footer';
import Container from '../container';

const BaseLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1">
        <Container className="my-6">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
