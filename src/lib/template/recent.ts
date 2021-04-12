import axios, { AxiosError } from 'axios';

import { API_URL } from '../config';
import { ResponsePagination } from '../interfaces';

export async function recent(page?: number): Promise<ResponsePagination> {
   return axios
      .get<ResponsePagination>(
         API_URL + 'template/recent' + (page ? `?page=${page}` : '')
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
