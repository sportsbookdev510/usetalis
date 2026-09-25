"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [755],
  {
    639: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return o;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        o = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          maximumDiskCacheSize: void 0,
          maximumResponseBody: 5e7,
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    9587: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let o = r(31727)._(r(50625)).default.createContext({});
    },
    11090: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        r(67859);
      let o = r(23835),
        n = r(639),
        l = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function a(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function i(e, t) {
        var r, i;
        let d,
          c,
          u,
          {
            src: m,
            sizes: p,
            unoptimized: f = !1,
            priority: b = !1,
            loading: g,
            className: h,
            quality: v,
            width: y,
            height: w,
            fill: x = !1,
            style: k,
            overrideSrc: z,
            onLoad: _,
            onLoadingComplete: j,
            placeholder: C = "empty",
            blurDataURL: O,
            fetchPriority: S,
            decoding: P = "async",
            layout: E,
            objectFit: M,
            objectPosition: R,
            lazyBoundary: I,
            lazyRoot: A,
            ...G
          } = e,
          { imgConf: N, showAltText: D, blurComplete: T, defaultLoader: W } = t,
          L = N || n.imageConfigDefault;
        if ("allSizes" in L) d = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t),
            o = null == (r = L.qualities) ? void 0 : r.sort((e, t) => e - t);
          d = { ...L, allSizes: e, deviceSizes: t, qualities: o };
        }
        if (void 0 === W)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let $ = G.loader || W;
        delete G.loader, delete G.srcSet;
        let F = "__next_img_default" in $;
        if (F) {
          if ("custom" === d.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  m +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let e = $;
          $ = (t) => {
            let { config: r, ...o } = t;
            return e(o);
          };
        }
        if (E) {
          "fill" === E && (x = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[E];
          e && (k = { ...k, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[E];
          t && !p && (p = t);
        }
        let U = "",
          q = s(y),
          B = s(w),
          H = !1;
        if ((i = m) && "object" == typeof i && (a(i) || void 0 !== i.src)) {
          let e = a(m) ? m.default : m;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((c = e.blurWidth),
            (u = e.blurHeight),
            (O = O || e.blurDataURL),
            (U = e.src),
            (H = /\.avif(?:\?|$)/i.test(U)),
            !x)
          )
            if (q || B) {
              if (q && !B) {
                let t = q / e.width;
                B = Math.round(e.height * t);
              } else if (!q && B) {
                let t = B / e.height;
                q = Math.round(e.width * t);
              }
            } else (q = e.width), (B = e.height);
        }
        H && "blur" === C && !O && (C = "empty");
        let V = !b && ("lazy" === g || void 0 === g);
        (!(m = "string" == typeof m ? m : U) ||
          m.startsWith("data:") ||
          m.startsWith("blob:")) &&
          ((f = !0), (V = !1)),
          d.unoptimized && (f = !0),
          F &&
            !d.dangerouslyAllowSVG &&
            m.split("?", 1)[0].endsWith(".svg") &&
            (f = !0);
        let X = s(v),
          J = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: M,
                  objectPosition: R,
                }
              : {},
            D ? {} : { color: "transparent" },
            k
          ),
          Y =
            T || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, o.getImageBlurSvg)({
                  widthInt: q,
                  heightInt: B,
                  blurWidth: c,
                  blurHeight: u,
                  blurDataURL: O || "",
                  objectFit: J.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          K = l.includes(J.objectFit)
            ? "fill" === J.objectFit
              ? "100% 100%"
              : "cover"
            : J.objectFit,
          Q = Y
            ? {
                backgroundSize: K,
                backgroundPosition: J.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y,
              }
            : {},
          Z = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: o,
              width: n,
              quality: l,
              sizes: a,
              loader: s,
            } = e;
            if (o) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: i, kind: d } = (function (e, t, r) {
                let { deviceSizes: o, allSizes: n } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let o; (o = e.exec(r)); ) t.push(parseInt(o[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: n.filter((t) => t >= o[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: o, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => n.find((t) => t >= e) || n[n.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, n, a),
              c = i.length - 1;
            return {
              sizes: a || "w" !== d ? a : "100vw",
              srcSet: i
                .map(
                  (e, o) =>
                    s({ config: t, src: r, quality: l, width: e }) +
                    " " +
                    ("w" === d ? e : o + 1) +
                    d
                )
                .join(", "),
              src: s({ config: t, src: r, quality: l, width: i[c] }),
            };
          })({
            config: d,
            src: m,
            unoptimized: f,
            width: q,
            quality: X,
            sizes: p,
            loader: $,
          });
        return {
          props: {
            ...G,
            loading: V ? "lazy" : g,
            fetchPriority: S,
            width: q,
            height: B,
            decoding: P,
            className: h,
            style: { ...J, ...Q },
            sizes: Z.sizes,
            srcSet: Z.srcSet,
            src: z || Z.src,
          },
          meta: { unoptimized: f, priority: b, placeholder: C, fill: x },
        };
      }
    },
    23835: (e, t) => {
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: o,
            blurHeight: n,
            blurDataURL: l,
            objectFit: a,
          } = e,
          s = o ? 40 * o : t,
          i = n ? 40 * n : r,
          d = s && i ? "viewBox='0 0 " + s + " " + i + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          d +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (d
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          l +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    25626: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let o = r(31727),
        n = r(39660),
        l = r(72133),
        a = n._(r(50625)),
        s = o._(r(27172)),
        i = o._(r(47091)),
        d = r(11090),
        c = r(639),
        u = r(26605);
      r(67859);
      let m = r(50672),
        p = o._(r(62898)),
        f = r(40929),
        b = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function g(e, t, r, o, n, l, a) {
        let s = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== s &&
          ((e["data-loaded-src"] = s),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && n(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let o = !1,
                    n = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => o,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      (o = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (n = !0), t.stopPropagation();
                    },
                  });
                }
                (null == o ? void 0 : o.current) && o.current(e);
              }
            }));
      }
      function h(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let v = (0, a.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: o,
            sizes: n,
            height: s,
            width: i,
            decoding: d,
            className: c,
            style: u,
            fetchPriority: m,
            placeholder: p,
            loading: b,
            unoptimized: v,
            fill: y,
            onLoadRef: w,
            onLoadingCompleteRef: x,
            setBlurComplete: k,
            setShowAltText: z,
            sizesInput: _,
            onLoad: j,
            onError: C,
            ...O
          } = e,
          S = (0, a.useCallback)(
            (e) => {
              e && (C && (e.src = e.src), e.complete && g(e, p, w, x, k, v, _));
            },
            [r, p, w, x, k, C, v, _]
          ),
          P = (0, f.useMergedRef)(t, S);
        return (0, l.jsx)("img", {
          ...O,
          ...h(m),
          loading: b,
          width: i,
          height: s,
          decoding: d,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: u,
          sizes: n,
          srcSet: o,
          src: r,
          ref: P,
          onLoad: (e) => {
            g(e.currentTarget, p, w, x, k, v, _);
          },
          onError: (e) => {
            z(!0), "empty" !== p && k(!0), C && C(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          o = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...h(r.fetchPriority),
          };
        return t && s.default.preload
          ? (s.default.preload(r.src, o), null)
          : (0, l.jsx)(i.default, {
              children: (0, l.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...o },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let w = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(m.RouterContext),
          o = (0, a.useContext)(u.ImageConfigContext),
          n = (0, a.useMemo)(() => {
            var e;
            let t = b || o || c.imageConfigDefault,
              r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              n = t.deviceSizes.sort((e, t) => e - t),
              l = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: r, deviceSizes: n, qualities: l };
          }, [o]),
          { onLoad: s, onLoadingComplete: i } = e,
          f = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
          f.current = s;
        }, [s]);
        let g = (0, a.useRef)(i);
        (0, a.useEffect)(() => {
          g.current = i;
        }, [i]);
        let [h, w] = (0, a.useState)(!1),
          [x, k] = (0, a.useState)(!1),
          { props: z, meta: _ } = (0, d.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: n,
            blurComplete: h,
            showAltText: x,
          });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(v, {
              ...z,
              unoptimized: _.unoptimized,
              placeholder: _.placeholder,
              fill: _.fill,
              onLoadRef: f,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: k,
              sizesInput: e.sizes,
              ref: t,
            }),
            _.priority
              ? (0, l.jsx)(y, { isAppRouter: !r, imgAttributes: z })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    26605: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let o = r(31727)._(r(50625)),
        n = r(639),
        l = o.default.createContext(n.imageConfigDefault);
    },
    47091: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return b;
          },
          defaultHead: function () {
            return u;
          },
        });
      let o = r(31727),
        n = r(39660),
        l = r(72133),
        a = n._(r(50625)),
        s = o._(r(69772)),
        i = r(9587),
        d = r(89347),
        c = r(57051);
      function u(e) {
        void 0 === e && (e = !1);
        let t = [(0, l.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, l.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function m(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(67859);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(m, [])
          .reverse()
          .concat(u(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                o = {};
              return (n) => {
                let l = !0,
                  a = !1;
                if (
                  n.key &&
                  "number" != typeof n.key &&
                  n.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = n.key.slice(n.key.indexOf("$") + 1);
                  e.has(t) ? (l = !1) : e.add(t);
                }
                switch (n.type) {
                  case "title":
                  case "base":
                    t.has(n.type) ? (l = !1) : t.add(n.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (n.props.hasOwnProperty(t))
                        if ("charSet" === t) r.has(t) ? (l = !1) : r.add(t);
                        else {
                          let e = n.props[t],
                            r = o[t] || new Set();
                          ("name" !== t || !a) && r.has(e)
                            ? (l = !1)
                            : (r.add(e), (o[t] = r));
                        }
                    }
                }
                return l;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            return a.default.cloneElement(e, { key: r });
          });
      }
      let b = function (e) {
        let { children: t } = e,
          r = (0, a.useContext)(i.AmpStateContext),
          o = (0, a.useContext)(d.HeadManagerContext);
        return (0, l.jsx)(s.default, {
          reduceComponentsToState: f,
          headManager: o,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    50672: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let o = r(31727)._(r(50625)).default.createContext(null);
    },
    57051: (e, t) => {
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: o = !1,
        } = void 0 === e ? {} : e;
        return t || (r && o);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    61295: (e, t, r) => {
      r.d(t, { QP: () => ep });
      let o = (e = new Map(), t = null, r) => ({
          nextPart: e,
          validators: t,
          classGroupId: r,
        }),
        n = [],
        l = (e, t, r) => {
          if (0 == e.length - t) return r.classGroupId;
          let o = e[t],
            n = r.nextPart.get(o);
          if (n) {
            let r = l(e, t + 1, n);
            if (r) return r;
          }
          let a = r.validators;
          if (null === a) return;
          let s = 0 === t ? e.join("-") : e.slice(t).join("-"),
            i = a.length;
          for (let e = 0; e < i; e++) {
            let t = a[e];
            if (t.validator(s)) return t.classGroupId;
          }
        },
        a = (e, t) => {
          let r = o();
          for (let o in e) s(e[o], r, o, t);
          return r;
        },
        s = (e, t, r, o) => {
          let n = e.length;
          for (let l = 0; l < n; l++) i(e[l], t, r, o);
        },
        i = (e, t, r, o) =>
          "string" == typeof e
            ? void d(e, t, r)
            : "function" == typeof e
            ? void c(e, t, r, o)
            : void u(e, t, r, o),
        d = (e, t, r) => {
          ("" === e ? t : m(t, e)).classGroupId = r;
        },
        c = (e, t, r, o) => {
          if (p(e)) return void s(e(o), t, r, o);
          null === t.validators && (t.validators = []),
            t.validators.push({ classGroupId: r, validator: e });
        },
        u = (e, t, r, o) => {
          let n = Object.entries(e),
            l = n.length;
          for (let e = 0; e < l; e++) {
            let [l, a] = n[e];
            s(a, m(t, l), r, o);
          }
        },
        m = (e, t) => {
          let r = e,
            n = t.split("-"),
            l = n.length;
          for (let e = 0; e < l; e++) {
            let t = n[e],
              l = r.nextPart.get(t);
            l || ((l = o()), r.nextPart.set(t, l)), (r = l);
          }
          return r;
        },
        p = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
        f = [],
        b = (e, t, r, o, n) => ({
          modifiers: e,
          hasImportantModifier: t,
          baseClassName: r,
          maybePostfixModifierPosition: o,
          isExternal: n,
        }),
        g = /\s+/,
        h = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let r = "";
          for (let o = 0; o < e.length; o++)
            e[o] && (t = h(e[o])) && (r && (r += " "), (r += t));
          return r;
        },
        v = [],
        y = (e) => {
          let t = (t) => t[e] || v;
          return (t.isThemeGetter = !0), (t.themeKey = e), t;
        },
        w = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        x = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        k = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
        z = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        _ =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        j =
          /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,
        C = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        O =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        S = (e) => k.test(e),
        P = (e) => !!e && !Number.isNaN(Number(e)),
        E = (e) => !!e && Number.isInteger(Number(e)),
        M = (e) => e.endsWith("%") && P(e.slice(0, -1)),
        R = (e) => z.test(e),
        I = () => !0,
        A = (e) => _.test(e) && !j.test(e),
        G = () => !1,
        N = (e) => C.test(e),
        D = (e) => O.test(e),
        T = (e) => !$(e) && !J(e),
        W = (e) =>
          e.startsWith("@container") &&
          (("/" === e[10] && void 0 !== e[11]) ||
            ("s" === e[11] && void 0 !== e[16] && e.startsWith("-size/", 10)) ||
            ("n" === e[11] &&
              void 0 !== e[18] &&
              e.startsWith("-normal/", 10))),
        L = (e) => eo(e, es, G),
        $ = (e) => w.test(e),
        F = (e) => eo(e, ei, A),
        U = (e) => eo(e, ed, P),
        q = (e) => eo(e, eu, I),
        B = (e) => eo(e, ec, G),
        H = (e) => eo(e, el, G),
        V = (e) => eo(e, ea, D),
        X = (e) => eo(e, em, N),
        J = (e) => x.test(e),
        Y = (e) => en(e, ei),
        K = (e) => en(e, ec),
        Q = (e) => en(e, el),
        Z = (e) => en(e, es),
        ee = (e) => en(e, ea),
        et = (e) => en(e, em, !0),
        er = (e) => en(e, eu, !0),
        eo = (e, t, r) => {
          let o = w.exec(e);
          return !!o && (o[1] ? t(o[1]) : r(o[2]));
        },
        en = (e, t, r = !1) => {
          let o = x.exec(e);
          return !!o && (o[1] ? t(o[1]) : r);
        },
        el = (e) => "position" === e || "percentage" === e,
        ea = (e) => "image" === e || "url" === e,
        es = (e) => "length" === e || "size" === e || "bg-size" === e,
        ei = (e) => "length" === e,
        ed = (e) => "number" === e,
        ec = (e) => "family-name" === e,
        eu = (e) => "number" === e || "weight" === e,
        em = (e) => "shadow" === e;
      Symbol.toStringTag;
      let ep = ((e, ...t) => {
        let r,
          o,
          s,
          i,
          d = (e) => {
            let t = o(e);
            if (t) return t;
            let n = ((e, t) => {
              let {
                  parseClassName: r,
                  getClassGroupId: o,
                  getConflictingClassGroupIds: n,
                  sortModifiers: l,
                  postfixLookupClassGroupIds: a,
                } = t,
                s = [],
                i = e.trim().split(g),
                d = "";
              for (let e = i.length - 1; e >= 0; e -= 1) {
                let t,
                  c = i[e],
                  {
                    isExternal: u,
                    modifiers: m,
                    hasImportantModifier: p,
                    baseClassName: f,
                    maybePostfixModifierPosition: b,
                  } = r(c);
                if (u) {
                  d = c + (d.length > 0 ? " " + d : d);
                  continue;
                }
                let g = !!b;
                if (g) {
                  let e = (t = o(f.substring(0, b))) && a[t] ? o(f) : void 0;
                  e && e !== t && ((t = e), (g = !1));
                } else t = o(f);
                if (!t) {
                  if (!g || !(t = o(f))) {
                    d = c + (d.length > 0 ? " " + d : d);
                    continue;
                  }
                  g = !1;
                }
                let h =
                    0 === m.length
                      ? ""
                      : 1 === m.length
                      ? m[0]
                      : l(m).join(":"),
                  v = p ? h + "!" : h,
                  y = v + t;
                if (s.indexOf(y) > -1) continue;
                s.push(y);
                let w = n(t, g);
                for (let e = 0; e < w.length; ++e) {
                  let t = w[e];
                  s.push(v + t);
                }
                d = c + (d.length > 0 ? " " + d : d);
              }
              return d;
            })(e, r);
            return s(e, n), n;
          };
        return (
          (i = (c) => (
            (o = (r = ((e) => ({
              cache: ((e) => {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  r = Object.create(null),
                  o = Object.create(null),
                  n = (n, l) => {
                    (r[n] = l),
                      ++t > e && ((t = 0), (o = r), (r = Object.create(null)));
                  };
                return {
                  get(e) {
                    let t = r[e];
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = o[e])
                      ? (n(e, t), t)
                      : void 0;
                  },
                  set(e, t) {
                    e in r ? (r[e] = t) : n(e, t);
                  },
                };
              })(e.cacheSize),
              parseClassName: ((e) => {
                let { prefix: t, experimentalParseClassName: r } = e,
                  o = (e) => {
                    let t,
                      r = [],
                      o = 0,
                      n = 0,
                      l = 0,
                      a = e.length;
                    for (let s = 0; s < a; s++) {
                      let a = e[s];
                      if (0 === o && 0 === n) {
                        if (":" === a) {
                          r.push(e.slice(l, s)), (l = s + 1);
                          continue;
                        }
                        if ("/" === a) {
                          t = s;
                          continue;
                        }
                      }
                      "[" === a
                        ? o++
                        : "]" === a
                        ? o--
                        : "(" === a
                        ? n++
                        : ")" === a && n--;
                    }
                    let s = 0 === r.length ? e : e.slice(l),
                      i = s,
                      d = !1;
                    return (
                      s.endsWith("!")
                        ? ((i = s.slice(0, -1)), (d = !0))
                        : s.startsWith("!") && ((i = s.slice(1)), (d = !0)),
                      b(r, d, i, t && t > l ? t - l : void 0)
                    );
                  };
                if (t) {
                  let e = t + ":",
                    r = o;
                  o = (t) =>
                    t.startsWith(e)
                      ? r(t.slice(e.length))
                      : b(f, !1, t, void 0, !0);
                }
                if (r) {
                  let e = o;
                  o = (t) => r({ className: t, parseClassName: e });
                }
                return o;
              })(e),
              sortModifiers: ((e) => {
                let t = new Map();
                return (
                  e.orderSensitiveModifiers.forEach((e, r) => {
                    t.set(e, 1e6 + r);
                  }),
                  (e) => {
                    let r = [],
                      o = [];
                    for (let n = 0; n < e.length; n++) {
                      let l = e[n],
                        a = "[" === l[0],
                        s = t.has(l);
                      a || s
                        ? (o.length > 0 && (o.sort(), r.push(...o), (o = [])),
                          r.push(l))
                        : o.push(l);
                    }
                    return o.length > 0 && (o.sort(), r.push(...o)), r;
                  }
                );
              })(e),
              postfixLookupClassGroupIds: ((e) => {
                let t = Object.create(null),
                  r = e.postfixLookupClassGroups;
                if (r) for (let e = 0; e < r.length; e++) t[r[e]] = !0;
                return t;
              })(e),
              ...((e) => {
                let t = ((e) => {
                    let { theme: t, classGroups: r } = e;
                    return a(r, t);
                  })(e),
                  {
                    conflictingClassGroups: r,
                    conflictingClassGroupModifiers: o,
                  } = e;
                return {
                  getClassGroupId: (e) => {
                    if (e.startsWith("[") && e.endsWith("]"))
                      return ((e) =>
                        -1 === e.slice(1, -1).indexOf(":")
                          ? void 0
                          : (() => {
                              let t = e.slice(1, -1),
                                r = t.indexOf(":"),
                                o = t.slice(0, r);
                              return o ? "arbitrary.." + o : void 0;
                            })())(e);
                    let r = e.split("-"),
                      o = +("" === r[0] && r.length > 1);
                    return l(r, o, t);
                  },
                  getConflictingClassGroupIds: (e, t) => {
                    if (t) {
                      let t = o[e],
                        l = r[e];
                      return t
                        ? l
                          ? ((e, t) => {
                              let r = Array(e.length + t.length);
                              for (let t = 0; t < e.length; t++) r[t] = e[t];
                              for (let o = 0; o < t.length; o++)
                                r[e.length + o] = t[o];
                              return r;
                            })(l, t)
                          : t
                        : l || n;
                    }
                    return r[e] || n;
                  },
                };
              })(e),
            }))(t.reduce((e, t) => t(e), e()))).cache.get),
            (s = r.cache.set),
            (i = d),
            d(c)
          )),
          (...e) =>
            i(
              ((...e) => {
                let t,
                  r,
                  o = 0,
                  n = "";
                for (; o < e.length; )
                  (t = e[o++]) && (r = h(t)) && (n && (n += " "), (n += r));
                return n;
              })(...e)
            )
        );
      })(() => {
        let e = y("color"),
          t = y("font"),
          r = y("text"),
          o = y("font-weight"),
          n = y("tracking"),
          l = y("leading"),
          a = y("breakpoint"),
          s = y("container"),
          i = y("spacing"),
          d = y("radius"),
          c = y("shadow"),
          u = y("inset-shadow"),
          m = y("text-shadow"),
          p = y("drop-shadow"),
          f = y("blur"),
          b = y("perspective"),
          g = y("aspect"),
          h = y("ease"),
          v = y("animate"),
          w = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          x = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          k = () => [...x(), J, $],
          z = () => ["auto", "hidden", "clip", "visible", "scroll"],
          _ = () => ["auto", "contain", "none"],
          j = () => [J, $, i],
          C = () => [S, "full", "auto", ...j()],
          O = () => [E, "none", "subgrid", J, $],
          A = () => ["auto", { span: ["full", E, J, $] }, E, J, $],
          G = () => [E, "auto", J, $],
          N = () => ["auto", "min", "max", "fr", J, $],
          D = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          eo = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          en = () => ["auto", ...j()],
          el = () => [
            S,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...j(),
          ],
          ea = () => [
            s,
            S,
            "screen",
            "full",
            "dvw",
            "lvw",
            "svw",
            "min",
            "max",
            "fit",
            ...j(),
          ],
          es = () => [
            S,
            "screen",
            "full",
            "lh",
            "dvh",
            "lvh",
            "svh",
            "min",
            "max",
            "fit",
            ...j(),
          ],
          ei = () => [e, J, $],
          ed = () => [...x(), Q, H, { position: [J, $] }],
          ec = () => [
            "no-repeat",
            { repeat: ["", "x", "y", "space", "round"] },
          ],
          eu = () => ["auto", "cover", "contain", Z, L, { size: [J, $] }],
          em = () => [M, Y, F],
          ep = () => ["", "none", "full", d, J, $],
          ef = () => ["", P, Y, F],
          eb = () => ["solid", "dashed", "dotted", "double"],
          eg = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          eh = () => [P, M, Q, H],
          ev = () => ["", "none", f, J, $],
          ey = () => ["none", P, J, $],
          ew = () => ["none", P, J, $],
          ex = () => [P, J, $],
          ek = () => [S, "full", ...j()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [R],
            breakpoint: [R],
            color: [I],
            container: [R],
            "drop-shadow": [R],
            ease: ["in", "out", "in-out"],
            font: [T],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [R],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [R],
            shadow: [R],
            spacing: ["px", P],
            text: [R],
            "text-shadow": [R],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", S, $, J, g] }],
            container: ["container"],
            "container-type": [{ "@container": ["", "normal", "size", J, $] }],
            "container-named": [W],
            columns: [{ columns: [P, "auto", $, J, s] }],
            "break-after": [{ "break-after": w() }],
            "break-before": [{ "break-before": w() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: k() }],
            overflow: [{ overflow: z() }],
            "overflow-x": [{ "overflow-x": z() }],
            "overflow-y": [{ "overflow-y": z() }],
            overscroll: [{ overscroll: _() }],
            "overscroll-x": [{ "overscroll-x": _() }],
            "overscroll-y": [{ "overscroll-y": _() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: C() }],
            "inset-x": [{ "inset-x": C() }],
            "inset-y": [{ "inset-y": C() }],
            start: [{ "inset-s": C(), start: C() }],
            end: [{ "inset-e": C(), end: C() }],
            "inset-bs": [{ "inset-bs": C() }],
            "inset-be": [{ "inset-be": C() }],
            top: [{ top: C() }],
            right: [{ right: C() }],
            bottom: [{ bottom: C() }],
            left: [{ left: C() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [E, "auto", J, $] }],
            basis: [{ basis: [S, "full", "auto", s, ...j()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [P, S, "auto", "initial", "none", $] }],
            grow: [{ grow: ["", P, J, $] }],
            shrink: [{ shrink: ["", P, J, $] }],
            order: [{ order: [E, "first", "last", "none", J, $] }],
            "grid-cols": [{ "grid-cols": O() }],
            "col-start-end": [{ col: A() }],
            "col-start": [{ "col-start": G() }],
            "col-end": [{ "col-end": G() }],
            "grid-rows": [{ "grid-rows": O() }],
            "row-start-end": [{ row: A() }],
            "row-start": [{ "row-start": G() }],
            "row-end": [{ "row-end": G() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": N() }],
            "auto-rows": [{ "auto-rows": N() }],
            gap: [{ gap: j() }],
            "gap-x": [{ "gap-x": j() }],
            "gap-y": [{ "gap-y": j() }],
            "justify-content": [{ justify: [...D(), "normal"] }],
            "justify-items": [{ "justify-items": [...eo(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...eo()] }],
            "align-content": [{ content: ["normal", ...D()] }],
            "align-items": [{ items: [...eo(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...eo(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": D() }],
            "place-items": [{ "place-items": [...eo(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...eo()] }],
            p: [{ p: j() }],
            px: [{ px: j() }],
            py: [{ py: j() }],
            ps: [{ ps: j() }],
            pe: [{ pe: j() }],
            pbs: [{ pbs: j() }],
            pbe: [{ pbe: j() }],
            pt: [{ pt: j() }],
            pr: [{ pr: j() }],
            pb: [{ pb: j() }],
            pl: [{ pl: j() }],
            m: [{ m: en() }],
            mx: [{ mx: en() }],
            my: [{ my: en() }],
            ms: [{ ms: en() }],
            me: [{ me: en() }],
            mbs: [{ mbs: en() }],
            mbe: [{ mbe: en() }],
            mt: [{ mt: en() }],
            mr: [{ mr: en() }],
            mb: [{ mb: en() }],
            ml: [{ ml: en() }],
            "space-x": [{ "space-x": j() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": j() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: el() }],
            "inline-size": [{ inline: ["auto", ...ea()] }],
            "min-inline-size": [{ "min-inline": ["auto", ...ea()] }],
            "max-inline-size": [{ "max-inline": ["none", ...ea()] }],
            "block-size": [{ block: ["auto", ...es()] }],
            "min-block-size": [{ "min-block": ["auto", ...es()] }],
            "max-block-size": [{ "max-block": ["none", ...es()] }],
            w: [{ w: [s, "screen", ...el()] }],
            "min-w": [{ "min-w": [s, "screen", "none", ...el()] }],
            "max-w": [
              {
                "max-w": [
                  s,
                  "screen",
                  "none",
                  "prose",
                  { screen: [a] },
                  ...el(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...el()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...el()] }],
            "max-h": [{ "max-h": ["screen", "lh", "none", ...el()] }],
            "font-size": [{ text: ["base", r, Y, F] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [o, er, q] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  M,
                  $,
                ],
              },
            ],
            "font-family": [{ font: [K, B, t] }],
            "font-features": [{ "font-features": [$] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [n, J, $] }],
            "line-clamp": [{ "line-clamp": [P, "none", J, U] }],
            leading: [{ leading: ["none", l, ...j()] }],
            "list-image": [{ "list-image": ["none", J, $] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", J, $] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: ei() }],
            "text-color": [{ text: ei() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...eb(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [P, "from-font", "auto", J, F] },
            ],
            "text-decoration-color": [{ decoration: ei() }],
            "underline-offset": [{ "underline-offset": [P, "auto", J, $] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: j() }],
            "tab-size": [{ tab: [E, J, $] }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  J,
                  $,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", J, $] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: ed() }],
            "bg-repeat": [{ bg: ec() }],
            "bg-size": [{ bg: eu() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      E,
                      J,
                      $,
                    ],
                    radial: ["", J, $],
                    conic: ["", E, J, $],
                  },
                  ee,
                  V,
                ],
              },
            ],
            "bg-color": [{ bg: ei() }],
            "gradient-from-pos": [{ from: em() }],
            "gradient-via-pos": [{ via: em() }],
            "gradient-to-pos": [{ to: em() }],
            "gradient-from": [{ from: ei() }],
            "gradient-via": [{ via: ei() }],
            "gradient-to": [{ to: ei() }],
            rounded: [{ rounded: ep() }],
            "rounded-s": [{ "rounded-s": ep() }],
            "rounded-e": [{ "rounded-e": ep() }],
            "rounded-t": [{ "rounded-t": ep() }],
            "rounded-r": [{ "rounded-r": ep() }],
            "rounded-b": [{ "rounded-b": ep() }],
            "rounded-l": [{ "rounded-l": ep() }],
            "rounded-ss": [{ "rounded-ss": ep() }],
            "rounded-se": [{ "rounded-se": ep() }],
            "rounded-ee": [{ "rounded-ee": ep() }],
            "rounded-es": [{ "rounded-es": ep() }],
            "rounded-tl": [{ "rounded-tl": ep() }],
            "rounded-tr": [{ "rounded-tr": ep() }],
            "rounded-br": [{ "rounded-br": ep() }],
            "rounded-bl": [{ "rounded-bl": ep() }],
            "border-w": [{ border: ef() }],
            "border-w-x": [{ "border-x": ef() }],
            "border-w-y": [{ "border-y": ef() }],
            "border-w-s": [{ "border-s": ef() }],
            "border-w-e": [{ "border-e": ef() }],
            "border-w-bs": [{ "border-bs": ef() }],
            "border-w-be": [{ "border-be": ef() }],
            "border-w-t": [{ "border-t": ef() }],
            "border-w-r": [{ "border-r": ef() }],
            "border-w-b": [{ "border-b": ef() }],
            "border-w-l": [{ "border-l": ef() }],
            "divide-x": [{ "divide-x": ef() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": ef() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...eb(), "hidden", "none"] }],
            "divide-style": [{ divide: [...eb(), "hidden", "none"] }],
            "border-color": [{ border: ei() }],
            "border-color-x": [{ "border-x": ei() }],
            "border-color-y": [{ "border-y": ei() }],
            "border-color-s": [{ "border-s": ei() }],
            "border-color-e": [{ "border-e": ei() }],
            "border-color-bs": [{ "border-bs": ei() }],
            "border-color-be": [{ "border-be": ei() }],
            "border-color-t": [{ "border-t": ei() }],
            "border-color-r": [{ "border-r": ei() }],
            "border-color-b": [{ "border-b": ei() }],
            "border-color-l": [{ "border-l": ei() }],
            "divide-color": [{ divide: ei() }],
            "outline-style": [{ outline: [...eb(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [P, J, $] }],
            "outline-w": [{ outline: ["", P, Y, F] }],
            "outline-color": [{ outline: ei() }],
            shadow: [{ shadow: ["", "inner", "none", c, et, X] }],
            "shadow-color": [{ shadow: ei() }],
            "inset-shadow": [{ "inset-shadow": ["none", u, et, X] }],
            "inset-shadow-color": [{ "inset-shadow": ei() }],
            "ring-w": [{ ring: ef() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: ei() }],
            "ring-offset-w": [{ "ring-offset": [P, F] }],
            "ring-offset-color": [{ "ring-offset": ei() }],
            "inset-ring-w": [{ "inset-ring": ef() }],
            "inset-ring-color": [{ "inset-ring": ei() }],
            "text-shadow": [{ "text-shadow": ["none", m, et, X] }],
            "text-shadow-color": [{ "text-shadow": ei() }],
            opacity: [{ opacity: [P, J, $] }],
            "mix-blend": [
              { "mix-blend": [...eg(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": eg() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [P] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": eh() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": eh() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": ei() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": ei() }],
            "mask-image-t-from-pos": [{ "mask-t-from": eh() }],
            "mask-image-t-to-pos": [{ "mask-t-to": eh() }],
            "mask-image-t-from-color": [{ "mask-t-from": ei() }],
            "mask-image-t-to-color": [{ "mask-t-to": ei() }],
            "mask-image-r-from-pos": [{ "mask-r-from": eh() }],
            "mask-image-r-to-pos": [{ "mask-r-to": eh() }],
            "mask-image-r-from-color": [{ "mask-r-from": ei() }],
            "mask-image-r-to-color": [{ "mask-r-to": ei() }],
            "mask-image-b-from-pos": [{ "mask-b-from": eh() }],
            "mask-image-b-to-pos": [{ "mask-b-to": eh() }],
            "mask-image-b-from-color": [{ "mask-b-from": ei() }],
            "mask-image-b-to-color": [{ "mask-b-to": ei() }],
            "mask-image-l-from-pos": [{ "mask-l-from": eh() }],
            "mask-image-l-to-pos": [{ "mask-l-to": eh() }],
            "mask-image-l-from-color": [{ "mask-l-from": ei() }],
            "mask-image-l-to-color": [{ "mask-l-to": ei() }],
            "mask-image-x-from-pos": [{ "mask-x-from": eh() }],
            "mask-image-x-to-pos": [{ "mask-x-to": eh() }],
            "mask-image-x-from-color": [{ "mask-x-from": ei() }],
            "mask-image-x-to-color": [{ "mask-x-to": ei() }],
            "mask-image-y-from-pos": [{ "mask-y-from": eh() }],
            "mask-image-y-to-pos": [{ "mask-y-to": eh() }],
            "mask-image-y-from-color": [{ "mask-y-from": ei() }],
            "mask-image-y-to-color": [{ "mask-y-to": ei() }],
            "mask-image-radial": [{ "mask-radial": [J, $] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": eh() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": eh() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": ei() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": ei() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": x() }],
            "mask-image-conic-pos": [{ "mask-conic": [P] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": eh() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": eh() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": ei() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": ei() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: ed() }],
            "mask-repeat": [{ mask: ec() }],
            "mask-size": [{ mask: eu() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", J, $] }],
            filter: [{ filter: ["", "none", J, $] }],
            blur: [{ blur: ev() }],
            brightness: [{ brightness: [P, J, $] }],
            contrast: [{ contrast: [P, J, $] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", p, et, X] }],
            "drop-shadow-color": [{ "drop-shadow": ei() }],
            grayscale: [{ grayscale: ["", P, J, $] }],
            "hue-rotate": [{ "hue-rotate": [P, J, $] }],
            invert: [{ invert: ["", P, J, $] }],
            saturate: [{ saturate: [P, J, $] }],
            sepia: [{ sepia: ["", P, J, $] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", J, $] }],
            "backdrop-blur": [{ "backdrop-blur": ev() }],
            "backdrop-brightness": [{ "backdrop-brightness": [P, J, $] }],
            "backdrop-contrast": [{ "backdrop-contrast": [P, J, $] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", P, J, $] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [P, J, $] }],
            "backdrop-invert": [{ "backdrop-invert": ["", P, J, $] }],
            "backdrop-opacity": [{ "backdrop-opacity": [P, J, $] }],
            "backdrop-saturate": [{ "backdrop-saturate": [P, J, $] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", P, J, $] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": j() }],
            "border-spacing-x": [{ "border-spacing-x": j() }],
            "border-spacing-y": [{ "border-spacing-y": j() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  J,
                  $,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [P, "initial", J, $] }],
            ease: [{ ease: ["linear", "initial", h, J, $] }],
            delay: [{ delay: [P, J, $] }],
            animate: [{ animate: ["none", v, J, $] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [b, J, $] }],
            "perspective-origin": [{ "perspective-origin": k() }],
            rotate: [{ rotate: ey() }],
            "rotate-x": [{ "rotate-x": ey() }],
            "rotate-y": [{ "rotate-y": ey() }],
            "rotate-z": [{ "rotate-z": ey() }],
            scale: [{ scale: ew() }],
            "scale-x": [{ "scale-x": ew() }],
            "scale-y": [{ "scale-y": ew() }],
            "scale-z": [{ "scale-z": ew() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: ex() }],
            "skew-x": [{ "skew-x": ex() }],
            "skew-y": [{ "skew-y": ex() }],
            transform: [{ transform: [J, $, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: k() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: ek() }],
            "translate-x": [{ "translate-x": ek() }],
            "translate-y": [{ "translate-y": ek() }],
            "translate-z": [{ "translate-z": ek() }],
            "translate-none": ["translate-none"],
            zoom: [{ zoom: [E, J, $] }],
            accent: [{ accent: ei() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: ei() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  J,
                  $,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scrollbar-thumb-color": [{ "scrollbar-thumb": ei() }],
            "scrollbar-track-color": [{ "scrollbar-track": ei() }],
            "scrollbar-gutter": [
              { "scrollbar-gutter": ["auto", "stable", "both"] },
            ],
            "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
            "scroll-m": [{ "scroll-m": j() }],
            "scroll-mx": [{ "scroll-mx": j() }],
            "scroll-my": [{ "scroll-my": j() }],
            "scroll-ms": [{ "scroll-ms": j() }],
            "scroll-me": [{ "scroll-me": j() }],
            "scroll-mbs": [{ "scroll-mbs": j() }],
            "scroll-mbe": [{ "scroll-mbe": j() }],
            "scroll-mt": [{ "scroll-mt": j() }],
            "scroll-mr": [{ "scroll-mr": j() }],
            "scroll-mb": [{ "scroll-mb": j() }],
            "scroll-ml": [{ "scroll-ml": j() }],
            "scroll-p": [{ "scroll-p": j() }],
            "scroll-px": [{ "scroll-px": j() }],
            "scroll-py": [{ "scroll-py": j() }],
            "scroll-ps": [{ "scroll-ps": j() }],
            "scroll-pe": [{ "scroll-pe": j() }],
            "scroll-pbs": [{ "scroll-pbs": j() }],
            "scroll-pbe": [{ "scroll-pbe": j() }],
            "scroll-pt": [{ "scroll-pt": j() }],
            "scroll-pr": [{ "scroll-pr": j() }],
            "scroll-pb": [{ "scroll-pb": j() }],
            "scroll-pl": [{ "scroll-pl": j() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  J,
                  $,
                ],
              },
            ],
            fill: [{ fill: ["none", ...ei()] }],
            "stroke-w": [{ stroke: [P, Y, F, U] }],
            stroke: [{ stroke: ["none", ...ei()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            "container-named": ["container-type"],
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "inset-bs",
              "inset-be",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["start", "end", "right", "left"],
            "inset-y": ["inset-bs", "inset-be", "top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["ps", "pe", "pr", "pl"],
            py: ["pbs", "pbe", "pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["ms", "me", "mr", "ml"],
            my: ["mbs", "mbe", "mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-bs",
              "border-w-be",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": [
              "border-w-s",
              "border-w-e",
              "border-w-r",
              "border-w-l",
            ],
            "border-w-y": [
              "border-w-bs",
              "border-w-be",
              "border-w-t",
              "border-w-b",
            ],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-bs",
              "border-color-be",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": [
              "border-color-s",
              "border-color-e",
              "border-color-r",
              "border-color-l",
            ],
            "border-color-y": [
              "border-color-bs",
              "border-color-be",
              "border-color-t",
              "border-color-b",
            ],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mbs",
              "scroll-mbe",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-ms", "scroll-me", "scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pbs",
              "scroll-pbe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-ps", "scroll-pe", "scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          postfixLookupClassGroups: ["container-type"],
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    },
    62898: (e, t) => {
      function r(e) {
        var t;
        let { config: r, src: o, width: n, quality: l } = e,
          a =
            l ||
            (null == (t = r.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return (
          r.path +
          "?url=" +
          encodeURIComponent(o) +
          "&w=" +
          n +
          "&q=" +
          a +
          (o.startsWith("/_next/static/media/"), "")
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }),
        (r.__next_img_default = !0);
      let o = r;
    },
    69772: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let o = r(50625),
        n = o.useLayoutEffect,
        l = o.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function a() {
          if (t && t.mountedInstances) {
            let n = o.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(n, e));
          }
        }
        return (
          n(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          n(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          l(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    97418: (e, t, r) => {
      function o() {
        for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                o,
                n = "";
              if ("string" == typeof t || "number" == typeof t) n += t;
              else if ("object" == typeof t)
                if (Array.isArray(t)) {
                  var l = t.length;
                  for (r = 0; r < l; r++)
                    t[r] && (o = e(t[r])) && (n && (n += " "), (n += o));
                } else for (o in t) t[o] && (n && (n += " "), (n += o));
              return n;
            })(e)) &&
            (o && (o += " "), (o += t));
        return o;
      }
      r.d(t, { $: () => o, A: () => n });
      let n = o;
    },
  },
]);
