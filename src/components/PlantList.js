import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, onDeletePlant }) {
	return (
		<ul className="cards">
			{plants.map((plant) => (
				<PlantCard
					plant={plant}
					key={plant.id}
					onDeletePlant={handleDeletePlant}
				/>
			))}
		</ul>
	);
}

export default PlantList;
