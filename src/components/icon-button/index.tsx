import { FC, ReactElement } from 'react';
import cn from 'classnames';

interface IIConButtonProps {
  className?: string;
  ariaLabel?: string;
  icon: ReactElement;
}

const IconButton: FC<IIConButtonProps> = ({ className, ariaLabel, icon }) => {
  return (
    <button aria-label={ariaLabel} className={cn('rounded-full p-2', className)}>
      {icon}
    </button>
  );
};

export default IconButton;
