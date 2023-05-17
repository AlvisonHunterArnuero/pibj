import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { MemberDetails } from './components/MemberDetails/index.tsx';
import { Team } from './components/Team/index.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'details/:memberId',
		element: <MemberDetails />,
	},
	{
		path: 'team',
		element: <Team />,
	},
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
