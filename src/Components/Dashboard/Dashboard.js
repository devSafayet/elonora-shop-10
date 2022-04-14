import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => {
                const dataLoad = data.data;
                const monthlyData = dataLoad.map(data => {
                    const parts = data.sell.split('-');
                    const mc = {
                        month: parts[0],
                        investment: parseInt(parts[1])
                    }
                    return mc;
                });
                setData(monthlyData);
            })
    }, [])
    return (
        <BarChart width={800} height={400} data={data}>
            <Bar dataKey="investment" fill="#8884d8"></Bar>
            <XAxis dataKey="month"></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </BarChart>
    );
};

export default Dashboard;