import {
  d as f,
  q as y,
  n as h,
  aX as u,
  c as m,
  o as c,
  e as l,
  b as n,
  h as o,
  bc as S,
  S as g,
  T as w,
  bd as C,
  W as k,
  R as x,
  b9 as V,
  N as B,
  G as E,
  aY as N
} from "./index-B2fHy2Kp.js";
/* empty css                */ /* empty css               */ /* empty css                  */ const P =
    { class: "card-header" },
  z = f({
    name: "PermissionPage",
    __name: "index",
    setup(U) {
      var t;
      const i = y(() => ({ width: "85vw", justifyContent: "start" })),
        a = h((t = u()) == null ? void 0 : t.username),
        d = [
          { value: "admin", label: "管理员角色" },
          { value: "common", label: "普通角色" }
        ];
      function p() {
        u()
          .loginByUsername({ username: a.value, password: "admin123" })
          .then(r => {
            r.success &&
              (B().removeItem("async-routes"), E().clearAllCachePage(), N());
          });
      }
      return (r, s) => {
        const _ = C,
          v = S,
          b = V;
        return (
          c(),
          m("div", null, [
            s[1] ||
              (s[1] = l(
                "p",
                { class: "mb-2!" },
                " 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ",
                -1
              )),
            n(
              b,
              { shadow: "never", style: x(i.value) },
              {
                header: o(() => [
                  l("div", P, [l("span", null, "当前角色：" + k(a.value), 1)])
                ]),
                default: o(() => [
                  n(
                    v,
                    {
                      modelValue: a.value,
                      "onUpdate:modelValue":
                        s[0] || (s[0] = e => (a.value = e)),
                      class: "w-[160px]!",
                      onChange: p
                    },
                    {
                      default: o(() => [
                        (c(),
                        m(
                          g,
                          null,
                          w(d, e =>
                            n(
                              _,
                              { key: e.value, label: e.label, value: e.value },
                              null,
                              8,
                              ["label", "value"]
                            )
                          ),
                          64
                        ))
                      ]),
                      _: 1
                    },
                    8,
                    ["modelValue"]
                  )
                ]),
                _: 1
              },
              8,
              ["style"]
            )
          ])
        );
      };
    }
  });
export { z as default };
