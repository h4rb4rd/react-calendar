import React, { FC, useState } from 'react'
import { Form, Input, Button } from 'antd'
import { rules } from '../utils/rules'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'
import { useTypedSelector } from '../hooks/useTypedSelector'

const LoginForm: FC = () => {
	const dispatch = useDispatch()
	const { error, isLoading } = useTypedSelector(state => state.auth)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const submit = () => {
		dispatch(AuthActionCreators.login(username, password))
	}
	return (
		<Form
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			onFinish={submit}
		>
			{error && <div style={{ color: 'tomato' }}>{error}</div>}
			<Form.Item
				style={{ marginBottom: '10px' }}
				label='Username'
				name='username'
				rules={[rules.required('Please input your username!')]}
			>
				<Input value={username} onChange={e => setUsername(e.target.value)} />
			</Form.Item>
			<Form.Item
				style={{ marginBottom: '20px' }}
				label='Password'
				name='password'
				rules={[rules.required('Please input your password!')]}
			>
				<Input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type={'password'}
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit' loading={isLoading}>
					Enter
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
