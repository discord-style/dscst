import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { Response, TemplatePaginationPayload } from '../../interfaces';

export async function likes(
   page?: number
): Promise<Response<TemplatePaginationPayload>> {
   return axios
      .get<Response<TemplatePaginationPayload>>(
         API_URL + 'template/top/likes' + (page ? `?page=${page}` : '')
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}

export async function downloads(
   page?: number
): Promise<Response<TemplatePaginationPayload>> {
   return axios
      .get<Response<TemplatePaginationPayload>>(
         API_URL + 'template/top/downloads' + (page ? `?page=${page}` : '')
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
