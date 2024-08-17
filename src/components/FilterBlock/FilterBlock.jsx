import React, { useState, useEffect } from "react";
import s from "./style.module.scss";

const FilterBlock = ({ coins, setCoins }) => {
	const [localValue, setLocalValue] = useState("");

	const setSearchValue = (e) => {
		setLocalValue(e.target.value);
	};

	useEffect(() => {
		const searchValue = localValue.toLowerCase();
		setCoins(
			coins.filter((coin) =>
				coin.name.toLowerCase().includes(searchValue)
			)
		);
	}, [localValue]);
	

	return (
		<label className={s.search}>
			<input
				className={s.search__input}
				value={localValue}
				onChange={(e) => setSearchValue(e)}
				placeholder="Bitcoin"
				type="text"
			/>
		</label>
	);
};

export default FilterBlock;
