import React, { FC } from 'react'
import { Layout, Menu } from 'antd'
import { RouteNames } from '../routes'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { useNavigate } from 'react-router-dom'

const NavBar: FC = () => {
	const { isAuth, user } = useTypedSelector(state => state.auth)
	const navigate = useNavigate()
	const { logout } = useActions()

	return (
		<Layout.Header
			style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
		>
			{isAuth && <div style={{ color: 'white' }}>{user.username}</div>}
			<Menu theme='dark' selectable={false}>
				{isAuth ? (
					<Menu.Item onClick={logout} key='1'>
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
