import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { Response, TemplatePaginationPayload } from '../../interfaces';

export async function templates(
   user_id: string
): Promise<Response<TemplatePaginationPayload>> {
   return axios
      .get<Response<TemplatePaginationPayload>>(
         API_URL + 'user/' + user_id + '/templates'
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
