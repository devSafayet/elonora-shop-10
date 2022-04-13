import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>This is Dashborad: {data.length}</h2>
        </div>
    );
};

export default Dashboard;