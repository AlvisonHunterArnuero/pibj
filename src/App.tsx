import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { TableData } from './MockData/Types';
import { tblHeaders } from './MockData/mockData';
import { PaginatedTable } from './components/Table';
import { Header } from './components/Header';
function App() {
	const [data, setData] = useState([]);
	const query = `
	{
		membresiaPibjCollection {
			items {
				fullName
				birthDate
				address
				gender
				city
				department
				phone
				maritalStatus
				baptized
				memberSince
				churchRole
				mentor
			}
		}
	}
  `;
	useEffect(() => {
		window
			.fetch(
				`https://graphql.contentful.com/content/v1/spaces/${
					import.meta.env.VITE_CONTENTFUL_SPACE_KEY
				}/`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						// Authenticate the request
						Authorization: `Bearer ${
							import.meta.env.VITE_CONTENTFUL_BEARER_TOKEN_KEY
						}`,
					},
					// send the GraphQL query
					body: JSON.stringify({ query }),
				}
			)
			.then((response) => response.json())
			.then(({ data, errors }) => {
				if (errors) {
					console.error(errors);
				}
				setData(data.membresiaPibjCollection.items);
			});
	}, [query]);
	const columns = React.useMemo<ColumnDef<TableData>[]>(() => tblHeaders, []);
	return (
		<>
			<Header />
			{data && (
				<PaginatedTable
					{...{
						data,
						columns,
					}}
				/>
			)}
			<hr />
		</>
	);
}
export default App;
