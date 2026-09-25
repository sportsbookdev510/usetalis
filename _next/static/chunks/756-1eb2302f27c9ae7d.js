"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [756],
  {
    14440: (t, e, r) => {
      r.d(e, { t: () => i });
      var s = r(71195);
      let i = new (class extends s.Q {
        #t = !0;
        #e;
        #r;
        constructor() {
          super(),
            (this.#r = (t) => {
              if ("undefined" != typeof window && window.addEventListener) {
                let e = () => t(!0),
                  r = () => t(!1);
                return (
                  window.addEventListener("online", e, !1),
                  window.addEventListener("offline", r, !1),
                  () => {
                    window.removeEventListener("online", e),
                      window.removeEventListener("offline", r);
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.#e || this.setEventListener(this.#r);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#e?.(), (this.#e = void 0));
        }
        setEventListener(t) {
          (this.#r = t), this.#e?.(), (this.#e = t(this.setOnline.bind(this)));
        }
        setOnline(t) {
          this.#t !== t &&
            ((this.#t = t),
            this.listeners.forEach((e) => {
              e(t);
            }));
        }
        isOnline() {
          return this.#t;
        }
      })();
    },
    21986: (t, e, r) => {
      r.d(e, { jG: () => i });
      let s = r(53304).Zq,
        i = (function () {
          let t = [],
            e = 0,
            r = (t) => {
              t();
            },
            i = (t) => {
              t();
            },
            n = s,
            a = (s) => {
              e
                ? t.push(s)
                : n(() => {
                    r(s);
                  });
            };
          return {
            batch: (s) => {
              let a;
              e++;
              try {
                a = s();
              } finally {
                --e ||
                  (() => {
                    let e = t;
                    (t = []),
                      e.length &&
                        n(() => {
                          i(() => {
                            e.forEach((t) => {
                              r(t);
                            });
                          });
                        });
                  })();
              }
              return a;
            },
            batchCalls:
              (t) =>
              (...e) => {
                a(() => {
                  t(...e);
                });
              },
            schedule: a,
            setNotifyFunction: (t) => {
              r = t;
            },
            setBatchNotifyFunction: (t) => {
              i = t;
            },
            setScheduler: (t) => {
              n = t;
            },
          };
        })();
    },
    32794: (t, e, r) => {
      r.d(e, { S: () => i });
      var s = r(39219);
      let i = () => s.S$;
    },
    34201: (t, e, r) => {
      r.d(e, { Ht: () => o, jE: () => a });
      var s = r(50625),
        i = r(72133);
      let n = s.createContext(void 0),
        a = (t) => {
          let e = s.useContext(n);
          if (t) return t;
          if (!e)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return e;
        },
        o = (t) => {
          let { client: e, children: r } = t;
          return (
            s.useEffect(
              () => (
                e.mount(),
                () => {
                  e.unmount();
                }
              ),
              [e]
            ),
            (0, i.jsx)(n.Provider, { value: e, children: r })
          );
        };
    },
    39219: (t, e, r) => {
      r.d(e, {
        BH: () => v,
        Cp: () => f,
        EN: () => p,
        F$: () => d,
        GF: () => h,
        GU: () => C,
        MK: () => c,
        S$: () => i,
        ZM: () => T,
        ZZ: () => w,
        Zw: () => a,
        f8: () => m,
        gn: () => o,
        hT: () => Q,
        j3: () => u,
        lQ: () => n,
        nJ: () => l,
        ox: () => I,
        pl: () => F,
        y9: () => O,
        yy: () => S,
      });
      var s = r(53304);
      let i = "undefined" == typeof window || "Deno" in globalThis;
      function n() {}
      function a(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function o(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function u(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function h(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function c(t, e) {
        let {
          type: r = "all",
          exact: s,
          fetchStatus: i,
          predicate: n,
          queryKey: a,
          stale: o,
        } = t;
        if (a) {
          if (s) {
            if (e.queryHash !== d(a, e.options)) return !1;
          } else if (!f(e.queryKey, a)) return !1;
        }
        if ("all" !== r) {
          let t = e.isActive();
          if (("active" === r && !t) || ("inactive" === r && t)) return !1;
        }
        return (
          ("boolean" != typeof o || e.isStale() === o) &&
          (!i || i === e.state.fetchStatus) &&
          (!n || !!n(e))
        );
      }
      function l(t, e) {
        let { exact: r, status: s, predicate: i, mutationKey: n } = t;
        if (n) {
          if (!e.options.mutationKey) return !1;
          if (r) {
            if (p(e.options.mutationKey) !== p(n)) return !1;
          } else if (!f(e.options.mutationKey, n)) return !1;
        }
        return (!s || e.state.status === s) && (!i || !!i(e));
      }
      function d(t, e) {
        return (e?.queryKeyHashFn || p)(t);
      }
      function p(t) {
        return JSON.stringify(t, (t, e) =>
          g(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, r) => ((t[r] = e[r]), t), {})
            : e
        );
      }
      function f(t, e) {
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if (t && e && "object" == typeof t && "object" == typeof e) {
          if (Array.isArray(t) && Array.isArray(e)) {
            if (e.length > t.length) return !1;
            for (let r = 0; r < e.length; r++) if (!f(t[r], e[r])) return !1;
            return !0;
          }
          for (let r of Object.keys(e)) if (!f(t[r], e[r])) return !1;
          return !0;
        }
        return !1;
      }
      let y = Object.prototype.hasOwnProperty;
      function v(t, e, r = 0) {
        if (t === e) return t;
        if (r > 500) return e;
        let s = b(t) && b(e);
        if (!s && !(g(t) && g(e))) return e;
        let i = (s ? t : Object.keys(t)).length,
          n = s ? e : Object.keys(e),
          a = n.length,
          o = s ? Array(a) : {},
          u = 0;
        for (let h = 0; h < a; h++) {
          let a = s ? h : n[h],
            c = t[a],
            l = e[a];
          if (c === l) {
            (o[a] = c), (s ? h < i : y.call(t, a)) && u++;
            continue;
          }
          if (
            null === c ||
            null === l ||
            "object" != typeof c ||
            "object" != typeof l
          ) {
            o[a] = l;
            continue;
          }
          let d = v(c, l, r + 1);
          (o[a] = d), d === c && u++;
        }
        return i === a && u === i ? t : o;
      }
      function m(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let r in t) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function b(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function g(t) {
        if (!R(t)) return !1;
        let e = Object.getPrototypeOf(t),
          r = e?.constructor;
        if (void 0 === r) return !0;
        if ("function" != typeof r) return !1;
        let s = r.prototype;
        return (
          !!R(s) &&
          !!s.hasOwnProperty("isPrototypeOf") &&
          e === Object.prototype
        );
      }
      function R(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function S(t) {
        return new Promise((e) => {
          s.zs.setTimeout(e, t);
        });
      }
      function F(t, e, r) {
        return "function" == typeof r.structuralSharing
          ? r.structuralSharing(t, e)
          : !1 !== r.structuralSharing
          ? v(t, e)
          : e;
      }
      function O(t, e, r = 0) {
        let s = [...t, e];
        return r && s.length > r ? s.slice(1) : s;
      }
      function w(t, e, r = 0) {
        let s = [e, ...t];
        return r && s.length > r ? s.slice(0, -1) : s;
      }
      let Q = Symbol();
      function T(t, e) {
        return !t.queryFn && e?.initialPromise
          ? () => e.initialPromise
          : t.queryFn && t.queryFn !== Q
          ? t.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
      }
      function C(t, e) {
        return "function" == typeof t ? t(...e) : !!t;
      }
      function I(t, e, r) {
        let s,
          i = !1;
        return (
          Object.defineProperty(t, "signal", {
            enumerable: !0,
            get: () => (
              (s ??= e()),
              i ||
                ((i = !0),
                s.aborted ? r() : s.addEventListener("abort", r, { once: !0 })),
              s
            ),
          }),
          t
        );
      }
    },
    53304: (t, e, r) => {
      r.d(e, { Zq: () => n, zs: () => i });
      let s = {
          setTimeout: (t, e) => setTimeout(t, e),
          clearTimeout: (t) => clearTimeout(t),
          setInterval: (t, e) => setInterval(t, e),
          clearInterval: (t) => clearInterval(t),
        },
        i = new (class {
          #s = s;
          #i = !1;
          setTimeoutProvider(t) {
            this.#s = t;
          }
          setTimeout(t, e) {
            return this.#s.setTimeout(t, e);
          }
          clearTimeout(t) {
            this.#s.clearTimeout(t);
          }
          setInterval(t, e) {
            return this.#s.setInterval(t, e);
          }
          clearInterval(t) {
            this.#s.clearInterval(t);
          }
        })();
      function n(t) {
        setTimeout(t, 0);
      }
    },
    54870: (t, e, r) => {
      r.d(e, { X: () => u, k: () => h });
      var s = r(39219),
        i = r(21986),
        n = r(80347),
        a = r(65323),
        o = r(78940),
        u = class extends a.k {
          #n;
          #a;
          #o;
          #u;
          #h;
          #c;
          #l;
          #d;
          constructor(t) {
            super(),
              (this.#d = !1),
              (this.#l = t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              (this.#h = t.client),
              (this.#u = this.#h.getQueryCache()),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#a = l(this.options)),
              (this.state = t.state ?? this.#a),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get queryType() {
            return this.#n;
          }
          get promise() {
            return this.#c?.promise;
          }
          setOptions(t) {
            if (
              ((this.options = { ...this.#l, ...t }),
              t?._type && (this.#n = t._type),
              this.updateGcTime(this.options.gcTime),
              this.state && void 0 === this.state.data)
            ) {
              let t = l(this.options);
              void 0 !== t.data &&
                (this.setState(c(t.data, t.dataUpdatedAt)), (this.#a = t));
            }
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#u.remove(this);
          }
          setData(t, e) {
            let r = (0, s.pl)(this.state.data, t, this.options);
            return (
              this.#p({
                data: r,
                type: "success",
                dataUpdatedAt: e?.updatedAt,
                manual: e?.manual,
              }),
              r
            );
          }
          setState(t) {
            this.#p({ type: "setState", state: t });
          }
          cancel(t) {
            let e = this.#c?.promise;
            return (
              this.#c?.cancel(t),
              e ? e.then(s.lQ).catch(s.lQ) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          get resetState() {
            return this.#a;
          }
          reset() {
            this.destroy(), this.setState(this.resetState);
          }
          isActive() {
            return this.observers.some(
              (t) => !1 !== (0, s.GF)(t.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === s.hT || !this.isFetched();
          }
          isFetched() {
            return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
          }
          isStatic() {
            return (
              this.getObserversCount() > 0 &&
              this.observers.some(
                (t) => "static" === (0, s.GF)(t.options.staleTime, this)
              )
            );
          }
          isStale() {
            return this.getObserversCount() > 0
              ? this.observers.some((t) => t.getCurrentResult().isStale)
              : void 0 === this.state.data || this.state.isInvalidated;
          }
          isStaleByTime(t = 0) {
            return (
              void 0 === this.state.data ||
              ("static" !== t &&
                (!!this.state.isInvalidated ||
                  !(0, s.j3)(this.state.dataUpdatedAt, t)))
            );
          }
          onFocus() {
            this.observers
              .find((t) => t.shouldFetchOnWindowFocus())
              ?.refetch({ cancelRefetch: !1 }),
              this.#c?.continue();
          }
          onOnline() {
            this.observers
              .find((t) => t.shouldFetchOnReconnect())
              ?.refetch({ cancelRefetch: !1 }),
              this.#c?.continue();
          }
          addObserver(t) {
            this.observers.includes(t) ||
              (this.observers.push(t),
              this.clearGcTimeout(),
              this.#u.notify({
                type: "observerAdded",
                query: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            let e = this.observers.indexOf(t);
            -1 !== e &&
              (this.observers.splice(e, 1),
              this.observers.length ||
                (this.#c &&
                  (this.#d ||
                  ("paused" === this.state.fetchStatus &&
                    "pending" === this.state.status)
                    ? this.#c.cancel({ revert: !0 })
                    : this.#c.cancelRetry()),
                this.scheduleGc()),
              this.#u.notify({
                type: "observerRemoved",
                query: this,
                observer: t,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#p({ type: "invalidate" });
          }
          async fetch(t, e) {
            if (
              "idle" !== this.state.fetchStatus &&
              this.#c?.status() !== "rejected"
            ) {
              if (void 0 !== this.state.data && e?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#c) return this.#c.continueRetry(), this.#c.promise;
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              let t = this.observers.find((t) => t.options.queryFn);
              t && this.setOptions(t.options);
            }
            let r = new AbortController(),
              i = (t) => {
                Object.defineProperty(t, "signal", {
                  enumerable: !0,
                  get: () => ((this.#d = !0), r.signal),
                });
              },
              a = () => {
                let t = (0, s.ZM)(this.options, e),
                  r = (() => {
                    let t = {
                      client: this.#h,
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                    return i(t), t;
                  })();
                return ((this.#d = !1), this.options.persister)
                  ? this.options.persister(t, r, this)
                  : t(r);
              },
              u = (() => {
                let t = {
                  fetchOptions: e,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#h,
                  state: this.state,
                  fetchFn: a,
                };
                return i(t), t;
              })();
            ("infinite" === this.#n
              ? (0, o.PL)(this.options.pages)
              : this.options.behavior
            )?.onFetch(u, this),
              (this.#o = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== u.fetchOptions?.meta) &&
                this.#p({ type: "fetch", meta: u.fetchOptions?.meta });
            let h = (this.#c = (0, n.II)({
              initialPromise: e?.initialPromise,
              fn: u.fetchFn,
              onCancel: (t) => {
                t instanceof n.cc &&
                  t.revert &&
                  this.setState({ ...this.#o, fetchStatus: "idle" }),
                  r.abort();
              },
              onFail: (t, e) => {
                this.#p({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#p({ type: "pause" });
              },
              onContinue: () => {
                this.#p({ type: "continue" });
              },
              retry: u.options.retry,
              retryDelay: u.options.retryDelay,
              networkMode: u.options.networkMode,
              canRun: () => !0,
            }));
            try {
              let t = await h.start();
              if (void 0 === t)
                throw Error(`${this.queryHash} data is undefined`);
              return (
                this.setData(t),
                this.#u.config.onSuccess?.(t, this),
                this.#u.config.onSettled?.(t, this.state.error, this),
                t
              );
            } catch (t) {
              if (t instanceof n.cc) {
                if (t.silent) return this.#c.promise;
                else if (t.revert) {
                  if (void 0 === this.state.data) throw t;
                  return this.state.data;
                }
              }
              throw (
                (this.#p({ type: "error", error: t }),
                this.#u.config.onError?.(t, this),
                this.#u.config.onSettled?.(this.state.data, t, this),
                t)
              );
            } finally {
              this.#c === h && (this.#c = void 0), this.scheduleGc();
            }
          }
          #p(t) {
            let e = (e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error,
                  };
                case "pause":
                  return { ...e, fetchStatus: "paused" };
                case "continue":
                  return { ...e, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...e,
                    ...h(e.data, this.options),
                    fetchMeta: t.meta ?? null,
                  };
                case "success":
                  let r = {
                    ...e,
                    ...c(t.data, t.dataUpdatedAt),
                    dataUpdateCount: e.dataUpdateCount + 1,
                    ...(!t.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                  return (this.#o = t.manual ? r : void 0), r;
                case "error":
                  let s = t.error;
                  return {
                    ...e,
                    error: s,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: "idle",
                    status: "error",
                    isInvalidated: !0,
                  };
                case "invalidate":
                  return { ...e, isInvalidated: !0 };
                case "setState":
                  return { ...e, ...t.state };
              }
            };
            (this.state = e(this.state)),
              i.jG.batch(() => {
                this.observers.slice().forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#u.notify({ query: this, type: "updated", action: t });
              });
          }
        };
      function h(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, n.v_)(e.networkMode) ? "fetching" : "paused",
          ...(void 0 === t && { error: null, status: "pending" }),
        };
      }
      function c(t, e) {
        return {
          data: t,
          dataUpdatedAt: e ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
        };
      }
      function l(t) {
        let e =
            "function" == typeof t.initialData
              ? t.initialData()
              : t.initialData,
          r = void 0 !== e,
          s = r
            ? "function" == typeof t.initialDataUpdatedAt
              ? t.initialDataUpdatedAt()
              : t.initialDataUpdatedAt
            : 0;
        return {
          data: e,
          dataUpdateCount: 0,
          dataUpdatedAt: r ? s ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: null,
          isInvalidated: !1,
          status: r ? "success" : "pending",
          fetchStatus: "idle",
        };
      }
    },
    63937: (t, e, r) => {
      r.d(e, { m: () => i });
      var s = r(71195);
      let i = new (class extends s.Q {
        #f;
        #e;
        #r;
        constructor() {
          super(),
            (this.#r = (t) => {
              if ("undefined" != typeof window && window.addEventListener) {
                let e = () => t();
                return (
                  window.addEventListener("visibilitychange", e, !1),
                  () => {
                    window.removeEventListener("visibilitychange", e);
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.#e || this.setEventListener(this.#r);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#e?.(), (this.#e = void 0));
        }
        setEventListener(t) {
          (this.#r = t),
            this.#e?.(),
            (this.#e = t((t) => {
              "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
            }));
        }
        setFocused(t) {
          this.#f !== t && ((this.#f = t), this.onFocus());
        }
        onFocus() {
          let t = this.isFocused();
          this.listeners.forEach((e) => {
            e(t);
          });
        }
        isFocused() {
          return "boolean" == typeof this.#f
            ? this.#f
            : globalThis.document?.visibilityState !== "hidden";
        }
      })();
    },
    65323: (t, e, r) => {
      r.d(e, { k: () => a });
      var s = r(53304),
        i = r(39219),
        n = r(32794),
        a = class {
          #y;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, i.gn)(this.gcTime) &&
                (this.#y = s.zs.setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(
              this.gcTime || 0,
              t ?? ((0, n.S)() ? 1 / 0 : 3e5)
            );
          }
          clearGcTimeout() {
            void 0 !== this.#y &&
              (s.zs.clearTimeout(this.#y), (this.#y = void 0));
          }
        };
    },
    70964: (t, e, r) => {
      r.d(e, { $: () => c });
      var s = r(53304),
        i = r(39219),
        n = r(32794),
        a = r(71195),
        o = r(63937),
        u = r(21986),
        h = r(54870),
        c = class extends a.Q {
          #h;
          #v = void 0;
          #m = void 0;
          #b = void 0;
          #g;
          #R;
          #S;
          #F;
          #O;
          #w;
          #Q;
          #T;
          #C;
          #I = new Set();
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#h = t),
              (this.#S = null),
              this.bindMethods(),
              this.setOptions(e);
          }
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#v.addObserver(this),
              l(this.#v, this.options) ? this.#P() : this.updateResult(),
              this.#E());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return d(this.#v, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return d(this.#v, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#q(),
              this.#U(),
              this.#v.removeObserver(this);
          }
          setOptions(t) {
            let e = this.options,
              r = this.#v;
            if (
              ((this.options = this.#h.defaultQueryOptions(t)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, i.GF)(this.options.enabled, this.#v))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#G(),
              this.#v.setOptions(this.options),
              e._defaulted &&
                !(0, i.f8)(this.options, e) &&
                this.#h
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#v,
                    observer: this,
                  });
            let s = this.hasListeners();
            s && p(this.#v, r, this.options, e) && this.#P(),
              this.updateResult(),
              s &&
                (this.#v !== r ||
                  (0, i.GF)(this.options.enabled, this.#v) !==
                    (0, i.GF)(e.enabled, this.#v) ||
                  (0, i.GF)(this.options.staleTime, this.#v) !==
                    (0, i.GF)(e.staleTime, this.#v)) &&
                this.#j();
            let n = this.#k();
            s &&
              (this.#v !== r ||
                (0, i.GF)(this.options.enabled, this.#v) !==
                  (0, i.GF)(e.enabled, this.#v) ||
                n !== this.#C) &&
              this.#D(n);
          }
          getOptimisticResult(t) {
            let e = this.#h.getQueryCache().build(this.#h, t),
              r = this.createResult(e, t);
            return (
              (0, i.f8)(this.getCurrentResult(), r) ||
                ((this.#b = r),
                (this.#R = this.options),
                (this.#g = this.#v.state)),
              r
            );
          }
          getCurrentResult() {
            return this.#b;
          }
          trackResult(t, e) {
            return new Proxy(t, {
              get: (t, r) => (this.trackProp(r), e?.(r), Reflect.get(t, r)),
            });
          }
          trackProp(t) {
            this.#I.add(t);
          }
          getCurrentQuery() {
            return this.#v;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            let e,
              r = this.#h.defaultQueryOptions(t),
              s = this.#h.getQueryCache().build(this.#h, r),
              i = () => {},
              n = new Promise((t) => {
                (e = t),
                  (i = this.#h.getQueryCache().subscribe((e) => {
                    "updated" === e.type &&
                      e.query.queryHash === s.queryHash &&
                      void 0 !== s.state.data &&
                      (i(), t(this.createResult(s, r)));
                  }));
              });
            return Promise.race([
              s
                .fetch()
                .then(() => {
                  let t = this.createResult(s, r);
                  return e?.(t), t;
                })
                .finally(() => {
                  i();
                }),
              n,
            ]);
          }
          fetch(t) {
            return this.#P({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#b)
            );
          }
          #P(t) {
            this.#G();
            let e = this.#v.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(i.lQ)), e;
          }
          #x(t) {
            return (
              !(0, n.S)() &&
              !1 !== (0, i.GF)(this.options.enabled, this.#v) &&
              (0, i.gn)(t)
            );
          }
          #j() {
            this.#q();
            let t = (0, i.GF)(this.options.staleTime, this.#v);
            if (this.#b.isStale || !this.#x(t)) return;
            let e = (0, i.j3)(this.#b.dataUpdatedAt, t) + 1;
            this.#Q = s.zs.setTimeout(() => {
              this.#b.isStale || this.updateResult();
            }, e);
          }
          #k() {
            return (0, i.GF)(this.options.refetchInterval, this.#v) ?? !1;
          }
          #D(t) {
            this.#U(),
              (this.#C = t),
              0 !== this.#C &&
                this.#x(this.#C) &&
                (this.#T = s.zs.setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    o.m.isFocused()) &&
                    this.#P();
                }, this.#C));
          }
          #E() {
            this.#j(), this.#D(this.#k());
          }
          #q() {
            void 0 !== this.#Q &&
              (s.zs.clearTimeout(this.#Q), (this.#Q = void 0));
          }
          #U() {
            void 0 !== this.#T &&
              (s.zs.clearInterval(this.#T), (this.#T = void 0));
          }
          createResult(t, e) {
            let r,
              s = this.#v,
              n = this.options,
              a = this.#b,
              o = this.#g,
              u = this.#R,
              c = t !== s ? t.state : this.#m,
              { state: d } = t,
              y = { ...d },
              v = !1;
            if (e._optimisticResults) {
              let r = this.hasListeners(),
                i = !r && l(t, e),
                a = r && p(t, s, e, n);
              (i || a) && (y = { ...y, ...(0, h.k)(d.data, t.options) }),
                "isRestoring" === e._optimisticResults &&
                  (y.fetchStatus = "idle");
            }
            let { error: m, errorUpdatedAt: b, status: g } = y;
            r = y.data;
            let R = !1;
            if (
              void 0 !== e.placeholderData &&
              void 0 === r &&
              "pending" === g
            ) {
              let t;
              a?.isPlaceholderData && e.placeholderData === u?.placeholderData
                ? ((t = a.data), (R = !0))
                : (t =
                    "function" == typeof e.placeholderData
                      ? e.placeholderData(this.#w?.state.data, this.#w)
                      : e.placeholderData),
                void 0 !== t &&
                  ((g = "success"), (r = (0, i.pl)(a?.data, t, e)), (v = !0));
            }
            if (e.select && void 0 !== r && !R)
              if (a && r === o?.data && e.select === this.#F) r = this.#O;
              else
                try {
                  (this.#F = e.select),
                    (r = e.select(r)),
                    (r = (0, i.pl)(a?.data, r, e)),
                    (this.#O = r),
                    (this.#S = null);
                } catch (t) {
                  this.#S = t;
                }
            else void 0 === r && (this.#S = null);
            this.#S &&
              ((m = this.#S),
              (r = this.#O),
              (b = Date.now()),
              (g = "error"),
              (v = !1));
            let S = "fetching" === y.fetchStatus,
              F = "pending" === g,
              O = "error" === g,
              w = F && S,
              Q = void 0 !== r;
            return {
              status: g,
              fetchStatus: y.fetchStatus,
              isPending: F,
              isSuccess: "success" === g,
              isError: O,
              isInitialLoading: w,
              isLoading: w,
              data: r,
              dataUpdatedAt: y.dataUpdatedAt,
              error: m,
              errorUpdatedAt: b,
              failureCount: y.fetchFailureCount,
              failureReason: y.fetchFailureReason,
              errorUpdateCount: y.errorUpdateCount,
              isFetched: t.isFetched(),
              isFetchedAfterMount:
                y.dataUpdateCount > c.dataUpdateCount ||
                y.errorUpdateCount > c.errorUpdateCount,
              isFetching: S,
              isRefetching: S && !F,
              isLoadingError: O && !Q,
              isPaused: "paused" === y.fetchStatus,
              isPlaceholderData: v,
              isRefetchError: O && Q,
              isStale: f(t, e),
              refetch: this.refetch,
              isEnabled: !1 !== (0, i.GF)(e.enabled, t),
            };
          }
          updateResult() {
            let t = this.#b,
              e = this.createResult(this.#v, this.options);
            if (
              ((this.#g = this.#v.state),
              (this.#R = this.options),
              void 0 !== this.#g.data && (this.#w = this.#v),
              (0, i.f8)(e, t))
            )
              return;
            this.#b = e;
            let r = (() => {
              if (!t) return !0;
              let { notifyOnChangeProps: e } = this.options,
                r = "function" == typeof e ? e() : e;
              if ("all" === r || (!r && !this.#I.size)) return !0;
              let s = new Set(r ?? this.#I);
              return (
                this.options.throwOnError && s.add("error"),
                Object.keys(this.#b).some(
                  (e) => this.#b[e] !== t[e] && s.has(e)
                )
              );
            })();
            u.jG.batch(() => {
              r &&
                this.listeners.forEach((t) => {
                  t(this.#b);
                }),
                this.#h
                  .getQueryCache()
                  .notify({ query: this.#v, type: "observerResultsUpdated" });
            });
          }
          #G() {
            let t = this.#h.getQueryCache().build(this.#h, this.options);
            if (t === this.#v) return;
            let e = this.#v;
            (this.#v = t),
              (this.#m = t.state),
              this.hasListeners() &&
                (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#E();
          }
        };
      function l(t, e) {
        return (
          (!1 !== (0, i.GF)(e.enabled, t) &&
            void 0 === t.state.data &&
            ("error" !== t.state.status ||
              !1 !== (0, i.GF)(e.retryOnMount, t))) ||
          (void 0 !== t.state.data && d(t, e, e.refetchOnMount))
        );
      }
      function d(t, e, r) {
        if (
          !1 !== (0, i.GF)(e.enabled, t) &&
          "static" !== (0, i.GF)(e.staleTime, t)
        ) {
          let s = (0, i.GF)(r, t);
          return "always" === s || (!1 !== s && f(t, e));
        }
        return !1;
      }
      function p(t, e, r, s) {
        return (
          (t !== e || !1 === (0, i.GF)(s.enabled, t)) &&
          (!r.suspense || "error" !== t.state.status) &&
          f(t, r)
        );
      }
      function f(t, e) {
        return (
          !1 !== (0, i.GF)(e.enabled, t) &&
          t.isStaleByTime((0, i.GF)(e.staleTime, t))
        );
      }
    },
    71195: (t, e, r) => {
      r.d(e, { Q: () => s });
      var s = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    78940: (t, e, r) => {
      r.d(e, { PL: () => i, RQ: () => u, rB: () => o });
      var s = r(39219);
      function i(t) {
        return {
          onFetch: (e, r) => {
            let i = e.options,
              o = e.fetchOptions?.meta?.fetchMore?.direction,
              u = e.state.data?.pages || [],
              h = e.state.data?.pageParams || [],
              c = { pages: [], pageParams: [] },
              l = 0,
              d = async () => {
                let r = !1,
                  d = (0, s.ZM)(e.options, e.fetchOptions),
                  p = async (t, i, n) => {
                    if (r) return Promise.reject(e.signal.reason);
                    if (null == i && t.pages.length) return Promise.resolve(t);
                    let a = (() => {
                        let t = {
                          client: e.client,
                          queryKey: e.queryKey,
                          pageParam: i,
                          direction: n ? "backward" : "forward",
                          meta: e.options.meta,
                        };
                        return (
                          (0, s.ox)(
                            t,
                            () => e.signal,
                            () => (r = !0)
                          ),
                          t
                        );
                      })(),
                      o = await d(a),
                      { maxPages: u } = e.options,
                      h = n ? s.ZZ : s.y9;
                    return {
                      pages: h(t.pages, o, u),
                      pageParams: h(t.pageParams, i, u),
                    };
                  };
                if (o && u.length) {
                  let t = "backward" === o,
                    e = t ? a : n,
                    r = { pages: u, pageParams: h };
                  c = await p(r, e(i, r), t);
                } else {
                  let e = t ?? u.length;
                  do {
                    let t = 0 === l ? h[0] ?? i.initialPageParam : n(i, c);
                    if (l > 0 && null == t) break;
                    (c = await p(c, t)), l++;
                  } while (l < e);
                }
                return c;
              };
            e.options.persister
              ? (e.fetchFn = () =>
                  e.options.persister?.(
                    d,
                    {
                      client: e.client,
                      queryKey: e.queryKey,
                      meta: e.options.meta,
                      signal: e.signal,
                    },
                    r
                  ))
              : (e.fetchFn = d);
          },
        };
      }
      function n(t, { pages: e, pageParams: r }) {
        let s = e.length - 1;
        return e.length > 0 ? t.getNextPageParam(e[s], e, r[s], r) : void 0;
      }
      function a(t, { pages: e, pageParams: r }) {
        return e.length > 0
          ? t.getPreviousPageParam?.(e[0], e, r[0], r)
          : void 0;
      }
      function o(t, e) {
        return !!e && null != n(t, e);
      }
      function u(t, e) {
        return !!e && !!t.getPreviousPageParam && null != a(t, e);
      }
    },
    80347: (t, e, r) => {
      r.d(e, { II: () => c, cc: () => h, v_: () => u });
      var s = r(39219),
        i = r(32794),
        n = r(63937),
        a = r(14440);
      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function u(t) {
        return (t ?? "online") !== "online" || a.t.isOnline();
      }
      var h = class extends Error {
        constructor(t) {
          super("CancelledError"),
            (this.revert = t?.revert),
            (this.silent = t?.silent);
        }
      };
      function c(t) {
        let e,
          r,
          c,
          l = !1,
          d = 0,
          p = "pending",
          f = new Promise((t, e) => {
            (r = t), (c = e);
          });
        f.catch(s.lQ);
        let y = () =>
            n.m.isFocused() &&
            ("always" === t.networkMode || a.t.isOnline()) &&
            t.canRun(),
          v = () => u(t.networkMode) && t.canRun(),
          m = (t) => {
            "pending" === p && (e?.(), (p = "resolved"), r(t));
          },
          b = (t) => {
            "pending" === p && (e?.(), (p = "rejected"), c(t));
          },
          g = () =>
            new Promise((r) => {
              (e = (t) => {
                ("pending" !== p || y()) && r(t);
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), "pending" === p && t.onContinue?.();
            }),
          R = () => {
            let e;
            if ("pending" !== p) return;
            let r = 0 === d ? t.initialPromise : void 0;
            try {
              e = r ?? t.fn();
            } catch (t) {
              e = Promise.reject(t);
            }
            Promise.resolve(e)
              .then(m)
              .catch((e) => {
                if ("pending" !== p) return;
                let r = t.retry ?? 3 * !(0, i.S)(),
                  n = t.retryDelay ?? o,
                  a = "function" == typeof n ? n(d, e) : n,
                  u =
                    !0 === r ||
                    ("number" == typeof r && d < r) ||
                    ("function" == typeof r && r(d, e));
                if (l || !u) return void b(e);
                d++,
                  t.onFail?.(d, e),
                  (0, s.yy)(a)
                    .then(() => (y() ? void 0 : g()))
                    .then(() => {
                      l ? b(e) : R();
                    });
              });
          };
        return {
          promise: f,
          status: () => p,
          cancel: (e) => {
            if ("pending" === p) {
              let r = new h(e);
              b(r), t.onCancel?.(r);
            }
          },
          continue: () => (e?.(), f),
          cancelRetry: () => {
            l = !0;
          },
          continueRetry: () => {
            l = !1;
          },
          canStart: v,
          start: () => (v() ? R() : g().then(R), f),
        };
      }
    },
    82925: (t, e, r) => {
      r.d(e, { t: () => h });
      var s = r(34201),
        i = r(50625);
      let n = i.createContext(!1);
      n.Provider, r(72133);
      let a = i.createContext(
        (function () {
          let t = !1;
          return {
            clearReset: () => {
              t = !1;
            },
            reset: () => {
              t = !0;
            },
            isReset: () => t,
          };
        })()
      );
      var o = r(39219),
        u = r(21986);
      function h(t, e, r) {
        let h = i.useContext(n),
          c = i.useContext(a),
          l = (0, s.jE)(r),
          d = l.defaultQueryOptions(t),
          p = l.getQueryCache().get(d.queryHash),
          f = !1 !== t.subscribed;
        if (
          ((d._optimisticResults = h
            ? "isRestoring"
            : f
            ? "optimistic"
            : void 0),
          d.suspense)
        ) {
          let t = (t) => ("static" === t ? t : Math.max(t ?? 1e3, 1e3)),
            e = d.staleTime;
          (d.staleTime = "function" == typeof e ? (...r) => t(e(...r)) : t(e)),
            "number" == typeof d.gcTime && (d.gcTime = Math.max(d.gcTime, 1e3));
        }
        let y =
          (null == p ? void 0 : p.state.error) &&
          "function" == typeof d.throwOnError
            ? (0, o.GU)(d.throwOnError, [p.state.error, p])
            : d.throwOnError;
        (d.suspense || y) && !c.isReset() && (d.retryOnMount = !1),
          i.useEffect(() => {
            c.clearReset();
          }, [c]);
        let [v] = i.useState(() => new e(l, d)),
          m = v.getOptimisticResult(d),
          b = !h && f;
        if (
          (i.useSyncExternalStore(
            i.useCallback(
              (t) => {
                let e = b ? v.subscribe(u.jG.batchCalls(t)) : o.lQ;
                return v.updateResult(), e;
              },
              [v, b]
            ),
            () => v.getCurrentResult(),
            () => v.getCurrentResult()
          ),
          i.useEffect(() => {
            v.setOptions(d);
          }, [d, v]),
          d?.suspense && m.isPending)
        )
          throw v.fetchOptimistic(d).catch(() => {
            c.clearReset();
          });
        if (
          ((t) => {
            let {
              result: e,
              errorResetBoundary: r,
              throwOnError: s,
              query: i,
              suspense: n,
            } = t;
            return (
              e.isError &&
              !r.isReset() &&
              !e.isFetching &&
              i &&
              ((n && void 0 === e.data) || (0, o.GU)(s, [e.error, i]))
            );
          })({
            result: m,
            errorResetBoundary: c,
            throwOnError: d.throwOnError,
            query: p,
            suspense: d.suspense,
          })
        )
          throw m.error;
        return d.notifyOnChangeProps ? m : v.trackResult(m);
      }
    },
    90756: (t, e, r) => {
      r.d(e, { I: () => n });
      var s = r(82925),
        i = r(70964);
      function n(t, e) {
        return (0, s.t)(t, i.$, e);
      }
    },
  },
]);
