// import { http } from "@/utils/http";

// type Result = {
//   success: boolean;
//   data: Array<any>;
// };

// todo 测试数据,后期改为接口数据
export const getAsyncRoutes = () => {
  // return http.request<Result>("get", "/get-async-routes");
  return Promise.resolve({
    data: [
      {
        id: 8,
        path: "/product",
        meta: {
          title: "产品管理",
          icon: "ant-design:product-outlined",
          menuType: 0,
          roles: ["productManager", "admin"] //todo 角色权限包含才展示页面
        },
        component: "",
        children: [
          {
            id: 10,
            path: "/product/product/index",
            name: "productProduct",
            component: "",
            meta: {
              title: "产品",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: [
                "product:product:add",
                "product:product:bindModule",
                "product:product:edit",
                "product:product:supportedLanguages",
                "product:product:uploadResource",
                "product:product:uploadResourceLog"
              ]
            }
          },
          {
            id: 9,
            path: "/product/productType",
            name: "productType",
            component: "",
            meta: {
              title: "产品类型",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: ["product:productType:add", "product:productType:edit"]
            }
          }
        ]
      },
      {
        id: 21,
        path: "/system",
        meta: {
          title: "系统管理",
          icon: "hugeicons:system-update-01",
          menuType: 0
        },
        component: "",
        children: [
          {
            id: 24,
            path: "/system/role/index",
            name: "systemRole",
            component: "",
            meta: {
              title: "角色管理",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: [
                "system:role:add",
                "system:role:edit",
                "system:role:delete",
                "system:role:assignPermissions"
              ]
            }
          },
          {
            id: 23,
            path: "/system/user/index",
            name: "systemUser",
            component: "",
            meta: {
              title: "管理员管理",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: [
                "system:user:add",
                "system:user:edit",
                "system:user:delete",
                "system:user:assignRoles"
              ]
            }
          },
          {
            id: 22,
            path: "/system/menu/index",
            name: "systemMenu",
            component: "",
            meta: {
              title: "菜单",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: [
                "system:menu:add",
                "system:menu:edit",
                "system:menu:delete",
                "system:menu:sort"
              ]
            }
          },
          {
            id: 332,
            path: "/system/userRecycle/index",
            name: "userRecycle",
            component: "",
            meta: {
              title: "回收站",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: ["userRecycle:revert"]
            }
          }
        ]
      },
      {
        id: 342,
        path: "/marketManagement",
        meta: {
          title: "市场部管理",
          icon: "ant-design:project-filled",
          menuType: 0
        },
        component: "",
        children: [
          {
            id: 343,
            path: "/marketManagement/psnLog/index",
            name: "psnLogDownLoad",
            component: "",
            meta: {
              title: "psn日志下载",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: []
            }
          },
          {
            id: 382,
            path: "/marketManagement/activity/index",
            name: "activityNotice",
            component: "",
            meta: {
              title: "活动通知",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: []
            }
          },
          {
            id: 391,
            path: "/marketManagement/promotionalPictures/index",
            name: "promotionalPictures",
            component: "",
            meta: {
              title: "活动图片",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: [
                "promotionalPictures:uploadImage",
                "promotionalPictures:releaseImage",
                "promotionalPictures:deleteImage",
                "promotionalPictures:updateImage"
              ]
            }
          },
          {
            id: 396,
            path: "/marketManagement/dealerInfo/index",
            name: "dealerInf",
            component: "",
            meta: {
              title: "经销商信息管理",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: [
                "dealerInfo:add",
                "dealerInfo:edit",
                "dealerInfo:tokenChangeRecord"
              ]
            }
          },
          {
            id: 404,
            path: "/marketManagement/psn/index",
            name: "psn",
            component: "",
            meta: {
              title: "设备启动记录",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: ["psn:map"]
            }
          },
          {
            id: 406,
            path: "/marketManagement/overseasTrialSet/index",
            name: "overseasTrialSet",
            component: "",
            meta: {
              title: "海外版试用设置",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: ["overseasTrialSet:add", "overseasTrialSet:edit"]
            }
          },
          {
            id: 414,
            path: "/marketManagement/toyotaCalculation/index",
            name: "toyotaCalculation",
            component: "",
            meta: {
              title: "丰田计算订单",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: [
                "toyotaCalculation:reset",
                "toyotaCalculation:export",
                "toyotaCalculation:transfer"
              ]
            }
          },
          {
            id: 418,
            path: "/marketManagement/psnCheck/index",
            name: "psnCheck",
            component: "",
            meta: {
              title: "PSN检验位",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: ["psnCheck:submit"]
            }
          }
        ]
      },
      {
        id: 348,
        path: "/feedback",
        meta: {
          title: "反馈管理",
          icon: "material-symbols-light:feedback-outline-sharp",
          menuType: 0
        },
        component: "",
        children: [
          {
            id: 349,
            path: "/feedback/feature/index",
            name: "feedbackFeature",
            component: "",
            meta: {
              title: "功能反馈",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: []
            }
          },
          {
            id: 420,
            path: "/feedback/appMessageBoard/index",
            name: "appMessageBoard",
            component: "",
            meta: {
              title: "APP留言板",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: ["appMessageBoard:look", "appMessageBoard:close"]
            },
            children: [
              {
                id: 423,
                path: "/feedback/appMessageBoard/chat/index",
                name: "chat",
                component: "",
                meta: {
                  title: "app留言板详情",
                  icon: "0",
                  activePath: "",
                  showLink: false,
                  keepAlive: false,
                  showParent: true,
                  menuType: 0,
                  auths: []
                }
              }
            ]
          }
        ]
      },
      {
        id: 353,
        path: "/warehouseManage",
        meta: {
          title: "仓库管理",
          icon: "tabler:home",
          menuType: 0
        },
        component: "",
        children: [
          {
            id: 354,
            path: "/warehouseManageinventory",
            name: "warehouselnventory",
            component: "",
            meta: {
              title: "库存管理",
              icon: "ant-design:bank-outlined",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: []
            },
            children: [
              {
                id: 356,
                path: "/warehouseManage/inventoryManage/warehouse/index",
                name: "warehouseManageWarehouse",
                component: "",
                meta: {
                  title: "入库",
                  icon: "tabler:point",
                  activePath: "",
                  showLink: true,
                  keepAlive: true,
                  showParent: true,
                  menuType: 0,
                  auths: []
                }
              },
              {
                id: 357,
                path: "/warehouseManage/inventoryManage/outbound/index",
                name: "warehouseOutbound",
                component: "",
                meta: {
                  title: "出库",
                  icon: "tabler:point",
                  activePath: "",
                  showLink: true,
                  keepAlive: true,
                  showParent: true,
                  menuType: 0,
                  auths: []
                }
              },
              {
                id: 358,
                path: "/warehouseManage/inventoryManage/returnGoods/index",
                name: "warehouseReturnGoods",
                component: "",
                meta: {
                  title: "退货",
                  icon: "tabler:point",
                  activePath: "",
                  showLink: true,
                  keepAlive: true,
                  showParent: true,
                  menuType: 0,
                  auths: []
                }
              },
              {
                id: 359,
                path: "/warehouseManage/inventoryManage/inventory/index",
                name: "warehouseManagelnventory",
                component: "",
                meta: {
                  title: "库存",
                  icon: "tabler:point",
                  activePath: "",
                  showLink: true,
                  keepAlive: true,
                  showParent: true,
                  menuType: 0,
                  auths: []
                }
              },
              {
                id: 360,
                path: "/warehouseManage/inventoryManage/logisticsCompanyManagement/index",
                name: "warehouseLogistics",
                component: "",
                meta: {
                  title: "物流公司",
                  icon: "tabler:point",
                  activePath: "",
                  showLink: true,
                  keepAlive: true,
                  showParent: true,
                  menuType: 0,
                  auths: []
                }
              }
            ]
          },
          {
            id: 383,
            path: "/serialNumberManage",
            name: "warehouseSerialNumber",
            component: "",
            meta: {
              title: "序列号管理",
              icon: "tabler:hexagon-letter-x",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: []
            },
            children: [
              {
                id: 384,
                path: "/warehouseManage/serialNumberManage/serialNumber/index",
                name: "serialNumber",
                component: "",
                meta: {
                  title: "序列号",
                  icon: "tabler:point",
                  activePath: "",
                  showLink: true,
                  keepAlive: true,
                  showParent: true,
                  menuType: 0,
                  auths: []
                }
              },
              {
                id: 386,
                path: "/warehouseManage/serialNumberManage/psnSearch/index",
                name: "psnSearch",
                component: "",
                meta: {
                  title: "序列号搜索",
                  icon: "tabler:point",
                  activePath: "",
                  showLink: true,
                  keepAlive: true,
                  showParent: true,
                  menuType: 0,
                  auths: []
                }
              },
              {
                id: 385,
                path: "/warehouseManage/serialNumberManage/reportForm/index",
                name: "reportForm",
                component: "",
                meta: {
                  title: "报表管理",
                  icon: "tabler:point",
                  activePath: "",
                  showLink: true,
                  keepAlive: true,
                  showParent: true,
                  menuType: 0,
                  auths: ["serialNumberManage/reportForm:export"]
                }
              },
              {
                id: 390,
                path: "/warehouseManage/serialNumberManage/labelManage/index",
                name: "labelManageType",
                component: "",
                meta: {
                  title: "标签管理",
                  icon: "tabler:point",
                  activePath: "",
                  showLink: true,
                  keepAlive: true,
                  showParent: true,
                  menuType: 0,
                  auths: []
                }
              }
            ]
          }
        ]
      },
      {
        id: 362,
        path: "/examine",
        meta: {
          title: "绩效考核",
          icon: "meteor-icons:arrow-trend-up",
          menuType: 0
        },
        component: "",
        children: [
          {
            id: 363,
            path: "/examine/performanceAppraisal/index",
            name: "examinePerfommanceAppraisalPage",
            component: "",
            meta: {
              title: "绩效考核",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: [
                "examinePerformanceAppraisalPage:synchronous",
                "examinePerformanceAppraisalPage:evaluate",
                "examinePerformanceAppraisalPage:detail",
                "examinePerformanceAppraisalPage:remark",
                "examinePerformanceAppraisalPage:export"
              ]
            }
          },
          {
            id: 371,
            path: "/examine/template/index",
            name: "examineTemplate",
            component: "",
            meta: {
              title: "绩效模板",
              icon: "tabler:point",
              activePath: "",
              showLink: true,
              keepAlive: true,
              showParent: true,
              menuType: 0,
              auths: [
                "examineTemplate:add",
                "examineTemplate:edit",
                "examineTemplate:remove"
              ]
            }
          }
        ]
      }
    ]
  });
};
