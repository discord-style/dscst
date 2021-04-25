import axios, { AxiosError } from 'axios';
import { API_URL } from '../../config';
import { Response, CommentLikePayload } from '../../interfaces';

export async function like(
   template_id: string,
   comment_id: string,
   api_key: string
): Promise<Response<CommentLikePayload>> {
   return axios
      .post<Response<CommentLikePayload>>(
         API_URL + 'template/' + template_id + '/' + comment_id + '/like',
         {},
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
