import React from 'react';
import PropTypes from 'prop-types'
const SearchField = ({ handleSearch }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const searchText = (e.target.search.value);
        handleSearch(searchText);
    }
    return (
        <div className="flex items-center justify-center bg-transparent mb-10">
            <div className="relative  opacity-10 md:w-screen md:-top-28 -z-0">
                <img className="w-full " src="https://i.ibb.co/VvRn4pJ/Rectangle-4281.png" alt="" />
            </div>
            <div className="absolute flex flex-col items-center p-5">
                <h1 className="md:text-5xl text-3xl text-center font-bold md:mb-16 text-black">I Grow By Helping People In Need</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input placeholder='Search...' type="text" name="search" id="" className='focus:outline-none bg-transparent border py-2 px-4' />
                    <input className='cursor-pointer py-2 px-4 text-white font-semibold rounded-r-md' style={{ backgroundColor: '#ff444a' }} type="submit" value="Search" />
                </form>
            </div>
        </div>
    );
};
SearchField.propTypes = {
    handleSearch: PropTypes.func.isRequired
};
export default SearchField;