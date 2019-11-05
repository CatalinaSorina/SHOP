import React from 'react';
import styled from 'styled-components';
import BackgroundAddImage from '../assets/button_add.png';
import BackgroundRemoveImage from '../assets/button_remove.png';

const ButonAdd = styled.button`
	background-image: url(${BackgroundAddImage});
	border: none;
	background-color: transparent;
	margin: 0.2rem;
`;
const ButonRemove = styled.button`
	background-image: url(${BackgroundRemoveImage});
	border: none;
	background-color: transparent;
	margin: 0.2rem;
`;
const Tr = styled.tr`
	width: 90vw;
	height: 2rem;
	background-color: #88a792;
	border-radius: 1rem;
	font: 1.5rem Cursive;
	padding: 0.2rem;
	margin: 0.4rem;
	display: flex;
	justify-content: space-around;
`;

const Img = styled.img`
	width: 1rem;
	margin: 0;
`;

const BuyItem = (props) => {
	return (
		<Tr>
			<td>
				<Img alt="img" src={props.item.imageUrl} onClick={props.addItem} />
			</td>
			<td>{props.item.name}</td>
			<td>{props.item.price}</td>
			<td>{props.item.qty}</td>
			<ButonAdd onClick={props.addItem} className="add">
				Add
			</ButonAdd>
			<ButonRemove onClick={props.removeItem} className="remove">
				Remove
			</ButonRemove>
		</Tr>
	);
};

export default BuyItem;
