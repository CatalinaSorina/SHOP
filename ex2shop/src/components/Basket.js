import React from 'react';
import styled from 'styled-components';

import BuyItem from './BuyItem';

// const ImgBar = styled.img`
//   width: 90vw;
//   alt: "img";
//   src: "../assets/bar.png";
// `;

const TrHead = styled.tr`
	width: 90vw;
	background-color: gray;
	border-radius: 1rem;
	font: 1.5rem Cursive;
	padding: 1rem;
	display: flex;
	justify-content: space-around;

	th {
		color: white;
		padding: 0.5rem;
		background-color: transparent;
	}
`;

const TrBottom = styled.tr`
	width: 90vw;
	background-color: #4b7891;
	border-radius: 1rem;
	font: 1.5rem Cursive;
	padding: 1rem;
	color: white;
	text-align: right;
`;

const Table = styled.table`
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 98vw;
	border-radius: 1rem;
`;

const Div = styled.div`
	height: 14vh;
	width: 98vw;
	padding: 1.5rem;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Basket = (props) => {
	return (
		props.basket && (
			<React.Fragment>
				<Table>
					<TrHead>
						<th />
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total price</th>
					</TrHead>
					<Div>
						{props.basket.map((item) => (
							<BuyItem
								key={item.id}
								item={item}
								addItem={() => props.addItem(item.id)}
								removeItem={() => props.removeItem(item.id)}
							/>
						))}
					</Div>
					<TrBottom>{props.price.toFixed(2)}</TrBottom>
				</Table>
			</React.Fragment>
		)
	);
};

export default Basket;
