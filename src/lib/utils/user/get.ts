import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { Response, User } from '../../interfaces';

export async function get(user_id: string): Promise<Response<User>> {
   return axios
      .get<Response<User>>(API_URL + 'user/' + user_id)
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
