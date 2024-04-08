import { Helmet } from "react-helmet-async";
import DonationCard from "../DonationCard/DonationCard";
import { useEffect, useState } from "react";
import SearchField from "../SearchField/SearchField";

const Home = () => {
    const [donationsCards, setDonationsCards] = useState([]);
    useEffect(()=>{
        fetch('donationsData.json')
        .then(res => res.json())
        .then(data => setDonationsCards(data))
    },[]);
    const handleSearch = text => {
        const cards = donationsCards.filter(card => card.category.toLowerCase().includes(text.toLowerCase()));
        setDonationsCards(cards);
    }
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <SearchField handleSearch={handleSearch}></SearchField>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 w-10/12 mx-auto">
                {
                    donationsCards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;