import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, Media, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import cloudUpload from '../../assets/img/icons/cloud-upload.svg'
import SummaryCard from './SummaryCard'
import BestSellingProducts from './BestSellingProducts'
import RunningProjects from './RunningProjects'
import SharedFiles from './SharedFiles'
import TotalSales from './TotalSales'
import PurchasesTable from '../dashboard/PurchasesTable'

import weeklySales from '../../data/dashboard/weeklySales'
import products from '../../data/dashboard/products'
import FalconCardHeader from '../common/FalconCardHeader'
import ButtonIcon from '../common/ButtonIcon'
import UploadFile from './UploadFile'
import PaymentsLineChart from './PaymentsLineChart'
import { isIterableArray } from '../../helpers/utils'

const DashboardAlt = () => {
	const [showModal, setShowModal] = useState(false)
	// const [dropzonePlaceholder, setDropzonePlaceholder] = useState('Drop or upload file')
	const [files, setFiles] = useState([])
	const [addedTransfer, setAddedTransfer] = useState(false)

	const handleNextAddTransfer = () => {
		if (isIterableArray(files)) {
			setAddedTransfer(!addedTransfer)
		}
	}

	const handleAddTransfer = () => {
		setShowModal(!setShowModal)
		setAddedTransfer(false)
		setFiles([])
	}

	return (
		<Fragment>
			<PaymentsLineChart />

			<Row noGutters>
				<Col md={6} className="col-xxl-4 mb-3 pr-md-2">
					<SummaryCard title="Giros Oficina" data={weeklySales} />
				</Col>
				{/* <Col md={6} className="col-xxl-3 mb-3 pl-md-2 pr-xxl-2">
					<TotalOrder data={totalOrder} />
				</Col> */}
				{/* <Col md={6} className="col-xxl-3 mb-3 pr-md-2 pl-xxl-2">
					<MarketShare data={marketShare} />
				</Col> */}
				<Col md={6} className="col-xxl-4 mb-3 pl-md-2">
					<SummaryCard title="Giros William" data={weeklySales} />
				</Col>
				<Col md={6} className="col-xxl-4 mb-3 pl-md-2">
					<SummaryCard title="Giros Alberto" data={weeklySales} />
				</Col>
			</Row>

			<Row noGutters>
				<Col>
					<Card className="mb-3">
						<FalconCardHeader title="Recent Purchases" light={false}>
							<Fragment>
								<ButtonIcon
									onClick={() => setShowModal(!showModal)}
									icon="plus"
									transform="shrink-3 down-2"
									color="falcon-default"
									size="sm"
								>
									Agregar
								</ButtonIcon>
								<ButtonIcon
									icon="filter"
									transform="shrink-3 down-2"
									color="falcon-default"
									size="sm"
									className="mx-2"
								>
									Filter
								</ButtonIcon>
								<ButtonIcon
									icon="external-link-alt"
									transform="shrink-3 down-2"
									color="falcon-default"
									size="sm"
								>
									Export
								</ButtonIcon>
							</Fragment>
						</FalconCardHeader>
						<CardBody className="p-0">
							<PurchasesTable />
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row noGutters>
				<Col lg={6} className="mb-3 pr-lg-2 mb-3">
					<RunningProjects projects={products} />
				</Col>
				<Col lg={6} className="mb-3 pl-lg-2 mb-3">
					<TotalSales className="h-lg-100" />
				</Col>
			</Row>

			{/* <Row noGutters>
				<Col lg={6} xl={7} className="col-xxl-8 pr-lg-2 mb-3">
					<StorageStatus data={storageStatus} className="h-lg-100" />
				</Col>
				<Col lg={6} xl={5} className="col-xxl-4 mb-3 pl-lg-2">
					<SpaceWarning />
				</Col>
			</Row> */}

			<Row noGutters>
				<Col lg={7} xl={8} className="mb-3 pr-lg-2 mb-3">
					<BestSellingProducts products={products} />
				</Col>
				<Col lg={5} xl={4} className="mb-3 pl-lg-2">
					<SharedFiles files={files} />
				</Col>
			</Row>

			{/* <Row noGutters>
				<Col sm={6} className="col-xxl-3 pr-sm-2 mb-3 mb-xxl-0">
					<ActiveUsers users={resolveUsers} />
				</Col>
				<Col sm={6} className="col-xxl-3 pl-sm-2 order-xxl-1 mb-xxl-0  mb-3">
					<BandwidthSaved total={38.44} saved={35.75} />
				</Col>
				<Col className="col-xxl-6 px-xxl-2">
					<TopProducts data={topProducts} colors={productColors} className="h-100" />
				</Col>
			</Row> */}
			{/* 
			<Col xs={12}>
				<UploadFile
					onChange={setFiles}
					accept=".pdf"
					placeholder={
						<Fragment>
							<Media className=" fs-0 mx-auto d-inline-flex align-items-center">
								<img src={cloudUpload} alt="" width={25} className="mr-2" />
								<Media>
									<p className="fs-0 mb-0 text-700">Carga el pdf del Giro</p>
								</Media>
							</Media>
						</Fragment>
					}
				/>
			</Col> */}

			<Modal centered fullscreen="md" size="lg" isOpen={showModal}>
				<ModalHeader toggle={() => setShowModal(!showModal)}>Agregar un Giro</ModalHeader>
				<ModalBody>
					{addedTransfer ? (
						'Hola'
					) : (
						<UploadFile
							onChange={setFiles}
							files={files}
							accept=".pdf"
							preview
							placeholder={
								<Fragment>
									<Media className=" fs-0 mx-auto d-inline-flex align-items-center">
										<img src={cloudUpload} alt="" width={25} className="mr-2" />
										<Media>
											<p className="fs-0 mb-0 text-700">Carga el pdf del Giro</p>
										</Media>
									</Media>
								</Fragment>
							}
						/>
					)}
				</ModalBody>
				<ModalFooter>
					{addedTransfer ? (
						<Button color="primary" onClick={handleAddTransfer}>
							Aceptar
						</Button>
					) : (
						<Button color="primary" onClick={handleNextAddTransfer}>
							Siguiente
						</Button>
					)}
					<Button onClick={() => setShowModal(!showModal)}>Cancelar</Button>
				</ModalFooter>
			</Modal>
		</Fragment>
	)
}

export default DashboardAlt
