import { Helmet } from "react-helmet-async";
import { getDataFromLS } from "../../Utiliti/LocalStorage";
import DonationStoredCard from "../DonationStoredCard/DonationStoredCard";
import { useEffect, useState } from "react";

const Donations = () => {
    const [AllDonations, setAllDonations] = useState([]);
    const [displayStoredCards, setDisplayStoredCards] = useState([]);
    const [displayStoresDonationLength, setDisplayStoresDonationLength] = useState(4);
    useEffect(()=>{
        fetch('donationsData.json')
        .then(res=> res.json())
        .then(data => setAllDonations(data))
    },[])
    const storedDonationsId = getDataFromLS();
    useEffect(()=>{
        const storedDonationsCard = [];
        if (AllDonations.length) {
            for (const id of storedDonationsId) {
                storedDonationsCard.push(AllDonations.find(donation => donation.id === id));
            }
            
        }
        setDisplayStoredCards(storedDonationsCard)
    },[AllDonations])


    const handleShowDonation = () => {
        setDisplayStoresDonationLength(displayStoredCards.length);
    }

    const displayDonateCardsSpecific = displayStoredCards.slice(0, displayStoresDonationLength)
    return (
        <div className="pb-10">
            <Helmet>
                <title>Donations</title>
            </Helmet>
            <div className=" grid md:grid-cols-2 gap-4 lg:grid-cols-1 xl:grid-cols-2 md:w-10/12 mx-auto md:mt-20 p-4">
                {
                    displayDonateCardsSpecific.map(card => <DonationStoredCard key={card.id} card={card}></DonationStoredCard>)
                }
            </div>
            <div className={`flex mt-10 items-center justify-center ${storedDonationsId.length > 4 ? 'static' : 'hidden'}`}>
                <button onClick={handleShowDonation} className={`bg-green-600 text-white font-semibold py-2 px-5 rounded-md ${displayStoresDonationLength === displayStoredCards.length ? 'hidden' : 'static'}`}>
                    Show All
                </button>
            </div>
        </div>
        
    );
};

export default Donations;