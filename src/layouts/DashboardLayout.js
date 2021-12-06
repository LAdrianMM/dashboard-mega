import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard'
import DashboardOfi from '../components/dashboard-ofi'
import DashboardAlt from '../components/dashboard-alt/DashboardAlt'
import Giros from '../components/giros'
import Clients from '../components/ClientsView'
import NavbarTop from '../components/navbar/NavbarTop'
import NavbarVertical from '../components/navbar/NavbarVertical'
import AppContext from '../context/Context'
import SidePanelModal from '../components/side-panel/SidePanelModal'
import { getPageName } from '../helpers/utils'

const DashboardLayout = ({ location }) => {
	const { isFluid, isVertical, navbarStyle } = useContext(AppContext)

	const isKanban = getPageName('kanban')

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<div className={isFluid || isKanban ? 'container-fluid' : 'container'}>
			{isVertical && <NavbarVertical isKanban={isKanban} navbarStyle={navbarStyle} />}
			<div className="content">
				<NavbarTop />
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/dashboard-alt" exact component={DashboardAlt} />
					<Route path="/dashboard-ofi" exact component={DashboardOfi} />
					<Route path="/giros" exact component={Giros} />
					<Route path="/client" exact component={Clients} />
					{/*Redirect*/}
					<Redirect to="/errors/404" />
				</Switch>
				{/* {!isKanban && <Footer />} */}
			</div>
			<SidePanelModal path={location.pathname} />
		</div>
	)
}

DashboardLayout.propTypes = { location: PropTypes.object.isRequired }

export default DashboardLayout
