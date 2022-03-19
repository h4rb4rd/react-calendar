import React, { FC } from 'react'
import { Form, Input, DatePicker, Button, Select } from 'antd'
import { rules } from '../utils/rules'

const EventForm: FC = () => {
	return (
		<Form
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Form.Item
				label='Event Description'
				name='description'
				rules={[rules.required()]}
			>
				<Input />
			</Form.Item>
			<Form.Item label='Event Date' name='date' rules={[rules.required()]}>
				<DatePicker />
			</Form.Item>
			<Form.Item label='Event Date' name='date' rules={[rules.required()]}>
				<Select>
					<Select.Option value='jack'>Jack</Select.Option>
					<Select.Option value='lucy'>Lucy</Select.Option>
					<Select.Option value='disabled' disabled>
						Disabled
					</Select.Option>
					<Select.Option value='Yiminghe'>yiminghe</Select.Option>
				</Select>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Add Event
				</Button>
			</Form.Item>
		</Form>
	)
}

export default EventForm
