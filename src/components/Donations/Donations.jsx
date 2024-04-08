import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../Utiliti/LocalStorage";
import DonationStoredCard from "../DonationStoredCard/DonationStoredCard";

const Donations = () => {
    const AllDonations = useLoaderData();
    const storedDonationsId = getDataFromLS();
    const storedDonationsCard = [];
    for(const id of storedDonationsId) {
        storedDonationsCard.push(AllDonations.find(donation => donation.id === id));
    }
    console.log(storedDonationsCard);
    return (
        <div className="pb-10">
            <Helmet>
                <title>Donations</title>
            </Helmet>
            <div className=" grid md:grid-cols-2 gap-4 lg:grid-cols-1 xl:grid-cols-2 md:w-10/12 mx-auto md:mt-20">
                {
                    storedDonationsCard.map(card => <DonationStoredCard key={card.id} card={card}></DonationStoredCard>)
                }
            </div>
        </div>
    );
};

export default Donations;