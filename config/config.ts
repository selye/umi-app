
import { defineConfig } from 'umi';
import routes from "./route";
import proxy from "./proxy"

export default defineConfig({
    404: true,
    routes: routes,
    proxy: proxy,
    title:"狂风绝息斩",
});