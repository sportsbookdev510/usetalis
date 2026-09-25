(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3346],
  {
    2221: (e) => {
      e.exports = {
        style: {
          fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback'",
          fontStyle: "normal",
        },
        className: "__className_6d24ac",
        variable: "__variable_6d24ac",
      };
    },
    16867: (e, t, r) => {
      "use strict";
      r.d(t, { a: () => u });
      var a = r(57887),
        s = "#1A1B1F",
        i = {
          blue: { accentColor: "#3898FF", accentColorForeground: "#FFF" },
          green: { accentColor: "#4BD166", accentColorForeground: s },
          orange: { accentColor: "#FF983D", accentColorForeground: s },
          pink: { accentColor: "#FF7AB8", accentColorForeground: s },
          purple: { accentColor: "#7A70FF", accentColorForeground: "#FFF" },
          red: { accentColor: "#FF6257", accentColorForeground: "#FFF" },
        },
        n = i.blue,
        u = function () {
          let {
            accentColor: e = n.accentColor,
            accentColorForeground: t = n.accentColorForeground,
            ...r
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, a.$)(r),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(255, 255, 255, 0.04)",
              actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
              actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
              closeButton: "rgba(224, 232, 255, 0.6)",
              closeButtonBackground: "rgba(255, 255, 255, 0.08)",
              connectButtonBackground: s,
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
              connectButtonText: "#FFF",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
              error: "#FF494A",
              generalBorder: "rgba(255, 255, 255, 0.08)",
              generalBorderDim: "rgba(255, 255, 255, 0.04)",
              menuItemBackground: "rgba(224, 232, 255, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.5)",
              modalBackground: "#1A1B1F",
              modalBorder: "rgba(255, 255, 255, 0.08)",
              modalText: "#FFF",
              modalTextDim: "rgba(224, 232, 255, 0.3)",
              modalTextSecondary: "rgba(255, 255, 255, 0.6)",
              profileAction: "rgba(224, 232, 255, 0.1)",
              profileActionHover: "rgba(224, 232, 255, 0.2)",
              profileForeground: "rgba(224, 232, 255, 0.05)",
              selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      u.accentColors = i;
    },
    71101: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => f });
      var a = r(39219),
        s = r(63937),
        i = r(21986),
        n = r(14440),
        u = r(71195),
        o = r(2553),
        l = class extends u.Q {
          #e;
          #t;
          #r;
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#e = new Set()),
              (this.#t = new Map()),
              (this.#r = 0);
          }
          build(e, t, r) {
            let a = new o.s({
              client: e,
              mutationCache: this,
              mutationId: ++this.#r,
              options: e.defaultMutationOptions(t),
              state: r,
            });
            return this.add(a), a;
          }
          add(e) {
            this.#e.add(e);
            let t = c(e);
            if ("string" == typeof t) {
              let r = this.#t.get(t);
              r ? r.push(e) : this.#t.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#e.delete(e)) {
              let t = c(e);
              if ("string" == typeof t) {
                let r = this.#t.get(t);
                if (r)
                  if (r.length > 1) {
                    let t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1);
                  } else r[0] === e && this.#t.delete(t);
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = c(e);
            if ("string" != typeof t) return !0;
            {
              let r = this.#t.get(t)?.find((e) => "pending" === e.state.status);
              return !r || r === e;
            }
          }
          runNext(e) {
            let t = c(e);
            return "string" == typeof t
              ? this.#t
                  .get(t)
                  ?.find((t) => t !== e && t.state.isPaused)
                  ?.continue() ?? Promise.resolve()
              : Promise.resolve();
          }
          clear() {
            i.jG.batch(() => {
              this.#e.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#e.clear(),
                this.#t.clear();
            });
          }
          getAll() {
            return Array.from(this.#e);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, a.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, a.nJ)(e, t));
          }
          notify(e) {
            i.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return i.jG.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(a.lQ)))
            );
          }
        };
      function c(e) {
        return e.options.scope?.id;
      }
      var h = r(54870),
        d = class extends u.Q {
          #a;
          constructor(e = {}) {
            super(), (this.config = e), (this.#a = new Map());
          }
          build(e, t, r) {
            let s = t.queryKey,
              i = t.queryHash ?? (0, a.F$)(s, t),
              n = this.get(i);
            return (
              n ||
                ((n = new h.X({
                  client: e,
                  queryKey: s,
                  queryHash: i,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(s),
                })),
                this.add(n)),
              n
            );
          }
          add(e) {
            this.#a.has(e.queryHash) ||
              (this.#a.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            this.#a.get(e.queryHash) === e &&
              (e.destroy(),
              this.#a.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            i.jG.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#a.get(e);
          }
          getAll() {
            return [...this.#a.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, a.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, a.MK)(e, t))
              : t;
          }
          notify(e) {
            i.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            i.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            i.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        f = class {
          #s;
          #i;
          #n;
          #u;
          #o;
          #l;
          #c;
          #h;
          constructor(e = {}) {
            (this.#s = e.queryCache || new d()),
              (this.#i = e.mutationCache || new l()),
              (this.#n = e.defaultOptions || {}),
              (this.#u = new Map()),
              (this.#o = new Map()),
              (this.#l = 0);
          }
          mount() {
            this.#l++,
              1 === this.#l &&
                ((this.#c = s.m.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#s.onFocus());
                })),
                (this.#h = n.t.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#s.onOnline());
                })));
          }
          unmount() {
            this.#l--,
              0 === this.#l &&
                (this.#c?.(),
                (this.#c = void 0),
                this.#h?.(),
                (this.#h = void 0));
          }
          isFetching(e) {
            return this.#s.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#i.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#s.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              r = this.#s.build(this, t),
              s = r.state.data;
            return void 0 === s
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  r.isStaleByTime((0, a.GF)(t.staleTime, r)) &&
                  this.prefetchQuery(t),
                Promise.resolve(s));
          }
          getQueriesData(e) {
            return this.#s
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, r) {
            let s = this.defaultQueryOptions({ queryKey: e }),
              i = this.#s.get(s.queryHash)?.state.data,
              n = (0, a.Zw)(t, i);
            if (void 0 !== n)
              return this.#s.build(this, s).setData(n, { ...r, manual: !0 });
          }
          setQueriesData(e, t, r) {
            return i.jG.batch(() =>
              this.#s
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#s.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#s;
            i.jG.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let r = this.#s;
            return i.jG.batch(() => {
              let a = r.findAll(e),
                s = new Set(a);
              return (
                a.forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries(
                  { type: "active", predicate: (e) => s.has(e) },
                  t
                )
              );
            });
          }
          cancelQueries(e, t = {}) {
            let r = { revert: !0, ...t };
            return Promise.all(
              i.jG.batch(() => this.#s.findAll(e).map((e) => e.cancel(r)))
            )
              .then(a.lQ)
              .catch(a.lQ);
          }
          invalidateQueries(e, t = {}) {
            return i.jG.batch(() =>
              (this.#s.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              e?.refetchType === "none")
                ? Promise.resolve()
                : this.refetchQueries(
                    { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                    t
                  )
            );
          }
          refetchQueries(e, t = {}) {
            let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              i.jG.batch(() =>
                this.#s
                  .findAll(e)
                  .filter((e) => !e.isDisabled() && !e.isStatic())
                  .map((e) => {
                    let t = e.fetch(void 0, r);
                    return (
                      r.throwOnError || (t = t.catch(a.lQ)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(a.lQ);
          }
          async query(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let r = this.#s.build(this, t),
              s = r.isStaleByTime((0, a.GF)(t.staleTime, r))
                ? await r.fetch(t)
                : r.state.data,
              i = t.select;
            return i ? i(s) : s;
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let r = this.#s.build(this, t);
            return r.isStaleByTime((0, a.GF)(t.staleTime, r))
              ? r.fetch(t)
              : Promise.resolve(r.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(a.lQ).catch(a.lQ);
          }
          infiniteQuery(e) {
            return (e._type = "infinite"), this.query(e);
          }
          fetchInfiniteQuery(e) {
            return (e._type = "infinite"), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(a.lQ).catch(a.lQ);
          }
          ensureInfiniteQueryData(e) {
            return (e._type = "infinite"), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return n.t.isOnline()
              ? this.#i.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#s;
          }
          getMutationCache() {
            return this.#i;
          }
          getDefaultOptions() {
            return this.#n;
          }
          setDefaultOptions(e) {
            this.#n = e;
          }
          setQueryDefaults(e, t) {
            this.#u.set((0, a.EN)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#u.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, a.Cp)(e, t.queryKey) && Object.assign(r, t.defaultOptions);
              }),
              r
            );
          }
          setMutationDefaults(e, t) {
            this.#o.set((0, a.EN)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#o.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, a.Cp)(e, t.mutationKey) &&
                  Object.assign(r, t.defaultOptions);
              }),
              r
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#n.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, a.F$)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === a.hT && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#n.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#s.clear(), this.#i.clear();
          }
        };
    },
    80981: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Sans Fallback'",
          fontStyle: "normal",
        },
        className: "__className_14db65",
        variable: "__variable_14db65",
      };
    },
    96547: () => {},
    97418: (e, t, r) => {
      "use strict";
      function a() {
        for (var e, t, r = 0, a = "", s = arguments.length; r < s; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                a,
                s = "";
              if ("string" == typeof t || "number" == typeof t) s += t;
              else if ("object" == typeof t)
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (a = e(t[r])) && (s && (s += " "), (s += a));
                } else for (a in t) t[a] && (s && (s += " "), (s += a));
              return s;
            })(e)) &&
            (a && (a += " "), (a += t));
        return a;
      }
      r.d(t, { $: () => a, A: () => s });
      let s = a;
    },
  },
]);
