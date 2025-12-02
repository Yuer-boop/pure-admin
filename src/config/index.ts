import axios from "axios";
import type { App } from "vue";

let config: object = {};
const { VITE_PUBLIC_PATH } = import.meta.env;

const setConfig = (cfg?: unknown) => {
  config = Object.assign(config, cfg);
};

const getConfig = (key?: string): PlatformConfigs => {
  if (typeof key === "string") {
    const arr = key.split(".");
    if (arr && arr.length) {
      let data = config;
      arr.forEach(v => {
        if (data && typeof data[v] !== "undefined") {
          data = data[v];
        } else {
          data = null;
        }
      });
      return data;
    }
  }
  return config;
};

/** 获取项目动态全局配置 */
/** 获取项目动态全局配置 */
export const getPlatformConfig = (app: App) => {
  const config = {
    Version: "6.0.0",
    Title: "PureAdmin",
    FixedHeader: true,
    HiddenSideBar: false,
    MultiTagsCache: false,
    KeepAlive: true,
    Layout: "vertical",
    Theme: "light",
    DarkMode: false,
    OverallStyle: "light",
    Grey: false,
    Weak: false,
    HideTabs: false,
    HideFooter: false,
    Stretch: false,
    SidebarStatus: true,
    EpThemeColor: "#409EFF",
    ShowLogo: true,
    ShowModel: "smart",
    MenuArrowIconNoTransition: false,
    CachingAsyncRoutes: false,
    TooltipEffect: "light",
    ResponsiveStorageNameSpace: "responsive-",
    MenuSearchHistory: 6
  };

  if (app) {
    app.config.globalProperties.$config = config; // 直接覆盖
    setConfig(config); // 同步到本地存储/方法
  }

  return config;
};

/** 本地响应式存储的命名空间 */
const responsiveStorageNameSpace = () => getConfig().ResponsiveStorageNameSpace;

export { getConfig, setConfig, responsiveStorageNameSpace };
