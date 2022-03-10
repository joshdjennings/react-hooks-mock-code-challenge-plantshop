import React, { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react/cjs/react.production.min';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage() {
	const [plants, setPlants] = useState([]);

	useEffect(() => {
		fetch('http://localhost:6001/plants')
			.then((res) => res.json())
			.then((plantsArray) => {
				setPlants(plantsArray);
			});
	}, []);

	function handleAddPlant(newPlant) {
		const updatedPLantsArray = [...NewPlantForm, newPlant];
		setPlants(updatedPLantsArray);
	}

	return (
		<main>
			<NewPlantForm onAddPlant={handleAddPlant} />
			<Search />
			<PlantList plants={plants} />
		</main>
	);
}

export default PlantPage;
