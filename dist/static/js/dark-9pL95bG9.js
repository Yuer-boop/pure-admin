var N = (t, e, a) =>
  new Promise((o, i) => {
    var p = n => {
        try {
          c(a.next(n));
        } catch (m) {
          i(m);
        }
      },
      T = n => {
        try {
          c(a.throw(n));
        } catch (m) {
          i(m);
        }
      },
      c = n => (n.done ? o(n.value) : Promise.resolve(n.value).then(p, T));
    c((a = a.apply(t, e)).next());
  });
import {
  aw as Q,
  q as g,
  a_ as ee,
  F as X,
  k as K,
  s as Y,
  N as k,
  l as y,
  p as S,
  af as te,
  n as x,
  a$ as oe,
  t as U,
  b0 as q,
  b1 as ae,
  b2 as se,
  b3 as re,
  m as G,
  c as H,
  o as R,
  e as z,
  i as le,
  b4 as ne,
  b5 as ie,
  G as ue,
  aX as A,
  a2 as V,
  z as he,
  D as ce,
  b6 as me
} from "./index-B2fHy2Kp.js";
function de() {
  const { $storage: t, $config: e } = Q(),
    a = () => {
      var p, T, c, n, m, C, w, F, v, b, r, l, h, d, u;
      ee().multiTagsCache && (!t.tags || t.tags.length === 0) && (t.tags = X),
        t.layout ||
          (t.layout = {
            layout:
              (p = e == null ? void 0 : e.Layout) != null ? p : "vertical",
            theme: (T = e == null ? void 0 : e.Theme) != null ? T : "light",
            darkMode: (c = e == null ? void 0 : e.DarkMode) != null ? c : !1,
            sidebarStatus:
              (n = e == null ? void 0 : e.SidebarStatus) != null ? n : !0,
            epThemeColor:
              (m = e == null ? void 0 : e.EpThemeColor) != null ? m : "#409EFF",
            themeColor:
              (C = e == null ? void 0 : e.Theme) != null ? C : "light",
            overallStyle:
              (w = e == null ? void 0 : e.OverallStyle) != null ? w : "light"
          }),
        t.configure ||
          (t.configure = {
            grey: (F = e == null ? void 0 : e.Grey) != null ? F : !1,
            weak: (v = e == null ? void 0 : e.Weak) != null ? v : !1,
            hideTabs: (b = e == null ? void 0 : e.HideTabs) != null ? b : !1,
            hideFooter: (r = e.HideFooter) != null ? r : !0,
            showLogo: (l = e == null ? void 0 : e.ShowLogo) != null ? l : !0,
            showModel:
              (h = e == null ? void 0 : e.ShowModel) != null ? h : "smart",
            multiTagsCache:
              (d = e == null ? void 0 : e.MultiTagsCache) != null ? d : !1,
            stretch: (u = e == null ? void 0 : e.Stretch) != null ? u : !1
          });
    },
    o = g(() => (t == null ? void 0 : t.layout.layout)),
    i = g(() => t.layout);
  return { layout: o, layoutTheme: i, initStorage: a };
}
const pe = K("pure-app", {
  state: () => {
    var t, e, a, o;
    return {
      sidebar: {
        opened:
          (e =
            (t = k().getItem(`${S()}layout`)) == null
              ? void 0
              : t.sidebarStatus) != null
            ? e
            : y().SidebarStatus,
        withoutAnimation: !1,
        isClickCollapse: !1
      },
      layout:
        (o = (a = k().getItem(`${S()}layout`)) == null ? void 0 : a.layout) !=
        null
          ? o
          : y().Layout,
      device: te() ? "mobile" : "desktop",
      viewportSize: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    };
  },
  getters: {
    getSidebarStatus(t) {
      return t.sidebar.opened;
    },
    getDevice(t) {
      return t.device;
    },
    getViewportWidth(t) {
      return t.viewportSize.width;
    },
    getViewportHeight(t) {
      return t.viewportSize.height;
    }
  },
  actions: {
    TOGGLE_SIDEBAR(t, e) {
      const a = k().getItem(`${S()}layout`);
      t && e
        ? ((this.sidebar.withoutAnimation = !0),
          (this.sidebar.opened = !0),
          (a.sidebarStatus = !0))
        : !t && e
          ? ((this.sidebar.withoutAnimation = !0),
            (this.sidebar.opened = !1),
            (a.sidebarStatus = !1))
          : !t &&
            !e &&
            ((this.sidebar.withoutAnimation = !1),
            (this.sidebar.opened = !this.sidebar.opened),
            (this.sidebar.isClickCollapse = !this.sidebar.opened),
            (a.sidebarStatus = this.sidebar.opened)),
        k().setItem(`${S()}layout`, a);
    },
    toggleSideBar(t, e) {
      return N(this, null, function* () {
        yield this.TOGGLE_SIDEBAR(t, e);
      });
    },
    toggleDevice(t) {
      this.device = t;
    },
    setLayout(t) {
      this.layout = t;
    },
    setViewportSize(t) {
      this.viewportSize = t;
    }
  }
});
function I() {
  return pe(Y);
}
const ve = K("pure-epTheme", {
  state: () => {
    var t, e, a, o;
    return {
      epThemeColor:
        (e =
          (t = k().getItem(`${S()}layout`)) == null
            ? void 0
            : t.epThemeColor) != null
          ? e
          : y().EpThemeColor,
      epTheme:
        (o = (a = k().getItem(`${S()}layout`)) == null ? void 0 : a.theme) !=
        null
          ? o
          : y().Theme
    };
  },
  getters: {
    getEpThemeColor(t) {
      return t.epThemeColor;
    },
    fill(t) {
      return t.epTheme === "light" ? "#409eff" : "#fff";
    }
  },
  actions: {
    setEpThemeColor(t) {
      const e = k().getItem(`${S()}layout`);
      (this.epTheme = e == null ? void 0 : e.theme),
        (this.epThemeColor = t),
        e && ((e.epThemeColor = t), k().setItem(`${S()}layout`, e));
    }
  }
});
function O() {
  return ve(Y);
}
function Re() {
  var v, b;
  const { layoutTheme: t, layout: e } = de(),
    a = x([
      { color: "#ffffff", themeColor: "light" },
      { color: "#1b2a47", themeColor: "default" },
      { color: "#722ed1", themeColor: "saucePurple" },
      { color: "#eb2f96", themeColor: "pink" },
      { color: "#f5222d", themeColor: "dusk" },
      { color: "#fa541c", themeColor: "volcano" },
      { color: "#13c2c2", themeColor: "mingQing" },
      { color: "#52c41a", themeColor: "auroraGreen" }
    ]),
    { $storage: o } = Q(),
    i = x((v = o == null ? void 0 : o.layout) == null ? void 0 : v.darkMode),
    p = x(
      (b = o == null ? void 0 : o.layout) == null ? void 0 : b.overallStyle
    ),
    T = document.documentElement;
  function c(r, l, h) {
    const d = h || document.body;
    let { className: u } = d;
    (u = u.replace(l, "").trim()), (d.className = r ? `${u} ${l}` : u);
  }
  function n(r = (h => ((h = y().Theme) != null ? h : "light"))(), l = !0) {
    var u, E;
    (t.value.theme = r), document.documentElement.setAttribute("data-theme", r);
    const d = o.layout.themeColor;
    if (
      ((o.layout = {
        layout: e.value,
        theme: r,
        darkMode: i.value,
        sidebarStatus: (u = o.layout) == null ? void 0 : u.sidebarStatus,
        epThemeColor: (E = o.layout) == null ? void 0 : E.epThemeColor,
        themeColor: l ? r : d,
        overallStyle: p.value
      }),
      r === "default" || r === "light")
    )
      C(y().EpThemeColor);
    else {
      const B = a.value.find(W => W.themeColor === r);
      C(B.color);
    }
  }
  function m(r, l, h) {
    document.documentElement.style.setProperty(
      `--el-color-primary-${r}-${l}`,
      i.value ? se(h, l / 10) : re(h, l / 10)
    );
  }
  const C = r => {
    O().setEpThemeColor(r),
      document.documentElement.style.setProperty("--el-color-primary", r);
    for (let l = 1; l <= 2; l++) m("dark", l, r);
    for (let l = 1; l <= 9; l++) m("light", l, r);
  };
  function w(r) {
    (p.value = r),
      O().epTheme === "light" && i.value
        ? n("default", !1)
        : n(O().epTheme, !1),
      i.value
        ? document.documentElement.classList.add("dark")
        : (o.layout.themeColor === "light" && n("light", !1),
          document.documentElement.classList.remove("dark"));
  }
  function F() {
    oe(), k().clear();
    const {
      Grey: r,
      Weak: l,
      MultiTagsCache: h,
      EpThemeColor: d,
      Layout: u
    } = y();
    I().setLayout(u),
      C(d),
      U().multiTagsCacheChange(h),
      c(r, "html-grey", document.querySelector("html")),
      c(l, "html-weakness", document.querySelector("html")),
      q.push("/login"),
      U().handleTags("equal", [...X]),
      ae();
  }
  return {
    body: T,
    dataTheme: i,
    overallStyle: p,
    layoutTheme: t,
    themeColors: a,
    onReset: F,
    toggleClass: c,
    dataThemeChange: w,
    setEpThemeColor: C,
    setLayoutThemeColor: n
  };
}
function fe(t) {
  return {
    all: (t = t || new Map()),
    on: function (e, a) {
      var o = t.get(e);
      o ? o.push(a) : t.set(e, [a]);
    },
    off: function (e, a) {
      var o = t.get(e);
      o && (a ? o.splice(o.indexOf(a) >>> 0, 1) : t.set(e, []));
    },
    emit: function (e, a) {
      var o = t.get(e);
      o &&
        o.slice().map(function (i) {
          i(a);
        }),
        (o = t.get("*")) &&
          o.slice().map(function (i) {
            i(e, a);
          });
    }
  };
}
const L = fe(),
  ge = { viewBox: "0 0 24 24", width: "1em", height: "1em" };
