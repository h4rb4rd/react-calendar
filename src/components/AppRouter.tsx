import React from 'react'
import { privateRoutes, publicRoutes } from '../routes'
import { Route, Routes } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'

const AppRouter = () => {
	const { isAuth } = useTypedSelector(state => state.auth)
	const routes = isAuth ? privateRoutes : publicRoutes

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
