import React, { FC } from 'react'
import { Layout, Row, Col, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routes'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'

const NavBar: FC = () => {
	const { isAuth, user } = useTypedSelector(state => state.auth)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	return (
		<Layout.Header
			style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
		>
			{isAuth && <div style={{ color: 'white' }}>{user.username}</div>}
			<Menu theme='dark' selectable={false}>
				{isAuth ? (
					<Menu.Item
						onClick={() => dispatch(AuthActionCreators.logout())}
						key='1'
					>
						Logout
					</Menu.Item>
				) : (
					<Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key='1'>
						Login
					</Menu.Item>
				)}
			</Menu>
		</Layout.Header>
	)
}

export default NavBar
