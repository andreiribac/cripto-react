import React from "react";
import s from "./style.module.scss";
import Card from "../../components/Card/Card";
import CriptoItem from "../../components/CriptoItem/CriptoItem";
import FilterBlock from "../../components/FilterBlock/FilterBlock";

const Main = ({ coins, setCoins, filteredCoins, balance }) => {
	return (
		<>
			<section className="section">
				<div className="wrapper">
					<h1 className="text-center">CRIPTO PROJECT</h1>
					<Card balance={balance} />
				</div>
			</section>
			<section className="section">
				<div className="wrapper">
					<FilterBlock coins={coins} setCoins={setCoins} />
					<div className={s.main__grid}>
						{coins.length > 0 ? (
							filteredCoins.map((el) => (
								<CriptoItem key={el.uuid} {...el} />
							))
						) : (
							<div>Loading...</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Main;
