import { Helmet } from "react-helmet-async";
import DonationCard from "../DonationCard/DonationCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const [donationsCards, setDonationsCards] = useState([]);
    useEffect(()=>{
        fetch('donationsData.json')
        .then(res => res.json())
        .then(data => setDonationsCards(data))
    },[])
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 w-10/12 mx-auto">
                {
                    donationsCards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;