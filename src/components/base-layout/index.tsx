import { FC, Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../navbar';
import Footer from '../footer';
import Container from '../container';
import PageLoader from '@components/page-loader';

const BaseLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1">
        <Container className="my-6">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
