import axios from 'src/settings/axios';
import { ALL_COLUMNS_URL } from './urls';

export const getColumns = async () => {
  return axios.get(ALL_COLUMNS_URL);
};
