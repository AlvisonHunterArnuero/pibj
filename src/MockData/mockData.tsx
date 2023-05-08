import { IdentificationIcon } from '../components/IdentificationIcon';
import { TableData } from './Types';
const tblMockData: TableData[] = [
	{
		fullName: 'Jorge Luis Ortiz Solano',
		birthDate: '1981-01-01T00:00:00.000-06:00',
		address: 'Barrio Ricardo Morales Aviles',
		gender: 'Male',
		department: 'Carazo',
		phone: '88241651',
		maritalStatus: 'Married',
		baptized: true,
		memberSince: '2020-02-01T00:00:00.000-06:00',
		churchRole: 'Servidor',
	},
	{
		fullName: 'Onice Esmeralda Acevedo Castillo',
		birthDate: '1992-10-21T00:00:00.000-06:00',
		address: 'Praderas de Xilotepelt',
		gender: 'Female',
		department: 'Carazo',
		phone: '88888888',
		maritalStatus: 'Married',
		baptized: true,
		memberSince: '2017-03-03T00:00:00.000-06:00',
		churchRole: 'Directora de Alabanza',
	},
	{
		fullName: 'Alvison Hunter Arnuero',
		birthDate: '1966-02-09T00:00:00.000-06:00',
		address: 'Residencial Praderas de Xilotepelt Casa G2',
		gender: 'Male',
		department: 'Carazo',
		phone: '88638751',
		maritalStatus: 'Married',
		baptized: true,
		memberSince: '2017-06-06T00:00:00.000-06:00',
		churchRole: 'Ministro de Alabanza',
	},
];

export type TRowProps = {
	renderValue: (rowArg: string) => string;
};

export type TCellProps = {
	row: TRowProps;
};
const tblHeaders = [
	{
		header: 'Nombre',
		accessorKey: 'fullName',
		cell: ({ row }: TCellProps) => {
			return (
				<span className="font-semibold text-primary-900">
					{row.renderValue('fullName')}
				</span>
			);
		},
	},
	{
		header: 'Direccion',
		accessorKey: 'address',
		cell: ({ row }: TCellProps) => {
			return (
				<span className="font-semibold text-primary-900">
					{row.renderValue('address')}
				</span>
			);
		},
	},
	{
		header: 'Genero',
		accessorKey: 'gender',
		cell: ({ row }: TCellProps) => {
			return (
				<span className="font-semibold text-primary-900">
					{row.renderValue('gender') === 'Masculino' ? '👨' : '👩'}
				</span>
			);
		},
	},
	{
		header: 'Departamento',
		accessorKey: 'department',
		cell: ({ row }: TCellProps) => {
			return (
				<span className="font-semibold text-primary-900">
					{row.renderValue('department')}
				</span>
			);
		},
	},
	{
		header: 'Telefono',
		accessorKey: 'phone',
		cell: ({ row }: TCellProps) => {
			return (
				<span className="font-semibold text-primary-900">
					{row.renderValue('phone')}
				</span>
			);
		},
	},
	{
		header: 'Estado civil',
		accessorKey: 'maritalStatus',
		cell: ({ row }: TCellProps) => (
			<div className="flex items-center justify-center">
				<div className="flex-1 text-base font-semibold">
					{row.renderValue('maritalStatus')}
				</div>
			</div>
		),
	},
	{
		header: 'Detalles',
		accessorKey: '',
		cell: ({ row }: TCellProps) => (
			<span className="font-semibold text-primary-900">
				<button className="text-center" onClick={() => {alert("INFORMATION ON: "+row.renderValue('fullName'))}}>
					<IdentificationIcon />
				</button>
			</span>
		),
	},
];
export { tblMockData, tblHeaders };
