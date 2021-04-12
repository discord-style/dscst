import axios, { AxiosError } from 'axios';

import { API_URL } from '../config';
import { Response } from '../interfaces';

export async function get(template_id: string): Promise<Response> {
   return axios
      .get<Response>(API_URL + 'template/' + template_id)
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
