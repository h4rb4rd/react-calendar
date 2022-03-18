import React from 'react'
import { Navigate } from 'react-router-dom'
import Event from '../pages/Event'
import Login from '../pages/Login'

export interface IRoute {
	id: number
	path: string
	component: React.ReactElement
}
//
export enum RouteNames {
	LOGIN = '/login',
	EVENT = '/',
}

export const publicRoutes: IRoute[] = [
	{ id: 1, path: RouteNames.LOGIN, component: <Login /> },
	{ id: 2, path: '*', component: <Navigate to={RouteNames.LOGIN} /> },
]

export const privateRoutes: IRoute[] = [
	{ id: 1, path: RouteNames.EVENT, component: <Event /> },
	{ id: 2, path: '*', component: <Navigate to={RouteNames.EVENT} /> },
]
