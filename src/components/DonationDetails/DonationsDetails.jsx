import { useLoaderData, useParams } from "react-router-dom";
import { addToLS } from "../../Utiliti/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DonationsDetails = () => {
    const { id } = useParams()
    const donationsCards = useLoaderData();
    const detailsCard = donationsCards.find(card => card.id === parseInt(id));
    console.log(detailsCard);
    const { picture, description, price, title, text_color } = detailsCard;
    const handleDonateBtn = card => {
        addToLS(card.id);
        toast('Congratulations...! Your Donation has been successfully')
    }
    return (
        <div className="md:w-8/12 mx-auto py-14 px-4">
            <div className="flex flex-col bg-black relative rounded-md">
                <div>
                    <img className="w-full rounded-md" src={picture} alt={title} />
                </div>
                <div className="absolute rounded-md w-full top-[73%] md:top-[89.5%] p-5 bg-black bg-opacity-60">
                    <button onClick={() => handleDonateBtn(detailsCard)} className="text-white font-semibold py-2 px-5 rounded-md" style={{ backgroundColor: `${text_color}` }}>Donate ${price}</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            <div className="mt-14 pb-14 flex flex-col gap-4">
                <h3 className="text-5xl font-bold text-black">{title}</h3>
                <p className="text-gray-600 font-semibold">{description}</p>
            </div>
        </div>
    );
};

export default DonationsDetails;