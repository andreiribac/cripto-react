import React from 'react'
import s from './style.module.scss'
import WirhRuBalance from '../../helpers/hoc/wirhRuBalance';



const Card = ({balance, ruBalance }) => {
	return (
		<div className={s.card}>
			<div className={s.card__bank}>Cripto Finace</div>
			<div className={s.card__chip}></div>
			<div className={s.card__balance}>{balance} $</div>
			<div className={s.card__ruBalance}>{ruBalance} RUB</div>
			<div className={s.card__footer}>
				<div className={s.card__name}>Name Surname</div>
			</div>
		</div>
	);
};

export default WirhRuBalance(Card);