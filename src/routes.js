export const ofiRoutes = {
	name: 'Oficina',
	to: '/',
	exact: true,
	icon: 'chart-pie',
	children: [{ to: '/dashboard-ofi', name: 'Dashboard Oficina' }],
}

export const generalRoutes = {
	name: 'General',
	to: '/',
	exact: true,
	icon: 'copy',
	children: [
		{
			to: '/',
			name: 'Dashboard',
			exact: true,
		},
		{ to: '/dashboard-alt', name: 'Dashboard alt' },
		// { to: '/dashboard-ofi', name: 'Dashboard Oficina' },
		{ to: '/giros', name: 'Giros' },
		{ to: '/client', name: 'Clientes' },
		// { to: '/feed', name: 'Feed', exact: true },
		// { to: '/landing', name: 'Landing' }
	],
}

export default [ofiRoutes, generalRoutes]
