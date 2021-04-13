import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { Response, User } from '../../interfaces';

export async function me(api_key: string): Promise<Response<User>> {
   return axios
      .get<Response<User>>(API_URL + 'user/me', {
         headers: {
            'x-api-key': api_key,
         },
      })
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
