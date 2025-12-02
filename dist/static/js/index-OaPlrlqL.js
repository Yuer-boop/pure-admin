var Zl = Object.defineProperty,
  Xl = Object.defineProperties;
var xl = Object.getOwnPropertyDescriptors;
var Re = Object.getOwnPropertySymbols;
var fl = Object.prototype.hasOwnProperty,
  ml = Object.prototype.propertyIsEnumerable;
var pl = (a, c, u) =>
    c in a
      ? Zl(a, c, { enumerable: !0, configurable: !0, writable: !0, value: u })
      : (a[c] = u),
  m = (a, c) => {
    for (var u in c || (c = {})) fl.call(c, u) && pl(a, u, c[u]);
    if (Re) for (var u of Re(c)) ml.call(c, u) && pl(a, u, c[u]);
    return a;
  },
  X = (a, c) => Xl(a, xl(c));
var Ze = (a, c) => {
  var u = {};
  for (var l in a) fl.call(a, l) && c.indexOf(l) < 0 && (u[l] = a[l]);
  if (a != null && Re)
    for (var l of Re(a)) c.indexOf(l) < 0 && ml.call(a, l) && (u[l] = a[l]);
  return u;
};
var De = (a, c, u) =>
  new Promise((l, r) => {
    var o = n => {
        try {
          g(u.next(n));
        } catch (C) {
          r(C);
        }
      },
      v = n => {
        try {
          g(u.throw(n));
        } catch (C) {
          r(C);
        }
      },
      g = n => (n.done ? l(n.value) : Promise.resolve(n.value).then(o, v));
    g((u = u.apply(a, c)).next());
  });
import {
  be as ea,
  bf as la,
  bg as aa,
  u as e,
  bh as Tl,
  bi as ta,
  ae as Ne,
  n as H,
  bj as oa,
  I as ae,
  a6 as He,
  d as ue,
  bk as Il,
  c as B,
  o as t,
  av as A,
  O as P,
  b as Y,
  e as ee,
  aN as S,
  bl as na,
  bm as de,
  v as Ae,
  aS as ol,
  g as _,
  bn as re,
  T as te,
  h as f,
  a4 as x,
  aQ as ne,
  aR as me,
  S as G,
  bo as el,
  f as q,
  W,
  bp as Sl,
  bq as Pe,
  br as Ue,
  a0 as sa,
  aJ as ve,
  bs as ra,
  Z as ua,
  $ as ia,
  bt as Se,
  aA as be,
  w as Ie,
  bu as vl,
  ah as ke,
  E as $e,
  bv as nl,
  bw as da,
  bx as ca,
  q as N,
  by as El,
  bz as $l,
  bA as ll,
  V as Ge,
  ai as Vl,
  bB as bl,
  U as Ke,
  aa as We,
  bC as pa,
  bD as fa,
  bE as ma,
  bF as va,
  bG as ba,
  aI as ha,
  bH as ga,
  bd as Dl,
  bc as Fl,
  bI as ya,
  aH as ka,
  bJ as Ca,
  bK as je,
  bL as wl,
  bM as _a,
  bN as Pa,
  bO as Bl,
  aO as Ta,
  bP as Ll,
  aW as Ia,
  bQ as Sa,
  at as Ea,
  bR as $a,
  bS as Va,
  b9 as Da,
  R as Le,
  aV as Fa,
  bT as hl,
  ag as wa,
  bU as Ba,
  bV as La,
  bW as gl,
  bX as Aa,
  bY as za,
  bZ as al,
  L as Ra,
  b_ as Oa,
  x as Al,
  b$ as Ha,
  c0 as ja,
  c1 as Ma,
  K as Na,
  c2 as Ua,
  an as Ga,
  c3 as Ka,
  c4 as Wa,
  a1 as Ya
} from "./index-B2fHy2Kp.js";
import { S as zl } from "./el-text-t5saBMly.js";
/* empty css               */ /* empty css                 */ /* empty css                     */ /* empty css                */ /* empty css                        */ /* empty css                  */ import { u as qa } from "./el-switch-L2aaNpdz.js";
import { _ as Ja } from "./pageLayout.vue_vue_type_style_index_0_lang-DEVPzbHa.js";
const Rl = "2.9.8";
var Qa = "[object Number]";
function Za(a) {
  return typeof a == "number" || (ea(a) && la(a) == Qa);
}
const Xa = Object.prototype.toString,
  sl = a => Xa.call(a),
  Ol = a => sl(a).slice(8, -1),
  Ce = Array.isArray,
  Xe = a => sl(a) === "[object Date]",
  z = a => typeof a == "function",
  Je = a => typeof a == "string",
  Hl = a => typeof a == "boolean",
  xa = a => a !== null && typeof a == "object",
  tl = a => xa(a) && z(a.then) && z(a.catch),
  fe = a => sl(a) === "[object Object]",
  et = a => typeof SVGElement != "undefined" && a instanceof SVGElement;
function lt(a, c = "YYYY-MM-DD HH:mm:ss") {
  return a ? aa(a || new Date()).format(c) : "";
}
function at(a, c = "￥", u = 2) {
  return a ? `${c}${Number(a).toFixed(u)}` : "";
}
const ge = (a, c = !1) =>
    c && Hl(a.editable) ? a.label + a.prop + a.editable : a.label + a.prop,
  jl = a => {
    const c = e(a);
    return Je(c) ? { content: c } : fe(c) ? c : { content: "" };
  },
  tt = (a, c) => {
    if (!fe(a)) throw new Error(`${c} expected Object but got ${Ol(a)}`);
  },
  Ye = (a, c, u, l, r) =>
    De(null, null, function* () {
      try {
        let o = {};
        const v = { row: u, index: l };
        return (
          a
            ? Ne(a)
              ? (o = a.value)
              : fe(a)
                ? (o = m({}, a))
                : z(a)
                  ? (o = yield a(c, v))
                  : tl(a)
                    ? (o = yield a)
                    : (o = a)
            : (o = {}),
          tt(o, r),
          o
        );
      } catch (o) {
        return Promise.reject(o);
      }
    }),
  Ve = (a, c) => (c ? `plus-${a}-${c}` : `plus-${a}`),
  _e = a => `${Ve("field", a)}`,
  Me = a => `${Ve("label", a)}`,
  Fe = a => `${Ve("extra", a)}`,
  we = a => `${Ve("previous", a)}`,
  yl = a => `${Ve("group", a)}`,
  ot = a => `${Ve("header", a)}`,
  kl = a => `${Ve("cell", a)}`,
  Ml = (a, c) => ta(a, c),
  Nl = (a, c, u) => Tl(a, c, u),
  Ul = (a, c) => {
    const u = a.split(".").map(o => Number(o)),
      l = c.split(".").map(o => Number(o)),
      r = Math.max(u.length, l.length);
    for (let o = 0; o < r; o++) {
      if ((u[o] || 0) > (l[o] || 0)) return 1;
      if ((u[o] || 0) < (l[o] || 0)) return -1;
    }
    return 0;
  },
  rl = Ul(Rl, "2.6.0") < 0,
  nt = Ul(Rl, "2.9.9") < 0,
  ye = a => (a ? e(a) : ""),
  xe = a => {
    Ce(a) ||
      console.error(
        "Uncaught TypeError: ",
        `options expected Array but got ${Ol(a)}`
      );
  },
  Oe = (a, c) => {
    const u = c.optionsMap || {};
    return c.valueType === "cascader" || !fe(u)
      ? a
      : a.map(o => {
          const v = o,
            g = (u == null ? void 0 : u.label) || "label",
            n = (u == null ? void 0 : u.value) || "value",
            C = { [g]: v[g], [n]: v[n] };
          return X(m({}, v), { __origin: C, label: o[g], value: o[n] });
        }) || [];
  },
  Gl = a => {
    const c = H([]),
      u = H(!1);
    if (!a.options) (c.value = []), (u.value = !0);
    else if (Ne(a.options) || oa(a.options) || Ce(a.options))
      ae(
        () => a.options,
        l => {
          const r = Ne(l) ? l.value : l;
          (c.value = Oe(r, a)), (u.value = !0);
        },
        { immediate: !0, deep: !0 }
      );
    else if (z(a.options)) {
      const l = a.options,
        r = l(a);
      tl(r)
        ? r
            .then(o => {
              (c.value = Oe(o, a)), (u.value = !0), xe(c.value);
            })
            .catch(o => {
              throw o;
            })
        : ((c.value = Oe(r, a)), (u.value = !0));
    } else
      tl(a.options)
        ? a.options
            .then(r => {
              (c.value = Oe(r, a)), (u.value = !0), xe(c.value);
            })
            .catch(r => {
              throw r;
            })
        : ((u.value = !0), xe(a.options));
    return { customOptions: c, customOptionsIsReady: u };
  },
  st = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500],
  Ee = { page: 1, pageSize: 10 },
  ul = Symbol("tableFormRefInjectionKey"),
  Kl = Symbol("tableFormFieldRefInjectionKey"),
  Wl = Symbol("tableFormRowInfoInjectionKey"),
  rt = ["datetimerange", "daterange", "monthrange"],
  ut = ["rate", "input-number", "slider"],
  it = [
    "checkbox",
    "cascader",
    "plus-date-picker",
    "plus-input-tag",
    "transfer"
  ],
  Cl = ["select", "radio", "checkbox", "select-v2", "plus-radio"];
function dt(a) {
  const c = e(a) || Ee,
    u = H([]),
    l = H(m({}, c)),
    r = H(0),
    o = H(!1),
    v = He([]);
  return { tableData: u, pageInfo: l, total: r, loadingStatus: o, buttons: v };
}
const ct = { class: "plus-pagination" },
  pt = ee("span", null, null, -1),
  ft = ee("span", null, null, -1);
var mt = ue({
    name: "PlusPagination",
    __name: "index",
    props: {
      modelValue: { default: () => m({}, Ee) },
      total: { default: 0 },
      pageSizeList: { default: () => [...st] },
      align: { default: "right" }
    },
    emits: ["update:modelValue", "change", "size-change", "current-change"],
    setup(a, { emit: c }) {
      const u = a,
        l = c,
        r = H(m({}, Ee));
      Il(() => {
        r.value = m({}, u.modelValue);
      });
      const o = () => {
          l("update:modelValue", r.value), l("change", r.value);
        },
        v = n => {
          (r.value.pageSize = n), (r.value.page = 1), o(), l("size-change", n);
        },
        g = n => {
          (r.value.page = n), o(), l("current-change", n);
        };
      return (n, C) => (
        t(),
        B("div", ct, [
          n.align === "right"
            ? A(n.$slots, "pagination-left", { key: 0 }, () => [pt])
            : P("v-if", !0),
          Y(
            e(na),
            S(
              {
                layout: "total, sizes, prev, pager, next, jumper",
                background: !1,
                "current-page": r.value.page,
                "page-size": r.value.pageSize,
                total: n.total,
                "page-sizes": n.pageSizeList
              },
              n.$attrs,
              { onSizeChange: v, onCurrentChange: g }
            ),
            null,
            16,
            ["current-page", "page-size", "total", "page-sizes"]
          ),
          n.align === "left"
            ? A(n.$slots, "pagination-right", { key: 1 }, () => [ft])
            : P("v-if", !0)
        ])
      );
    }
  }),
  vt = de(mt, [["__file", "index.vue"]]);
const bt = vt;
var ht = ue({
    name: "PlusRadio",
    __name: "index",
    props: {
      modelValue: { type: [String, Number, Boolean], default: "" },
      options: { default: () => [] },
      isCancel: { type: Boolean, default: !0 },
      fieldSlots: { default: void 0 },
      fieldChildrenSlot: { default: void 0 }
    },
    emits: ["change", "update:modelValue"],
    setup(a, { expose: c, emit: u }) {
      const l = a,
        r = u,
        o = H(),
        v = H(),
        g = Ae({ radio: "" });
      ae(
        () => l.modelValue,
        V => {
          g.radio = V;
        },
        { immediate: !0 }
      );
      const n = ol(),
        C = (V, F, s) => {
          if (!(Reflect.get(n, "disabled") || (s != null && s.disabled))) {
            if (l.isCancel) V.preventDefault();
            else return;
            (g.radio = g.radio === F ? "" : F),
              r("update:modelValue", g.radio),
              r("change", g.radio);
          }
        },
        $ = V => {
          l.isCancel || (r("update:modelValue", V), r("change", V));
        };
      return (
        c({ radioInstance: o, radioGroupInstance: v }),
        (V, F) => (
          t(),
          _(
            e(Sl),
            S(
              {
                ref_key: "radioGroupInstance",
                ref: v,
                modelValue: g.radio,
                "onUpdate:modelValue": F[0] || (F[0] = s => (g.radio = s)),
                class: "plus-radio"
              },
              V.$attrs
            ),
            re(
              {
                default: f(() => [
                  e(rl)
                    ? (t(!0),
                      B(
                        G,
                        { key: 0 },
                        te(
                          V.options,
                          s => (
                            t(),
                            _(
                              e(el),
                              S(
                                {
                                  key: `${s.label}${s.value}`,
                                  ref_for: !0,
                                  ref_key: "radioInstance",
                                  ref: o,
                                  label: s.value
                                },
                                e(z)(s.fieldItemProps)
                                  ? s.fieldItemProps(s)
                                  : s.fieldItemProps,
                                {
                                  onClick: E =>
                                    C(
                                      E,
                                      s.value,
                                      e(z)(s.fieldItemProps)
                                        ? s.fieldItemProps(s)
                                        : s.fieldItemProps
                                    ),
                                  onChange: E => $(s.value)
                                }
                              ),
                              {
                                default: f(() => [
                                  e(z)(s.fieldSlot)
                                    ? (t(),
                                      _(
                                        x(s.fieldSlot),
                                        S(
                                          {
                                            key: 0,
                                            "model-value": g.radio,
                                            column: l
                                          },
                                          s
                                        ),
                                        null,
                                        16,
                                        ["model-value"]
                                      ))
                                    : e(z)(V.fieldChildrenSlot)
                                      ? (t(),
                                        _(
                                          x(V.fieldChildrenSlot),
                                          S(
                                            {
                                              key: 1,
                                              "model-value": g.radio,
                                              column: l
                                            },
                                            s
                                          ),
                                          null,
                                          16,
                                          ["model-value"]
                                        ))
                                      : (t(),
                                        B(
                                          G,
                                          { key: 2 },
                                          [
                                            q(
                                              W(s == null ? void 0 : s.label),
                                              1
                                            )
                                          ],
                                          64
                                        ))
                                ]),
                                _: 2
                              },
                              1040,
                              ["label", "onClick", "onChange"]
                            )
                          )
                        ),
                        128
                      ))
                    : (t(),
                      B(
                        G,
                        { key: 1 },
                        [
                          P(" element-plus 版本号大于等于2.6.0 "),
                          (t(!0),
                          B(
                            G,
                            null,
                            te(
                              V.options,
                              s => (
                                t(),
                                _(
                                  e(el),
                                  S(
                                    {
                                      key: `${s.label}${s.value}`,
                                      ref_for: !0,
                                      ref_key: "radioInstance",
                                      ref: o,
                                      value: s.value
                                    },
                                    e(z)(s.fieldItemProps)
                                      ? s.fieldItemProps(s)
                                      : s.fieldItemProps,
                                    {
                                      onClick: E =>
                                        C(
                                          E,
                                          s.value,
                                          e(z)(s.fieldItemProps)
                                            ? s.fieldItemProps(s)
                                            : s.fieldItemProps
                                        ),
                                      onChange: E => $(s.value)
                                    }
                                  ),
                                  {
                                    default: f(() => [
                                      e(z)(s.fieldSlot)
                                        ? (t(),
                                          _(
                                            x(s.fieldSlot),
                                            S(
                                              {
                                                key: 0,
                                                "model-value": g.radio,
                                                column: l
                                              },
                                              s
                                            ),
                                            null,
                                            16,
                                            ["model-value"]
                                          ))
                                        : e(z)(V.fieldChildrenSlot)
                                          ? (t(),
                                            _(
                                              x(V.fieldChildrenSlot),
                                              S(
                                                {
                                                  key: 1,
                                                  "model-value": g.radio,
                                                  column: l
                                                },
                                                s
                                              ),
                                              null,
                                              16,
                                              ["model-value"]
                                            ))
                                          : (t(),
                                            B(
                                              G,
                                              { key: 2 },
                                              [
                                                q(
                                                  W(
                                                    s == null ? void 0 : s.label
                                                  ),
                                                  1
                                                )
                                              ],
                                              64
                                            ))
                                    ]),
                                    _: 2
                                  },
                                  1040,
                                  ["value", "onClick", "onChange"]
                                )
                              )
                            ),
                            128
                          ))
                        ],
                        64
                      ))
                ]),
                _: 2
              },
              [
                te(V.fieldSlots, (s, E) => ({
                  name: E,
                  fn: f(i => [(t(), _(x(s), ne(me(i)), null, 16))])
                }))
              ]
            ),
            1040,
            ["modelValue"]
          )
        )
      );
    }
  }),
  gt = de(ht, [["__file", "index.vue"]]);
