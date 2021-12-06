import React, { createRef, Fragment, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import uuid from 'uuid/v1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Card, CardBody, Col, CustomInput, Input, Row } from 'reactstrap'
import ButtonIcon from '../common/ButtonIcon'
import FalconCardHeader from '../common/FalconCardHeader'

const amountFormatter = amount => <Fragment>${amount}</Fragment>

const typeFormatter = status => {
	if (status) {
		return (
			<Badge color="soft-success" className="rounded-capsule">
				Ingreso
				<FontAwesomeIcon icon="check" transform="shrink-2" className="ml-1" />
			</Badge>
		)
	} else {
		return (
			<Badge color="soft-danger" className="rounded-capsule">
				Egreso
				<FontAwesomeIcon icon="ban" transform="shrink-2" className="ml-1" />
			</Badge>
		)
	}
}

const columns = [
	{
		dataField: 'description',
		text: 'Descripción',
		classes: 'border-0 align-middle',
		headerClasses: 'border-0',
	},
	{
		dataField: 'value',
		text: 'Valor (CLP)',
		formatter: amountFormatter,
		classes: 'border-0 align-middle',
		headerClasses: 'border-0',
	},
	{
		dataField: 'type',
		text: 'Tipo',
		formatter: typeFormatter,
		classes: 'border-0 align-middle',
		headerClasses: 'border-0',
	},
]

const initialValues = {
	description: '',
	value: '',
	type: false,
}

const EventTicket = () => {
	let table = createRef()

	const [fieldValues, setFieldValues] = useState(initialValues)
	const [movements, setMovements] = useState([])

	const handleAddMovement = () => {
		if (fieldValues.description && fieldValues.value) {
			setMovements([
				...movements,
				{
					id: uuid(),
					description: fieldValues.description,
					value: fieldValues.value,
					type: fieldValues.type,
				},
			])
			setFieldValues(initialValues)
		}
	}

	console.log(movements)

	return (
		<Card className="mb-3">
			<FalconCardHeader title="Movimiento de Efectivo" light={false} />
			<CardBody className="bg-light">
				<Fragment>
					<div className="table-responsive">
						<BootstrapTable
							ref={table}
							bootstrap4
							keyField="id"
							data={movements}
							columns={columns}
							bordered={false}
							classes="table-dashboard table-sm fs--1 border-bottom border-200 mb-0 table-dashboard-th-nowrap"
							rowClasses="btn-reveal-trigger border-top border-200"
							headerClasses="bg-200 text-900 border-y border-200"
						/>
					</div>
				</Fragment>
				<Row noGutters className="px-1 py-3">
					<Col xs="auto" className="pr-3">
						<Input
							bsSize="sm"
							placeholder="Descripción"
							value={fieldValues.description}
							onChange={({ target }) => setFieldValues({ ...fieldValues, description: target.value })}
						/>
					</Col>
					<Col xs="auto" className="pr-3">
						<Input
							type="number"
							bsSize="sm"
							placeholder="Valor"
							value={fieldValues.value}
							onChange={({ target }) => setFieldValues({ ...fieldValues, value: target.value })}
						/>
					</Col>
					<Col xs="auto" className="pr-3">
						<CustomInput
							id="switch"
							type="switch"
							name="MovTypeSwitch"
							checked={fieldValues.type}
							onChange={({ target }) => setFieldValues({ ...fieldValues, type: target.checked })}
						/>
					</Col>
					<Col className="pl-3 fs--1">
						<ButtonIcon
							transform="shrink-3 down-2"
							color="falcon-default"
							size="sm"
							icon="plus"
							onClick={handleAddMovement}
						>
							Agregar
						</ButtonIcon>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default EventTicket
