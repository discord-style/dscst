import axios, { AxiosError } from 'axios';

import { API_URL } from '../config';
import { Response } from '../interfaces';

export async function Delete(
   template_id: string,
   api_key: string
): Promise<Response> {
   return axios
      .delete<Response>(API_URL + 'template/' + template_id, {
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