const Yl = gt,
  yt = { class: "plus-table-action-bar__dropdown__link" },
  kt = { class: "plus-table-action-bar__more-text" };
var Ct = ue({
    name: "PlusTableActionBar",
    __name: "table-action-bar",
    props: {
      label: { default: "" },
      fixed: { default: "right" },
      showNumber: { type: [Number, Function], default: 3 },
      showLimitIncludeMore: { type: Boolean, default: !1 },
      type: { default: "link" },
      buttons: { default: () => [] },
      width: { default: 200 },
      actionBarTableColumnProps: { default: () => ({}) },
      confirmType: { default: "messageBox" }
    },
    emits: ["clickAction", "clickActionConfirmCancel"],
    setup(a, { emit: c }) {
      const u = a,
        l = c,
        { t: r } = Pe(),
        o = H(!0),
        v = Ue(ul),
        g = (s, E) => {
          const i = u.buttons.filter(y => {
              if (z(y.show)) {
                const R = y.show,
                  p = R(s, E, y);
                return e(p) !== !1;
              }
              return e(y.show) !== !1;
            }),
            h = z(u.showNumber) ? u.showNumber(s, E) : u.showNumber,
            T = i.length > h;
          return T
            ? u.showLimitIncludeMore
              ? {
                  showMore: T,
                  preButtons: i.slice(0, h - 1),
                  nextButtons: i.slice(h - 1)
                }
              : {
                  showMore: T,
                  preButtons: i.slice(0, h),
                  nextButtons: i.slice(h)
                }
            : { showMore: T, preButtons: i, nextButtons: [] };
        },
        n = (s, E) => {
          var i, h;
          const { row: T, buttonRow: y, index: R, rest: p, text: M } = s,
            j = m(
              {
                text: M,
                row: T,
                buttonRow: y,
                index: R,
                rowIndex: R,
                e: E,
                formRefs: v.value[R]
              },
              p
            );
          let U = r("plus.table.confirmToPerformThisOperation"),
            O = r("plus.table.prompt"),
            Z,
            D = null;
          if (fe(y.confirm)) {
            const w = z(y.confirm.title) ? y.confirm.title(j) : y.confirm.title;
            w && (O = w);
            const oe = z(y.confirm.message)
              ? y.confirm.message(j)
              : y.confirm.message;
            oe && (U = oe),
              (Z = (i = y.confirm) == null ? void 0 : i.options),
              (D = (h = y.confirm) == null ? void 0 : h.appContext);
          }
          return {
            msg: { message: U, title: O, options: Z, appContext: D },
            callbackParams: j
          };
        },
        C = (s, E, i, h) => {
          var T;
          const y = z(E.props) ? E.props(s, i, E) : e(E.props),
            R = z(E.text) ? e(E.text(s, i, E)) : e(E.text),
            p = { text: R, row: s, buttonRow: E, index: i, rest: h },
            { msg: M, callbackParams: j } = n(p);
          if (u.type === "icon")
            return be(
              ke,
              m({ placement: "top", content: R }, E.tooltipProps),
              () => {
                var U;
                return u.confirmType === "popconfirm" && E.confirm
                  ? be(
                      "span",
                      { class: "el-icon" },
                      be(
                        vl,
                        X(
                          m(
                            { trigger: "click" },
                            fe(E.confirm)
                              ? (U = E.confirm) == null
                                ? void 0
                                : U.popconfirmProps
                              : {}
                          ),
                          {
                            title: M.message,
                            onConfirm: O =>
                              $(X(m({}, j), { e: O, formRefs: v.value[i] })),
                            onCancel: O =>
                              V(X(m({}, j), { e: O, formRefs: v.value[i] }))
                          }
                        ),
                        {
                          reference: () =>
                            Ie(
                              be(
                                ve,
                                X(m({ size: 16, style: { margin: 0 } }, y), {
                                  onClick: () => {
                                    (o.value = !1),
                                      z(E.onClick) &&
                                        E.onClick(
                                          X(m({}, j), { formRefs: v.value[i] })
                                        );
                                  }
                                }),
                                () => (E.icon ? be(E.icon) : "")
                              ),
                              E.directives || []
                            )
                        }
                      )
                    )
                  : Ie(
                      be(
                        ve,
                        X(m({ size: 16 }, y), {
                          onClick: O =>
                            F(X(m({}, j), { e: O, formRefs: v.value[i] }), M)
                        }),
                        () => (E.icon ? be(E.icon) : "")
                      ),
                      E.directives || []
                    );
              }
            );
          {
            const U = u.type === "button" ? $e : nl,
              O = u.type === "link" ? { href: "javaScript:;" } : {};
            return u.confirmType === "popconfirm" && E.confirm
              ? be(
                  vl,
                  X(
                    m(
                      { trigger: "click" },
                      fe(E.confirm)
                        ? (T = E.confirm) == null
                          ? void 0
                          : T.popconfirmProps
                        : {}
                    ),
                    {
                      title: M.message,
                      onConfirm: Z =>
                        $(X(m({}, j), { e: Z, formRefs: v.value[i] })),
                      onCancel: Z =>
                        V(X(m({}, j), { e: Z, formRefs: v.value[i] }))
                    }
                  ),
                  {
                    reference: () =>
                      Ie(
                        be(
                          U,
                          X(m(m({ size: "small" }, O), y), {
                            onClick: () => {
                              (o.value = !1),
                                z(E.onClick) &&
                                  E.onClick(
                                    X(m({}, j), { formRefs: v.value[i] })
                                  );
                            }
                          }),
                          () => R
                        ),
                        E.directives || []
                      )
                  }
                )
              : Ie(
                  be(
                    U,
                    X(m(m({ size: "small" }, O), y), {
                      onClick: Z =>
                        F(X(m({}, j), { e: Z, formRefs: v.value[i] }), M)
                    }),
                    () => R
                  ),
                  E.directives || []
                );
          }
        },
        $ = s => {
          z(s.buttonRow.onConfirm) && s.buttonRow.onConfirm(s),
            l("clickAction", s);
        },
        V = s => {
          z(s.buttonRow.onCancel) && s.buttonRow.onCancel(s),
            l("clickActionConfirmCancel", s);
        },
        F = (s, E) => {
          o.value = !0;
          const { buttonRow: i } = s;
          if ((z(i.onClick) && i.onClick(s), i.confirm)) {
            if (u.confirmType === "messageBox") {
              const { message: h, title: T, options: y, appContext: R } = E;
              da.confirm(h, T, y, R)
                .then(() => {
                  z(i.onConfirm) && i.onConfirm(s), l("clickAction", s);
                })
                .catch(() => {
                  z(i.onCancel) && i.onCancel(s),
                    l("clickActionConfirmCancel", s);
                });
            }
          } else l("clickAction", s);
        };
      return (s, E) => (
        t(),
        _(
          e(Se),
          S(
            {
              key: "actionBar",
              "class-name": "plus-table-action-bar",
              label: e(s.label) || e(r)("plus.table.action"),
              fixed: s.fixed || "right",
              width: s.width || 200
            },
            s.actionBarTableColumnProps
          ),
          {
            default: f(y => {
              var R = y,
                { row: i, $index: h } = R,
                T = Ze(R, ["row", "$index"]);
              return [
                P(" 显示出来的按钮 "),
                (t(!0),
                B(
                  G,
                  null,
                  te(
                    g(i, h).preButtons,
                    p => (t(), _(x(C(i, p, h, T)), { key: p.text }))
                  ),
                  128
                )),
                P(" 隐藏的按钮 "),
                g(i, h).showMore
                  ? (t(),
                    _(
                      e(sa),
                      {
                        key: 0,
                        trigger: "click",
                        class: "plus-table-action-bar__dropdown",
                        "hide-on-click": o.value
                      },
                      {
                        dropdown: f(() => [
                          Y(
                            e(ua),
                            null,
                            {
                              default: f(() => [
                                (t(!0),
                                B(
                                  G,
                                  null,
                                  te(
                                    g(i, h).nextButtons,
                                    p => (
                                      t(),
                                      _(
                                        e(ia),
                                        { key: e(p.text) },
                                        {
                                          default: f(() => [
                                            (t(), _(x(C(i, p, h, T))))
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ]),
                              _: 2
                            },
                            1024
                          )
                        ]),
                        default: f(() => [
                          ee("span", yt, [
                            ee("span", kt, W(e(r)("plus.table.more")), 1),
                            A(s.$slots, "action-bar-more-icon", {}, () => [
                              Y(e(ve), null, {
                                default: f(() => [Y(e(ra))]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 2
                      },
                      1032,
                      ["hide-on-click"]
                    ))
                  : P("v-if", !0)
              ];
            }),
            _: 3
          },
          16,
          ["label", "fixed", "width"]
        )
      );
    }
  }),
  _t = de(Ct, [["__file", "table-action-bar.vue"]]),
  Pt = ue({
    name: "PlusRender",
    __name: "index",
    props: {
      renderType: { default: void 0 },
      callbackValue: { default: "" },
      customFieldProps: { default: () => ({}) },
      render: {},
      params: { default: () => ({}) },
      handleChange: {}
    },
    setup(a) {
      const c = a,
        u = H();
      ae(
        () => c.callbackValue,
        r => {
          u.value = r;
        },
        { flush: "post", immediate: !0 }
      );
      const l = () => {
        if (!c.render) return;
        const r = m({}, c.params),
          o =
            c.renderType === "form"
              ? c.render(u.value, c.handleChange, r)
              : c.render(u.value, r);
        if (ca(o)) {
          const v =
            c.renderType === "form"
              ? m(m({ modelValue: u.value }, c.customFieldProps), o.props)
              : m(m({}, c.customFieldProps), o.props);
          return X(m({}, o), { props: v });
        } else if (Je(o)) return o;
      };
      return (r, o) =>
        r.renderType === "form"
          ? (t(),
            _(
              x(l),
              S(
                {
                  key: 0,
                  modelValue: u.value,
                  "onUpdate:modelValue": o[0] || (o[0] = v => (u.value = v))
                },
                r.customFieldProps
              ),
              null,
              16,
              ["modelValue"]
            ))
          : (t(), _(x(l), ne(S({ key: 1 }, r.customFieldProps)), null, 16));
    }
  }),
  Tt = de(Pt, [["__file", "index.vue"]]);
const qe = Tt,
  It = { class: "plus-date-picker__middle" };
var St = ue({
    name: "PlusDatePicker",
    __name: "index",
    props: {
      modelValue: { default: () => [] },
      rangeSeparator: { default: "/" },
      valueFormat: { default: "YYYY-MM-DD HH:mm:ss" },
      type: { default: "datetime" },
      startProps: { default: () => ({}) },
      endProps: { default: () => ({}) },
      disabled: { type: Boolean, default: !1 },
      startDisabledDate: {
        type: Function,
        default: (a, c) => (c ? a.getTime() > new Date(c).getTime() : !1)
      },
      endDisabledDate: {
        type: Function,
        default: (a, c) => (c ? a.getTime() < new Date(c).getTime() : !1)
      }
    },
    emits: ["change", "focus", "update:modelValue"],
    setup(a, { expose: c, emit: u }) {
      const l = a,
        r = u,
        { t: o } = Pe(),
        v = ol(),
        g = N(() => m(m({}, v), l.startProps)),
        n = N(() => m(m({}, v), l.endProps)),
        C = H(),
        $ = H(),
        V = Ae({ start: "", end: "" }),
        F = El(),
        s = H(!1),
        E = R => {
          (s.value = !0), r("focus", R);
        },
        i = () => {
          s.value = !1;
        },
        h = R =>
          l.startDisabledDate && z(l.startDisabledDate)
            ? l.startDisabledDate(R, V.end)
            : !1,
        T = R =>
          l.endDisabledDate && z(l.endDisabledDate)
            ? l.endDisabledDate(R, V.start)
            : !1;
      ae(
        () => l.modelValue,
        R => {
          const [p, M] = R;
          (V.start = p), (V.end = M);
        },
        { immediate: !0 }
      );
      const y = () => {
        const R = [V.start, V.end];
        r("update:modelValue", R), r("change", R);
      };
      return (
        c({ startPickerInstance: C, endPickerInstance: $ }),
        (R, p) =>
          Ie(
            (t(),
            B(
              "div",
              {
                class: Ge([
                  "plus-date-picker",
                  { "is-focus": s.value, "is-disabled": e(F) }
                ])
              },
              [
                Y(
                  e(ll),
                  S(
                    {
                      ref_key: "startPickerInstance",
                      ref: C,
                      modelValue: V.start,
                      "onUpdate:modelValue":
                        p[0] || (p[0] = M => (V.start = M)),
                      type: R.type,
                      "value-format": R.valueFormat,
                      placeholder: e(o)("plus.datepicker.startPlaceholder"),
                      "disabled-date": h,
                      class: "plus-date-picker__start",
                      clearable: "",
                      disabled: e(F)
                    },
                    g.value,
                    { onChange: y, onFocus: E }
                  ),
                  null,
                  16,
                  [
                    "modelValue",
                    "type",
                    "value-format",
                    "placeholder",
                    "disabled"
                  ]
                ),
                ee("span", It, W(R.rangeSeparator), 1),
                Y(
                  e(ll),
                  S(
                    {
                      ref_key: "endPickerInstance",
                      ref: $,
                      modelValue: V.end,
                      "onUpdate:modelValue": p[1] || (p[1] = M => (V.end = M)),
                      "value-format": R.valueFormat,
                      type: R.type,
                      placeholder: e(o)("plus.datepicker.endPlaceholder"),
                      "disabled-date": T,
                      class: "plus-date-picker__end",
                      clearable: "",
                      disabled: e(F)
                    },
                    n.value,
                    { onChange: y, onFocus: E }
                  ),
                  null,
                  16,
                  [
                    "modelValue",
                    "value-format",
                    "type",
                    "placeholder",
                    "disabled"
                  ]
                )
              ],
              2
            )),
            [[e($l), i]]
          )
      );
    }
  }),
  Et = de(St, [["__file", "index.vue"]]);
const $t = Et;
var Vt = ue({
    name: "PlusInputTag",
    __name: "index",
    props: {
      modelValue: { default: () => [] },
      trigger: { default: () => ["blur", "enter", "space"] },
      inputProps: { default: () => ({}) },
      tagProps: { default: () => ({}) },
      limit: { default: 1 / 0 },
      formatTag: { type: Function, default: void 0 },
      retainInputValue: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 }
    },
    emits: ["update:modelValue", "change", "remove", "blur", "enter", "space"],
    setup(a, { expose: c, emit: u }) {
      const l = a,
        r = u,
        o = H(),
        v = H(),
        g = H(),
        n = Ae({ tags: [], inputValue: "", isFocus: !1 }),
        C = El(),
        { t: $ } = Pe();
      ae(
        () => l.modelValue,
        h => {
          n.tags = h.slice(0, l.limit);
        },
        { immediate: !0 }
      );
      const V = () => {
          n.isFocus = !1;
        },
        F = () => {
          var h;
          (n.isFocus = !0), (h = o.value) == null || h.focus();
        },
        s = h => {
          C.value ||
            ((n.tags = n.tags.filter(T => T !== h)),
            r("remove", h),
            r("update:modelValue", n.tags),
            r("change", n.tags));
        },
        E = () => {
          n.inputValue.trim() &&
            !n.tags.includes(n.inputValue.trim()) &&
            n.tags.length < l.limit &&
            n.tags.push(n.inputValue.trim()),
            l.retainInputValue || (n.inputValue = ""),
            r("update:modelValue", n.tags),
            r("change", n.tags);
        },
        i = (h, T) => {
          r(T, n.inputValue, h),
            (Ce(l.trigger)
              ? l.trigger
              : Je(l.trigger)
                ? [l.trigger]
                : ["blur", "enter", "space"]
            ).includes(T) && E();
        };
      return (
        c({ inputInstance: o, tagInstance: v }),
        (h, T) =>
          Ie(
            (t(),
            B(
              "div",
              {
                ref_key: "plusInputTagInstance",
                ref: g,
                class: Ge([
                  "plus-input-tag",
                  { "is-focus": n.isFocus, "is-disabled": e(C) }
                ]),
                onClick: F
              },
              [
                (t(!0),
                B(
                  G,
                  null,
                  te(
                    n.tags,
                    y => (
                      t(),
                      _(
                        e(Vl),
                        S(
                          {
                            ref_for: !0,
                            ref_key: "tagInstance",
                            ref: v,
                            key: y,
                            class: "plus-input-tag__tag"
                          },
                          h.tagProps,
                          { closable: "", onClose: R => s(y) }
                        ),
                        {
                          default: f(() => [
                            q(
                              W(
                                h.formatTag && e(z)(h.formatTag)
                                  ? h.formatTag(y)
                                  : y
                              ),
                              1
                            )
                          ]),
                          _: 2
                        },
                        1040,
                        ["onClose"]
                      )
                    )
                  ),
                  128
                )),
                n.tags.length < h.limit
                  ? (t(),
                    _(
                      e(We),
                      S(
                        {
                          key: 0,
                          ref_key: "inputInstance",
                          ref: o,
                          modelValue: n.inputValue,
                          "onUpdate:modelValue":
                            T[0] || (T[0] = y => (n.inputValue = y)),
                          class: "plus-input-tag__input",
                          placeholder: n.tags.length
                            ? ""
                            : e($)("plus.inputTag.placeholder"),
                          disabled: e(C) || n.tags.length >= h.limit
                        },
                        h.inputProps,
                        {
                          clearable: "",
                          onBlur: T[1] || (T[1] = y => i(y, "blur")),
                          onKeyup: [
                            T[2] ||
                              (T[2] = bl(
                                Ke(y => i(y, "enter"), ["exact"]),
                                ["enter"]
                              )),
                            T[3] ||
                              (T[3] = bl(
                                Ke(y => i(y, "space"), ["exact"]),
                                ["space"]
                              ))
                          ]
                        }
                      ),
                      null,
                      16,
                      ["modelValue", "placeholder", "disabled"]
                    ))
                  : P("v-if", !0)
              ],
              2
            )),
            [[e($l), V]]
          )
      );
    }
  }),
  Dt = de(Vt, [["__file", "index.vue"]]);
const Ft = Dt,
  ql = {
    "plus-radio": { component: Yl, hasOptions: !0 },
    "plus-date-picker": { component: $t },
    "plus-input-tag": { component: Ft },
    autocomplete: {
      component: Pa,
      props: { placeholder: "plus.field.pleaseEnter" },
      hasSelectEvent: !0
    },
    cascader: { component: _a, hasOptions: !0 },
    checkbox: { component: wl, children: je, hasVersionCompatibility: !0 },
    "color-picker": { component: Ca },
    "date-picker": {
      component: ll,
      props: {
        startPlaceholder: "plus.datepicker.startPlaceholder",
        endPlaceholder: "plus.datepicker.endPlaceholder"
      }
    },
    "input-number": {
      component: ka,
      props: { placeholder: "plus.field.pleaseEnter" }
    },
    radio: { component: Sl, children: el, hasVersionCompatibility: !0 },
    rate: { component: ya },
    select: { component: Fl, children: Dl },
    slider: { component: ga },
    switch: { component: ha },
    "time-picker": { component: ba },
    "time-select": { component: va },
    transfer: { component: ma },
    input: { component: We, props: { placeholder: "plus.field.pleaseEnter" } },
    textarea: {
      component: We,
      props: { type: "textarea", placeholder: "plus.field.pleaseEnter" }
    },
    "tree-select": { component: fa },
    "select-v2": { component: pa, hasOptions: !0 }
  },
  wt = a => Object.keys(ql).includes(a),
  Be = a => Reflect.get(ql, a) || {},
  Bt = { class: "el-form-item__error" },
  Lt = { class: "plus-form-item__label" };
var At = ue({
    name: "PlusFormItem",
    __name: "index",
    props: {
      modelValue: { default: "" },
      hasLabel: { default: !0 },
      label: { default: "" },
      prop: {},
      fieldProps: { default: () => ({}) },
      valueType: { default: void 0 },
      options: { default: () => [] },
      formItemProps: { default: () => ({}) },
      renderField: { default: void 0 },
      renderLabel: { default: void 0 },
      tooltip: { default: "" },
      fieldSlots: { default: () => ({}) },
      fieldChildrenSlot: { default: void 0 },
      renderErrorMessage: { default: void 0 },
      optionsMap: { default: void 0 },
      index: { default: 0 },
      clearable: { type: Boolean, default: !0 }
    },
    emits: ["update:modelValue", "change"],
    setup(a, { expose: c, emit: u }) {
      const l = Ia,
        r = ke,
        o = ve,
        v = We,
        g = Fl,
        n = Dl,
        C = a,
        $ = u,
        { t: V } = Pe(),
        { customOptions: F, customOptionsIsReady: s } = Gl(C),
        E = H(),
        i = H(),
        h = H({}),
        T = H({}),
        y = H(),
        R = H(!1),
        p = H(!1),
        M = N(() => ye(C.label)),
        j = Ue(Kl, {}),
        U = Ue(Wl, {}),
        O = N(() =>
          X(m(m({}, C), e(U)), {
            label: M.value,
            fieldProps: T.value,
            formItemProps: h.value,
            options: F.value
          })
        ),
        Z = N(() => {
          var d, I, K, L, ce, ie;
          return C.valueType === "cascader" &&
            ((I = (d = T.value) == null ? void 0 : d.props) == null
              ? void 0
              : I.emitPath) === !1
            ? !1
            : !!(
                it.includes(C.valueType) ||
                (C.valueType === "select" &&
                  ((K = T.value) == null ? void 0 : K.multiple) === !0) ||
                (C.valueType === "date-picker" &&
                  rt.includes((L = T.value) == null ? void 0 : L.type)) ||
                (C.valueType === "time-picker" &&
                  ((ce = T.value) == null ? void 0 : ce.isRange) === !0) ||
                (C.valueType === "tree-select" &&
                  ((ie = T.value) == null ? void 0 : ie.multiple) === !0)
              );
        }),
        D = N(() => !!ut.includes(C.valueType)),
        w = d => {
          if (Z.value)
            if (Ce(d)) {
              const [I, K] = d;
              Xe(I) || Xe(K)
                ? (y.value = [String(I), String(K)])
                : (y.value = d);
            } else y.value = [];
          else
            D.value
              ? (y.value =
                  d == null || d === ""
                    ? null
                    : typeof d == "string"
                      ? Number(d)
                      : d)
              : Xe(d)
                ? (y.value = String(d))
                : (y.value = d);
          p.value = !0;
        },
        oe = N(() => {
          const {
            hasOptions: d,
            hasSelectEvent: I,
            props: K
          } = Be(C.valueType);
          return m(
            m(
              X(
                m(
                  m(
                    m({}, d ? { options: F.value } : null),
                    I ? { onSelect: k } : null
                  ),
                  K
                ),
                {
                  placeholder:
                    K != null && K.placeholder
                      ? V(K == null ? void 0 : K.placeholder) + M.value
                      : V("plus.field.pleaseSelect") + M.value
                }
              ),
              C.valueType === "date-picker"
                ? {
                    startPlaceholder:
                      K != null && K.startPlaceholder
                        ? V(K == null ? void 0 : K.startPlaceholder)
                        : "",
                    endPlaceholder:
                      K != null && K.startPlaceholder
                        ? V(K == null ? void 0 : K.endPlaceholder)
                        : ""
                  }
                : null
            ),
            T.value
          );
        }),
        he = d =>
          m(
            m(
              {},
              C.valueType === "select"
                ? { label: d.label, value: d.value }
                : rl
                  ? { label: d.value }
                  : { label: d.label, value: d.value }
            ),
            z(d.fieldItemProps) ? d.fieldItemProps(d) : d.fieldItemProps
          ),
        pe = N(() => {
          var d;
          return (d = O.value.index) != null ? d : C.index;
        });
      ae(
        () => [C.formItemProps, y.value],
        () => {
          Ye(C.formItemProps, y.value, e(O), e(pe), "formItemProps")
            .then(d => {
              h.value = d;
            })
            .catch(d => {
              throw d;
            });
        },
        { immediate: !0, deep: !0, flush: "post" }
      ),
        ae(
          () => [C.fieldProps, y.value],
          () => {
            Ye(C.fieldProps, y.value, e(O), e(pe), "fieldProps")
              .then(d => {
                (T.value = d), (R.value = !0);
              })
              .catch(d => {
                throw d;
              });
          },
          { immediate: !0, deep: !0, flush: "post" }
        ),
        ae(
          N(() => [C.modelValue, R.value, s.value]),
          ([d, I, K]) => {
            I && K && w(d);
          },
          { immediate: !0, flush: "post" }
        );
      const se = d => {
          $("update:modelValue", d), $("change", d);
        },
        k = ({ value: d }) => {
          se(d);
        };
      return (
        ae(i, () => {
          j.value = { fieldInstance: i.value, valueIsReady: p };
        }),
        c({ formItemInstance: E, fieldInstance: i }),
        (d, I) => {
          var K;
          return p.value
            ? (t(),
              _(
                e(l),
                S(
                  {
                    key: 0,
                    ref_key: "formItemInstance",
                    ref: E,
                    label: d.hasLabel ? M.value : "",
                    prop: d.prop,
                    class: "plus-form-item"
                  },
                  h.value,
                  {
                    "label-width": d.hasLabel
                      ? (K = h.value) == null
                        ? void 0
                        : K.labelWidth
                      : "0px"
                  }
                ),
                re(
                  {
                    default: f(() => [
                      d.renderField && e(z)(d.renderField)
                        ? (t(),
                          B(
                            G,
                            { key: 0 },
                            [
                              p.value
                                ? (t(),
                                  _(
                                    e(qe),
                                    {
                                      key: 0,
                                      render: d.renderField,
                                      params: O.value,
                                      "callback-value": y.value,
                                      "custom-field-props": T.value,
                                      "render-type": "form",
                                      "handle-change": se
                                    },
                                    null,
                                    8,
                                    [
                                      "render",
                                      "params",
                                      "callback-value",
                                      "custom-field-props"
                                    ]
                                  ))
                                : P("v-if", !0)
                            ],
                            64
                          ))
                        : d.$slots[e(_e)(d.prop)]
                          ? A(
                              d.$slots,
                              e(_e)(d.prop),
                              S({ key: 1 }, O.value, { column: C })
                            )
                          : d.valueType === "select" && T.value.multiple === !0
                            ? (t(),
                              _(
                                e(g),
                                S(
                                  {
                                    key: 2,
                                    ref_key: "fieldInstance",
                                    ref: i,
                                    modelValue: y.value,
                                    "onUpdate:modelValue":
                                      I[0] || (I[0] = L => (y.value = L)),
                                    placeholder:
                                      e(V)("plus.field.pleaseSelect") + M.value,
                                    class: "plus-form-item-field",
                                    clearable: d.clearable
                                  },
                                  T.value,
                                  { "onUpdate:modelValue": se }
                                ),
                                re(
                                  {
                                    default: f(() => [
                                      (t(!0),
                                      B(
                                        G,
                                        null,
                                        te(
                                          e(F),
                                          L => (
                                            t(),
                                            _(
                                              e(n),
                                              S(
                                                {
                                                  key: L.label,
                                                  label: L.label,
                                                  value: L.value
                                                },
                                                e(z)(L.fieldItemProps)
                                                  ? L.fieldItemProps(L)
                                                  : L.fieldItemProps
                                              ),
                                              {
                                                default: f(() => [
                                                  e(z)(L.fieldSlot)
                                                    ? (t(),
                                                      _(
                                                        x(L.fieldSlot),
                                                        ne(S({ key: 0 }, L)),
                                                        null,
                                                        16
                                                      ))
                                                    : e(z)(d.fieldChildrenSlot)
                                                      ? (t(),
                                                        _(
                                                          x(
                                                            d.fieldChildrenSlot
                                                          ),
                                                          ne(S({ key: 1 }, L)),
                                                          null,
                                                          16
                                                        ))
                                                      : (t(),
                                                        B(
                                                          G,
                                                          { key: 2 },
                                                          [q(W(L.label), 1)],
                                                          64
                                                        ))
                                                ]),
                                                _: 2
                                              },
                                              1040,
                                              ["label", "value"]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ]),
                                    _: 2
                                  },
                                  [
                                    te(d.fieldSlots, (L, ce) => ({
                                      name: ce,
                                      fn: f(ie => [
                                        (t(), _(x(L), ne(me(ie)), null, 16))
                                      ])
                                    }))
                                  ]
                                ),
                                1040,
                                ["modelValue", "placeholder", "clearable"]
                              ))
                            : e(wt)(d.valueType)
                              ? (t(),
                                B(
                                  G,
                                  { key: 3 },
                                  [
                                    P(" 统一处理 "),
                                    P(" has-children  "),
                                    e(Be)(d.valueType).children
                                      ? (t(),
                                        _(
                                          x(e(Be)(d.valueType).component),
                                          S(
                                            {
                                              key: 0,
                                              ref_key: "fieldInstance",
                                              ref: i,
                                              modelValue: y.value,
                                              "onUpdate:modelValue":
                                                I[1] ||
                                                (I[1] = L => (y.value = L)),
                                              class: "plus-form-item-field",
                                              clearable: d.clearable
                                            },
                                            oe.value,
                                            { "onUpdate:modelValue": se }
                                          ),
                                          re(
                                            {
                                              default: f(() => [
                                                (t(!0),
                                                B(
                                                  G,
                                                  null,
                                                  te(
                                                    e(F),
                                                    L => (
                                                      t(),
                                                      _(
                                                        x(
                                                          e(Be)(d.valueType)
                                                            .children
                                                        ),
                                                        S(
                                                          { key: L.label },
                                                          he(L)
                                                        ),
                                                        {
                                                          default: f(() => [
                                                            e(z)(L.fieldSlot)
                                                              ? (t(),
                                                                _(
                                                                  x(
                                                                    L.fieldSlot
                                                                  ),
                                                                  S(
                                                                    {
                                                                      key: 0,
                                                                      "model-value":
                                                                        y.value,
                                                                      column:
                                                                        O.value
                                                                    },
                                                                    L
                                                                  ),
                                                                  null,
                                                                  16,
                                                                  [
                                                                    "model-value",
                                                                    "column"
                                                                  ]
                                                                ))
                                                              : e(z)(
                                                                    d.fieldChildrenSlot
                                                                  )
                                                                ? (t(),
                                                                  _(
                                                                    x(
                                                                      d.fieldChildrenSlot
                                                                    ),
                                                                    S(
                                                                      {
                                                                        key: 1,
                                                                        "model-value":
                                                                          y.value,
                                                                        column:
                                                                          O.value
                                                                      },
                                                                      L
                                                                    ),
                                                                    null,
                                                                    16,
                                                                    [
                                                                      "model-value",
                                                                      "column"
                                                                    ]
                                                                  ))
                                                                : (t(),
                                                                  B(
                                                                    G,
                                                                    { key: 2 },
                                                                    [
                                                                      q(
                                                                        W(
                                                                          L.label
                                                                        ),
                                                                        1
                                                                      )
                                                                    ],
                                                                    64
                                                                  ))
                                                          ]),
                                                          _: 2
                                                        },
                                                        1040
                                                      )
                                                    )
                                                  ),
                                                  128
                                                ))
                                              ]),
                                              _: 2
                                            },
                                            [
                                              te(d.fieldSlots, (L, ce) => ({
                                                name: ce,
                                                fn: f(ie => [
                                                  (t(),
                                                  _(
                                                    x(L),
                                                    S(
                                                      {
                                                        value: y.value,
                                                        column: O.value
                                                      },
                                                      ie
                                                    ),
                                                    null,
                                                    16,
                                                    ["value", "column"]
                                                  ))
                                                ])
                                              }))
                                            ]
                                          ),
                                          1040,
                                          ["modelValue", "clearable"]
                                        ))
                                      : (t(),
                                        B(
                                          G,
                                          { key: 1 },
                                          [
                                            P(" no-children  "),
                                            (t(),
                                            _(
                                              x(e(Be)(d.valueType).component),
                                              S(
                                                {
                                                  ref_key: "fieldInstance",
                                                  ref: i,
                                                  modelValue: y.value,
                                                  "onUpdate:modelValue":
                                                    I[2] ||
                                                    (I[2] = L => (y.value = L)),
                                                  class: "plus-form-item-field",
                                                  clearable: d.clearable,
                                                  "field-children-slot":
                                                    d.fieldChildrenSlot
                                                },
                                                oe.value,
                                                { "onUpdate:modelValue": se }
                                              ),
                                              re({ _: 2 }, [
                                                te(d.fieldSlots, (L, ce) => ({
                                                  name: ce,
                                                  fn: f(ie => [
                                                    (t(),
                                                    _(
                                                      x(L),
                                                      S(
                                                        {
                                                          "model-value":
                                                            y.value,
                                                          column: O.value
                                                        },
                                                        ie
                                                      ),
                                                      null,
                                                      16,
                                                      ["model-value", "column"]
                                                    ))
                                                  ])
                                                }))
                                              ]),
                                              1040,
                                              [
                                                "modelValue",
                                                "clearable",
                                                "field-children-slot"
                                              ]
                                            ))
                                          ],
                                          2112
                                        ))
                                  ],
                                  64
                                ))
                              : d.valueType === "text"
                                ? (t(),
                                  _(
                                    e(Ta),
                                    S(
                                      {
                                        key: 4,
                                        ref_key: "fieldInstance",
                                        ref: i,
                                        class: "plus-form-item-field"
                                      },
                                      T.value
                                    ),
                                    {
                                      default: f(() => [q(W(y.value), 1)]),
                                      _: 1
                                    },
                                    16
                                  ))
                                : d.valueType === "divider"
                                  ? (t(),
                                    _(
                                      e(Ll),
                                      S(
                                        {
                                          key: 5,
                                          ref_key: "fieldInstance",
                                          ref: i,
                                          class: "plus-form-item-field"
                                        },
                                        T.value
                                      ),
                                      {
                                        default: f(() => [q(W(y.value), 1)]),
                                        _: 1
                                      },
                                      16
                                    ))
                                  : (t(),
                                    _(
                                      e(v),
                                      S(
                                        {
                                          key: 6,
                                          ref_key: "fieldInstance",
                                          ref: i,
                                          modelValue: y.value,
                                          "onUpdate:modelValue":
                                            I[3] || (I[3] = L => (y.value = L)),
                                          class: "plus-form-item-field",
                                          placeholder:
                                            e(V)("plus.field.pleaseEnter") +
                                            M.value,
                                          autocomplete: "off",
                                          clearable: d.clearable
                                        },
                                        T.value,
                                        { "onUpdate:modelValue": se }
                                      ),
                                      re({ _: 2 }, [
                                        te(d.fieldSlots, (L, ce) => ({
                                          name: ce,
                                          fn: f(ie => [
                                            (t(),
                                            _(
                                              x(L),
                                              S(
                                                {
                                                  "model-value": y.value,
                                                  column: O.value
                                                },
                                                ie
                                              ),
                                              null,
                                              16,
                                              ["model-value", "column"]
                                            ))
                                          ])
                                        }))
                                      ]),
                                      1040,
                                      ["modelValue", "placeholder", "clearable"]
                                    ))
                    ]),
                    _: 2
                  },
                  [
                    e(z)(d.renderErrorMessage)
                      ? {
                          name: "error",
                          fn: f(({ error: L }) => [
                            ee("div", Bt, [
                              (t(),
                              _(
                                x(d.renderErrorMessage),
                                S(C, {
                                  value: y.value,
                                  error: L,
                                  label: M.value
                                }),
                                null,
                                16,
                                ["value", "error", "label"]
                              ))
                            ])
                          ]),
                          key: "0"
                        }
                      : void 0,
                    d.hasLabel
                      ? {
                          name: "label",
                          fn: f(({ label: L }) => [
                            ee("span", Lt, [
                              d.renderLabel && e(z)(d.renderLabel)
                                ? (t(),
                                  B(
                                    G,
                                    { key: 0 },
                                    [
                                      p.value
                                        ? (t(),
                                          _(
                                            e(qe),
                                            {
                                              key: 0,
                                              render: d.renderLabel,
                                              params: O.value,
                                              "callback-value": L,
                                              "custom-field-props": T.value
                                            },
                                            null,
                                            8,
                                            [
                                              "render",
                                              "params",
                                              "callback-value",
                                              "custom-field-props"
                                            ]
                                          ))
                                        : P("v-if", !0)
                                    ],
                                    64
                                  ))
                                : A(
                                    d.$slots,
                                    e(Me)(d.prop),
                                    ne(S({ key: 1 }, O.value)),
                                    () => [q(W(L), 1)]
                                  ),
                              d.tooltip
                                ? (t(),
                                  _(
                                    e(r),
                                    S(
                                      { key: 2, placement: "top" },
                                      e(jl)(d.tooltip)
                                    ),
                                    {
                                      default: f(() => [
                                        A(d.$slots, "tooltip-icon", {}, () => [
                                          Y(
                                            e(o),
                                            {
                                              class:
                                                "plus-table-column__label__icon",
                                              size: 16
                                            },
                                            {
                                              default: f(() => [Y(e(Bl))]),
                                              _: 1
                                            }
                                          )
                                        ])
                                      ]),
                                      _: 3
                                    },
                                    16
                                  ))
                                : P("v-if", !0)
                            ])
                          ]),
                          key: "1"
                        }
                      : void 0
                  ]
                ),
                1040,
                ["label", "prop", "label-width"]
              ))
            : P("v-if", !0);
        }
      );
    }
  }),
  zt = de(At, [["__file", "index.vue"]]);
const Rt = zt;
var Ot = ue({
    name: "PlusCollapseTransition",
    __name: "collapse-transition",
    props: {
      collapseDuration: { default: 300 },
      collapseTransition: { type: Boolean, default: !0 }
    },
    setup(a) {
      const c = a,
        u = {
          beforeEnter(l) {
            l.style.opacity = 0;
          },
          enter(l, r) {
            requestAnimationFrame(() => {
              (l.style.transition = `opacity ${c.collapseDuration}ms linear`),
                (l.style.opacity = 1),
                r();
            });
          },
          leave(l, r) {
            (l.style.opacity = 0),
              setTimeout(
                () => {
                  r();
                },
                (c.collapseDuration / 3) * 2
              );
          }
        };
      return (l, r) =>
        l.collapseTransition
          ? (t(),
            _(
              Ea,
              S({ key: 0, name: "plus-collapse-transition", css: !1 }, Sa(u)),
              { default: f(() => [A(l.$slots, "default")]), _: 3 },
              16
            ))
          : A(l.$slots, "default", { key: 1 });
    }
  }),
  Ht = de(Ot, [["__file", "collapse-transition.vue"]]);
const jt = { key: 0, class: "plus-form-item-previous" },
  Mt = { key: 1, class: "plus-form-item-extra" };
var Nt = ue({
    name: "PlusFormContent",
    __name: "form-content",
    props: {
      modelValue: { default: () => ({}) },
      hasLabel: { type: Boolean, default: !0 },
      columns: { default: () => [] },
      rowProps: { default: () => ({}) },
      colProps: { default: () => ({}) },
      collapseDuration: { default: void 0 },
      collapseTransition: { type: Boolean, default: void 0 },
      clearable: { type: Boolean, default: !0 }
    },
    emits: ["update:modelValue", "change"],
    setup(a, { emit: c }) {
      const u = a,
        l = c,
        r = H({}),
        o = n => {
          const C = e(n);
          return Hl(C) ? C : u.hasLabel;
        };
      ae(
        () => u.modelValue,
        n => {
          r.value = n;
        },
        { immediate: !0 }
      );
      const v = n => Ml(r.value, n),
        g = (n, C) => {
          Nl(r.value, C.prop, n),
            l("update:modelValue", r.value),
            l("change", r.value, C);
        };
      return (n, C) => (
        t(),
        _(
          e(Va),
          S(n.rowProps, { class: "plus-form__row" }),
          {
            default: f(() => [
              Y(
                Ht,
                {
                  "collapse-duration": n.collapseDuration,
                  "collapse-transition": n.collapseTransition
                },
                {
                  default: f(() => [
                    (t(!0),
                    B(
                      G,
                      null,
                      te(
                        n.columns,
                        $ => (
                          t(),
                          _(
                            e($a),
                            S({ key: $.prop }, $.colProps || n.colProps),
                            {
                              default: f(() => [
                                P(" el-form-item上一行的内容 "),
                                $.renderPrevious || n.$slots[e(we)($.prop)]
                                  ? (t(),
                                    B("div", jt, [
                                      e(z)($.renderPrevious)
                                        ? (t(),
                                          _(
                                            x($.renderPrevious),
                                            ne(S({ key: 0 }, $)),
                                            null,
                                            16
                                          ))
                                        : n.$slots[e(we)($.prop)]
                                          ? A(
                                              n.$slots,
                                              e(we)($.prop),
                                              ne(S({ key: 1 }, $))
                                            )
                                          : P("v-if", !0)
                                    ]))
                                  : P("v-if", !0),
                                Y(
                                  e(Rt),
                                  S({ "model-value": v($.prop) }, $, {
                                    clearable: n.clearable,
                                    "has-label": o($.hasLabel),
                                    onChange: V => g(V, $)
                                  }),
                                  re({ _: 2 }, [
                                    n.$slots[e(Me)($.prop)]
                                      ? {
                                          name: e(Me)($.prop),
                                          fn: f(V => [
                                            A(
                                              n.$slots,
                                              e(Me)($.prop),
                                              ne(me(V))
                                            )
                                          ]),
                                          key: "0"
                                        }
                                      : void 0,
                                    n.$slots[e(_e)($.prop)]
                                      ? {
                                          name: e(_e)($.prop),
                                          fn: f(V => [
                                            A(
                                              n.$slots,
                                              e(_e)($.prop),
                                              ne(me(V))
                                            )
                                          ]),
                                          key: "1"
                                        }
                                      : void 0,
                                    n.$slots["tooltip-icon"]
                                      ? {
                                          name: "tooltip-icon",
                                          fn: f(() => [
                                            A(n.$slots, "tooltip-icon")
                                          ]),
                                          key: "2"
                                        }
                                      : void 0
                                  ]),
                                  1040,
                                  [
                                    "model-value",
                                    "clearable",
                                    "has-label",
                                    "onChange"
                                  ]
                                ),
                                P(" el-form-item 下一行额外的内容 "),
                                $.renderExtra || n.$slots[e(Fe)($.prop)]
                                  ? (t(),
                                    B("div", Mt, [
                                      $.renderExtra && e(z)($.renderExtra)
                                        ? (t(),
                                          _(
                                            x($.renderExtra),
                                            ne(S({ key: 0 }, $)),
                                            null,
                                            16
                                          ))
                                        : n.$slots[e(Fe)($.prop)]
                                          ? A(
                                              n.$slots,
                                              e(Fe)($.prop),
                                              ne(S({ key: 1 }, $))
                                            )
                                          : P("v-if", !0)
                                    ]))
                                  : P("v-if", !0)
                              ]),
                              _: 2
                            },
                            1040
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 3
                },
                8,
                ["collapse-duration", "collapse-transition"]
              ),
              P(" 搜索的footer插槽  "),
              A(n.$slots, "search-footer")
            ]),
            _: 3
          },
          16
        )
      );
    }
  }),
  _l = de(Nt, [["__file", "form-content.vue"]]);
const Ut = { class: "plus-form__group__item__icon" };
var Gt = ue({
    name: "PlusForm",
    inheritAttrs: !1,
    __name: "index",
    props: {
      modelValue: { default: () => ({}) },
      defaultValues: { default: () => ({}) },
      columns: { default: () => [] },
      labelWidth: { default: "80px" },
      labelPosition: { default: "left" },
      rowProps: { default: () => ({}) },
      colProps: { default: () => ({}) },
      labelSuffix: { default: ":" },
      hasErrorTip: { type: Boolean, default: !0 },
      hasFooter: { type: Boolean, default: !0 },
      hasReset: { type: Boolean, default: !0 },
      hasLabel: { type: Boolean, default: !0 },
      submitText: { default: "" },
      resetText: { default: "" },
      submitLoading: { type: Boolean, default: !1 },
      footerAlign: { default: "left" },
      rules: { default: () => ({}) },
      group: { type: [Boolean, Array], default: !1 },
      cardProps: { default: () => ({}) },
      prevent: { type: Boolean, default: !1 },
      collapseDuration: { default: void 0 },
      collapseTransition: { type: Boolean, default: void 0 },
      clearable: { type: Boolean, default: !0 }
    },
    emits: [
      "update:modelValue",
      "submit",
      "change",
      "reset",
      "submitError",
      "validate"
    ],
    setup(a, { expose: c, emit: u }) {
      const l = a,
        r = u,
        { t: o } = Pe(),
        v = H(null),
        g = H({}),
        n = p =>
          (p == null ? void 0 : p.filter(M => e(M.hideInForm) !== !0)) || [],
        C = N(() => g.value),
        $ = N(() => ({
          justifyContent:
            l.footerAlign === "left"
              ? "flex-start"
              : l.footerAlign === "center"
                ? "center"
                : "flex-end"
        })),
        V = N(() => n(l.columns)),
        F = N(() => {
          var p;
          return Ce(l.group)
            ? (p = l.group) == null
              ? void 0
              : p.filter(M => e(M.hideInGroup) !== !0)
            : l.group;
        }),
        s = ol(),
        E = N(() =>
          m(
            m({}, s),
            l.prevent
              ? {
                  onSubmit: Ke(
                    (...p) => {
                      s != null &&
                        s.onSubmit &&
                        z(s == null ? void 0 : s.onSubmit) &&
                        s.onSubmit(...p);
                    },
                    ["prevent"]
                  )
                }
              : {}
          )
        );
      ae(
        () => l.modelValue,
        p => {
          g.value = p;
        },
        { immediate: !0 }
      );
      const i = (p, M) => {
          r("update:modelValue", g.value), r("change", g.value, M);
        },
        h = () => {
          var p;
          (p = v.value) == null || p.clearValidate();
        },
        T = () =>
          De(null, null, function* () {
            var p, M, j;
            try {
              if (yield (p = v.value) == null ? void 0 : p.validate())
                return r("submit", g.value), !0;
            } catch (U) {
              if (l.hasErrorTip) {
                hl.closeAll();
                const O = fe(U) && Object.values(U),
                  Z = O
                    ? (j = (M = O[0]) == null ? void 0 : M[0]) == null
                      ? void 0
                      : j.message
                    : void 0;
                hl.warning(Z || o("plus.form.errorTip"));
              }
              r("submitError", U);
            }
            return !1;
          }),
        y = () => {
          h(),
            (g.value = m({}, l.defaultValues)),
            r("update:modelValue", g.value),
            r("reset", g.value);
        },
        R = (...p) => {
          r("validate", ...p);
        };
      return (
        c({ formInstance: v, handleSubmit: T, handleReset: y }),
        (p, M) => (
          t(),
          _(
            e(Fa),
            S(
              {
                ref_key: "formInstance",
                ref: v,
                rules: p.rules,
                "label-width": p.hasLabel ? p.labelWidth : 0,
                class: ["plus-form", p.hasLabel ? "" : "no-has-label"],
                "label-position": p.labelPosition,
                "validate-on-rule-change": !1,
                "label-suffix": p.hasLabel ? p.labelSuffix : ""
              },
              E.value,
              { model: C.value, onValidate: R }
            ),
            {
              default: f(() => [
                A(p.$slots, "default", {}, () => [
                  P(" 分组表单 "),
                  F.value
                    ? (t(!0),
                      B(
                        G,
                        { key: 0 },
                        te(
                          F.value,
                          (j, U) => (
                            t(),
                            _(
                              e(Da),
                              S(
                                { key: e(j.title) },
                                j.cardProps || p.cardProps,
                                { class: "plus-form__group__item" }
                              ),
                              {
                                header: f(() => [
                                  A(
                                    p.$slots,
                                    "group-header",
                                    {
                                      title: e(j.title),
                                      columns: j.columns,
                                      icon: j.icon,
                                      index: U
                                    },
                                    () => [
                                      ee("div", Ut, [
                                        j.icon
                                          ? (t(),
                                            _(
                                              e(ve),
                                              { key: 0 },
                                              {
                                                default: f(() => [
                                                  (t(), _(x(j.icon)))
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            ))
                                          : P("v-if", !0),
                                        q(" " + W(e(j.title)), 1)
                                      ])
                                    ]
                                  )
                                ]),
                                default: f(() => [
                                  p.$slots[e(yl)(j.name)]
                                    ? A(
                                        p.$slots,
                                        e(yl)(j.name),
                                        S({ key: 0 }, j, { index: U })
                                      )
                                    : (t(),
                                      _(
                                        _l,
                                        {
                                          key: 1,
                                          modelValue: g.value,
                                          "onUpdate:modelValue":
                                            M[0] || (M[0] = O => (g.value = O)),
                                          "row-props": p.rowProps,
                                          "col-props": p.colProps,
                                          columns: n(j.columns),
                                          "has-label": p.hasLabel,
                                          "collapse-transition":
                                            p.collapseTransition,
                                          "collapse-duration":
                                            p.collapseDuration,
                                          clearable: p.clearable,
                                          onChange: i
                                        },
                                        re({ _: 2 }, [
                                          te(p.$slots, (O, Z) => ({
                                            name: Z,
                                            fn: f(D => [
                                              A(p.$slots, Z, ne(me(D)))
                                            ])
                                          }))
                                        ]),
                                        1032,
                                        [
                                          "modelValue",
                                          "row-props",
                                          "col-props",
                                          "columns",
                                          "has-label",
                                          "collapse-transition",
                                          "collapse-duration",
                                          "clearable"
                                        ]
                                      ))
                                ]),
                                _: 2
                              },
                              1040
                            )
                          )
                        ),
                        128
                      ))
                    : (t(),
                      B(
                        G,
                        { key: 1 },
                        [
                          P(" 普通表单 "),
                          Y(
                            _l,
                            {
                              modelValue: g.value,
                              "onUpdate:modelValue":
                                M[1] || (M[1] = j => (g.value = j)),
                              "row-props": p.rowProps,
                              "col-props": p.colProps,
                              columns: V.value,
                              "has-label": p.hasLabel,
                              "collapse-transition": p.collapseTransition,
                              "collapse-duration": p.collapseDuration,
                              clearable: p.clearable,
                              onChange: i
                            },
                            re({ _: 2 }, [
                              te(p.$slots, (j, U) => ({
                                name: U,
                                fn: f(O => [A(p.$slots, U, ne(me(O)))])
                              }))
                            ]),
                            1032,
                            [
                              "modelValue",
                              "row-props",
                              "col-props",
                              "columns",
                              "has-label",
                              "collapse-transition",
                              "collapse-duration",
                              "clearable"
                            ]
                          )
                        ],
                        64
                      ))
                ]),
                p.hasFooter
                  ? (t(),
                    B(
                      "div",
                      {
                        key: 0,
                        class: "plus-form__footer",
                        style: Le($.value)
                      },
                      [
                        A(
                          p.$slots,
                          "footer",
                          ne(me({ handleReset: y, handleSubmit: T })),
                          () => [
                            p.hasReset
                              ? (t(),
                                _(
                                  e($e),
                                  { key: 0, onClick: y },
                                  {
                                    default: f(() => [
                                      P(" 重置 "),
                                      q(
                                        " " +
                                          W(
                                            p.resetText ||
                                              e(o)("plus.form.resetText")
                                          ),
                                        1
                                      )
                                    ]),
                                    _: 1
                                  }
                                ))
                              : P("v-if", !0),
                            Y(
                              e($e),
                              {
                                type: "primary",
                                loading: p.submitLoading,
                                onClick: T
                              },
                              {
                                default: f(() => [
                                  P(" 提交 "),
                                  q(
                                    " " +
                                      W(
                                        p.submitText ||
                                          e(o)("plus.form.submitText")
                                      ),
                                    1
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ["loading"]
                            )
                          ]
                        )
                      ],
                      4
                    ))
                  : P("v-if", !0)
              ]),
              _: 3
            },
            16,
            [
              "rules",
              "label-width",
              "class",
              "label-position",
              "label-suffix",
              "model"
            ]
          )
        )
      );
    }
  }),
  Kt = de(Gt, [["__file", "index.vue"]]);
const Wt = Kt,
  Jl = {
    img: { component: La, class: "plus-display-item__image", hasSlots: !0 },
    link: { component: nl, class: "plus-display-item__link", hasSlots: !0 },
    tag: { component: Vl, hasSlots: !0 },
    progress: { component: Ba, hasSlots: !0 },
    avatar: { component: wa, hasSlots: !0 },
    "date-picker": { component: "span", format: lt },
    money: { component: "span", format: at },
    code: { component: "span", class: "plus-display-item__pre" }
  },
  Yt = a => Object.keys(Jl).includes(a),
  qt = a => Reflect.get(Jl, a) || {},
  Jt = ["innerHTML"],
  Qt = { class: "plus-display-item" },
  Zt = ee(
    "svg",
    {
      fill: "none",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      class: "t-icon t-icon-edit-1",
      "pointer-events": "none"
    },
    [
      ee("path", {
        fill: "currentColor",
        d: "M16.83 1.42l5.75 5.75L7.75 22H2v-5.75L16.83 1.42zm0 8.68l2.92-2.93-2.92-2.93-2.93 2.93 2.93 2.93zm-4.34-1.51L4 17.07V20h2.93l8.48-8.49L12.5 8.6z"
      })
    ],
    -1
  );
var Xt = ue({
    name: "PlusDisplayItem",
    __name: "index",
    props: {
      column: { default: () => ({ prop: "", label: "" }) },
      row: { default: () => ({}) },
      index: { default: 0 },
      editable: { type: [Boolean, String], default: !1 },
      rest: { default: () => ({}) },
      formProps: { default: () => ({}) }
    },
    emits: ["change"],
    setup(a, { expose: c, emit: u }) {
      const l = a,
        r = u,
        o = H({}),
        v = H(!1),
        g = H({}),
        n = H(!1),
        C = H(),
        { customOptions: $ } = Gl(l.column),
        V = H([]),
        F = H(gl(l.row)),
        s = H(!1),
        E = [!1, "click", "dblclick"];
      ae(
        () => l.row,
        k => {
          F.value = gl(k);
        },
        { deep: !0 }
      ),
        ae(
          () => [l.editable, l.column.editable],
          () => {
            if (l.column.editable === !0) {
              s.value = !0;
              return;
            }
            if (l.column.editable === !1) {
              s.value = !1;
              return;
            }
            if (l.editable === !0) {
              s.value = !0;
              return;
            }
            if (E.includes(l.editable)) {
              s.value = !1;
              return;
            }
          },
          { immediate: !0 }
        );
      const i = N(
          () =>
            (l.editable === "click" || l.editable === "dblclick") &&
            l.column.editable !== !1
        ),
        h = N({
          get() {
            return Ml(F.value, l.column.prop);
          },
          set(k) {
            Nl(F.value, l.column.prop, k);
          }
        }),
        T = N(() => {
          const k =
            (l.column.valueType === "link" && l.column.linkText) || h.value;
          if (!Cl.includes(l.column.valueType) && !s.value) {
            if (l.column.formatter && z(l.column.formatter))
              return l.column.formatter(k, p.value);
            if (O.value.format && z(O.value.format))
              return O.value.format(k, o.value.format || o.value.valueFormat);
          }
          return k;
        }),
        y = N({
          get() {
            return { [l.column.prop]: h.value };
          },
          set(k) {
            h.value = k[l.column.prop];
          }
        }),
        R = N(
          () =>
            l.column.valueType === "tag" &&
            (h.value === void 0 || h.value === null || h.value === "")
        ),
        p = N(() =>
          X(
            m(
              {
                prop: l.column.prop,
                valueType: l.column.valueType,
                row: F.value,
                index: l.index,
                rowIndex: l.index,
                fieldProps: o.value,
                options: $.value
              },
              l.rest
            ),
            { column: m(m({}, l.rest.column), l.column) }
          )
        ),
        M = N(() =>
          X(m({ row: F.value, index: l.index, rowIndex: l.index }, l.rest), {
            column: m(m({}, l.rest.column), l.column)
          })
        );
      al(Wl, M);
      const j = N(() => {
          const k = T.value;
          return k && Je(k)
            ? { options: [k], url: k }
            : Ce(k)
              ? { options: k, url: k[0] }
              : { options: [], url: "" };
        }),
        U = N(() => {
          var k, d, I, K, L;
          return (k = l.column) != null &&
            k.customGetStatus &&
            z((d = l.column) == null ? void 0 : d.customGetStatus)
            ? ((I = l.column) == null
                ? void 0
                : I.customGetStatus({
                    options: $.value,
                    value: h.value,
                    row: F.value
                  })) || { label: "", value: "" }
            : (l.column.valueType === "select" && o.value.multiple === !0) ||
                l.column.valueType === "checkbox"
              ? ((K = $.value) == null
                  ? void 0
                  : K.filter(b => {
                      var J;
                      return (J = h.value) == null
                        ? void 0
                        : J.includes(b.value);
                    })) || []
              : ((L = $.value) == null
                  ? void 0
                  : L.find(ie => ie.value === h.value)) || {
                  label: "",
                  value: ""
                };
        }),
        O = N(() => qt(l.column.valueType)),
        Z = N(() =>
          m(
            m(
              m(
                m(
                  m(
                    {},
                    l.column.valueType === "img"
                      ? {
                          fit: "cover",
                          previewTeleported: !0,
                          src: j.value.url,
                          previewSrcList:
                            l.column.preview !== !1 ? j.value.options : []
                        }
                      : null
                  ),
                  l.column.valueType === "progress"
                    ? { percentage: T.value }
                    : null
                ),
                l.column.valueType === "link" ? { type: "primary" } : null
              ),
              l.column.valueType === "avatar" ? { src: T.value } : null
            ),
            o.value
          )
        );
      ae(
        () => l.column,
        k => {
          k && (V.value = [k]);
        },
        { immediate: !0, deep: !0 }
      ),
        ae(
          () => l.column.fieldProps,
          k => {
            Ye(k, h.value, F.value, l.index, "fieldProps")
              .then(d => {
                (o.value = d), (v.value = !0);
              })
              .catch(d => {
                throw d;
              });
          },
          { immediate: !0, deep: !0 }
        ),
        ae(
          () => [l.column.formProps, F.value],
          () => {
            Ye(l.column.formProps, h.value, F.value, l.index, "formProps")
              .then(k => {
                (g.value = k), (n.value = !0);
              })
              .catch(k => {
                throw k;
              });
          },
          { immediate: !0, deep: !0 }
        ),
        ae(
          () => l.row,
          k => {
            F.value = m({}, k);
          },
          { deep: !0 }
        );
      const D = k => {
          const d = k,
            I = document.createElement("textarea");
          (I.readOnly = !0),
            (I.style.position = "absolute"),
            (I.style.left = "-9999px"),
            (I.value = d),
            document.body.appendChild(I),
            I.select(),
            document.execCommand("Copy"),
            I.remove();
        },
        w = (k, d) => {
          D(T.value),
            (d.isCopy = !0),
            setTimeout(() => {
              d.isCopy = !1;
            }, 3e3);
        },
        oe = k => {
          r("change", {
            value: k[l.column.prop],
            prop: l.column.prop,
            row: m({ value: F.value }, F.value)
          });
        };
      return (
        c({
          startCellEdit: () => {
            if (l.column.editable === !1) {
              s.value = !1;
              return;
            }
            s.value = !0;
          },
          stopCellEdit: () => {
            if (l.column.editable === !0) {
              s.value = !0;
              return;
            }
            s.value = !1;
          },
          getDisplayItemInstance: () => ({
            isEdit: s,
            index: l.index,
            rowIndex: l.index,
            cellIndex: l.rest.cellIndex,
            prop: l.column.prop,
            formInstance: N(() => {
              var k;
              return (k = C.value) == null ? void 0 : k.formInstance;
            })
          })
        }),
        (k, d) => (
          t(),
          B(
            G,
            null,
            [
              P(" 表单第一优先级 "),
              s.value
                ? (t(),
                  B(
                    G,
                    { key: 0 },
                    [
                      n.value
                        ? (t(),
                          _(
                            e(Wt),
                            S(
                              {
                                key: 0,
                                ref_key: "formInstance",
                                ref: C,
                                modelValue: y.value,
                                "onUpdate:modelValue":
                                  d[0] || (d[0] = I => (y.value = I)),
                                model: y.value,
                                columns: V.value,
                                "has-footer": !1,
                                "has-label": !1
                              },
                              m(m({}, g.value), k.formProps),
                              { class: "plus-display-item__form", onChange: oe }
                            ),
                            re({ _: 2 }, [
                              k.$slots[e(_e)(k.column.prop)]
                                ? {
                                    name: e(_e)(k.column.prop),
                                    fn: f(I => [
                                      A(
                                        k.$slots,
                                        e(_e)(k.column.prop),
                                        ne(me(I))
                                      )
                                    ]),
                                    key: "0"
                                  }
                                : void 0,
                              k.$slots[e(Fe)(k.column.prop)]
                                ? {
                                    name: e(Fe)(k.column.prop),
                                    fn: f(I => [
                                      A(
                                        k.$slots,
                                        e(Fe)(k.column.prop),
                                        ne(me(I))
                                      )
                                    ]),
                                    key: "1"
                                  }
                                : void 0,
                              k.$slots[e(we)(k.column.prop)]
                                ? {
                                    name: e(we)(k.column.prop),
                                    fn: f(I => [
                                      A(
                                        k.$slots,
                                        e(we)(k.column.prop),
                                        ne(me(I))
                                      )
                                    ]),
                                    key: "2"
                                  }
                                : void 0
                            ]),
                            1040,
                            ["modelValue", "model", "columns"]
                          ))
                        : P("v-if", !0)
                    ],
                    64
                  ))
                : k.column.render && e(z)(k.column.render)
                  ? (t(),
                    B(
                      G,
                      { key: 1 },
                      [
                        P(" 自定义显示 "),
                        v.value
                          ? (t(),
                            _(
                              e(qe),
                              {
                                key: 0,
                                render: k.column.render,
                                params: p.value,
                                "callback-value": h.value,
                                "custom-field-props": o.value
                              },
                              null,
                              8,
                              [
                                "render",
                                "params",
                                "callback-value",
                                "custom-field-props"
                              ]
                            ))
                          : P("v-if", !0)
                      ],
                      64
                    ))
                  : k.$slots[e(kl)(k.column.prop)]
                    ? (t(),
                      B(
                        G,
                        { key: 2 },
                        [
                          P(" 插槽 "),
                          A(
                            k.$slots,
                            e(kl)(k.column.prop),
                            S({ value: h.value }, p.value)
                          )
                        ],
                        2112
                      ))
                    : k.column.renderHTML && e(z)(k.column.renderHTML)
                      ? (t(),
                        B(
                          G,
                          { key: 3 },
                          [
                            P("显示HTML "),
                            ee(
                              "span",
                              {
                                class: "plus-display-item",
                                innerHTML: k.column.renderHTML(h.value, p.value)
                              },
                              null,
                              8,
                              Jt
                            )
                          ],
                          2112
                        ))
                      : e(Cl).includes(k.column.valueType)
                        ? (t(),
                          B(
                            G,
                            { key: 4 },
                            [
                              P(" 状态显示 `select`, `radio`, `checkbox`"),
                              ee(
                                "span",
                                S(
                                  {
                                    class:
                                      "plus-display-item plus-display-item__badge"
                                  },
                                  o.value,
                                  { class: { "is-list": e(Ce)(U.value) } }
                                ),
                                [
                                  P(" 多选 "),
                                  e(Ce)(U.value)
                                    ? (t(),
                                      B(
                                        G,
                                        { key: 0 },
                                        [
                                          e(z)(k.column.formatter)
                                            ? (t(),
                                              B(
                                                G,
                                                { key: 0 },
                                                [
                                                  q(
                                                    W(
                                                      k.column.formatter(
                                                        h.value,
                                                        p.value
                                                      )
                                                    ),
                                                    1
                                                  )
                                                ],
                                                64
                                              ))
                                            : (t(!0),
                                              B(
                                                G,
                                                { key: 1 },
                                                te(
                                                  U.value,
                                                  I => (
                                                    t(),
                                                    B(
                                                      "span",
                                                      {
                                                        key: String(I.value),
                                                        class:
                                                          "plus-display-item__badge__item"
                                                      },
                                                      [
                                                        ee(
                                                          "i",
                                                          {
                                                            class: Ge([
                                                              "plus-display-item__badge__dot",
                                                              I.type && !I.color
                                                                ? "plus-display-item__badge__dot--" +
                                                                  I.type
                                                                : ""
                                                            ]),
                                                            style: Le({
                                                              backgroundColor:
                                                                I.color
                                                            })
                                                          },
                                                          null,
                                                          6
                                                        ),
                                                        q(" " + W(I.label), 1)
                                                      ]
                                                    )
                                                  )
                                                ),
                                                128
                                              ))
                                        ],
                                        64
                                      ))
                                    : (t(),
                                      B(
                                        G,
                                        { key: 1 },
                                        [
                                          P(" 单选 "),
                                          U.value.color || U.value.type
                                            ? (t(),
                                              B(
                                                "i",
                                                {
                                                  key: 0,
                                                  class: Ge([
                                                    "plus-display-item__badge__dot",
                                                    U.value.type &&
                                                    !U.value.color
                                                      ? "plus-display-item__badge__dot--" +
                                                        U.value.type
                                                      : ""
                                                  ]),
                                                  style: Le({
                                                    backgroundColor:
                                                      U.value.color
                                                  })
                                                },
                                                null,
                                                6
                                              ))
                                            : P("v-if", !0),
                                          q(
                                            " " +
                                              W(
                                                e(z)(k.column.formatter)
                                                  ? k.column.formatter(
                                                      h.value,
                                                      p.value
                                                    )
                                                  : U.value.label
                                              ),
                                            1
                                          )
                                        ],
                                        64
                                      ))
                                ],
                                16
                              )
                            ],
                            2112
                          ))
                        : k.column.valueType === "copy"
                          ? (t(),
                            B(
                              G,
                              { key: 5 },
                              [
                                P(" 复制 "),
                                ee("span", Qt, [
                                  q(W(T.value) + " ", 1),
                                  h.value
                                    ? (t(),
                                      _(
                                        e(ve),
                                        S(
                                          {
                                            key: 0,
                                            size: "16",
                                            class:
                                              "plus-display-item__icon__copy"
                                          },
                                          o.value,
                                          {
                                            onClick:
                                              d[1] ||
                                              (d[1] = I => w(k.column, F.value))
                                          }
                                        ),
                                        {
                                          default: f(() => [
                                            F.value.isCopy
                                              ? (t(), _(e(za), { key: 1 }))
                                              : (t(), _(e(Aa), { key: 0 }))
                                          ]),
                                          _: 1
                                        },
                                        16
                                      ))
                                    : P("v-if", !0)
                                ])
                              ],
                              2112
                            ))
                          : e(Yt)(k.column.valueType)
                            ? (t(),
                              B(
                                G,
                                { key: 6 },
                                [
                                  P(" 统一处理 "),
                                  P("has slots  "),
                                  O.value.hasSlots
                                    ? (t(),
                                      _(
                                        x(R.value ? "span" : O.value.component),
                                        S(
                                          {
                                            key: 0,
                                            class: [
                                              "plus-display-item",
                                              O.value.class
                                            ]
                                          },
                                          m(m({}, p.value), Z.value)
                                        ),
                                        re(
                                          {
                                            default: f(() => [
                                              q(" " + W(T.value), 1)
                                            ]),
                                            _: 2
                                          },
                                          [
                                            te(k.column.fieldSlots, (I, K) => ({
                                              name: K,
                                              fn: f(L => [
                                                (t(),
                                                _(
                                                  x(I),
                                                  S(
                                                    { value: h.value },
                                                    m(m({}, p.value), L)
                                                  ),
                                                  null,
                                                  16,
                                                  ["value"]
                                                ))
                                              ])
                                            }))
                                          ]
                                        ),
                                        1040,
                                        ["class"]
                                      ))
                                    : (t(),
                                      B(
                                        G,
                                        { key: 1 },
                                        [
                                          P("no slots  "),
                                          (t(),
                                          _(
                                            x(O.value.component),
                                            S(
                                              {
                                                class: [
                                                  "plus-display-item",
                                                  O.value.class
                                                ]
                                              },
                                              m(m({}, p.value), Z.value)
                                            ),
                                            {
                                              default: f(() => [
                                                q(W(T.value), 1)
                                              ]),
                                              _: 1
                                            },
                                            16,
                                            ["class"]
                                          ))
                                        ],
                                        2112
                                      ))
                                ],
                                64
                              ))
                            : k.column.valueType === "divider"
                              ? (t(),
                                _(
                                  e(Ll),
                                  S(
                                    {
                                      key: 7,
                                      ref: "fieldInstance",
                                      class: "plus-form-item-field"
                                    },
                                    o.value
                                  ),
                                  {
                                    default: f(() => [q(W(T.value), 1)]),
                                    _: 1
                                  },
                                  16
                                ))
                              : (t(),
                                B(
                                  G,
                                  { key: 8 },
                                  [
                                    P(" 没有format "),
                                    ee(
                                      "span",
                                      S(
                                        { class: "plus-display-item" },
                                        o.value
                                      ),
                                      W(T.value),
                                      17
                                    )
                                  ],
                                  2112
                                )),
              A(k.$slots, "edit-icon", {}, () => [
                i.value && !s.value
                  ? (t(),
                    _(
                      e(ve),
                      {
                        key: 0,
                        size: 16,
                        class: "plus-display-item__edit-icon",
                        "pointer-events": "none"
                      },
                      { default: f(() => [Zt]), _: 1 }
                    ))
                  : P("v-if", !0)
              ])
            ],
            64
          )
        )
      );
    }
  }),
  xt = de(Xt, [["__file", "index.vue"]]);
const eo = xt,
  lo = { class: "plus-table-column__header" };
var ao = ue({
    name: "PlusTableColumn",
    __name: "table-column",
    props: {
      columns: { default: () => [] },
      editable: { type: [Boolean, String], default: !1 },
      tableDataLength: { default: 0 }
    },
    emits: ["formChange"],
    setup(a, { expose: c, emit: u }) {
      const l = a,
        r = u,
        o = H(),
        v = Ue(ul),
        g = () => {
          var F, s;
          if (!((F = o.value) != null && F.length)) return;
          const E =
            ((s = o.value) == null
              ? void 0
              : s.map(i =>
                  m(m({}, i), i == null ? void 0 : i.getDisplayItemInstance())
                )) || [];
          for (let i = 0; i < E.length; i++) {
            const h = E[i];
            v.value[h.index] || (v.value[h.index] = []),
              Tl(v.value[h.rowIndex], h.cellIndex, h);
          }
        };
      ae(
        () => l.tableDataLength,
        () => {
          g();
        },
        { flush: "post" }
      );
      const n = N(() => l.editable === "click" || l.editable === "dblclick"),
        C = F => ge(F, !0),
        $ = (F, s, E, i, h) => {
          const T = m(
            X(m({}, F), { index: s, column: m(m({}, E), i), rowIndex: s }),
            h
          );
          r("formChange", T);
        },
        V = F => {
          r("formChange", F);
        };
      return (
        c({ plusDisplayItemInstance: o }),
        (F, s) => {
          const E = Ra("PlusTableColumn");
          return (
            t(!0),
            B(
              G,
              null,
              te(
                F.columns,
                (i, h) => (
                  t(),
                  _(
                    e(Se),
                    S(
                      {
                        key: C(i),
                        "class-name":
                          "plus-table-column " +
                          (n.value ? "plus-table-column__edit" : ""),
                        index: h
                      },
                      i.tableColumnProps,
                      { prop: i.prop, width: i.width, "min-width": i.minWidth }
                    ),
                    {
                      header: f(T => [
                        ee("span", lo, [
                          i.renderHeader && e(z)(i.renderHeader)
                            ? (t(),
                              _(
                                e(qe),
                                {
                                  key: 0,
                                  render: i.renderHeader,
                                  params: X(m(m({}, T), i), { cellIndex: h }),
                                  "callback-value": e(ye)(i.label)
                                },
                                null,
                                8,
                                ["render", "params", "callback-value"]
                              ))
                            : (t(),
                              B(
                                G,
                                { key: 1 },
                                [
                                  P("表格单元格Header的插槽 "),
                                  A(
                                    F.$slots,
                                    e(ot)(i.prop),
                                    S(
                                      {
                                        prop: i.prop,
                                        label: e(ye)(i.label),
                                        fieldProps: i.fieldProps,
                                        valueType: i.valueType,
                                        cellIndex: h
                                      },
                                      T,
                                      { column: m(m({}, T), i) }
                                    ),
                                    () => [q(W(e(ye)(i.label)), 1)]
                                  )
                                ],
                                2112
                              )),
                          i.tooltip
                            ? (t(),
                              _(
                                e(ke),
                                S(
                                  { key: 2, placement: "top" },
                                  e(jl)(i.tooltip)
                                ),
                                {
                                  default: f(() => [
                                    A(F.$slots, "tooltip-icon", {}, () => [
                                      Y(
                                        e(ve),
                                        {
                                          class:
                                            "plus-table-column__header__icon",
                                          size: 16
                                        },
                                        { default: f(() => [Y(e(Bl))]), _: 1 }
                                      )
                                    ])
                                  ]),
                                  _: 2
                                },
                                1040
                              ))
                            : P("v-if", !0)
                        ])
                      ]),
                      default: f(M => {
                        var j = M,
                          { row: T, column: y, $index: R } = j,
                          p = Ze(j, ["row", "column", "$index"]);
                        var U;
                        return [
                          (U = i.children) != null && U.length
                            ? (t(),
                              B(
                                G,
                                { key: 0 },
                                [
                                  Y(
                                    E,
                                    {
                                      columns: i.children,
                                      editable: F.editable,
                                      "table-data-length": F.tableDataLength,
                                      onFormChange: V
                                    },
                                    re({ _: 2 }, [
                                      te(F.$slots, (O, Z) => ({
                                        name: Z,
                                        fn: f(D => [A(F.$slots, Z, ne(me(D)))])
                                      }))
                                    ]),
                                    1032,
                                    ["columns", "editable", "table-data-length"]
                                  ),
                                  q(" " + W(i.label), 1)
                                ],
                                64
                              ))
                            : (t(),
                              _(
                                e(eo),
                                {
                                  key: 1,
                                  ref_for: !0,
                                  ref_key: "plusDisplayItemInstance",
                                  ref: o,
                                  column: i,
                                  row: T,
                                  index: R,
                                  editable: F.editable,
                                  rest: m({ column: y }, p),
                                  onChange: O => $(O, R, y, i, p)
                                },
                                re({ _: 2 }, [
                                  te(F.$slots, (O, Z) => ({
                                    name: Z,
                                    fn: f(D => [A(F.$slots, Z, ne(me(D)))])
                                  }))
                                ]),
                                1032,
                                [
                                  "column",
                                  "row",
                                  "index",
                                  "editable",
                                  "rest",
                                  "onChange"
                                ]
                              ))
                        ];
                      }),
                      _: 2
                    },
                    1040,
                    ["class-name", "index", "prop", "width", "min-width"]
                  )
                )
              ),
              128
            )
          );
        }
      );
    }
  }),
  to = de(ao, [["__file", "table-column.vue"]]),
  oo = ue({
    name: "PlusTableTableColumnIndex",
    __name: "table-column-index",
    props: {
      pageInfo: { default: () => m({}, Ee) },
      indexTableColumnProps: { default: () => ({}) },
      indexContentStyle: { type: [Object, Function], default: () => ({}) }
    },
    setup(a) {
      var c, u, l;
      const r = a,
        o = Za((c = r.indexTableColumnProps) == null ? void 0 : c.index)
          ? N(() => {
              var g;
              return (g = r.indexTableColumnProps) == null ? void 0 : g.index;
            })
          : z((u = r.indexTableColumnProps) == null ? void 0 : u.index)
            ? (l = r.indexTableColumnProps) == null
              ? void 0
              : l.index
            : g => {
                var n, C;
                return +(
                  ((((n = r.pageInfo) == null ? void 0 : n.page) || Ee.page) -
                    1) *
                    (((C = r.pageInfo) == null ? void 0 : C.pageSize) ||
                      Ee.page) +
                  g +
                  1
                );
              },
        v = (g, n) =>
          z(r.indexContentStyle)
            ? r.indexContentStyle(g, n)
            : fe(r.indexContentStyle)
              ? r.indexContentStyle
              : {};
      return (g, n) => (
        t(),
        _(
          e(Se),
          S(
            {
              key: "index",
              label: "#",
              fixed: "left",
              type: "index",
              "class-name": "plus-table-column-index",
              width: "60",
              align: "center",
              index: e(o)
            },
            g.indexTableColumnProps
          ),
          {
            default: f(({ row: C, $index: $ }) => [
              e(z)(e(o))
                ? (t(),
                  B(
                    "div",
                    {
                      key: 0,
                      class: "plus-table-column-index__content",
                      style: Le(v(C, $))
                    },
                    W(e(o)($)),
                    5
                  ))
                : (t(),
                  B(
                    "div",
                    {
                      key: 1,
                      class: "plus-table-column-index__content",
                      style: Le(v(C, $))
                    },
                    W(e(o)),
                    5
                  ))
            ]),
            _: 1
          },
          16,
          ["index"]
        )
      );
    }
  }),
  no = de(oo, [["__file", "table-column-index.vue"]]);
const so = { class: "plus-table-column-drag-icon" };
var ro = ue({
    name: "PlusTableColumnDragSort",
    __name: "table-column-drag-sort",
    props: {
      sortable: { type: Boolean, default: !0 },
      tableInstance: { default: null },
      dragSortableTableColumnProps: { default: () => ({}) }
    },
    emits: ["dragSortEnd"],
    setup(a, { emit: c }) {
      const u = a,
        l = c,
        { t: r } = Pe();
      ae(
        () => u.tableInstance,
        v => {
          v && u.sortable && o();
        }
      );
      const o = () => {
        var v, g;
        const n =
          (g = (v = u.tableInstance) == null ? void 0 : v.$el) == null
            ? void 0
            : g.querySelector(".el-table__body-wrapper tbody");
        if (!n) return;
        let C = {
          handle: ".plus-table-column-drag-icon",
          animation: 150,
          group: "box",
          easing: "cubic-bezier(1, 0, 0, 1)",
          chosenClass: "sortable-chosen",
          forceFallback: !0,
          onEnd({ newIndex: $, oldIndex: V }) {
            l("dragSortEnd", $, V);
          }
        };
        fe(u.sortable) && (C = m(m({}, C), u.sortable)), zl.create(n, C);
      };
      return (v, g) => (
        t(),
        _(
          e(Se),
          S(
            {
              key: "dragSort",
              label: e(r)("plus.table.sort"),
              width: "60",
              "class-name": "plus-table-column-drag-sort"
            },
            v.dragSortableTableColumnProps
          ),
          {
            default: f(() => [
              ee("span", so, [
                A(v.$slots, "drag-sort-icon", {}, () => [q("☷")])
              ])
            ]),
            _: 3
          },
          16,
          ["label"]
        )
      );
    }
  }),
  uo = de(ro, [["__file", "table-column-drag-sort.vue"]]);
const io = { key: 0, style: { "padding-top": "12px" } };
var co = ue({
    name: "PlusPopover",
    __name: "index",
    props: {
      hasShowBottomButton: { type: Boolean, default: !1 },
      confirmLoading: { type: Boolean, default: !1 },
      cancelText: { default: "" },
      confirmText: { default: "" }
    },
    emits: ["cancel", "confirm"],
    setup(a, { emit: c }) {
      const u = a,
        l = c,
        r = H(!1),
        { t: o } = Pe();
      ae(
        () => u.visible,
        n => {
          r.value = n;
        },
        { immediate: !0 }
      );
      const v = () => {
          (r.value = !1), l("cancel");
        },
        g = () => {
          (r.value = !1), l("confirm");
        };
      return (n, C) => (
        t(),
        _(
          e(Oa),
          S(
            {
              visible: r.value,
              "onUpdate:visible": C[0] || (C[0] = $ => (r.value = $))
            },
            n.$attrs
          ),
          {
            reference: f(() => [ee("span", null, [A(n.$slots, "reference")])]),
            default: f(() => [
              A(n.$slots, "default"),
              n.hasShowBottomButton
                ? (t(),
                  B("div", io, [
                    Y(
                      e($e),
                      { size: "small", plain: "", onClick: v },
                      {
                        default: f(() => [
                          q(
                            W(n.cancelText || e(o)("plus.popover.cancelText")),
                            1
                          )
                        ]),
                        _: 1
                      }
                    ),
                    Y(
                      e($e),
                      {
                        size: "small",
                        type: "primary",
                        loading: n.confirmLoading,
                        onClick: g
                      },
                      {
                        default: f(() => [
                          q(
                            W(
                              n.confirmText || e(o)("plus.popover.confirmText")
                            ),
                            1
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ["loading"]
                    )
                  ]))
                : P("v-if", !0)
            ]),
            _: 3
          },
          16,
          ["visible"]
        )
      );
    }
  }),
  po = de(co, [["__file", "index.vue"]]);
const Pl = po,
  fo = { class: "plus-table-title-bar" },
  mo = { class: "plus-table-title-bar__title" },
  vo = { class: "plus-table-title-bar__toolbar" },
  bo = { class: "plus-table-title-bar__toolbar__density" },
  ho = ee(
    "svg",
    {
      viewBox: "0 0 1024 1024",
      focusable: "false",
      "data-icon": "column-height",
      fill: "currentColor",
      "aria-hidden": "true"
    },
    [
      ee("path", {
        d: "M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"
      })
    ],
    -1
  ),
  go = { class: "plus-table-checkbox-checkAll" },
  yo = { key: 0, class: "plus-table-checkbox-handle" },
  ko = { key: 1 },
  Co = { key: 1 };
var _o = ue({
    name: "PlusTableToolbar",
    __name: "table-title-bar",
    props: {
      columns: { default: () => [] },
      titleBar: { type: [Boolean, Object], default: !0 },
      defaultSize: { default: "default" },
      columnsIsChange: { type: Boolean, default: !1 }
    },
    emits: ["filterTableHeader", "clickDensity", "refresh"],
    setup(a, { emit: c }) {
      const u = a,
        l = c,
        { t: r } = Pe(),
        o = H(null),
        v = N(() => u.titleBar),
        g = N(() => {
          var D, w;
          return (
            ((w = (D = v.value) == null ? void 0 : D.icon) == null
              ? void 0
              : w.size) || 18
          );
        }),
        n = N(() => {
          var D, w;
          return (
            ((w = (D = v.value) == null ? void 0 : D.icon) == null
              ? void 0
              : w.color) || ""
          );
        }),
        C = N(() => {
          var D;
          return (D = v.value) == null ? void 0 : D.columnSetting;
        }),
        $ = N(() => {
          var D;
          return ((D = C.value) == null ? void 0 : D.popoverWidth) || 100;
        }),
        V = N(() => {
          var D;
          return ((D = C.value) == null ? void 0 : D.overflowLabelLength) || 6;
        }),
        F = H(null),
        s = [
          { size: "default", text: N(() => r("plus.table.default")) },
          { size: "large", text: N(() => r("plus.table.loose")) },
          { size: "small", text: N(() => r("plus.table.compact")) }
        ],
        E = (D = !1) =>
          D
            ? u.columns
                .filter(w => w.disabledHeaderFilter === !0)
                .filter(w => e(w.headerIsChecked) !== !1)
                .map(w => ge(w))
            : u.columns
                .filter(w => e(w.headerIsChecked) !== !1)
                .map(w => ge(w)),
        i = Ae({
          checkAll: !0,
          isIndeterminate: !1,
          bigImageVisible: !1,
          srcList: [],
          checkList: []
        }),
        h = D => {
          const w = D.length;
          (i.checkAll = w === u.columns.length),
            (i.isIndeterminate = w > 0 && w < u.columns.length);
        };
      ae(
        () => u.columnsIsChange,
        () => {
          (i.checkList = E()), h(i.checkList);
        },
        { immediate: !0 }
      );
      const T = D => {
          (i.checkList = D
            ? u.columns.map(w => ge(w))
            : u.columns
                .filter(w => w.disabledHeaderFilter === !0)
                .map(w => ge(w))),
            h(i.checkList),
            y("allCheck");
        },
        y = D => {
          const w = u.columns.map(oe =>
            i.checkList.includes(ge(oe))
              ? X(m({}, oe), { headerIsChecked: !0 })
              : X(m({}, oe), { headerIsChecked: !1 })
          );
          l("filterTableHeader", w, D);
        },
        R = D => {
          h(D), y("check");
        },
        p = D => {
          l("clickDensity", D);
        },
        M = () => {
          l("refresh");
        },
        j = D => {
          const w = ye(D);
          return w && (w == null ? void 0 : w.length) <= V.value
            ? w
            : (w == null ? void 0 : w.slice(0, V.value)) + "...";
        },
        U = () => {
          var D;
          if (!o.value) return;
          let w = { onEnd: O, ghostClass: "plus-table-ghost-class" };
          const oe = (D = C.value) == null ? void 0 : D.dragSort;
          fe(oe) &&
            (w = X(m(m({}, w), oe), { handle: ".plus-table-checkbox-handle" })),
            (F.value = new zl(o.value, w));
        },
        O = D => {
          const w = [...u.columns],
            oe = u.columns[D.oldIndex];
          w.splice(D.oldIndex, 1), w.splice(D.newIndex, 0, oe);
          const he = w.filter(pe => pe);
          l("filterTableHeader", he, "drag");
        },
        Z = () => {
          (i.checkList = u.columns
            .filter(w => e(w.headerIsChecked) !== !1)
            .map(w => ge(w))),
            h(i.checkList);
          const D = u.columns.map(w => m({}, w));
          l("filterTableHeader", D, "reset");
        };
      return (
        Al(() => {
          var D;
          ((D = C.value) == null ? void 0 : D.dragSort) !== !1 &&
            o.value &&
            U();
        }),
        (D, w) => {
          var oe, he, pe;
          return (
            t(),
            B("div", fo, [
              ee("div", mo, [
                A(D.$slots, "title", {}, () => [q(W(v.value.title), 1)])
              ]),
              ee("div", vo, [
                A(D.$slots, "toolbar"),
                ((oe = v.value) == null ? void 0 : oe.refresh) === !0
                  ? (t(),
                    B(
                      "span",
                      {
                        key: 0,
                        class: "plus-table-title-bar__toolbar__refresh",
                        onClick: M
                      },
                      [
                        Y(
                          e(ke),
                          {
                            effect: "dark",
                            content: e(r)("plus.table.refresh"),
                            placement: "top"
                          },
                          {
                            default: f(() => [
                              A(D.$slots, "refresh-icon", {}, () => [
                                Y(
                                  e(ve),
                                  {
                                    size: g.value,
                                    color: n.value,
                                    class: "plus-table-title-bar__toolbar__icon"
                                  },
                                  { default: f(() => [Y(e(Ha))]), _: 1 },
                                  8,
                                  ["size", "color"]
                                )
                              ])
                            ]),
                            _: 3
                          },
                          8,
                          ["content"]
                        )
                      ]
                    ))
                  : P("v-if", !0),
                P(" 表格密度 "),
                ((he = v.value) == null ? void 0 : he.density) !== !1
                  ? (t(),
                    _(
                      e(Pl),
                      {
                        key: 1,
                        placement: "bottom",
                        width: 200,
                        trigger: "click",
                        title: e(r)("plus.table.density")
                      },
                      {
                        reference: f(() => [
                          Y(
                            e(ke),
                            {
                              effect: "dark",
                              content: e(r)("plus.table.density"),
                              placement: "top"
                            },
                            {
                              default: f(() => [
                                A(D.$slots, "density-icon", {}, () => [
                                  Y(
                                    e(ve),
                                    {
                                      size: g.value,
                                      color: n.value,
                                      class:
                                        "plus-table-title-bar__toolbar__icon"
                                    },
                                    { default: f(() => [ho]), _: 1 },
                                    8,
                                    ["size", "color"]
                                  )
                                ])
                              ]),
                              _: 3
                            },
                            8,
                            ["content"]
                          )
                        ]),
                        default: f(() => [
                          ee("div", bo, [
                            (t(),
                            B(
                              G,
                              null,
                              te(s, se =>
                                Y(
                                  e($e),
                                  {
                                    key: se.size,
                                    plain: D.defaultSize !== se.size,
                                    type: "primary",
                                    size: "small",
                                    onClick: k => p(se.size)
                                  },
                                  {
                                    default: f(() => [q(W(e(se.text)), 1)]),
                                    _: 2
                                  },
                                  1032,
                                  ["plain", "onClick"]
                                )
                              ),
                              64
                            ))
                          ])
                        ]),
                        _: 3
                      },
                      8,
                      ["title"]
                    ))
                  : P("v-if", !0),
                P(" 列设置 "),
                ((pe = v.value) == null ? void 0 : pe.columnSetting) !== !1
                  ? (t(),
                    _(
                      e(Pl),
                      {
                        key: 2,
                        placement: "bottom",
                        width: $.value,
                        trigger: "click",
                        title: e(r)("plus.table.columnSettings")
                      },
                      {
                        reference: f(() => [
                          Y(
                            e(ke),
                            {
                              effect: "dark",
                              content: e(r)("plus.table.columnSettings"),
                              placement: "top"
                            },
                            {
                              default: f(() => [
                                A(D.$slots, "column-settings-icon", {}, () => [
                                  Y(
                                    e(ve),
                                    {
                                      size: g.value,
                                      color: n.value,
                                      class:
                                        "plus-table-title-bar__toolbar__icon"
                                    },
                                    { default: f(() => [Y(e(ja))]), _: 1 },
                                    8,
                                    ["size", "color"]
                                  )
                                ])
                              ]),
                              _: 3
                            },
                            8,
                            ["content"]
                          )
                        ]),
                        default: f(() => {
                          var se, k, d;
                          return [
                            ee("div", go, [
                              Y(
                                e(je),
                                {
                                  modelValue: i.checkAll,
                                  "onUpdate:modelValue":
                                    w[0] || (w[0] = I => (i.checkAll = I)),
                                  indeterminate: i.isIndeterminate,
                                  onChange: T
                                },
                                {
                                  default: f(() => [
                                    q(W(e(r)("plus.table.selectAll")), 1)
                                  ]),
                                  _: 1
                                },
                                8,
                                ["modelValue", "indeterminate"]
                              ),
                              ((se = C.value) == null ? void 0 : se.reset) !==
                              !1
                                ? (t(),
                                  _(
                                    e(nl),
                                    S(
                                      {
                                        key: 0,
                                        type: "primary",
                                        underline: e(nt) ? !1 : "never",
                                        href: "javaScript:;"
                                      },
                                      e(fe)(
                                        (k = C.value) == null ? void 0 : k.reset
                                      )
                                        ? (d = C.value) == null
                                          ? void 0
                                          : d.reset
                                        : {},
                                      { onClick: Ke(Z, ["stop", "prevent"]) }
                                    ),
                                    {
                                      default: f(() => [
                                        q(W(e(r)("plus.table.resetText")), 1)
                                      ]),
                                      _: 1
                                    },
                                    16,
                                    ["underline"]
                                  ))
                                : P("v-if", !0)
                            ]),
                            Y(
                              e(wl),
                              {
                                modelValue: i.checkList,
                                "onUpdate:modelValue":
                                  w[1] || (w[1] = I => (i.checkList = I)),
                                onChange: R
                              },
                              {
                                default: f(() => [
                                  ee(
                                    "div",
                                    {
                                      ref_key: "checkboxGroupInstance",
                                      ref: o,
                                      class: "plus-table-checkbox-sortable-list"
                                    },
                                    [
                                      (t(!0),
                                      B(
                                        G,
                                        null,
                                        te(D.columns, I => {
                                          var K;
                                          return (
                                            t(),
                                            B(
                                              "div",
                                              {
                                                key: I.prop,
                                                class:
                                                  "plus-table-checkbox-item"
                                              },
                                              [
                                                ((K = C.value) == null
                                                  ? void 0
                                                  : K.dragSort) !== !1
                                                  ? (t(),
                                                    B("div", yo, [
                                                      A(
                                                        D.$slots,
                                                        "drag-sort-icon",
                                                        {},
                                                        () => [q("☷")]
                                                      )
                                                    ]))
                                                  : P("v-if", !0),
                                                P(
                                                  " element-plus 版本号小于2.6.0 "
                                                ),
                                                e(rl)
                                                  ? (t(),
                                                    _(
                                                      e(je),
                                                      {
                                                        key: 1,
                                                        label: e(ge)(I),
                                                        disabled:
                                                          I.disabledHeaderFilter,
                                                        class:
                                                          "plus-table-title-bar__toolbar__checkbox__item"
                                                      },
                                                      {
                                                        default: f(() => [
                                                          e(ye)(I.label)
                                                            .length > V.value
                                                            ? (t(),
                                                              _(
                                                                e(ke),
                                                                {
                                                                  key: 0,
                                                                  content: e(
                                                                    ye
                                                                  )(I.label),
                                                                  placement:
                                                                    "right-start"
                                                                },
                                                                {
                                                                  default: f(
                                                                    () => [
                                                                      q(
                                                                        W(
                                                                          j(
                                                                            I.label
                                                                          )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                ["content"]
                                                              ))
                                                            : (t(),
                                                              B(
                                                                "span",
                                                                ko,
                                                                W(
                                                                  I.label
                                                                    ? j(I.label)
                                                                    : ""
                                                                ),
                                                                1
                                                              ))
                                                        ]),
                                                        _: 2
                                                      },
                                                      1032,
                                                      ["label", "disabled"]
                                                    ))
                                                  : (t(),
                                                    B(
                                                      G,
                                                      { key: 2 },
                                                      [
                                                        P(
                                                          " element-plus 版本号大于等于2.6.0 "
                                                        ),
                                                        Y(
                                                          e(je),
                                                          {
                                                            value: e(ge)(I),
                                                            disabled:
                                                              I.disabledHeaderFilter,
                                                            class:
                                                              "plus-table-title-bar__toolbar__checkbox__item"
                                                          },
                                                          {
                                                            default: f(() => [
                                                              e(ye)(I.label)
                                                                .length >
                                                              V.value
                                                                ? (t(),
                                                                  _(
                                                                    e(ke),
                                                                    {
                                                                      key: 0,
                                                                      content:
                                                                        e(ye)(
                                                                          I.label
                                                                        ),
                                                                      placement:
                                                                        "right-start"
                                                                    },
                                                                    {
                                                                      default:
                                                                        f(
                                                                          () => [
                                                                            q(
                                                                              W(
                                                                                j(
                                                                                  I.label
                                                                                )
                                                                              ),
                                                                              1
                                                                            )
                                                                          ]
                                                                        ),
                                                                      _: 2
                                                                    },
                                                                    1032,
                                                                    ["content"]
                                                                  ))
                                                                : (t(),
                                                                  B(
                                                                    "span",
                                                                    Co,
                                                                    W(
                                                                      I.label
                                                                        ? j(
                                                                            I.label
                                                                          )
                                                                        : ""
                                                                    ),
                                                                    1
                                                                  ))
                                                            ]),
                                                            _: 2
                                                          },
                                                          1032,
                                                          ["value", "disabled"]
                                                        )
                                                      ],
                                                      64
                                                    ))
                                              ]
                                            )
                                          );
                                        }),
                                        128
                                      ))
                                    ],
                                    512
                                  )
                                ]),
                                _: 3
                              },
                              8,
                              ["modelValue"]
                            )
                          ];
                        }),
                        _: 3
                      },
                      8,
                      ["width", "title"]
                    ))
                  : P("v-if", !0)
              ])
            ])
          );
        }
      );
    }
  }),
  Po = de(_o, [["__file", "table-title-bar.vue"]]);
const To = { class: "plus-table-expand-col" };
var Io = ue({
    name: "PlusTable",
    inheritAttrs: !1,
    __name: "index",
    props: {
      tableData: { default: () => [] },
      data: { default: () => [] },
      columns: { default: () => [] },
      defaultSize: { default: "default" },
      pagination: { type: [Boolean, Object], default: !1 },
      actionBar: { type: [Boolean, Object], default: !1 },
      hasIndexColumn: { type: Boolean, default: !1 },
      titleBar: { type: [Boolean, Object], default: !0 },
      isSelection: { type: [Boolean, String], default: !1 },
      isRadio: { type: Boolean, default: !1 },
      hasExpand: { type: Boolean, default: !1 },
      loadingStatus: { type: Boolean, default: !1 },
      height: {},
      headerCellStyle: {
        default: () => ({ "background-color": "var(--el-fill-color-light)" })
      },
      rowKey: { type: [String, Function], default: "id" },
      dragSortable: { type: [Boolean, Object], default: !1 },
      dragSortableTableColumnProps: { default: () => ({}) },
      indexTableColumnProps: { default: () => ({}) },
      selectionTableColumnProps: { default: () => ({ width: 40 }) },
      radioTableColumnProps: { default: () => ({ width: 50 }) },
      radioProps: { default: void 0 },
      defaultSelectedRadioRow: { default: void 0 },
      expandTableColumnProps: { default: () => ({}) },
      indexContentStyle: { type: [Object, Function], default: () => ({}) },
      editable: { type: [Boolean, String], default: !1 },
      adaptive: { type: [Boolean, Object], default: !1 },
      filterTableHeaderOverflowLabelLength: {}
    },
    emits: [
      "paginationChange",
      "clickAction",
      "clickActionConfirmCancel",
      "dragSortEnd",
      "formChange",
      "refresh",
      "edited",
      "cell-click",
      "cell-dblclick",
      "filterTableHeader",
      "radioChange"
    ],
    setup(a, { expose: c, emit: u }) {
      var l, r;
      const o = a,
        v = u,
        g = H(),
        n = H([]),
        C = H(!1),
        $ = H([]),
        V = He(null),
        F = H(null),
        s = H(null),
        E = Ae({
          subPageInfo: m(
            {},
            ((l = o.pagination) == null ? void 0 : l.modelValue) || Ee
          ),
          size: o.defaultSize
        }),
        i = H([]);
      Il(() => {
        var b;
        i.value = (b = o.tableData) != null && b.length ? o.tableData : o.data;
      });
      const h = N(() => i.value),
        T = N(() => h.value.length),
        y = N(() => typeof o.height == "undefined" && o.adaptive),
        R = He({});
      al(ul, R);
      const p = He({});
      al(Kl, p),
        ae(
          () => o.columns,
          b => {
            const J = b.filter(Q => e(Q.hideInTable) !== !0);
            ($.value = J.map(Q => {
              var le;
              return X(m({}, Q), {
                headerIsChecked: (le = Q.headerIsChecked) != null ? le : !0
              });
            })),
              (n.value = J.filter(Q => e(Q.headerIsChecked) !== !1)),
              (C.value = !C.value);
          },
          { immediate: !0 }
        ),
        ae(
          () => o.defaultSelectedRadioRow,
          b => {
            g.value = b ? e(o.defaultSelectedRadioRow) : {};
          },
          { immediate: !0 }
        );
      const M = () => {
          v("paginationChange", m({}, E.subPageInfo));
        },
        j = b => {
          v("clickAction", b);
        },
        U = b => {
          v("clickActionConfirmCancel", b);
        },
        O = (b, J) => {
          ($.value = b),
            v("filterTableHeader", b, J),
            (n.value = b.filter(
              Q => e(Q.hideInTable) !== !0 && Q.headerIsChecked !== !1
            ));
        },
        Z = b => {
          E.size = b;
        },
        D = (b, J) => {
          v("dragSortEnd", b, J);
        },
        w = () => {
          v("refresh");
        },
        oe = b => {
          v("formChange", b);
        },
        he = (b, J, Q) => {
          (g.value = b ? J : {}), v("radioChange", J, Q, !!b);
        },
        pe = H(),
        se = (b, J, Q) => {
          var le;
          const Te = h.value.indexOf(b),
            ze = J.getColumnIndex();
          if (n.value[ze] && o.editable === Q) {
            const Qe = R.value[Te][ze];
            if (!Qe) return;
            document.addEventListener("click", I),
              pe.value && ((le = pe.value) == null || le.stopCellEdit()),
              (pe.value = Qe),
              Qe.startCellEdit();
            const Ql = ae(
              () => p.value.valueIsReady,
              il => {
                var dl, cl;
                il != null &&
                  il.value &&
                  (cl = (dl = p.value) == null ? void 0 : dl.fieldInstance) !=
                    null &&
                  cl.focus &&
                  (o.editable === "click" || o.editable === "dblclick") &&
                  (p.value.fieldInstance.focus(), Ql());
              }
            );
          }
        },
        k = (b, J, Q, le) => {
          se(b, J, "click"), v("cell-click", b, J, Q, le);
        },
        d = (b, J, Q, le) => {
          se(b, J, "dblclick"), v("cell-dblclick", b, J, Q, le);
        },
        I = b => {
          var J, Q;
          if (F.value && pe.value) {
            const le = b == null ? void 0 : b.target;
            if (le.classList.contains("el-icon")) return;
            !((J = F.value) == null ? void 0 : J.contains(le)) &&
              !et(le) &&
              ((Q = pe.value) == null || Q.stopCellEdit(),
              v("edited"),
              document.removeEventListener("click", I));
          }
        },
        K = () =>
          De(null, null, function* () {
            var b;
            if ((yield Ya(), !V.value)) return;
            const J = V.value.$el;
            let Q = 20,
              le = 0;
            fe(o.adaptive) &&
              (Q = (b = o.adaptive.offsetBottom) != null ? b : Q),
              s.value && o.pagination && (le = s.value.$el.offsetHeight),
              (J.style.height = `${window.innerHeight - J.getBoundingClientRect().top - Q - le}px`);
          }),
        L = Ma(K, fe(o.adaptive) && (r = o.adaptive.timeout) != null ? r : 60);
      Al(() => {
        y.value && (K(), window.addEventListener("resize", L));
      }),
        Na(() => {
          y.value && window.removeEventListener("resize", L);
        });
      const { subPageInfo: ce, size: ie } = Ua(E);
      return (
        c({ formRefs: R, tableInstance: V }),
        (b, J) => (
          t(),
          B(
            "div",
            { ref_key: "tableWrapperInstance", ref: F, class: "plus-table" },
            [
              b.titleBar
                ? (t(),
                  _(
                    Po,
                    {
                      key: 0,
                      columns: $.value,
                      "default-size": e(ie),
                      "columns-is-change": C.value,
                      "title-bar": b.titleBar,
                      onClickDensity: Z,
                      onFilterTableHeader: O,
                      onRefresh: w
                    },
                    re(
                      {
                        title: f(() => [A(b.$slots, "title")]),
                        toolbar: f(() => [A(b.$slots, "toolbar")]),
                        _: 2
                      },
                      [
                        b.$slots["drag-sort-icon"]
                          ? {
                              name: "drag-sort-icon",
                              fn: f(() => [A(b.$slots, "drag-sort-icon")]),
                              key: "0"
                            }
                          : void 0,
                        b.$slots["column-settings-icon"]
                          ? {
                              name: "column-settings-icon",
                              fn: f(() => [
                                A(b.$slots, "column-settings-icon")
                              ]),
                              key: "1"
                            }
                          : void 0,
                        b.$slots["density-icon"]
                          ? {
                              name: "density-icon",
                              fn: f(() => [A(b.$slots, "density-icon")]),
                              key: "2"
                            }
                          : void 0
                      ]
                    ),
                    1032,
                    [
                      "columns",
                      "default-size",
                      "columns-is-change",
                      "title-bar"
                    ]
                  ))
                : P("v-if", !0),
              Ie(
                (t(),
                _(
                  e(Wa),
                  S(
                    {
                      ref_key: "tableInstance",
                      ref: V,
                      "reserve-selection": !0,
                      data: h.value,
                      border: !0,
                      height: b.height,
                      "header-cell-style": b.headerCellStyle,
                      size: e(ie),
                      "row-key": b.rowKey,
                      "highlight-current-row": "",
                      "scrollbar-always-on": ""
                    },
                    b.$attrs,
                    { onCellClick: k, onCellDblclick: d }
                  ),
                  {
                    default: f(() => {
                      var Q;
                      return [
                        P(" 单选选择栏 "),
                        b.isRadio
                          ? (t(),
                            _(
                              e(Se),
                              S(
                                { key: "radio-selection" },
                                b.radioTableColumnProps
                              ),
                              {
                                default: f(le => [
                                  Y(
                                    e(Yl),
                                    S(
                                      {
                                        "model-value": e(Ka)(g.value, le.row),
                                        options: [{ value: !0 }]
                                      },
                                      b.radioProps,
                                      {
                                        onChange: Te =>
                                          he(Te, le.row, le.$index)
                                      }
                                    ),
                                    null,
                                    16,
                                    ["model-value", "onChange"]
                                  )
                                ]),
                                _: 1
                              },
                              16
                            ))
                          : P("v-if", !0),
                        P(" 多选选择栏 "),
                        b.isSelection
                          ? (t(),
                            _(
                              e(Se),
                              S(
                                { key: "selection", type: "selection" },
                                b.selectionTableColumnProps
                              ),
                              null,
                              16
                            ))
                          : P("v-if", !0),
                        P(" 序号栏 "),
                        b.hasIndexColumn
                          ? (t(),
                            _(
                              no,
                              {
                                key: 2,
                                "index-content-style": b.indexContentStyle,
                                "index-table-column-props":
                                  b.indexTableColumnProps,
                                "page-info":
                                  (Q = b.pagination) == null
                                    ? void 0
                                    : Q.modelValue
                              },
                              null,
                              8,
                              [
                                "index-content-style",
                                "index-table-column-props",
                                "page-info"
                              ]
                            ))
                          : P("v-if", !0),
                        P(" 拖拽行 "),
                        b.dragSortable
                          ? (t(),
                            _(
                              uo,
                              {
                                key: 3,
                                sortable: b.dragSortable,
                                "drag-sortable-table-column-props":
                                  b.dragSortableTableColumnProps,
                                "table-instance": V.value,
                                onDragSortEnd: D
                              },
                              re({ _: 2 }, [
                                b.$slots["drag-sort-icon"]
                                  ? {
                                      name: "drag-sort-icon",
                                      fn: f(() => [
                                        A(b.$slots, "drag-sort-icon")
                                      ]),
                                      key: "0"
                                    }
                                  : void 0
                              ]),
                              1032,
                              [
                                "sortable",
                                "drag-sortable-table-column-props",
                                "table-instance"
                              ]
                            ))
                          : P("v-if", !0),
                        P(" 展开行 "),
                        b.hasExpand
                          ? (t(),
                            _(
                              e(Se),
                              S(
                                { key: 4, type: "expand" },
                                b.expandTableColumnProps
                              ),
                              {
                                default: f(le => [
                                  ee("div", To, [
                                    A(
                                      b.$slots,
                                      "expand",
                                      S({ index: le.$index }, le)
                                    )
                                  ])
                                ]),
                                _: 3
                              },
                              16
                            ))
                          : P("v-if", !0),
                        A(b.$slots, "default", {}, () => [
                          P("配置渲染栏  "),
                          Y(
                            to,
                            {
                              columns: n.value,
                              editable: b.editable,
                              "table-data-length": T.value,
                              onFormChange: oe
                            },
                            re({ _: 2 }, [
                              te(b.$slots, (le, Te) => ({
                                name: Te,
                                fn: f(ze => [A(b.$slots, Te, ne(me(ze)))])
                              }))
                            ]),
                            1032,
                            ["columns", "editable", "table-data-length"]
                          )
                        ]),
                        P(" 操作栏 "),
                        b.actionBar
                          ? (t(),
                            _(
                              _t,
                              S({ key: 5 }, b.actionBar, {
                                onClickAction: j,
                                onClickActionConfirmCancel: U
                              }),
                              re({ _: 2 }, [
                                b.$slots["action-bar-more-icon"]
                                  ? {
                                      name: "action-bar-more-icon",
                                      fn: f(() => [
                                        A(b.$slots, "action-bar-more-icon")
                                      ]),
                                      key: "0"
                                    }
                                  : void 0
                              ]),
                              1040
                            ))
                          : P("v-if", !0)
                      ];
                    }),
                    append: f(() => [A(b.$slots, "append")]),
                    empty: f(() => [A(b.$slots, "empty")]),
                    _: 3
                  },
                  16,
                  ["data", "height", "header-cell-style", "size", "row-key"]
                )),
                [[e(Ga), b.loadingStatus]]
              ),
              P(" 分页 "),
              b.pagination
                ? (t(),
                  _(
                    e(bt),
                    S(
                      {
                        key: 1,
                        ref_key: "paginationInstance",
                        ref: s,
                        modelValue: e(ce),
                        "onUpdate:modelValue":
                          J[0] || (J[0] = Q => (Ne(ce) ? (ce.value = Q) : null))
                      },
                      b.pagination,
                      { onChange: M }
                    ),
                    re({ _: 2 }, [
                      b.$slots["pagination-left"]
                        ? {
                            name: "pagination-left",
                            fn: f(() => [A(b.$slots, "pagination-left")]),
                            key: "0"
                          }
                        : void 0,
                      b.$slots["pagination-right"]
                        ? {
                            name: "pagination-right",
                            fn: f(() => [A(b.$slots, "pagination-right")]),
                            key: "1"
                          }
                        : void 0
                    ]),
                    1040,
                    ["modelValue"]
                  ))
                : P("v-if", !0)
            ],
            512
          )
        )
      );
    }
  }),
  So = de(Io, [["__file", "index.vue"]]);
const Eo = So,
  $o = { class: "product_stacks_out h-[100%]" },
  Vo = {
    ref: "curdWrRef",
    class: "tab-wr p-[10px] flex flex-1 overflow-hidden box-border"
  },
  No = ue({
    name: "",
    __name: "index",
    setup(a) {
      const c = {
          getList: () =>
            De(null, null, function* () {
              return {
                data: Array.from({ length: 3 }).map((v, g) => ({
                  id: g,
                  name: g === 0 ? g + "name".repeat(100) : g + "name",
                  status: String(g % 3),
                  tag:
                    g === 1
                      ? "success"
                      : g === 2
                        ? "warning"
                        : g === 3
                          ? "info"
                          : "danger",
                  time: new Date()
                }))
              };
            })
        },
        { tableData: u } = dt(),
        l = [
          {
            label: "名称",
            prop: "name",
            disabledHeaderFilter: !0,
            tooltip: "名称",
            tableColumnProps: { align: "center", showOverflowTooltip: !0 }
          },
          {
            label: "状态",
            prop: "status",
            valueType: "select",
            options: [
              { label: "未解决", value: "0", color: "red" },
              { label: "已解决", value: "1", color: "blue" },
              { label: "解决中", value: "2", color: "yellow" },
              { label: "失败", value: "3", color: "red" }
            ]
          },
          {
            label: "标签",
            prop: "tag",
            valueType: "tag",
            fieldProps: o => ({ type: o })
          },
          {
            label: "时间",
            prop: "time",
            valueType: "date-picker",
            tableColumnProps: { align: "center", sortable: !0 }
          }
        ];
      return (
        De(null, null, function* () {
          try {
            const { data: o } = yield c.getList();
            u.value = o;
          } catch (o) {}
        }),
        (o, v) => {
          const g = $e,
            n = Eo;
          return (
            t(),
            B("div", $o, [
              Y(
                Ja,
                { pageClass: "product_stacks_page", isHeader: !1 },
                {
                  content: f(() => [
                    ee(
                      "div",
                      Vo,
                      [
                        v[1] || (v[1] = q(" test ")),
                        Y(
                          g,
                          { icon: e(qa)("IF-icon-fske") },
                          {
                            default: f(() => v[0] || (v[0] = [q("11")])),
                            _: 1
                          },
                          8,
                          ["icon"]
                        ),
                        Y(n, { columns: l, "table-data": e(u) }, null, 8, [
                          "table-data"
                        ])
                      ],
                      512
                    )
                  ]),
                  _: 1
                }
              )
            ])
          );
        }
      );
    }
  });
export { No as default };
