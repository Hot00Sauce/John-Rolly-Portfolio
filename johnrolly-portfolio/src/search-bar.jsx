import React, { useState } from 'react';
import SearchIcon from './assets/search-icon';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const id = query.toLowerCase().trim();
    if (!id) {
      alert('Please enter a section ID to search for.');
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('No section found with that ID');
    }
  };
  return (
    <div className=" bg-white py-3.5 pr-1 search-bar flex justify-center items-center
     w-[272px] sm:w-[320px] md:w-[400px lg:w-[480px] xl:w-[540px]
     h-6 h:sm-7 md:h-8 lg:h-10 xl:h-12
     gap-[-5px] sm:gap-1.5 lg:gap-19 
     absolute left-1/2 -translate-x-1/2 rounded-full">
      <SearchIcon />
      <input
        className="bg-white pl-2
        md:py-0.5 lg:py-1.5 xl:py-2.5
        w-48.5 sm:w-52 lg:w-200
        lg:ml-[-70px]
        lg:mr-[-70px]
        focus:outline-none
        lg:text-lg xl:text-xl
        "
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="rounded-full bg-[#1A4D4F] text-xs text-[#1ABC9C]
      py-1 sm:py-[0px] md:py-[1px] lg:py-[4.5px] xl:py-[7px]
      ml-[-3px] px-1.5 sm:px-[15px] md:px-[13px] lg:px-[21px]
      sm:text-base lg:text-base xl:text-lg
      hover:bg-[#1ABC9C] hover:text-black transition-all duration-300" type="button">Search</button>
    </div>
  );
}
export default SearchBar;