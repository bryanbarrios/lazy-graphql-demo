import { FC, ReactNode } from 'react';
import cn from 'classnames';

interface IContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ className, children }) => {
  return <div className={cn('w-full max-w-6xl px-4 mx-auto', className)}>{children}</div>;
};

export default Container;
