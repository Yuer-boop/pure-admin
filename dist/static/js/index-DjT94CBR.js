import {
  d as y,
  L as v,
  r as w,
  c as g,
  o as d,
  e as r,
  b as n,
  W as k,
  u as o,
  b7 as B,
  h as t,
  b8 as x,
  E as C,
  f as i,
  b9 as E,
  g as a,
  O as b,
  ba as f,
  w as _
} from "./index-B2fHy2Kp.js";
/* empty css                */ /* empty css                 */ const A = {
    class: "mb-2!"
  },
  L = y({
    name: "PermissionButtonRouter",
    __name: "index",
    setup(N) {
      return (V, e) => {
        const s = C,
          p = v("Auth"),
          l = x,
          m = E,
          u = w("auth");
        return (
          d(),
          g("div", null, [
            r("p", A, "当前拥有的code列表：" + k(o(B)()), 1),
            n(
              m,
              { shadow: "never", class: "mb-2" },
              {
                header: t(
                  () =>
                    e[0] ||
                    (e[0] = [
                      r("div", { class: "card-header" }, "组件方式判断权限", -1)
                    ])
                ),
                default: t(() => [
                  n(
                    l,
                    { wrap: "" },
                    {
                      default: t(() => [
                        n(
                          p,
                          { value: "permission:btn:add" },
                          {
                            default: t(() => [
                              n(
                                s,
                                { plain: "", type: "warning" },
                                {
                                  default: t(
                                    () =>
                                      e[1] ||
                                      (e[1] = [
                                        i(
                                          " 拥有code：'permission:btn:add' 权限可见 "
                                        )
                                      ])
                                  ),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          p,
                          { value: ["permission:btn:edit"] },
                          {
                            default: t(() => [
                              n(
                                s,
                                { plain: "", type: "primary" },
                                {
                                  default: t(
                                    () =>
                                      e[2] ||
                                      (e[2] = [
                                        i(
                                          " 拥有code：['permission:btn:edit'] 权限可见 "
                                        )
                                      ])
                                  ),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          p,
                          {
                            value: [
                              "permission:btn:add",
                              "permission:btn:edit",
                              "permission:btn:delete"
                            ]
                          },
                          {
                            default: t(() => [
                              n(
                                s,
                                { plain: "", type: "danger" },
                                {
                                  default: t(
                                    () =>
                                      e[3] ||
                                      (e[3] = [
                                        i(
                                          " 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 "
                                        )
                                      ])
                                  ),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            ),
            n(
              m,
              { shadow: "never", class: "mb-2" },
              {
                header: t(
                  () =>
                    e[4] ||
                    (e[4] = [
                      r("div", { class: "card-header" }, "函数方式判断权限", -1)
                    ])
                ),
                default: t(() => [
                  n(
                    l,
                    { wrap: "" },
                    {
                      default: t(() => [
                        o(f)("permission:btn:add")
                          ? (d(),
                            a(
                              s,
                              { key: 0, plain: "", type: "warning" },
                              {
                                default: t(
                                  () =>
                                    e[5] ||
                                    (e[5] = [
                                      i(
                                        " 拥有code：'permission:btn:add' 权限可见 "
                                      )
                                    ])
                                ),
                                _: 1
                              }
                            ))
                          : b("", !0),
                        o(f)(["permission:btn:edit"])
                          ? (d(),
                            a(
                              s,
                              { key: 1, plain: "", type: "primary" },
                              {
                                default: t(
                                  () =>
                                    e[6] ||
                                    (e[6] = [
                                      i(
                                        " 拥有code：['permission:btn:edit'] 权限可见 "
                                      )
                                    ])
                                ),
                                _: 1
                              }
                            ))
                          : b("", !0),
                        o(f)([
                          "permission:btn:add",
                          "permission:btn:edit",
                          "permission:btn:delete"
                        ])
                          ? (d(),
                            a(
                              s,
                              { key: 2, plain: "", type: "danger" },
                              {
                                default: t(
                                  () =>
                                    e[7] ||
                                    (e[7] = [
                                      i(
                                        " 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 "
                                      )
                                    ])
                                ),
                                _: 1
                              }
                            ))
                          : b("", !0)
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            ),
            n(
              m,
              { shadow: "never" },
              {
                header: t(
                  () =>
                    e[8] ||
                    (e[8] = [
                      r(
                        "div",
                        { class: "card-header" },
                        " 指令方式判断权限（该方式不能动态修改权限） ",
                        -1
                      )
                    ])
                ),
                default: t(() => [
                  n(
                    l,
                    { wrap: "" },
                    {
                      default: t(() => [
                        _(
                          (d(),
                          a(
                            s,
                            { plain: "", type: "warning" },
                            {
                              default: t(
                                () =>
                                  e[9] ||
                                  (e[9] = [
                                    i(
                                      " 拥有code：'permission:btn:add' 权限可见 "
                                    )
                                  ])
                              ),
                              _: 1
                            }
                          )),
                          [[u, "permission:btn:add"]]
                        ),
                        _(
                          (d(),
                          a(
                            s,
                            { plain: "", type: "primary" },
                            {
                              default: t(
                                () =>
                                  e[10] ||
                                  (e[10] = [
                                    i(
                                      " 拥有code：['permission:btn:edit'] 权限可见 "
                                    )
                                  ])
                              ),
                              _: 1
                            }
                          )),
                          [[u, ["permission:btn:edit"]]]
                        ),
                        _(
                          (d(),
                          a(
                            s,
                            { plain: "", type: "danger" },
                            {
                              default: t(
                                () =>
                                  e[11] ||
                                  (e[11] = [
                                    i(
                                      " 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 "
                                    )
                                  ])
                              ),
                              _: 1
                            }
                          )),
                          [
                            [
                              u,
                              [
                                "permission:btn:add",
                                "permission:btn:edit",
                                "permission:btn:delete"
                              ]
                            ]
                          ]
                        )
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  });
export { L as default };
