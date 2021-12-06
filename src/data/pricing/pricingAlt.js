import paperPlane from '../../assets/img/illustrations/paper-plane.svg'
import startup from '../../assets/img/illustrations/startup.svg'

export default [
	{
		type: 'Pro',
		price: {
			Enero: 3600,
			Febrero: 2850,
		},
		image: paperPlane,
		features: [
			{ title: 'Servicio de lectura de PDF y obtención de datos del PDF' },
			{ title: 'Vista Usuarios' },
			{ title: 'Vista Clientes (Remitentes y Beneficiarios)' },
			{ title: 'Vista Giros' },
			{ title: 'Servicio de registro de movimientos' },
			{ title: 'Estadisticas de giros en el mes' },
			{ title: 'Estadisticas de clientes en el mes (Solo Remitentes)' },
			{ title: 'Control de pdf no impresos' },
			{ title: 'Vista de autenticación' },
			{ title: 'Actualización de identidad de empresa' },
			{ title: 'Servicio de calculo de comisiones', isDisable: true },
			{ title: 'Restriciones de vistas y funciones según rol de usuario', isDisable: true },
			{ title: 'Asignación de Remitentes a otros Remitentes', isDisable: true },
		],
	},
	{
		type: 'Full',
		price: {
			Enero: 5200,
			Febrero: 3950,
		},
		image: startup,
		features: [
			{ title: 'Servicio de lectura de PDF y obtención de datos del PDF' },
			{ title: 'Vista Usuarios' },
			{ title: 'Vista Clientes (Remitentes y Beneficiarios)' },
			{ title: 'Vista Giros' },
			{ title: 'Servicio de registro de movimientos' },
			{ title: 'Estadisticas de giros en el mes' },
			{ title: 'Estadisticas de clientes en el mes (Solo Remitentes)' },
			{ title: 'Control de pdf no impresos' },
			{ title: 'Vista de autenticación' },
			{ title: 'Actualización de identidad de empresa' },
			{ title: 'Servicio de calculo de comisiones' },
			{ title: 'Restriciones de vistas y funciones según rol de usuario' },
			{ title: 'Asignación de Remitentes a otros Remitentes' },
		],
	},
]
