import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import DonationCard from "../DonationCard/DonationCard";

const Donations = () => {
    const [donationsCards, setDonationsCards] = useState([])
    useEffect(()=>{
        fetch('donationsData.json')
        .then(res => res.json())
        .then(data => setDonationsCards(data))
    },[])
    return (
        <div>
            <Helmet>
                <title>Donations</title>
            </Helmet>
            <div>
                {
                    donationsCards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Donations;