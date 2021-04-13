import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { CommentPayload, Response } from '../../interfaces';

export async function comments(
   template_id: string,
   page?: number
): Promise<Response<CommentPayload>> {
   return axios
      .get<Response<CommentPayload>>(
         API_URL +
            'template/' +
            template_id +
            '/comments' +
            (page ? `?page=${page}` : '')
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
