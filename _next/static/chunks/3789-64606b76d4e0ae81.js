"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3789],
  {
    364: (e, t, r) => {
      r.d(t, { X: () => o });
      var a = r(95192),
        l = r(5181),
        n = r(50625),
        c = r(74415),
        i = r(48804),
        d = r(37762);
      function o() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { contracts: r = [], query: o = {} } = t,
          u = (0, d.U)(t),
          h = (0, i.i)({ config: u }),
          y = (0, n.useMemo)(() => {
            if (0 === r.length) return;
            let e = r[0].chainId;
            if (r.every((t) => t.chainId === e)) return e;
          }, [r]),
          s = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let l = [],
                  n = r[1].contracts.length;
                for (let e = 0; e < n; e++) {
                  let a = r[1].contracts[e],
                    n = (t.contracts?.[e]).abi;
                  l.push({ ...a, abi: n });
                }
                let { scopeKey: c, ...i } = r[1];
                return (0, a.I)(e, { ...i, contracts: l });
              },
              queryKey: (function (e = {}) {
                let t = [];
                for (let r of e.contracts ?? []) {
                  let { abi: a, ...l } = r;
                  t.push({ ...l, chainId: l.chainId ?? e.chainId });
                }
                return ["readContracts", (0, l.xO)({ ...e, contracts: t })];
              })(t),
            };
          })(u, { ...t, chainId: null != y ? y : h }),
          f = (0, n.useMemo)(() => {
            var e;
            let t = !1;
            for (let e of r) {
              let { abi: r, address: a, functionName: l } = e;
              if (!r || !a || !l) {
                t = !1;
                break;
              }
              t = !0;
            }
            return !!(t && (null == (e = o.enabled) || e));
          }, [r, o.enabled]);
        return (0, c.IT)({
          ...s,
          ...o,
          enabled: f,
          structuralSharing: null != (e = o.structuralSharing) ? e : l.I_,
        });
      }
    },
    3303: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("refresh-cw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        [
          "path",
          {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3",
          },
        ],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ]);
    },
    4819: (e, t, r) => {
      r.d(t, { w: () => a });
      async function a(e, t) {
        return await e.request(
          { method: "wallet_watchAsset", params: t },
          { retryCount: 0 }
        );
      }
    },
    9250: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("circle-check", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    12909: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    13892: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("circle-alert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    16127: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    20829: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    40453: (e, t, r) => {
      r.d(t, { default: () => l.a });
      var a = r(79869),
        l = r.n(a);
    },
    49420: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("lock", [
        [
          "rect",
          {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1",
          },
        ],
        ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
      ]);
    },
    72555: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    72987: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    74642: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    75647: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("circle-slash", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
      ]);
    },
    78220: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("timer", [
        ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
        ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
        ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
      ]);
    },
    79869: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return d;
          },
          getImageProps: function () {
            return i;
          },
        });
      let a = r(31727),
        l = r(11090),
        n = r(25626),
        c = a._(r(62898));
      function i(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: c.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let d = n.Image;
    },
    81659: (e, t, r) => {
      r.d(t, { z: () => o });
      var a = r(34929),
        l = r(4819),
        n = r(93259),
        c = r(61829);
      async function i(e, t) {
        let { connector: r, ...a } = t,
          i = await (0, c.r)(e, { connector: r });
        return (0, n.T)(i, l.w, "watchAsset")(a);
      }
      var d = r(37762);
      function o() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: r } = t,
          l =
            ((e = (0, d.U)(t)),
            { mutationFn: (t) => i(e, t), mutationKey: ["watchAsset"] }),
          { mutate: n, mutateAsync: c, ...o } = (0, a.n)({ ...r, ...l });
        return { ...o, watchAsset: n, watchAssetAsync: c };
      }
    },
    82283: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("external-link", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    },
    93811: (e, t, r) => {
      r.d(t, { A: () => a });
      let a = (0, r(99011).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    99011: (e, t, r) => {
      r.d(t, { A: () => d });
      var a = r(50625);
      let l = (e) => {
          let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
            r ? r.toUpperCase() : t.toLowerCase()
          );
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        n = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var c = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let i = (0, a.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: l = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: d,
            className: o = "",
            children: u,
            iconNode: h,
            ...y
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: t,
              ...c,
              width: l,
              height: l,
              stroke: r,
              strokeWidth: d ? (24 * Number(i)) / Number(l) : i,
              className: n("lucide", o),
              ...(!u &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                })(y) && { "aria-hidden": "true" }),
              ...y,
            },
            [
              ...h.map((e) => {
                let [t, r] = e;
                return (0, a.createElement)(t, r);
              }),
              ...(Array.isArray(u) ? u : [u]),
            ]
          );
        }),
        d = (e, t) => {
          let r = (0, a.forwardRef)((r, c) => {
            let { className: d, ...o } = r;
            return (0, a.createElement)(i, {
              ref: c,
              iconNode: t,
              className: n(
                "lucide-".concat(
                  l(e)
                    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                    .toLowerCase()
                ),
                "lucide-".concat(e),
                d
              ),
              ...o,
            });
          });
          return (r.displayName = l(e)), r;
        };
    },
  },
]);
