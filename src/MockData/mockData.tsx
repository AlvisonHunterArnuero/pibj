import { Link } from 'react-router-dom';
import { IdentificationIcon } from '../components/IdentificationIcon';
import { OriginalProps, TableData } from './Types';
const tblMockData: TableData[] = [
	{
		fullName: 'Jorge Luis Ortiz Solano',
		birthDate: '1981-01-01T00:00:00.000-06:00',
		address: 'Barrio Ricardo Morales Aviles',
		gender: 'Male',
		city: 'Jinotepe',
		department: 'Carazo',
		phone: '88241651',
		maritalStatus: 'Married',
		baptized: true,
		memberSince: '2020-02-01T00:00:00.000-06:00',
		churchRole: 'Servidor',
		mentor: 'Pastor Roman',
	},
	{
		fullName: 'Onice Esmeralda Acevedo Castillo',
		birthDate: '1992-10-21T00:00:00.000-06:00',
		address: 'Praderas de Xilotepelt',
		gender: 'Female',
		city: 'Jinotepe',
		department: 'Carazo',
		phone: '88888888',
		maritalStatus: 'Married',
		baptized: true,
		memberSince: '2017-03-03T00:00:00.000-06:00',
		churchRole: 'Directora de Alabanza',
		mentor: 'Pastor Roman',
	},
	{
		fullName: 'Alvison Hunter Arnuero',
		birthDate: '1966-02-09T00:00:00.000-06:00',
		address: 'Residencial Praderas de Xilotepelt Casa G2',
		gender: 'Male',
		city: 'Jinotepe',
		department: 'Carazo',
		phone: '88638751',
		maritalStatus: 'Married',
		baptized: true,
		memberSince: '2017-06-06T00:00:00.000-06:00',
		churchRole: 'Ministro de Alabanza',
		mentor: 'Pastor Roman',
	},
];

export type TRowProps = {
	renderValue: (rowArg: string) => string;
	original?: OriginalProps;
};

export type TCellProps = {
	row: TRowProps;
};
const tblHeaders = [
	{
		header: 'Nombre Completo',
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
		header: 'Direccion Actual',
		accessorKey: 'address',
		cell: ({ row }: TCellProps) => {
			return (
				<span className="font-normal text-primary-900">
					{row.renderValue('address')}
				</span>
			);
		},
	},
	{
		header: 'Sexo',
		accessorKey: 'gender',
		cell: ({ row }: TCellProps) => {
			return (
				<span className="font-bold">
					{row.renderValue('gender') === 'Masculino' ? 'M' : 'F'}
				</span>
			);
		},
	},
	{
		header: 'Departamento',
		accessorKey: 'department',
		cell: ({ row }: TCellProps) => {
			return (
				<span className="font-normal text-primary-900">
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
				<span className="font-normal text-primary-900">
					{row.renderValue('phone')}
				</span>
			);
		},
	},
	{
		header: 'Detalles',
		accessorKey: '',
		cell: ({ row }: TCellProps) => {
			const { original } = row;
			return (
				<span className="font-normal text-primary-900">
					<button type="button" className="text-center">
						<Link
							to={`details/${row.renderValue('fullName')}`}
							state={{
								fullName: original?.fullName,
								birthDate: original?.birthDate,
								address: original?.address,
								gender: original?.gender,
								city: original?.city,
								department: original?.department,
								phone: original?.phone,
								maritalStatus: original?.maritalStatus,
								baptized: original?.baptized,
								memberSince: original?.memberSince,
								churchRole: original?.churchRole,
								mentor: original?.mentor,
							}}
						>
							<IdentificationIcon />
						</Link>
					</button>
				</span>
			);
		},
	},
];
export { tblMockData, tblHeaders };
