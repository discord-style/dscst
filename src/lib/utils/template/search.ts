import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { Response, SearchPayload } from '../../interfaces';

export async function search(
   query: string,
   page?: number
): Promise<Response<SearchPayload>> {
   return axios
      .get<Response<SearchPayload>>(
         API_URL + 'template/search/' + query + (page ? `?page=${page}` : '')
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
