import * as i from './interfaces';

import * as template from './utils/template';

export class dscst {
   private api_key: string | undefined;

   constructor(api_key?: string) {
      this.api_key = api_key;
   }

   public async template(
      template_id: string,
      errors?: boolean
   ): Promise<Template> {
      const templateData = await template.get(template_id);

      if (!templateData.success || !templateData.payload) {
         throw new Error(templateData.message);
      }

      return new Template(templateData.payload, this.api_key, errors);
   }
}

class Template {
   public template: i.TemplatePayload;
   private api_key: string | undefined;
   private errors: boolean | undefined;

   constructor(
      template: i.TemplatePayload,
      api_key?: string,
      errors?: boolean
   ) {
      this.template = template;
      this.api_key = api_key;
      this.errors = errors;
   }

   public async get(cache: boolean = false) {
      if (cache) {
         return this.template;
      } else {
         const templateData = await template.get(this.template._id);

         if (!templateData.success || !templateData.payload) {
            throw new Error(templateData.message);
         }

         this.template = templateData.payload;

         return this.template;
      }
   }
}
