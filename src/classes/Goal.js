import { v4 } from "uuid";

class Goal {
     constructor(title, subTitle, content, priority, img = '') {
          this.id = v4();
          this.title = title;
          this.subTitle = subTitle;
          this.content = content;
          this.priority = priority;
          this.img = img;
          this.timeCreated = `${new Date().toDateString()} , ${new Date().getHours()}:${new Date().getMinutes()}`;
     }
}

export { Goal };