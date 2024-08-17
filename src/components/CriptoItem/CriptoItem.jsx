import React from 'react'
import s from "./style.module.scss";

const CriptoItem = ({ iconUrl, name, symbol, price, btcPrice, color }) => {
	return (
		<div className={s.criptoItem} style={{ "--colorBg": color }}>
			<header className={s.criptoItem__header}>
				<div className={s.criptoItem__headerRow}>
					<img
						className={s.criptoItem__img}
						src={iconUrl}
						alt={name}
					/>
					<div>
						<h3 className={s.criptoItem__title}>{name}</h3>
						<p>{symbol}</p>
					</div>
				</div>
			</header>

			<div className={s.criptoItem__body}>
				<p className={s.criptoItem__balance}>
					{price.split(".")[0]}.
					<sup>{price.split(".")[1].slice(0, 2)}</sup> USD
				</p>
				<p className={s.criptoItem__ratio}>{(+btcPrice).toFixed(2)} BTC</p>
			</div>
		</div>
	);
};

export default CriptoItem