import Vue from 'vue'
import { Tabbar, TabbarItem,Swipe, SwipeItem ,Tab, Tabs, Search } from 'vant';

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tab).use(Tabs);
Vue.use(Search);