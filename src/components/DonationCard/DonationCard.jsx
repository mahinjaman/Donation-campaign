import { NavLink } from "react-router-dom";
const DonationCard = ({card}) => {
    console.log(card);
    const { id, picture, category, title, color_for_category_bg, color_for_card_bg, text_color } = card;
    const cardStyle = {
        background: color_for_card_bg,
        color: text_color,
    }
    return (
        <NavLink to={`/details/${id}`}>
            <div style={cardStyle} className='rounded-lg'>
                <img className='w-full' src={picture} alt={category} />
                <div className='text-start p-4 flex flex-col justify-start items-start font-semibold gap-2'>
                    <p className='py-1 px-2 rounded-md' style={{ backgroundColor: `${color_for_category_bg}` }}>{category}</p>
                    <h3>{title}</h3>
                </div>
            </div>
        </NavLink>
    );
};

export default DonationCard;