"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2976],
  {
    2039: (e, t, n) => {
      function r(e, t) {
        return (
          Object.defineProperty(e, "__recipe__", { value: t, writable: !1 }), e
        );
      }
      function o(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        return r(
          function (e) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return { [t.defaultCondition]: e };
            }
            if (Array.isArray(e)) {
              if (!("responsiveArray" in t))
                throw Error("Responsive arrays are not supported");
              var n = {};
              for (var r in t.responsiveArray)
                null != e[r] && (n[t.responsiveArray[r]] = e[r]);
              return n;
            }
            return e;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createNormalizeValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
      function i(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        var n = o(e);
        return r(
          function (e, r) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return r(e, t.defaultCondition);
            }
            var o = Array.isArray(e) ? n(e) : e,
              i = {};
            for (var a in o) null != o[a] && (i[a] = r(o[a], a));
            return i;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createMapValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
      n.d(t, { q: () => i, f: () => o });
    },
    2131: (e, t, n) => {
      n.d(t, { Y: () => l });
      var r = n(34929),
        o = n(2338),
        i = n(93259),
        a = n(61829);
      async function s(e, t) {
        let n,
          { account: r, connector: s, ...c } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, a.r)(e, { account: r, connector: s })),
          (0, i.T)(
            n,
            o.l,
            "signMessage"
          )({ ...c, ...(r ? { account: r } : {}) })
        );
      }
      var c = n(37762);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          o =
            ((e = (0, c.U)(t)),
            { mutationFn: (t) => s(e, t), mutationKey: ["signMessage"] }),
          { mutate: i, mutateAsync: a, ...l } = (0, r.n)({ ...n, ...o });
        return { ...l, signMessage: i, signMessageAsync: a };
      }
    },
    2338: (e, t, n) => {
      n.d(t, { l: () => a });
      var r = n(71977),
        o = n(58971),
        i = n(71530);
      async function a(e, { account: t = e.account, message: n }) {
        if (!t) throw new o.T({ docsPath: "/docs/actions/wallet/signMessage" });
        let a = (0, r.J)(t);
        if (a.signMessage) return a.signMessage({ message: n });
        let s =
          "string" == typeof n
            ? (0, i.i3)(n)
            : n.raw instanceof Uint8Array
            ? (0, i.nj)(n.raw)
            : n.raw;
        return e.request(
          { method: "personal_sign", params: [s, a.address] },
          { retryCount: 0 }
        );
      }
    },
    2553: (e, t, n) => {
      n.d(t, { $: () => s, s: () => a });
      var r = n(21986),
        o = n(80347),
        i = n(65323),
        a = class extends i.k {
          #e;
          #t;
          #n;
          #r;
          constructor(e) {
            super(),
              (this.#e = e.client),
              (this.mutationId = e.mutationId),
              (this.#n = e.mutationCache),
              (this.#t = []),
              (this.state = e.state || s()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#t.includes(e) ||
              (this.#t.push(e),
              this.clearGcTimeout(),
              this.#n.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#t = this.#t.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#n.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#t.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#n.remove(this));
          }
          continue() {
            return (
              this.#r?.continue() ??
              ("pending" === this.state.status
                ? this.execute(this.state.variables)
                : Promise.resolve())
            );
          }
          async execute(e) {
            let t = () => {
                this.#o({ type: "continue" });
              },
              n = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey,
              },
              r = (this.#r = (0, o.II)({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(e, n)
                    : Promise.reject(Error("No mutationFn found")),
                onFail: (e, t) => {
                  this.#o({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#o({ type: "pause" });
                },
                onContinue: t,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => this.#n.canRun(this),
              })),
              i = "pending" === this.state.status,
              a = !r.canStart();
            try {
              if (i) t();
              else {
                this.#o({ type: "pending", variables: e, isPaused: a }),
                  this.#n.config.onMutate &&
                    (await this.#n.config.onMutate(e, this, n));
                let t = await this.options.onMutate?.(e, n);
                t !== this.state.context &&
                  this.#o({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: a,
                  });
              }
              let o = await r.start();
              return (
                await this.#n.config.onSuccess?.(
                  o,
                  e,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSuccess?.(o, e, this.state.context, n),
                await this.#n.config.onSettled?.(
                  o,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSettled?.(
                  o,
                  null,
                  e,
                  this.state.context,
                  n
                ),
                this.#o({ type: "success", data: o }),
                o
              );
            } catch (t) {
              try {
                await this.#n.config.onError?.(
                  t,
                  e,
                  this.state.context,
                  this,
                  n
                );
              } catch (e) {
                Promise.reject(e);
              }
              try {
                await this.options.onError?.(t, e, this.state.context, n);
              } catch (e) {
                Promise.reject(e);
              }
              try {
                await this.#n.config.onSettled?.(
                  void 0,
                  t,
                  this.state.variables,
                  this.state.context,
                  this,
                  n
                );
              } catch (e) {
                Promise.reject(e);
              }
              try {
                await this.options.onSettled?.(
                  void 0,
                  t,
                  e,
                  this.state.context,
                  n
                );
              } catch (e) {
                Promise.reject(e);
              }
              throw (this.#o({ type: "error", error: t }), t);
            } finally {
              this.#r === r && (this.#r = void 0), this.#n.runNext(this);
            }
          }
          #o(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              r.jG.batch(() => {
                this.#t.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#n.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function s() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    5181: (e, t, n) => {
      n.d(t, { I_: () => o, Zi: () => i, xO: () => s });
      var r = n(39219);
      function o(e, t) {
        return (0, r.BH)(e, t);
      }
      function i(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!a(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let n = t.prototype;
            return !!a(n) && !!n.hasOwnProperty("isPrototypeOf");
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
        );
      }
      function a(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function s(e) {
        let {
          _defaulted: t,
          behavior: n,
          gcTime: r,
          initialData: o,
          initialDataUpdatedAt: i,
          maxPages: a,
          meta: s,
          networkMode: c,
          queryFn: l,
          queryHash: u,
          queryKey: d,
          queryKeyHashFn: p,
          retry: h,
          retryDelay: f,
          structuralSharing: w,
          getPreviousPageParam: m,
          getNextPageParam: g,
          initialPageParam: b,
          _optimisticResults: y,
          enabled: A,
          notifyOnChangeProps: v,
          placeholderData: C,
          refetchInterval: x,
          refetchIntervalInBackground: k,
          refetchOnMount: I,
          refetchOnReconnect: E,
          refetchOnWindowFocus: B,
          retryOnMount: S,
          select: M,
          staleTime: O,
          suspense: P,
          throwOnError: W,
          config: D,
          connector: Q,
          query: U,
          ...R
        } = e;
        return R;
      }
    },
    5653: (e, t, n) => {
      n.d(t, { o: () => c, q: () => s });
      var r = n(35893),
        o = n(11294);
      function i(e) {
        let t = "undefined" != typeof window ? window : void 0;
        if (void 0 === t || void 0 === t.ethereum) return;
        let n = t.ethereum.providers;
        return n ? n.find((t) => t[e]) : t.ethereum[e] ? t.ethereum : void 0;
      }
      function a(e) {
        let t = (e, n) => {
          let [r, ...o] = n.split("."),
            i = e[r];
          if (i) return 0 === o.length ? i : t(i, o.join("."));
        };
        if ("undefined" != typeof window) return t(window, e);
      }
      function s(e) {
        let { flag: t, namespace: n } = e;
        return (!!n && void 0 !== a(n)) || (!!t && void 0 !== i(t));
      }
      function c(e) {
        var t;
        let { flag: n, namespace: s, target: c } = e;
        return (
          (t =
            c ||
            (function (e) {
              var t;
              let { flag: n, namespace: r } = e,
                o = "undefined" != typeof window ? window : void 0;
              if (void 0 === o) return;
              if (r) {
                let e = a(r);
                if (e) return e;
              }
              let s = null == (t = o.ethereum) ? void 0 : t.providers;
              if (n) {
                let e = i(n);
                if (e) return e;
              }
              if (!r && !n)
                return void 0 !== s && s.length > 0 ? s[0] : o.ethereum;
            })({ flag: n, namespace: s })),
          (e) => {
            let n = t
              ? {
                  target: () => ({
                    id: e.rkDetails.id,
                    name: e.rkDetails.name,
                    provider: t,
                  }),
                }
              : {};
            return (0, r.U)((t) => ({ ...(0, o.b)(n)(t), ...e }));
          }
        );
      }
    },
    7459: (e, t, n) => {
      n.d(t, { R: () => s, x: () => c });
      var r = n(50625);
      let o = !1;
      async function i(e, t = {}) {
        let n;
        if (o) return [];
        (o = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let r = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              r.push(t);
          }
        else r.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let a = {};
        for (let [, t] of e.state.connections) a[t.connector.id] = 1;
        n && (a[n] = 0);
        let s =
            Object.keys(a).length > 0
              ? [...r].sort((e, t) => (a[e.id] ?? 10) - (a[t.id] ?? 10))
              : r,
          c = !1,
          l = [],
          u = [];
        for (let t of s) {
          let n = await t.getProvider().catch(() => void 0);
          if (!n || u.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(c ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: c ? e.current : t.uid, connections: n };
            }),
            l.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            u.push(n),
            (c = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (c
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (o = !1),
          l
        );
      }
      function a(e) {
        let {
            children: t,
            config: n,
            initialState: o,
            reconnectOnMount: a = !0,
          } = e,
          { onMount: s } = (function (e, t) {
            let { initialState: n, reconnectOnMount: r } = t;
            return (
              n &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...n,
                  chainId: e.chains.some((e) => e.id === n.chainId)
                    ? n.chainId
                    : e.chains[0].id,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        let n = new Set();
                        for (let e of t ?? [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              n.add(t);
                        let r = [];
                        for (let t of e._internal.mipd?.getProviders() ?? []) {
                          if (n.has(t.info.rdns)) continue;
                          let o =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            i = e._internal.connectors.setup(o);
                          r.push(i);
                        }
                        return [...t, ...r];
                      })),
                    r
                      ? i(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: o, reconnectOnMount: a });
        n._internal.ssr || s();
        let c = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (c.current && n._internal.ssr)
              return (
                s(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let s = (0, r.createContext)(void 0);
      function c(e) {
        let { children: t, config: n } = e;
        return (0, r.createElement)(
          a,
          e,
          (0, r.createElement)(s.Provider, { value: n }, t)
        );
      }
    },
    7484: (e, t, n) => {
      n.d(t, { Z: () => c });
      var r = n(35893),
        o = n(54792),
        i = n(31205),
        a = "undefined" == typeof window,
        s = new Map();
      function c(e) {
        let { projectId: t, walletConnectParameters: n } = e;
        if (!t || "" === t)
          throw Error(
            "No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure"
          );
        return (
          "YOUR_PROJECT_ID" === t && (t = "21fef48091f12692cad574a6f7753643"),
          (e) =>
            (function (e) {
              let {
                projectId: t,
                walletDetails: n,
                walletConnectParameters: c,
              } = e;
              return (0, r.U)((e) => ({
                ...((e) => {
                  let {
                    projectId: t,
                    walletConnectParameters: n,
                    rkDetailsShowQrModal: r,
                    rkDetailsIsWalletConnectModalConnector: c,
                  } = e;
                  if (a)
                    return (0, o.P)({
                      accounts: ["0x0000000000000000000000000000000000000000"],
                    });
                  let l = {
                    telemetryEnabled: !1,
                    ...(n || {}),
                    projectId: t,
                    showQrModal: !1,
                  };
                  r && (l = { ...l, showQrModal: !0 }),
                    "customStoragePrefix" in l ||
                      (l = {
                        ...l,
                        customStoragePrefix: c ? "clientOne" : "clientTwo",
                      });
                  let u = JSON.stringify(l),
                    d = s.get(u);
                  if (d) return d;
                  let p = (0, i.u)(l);
                  return s.set(u, p), p;
                })({
                  projectId: t,
                  walletConnectParameters: c,
                  rkDetailsShowQrModal: n.rkDetails.showQrModal,
                  rkDetailsIsWalletConnectModalConnector:
                    n.rkDetails.isWalletConnectModalConnector,
                })(e),
                ...n,
              }));
            })({ projectId: t, walletDetails: e, walletConnectParameters: n })
        );
      }
    },
    7733: (e, t, n) => {
      n.d(t, { b: () => r });
      var r = n(49514);
    },
    8268: (e, t, n) => {
      n.d(t, { e: () => a });
      var r = n(89764),
        o = n(23220),
        i = n(37762);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, i.U)(e);
        return (0, o.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => (0, r.B)(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => (0, r.B)(t, e),
          () => (0, r.B)(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    8825: (e, t, n) => {
      n.d(t, { R: () => r });
      function r(e) {
        let { chain: t } = e,
          n = t.rpcUrls.default.http[0];
        if (!e.transports) return [n];
        let r = e.transports?.[t.id]?.({ chain: t });
        return (r?.value?.transports || [r]).map(({ value: e }) => e?.url || n);
      }
    },
    10830: (e, t, n) => {
      e.exports = n(43653);
    },
    11294: (e, t, n) => {
      n.d(t, { b: () => d });
      var r = n(7407),
        o = n(42959),
        i = n(57299),
        a = n(95978),
        s = n(71530),
        c = n(63197),
        l = n(92054),
        u = n(35893);
      function d(e = {}) {
        let t,
          n,
          f,
          w,
          { shimDisconnect: m = !0, unstable_shimAsyncInject: g } = e;
        function b() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(p[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, u.U)((u) => ({
          get icon() {
            return b().icon;
          },
          get id() {
            return b().id;
          },
          get name() {
            return b().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: d.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (f || ((f = this.onConnect.bind(this)), n.on("connect", f)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({
            chainId: i,
            isReconnecting: a,
            withCapabilities: s,
          } = {}) {
            let c = await this.getProvider();
            if (!c) throw new l.N();
            let d = [];
            if (a) d = await this.getAccounts().catch(() => []);
            else if (m)
              try {
                let e = await c.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (d = e[0]?.caveats?.[0]?.value?.map((e) => (0, r.b)(e)))
                  .length > 0 && (d = await this.getAccounts());
              } catch (e) {
                if (e.code === o.vx.code) throw new o.vx(e);
                if (e.code === o.qZ.code) throw e;
              }
            try {
              d?.length ||
                a ||
                (d = (await c.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, r.b)(e)
                )),
                f && (c.removeListener("connect", f), (f = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  c.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  c.on("chainChanged", n)),
                w ||
                  ((w = this.onDisconnect.bind(this)), c.on("disconnect", w));
              let l = await this.getChainId();
              if (i && l !== i) {
                let e = await this.switchChain({ chainId: i }).catch((e) => {
                  if (e.code === o.vx.code) throw e;
                  return { id: l };
                });
                l = e?.id ?? l;
              }
              return (
                m && (await u.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await u.storage?.setItem("injected.connected", !0)),
                {
                  accounts: s
                    ? d.map((e) => ({ address: e, capabilities: {} }))
                    : d,
                  chainId: l,
                }
              );
            } catch (e) {
              if (e.code === o.vx.code) throw new o.vx(e);
              if (e.code === o.qZ.code) throw new o.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new l.N();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              w && (t.removeListener("disconnect", w), (w = void 0)),
              f || ((f = this.onConnect.bind(this)), t.on("connect", f));
            try {
              await (0, i.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            m && (await u.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await u.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, r.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = b();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? h(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (m && (await u.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await u.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== g && !1 !== g) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof g ? g : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new l.N();
              }
              return !!(await (0, a.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new l.N();
            let r = u.chains.find((e) => e.id === t);
            if (!r) throw new o.ch(new c.nk());
            let i = new Promise((e) => {
              let n = (r) => {
                "chainId" in r &&
                  r.chainId === t &&
                  (u.emitter.off("change", n), e());
              };
              u.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        u.emitter.emit("change", { chainId: t });
                    }),
                  i,
                ]),
                r
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a,
                    c,
                    { default: l, ...d } = r.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : l && (a = [l.url, ...Object.values(d).map((e) => e.url)]),
                    (c = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [r.rpcUrls.default?.http[0] ?? ""]);
                  let p = {
                    blockExplorerUrls: a,
                    chainId: (0, s.cK)(t),
                    chainName: e?.chainName ?? r.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                    rpcUrls: c,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [p],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            u.emitter.emit("change", { chainId: t });
                          else
                            throw new o.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      i,
                    ]),
                    r
                  );
                } catch (e) {
                  throw new o.vx(e);
                }
              if (a.code === o.vx.code) throw new o.vx(a);
              throw new o.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (u.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                m && (await u.storage?.removeItem(`${this.id}.disconnected`));
            } else
              u.emitter.emit("change", { accounts: e.map((e) => (0, r.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            u.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let r = await this.getAccounts();
            if (0 === r.length) return;
            let o = Number(e.chainId);
            u.emitter.emit("connect", { accounts: r, chainId: o });
            let i = await this.getProvider();
            i &&
              (f && (i.removeListener("connect", f), (f = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                i.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), i.on("chainChanged", n)),
              w || ((w = this.onDisconnect.bind(this)), i.on("disconnect", w)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (u.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                w && (t.removeListener("disconnect", w), (w = void 0)),
                f || ((f = this.onConnect.bind(this)), t.on("connect", f))));
          },
        }));
      }
      d.type = "injected";
      let p = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : h(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            h(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : h(e, "isPhantom"),
        },
      };
      function h(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let r = e.ethereum;
        return r?.providers
          ? r.providers.find((e) => n(e))
          : r && n(r)
          ? r
          : void 0;
      }
    },
    12814: (e, t, n) => {
      n.d(t, { e: () => l });
      var r = n(34929),
        o = n(34325),
        i = n(50625),
        a = n(37762);
      let s = [];
      function c(e) {
        let t = e.connectors;
        return s.length === t.length && s.every((e, n) => e === t[n])
          ? s
          : ((s = t), t);
      }
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, a.U)(e),
          s = { mutationFn: (e) => (0, o.N)(n, e), mutationKey: ["connect"] },
          { mutate: l, mutateAsync: u, ...d } = (0, r.n)({ ...t, ...s });
        return (
          (0, i.useEffect)(
            () =>
              n.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && d.reset();
                }
              ),
            [n, d.reset]
          ),
          {
            ...d,
            connect: l,
            connectAsync: u,
            connectors: (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = (0, a.U)(e);
              return (0, i.useSyncExternalStore)(
                (e) =>
                  (function (e, t) {
                    let { onChange: n } = t;
                    return e._internal.connectors.subscribe((e, t) => {
                      n(Object.values(e), t);
                    });
                  })(t, { onChange: e }),
                () => c(t),
                () => c(t)
              );
            })({ config: n }),
          }
        );
      }
    },
    13987: (e, t, n) => {
      n.d(t, { d: () => s });
      var r = n(18510),
        o = n(7484),
        i = n(35893),
        a = n(35369),
        s = (e) => {
          let { projectId: t, walletConnectParameters: c } = e,
            { ...l } = s,
            u =
              "undefined" != typeof window &&
              (function (e) {
                return (
                  !!(null == e ? void 0 : e.isMetaMask) &&
                  (!e.isBraveWallet || !!e._events || !!e._state) &&
                  !e.isApexWallet &&
                  !e.isAvalanche &&
                  !e.isBackpack &&
                  !e.isBifrost &&
                  !e.isBitKeep &&
                  !e.isBitski &&
                  !e.isBinance &&
                  !e.isBlockWallet &&
                  !e.isCoinbaseWallet &&
                  !e.isDawn &&
                  !e.isEnkrypt &&
                  !e.isExodus &&
                  !e.isFrame &&
                  !e.isFrontier &&
                  !e.isGamestop &&
                  !e.isHyperPay &&
                  !e.isImToken &&
                  !e.isKuCoinWallet &&
                  !e.isMathWallet &&
                  !e.isNestWallet &&
                  !e.isOkxWallet &&
                  !e.isOKExWallet &&
                  !e.isOneInchIOSWallet &&
                  !e.isOneInchAndroidWallet &&
                  !e.isOpera &&
                  !e.isPhantom &&
                  !e.isZilPay &&
                  !e.isPortal &&
                  !e.isxPortal &&
                  !e.isRabby &&
                  !e.isRainbow &&
                  !e.isStatus &&
                  !e.isTalisman &&
                  !e.isTally &&
                  !e.isTokenPocket &&
                  !e.isTokenary &&
                  !e.isTrust &&
                  !e.isTrustWallet &&
                  !e.isCTRL &&
                  !e.isZeal &&
                  !e.isCoin98 &&
                  !e.isMEWwallet &&
                  !e.isSafeheron &&
                  !e.isSafePal &&
                  !e.isWigwam &&
                  !e.isZerion &&
                  !e.__seif &&
                  !0
                );
              })(window.ethereum),
            d = !u && !(0, r.Fr)(),
            p = u || (0, r.Fr)();
          return {
            id: "metaMask",
            name: "MetaMask",
            rdns: "io.metamask",
            iconUrl: async () =>
              (await n.e(5197).then(n.bind(n, 35197))).default,
            iconAccent: "#f6851a",
            iconBackground: "#fff",
            installed: u || void 0,
            downloadUrls: {
              android:
                "https://play.google.com/store/apps/details?id=io.metamask",
              ios: "https://apps.apple.com/us/app/metamask/id1438144202",
              mobile: "https://metamask.io/download",
              qrCode: "https://metamask.io/download",
              chrome:
                "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
              edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",
              firefox:
                "https://addons.mozilla.org/firefox/addon/ether-metamask",
              opera: "https://addons.opera.com/extensions/details/metamask-10",
              browserExtension: "https://metamask.io/download",
            },
            mobile: { getUri: p ? (e) => e : void 0 },
            qrCode: d
              ? {
                  getUri: (e) =>
                    "https://metamask.app.link/wc?uri=".concat(
                      encodeURIComponent(e)
                    ),
                  instructions: {
                    learnMoreUrl: "https://metamask.io/faqs/",
                    steps: [
                      {
                        description:
                          "wallet_connectors.metamask.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.metamask.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.metamask.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.metamask.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.metamask.qr_code.step3.description",
                        step: "refresh",
                        title: "wallet_connectors.metamask.qr_code.step3.title",
                      },
                    ],
                  },
                }
              : void 0,
            extension: {
              instructions: {
                learnMoreUrl: "https://metamask.io/faqs/",
                steps: [
                  {
                    description:
                      "wallet_connectors.metamask.extension.step1.description",
                    step: "install",
                    title: "wallet_connectors.metamask.extension.step1.title",
                  },
                  {
                    description:
                      "wallet_connectors.metamask.extension.step2.description",
                    step: "create",
                    title: "wallet_connectors.metamask.extension.step2.title",
                  },
                  {
                    description:
                      "wallet_connectors.metamask.extension.step3.description",
                    step: "refresh",
                    title: "wallet_connectors.metamask.extension.step3.title",
                  },
                ],
              },
            },
            createConnector: d
              ? (0, o.Z)({ projectId: t, walletConnectParameters: c })
              : (e) =>
                  (0, i.U)((t) => {
                    var n, r, o;
                    let i = (0, a.e)({
                      dappMetadata: {
                        connector: "rainbowkit",
                        name:
                          null == c || null == (n = c.metadata)
                            ? void 0
                            : n.name,
                        iconUrl:
                          null == c || null == (r = c.metadata)
                            ? void 0
                            : r.icons[0],
                        url:
                          null == c || null == (o = c.metadata)
                            ? void 0
                            : o.url,
                      },
                      headless: !0,
                      checkInstallationImmediately: !1,
                      enableAnalytics: !1,
                      ...l,
                    })(t);
                    return {
                      ...i,
                      ...e,
                      getChainId: async () => {
                        try {
                          return await i.getChainId();
                        } catch (r) {
                          var e, n;
                          return null !=
                            (n = null == (e = t.chains[0]) ? void 0 : e.id)
                            ? n
                            : 1;
                        }
                      },
                    };
                  }),
          };
        };
    },
    15326: (e, t, n) => {
      var r = n(50625),
        o = n(10830),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = o.useSyncExternalStore,
        s = r.useRef,
        c = r.useEffect,
        l = r.useMemo,
        u = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
        var d = s(null);
        if (null === d.current) {
          var p = { hasValue: !1, value: null };
          d.current = p;
        } else p = d.current;
        var h = a(
          e,
          (d = l(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (a = e), (e = r(e)), void 0 !== o && p.hasValue)
                  ) {
                    var t = p.value;
                    if (o(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), i(a, e))) return t;
                var n = r(e);
                return void 0 !== o && o(t, n)
                  ? ((a = e), t)
                  : ((a = e), (s = n));
              }
              var a,
                s,
                c = !1,
                l = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === l
                  ? void 0
                  : function () {
                      return e(l());
                    },
              ];
            },
            [t, n, r, o]
          ))[0],
          d[1]
        );
        return (
          c(
            function () {
              (p.hasValue = !0), (p.value = h);
            },
            [h]
          ),
          u(h),
          h
        );
      };
    },
    16297: (e, t, n) => {
      n.d(t, { U: () => a });
      var r = n(23311),
        o = n(50625),
        i = n(37762);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: n } = e,
          a = (0, i.U)(e);
        (0, o.useEffect)(
          () =>
            (0, r.F)(a, {
              onChange(e, r) {
                if (
                  ("reconnecting" === r.status ||
                    ("connecting" === r.status && void 0 === r.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: n,
                      addresses: o,
                      chain: i,
                      chainId: a,
                      connector: s,
                    } = e,
                    c = "reconnecting" === r.status || void 0 === r.status;
                  null == t ||
                    t({
                      address: n,
                      addresses: o,
                      chain: i,
                      chainId: a,
                      connector: s,
                      isReconnected: c,
                    });
                } else
                  "connected" === r.status &&
                    "disconnected" === e.status &&
                    (null == n || n());
              },
            }),
          [a, t, n]
        );
      }
    },
    18510: (e, t, n) => {
      function r() {
        return (
          "undefined" != typeof navigator &&
          /android/i.test(navigator.userAgent)
        );
      }
      function o() {
        return (
          ("undefined" != typeof navigator &&
            /iPhone|iPod/.test(navigator.userAgent)) ||
          ("undefined" != typeof navigator &&
            (/iPad/.test(navigator.userAgent) ||
              ("MacIntel" === navigator.platform &&
                navigator.maxTouchPoints > 1)))
        );
      }
      function i() {
        return r() || o();
      }
      n.d(t, { Fr: () => i, m0: () => r, un: () => o });
    },
    19955: (e, t, n) => {
      n.d(t, { I: () => o });
      var r = n(62095);
      function o(e, t = {}) {
        let {
          key: n = "custom",
          methods: i,
          name: a = "Custom Provider",
          retryDelay: s,
        } = t;
        return ({ retryCount: o }) =>
          (0, r.o)({
            key: n,
            methods: i,
            name: a,
            request: e.request.bind(e),
            retryCount: t.retryCount ?? o,
            retryDelay: s,
            type: "custom",
          });
      }
    },
    23220: (e, t, n) => {
      e.exports = n(15326);
    },
    23311: (e, t, n) => {
      n.d(t, { F: () => i });
      var r = n(52835),
        o = n(63402);
      function i(e, t) {
        let { onChange: n } = t;
        return e.subscribe(() => (0, o.s)(e), n, {
          equalityFn(e, t) {
            let { connector: n, ...o } = e,
              { connector: i, ...a } = t;
            return (0, r.b)(o, a) && n?.id === i?.id && n?.uid === i?.uid;
          },
        });
      }
    },
    30823: (e, t, n) => {
      n.d(t, { r: () => d });
      var r = n(60561),
        o = n(17875),
        i = n(71209),
        a = n(25717),
        s = n(93259);
      let c = { ether: -18, gwei: -9 };
      function l(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(c[e]);
      }
      var u = n(95192);
      async function d(e, t) {
        let {
          address: n,
          blockNumber: c,
          blockTag: u,
          chainId: d,
          token: h,
          unit: f = "ether",
        } = t;
        if (h)
          try {
            return await p(e, {
              balanceAddress: n,
              chainId: d,
              symbolType: "string",
              tokenAddress: h,
            });
          } catch (t) {
            if ("ContractFunctionExecutionError" === t.name) {
              let t = await p(e, {
                  balanceAddress: n,
                  chainId: d,
                  symbolType: "bytes32",
                  tokenAddress: h,
                }),
                i = (0, r.IQ)((0, o.B)(t.symbol, { dir: "right" }));
              return { ...t, symbol: i };
            }
            throw t;
          }
        let w = e.getClient({ chainId: d }),
          m = (0, s.T)(w, a.r, "getBalance"),
          g = await m(
            c ? { address: n, blockNumber: c } : { address: n, blockTag: u }
          ),
          b = e.chains.find((e) => e.id === d) ?? w.chain;
        return {
          decimals: b.nativeCurrency.decimals,
          formatted: (0, i.J)(g, l(f)),
          symbol: b.nativeCurrency.symbol,
          value: g,
        };
      }
      async function p(e, t) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: o,
            tokenAddress: a,
            unit: s,
          } = t,
          c = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: o }],
              },
            ],
            address: a,
          },
          [d, p, h] = await (0, u.I)(e, {
            allowFailure: !1,
            contracts: [
              { ...c, functionName: "balanceOf", args: [n], chainId: r },
              { ...c, functionName: "decimals", chainId: r },
              { ...c, functionName: "symbol", chainId: r },
            ],
          }),
          f = (0, i.J)(d ?? "0", l(s ?? p));
        return { decimals: p, formatted: f, symbol: h, value: d };
      }
    },
    31205: (e, t, n) => {
      n.d(t, { u: () => u });
      var r = n(35893),
        o = n(92054),
        i = n(8825),
        a = n(63197),
        s = n(7407),
        c = n(42959),
        l = n(71530);
      function u(e) {
        let t,
          d,
          p,
          h,
          f,
          w,
          m,
          g,
          b = e.isNewChainsStale ?? !0;
        return (0, r.U)((r) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: u.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (f || ((f = this.onConnect.bind(this)), e.on("connect", f)),
              m ||
                ((m = this.onSessionDelete.bind(this)),
                e.on("session_delete", m)));
          },
          async connect({ chainId: e, withCapabilities: t, ...n } = {}) {
            try {
              let i = await this.getProvider();
              if (!i) throw new o.N();
              w || ((w = this.onDisplayUri), i.on("display_uri", w));
              let a = e;
              if (!a) {
                let e = (await r.storage?.getItem("state")) ?? {};
                a = r.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : r.chains[0]?.id;
              }
              if (!a) throw Error("No chains found on connector.");
              let l = await this.isChainsStale();
              if ((i.session && l && (await i.disconnect()), !i.session || l)) {
                let e = r.chains.filter((e) => e.id !== a).map((e) => e.id);
                await i.connect({
                  optionalChains: [a, ...e],
                  ...("pairingTopic" in n
                    ? { pairingTopic: n.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(r.chains.map((e) => e.id));
              }
              let u = (await i.enable()).map((e) => (0, s.b)(e)),
                d = await this.getChainId();
              if (e && d !== e) {
                let t = await this.switchChain({ chainId: e }).catch((e) => {
                  if (
                    e.code === c.vx.code &&
                    e.cause?.message !==
                      "Missing or invalid. request() method: wallet_addEthereumChain"
                  )
                    throw e;
                  return { id: d };
                });
                d = t?.id ?? d;
              }
              return (
                w && (i.removeListener("display_uri", w), (w = void 0)),
                f && (i.removeListener("connect", f), (f = void 0)),
                p ||
                  ((p = this.onAccountsChanged.bind(this)),
                  i.on("accountsChanged", p)),
                h ||
                  ((h = this.onChainChanged.bind(this)),
                  i.on("chainChanged", h)),
                g ||
                  ((g = this.onDisconnect.bind(this)), i.on("disconnect", g)),
                m ||
                  ((m = this.onSessionDelete.bind(this)),
                  i.on("session_delete", m)),
                {
                  accounts: t
                    ? u.map((e) => ({ address: e, capabilities: {} }))
                    : u,
                  chainId: d,
                }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new c.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              h && (e?.removeListener("chainChanged", h), (h = void 0)),
                g && (e?.removeListener("disconnect", g), (g = void 0)),
                f || ((f = this.onConnect.bind(this)), e?.on("connect", f)),
                p && (e?.removeListener("accountsChanged", p), (p = void 0)),
                m && (e?.removeListener("session_delete", m), (m = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, s.b)(e));
          },
          async getProvider({ chainId: o } = {}) {
            async function a() {
              let t = r.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: o } = await Promise.all([
                n.e(1067),
                n.e(3410),
              ]).then(n.bind(n, 63410));
              return await o.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  r.chains.map((e) => {
                    let [t] = (0, i.R)({ chain: e, transports: r.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (d || (d = a()),
                (t = await d),
                t?.events.setMaxListeners(1 / 0)),
              o && (await this.switchChain?.({ chainId: o })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new o.N();
            let i = r.chains.find((e) => e.id === t);
            if (!i) throw new c.ch(new a.nk());
            try {
              await Promise.all([
                new Promise((e) => {
                  let n = ({ chainId: o }) => {
                    o === t && (r.emitter.off("change", n), e());
                  };
                  r.emitter.on("change", n);
                }),
                n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, l.cK)(t) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, t]), i;
            } catch (r) {
              if (/(user rejected)/i.test(r.message)) throw new c.vx(r);
              try {
                let r, o;
                (r = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : i.blockExplorers?.default.url
                  ? [i.blockExplorers?.default.url]
                  : []),
                  (o = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...i.rpcUrls.default.http]);
                let a = {
                  blockExplorerUrls: r,
                  chainId: (0, l.cK)(t),
                  chainName: e?.chainName ?? i.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                  rpcUrls: o,
                };
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [a],
                });
                let s = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...s, t]), i;
              } catch (e) {
                throw new c.vx(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : r.emitter.emit("change", {
                  accounts: e.map((e) => (0, s.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              n = await this.getAccounts();
            r.emitter.emit("connect", { accounts: n, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
            let t = await this.getProvider();
            p && (t.removeListener("accountsChanged", p), (p = void 0)),
              h && (t.removeListener("chainChanged", h), (h = void 0)),
              g && (t.removeListener("disconnect", g), (g = void 0)),
              m && (t.removeListener("session_delete", m), (m = void 0)),
              f || ((f = this.onConnect.bind(this)), t.on("connect", f));
          },
          onDisplayUri(e) {
            r.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces.eip155?.accounts?.map((e) =>
                  Number.parseInt(e.split(":")[1] || "", 10)
                ) ?? []
              : [],
          async getRequestedChainsIds() {
            return (
              (await r.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (!b) return !1;
            let e = r.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let n = await this.getRequestedChainsIds();
            return !e.every((e) => n.includes(e));
          },
          async setRequestedChainsIds(e) {
            await r.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      u.type = "walletConnect";
    },
    32916: (e, t, n) => {
      n.d(t, { F: () => u });
      var r = n(23311),
        o = n(63402),
        i = n(37762),
        a = n(52835),
        s = n(50625),
        c = n(23220);
      let l = (e) => "object" == typeof e && !Array.isArray(e);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, i.U)(e);
        return (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.b,
            o = (0, s.useRef)([]),
            i = (0, c.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (l(e) && l(t) && o.current.length) {
                  for (let n of o.current) if (!r(e[n], t[n])) return !1;
                  return !0;
                }
                return r(e, t);
              }
            );
          return (0, s.useMemo)(() => {
            if (l(i)) {
              let e = { ...i },
                t = {};
              for (let [n, r] of Object.entries(e))
                t = {
                  ...t,
                  [n]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (o.current.includes(n) || o.current.push(n), r),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return i;
          }, [i]);
        })(
          (e) => (0, r.F)(t, { onChange: e }),
          () => (0, o.s)(t)
        );
      }
    },
    34325: (e, t, n) => {
      n.d(t, { N: () => o });
      var r = n(63197);
      async function o(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new r.nM();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let { connector: r, ...o } = t,
            i = await n.connect(o);
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: o.withCapabilities
                  ? i.accounts.map((e) =>
                      "object" == typeof e ? e.address : e
                    )
                  : i.accounts,
                chainId: i.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            {
              accounts: o.withCapabilities
                ? i.accounts.map((e) =>
                    "object" == typeof e ? e : { address: e, capabilities: {} }
                  )
                : i.accounts,
              chainId: i.chainId,
            }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
    },
    34929: (e, t, n) => {
      n.d(t, { n: () => u });
      var r = n(34201),
        o = n(50625),
        i = n(39219),
        a = n(71195),
        s = n(21986),
        c = n(2553),
        l = class extends a.Q {
          #e;
          #i = void 0;
          #a;
          #s;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#c();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, i.f8)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#a,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, i.EN)(t.mutationKey) !== (0, i.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#a?.state.status === "pending" &&
                  this.#a.setOptions(this.options);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#a &&
              (this.#a.addObserver(this), this.#c());
          }
          onUnsubscribe() {
            this.hasListeners() || this.#a?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#c(), this.#l(e);
          }
          getCurrentResult() {
            return this.#i;
          }
          reset() {
            this.#a?.removeObserver(this),
              (this.#a = void 0),
              this.#c(),
              this.#l();
          }
          mutate(e, t) {
            return (
              (this.#s = t),
              this.#a?.removeObserver(this),
              (this.#a = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#a.addObserver(this),
              this.#a.execute(e)
            );
          }
          #c() {
            let e = this.#a?.state ?? (0, c.$)();
            this.#i = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #l(e) {
            s.jG.batch(() => {
              if (this.#s && this.hasListeners()) {
                let t = this.#i.variables,
                  n = this.#i.context,
                  r = {
                    client: this.#e,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey,
                  };
                if (e?.type === "success") {
                  try {
                    this.#s.onSuccess?.(e.data, t, n, r);
                  } catch (e) {
                    Promise.reject(e);
                  }
                  try {
                    this.#s.onSettled?.(e.data, null, t, n, r);
                  } catch (e) {
                    Promise.reject(e);
                  }
                } else if (e?.type === "error") {
                  try {
                    this.#s.onError?.(e.error, t, n, r);
                  } catch (e) {
                    Promise.reject(e);
                  }
                  try {
                    this.#s.onSettled?.(void 0, e.error, t, n, r);
                  } catch (e) {
                    Promise.reject(e);
                  }
                }
              }
              this.listeners.forEach((e) => {
                e(this.#i);
              });
            });
          }
        };
      function u(e, t) {
        let n = (0, r.jE)(t),
          [a] = o.useState(() => new l(n, e));
        o.useEffect(() => {
          a.setOptions(e);
        }, [a, e]);
        let c = o.useSyncExternalStore(
            o.useCallback((e) => a.subscribe(s.jG.batchCalls(e)), [a]),
            () => a.getCurrentResult(),
            () => a.getCurrentResult()
          ),
          u = o.useCallback(
            function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              a.mutate(t[0], t[1]).catch(i.lQ);
            },
            [a]
          );
        if (c.error && (0, i.GU)(a.options.throwOnError, [c.error]))
          throw c.error;
        return { ...c, mutate: u, mutateAsync: c.mutate };
      }
    },
    35369: (e, t, n) => {
      n.d(t, { e: () => h });
      var r = n(35893),
        o = n(8825),
        i = n(92054),
        a = n(63197),
        s = n(7407),
        c = n(42959),
        l = n(71530),
        u = n(95978),
        d = n(57299),
        p = n(60561);
      function h(e = {}) {
        let t, f, w, m, g, b, y, A;
        return (0, r.U)((r) => ({
          id: "metaMaskSDK",
          name: "MetaMask",
          rdns: ["io.metamask", "io.metamask.mobile"],
          type: h.type,
          async setup() {
            let e = await this.getProvider();
            e?.on &&
              (b || ((b = this.onConnect.bind(this)), e.on("connect", b)),
              m ||
                ((m = this.onAccountsChanged.bind(this)),
                e.on("accountsChanged", m)));
          },
          async connect({
            chainId: n,
            isReconnecting: r,
            withCapabilities: o,
          } = {}) {
            let i = await this.getProvider();
            y || ((y = this.onDisplayUri), i.on("display_uri", y));
            let a = [];
            r && (a = await this.getAccounts().catch(() => []));
            try {
              let r, l;
              a?.length ||
                (e.connectAndSign || e.connectWith
                  ? (e.connectAndSign
                      ? (r = await t.connectAndSign({ msg: e.connectAndSign }))
                      : e.connectWith &&
                        (l = await t.connectWith({
                          method: e.connectWith.method,
                          params: e.connectWith.params,
                        })),
                    (a = await this.getAccounts()))
                  : (a = (await t.connect()).map((e) => (0, s.b)(e))));
              let u = await this.getChainId();
              if (n && u !== n) {
                let e = await this.switchChain({ chainId: n }).catch((e) => {
                  if (e.code === c.vx.code) throw e;
                  return { id: u };
                });
                u = e?.id ?? u;
              }
              return (
                y && (i.removeListener("display_uri", y), (y = void 0)),
                r
                  ? i.emit("connectAndSign", {
                      accounts: a,
                      chainId: u,
                      signResponse: r,
                    })
                  : l &&
                    i.emit("connectWith", {
                      accounts: a,
                      chainId: u,
                      connectWithResponse: l,
                    }),
                b && (i.removeListener("connect", b), (b = void 0)),
                m ||
                  ((m = this.onAccountsChanged.bind(this)),
                  i.on("accountsChanged", m)),
                g ||
                  ((g = this.onChainChanged.bind(this)),
                  i.on("chainChanged", g)),
                A ||
                  ((A = this.onDisconnect.bind(this)), i.on("disconnect", A)),
                {
                  accounts: o
                    ? a.map((e) => ({ address: e, capabilities: {} }))
                    : a,
                  chainId: u,
                }
              );
            } catch (e) {
              if (e.code === c.vx.code) throw new c.vx(e);
              if (e.code === c.qZ.code) throw new c.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            g && (e.removeListener("chainChanged", g), (g = void 0)),
              A && (e.removeListener("disconnect", A), (A = void 0)),
              b || ((b = this.onConnect.bind(this)), e.on("connect", b)),
              await t.terminate();
          },
          async getAccounts() {
            let e = await this.getProvider();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, s.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            return Number(
              e.getChainId() || (await e?.request({ method: "eth_chainId" }))
            );
          },
          async getProvider() {
            async function a() {
              let a = await (async () => {
                  let { default: e } = await Promise.all([
                    n.e(5825),
                    n.e(7008),
                    n.e(3494),
                  ]).then(n.bind(n, 84094));
                  return "function" != typeof e &&
                    "function" == typeof e.default
                    ? e.default
                    : e;
                })(),
                s = {};
              for (let e of r.chains)
                s[(0, l.cK)(e.id)] = (0, o.R)({
                  chain: e,
                  transports: r.transports,
                })?.[0];
              t = new a({
                _source: "wagmi",
                forceDeleteProvider: !1,
                forceInjectProvider: !1,
                injectProvider: !1,
                ...e,
                readonlyRPCMap: s,
                dappMetadata: {
                  ...e.dappMetadata,
                  name: e.dappMetadata?.name ? e.dappMetadata?.name : "wagmi",
                  url: e.dappMetadata?.url
                    ? e.dappMetadata?.url
                    : "undefined" != typeof window
                    ? window.location.origin
                    : "https://wagmi.sh",
                },
                useDeeplink: e.useDeeplink ?? !0,
              });
              let c = await t.init(),
                u = c?.activeProvider ? c.activeProvider : t.getProvider();
              if (!u) throw new i.N();
              return u;
            }
            return f || (w || (w = a()), (f = await w)), f;
          },
          async isAuthorized() {
            try {
              return !!(
                await (0, u.b)(
                  () => (0, d.w)(() => this.getAccounts(), { timeout: 200 }),
                  { delay: 201, retryCount: 3 }
                )
              ).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider(),
              o = r.chains.find((e) => e.id === t);
            if (!o) throw new c.ch(new a.nk());
            try {
              return (
                await n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, l.cK)(t) }],
                }),
                await i(),
                await s(t),
                o
              );
            } catch (r) {
              if (r.code === c.vx.code) throw new c.vx(r);
              if (4902 === r.code || r?.data?.originalError?.code === 4902)
                try {
                  return (
                    await n.request({
                      method: "wallet_addEthereumChain",
                      params: [
                        {
                          blockExplorerUrls: (() => {
                            let { default: t, ...n } = o.blockExplorers ?? {};
                            return e?.blockExplorerUrls
                              ? e.blockExplorerUrls
                              : t
                              ? [t.url, ...Object.values(n).map((e) => e.url)]
                              : void 0;
                          })(),
                          chainId: (0, l.cK)(t),
                          chainName: e?.chainName ?? o.name,
                          iconUrls: e?.iconUrls,
                          nativeCurrency: e?.nativeCurrency ?? o.nativeCurrency,
                          rpcUrls: e?.rpcUrls?.length
                            ? e.rpcUrls
                            : [o.rpcUrls.default?.http[0] ?? ""],
                        },
                      ],
                    }),
                    await i(),
                    await s(t),
                    o
                  );
                } catch (e) {
                  if (e.code === c.vx.code) throw new c.vx(e);
                  throw new c.ch(e);
                }
              throw new c.ch(r);
            }
            async function i() {
              await (0, u.b)(
                async () => {
                  let e = (0, p.ME)(await n.request({ method: "eth_chainId" }));
                  if (e !== t)
                    throw Error("User rejected switch after adding network.");
                  return e;
                },
                { delay: 50, retryCount: 20 }
              );
            }
            async function s(e) {
              await new Promise((t) => {
                let n = (o) => {
                  "chainId" in o &&
                    o.chainId === e &&
                    (r.emitter.off("change", n), t());
                };
                r.emitter.on("change", n),
                  r.emitter.emit("change", { chainId: e });
              });
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length)
              if (!t.isExtensionActive()) return;
              else this.onDisconnect();
            else if (r.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e });
            } else
              r.emitter.emit("change", { accounts: e.map((e) => (0, s.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = await this.getAccounts();
            if (0 === t.length) return;
            let n = Number(e.chainId);
            r.emitter.emit("connect", { accounts: t, chainId: n });
            let o = await this.getProvider();
            b && (o.removeListener("connect", b), (b = void 0)),
              m ||
                ((m = this.onAccountsChanged.bind(this)),
                o.on("accountsChanged", m)),
              g ||
                ((g = this.onChainChanged.bind(this)), o.on("chainChanged", g)),
              A || ((A = this.onDisconnect.bind(this)), o.on("disconnect", A));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (r.emitter.emit("disconnect"),
              g && (t.removeListener("chainChanged", g), (g = void 0)),
              A && (t.removeListener("disconnect", A), (A = void 0)),
              b || ((b = this.onConnect.bind(this)), t.on("connect", b)));
          },
          onDisplayUri(e) {
            r.emitter.emit("message", { type: "display_uri", data: e });
          },
        }));
      }
      h.type = "metaMask";
    },
    35384: (e, t, n) => {
      n.d(t, { G: () => a });
      var r = n(18510),
        o = n(5653),
        i = n(7484),
        a = (e) => {
          let { projectId: t, walletConnectParameters: a } = e,
            s = (0, o.q)({ flag: "isRainbow" }),
            c = !s,
            l = (e) =>
              (0, r.m0)()
                ? e
                : (0, r.un)()
                ? "rainbow://wc?uri=".concat(
                    encodeURIComponent(e),
                    "&connector=rainbowkit"
                  )
                : "https://rnbwapp.com/wc?uri=".concat(
                    encodeURIComponent(e),
                    "&connector=rainbowkit"
                  );
          return {
            id: "rainbow",
            name: "Rainbow",
            rdns: "me.rainbow",
            iconUrl: async () =>
              (await n.e(1796).then(n.bind(n, 71796))).default,
            iconBackground: "#0c2f78",
            installed: c ? void 0 : s,
            downloadUrls: {
              android:
                "https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Drainbowkit&utm_source=rainbowkit",
              ios: "https://apps.apple.com/app/apple-store/id1457119021?pt=119997837&ct=rainbowkit&mt=8",
              mobile: "https://rainbow.download?utm_source=rainbowkit",
              qrCode:
                "https://rainbow.download?utm_source=rainbowkit&utm_medium=qrcode",
              browserExtension:
                "https://rainbow.me/extension?utm_source=rainbowkit",
            },
            mobile: { getUri: c ? l : void 0 },
            qrCode: c
              ? {
                  getUri: l,
                  instructions: {
                    learnMoreUrl:
                      "https://learn.rainbow.me/connect-to-a-website-or-app?utm_source=rainbowkit&utm_medium=connector&utm_campaign=learnmore",
                    steps: [
                      {
                        description:
                          "wallet_connectors.rainbow.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.rainbow.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.rainbow.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.rainbow.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.rainbow.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.rainbow.qr_code.step3.title",
                      },
                    ],
                  },
                }
              : void 0,
            createConnector: c
              ? (0, i.Z)({ projectId: t, walletConnectParameters: a })
              : (0, o.o)({ flag: "isRainbow" }),
          };
        };
    },
    35893: (e, t, n) => {
      n.d(t, { U: () => r });
      function r(e) {
        return e;
      }
    },
    37762: (e, t, n) => {
      n.d(t, { U: () => c });
      var r = n(50625),
        o = n(7459),
        i = n(44892);
      class a extends i.C {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return "wagmi@2.19.5";
        }
      }
      class s extends a {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = null != (e = t.config) ? e : (0, r.useContext)(o.R);
        if (!n) throw new s();
        return n;
      }
    },
    39056: (e, t, n) => {
      n.d(t, { O: () => o });
      var r = n(5653),
        o = () => ({
          id: "rabby",
          name: "Rabby Wallet",
          iconUrl: async () => (await n.e(3512).then(n.bind(n, 43512))).default,
          rdns: "io.rabby",
          iconBackground: "#8697FF",
          installed: (0, r.q)({ flag: "isRabby" }),
          downloadUrls: {
            chrome:
              "https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch",
            browserExtension: "https://rabby.io",
          },
          extension: {
            instructions: {
              learnMoreUrl: "https://rabby.io/",
              steps: [
                {
                  description:
                    "wallet_connectors.rabby.extension.step1.description",
                  step: "install",
                  title: "wallet_connectors.rabby.extension.step1.title",
                },
                {
                  description:
                    "wallet_connectors.rabby.extension.step2.description",
                  step: "create",
                  title: "wallet_connectors.rabby.extension.step2.title",
                },
                {
                  description:
                    "wallet_connectors.rabby.extension.step3.description",
                  step: "refresh",
                  title: "wallet_connectors.rabby.extension.step3.title",
                },
              ],
            },
          },
          createConnector: (0, r.o)({ flag: "isRabby" }),
        });
    },
    39386: (e, t, n) => {
      let r;
      n.d(t, { Z: () => y });
      var o = n(72162);
      let i = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => i(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => i(t)(e),
            };
          }
        },
        a = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let o = "function" == typeof e ? e(t) : e;
              if (!Object.is(o, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof o || null === o)
                  ? o
                  : Object.assign({}, t, o)),
                  n.forEach((n) => n(t, e));
              }
            },
            o = () => t,
            i = {
              setState: r,
              getState: o,
              getInitialState: () => a,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            a = (t = e(r, o, i));
          return i;
        },
        s = (e) => (e ? a(e) : a);
      var c = n(11294),
        l = n(7733);
      class u {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new l.b(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function d(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === "bigint" && (r = BigInt(r.value)),
            r?.__type === "Map" && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      function p(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function h(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function f(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              r = "function" == typeof t,
              o = [],
              i = [];
            return function (a, s) {
              if ("object" == typeof s)
                if (o.length) {
                  let e = h(o, this);
                  0 === e ? (o[o.length] = this) : (o.splice(e), i.splice(e)),
                    (i[i.length] = a);
                  let n = h(o, s);
                  if (0 !== n)
                    return r ? t.call(this, a, s, p(i, n)) : `[ref=${p(i, n)}]`;
                } else (o[0] = s), (i[0] = a);
              return n ? e.call(this, a, s) : s;
            };
          })((e, n) => {
            let r = n;
            return (
              "bigint" == typeof r &&
                (r = { __type: "bigint", value: n.toString() }),
              r instanceof Map &&
                (r = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, r) ?? r
            );
          }, r),
          n ?? void 0
        );
      }
      let w = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var m = n(63197);
      let g = 256;
      var b = n(65687);
      function y(e) {
        let t,
          n,
          a,
          {
            multiInjectedProviderDiscovery: l = !0,
            storage: p = (function (e) {
              let {
                deserialize: t = d,
                key: n = "wagmi",
                serialize: r = f,
                storage: o = w,
              } = e;
              function i(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...o,
                key: n,
                async getItem(e, r) {
                  let a = o.getItem(`${n}.${e}`),
                    s = await i(a);
                  return s ? t(s) ?? null : r ?? null;
                },
                async setItem(e, t) {
                  let a = `${n}.${e}`;
                  null === t
                    ? await i(o.removeItem(a))
                    : await i(o.setItem(a, r(t)));
                },
                async removeItem(e) {
                  await i(o.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : w;
                return {
                  getItem: (t) => e.getItem(t),
                  removeItem(t) {
                    e.removeItem(t);
                  },
                  setItem(t, n) {
                    try {
                      e.setItem(t, n);
                    } catch {}
                  },
                };
              })(),
            }),
            syncConnectedChain: h = !0,
            ssr: y = !1,
            ...A
          } = e,
          v =
            "undefined" != typeof window && l
              ? (function () {
                  let e = new Set(),
                    t = [],
                    n = () =>
                      (function (e) {
                        if ("undefined" == typeof window) return;
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            t
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              t
                            )
                        );
                      })((n) => {
                        t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                          ((t = [...t, n]),
                          e.forEach((e) => e(t, { added: [n] })));
                      }),
                    r = n();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), r?.();
                    },
                    findProvider: ({ rdns: e }) =>
                      t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), r?.(), (r = n());
                    },
                    subscribe: (n, { emitImmediately: r } = {}) => (
                      e.add(n), r && n(t, { added: t }), () => e.delete(n)
                    ),
                  };
                })()
              : void 0,
          C = s(() => A.chains),
          x = s(() => {
            let e = [],
              t = new Set();
            for (let n of A.connectors ?? []) {
              let r = k(n);
              if ((e.push(r), !y && r.rdns))
                for (let e of "string" == typeof r.rdns ? [r.rdns] : r.rdns)
                  t.add(e);
            }
            if (!y && v)
              for (let n of v.getProviders())
                t.has(n.info.rdns) || e.push(k(I(n)));
            return e;
          });
        function k(e) {
          let t = new u(
              (function (e = 11) {
                if (!r || g + e > 512) {
                  (r = ""), (g = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return r.substring(g, g++ + e);
              })()
            ),
            n = {
              ...e({
                emitter: t,
                chains: C.getState(),
                storage: p,
                transports: A.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", W), n.setup?.(), n;
        }
        function I(e) {
          let { info: t } = e,
            n = e.provider;
          return (0, c.b)({ target: { ...t, id: t.rdns, provider: n } });
        }
        let E = new Map();
        function B() {
          return {
            chainId: C.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let S = "0.0.0-canary-";
        t = b.r.startsWith(S)
          ? Number.parseInt(b.r.replace(S, ""), 10)
          : Number.parseInt(b.r.split(".")[0] ?? "0", 10);
        let M = s(
          ((a = p
            ? ((n = {
                migrate(e, n) {
                  if (n === t) return e;
                  let r = B(),
                    o = O(e, r.chainId);
                  return { ...r, chainId: o };
                },
                name: "store",
                partialize: (e) => ({
                  connections: {
                    __type: "Map",
                    value: Array.from(e.connections.entries()).map(([e, t]) => {
                      let { id: n, name: r, type: o, uid: i } = t.connector;
                      return [
                        e,
                        {
                          ...t,
                          connector: { id: n, name: r, type: o, uid: i },
                        },
                      ];
                    }),
                  },
                  chainId: e.chainId,
                  current: e.current,
                }),
                merge(e, t) {
                  "object" == typeof e && e && "status" in e && delete e.status;
                  let n = O(e, t.chainId);
                  return { ...t, ...e, chainId: n };
                },
                skipHydration: y,
                storage: p,
                version: t,
              }),
              (e, t, r) => {
                let o,
                  a = {
                    storage: (function (e, t) {
                      let n;
                      try {
                        n = e();
                      } catch (e) {
                        return;
                      }
                      return {
                        getItem: (e) => {
                          var t;
                          let r = (e) =>
                              null === e ? null : JSON.parse(e, void 0),
                            o = null != (t = n.getItem(e)) ? t : null;
                          return o instanceof Promise ? o.then(r) : r(o);
                        },
                        setItem: (e, t) =>
                          n.setItem(e, JSON.stringify(t, void 0)),
                        removeItem: (e) => n.removeItem(e),
                      };
                    })(() => localStorage),
                    partialize: (e) => e,
                    version: 0,
                    merge: (e, t) => ({ ...t, ...e }),
                    ...n,
                  },
                  s = !1,
                  c = new Set(),
                  l = new Set(),
                  u = a.storage;
                if (!u)
                  return B(
                    (...t) => {
                      console.warn(
                        `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                      ),
                        e(...t);
                    },
                    t,
                    r
                  );
                let d = () => {
                    let e = a.partialize({ ...t() });
                    return u.setItem(a.name, { state: e, version: a.version });
                  },
                  p = r.setState;
                r.setState = (e, t) => {
                  p(e, t), d();
                };
                let h = B(
                  (...t) => {
                    e(...t), d();
                  },
                  t,
                  r
                );
                r.getInitialState = () => h;
                let f = () => {
                  var n, r;
                  if (!u) return;
                  (s = !1),
                    c.forEach((e) => {
                      var n;
                      return e(null != (n = t()) ? n : h);
                    });
                  let p =
                    (null == (r = a.onRehydrateStorage)
                      ? void 0
                      : r.call(a, null != (n = t()) ? n : h)) || void 0;
                  return i(u.getItem.bind(u))(a.name)
                    .then((e) => {
                      if (e)
                        if (
                          "number" != typeof e.version ||
                          e.version === a.version
                        )
                          return [!1, e.state];
                        else {
                          if (a.migrate)
                            return [!0, a.migrate(e.state, e.version)];
                          console.error(
                            "State loaded from storage couldn't be migrated since no migrate function was provided"
                          );
                        }
                      return [!1, void 0];
                    })
                    .then((n) => {
                      var r;
                      let [i, s] = n;
                      if (
                        (e((o = a.merge(s, null != (r = t()) ? r : h)), !0), i)
                      )
                        return d();
                    })
                    .then(() => {
                      null == p || p(o, void 0),
                        (o = t()),
                        (s = !0),
                        l.forEach((e) => e(o));
                    })
                    .catch((e) => {
                      null == p || p(void 0, e);
                    });
                };
                return (
                  (r.persist = {
                    setOptions: (e) => {
                      (a = { ...a, ...e }), e.storage && (u = e.storage);
                    },
                    clearStorage: () => {
                      null == u || u.removeItem(a.name);
                    },
                    getOptions: () => a,
                    rehydrate: () => f(),
                    hasHydrated: () => s,
                    onHydrate: (e) => (
                      c.add(e),
                      () => {
                        c.delete(e);
                      }
                    ),
                    onFinishHydration: (e) => (
                      l.add(e),
                      () => {
                        l.delete(e);
                      }
                    ),
                  }),
                  a.skipHydration || f(),
                  o || h
                );
              })
            : B),
          (e, t, n) => {
            let r = n.subscribe;
            return (
              (n.subscribe = (e, t, o) => {
                let i = e;
                if (t) {
                  let r = (null == o ? void 0 : o.equalityFn) || Object.is,
                    a = e(n.getState());
                  (i = (n) => {
                    let o = e(n);
                    if (!r(a, o)) {
                      let e = a;
                      t((a = o), e);
                    }
                  }),
                    (null == o ? void 0 : o.fireImmediately) && t(a, a);
                }
                return r(i);
              }),
              a(e, t, n)
            );
          })
        );
        function O(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            C.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function P(e) {
          M.setState((t) => {
            let n = t.connections.get(e.uid);
            return n
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? n.accounts,
                    chainId: e.chainId ?? n.chainId,
                    connector: n.connector,
                  }),
                }
              : t;
          });
        }
        function W(e) {
          "connecting" !== M.getState().status &&
            "reconnecting" !== M.getState().status &&
            M.setState((t) => {
              let n = x.getState().find((t) => t.uid === e.uid);
              return n
                ? (n.emitter.listenerCount("connect") &&
                    n.emitter.off("connect", P),
                  n.emitter.listenerCount("change") ||
                    n.emitter.on("change", P),
                  n.emitter.listenerCount("disconnect") ||
                    n.emitter.on("disconnect", D),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: n,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : t;
            });
        }
        function D(e) {
          M.setState((t) => {
            let n = t.connections.get(e.uid);
            if (n) {
              let e = n.connector;
              e.emitter.listenerCount("change") &&
                n.connector.emitter.off("change", P),
                e.emitter.listenerCount("disconnect") &&
                  n.connector.emitter.off("disconnect", D),
                e.emitter.listenerCount("connect") ||
                  n.connector.emitter.on("connect", W);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let r = t.connections.values().next().value;
            return {
              ...t,
              connections: new Map(t.connections),
              current: r.connector.uid,
            };
          });
        }
        return (
          M.setState(B()),
          h &&
            M.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (C.getState().some((t) => t.id === e))
                  return M.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          v?.subscribe((e) => {
            let t = new Set(),
              n = new Set();
            for (let e of x.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                  n.add(t);
            let r = [];
            for (let o of e) {
              if (n.has(o.info.rdns)) continue;
              let e = k(I(o));
              t.has(e.id) || r.push(e);
            }
            (!p || M.persist.hasHydrated()) &&
              x.setState((e) => [...e, ...r], !0);
          }),
          {
            get chains() {
              return C.getState();
            },
            get connectors() {
              return x.getState();
            },
            storage: p,
            getClient: function (e = {}) {
              let t,
                n = e.chainId ?? M.getState().chainId,
                r = C.getState().find((e) => e.id === n);
              if (e.chainId && !r) throw new m.nk();
              {
                let e = E.get(M.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new m.nk();
              }
              {
                let e = E.get(n);
                if (e) return e;
              }
              if (A.client) t = A.client({ chain: r });
              else {
                let e = r.id,
                  n = C.getState().map((e) => e.id),
                  i = {};
                for (let [t, r] of Object.entries(A))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  )
                    if ("object" == typeof r)
                      if (e in r) i[t] = r[e];
                      else {
                        if (n.some((e) => e in r)) continue;
                        i[t] = r;
                      }
                    else i[t] = r;
                t = (0, o.UU)({
                  ...i,
                  chain: r,
                  batch: i.batch ?? { multicall: !0 },
                  transport: (t) => A.transports[e]({ ...t, connectors: x }),
                });
              }
              return E.set(n, t), t;
            },
            get state() {
              return M.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(M.getState()) : e;
              let n = B();
              "object" != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                M.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              M.subscribe(
                e,
                t,
                n ? { ...n, fireImmediately: n.emitImmediately } : void 0
              ),
            _internal: {
              mipd: v,
              async revalidate() {
                let e = M.getState(),
                  t = e.connections,
                  n = e.current;
                for (let [, e] of t) {
                  let r = e.connector;
                  (r.isAuthorized && (await r.isAuthorized())) ||
                    (t.delete(r.uid), n === r.uid && (n = null));
                }
                M.setState((e) => ({ ...e, connections: t, current: n }));
              },
              store: M,
              ssr: !!y,
              syncConnectedChain: h,
              transports: A.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(C.getState()) : e;
                  if (0 !== t.length) return C.setState(t, !0);
                },
                subscribe: (e) => C.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: I,
                setup: k,
                setState: (e) =>
                  x.setState("function" == typeof e ? e(x.getState()) : e, !0),
                subscribe: (e) => x.subscribe(e),
              },
              events: { change: P, connect: W, disconnect: D },
            },
          }
        );
      }
    },
    39829: (e, t, n) => {
      n.d(t, { g: () => s });
      var r = n(35893),
        o = n(92054),
        i = n(7407),
        a = n(57299);
      function s(e = {}) {
        let t,
          c,
          { shimDisconnect: l = !1 } = e;
        return (0, r.U)((r) => ({
          id: "safe",
          name: "Safe",
          type: s.type,
          async connect({ withCapabilities: e } = {}) {
            let t = await this.getProvider();
            if (!t) throw new o.N();
            let n = await this.getAccounts(),
              i = await this.getChainId();
            return (
              c || ((c = this.onDisconnect.bind(this)), t.on("disconnect", c)),
              l && (await r.storage?.removeItem("safe.disconnected")),
              {
                accounts: e
                  ? n.map((e) => ({ address: e, capabilities: {} }))
                  : n,
                chainId: i,
              }
            );
          },
          async disconnect() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            c && (e.removeListener("disconnect", c), (c = void 0)),
              l && (await r.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            return (await e.request({ method: "eth_accounts" })).map(i.b);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!t) {
                let { default: r } = await Promise.all([
                    n.e(502),
                    n.e(4847),
                  ]).then(n.bind(n, 64847)),
                  o = new r(e),
                  i = await (0, a.w)(() => o.safe.getInfo(), {
                    timeout: e.unstable_getInfoTimeout ?? 10,
                  });
                if (!i) throw Error("Could not load Safe information");
                t = new (await (async () => {
                  let e = await Promise.all([n.e(502), n.e(820)]).then(
                    n.t.bind(n, 70820, 19)
                  );
                  return "function" != typeof e.SafeAppProvider &&
                    "function" == typeof e.default.SafeAppProvider
                    ? e.default.SafeAppProvider
                    : e.SafeAppProvider;
                })())(i, o);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            return Number(e.chainId);
          },
          async isAuthorized() {
            try {
              if (l && (await r.storage?.getItem("safe.disconnected")))
                return !1;
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            r.emitter.emit("disconnect");
          },
        }));
      }
      s.type = "safe";
    },
    41052: (e, t, n) => {
      n.d(t, { r: () => r });
      let r = (0, n(87512).x)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        blockTime: 12e3,
        rpcUrls: { default: { http: ["https://ethereum.reth.rs/rpc"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensUniversalResolver: {
            address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee",
            blockCreated: 0x16041f6,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0xdb04c1,
          },
        },
      });
    },
    43653: (e, t, n) => {
      var r = n(50625),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = r.useState,
        a = r.useEffect,
        s = r.useLayoutEffect,
        c = r.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !o(e, n);
        } catch (e) {
          return !0;
        }
      }
      var u =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = i({ inst: { value: n, getSnapshot: t } }),
                o = r[0].inst,
                u = r[1];
              return (
                s(
                  function () {
                    (o.value = n), (o.getSnapshot = t), l(o) && u({ inst: o });
                  },
                  [e, n, t]
                ),
                a(
                  function () {
                    return (
                      l(o) && u({ inst: o }),
                      e(function () {
                        l(o) && u({ inst: o });
                      })
                    );
                  },
                  [e]
                ),
                c(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
    },
    44892: (e, t, n) => {
      n.d(t, { C: () => s });
      var r,
        o,
        i = n(65687),
        a = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        };
      class s extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return `@wagmi/core@${i.r}`;
        }
        constructor(e, t = {}) {
          super(),
            r.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof s
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            o = (t.cause instanceof s && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(o
              ? [
                  `Docs: ${this.docsBaseUrl}${o}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = o),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return a(this, r, "m", o).call(this, this, e);
        }
      }
      (r = new WeakSet()),
        (o = function e(t, n) {
          return n?.(t)
            ? t
            : t.cause
            ? a(this, r, "m", e).call(this, t.cause, n)
            : t;
        });
    },
    45432: (e, t, n) => {
      n.d(t, { m: () => u });
      var r = n(18510),
        o = n(35893),
        i = n(63197),
        a = n(7407),
        s = n(42959),
        c = n(71530);
      function l(e = {}) {
        var t, r;
        let u, d, p, h, f, w, m, g, b;
        return "3" === e.version || e.headlessMode
          ? ((t = e),
            (0, o.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: l.type,
              async connect({ chainId: e, withCapabilities: t } = {}) {
                try {
                  let n = await this.getProvider(),
                    r = (
                      await n.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, a.b)(e));
                  p ||
                    ((p = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", p)),
                    h ||
                      ((h = this.onChainChanged.bind(this)),
                      n.on("chainChanged", h)),
                    f ||
                      ((f = this.onDisconnect.bind(this)),
                      n.on("disconnect", f));
                  let o = await this.getChainId();
                  if (e && o !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === s.vx.code) throw e;
                        return { id: o };
                      }
                    );
                    o = t?.id ?? o;
                  }
                  return {
                    accounts: t
                      ? r.map((e) => ({ address: e, capabilities: {} }))
                      : r,
                    chainId: o,
                  };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new s.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                p && (e.removeListener("accountsChanged", p), (p = void 0)),
                  h && (e.removeListener("chainChanged", h), (h = void 0)),
                  f && (e.removeListener("disconnect", f), (f = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, a.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!d) {
                  u = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(1067),
                      n.e(3234),
                      n.e(1332),
                    ]).then(n.t.bind(n, 53234, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...t, reloadOnDisconnect: !1 });
                  let r = u.walletExtension?.getChainId(),
                    o =
                      e.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === r
                      ) || e.chains[0],
                    i = t.chainId || o?.id,
                    a = t.jsonRpcUrl || o?.rpcUrls.default.http[0];
                  d = u.makeWeb3Provider(a, i);
                }
                return d;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new s.ch(new i.nk());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, c.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, i;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (i = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, c.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: i,
                      };
                      return (
                        await o.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new s.vx(e);
                    }
                  throw new s.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, a.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                p && (n.removeListener("accountsChanged", p), (p = void 0)),
                  h && (n.removeListener("chainChanged", h), (h = void 0)),
                  f && (n.removeListener("disconnect", f), (f = void 0));
              },
            })))
          : ((r = e),
            (0, o.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: l.type,
              async connect({ chainId: e, withCapabilities: t, ...n } = {}) {
                try {
                  let r = await this.getProvider(),
                    o = (
                      await r.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in n && n.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, a.b)(e));
                  m ||
                    ((m = this.onAccountsChanged.bind(this)),
                    r.on("accountsChanged", m)),
                    g ||
                      ((g = this.onChainChanged.bind(this)),
                      r.on("chainChanged", g)),
                    b ||
                      ((b = this.onDisconnect.bind(this)),
                      r.on("disconnect", b));
                  let i = await this.getChainId();
                  if (e && i !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === s.vx.code) throw e;
                        return { id: i };
                      }
                    );
                    i = t?.id ?? i;
                  }
                  return {
                    accounts: t
                      ? o.map((e) => ({ address: e, capabilities: {} }))
                      : o,
                    chainId: i,
                  };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new s.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                m && (e.removeListener("accountsChanged", m), (m = void 0)),
                  g && (e.removeListener("chainChanged", g), (g = void 0)),
                  b && (e.removeListener("disconnect", b), (b = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, a.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!w) {
                  let t =
                      "string" == typeof r.preference
                        ? { options: r.preference }
                        : {
                            ...r.preference,
                            options: r.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: o } = await Promise.all([
                      n.e(1067),
                      n.e(2065),
                      n.e(369),
                      n.e(9035),
                    ]).then(n.bind(n, 29035));
                  w = o({
                    ...r,
                    appChainIds: e.chains.map((e) => e.id),
                    preference: t,
                  }).getProvider();
                }
                return w;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new s.ch(new i.nk());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, c.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, i;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (i = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, c.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: i,
                      };
                      return (
                        await o.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new s.vx(e);
                    }
                  throw new s.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, a.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                m && (n.removeListener("accountsChanged", m), (m = void 0)),
                  g && (n.removeListener("chainChanged", g), (g = void 0)),
                  b && (n.removeListener("disconnect", b), (b = void 0));
              },
            })));
      }
      l.type = "coinbaseWallet";
      var u = (e) => {
        let { appName: t, appIcon: i } = e,
          { preference: a, ...s } = u;
        return {
          id: "coinbase",
          aliases: ["coinbaseWallet"],
          name: "Coinbase Wallet",
          shortName: "Coinbase",
          rdns: "com.coinbase.wallet",
          iconUrl: async () => (await n.e(3964).then(n.bind(n, 13964))).default,
          iconAccent: "#2c5ff6",
          iconBackground: "#2c5ff6",
          installed: !0,
          downloadUrls: {
            android: "https://play.google.com/store/apps/details?id=org.toshi",
            ios: "https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455",
            mobile: "https://coinbase.com/wallet/downloads",
            qrCode: "https://coinbase-wallet.onelink.me/q5Sx/fdb9b250",
            chrome:
              "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
            browserExtension: "https://coinbase.com/wallet",
          },
          ...((0, r.un)()
            ? {}
            : {
                qrCode: {
                  getUri: (e) => e,
                  instructions: {
                    learnMoreUrl:
                      "https://coinbase.com/wallet/articles/getting-started-mobile",
                    steps: [
                      {
                        description:
                          "wallet_connectors.coinbase.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.coinbase.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.coinbase.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.coinbase.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.coinbase.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.coinbase.qr_code.step3.title",
                      },
                    ],
                  },
                },
                extension: {
                  instructions: {
                    learnMoreUrl:
                      "https://coinbase.com/wallet/articles/getting-started-extension",
                    steps: [
                      {
                        description:
                          "wallet_connectors.coinbase.extension.step1.description",
                        step: "install",
                        title:
                          "wallet_connectors.coinbase.extension.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.coinbase.extension.step2.description",
                        step: "create",
                        title:
                          "wallet_connectors.coinbase.extension.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.coinbase.extension.step3.description",
                        step: "refresh",
                        title:
                          "wallet_connectors.coinbase.extension.step3.title",
                      },
                    ],
                  },
                },
              }),
          createConnector: (e) => {
            let n =
                "string" == typeof a
                  ? { options: a, telemetry: !1 }
                  : { options: "all", ...a, telemetry: !1 },
              r = l({ appName: t, appLogoUrl: i, ...s, preference: n });
            return (0, o.U)((t) => ({ ...r(t), ...e }));
          },
        };
      };
    },
    48804: (e, t, n) => {
      function r(e) {
        return e.state.chainId;
      }
      n.d(t, { i: () => a });
      var o = n(50625),
        i = n(37762);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, i.U)(e);
        return (0, o.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe((e) => e.chainId, n);
            })(t, { onChange: e }),
          () => r(t),
          () => r(t)
        );
      }
    },
    49514: (e) => {
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function i(e, t, r, i, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new o(r, i || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (e = this._events))
            t.call(e, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(e))
            : o;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, a = Array(i); o < i; o++)
            a[o] = r[o].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, o, i, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            l,
            u = this._events[s],
            d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, r), !0;
              case 4:
                return u.fn.call(u.context, t, r, o), !0;
              case 5:
                return u.fn.call(u.context, t, r, o, i), !0;
              case 6:
                return u.fn.call(u.context, t, r, o, i, a), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var p,
              h = u.length;
            for (l = 0; l < h; l++)
              switch (
                (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d)
              ) {
                case 1:
                  u[l].fn.call(u[l].context);
                  break;
                case 2:
                  u[l].fn.call(u[l].context, t);
                  break;
                case 3:
                  u[l].fn.call(u[l].context, t, r);
                  break;
                case 4:
                  u[l].fn.call(u[l].context, t, r, o);
                  break;
                default:
                  if (!c)
                    for (p = 1, c = Array(d - 1); p < d; p++)
                      c[p - 1] = arguments[p];
                  u[l].fn.apply(u[l].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return i(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return i(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, o) {
          var i = n ? n + e : e;
          if (!this._events[i]) return this;
          if (!t) return a(this, i), this;
          var s = this._events[i];
          if (s.fn)
            s.fn !== t ||
              (o && !s.once) ||
              (r && s.context !== r) ||
              a(this, i);
          else {
            for (var c = 0, l = [], u = s.length; c < u; c++)
              (s[c].fn !== t ||
                (o && !s[c].once) ||
                (r && s[c].context !== r)) &&
                l.push(s[c]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    52835: (e, t, n) => {
      n.d(t, {
        b: () =>
          function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              let r, o;
              if (t.constructor !== n.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(n)) {
                if ((r = t.length) !== n.length) return !1;
                for (o = r; 0 != o--; ) if (!e(t[o], n[o])) return !1;
                return !0;
              }
              if (
                "function" == typeof t.valueOf &&
                t.valueOf !== Object.prototype.valueOf
              )
                return t.valueOf() === n.valueOf();
              if (
                "function" == typeof t.toString &&
                t.toString !== Object.prototype.toString
              )
                return t.toString() === n.toString();
              let i = Object.keys(t);
              if ((r = i.length) !== Object.keys(n).length) return !1;
              for (o = r; 0 != o--; ) if (!Object.hasOwn(n, i[o])) return !1;
              for (o = r; 0 != o--; ) {
                let r = i[o];
                if (r && !e(t[r], n[r])) return !1;
              }
              return !0;
            }
            return t != t && n != n;
          },
      });
    },
    54792: (e, t, n) => {
      n.d(t, { P: () => f });
      var r = n(42959),
        o = n(7407),
        i = n(60561),
        a = n(71530),
        s = n(393),
        c = n(28774),
        l = n(19955),
        u = n(28840);
      let d = { http: (e, t) => (0, u.d)(e).request(t) };
      var p = n(63197),
        h = n(35893);
      function f(e) {
        let t,
          n = new Map(),
          u = e.features ?? { defaultConnected: !1 },
          w = u.defaultConnected;
        return (0, h.U)((h) => ({
          id: "mock",
          name: "Mock Connector",
          type: f.type,
          async setup() {
            t = h.chains[0].id;
          },
          async connect({ chainId: e, withCapabilities: t } = {}) {
            if (u.connectError) {
              if ("boolean" == typeof u.connectError)
                throw new r.vx(Error("Failed to connect."));
              throw u.connectError;
            }
            let n = await this.getProvider(),
              i = await n.request({ method: "eth_requestAccounts" }),
              a = await this.getChainId();
            return (
              e && a !== e && (a = (await this.switchChain({ chainId: e })).id),
              (w = !0),
              {
                accounts: t
                  ? i.map((e) => ({
                      address: (0, o.b)(e),
                      capabilities: { foo: { bar: e } },
                    }))
                  : i.map((e) => (0, o.b)(e)),
                chainId: a,
              }
            );
          },
          async disconnect() {
            w = !1;
          },
          async getAccounts() {
            if (!w) throw new p.gC();
            let e = await this.getProvider();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, o.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider(),
              t = await e.request({ method: "eth_chainId" });
            return (0, i.aD)(t, "number");
          },
          async isAuthorized() {
            return !!u.reconnect && !!w && !!(await this.getAccounts()).length;
          },
          async switchChain({ chainId: e }) {
            let t = await this.getProvider(),
              n = h.chains.find((t) => t.id === e);
            if (!n) throw new r.ch(new p.nk());
            return (
              await t.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: (0, a.cK)(e) }],
              }),
              n
            );
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : h.emitter.emit("change", {
                  accounts: e.map((e) => (0, o.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            h.emitter.emit("change", { chainId: t });
          },
          async onDisconnect(e) {
            h.emitter.emit("disconnect"), (w = !1);
          },
          async getProvider({ chainId: o } = {}) {
            let p = (h.chains.find((e) => e.id === o) ?? h.chains[0]).rpcUrls
                .default.http[0],
              f = async ({ method: o, params: l }) => {
                if ("eth_chainId" === o) return (0, a.cK)(t);
                if ("eth_requestAccounts" === o) return e.accounts;
                if ("eth_signTypedData_v4" === o && u.signTypedDataError) {
                  if ("boolean" == typeof u.signTypedDataError)
                    throw new r.vx(Error("Failed to sign typed data."));
                  throw u.signTypedDataError;
                }
                if ("wallet_switchEthereumChain" === o) {
                  if (u.switchChainError) {
                    if ("boolean" == typeof u.switchChainError)
                      throw new r.vx(Error("Failed to switch chain."));
                    throw u.switchChainError;
                  }
                  (t = (0, i.aD)(l[0].chainId, "number")),
                    this.onChainChanged(t.toString());
                  return;
                }
                if ("wallet_watchAsset" === o) {
                  if (u.watchAssetError) {
                    if ("boolean" == typeof u.watchAssetError)
                      throw new r.vx(Error("Failed to switch chain."));
                    throw u.watchAssetError;
                  }
                  return w;
                }
                if ("wallet_getCapabilities" === o)
                  return {
                    "0x2105": {
                      paymasterService: {
                        supported:
                          "0x95132632579b073D12a6673e18Ab05777a6B86f8" === l[0],
                      },
                      sessionKeys: { supported: !0 },
                    },
                    "0x14A34": {
                      paymasterService: {
                        supported:
                          "0x95132632579b073D12a6673e18Ab05777a6B86f8" === l[0],
                      },
                    },
                  };
                if ("wallet_sendCalls" === o) {
                  let e = [],
                    t = l[0].calls,
                    r = l[0].from;
                  for (let n of t) {
                    let { result: t, error: i } = await d.http(p, {
                      body: {
                        method: "eth_sendTransaction",
                        params: [
                          { ...n, ...(void 0 !== r ? { from: r } : {}) },
                        ],
                      },
                    });
                    if (i)
                      throw new s.J8({
                        body: { method: o, params: l },
                        error: i,
                        url: p,
                      });
                    e.push(t);
                  }
                  let i = (0, c.S)((0, a.i3)(JSON.stringify(t)));
                  return n.set(i, e), { id: i };
                }
                if ("wallet_getCallsStatus" === o) {
                  let e = n.get(l[0]);
                  if (!e)
                    return {
                      atomic: !1,
                      chainId: "0x1",
                      id: l[0],
                      status: 100,
                      receipts: [],
                      version: "2.0.0",
                    };
                  let t = (
                    await Promise.all(
                      e.map(async (e) => {
                        let { result: t, error: n } = await d.http(p, {
                          body: {
                            method: "eth_getTransactionReceipt",
                            params: [e],
                            id: 0,
                          },
                        });
                        if (n)
                          throw new s.J8({
                            body: { method: o, params: l },
                            error: n,
                            url: p,
                          });
                        return t
                          ? {
                              blockHash: t.blockHash,
                              blockNumber: t.blockNumber,
                              gasUsed: t.gasUsed,
                              logs: t.logs,
                              status: t.status,
                              transactionHash: t.transactionHash,
                            }
                          : null;
                      })
                    )
                  ).filter((e) => null !== e);
                  return 0 === t.length
                    ? {
                        atomic: !1,
                        chainId: "0x1",
                        id: l[0],
                        status: 100,
                        receipts: [],
                        version: "2.0.0",
                      }
                    : {
                        atomic: !1,
                        chainId: "0x1",
                        id: l[0],
                        status: 200,
                        receipts: t,
                        version: "2.0.0",
                      };
                }
                if ("wallet_showCallsStatus" === o) return;
                if ("personal_sign" === o) {
                  if (u.signMessageError) {
                    if ("boolean" == typeof u.signMessageError)
                      throw new r.vx(Error("Failed to sign message."));
                    throw u.signMessageError;
                  }
                  (o = "eth_sign"), (l = [l[1], l[0]]);
                }
                let h = { method: o, params: l },
                  { error: f, result: m } = await d.http(p, { body: h });
                if (f) throw new s.J8({ body: h, error: f, url: p });
                return m;
              };
            return (0, l.I)({ request: f })({ retryCount: 0 });
          },
        }));
      }
      f.type = "mock";
    },
    55167: (e, t, n) => {
      n.d(t, { R: () => u });
      var r = n(34929),
        o = n(64422),
        i = n(52835);
      let a = [];
      function s(e) {
        let t = e.chains;
        return (0, i.b)(a, t) ? a : ((a = t), t);
      }
      var c = n(50625),
        l = n(37762);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, l.U)(e),
          i = {
            mutationFn: (e) => (0, o.S)(n, e),
            mutationKey: ["switchChain"],
          },
          { mutate: a, mutateAsync: u, ...d } = (0, r.n)({ ...t, ...i });
        return {
          ...d,
          chains: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, l.U)(e);
            return (0, c.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.chains.subscribe((e, t) => {
                    n(e, t);
                  });
                })(t, { onChange: e }),
              () => s(t),
              () => s(t)
            );
          })({ config: n }),
          switchChain: a,
          switchChainAsync: u,
        };
      }
    },
    55504: (e, t, n) => {
      n.d(t, { A: () => G });
      var r,
        o,
        i = n(75350),
        a = n(50625),
        s = "right-scroll-bar-position",
        c = "width-before-scroll-bar";
      function l(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var u = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        d = new WeakMap();
      function p(e) {
        return e;
      }
      var h = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o =
              (void 0 === t && (t = p),
              (n = []),
              (r = !1),
              {
                read: function () {
                  if (r)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var o = t(e, r);
                  return (
                    n.push(o),
                    function () {
                      n = n.filter(function (e) {
                        return e !== o;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (r = !0; n.length; ) {
                    var t = n;
                    (n = []), t.forEach(e);
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var o = n;
                    (n = []), o.forEach(e), (t = n);
                  }
                  var i = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(i);
                    };
                  a(),
                    (n = {
                      push: function (e) {
                        t.push(e), a();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), n;
                      },
                    });
                },
              });
          return (o.options = (0, i.__assign)({ async: !0, ssr: !1 }, e)), o;
        })(),
        f = function () {},
        w = a.forwardRef(function (e, t) {
          var n,
            r,
            o,
            s,
            c = a.useRef(null),
            p = a.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f,
            }),
            w = p[0],
            m = p[1],
            g = e.forwardProps,
            b = e.children,
            y = e.className,
            A = e.removeScrollBar,
            v = e.enabled,
            C = e.shards,
            x = e.sideCar,
            k = e.noRelative,
            I = e.noIsolation,
            E = e.inert,
            B = e.allowPinchZoom,
            S = e.as,
            M = e.gapMode,
            O = (0, i.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            P =
              ((n = [c, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return l(t, e);
                });
              }),
              ((o = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (s = o.facade),
              u(
                function () {
                  var e = d.get(s);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = s.current;
                    t.forEach(function (e) {
                      r.has(e) || l(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || l(e, o);
                      });
                  }
                  d.set(s, n);
                },
                [n]
              ),
              s),
            W = (0, i.__assign)((0, i.__assign)({}, O), w);
          return a.createElement(
            a.Fragment,
            null,
            v &&
              a.createElement(x, {
                sideCar: h,
                removeScrollBar: A,
                shards: C,
                noRelative: k,
                noIsolation: I,
                inert: E,
                setCallbacks: m,
                allowPinchZoom: !!B,
                lockRef: c,
                gapMode: M,
              }),
            g
              ? a.cloneElement(
                  a.Children.only(b),
                  (0, i.__assign)((0, i.__assign)({}, W), { ref: P })
                )
              : a.createElement(
                  void 0 === S ? "div" : S,
                  (0, i.__assign)({}, W, { className: y, ref: P }),
                  b
                )
          );
        });
      (w.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (w.classNames = { fullWidth: c, zeroRight: s });
      var m = function (e) {
        var t = e.sideCar,
          n = (0, i.__rest)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, (0, i.__assign)({}, n));
      };
      m.isSideCarExport = !0;
      var g = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = o || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, a;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = r)
                  : i.appendChild(document.createTextNode(r)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        b = function () {
          var e = g();
          return function (t, n) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        y = function () {
          var e = b();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        A = { left: 0, top: 0, right: 0, gap: 0 },
        v = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        C = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [v(n), v(r), v(o)];
        },
        x = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return A;
          var t = C(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        k = y(),
        I = "data-scroll-locked",
        E = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(I, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(s, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(s, " .")
              .concat(s, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " .")
              .concat(c, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(I, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        B = function () {
          var e = parseInt(document.body.getAttribute(I) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        S = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(I, (B() + 1).toString()),
              function () {
                var e = B() - 1;
                e <= 0
                  ? document.body.removeAttribute(I)
                  : document.body.setAttribute(I, e.toString());
              }
            );
          }, []);
        },
        M = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          S();
          var i = a.useMemo(
            function () {
              return x(o);
            },
            [o]
          );
          return a.createElement(k, {
            styles: E(i, !t, o, n ? "" : "!important"),
          });
        },
        O = !1;
      if ("undefined" != typeof window)
        try {
          var P = Object.defineProperty({}, "passive", {
            get: function () {
              return (O = !0), !0;
            },
          });
          window.addEventListener("test", P, P),
            window.removeEventListener("test", P, P);
        } catch (e) {
          O = !1;
        }
      var W = !!O && { passive: !1 },
        D = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        Q = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              U(e, r))
            ) {
              var o = R(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        U = function (e, t) {
          return "v" === e ? D(t, "overflowY") : D(t, "overflowX");
        },
        R = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        N = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            s = a * r,
            c = n.target,
            l = t.contains(c),
            u = !1,
            d = s > 0,
            p = 0,
            h = 0;
          do {
            if (!c) break;
            var f = R(e, c),
              w = f[0],
              m = f[1] - f[2] - a * w;
            (w || m) && U(e, c) && ((p += m), (h += w));
            var g = c.parentNode;
            c = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 1 > Math.abs(p)) || (!o && s > p))
              ? (u = !0)
              : !d && ((o && 1 > Math.abs(h)) || (!o && -s > h)) && (u = !0),
            u
          );
        },
        F = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        T = function (e) {
          return [e.deltaX, e.deltaY];
        },
        q = function (e) {
          return e && "current" in e ? e.current : e;
        },
        j = 0,
        L = [];
      let J =
        ((r = function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            o = a.useState(j++)[0],
            s = a.useState(y)[0],
            c = a.useRef(e);
          a.useEffect(
            function () {
              c.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, i.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(q),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = a.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !c.current.allowPinchZoom;
              var o,
                i = F(e),
                a = n.current,
                s = "deltaX" in e ? e.deltaX : a[0] - i[0],
                l = "deltaY" in e ? e.deltaY : a[1] - i[1],
                u = e.target,
                d = Math.abs(s) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === u.type) return !1;
              var p = window.getSelection(),
                h = p && p.anchorNode;
              if (h && (h === u || h.contains(u))) return !1;
              var f = Q(d, u);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = Q(d, u))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (s || l) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var w = r.current || o;
              return N(w, t, e, "h" === w ? s : l, !0);
            }, []),
            u = a.useCallback(function (e) {
              if (L.length && L[L.length - 1] === s) {
                var n = "deltaY" in e ? T(e) : F(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (c.current.shards || [])
                    .map(q)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? l(e, o[0]) : !c.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            d = a.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            p = a.useCallback(function (e) {
              (n.current = F(e)), (r.current = void 0);
            }, []),
            h = a.useCallback(function (t) {
              d(t.type, T(t), t.target, l(t, e.lockRef.current));
            }, []),
            f = a.useCallback(function (t) {
              d(t.type, F(t), t.target, l(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              L.push(s),
              e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: f,
              }),
              document.addEventListener("wheel", u, W),
              document.addEventListener("touchmove", u, W),
              document.addEventListener("touchstart", p, W),
              function () {
                (L = L.filter(function (e) {
                  return e !== s;
                })),
                  document.removeEventListener("wheel", u, W),
                  document.removeEventListener("touchmove", u, W),
                  document.removeEventListener("touchstart", p, W);
              }
            );
          }, []);
          var w = e.removeScrollBar,
            m = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            m
              ? a.createElement(s, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            w
              ? a.createElement(M, {
                  noRelative: e.noRelative,
                  gapMode: e.gapMode,
                })
              : null
          );
        }),
        h.useMedium(r),
        m);
      var K = a.forwardRef(function (e, t) {
        return a.createElement(
          w,
          (0, i.__assign)({}, e, { ref: t, sideCar: J })
        );
      });
      K.classNames = w.classNames;
      let G = K;
    },
    56666: (e, t, n) => {
      n.d(t, { Z: () => o });
      var r = n(7484),
        o = (e) => {
          let { projectId: t, options: o } = e;
          return {
            id: "walletConnect",
            name: "WalletConnect",
            installed: void 0,
            iconUrl: async () =>
              (await n.e(8662).then(n.bind(n, 78662))).default,
            iconBackground: "#3b99fc",
            qrCode: { getUri: (e) => e },
            createConnector: (0, r.Z)({
              projectId: t,
              walletConnectParameters: o,
            }),
          };
        };
    },
    57419: (e, t, n) => {
      n.d(t, { O: () => eF });
      var r = "user-agent",
        o = {
          FUNCTION: "function",
          OBJECT: "object",
          STRING: "string",
          UNDEFINED: "undefined",
        },
        i = "browser",
        a = "device",
        s = "engine",
        c = "result",
        l = "name",
        u = "type",
        d = "vendor",
        p = "version",
        h = "architecture",
        f = "major",
        w = "model",
        m = "console",
        g = "mobile",
        b = "tablet",
        y = "smarttv",
        A = "wearable",
        v = "embedded",
        C = "inapp",
        x = "brands",
        k = "formFactors",
        I = "fullVersionList",
        E = "platform",
        B = "platformVersion",
        S = "bitness",
        M = "sec-ch-ua",
        O = M + "-full-version-list",
        P = M + "-arch",
        W = M + "-" + S,
        D = M + "-form-factors",
        Q = M + "-" + g,
        U = M + "-" + w,
        R = M + "-" + E,
        N = R + "-version",
        F = [x, I, g, w, E, B, h, k, S],
        T = "Amazon",
        q = "Apple",
        j = "ASUS",
        L = "BlackBerry",
        J = "Google",
        K = "Huawei",
        G = "Lenovo",
        H = "Honor",
        V = "Microsoft",
        _ = "Motorola",
        Y = "Nvidia",
        z = "OnePlus",
        Z = "OPPO",
        X = "Samsung",
        $ = "Sharp",
        ee = "Sony",
        et = "Xiaomi",
        en = "Zebra",
        er = "Chrome",
        eo = "Chromium",
        ei = "Chromecast",
        ea = "Edge",
        es = "Firefox",
        ec = "Opera",
        el = "Facebook",
        eu = "Sogou",
        ed = "Mobile ",
        ep = " Browser",
        eh = "Windows",
        ef =
          typeof window !== o.UNDEFINED && window.navigator
            ? window.navigator
            : void 0,
        ew = ef && ef.userAgentData ? ef.userAgentData : void 0,
        em = function (e, t) {
          var n = {},
            r = t;
          if (!ey(t))
            for (var o in ((r = {}), t))
              for (var i in t[o]) r[i] = t[o][i].concat(r[i] ? r[i] : []);
          for (var a in e)
            n[a] = r[a] && r[a].length % 2 == 0 ? r[a].concat(e[a]) : e[a];
          return n;
        },
        eg = function (e) {
          for (var t = {}, n = 0; n < e.length; n++)
            t[e[n].toUpperCase()] = e[n];
          return t;
        },
        eb = function (e, t) {
          if (typeof e === o.OBJECT && e.length > 0) {
            for (var n in e) if (eC(t) == eC(e[n])) return !0;
            return !1;
          }
          return !!eA(e) && eC(t) == eC(e);
        },
        ey = function (e, t) {
          for (var n in e)
            return (
              /^(browser|cpu|device|engine|os)$/.test(n) || (!!t && ey(e[n]))
            );
        },
        eA = function (e) {
          return typeof e === o.STRING;
        },
        ev = function (e) {
          if (e) {
            for (var t = [], n = ek(e).split(","), r = 0; r < n.length; r++)
              if (n[r].indexOf(";") > -1) {
                var o = eB(n[r]).split(";v=");
                t[r] = { brand: o[0], version: o[1] };
              } else t[r] = eB(n[r]);
            return t;
          }
        },
        eC = function (e) {
          return eA(e) ? e.toLowerCase() : e;
        },
        ex = function (e) {
          return eA(e) ? eE(/[^\d\.]/g, e).split(".")[0] : void 0;
        },
        ek = function (e) {
          return eA(e) ? eB(eE(/\\?\"/g, e), 500) : void 0;
        },
        eI = function (e) {
          for (var t in e)
            if (e.hasOwnProperty(t)) {
              var n = e[t];
              typeof n == o.OBJECT && 2 == n.length
                ? (this[n[0]] = n[1])
                : (this[n] = void 0);
            }
          return this;
        },
        eE = function (e, t) {
          return eA(t) ? t.replace(e, "") : t;
        },
        eB = function (e, t) {
          return (
            (e = eE(/^\s\s*/, String(e))),
            typeof t === o.UNDEFINED ? e : e.substring(0, t)
          );
        },
        eS = function (e, t) {
          if (e && t)
            for (var n, r, i, a, s, c, l = 0; l < t.length && !s; ) {
              var u = t[l],
                d = t[l + 1];
              for (n = r = 0; n < u.length && !s && u[n]; )
                if ((s = u[n++].exec(e)))
                  for (i = 0; i < d.length; i++)
                    (c = s[++r]),
                      typeof (a = d[i]) === o.OBJECT && a.length > 0
                        ? 2 === a.length
                          ? typeof a[1] == o.FUNCTION
                            ? (this[a[0]] = a[1].call(this, c))
                            : (this[a[0]] = a[1])
                          : a.length >= 3 &&
                            (typeof a[1] !== o.FUNCTION ||
                            (a[1].exec && a[1].test)
                              ? 3 == a.length
                                ? (this[a[0]] = c
                                    ? c.replace(a[1], a[2])
                                    : void 0)
                                : 4 == a.length
                                ? (this[a[0]] = c
                                    ? a[3].call(this, c.replace(a[1], a[2]))
                                    : void 0)
                                : a.length > 4 &&
                                  (this[a[0]] = c
                                    ? a[3].apply(
                                        this,
                                        [c.replace(a[1], a[2])].concat(
                                          a.slice(4)
                                        )
                                      )
                                    : void 0)
                              : a.length > 3
                              ? (this[a[0]] = c
                                  ? a[1].apply(this, a.slice(2))
                                  : void 0)
                              : (this[a[0]] = c
                                  ? a[1].call(this, c, a[2])
                                  : void 0))
                        : (this[a] = c || void 0);
              l += 2;
            }
        },
        eM = function (e, t) {
          for (var n in t)
            if (typeof t[n] === o.OBJECT && t[n].length > 0) {
              for (var r = 0; r < t[n].length; r++)
                if (eb(t[n][r], e)) return "?" === n ? void 0 : n;
            } else if (eb(t[n], e)) return "?" === n ? void 0 : n;
          return t.hasOwnProperty("*") ? t["*"] : e;
        },
        eO = {
          ME: "4.90",
          "NT 3.51": "3.51",
          "NT 4.0": "4.0",
          2e3: ["5.0", "5.01"],
          XP: ["5.1", "5.2"],
          Vista: "6.0",
          7: "6.1",
          8: "6.2",
          8.1: "6.3",
          10: ["6.4", "10.0"],
          NT: "",
        },
        eP = {
          embedded: "Automotive",
          mobile: "Mobile",
          tablet: ["Tablet", "EInk"],
          smarttv: "TV",
          wearable: "Watch",
          xr: ["VR", "XR"],
          "?": ["Desktop", "Unknown"],
          "*": void 0,
        },
        eW = {
          Chrome: "Google Chrome",
          Edge: "Microsoft Edge",
          "Edge WebView2": "Microsoft Edge WebView2",
          "Chrome WebView": "Android WebView",
          "Chrome Headless": "HeadlessChrome",
          "Huawei Browser": "HuaweiBrowser",
          "MIUI Browser": "Miui Browser",
          "Opera Mobi": "OperaMobile",
          Yandex: "YaBrowser",
        },
        eD = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [p, [l, ed + "Chrome"]],
            [/webview.+edge\/([\w\.]+)/i],
            [p, [l, ea + " WebView"], [u, C]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [p, [l, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [l, p],
            [/opios[\/ ]+([\w\.]+)/i],
            [p, [l, ec + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [p, [l, ec + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [p, [l, ec]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [p, [l, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [p, [l, "Maxthon"]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
              /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
              /(brave)(?: chrome)?\/([\d\.]+)/i,
              /(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
              /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
              /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i,
            ],
            [l, p],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [p, [l, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [p, [l, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb| ucpc)[\/ ]?([\w\.]+)/i],
            [p, [l, "UCBrowser"]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i,
            ],
            [p, [l, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [p, [l, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [p, [l, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [p, [l, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [p, [l, "Smart " + G + ep]],
            [/(av(?:ast|g|ira))\/([\w\.]+)/i],
            [[l, /(.+)/, "$1 Secure" + ep], p],
            [/norton\/([\w\.]+)/i],
            [p, [l, "Norton Private" + ep]],
            [/\bfocus\/([\w\.]+)/i],
            [p, [l, es + " Focus"]],
            [/ mms\/([\w\.]+)$/i],
            [p, [l, ec + " Neon"]],
            [/ opt\/([\w\.]+)$/i],
            [p, [l, ec + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [p, [l, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [p, [l, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [p, [l, ec + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [p, [l, "MIUI" + ep]],
            [/fxios\/([\w\.-]+)/i],
            [p, [l, ed + es]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [p, [l, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [[l, /(.+)/, "$1Browser"], p],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[l, /(.+)/, "$1" + ep], p],
            [/ HBPC\/([\w\.]+)/],
            [p, [l, K + ep]],
            [/samsungbrowser\/([\w\.]+)/i],
            [p, [l, X + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [p, [l, eu + " Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[l, eu + " Mobile"], p],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [l, p],
            [/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
            [l],
            [/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
            [p, l],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[l, el], p, [u, C]],
            [
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /(daum)apps[\/ ]([\w\.]+)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(alipay)client\/([\w\.]+)/i,
              /(twitter)(?:and| f.+e\/([\w\.]+))/i,
              /(bing)(?:web|sapphire)\/([\w\.]+)/i,
              /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i,
            ],
            [l, p, [u, C]],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [p, [l, "GSA"], [u, C]],
            [/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
            [p, [l, "TikTok"], [u, C]],
            [/\[(linkedin)app\]/i],
            [l, [u, C]],
            [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
            [[l, /(.+)/, "Zalo"], p, [u, C]],
            [/(chromium)[\/ ]([-\w\.]+)/i],
            [l, p],
            [/ome-(lighthouse)$/i],
            [l, [u, "fetcher"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [p, [l, er + " Headless"]],
            [/wv\).+chrome\/([\w\.]+).+edgw\//i],
            [p, [l, ea + " WebView2"], [u, C]],
            [/; wv\).+(chrome)\/([\w\.]+)/i],
            [[l, er + " WebView"], p, [u, C]],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [p, [l, "Android" + ep]],
            [/chrome\/([\w\.]+) mobile/i],
            [p, [l, ed + "Chrome"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [l, p],
            [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
            [p, [l, ed + "Safari"]],
            [/iphone .*mobile(?:\/\w+ | ?)safari/i],
            [[l, ed + "Safari"]],
            [/version\/([\w\.\,]+) .*(safari)/i],
            [p, l],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [l, [p, "1"]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [l, p],
            [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
            [[l, ed + es], p],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[l, "Netscape"], p],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [l, p],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [p, [l, es + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
              /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /\b(links) \(([\w\.]+)/i,
            ],
            [l, [p, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [l, [p, /[^\d\.]+./, ""]],
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [[h, "amd64"]],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [[h, "ia32"]],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [[h, "arm64"]],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [[h, "armhf"]],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [[h, "arm"]],
            [/ sun4\w[;\)]/i],
            [[h, "sparc"]],
            [
              /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
              /((ppc|powerpc)(64)?)( mac|;|\))/i,
              /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i,
            ],
            [[h, /ower/, "", eC]],
            [/mc680.0/i],
            [[h, "68k"]],
            [/winnt.+\[axp/i],
            [[h, "alpha"]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [w, [d, X], [u, b]],
            [
              /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [w, [d, X], [u, g]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
            [w, [d, q], [u, g]],
            [
              /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
              /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i,
            ],
            [w, [d, q], [u, b]],
            [/(macintosh);/i],
            [w, [d, q]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [w, [d, $], [u, g]],
            [
              /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
            ],
            [w, [d, H], [u, b]],
            [/honor([-\w ]+)[;\)]/i],
            [w, [d, H], [u, g]],
            [
              /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
            ],
            [w, [d, K], [u, b]],
            [
              /(?:huawei) ?([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i,
            ],
            [w, [d, K], [u, g]],
            [
              /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
              /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
            ],
            [
              [w, /_/g, " "],
              [d, et],
              [u, b],
            ],
            [
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
              /; ([\w ]+) miui\/v?\d/i,
            ],
            [
              [w, /_/g, " "],
              [d, et],
              [u, g],
            ],
            [
              /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [w, [d, z], [u, g]],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [w, [d, Z], [u, g]],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [
              w,
              [
                d,
                eM,
                { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": Z },
              ],
              [u, b],
            ],
            [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
            [w, [d, "BLU"], [u, g]],
            [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [w, [d, "Vivo"], [u, g]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [w, [d, "Realme"], [u, g]],
            [
              /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
              /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
            ],
            [w, [d, G], [u, b]],
            [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
            [w, [d, G], [u, g]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
              /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i,
            ],
            [w, [d, _], [u, g]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [w, [d, _], [u, b]],
            [/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [w, [d, "LG"], [u, b]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [w, [d, "LG"], [u, g]],
            [/(nokia) (t[12][01])/i],
            [d, w, [u, b]],
            [
              /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
              /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i,
            ],
            [
              [w, /_/g, " "],
              [u, g],
              [d, "Nokia"],
            ],
            [/(pixel (c|tablet))\b/i],
            [w, [d, J], [u, b]],
            [
              /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i,
            ],
            [w, [d, J], [u, g]],
            [/(google) (pixelbook( go)?)/i],
            [d, w],
            [
              /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [w, [d, ee], [u, g]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [w, "Xperia Tablet"],
              [d, ee],
              [u, b],
            ],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [w, [d, T], [u, b]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [w, /(.+)/g, "Fire Phone $1"],
              [d, T],
              [u, g],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [w, d, [u, b]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
            [w, [d, L], [u, g]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [w, [d, j], [u, b]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [w, [d, j], [u, g]],
            [/(nexus 9)/i],
            [w, [d, "HTC"], [u, b]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [d, [w, /_/g, " "], [u, g]],
            [
              /tcl (xess p17aa)/i,
              /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
            ],
            [w, [d, "TCL"], [u, b]],
            [
              /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
            ],
            [w, [d, "TCL"], [u, g]],
            [/(itel) ((\w+))/i],
            [
              [d, eC],
              w,
              [u, eM, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [w, [d, "Acer"], [u, b]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [w, [d, "Meizu"], [u, g]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [w, [d, "Ulefone"], [u, g]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [w, [d, "Energizer"], [u, g]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [w, [d, "Cat"], [u, g]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [w, [d, "Smartfren"], [u, g]],
            [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
            [w, [d, "Nothing"], [u, g]],
            [
              /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
              /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
            ],
            [w, [d, "Archos"], [u, b]],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [w, [d, "Archos"], [u, g]],
            [/blackview ([-\w ]+)( b|\))/i, /; (bv\d{4}[-\w ]*)( b|\))/i],
            [w, [d, "Blackview"], [u, g]],
            [/; (n159v)/i],
            [w, [d, "HMD"], [u, g]],
            [/((revvl[ \w\+]+|tm(?:rv|af)\w*[45]g(?:tb)?))( b|\))/i],
            [
              w,
              [
                u,
                function (e, t) {
                  return t.test.test(e) ? t.ifTrue : t.ifFalse;
                },
                { test: /ta?b/i, ifTrue: b, ifFalse: g },
              ],
              [d, "T-Mobile"],
            ],
            [
              /(imo) (tab \w+)/i,
              /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i,
            ],
            [d, w, [u, b]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
              /; (blu|coolpad|cubot|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([-\w\+ ]+?)(?: bui|\)|; r)/i,
              /(hp) ([\w ]+\w)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(oppo) ?([\w ]+) bui/i,
              /(hisense) ([ehv][\w ]+)\)/i,
              /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i,
            ],
            [d, w, [u, g]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
            ],
            [d, w, [u, b]],
            [/(surface duo)/i],
            [w, [d, V], [u, b]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [w, [d, "Fairphone"], [u, g]],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [w, [d, Y], [u, b]],
            [/(sprint) (\w+)/i],
            [d, w, [u, g]],
            [/(kin\.[onetw]{3})/i],
            [
              [w, /\./g, " "],
              [d, V],
              [u, g],
            ],
            [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [w, [d, en], [u, b]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [w, [d, en], [u, g]],
            [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
            [d, [u, y]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [w, /^/, "SmartTV"],
              [d, X],
              [u, y],
            ],
            [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
            [d, w, [u, y]],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [d, "LG"],
              [u, y],
            ],
            [/(apple) ?tv/i],
            [d, [w, q + " TV"], [u, y]],
            [/crkey.*devicetype\/chromecast/i],
            [
              [w, ei + " Third Generation"],
              [d, J],
              [u, y],
            ],
            [/crkey.*devicetype\/([^/]*)/i],
            [
              [w, /^/, "Chromecast "],
              [d, J],
              [u, y],
            ],
            [/fuchsia.*crkey/i],
            [
              [w, ei + " Nest Hub"],
              [d, J],
              [u, y],
            ],
            [/crkey/i],
            [
              [w, ei],
              [d, J],
              [u, y],
            ],
            [/(portaltv)/i],
            [w, [d, el], [u, y]],
            [/droid.+aft(\w+)( bui|\))/i],
            [w, [d, T], [u, y]],
            [/(shield \w+ tv)/i],
            [w, [d, Y], [u, y]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [w, [d, $], [u, y]],
            [/(bravia[\w ]+)( bui|\))/i],
            [w, [d, ee], [u, y]],
            [/(mi(tv|box)-?\w+) bui/i],
            [w, [d, et], [u, y]],
            [/Hbbtv.*(technisat) (.*);/i],
            [d, w, [u, y]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [d, /.+\/(\w+)/, "$1", eM, { LG: "lge" }],
              [w, eB],
              [u, y],
            ],
            [/(playstation \w+)/i],
            [w, [d, ee], [u, m]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [w, [d, V], [u, m]],
            [
              /(ouya)/i,
              /(nintendo) (\w+)/i,
              /(retroid) (pocket ([^\)]+))/i,
              /(valve).+(steam deck)/i,
              /droid.+; ((shield|rgcube|gr0006))( bui|\))/i,
            ],
            [
              [
                d,
                eM,
                { Nvidia: "Shield", Anbernic: "RGCUBE", Logitech: "GR0006" },
              ],
              w,
              [u, m],
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [w, [d, X], [u, A]],
            [
              /((pebble))app/i,
              /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
            ],
            [d, w, [u, A]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [w, [d, Z], [u, A]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [w, [d, q], [u, A]],
            [/(opwwe\d{3})/i],
            [w, [d, z], [u, A]],
            [/(moto 360)/i],
            [w, [d, _], [u, A]],
            [/(smartwatch 3)/i],
            [w, [d, ee], [u, A]],
            [/(g watch r)/i],
            [w, [d, "LG"], [u, A]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [w, [d, en], [u, A]],
            [/droid.+; (glass) \d/i],
            [w, [d, J], [u, "xr"]],
            [/(pico) ([\w ]+) os\d/i],
            [d, w, [u, "xr"]],
            [/(quest( \d| pro)?s?).+vr/i],
            [w, [d, el], [u, "xr"]],
            [/mobile vr; rv.+firefox/i],
            [[u, "xr"]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [d, [u, v]],
            [/(aeobc)\b/i],
            [w, [d, T], [u, v]],
            [/(homepod).+mac os/i],
            [w, [d, q], [u, v]],
            [/windows iot/i],
            [[u, v]],
            [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
            [w, [u, y]],
            [
              /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i,
            ],
            [[u, y]],
            [
              /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i,
            ],
            [w, [u, eM, { mobile: "Mobile", xr: "VR", "*": b }]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[u, b]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[u, g]],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [w, [d, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [p, [l, ea + "HTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [l, p],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [p, [l, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [l, p],
            [/ladybird\//i],
            [[l, "LibWeb"]],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [p, l],
          ],
          os: [
            [/(windows nt) (6\.[23]); arm/i],
            [
              [l, /N/, "R"],
              [p, eM, eO],
            ],
            [
              /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
              /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i,
            ],
            [l, p],
            [
              /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
              /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i,
            ],
            [
              [p, /(;|\))/g, "", eM, eO],
              [l, eh],
            ],
            [/(windows ce)\/?([\d\.]*)/i],
            [l, p],
            [
              /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
              /\btvos ?([\w\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [p, /_/g, "."],
              [l, "iOS"],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i,
            ],
            [
              [l, "macOS"],
              [p, /_/g, "."],
            ],
            [/android ([\d\.]+).*crkey/i],
            [p, [l, ei + " Android"]],
            [/fuchsia.*crkey\/([\d\.]+)/i],
            [p, [l, ei + " Fuchsia"]],
            [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
            [p, [l, ei + " SmartSpeaker"]],
            [/linux.*crkey\/([\d\.]+)/i],
            [p, [l, ei + " Linux"]],
            [/crkey\/([\d\.]+)/i],
            [p, [l, ei]],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [p, l],
            [/(ubuntu) ([\w\.]+) like android/i],
            [[l, /(.+)/, "$1 Touch"], p],
            [
              /(harmonyos)[\/ ]?([\d\.]*)/i,
              /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i,
            ],
            [l, p],
            [/\(bb(10);/i],
            [p, [l, L]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [p, [l, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i,
            ],
            [p, [l, es + " OS"]],
            [
              /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
              /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i,
            ],
            [p, [l, "webOS"]],
            [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
            [
              [
                p,
                eM,
                {
                  25: "120",
                  24: "108",
                  23: "94",
                  22: "87",
                  6: "79",
                  5: "68",
                  4: "53",
                  3: "38",
                  2: "538",
                  1: "537",
                  "*": "TV",
                },
              ],
              [l, "webOS"],
            ],
            [/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
            [p, [l, "watchOS"]],
            [/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
            [p, [l, "Chrome OS"]],
            [/kepler ([\w\.]+); (aft|aeo)/i],
            [p, [l, "Vega OS"]],
            [
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) (\w+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /(pico) .+os([\w\.]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
              /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /\b(aix)[; ]([1-9\.]{0,4})/i,
              /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) ?(r\d)?/i,
            ],
            [l, p],
            [/(sunos) ?([\d\.]*)/i],
            [[l, "Solaris"], p],
            [
              /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [l, p],
          ],
        },
        eQ = (function () {
          var e = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
          return (
            eI.call(e.init, [
              [i, [l, p, f, u]],
              ["cpu", [h]],
              [a, [u, w, d]],
              [s, [l, p]],
              ["os", [l, p]],
            ]),
            eI.call(e.isIgnore, [
              [i, [p, f]],
              [s, [p]],
              ["os", [p]],
            ]),
            eI.call(e.isIgnoreRgx, [
              [i, / ?browser$/i],
              ["os", / ?os$/i],
            ]),
            eI.call(e.toString, [
              [i, [l, p]],
              ["cpu", [h]],
              [a, [d, w]],
              [s, [l, p]],
              ["os", [l, p]],
            ]),
            e
          );
        })(),
        eU = function (e, t) {
          var n = eQ.init[t],
            r = eQ.isIgnore[t] || 0,
            i = eQ.isIgnoreRgx[t] || 0,
            a = eQ.toString[t] || 0;
          function s() {
            eI.call(this, n);
          }
          return (
            (s.prototype.getItem = function () {
              return e;
            }),
            (s.prototype.withClientHints = function () {
              return ew
                ? ew.getHighEntropyValues(F).then(function (t) {
                    return e.setCH(new eR(t, !1)).parseCH().get();
                  })
                : e.parseCH().get();
            }),
            (s.prototype.withFeatureCheck = function () {
              return e.detectFeature().get();
            }),
            t != c &&
              ((s.prototype.is = function (e) {
                var t = !1;
                for (var n in this)
                  if (
                    this.hasOwnProperty(n) &&
                    !eb(r, n) &&
                    eC(i ? eE(i, this[n]) : this[n]) == eC(i ? eE(i, e) : e)
                  ) {
                    if (((t = !0), e != o.UNDEFINED)) break;
                  } else if (e == o.UNDEFINED && t) {
                    t = !t;
                    break;
                  }
                return t;
              }),
              (s.prototype.toString = function () {
                var e = "";
                for (var t in a)
                  typeof this[a[t]] !== o.UNDEFINED &&
                    (e += (e ? " " : "") + this[a[t]]);
                return e || o.UNDEFINED;
              })),
            (s.prototype.then = function (e) {
              var t = this,
                n = function () {
                  for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                };
              n.prototype = {
                is: s.prototype.is,
                toString: s.prototype.toString,
                withClientHints: s.prototype.withClientHints,
                withFeatureCheck: s.prototype.withFeatureCheck,
              };
              var r = new n();
              return e(r), r;
            }),
            new s()
          );
        };
      function eR(e, t) {
        if (((e = e || {}), eI.call(this, F), t))
          eI.call(this, [
            [x, ev(e[M])],
            [I, ev(e[O])],
            [g, /\?1/.test(e[Q])],
            [w, ek(e[U])],
            [E, ek(e[R])],
            [B, ek(e[N])],
            [h, ek(e[P])],
            [k, ev(e[D])],
            [S, ek(e[W])],
          ]);
        else
          for (var n in e)
            this.hasOwnProperty(n) &&
              typeof e[n] !== o.UNDEFINED &&
              (this[n] = e[n]);
      }
      function eN(e, t, n, r) {
        return (
          eI.call(this, [
            ["itemType", e],
            ["ua", t],
            ["uaCH", r],
            ["rgxMap", n],
            ["data", eU(this, e)],
          ]),
          this
        );
      }
      function eF(e, t, n) {
        if (
          (typeof e === o.OBJECT
            ? (ey(e, !0)
                ? (typeof t === o.OBJECT && (n = t), (t = e))
                : ((n = e), (t = void 0)),
              (e = void 0))
            : typeof e !== o.STRING || ey(t, !0) || ((n = t), (t = void 0)),
          n)
        )
          if (typeof n.append === o.FUNCTION) {
            var l = {};
            n.forEach(function (e, t) {
              l[String(t).toLowerCase()] = e;
            }),
              (n = l);
          } else {
            var u = {};
            for (var d in n)
              n.hasOwnProperty(d) && (u[String(d).toLowerCase()] = n[d]);
            n = u;
          }
        if (!(this instanceof eF)) return new eF(e, t, n).getResult();
        var p =
            typeof e === o.STRING
              ? e
              : n && n[r]
              ? n[r]
              : ef && ef.userAgent
              ? ef.userAgent
              : "",
          h = new eR(n, !0),
          f = eD,
          w = function (e) {
            return e == c
              ? function () {
                  return new eN(e, p, f, h)
                    .set("ua", p)
                    .set(i, this.getBrowser())
                    .set("cpu", this.getCPU())
                    .set(a, this.getDevice())
                    .set(s, this.getEngine())
                    .set("os", this.getOS())
                    .get();
                }
              : function () {
                  return new eN(e, p, f[e], h).parseUA().get();
                };
          };
        return (
          eI
            .call(this, [
              ["getBrowser", w(i)],
              ["getCPU", w("cpu")],
              ["getDevice", w(a)],
              ["getEngine", w(s)],
              ["getOS", w("os")],
              ["getResult", w(c)],
              [
                "getUA",
                function () {
                  return p;
                },
              ],
              [
                "setUA",
                function (e) {
                  return eA(e) && (p = eB(e, 500)), this;
                },
              ],
              [
                "useExtension",
                function (e) {
                  return e && (f = em(f, e)), this;
                },
              ],
            ])
            .setUA(p)
            .useExtension(t),
          this
        );
      }
      (eN.prototype.get = function (e) {
        return e
          ? this.data.hasOwnProperty(e)
            ? this.data[e]
            : void 0
          : this.data;
      }),
        (eN.prototype.set = function (e, t) {
          return (this.data[e] = t), this;
        }),
        (eN.prototype.setCH = function (e) {
          return (this.uaCH = e), this;
        }),
        (eN.prototype.detectFeature = function () {
          if (ef && ef.userAgent == this.ua)
            switch (this.itemType) {
              case i:
                ef.brave &&
                  typeof ef.brave.isBrave == o.FUNCTION &&
                  this.set(l, "Brave");
                break;
              case a:
                !this.get(u) && ew && ew[g] && this.set(u, g),
                  "Macintosh" == this.get(w) &&
                    ef &&
                    typeof ef.standalone !== o.UNDEFINED &&
                    ef.maxTouchPoints &&
                    ef.maxTouchPoints > 2 &&
                    this.set(w, "iPad").set(u, b);
                break;
              case "os":
                !this.get(l) && ew && ew[E] && this.set(l, ew[E]);
                break;
              case c:
                var e = this.data,
                  t = function (t) {
                    return e[t].getItem().detectFeature().get();
                  };
                this.set(i, t(i))
                  .set("cpu", t("cpu"))
                  .set(a, t(a))
                  .set(s, t(s))
                  .set("os", t("os"));
            }
          return this;
        }),
        (eN.prototype.parseUA = function () {
          switch (
            (this.itemType != c && eS.call(this.data, this.ua, this.rgxMap),
            this.itemType)
          ) {
            case i:
              this.set(f, ex(this.get(p)));
              break;
            case "os":
              if (
                "iOS" == this.get(l) &&
                this.get(p) &&
                /^1[89][^\d]/.exec(this.get(p))
              ) {
                var e = /\) Version\/((\d+)[\d\.]*)/.exec(this.ua);
                e && parseInt(e[2], 10) >= 26 && this.set(p, e[1]);
              }
          }
          return this;
        }),
        (eN.prototype.parseCH = function () {
          var e = this.uaCH,
            t = this.rgxMap;
          switch (this.itemType) {
            case i:
            case s:
              var n,
                r = e[I] || e[x];
              if (r)
                for (var o = 0; o < r.length; o++) {
                  var m = r[o].brand || r[o],
                    b = r[o].version;
                  this.itemType == i &&
                    !/not.a.brand/i.test(m) &&
                    (!n ||
                      (/Chrom/.test(n) && m != eo) ||
                      (n == ea && /WebView2/.test(m))) &&
                    ((m = eM(m, eW)),
                    ((n = this.get(l)) &&
                      !/Chrom/.test(n) &&
                      /Chrom/.test(m)) ||
                      this.set(l, m).set(p, b).set(f, ex(b)),
                    (n = m)),
                    this.itemType == s && m == eo && this.set(p, b);
                }
              break;
            case "cpu":
              var y = e[h];
              y &&
                (y && "64" == e[S] && (y += "64"),
                eS.call(this.data, y + ";", t));
              break;
            case a:
              if (
                (e[g] && this.set(u, g),
                e[w] && (this.set(w, e[w]), !this.get(u) || !this.get(d)))
              ) {
                var A,
                  v = {};
                eS.call(v, "droid 9; " + e[w] + ")", t),
                  !this.get(u) && v.type && this.set(u, v.type),
                  !this.get(d) && v.vendor && this.set(d, v.vendor);
              }
              if (e[k]) {
                if ("string" != typeof e[k])
                  for (var C = 0; !A && C < e[k].length; )
                    A = eM(e[k][C++], eP);
                else A = eM(e[k], eP);
                this.set(u, A);
              }
              break;
            case "os":
              var M = e[E];
              if (M) {
                var O = e[B];
                M == eh && (O = parseInt(ex(O), 10) >= 13 ? "11" : "10"),
                  this.set(l, M).set(p, O);
              }
              this.get(l) == eh &&
                "Xbox" == e[w] &&
                this.set(l, "Xbox").set(p, void 0);
              break;
            case c:
              var P = this.data,
                W = function (t) {
                  return P[t].getItem().setCH(e).parseCH().get();
                };
              this.set(i, W(i))
                .set("cpu", W("cpu"))
                .set(a, W(a))
                .set(s, W(s))
                .set("os", W("os"));
          }
          return this;
        }),
        (eF.VERSION = "2.0.10"),
        (eF.BROWSER = eg([l, p, f, u])),
        (eF.CPU = eg([h])),
        (eF.DEVICE = eg([w, d, u, m, g, y, b, A, v])),
        (eF.ENGINE = eF.OS = eg([l, p]));
    },
    57887: (e, t, n) => {
      n.d(t, { $: () => s });
      var r =
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        o = {
          rounded: 'SFRounded, ui-rounded, "SF Pro Rounded", '.concat(r),
          system: r,
        },
        i = {
          large: {
            actionButton: "9999px",
            connectButton: "12px",
            modal: "24px",
            modalMobile: "28px",
          },
          medium: {
            actionButton: "10px",
            connectButton: "8px",
            modal: "16px",
            modalMobile: "18px",
          },
          none: {
            actionButton: "0px",
            connectButton: "0px",
            modal: "0px",
            modalMobile: "0px",
          },
          small: {
            actionButton: "4px",
            connectButton: "4px",
            modal: "8px",
            modalMobile: "8px",
          },
        },
        a = {
          large: { modalOverlay: "blur(20px)" },
          none: { modalOverlay: "blur(0px)" },
          small: { modalOverlay: "blur(4px)" },
        },
        s = (e) => {
          let {
            borderRadius: t = "large",
            fontStack: n = "rounded",
            overlayBlur: r = "none",
          } = e;
          return {
            blurs: { modalOverlay: a[r].modalOverlay },
            fonts: { body: o[n] },
            radii: {
              actionButton: i[t].actionButton,
              connectButton: i[t].connectButton,
              menuButton: i[t].connectButton,
              modal: i[t].modal,
              modalMobile: i[t].modalMobile,
            },
          };
        };
    },
    61058: (e, t, n) => {
      n.d(t, { u: () => u });
      var r = n(34929);
      async function o(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: r } = e.state,
            o = t.get(r);
          n = o?.connector;
        }
        let r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var i = n(37762),
        a = n(52835);
      let s = [];
      function c(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, a.b)(s, t)
          ? s
          : ((s = t), t);
      }
      var l = n(50625);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, i.U)(e),
          s = { mutationFn: (e) => o(n, e), mutationKey: ["disconnect"] },
          { mutate: u, mutateAsync: d, ...p } = (0, r.n)({ ...t, ...s });
        return {
          ...p,
          connectors: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, i.U)(e);
            return (0, l.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => c(e), n, { equalityFn: a.b });
                })(t, { onChange: e }),
              () => c(t),
              () => c(t)
            );
          })({ config: n }).map((e) => e.connector),
          disconnect: u,
          disconnectAsync: d,
        };
      }
    },
    61829: (e, t, n) => {
      n.d(t, { r: () => c });
      var r = n(72162),
        o = n(19955),
        i = n(71977),
        a = n(7407),
        s = n(63197);
      async function c(e, t = {}) {
        let n,
          { assertChainId: l = !0 } = t;
        if (t.connector) {
          let { connector: r } = t;
          if (
            "reconnecting" === e.state.status &&
            !r.getAccounts &&
            !r.getChainId
          )
            throw new s.HF({ connector: r });
          let [o, i] = await Promise.all([
            r.getAccounts().catch((e) => {
              if (null === t.account) return [];
              throw e;
            }),
            r.getChainId(),
          ]);
          n = { accounts: o, chainId: i, connector: r };
        } else n = e.state.connections.get(e.state.current);
        if (!n) throw new s.gC();
        let u = t.chainId ?? n.chainId,
          d = await n.connector.getChainId();
        if (l && d !== u)
          throw new s.xU({ connectionChainId: u, connectorChainId: d });
        let p = n.connector;
        if (p.getClient) return p.getClient({ chainId: u });
        let h = (0, i.J)(t.account ?? n.accounts[0]);
        if (
          (h && (h.address = (0, a.b)(h.address)),
          t.account &&
            !n.accounts.some(
              (e) => e.toLowerCase() === h.address.toLowerCase()
            ))
        )
          throw new s.aj({ address: h.address, connector: p });
        let f = e.chains.find((e) => e.id === u),
          w = await n.connector.getProvider({ chainId: u });
        return (0, r.UU)({
          account: h,
          chain: f,
          name: "Connector Client",
          transport: (e) => (0, o.I)(w)({ ...e, retryCount: 0 }),
        });
      }
    },
    63197: (e, t, n) => {
      n.d(t, {
        HF: () => l,
        aj: () => s,
        gC: () => a,
        nM: () => i,
        nk: () => o,
        xU: () => c,
      });
      var r = n(44892);
      class o extends r.C {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class i extends r.C {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class a extends r.C {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      r.C;
      class s extends r.C {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class c extends r.C {
        constructor({ connectionChainId: e, connectorChainId: t }) {
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class l extends r.C {
        constructor({ connector: e }) {
          super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details:
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    63402: (e, t, n) => {
      n.d(t, { s: () => r });
      function r(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = n?.accounts,
          o = r?.[0],
          i = e.chains.find((e) => e.id === n?.chainId),
          a = e.state.status;
        switch (a) {
          case "connected":
            return {
              address: o,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "reconnecting":
            return {
              address: o,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!o,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: a,
            };
          case "connecting":
            return {
              address: o,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: a,
            };
        }
      }
    },
    64422: (e, t, n) => {
      n.d(t, { S: () => i });
      var r = n(63197),
        o = n(92054);
      async function i(e, t) {
        let { addEthereumChainParameter: n, chainId: i } = t,
          a = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (a) {
          let e = a.connector;
          if (!e.switchChain) throw new o.V({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: n,
            chainId: i,
          });
        }
        let s = e.chains.find((e) => e.id === i);
        if (!s) throw new r.nk();
        return e.setState((e) => ({ ...e, chainId: i })), s;
      }
    },
    65687: (e, t, n) => {
      n.d(t, { r: () => r });
      let r = "2.22.1";
    },
    65837: (e, t, n) => {
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                !(function (e, t, n) {
                  var r;
                  (t =
                    "symbol" ==
                    typeof (r = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string"))
                      ? r
                      : String(r)) in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
                })(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      n.d(t, { U: () => a });
      var i = (e) => e,
        a = function () {
          return (function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = Object.assign({}, ...t.map((e) => e.styles)),
              a = Object.keys(r),
              s = a.filter((e) => "mappings" in r[e]);
            return Object.assign(
              (e) => {
                var t = [],
                  n = {},
                  a = o({}, e),
                  c = !1;
                for (var l of s) {
                  var u = e[l];
                  if (null != u)
                    for (var d of ((c = !0), r[l].mappings))
                      (n[d] = u), null == a[d] && delete a[d];
                }
                var p = c ? o(o({}, n), a) : e;
                for (var h in p)
                  if (
                    (function () {
                      var e = p[h],
                        n = r[h];
                      try {
                        if (n.mappings) return 1;
                        if ("string" == typeof e || "number" == typeof e)
                          t.push(n.values[e].defaultClass);
                        else if (Array.isArray(e))
                          for (var o = 0; o < e.length; o++) {
                            var i = e[o];
                            if (null != i) {
                              var a = n.responsiveArray[o];
                              t.push(n.values[i].conditions[a]);
                            }
                          }
                        else
                          for (var s in e) {
                            var c = e[s];
                            null != c && t.push(n.values[c].conditions[s]);
                          }
                      } catch (e) {
                        throw e;
                      }
                    })()
                  )
                    continue;
                return i(t.join(" "));
              },
              { properties: new Set(a) }
            );
          })(...arguments);
        };
    },
    73475: (e, t, n) => {
      n.d(t, { w: () => o });
      var r = n(5653),
        o = () => ({
          id: "injected",
          name: "Browser Wallet",
          iconUrl: async () => (await n.e(7720).then(n.bind(n, 17720))).default,
          iconBackground: "#fff",
          createConnector: (0, r.o)({}),
        });
    },
    74292: (e, t, n) => {
      n.d(t, { $: () => c });
      var r = n(35893),
        o = n(63197),
        i = n(71530),
        a = n(7407),
        s = n(42959);
      function c(e = {}) {
        let t, l, u, d;
        return (0, r.U)((r) => ({
          id: "baseAccount",
          name: "Base Account",
          rdns: "app.base.account",
          type: "baseAccount",
          async connect({ chainId: e, withCapabilities: t, ...n } = {}) {
            try {
              let c = await this.getProvider(),
                p = e ?? r.chains[0]?.id;
              if (!p) throw new o.nk();
              let h = await c.request({
                  method: "wallet_connect",
                  params: [
                    {
                      capabilities:
                        "capabilities" in n && n.capabilities
                          ? n.capabilities
                          : {},
                      chainIds: [
                        (0, i.cK)(p),
                        ...r.chains
                          .filter((e) => e.id !== p)
                          .map((e) => (0, i.cK)(e.id)),
                      ],
                    },
                  ],
                }),
                f = h.accounts.map((e) => ({
                  address: (0, a.b)(e.address),
                  capabilities: e.capabilities ?? {},
                })),
                w = Number(h.chainIds[0]);
              if (
                (l ||
                  ((l = this.onAccountsChanged.bind(this)),
                  c.on("accountsChanged", l)),
                u ||
                  ((u = this.onChainChanged.bind(this)),
                  c.on("chainChanged", u)),
                d ||
                  ((d = this.onDisconnect.bind(this)), c.on("disconnect", d)),
                e && w !== e)
              ) {
                let t = await this.switchChain({ chainId: e }).catch((e) => {
                  if (e.code === s.vx.code) throw e;
                  return { id: w };
                });
                w = t?.id ?? w;
              }
              return { accounts: t ? f : f.map((e) => e.address), chainId: w };
            } catch (e) {
              if (
                /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                  e.message
                )
              )
                throw new s.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            l && (e.removeListener("accountsChanged", l), (l = void 0)),
              u && (e.removeListener("chainChanged", u), (u = void 0)),
              d && (e.removeListener("disconnect", d), (d = void 0)),
              e.disconnect();
          },
          async getAccounts() {
            let e = await this.getProvider();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, a.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            if (!t) {
              let o =
                  "string" == typeof e.preference
                    ? { options: e.preference }
                    : {
                        ...e.preference,
                        options: e.preference?.options ?? "all",
                      },
                { createBaseAccountSDK: i } = await Promise.all([
                  n.e(1067),
                  n.e(2065),
                  n.e(369),
                  n.e(9220),
                ]).then(n.bind(n, 59220));
              t = i({
                ...e,
                appChainIds: r.chains.map((e) => e.id),
                preference: o,
              }).getProvider();
            }
            return t;
          },
          async isAuthorized() {
            try {
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = r.chains.find((e) => e.id === t);
            if (!n) throw new s.ch(new o.nk());
            let a = await this.getProvider();
            try {
              return (
                await a.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, i.cK)(n.id) }],
                }),
                n
              );
            } catch (r) {
              if (4902 === r.code)
                try {
                  let r, o;
                  (r = e?.blockExplorerUrls
                    ? e.blockExplorerUrls
                    : n.blockExplorers?.default.url
                    ? [n.blockExplorers?.default.url]
                    : []),
                    (o = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [n.rpcUrls.default?.http[0] ?? ""]);
                  let s = {
                    blockExplorerUrls: r,
                    chainId: (0, i.cK)(t),
                    chainName: e?.chainName ?? n.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? n.nativeCurrency,
                    rpcUrls: o,
                  };
                  return (
                    await a.request({
                      method: "wallet_addEthereumChain",
                      params: [s],
                    }),
                    n
                  );
                } catch (e) {
                  throw new s.vx(e);
                }
              throw new s.ch(r);
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : r.emitter.emit("change", {
                  accounts: e.map((e) => (0, a.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onDisconnect(e) {
            r.emitter.emit("disconnect");
            let t = await this.getProvider();
            l && (t.removeListener("accountsChanged", l), (l = void 0)),
              u && (t.removeListener("chainChanged", u), (u = void 0)),
              d && (t.removeListener("disconnect", d), (d = void 0));
          },
        }));
      }
    },
    74415: (e, t, n) => {
      n.d(t, { IT: () => i });
      var r = n(90756),
        o = n(5181);
      function i(e) {
        let t = (0, r.I)({ ...e, queryKeyHashFn: o.Zi });
        return (t.queryKey = e.queryKey), t;
      }
    },
    75350: (e, t, n) => {
      n.r(t),
        n.d(t, {
          __addDisposableResource: () => U,
          __assign: () => i,
          __asyncDelegator: () => I,
          __asyncGenerator: () => k,
          __asyncValues: () => E,
          __await: () => x,
          __awaiter: () => f,
          __classPrivateFieldGet: () => W,
          __classPrivateFieldIn: () => Q,
          __classPrivateFieldSet: () => D,
          __createBinding: () => m,
          __decorate: () => s,
          __disposeResources: () => N,
          __esDecorate: () => l,
          __exportStar: () => g,
          __extends: () => o,
          __generator: () => w,
          __importDefault: () => P,
          __importStar: () => O,
          __makeTemplateObject: () => B,
          __metadata: () => h,
          __param: () => c,
          __propKey: () => d,
          __read: () => y,
          __rest: () => a,
          __rewriteRelativeImportExtension: () => F,
          __runInitializers: () => u,
          __setFunctionName: () => p,
          __spread: () => A,
          __spreadArray: () => C,
          __spreadArrays: () => v,
          __values: () => b,
          default: () => T,
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function s(e, t, n, r) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (o = e[s]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function c(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function l(e, t, n, r, o, i) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var s,
            c = r.kind,
            l = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            u = !t && e ? (r.static ? e : e.prototype) : null,
            d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
            p = !1,
            h = n.length - 1;
          h >= 0;
          h--
        ) {
          var f = {};
          for (var w in r) f[w] = "access" === w ? {} : r[w];
          for (var w in r.access) f.access[w] = r.access[w];
          f.addInitializer = function (e) {
            if (p)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(a(e || null));
          };
          var m = (0, n[h])(
            "accessor" === c ? { get: d.get, set: d.set } : d[l],
            f
          );
          if ("accessor" === c) {
            if (void 0 === m) continue;
            if (null === m || "object" != typeof m)
              throw TypeError("Object expected");
            (s = a(m.get)) && (d.get = s),
              (s = a(m.set)) && (d.set = s),
              (s = a(m.init)) && o.unshift(s);
          } else (s = a(m)) && ("field" === c ? o.unshift(s) : (d[l] = s));
        }
        u && Object.defineProperty(u, r.name, d), (p = !0);
      }
      function u(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++)
          n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function p(e, t, n) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t,
          })
        );
      }
      function h(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function f(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function w(e, t) {
        var n,
          r,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          a = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (a.next = s(0)),
          (a.throw = s(1)),
          (a.return = s(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function s(s) {
          return function (c) {
            var l = [s, c];
            if (n) throw TypeError("Generator is already executing.");
            for (; a && ((a = 0), l[0] && (i = 0)), i; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & l[0]
                        ? r.return
                        : l[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, l[1])).done)
                )
                  return o;
                switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                  case 0:
                  case 1:
                    o = l;
                    break;
                  case 4:
                    return i.label++, { value: l[1], done: !1 };
                  case 5:
                    i.label++, (r = l[1]), (l = [0]);
                    continue;
                  case 7:
                    (l = i.ops.pop()), i.trys.pop();
                    continue;
                  default:
                    if (
                      !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                      (6 === l[0] || 2 === l[0])
                    ) {
                      i = 0;
                      continue;
                    }
                    if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                      i.label = l[1];
                      break;
                    }
                    if (6 === l[0] && i.label < o[1]) {
                      (i.label = o[1]), (o = l);
                      break;
                    }
                    if (o && i.label < o[2]) {
                      (i.label = o[2]), i.ops.push(l);
                      break;
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }
                l = t.call(e, i);
              } catch (e) {
                (l = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & l[0]) throw l[1];
            return { value: l[0] ? l[1] : void 0, done: !0 };
          };
        }
      }
      var m = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (!o ||
              ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, o);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function g(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            m(t, e, n);
      }
      function b(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function y(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function A() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(y(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
          for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
            r[o] = i[a];
        return r;
      }
      function C(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function x(e) {
        return this instanceof x ? ((this.v = e), this) : new x(e);
      }
      function k(e, t, n) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          o = n.apply(e, t || []),
          i = [];
        return (
          (r = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          a("next"),
          a("throw"),
          a("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, l);
            };
          }),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function a(e, t) {
          o[e] &&
            ((r[e] = function (t) {
              return new Promise(function (n, r) {
                i.push([e, t, n, r]) > 1 || s(e, t);
              });
            }),
            t && (r[e] = t(r[e])));
        }
        function s(e, t) {
          try {
            var n;
            (n = o[e](t)).value instanceof x
              ? Promise.resolve(n.value.v).then(c, l)
              : u(i[0][2], n);
          } catch (e) {
            u(i[0][3], e);
          }
        }
        function c(e) {
          s("next", e);
        }
        function l(e) {
          s("throw", e);
        }
        function u(e, t) {
          e(t), i.shift(), i.length && s(i[0][0], i[0][1]);
        }
      }
      function I(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, o) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: x(e[r](t)), done: !1 }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = b(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, o) {
                var i, a, s;
                (i = r),
                  (a = o),
                  (s = (t = e[n](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    i({ value: e, done: s });
                  }, a);
              });
            };
        }
      }
      function B(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var S = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        M = function (e) {
          return (M =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            })(e);
        };
      function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = M(e), r = 0; r < n.length; r++)
            "default" !== n[r] && m(t, e, n[r]);
        return S(t, e), t;
      }
      function P(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function W(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function D(e, t, n, r, o) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !o)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
      }
      function Q(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function U(e, t, n) {
        if (null != t) {
          var r, o;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (n) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (r = t[Symbol.dispose]), n && (o = r);
          }
          if ("function" != typeof r) throw TypeError("Object not disposable.");
          o &&
            (r = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }
      var R =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return (
                (r.name = "SuppressedError"),
                (r.error = e),
                (r.suppressed = t),
                r
              );
            };
      function N(e) {
        function t(t) {
          (e.error = e.hasError
            ? new R(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var n,
          r = 0;
        return (function o() {
          for (; (n = e.stack.pop()); )
            try {
              if (!n.async && 1 === r)
                return (r = 0), e.stack.push(n), Promise.resolve().then(o);
              if (n.dispose) {
                var i = n.dispose.call(n.value);
                if (n.async)
                  return (
                    (r |= 2),
                    Promise.resolve(i).then(o, function (e) {
                      return t(e), o();
                    })
                  );
              } else r |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === r)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function F(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, n, r, o, i) {
                return n
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !r || (o && i)
                  ? r + o + "." + i.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      let T = {
        __extends: o,
        __assign: i,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: l,
        __runInitializers: u,
        __propKey: d,
        __setFunctionName: p,
        __metadata: h,
        __awaiter: f,
        __generator: w,
        __createBinding: m,
        __exportStar: g,
        __values: b,
        __read: y,
        __spread: A,
        __spreadArrays: v,
        __spreadArray: C,
        __await: x,
        __asyncGenerator: k,
        __asyncDelegator: I,
        __asyncValues: E,
        __makeTemplateObject: B,
        __importStar: O,
        __importDefault: P,
        __classPrivateFieldGet: W,
        __classPrivateFieldSet: D,
        __classPrivateFieldIn: Q,
        __addDisposableResource: U,
        __disposeResources: N,
        __rewriteRelativeImportExtension: F,
      };
    },
    76353: (e, t, n) => {
      let r;
      n.d(t, { k: () => D });
      var o = n(72133),
        i = n(50625);
      let a = (() => {
          let e = [];
          for (let t = 1; t <= 40; t++) {
            let n = (16 * t + 128) * t + 64;
            if (t >= 2) {
              let e = Math.floor(t / 7) + 2;
              (n -= (25 * e - 10) * e - 55), t >= 7 && (n -= 36);
            }
            e.push(n >>> 3);
          }
          return e;
        })(),
        s = ["low", "medium", "quartile", "high"],
        c = {
          low: [
            7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28,
            30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30,
          ],
          medium: [
            10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28,
            26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
            28, 28, 28, 28, 28, 28,
          ],
          quartile: [
            13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28,
            28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30,
          ],
          high: [
            17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28,
            28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30,
          ],
        },
        l = {
          low: [
            1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9,
            10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
          ],
          medium: [
            1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
            17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43,
            45, 47, 49,
          ],
          quartile: [
            1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20,
            23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59,
            62, 65, 68,
          ],
          high: [
            1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25,
            25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66,
            70, 74, 77, 81,
          ],
        },
        u = { low: 1, medium: 0, quartile: 3, high: 2 },
        d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",
        p = { numeric: 1, alphanumeric: 2, byte: 4 },
        h = {
          numeric: [10, 12, 14],
          alphanumeric: [9, 11, 13],
          byte: [8, 16, 16],
        },
        f = (() => {
          let e = new Uint8Array(510),
            t = new Uint8Array(256);
          for (let n = 0, r = 1; n < 255; n++)
            (e[n] = e[n + 255] = r), (t[r] = n), 256 & (r <<= 1) && (r ^= 285);
          return { exp: e, log: t };
        })(),
        w = [];
      function m(e, t) {
        let n = a[e - 1],
          r = c[t][e - 1],
          o = l[t][e - 1],
          i = Math.floor(n / o) - r;
        return {
          words: r,
          numBlocks: o,
          shortBlocks: o - (n % o),
          blockLen: i,
          capacity: (n - r * o) * 8,
        };
      }
      let g = (e) => {
        throw Error(e);
      };
      function b(e) {
        if ("number" != typeof e)
          throw TypeError(`"ver" expected number, got type=${typeof e}`);
        if (!Number.isSafeInteger(e))
          throw RangeError(`"ver" expected safe integer, got ${e}`);
        if (e < 1 || e > 40)
          throw RangeError(`Invalid version=${e}. Expected number [1..40]`);
        return e;
      }
      let y = (() => {
          let e = new Int8Array(128).fill(-1);
          for (let t = 0; t < d.length; t++) e[d.charCodeAt(t)] = t;
          return e;
        })(),
        A = (() => {
          let e = new Uint8Array(65536);
          for (let t = 1; t < e.length; t++) e[t] = e[t >>> 1] + (1 & t);
          return e;
        })(),
        v = (e) => A[65535 & e] + A[e >>> 16],
        C = new Uint32Array(32),
        x = (e) => {
          let t = (e + 31) >>> 5;
          return { size: e, words: t, v: new Uint32Array(t * e) };
        },
        k = (e, t, n) => (e.v[n * e.words + (t >>> 5)] >>> (31 & t)) & 1,
        I = (e, t, n, r) => {
          let o = n * e.words + (t >>> 5),
            i = 1 << (31 & t);
          e.v[o] = r ? e.v[o] | i : e.v[o] & ~i;
        };
      function E(e, t) {
        let { size: n, words: r, v: o } = e;
        for (let e = 0; e < n; e += 32)
          for (let i = 0; i < r; i++) {
            let a = Math.min(32, n - e);
            for (let t = 0; t < a; t++) C[t] = o[(e + t) * r + i];
            C.fill(0, a),
              (function (e) {
                let t = [0x55555555, 0x33333333, 0xf0f0f0f, 0xff00ff, 65535];
                for (let n = 0; n < 5; n++) {
                  let r = t[n] >>> 0,
                    o = 1 << n;
                  for (let t = 0; t < 32; t += o << 1)
                    for (let n = 0; n < o; n++) {
                      let i = e[t + n] >>> 0,
                        a = e[t + n + o] >>> 0,
                        s = ((i >>> o) ^ a) & r;
                      (e[t + n] = (i ^ (s << o)) >>> 0),
                        (e[t + n + o] = (a ^ s) >>> 0);
                    }
                }
              })(C);
            for (let r = 0, o = 32 * i; r < 32 && o < n; r++, o++)
              t.v[o * t.words + (e >>> 5)] = C[r];
          }
      }
      function B(e) {
        let { size: t, words: n, v: r } = e,
          o = 31 & t ? ((1 << (31 & t)) - 1) >>> 0 : 0xffffffff,
          i = 0;
        for (let e = 0; e < n; e++) {
          let a = e === n - 1 ? o : 0xffffffff,
            s = r[3 * n + e],
            c = 0xffffffff,
            l = r[e] ^ r[n + e],
            u = r[n + e] ^ r[2 * n + e],
            d = r[2 * n + e] ^ s;
          for (let o = 0, p = 4 * n + e; o <= t - 5; o++, p += n) {
            let e = r[p],
              t = s ^ e,
              n = ~(l | u | d | t) & a;
            n && (i += v(n >>> 0) + 2 * v((n & c) >>> 0)),
              (c = l),
              (l = u),
              (u = d),
              (d = t),
              (s = e);
          }
        }
        return i;
      }
      function S(e) {
        let { size: t, words: n, v: r } = e,
          o = 31 & t ? ((1 << (31 & t)) - 1) >>> 0 : 0xffffffff,
          i = 0;
        for (let e = 0; e < n; e++) {
          let a = e === n - 1 ? o : 0xffffffff;
          for (let o = 0; o <= t - 11; o++) {
            let t = o * n + e,
              s = r[t],
              c = r[(t += n)],
              l = r[(t += n)],
              u = r[(t += n)],
              d = r[(t += n)],
              p = r[(t += n)],
              h = r[(t += n)],
              f = r[(t += n)],
              w = r[(t += n)],
              m = r[(t += n)],
              g = r[t + n],
              b = a & s & ~c & l & u & d & ~p & h & ~(f | w | m | g),
              y = a & ~(s | c | l | u) & d & ~p & h & f & w & ~m & g;
            i += v(b >>> 0) + v(y >>> 0);
          }
        }
        return i;
      }
      let M = (e, t) => {
          if ("number" != typeof e)
            throw TypeError(`"${t}" expected number, got type=${typeof e}`);
          if (!Number.isSafeInteger(e))
            throw RangeError(`"${t}" expected safe integer, got ${e}`);
          return e;
        },
        O = (e, t) => {
          if ("string" != typeof e)
            throw TypeError(`"${t}" expected string, got type=${typeof e}`);
          return e;
        },
        P = (e, t, n) =>
          e.map[t] >= 0 && e.map[n] >= 0 && 1 === k(e.m, e.map[t], e.map[n]);
      function W(e) {
        let t = e.W,
          n = t * t,
          r = Math.floor(n / 126),
          o = n % 126,
          i = new Uint8Array(408 + 128 * r + 2 + o + 4),
          a = 0,
          s = (e) => {
            (i[a++] = 255 & e), (i[a++] = e >>> 8);
          };
        for (let e of [71, 73, 70, 56, 55, 97]) i[a++] = e;
        s(t),
          s(t),
          (i[a++] = 246),
          (a += 2),
          (i[a++] = 255),
          (i[a++] = 255),
          (i[a++] = 255),
          (a += 381),
          (i[a++] = 44),
          (a += 4),
          s(t),
          s(t),
          (i[a++] = 0),
          (i[a++] = 7);
        let { m: c, map: l } = e,
          u = new Uint8Array(t),
          d = -2;
        for (let e = 0, r = 0; e < t; e++) {
          let o = l[e];
          if (o !== d && ((d = o), u.fill(0), o >= 0))
            for (let e = 0; e < t; e++) l[e] >= 0 && (u[e] = k(c, l[e], o));
          for (let e = 0; e < t; ) {
            if (r % 126 == 0) {
              let e = n - r;
              (i[a++] = (e < 126 ? e : 126) + 1), (i[a++] = 128);
            }
            let o = Math.min(126 - (r % 126), t - e);
            i.set(u.subarray(e, e + o), a), (a += o), (e += o), (r += o);
          }
        }
        return (
          0 === o && ((i[a++] = 1), (i[a++] = 128)),
          (i[a++] = 1),
          (i[a++] = 129),
          (i[a++] = 0),
          (i[a++] = 59),
          i
        );
      }
      function D(e) {
        let { arena: t, ...n } = e;
        return (0, o.jsxs)(D.Root, {
          ...n,
          children: [
            (0, o.jsx)(D.Finder, {}),
            (0, o.jsx)(D.Cells, {}),
            t &&
              (0, o.jsx)(D.Arena, {
                children:
                  "string" == typeof t
                    ? (0, o.jsx)("img", {
                        alt: "Arena",
                        src: t,
                        style: {
                          borderRadius: 1,
                          height: "100%",
                          objectFit: "cover",
                          width: "100%",
                        },
                      })
                    : t,
              }),
          ],
        });
      }
      !(function (e) {
        function t(t) {
          let {
              children: n,
              size: a = "100%",
              value: c,
              version: l,
              errorCorrection: A,
              ...C
            } = t,
            k = i.useMemo(
              () =>
                (
                  i.Children.map(
                    n,
                    (e) =>
                      (i.isValidElement(e) &&
                        "string" != typeof e.type &&
                        "displayName" in e.type &&
                        "Arena" === e.type.displayName) ||
                      null
                  ) ?? []
                ).some(Boolean),
              [n]
            ),
            D = i.useMemo(() => {
              let e = A;
              return (
                k && "low" === A && (e = "medium"),
                (function (e, t = {}) {
                  let { errorCorrection: n, version: o } = t,
                    i = (function (e, t = "raw", n = {}) {
                      if (
                        (O(e, "text"),
                        O(t, "output"),
                        "object" != typeof n || null === n || Array.isArray(n))
                      )
                        throw TypeError(
                          `"opts" expected object, got type=${typeof n}`
                        );
                      let o = n.version;
                      void 0 !== o && (o = b(o));
                      let i = void 0 !== n.ecc ? n.ecc : "medium";
                      s.includes(i) || g(`invalid ecc=${i}`);
                      let a =
                        void 0 !== n.encoding
                          ? n.encoding
                          : (function (e) {
                              let t = "numeric";
                              for (let n = 0; n < e.length; n++) {
                                let r = y[e.charCodeAt(n)];
                                if (!(r >= 0)) return "byte";
                                r > 9 && (t = "alphanumeric");
                              }
                              return t;
                            })(e);
                      if ((h[a] || g(`invalid encoding=${a}`), "byte" !== a)) {
                        let t = "numeric" === a ? d.slice(0, 10) : d;
                        for (let n of e)
                          t.includes(n) ||
                            g(`Unknown letter: "${n}". Allowed: ${t}`);
                      }
                      void 0 !== n.mask &&
                        (0 > M(n.mask, "opts.mask") || n.mask > 7) &&
                        g(`invalid mask=${n.mask}`);
                      let c = n.textEncoder;
                      if ("byte" === a && void 0 === c) {
                        let t = (function (e, t) {
                          let n = h.byte[Math.floor((e + 7) / 17)];
                          return Math.min(
                            (1 << n) - 1,
                            Math.floor((m(e, t).capacity - 4 - n) / 8)
                          );
                        })(void 0 === o ? 40 : o, i);
                        (e.length > t ||
                          (function (e) {
                            let t = 0;
                            for (let n = 0; n < e.length; n++) {
                              let r = e.charCodeAt(n);
                              if (r < 128) t++;
                              else if (r < 2048) t += 2;
                              else if (r < 55296 || r > 57343) t += 3;
                              else if (r <= 56319 && n + 1 < e.length) {
                                let r = e.charCodeAt(n + 1);
                                r >= 56320 && r <= 57343
                                  ? ((t += 4), n++)
                                  : (t += 3);
                              } else t += 3;
                            }
                            return t;
                          })(e) > t) &&
                          g("Capacity overflow");
                      }
                      let l =
                        "byte" === a
                          ? (void 0 !== c
                              ? c
                              : (e) => new TextEncoder().encode(e))(e)
                          : void 0;
                      if (
                        void 0 !== l &&
                        !(
                          l instanceof Uint8Array ||
                          (ArrayBuffer.isView(l) &&
                            "Uint8Array" === l.constructor.name &&
                            "BYTES_PER_ELEMENT" in l &&
                            1 === l.BYTES_PER_ELEMENT)
                        )
                      )
                        throw TypeError(
                          `"opts.textEncoder" expected Uint8Array, got type=${typeof l}`
                        );
                      let A = "byte" === a ? l.length : e.length,
                        C =
                          "numeric" === a
                            ? 10 * Math.floor(A / 3) + [0, 4, 7][A % 3]
                            : "alphanumeric" === a
                            ? 11 * Math.floor(A / 2) + (A % 2) * 6
                            : 8 * A;
                      if (void 0 === o) {
                        for (o = 1; o <= 40; o++) {
                          let e = h[a][Math.floor((o + 7) / 17)];
                          if (A < 1 << e && 4 + e + C <= m(o, i).capacity)
                            break;
                        }
                        o > 40 && g("Capacity overflow");
                      } else {
                        let e = h[a][Math.floor((o + 7) / 17)];
                        (A >= 1 << e || 4 + e + C > m(o, i).capacity) &&
                          g("Capacity overflow");
                      }
                      let k = (function (e, t, n, r, o) {
                          let i = m(e, t),
                            a = h[r][Math.floor((e + 7) / 17)],
                            s = "byte" === r ? o.length : n.length;
                          s >= 1 << a && g("Capacity overflow");
                          let c = new Uint8Array(i.capacity >>> 3),
                            l = 0,
                            u = 0,
                            d = 0,
                            b = (e, t) => {
                              for (l = (l << t) | e, u += t; u >= 8; )
                                c[d++] = (l >>> (u -= 8)) & 255;
                            };
                          if ((b(p[r], 4), b(s, a), "numeric" === r))
                            for (let e = 0; e < s; e += 3) {
                              let t = Math.min(3, s - e);
                              b(Number(n.slice(e, e + t)), [0, 4, 7, 10][t]);
                            }
                          else if ("alphanumeric" === r) {
                            for (let e = 0; e + 1 < s; e += 2)
                              b(
                                45 * y[n.charCodeAt(e)] +
                                  y[n.charCodeAt(e + 1)],
                                11
                              );
                            1 & s && b(y[n.charCodeAt(s - 1)], 6);
                          } else for (let e = 0; e < o.length; e++) b(o[e], 8);
                          let A = 8 * d + u;
                          A > i.capacity && g("Capacity overflow"),
                            u && (c[d] = (l << (8 - u)) & 255),
                            7 & (A += Math.min(4, i.capacity - A)) &&
                              (A += 8 - (7 & A));
                          for (
                            let e = A >>> 3, t = 0;
                            e < c.length;
                            e++, t ^= 1
                          )
                            c[e] = t ? 17 : 236;
                          let {
                              words: v,
                              numBlocks: C,
                              shortBlocks: x,
                              blockLen: k,
                            } = i,
                            I = (function (e) {
                              let t = w[e];
                              if (void 0 !== t) return t;
                              let n = (function (e) {
                                  let { exp: t, log: n } = f,
                                    r = new Uint8Array(e);
                                  r[e - 1] = 1;
                                  for (let o = 0, i = 1; o < e; o++) {
                                    for (let o = 0; o < e; o++) {
                                      let a = r[o];
                                      r[o] =
                                        (a ? t[n[a] + n[i]] : 0) ^
                                        (o + 1 < e ? r[o + 1] : 0);
                                    }
                                    i = t[n[i] + 1];
                                  }
                                  return r;
                                })(e),
                                { exp: r, log: o } = f,
                                i = new Uint8Array(256 * e);
                              for (let t = 1; t < 256; t++) {
                                let a = o[t],
                                  s = t * e;
                                for (let t = 0; t < e; t++) {
                                  let e = n[t];
                                  e && (i[s + t] = r[o[e] + a]);
                                }
                              }
                              return (w[e] = { gen: n, mul: i });
                            })(v),
                            E = [],
                            B = [];
                          for (let e = 0, t = 0; e < C; e++) {
                            let n = k + (e < x ? 0 : 1);
                            E.push(c.subarray(t, t + n)),
                              B.push(
                                (function (e, t, n) {
                                  let { exp: r, log: o } = f,
                                    i = t.length,
                                    a = new Uint8Array(i);
                                  if (void 0 !== n) {
                                    let t = i - 1;
                                    for (let r = 0; r < e.length; r++) {
                                      let o = (e[r] ^ a[0]) * i;
                                      for (let e = 0; e < t; e++)
                                        a[e] = a[e + 1] ^ n[o + e];
                                      a[t] = n[o + t];
                                    }
                                    return a;
                                  }
                                  for (let n = 0; n < e.length; n++) {
                                    let s = e[n] ^ a[0];
                                    if ((a.copyWithin(0, 1), (a[i - 1] = 0), s))
                                      for (let e = 0; e < i; e++)
                                        t[e] && (a[e] ^= r[o[t[e]] + o[s]]);
                                  }
                                  return a;
                                })(E[e], I.gen, I.mul)
                              ),
                              (t += n);
                          }
                          let S = new Uint8Array(c.length + v * C),
                            M = 0;
                          for (let e = 0; e <= k; e++)
                            for (let t of E) e < t.length && (S[M++] = t[e]);
                          for (let e = 0; e < v; e++)
                            for (let t of B) S[M++] = t[e];
                          return S;
                        })(o, i, e, a, l),
                        D = (function (e, t, n, o, i = !1) {
                          (void 0 === r || r.ver !== e) &&
                            (r = (function (e) {
                              let t = 21 + 4 * (e - 1),
                                n = x(t),
                                r = new Uint8Array(t * t),
                                o = (e, o, i) => {
                                  I(n, e, o, i), (r[o * t + e] = 1);
                                };
                              for (let [e, n] of [
                                [0, 0],
                                [t - 7, 0],
                                [0, t - 7],
                              ])
                                for (let r = -1; r < 8; r++)
                                  for (let i = -1; i < 8; i++) {
                                    let a = e + i,
                                      s = n + r;
                                    a < 0 ||
                                      s < 0 ||
                                      a >= t ||
                                      s >= t ||
                                      o(
                                        a,
                                        s,
                                        +!!(
                                          i >= 0 &&
                                          i < 7 &&
                                          r >= 0 &&
                                          r < 7 &&
                                          (0 === i ||
                                            6 === i ||
                                            0 === r ||
                                            6 === r ||
                                            (i > 1 && i < 5 && r > 1 && r < 5))
                                        )
                                      );
                                  }
                              let i = (function (e) {
                                if (1 === (e = b(e))) return [];
                                let t = 21 + 4 * (e - 1) - 7,
                                  n = Math.ceil((t - 6) / 28),
                                  r = Math.floor((t - 6) / n);
                                r % 2
                                  ? (r += 1)
                                  : ((t - 6) % n) * 2 >= n && (r += 2);
                                let o = [6];
                                for (let e = 1; e < n; e++)
                                  o.push(t - (n - e) * r);
                                return o.push(t), o;
                              })(e);
                              for (let e of i)
                                for (let n of i)
                                  if (!r[e * t + n])
                                    for (let t = -2; t <= 2; t++)
                                      for (let r = -2; r <= 2; r++) {
                                        let i =
                                          1 !==
                                          Math.max(Math.abs(r), Math.abs(t));
                                        o(n + r, e + t, +!!i);
                                      }
                              for (let e = 0; e < t; e++)
                                r[6 * t + e] || o(e, 6, +(e % 2 == 0)),
                                  r[e * t + 6] || o(6, e, +(e % 2 == 0));
                              for (let e = 0; e < 9; e++)
                                6 !== e && (o(8, e, 0), o(e, 8, 0)),
                                  e < 8 &&
                                    (o(t - 1 - e, 8, 0), o(8, t - 1 - e, 0));
                              if (e >= 7)
                                for (let e = 0; e < 18; e++) {
                                  let n = t - 11 + (e % 3),
                                    r = (e / 3) | 0;
                                  o(n, r, 0), o(r, n, 0);
                                }
                              let a = [];
                              for (let e = 0; e < 8; e++) a.push(x(t));
                              let s = new Uint16Array(t * t),
                                c = 0;
                              for (
                                let e = t - 1, o = -1, i = t - 1;
                                e > 0;
                                e -= 2, o = -o
                              )
                                for (6 === e && (e = 5); ; i += o) {
                                  for (let o = 0; o < 2; o++) {
                                    let l = e - o;
                                    if (r[i * t + l]) continue;
                                    let u = i * n.words + (l >>> 5);
                                    s[c++] = (u << 5) | (31 & l);
                                    for (
                                      let e = 0,
                                        t = (function (e, t) {
                                          let n = e % 2,
                                            r = t % 2,
                                            o = e % 3,
                                            i = ((t % 3) * o) % 3,
                                            a = n & r,
                                            s = 0;
                                          return (
                                            n === r && (s |= 1),
                                            0 === r && (s |= 2),
                                            0 === o && (s |= 4),
                                            (e + t) % 3 == 0 && (s |= 8),
                                            (Math.floor(t / 2) +
                                              Math.floor(e / 3)) %
                                              2 ==
                                              0 && (s |= 16),
                                            a + i === 0 && (s |= 32),
                                            (a + i) % 2 == 0 && (s |= 64),
                                            ((n ^ r) + i) % 2 == 0 &&
                                              (s |= 128),
                                            s
                                          );
                                        })(l, i);
                                      t;
                                      e++, t >>= 1
                                    )
                                      1 & t && (a[e].v[u] |= 1 << (31 & l));
                                  }
                                  if (i + o < 0 || i + o >= t) break;
                                }
                              let l = a.map((e) => {
                                let n = x(t);
                                return E(e, n), n.v;
                              });
                              return {
                                ver: e,
                                tpl: n.v,
                                pos: s.slice(0, c),
                                planes: a.map((e) => e.v),
                                planesT: l,
                                work: [x(t), x(t), x(t), x(t)],
                              };
                            })(e));
                          let {
                              tpl: a,
                              pos: s,
                              planes: c,
                              planesT: l,
                              work: d,
                            } = r,
                            [p, h, f, w] = d;
                          p.v.set(a);
                          let m = Math.min(8 * n.length, s.length);
                          for (let e = 0; e < m; e++)
                            if (n[e >>> 3] & (128 >>> (7 & e))) {
                              let t = s[e];
                              p.v[t >>> 5] |= 1 << (31 & t);
                            }
                          let g = o;
                          if (void 0 === g) {
                            E(p, h);
                            let e = 1 / 0;
                            for (let t = 0; t < 8; t++) {
                              let n = c[t],
                                r = l[t];
                              for (let e = 0; e < f.v.length; e++)
                                (f.v[e] = p.v[e] ^ n[e]),
                                  (w.v[e] = h.v[e] ^ r[e]);
                              let o = (function (e, t, n = 1 / 0) {
                                let { size: r, words: o, v: i } = e,
                                  a = B(e) + B(t);
                                if (a >= n) return a;
                                let s =
                                    ((1 << (r - 32 * (o - 1) - 1)) - 1) >>> 0,
                                  c = 0,
                                  l = 0;
                                for (let e = 0; e < r; e++)
                                  for (let t = 0; t < o; t++) {
                                    let n = i[e * o + t];
                                    if (((l += v(n >>> 0)), e === r - 1))
                                      continue;
                                    let a = i[(e + 1) * o + t],
                                      u = t + 1 < o ? i[e * o + t + 1] : 0,
                                      d =
                                        ~(n ^ a) &
                                        ~(n ^ ((n >>> 1) | (u << 31))) &
                                        ~(
                                          a ^
                                          ((a >>> 1) |
                                            ((t + 1 < o
                                              ? i[(e + 1) * o + t + 1]
                                              : 0) <<
                                              31))
                                        );
                                    t === o - 1 && (d &= s), (c += v(d >>> 0));
                                  }
                                let u = r * r,
                                  d =
                                    a +
                                    3 * c +
                                    10 *
                                      Math.ceil(
                                        Math.max(
                                          0,
                                          Math.abs(100 * l - 50 * u) - 5 * u
                                        ) /
                                          (5 * u)
                                      );
                                return d >= n ? d : d + 40 * (S(e) + S(t));
                              })(f, w, e);
                              o < e && ((e = o), (g = t));
                            }
                          }
                          let y = c[g];
                          for (let e = 0; e < p.v.length; e++) p.v[e] ^= y[e];
                          return (
                            i ||
                              (function (e, t, n, r) {
                                let o = e.size,
                                  i = (function (e, t) {
                                    let n = (u[e] << 3) | t,
                                      r = n;
                                    for (let e = 0; e < 10; e++)
                                      r = (r << 1) ^ ((r >> 9) * 1335);
                                    return ((n << 10) | r) ^ 21522;
                                  })(n, r);
                                for (let t = 0; t < 15; t++) {
                                  let n = (i >> t) & 1;
                                  t < 6
                                    ? I(e, 8, t, n)
                                    : t < 8
                                    ? I(e, 8, t + 1, n)
                                    : 8 === t
                                    ? I(e, 7, 8, n)
                                    : I(e, 14 - t, 8, n),
                                    t < 8
                                      ? I(e, o - 1 - t, 8, n)
                                      : I(e, 8, o - 15 + t, n);
                                }
                                if ((I(e, 8, o - 8, 1), t >= 7)) {
                                  let n = (function (e) {
                                    let t = e;
                                    for (let e = 0; e < 12; e++)
                                      t = (t << 1) ^ ((t >> 11) * 7973);
                                    return (e << 12) | t;
                                  })(t);
                                  for (let t = 0; t < 18; t++) {
                                    let r = (n >> t) & 1,
                                      i = o - 11 + (t % 3),
                                      a = (t / 3) | 0;
                                    I(e, i, a, r), I(e, a, i, r);
                                  }
                                }
                              })(p, e, t, g),
                            p
                          );
                        })(o, i, k, n.mask),
                        Q =
                          void 0 === n.border ? 2 : M(n.border, "opts.border");
                      if (Q <= 0) throw RangeError(`invalid border=${Q}`);
                      let U = void 0 === n.scale ? 1 : M(n.scale, "opts.scale");
                      if (U <= 0 || U > 1024)
                        throw RangeError(`invalid scale factor: ${U}`);
                      let R = (D.size + 2 * Q) * U,
                        N =
                          "ascii" === t || "gif" === t || "data-url" === t
                            ? 4096
                            : 1024;
                      if (R > N)
                        throw RangeError(
                          `invalid opts: output is ${R}x${R} (max ${N}), reduce border/scale`
                        );
                      let F = new Int32Array(R);
                      for (let e = 0; e < R; e++) {
                        let t = Math.floor(e / U) - Q;
                        F[e] = t >= 0 && t < D.size ? t : -1;
                      }
                      let T = { m: D, W: R, map: F };
                      return "raw" === t
                        ? (function (e) {
                            let t = e.W,
                              n = Array(t);
                            for (let r = 0; r < t; r++) {
                              let o = Array(t);
                              for (let n = 0; n < t; n++) o[n] = P(e, n, r);
                              n[r] = o;
                            }
                            return n;
                          })(T)
                        : "ascii" === t
                        ? (function (e) {
                            let t = e.W,
                              n = "";
                            for (let r = 0; r < t; r += 2) {
                              for (let o = 0; o < t; o++) {
                                let i = P(e, o, r),
                                  a = r + 1 >= t || P(e, o, r + 1);
                                n +=
                                  i || a
                                    ? !i && a
                                      ? "▀"
                                      : i && !a
                                      ? "▄"
                                      : " "
                                    : "█";
                              }
                              n += "\n";
                            }
                            return n;
                          })(T)
                        : "term" === t
                        ? (function (e) {
                            let t = e.W,
                              n = "\x1b[0m",
                              r = "";
                            for (let o = 0; o < t; o++) {
                              for (let i = 0; i < t; i++)
                                r += P(e, i, o) ? `[40m  ${n}` : `[1;47m  ${n}`;
                              r += "\n";
                            }
                            return r;
                          })(T)
                        : "svg" === t
                        ? (function (e, t) {
                            let n,
                              r = e.W,
                              o = `<svg viewBox="0 0 ${r} ${r}" xmlns="http://www.w3.org/2000/svg">`,
                              i = "";
                            for (let a = 0; a < r; a++)
                              for (let s = 0; s < r; s++) {
                                if (!P(e, s, a)) continue;
                                if (!t) {
                                  o += `<rect x="${s}" y="${a}" width="1" height="1" />`;
                                  continue;
                                }
                                let r = `M${s} ${a}`;
                                if (n) {
                                  let e = `m${s - n.x} ${a - n.y}`;
                                  e.length <= r.length && (r = e);
                                }
                                (i += `${r}h1v1${s < 10 ? `H${s}` : "h-1"}Z`),
                                  (n = { x: s, y: a });
                              }
                            return t && (o += `<path d="${i}"/>`), o + "</svg>";
                          })(T, void 0 === n.optimize || n.optimize)
                        : "gif" === t
                        ? W(T)
                        : "data-url" === t
                        ? (function (e) {
                            let t;
                            if ("function" == typeof e.toBase64)
                              t = e.toBase64();
                            else {
                              let n = "";
                              for (let t = 0; t < e.length; t += 8192)
                                n += String.fromCharCode(
                                  ...e.subarray(t, t + 8192)
                                );
                              t = btoa(n);
                            }
                            return "data:image/gif;base64," + t;
                          })(W(T))
                        : g(`Unknown output: ${t}`);
                    })(e, "raw", { border: 0, ecc: n, scale: 1, version: o });
                  return {
                    edgeLength: i.length,
                    finderLength: 7,
                    grid: i,
                    value: e,
                  };
                })(c, { errorCorrection: e, version: l })
              );
            }, [c, k, A, l]),
            Q = +D.edgeLength,
            U = D.finderLength / 2,
            R = k ? Math.floor(Q / 4) : 0,
            N = i.useMemo(
              () => ({
                arenaSize: R,
                cellSize: 1,
                edgeSize: Q,
                qrcode: D,
                finderSize: U,
              }),
              [R, Q, D, U]
            );
          return (0, o.jsx)(e.Context.Provider, {
            value: N,
            children: (0, o.jsxs)("svg", {
              ...C,
              width: a,
              height: a,
              viewBox: `0 0 ${Q} ${Q}`,
              xmlns: "http://www.w3.org/2000/svg",
              children: [(0, o.jsx)("title", { children: "QR Code" }), n],
            }),
          });
        }
        function n(t) {
          let {
              className: n,
              fill: r,
              innerClassName: a,
              radius: s = 0.25,
            } = t,
            {
              cellSize: c,
              edgeSize: l,
              finderSize: u,
            } = i.useContext(e.Context);
          function d({ position: e }) {
            let t = u - (u - c) - c / 2;
            "top-right" === e && (t = l - u - (u - c) - c / 2);
            let i = u - (u - c) - c / 2;
            "bottom-left" === e && (i = l - u - (u - c) - c / 2);
            let d = u - 1.5 * c;
            "top-right" === e && (d = l - u - 1.5 * c);
            let p = u - 1.5 * c;
            return (
              "bottom-left" === e && (p = l - u - 1.5 * c),
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)("rect", {
                    className: n,
                    stroke: r ?? "currentColor",
                    fill: "transparent",
                    x: t,
                    y: i,
                    width: c + (u - c) * 2,
                    height: c + (u - c) * 2,
                    rx: 2 * s * (u - c),
                    ry: 2 * s * (u - c),
                    strokeWidth: c,
                  }),
                  (0, o.jsx)("rect", {
                    className: a,
                    fill: r ?? "currentColor",
                    x: d,
                    y: p,
                    width: 3 * c,
                    height: 3 * c,
                    rx: 2 * s * c,
                    ry: 2 * s * c,
                  }),
                ],
              })
            );
          }
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(d, { position: "top-left" }),
              (0, o.jsx)(d, { position: "top-right" }),
              (0, o.jsx)(d, { position: "bottom-left" }),
            ],
          });
        }
        function a(t) {
          let {
              className: n,
              fill: r = "currentColor",
              inset: a = !0,
              radius: s = 1,
            } = t,
            { arenaSize: c, cellSize: l, qrcode: u } = i.useContext(e.Context),
            { edgeLength: d, finderLength: p } = u,
            h = i.useMemo(() => {
              let e = "";
              for (let t = 0; t < u.grid.length; t++) {
                let n = u.grid[t];
                if (n)
                  for (let r = 0; r < n.length; r++) {
                    if (!n[r]) continue;
                    let o = d / 2 - c / 2,
                      i = o + c;
                    if (t >= o && t <= i && r >= o && r <= i) continue;
                    let u = t < p && r < p,
                      h = t < p && r >= d - p,
                      f = t >= d - p && r < p;
                    if (u || h || f) continue;
                    let w = a ? 0.1 * l : 0,
                      m = (l - 2 * w) / 2,
                      g = r * l + l / 2,
                      b = t * l + l / 2,
                      y = g - m,
                      A = g + m,
                      v = b - m,
                      C = b + m,
                      x = s * m;
                    e += `M ${y + x},${v} L ${
                      A - x
                    },${v} A ${x},${x} 0 0,1 ${A},${v + x} L ${A},${
                      C - x
                    } A ${x},${x} 0 0,1 ${A - x},${C} L ${
                      y + x
                    },${C} A ${x},${x} 0 0,1 ${y},${C - x} L ${y},${
                      v + x
                    } A ${x},${x} 0 0,1 ${y + x},${v} z`;
                  }
              }
              return e;
            }, [c, l, d, p, u.grid, a, s]);
          return (0, o.jsx)("path", { className: n, d: h, fill: r });
        }
        function c(t) {
          let { children: n } = t,
            {
              arenaSize: r,
              cellSize: a,
              edgeSize: s,
            } = i.useContext(e.Context),
            c = Math.ceil(s / 2 - r / 2),
            l = r + (r % 2);
          return (0, o.jsx)("foreignObject", {
            x: c,
            y: c,
            width: l,
            height: l,
            children: (0, o.jsx)("div", {
              style: {
                alignItems: "center",
                display: "flex",
                fontSize: 1,
                justifyContent: "center",
                height: "100%",
                overflow: "hidden",
                width: "100%",
                padding: a / 2,
                boxSizing: "border-box",
              },
              children: n,
            }),
          });
        }
        (e.Context = i.createContext(null)),
          (e.Root = t),
          ((t = e.Root || (e.Root = {})).displayName = "Root"),
          (e.Finder = n),
          ((n = e.Finder || (e.Finder = {})).displayName = "Finder"),
          (e.Cells = a),
          ((a = e.Cells || (e.Cells = {})).displayName = "Cells"),
          (e.Arena = c),
          ((c = e.Arena || (e.Arena = {})).displayName = "Arena");
      })(D || (D = {}));
    },
    76470: (e, t, n) => {
      n.d(t, { _: () => a });
      var r = n(57887),
        o = {
          blue: { accentColor: "#0E76FD", accentColorForeground: "#FFF" },
          green: { accentColor: "#1DB847", accentColorForeground: "#FFF" },
          orange: { accentColor: "#FF801F", accentColorForeground: "#FFF" },
          pink: { accentColor: "#FF5CA0", accentColorForeground: "#FFF" },
          purple: { accentColor: "#5F5AFA", accentColorForeground: "#FFF" },
          red: { accentColor: "#FA423C", accentColorForeground: "#FFF" },
        },
        i = o.blue,
        a = function () {
          let {
            accentColor: e = i.accentColor,
            accentColorForeground: t = i.accentColorForeground,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, r.$)(n),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(0, 0, 0, 0.04)",
              actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
              actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
              closeButton: "rgba(60, 66, 66, 0.8)",
              closeButtonBackground: "rgba(0, 0, 0, 0.06)",
              connectButtonBackground: "#FFF",
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
              connectButtonText: "#25292E",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
              error: "#FF494A",
              generalBorder: "rgba(0, 0, 0, 0.06)",
              generalBorderDim: "rgba(0, 0, 0, 0.03)",
              menuItemBackground: "rgba(60, 66, 66, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.3)",
              modalBackground: "#FFF",
              modalBorder: "transparent",
              modalText: "#25292E",
              modalTextDim: "rgba(60, 66, 66, 0.3)",
              modalTextSecondary: "rgba(60, 66, 66, 0.6)",
              profileAction: "#FFF",
              profileActionHover: "rgba(255, 255, 255, 0.5)",
              profileForeground: "rgba(60, 66, 66, 0.06)",
              selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      a.accentColors = o;
    },
    76595: (e, t, n) => {
      n.d(t, { A: () => c });
      var r = n(30823),
        o = n(5181),
        i = n(74415),
        a = n(48804),
        s = n(37762);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: c, query: l = {} } = n,
          u = (0, s.U)(n),
          d = (0, a.i)({ config: u }),
          p = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: o, ...i } = t[1];
                if (!n) throw Error("address is required");
                return (await (0, r.r)(e, { ...i, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, o.xO)(e)];
              })(t),
            };
          })(u, { ...n, chainId: null != (e = n.chainId) ? e : d }),
          h = !!(c && (null == (t = l.enabled) || t));
        return (0, i.IT)({ ...l, ...p, enabled: h });
      }
    },
    76661: (e, t, n) => {
      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e;
      }
      function o(e, t) {
        var n = {};
        if ("object" == typeof t)
          !(function e(t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              o = {};
            for (var i in t) {
              var a = t[i],
                s = [...r, i];
              "string" == typeof a || "number" == typeof a || null == a
                ? (o[i] = n(a, s))
                : "object" != typeof a || Array.isArray(a)
                ? console.warn(
                    'Skipping invalid key "'
                      .concat(
                        s.join("."),
                        '". Should be a string, number, null or object. Received: "'
                      )
                      .concat(Array.isArray(a) ? "Array" : typeof a, '"')
                  )
                : (o[i] = e(a, n, s));
            }
            return o;
          })(t, (t, o) => {
            null != t &&
              (n[
                r(
                  (function (e, t) {
                    var n = e;
                    for (var r of t) {
                      if (!(r in n))
                        throw Error(
                          "Path ".concat(
                            t.join(" -> "),
                            " does not exist in object"
                          )
                        );
                      n = n[r];
                    }
                    return n;
                  })(e, o)
                )
              ] = String(t));
          });
        else
          for (var o in e) {
            var i = e[o];
            null != i && (n[r(o)] = i);
          }
        return (
          Object.defineProperty(n, "toString", {
            value: function () {
              return Object.keys(this)
                .map((e) => "".concat(e, ":").concat(this[e]))
                .join(";");
            },
            writable: !1,
          }),
          n
        );
      }
      n.d(t, { D: () => o });
    },
    84173: (e, t, n) => {
      n.d(t, { H: () => i });
      var r = n(35893),
        o = n(39829),
        i = () => {
          var e;
          return {
            id: "safe",
            name: "Safe",
            iconAccent: "#12ff80",
            iconBackground: "#fff",
            iconUrl: async () =>
              (await n.e(2562).then(n.bind(n, 12562))).default,
            installed:
              "undefined" != typeof window &&
              (null == (e = window) ? void 0 : e.parent) !== window,
            downloadUrls: {},
            createConnector: (e) =>
              (0, r.U)((t) => ({ ...(0, o.g)()(t), ...e })),
          };
        };
    },
    84369: (e, t, n) => {
      n.d(t, { $: () => l });
      var r = n(77250),
        o = n(93259),
        i = n(5181),
        a = n(74415),
        s = n(48804),
        c = n(37762);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: l, query: u = {} } = n,
          d = (0, c.U)(n),
          p = (0, s.i)({ config: d }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("name is required");
                let { chainId: s, ...c } = { ...a, name: n },
                  l = e.getClient({ chainId: s });
                return (0, o.T)(l, r.i, "getEnsAvatar")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensAvatar", (0, i.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : p }),
          f = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...h, enabled: f });
      }
    },
    84973: (e, t, n) => {
      n.d(t, { v: () => l });
      var r = n(9918),
        o = n(93259),
        i = n(5181),
        a = n(74415),
        s = n(48804),
        c = n(37762);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: l, query: u = {} } = n,
          d = (0, c.U)(n),
          p = (0, s.i)({ config: d }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("address is required");
                let { chainId: s, ...c } = { ...a, address: n },
                  l = e.getClient({ chainId: s });
                return (0, o.T)(l, r.s, "getEnsName")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, i.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : p }),
          f = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...h, enabled: f });
      }
    },
    85291: (e, t, n) => {
      n.d(t, { n: () => r });
      var r =
        '{\n  "connect_wallet": {\n    "label": "Connect Wallet",\n    "wrong_network": {\n      "label": "Wrong network"\n    }\n  },\n\n  "intro": {\n    "title": "What is a Wallet?",\n    "description": "A wallet is used to send, receive, store, and display digital assets. It\'s also a new way to log in, without needing to create new accounts and passwords on every website.",\n    "digital_asset": {\n      "title": "A Home for your Digital Assets",\n      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."\n    },\n    "login": {\n      "title": "A New Way to Log In",\n      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."\n    },\n    "get": {\n      "label": "Get a Wallet"\n    },\n    "learn_more": {\n      "label": "Learn More"\n    }\n  },\n\n  "sign_in": {\n    "label": "Verify your account",\n    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",\n    "message": {\n      "send": "Sign message",\n      "preparing": "Preparing message...",\n      "cancel": "Cancel",\n      "preparing_error": "Error preparing message, please retry!"\n    },\n    "signature": {\n      "waiting": "Waiting for signature...",\n      "verifying": "Verifying signature...",\n      "signing_error": "Error signing message, please retry!",\n      "verifying_error": "Error verifying signature, please retry!",\n      "oops_error": "Oops, something went wrong!"\n    }\n  },\n\n  "connect": {\n    "label": "Connect",\n    "title": "Connect a Wallet",\n    "new_to_ethereum": {\n      "description": "New to Ethereum wallets?",\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "learn_more": {\n      "label": "Learn more"\n    },\n    "recent": "Recent",\n    "status": {\n      "opening": "Opening %{wallet}...",\n      "connecting": "Connecting",\n      "connect_mobile": "Continue in %{wallet}",\n      "not_installed": "%{wallet} is not installed",\n      "not_available": "%{wallet} is not available",\n      "confirm": "Confirm connection in the extension",\n      "confirm_mobile": "Accept connection request in the wallet"\n    },\n    "secondary_action": {\n      "get": {\n        "description": "Don\'t have %{wallet}?",\n        "label": "GET"\n      },\n      "install": {\n        "label": "INSTALL"\n      },\n      "retry": {\n        "label": "RETRY"\n      }\n    },\n    "walletconnect": {\n      "description": {\n        "full": "Need the official WalletConnect modal?",\n        "compact": "Need the WalletConnect modal?"\n      },\n      "open": {\n        "label": "OPEN"\n      }\n    }\n  },\n\n  "connect_scan": {\n    "title": "Scan with %{wallet}",\n    "fallback_title": "Scan with your phone"\n  },\n\n  "connector_group": {\n    "installed": "Installed",\n    "recommended": "Recommended",\n    "other": "Other",\n    "popular": "Popular",\n    "more": "More",\n    "others": "Others"\n  },\n\n  "get": {\n    "title": "Get a Wallet",\n    "action": {\n      "label": "GET"\n    },\n    "mobile": {\n      "description": "Mobile Wallet"\n    },\n    "extension": {\n      "description": "Browser Extension"\n    },\n    "mobile_and_extension": {\n      "description": "Mobile Wallet and Extension"\n    },\n    "mobile_and_desktop": {\n      "description": "Mobile and Desktop Wallet"\n    },\n    "looking_for": {\n      "title": "Not what you\'re looking for?",\n      "mobile": {\n        "description": "Select a wallet on the main screen to get started with a different wallet provider."\n      },\n      "desktop": {\n        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",\n        "wide_description": "Select a wallet on the left to get started with a different wallet provider."\n      }\n    }\n  },\n\n  "get_options": {\n    "title": "Get started with %{wallet}",\n    "short_title": "Get %{wallet}",\n    "mobile": {\n      "title": "%{wallet} for Mobile",\n      "description": "Use the mobile wallet to explore the world of Ethereum.",\n      "download": {\n        "label": "Get the app"\n      }\n    },\n    "extension": {\n      "title": "%{wallet} for %{browser}",\n      "description": "Access your wallet right from your favorite web browser.",\n      "download": {\n        "label": "Add to %{browser}"\n      }\n    },\n    "desktop": {\n      "title": "%{wallet} for %{platform}",\n      "description": "Access your wallet natively from your powerful desktop.",\n      "download": {\n        "label": "Add to %{platform}"\n      }\n    }\n  },\n\n  "get_mobile": {\n    "title": "Install %{wallet}",\n    "description": "Scan with your phone to download on iOS or Android",\n    "continue": {\n      "label": "Continue"\n    }\n  },\n\n  "get_instructions": {\n    "mobile": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "extension": {\n      "refresh": {\n        "label": "Refresh"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "desktop": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    }\n  },\n\n  "chains": {\n    "title": "Switch Networks",\n    "wrong_network": "Wrong network detected, switch or disconnect to continue.",\n    "confirm": "Confirm in Wallet",\n    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",\n    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",\n    "disconnect": "Disconnect",\n    "connected": "Connected"\n  },\n\n  "profile": {\n    "disconnect": {\n      "label": "Disconnect"\n    },\n    "copy_address": {\n      "label": "Copy Address",\n      "copied": "Copied!"\n    },\n    "explorer": {\n      "label": "View more on explorer"\n    },\n    "transactions": {\n      "description": "%{appName} transactions will appear here...",\n      "description_fallback": "Your transactions will appear here...",\n      "recent": {\n        "title": "Recent Transactions"\n      },\n      "clear": {\n        "label": "Clear All"\n      }\n    }\n  },\n\n  "wallet_connectors": {\n    "ready": {\n      "qr_code": {\n        "step1": {\n          "description": "Add Ready to your home screen for faster access to your wallet.",\n          "title": "Open the Ready app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "berasig": {\n      "extension": {\n        "step1": {\n          "title": "Install the BeraSig extension",\n          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "best": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Best Wallet app",\n          "description": "Add Best Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bifrost": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",\n          "title": "Open the Bifrost Wallet app"\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "bitget": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",\n          "title": "Open the Bitget Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitget Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitski": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitski extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitverse": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bitverse Wallet app",\n          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bloom": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      }\n    },\n\n    "bybit": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",\n          "title": "Open the Bybit app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",\n          "title": "Install the Bybit Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "binance": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",\n          "title": "Open the Binance app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Binance Wallet extension",\n          "description": "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "coin98": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the Coin98 Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",\n          "title": "Install the Coin98 Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "coinbase": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",\n          "title": "Open the Coinbase Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Coinbase Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "compass": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Compass Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "core": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Core on your home screen for faster access to your wallet.",\n          "title": "Open the Core app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",\n          "title": "Install the Core extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "fox": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting FoxWallet on your home screen for quicker access.",\n          "title": "Open the FoxWallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "frontier": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",\n          "title": "Open the Frontier Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Frontier Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "im_token": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the imToken app",\n          "description": "Put imToken app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "iopay": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",\n          "title": "Open the ioPay app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "kaikas": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaikas extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaikas app",\n          "description": "Put Kaikas app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kaia": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaia extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaia app",\n          "description": "Put Kaia app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kraken": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kraken Wallet app",\n          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kresus": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kresus Wallet app",\n          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "magicEden": {\n      "extension": {\n        "step1": {\n          "title": "Install the Magic Eden extension",\n          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "metamask": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MetaMask app",\n          "description": "We recommend putting MetaMask on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the MetaMask extension",\n          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "nestwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the NestWallet extension",\n          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "okx": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the OKX Wallet app",\n          "description": "We recommend putting OKX Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the OKX Wallet extension",\n          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "omni": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Omni app",\n          "description": "Add Omni to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "1inch": {\n      "qr_code": {\n        "step1": {\n          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the 1inch Wallet app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "token_pocket": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the TokenPocket app",\n          "description": "We recommend putting TokenPocket on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the TokenPocket extension",\n          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "trust": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Trust Wallet app",\n          "description": "Put Trust Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Trust Wallet extension",\n          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "uniswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Uniswap app",\n          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "zerion": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zerion app",\n          "description": "We recommend putting Zerion on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Zerion extension",\n          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rainbow": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Rainbow app",\n          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "You can easily backup your wallet using our backup feature on your phone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "enkrypt": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Enkrypt Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "frame": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",\n          "title": "Install Frame & the companion extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "one_key": {\n      "extension": {\n        "step1": {\n          "title": "Install the OneKey Wallet extension",\n          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "paraswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the ParaSwap app",\n          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "phantom": {\n      "extension": {\n        "step1": {\n          "title": "Install the Phantom extension",\n          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rabby": {\n      "extension": {\n        "step1": {\n          "title": "Install the Rabby extension",\n          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ronin": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",\n          "title": "Open the Ronin Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Ronin Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "ramper": {\n      "extension": {\n        "step1": {\n          "title": "Install the Ramper extension",\n          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safeheron": {\n      "extension": {\n        "step1": {\n          "title": "Install the Core extension",\n          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "taho": {\n      "extension": {\n        "step1": {\n          "title": "Install the Taho extension",\n          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "wigwam": {\n      "extension": {\n        "step1": {\n          "title": "Install the Wigwam extension",\n          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "talisman": {\n      "extension": {\n        "step1": {\n          "title": "Install the Talisman extension",\n          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import an Ethereum Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ctrl": {\n      "extension": {\n        "step1": {\n          "title": "Install the CTRL Wallet extension",\n          "description": "We recommend pinning CTRL Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "zeal": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zeal app",\n          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Zeal extension",\n          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safepal": {\n      "extension": {\n        "step1": {\n          "title": "Install the SafePal Wallet extension",\n          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SafePal Wallet app",\n          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "desig": {\n      "extension": {\n        "step1": {\n          "title": "Install the Desig extension",\n          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "subwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the SubWallet extension",\n          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SubWallet app",\n          "description": "We recommend putting SubWallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "clv": {\n      "extension": {\n        "step1": {\n          "title": "Install the CLV Wallet extension",\n          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the CLV Wallet app",\n          "description": "We recommend putting CLV Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "okto": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Okto app",\n          "description": "Add Okto to your home screen for quick access"\n        },\n        "step2": {\n          "title": "Create an MPC Wallet",\n          "description": "Create an account and generate a wallet"\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "ledger": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "Set up a new Ledger or connect to an existing one."\n        },\n        "step3": {\n          "title": "Connect",\n          "description": "A connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "You can either sync with the desktop app or connect your Ledger."\n        },\n        "step3": {\n          "title": "Scan the code",\n          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "valora": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Valora app",\n          "description": "We recommend putting Valora on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "gate": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Gate app",\n          "description": "We recommend putting Gate on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Gate extension",\n          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "gemini": {\n      "qr_code": {\n        "step1": {\n          "title": "Open keys.gemini.com",\n          "description": "Visit keys.gemini.com on your mobile browser - no app download required."\n        },\n        "step2": {\n          "title": "Create Your Wallet Instantly",\n          "description": "Set up your smart wallet in seconds using your device\'s built-in authentication."\n        },\n        "step3": {\n          "title": "Scan to Connect",\n          "description": "Scan the QR code to instantly connect your wallet - it just works."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Go to keys.gemini.com",\n          "description": "No extensions or downloads needed - your wallet lives securely in the browser."\n        },\n        "step2": {\n          "title": "One-Click Setup",\n          "description": "Create your smart wallet instantly with passkey authentication - easier than any wallet out there."\n        },\n        "step3": {\n          "title": "Connect and Go",\n          "description": "Approve the connection and you\'re ready - the unopinionated wallet that just works."\n        }\n      }\n    },\n\n    "xportal": {\n      "qr_code": {\n        "step1": {\n          "description": "Put xPortal on your home screen for faster access to your wallet.",\n          "title": "Open the xPortal app"\n        },\n        "step2": {\n          "description": "Create a wallet or import an existing one.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "mew": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",\n          "title": "Open the MEW Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "zilpay": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the ZilPay app",\n          "description": "Add ZilPay to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "nova": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Nova Wallet app",\n          "description": "Add Nova Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "meco": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MeCo Wallet app",\n          "description": "Put MeCo Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "anchorage_digital": {\n      "extension": {\n        "step1": {\n          "title": "Install the Anchorage Digital extension",\n          "description": "We recommend pinning Anchorage Digital to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Scan the QR code to login",\n          "description": "Securely connect your organization\'s wallets to dApps with institutional-grade security."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you log in, click below to refresh the browser and load up the extension."\n        }\n      }\n    }\n  }\n}\n';
    },
    89764: (e, t, n) => {
      n.d(t, { B: () => o });
      var r = n(87625);
      function o(e, t = {}) {
        let n = (function (e, t = {}) {
          try {
            return e.getClient(t);
          } catch {
            return;
          }
        })(e, t);
        return n?.extend(r.$);
      }
    },
    92054: (e, t, n) => {
      n.d(t, { N: () => o, V: () => i });
      var r = n(44892);
      class o extends r.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class i extends r.C {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    93259: (e, t, n) => {
      n.d(t, { T: () => r });
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let o = e[n];
        return "function" == typeof o ? o : (n) => t(e, n);
      }
    },
    95192: (e, t, n) => {
      n.d(t, { I: () => c });
      var r = n(47712),
        o = n(65023),
        i = n(93259);
      async function a(e, t) {
        let { allowFailure: n = !0, chainId: r, contracts: a, ...s } = t,
          c = e.getClient({ chainId: r });
        return (0, i.T)(
          c,
          o.C,
          "multicall"
        )({ allowFailure: n, contracts: a, ...s });
      }
      var s = n(86676);
      async function c(e, t) {
        let { allowFailure: n = !0, blockNumber: o, blockTag: c, ...l } = t,
          u = t.contracts;
        try {
          let t = {};
          for (let [n, r] of u.entries()) {
            let o = r.chainId ?? e.state.chainId;
            t[o] || (t[o] = []), t[o]?.push({ contract: r, index: n });
          }
          let r = (
              await Promise.all(
                Object.entries(t).map(([t, r]) =>
                  a(e, {
                    ...l,
                    allowFailure: n,
                    blockNumber: o,
                    blockTag: c,
                    chainId: Number.parseInt(t, 10),
                    contracts: r.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            i = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return r.reduce((e, t, n) => (e && (e[i[n]] = t), e), []);
        } catch (a) {
          if (a instanceof r.bG) throw a;
          let t = () =>
            u.map((t) =>
              (function (e, t) {
                let { chainId: n, ...r } = t,
                  o = e.getClient({ chainId: n });
                return (0, i.T)(o, s.J, "readContract")(r);
              })(e, { ...t, blockNumber: o, blockTag: c })
            );
          if (n)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
    },
    98723: (e, t, n) => {
      let r, o, i, a, s, c, l, u, d, p, h, f, w, m, g;
      n.d(t, { S: () => H });
      let b = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function y(e) {
        var t;
        let n;
        return (
          (t = (function (e) {
            let t = 0;
            function n() {
              return (e[t++] << 8) | e[t++];
            }
            let r = n(),
              o = 1,
              i = [0, 1];
            for (let e = 1; e < r; e++) i.push((o += n()));
            let a = n(),
              s = t;
            t += a;
            let c = 0,
              l = 0;
            function u() {
              return (
                0 == c && ((l = (l << 8) | e[t++]), (c = 8)), (l >> --c) & 1
              );
            }
            let d = 0x80000000 - 1,
              p = 0;
            for (let e = 0; e < 31; e++) p = (p << 1) | u();
            let h = [],
              f = 0,
              w = 0x80000000;
            for (;;) {
              let e = Math.floor(((p - f + 1) * o - 1) / w),
                t = 0,
                n = r;
              for (; n - t > 1; ) {
                let r = (t + n) >>> 1;
                e < i[r] ? (n = r) : (t = r);
              }
              if (0 == t) break;
              h.push(t);
              let a = f + Math.floor((w * i[t]) / o),
                s = f + Math.floor((w * i[t + 1]) / o) - 1;
              for (; ((a ^ s) & 0x40000000) == 0; )
                (p = ((p << 1) & d) | u()),
                  (a = (a << 1) & d),
                  (s = ((s << 1) & d) | 1);
              for (; a & ~s & 0x20000000; )
                (p = (0x40000000 & p) | ((p << 1) & (d >>> 1)) | u()),
                  (a = (a << 1) ^ 0x40000000),
                  (s = ((0x40000000 ^ s) << 1) | 0x40000001);
              (f = a), (w = 1 + s - a);
            }
            let m = r - 4;
            return h.map((t) => {
              switch (t - m) {
                case 3:
                  return m + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++]);
                case 2:
                  return m + 256 + ((e[s++] << 8) | e[s++]);
                case 1:
                  return m + e[s++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, n) => (t[e.charCodeAt(0)] = n));
              let n = e.length,
                r = new Uint8Array((6 * n) >> 3);
              for (let o = 0, i = 0, a = 0, s = 0; o < n; o++)
                (s = (s << 6) | t[e.charCodeAt(o)]),
                  (a += 6) >= 8 && (r[i++] = s >> (a -= 8));
              return r;
            })(e)
          )),
          (n = 0),
          () => t[n++]
        );
      }
      function A(e, t = 0) {
        let n = [];
        for (;;) {
          let r = e(),
            o = e();
          if (!o) break;
          t += r;
          for (let e = 0; e < o; e++) n.push(t + e);
          t += o + 1;
        }
        return n;
      }
      function v(e) {
        return x(() => {
          let t = A(e);
          if (t.length) return t;
        });
      }
      function C(e) {
        let t = [];
        for (;;) {
          let n = e();
          if (0 == n) break;
          t.push(
            (function (e, t) {
              let n = 1 + t(),
                r = t(),
                o = x(t);
              return k(o.length, 1 + e, t).flatMap((e, t) => {
                let [i, ...a] = e;
                return Array(o[t])
                  .fill()
                  .map((e, t) => {
                    let o = t * r;
                    return [i + t * n, a.map((e) => e + o)];
                  });
              });
            })(n, e)
          );
        }
        for (;;) {
          var n, r;
          let o = e() - 1;
          if (o < 0) break;
          t.push(
            ((n = o), k(1 + (r = e)(), 1 + n, r).map((e) => [e[0], e.slice(1)]))
          );
        }
        return t.flat();
      }
      function x(e) {
        let t = [];
        for (;;) {
          let n = e(t.length);
          if (!n) break;
          t.push(n);
        }
        return t;
      }
      function k(e, t, n) {
        let r = Array(e)
          .fill()
          .map(() => []);
        for (let o = 0; o < t; o++)
          (function (e, t) {
            let n = Array(e);
            for (let o = 0, i = 0; o < e; o++) {
              var r;
              n[o] = i += 1 & (r = t()) ? ~r >> 1 : r >> 1;
            }
            return n;
          })(e, n).forEach((e, t) => r[t].push(e));
        return r;
      }
      function I(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function E(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let n = [];
        for (let r = 0; r < t; )
          n.push(String.fromCodePoint(...e.slice(r, (r += 4096))));
        return n.join("");
      }
      function B(e, t) {
        let n = e.length,
          r = n - t.length;
        for (let o = 0; 0 == r && o < n; o++) r = e[o] - t[o];
        return r;
      }
      let S = 55204;
      function M(e) {
        return (e >> 24) & 255;
      }
      function O(e) {
        return 0xffffff & e;
      }
      function P(e) {
        return e >= 44032 && e < S;
      }
      function W(e) {
        r ||
          (function () {
            let e = y(
              "AEUDWAHSCGYATwDVADIAdgAiADQAFAAtABQAIQAPACcADQASAAsAGQAJABIACQARAAUACwAFAAwABQAQAAMABwAEAAoABQAJAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACwANAA0AAwAKAAkABAAdAAYAZwDTAecDNACxCmIB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgPi89uj00MsvBXxEPAGPCDwBnQKoEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJEMAJpIBpob5AERSMAKNoAXqaQLRBMCzEiC+AZ4EWRJJFbEu7QDQLARtEbgECxDwAb/RyAk1AV4nD2cEQQKTAzsAGpobPgAahAGPCrysdy0OAKwAfFIcBAQFUmoA/PtZADkBIadVj2UMUgx5Il4ANQC9vLIBDAHUGVsQ8wCzfQIbGVcCHBZHAZ8CBAgXOhG7AqMZ4M7+1M0UAPDNAWsC+mcJDe8AAQA99zkEXLICyQozAo6lAobcP5JvjQLFzwKD9gU/OD8FEQCtEQL6bW+nAKUEvzjDHsuRyUvOFHcacUz5AqIFRSE2kzsBEQCuaQL5DQTlcgO6twSpTiUgCwIFCAUXBHQEqQV6swAVxUlmTmsCwjqsP/wKJQmXb793UgZBEBsnpRD3DDMBtQE7De1L2ATxBjsEyR99GRkPzZWcCKUt3QztJuMuoYBaI/UqgwXtS/Q83QtNUWgPWQtlCeM6Y4FOAyEBDSKLCt0NOQhtEPMKyWsN5RFFBzkD1UmaAKUHAQsRHTUVtSYQYqwLCTl3Bvsa9guPJq8TKXr8BdMaIQZNASka/wDPLueFsFoxXBxPXwYDCyUjxxSoUCANJUC3eEgaGwcVJakCkUNwSodRNh6TIfY8PQ1mLhNRfAf1PAUZTwuBPJ5Gq0UOEdI+jT1IIklMLAQ1fywvJ4sJzw+FDLl8cgFZCSEJsQxxEzERFzfFCDkHGS2XJCcVCCFGlWCaBPefA/MT0QMLBT8JQQcTA7UcLRMuFSkFDYEk1wLzNtUuswKPVoABFwXLDyUf3xBQR+AO6QibAmUDgyXrAC0VIQAXIpsIQ2MAX4/YUwUuywjHamwjdANnFOdhEXMHkQ5XB6ccMxW/HOFwyF4Lhggoo68JWwF1CZkBXwTjCAk1W4ygIEFnU4tYGJsgYUE/XfwCMQxlFZ9EvYd4AosPaxIbATUBcwc5DQECdxHtEWsQlQjrhgQ1tTP4OiUETyGDIBEKJwNPbM4LJyb5DPhpAaMSYgMMND137merYLYkF/0HGTLFQWAh8QuST80MnBrBGEJULhnkB78D8xrzJ+pBVwX/A6MDEzpNM+4EvQtpCIsJPwBJDqMXB9cYagpxjNABMYsBt5kDV5GDAm+PBjcHCwBnC4cFeeUAHQKnCKMABQDPA1cAOQKtB50AGQCFQQE9AycvASHlAo8DkwgxywGVLwHzKQQbwwwVAPc3bkoCw7ECgGpmogXdWAKOAkk1AU0lBAVOR1EDr3HhANsASwYT30cBFatKyxrjQwHfbysAxwD7AAU1BwVBAc0B820AtwFfCzEJorO1AU3pKQCDABVrAdcCiQDdADUAf/EBUwBNBVn5BdMCT0kBETEYK1dhAbsDHwEzAQ0AeQbLjaXJBx8EbQfTAhAbFeEC7y4HtQEDIt8TzULFAr3eVaFgAmSBAmJCW02vWzcgAqH3AmiYAmYJAp+EOBsLAmY7AmYmBG4EfwN/EwN+kjkGOXcXOYI6IyMCbB0CMjY4CgJtxwJtru+KM2dFKwFnAN4A4QBKBQeYDI0A/gvCAA21AncvAnaiPwJ5S0MCeLodXNtFrkbXAnw/AnrIAn0JAnzwBVkFIEgASH1jJAKBbQKAAAKABQJ/rklYSlsVF0rMAtEBAtDMSycDiE8Dh+ZExZEyAvKhXQMDA65LzkwtJQPPTUxNrwKLPwKK2MEbBx1DZwW3Ao43Ao5cQJeBAo7ZAo5ceFG0UzUKUtRUhQKT+wKTDADpABxVHlWvVdAGLBsplYYy4XhmRTs5ApefAu+yWCGoAFklApaPApZ8nACpWaxaCYFNADsClrUClk5cRFzRApnLAplkXMpdBxkCnJs5wjqdApwWAp+bAp64igAdDzEqDwKd8QKekgC1PWE0Ye8CntMCoG4BqQKenx8Cnk6lY8hkJyUrAievAiZ+AqD7AqBMAqLdAqHEAqYvAqXOAqf/AH0Cp/JofGixAANJahxq0QKs4wKsrgKtZwKtAgJXHQJV3AKx4dcDH05slwKyvQ0CsugXbOBtY21IXwMlzQK2XDs/bpADKUUCuF4CuUcVArkqd3A2cOECvRkCu9pwlgMyEQK+iHICAzNxAr4acyJzTwLDywLDBHOCdEs1RXTgAzynAzyaAz2/AsV8AsZHAsYQiQLIaVECyEQCyU8CyS4CZJ0C3dJ4eWF4rnklS9ADGKNnAgJh9BnzlSR7C16SXrsRAs9rAs9sL0tT0vMTnwDGrQLPcwEp6gNOEn5LBQLcJwLbigLSTwNSXANTXwEBA1WMgIk/AMsW7WBFghyC04LOg40C2scC2d6EEIRJpzwDhqUALwNkDoZxWfkAVQLfZQLeuHN3AuIv7RQB8zAnAfSbAfLShwLr8wLpcHkC6vkC6uQA+UcBuQLuiQLrnJaqlwMC7j8DheCYeXDgcaEC8wMAaQOOFpmTAvcTA5FuA5KHAveYAvnZAvhmmhyaq7s3mx4DnYMC/voBGwA5nxyfswMFjQOmagOm2QDRxQMGaqGIogUJAwxJAtQAPwMA4UEXUwER8wNrB5dnBQCTLSu3r73bAYmZFH8RBDkB+ykFIQ6dCZ8Akv0TtRQrxQL3LScApQC3BbmOkRc/xqdtQS4UJo0uAUMBgPwBtSYAdQMOBG0ALAIWDKEAAAoCPQJqA90DfgSRASBFBSF8CgAFAEQAEwA2EgJ3AQAF1QNr7wrFAgD3Cp8nv7G35QGRIUFCAekUfxE0wIkABAAbAFoCRQKEiwAGOlM6lI1tALg6jzrQAI04wTrcAKUA6ADLATqBOjs5/Dn5O3aJOls7nok6bzkYAVYBMwFsBS81XTWeNa01ZjV1NbY1xTWCNZE10jXhNZ41rTXuNf01sjXBNgI2ETXGNdU2FjYnNd417TYuNj02LjUtITY6Nj02PDbJNwgEkDxXNjg23TcgNw82yiA3iTcwCgSwPGc2JDcZN2w6jTchQtRDB0LgQwscDw8JmyhtKFFVBgDpfwDpsAD+mxQ91wLpNSMArQC9BbeOkRdLxptzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgELgEaJZkC7aMAoQCjBcGOmxdNxrsBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUHqSvAj5Gqwr7YrMUACT9AN3rpF27H7fsd/twPt4l+UW1yQYKBt2Cgy7qJpGiLcdE2P1cQSImUbqJ6ICH27H4knQMIRMrFkHu3sx6tC35Y+eLIh4e4CMKJ4DfyV+8mfta499RCAJ0xfeZR8PsoYOApva9pjGn4PhvyZS7/h5JLuhaucfjuU+Z584wwqNO4hWYmaBCcjgQPale1bjoHzMUbut/zTgxHxBnAyrdKpF4IRMASLBtD/jviyLeCgj8twWjAd3HchN/uqaeRYeHJgl7JEY9/cTrvtfybx/r3Y/NtxJ9dp+MTVmiS9bwBH73s8Di56/Ma+mTPMHq4T1yEG1fWcqr0u+hrGnJEvU1JJAm/maQSrKrazIyvSkDFkj8UUlfBq8baniTGPng6YZRL661rDNw4w/1g2figG0IhXnL7wosd/sVNo5dYSmMBTP5c7rYLjRdCwg8quwljOMPf63D8ICAL0r71XRiyFHdgwHbwfgnPOf4Lzjf2v+j+IiDHG2isp5yUnzSDyDRb4i/Vs0qHSHq8PiEQ/JnBP7PxnjN0j6gT4AVAeRx/1o9VnEUlUwvFrzJqHk9jxAw4sYxCnrxaeBdCFFKbnE7z+x54F5W7ZZsU6kx8Qocul6FoAHHy01FGL/nne61mn4+uYXfQ1Uccn+HMLKE+cZzT8BB1E3FRskOgJrRsq25rauLm8+uamXpkS/bTy6y1wDbCrW4eD532kTWrtNUmVVZOIn/C+/JR9KVR5iG9TY8iaT67ubm/whL1xbKZoqtY+a6fNxMJrg211bGYJDUkYMNWA0BMB++9zOm6Eik4roqs9CCEFW0lyAK0PbvlzvoxrZuY/OEhNW/l/63U15Od/RSvmDvXpGLiVmeGi5PDSH2bYz5o2g6wFDQ2FbZgYgTF8rPlvA1ifjZD3NLtFdXdpSIJvgKR7GpjJWG7GZGawPomIH8B5tUmtHH9LpM+/KQKunEPa1GiQkCXv4Cnm9DLORo2joicHdPDZ64obQrPZ5bgqckkj0G6/NEiPYBY4bCkL7W8G5YzsUb6GakFjykSPkT7JGeLeB6uJOGMm+x7N381BCDfbJFx0dtLgV9Q477BfL1fvitX5anV/oYfxeYl+eF5x5bB8+Ep/L2nsmd56aKF4aAD4GbJWsdKyBW22xEmAD3XdbtsMyAFoR5mOla0gEd9U/YVB7zvHGpHbQonay9Sv0bQ8iZ8piaXVrKc5AG1AmqqgaEvzHSP2Wux7aZTWh6quVDVU01JtMIVRdCFwlSbbqqhoFlyzsotQzRexFvZ/MqUSFu3OhRIuNBbufvBpdVgb8XdGJ48/lJPCZ7dsOujTTbKPSEvGXkOnG2Xdi8/nM3EMRqITd5QeU7iOjKqC7URJY6TnLsHij22xAHKnVRD5MDtBYnoGFqZGMDmXCW6Oj+BAWw14hESY/xLF6bLku06AHkiXTHPCFZ0f9YSqqo27eAhhS67OrA2Het4M9JM3jm/yRX6bYxnfmzYl5qQdHxN08FsNuWDrWd4vMUY2QD3hr8vS73SCTkFoXZR3xNzOQt8d/6HfjBmXqvrE6EGkLzK6YK2U2/ksU/iUH+LvVIsJI+ri2AL/klo+ShdDyfs5A83i2prkMs51IKR7ZcqjZJi5X3+bd8GlyWvtddxKEoEqSgEO7A8jIgf2nH0h8FjM7oB6yte3X5mpL0i/E4Rx0CotKnILJj/vJqo4VkPQ93jRtRVfaitQPqldl5xRYPq8387Z0DcnZvOeION0Ht1+P27kFLGQIcLBX4FG3sffccNHh5cPfzp9INoRtqVtdViJfg8RjnXiIz/MNqEN6zvzX3hMzyWC7oSoXIT14ubc0abPX8Rp9GVa5NI/8iv+6ela1oTncbdimRKnrbRffDR/X4nH+bgqAuHWl7hOaeXPWVzIeRl7ga+JzD4Sx3mlj/q6Ra/E2HhDf21eEzTLNGfCZsY+/yxZzQzIAuijG65ii4O/waAJCrEJaWd/DRAKMQ5678Dw5AT7RCKzdadIwd8LsD+DgPBASmWsUlf8R0k1w/2k4lO2Wpb4zMI6EJVJs0xk/wn8/fRUPqrDKhbjHR41SqgFMx5RGMPuduFwlu5lK89tW11sTqiX/5EfGs5nO+y9FKvgXKPOEmgE05EKNL6Sjb3xS40H3BVPhm0ESOZgAjZoymc8be0inDVo4JdJVf+NKd3tN/CaB7GShhH27qf95NoFZVX/6ZkR2lX+CgWrQ2INgkh+bbMz68+uJ3Clsh8HSMPEQtAt+BBE6fXDab7KIlsKxU1lIXW/KWVstpdPanJ0pdXpQinDyUQjtY7ZVcfiecRxRDMAUhHFU2cEaciQ+htiPMPx1kdvtWG9T44w3r037ljHBFJdYR0r55qvMRixtAEFJAqA4T1ES87FAx7UozXasytg8MftZYt0rjYgLe6EJ5aWvy2qscBSBQ7yehoJIA3wIIZ9ukfkyBb6qnue5ko8W50rpV4kXqWjI5nbGRXrNW0tBZHXlY48nSgcUXBHWT4GcgLZJoLlKJnV96kCYpq9eWHh7xJzkCAyrQuQ5AJ0qq/uZ3toJglNterev+Qm0KXxPg/+YbFRJdfhbp1wOnVOEYdVHTya6CtO0afhEaBhx3oHwCb5Kq6RwHDzFMl2vfjL8GwzcCoTj7wZe+UFnYDV2yKpPU9dba29gYBdNqJg/KXozO+CJTlKmlKhnqTf5doeS35DZFV+cYJQVjd+oVY/Gtc/6XPzUxb1gMqf6cEjNNoRC8AObrp+fx0cVtGu4ffC2TgXRC8zPl8moUHCB5HZ25d87mlsiiK0aNwBtcEQjRNBT/QrXbw/8aVXdKMHn9EqYEKEyxSGTpYQOaes1G1Qq8pDgqkZtlO2HRyCXpmeM7TSrRPkAh004BfisVpF6zP44n2Jvxz/gOVocNCyy9V6lkod28QM4pbaMvVJigD/w3BrsjSJrXlqc4ulBYOCceiBN4b/gHajYyupbhEt63a619Ay4wsL6a6w6B+A7TnoyE7BliWHJfzVxxIKM/W3M/J8Bx99Op863Q8eNuIMGRx++VbYfjm+VGYBA3Ap/KEu/wxBNBpJJncwHPG45V8Gh98ZIrGCc20MwijGowZbcS7d1nEgcOW5cddZpHL2XPAIRbColiheZzXTvBxZOY3iMSDSKDrICyJ/iQs1vdplVdH/JrLJsQ2jtTnfCrITIghq3KFX3qAgLWAIp8IffNSdTYptnbGfc8s+qcr3zyzyHp1aJg+jxTF4kD1ry5Wauv5V3xnOGwTFecNzXSLHBW20/pCQjk4uorD0plIhMSTc79+/r4RKPClRYTBYex1Ob5crtfvRQBBv6re/6FhtCqtduag67glqRA77/3ulblh9YRtMdDxkCyJDeNnAuCLPQFmdRRWJtH20Z8DstfJf+5oj5SSB64d0iF5/Ya4KfTWxfivj9Ap2/zbYaTo/1gO3tM6RYsCZharMBFr7Fm61mLSrQnEI4OF1gbVS4k/JE9UotOrnLJZuswoWodCSV8zbybkJSVIP7n8UaE9xCR39rJZmf27HOAPVOGc9pdkQUcRrI0qyVF9Z3j1RHDbxIfwbWzmPVjwIdPJvtmBYwEQIUsIW1S939hcVikK00ozPRI02cqhzVUNzpOxVdrwRPvlh1aIOf0xFEqD3YkGnCnFah/cFN3J2gB7N+bZSGawwkKFu1tpQMrp1W+27YNkyT0TpcFpTqgOqqLabrgcCUPxh97mREOGy4xItzQ9xSl6rq+8BZsHcrQFReS+QeMxJ3P6CnL9EP/eOLDjumLhvrcQrpPiknsofbzBv9gTP0lU+TIVwE6E7CcKfT36q+ZiEOHJ9ayf0dyUJLezAb2M8aNHwd0+OJmsVgTzRWA"
            );
            for (let [t, n] of ((r = new Map(
              v(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (o = new Set(A(e))),
            (i = new Map()),
            (a = new Map()),
            C(e))) {
              if (!o.has(t) && 2 == n.length) {
                let [e, r] = n,
                  o = a.get(e);
                o || ((o = new Map()), a.set(e, o)), o.set(r, t);
              }
              i.set(t, n.reverse());
            }
          })();
        let t = [],
          n = [],
          s = !1;
        function c(e) {
          let n = r.get(e);
          n && ((s = !0), (e |= n)), t.push(e);
        }
        for (let r of e)
          for (;;) {
            if (r < 128) t.push(r);
            else if (P(r)) {
              let e = r - 44032,
                t = (e / 588) | 0,
                n = ((e % 588) / 28) | 0,
                o = e % 28;
              c(4352 + t), c(4449 + n), o > 0 && c(4519 + o);
            } else {
              let e = i.get(r);
              e ? n.push(...e) : c(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (s && t.length > 1) {
          let e = M(t[0]);
          for (let n = 1; n < t.length; n++) {
            let r = M(t[n]);
            if (0 == r || e <= r) {
              e = r;
              continue;
            }
            let o = n - 1;
            for (;;) {
              let n = t[o + 1];
              if (((t[o + 1] = t[o]), (t[o] = n), !o || (e = M(t[--o])) <= r))
                break;
            }
            e = M(t[n]);
          }
        }
        return t;
      }
      function D(e) {
        return (function (e) {
          let t = [],
            n = [],
            r = -1,
            o = 0;
          for (let i of e) {
            let e = M(i),
              s = O(i);
            if (-1 == r) 0 == e ? (r = s) : t.push(s);
            else if (o > 0 && o >= e)
              0 == e ? (t.push(r, ...n), (n.length = 0), (r = s)) : n.push(s),
                (o = e);
            else {
              let i = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                {
                  if (P(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                    return e + (t - 4519);
                  let n = a.get(e);
                  return n && (n = n.get(t)) ? n : -1;
                }
              })(r, s);
              i >= 0
                ? (r = i)
                : 0 == o && 0 == e
                ? (t.push(r), (r = s))
                : (n.push(s), (o = e));
            }
          }
          return r >= 0 && t.push(r, ...n), t;
        })(W(e));
      }
      let Q = (e) => Array.from(e);
      function U(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class R extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function N() {
        let e, t;
        if (s) return;
        let n = y(
            "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"
          ),
          r = () => A(n),
          o = () => new Set(r()),
          i = (e, t) => t.forEach((t) => e.add(t));
        (s = new Map(C(n))),
          (c = o()),
          (l = r()),
          (u = new Set(r().map((e) => l[e]))),
          (l = new Set(l)),
          (d = o()),
          o();
        let a = v(n),
          b = n(),
          k = () => {
            let e = new Set();
            return r().forEach((t) => i(e, a[t])), i(e, r()), e;
          };
        (p = x((e) => {
          let t = x(n).map((e) => e + 96);
          if (t.length) {
            let r = e >= b;
            (t[0] -= 32), (t = E(t)), r && (t = `Restricted[${t}]`);
            let o = k();
            return { N: t, P: o, Q: k(), M: !n(), R: r };
          }
        })),
          (h = o()),
          (f = new Map());
        let I = r()
          .concat(Q(h))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (I.forEach((e, t) => {
          let r = n(),
            o = (I[t] = r ? I[t - r] : { V: [], M: new Map() });
          o.V.push(e), h.has(e) || f.set(e, o);
        }),
        new Set(f.values()))) {
          let n = [];
          for (let t of e) {
            let e = p.filter((e) => U(e, t)),
              r = n.find(({ G: t }) => e.some((e) => t.has(e)));
            r || ((r = { G: new Set(), V: [] }), n.push(r)),
              r.V.push(t),
              i(r.G, e);
          }
          let r = n.flatMap((e) => Q(e.G));
          for (let { G: e, V: o } of n) {
            let n = new Set(r.filter((t) => !e.has(t)));
            for (let e of o) t.set(e, n);
          }
        }
        w = new Set();
        let S = new Set(),
          M = (e) => (w.has(e) ? S.add(e) : w.add(e));
        for (let e of p) {
          for (let t of e.P) M(t);
          for (let t of e.Q) M(t);
        }
        for (let e of w) f.has(e) || S.has(e) || f.set(e, 1);
        for (let r of (i(w, W(w).map(O)),
        (m = ((e = []),
        (t = A(n)),
        (function t({ S: n, B: r }, o, i) {
          if (!(4 & n) || i !== o[o.length - 1])
            for (let a of (2 & n && (i = o[o.length - 1]),
            1 & n && e.push(o),
            r))
              for (let e of a.Q) t(a, [...o, e], i);
        })(
          (function e(r) {
            return {
              S: n(),
              B: x(() => {
                let r = A(n).map((e) => t[e]);
                if (r.length) return e(r);
              }),
              Q: r,
            };
          })([]),
          []
        ),
        e)
          .map((e) => R.from(e))
          .sort(B)),
        (g = new Map()),
        m)) {
          let e = [g];
          for (let t of r) {
            let n = e.map((e) => {
              let n = e.get(t);
              return n || ((n = new Map()), e.set(t, n)), n;
            });
            65039 === t ? e.push(...n) : (e = n);
          }
          for (let t of e) t.V = r;
        }
      }
      function F(e) {
        return (j(e) ? "" : `${T(q([e]))} `) + I(e);
      }
      function T(e) {
        return `"${e}"\u200E`;
      }
      function q(e, t = 1 / 0, n = I) {
        var r;
        let o = [];
        (r = e[0]),
          N(),
          l.has(r) && o.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)]));
        let i = 0,
          a = e.length;
        for (let t = 0; t < a; t++) {
          let r = e[t];
          j(r) && (o.push(E(e.slice(i, t))), o.push(n(r)), (i = t + 1));
        }
        return o.push(E(e.slice(i, a))), o.join("");
      }
      function j(e) {
        return N(), d.has(e);
      }
      function L(e) {
        return Error(`disallowed character: ${F(e)}`);
      }
      function J(e, t) {
        let n = F(t),
          r = p.find((e) => e.P.has(t));
        return (
          r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
        );
      }
      function K(e) {
        return Error(`illegal placement: ${e}`);
      }
      function G(e) {
        return e.filter((e) => 65039 != e);
      }
      function H(e) {
        var t = (function (e, t, n) {
          if (!e) return [];
          N();
          let r = 0;
          return e.split(".").map((e) => {
            let o = (function (e) {
                let t = [];
                for (let n = 0, r = e.length; n < r; ) {
                  let r = e.codePointAt(n);
                  (n += r < 65536 ? 1 : 2), t.push(r);
                }
                return t;
              })(e),
              i = { input: o, offset: r };
            r += o.length + 1;
            try {
              let e,
                r = (i.tokens = (function (e, t, n) {
                  let r = [],
                    o = [];
                  for (e = e.slice().reverse(); e.length; ) {
                    let i = (function (e, t) {
                      let n,
                        r = g,
                        o = e.length;
                      for (; o && (r = r.get(e[--o])); ) {
                        let { V: t } = r;
                        t && ((n = t), (e.length = o));
                      }
                      return n;
                    })(e);
                    if (i) o.length && (r.push(t(o)), (o = [])), r.push(n(i));
                    else {
                      let t = e.pop();
                      if (w.has(t)) o.push(t);
                      else {
                        let e = s.get(t);
                        if (e) o.push(...e);
                        else if (!c.has(t)) throw L(t);
                      }
                    }
                  }
                  return o.length && r.push(t(o)), r;
                })(o, t, n)),
                a = r.length;
              if (!a) throw Error("empty label");
              let d = (i.output = r.flat());
              for (let e = d.lastIndexOf(95); e > 0; )
                if (95 !== d[--e])
                  throw Error("underscore allowed only at start");
              if (
                !(i.emoji = a > 1 || r[0].is_emoji) &&
                d.every((e) => e < 128)
              ) {
                if (d.length >= 4 && 45 == d[2] && 45 == d[3])
                  throw Error(`invalid label extension: "${E(d.slice(0, 4))}"`);
                e = "ASCII";
              } else {
                let t = r.flatMap((e) => (e.is_emoji ? [] : e));
                if (t.length) {
                  if (l.has(d[0])) throw K("leading combining mark");
                  for (let e = 1; e < a; e++) {
                    let t = r[e];
                    if (!t.is_emoji && l.has(t[0]))
                      throw K(
                        `emoji + combining mark: "${E(r[e - 1])} + ${q([
                          t[0],
                        ])}"`
                      );
                  }
                  !(function (e) {
                    let t = e[0],
                      n = b.get(t);
                    if (n) throw K(`leading ${n}`);
                    let r = e.length,
                      o = -1;
                    for (let i = 1; i < r; i++) {
                      t = e[i];
                      let r = b.get(t);
                      if (r) {
                        if (o == i) throw K(`${n} + ${r}`);
                        (o = i + 1), (n = r);
                      }
                    }
                    if (o == r) throw K(`trailing ${n}`);
                  })(d);
                  let n = Q(new Set(t)),
                    [o] = (function (e) {
                      let t = p;
                      for (let n of e) {
                        let e = t.filter((e) => U(e, n));
                        if (!e.length)
                          if (p.some((e) => U(e, n))) throw J(t[0], n);
                          else throw L(n);
                        if (((t = e), 1 == e.length)) break;
                      }
                      return t;
                    })(n);
                  (function (e, t) {
                    for (let n of t) if (!U(e, n)) throw J(e, n);
                    if (e.M) {
                      let e = W(t).map(O);
                      for (let t = 1, n = e.length; t < n; t++)
                        if (u.has(e[t])) {
                          let r = t + 1;
                          for (let o; r < n && u.has((o = e[r])); r++)
                            for (let n = t; n < r; n++)
                              if (e[n] == o)
                                throw Error(
                                  `duplicate non-spacing marks: ${F(o)}`
                                );
                          if (r - t > 4)
                            throw Error(
                              `excessive non-spacing marks: ${T(
                                q(e.slice(t - 1, r))
                              )} (${r - t}/4)`
                            );
                          t = r;
                        }
                    }
                  })(o, t),
                    (function (e, t) {
                      let n,
                        r = [];
                      for (let e of t) {
                        let t = f.get(e);
                        if (1 === t) return;
                        if (t) {
                          let r = t.M.get(e);
                          if (
                            !(n = n ? n.filter((e) => r.has(e)) : Q(r)).length
                          )
                            return;
                        } else r.push(e);
                      }
                      if (n) {
                        for (let t of n)
                          if (r.every((e) => U(t, e)))
                            throw Error(
                              `whole-script confusable: ${e.N}/${t.N}`
                            );
                      }
                    })(o, n),
                    (e = o.N);
                } else e = "Emoji";
              }
              i.type = e;
            } catch (e) {
              i.error = e;
            }
            return i;
          });
        })(e, D, G);
        return t
          .map(({ input: e, error: n, output: r }) => {
            if (n) {
              let r = n.message;
              throw Error(
                1 == t.length ? r : `Invalid label ${T(q(e, 63))}: ${r}`
              );
            }
            return E(r);
          })
          .join(".");
      }
    },
  },
]);
