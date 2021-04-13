import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { CommentPayload, Response } from '../../interfaces';

export async function comment(
   template_id: string,
   comment: string,
   api_key: string
): Promise<Response<CommentPayload>> {
   return axios
      .post<Response<CommentPayload>>(
         API_URL + 'template/' + template_id + '/comments',
         {
            comment,
         },
         {
            headers: {
               'x-api-key': api_key,
            },
         }
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
