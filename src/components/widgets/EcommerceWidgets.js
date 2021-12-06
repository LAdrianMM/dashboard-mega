import React, { useContext } from 'react'
import WidgetsSectionTitle from './WidgetsSectionTitle'
import WidgetsProducts from './WidgetsProducts'
import WidgetsBilling from './WidgetsBilling'
import { Row, Col } from 'reactstrap'
import { calculateSale, getTotalPrice } from '../../helpers/utils'
import { ProductContext } from '../../context/Context'

const EcommerceWidgets = () => {
	const { products, shoppingCart, appliedPromo } = useContext(ProductContext)

	const calculatedShippingCost = parseFloat(
		shoppingCart
			.map(shoppingCartItem => products.find(product => product.id === shoppingCartItem.id))
			.filter(product => product.hasOwnProperty('shippingCost') && product.shippingCost !== 0)
			.reduce(
				(accumulated, product) => (accumulated > product.shippingCost ? accumulated : product.shippingCost),
				0
			)
	)
	const subTotal = parseFloat(getTotalPrice(shoppingCart, products).toFixed(2))
	const payableTotal = parseFloat(
		(
			parseFloat(calculateSale(subTotal, !!appliedPromo ? appliedPromo.discount : 0)) + calculatedShippingCost
		).toFixed(2)
	)

	return (
		<>
			<WidgetsSectionTitle
				icon="cart-plus"
				title="E-commerce"
				subtitle="Find more cards which are delicately made for E-commerce."
				transform="shrink-1"
			/>
			<WidgetsProducts />
			<Row className="mt-3" noGutters>
				<Col lg={6} className="pr-lg-2 mb-3 mb-lg-0">
					<WidgetsBilling />
				</Col>
			</Row>
		</>
	)
}

export default EcommerceWidgets
