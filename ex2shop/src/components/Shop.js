import React from 'react';
import { connect } from 'react-redux';
import { addItem, addQtyToItem, removeItem } from '../store/actions/index';

import Item from './Item';
import Basket from './Basket';

class Shop extends React.Component {
	addAnItem = (item) => {
		const itemExist = this.props.basket.filter((itemBasket) => itemBasket.name === item.name);
		if (itemExist.length > 0) {
			this.props.addQtyToItem(item.id);
			console.log('Basket:', this.props.basket);
			console.log('Item exist:', item);
		} else {
			this.props.addItem({ ...item, qty: 1 });
			console.log('Basket:', this.props.basket);
			console.log('Item:', item);
		}
	};

	render() {
		return (
			this.props.shop.length > 0 && (
				<React.Fragment>
					{this.props.shop.map((item) => (
						<Item
							key={item.id}
							item={item}
							addItem={() => this.addAnItem(item)}
							removeItem={() => this.props.removeItem(item.id)}
						/>
					))}
					<p>Your shopping Basket</p>
					<Basket
						basket={this.props.basket}
						price={this.props.price}
						addItem={this.props.addQtyToItem}
						removeItem={this.props.removeItem}
					/>
				</React.Fragment>
			)
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		shop: state.shop,
		basket: state.basket,
		price: state.price
	};
};

const mapDispatchToProps = {
	addItem,
	addQtyToItem,
	removeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
