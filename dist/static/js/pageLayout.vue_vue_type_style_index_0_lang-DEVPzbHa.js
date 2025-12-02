import {
  d as r,
  c as s,
  o as t,
  R as n,
  V as p,
  O as c,
  e as d,
  av as o
} from "./index-B2fHy2Kp.js";
const i = { key: 0, class: "header-wrapper h-[60px] flex items-center" },
  f = {
    class: "content-wrapper flex flex-1 overflow-hidden flex-col h-[100%]"
  },
  g = r({
    name: "layoutPage",
    __name: "pageLayout",
    props: {
      pageClass: { default: "" },
      isHeader: { type: Boolean, default: !0 },
      pageStyle: {
        default() {
          return { minWidth: "800px" };
        }
      }
    },
    setup(l) {
      const e = l;
      return (a, m) => (
        t(),
        s(
          "div",
          {
            class: p([
              [e.pageClass],
              "page-layout-page flex flex-col h-[100%]"
            ]),
            style: n([{ background: "var(--el-bg-color)" }, [e.pageStyle]])
          },
          [
            e.isHeader
              ? (t(), s("div", i, [o(a.$slots, "header")]))
              : c("", !0),
            d("div", f, [o(a.$slots, "content")])
          ],
          6
        )
      );
    }
  });
export { g as _ };
