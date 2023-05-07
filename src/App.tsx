import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { TableData } from './MockData/Types';
import { tblHeaders } from './MockData/mockData';
import { PaginatedTable } from './components/Table';

function App() {
	const [data, setData] = useState([]);
	const query = `
	{
		memberPibjCollection {
			items {
				fullName
				birthDate
				address
				gender
				department
				phone
				maritalStatus
				baptized
				memberSince
				churchRole
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
				console.log('DATA FROM FETCH: ', data);
				setData(data.memberPibjCollection.items);
			});
	}, [query]);
	const columns = React.useMemo<ColumnDef<TableData>[]>(() => tblHeaders, []);
	return (
		<>
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
