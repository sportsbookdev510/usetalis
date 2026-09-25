"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8368],
  {
    32410: (e, r, t) => {
      t.d(r, { GP: () => p, JO: () => h, QE: () => f, U: () => w });
      var n = t(28879),
        o = t(3788),
        a = t(4974),
        i = t(98234),
        s = t(42959),
        d = t(47712),
        l = t(99276),
        u = t(81122);
      let c = (0, n.U)([
        "error AboveSeriesCap()",
        "error AboveTxCap()",
        "error AuctionLotLocked()",
        "error BadHint()",
        "error BalanceDelta()",
        "error Blocked(address who)",
        "error CollateralEventActive()",
        "error DateOutOfRange()",
        "error DaysUndecided(uint64 day)",
        "error FeedDecimals()",
        "error IssuerPaused()",
        "error NoAuctionSlot()",
        "error NotQueued()",
        "error OnlyFactory()",
        "error P0OutOfBounds(uint256 price)",
        "error Paused()",
        "error PrevNotSettled()",
        "error ReentrancyGuardReentrantCall()",
        "error SafeERC20FailedOperation(address token)",
        "error SeriesDead()",
        "error T()",
        "error TooEarly()",
        "error TooLateToOpen()",
        "error VaultInDeficit()",
        "error WalkExhausted()",
        "error WindowNotEnded(uint64 day)",
        "error WrongState()",
        "error ZeroAmount()",
        "error AboveLot()",
        "error AlreadyClaimed()",
        "error AlreadyFinalized()",
        "error AlreadyScheduled()",
        "error AuctionCleared()",
        "error BadReserve()",
        "error BelowMinBid()",
        "error EscrowDelta()",
        "error FeeTooHigh()",
        "error LotLocked()",
        "error NoLot()",
        "error NoRerun()",
        "error NotBidder()",
        "error NotBidding()",
        "error NotFinalized()",
        "error NotScheduled()",
        "error OnlySeries()",
        "error RerunPossible()",
        "error SafeCastOverflowedUintDowncast(uint8 bits, uint256 value)",
        "error StillBidding()",
        "error AlreadyExecuted()",
        "error AlreadyInCalendar()",
        "error AlreadyRegistered()",
        "error BadAnswer()",
        "error BadChainConstant()",
        "error BadDay()",
        "error BadFirstOpenDay()",
        "error BadParams()",
        "error BadPointer()",
        "error CalendarLead()",
        "error CardinalityTooLow()",
        "error Disabled()",
        "error FeedMismatch()",
        "error GuardianPaused()",
        "error NotASeries()",
        "error NotGuardian()",
        "error NotRegistered()",
        "error OwnableInvalidOwner(address owner)",
        "error OwnableUnauthorizedAccount(address account)",
        "error PoolMismatch()",
        "error RenounceDisabled()",
        "error SourceDisagreement()",
        "error StockDecimals()",
        "error ThirdFridayEarlyClose()",
        "error ECDSAInvalidSignature()",
        "error ECDSAInvalidSignatureLength(uint256 length)",
        "error ECDSAInvalidSignatureS(bytes32 s)",
        "error ERC20InsufficientAllowance(address spender, uint256 allowance, uint256 needed)",
        "error ERC20InsufficientBalance(address sender, uint256 balance, uint256 needed)",
        "error ERC20InvalidApprover(address approver)",
        "error ERC20InvalidReceiver(address receiver)",
        "error ERC20InvalidSender(address sender)",
        "error ERC20InvalidSpender(address spender)",
        "error ERC2612ExpiredSignature(uint256 deadline)",
        "error ERC2612InvalidSigner(address signer, address owner)",
        "error InvalidAccountNonce(address account, uint256 currentNonce)",
        "error InvalidShortString()",
        "error StringTooLong(string str)",
        "error BelowMinStake()",
        "error BadTier()",
        "error TierNotHigher()",
        "error NoPosition()",
        "error StillLocked()",
        "error NothingPending()",
        "error CooldownActive()",
        "error NothingToClaim()",
        "error AmountExceedsStake()",
        "error ZeroAddress()",
        "error NotAContract()",
        "error NothingToDistribute()",
        "error NothingOwed()",
        "error NotTreasury()",
        "error InsufficientReserve()",
        "error BadId()",
        "error AlreadyDone()",
        "error QueueNotElapsed()",
        "error NothingToCompensate()",
        "error NothingToSweep()",
        "error Exhausted()",
        "error RoundActive()",
        "error NoActiveRound()",
        "error BadBounds()",
        "error BudgetUnavailable()",
        "error RoundCrossed()",
        "error RoundEnded()",
        "error BelowMinCommit()",
        "error NotFinalizable()",
        "error HasCommits()",
      ]);
      function h(e) {
        let r = new Set(e.filter((e) => "error" === e.type).map((e) => e.name));
        return [...e, ...c.filter((e) => !r.has(e.name))];
      }
      let m = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      });
      function f(e) {
        return "".concat(m.format(new Date(1e3 * e)), " ET");
      }
      let g = {
        NotBidding: (e, r) => {
          var t;
          let n = null != (t = r.now) ? t : Date.now() / 1e3;
          return void 0 !== r.auctionStart && n < r.auctionStart
            ? "Bidding opens at ".concat(f(r.auctionStart))
            : void 0 !== r.auctionEnd && n >= r.auctionEnd
            ? "Bidding has ended for this round"
            : "Outside the bidding window";
        },
        NotScheduled: (e, r) =>
          "finalize" === r.action || "reschedule" === r.action
            ? "No round is scheduled: the series has not opened"
            : "No round is scheduled yet",
        NoLot: (e, r) =>
          "claim" === r.action
            ? "No Upside lot under this address"
            : "No Upside lot in this round",
        BelowMinBid: "Minimum bid is 0.001 Upside",
        AboveLot: "Bid exceeds the lot on offer",
        AuctionCleared: "The round has cleared; no more bids",
        EscrowDelta: "USDG did not deliver the escrow amount",
        Blocked: "This address is blocked by the issuer registry",
        LotLocked: "Lots are locked while the round runs",
        BadReserve:
          "Reserve step is out of range or differs from the reserve already set",
        AlreadyClaimed: "Already claimed",
        NotFinalized: "The round is not finalized yet",
        NotBidder: "Not the owner of this bid",
        StillBidding:
          "Bidding is still open; finalize once the clock crosses or the round ends",
        AlreadyFinalized: "The round is already finalized",
        RerunPossible:
          "A re-run is still possible; unsold Upside unlocks once it is not",
        NoRerun: "No auction slot before settlement; the round cannot re-run",
        AlreadyScheduled: "A round is already scheduled",
        FeeTooHigh: "Fee above the maximum",
        OnlySeries: "Only the Series can call this",
        ZeroAmount: "Amount is zero",
        AboveTxCap: "Above the per-transaction cap",
        AboveSeriesCap: "Above the series cap",
        WrongState: (e, r) => {
          switch (r.action) {
            case "split":
            case "subscribe":
              return "The series is settled; no new splits";
            case "claim":
              return "Claims open after settlement";
            case "open":
              return "The series is not in Created state";
            case "settle":
            case "terminate":
              return "The series is not Open";
            default:
              return "The series is not in the right state for this";
          }
        },
        SeriesDead: "The series never opened and is dead",
        Paused: "The factory is paused",
        IssuerPaused:
          "The Stock Token issuer has paused transfers or the oracle",
        VaultInDeficit: "The vault is in deficit; splits are refused",
        BalanceDelta: "The Stock Token delivered a different amount than sent",
        AuctionLotLocked: "The auction lot is locked while the round runs",
        TooEarly: "Too early",
        TooLateToOpen: "Too late to open this series",
        PrevNotSettled: "The previous epoch is not settled yet",
        P0OutOfBounds: (e) =>
          "Feed price ".concat(
            void 0 !== e[0]
              ? "$".concat((0, u.ej)(e[0], 8, { maxFraction: 2 }), " ")
              : "",
            "is outside the allowed P0 range"
          ),
        CollateralEventActive: "A collateral event is active",
        DaysUndecided: "An earlier day has no qualifying price yet",
        WindowNotEnded: "The settlement window has not ended",
        BadHint: "Feed round hint does not match",
        WalkExhausted: "Feed walk exhausted; pass a closer round hint",
        NotQueued: "Nothing queued",
        NoAuctionSlot: "No auction slot before settlement",
        OnlyFactory: "Only the factory can call this",
        DateOutOfRange: "Date out of range",
        FeedDecimals: "The feed does not report 8 decimals",
        ReentrancyGuardReentrantCall: "Reentrant call refused",
        SafeERC20FailedOperation: (e, r) => {
          var t;
          return "".concat(
            null != (t = r.symbol) ? t : "Token",
            " transfer failed: check balance and allowance"
          );
        },
        OwnableUnauthorizedAccount: "Owner only",
        NotGuardian: "Guardian only",
        GuardianPaused: "The guardian has paused the factory",
        Disabled: "New series are disabled",
        NotRegistered: "Ticker is not registered",
        AlreadyRegistered: "Ticker is already registered",
        NotASeries: "Not a Talis series",
        ThirdFridayEarlyClose: "Third-Friday early close; not a valid day",
        ERC20InsufficientBalance: (e, r) => {
          var t, n, o;
          let [, a, i] = e,
            s = null != (t = r.decimals) ? t : 18;
          return void 0 === a || void 0 === i
            ? "Insufficient ".concat(
                null != (n = r.symbol) ? n : "token",
                " balance"
              )
            : "Insufficient "
                .concat(null != (o = r.symbol) ? o : "token", " balance: ")
                .concat((0, u.ej)(a, s, { maxFraction: 4 }), " held, ")
                .concat((0, u.ej)(i, s, { maxFraction: 4 }), " needed");
        },
        ERC20InsufficientAllowance: (e, r) => {
          var t;
          return "".concat(
            null != (t = r.symbol) ? t : "Token",
            " allowance too low; approve first"
          );
        },
        BelowMinStake: (e, r) => {
          var t;
          return "A first stake must be at least 1 ".concat(
            null != (t = r.symbol) ? t : "TALIS"
          );
        },
        BadTier: "Unknown tier",
        TierNotHigher: (e, r) =>
          "extend" === r.action
            ? "Extend needs a higher tier than the current one"
            : "A stake cannot lower the tier of the position",
        NoPosition: "No staked position under this address",
        StillLocked: "The lock has not ended yet",
        NothingPending: "No unstake is pending",
        CooldownActive: "The 7-day cooldown is still running",
        NothingToClaim: (e, r) =>
          "claimRound" === r.action
            ? "Nothing to claim for this round under this address"
            : "Nothing to claim",
        AmountExceedsStake: "Amount is above the staked balance",
        ZeroAddress: "Zero address",
        NotAContract: "The address is not a contract",
        NothingToDistribute:
          "Nothing to distribute: the router holds no unassigned USDG",
        NothingOwed: (e, r) =>
          "claimCompensation" === r.action
            ? "Nothing owed: no burned-position share under this address"
            : "Nothing owed: the ledger is empty",
        NotTreasury: "Only the treasury address may pull this ledger",
        InsufficientReserve: "The Backstop reserve is below the queued amount",
        BadId: "No queued item with this id",
        AlreadyDone: "This queued item was already executed or cancelled",
        QueueNotElapsed: "The 5-day queue has not elapsed",
        NothingToCompensate: "The series recorded no deficit or shortfall",
        NothingToSweep:
          "The reserve is at or below its target; nothing to sweep",
        Exhausted:
          "The distributor is exhausted: everything it was funded with has been paid",
        RoundActive: "A round is already open",
        NoActiveRound: "No round is open",
        BadBounds: "Round parameters are outside the bytecode bounds",
        BudgetUnavailable: "The budget is above the USDG available",
        RoundCrossed: "The round has already crossed; no more commits",
        RoundEnded: "The round has ended; no more commits",
        BelowMinCommit: (e, r) => {
          var t;
          return "Minimum commit is 1 ".concat(
            null != (t = r.symbol) ? t : "TALIS"
          );
        },
        NotFinalizable: "The round has neither crossed nor ended",
        HasCommits: "The round has commits and cannot be cancelled",
      };
      function y(e, r, t) {
        let n = g[e];
        return n
          ? "string" == typeof n
            ? n
            : n(r, t)
          : "Reverted: ".concat(e);
      }
      function v(e) {
        if (!(0, o.q)(e) || e.length < 10) return null;
        try {
          var r;
          let t = (0, a.W)({ abi: c, data: e });
          return { name: t.errorName, args: null != (r = t.args) ? r : [] };
        } catch (e) {
          return null;
        }
      }
      function p(e) {
        var r, t, n, a;
        let u =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          c = (function (e) {
            var r;
            if (!e) return;
            let t =
              null == (r = e.split("\n").find((e) => e.trim().length > 0))
                ? void 0
                : r.trim();
            if (t) return t.length > 200 ? "".concat(t.slice(0, 199), "…") : t;
          })(
            e instanceof Error
              ? null != (r = e.shortMessage)
                ? r
                : e.message
              : "string" == typeof e
              ? e
              : void 0
          );
        if (e instanceof i.C) {
          if (e.walk((e) => e instanceof s.vx))
            return {
              kind: "rejected",
              message: "Rejected in the wallet",
              detail: c,
            };
          let r = e.walk((e) => e instanceof d.M);
          if (r) {
            let e = null == (t = r.data) ? void 0 : t.errorName,
              o = null != (a = null == (n = r.data) ? void 0 : n.args) ? a : [];
            if (e && "Error" !== e && "Panic" !== e)
              return {
                kind: "revert",
                name: e,
                args: o,
                message: y(e, o, u),
                detail: c,
              };
            if ("Error" === e && "string" == typeof o[0])
              return {
                kind: "revert",
                name: "Error",
                args: o,
                message: "Reverted: ".concat(o[0]),
                detail: c,
              };
            if ("Panic" === e)
              return {
                kind: "revert",
                name: "Panic",
                args: o,
                message: "Reverted with a panic (arithmetic or assertion)",
                detail: c,
              };
            let i = r.raw ? v(r.raw) : null;
            return i
              ? {
                  kind: "revert",
                  name: i.name,
                  args: i.args,
                  message: y(i.name, i.args, u),
                  detail: c,
                }
              : r.reason
              ? {
                  kind: "revert",
                  args: o,
                  message: "Reverted: ".concat(r.reason),
                  detail: c,
                }
              : {
                  kind: "revert",
                  message: "Reverted without a reason",
                  detail: c,
                };
          }
          if (e.walk((e) => e instanceof l.k5))
            return {
              kind: "gas",
              message: "Not enough ETH for gas",
              detail: c,
            };
          let o = e.name;
          if (
            "ChainMismatchError" === o ||
            "SwitchChainError" === o ||
            "ChainNotConfiguredError" === o ||
            "UserRejectedRequestError" === o
          )
            return {
              kind: "chain",
              message:
                "The wallet is on another chain; switch to Robinhood Chain",
              detail: c,
            };
          if (
            "ConnectorNotConnectedError" === o ||
            "ConnectorNotFoundError" === o ||
            "ProviderNotFoundError" === o
          )
            return {
              kind: "connection",
              message: "Connect a wallet first",
              detail: c,
            };
          if (
            "HttpRequestError" === o ||
            "TimeoutError" === o ||
            "RpcRequestError" === o
          )
            return 429 === e.status || /429|rate limit/i.test(e.message)
              ? {
                  kind: "rpc",
                  message: "The RPC is rate-limiting; try again in a moment",
                  detail: c,
                }
              : { kind: "rpc", message: "The RPC did not answer", detail: c };
          if ("WaitForTransactionReceiptTimeoutError" === o)
            return { kind: "rpc", message: "No receipt in time", detail: c };
        }
        if (e && "object" == typeof e) {
          if (
            "ChainNotConfiguredError" === e.name ||
            "SwitchChainNotSupportedError" === e.name
          )
            return {
              kind: "chain",
              message:
                "The wallet is on another chain; switch to Robinhood Chain",
              detail: c,
            };
          if (
            "ConnectorNotConnectedError" === e.name ||
            "ConnectorNotFoundError" === e.name ||
            "ProviderNotFoundError" === e.name
          )
            return {
              kind: "connection",
              message: "Connect a wallet first",
              detail: c,
            };
          if (4001 === e.code || "ACTION_REJECTED" === e.code)
            return {
              kind: "rejected",
              message: "Rejected in the wallet",
              detail: c,
            };
          if (4902 === e.code)
            return {
              kind: "chain",
              message: "Robinhood Chain is not in the wallet; add it and retry",
              detail: c,
            };
          if (-32002 === e.code)
            return {
              kind: "connection",
              message: "The wallet already has a request open",
              detail: c,
            };
          let r = (function e(r) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              if (!r || "object" != typeof r || t > 6) return null;
              for (let n of ["data", "originalError", "error", "cause"]) {
                let a = r[n];
                if ("string" == typeof a && (0, o.q)(a) && a.length >= 10)
                  return a;
                if (a && "object" == typeof a) {
                  let r = a.data;
                  if ("string" == typeof r && (0, o.q)(r) && r.length >= 10)
                    return r;
                  let n = e(a, t + 1);
                  if (n) return n;
                }
              }
              return null;
            })(e),
            t = r ? v(r) : null;
          if (t)
            return {
              kind: "revert",
              name: t.name,
              args: t.args,
              message: y(t.name, t.args, u),
              detail: c,
            };
          if ("string" == typeof e.message) {
            if (/insufficient funds/i.test(e.message))
              return {
                kind: "gas",
                message: "Not enough ETH for gas",
                detail: c,
              };
            if (/user (rejected|denied)/i.test(e.message))
              return {
                kind: "rejected",
                message: "Rejected in the wallet",
                detail: c,
              };
            if (/429|rate limit/i.test(e.message))
              return {
                kind: "rpc",
                message: "The RPC is rate-limiting; try again in a moment",
                detail: c,
              };
          }
        }
        return {
          kind: "unknown",
          message: null != c ? c : "Transaction failed",
          detail: c,
        };
      }
      function w(e) {
        var r;
        let t = p(e);
        return "unknown" !== t.kind
          ? t.message
          : null != (r = t.detail)
          ? r
          : "Request failed";
      }
    },
    81122: (e, r, t) => {
      t.d(r, {
        Bs: () => o,
        C_: () => d,
        DY: () => a,
        Ro: () => c,
        WZ: () => l,
        ck: () => f,
        dq: () => s,
        ej: () => u,
        yb: () => m,
      });
      var n = t(10983);
      let o = { stock: 18, position: 18, usdg: 6, feed: 8 },
        a = 10n ** 18n;
      function i(e, r) {
        if (r <= 0n) throw RangeError("ceilDiv: divisor must be positive");
        if (e < 0n) throw RangeError("ceilDiv: negative dividend");
        return (e + r - 1n) / r;
      }
      function s(e, r) {
        return i(e * r, a);
      }
      function d(e, r) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "strict",
          n = e.trim().replace(/,/g, "").replace(/^\+/, "");
        if (!/^\d*(\.\d*)?$/.test(n) || "" === n || "." === n) return null;
        let [o = "", a = ""] = n.split("."),
          i = a;
        if (i.length > r) {
          if ("strict" === t) return null;
          i = i.slice(0, r);
        }
        return (
          BigInt("" === o ? "0" : o) * 10n ** BigInt(r) +
          BigInt(i.padEnd(r, "0") || "0")
        );
      }
      function l(e, r) {
        let t = e < 0n,
          n = t ? -e : e,
          o = 10n ** BigInt(r),
          a = (n / o).toString(),
          i = (n % o).toString().padStart(r, "0").replace(/0+$/, "");
        return ""
          .concat(t ? "−" : "")
          .concat(a)
          .concat(i ? ".".concat(i) : "");
      }
      function u(e, r) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          {
            maxFraction: n = r,
            minFraction: o = 0,
            grouping: a = !0,
            rounding: s = "floor",
          } = t,
          d = e < 0n,
          l = d ? -e : e,
          u = Math.max(0, r - n);
        if (u > 0) {
          let e = 10n ** BigInt(u);
          l = "ceil" === s ? i(l, e) : l / e;
        }
        let c = r - u,
          h = 10n ** BigInt(c),
          m = (l / h).toString(),
          f = c > 0 ? (l % h).toString().padStart(c, "0") : "";
        return (
          (f = f.replace(/0+$/, "")).length < o && (f = f.padEnd(o, "0")),
          a && (m = m.replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
          ""
            .concat(d ? "−" : "")
            .concat(m)
            .concat(f ? ".".concat(f) : "")
        );
      }
      function c(e, r) {
        return Number(l(e, r).replace("−", "-"));
      }
      let h = 10n ** 30n;
      function m(e, r, t) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e >= h) return "unlimited";
        let o = u(e, r, n);
        return t ? "".concat(o, " ").concat(t) : o;
      }
      function f(e, r) {
        return "max" === r ? n.Ao : e;
      }
    },
    86635: (e, r, t) => {
      t.d(r, {
        Am: () => w,
        At: () => m,
        NY: () => f,
        Vy: () => h,
        WN: () => T,
        dm: () => y,
        hR: () => N,
        og: () => g,
        tG: () => p,
        ur: () => v,
      });
      var n = t(90756),
        o = t(29142),
        a = t(50827),
        i = t(54096);
      let s = "live" === o.g ? 15e3 : 1 / 0,
        d = "live" === o.g && 3e4;
      function l(e) {
        return "preview" === o.g ? { initialData: e() } : {};
      }
      function u(e) {
        return Object.assign(e, { source: o.g });
      }
      function c() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
          r[t] = arguments[t];
        return ["talis", o.g, ...r];
      }
      function h() {
        return u(
          (0, n.I)({
            queryKey: c("markets"),
            queryFn: async () => (await (0, i.U)()).markets(),
            staleTime: s,
            refetchInterval: d,
            ...l(() => a.B.markets()),
          })
        );
      }
      function m(e) {
        return u(
          (0, n.I)({
            queryKey: c("market", e),
            queryFn: async () => (e ? (await (0, i.U)()).market(e) : null),
            enabled: !!e,
            staleTime: s,
            refetchInterval: d,
            ...l(() => (e ? a.B.market(e) : null)),
          })
        );
      }
      function f(e) {
        return u(
          (0, n.I)({
            queryKey: c("series", e),
            queryFn: async () => (e ? (await (0, i.U)()).series(e) : null),
            enabled: !!e,
            staleTime: s,
            refetchInterval: d,
            ...l(() => (e ? a.B.series(e) : null)),
          })
        );
      }
      function g() {
        return u(
          (0, n.I)({
            queryKey: c("series"),
            queryFn: async () => (await (0, i.U)()).allSeries(),
            staleTime: s,
            refetchInterval: d,
            ...l(() => a.B.allSeries()),
          })
        );
      }
      function y(e) {
        return u(
          (0, n.I)({
            queryKey: c("auction", e),
            queryFn: async () => (e ? (await (0, i.U)()).auction(e) : null),
            enabled: !!e,
            staleTime: "live" === o.g ? 5e3 : s,
            refetchInterval: d,
            ...l(() => (e ? a.B.auction(e) : null)),
          })
        );
      }
      function v() {
        return u(
          (0, n.I)({
            queryKey: c("auctions"),
            queryFn: async () => (await (0, i.U)()).auctions(),
            staleTime: "live" === o.g ? 5e3 : s,
            refetchInterval: d,
            ...l(() => a.B.auctions()),
          })
        );
      }
      function p(e) {
        return u(
          (0, n.I)({
            queryKey: c("epoch", e),
            queryFn: async () => (e ? (await (0, i.U)()).epoch(e) : null),
            enabled: !!e,
            staleTime: s,
            refetchInterval: d,
            ...l(() => (e ? a.B.epoch(e) : null)),
          })
        );
      }
      function w() {
        return u(
          (0, n.I)({
            queryKey: c("epochs"),
            queryFn: async () => (await (0, i.U)()).epochs(),
            staleTime: s,
            refetchInterval: d,
            ...l(() => a.B.epochs()),
          })
        );
      }
      function T() {
        return u(
          (0, n.I)({
            queryKey: c("candidates"),
            queryFn: async () => (await (0, i.U)()).listingCandidates(),
            staleTime: s,
            ...l(() => a.B.listingCandidates()),
          })
        );
      }
      function N() {
        return u(
          (0, n.I)({
            queryKey: c("stats"),
            queryFn: async () => (await (0, i.U)()).protocolStats(),
            staleTime: s,
            refetchInterval: d,
            ...l(() => a.B.protocolStats()),
          })
        );
      }
    },
  },
]);
