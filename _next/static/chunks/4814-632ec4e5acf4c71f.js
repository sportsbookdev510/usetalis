"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4814],
  {
    10549: (e, n, t) => {
      t.d(n, { Gp: () => y, mK: () => m, wC: () => f });
      var a = t(90756),
        s = t(50625),
        i = t(37762),
        r = t(32916),
        o = t(89764),
        l = t(4023),
        d = t(29142),
        u = t(93617),
        c = t(36901);
      function p(e) {
        let n = (0, o.B)(e, { chainId: d.bQ });
        if (!n) throw Error("No RPC client");
        return n;
      }
      function m(e, n) {
        let t = (0, i.U)(),
          o = (0, c.qK)(),
          { address: m } = (0, r.F)(),
          y = null != n ? n : m,
          f = (0, s.useMemo)(
            () => [
              ...new Set(e.filter((e) => !!e).map((e) => e.toLowerCase())),
            ],
            [e]
          );
        return (0, a.I)({
          queryKey: u.y.balances(d.bQ, y, f),
          queryFn: async () => {
            let e = await p(t).multicall({
                allowFailure: !0,
                contracts: f.map((e) => ({
                  address: e,
                  abi: l.ed,
                  functionName: "balanceOf",
                  args: [y],
                })),
              }),
              n = {};
            return (
              f.forEach((t, a) => {
                let s = e[a];
                (null == s ? void 0 : s.status) === "success" &&
                  (n[t] = s.result);
              }),
              n
            );
          },
          enabled: d.KO && o && !!y && f.length > 0,
          staleTime: 1e4,
        });
      }
      function y(e, n, t) {
        let s = (0, i.U)(),
          o = (0, c.qK)(),
          { address: m } = (0, r.F)(),
          y = null != t ? t : m,
          f = (0, a.I)({
            queryKey: u.y.allowance(
              d.bQ,
              y,
              null != e ? e : "0x",
              null != n ? n : "0x"
            ),
            queryFn: () =>
              p(s).readContract({
                address: e,
                abi: l.ed,
                functionName: "allowance",
                args: [y, n],
              }),
            enabled: d.KO && o && !!y && !!e && !!n,
            staleTime: 1e4,
          });
        return {
          allowance: f.data,
          isLoading: f.isLoading,
          isFetched: f.isFetched,
        };
      }
      function f(e, n) {
        var t, s, o;
        let l = (0, i.U)(),
          m = (0, c.qK)(),
          { address: y } = (0, r.F)(),
          f = null != (t = n.who) ? t : y;
        return (0, a.I)({
          queryKey: [...u.y.account(d.bQ, f), "multicall", n.id],
          queryFn: async () =>
            await p(l).multicall({ allowFailure: !0, contracts: e }),
          enabled:
            d.KO && m && !!f && e.length > 0 && (null == (s = n.enabled) || s),
          staleTime: null != (o = n.staleTime) ? o : 1e4,
          refetchInterval: n.refetchInterval,
        });
      }
    },
    14141: (e, n, t) => {
      t.d(n, { A: () => a });
      let a = (0, t(99011).A)("merge", [
        ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
        ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
        ["path", { d: "m20 22-5-5", key: "1m27yz" }],
      ]);
    },
    20833: (e, n, t) => {
      t.d(n, {
        H1: () => r,
        IC: () => g,
        Iq: () => T,
        Nh: () => v,
        Pj: () => d,
        Su: () => u,
        XQ: () => o,
        cw: () => b,
        df: () => U,
        fq: () => C,
        k: () => c,
        sL: () => h,
        v6: () => w,
      });
      var a = t(36811),
        s = t(42726),
        i = t(81122);
      function r(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        return (0, i.ej)(e, i.Bs.position, { maxFraction: n });
      }
      function o(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return (0, i.ej)(e, i.Bs.usdg, { maxFraction: n });
      }
      let l = ["created", "open", "settled"];
      function d(e) {
        let n = [];
        for (let t of e) {
          let e = t.registration;
          if (e)
            for (let a = 0; a < e.nextEpoch; a++)
              n.push({
                ticker: t.ticker,
                tickerId: e.tickerId,
                epoch: a,
                capBps: e.capBps,
              });
        }
        return n;
      }
      let u = [
          "state",
          "P0",
          "K",
          "S",
          "settleDay",
          "openWindowDay",
          "capBps",
          "incomeToken",
          "upsideToken",
          "auction",
          "maxUnits",
          "maxUnitsPerTx",
          "startBps",
          "floorBps",
        ],
        c = u.length;
      function p(e) {
        return "bigint" == typeof e ? e : 0n;
      }
      function m(e) {
        return "bigint" == typeof e ? Number(e) : "number" == typeof e ? e : 0;
      }
      function y(e) {
        return "string" == typeof e && /^0x[0-9a-fA-F]{40}$/.test(e)
          ? e
          : "0x0000000000000000000000000000000000000000";
      }
      function f(e, n, t, a) {
        let s =
          a > 0
            ? new Date(1e3 * a).toISOString().slice(2, 10).replaceAll("-", "")
            : "";
        return ""
          .concat(e, "-")
          .concat(n)
          .concat(Math.round(t / 100))
          .concat(s ? "-".concat(s) : "");
      }
      function v(e, n, t, r) {
        var o;
        let d = (e) => {
            var n;
            return (null == (n = t[e]) ? void 0 : n.status) === "success"
              ? t[e].result
              : void 0;
          },
          u = (0, a.Uj)(p(d(1)), i.Bs.feed),
          c = (0, a.Uj)(p(d(2)), i.Bs.feed),
          v = (0, a.Uj)(p(d(3)), i.Bs.feed),
          b = m(d(4)),
          g = m(d(6)) || e.capBps;
        return {
          id: n,
          ticker: e.ticker,
          epoch: e.epoch,
          capBps: g,
          state: null != (o = l[m(d(0))]) ? o : "created",
          address: n,
          incomeToken: y(d(7)),
          upsideToken: y(d(8)),
          auction: y(d(9)),
          incomeSymbol: f(e.ticker, "INC", g, b),
          upsideSymbol: f(e.ticker, "UP", g, b),
          p0: u,
          capPrice: c > 0 ? c : (0, s.Sy)(u, g),
          settlementPrice: v > 0 ? v : void 0,
          maxUnits: (0, a.Uj)(p(d(10)), i.Bs.position),
          maxUnitsPerTx: (0, a.Uj)(p(d(11)), i.Bs.position),
          depositedUnits: 0,
          feeBps: r,
          startBps: m(d(12)),
          floorBps: m(d(13)),
          openWindowDay: m(d(5)),
          settleDay: b,
          oneValue: 0,
          convexValue: 0,
        };
      }
      let b = 17;
      function g(e, n) {
        var t;
        let a = (e) => {
            var t;
            return (null == (t = n[e]) ? void 0 : t.status) === "success"
              ? n[e].result
              : void 0;
          },
          s = a(2),
          i = a(5),
          r = p(a(4));
        return {
          series: e.address,
          income: e.income,
          upside: e.upside,
          auction: e.auction,
          state:
            void 0 === a(3)
              ? e.series.state
              : null != (t = l[m(a(3))])
              ? t
              : e.series.state,
          one: p(a(0)),
          convex: p(a(1)),
          entitlement: {
            one: p(null == s ? void 0 : s[0]),
            convex: p(null == s ? void 0 : s[1]),
            merge: p(null == s ? void 0 : s[2]),
          },
          lot: r,
          sold: p(null == i ? void 0 : i[0]),
          unsold: i ? p(i[1]) : r,
          proceeds: p(null == i ? void 0 : i[2]),
          reserveStep: m(a(6)),
          proceedsClaimed: !0 === a(7),
          unsoldClaimed: !0 === a(8),
          round: {
            finalized: !0 === a(9),
            unitsSold: p(a(10)),
            canReschedule: !0 === a(11),
            round: m(a(12)),
            pClear: p(a(13)),
            start: m(a(14)),
            end: m(a(15)),
            lotTotal: p(a(16)),
          },
        };
      }
      function h(e) {
        return e.one > 0n || e.convex > 0n || e.lot > 0n;
      }
      function T(e, n) {
        return e < n ? e : n;
      }
      function U(e, n) {
        let t = (0, a.Uj)(n.one, i.Bs.position),
          s = (0, a.Uj)(n.convex, i.Bs.position);
        return {
          seriesId: e.address,
          ticker: e.key.ticker,
          epoch: e.key.epoch,
          capBps: e.key.capBps,
          oneUnits: t,
          convexUnits: s,
          subscribedUnits: (0, a.Uj)(n.lot, i.Bs.position),
          oneEntitlementUnits: (0, a.Uj)(n.entitlement.one, i.Bs.position),
          convexEntitlementUnits: (0, a.Uj)(
            n.entitlement.convex,
            i.Bs.position
          ),
          mergeUnits: (0, a.Uj)(n.entitlement.merge, i.Bs.position),
          proceedsUsdg: (0, a.Uj)(n.proceeds, i.Bs.usdg),
          claimable: "settled" === n.state && (n.one > 0n || n.convex > 0n),
          seriesState: n.state,
        };
      }
      function w(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Math.floor(Date.now() / 1e3),
          t = (e) => ({
            canClaimProceeds: !1,
            proceedsReason: e,
            canClaimUnsold: !1,
            unsoldReason: e,
            unsoldClaimable: 0n,
          });
        if (0n === e.lot) return t("No lot in this auction");
        let a = e.round;
        return a.finalized
          ? 0n === a.unitsSold
            ? {
                canClaimProceeds: !1,
                proceedsReason: "No sale this round",
                canClaimUnsold: !a.canReschedule,
                unsoldReason: a.canReschedule
                  ? "Re-run possible \xb7 lot stays on the curve"
                  : void 0,
                unsoldClaimable: a.canReschedule ? 0n : e.lot,
              }
            : {
                canClaimProceeds: !e.proceedsClaimed && e.proceeds > 0n,
                proceedsReason: e.proceedsClaimed
                  ? "Claimed"
                  : 0n === e.proceeds
                  ? "Reserve above the clearing price \xb7 nothing sold"
                  : void 0,
                canClaimUnsold: !e.unsoldClaimed && e.unsold > 0n,
                unsoldReason: e.unsoldClaimed
                  ? "Claimed"
                  : 0n === e.unsold
                  ? "Lot sold in full"
                  : void 0,
                unsoldClaimable: e.unsoldClaimed ? 0n : e.unsold,
              }
          : t(
              0 === a.start
                ? "Auction not scheduled"
                : n < a.start
                ? "Auction not started"
                : n < a.end
                ? "Round running"
                : "Round not finalized yet"
            );
      }
      function C(e) {
        if ("bigint" == typeof e) return e;
        let [n = "0", t = ""] = Math.max(e, 0)
          .toFixed(i.Bs.position)
          .split(".");
        return (
          BigInt(n) * 10n ** BigInt(i.Bs.position) +
          BigInt(t.padEnd(i.Bs.position, "0") || "0")
        );
      }
    },
    64029: (e, n, t) => {
      t.d(n, { x: () => a });
      let a = [
        {
          type: "constructor",
          inputs: [
            { name: "name_", type: "string", internalType: "string" },
            { name: "symbol_", type: "string", internalType: "string" },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "DOMAIN_SEPARATOR",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "burn",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "n", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "decimals",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "eip712Domain",
          inputs: [],
          outputs: [
            { name: "fields", type: "bytes1", internalType: "bytes1" },
            { name: "name", type: "string", internalType: "string" },
            { name: "version", type: "string", internalType: "string" },
            { name: "chainId", type: "uint256", internalType: "uint256" },
            {
              name: "verifyingContract",
              type: "address",
              internalType: "address",
            },
            { name: "salt", type: "bytes32", internalType: "bytes32" },
            {
              name: "extensions",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "n", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "nonces",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "permit",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "deadline", type: "uint256", internalType: "uint256" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "series",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "spender",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: !1,
              internalType: "uint256",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "EIP712DomainChanged",
          inputs: [],
          anonymous: !1,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: !1,
              internalType: "uint256",
            },
          ],
          anonymous: !1,
        },
        { type: "error", name: "ECDSAInvalidSignature", inputs: [] },
        {
          type: "error",
          name: "ECDSAInvalidSignatureLength",
          inputs: [
            { name: "length", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ECDSAInvalidSignatureS",
          inputs: [{ name: "s", type: "bytes32", internalType: "bytes32" }],
        },
        {
          type: "error",
          name: "ERC20InsufficientAllowance",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "allowance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InsufficientBalance",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
            { name: "balance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidApprover",
          inputs: [
            { name: "approver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidReceiver",
          inputs: [
            { name: "receiver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSender",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSpender",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC2612ExpiredSignature",
          inputs: [
            { name: "deadline", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC2612InvalidSigner",
          inputs: [
            { name: "signer", type: "address", internalType: "address" },
            { name: "owner", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "InvalidAccountNonce",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "currentNonce", type: "uint256", internalType: "uint256" },
          ],
        },
        { type: "error", name: "InvalidShortString", inputs: [] },
        { type: "error", name: "OnlySeries", inputs: [] },
        {
          type: "error",
          name: "StringTooLong",
          inputs: [{ name: "str", type: "string", internalType: "string" }],
        },
      ];
    },
    72555: (e, n, t) => {
      t.d(n, { A: () => a });
      let a = (0, t(99011).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    83899: (e, n, t) => {
      t.d(n, { ED: () => y, Gt: () => p });
      var a = t(50625),
        s = t(34817),
        i = t(29142),
        r = t(71808),
        o = t(81122),
        l = t(12533),
        d = t(20833),
        u = t(53063);
      u._b, u.TE;
      let c = "0x0000000000000000000000000000000000000000";
      function p(e) {
        return "series" in e ? e.series : void 0;
      }
      function m(e, n) {
        switch (e.kind) {
          case "merge":
            return (0, r.p4)({ series: n, units: (0, d.fq)(e.units) });
          case "claimIncome":
            return (0, r.Cz)({ series: n, units: (0, d.fq)(e.units) });
          case "claimUpside":
            return (0, r.f2)({ series: n, units: (0, d.fq)(e.units) });
          case "claimProceeds":
            return (0, r.Uo)(n);
          case "claimUnsold":
            return (0, r.Yj)(n);
          case "transfer":
            return (0, r.sh)({
              token: n,
              to: (0, s.P)(e.to) ? e.to : c,
              amount: e.amount,
              symbol: e.symbol,
              decimals: o.Bs.position,
            });
        }
      }
      function y() {
        var e;
        let n = (0, l.vr)(),
          [t, r] = (0, a.useState)(null),
          [o, d] = (0, a.useState)(),
          u =
            n.gate.canWrite ||
            (null == (e = n.gate.reason) ? void 0 : e.startsWith("Switch")) ===
              !0,
          p = (0, a.useCallback)((e) => i.KO && u && (0, s.P)(e), [u]),
          y = (0, a.useCallback)(
            async (e) => {
              if ((r(e), d(void 0), !i.KO))
                return await n.send(m(e, c)), "preview";
              let t = (function (e) {
                switch (e.kind) {
                  case "transfer":
                    return e.token;
                  case "claimProceeds":
                  case "claimUnsold":
                    return e.auction;
                  default:
                    return e.series;
                }
              })(e);
              if (!(0, s.P)(t)) return d("Unknown contract address"), "failed";
              if ("transfer" === e.kind && !(0, s.P)(e.to))
                return d("Recipient is not an address"), "failed";
              let a = await n.send(m(e, t));
              return "confirmed" === a || "timeout" === a ? "sent" : "failed";
            },
            [n]
          ),
          f = (0, a.useCallback)(() => {
            n.reset(), r(null), d(void 0);
          }, [n]);
        return (0, a.useMemo)(() => {
          var e;
          return {
            status: (function (e, n) {
              if (n) return "error";
              switch (e.status) {
                case "idle":
                  return "idle";
                case "preview":
                  return "preview";
                case "connecting":
                case "switching":
                case "simulating":
                case "wallet":
                  return "wallet";
                case "pending":
                  return "pending";
                case "confirmed":
                  return "confirmed";
                default:
                  return "error";
              }
            })(n, o),
            active: t,
            hash: n.hash,
            explorerUrl: n.explorerUrl,
            error: null != o ? o : null == (e = n.error) ? void 0 : e.message,
            localError: o,
            canWrite: p,
            connected: u,
            gate: n.gate,
            send: y,
            reset: f,
            tx: n,
            bridge: null,
          };
        }, [n, o, t, p, u, y, f]);
      }
    },
    93628: (e, n, t) => {
      t.d(n, { t: () => l });
      var a = t(72133),
        s = t(13892),
        i = t(84520),
        r = t(54490),
        o = t(91109);
      function l(e) {
        let { tx: n, className: t, previewNote: l, onRetry: d } = e;
        if (n.localError)
          return (0, a.jsxs)("p", {
            role: "alert",
            className: (0, o.cn)(
              "flex items-start gap-2 text-xs text-danger",
              t
            ),
            children: [
              (0, a.jsx)(s.A, {
                className: "mt-0.5 size-3.5 shrink-0",
                "aria-hidden": "true",
              }),
              (0, a.jsx)("span", {
                className: "break-words",
                children: n.localError,
              }),
            ],
          });
        if ("idle" === n.tx.status || !n.active) return null;
        let u =
          d && ("not-included" === n.tx.status || "timeout" === n.tx.status);
        return (0, a.jsx)(r.R, {
          tx: n.tx,
          className: t,
          previewNote: l,
          hideSteps: !0,
          children: u
            ? (0, a.jsx)(i.$n, {
                size: "sm",
                variant: "secondary",
                onClick: d,
                children: "Send again",
              })
            : null,
        });
      }
    },
    96677: (e, n, t) => {
      t.d(n, { kO: () => d, vA: () => u });
      var a = t(42726),
        s = t(36811),
        i = t(81122),
        r = t(20833);
      function o(e, n, t) {
        return ""
          .concat(e, "-")
          .concat(n)
          .concat(Math.round(t / 100));
      }
      function l(e) {
        return (0, s.Uj)(e, i.Bs.position);
      }
      function d(e, n, t, d) {
        let u =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          c =
            arguments.length > 5 && void 0 !== arguments[5]
              ? arguments[5]
              : Math.floor(Date.now() / 1e3),
          p = new Map(n.map((e) => [e.ticker, e])),
          m = new Map(t.map((e) => [e.id.toLowerCase(), e])),
          y = new Map(d.map((e) => [e.seriesId.toLowerCase(), e]));
        return e.map((e) => {
          var n, t, d, f, v, b, g, h, T, U, w;
          let C = e.seriesId.toLowerCase(),
            x = p.get(e.ticker),
            k = m.get(C),
            S = y.get(C),
            P = u[C],
            B =
              (null != (t = null == P ? void 0 : P.state)
                ? t
                : e.seriesState) === "settled",
            I = B ? (null == k ? void 0 : k.settlementPrice) : void 0,
            N =
              null != I
                ? I
                : B
                ? null != (d = null == k ? void 0 : k.capPrice)
                  ? d
                  : 0
                : null !=
                  (v =
                    null != (f = null == x ? void 0 : x.price)
                      ? f
                      : null == k
                      ? void 0
                      : k.p0)
                ? v
                : 0,
            M =
              k && k.capPrice > 0
                ? k.capPrice
                : null !=
                  (g =
                    null != (b = null == x ? void 0 : x.capPrice)
                      ? b
                      : null == k
                      ? void 0
                      : k.capPrice)
                ? g
                : 0,
            E = (0, a.vn)(N, M),
            R =
              B && e.oneEntitlementUnits > 0
                ? e.oneEntitlementUnits
                : e.oneUnits * E.oneUnits,
            O =
              B && e.convexEntitlementUnits > 0
                ? e.convexEntitlementUnits
                : e.convexUnits * E.convexUnits,
            j = P
              ? (0, r.Iq)(P.one, P.convex)
              : (0, r.Iq)((0, r.fq)(e.oneUnits), (0, r.fq)(e.convexUnits)),
            L = P ? l(j) : Math.min(e.oneUnits, e.convexUnits),
            A =
              B &&
              (P
                ? P.one > 0n || P.convex > 0n
                : e.oneUnits > 0 || e.convexUnits > 0);
          return {
            position: e,
            market: x,
            series: k,
            auction: S,
            exact: P,
            ticker: e.ticker,
            epoch: e.epoch,
            capBps: e.capBps,
            price: N,
            priceIsSettlement: void 0 !== I,
            capPrice: M,
            payoff: E,
            oneUnitsNow: R,
            convexUnitsNow: O,
            oneUsdNow: R * N,
            convexUsdNow: O * N,
            mergeable: L,
            mergeableWei: j,
            settled: B,
            claimable: A,
            daysLeft: B
              ? 0
              : (null == x || null == (n = x.seriesId)
                  ? void 0
                  : n.toLowerCase()) === C
              ? x.epoch.daysLeft
              : ((U = null == k ? void 0 : k.settleDay),
                (w = c),
                U ? Math.max(0, Math.ceil((U - w) / 86400)) : 0),
            settleDate: k
              ? new Date(1e3 * k.settleDay).toISOString().slice(0, 10)
              : void 0,
            incomeSymbol:
              null != (h = null == k ? void 0 : k.incomeSymbol)
                ? h
                : o(e.ticker, "INC", e.capBps),
            upsideSymbol:
              null != (T = null == k ? void 0 : k.upsideSymbol)
                ? T
                : o(e.ticker, "UP", e.capBps),
            subscription: (function (e, n, t, a, o) {
              var d, u;
              if (a) {
                if (a.lot <= 0n) return;
                let e = (0, r.v6)(a, o),
                  n = a.round,
                  u =
                    null != (d = null == t ? void 0 : t.state)
                      ? d
                      : 0 === n.start
                      ? "unscheduled"
                      : n.finalized
                      ? n.unitsSold > 0n
                        ? "sold"
                        : "nosale"
                      : o < n.start
                      ? "scheduled"
                      : o < n.end
                      ? "bidding"
                      : "crossed";
                return {
                  lotUnits: l(a.lot),
                  state: u,
                  soldUnits: l(a.sold),
                  unsoldUnits: l(a.unsold),
                  clearingPrice:
                    n.finalized && n.pClear > 0n
                      ? (0, s.Uj)(n.pClear, i.Bs.usdg)
                      : null == t
                      ? void 0
                      : t.clearingPrice,
                  currentPrice:
                    "bidding" === u
                      ? null == t
                        ? void 0
                        : t.currentPrice
                      : void 0,
                  proceedsUsdg: (0, s.Uj)(a.proceeds, i.Bs.usdg),
                  canClaimProceeds: e.canClaimProceeds,
                  canClaimUnsold: e.canClaimUnsold,
                  proceedsReason: e.proceedsReason,
                  unsoldReason: e.unsoldReason,
                  unsoldClaimableUnits: l(e.unsoldClaimable),
                  auctionAddress: a.auction,
                  round: n.round,
                  reserveStep: a.reserveStep,
                };
              }
              if (e.subscribedUnits <= 0) return;
              let c = e.subscribedUnits;
              if (!t)
                return {
                  lotUnits: c,
                  state: "unscheduled",
                  soldUnits: 0,
                  unsoldUnits: c,
                  proceedsUsdg: e.proceedsUsdg,
                  canClaimProceeds: !1,
                  canClaimUnsold: !1,
                  unsoldClaimableUnits: 0,
                  auctionAddress: null == n ? void 0 : n.auction,
                };
              let p =
                  "sold" === t.state && t.lotTotal > 0
                    ? (c * (null != (u = t.unitsSold) ? u : 0)) / t.lotTotal
                    : 0,
                m = Math.max(c - p, 0),
                y = n ? 1 - n.feeBps / 1e4 : 1,
                f =
                  "sold" === t.state && t.clearingPrice
                    ? p * t.clearingPrice * y
                    : 0,
                v = e.proceedsUsdg > 0 ? e.proceedsUsdg : f,
                b = ("sold" === t.state || "nosale" === t.state) && m > 0;
              return {
                lotUnits: c,
                state: t.state,
                soldUnits: p,
                unsoldUnits: m,
                clearingPrice: t.clearingPrice,
                currentPrice: "bidding" === t.state ? t.currentPrice : void 0,
                proceedsUsdg: v,
                canClaimProceeds: "sold" === t.state && v > 0,
                canClaimUnsold: b,
                unsoldClaimableUnits: b ? m : 0,
                auctionAddress: null == n ? void 0 : n.auction,
                round: t.round,
              };
            })(e, k, S, P, c),
          };
        });
      }
      function u(e) {
        return e.reduce(
          (e, n) => {
            var t;
            return {
              seriesCount: e.seriesCount + 1,
              oneUsd: e.oneUsd + n.oneUsdNow,
              convexUsd: e.convexUsd + n.convexUsdNow,
              proceedsUsdg:
                e.proceedsUsdg +
                ((null == (t = n.subscription) ? void 0 : t.canClaimProceeds)
                  ? n.subscription.proceedsUsdg
                  : 0),
              mergeablePairs: e.mergeablePairs + n.mergeable,
              claimableCount: e.claimableCount + +!!n.claimable,
            };
          },
          {
            seriesCount: 0,
            oneUsd: 0,
            convexUsd: 0,
            proceedsUsdg: 0,
            mergeablePairs: 0,
            claimableCount: 0,
          }
        );
      }
    },
    97827: (e, n, t) => {
      t.d(n, { y: () => w });
      var a = t(50625),
        s = t(29142),
        i = t(86635),
        r = t(50827),
        o = t(36901),
        l = t(20833),
        d = t(96677),
        u = t(90756),
        c = t(37762),
        p = t(89764),
        m = t(64029),
        y = t(87898),
        f = t(45188),
        v = t(55458),
        b = t(42902),
        g = t(10549);
      let h = "0x0000000000000000000000000000000000000000";
      async function T(e, n, t) {
        let a = (0, b.h)();
        if (!a || 0 === n.length) return [];
        let i = (function (e) {
            let n = (0, p.B)(e, { chainId: s.bQ });
            if (!n) throw Error("No RPC client");
            return n;
          })(e),
          r = await i.multicall({
            allowFailure: !0,
            contracts: n.map((e) => ({
              address: a,
              abi: f.O,
              functionName: "seriesOf",
              args: [e.tickerId, e.epoch, e.capBps],
            })),
          }),
          o = n
            .map((e, n) => {
              var t;
              return {
                key: e,
                address:
                  (null == (t = r[n]) ? void 0 : t.status) === "success"
                    ? r[n].result
                    : h,
              };
            })
            .filter((e) => e.address.toLowerCase() !== h);
        if (0 === o.length) return [];
        let d = new Map(t.map((e) => [e.id.toLowerCase(), e])),
          u = [],
          c = [];
        for (let e of o) {
          let n = d.get(e.address.toLowerCase());
          (null == n ? void 0 : n.incomeToken) && n.upsideToken && n.auction
            ? u.push({
                key: e.key,
                address: e.address,
                income: n.incomeToken,
                upside: n.upsideToken,
                auction: n.auction,
                series: n,
              })
            : c.push(e);
        }
        if (c.length > 0) {
          let e = await i.multicall({
              allowFailure: !0,
              contracts: c.flatMap((e) => {
                let { address: n } = e;
                return l.Su.map((e) => ({
                  address: n,
                  abi: y.W,
                  functionName: e,
                }));
              }),
            }),
            n = c
              .map((n, t) => e[t * l.k + l.Su.indexOf("auction")])
              .map((e) =>
                (null == e ? void 0 : e.status) === "success" ? e.result : h
              ),
            t = await i.multicall({
              allowFailure: !0,
              contracts: n.map((e) => ({
                address: e,
                abi: v.c,
                functionName: "feeBps",
              })),
            });
          c.forEach((n, a) => {
            var s;
            let { key: i, address: r } = n,
              o =
                (null == (s = t[a]) ? void 0 : s.status) === "success"
                  ? Number(t[a].result)
                  : 0,
              d = (0, l.Nh)(i, r, e.slice(a * l.k, (a + 1) * l.k), o);
            d.incomeToken &&
              d.upsideToken &&
              d.auction &&
              d.auction.toLowerCase() !== h &&
              u.push({
                key: i,
                address: r,
                income: d.incomeToken,
                upside: d.upsideToken,
                auction: d.auction,
                series: d,
              });
          });
        }
        let m = [...new Set(n.map((e) => e.ticker))];
        return u.sort(
          (e, n) =>
            m.indexOf(e.key.ticker) - m.indexOf(n.key.ticker) ||
            n.key.epoch - e.key.epoch
        );
      }
      let U = [];
      function w() {
        var e, n, t, p;
        let f = (0, o.vT)(),
          b = (0, i.Vy)(),
          h = (0, i.og)(),
          w = (0, i.ur)(),
          C = (function (e, n) {
            let t =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              i = (0, c.U)(),
              r = (0, o.qK)(),
              d = (0, a.useMemo)(() => (0, l.Pj)(null != e ? e : []), [e]),
              p = d
                .map((e) =>
                  ""
                    .concat(e.tickerId, ":")
                    .concat(e.epoch, ":")
                    .concat(e.capBps)
                )
                .join(","),
              m = (null != n ? n : []).map((e) => e.id).join(",");
            return (0, u.I)({
              queryKey: ["talis", "live", "series-index", s.bQ, p, m],
              queryFn: () => T(i, d, null != n ? n : []),
              enabled: s.KO && r && t && !!e && !!n,
              staleTime: 3e5,
            });
          })(s.KO ? b.data : void 0, s.KO ? h.data : void 0, !!f.address),
          x = (function (e, n) {
            let t = (null != e ? e : [])
                .map((e) => e.address.toLowerCase())
                .join(","),
              s = (0, a.useMemo)(
                () =>
                  n
                    ? (null != e ? e : []).flatMap((e) => [
                        {
                          address: e.income,
                          abi: m.x,
                          functionName: "balanceOf",
                          args: [n],
                        },
                        {
                          address: e.upside,
                          abi: m.x,
                          functionName: "balanceOf",
                          args: [n],
                        },
                        {
                          address: e.address,
                          abi: y.W,
                          functionName: "entitlementOf",
                          args: [n],
                        },
                        { address: e.address, abi: y.W, functionName: "state" },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "lotOf",
                          args: [n],
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "soldOf",
                          args: [n],
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "reserveOf",
                          args: [n],
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "proceedsClaimed",
                          args: [n],
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "unsoldClaimed",
                          args: [n],
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "finalized",
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "unitsSold",
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "canReschedule",
                        },
                        { address: e.auction, abi: v.c, functionName: "round" },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "pClear",
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "auctionStart",
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "auctionEnd",
                        },
                        {
                          address: e.auction,
                          abi: v.c,
                          functionName: "lotTotal",
                        },
                      ])
                    : [],
                [e, n]
              ),
              i = (0, g.wC)(s, {
                id: "positions-exact:".concat(t),
                who: n,
                enabled: !!e,
                staleTime: 1e4,
                refetchInterval: 2e4,
              }),
              r = (0, a.useMemo)(() => {
                if (!i.data || !e) return;
                let n = i.data,
                  t = {};
                return (
                  e.forEach((e, a) => {
                    t[e.address.toLowerCase()] = (0, l.IC)(
                      e,
                      n.slice(a * l.cw, (a + 1) * l.cw)
                    );
                  }),
                  t
                );
              }, [i.data, e]);
            return { ...i, data: e && 0 === e.length && n ? {} : r };
          })(C.data, f.address),
          k = (0, a.useMemo)(() => (s.KO ? U : r.B.positions()), []),
          { positions: S, allSeries: P } = (0, a.useMemo)(() => {
            var e, n, t, a, i;
            if (!s.KO)
              return { positions: k, allSeries: null != (e = h.data) ? e : [] };
            let r = new Map(
                (null != (n = h.data) ? n : []).map((e) => [
                  e.id.toLowerCase(),
                  e,
                ])
              ),
              o = [];
            for (let e of null != (t = C.data) ? t : []) {
              r.set(
                e.address.toLowerCase(),
                null != (i = r.get(e.address.toLowerCase())) ? i : e.series
              );
              let n =
                null == (a = x.data) ? void 0 : a[e.address.toLowerCase()];
              n && (0, l.sL)(n) && o.push((0, l.df)(e, n));
            }
            return { positions: o, allSeries: [...r.values()] };
          }, [k, h.data, C.data, x.data]),
          B = (0, a.useMemo)(() => {
            var e, n, t;
            return (0, d.kO)(
              S,
              null != (e = b.data) ? e : [],
              P,
              null != (n = w.data) ? n : [],
              null != (t = x.data) ? t : {}
            );
          }, [S, b.data, P, w.data, x.data]),
          I =
            s.KO &&
            f.mounted &&
            !!f.address &&
            !!b.data &&
            !!h.data &&
            (C.isPending || (!!C.data && x.isPending)),
          N = b.isPending || h.isPending || w.isPending || I;
        return {
          rows: B,
          isPending: N,
          isError: b.isError || h.isError || C.isError || x.isError,
          error:
            null !=
            (p =
              null !=
              (t =
                null != (n = null != (e = b.error) ? e : h.error) ? n : C.error)
                ? t
                : x.error)
              ? p
              : void 0,
          source: s.KO ? "live" : "preview",
          wallet: f,
          needsWallet: s.KO && f.mounted && !f.address,
          refetch: () => {
            C.refetch(), x.refetch();
          },
        };
      }
    },
  },
]);
