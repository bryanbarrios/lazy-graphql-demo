import { FC } from 'react';
import cn from 'classnames';
import { SearchIcon } from '@components/icons';

interface ISearchBarProps {
  className?: string;
}

const SearchBar: FC<ISearchBarProps> = ({ className }) => {
  return (
    <div className={cn('flex relative w-full', className)}>
      <div className="absolute left-3 top-2 transform translate-y-px z-1">
        <SearchIcon className="text-gray-500" size={20} />
      </div>
      <input
        type="search"
        placeholder="Search for a character"
        className="w-full focus:outline-none border border-gray-300 text-gray-500 placeholder-gray-500 bg-gray-50 px-2 pl-10 py-2 rounded-full text-sm font-medium"
      />
    </div>
  );
};

export default SearchBar;
