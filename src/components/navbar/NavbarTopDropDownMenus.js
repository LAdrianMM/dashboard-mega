import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import NavbarDropdown from './NavbarDropdown'
import { generalRoutes } from '../../routes'
import { NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { breakpoints, getPageName } from '../../helpers/utils'
import { navbarBreakPoint, topNavbarBreakpoint } from '../../config'
import AppContext from '../../context/Context'

const NavbarTopDropDownMenus = ({ setNavbarCollapsed, setShowBurgerMenu }) => {
	const { isCombo, isTopNav } = useContext(AppContext)

	// const components = [pluginRoutes, utilityRoutes]

	// const pages = [pageRoutes, kanbanRoutes, widgetsRoutes]

	const handleSetNavbarCollapsed = () => {
		const windowWidth = window.innerWidth
		isTopNav && !isCombo && windowWidth < breakpoints[topNavbarBreakpoint] && setNavbarCollapsed(false)
		isCombo && windowWidth < breakpoints[navbarBreakPoint] && setShowBurgerMenu(false)
	}
	const isLanding = getPageName('landing')
	return (
		<>
			<NavbarDropdown
				title={generalRoutes.name}
				items={generalRoutes.children}
				handleSetNavbarCollapsed={handleSetNavbarCollapsed}
			/>
			{/* <NavbarDropdown title={pageRoutes.name} items={pages} handleSetNavbarCollapsed={handleSetNavbarCollapsed} /> */}
			{/* <NavbarDropdownComponents
				title={componentRoutes.name}
				items={components}
				handleSetNavbarCollapsed={handleSetNavbarCollapsed}
			/> */}

			{isTopNav && !isLanding && (
				<NavItem onClick={handleSetNavbarCollapsed}>
					<NavLink className="nav-link" to="/documentation">
						Documentation
					</NavLink>
				</NavItem>
			)}
		</>
	)
}

NavbarTopDropDownMenus.propTypes = { setNavbarCollapsed: PropTypes.func.isRequired }

export default NavbarTopDropDownMenus
