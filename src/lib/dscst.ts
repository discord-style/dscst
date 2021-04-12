import * as i from './interfaces';
import * as template from './template';

export class dscst {
   private cookie: string | undefined;

   constructor(cookie?: string) {
      this.cookie = cookie;
   }

   template(template_id: string | undefined) {
      console.log(template_id);
   }
}
