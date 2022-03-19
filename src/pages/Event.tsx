import React, { FC, useState } from 'react'
import { Layout, Row, Button, Modal } from 'antd'

import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'

const Event: FC = () => {
	const [modalVisible, setModalVisible] = useState(false)
	return (
		<Layout>
			<EventCalendar events={[]} />
			<Row justify='center'>
				<Button onClick={() => setModalVisible(true)}>Add Event</Button>
			</Row>
			<Modal
				title='Add Event'
				visible={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}
			>
				<EventForm />
			</Modal>
		</Layout>
	)
}

export default Event
