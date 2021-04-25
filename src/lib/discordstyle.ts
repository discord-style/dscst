import * as i from './interfaces';
import * as dscst from '../';

// discordstyle Main Class
export class discordstyle {
   private api_key?: string;

   constructor(api_key?: string) {
      this.api_key = api_key;
   }

   public recent(page?: number): Promise<i.TemplatePaginationPayload> {
      return new Promise(async (resolve, reject) => {
         const recentData = await dscst.template.recent(page);

         if (!recentData.success || !recentData.payload) {
            reject(recentData.message);
         } else {
            resolve(recentData.payload);
         }
      });
   }

   public top = {
      likes(page?: number): Promise<i.TemplatePaginationPayload> {
         return new Promise(async (resolve, reject) => {
            const likesData = await dscst.template.top.likes(page);

            if (!likesData.success || !likesData.payload) {
               reject(likesData.message);
            } else {
               resolve(likesData.payload);
            }
         });
      },
      downloads(page?: number): Promise<i.TemplatePaginationPayload> {
         return new Promise(async (resolve, reject) => {
            const downloadsData = await dscst.template.top.downloads(page);

            if (!downloadsData.success || !downloadsData.payload) {
               reject(downloadsData.message);
            } else {
               resolve(downloadsData.payload);
            }
         });
      },
   };

   public create(newTemplate: i.newTemplate): Promise<i.Template> {
      return new Promise(async (resolve, reject) => {
         if (!this.api_key) {
            reject('No api key given to discordstyle class');
         } else {
            const createData = await dscst.template.create(
               newTemplate,
               this.api_key
            );

            if (!createData.success || !createData.payload) {
               reject(createData.message);
            } else {
               resolve(createData.payload);
            }
         }
      });
   }

   public template(template_id: string): Promise<Template> {
      return new Promise(async (resolve, reject) => {
         const templateData = await dscst.template.get(template_id);

         if (!templateData.success || !templateData.payload) {
            reject(templateData.message);
         } else {
            resolve(new Template(templateData.payload, this.api_key));
         }
      });
   }

   public me(): Promise<User> {
      return new Promise(async (resolve, reject) => {
         if (!this.api_key) {
            reject('No api key given to discordstyle class');
         } else {
            const userData = await dscst.user.me(this.api_key);

            if (!userData.success || !userData.payload) {
               reject(userData.message);
            } else {
               resolve(new User(userData.payload, this.api_key));
            }
         }
      });
   }

   public user(user_id: string): Promise<User> {
      return new Promise(async (resolve, reject) => {
         const userData = await dscst.user.get(user_id);

         if (!userData.success || !userData.payload) {
            reject(userData.message);
         } else {
            resolve(new User(userData.payload, this.api_key));
         }
      });
   }
}

// discordstyle Template Class
class Template {
   public template: i.TemplatePayload;
   private api_key?: string;

   constructor(template: i.TemplatePayload, api_key?: string) {
      this.template = template;
      this.api_key = api_key;
   }

   public get(cache: true): i.TemplatePayload;
   public get(cache?: false): Promise<i.TemplatePayload>;
   public get(cache?: boolean): i.TemplatePayload | Promise<i.TemplatePayload> {
      if (cache) {
         return this.template;
      } else {
         return new Promise(async (resolve, reject) => {
            const templateData = await dscst.template.get(this.template._id);

            if (!templateData.success || !templateData.payload) {
               reject(templateData.message);
            } else {
               this.template = templateData.payload;

               resolve(this.template);
            }
         });
      }
   }

   public like(): Promise<i.TemplateLikePayload> {
      return new Promise(async (resolve, reject) => {
         if (!this.api_key) {
            reject('No api key given to discordstyle class');
         } else {
            const likeData = await dscst.template.like(
               this.template._id,
               this.api_key
            );

            if (!likeData.success || !likeData.payload) {
               reject(likeData.message);
            } else {
               resolve(likeData.payload);
            }
         }
      });
   }

