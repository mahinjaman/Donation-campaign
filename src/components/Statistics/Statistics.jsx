import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
    const [donationsCards, setDonationsCards] = useState([])
    useEffect(()=>{
        fetch('donationsData.json')
        .then(res=> res.json())
        .then(data => setDonationsCards(data))
    },[])
    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <div>
                <h1>Card:- {donationsCards.length}</h1>
            </div>
        </div>
    );
};

export default Statistics;