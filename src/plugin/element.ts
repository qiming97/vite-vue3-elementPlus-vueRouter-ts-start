import { App } from "@vue/runtime-core";
import { IMessage } from "element-plus/lib/el-message/src/types"; //引入类型文件

import { ElButton, ElMessage, ElNotification } from "element-plus";

import "element-plus/packages/theme-chalk/src/base.scss";
import { INotification } from "element-plus/lib/el-notification/src/notification.type";

export default (app: App) => {
  app.config.globalProperties.$message = ElMessage;
  app.config.globalProperties.$notify = ElNotification;

  app.use(ElButton);
};

//定义module 需要ts代码提示必须执行下方代码
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $message: IMessage; //挂载类型
    $notify: INotification;
  }
}
