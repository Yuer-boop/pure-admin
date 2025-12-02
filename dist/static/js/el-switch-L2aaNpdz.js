var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable;
var u = (e, n, r) =>
    n in e
      ? d(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r),
  t = (e, n) => {
    for (var r in n || (n = {})) a.call(n, r) && u(e, r, n[r]);
    if (c) for (var r of c(n)) m.call(n, r) && u(e, r, n[r]);
    return e;
  };
import {
  d as s,
  aA as o,
  c5 as p,
  c6 as i,
  c7 as y
} from "./index-B2fHy2Kp.js";
function g(e, n) {
  const r = /^IF-/;
  if (r.test(e)) {
    const f = e.split(r)[1],
      l = f.slice(0, f.indexOf(" ") == -1 ? f.length : f.indexOf(" ")),
      I = f.slice(f.indexOf(" ") + 1, f.length);
    return s({
      name: "FontIcon",
      render() {
        return o(p, t({ icon: l, iconType: I }, n));
      }
    });
  } else
    return typeof e == "function" ||
      typeof (e == null ? void 0 : e.render) == "function"
      ? n
        ? o(e, t({}, n))
        : e
      : typeof e == "object"
        ? s({
            name: "OfflineIcon",
            render() {
              return o(i, t({ icon: e }, n));
            }
          })
        : s({
            name: "Icon",
            render() {
              if (!e) return;
              const f = e.includes(":") ? y : i;
              return o(f, t({ icon: e }, n));
            }
          });
}
export { g as u };
