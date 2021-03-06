//Action file

import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./types.js";
import axios from "axios";

export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  try {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};

export const addContact = newConact => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    newConact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  console.log(id);
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  console.log(res.data);
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const updateContact = newContact => async dispatch => {
  const res = await axios.post(
    `https://jsonplaceholder.typicode.com/users`,
    newContact
  );
  console.log(res.data);
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