function Ce(t, e) {
  return (
    R(),
    H(
      "svg",
      ge,
      e[0] ||
        (e[0] = [
          z(
            "path",
            {
              fill: "currentColor",
              d: "M16 3h6v6h-2V5h-4zM2 3h6v2H4v4H2zm18 16v-4h2v6h-6v-2zM4 19h4v2H2v-6h2z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const ke = G({ name: "ri-fullscreen-fill", render: Ce }),
  ye = { viewBox: "0 0 24 24", width: "1em", height: "1em" };
function Te(t, e) {
  return (
    R(),
    H(
      "svg",
      ye,
      e[0] ||
        (e[0] = [
          z(
            "path",
            {
              fill: "currentColor",
              d: "M18 7h4v2h-6V3h2zM8 9H2V7h4V3h2zm10 8v4h-2v-6h6v2zM8 15v6H6v-4H2v-2z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const Se = G({ name: "ri-fullscreen-exit-fill", render: Te }),
  be =
    "data:image/jpeg;base64,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",
  we =
    "The current routing configuration is incorrect, please check the configuration";
function Be() {
  var P, D;
  const t = he(),
    e = I(),
    a = le().options.routes,
    { isFullscreen: o, toggle: i } = ne(),
    { wholeMenus: p } = ie(ue()),
    T =
      (D = (P = y()) == null ? void 0 : P.TooltipEffect) != null ? D : "light",
    c = g(() => ({
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden"
    })),
    n = g(() => {
      var s, f;
      return V((s = A()) == null ? void 0 : s.avatar)
        ? be
        : (f = A()) == null
          ? void 0
          : f.avatar;
    }),
    m = g(() => {
      var s, f, M;
      return V((s = A()) == null ? void 0 : s.nickname)
        ? (f = A()) == null
          ? void 0
          : f.username
        : (M = A()) == null
          ? void 0
          : M.nickname;
    }),
    C = g(() => (m.value ? { marginRight: "10px" } : "")),
    w = g(() => !e.getSidebarStatus),
    F = g(() => e.getDevice),
    { $storage: v, $config: b } = Q(),
    r = g(() => {
      var s;
      return (s = v == null ? void 0 : v.layout) == null ? void 0 : s.layout;
    }),
    l = g(() => b.Title);
  function h(s) {
    const f = y().Title;
    f ? (document.title = `${s.title} | ${f}`) : (document.title = s.title);
  }
  function d() {
    A().logOut();
  }
  function u() {
    var s;
    q.push((s = ce()) == null ? void 0 : s.path);
  }
  function E() {
    L.emit("openPanel");
  }
  function B() {
    e.toggleSideBar();
  }
  function W(s) {
    s == null || s.handleResize();
  }
  function J(s) {
    var j;
    if (!s.children) return console.error(we);
    const f = /^http(s?):\/\//,
      M = (j = s.children[0]) == null ? void 0 : j.path;
    return f.test(M) ? s.path + "/" + M : M;
  }
  function Z(s) {
    p.value.length === 0 || _(s) || L.emit("changLayoutRoute", s);
  }
  function _(s) {
    return me.includes(s);
  }
  function $() {
    return new URL("/logo.svg", import.meta.url).href;
  }
  return {
    route: t,
    title: l,
    device: F,
    layout: r,
    logout: d,
    routers: a,
    $storage: v,
    isFullscreen: o,
    Fullscreen: ke,
    ExitFullscreen: Se,
    toggle: i,
    backTopMenu: u,
    onPanel: E,
    getDivStyle: c,
    changeTitle: h,
    toggleSideBar: B,
    menuSelect: Z,
    handleResize: W,
    resolvePath: J,
    getLogo: $,
    isCollapse: w,
    pureApp: e,
    username: m,
    userAvatar: n,
    avatarsStyle: C,
    tooltipEffect: T
  };
}
const Fe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
};
function Me(t, e) {
  return (
    R(),
    H(
      "svg",
      Fe,
      e[0] ||
        (e[0] = [
          z("path", { fill: "none", d: "M0 0h24v24H0z" }, null, -1),
          z(
            "path",
            {
              d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const We = { render: Me },
  Ae = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24"
  };
function ze(t, e) {
  return (
    R(),
    H(
      "svg",
      Ae,
      e[0] ||
        (e[0] = [
          z("path", { fill: "none", d: "M0 0h24v24H0z" }, null, -1),
          z(
            "path",
            {
              d: "M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"
            },
            null,
            -1
          )
        ])
    )
  );
}
const xe = { render: ze };
export {
  Se as E,
  ke as F,
  Be as a,
  Re as b,
  xe as c,
  We as d,
  L as e,
  I as f,
  de as g,
  O as u
};
