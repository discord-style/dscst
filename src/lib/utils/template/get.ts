import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { Response, TemplatePayload } from '../../interfaces';

export async function get(
   template_id: string
): Promise<Response<TemplatePayload>> {
   return axios
      .get<Response<TemplatePayload>>(API_URL + 'template/' + template_id)
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
