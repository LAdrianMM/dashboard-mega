import React, { Fragment } from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import CountUp from 'react-countup'
import loadable from '@loadable/component'
import CardSummary from './CardSummary'
import FalconCardHeader from '../common/FalconCardHeader'
import ButtonIcon from '../common/ButtonIcon'
import EventTicket from './EventTicket'

const PurchasesTable = loadable(() => import('./PurchasesTable'))

const Dashboard = () => {
	// State

	return (
		<Fragment>
			<div>
				<Row>
					<Col sm={12} md={6} lg={5}>
						<CardSummary title="Efectivo en Mano" color="warning" linkText="See more">
							<CountUp end={43594} prefix="$" separator="," decimal="." />
						</CardSummary>
					</Col>
				</Row>
			</div>
			<Card className="mb-3">
				<FalconCardHeader title="Giros en la Oficina" light={false}>
					<Fragment>
						<ButtonIcon icon="plus" transform="shrink-3 down-2" color="falcon-default" size="sm">
							Agregar
						</ButtonIcon>
					</Fragment>
				</FalconCardHeader>
				<CardBody className="p-0">
					<PurchasesTable />
				</CardBody>
			</Card>
			<EventTicket />
		</Fragment>
	)
}

export default Dashboard
