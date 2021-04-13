export interface newTemplate {
   template_code: string;
   title: string;
   description: string;
   tags: [string];
}

export interface Response<Payload> {
   success: boolean;
   status?: number;
   message?: string;
   payload?: Payload;
}

export interface ResponseStatic {
   success: boolean;
   status?: number;
   message: string;
}

export interface User {
   admin: boolean;
   mod: boolean;
   dev: boolean;
   _id: string;
   user_id: string;
   created_at: Date;
   avatar: string;
   username: string;
   discriminator: string;
}

export interface Like {
   user_id: string;
}

export interface Template {
   downloads: number;
   verified: boolean;
   tags: string[];
   _id: string;
   user_id: string;
   template_code: string;
   title: string;
   description: string;
   likes: Like[];
   created_at: Date;
}

export interface Comment {
   _id: string;
   type: string;
   template_id: string;
   comment: string;
   comment_by: {
      user_id: string;
      username: string;
      avatar: string;
   };
   likes: Like[];
   created_at: Date;
}

export interface Role {
   id: number;
   name: string;
   color: number;
   hoist: boolean;
   mentionable: boolean;
   permissions: string;
}

export interface Channel {
   id: number;
   type: number;
   name: String;
   position: number;
   topic: any;
   bitrate: number;
   user_limit: number;
   nsfw: boolean;
   rate_limit_per_user: number;
   parent_id: number;
   permission_overwrites: PermissionOverwrite[];
}

export interface PermissionOverwrite {
   id: number;
   type: number;
   allow: string;
   deny: string;
}

export interface CommentPayload {
   comment: Comment;
}

export interface CommentsPayload {
   isEnd: boolean;
   comments: Comment[];
}

export interface TemplatePayload extends Template {
   roles: Role[];
   channels: Channel[];
}

export interface LikePayload {
   liked: boolean;
   template: Template;
}

export interface SearchPayload {
   resultsCount: number;
   isEnd: boolean;
   results: Template[];
}

export interface TemplatePaginationPayload {
   isEnd: boolean;
   templates: Template[];
}
