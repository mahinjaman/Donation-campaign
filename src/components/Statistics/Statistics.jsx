import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getDataFromLS } from "../../Utiliti/LocalStorage";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const [totalCards, setTotalCards] = useState([]);
    const storedYourDonations = getDataFromLS();
    useEffect(()=>{
        fetch('donationsData.json')
        .then(res=> res.json())
        .then(data => setTotalCards(data))
    },[])

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const data = [
        { name: 'Total Donation', value: totalCards.length },
        { name: 'Your Donation', value: storedYourDonations.length },
    ];

    const COLORS = ['#00C49F', 'red'];
    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <div>
                <ResponsiveContainer width='100%' height={400}>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="flex gap-5 justify-center">

                    <div className="flex gap-2 items-center">
                        <p>Total Donate:-</p>
                        <p className="w-16 h-2 bg-[#ff444a] rounded"></p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p>Your Donate:-</p>
                        <p className="w-16 h-2 bg-[#00c49f] rounded"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;