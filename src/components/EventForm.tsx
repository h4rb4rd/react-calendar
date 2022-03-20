import React, { FC, useState } from 'react'
import { Form, Input, DatePicker, Button, Select } from 'antd'
import { formatDate } from '../utils/date'
import { IUser } from '../models/IUser'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment'
import { rules } from '../utils/rules'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface EventFormProps {
	guests: IUser[]
	submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = props => {
	const { user } = useTypedSelector(state => state.auth)
	const [event, setEvent] = useState<IEvent>({
		author: '',
		date: '',
		description: '',
		guest: '',
	} as IEvent)

	const selectDate = (date: Moment | null) => {
		if (date) {
			setEvent({ ...event, date: formatDate(date.toDate()) })
		}
	}

	const submitForm = () => {
		props.submit({ ...event, author: user.username })
	}
	return (
		<Form
			onFinish={submitForm}
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
				<Input
					value={event.description}
					onChange={e => setEvent({ ...event, description: e.target.value })}
				/>
			</Form.Item>
			<Form.Item
				label='Event Date'
				name='date'
				rules={[
					rules.required(),
					rules.isDateAfter('Please choose a future date.'),
				]}
			>
				<DatePicker onChange={date => selectDate(date)} />
			</Form.Item>
			<Form.Item label='Guests' name='guests' rules={[rules.required()]}>
				<Select
					onChange={(guest: string) => setEvent({ ...event, guest })}
					style={{ width: '100px' }}
				>
					{props.guests.map(guest => {
						return (
							<Select.Option key={guest.id} value={guest.username}>
								{guest.username}
							</Select.Option>
						)
					})}
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
