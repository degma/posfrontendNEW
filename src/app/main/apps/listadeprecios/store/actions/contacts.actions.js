import axios from 'axios';
import {getUserData} from 'app/main/apps/contacts/store/actions/user.actions';
import eventService from '../../../../../api/eventService';

export const GET_ARTICULOS = '[PRECIOS APP] GET ARTICULOS';
export const SET_SEARCH_TEXT = '[PRECIOS APP] SET SEARCH TEXT';
export const TOGGLE_IN_SELECTED_ARTICULOS = '[PRECIOS APP] TOGGLE IN SELECTED ARTICULOS';
export const SELECT_ALL_ARTICULOS = '[PRECIOS APP] SELECT ALL ARTICULOS';
export const DESELECT_ALL_ARTICULOS = '[PRECIOS APP] DESELECT ALL ARTICULOS';
export const OPEN_NEW_ARTICULO_DIALOG = '[PRECIOS APP] OPEN NEW ARTICULO DIALOG';
export const CLOSE_NEW_ARTICULO_DIALOG = '[PRECIOS APP] CLOSE NEW ARTICULO DIALOG';
export const OPEN_EDIT_ARTICULO_DIALOG = '[PRECIOS APP] OPEN EDIT ARTICULO DIALOG';
export const CLOSE_EDIT_ARTICULO_DIALOG = '[PRECIOS APP] CLOSE EDIT ARTICULO DIALOG';
export const ADD_ARTICULO = '[PRECIOS APP] ADD ARTICULO';
export const UPDATE_ARTICULO = '[PRECIOS APP] UPDATE ARTICULO';
export const REMOVE_ARTICULO = '[PRECIOS APP] REMOVE ARTICULO';
export const REMOVE_ARTICULOS = '[PRECIOS APP] REMOVE ARTICULOS';
export const TOGGLE_STARRED_ARTICULO = '[PRECIOS APP] TOGGLE STARRED ARTICULO';
export const TOGGLE_STARRED_ARTICULOS = '[PRECIOS APP] TOGGLE STARRED ARTICULOS';
export const SET_ARTICULOS_STARRED = '[PRECIOS APP] SET ARTICULOS STARRED ';

export function getContacts(routeParams)
{   
    const request = eventService.articulo.getArticulo()

    // const request = axios.get('/api/contacts-app/contacts', {
    //     params: routeParams
    // });

    return (dispatch) =>
        request.then((response) => {
            console.log(response.data.articulos)
            dispatch({
                type   : GET_ARTICULOS,
                payload: response.data.articulos,
                routeParams
            })}
        );
}

export function setSearchText(event)
{
    return {
        type      : SET_SEARCH_TEXT,
        searchText: event.target.value
    }
}

export function toggleInSelectedContacts(contactId)
{
    return {
        type: TOGGLE_IN_SELECTED_ARTICULOS,
        contactId
    }
}


export function selectAllContacts()
{
    return {
        type: SELECT_ALL_ARTICULOS
    }
}

export function deSelectAllContacts()
{
    return {
        type: DESELECT_ALL_ARTICULOS
    }
}


export function openNewContactDialog()
{
    return {
        type: OPEN_NEW_ARTICULO_DIALOG
    }
}

export function closeNewContactDialog()
{
    return {
        type: CLOSE_NEW_ARTICULO_DIALOG
    }
}

export function openEditContactDialog(data)
{
    return {
        type: OPEN_EDIT_ARTICULO_DIALOG,
        data
    }
}

export function closeEditContactDialog()
{
    return {
        type: CLOSE_EDIT_ARTICULO_DIALOG
    }
}

export function addContact(newContact)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/add-contact', {
            newContact
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_ARTICULO
                })
            ]).then(() => dispatch(getContacts(routeParams)))
        );
    };
}

export function updateContact(contact)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/update-contact', {
            contact
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: UPDATE_ARTICULO
                })
            ]).then(() => dispatch(getContacts(routeParams)))
        );
    };
}

export function removeContact(contactId)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/remove-contact', {
            contactId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_ARTICULO
                })
            ]).then(() => dispatch(getContacts(routeParams)))
        );
    };
}


export function removeContacts(contactIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/remove-contacts', {
            contactIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_ARTICULOS
                }),
                dispatch({
                    type: DESELECT_ALL_ARTICULOS
                })
            ]).then(() => dispatch(getContacts(routeParams)))
        );
    };
}

export function toggleStarredContact(contactId)
{
    return (dispatch, getState) => {
        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/toggle-starred-contact', {
            contactId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: TOGGLE_STARRED_ARTICULO
                }),
                dispatch(getUserData())
            ]).then(() => dispatch(getContacts(routeParams)))
        );
    };
}

export function toggleStarredContacts(contactIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/toggle-starred-contacts', {
            contactIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: TOGGLE_STARRED_ARTICULOS
                }),
                dispatch({
                    type: DESELECT_ALL_ARTICULOS
                }),
                dispatch(getUserData())
            ]).then(() => dispatch(getContacts(routeParams)))
        );
    };
}

export function setContactsStarred(contactIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/set-contacts-starred', {
            contactIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: SET_ARTICULOS_STARRED
                }),
                dispatch({
                    type: DESELECT_ALL_ARTICULOS
                }),
                dispatch(getUserData())
            ]).then(() => dispatch(getContacts(routeParams)))
        );
    };
}

export function setContactsUnstarred(contactIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/set-contacts-unstarred', {
            contactIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: SET_ARTICULOS_STARRED
                }),
                dispatch({
                    type: DESELECT_ALL_ARTICULOS
                }),
                dispatch(getUserData())
            ]).then(() => dispatch(getContacts(routeParams)))
        );
    };
}
