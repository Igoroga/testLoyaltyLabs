import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload: payload }),
    setEvents: (payload: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload: payload }),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const guests = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(guests.data))
        } catch (error) {
            console.log(error);
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('event') || '[]'
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            console.log(json);
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('event',JSON.stringify(json));
        } catch (error) {
            console.log(error);
        }
    },
    fetchEvent: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('event') || '[]'
            const json = JSON.parse(events) as IEvent[];
           const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
           dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (error) {
            console.log(error);
        }
    }
}

