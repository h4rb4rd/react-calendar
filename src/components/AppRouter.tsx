import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
	const auth = true

	const routes = auth ? privateRoutes : publicRoutes

	return (
		<Routes>
			{routes.map(route => {
				return (
					<Route
						path={route.path}
						element={route.component}
						key={route.id}
					></Route>
				)
			})}
		</Routes>
	)
}

export default AppRouter
