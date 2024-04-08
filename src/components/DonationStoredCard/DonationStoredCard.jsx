import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const DonationStoredCard = ({card}) => {
    const { id, picture, category, title, color_for_category_bg, color_for_card_bg, text_color, price } = card;
    const cardStyle = {
        background: color_for_card_bg,
        color: text_color,
    }

    return (
        <div style={cardStyle} className='md:flex md:flex-col lg:flex-row gap-4 rounded-md'>
            <img className='w-full md:w-auto' src={picture} alt={category} />
            <div className='text-start p-4 flex flex-col justify-start items-start gap-2'>
                <p className='py-1 px-2 rounded-md font-normal' style={{ backgroundColor: `${color_for_category_bg}` }}>{category}</p>
                <h3 className='font-bold text-2xl text-black'>{title}</h3>
                <p className='font-semibold'>${price}</p>
                <button style={{ backgroundColor: `${text_color}` }} className='text-white py-2 px-5 rounded-md font-semibold'><Link to={`/details/${id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

DonationStoredCard.propTypes ={
    card: PropTypes.object.isRequired,
}

export default DonationStoredCard;