import React, { FC } from 'react'
import { Layout, Row, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routes'

const NavBar: FC = () => {
	const navigate = useNavigate()
	const isAuth = false
	return (
		<Layout.Header style={{ display: 'flex', justifyContent: 'flex-end' }}>
			{isAuth && <div style={{ color: 'white' }}>Username</div>}
			<Menu theme='dark' mode='horizontal' selectable={false}>
				{isAuth ? (
					<Menu.Item onClick={() => console.log('logout')} key='1'>
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
