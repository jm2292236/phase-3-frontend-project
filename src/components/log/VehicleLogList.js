import React from 'react'
import VehicleLogCard from './VehicleLogCard';

function VehicleLogList({vehicleLogs}) {
    return (
        <ul className="cards">
            {vehicleLogs.map((log) => {
                return <VehicleLogCard key={log.id} log={log} />;
            })}
        </ul>
    )
}

export default VehicleLogList;
