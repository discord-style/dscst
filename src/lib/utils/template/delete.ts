import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { ResponseStatic } from '../../interfaces';

export async function Delete(
   template_id: string,
   api_key: string
): Promise<ResponseStatic> {
   return axios
      .delete<ResponseStatic>(API_URL + 'template/' + template_id, {
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
