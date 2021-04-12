export interface newTemplate {
   template_code: string;
   title: string;
   description: string;
   tags: [string];
}

export interface Response {
   success: boolean;
   status?: number;
   message?: string;
   payload?: {
      [key: string]: any;
   };
}

export interface ResponsePagination {
   success: boolean;
   status?: number;
   message?: string;
   payload?: {
      isEnd: boolean;
      [key: string]: any;
   };
}

export interface LikeSchema {
   user_id: string;
}

export interface Template {
   user_id: string;
   username: string;
   template_code: string;
   title: string;
   description: string;
   server: string;
   likes: LikeSchema[];
   verified: boolean;
   tags: string[];
   created_at: Date;
}
