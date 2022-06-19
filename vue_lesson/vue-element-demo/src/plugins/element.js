import Vue from 'vue';
import { Button, Rate, Table, TableColumn, Tag, Popconfirm, Popover, Form, FormItem, Input, Select, Option, DatePicker, Dialog, Pagination, Loading, Message, Menu, Submenu, MenuItemGroup, MenuItem} from 'element-ui';

// Vue.component(Button.name, Button);

// 全局组件
Vue.use(Button)
Vue.use(Rate)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Popconfirm)
Vue.use(Popover)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)



// 以下内容只有在按需导入 element 的时候才需要

// 服务方式的 loading  全局引入 element 的时候不需要做
Vue.prototype.$loading = Loading
// 消息提示
Vue.prototype.$message = Message

// 全局指令  v-loading
Vue.use(Loading)
