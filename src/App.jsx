import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { getCoins } from "./api/api";

function App() {
  const [balance, setBalance] = useState(999)
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  
	useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCoins();
				setCoins(data);
        setFilteredCoins(data);
			} catch (error) {
				console.error("Failed to fetch coins:", error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<Header />
			<main>
				<Main
					balance={balance}
					coins={coins}
					setCoins={setFilteredCoins}
					filteredCoins={filteredCoins}
					setFilteredCoins={setFilteredCoins}
				/>
			</main>
		</>
	);
}

export default App;
