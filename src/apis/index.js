import axios from 'src/settings/axios';
import { ALL_COLUMNS_URL, USER_URL, BOARDS_URL } from './urls';

export const getColumns = async () => {
  return axios.get(ALL_COLUMNS_URL);
};

export const createNewColumn = async columnData => {
  return axios.post(ALL_COLUMNS_URL, columnData);
};

export const updateColumnTitle = async (id, columnData) => {
  return axios.patch(`${ALL_COLUMNS_URL}/${id}`, columnData);
};

export const getUserData = async () => {
  return axios.get(USER_URL);
};

export const getBoards = async () => {
  return axios.get(BOARDS_URL);
};
