import axios, { AxiosError } from 'axios';

import { API_URL } from '../config';
import { Response, newTemplate } from '../interfaces';

export async function create(
   template: newTemplate,
   api_key: string
): Promise<Response> {
   return axios
      .post<Response>(API_URL + 'template', template, {
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
