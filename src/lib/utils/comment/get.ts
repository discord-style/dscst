import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { Comment, Response } from '../../interfaces';

export async function get(
   template_id: string,
   comment_id: string
): Promise<Response<Comment>> {
   return axios
      .get<Response<Comment>>(
         API_URL + 'template/' + template_id + '/comments/' + comment_id
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
