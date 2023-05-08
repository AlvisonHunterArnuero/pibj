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
		<div className="flex flex-col overflow-x-auto">
			<div className="sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div className="overflow-x-auto">
						<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
								{table.getHeaderGroups().map((headerGroup) => (
									<tr
										className="divide-x"
										key={headerGroup.id}
									>
										{headerGroup.headers.map((header) => {
											return (
												<th
													scope="row"
													className="px-6 py-4 font-medium text-gray-900 bg-gray-900 whitespace-nowrap dark:text-white"
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
										<tr
											className="divide-x border-b dark:border-neutral-300"
											key={row.id}
										>
											{row.getVisibleCells().map((cell) => {
												return (
													<td
														className="whitespace-nowrap  px-6 py-4"
														key={cell.id}
													>
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
											const page = e.target.value
												? Number(e.target.value) - 1
												: 0;
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
				</div>
			</div>
		</div>
	);
}