   public comment(comment: string): Promise<i.CommentPayload> {
      return new Promise(async (resolve, reject) => {
         if (!this.api_key) {
            reject('No api key given to discordstyle class');
         } else {
            const commentData = await dscst.template.comment(
               this.template._id,
               comment,
               this.api_key
            );

            if (!commentData.success || !commentData.payload) {
               reject(commentData.message);
            } else {
               resolve(commentData.payload);
            }
         }
      });
   }

   public delete(): Promise<string | boolean> {
      return new Promise(async (resolve, reject) => {
         if (!this.api_key) {
            reject('No api key given to discordstyle class');
         } else {
            const deleteData = await dscst.template.delete(
               this.template._id,
               this.api_key
            );

            if (!deleteData.success) {
               reject(deleteData.message);
            } else {
               resolve(true);
            }
         }
      });
   }

   public getComment(comment_id: string): Promise<Comment> {
      return new Promise(async (resolve, reject) => {
         const commentData = await dscst.comment.get(
            this.template._id,
            comment_id
         );

         if (!commentData.success || !commentData.payload) {
            reject(commentData.message);
         } else {
            resolve(
               new Comment(this.template._id, commentData.payload, this.api_key)
            );
         }
      });
   }
}

// discordstyle Comment Class
class Comment {
   public template_id: string;
   public comment: i.Comment;
   private api_key?: string;

   constructor(template_id: string, comment: i.Comment, api_key?: string) {
      this.template_id = template_id;
      this.comment = comment;
      this.api_key = api_key;
   }

   public get(cache: true): i.Comment;
   public get(cache?: false): Promise<i.Comment>;
   public get(cache?: boolean): i.Comment | Promise<i.Comment> {
      if (cache) {
         return this.comment;
      } else {
         return new Promise(async (resolve, reject) => {
            const commentData = await dscst.comment.get(
               this.template_id,
               this.comment._id
            );

            if (!commentData.success || !commentData.payload) {
               reject(commentData.message);
            } else {
               this.comment = commentData.payload;

               resolve(this.comment);
            }
         });
      }
   }

   public like(): Promise<i.CommentLikePayload> {
      return new Promise(async (resolve, reject) => {
         if (!this.api_key) {
            reject('No api key given to discordstyle class');
         } else {
            const likeData = await dscst.comment.like(
               this.template_id,
               this.comment._id,
               this.api_key
            );

            if (!likeData.success || !likeData.payload) {
               reject(likeData.message);
            } else {
               resolve(likeData.payload);
            }
         }
      });
   }
}

// discordstyle User Class
class User {
   public user: i.User;
   private api_key?: string;

   constructor(user: i.User, api_key?: string) {
      this.user = user;
      this.api_key = api_key;
   }

   public get(cache: true): i.User;
   public get(cache?: false): Promise<i.User>;
   public get(cache?: boolean): i.User | Promise<i.User> {
      if (cache) {
         return this.user;
      } else {
         return new Promise(async (resolve, reject) => {
            const userData = await dscst.user.get(this.user.user_id);

            if (!userData.success || !userData.payload) {
               reject(userData.message);
            } else {
               this.user = userData.payload;

               resolve(this.user);
            }
         });
      }
   }

   public templates(page?: number): Promise<i.TemplatePaginationPayload> {
      return new Promise(async (resolve, reject) => {
         const templatesData = await dscst.user.templates(
            this.user.user_id,
            page
         );

         if (!templatesData.success || !templatesData.payload) {
            reject(templatesData.message);
         } else {
            resolve(templatesData.payload);
         }
      });
   }

   public likes(page?: number): Promise<i.TemplatePaginationPayload> {
      return new Promise(async (resolve, reject) => {
         const likesData = await dscst.user.likes(this.user.user_id, page);

         if (!likesData.success || !likesData.payload) {
            reject(likesData.message);
         } else {
            resolve(likesData.payload);
         }
      });
   }
}
