import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	ColumnDef,
	flexRender,
} from '@tanstack/react-table';
import { TableData } from '../../MockData/Types';

export function PaginatedTable({
	data,
	columns,
}: {
	data: TableData[];
	columns: ColumnDef<TableData>[];
}) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});
	if (!data) {
		return <h1>"Loading..."</h1>;
	}
	return (
		<div className="p-2 w-full">
			<div className="mb-3 overflow-auto rounded-2xl border border-primary-400 font-medium" />
			<table className="min-w-full table-auto text-left text-base">
				<thead className="text-sm  font-medium">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr className="divide-x divide-primary-500/25" key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<th
										className=" bg-primary-500/25 px-3 py-5 text-green-900"
										key={header.id}
										colSpan={header.colSpan}
									>
										{header.isPlaceholder ? null : (
											<div>
												{flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
											</div>
										)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody className="divide-y divide-primary-400 text-gray-800">
					{table.getRowModel().rows.map((row) => {
						return (
							<tr className="divide-x" key={row.id}>
								{row.getVisibleCells().map((cell) => {
									return (
										<td className="p-3" key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="h-2" />
			<div className="flex flex-row justify-between gap-3 text-center font-normal">
				<div className="flex flex-row gap-3">
					<button
						className="border rounded p-1"
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						{'<<'}
					</button>
					<button
						className="border rounded p-1"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						{'<'}
					</button>
					<button
						className="border rounded p-1"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						{'>'}
					</button>
					<button
						className="border rounded p-1"
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
					>
						{'>>'}
					</button>
					<span className="flex items-center gap-1">
						<div>Page</div>
						<strong>
							{table.getState().pagination.pageIndex + 1} of{' '}
							{table.getPageCount()}
						</strong>
					</span>
					<span className="flex items-center gap-1">
						| Go to page:
						<input
							type="number"
							defaultValue={table.getState().pagination.pageIndex + 1}
							onChange={(e) => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0;
								table.setPageIndex(page);
							}}
							className="border p-1 rounded w-16"
						/>
					</span>
					<select
						className="font-normal"
						value={table.getState().pagination.pageSize}
						onChange={(e) => {
							table.setPageSize(Number(e.target.value));
						}}
					>
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
}