import { useEffect, useState } from "react";
import * as dashboardAPI from '../../utilities/dashboard-api';
import './Dashboard.css';

export default function Dashboard() {
    const [names, setNames] = useState([]);

    useEffect(() => {
        const getNames = async () => {
            const newNames = await dashboardAPI.getAll('cow');
            setNames(newNames);
        };
        getNames();
    }, []);

    return (
        <div id='dashboard'>
            <img
                src="https://i.imgur.com/4fpQ798.png"
                alt="Farm Animal"
                className="game-details-animal"
			></img>
            <div id='name-container'>

            </div>
        </div>
    )
}