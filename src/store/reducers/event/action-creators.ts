import axios from 'axios'
import { AppDispatch } from '../..'
import { IEvent } from '../../../models/IEvent'
import { IUser } from '../../../models/IUser'
import {
	EventActionEnum,
	SetEventsAction,
	SetGuestsAction,
} from '../../../types/event'

export const EventActionCreators = {
	setGuests: (payload: IUser[]): SetGuestsAction => ({
		type: EventActionEnum.SET_GUESTS,
		payload,
	}),
	setEvents: (payload: IEvent[]): SetEventsAction => ({
		type: EventActionEnum.SET_EVENTS,
		payload,
	}),
	fetchGuests: () => async (dispatch: AppDispatch) => {
		try {
			const guests = await axios.get('./users.json')
		} catch (err) {
			console.log(err)
		}
	},
}
