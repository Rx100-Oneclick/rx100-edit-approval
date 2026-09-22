var xh = Object.defineProperty;
var Eh = (e, t, r) => t in e ? xh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var qr = (e, t, r) => Eh(e, typeof t != "symbol" ? t + "" : t, r);
var Hu = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn = Symbol.for("react.element"), Th = Symbol.for("react.portal"), Ch = Symbol.for("react.fragment"), Oh = Symbol.for("react.strict_mode"), Rh = Symbol.for("react.profiler"), Ph = Symbol.for("react.provider"), jh = Symbol.for("react.context"), Ah = Symbol.for("react.forward_ref"), Ih = Symbol.for("react.suspense"), Nh = Symbol.for("react.memo"), $h = Symbol.for("react.lazy"), cl = Symbol.iterator;
function Lh(e) {
  return e === null || typeof e != "object" ? null : (e = cl && e[cl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ku = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, qu = Object.assign, Gu = {};
function Fr(e, t, r) {
  this.props = e, this.context = t, this.refs = Gu, this.updater = r || Ku;
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ju() {
}
Ju.prototype = Fr.prototype;
function pa(e, t, r) {
  this.props = e, this.context = t, this.refs = Gu, this.updater = r || Ku;
}
var ga = pa.prototype = new Ju();
ga.constructor = pa;
qu(ga, Fr.prototype);
ga.isPureReactComponent = !0;
var dl = Array.isArray, Qu = Object.prototype.hasOwnProperty, ma = { current: null }, Yu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xu(e, t, r) {
  var n, i = {}, s = null, o = null;
  if (t != null) for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Qu.call(t, n) && !Yu.hasOwnProperty(n) && (i[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) i.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (n in a = e.defaultProps, a) i[n] === void 0 && (i[n] = a[n]);
  return { $$typeof: Vn, type: e, key: s, ref: o, props: i, _owner: ma.current };
}
function Uh(e, t) {
  return { $$typeof: Vn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function va(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vn;
}
function Dh(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var hl = /\/+/g;
function As(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dh("" + e.key) : t.toString(36);
}
function xi(e, t, r, n, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (s) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Vn:
        case Th:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = n === "" ? "." + As(o, 0) : n, dl(i) ? (r = "", e != null && (r = e.replace(hl, "$&/") + "/"), xi(i, t, r, "", function(u) {
    return u;
  })) : i != null && (va(i) && (i = Uh(i, r + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(hl, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", dl(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = n + As(s, a);
    o += xi(s, t, r, l, i);
  }
  else if (l = Lh(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = n + As(s, a++), o += xi(s, t, r, l, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ei(e, t, r) {
  if (e == null) return e;
  var n = [], i = 0;
  return xi(e, n, "", "", function(s) {
    return t.call(r, s, i++);
  }), n;
}
function zh(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null }, Ei = { transition: null }, Bh = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: Ei, ReactCurrentOwner: ma };
function Zu() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: ei, forEach: function(e, t, r) {
  ei(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ei(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ei(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!va(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = Fr;
L.Fragment = Ch;
L.Profiler = Rh;
L.PureComponent = pa;
L.StrictMode = Oh;
L.Suspense = Ih;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bh;
L.act = Zu;
L.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = qu({}, e.props), i = e.key, s = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = ma.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Qu.call(t, l) && !Yu.hasOwnProperty(l) && (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: Vn, type: e.type, key: i, ref: s, props: n, _owner: o };
};
L.createContext = function(e) {
  return e = { $$typeof: jh, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ph, _context: e }, e.Consumer = e;
};
L.createElement = Xu;
L.createFactory = function(e) {
  var t = Xu.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Ah, render: e };
};
L.isValidElement = va;
L.lazy = function(e) {
  return { $$typeof: $h, _payload: { _status: -1, _result: e }, _init: zh };
};
L.memo = function(e, t) {
  return { $$typeof: Nh, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Ei.transition;
  Ei.transition = {};
  try {
    e();
  } finally {
    Ei.transition = t;
  }
};
L.unstable_act = Zu;
L.useCallback = function(e, t) {
  return ye.current.useCallback(e, t);
};
L.useContext = function(e) {
  return ye.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return ye.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return ye.current.useEffect(e, t);
};
L.useId = function() {
  return ye.current.useId();
};
L.useImperativeHandle = function(e, t, r) {
  return ye.current.useImperativeHandle(e, t, r);
};
L.useInsertionEffect = function(e, t) {
  return ye.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return ye.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return ye.current.useMemo(e, t);
};
L.useReducer = function(e, t, r) {
  return ye.current.useReducer(e, t, r);
};
L.useRef = function(e) {
  return ye.current.useRef(e);
};
L.useState = function(e) {
  return ye.current.useState(e);
};
L.useSyncExternalStore = function(e, t, r) {
  return ye.current.useSyncExternalStore(e, t, r);
};
L.useTransition = function() {
  return ye.current.useTransition();
};
L.version = "18.3.1";
Hu.exports = L;
var Q = Hu.exports, ec = { exports: {} }, je = {}, tc = { exports: {} }, rc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(O, N) {
    var $ = O.length;
    O.push(N);
    e: for (; 0 < $; ) {
      var Y = $ - 1 >>> 1, ie = O[Y];
      if (0 < i(ie, N)) O[Y] = N, O[$] = ie, $ = Y;
      else break e;
    }
  }
  function r(O) {
    return O.length === 0 ? null : O[0];
  }
  function n(O) {
    if (O.length === 0) return null;
    var N = O[0], $ = O.pop();
    if ($ !== N) {
      O[0] = $;
      e: for (var Y = 0, ie = O.length, Xn = ie >>> 1; Y < Xn; ) {
        var Lt = 2 * (Y + 1) - 1, js = O[Lt], Ut = Lt + 1, Zn = O[Ut];
        if (0 > i(js, $)) Ut < ie && 0 > i(Zn, js) ? (O[Y] = Zn, O[Ut] = $, Y = Ut) : (O[Y] = js, O[Lt] = $, Y = Lt);
        else if (Ut < ie && 0 > i(Zn, $)) O[Y] = Zn, O[Ut] = $, Y = Ut;
        else break e;
      }
    }
    return N;
  }
  function i(O, N) {
    var $ = O.sortIndex - N.sortIndex;
    return $ !== 0 ? $ : O.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var o = Date, a = o.now();
    e.unstable_now = function() {
      return o.now() - a;
    };
  }
  var l = [], u = [], c = 1, p = null, h = 3, m = !1, v = !1, y = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(O) {
    for (var N = r(u); N !== null; ) {
      if (N.callback === null) n(u);
      else if (N.startTime <= O) n(u), N.sortIndex = N.expirationTime, t(l, N);
      else break;
      N = r(u);
    }
  }
  function w(O) {
    if (y = !1, g(O), !v) if (r(l) !== null) v = !0, ze(x);
    else {
      var N = r(u);
      N !== null && Yn(w, N.startTime - O);
    }
  }
  function x(O, N) {
    v = !1, y && (y = !1, f(E), E = -1), m = !0;
    var $ = h;
    try {
      for (g(N), p = r(l); p !== null && (!(p.expirationTime > N) || O && !q()); ) {
        var Y = p.callback;
        if (typeof Y == "function") {
          p.callback = null, h = p.priorityLevel;
          var ie = Y(p.expirationTime <= N);
          N = e.unstable_now(), typeof ie == "function" ? p.callback = ie : p === r(l) && n(l), g(N);
        } else n(l);
        p = r(l);
      }
      if (p !== null) var Xn = !0;
      else {
        var Lt = r(u);
        Lt !== null && Yn(w, Lt.startTime - N), Xn = !1;
      }
      return Xn;
    } finally {
      p = null, h = $, m = !1;
    }
  }
  var S = !1, T = null, E = -1, I = 5, P = -1;
  function q() {
    return !(e.unstable_now() - P < I);
  }
  function tt() {
    if (T !== null) {
      var O = e.unstable_now();
      P = O;
      var N = !0;
      try {
        N = T(!0, O);
      } finally {
        N ? ir() : (S = !1, T = null);
      }
    } else S = !1;
  }
  var ir;
  if (typeof d == "function") ir = function() {
    d(tt);
  };
  else if (typeof MessageChannel < "u") {
    var Kr = new MessageChannel(), Qn = Kr.port2;
    Kr.port1.onmessage = tt, ir = function() {
      Qn.postMessage(null);
    };
  } else ir = function() {
    _(tt, 0);
  };
  function ze(O) {
    T = O, S || (S = !0, ir());
  }
  function Yn(O, N) {
    E = _(function() {
      O(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e.unstable_continueExecution = function() {
    v || m || (v = !0, ze(x));
  }, e.unstable_forceFrameRate = function(O) {
    0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < O ? Math.floor(1e3 / O) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(O) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = h;
    }
    var $ = h;
    h = N;
    try {
      return O();
    } finally {
      h = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(O, N) {
    switch (O) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        O = 3;
    }
    var $ = h;
    h = O;
    try {
      return N();
    } finally {
      h = $;
    }
  }, e.unstable_scheduleCallback = function(O, N, $) {
    var Y = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? Y + $ : Y) : $ = Y, O) {
      case 1:
        var ie = -1;
        break;
      case 2:
        ie = 250;
        break;
      case 5:
        ie = 1073741823;
        break;
      case 4:
        ie = 1e4;
        break;
      default:
        ie = 5e3;
    }
    return ie = $ + ie, O = { id: c++, callback: N, priorityLevel: O, startTime: $, expirationTime: ie, sortIndex: -1 }, $ > Y ? (O.sortIndex = $, t(u, O), r(l) === null && O === r(u) && (y ? (f(E), E = -1) : y = !0, Yn(w, $ - Y))) : (O.sortIndex = ie, t(l, O), v || m || (v = !0, ze(x))), O;
  }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function(O) {
    var N = h;
    return function() {
      var $ = h;
      h = N;
      try {
        return O.apply(this, arguments);
      } finally {
        h = $;
      }
    };
  };
})(rc);
tc.exports = rc;
var Mh = tc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fh = Q, Pe = Mh;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nc = /* @__PURE__ */ new Set(), _n = {};
function rr(e, t) {
  $r(e, t), $r(e + "Capture", t);
}
function $r(e, t) {
  for (_n[e] = t, e = 0; e < t.length; e++) nc.add(t[e]);
}
var lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ho = Object.prototype.hasOwnProperty, Wh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fl = {}, pl = {};
function Vh(e) {
  return ho.call(pl, e) ? !0 : ho.call(fl, e) ? !1 : Wh.test(e) ? pl[e] = !0 : (fl[e] = !0, !1);
}
function Hh(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kh(e, t, r, n) {
  if (t === null || typeof t > "u" || Hh(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null) switch (r.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function we(e, t, r, n, i, s, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o;
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  de[e] = new we(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  de[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  de[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  de[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  de[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  de[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  de[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  de[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  de[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ya = /[\-:]([a-z])/g;
function wa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ya,
    wa
  );
  de[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ya, wa);
  de[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ya, wa);
  de[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _a(e, t, r, n) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kh(t, r, i, n) && (r = null), n || i === null ? Vh(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var ht = Fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ti = Symbol.for("react.element"), gr = Symbol.for("react.portal"), mr = Symbol.for("react.fragment"), ka = Symbol.for("react.strict_mode"), fo = Symbol.for("react.profiler"), ic = Symbol.for("react.provider"), sc = Symbol.for("react.context"), Sa = Symbol.for("react.forward_ref"), po = Symbol.for("react.suspense"), go = Symbol.for("react.suspense_list"), ba = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), oc = Symbol.for("react.offscreen"), gl = Symbol.iterator;
function Gr(e) {
  return e === null || typeof e != "object" ? null : (e = gl && e[gl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var K = Object.assign, Is;
function nn(e) {
  if (Is === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    Is = t && t[1] || "";
  }
  return `
` + Is + e;
}
var Ns = !1;
function $s(e, t) {
  if (!e || Ns) return "";
  Ns = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var n = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        n = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), s = n.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; ) a--;
      for (; 1 <= o && 0 <= a; o--, a--) if (i[o] !== s[a]) {
        if (o !== 1 || a !== 1)
          do
            if (o--, a--, 0 > a || i[o] !== s[a]) {
              var l = `
` + i[o].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= o && 0 <= a);
        break;
      }
    }
  } finally {
    Ns = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? nn(e) : "";
}
function qh(e) {
  switch (e.tag) {
    case 5:
      return nn(e.type);
    case 16:
      return nn("Lazy");
    case 13:
      return nn("Suspense");
    case 19:
      return nn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = $s(e.type, !1), e;
    case 11:
      return e = $s(e.type.render, !1), e;
    case 1:
      return e = $s(e.type, !0), e;
    default:
      return "";
  }
}
function mo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mr:
      return "Fragment";
    case gr:
      return "Portal";
    case fo:
      return "Profiler";
    case ka:
      return "StrictMode";
    case po:
      return "Suspense";
    case go:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case sc:
      return (e.displayName || "Context") + ".Consumer";
    case ic:
      return (e._context.displayName || "Context") + ".Provider";
    case Sa:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ba:
      return t = e.displayName || null, t !== null ? t : mo(e.type) || "Memo";
    case gt:
      t = e._payload, e = e._init;
      try {
        return mo(e(t));
      } catch {
      }
  }
  return null;
}
function Gh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return mo(t);
    case 8:
      return t === ka ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ac(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Jh(e) {
  var t = ac(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var i = r.get, s = r.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      n = "" + o, s.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(o) {
      n = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ri(e) {
  e._valueTracker || (e._valueTracker = Jh(e));
}
function lc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(), n = "";
  return e && (n = ac(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function Li(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vo(e, t) {
  var r = t.checked;
  return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function ml(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = jt(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function uc(e, t) {
  t = t.checked, t != null && _a(e, "checked", t, !1);
}
function yo(e, t) {
  uc(e, t);
  var r = jt(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? wo(e, t.type, r) : t.hasOwnProperty("defaultValue") && wo(e, t.type, jt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vl(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function wo(e, t, r) {
  (t !== "number" || Li(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var sn = Array.isArray;
function Or(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + jt(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        e[i].selected = !0, n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function yl(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(k(92));
      if (sn(r)) {
        if (1 < r.length) throw Error(k(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: jt(r) };
}
function cc(e, t) {
  var r = jt(t.value), n = jt(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function wl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? dc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ni, hc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ni = ni || document.createElement("div"), ni.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ni.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function kn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var un = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Qh = ["Webkit", "ms", "Moz", "O"];
Object.keys(un).forEach(function(e) {
  Qh.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), un[t] = un[e];
  });
});
function fc(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || un.hasOwnProperty(e) && un[e] ? ("" + t).trim() : t + "px";
}
function pc(e, t) {
  e = e.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, i = fc(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i;
  }
}
var Yh = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function So(e, t) {
  if (t) {
    if (Yh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function bo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var xo = null;
function xa(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Eo = null, Rr = null, Pr = null;
function _l(e) {
  if (e = qn(e)) {
    if (typeof Eo != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = ps(t), Eo(e.stateNode, e.type, t));
  }
}
function gc(e) {
  Rr ? Pr ? Pr.push(e) : Pr = [e] : Rr = e;
}
function mc() {
  if (Rr) {
    var e = Rr, t = Pr;
    if (Pr = Rr = null, _l(e), t) for (e = 0; e < t.length; e++) _l(t[e]);
  }
}
function vc(e, t) {
  return e(t);
}
function yc() {
}
var Ls = !1;
function wc(e, t, r) {
  if (Ls) return e(t, r);
  Ls = !0;
  try {
    return vc(e, t, r);
  } finally {
    Ls = !1, (Rr !== null || Pr !== null) && (yc(), mc());
  }
}
function Sn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ps(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(k(231, t, typeof r));
  return r;
}
var To = !1;
if (lt) try {
  var Jr = {};
  Object.defineProperty(Jr, "passive", { get: function() {
    To = !0;
  } }), window.addEventListener("test", Jr, Jr), window.removeEventListener("test", Jr, Jr);
} catch {
  To = !1;
}
function Xh(e, t, r, n, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var cn = !1, Ui = null, Di = !1, Co = null, Zh = { onError: function(e) {
  cn = !0, Ui = e;
} };
function ef(e, t, r, n, i, s, o, a, l) {
  cn = !1, Ui = null, Xh.apply(Zh, arguments);
}
function tf(e, t, r, n, i, s, o, a, l) {
  if (ef.apply(this, arguments), cn) {
    if (cn) {
      var u = Ui;
      cn = !1, Ui = null;
    } else throw Error(k(198));
    Di || (Di = !0, Co = u);
  }
}
function nr(e) {
  var t = e, r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (r = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function _c(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function kl(e) {
  if (nr(e) !== e) throw Error(k(188));
}
function rf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = nr(e), t === null) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (n = i.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === r) return kl(i), e;
        if (s === n) return kl(i), t;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (r.return !== n.return) r = i, n = s;
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === r) {
          o = !0, r = i, n = s;
          break;
        }
        if (a === n) {
          o = !0, n = i, r = s;
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === r) {
            o = !0, r = s, n = i;
            break;
          }
          if (a === n) {
            o = !0, n = s, r = i;
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (r.alternate !== n) throw Error(k(190));
  }
  if (r.tag !== 3) throw Error(k(188));
  return r.stateNode.current === r ? e : t;
}
function kc(e) {
  return e = rf(e), e !== null ? Sc(e) : null;
}
function Sc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bc = Pe.unstable_scheduleCallback, Sl = Pe.unstable_cancelCallback, nf = Pe.unstable_shouldYield, sf = Pe.unstable_requestPaint, X = Pe.unstable_now, of = Pe.unstable_getCurrentPriorityLevel, Ea = Pe.unstable_ImmediatePriority, xc = Pe.unstable_UserBlockingPriority, zi = Pe.unstable_NormalPriority, af = Pe.unstable_LowPriority, Ec = Pe.unstable_IdlePriority, cs = null, Ze = null;
function lf(e) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function") try {
    Ze.onCommitFiberRoot(cs, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var qe = Math.clz32 ? Math.clz32 : df, uf = Math.log, cf = Math.LN2;
function df(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (uf(e) / cf | 0) | 0;
}
var ii = 64, si = 4194304;
function on(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Bi(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0, i = e.suspendedLanes, s = e.pingedLanes, o = r & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? n = on(a) : (s &= o, s !== 0 && (n = on(s)));
  } else o = r & ~i, o !== 0 ? n = on(o) : s !== 0 && (n = on(s));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && (i = n & -n, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - qe(t), i = 1 << r, n |= e[r], t &= ~i;
  return n;
}
function hf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ff(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - qe(s), a = 1 << o, l = i[o];
    l === -1 ? (!(a & r) || a & n) && (i[o] = hf(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function Oo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Tc() {
  var e = ii;
  return ii <<= 1, !(ii & 4194240) && (ii = 64), e;
}
function Us(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Hn(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qe(t), e[t] = r;
}
function pf(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - qe(r), s = 1 << i;
    t[i] = 0, n[i] = -1, e[i] = -1, r &= ~s;
  }
}
function Ta(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - qe(r), i = 1 << n;
    i & t | e[n] & t && (e[n] |= t), r &= ~i;
  }
}
var D = 0;
function Cc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Oc, Ca, Rc, Pc, jc, Ro = !1, oi = [], bt = null, xt = null, Et = null, bn = /* @__PURE__ */ new Map(), xn = /* @__PURE__ */ new Map(), yt = [], gf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
      break;
    case "dragenter":
    case "dragleave":
      xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xn.delete(t.pointerId);
  }
}
function Qr(e, t, r, n, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: s, targetContainers: [i] }, t !== null && (t = qn(t), t !== null && Ca(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function mf(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return bt = Qr(bt, e, t, r, n, i), !0;
    case "dragenter":
      return xt = Qr(xt, e, t, r, n, i), !0;
    case "mouseover":
      return Et = Qr(Et, e, t, r, n, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return bn.set(s, Qr(bn.get(s) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, xn.set(s, Qr(xn.get(s) || null, e, t, r, n, i)), !0;
  }
  return !1;
}
function Ac(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var r = nr(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = _c(r), t !== null) {
          e.blockedOn = t, jc(e.priority, function() {
            Rc(r);
          });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ti(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      xo = n, r.target.dispatchEvent(n), xo = null;
    } else return t = qn(r), t !== null && Ca(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function xl(e, t, r) {
  Ti(e) && r.delete(t);
}
function vf() {
  Ro = !1, bt !== null && Ti(bt) && (bt = null), xt !== null && Ti(xt) && (xt = null), Et !== null && Ti(Et) && (Et = null), bn.forEach(xl), xn.forEach(xl);
}
function Yr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ro || (Ro = !0, Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, vf)));
}
function En(e) {
  function t(i) {
    return Yr(i, e);
  }
  if (0 < oi.length) {
    Yr(oi[0], e);
    for (var r = 1; r < oi.length; r++) {
      var n = oi[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (bt !== null && Yr(bt, e), xt !== null && Yr(xt, e), Et !== null && Yr(Et, e), bn.forEach(t), xn.forEach(t), r = 0; r < yt.length; r++) n = yt[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < yt.length && (r = yt[0], r.blockedOn === null); ) Ac(r), r.blockedOn === null && yt.shift();
}
var jr = ht.ReactCurrentBatchConfig, Mi = !0;
function yf(e, t, r, n) {
  var i = D, s = jr.transition;
  jr.transition = null;
  try {
    D = 1, Oa(e, t, r, n);
  } finally {
    D = i, jr.transition = s;
  }
}
function wf(e, t, r, n) {
  var i = D, s = jr.transition;
  jr.transition = null;
  try {
    D = 4, Oa(e, t, r, n);
  } finally {
    D = i, jr.transition = s;
  }
}
function Oa(e, t, r, n) {
  if (Mi) {
    var i = Po(e, t, r, n);
    if (i === null) qs(e, t, n, Fi, r), bl(e, n);
    else if (mf(i, e, t, r, n)) n.stopPropagation();
    else if (bl(e, n), t & 4 && -1 < gf.indexOf(e)) {
      for (; i !== null; ) {
        var s = qn(i);
        if (s !== null && Oc(s), s = Po(e, t, r, n), s === null && qs(e, t, n, Fi, r), s === i) break;
        i = s;
      }
      i !== null && n.stopPropagation();
    } else qs(e, t, n, null, r);
  }
}
var Fi = null;
function Po(e, t, r, n) {
  if (Fi = null, e = xa(n), e = Ht(e), e !== null) if (t = nr(e), t === null) e = null;
  else if (r = t.tag, r === 13) {
    if (e = _c(t), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Fi = e, null;
}
function Ic(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (of()) {
        case Ea:
          return 1;
        case xc:
          return 4;
        case zi:
        case af:
          return 16;
        case Ec:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null, Ra = null, Ci = null;
function Nc() {
  if (Ci) return Ci;
  var e, t = Ra, r = t.length, n, i = "value" in kt ? kt.value : kt.textContent, s = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++) ;
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[s - n]; n++) ;
  return Ci = i.slice(e, 1 < n ? 1 - n : void 0);
}
function Oi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ai() {
  return !0;
}
function El() {
  return !1;
}
function Ae(e) {
  function t(r, n, i, s, o) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (r = e[a], this[a] = r ? r(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ai : El, this.isPropagationStopped = El, this;
  }
  return K(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = ai);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = ai);
  }, persist: function() {
  }, isPersistent: ai }), t;
}
var Wr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Pa = Ae(Wr), Kn = K({}, Wr, { view: 0, detail: 0 }), _f = Ae(Kn), Ds, zs, Xr, ds = K({}, Kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ja, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Xr && (Xr && e.type === "mousemove" ? (Ds = e.screenX - Xr.screenX, zs = e.screenY - Xr.screenY) : zs = Ds = 0, Xr = e), Ds);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : zs;
} }), Tl = Ae(ds), kf = K({}, ds, { dataTransfer: 0 }), Sf = Ae(kf), bf = K({}, Kn, { relatedTarget: 0 }), Bs = Ae(bf), xf = K({}, Wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = Ae(xf), Tf = K({}, Wr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Cf = Ae(Tf), Of = K({}, Wr, { data: 0 }), Cl = Ae(Of), Rf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Pf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, jf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Af(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jf[e]) ? !!t[e] : !1;
}
function ja() {
  return Af;
}
var If = K({}, Kn, { key: function(e) {
  if (e.key) {
    var t = Rf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ja, charCode: function(e) {
  return e.type === "keypress" ? Oi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Nf = Ae(If), $f = K({}, ds, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ol = Ae($f), Lf = K({}, Kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ja }), Uf = Ae(Lf), Df = K({}, Wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zf = Ae(Df), Bf = K({}, ds, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Mf = Ae(Bf), Ff = [9, 13, 27, 32], Aa = lt && "CompositionEvent" in window, dn = null;
lt && "documentMode" in document && (dn = document.documentMode);
var Wf = lt && "TextEvent" in window && !dn, $c = lt && (!Aa || dn && 8 < dn && 11 >= dn), Rl = " ", Pl = !1;
function Lc(e, t) {
  switch (e) {
    case "keyup":
      return Ff.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Uc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vr = !1;
function Vf(e, t) {
  switch (e) {
    case "compositionend":
      return Uc(t);
    case "keypress":
      return t.which !== 32 ? null : (Pl = !0, Rl);
    case "textInput":
      return e = t.data, e === Rl && Pl ? null : e;
    default:
      return null;
  }
}
function Hf(e, t) {
  if (vr) return e === "compositionend" || !Aa && Lc(e, t) ? (e = Nc(), Ci = Ra = kt = null, vr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return $c && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function jl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kf[e.type] : t === "textarea";
}
function Dc(e, t, r, n) {
  gc(n), t = Wi(t, "onChange"), 0 < t.length && (r = new Pa("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var hn = null, Tn = null;
function qf(e) {
  Jc(e, 0);
}
function hs(e) {
  var t = _r(e);
  if (lc(t)) return e;
}
function Gf(e, t) {
  if (e === "change") return t;
}
var zc = !1;
if (lt) {
  var Ms;
  if (lt) {
    var Fs = "oninput" in document;
    if (!Fs) {
      var Al = document.createElement("div");
      Al.setAttribute("oninput", "return;"), Fs = typeof Al.oninput == "function";
    }
    Ms = Fs;
  } else Ms = !1;
  zc = Ms && (!document.documentMode || 9 < document.documentMode);
}
function Il() {
  hn && (hn.detachEvent("onpropertychange", Bc), Tn = hn = null);
}
function Bc(e) {
  if (e.propertyName === "value" && hs(Tn)) {
    var t = [];
    Dc(t, Tn, e, xa(e)), wc(qf, t);
  }
}
function Jf(e, t, r) {
  e === "focusin" ? (Il(), hn = t, Tn = r, hn.attachEvent("onpropertychange", Bc)) : e === "focusout" && Il();
}
function Qf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return hs(Tn);
}
function Yf(e, t) {
  if (e === "click") return hs(t);
}
function Xf(e, t) {
  if (e === "input" || e === "change") return hs(t);
}
function Zf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Zf;
function Cn(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!ho.call(t, i) || !Je(e[i], t[i])) return !1;
  }
  return !0;
}
function Nl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $l(e, t) {
  var r = Nl(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Nl(r);
  }
}
function Mc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Fc() {
  for (var e = window, t = Li(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Li(e.document);
  }
  return t;
}
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ep(e) {
  var t = Fc(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Mc(r.ownerDocument.documentElement, r)) {
    if (n !== null && Ia(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = r.textContent.length, s = Math.min(n.start, i);
        n = n.end === void 0 ? s : Math.min(n.end, i), !e.extend && s > n && (i = n, n = s, s = i), i = $l(r, s);
        var o = $l(
          r,
          n
        );
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > n ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var tp = lt && "documentMode" in document && 11 >= document.documentMode, yr = null, jo = null, fn = null, Ao = !1;
function Ll(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Ao || yr == null || yr !== Li(n) || (n = yr, "selectionStart" in n && Ia(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), fn && Cn(fn, n) || (fn = n, n = Wi(jo, "onSelect"), 0 < n.length && (t = new Pa("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = yr)));
}
function li(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var wr = { animationend: li("Animation", "AnimationEnd"), animationiteration: li("Animation", "AnimationIteration"), animationstart: li("Animation", "AnimationStart"), transitionend: li("Transition", "TransitionEnd") }, Ws = {}, Wc = {};
lt && (Wc = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);
function fs(e) {
  if (Ws[e]) return Ws[e];
  if (!wr[e]) return e;
  var t = wr[e], r;
  for (r in t) if (t.hasOwnProperty(r) && r in Wc) return Ws[e] = t[r];
  return e;
}
var Vc = fs("animationend"), Hc = fs("animationiteration"), Kc = fs("animationstart"), qc = fs("transitionend"), Gc = /* @__PURE__ */ new Map(), Ul = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function It(e, t) {
  Gc.set(e, t), rr(t, [e]);
}
for (var Vs = 0; Vs < Ul.length; Vs++) {
  var Hs = Ul[Vs], rp = Hs.toLowerCase(), np = Hs[0].toUpperCase() + Hs.slice(1);
  It(rp, "on" + np);
}
It(Vc, "onAnimationEnd");
It(Hc, "onAnimationIteration");
It(Kc, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(qc, "onTransitionEnd");
$r("onMouseEnter", ["mouseout", "mouseover"]);
$r("onMouseLeave", ["mouseout", "mouseover"]);
$r("onPointerEnter", ["pointerout", "pointerover"]);
$r("onPointerLeave", ["pointerout", "pointerover"]);
rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var an = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ip = new Set("cancel close invalid load scroll toggle".split(" ").concat(an));
function Dl(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, tf(n, t, void 0, e), e.currentTarget = null;
}
function Jc(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], i = n.event;
    n = n.listeners;
    e: {
      var s = void 0;
      if (t) for (var o = n.length - 1; 0 <= o; o--) {
        var a = n[o], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
        Dl(i, a, u), s = l;
      }
      else for (o = 0; o < n.length; o++) {
        if (a = n[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
        Dl(i, a, u), s = l;
      }
    }
  }
  if (Di) throw e = Co, Di = !1, Co = null, e;
}
function M(e, t) {
  var r = t[Uo];
  r === void 0 && (r = t[Uo] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (Qc(t, e, 2, !1), r.add(n));
}
function Ks(e, t, r) {
  var n = 0;
  t && (n |= 4), Qc(r, e, n, t);
}
var ui = "_reactListening" + Math.random().toString(36).slice(2);
function On(e) {
  if (!e[ui]) {
    e[ui] = !0, nc.forEach(function(r) {
      r !== "selectionchange" && (ip.has(r) || Ks(r, !1, e), Ks(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ui] || (t[ui] = !0, Ks("selectionchange", !1, t));
  }
}
function Qc(e, t, r, n) {
  switch (Ic(t)) {
    case 1:
      var i = yf;
      break;
    case 4:
      i = wf;
      break;
    default:
      i = Oa;
  }
  r = i.bind(null, t, r, e), i = void 0, !To || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: i }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, { passive: i }) : e.addEventListener(t, r, !1);
}
function qs(e, t, r, n, i) {
  var s = n;
  if (!(t & 1) && !(t & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var o = n.tag;
    if (o === 3 || o === 4) {
      var a = n.stateNode.containerInfo;
      if (a === i || a.nodeType === 8 && a.parentNode === i) break;
      if (o === 4) for (o = n.return; o !== null; ) {
        var l = o.tag;
        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        o = o.return;
      }
      for (; a !== null; ) {
        if (o = Ht(a), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          n = s = o;
          continue e;
        }
        a = a.parentNode;
      }
    }
    n = n.return;
  }
  wc(function() {
    var u = s, c = xa(r), p = [];
    e: {
      var h = Gc.get(e);
      if (h !== void 0) {
        var m = Pa, v = e;
        switch (e) {
          case "keypress":
            if (Oi(r) === 0) break e;
          case "keydown":
          case "keyup":
            m = Nf;
            break;
          case "focusin":
            v = "focus", m = Bs;
            break;
          case "focusout":
            v = "blur", m = Bs;
            break;
          case "beforeblur":
          case "afterblur":
            m = Bs;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Tl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Uf;
            break;
          case Vc:
          case Hc:
          case Kc:
            m = Ef;
            break;
          case qc:
            m = zf;
            break;
          case "scroll":
            m = _f;
            break;
          case "wheel":
            m = Mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Ol;
        }
        var y = (t & 4) !== 0, _ = !y && e === "scroll", f = y ? h !== null ? h + "Capture" : null : h;
        y = [];
        for (var d = u, g; d !== null; ) {
          g = d;
          var w = g.stateNode;
          if (g.tag === 5 && w !== null && (g = w, f !== null && (w = Sn(d, f), w != null && y.push(Rn(d, w, g)))), _) break;
          d = d.return;
        }
        0 < y.length && (h = new m(h, v, null, r, c), p.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", h && r !== xo && (v = r.relatedTarget || r.fromElement) && (Ht(v) || v[ut])) break e;
        if ((m || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, m ? (v = r.relatedTarget || r.toElement, m = u, v = v ? Ht(v) : null, v !== null && (_ = nr(v), v !== _ || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null, v = u), m !== v)) {
          if (y = Tl, w = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ol, w = "onPointerLeave", f = "onPointerEnter", d = "pointer"), _ = m == null ? h : _r(m), g = v == null ? h : _r(v), h = new y(w, d + "leave", m, r, c), h.target = _, h.relatedTarget = g, w = null, Ht(c) === u && (y = new y(f, d + "enter", v, r, c), y.target = g, y.relatedTarget = _, w = y), _ = w, m && v) t: {
            for (y = m, f = v, d = 0, g = y; g; g = sr(g)) d++;
            for (g = 0, w = f; w; w = sr(w)) g++;
            for (; 0 < d - g; ) y = sr(y), d--;
            for (; 0 < g - d; ) f = sr(f), g--;
            for (; d--; ) {
              if (y === f || f !== null && y === f.alternate) break t;
              y = sr(y), f = sr(f);
            }
            y = null;
          }
          else y = null;
          m !== null && zl(p, h, m, y, !1), v !== null && _ !== null && zl(p, _, v, y, !0);
        }
      }
      e: {
        if (h = u ? _r(u) : window, m = h.nodeName && h.nodeName.toLowerCase(), m === "select" || m === "input" && h.type === "file") var x = Gf;
        else if (jl(h)) if (zc) x = Xf;
        else {
          x = Qf;
          var S = Jf;
        }
        else (m = h.nodeName) && m.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (x = Yf);
        if (x && (x = x(e, u))) {
          Dc(p, x, r, c);
          break e;
        }
        S && S(e, h, u), e === "focusout" && (S = h._wrapperState) && S.controlled && h.type === "number" && wo(h, "number", h.value);
      }
      switch (S = u ? _r(u) : window, e) {
        case "focusin":
          (jl(S) || S.contentEditable === "true") && (yr = S, jo = u, fn = null);
          break;
        case "focusout":
          fn = jo = yr = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ao = !1, Ll(p, r, c);
          break;
        case "selectionchange":
          if (tp) break;
        case "keydown":
        case "keyup":
          Ll(p, r, c);
      }
      var T;
      if (Aa) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else vr ? Lc(e, r) && (E = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (E = "onCompositionStart");
      E && ($c && r.locale !== "ko" && (vr || E !== "onCompositionStart" ? E === "onCompositionEnd" && vr && (T = Nc()) : (kt = c, Ra = "value" in kt ? kt.value : kt.textContent, vr = !0)), S = Wi(u, E), 0 < S.length && (E = new Cl(E, e, null, r, c), p.push({ event: E, listeners: S }), T ? E.data = T : (T = Uc(r), T !== null && (E.data = T)))), (T = Wf ? Vf(e, r) : Hf(e, r)) && (u = Wi(u, "onBeforeInput"), 0 < u.length && (c = new Cl("onBeforeInput", "beforeinput", null, r, c), p.push({ event: c, listeners: u }), c.data = T));
    }
    Jc(p, t);
  });
}
function Rn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Wi(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = Sn(e, r), s != null && n.unshift(Rn(e, s, i)), s = Sn(e, t), s != null && n.push(Rn(e, s, i))), e = e.return;
  }
  return n;
}
function sr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zl(e, t, r, n, i) {
  for (var s = t._reactName, o = []; r !== null && r !== n; ) {
    var a = r, l = a.alternate, u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 && u !== null && (a = u, i ? (l = Sn(r, s), l != null && o.unshift(Rn(r, l, a))) : i || (l = Sn(r, s), l != null && o.push(Rn(r, l, a)))), r = r.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var sp = /\r\n?/g, op = /\u0000|\uFFFD/g;
function Bl(e) {
  return (typeof e == "string" ? e : "" + e).replace(sp, `
`).replace(op, "");
}
function ci(e, t, r) {
  if (t = Bl(t), Bl(e) !== t && r) throw Error(k(425));
}
function Vi() {
}
var Io = null, No = null;
function $o(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Lo = typeof setTimeout == "function" ? setTimeout : void 0, ap = typeof clearTimeout == "function" ? clearTimeout : void 0, Ml = typeof Promise == "function" ? Promise : void 0, lp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ml < "u" ? function(e) {
  return Ml.resolve(null).then(e).catch(up);
} : Lo;
function up(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gs(e, t) {
  var r = t, n = 0;
  do {
    var i = r.nextSibling;
    if (e.removeChild(r), i && i.nodeType === 8) if (r = i.data, r === "/$") {
      if (n === 0) {
        e.removeChild(i), En(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  En(t);
}
function Tt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Fl(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Vr = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + Vr, Pn = "__reactProps$" + Vr, ut = "__reactContainer$" + Vr, Uo = "__reactEvents$" + Vr, cp = "__reactListeners$" + Vr, dp = "__reactHandles$" + Vr;
function Ht(e) {
  var t = e[Xe];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[ut] || r[Xe]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Fl(e); e !== null; ) {
        if (r = e[Xe]) return r;
        e = Fl(e);
      }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function qn(e) {
  return e = e[Xe] || e[ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function _r(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function ps(e) {
  return e[Pn] || null;
}
var Do = [], kr = -1;
function Nt(e) {
  return { current: e };
}
function F(e) {
  0 > kr || (e.current = Do[kr], Do[kr] = null, kr--);
}
function B(e, t) {
  kr++, Do[kr] = e.current, e.current = t;
}
var At = {}, ge = Nt(At), Se = Nt(!1), Yt = At;
function Lr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return At;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in r) i[s] = t[s];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function be(e) {
  return e = e.childContextTypes, e != null;
}
function Hi() {
  F(Se), F(ge);
}
function Wl(e, t, r) {
  if (ge.current !== At) throw Error(k(168));
  B(ge, t), B(Se, r);
}
function Yc(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(k(108, Gh(e) || "Unknown", i));
  return K({}, r, n);
}
function Ki(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At, Yt = ge.current, B(ge, e), B(Se, Se.current), !0;
}
function Vl(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(k(169));
  r ? (e = Yc(e, t, Yt), n.__reactInternalMemoizedMergedChildContext = e, F(Se), F(ge), B(ge, e)) : F(Se), B(Se, r);
}
var it = null, gs = !1, Js = !1;
function Xc(e) {
  it === null ? it = [e] : it.push(e);
}
function hp(e) {
  gs = !0, Xc(e);
}
function $t() {
  if (!Js && it !== null) {
    Js = !0;
    var e = 0, t = D;
    try {
      var r = it;
      for (D = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      it = null, gs = !1;
    } catch (i) {
      throw it !== null && (it = it.slice(e + 1)), bc(Ea, $t), i;
    } finally {
      D = t, Js = !1;
    }
  }
  return null;
}
var Sr = [], br = 0, qi = null, Gi = 0, Ie = [], Ne = 0, Xt = null, st = 1, ot = "";
function Bt(e, t) {
  Sr[br++] = Gi, Sr[br++] = qi, qi = e, Gi = t;
}
function Zc(e, t, r) {
  Ie[Ne++] = st, Ie[Ne++] = ot, Ie[Ne++] = Xt, Xt = e;
  var n = st;
  e = ot;
  var i = 32 - qe(n) - 1;
  n &= ~(1 << i), r += 1;
  var s = 32 - qe(t) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (n & (1 << o) - 1).toString(32), n >>= o, i -= o, st = 1 << 32 - qe(t) + i | r << i | n, ot = s + e;
  } else st = 1 << s | r << i | n, ot = e;
}
function Na(e) {
  e.return !== null && (Bt(e, 1), Zc(e, 1, 0));
}
function $a(e) {
  for (; e === qi; ) qi = Sr[--br], Sr[br] = null, Gi = Sr[--br], Sr[br] = null;
  for (; e === Xt; ) Xt = Ie[--Ne], Ie[Ne] = null, ot = Ie[--Ne], Ie[Ne] = null, st = Ie[--Ne], Ie[Ne] = null;
}
var Re = null, Oe = null, W = !1, Ke = null;
function ed(e, t) {
  var r = $e(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function Hl(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Re = e, Oe = Tt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Re = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Xt !== null ? { id: st, overflow: ot } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = $e(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Re = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bo(e) {
  if (W) {
    var t = Oe;
    if (t) {
      var r = t;
      if (!Hl(e, t)) {
        if (zo(e)) throw Error(k(418));
        t = Tt(r.nextSibling);
        var n = Re;
        t && Hl(e, t) ? ed(n, r) : (e.flags = e.flags & -4097 | 2, W = !1, Re = e);
      }
    } else {
      if (zo(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, W = !1, Re = e;
    }
  }
}
function Kl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Re = e;
}
function di(e) {
  if (e !== Re) return !1;
  if (!W) return Kl(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps)), t && (t = Oe)) {
    if (zo(e)) throw td(), Error(k(418));
    for (; t; ) ed(e, t), t = Tt(t.nextSibling);
  }
  if (Kl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Oe = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = Re ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function td() {
  for (var e = Oe; e; ) e = Tt(e.nextSibling);
}
function Ur() {
  Oe = Re = null, W = !1;
}
function La(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
var fp = ht.ReactCurrentBatchConfig;
function Zr(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(k(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(k(147, e));
      var i = n, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
        var a = i.refs;
        o === null ? delete a[s] : a[s] = o;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!r._owner) throw Error(k(290, e));
  }
  return e;
}
function hi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ql(e) {
  var t = e._init;
  return t(e._payload);
}
function rd(e) {
  function t(f, d) {
    if (e) {
      var g = f.deletions;
      g === null ? (f.deletions = [d], f.flags |= 16) : g.push(d);
    }
  }
  function r(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), d = d.sibling;
    return null;
  }
  function n(f, d) {
    for (f = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
    return f;
  }
  function i(f, d) {
    return f = Pt(f, d), f.index = 0, f.sibling = null, f;
  }
  function s(f, d, g) {
    return f.index = g, e ? (g = f.alternate, g !== null ? (g = g.index, g < d ? (f.flags |= 2, d) : g) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, d, g, w) {
    return d === null || d.tag !== 6 ? (d = ro(g, f.mode, w), d.return = f, d) : (d = i(d, g), d.return = f, d);
  }
  function l(f, d, g, w) {
    var x = g.type;
    return x === mr ? c(f, d, g.props.children, w, g.key) : d !== null && (d.elementType === x || typeof x == "object" && x !== null && x.$$typeof === gt && ql(x) === d.type) ? (w = i(d, g.props), w.ref = Zr(f, d, g), w.return = f, w) : (w = $i(g.type, g.key, g.props, null, f.mode, w), w.ref = Zr(f, d, g), w.return = f, w);
  }
  function u(f, d, g, w) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== g.containerInfo || d.stateNode.implementation !== g.implementation ? (d = no(g, f.mode, w), d.return = f, d) : (d = i(d, g.children || []), d.return = f, d);
  }
  function c(f, d, g, w, x) {
    return d === null || d.tag !== 7 ? (d = Qt(g, f.mode, w, x), d.return = f, d) : (d = i(d, g), d.return = f, d);
  }
  function p(f, d, g) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = ro("" + d, f.mode, g), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ti:
          return g = $i(d.type, d.key, d.props, null, f.mode, g), g.ref = Zr(f, null, d), g.return = f, g;
        case gr:
          return d = no(d, f.mode, g), d.return = f, d;
        case gt:
          var w = d._init;
          return p(f, w(d._payload), g);
      }
      if (sn(d) || Gr(d)) return d = Qt(d, f.mode, g, null), d.return = f, d;
      hi(f, d);
    }
    return null;
  }
  function h(f, d, g, w) {
    var x = d !== null ? d.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return x !== null ? null : a(f, d, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ti:
          return g.key === x ? l(f, d, g, w) : null;
        case gr:
          return g.key === x ? u(f, d, g, w) : null;
        case gt:
          return x = g._init, h(
            f,
            d,
            x(g._payload),
            w
          );
      }
      if (sn(g) || Gr(g)) return x !== null ? null : c(f, d, g, w, null);
      hi(f, g);
    }
    return null;
  }
  function m(f, d, g, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(g) || null, a(d, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ti:
          return f = f.get(w.key === null ? g : w.key) || null, l(d, f, w, x);
        case gr:
          return f = f.get(w.key === null ? g : w.key) || null, u(d, f, w, x);
        case gt:
          var S = w._init;
          return m(f, d, g, S(w._payload), x);
      }
      if (sn(w) || Gr(w)) return f = f.get(g) || null, c(d, f, w, x, null);
      hi(d, w);
    }
    return null;
  }
  function v(f, d, g, w) {
    for (var x = null, S = null, T = d, E = d = 0, I = null; T !== null && E < g.length; E++) {
      T.index > E ? (I = T, T = null) : I = T.sibling;
      var P = h(f, T, g[E], w);
      if (P === null) {
        T === null && (T = I);
        break;
      }
      e && T && P.alternate === null && t(f, T), d = s(P, d, E), S === null ? x = P : S.sibling = P, S = P, T = I;
    }
    if (E === g.length) return r(f, T), W && Bt(f, E), x;
    if (T === null) {
      for (; E < g.length; E++) T = p(f, g[E], w), T !== null && (d = s(T, d, E), S === null ? x = T : S.sibling = T, S = T);
      return W && Bt(f, E), x;
    }
    for (T = n(f, T); E < g.length; E++) I = m(T, f, E, g[E], w), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? E : I.key), d = s(I, d, E), S === null ? x = I : S.sibling = I, S = I);
    return e && T.forEach(function(q) {
      return t(f, q);
    }), W && Bt(f, E), x;
  }
  function y(f, d, g, w) {
    var x = Gr(g);
    if (typeof x != "function") throw Error(k(150));
    if (g = x.call(g), g == null) throw Error(k(151));
    for (var S = x = null, T = d, E = d = 0, I = null, P = g.next(); T !== null && !P.done; E++, P = g.next()) {
      T.index > E ? (I = T, T = null) : I = T.sibling;
      var q = h(f, T, P.value, w);
      if (q === null) {
        T === null && (T = I);
        break;
      }
      e && T && q.alternate === null && t(f, T), d = s(q, d, E), S === null ? x = q : S.sibling = q, S = q, T = I;
    }
    if (P.done) return r(
      f,
      T
    ), W && Bt(f, E), x;
    if (T === null) {
      for (; !P.done; E++, P = g.next()) P = p(f, P.value, w), P !== null && (d = s(P, d, E), S === null ? x = P : S.sibling = P, S = P);
      return W && Bt(f, E), x;
    }
    for (T = n(f, T); !P.done; E++, P = g.next()) P = m(T, f, E, P.value, w), P !== null && (e && P.alternate !== null && T.delete(P.key === null ? E : P.key), d = s(P, d, E), S === null ? x = P : S.sibling = P, S = P);
    return e && T.forEach(function(tt) {
      return t(f, tt);
    }), W && Bt(f, E), x;
  }
  function _(f, d, g, w) {
    if (typeof g == "object" && g !== null && g.type === mr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ti:
          e: {
            for (var x = g.key, S = d; S !== null; ) {
              if (S.key === x) {
                if (x = g.type, x === mr) {
                  if (S.tag === 7) {
                    r(f, S.sibling), d = i(S, g.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (S.elementType === x || typeof x == "object" && x !== null && x.$$typeof === gt && ql(x) === S.type) {
                  r(f, S.sibling), d = i(S, g.props), d.ref = Zr(f, S, g), d.return = f, f = d;
                  break e;
                }
                r(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            g.type === mr ? (d = Qt(g.props.children, f.mode, w, g.key), d.return = f, f = d) : (w = $i(g.type, g.key, g.props, null, f.mode, w), w.ref = Zr(f, d, g), w.return = f, f = w);
          }
          return o(f);
        case gr:
          e: {
            for (S = g.key; d !== null; ) {
              if (d.key === S) if (d.tag === 4 && d.stateNode.containerInfo === g.containerInfo && d.stateNode.implementation === g.implementation) {
                r(f, d.sibling), d = i(d, g.children || []), d.return = f, f = d;
                break e;
              } else {
                r(f, d);
                break;
              }
              else t(f, d);
              d = d.sibling;
            }
            d = no(g, f.mode, w), d.return = f, f = d;
          }
          return o(f);
        case gt:
          return S = g._init, _(f, d, S(g._payload), w);
      }
      if (sn(g)) return v(f, d, g, w);
      if (Gr(g)) return y(f, d, g, w);
      hi(f, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, d !== null && d.tag === 6 ? (r(f, d.sibling), d = i(d, g), d.return = f, f = d) : (r(f, d), d = ro(g, f.mode, w), d.return = f, f = d), o(f)) : r(f, d);
  }
  return _;
}
var Dr = rd(!0), nd = rd(!1), Ji = Nt(null), Qi = null, xr = null, Ua = null;
function Da() {
  Ua = xr = Qi = null;
}
function za(e) {
  var t = Ji.current;
  F(Ji), e._currentValue = t;
}
function Mo(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
    e = e.return;
  }
}
function Ar(e, t) {
  Qi = e, Ua = xr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0), e.firstContext = null);
}
function Ue(e) {
  var t = e._currentValue;
  if (Ua !== e) if (e = { context: e, memoizedValue: t, next: null }, xr === null) {
    if (Qi === null) throw Error(k(308));
    xr = e, Qi.dependencies = { lanes: 0, firstContext: e };
  } else xr = xr.next = e;
  return t;
}
var Kt = null;
function Ba(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
function id(e, t, r, n) {
  var i = t.interleaved;
  return i === null ? (r.next = r, Ba(t)) : (r.next = i.next, i.next = r), t.interleaved = r, ct(e, n);
}
function ct(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var mt = !1;
function Ma(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function sd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function at(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ct(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (n = n.shared, U & 2) {
    var i = n.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, ct(e, r);
  }
  return i = n.interleaved, i === null ? (t.next = t, Ba(n)) : (t.next = i.next, i.next = t), n.interleaved = t, ct(e, r);
}
function Ri(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ta(e, r);
  }
}
function Gl(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var i = null, s = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var o = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        s === null ? i = s = o : s = s.next = o, r = r.next;
      } while (r !== null);
      s === null ? i = s = t : s = s.next = t;
    } else i = s = t;
    r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function Yi(e, t, r, n) {
  var i = e.updateQueue;
  mt = !1;
  var s = i.firstBaseUpdate, o = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, o === null ? s = u : o.next = u, o = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (s !== null) {
    var p = i.baseState;
    o = 0, c = u = l = null, a = s;
    do {
      var h = a.lane, m = a.eventTime;
      if ((n & h) === h) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var v = e, y = a;
          switch (h = t, m = r, y.tag) {
            case 1:
              if (v = y.payload, typeof v == "function") {
                p = v.call(m, p, h);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = y.payload, h = typeof v == "function" ? v.call(m, p, h) : v, h == null) break e;
              p = K({}, p, h);
              break e;
            case 2:
              mt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [a] : h.push(a));
      } else m = { eventTime: m, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = m, l = p) : c = c.next = m, o |= h;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        h = a, a = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = p), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    er |= o, e.lanes = o, e.memoizedState = p;
  }
}
function Jl(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var n = e[t], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = r, typeof i != "function") throw Error(k(191, i));
      i.call(n);
    }
  }
}
var Gn = {}, et = Nt(Gn), jn = Nt(Gn), An = Nt(Gn);
function qt(e) {
  if (e === Gn) throw Error(k(174));
  return e;
}
function Fa(e, t) {
  switch (B(An, t), B(jn, e), B(et, Gn), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ko(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ko(t, e);
  }
  F(et), B(et, t);
}
function zr() {
  F(et), F(jn), F(An);
}
function od(e) {
  qt(An.current);
  var t = qt(et.current), r = ko(t, e.type);
  t !== r && (B(jn, e), B(et, r));
}
function Wa(e) {
  jn.current === e && (F(et), F(jn));
}
var V = Nt(0);
function Xi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Qs = [];
function Va() {
  for (var e = 0; e < Qs.length; e++) Qs[e]._workInProgressVersionPrimary = null;
  Qs.length = 0;
}
var Pi = ht.ReactCurrentDispatcher, Ys = ht.ReactCurrentBatchConfig, Zt = 0, H = null, re = null, se = null, Zi = !1, pn = !1, In = 0, pp = 0;
function he() {
  throw Error(k(321));
}
function Ha(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!Je(e[r], t[r])) return !1;
  return !0;
}
function Ka(e, t, r, n, i, s) {
  if (Zt = s, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pi.current = e === null || e.memoizedState === null ? yp : wp, e = r(n, i), pn) {
    s = 0;
    do {
      if (pn = !1, In = 0, 25 <= s) throw Error(k(301));
      s += 1, se = re = null, t.updateQueue = null, Pi.current = _p, e = r(n, i);
    } while (pn);
  }
  if (Pi.current = es, t = re !== null && re.next !== null, Zt = 0, se = re = H = null, Zi = !1, t) throw Error(k(300));
  return e;
}
function qa() {
  var e = In !== 0;
  return In = 0, e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? H.memoizedState = se = e : se = se.next = e, se;
}
function De() {
  if (re === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? H.memoizedState : se.next;
  if (t !== null) se = t, re = e;
  else {
    if (e === null) throw Error(k(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, se === null ? H.memoizedState = se = e : se = se.next = e;
  }
  return se;
}
function Nn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xs(e) {
  var t = De(), r = t.queue;
  if (r === null) throw Error(k(311));
  r.lastRenderedReducer = e;
  var n = re, i = n.baseQueue, s = r.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = s.next, s.next = o;
    }
    n.baseQueue = i = s, r.pending = null;
  }
  if (i !== null) {
    s = i.next, n = n.baseState;
    var a = o = null, l = null, u = s;
    do {
      var c = u.lane;
      if ((Zt & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = p, o = n) : l = l.next = p, H.lanes |= c, er |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? o = n : l.next = a, Je(n, t.memoizedState) || (ke = !0), t.memoizedState = n, t.baseState = o, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, H.lanes |= s, er |= s, i = i.next;
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Zs(e) {
  var t = De(), r = t.queue;
  if (r === null) throw Error(k(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, i = r.pending, s = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = i = i.next;
    do
      s = e(s, o.action), o = o.next;
    while (o !== i);
    Je(s, t.memoizedState) || (ke = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), r.lastRenderedState = s;
  }
  return [s, n];
}
function ad() {
}
function ld(e, t) {
  var r = H, n = De(), i = t(), s = !Je(n.memoizedState, i);
  if (s && (n.memoizedState = i, ke = !0), n = n.queue, Ga(dd.bind(null, r, n, e), [e]), n.getSnapshot !== t || s || se !== null && se.memoizedState.tag & 1) {
    if (r.flags |= 2048, $n(9, cd.bind(null, r, n, i, t), void 0, null), oe === null) throw Error(k(349));
    Zt & 30 || ud(r, t, i);
  }
  return i;
}
function ud(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function cd(e, t, r, n) {
  t.value = r, t.getSnapshot = n, hd(t) && fd(e);
}
function dd(e, t, r) {
  return r(function() {
    hd(t) && fd(e);
  });
}
function hd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Je(e, r);
  } catch {
    return !0;
  }
}
function fd(e) {
  var t = ct(e, 1);
  t !== null && Ge(t, e, 1, -1);
}
function Ql(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nn, lastRenderedState: e }, t.queue = e, e = e.dispatch = vp.bind(null, H, e), [t.memoizedState, e];
}
function $n(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function pd() {
  return De().memoizedState;
}
function ji(e, t, r, n) {
  var i = Ye();
  H.flags |= e, i.memoizedState = $n(1 | t, r, void 0, n === void 0 ? null : n);
}
function ms(e, t, r, n) {
  var i = De();
  n = n === void 0 ? null : n;
  var s = void 0;
  if (re !== null) {
    var o = re.memoizedState;
    if (s = o.destroy, n !== null && Ha(n, o.deps)) {
      i.memoizedState = $n(t, r, s, n);
      return;
    }
  }
  H.flags |= e, i.memoizedState = $n(1 | t, r, s, n);
}
function Yl(e, t) {
  return ji(8390656, 8, e, t);
}
function Ga(e, t) {
  return ms(2048, 8, e, t);
}
function gd(e, t) {
  return ms(4, 2, e, t);
}
function md(e, t) {
  return ms(4, 4, e, t);
}
function vd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function yd(e, t, r) {
  return r = r != null ? r.concat([e]) : null, ms(4, 4, vd.bind(null, t, e), r);
}
function Ja() {
}
function wd(e, t) {
  var r = De();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Ha(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function _d(e, t) {
  var r = De();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Ha(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function kd(e, t, r) {
  return Zt & 21 ? (Je(r, t) || (r = Tc(), H.lanes |= r, er |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ke = !0), e.memoizedState = r);
}
function gp(e, t) {
  var r = D;
  D = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Ys.transition;
  Ys.transition = {};
  try {
    e(!1), t();
  } finally {
    D = r, Ys.transition = n;
  }
}
function Sd() {
  return De().memoizedState;
}
function mp(e, t, r) {
  var n = Rt(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, bd(e)) xd(t, r);
  else if (r = id(e, t, r, n), r !== null) {
    var i = ve();
    Ge(r, e, n, i), Ed(r, t, n);
  }
}
function vp(e, t, r) {
  var n = Rt(e), i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (bd(e)) xd(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var o = t.lastRenderedState, a = s(o, r);
      if (i.hasEagerState = !0, i.eagerState = a, Je(a, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, Ba(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    r = id(e, t, i, n), r !== null && (i = ve(), Ge(r, e, n, i), Ed(r, t, n));
  }
}
function bd(e) {
  var t = e.alternate;
  return e === H || t !== null && t === H;
}
function xd(e, t) {
  pn = Zi = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function Ed(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ta(e, r);
  }
}
var es = { readContext: Ue, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, yp = { readContext: Ue, useCallback: function(e, t) {
  return Ye().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ue, useEffect: Yl, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, ji(
    4194308,
    4,
    vd.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return ji(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ji(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = Ye();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = Ye();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = mp.bind(null, H, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = Ye();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ql, useDebugValue: Ja, useDeferredValue: function(e) {
  return Ye().memoizedState = e;
}, useTransition: function() {
  var e = Ql(!1), t = e[0];
  return e = gp.bind(null, e[1]), Ye().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = H, i = Ye();
  if (W) {
    if (r === void 0) throw Error(k(407));
    r = r();
  } else {
    if (r = t(), oe === null) throw Error(k(349));
    Zt & 30 || ud(n, t, r);
  }
  i.memoizedState = r;
  var s = { value: r, getSnapshot: t };
  return i.queue = s, Yl(dd.bind(
    null,
    n,
    s,
    e
  ), [e]), n.flags |= 2048, $n(9, cd.bind(null, n, s, r, t), void 0, null), r;
}, useId: function() {
  var e = Ye(), t = oe.identifierPrefix;
  if (W) {
    var r = ot, n = st;
    r = (n & ~(1 << 32 - qe(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = In++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = pp++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wp = {
  readContext: Ue,
  useCallback: wd,
  useContext: Ue,
  useEffect: Ga,
  useImperativeHandle: yd,
  useInsertionEffect: gd,
  useLayoutEffect: md,
  useMemo: _d,
  useReducer: Xs,
  useRef: pd,
  useState: function() {
    return Xs(Nn);
  },
  useDebugValue: Ja,
  useDeferredValue: function(e) {
    var t = De();
    return kd(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = Xs(Nn)[0], t = De().memoizedState;
    return [e, t];
  },
  useMutableSource: ad,
  useSyncExternalStore: ld,
  useId: Sd,
  unstable_isNewReconciler: !1
}, _p = { readContext: Ue, useCallback: wd, useContext: Ue, useEffect: Ga, useImperativeHandle: yd, useInsertionEffect: gd, useLayoutEffect: md, useMemo: _d, useReducer: Zs, useRef: pd, useState: function() {
  return Zs(Nn);
}, useDebugValue: Ja, useDeferredValue: function(e) {
  var t = De();
  return re === null ? t.memoizedState = e : kd(t, re.memoizedState, e);
}, useTransition: function() {
  var e = Zs(Nn)[0], t = De().memoizedState;
  return [e, t];
}, useMutableSource: ad, useSyncExternalStore: ld, useId: Sd, unstable_isNewReconciler: !1 };
function Fe(e, t) {
  if (e && e.defaultProps) {
    t = K({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Fo(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : K({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var vs = { isMounted: function(e) {
  return (e = e._reactInternals) ? nr(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = ve(), i = Rt(e), s = at(n, i);
  s.payload = t, r != null && (s.callback = r), t = Ct(e, s, i), t !== null && (Ge(t, e, i, n), Ri(t, e, i));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = ve(), i = Rt(e), s = at(n, i);
  s.tag = 1, s.payload = t, r != null && (s.callback = r), t = Ct(e, s, i), t !== null && (Ge(t, e, i, n), Ri(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = ve(), n = Rt(e), i = at(r, n);
  i.tag = 2, t != null && (i.callback = t), t = Ct(e, i, n), t !== null && (Ge(t, e, n, r), Ri(t, e, n));
} };
function Xl(e, t, r, n, i, s, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Cn(r, n) || !Cn(i, s) : !0;
}
function Td(e, t, r) {
  var n = !1, i = At, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Ue(s) : (i = be(t) ? Yt : ge.current, n = t.contextTypes, s = (n = n != null) ? Lr(e, i) : At), t = new t(r, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vs, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Zl(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && vs.enqueueReplaceState(t, t.state, null);
}
function Wo(e, t, r, n) {
  var i = e.stateNode;
  i.props = r, i.state = e.memoizedState, i.refs = {}, Ma(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = Ue(s) : (s = be(t) ? Yt : ge.current, i.context = Lr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Fo(e, t, s, r), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && vs.enqueueReplaceState(i, i.state, null), Yi(e, r, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Br(e, t) {
  try {
    var r = "", n = t;
    do
      r += qh(n), n = n.return;
    while (n);
    var i = r;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function eo(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Vo(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var kp = typeof WeakMap == "function" ? WeakMap : Map;
function Cd(e, t, r) {
  r = at(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    rs || (rs = !0, ea = n), Vo(e, t);
  }, r;
}
function Od(e, t, r) {
  r = at(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      Vo(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (r.callback = function() {
    Vo(e, t), typeof n != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), r;
}
function eu(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new kp();
    var i = /* @__PURE__ */ new Set();
    n.set(t, i);
  } else i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
  i.has(r) || (i.add(r), e = $p.bind(null, e, t, r), t.then(e, e));
}
function tu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ru(e, t, r, n, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = at(-1, 1), t.tag = 2, Ct(r, t, 1))), r.lanes |= 1), e);
}
var Sp = ht.ReactCurrentOwner, ke = !1;
function me(e, t, r, n) {
  t.child = e === null ? nd(t, null, r, n) : Dr(t, e.child, r, n);
}
function nu(e, t, r, n, i) {
  r = r.render;
  var s = t.ref;
  return Ar(t, i), n = Ka(e, t, r, n, s, i), r = qa(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, dt(e, t, i)) : (W && r && Na(t), t.flags |= 1, me(e, t, n, i), t.child);
}
function iu(e, t, r, n, i) {
  if (e === null) {
    var s = r.type;
    return typeof s == "function" && !nl(s) && s.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = s, Rd(e, t, s, n, i)) : (e = $i(r.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Cn, r(o, n) && e.ref === t.ref) return dt(e, t, i);
  }
  return t.flags |= 1, e = Pt(s, n), e.ref = t.ref, e.return = t, t.child = e;
}
function Rd(e, t, r, n, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Cn(s, n) && e.ref === t.ref) if (ke = !1, t.pendingProps = n = s, (e.lanes & i) !== 0) e.flags & 131072 && (ke = !0);
    else return t.lanes = e.lanes, dt(e, t, i);
  }
  return Ho(e, t, r, n, i);
}
function Pd(e, t, r) {
  var n = t.pendingProps, i = n.children, s = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, B(Tr, Te), Te |= r;
  else {
    if (!(r & 1073741824)) return e = s !== null ? s.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, B(Tr, Te), Te |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = s !== null ? s.baseLanes : r, B(Tr, Te), Te |= n;
  }
  else s !== null ? (n = s.baseLanes | r, t.memoizedState = null) : n = r, B(Tr, Te), Te |= n;
  return me(e, t, i, r), t.child;
}
function jd(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function Ho(e, t, r, n, i) {
  var s = be(r) ? Yt : ge.current;
  return s = Lr(t, s), Ar(t, i), r = Ka(e, t, r, n, s, i), n = qa(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, dt(e, t, i)) : (W && n && Na(t), t.flags |= 1, me(e, t, r, i), t.child);
}
function su(e, t, r, n, i) {
  if (be(r)) {
    var s = !0;
    Ki(t);
  } else s = !1;
  if (Ar(t, i), t.stateNode === null) Ai(e, t), Td(t, r, n), Wo(t, r, n, i), n = !0;
  else if (e === null) {
    var o = t.stateNode, a = t.memoizedProps;
    o.props = a;
    var l = o.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Ue(u) : (u = be(r) ? Yt : ge.current, u = Lr(t, u));
    var c = r.getDerivedStateFromProps, p = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== u) && Zl(t, o, n, u), mt = !1;
    var h = t.memoizedState;
    o.state = h, Yi(t, n, o, i), l = t.memoizedState, a !== n || h !== l || Se.current || mt ? (typeof c == "function" && (Fo(t, r, c, n), l = t.memoizedState), (a = mt || Xl(t, r, a, n, h, l, u)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), o.props = n, o.state = l, o.context = u, n = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    o = t.stateNode, sd(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Fe(t.type, a), o.props = u, p = t.pendingProps, h = o.context, l = r.contextType, typeof l == "object" && l !== null ? l = Ue(l) : (l = be(r) ? Yt : ge.current, l = Lr(t, l));
    var m = r.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== p || h !== l) && Zl(t, o, n, l), mt = !1, h = t.memoizedState, o.state = h, Yi(t, n, o, i);
    var v = t.memoizedState;
    a !== p || h !== v || Se.current || mt ? (typeof m == "function" && (Fo(t, r, m, n), v = t.memoizedState), (u = mt || Xl(t, r, u, n, h, v, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, v, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, v, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), o.props = n, o.state = v, o.context = l, n = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return Ko(e, t, r, n, s, i);
}
function Ko(e, t, r, n, i, s) {
  jd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return i && Vl(t, r, !1), dt(e, t, s);
  n = t.stateNode, Sp.current = t;
  var a = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && o ? (t.child = Dr(t, e.child, null, s), t.child = Dr(t, null, a, s)) : me(e, t, a, s), t.memoizedState = n.state, i && Vl(t, r, !0), t.child;
}
function Ad(e) {
  var t = e.stateNode;
  t.pendingContext ? Wl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wl(e, t.context, !1), Fa(e, t.containerInfo);
}
function ou(e, t, r, n, i) {
  return Ur(), La(i), t.flags |= 256, me(e, t, r, n), t.child;
}
var qo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Go(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Id(e, t, r) {
  var n = t.pendingProps, i = V.current, s = !1, o = (t.flags & 128) !== 0, a;
  if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), B(V, i & 1), e === null)
    return Bo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = n.children, e = n.fallback, s ? (n = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(n & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = _s(o, n, 0, null), e = Qt(e, n, r, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Go(r), t.memoizedState = qo, e) : Qa(t, o));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return bp(e, t, o, n, a, i, r);
  if (s) {
    s = n.fallback, o = t.mode, i = e.child, a = i.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(o & 1) && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = Pt(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = Pt(a, s) : (s = Qt(s, o, r, null), s.flags |= 2), s.return = t, n.return = t, n.sibling = s, t.child = n, n = s, s = t.child, o = e.child.memoizedState, o = o === null ? Go(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~r, t.memoizedState = qo, n;
  }
  return s = e.child, e = s.sibling, n = Pt(s, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Qa(e, t) {
  return t = _s({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function fi(e, t, r, n) {
  return n !== null && La(n), Dr(t, e.child, null, r), e = Qa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function bp(e, t, r, n, i, s, o) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = eo(Error(k(422))), fi(e, t, o, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = n.fallback, i = t.mode, n = _s({ mode: "visible", children: n.children }, i, 0, null), s = Qt(s, i, o, null), s.flags |= 2, n.return = t, s.return = t, n.sibling = s, t.child = n, t.mode & 1 && Dr(t, e.child, null, o), t.child.memoizedState = Go(o), t.memoizedState = qo, s);
  if (!(t.mode & 1)) return fi(e, t, o, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var a = n.dgst;
    return n = a, s = Error(k(419)), n = eo(s, n, void 0), fi(e, t, o, n);
  }
  if (a = (o & e.childLanes) !== 0, ke || a) {
    if (n = oe, n !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (n.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, ct(e, i), Ge(n, e, i, -1));
    }
    return rl(), n = eo(Error(k(421))), fi(e, t, o, n);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Lp.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Oe = Tt(i.nextSibling), Re = t, W = !0, Ke = null, e !== null && (Ie[Ne++] = st, Ie[Ne++] = ot, Ie[Ne++] = Xt, st = e.id, ot = e.overflow, Xt = t), t = Qa(t, n.children), t.flags |= 4096, t);
}
function au(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Mo(e.return, t, r);
}
function to(e, t, r, n, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = r, s.tailMode = i);
}
function Nd(e, t, r) {
  var n = t.pendingProps, i = n.revealOrder, s = n.tail;
  if (me(e, t, n.children, r), n = V.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && au(e, r, t);
      else if (e.tag === 19) au(e, r, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    n &= 1;
  }
  if (B(V, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (r = t.child, i = null; r !== null; ) e = r.alternate, e !== null && Xi(e) === null && (i = r), r = r.sibling;
      r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), to(t, !1, i, r, s);
      break;
    case "backwards":
      for (r = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Xi(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = r, r = i, i = e;
      }
      to(t, !0, r, null, s);
      break;
    case "together":
      to(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ai(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function dt(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), er |= t.lanes, !(r & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, r = Pt(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Pt(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function xp(e, t, r) {
  switch (t.tag) {
    case 3:
      Ad(t), Ur();
      break;
    case 5:
      od(t);
      break;
    case 1:
      be(t.type) && Ki(t);
      break;
    case 4:
      Fa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, i = t.memoizedProps.value;
      B(Ji, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (B(V, V.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Id(e, t, r) : (B(V, V.current & 1), e = dt(e, t, r), e !== null ? e.sibling : null);
      B(V, V.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n) return Nd(e, t, r);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), B(V, V.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Pd(e, t, r);
  }
  return dt(e, t, r);
}
var $d, Jo, Ld, Ud;
$d = function(e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
Jo = function() {
};
Ld = function(e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    e = t.stateNode, qt(et.current);
    var s = null;
    switch (r) {
      case "input":
        i = vo(e, i), n = vo(e, n), s = [];
        break;
      case "select":
        i = K({}, i, { value: void 0 }), n = K({}, n, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = _o(e, i), n = _o(e, n), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Vi);
    }
    So(r, n);
    var o;
    r = null;
    for (u in i) if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var a = i[u];
      for (o in a) a.hasOwnProperty(o) && (r || (r = {}), r[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (_n.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (a = i?.[u], n.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (r || (r = {}), r[o] = l[o]);
      } else r || (s || (s = []), s.push(
        u,
        r
      )), r = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (_n.hasOwnProperty(u) ? (l != null && u === "onScroll" && M("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    r && (s = s || []).push("style", r);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ud = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function en(e, t) {
  if (!W) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? e.tail = null : r.sibling = null;
      break;
    case "collapsed":
      r = e.tail;
      for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
      n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
  }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t) for (var i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function Ep(e, t, r) {
  var n = t.pendingProps;
  switch ($a(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return fe(t), null;
    case 1:
      return be(t.type) && Hi(), fe(t), null;
    case 3:
      return n = t.stateNode, zr(), F(Se), F(ge), Va(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (di(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ke !== null && (na(Ke), Ke = null))), Jo(e, t), fe(t), null;
    case 5:
      Wa(t);
      var i = qt(An.current);
      if (r = t.type, e !== null && t.stateNode != null) Ld(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(k(166));
          return fe(t), null;
        }
        if (e = qt(et.current), di(t)) {
          n = t.stateNode, r = t.type;
          var s = t.memoizedProps;
          switch (n[Xe] = t, n[Pn] = s, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              M("cancel", n), M("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < an.length; i++) M(an[i], n);
              break;
            case "source":
              M("error", n);
              break;
            case "img":
            case "image":
            case "link":
              M(
                "error",
                n
              ), M("load", n);
              break;
            case "details":
              M("toggle", n);
              break;
            case "input":
              ml(n, s), M("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!s.multiple }, M("invalid", n);
              break;
            case "textarea":
              yl(n, s), M("invalid", n);
          }
          So(r, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var a = s[o];
            o === "children" ? typeof a == "string" ? n.textContent !== a && (s.suppressHydrationWarning !== !0 && ci(n.textContent, a, e), i = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && ci(
              n.textContent,
              a,
              e
            ), i = ["children", "" + a]) : _n.hasOwnProperty(o) && a != null && o === "onScroll" && M("scroll", n);
          }
          switch (r) {
            case "input":
              ri(n), vl(n, s, !0);
              break;
            case "textarea":
              ri(n), wl(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (n.onclick = Vi);
          }
          n = i, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = dc(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = o.createElement(r, { is: n.is }) : (e = o.createElement(r), r === "select" && (o = e, n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : e = o.createElementNS(e, r), e[Xe] = t, e[Pn] = n, $d(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = bo(r, n), r) {
              case "dialog":
                M("cancel", e), M("close", e), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < an.length; i++) M(an[i], e);
                i = n;
                break;
              case "source":
                M("error", e), i = n;
                break;
              case "img":
              case "image":
              case "link":
                M(
                  "error",
                  e
                ), M("load", e), i = n;
                break;
              case "details":
                M("toggle", e), i = n;
                break;
              case "input":
                ml(e, n), i = vo(e, n), M("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, i = K({}, n, { value: void 0 }), M("invalid", e);
                break;
              case "textarea":
                yl(e, n), i = _o(e, n), M("invalid", e);
                break;
              default:
                i = n;
            }
            So(r, i), a = i;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? pc(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && hc(e, l)) : s === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && kn(e, l) : typeof l == "number" && kn(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (_n.hasOwnProperty(s) ? l != null && s === "onScroll" && M("scroll", e) : l != null && _a(e, s, l, o));
            }
            switch (r) {
              case "input":
                ri(e), vl(e, n, !1);
                break;
              case "textarea":
                ri(e), wl(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + jt(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, s = n.value, s != null ? Or(e, !!n.multiple, s, !1) : n.defaultValue != null && Or(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Vi);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) Ud(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(k(166));
        if (r = qt(An.current), qt(et.current), di(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[Xe] = t, (s = n.nodeValue !== r) && (e = Re, e !== null)) switch (e.tag) {
            case 3:
              ci(n.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ci(n.nodeValue, r, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Xe] = t, t.stateNode = n;
      }
      return fe(t), null;
    case 13:
      if (F(V), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Oe !== null && t.mode & 1 && !(t.flags & 128)) td(), Ur(), t.flags |= 98560, s = !1;
        else if (s = di(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(k(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(k(317));
            s[Xe] = t;
          } else Ur(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), s = !1;
        } else Ke !== null && (na(Ke), Ke = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? ne === 0 && (ne = 3) : rl())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return zr(), Jo(e, t), e === null && On(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return za(t.type._context), fe(t), null;
    case 17:
      return be(t.type) && Hi(), fe(t), null;
    case 19:
      if (F(V), s = t.memoizedState, s === null) return fe(t), null;
      if (n = (t.flags & 128) !== 0, o = s.rendering, o === null) if (n) en(s, !1);
      else {
        if (ne !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Xi(e), o !== null) {
            for (t.flags |= 128, en(s, !1), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) s = r, e = n, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return B(V, V.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && X() > Mr && (t.flags |= 128, n = !0, en(s, !1), t.lanes = 4194304);
      }
      else {
        if (!n) if (e = Xi(o), e !== null) {
          if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), en(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !W) return fe(t), null;
        } else 2 * X() - s.renderingStartTime > Mr && r !== 1073741824 && (t.flags |= 128, n = !0, en(s, !1), t.lanes = 4194304);
        s.isBackwards ? (o.sibling = t.child, t.child = o) : (r = s.last, r !== null ? r.sibling = o : t.child = o, s.last = o);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = X(), t.sibling = null, r = V.current, B(V, n ? r & 1 | 2 : r & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return tl(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Te & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Tp(e, t) {
  switch ($a(t), t.tag) {
    case 1:
      return be(t.type) && Hi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return zr(), F(Se), F(ge), Va(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wa(t), null;
    case 13:
      if (F(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        Ur();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return F(V), null;
    case 4:
      return zr(), null;
    case 10:
      return za(t.type._context), null;
    case 22:
    case 23:
      return tl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pi = !1, pe = !1, Cp = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function Er(e, t) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    J(e, t, n);
  }
  else r.current = null;
}
function Qo(e, t, r) {
  try {
    r();
  } catch (n) {
    J(e, t, n);
  }
}
var lu = !1;
function Op(e, t) {
  if (Io = Mi, e = Fc(), Ia(e)) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      r = (r = e.ownerDocument) && r.defaultView || window;
      var n = r.getSelection && r.getSelection();
      if (n && n.rangeCount !== 0) {
        r = n.anchorNode;
        var i = n.anchorOffset, s = n.focusNode;
        n = n.focusOffset;
        try {
          r.nodeType, s.nodeType;
        } catch {
          r = null;
          break e;
        }
        var o = 0, a = -1, l = -1, u = 0, c = 0, p = e, h = null;
        t: for (; ; ) {
          for (var m; p !== r || i !== 0 && p.nodeType !== 3 || (a = o + i), p !== s || n !== 0 && p.nodeType !== 3 || (l = o + n), p.nodeType === 3 && (o += p.nodeValue.length), (m = p.firstChild) !== null; )
            h = p, p = m;
          for (; ; ) {
            if (p === e) break t;
            if (h === r && ++u === i && (a = o), h === s && ++c === n && (l = o), (m = p.nextSibling) !== null) break;
            p = h, h = p.parentNode;
          }
          p = m;
        }
        r = a === -1 || l === -1 ? null : { start: a, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (No = { focusedElem: e, selectionRange: r }, Mi = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var y = v.memoizedProps, _ = v.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Fe(t.type, y), _);
            f.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(k(163));
      }
    } catch (w) {
      J(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return v = lu, lu = !1, v;
}
function gn(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && Qo(t, r, s);
      }
      i = i.next;
    } while (i !== n);
  }
}
function ys(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Yo(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Dd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Dd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xe], delete t[Pn], delete t[Uo], delete t[cp], delete t[dp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function zd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || zd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xo(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Vi));
  else if (n !== 4 && (e = e.child, e !== null)) for (Xo(e, t, r), e = e.sibling; e !== null; ) Xo(e, t, r), e = e.sibling;
}
function Zo(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null)) for (Zo(e, t, r), e = e.sibling; e !== null; ) Zo(e, t, r), e = e.sibling;
}
var ue = null, Ve = !1;
function pt(e, t, r) {
  for (r = r.child; r !== null; ) Bd(e, t, r), r = r.sibling;
}
function Bd(e, t, r) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function") try {
    Ze.onCommitFiberUnmount(cs, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      pe || Er(r, t);
    case 6:
      var n = ue, i = Ve;
      ue = null, pt(e, t, r), ue = n, Ve = i, ue !== null && (Ve ? (e = ue, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : ue.removeChild(r.stateNode));
      break;
    case 18:
      ue !== null && (Ve ? (e = ue, r = r.stateNode, e.nodeType === 8 ? Gs(e.parentNode, r) : e.nodeType === 1 && Gs(e, r), En(e)) : Gs(ue, r.stateNode));
      break;
    case 4:
      n = ue, i = Ve, ue = r.stateNode.containerInfo, Ve = !0, pt(e, t, r), ue = n, Ve = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && Qo(r, t, o), i = i.next;
        } while (i !== n);
      }
      pt(e, t, r);
      break;
    case 1:
      if (!pe && (Er(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (a) {
        J(r, t, a);
      }
      pt(e, t, r);
      break;
    case 21:
      pt(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (pe = (n = pe) || r.memoizedState !== null, pt(e, t, r), pe = n) : pt(e, t, r);
      break;
    default:
      pt(e, t, r);
  }
}
function cu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Cp()), t.forEach(function(n) {
      var i = Up.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function Be(e, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var i = r[n];
    try {
      var s = e, o = t, a = o;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            ue = a.stateNode, Ve = !1;
            break e;
          case 3:
            ue = a.stateNode.containerInfo, Ve = !0;
            break e;
          case 4:
            ue = a.stateNode.containerInfo, Ve = !0;
            break e;
        }
        a = a.return;
      }
      if (ue === null) throw Error(k(160));
      Bd(s, o, i), ue = null, Ve = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      J(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Md(t, e), t = t.sibling;
}
function Md(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Be(t, e), Qe(e), n & 4) {
        try {
          gn(3, e, e.return), ys(3, e);
        } catch (y) {
          J(e, e.return, y);
        }
        try {
          gn(5, e, e.return);
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 1:
      Be(t, e), Qe(e), n & 512 && r !== null && Er(r, r.return);
      break;
    case 5:
      if (Be(t, e), Qe(e), n & 512 && r !== null && Er(r, r.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          kn(i, "");
        } catch (y) {
          J(e, e.return, y);
        }
      }
      if (n & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, o = r !== null ? r.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && uc(i, s), bo(a, o);
          var u = bo(a, s);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], p = l[o + 1];
            c === "style" ? pc(i, p) : c === "dangerouslySetInnerHTML" ? hc(i, p) : c === "children" ? kn(i, p) : _a(i, c, p, u);
          }
          switch (a) {
            case "input":
              yo(i, s);
              break;
            case "textarea":
              cc(i, s);
              break;
            case "select":
              var h = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var m = s.value;
              m != null ? Or(i, !!s.multiple, m, !1) : h !== !!s.multiple && (s.defaultValue != null ? Or(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Or(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[Pn] = s;
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Be(t, e), Qe(e), n & 4) {
        if (e.stateNode === null) throw Error(k(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Be(t, e), Qe(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        En(t.containerInfo);
      } catch (y) {
        J(e, e.return, y);
      }
      break;
    case 4:
      Be(t, e), Qe(e);
      break;
    case 13:
      Be(t, e), Qe(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Za = X())), n & 4 && cu(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (pe = (u = pe) || c, Be(t, e), pe = u) : Be(t, e), Qe(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (C = e, c = e.child; c !== null; ) {
          for (p = C = c; C !== null; ) {
            switch (h = C, m = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                gn(4, h, h.return);
                break;
              case 1:
                Er(h, h.return);
                var v = h.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  n = h, r = h.return;
                  try {
                    t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (y) {
                    J(n, r, y);
                  }
                }
                break;
              case 5:
                Er(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  hu(p);
                  continue;
                }
            }
            m !== null ? (m.return = h, C = m) : hu(p);
          }
          c = c.sibling;
        }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                i = p.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = p.stateNode, l = p.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = fc("display", o));
              } catch (y) {
                J(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (c === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (y) {
              J(e, e.return, y);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), p = p.return;
          }
          c === p && (c = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Be(t, e), Qe(e), n & 4 && cu(e);
      break;
    case 21:
      break;
    default:
      Be(
        t,
        e
      ), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (zd(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(k(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (kn(i, ""), n.flags &= -33);
          var s = uu(e);
          Zo(e, s, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo, a = uu(e);
          Xo(e, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (l) {
      J(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rp(e, t, r) {
  C = e, Fd(e);
}
function Fd(e, t, r) {
  for (var n = (e.mode & 1) !== 0; C !== null; ) {
    var i = C, s = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || pi;
      if (!o) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || pe;
        a = pi;
        var u = pe;
        if (pi = o, (pe = l) && !u) for (C = i; C !== null; ) o = C, l = o.child, o.tag === 22 && o.memoizedState !== null ? fu(i) : l !== null ? (l.return = o, C = l) : fu(i);
        for (; s !== null; ) C = s, Fd(s), s = s.sibling;
        C = i, pi = a, pe = u;
      }
      du(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, C = s) : du(e);
  }
}
function du(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || ys(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !pe) if (r === null) n.componentDidMount();
            else {
              var i = t.elementType === t.type ? r.memoizedProps : Fe(t.type, r.memoizedProps);
              n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Jl(t, s, n);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (r = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  r = t.child.stateNode;
                  break;
                case 1:
                  r = t.child.stateNode;
              }
              Jl(t, o, r);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (r === null && t.flags & 4) {
              r = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && r.focus();
                  break;
                case "img":
                  l.src && (r.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var p = c.dehydrated;
                  p !== null && En(p);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(k(163));
        }
        pe || t.flags & 512 && Yo(t);
      } catch (h) {
        J(t, t.return, h);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, C = r;
      break;
    }
    C = t.return;
  }
}
function hu(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, C = r;
      break;
    }
    C = t.return;
  }
}
function fu(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            ys(4, t);
          } catch (l) {
            J(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              J(t, i, l);
            }
          }
          var s = t.return;
          try {
            Yo(t);
          } catch (l) {
            J(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yo(t);
          } catch (l) {
            J(t, o, l);
          }
      }
    } catch (l) {
      J(t, t.return, l);
    }
    if (t === e) {
      C = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, C = a;
      break;
    }
    C = t.return;
  }
}
var Pp = Math.ceil, ts = ht.ReactCurrentDispatcher, Ya = ht.ReactCurrentOwner, Le = ht.ReactCurrentBatchConfig, U = 0, oe = null, ee = null, ce = 0, Te = 0, Tr = Nt(0), ne = 0, Ln = null, er = 0, ws = 0, Xa = 0, mn = null, _e = null, Za = 0, Mr = 1 / 0, rt = null, rs = !1, ea = null, Ot = null, gi = !1, St = null, ns = 0, vn = 0, ta = null, Ii = -1, Ni = 0;
function ve() {
  return U & 6 ? X() : Ii !== -1 ? Ii : Ii = X();
}
function Rt(e) {
  return e.mode & 1 ? U & 2 && ce !== 0 ? ce & -ce : fp.transition !== null ? (Ni === 0 && (Ni = Tc()), Ni) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ic(e.type)), e) : 1;
}
function Ge(e, t, r, n) {
  if (50 < vn) throw vn = 0, ta = null, Error(k(185));
  Hn(e, r, n), (!(U & 2) || e !== oe) && (e === oe && (!(U & 2) && (ws |= r), ne === 4 && wt(e, ce)), xe(e, n), r === 1 && U === 0 && !(t.mode & 1) && (Mr = X() + 500, gs && $t()));
}
function xe(e, t) {
  var r = e.callbackNode;
  ff(e, t);
  var n = Bi(e, e === oe ? ce : 0);
  if (n === 0) r !== null && Sl(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Sl(r), t === 1) e.tag === 0 ? hp(pu.bind(null, e)) : Xc(pu.bind(null, e)), lp(function() {
      !(U & 6) && $t();
    }), r = null;
    else {
      switch (Cc(n)) {
        case 1:
          r = Ea;
          break;
        case 4:
          r = xc;
          break;
        case 16:
          r = zi;
          break;
        case 536870912:
          r = Ec;
          break;
        default:
          r = zi;
      }
      r = Qd(r, Wd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Wd(e, t) {
  if (Ii = -1, Ni = 0, U & 6) throw Error(k(327));
  var r = e.callbackNode;
  if (Ir() && e.callbackNode !== r) return null;
  var n = Bi(e, e === oe ? ce : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = is(e, n);
  else {
    t = n;
    var i = U;
    U |= 2;
    var s = Hd();
    (oe !== e || ce !== t) && (rt = null, Mr = X() + 500, Jt(e, t));
    do
      try {
        Ip();
        break;
      } catch (a) {
        Vd(e, a);
      }
    while (!0);
    Da(), ts.current = s, U = i, ee !== null ? t = 0 : (oe = null, ce = 0, t = ne);
  }
  if (t !== 0) {
    if (t === 2 && (i = Oo(e), i !== 0 && (n = i, t = ra(e, i))), t === 1) throw r = Ln, Jt(e, 0), wt(e, n), xe(e, X()), r;
    if (t === 6) wt(e, n);
    else {
      if (i = e.current.alternate, !(n & 30) && !jp(i) && (t = is(e, n), t === 2 && (s = Oo(e), s !== 0 && (n = s, t = ra(e, s))), t === 1)) throw r = Ln, Jt(e, 0), wt(e, n), xe(e, X()), r;
      switch (e.finishedWork = i, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Mt(e, _e, rt);
          break;
        case 3:
          if (wt(e, n), (n & 130023424) === n && (t = Za + 500 - X(), 10 < t)) {
            if (Bi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & n) !== n) {
              ve(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Lo(Mt.bind(null, e, _e, rt), t);
            break;
          }
          Mt(e, _e, rt);
          break;
        case 4:
          if (wt(e, n), (n & 4194240) === n) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - qe(n);
            s = 1 << o, o = t[o], o > i && (i = o), n &= ~s;
          }
          if (n = i, n = X() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Pp(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = Lo(Mt.bind(null, e, _e, rt), n);
            break;
          }
          Mt(e, _e, rt);
          break;
        case 5:
          Mt(e, _e, rt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return xe(e, X()), e.callbackNode === r ? Wd.bind(null, e) : null;
}
function ra(e, t) {
  var r = mn;
  return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256), e = is(e, t), e !== 2 && (t = _e, _e = r, t !== null && na(t)), e;
}
function na(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function jp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var i = r[n], s = i.getSnapshot;
        i = i.value;
        try {
          if (!Je(s(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function wt(e, t) {
  for (t &= ~Xa, t &= ~ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - qe(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function pu(e) {
  if (U & 6) throw Error(k(327));
  Ir();
  var t = Bi(e, 0);
  if (!(t & 1)) return xe(e, X()), null;
  var r = is(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Oo(e);
    n !== 0 && (t = n, r = ra(e, n));
  }
  if (r === 1) throw r = Ln, Jt(e, 0), wt(e, t), xe(e, X()), r;
  if (r === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Mt(e, _e, rt), xe(e, X()), null;
}
function el(e, t) {
  var r = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = r, U === 0 && (Mr = X() + 500, gs && $t());
  }
}
function tr(e) {
  St !== null && St.tag === 0 && !(U & 6) && Ir();
  var t = U;
  U |= 1;
  var r = Le.transition, n = D;
  try {
    if (Le.transition = null, D = 1, e) return e();
  } finally {
    D = n, Le.transition = r, U = t, !(U & 6) && $t();
  }
}
function tl() {
  Te = Tr.current, F(Tr);
}
function Jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, ap(r)), ee !== null) for (r = ee.return; r !== null; ) {
    var n = r;
    switch ($a(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Hi();
        break;
      case 3:
        zr(), F(Se), F(ge), Va();
        break;
      case 5:
        Wa(n);
        break;
      case 4:
        zr();
        break;
      case 13:
        F(V);
        break;
      case 19:
        F(V);
        break;
      case 10:
        za(n.type._context);
        break;
      case 22:
      case 23:
        tl();
    }
    r = r.return;
  }
  if (oe = e, ee = e = Pt(e.current, null), ce = Te = t, ne = 0, Ln = null, Xa = ws = er = 0, _e = mn = null, Kt !== null) {
    for (t = 0; t < Kt.length; t++) if (r = Kt[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var i = n.next, s = r.pending;
      if (s !== null) {
        var o = s.next;
        s.next = i, n.next = o;
      }
      r.pending = n;
    }
    Kt = null;
  }
  return e;
}
function Vd(e, t) {
  do {
    var r = ee;
    try {
      if (Da(), Pi.current = es, Zi) {
        for (var n = H.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        Zi = !1;
      }
      if (Zt = 0, se = re = H = null, pn = !1, In = 0, Ya.current = null, r === null || r.return === null) {
        ne = 1, Ln = t, ee = null;
        break;
      }
      e: {
        var s = e, o = r.return, a = r, l = t;
        if (t = ce, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = c.alternate;
            h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var m = tu(o);
          if (m !== null) {
            m.flags &= -257, ru(m, o, a, s, t), m.mode & 1 && eu(s, u, t), t = m, l = u;
            var v = t.updateQueue;
            if (v === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              eu(s, u, t), rl();
              break e;
            }
            l = Error(k(426));
          }
        } else if (W && a.mode & 1) {
          var _ = tu(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), ru(_, o, a, s, t), La(Br(l, a));
            break e;
          }
        }
        s = l = Br(l, a), ne !== 4 && (ne = 2), mn === null ? mn = [s] : mn.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var f = Cd(s, l, t);
              Gl(s, f);
              break e;
            case 1:
              a = l;
              var d = s.type, g = s.stateNode;
              if (!(s.flags & 128) && (typeof d.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Ot === null || !Ot.has(g)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var w = Od(s, a, t);
                Gl(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      qd(r);
    } catch (x) {
      t = x, ee === r && r !== null && (ee = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Hd() {
  var e = ts.current;
  return ts.current = es, e === null ? es : e;
}
function rl() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), oe === null || !(er & 268435455) && !(ws & 268435455) || wt(oe, ce);
}
function is(e, t) {
  var r = U;
  U |= 2;
  var n = Hd();
  (oe !== e || ce !== t) && (rt = null, Jt(e, t));
  do
    try {
      Ap();
      break;
    } catch (i) {
      Vd(e, i);
    }
  while (!0);
  if (Da(), U = r, ts.current = n, ee !== null) throw Error(k(261));
  return oe = null, ce = 0, ne;
}
function Ap() {
  for (; ee !== null; ) Kd(ee);
}
function Ip() {
  for (; ee !== null && !nf(); ) Kd(ee);
}
function Kd(e) {
  var t = Jd(e.alternate, e, Te);
  e.memoizedProps = e.pendingProps, t === null ? qd(e) : ee = t, Ya.current = null;
}
function qd(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = Tp(r, t), r !== null) {
        r.flags &= 32767, ee = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ne = 6, ee = null;
        return;
      }
    } else if (r = Ep(r, t, Te), r !== null) {
      ee = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Mt(e, t, r) {
  var n = D, i = Le.transition;
  try {
    Le.transition = null, D = 1, Np(e, t, r, n);
  } finally {
    Le.transition = i, D = n;
  }
  return null;
}
function Np(e, t, r, n) {
  do
    Ir();
  while (St !== null);
  if (U & 6) throw Error(k(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = r.lanes | r.childLanes;
  if (pf(e, s), e === oe && (ee = oe = null, ce = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || gi || (gi = !0, Qd(zi, function() {
    return Ir(), null;
  })), s = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || s) {
    s = Le.transition, Le.transition = null;
    var o = D;
    D = 1;
    var a = U;
    U |= 4, Ya.current = null, Op(e, r), Md(r, e), ep(No), Mi = !!Io, No = Io = null, e.current = r, Rp(r), sf(), U = a, D = o, Le.transition = s;
  } else e.current = r;
  if (gi && (gi = !1, St = e, ns = i), s = e.pendingLanes, s === 0 && (Ot = null), lf(r.stateNode), xe(e, X()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (rs) throw rs = !1, e = ea, ea = null, e;
  return ns & 1 && e.tag !== 0 && Ir(), s = e.pendingLanes, s & 1 ? e === ta ? vn++ : (vn = 0, ta = e) : vn = 0, $t(), null;
}
function Ir() {
  if (St !== null) {
    var e = Cc(ns), t = Le.transition, r = D;
    try {
      if (Le.transition = null, D = 16 > e ? 16 : e, St === null) var n = !1;
      else {
        if (e = St, St = null, ns = 0, U & 6) throw Error(k(331));
        var i = U;
        for (U |= 4, C = e.current; C !== null; ) {
          var s = C, o = s.child;
          if (C.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (C = u; C !== null; ) {
                  var c = C;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gn(8, c, s);
                  }
                  var p = c.child;
                  if (p !== null) p.return = c, C = p;
                  else for (; C !== null; ) {
                    c = C;
                    var h = c.sibling, m = c.return;
                    if (Dd(c), c === u) {
                      C = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = m, C = h;
                      break;
                    }
                    C = m;
                  }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var _ = y.sibling;
                    y.sibling = null, y = _;
                  } while (y !== null);
                }
              }
              C = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) o.return = s, C = o;
          else e: for (; C !== null; ) {
            if (s = C, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                gn(9, s, s.return);
            }
            var f = s.sibling;
            if (f !== null) {
              f.return = s.return, C = f;
              break e;
            }
            C = s.return;
          }
        }
        var d = e.current;
        for (C = d; C !== null; ) {
          o = C;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) g.return = o, C = g;
          else e: for (o = d; C !== null; ) {
            if (a = C, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  ys(9, a);
              }
            } catch (x) {
              J(a, a.return, x);
            }
            if (a === o) {
              C = null;
              break e;
            }
            var w = a.sibling;
            if (w !== null) {
              w.return = a.return, C = w;
              break e;
            }
            C = a.return;
          }
        }
        if (U = i, $t(), Ze && typeof Ze.onPostCommitFiberRoot == "function") try {
          Ze.onPostCommitFiberRoot(cs, e);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      D = r, Le.transition = t;
    }
  }
  return !1;
}
function gu(e, t, r) {
  t = Br(r, t), t = Cd(e, t, 1), e = Ct(e, t, 1), t = ve(), e !== null && (Hn(e, 1, t), xe(e, t));
}
function J(e, t, r) {
  if (e.tag === 3) gu(e, e, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      gu(t, e, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ot === null || !Ot.has(n))) {
        e = Br(r, e), e = Od(t, e, 1), t = Ct(t, e, 1), e = ve(), t !== null && (Hn(t, 1, e), xe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function $p(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & r, oe === e && (ce & r) === r && (ne === 4 || ne === 3 && (ce & 130023424) === ce && 500 > X() - Za ? Jt(e, 0) : Xa |= r), xe(e, t);
}
function Gd(e, t) {
  t === 0 && (e.mode & 1 ? (t = si, si <<= 1, !(si & 130023424) && (si = 4194304)) : t = 1);
  var r = ve();
  e = ct(e, t), e !== null && (Hn(e, t, r), xe(e, r));
}
function Lp(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), Gd(e, r);
}
function Up(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  n !== null && n.delete(t), Gd(e, r);
}
var Jd;
Jd = function(e, t, r) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Se.current) ke = !0;
  else {
    if (!(e.lanes & r) && !(t.flags & 128)) return ke = !1, xp(e, t, r);
    ke = !!(e.flags & 131072);
  }
  else ke = !1, W && t.flags & 1048576 && Zc(t, Gi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Ai(e, t), e = t.pendingProps;
      var i = Lr(t, ge.current);
      Ar(t, r), i = Ka(null, t, n, e, i, r);
      var s = qa();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(n) ? (s = !0, Ki(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ma(t), i.updater = vs, t.stateNode = i, i._reactInternals = t, Wo(t, n, e, r), t = Ko(null, t, n, !0, s, r)) : (t.tag = 0, W && s && Na(t), me(null, t, i, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Ai(e, t), e = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = zp(n), e = Fe(n, e), i) {
          case 0:
            t = Ho(null, t, n, e, r);
            break e;
          case 1:
            t = su(null, t, n, e, r);
            break e;
          case 11:
            t = nu(null, t, n, e, r);
            break e;
          case 14:
            t = iu(null, t, n, Fe(n.type, e), r);
            break e;
        }
        throw Error(k(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Fe(n, i), Ho(e, t, n, i, r);
    case 1:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Fe(n, i), su(e, t, n, i, r);
    case 3:
      e: {
        if (Ad(t), e === null) throw Error(k(387));
        n = t.pendingProps, s = t.memoizedState, i = s.element, sd(e, t), Yi(t, n, null, r);
        var o = t.memoizedState;
        if (n = o.element, s.isDehydrated) if (s = { element: n, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = Br(Error(k(423)), t), t = ou(e, t, n, r, i);
          break e;
        } else if (n !== i) {
          i = Br(Error(k(424)), t), t = ou(e, t, n, r, i);
          break e;
        } else for (Oe = Tt(t.stateNode.containerInfo.firstChild), Re = t, W = !0, Ke = null, r = nd(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (Ur(), n === i) {
            t = dt(e, t, r);
            break e;
          }
          me(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return od(t), e === null && Bo(t), n = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, $o(n, i) ? o = null : s !== null && $o(n, s) && (t.flags |= 32), jd(e, t), me(e, t, o, r), t.child;
    case 6:
      return e === null && Bo(t), null;
    case 13:
      return Id(e, t, r);
    case 4:
      return Fa(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Dr(t, null, n, r) : me(e, t, n, r), t.child;
    case 11:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Fe(n, i), nu(e, t, n, i, r);
    case 7:
      return me(e, t, t.pendingProps, r), t.child;
    case 8:
      return me(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return me(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, B(Ji, n._currentValue), n._currentValue = o, s !== null) if (Je(s.value, o)) {
          if (s.children === i.children && !Se.current) {
            t = dt(e, t, r);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            o = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === n) {
                if (s.tag === 1) {
                  l = at(-1, r & -r), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= r, l = s.alternate, l !== null && (l.lanes |= r), Mo(
                  s.return,
                  r,
                  t
                ), a.lanes |= r;
                break;
              }
              l = l.next;
            }
          } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (o = s.return, o === null) throw Error(k(341));
            o.lanes |= r, a = o.alternate, a !== null && (a.lanes |= r), Mo(o, r, t), o = s.sibling;
          } else o = s.child;
          if (o !== null) o.return = s;
          else for (o = s; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (s = o.sibling, s !== null) {
              s.return = o.return, o = s;
              break;
            }
            o = o.return;
          }
          s = o;
        }
        me(e, t, i.children, r), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, n = t.pendingProps.children, Ar(t, r), i = Ue(i), n = n(i), t.flags |= 1, me(e, t, n, r), t.child;
    case 14:
      return n = t.type, i = Fe(n, t.pendingProps), i = Fe(n.type, i), iu(e, t, n, i, r);
    case 15:
      return Rd(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Fe(n, i), Ai(e, t), t.tag = 1, be(n) ? (e = !0, Ki(t)) : e = !1, Ar(t, r), Td(t, n, i), Wo(t, n, i, r), Ko(null, t, n, !0, e, r);
    case 19:
      return Nd(e, t, r);
    case 22:
      return Pd(e, t, r);
  }
  throw Error(k(156, t.tag));
};
function Qd(e, t) {
  return bc(e, t);
}
function Dp(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function $e(e, t, r, n) {
  return new Dp(e, t, r, n);
}
function nl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function zp(e) {
  if (typeof e == "function") return nl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Sa) return 11;
    if (e === ba) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var r = e.alternate;
  return r === null ? (r = $e(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function $i(e, t, r, n, i, s) {
  var o = 2;
  if (n = e, typeof e == "function") nl(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case mr:
      return Qt(r.children, i, s, t);
    case ka:
      o = 8, i |= 8;
      break;
    case fo:
      return e = $e(12, r, t, i | 2), e.elementType = fo, e.lanes = s, e;
    case po:
      return e = $e(13, r, t, i), e.elementType = po, e.lanes = s, e;
    case go:
      return e = $e(19, r, t, i), e.elementType = go, e.lanes = s, e;
    case oc:
      return _s(r, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ic:
          o = 10;
          break e;
        case sc:
          o = 9;
          break e;
        case Sa:
          o = 11;
          break e;
        case ba:
          o = 14;
          break e;
        case gt:
          o = 16, n = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = $e(o, r, t, i), t.elementType = e, t.type = n, t.lanes = s, t;
}
function Qt(e, t, r, n) {
  return e = $e(7, e, n, t), e.lanes = r, e;
}
function _s(e, t, r, n) {
  return e = $e(22, e, n, t), e.elementType = oc, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function ro(e, t, r) {
  return e = $e(6, e, null, t), e.lanes = r, e;
}
function no(e, t, r) {
  return t = $e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Bp(e, t, r, n, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Us(0), this.expirationTimes = Us(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Us(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function il(e, t, r, n, i, s, o, a, l) {
  return e = new Bp(e, t, r, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = $e(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ma(s), e;
}
function Mp(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: gr, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Yd(e) {
  if (!e) return At;
  e = e._reactInternals;
  e: {
    if (nr(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (be(r)) return Yc(e, r, t);
  }
  return t;
}
function Xd(e, t, r, n, i, s, o, a, l) {
  return e = il(r, n, !0, e, i, s, o, a, l), e.context = Yd(null), r = e.current, n = ve(), i = Rt(r), s = at(n, i), s.callback = t ?? null, Ct(r, s, i), e.current.lanes = i, Hn(e, i, n), xe(e, n), e;
}
function ks(e, t, r, n) {
  var i = t.current, s = ve(), o = Rt(i);
  return r = Yd(r), t.context === null ? t.context = r : t.pendingContext = r, t = at(s, o), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Ct(i, t, o), e !== null && (Ge(e, i, o, s), Ri(e, i, o)), o;
}
function ss(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function sl(e, t) {
  mu(e, t), (e = e.alternate) && mu(e, t);
}
function Fp() {
  return null;
}
var Zd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ol(e) {
  this._internalRoot = e;
}
Ss.prototype.render = ol.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  ks(e, t, null, null);
};
Ss.prototype.unmount = ol.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tr(function() {
      ks(null, e, null, null);
    }), t[ut] = null;
  }
};
function Ss(e) {
  this._internalRoot = e;
}
Ss.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Pc();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < yt.length && t !== 0 && t < yt[r].priority; r++) ;
    yt.splice(r, 0, e), r === 0 && Ac(e);
  }
};
function al(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function vu() {
}
function Wp(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var s = n;
      n = function() {
        var u = ss(o);
        s.call(u);
      };
    }
    var o = Xd(t, n, e, 0, null, !1, !1, "", vu);
    return e._reactRootContainer = o, e[ut] = o.current, On(e.nodeType === 8 ? e.parentNode : e), tr(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof n == "function") {
    var a = n;
    n = function() {
      var u = ss(l);
      a.call(u);
    };
  }
  var l = il(e, 0, !1, null, null, !1, !1, "", vu);
  return e._reactRootContainer = l, e[ut] = l.current, On(e.nodeType === 8 ? e.parentNode : e), tr(function() {
    ks(t, l, r, n);
  }), l;
}
function xs(e, t, r, n, i) {
  var s = r._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = ss(o);
        a.call(l);
      };
    }
    ks(t, o, e, i);
  } else o = Wp(r, t, e, i, n);
  return ss(o);
}
Oc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = on(t.pendingLanes);
        r !== 0 && (Ta(t, r | 1), xe(t, X()), !(U & 6) && (Mr = X() + 500, $t()));
      }
      break;
    case 13:
      tr(function() {
        var n = ct(e, 1);
        if (n !== null) {
          var i = ve();
          Ge(n, e, 1, i);
        }
      }), sl(e, 1);
  }
};
Ca = function(e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var r = ve();
      Ge(t, e, 134217728, r);
    }
    sl(e, 134217728);
  }
};
Rc = function(e) {
  if (e.tag === 13) {
    var t = Rt(e), r = ct(e, t);
    if (r !== null) {
      var n = ve();
      Ge(r, e, t, n);
    }
    sl(e, t);
  }
};
Pc = function() {
  return D;
};
jc = function(e, t) {
  var r = D;
  try {
    return D = e, t();
  } finally {
    D = r;
  }
};
Eo = function(e, t, r) {
  switch (t) {
    case "input":
      if (yo(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = ps(n);
            if (!i) throw Error(k(90));
            lc(n), yo(n, i);
          }
        }
      }
      break;
    case "textarea":
      cc(e, r);
      break;
    case "select":
      t = r.value, t != null && Or(e, !!r.multiple, t, !1);
  }
};
vc = el;
yc = tr;
var Vp = { usingClientEntryPoint: !1, Events: [qn, _r, ps, gc, mc, el] }, tn = { findFiberByHostInstance: Ht, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hp = { bundleType: tn.bundleType, version: tn.version, rendererPackageName: tn.rendererPackageName, rendererConfig: tn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = kc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: tn.findFiberByHostInstance || Fp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mi.isDisabled && mi.supportsFiber) try {
    cs = mi.inject(Hp), Ze = mi;
  } catch {
  }
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vp;
je.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!al(t)) throw Error(k(200));
  return Mp(e, t, null, r);
};
je.createRoot = function(e, t) {
  if (!al(e)) throw Error(k(299));
  var r = !1, n = "", i = Zd;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = il(e, 1, !1, null, null, r, !1, n, i), e[ut] = t.current, On(e.nodeType === 8 ? e.parentNode : e), new ol(t);
};
je.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = kc(t), e = e === null ? null : e.stateNode, e;
};
je.flushSync = function(e) {
  return tr(e);
};
je.hydrate = function(e, t, r) {
  if (!bs(t)) throw Error(k(200));
  return xs(null, e, t, !0, r);
};
je.hydrateRoot = function(e, t, r) {
  if (!al(e)) throw Error(k(405));
  var n = r != null && r.hydratedSources || null, i = !1, s = "", o = Zd;
  if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = Xd(t, null, e, 1, r ?? null, i, !1, s, o), e[ut] = t.current, On(e), n) for (e = 0; e < n.length; e++) r = n[e], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(
    r,
    i
  );
  return new Ss(t);
};
je.render = function(e, t, r) {
  if (!bs(t)) throw Error(k(200));
  return xs(null, e, t, !1, r);
};
je.unmountComponentAtNode = function(e) {
  if (!bs(e)) throw Error(k(40));
  return e._reactRootContainer ? (tr(function() {
    xs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ut] = null;
    });
  }), !0) : !1;
};
je.unstable_batchedUpdates = el;
je.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!bs(r)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return xs(e, t, r, !1, n);
};
je.version = "18.3.1-next-f1338f8080-20240426";
function eh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eh);
    } catch (e) {
      console.error(e);
    }
}
eh(), ec.exports = je;
var Kp = ec.exports, th, yu = Kp;
th = yu.createRoot, yu.hydrateRoot;
const qp = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-200:oklch(88.5% .062 18.334);--color-red-600:oklch(57.7% .245 27.325);--color-indigo-50:oklch(96.2% .018 272.314);--color-indigo-200:oklch(87% .065 274.039);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-violet-600:oklch(54.1% .281 293.009);--color-violet-700:oklch(49.1% .27 292.581);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-800:oklch(27.9% .041 260.031);--color-slate-900:oklch(20.8% .042 265.755);--color-gray-50:oklch(98.5% .002 247.839);--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}body{background-color:var(--background);color:var(--foreground)}html{font-size:var(--font-size)}h1{font-size:var(--text-2xl);font-weight:var(--font-weight-medium);line-height:1.5}h2{font-size:var(--text-xl);font-weight:var(--font-weight-medium);line-height:1.5}h3{font-size:var(--text-lg);font-weight:var(--font-weight-medium);line-height:1.5}h4,label,button{font-size:var(--text-base);font-weight:var(--font-weight-medium);line-height:1.5}input{font-size:var(--text-base);font-weight:var(--font-weight-normal);line-height:1.5}}@layer components;@layer utilities{.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.z-50{z-index:50}.col-span-1{grid-column:span 1/span 1}.col-span-3{grid-column:span 3/span 3}.col-span-8{grid-column:span 8/span 8}.mx-auto{margin-inline:auto}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.flex{display:flex}.grid{display:grid}.h-4{height:calc(var(--spacing)*4)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-20{height:calc(var(--spacing)*20)}.min-h-screen{min-height:100vh}.w-4{width:calc(var(--spacing)*4)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-20{width:calc(var(--spacing)*20)}.w-\\[90\\%\\]{width:90%}.w-full{width:100%}.max-w-\\[1440px\\]{max-width:1440px}.max-w-md{max-width:var(--container-md)}.flex-shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-\\[checkDraw_0\\.4s_ease-out_0\\.7s_forwards\\]{animation:.4s ease-out .7s forwards checkDraw}.animate-\\[circleDraw_0\\.6s_ease-out_0\\.1s_forwards\\]{animation:.6s ease-out .1s forwards circleDraw}.animate-\\[fadeIn_0\\.3s_ease-out_0\\.5s_forwards\\]{animation:.3s ease-out .5s forwards fadeIn}.animate-\\[fadeIn_0\\.3s_ease-out_0\\.9s_forwards\\]{animation:.3s ease-out .9s forwards fadeIn}.animate-\\[scaleIn_0\\.3s_ease-out\\]{animation:.3s ease-out scaleIn}.animate-spin{animation:var(--animate-spin)}.cursor-not-allowed{cursor:not-allowed}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1.5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1.5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-red-200{border-color:var(--color-red-200)}.border-slate-100{border-color:var(--color-slate-100)}.border-slate-200{border-color:var(--color-slate-200)}.bg-gray-50\\/50{background-color:#f9fafb80}@supports (color:color-mix(in lab,red,red)){.bg-gray-50\\/50{background-color:color-mix(in oklab,var(--color-gray-50)50%,transparent)}}.bg-indigo-600{background-color:var(--color-indigo-600)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-50\\/30{background-color:#f8fafc4d}@supports (color:color-mix(in lab,red,red)){.bg-slate-50\\/30{background-color:color-mix(in oklab,var(--color-slate-50)30%,transparent)}}.bg-slate-100{background-color:var(--color-slate-100)}.bg-slate-200{background-color:var(--color-slate-200)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-indigo-600{--tw-gradient-from:var(--color-indigo-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-violet-600{--tw-gradient-to:var(--color-violet-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.pt-6{padding-top:calc(var(--spacing)*6)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pb-8{padding-bottom:calc(var(--spacing)*8)}.text-center{text-align:center}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-indigo-600{color:var(--color-indigo-600)}.text-red-600{color:var(--color-red-600)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-800{color:var(--color-slate-800)}.text-slate-900{color:var(--color-slate-900)}.text-white{color:var(--color-white)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-0{opacity:0}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-indigo-200{--tw-shadow-color:oklch(87% .065 274.039)}@supports (color:color-mix(in lab,red,red)){.shadow-indigo-200{--tw-shadow-color:color-mix(in oklab,var(--color-indigo-200)var(--tw-shadow-alpha),transparent)}}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media (hover:hover){.hover\\:border-indigo-300:hover{border-color:var(--color-indigo-300)}.hover\\:bg-indigo-50:hover{background-color:var(--color-indigo-50)}.hover\\:bg-slate-100:hover{background-color:var(--color-slate-100)}.hover\\:from-indigo-700:hover{--tw-gradient-from:var(--color-indigo-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:to-violet-700:hover{--tw-gradient-to:var(--color-violet-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:text-indigo-600:hover{color:var(--color-indigo-600)}}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-30:disabled{opacity:.3}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:active\\:scale-100:disabled:active{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}@media (min-width:40rem){.sm\\:h-5{height:calc(var(--spacing)*5)}.sm\\:w-5{width:calc(var(--spacing)*5)}.sm\\:w-auto{width:auto}.sm\\:flex-row{flex-direction:row}:where(.sm\\:space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*5)*calc(1 - var(--tw-space-y-reverse)))}.sm\\:p-6{padding:calc(var(--spacing)*6)}.sm\\:px-4{padding-inline:calc(var(--spacing)*4)}.sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.sm\\:px-8{padding-inline:calc(var(--spacing)*8)}.sm\\:py-4{padding-block:calc(var(--spacing)*4)}.sm\\:py-6{padding-block:calc(var(--spacing)*6)}.sm\\:pt-8{padding-top:calc(var(--spacing)*8)}.sm\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}}@media (min-width:48rem){.md\\:col-span-5{grid-column:span 5/span 5}.md\\:col-span-7{grid-column:span 7/span 7}.md\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.md\\:gap-8{gap:calc(var(--spacing)*8)}}@media (min-width:64rem){.lg\\:px-8{padding-inline:calc(var(--spacing)*8)}.lg\\:py-8{padding-block:calc(var(--spacing)*8)}}@media (min-width:80rem){.xl\\:col-span-4{grid-column:span 4/span 4}.xl\\:col-span-8{grid-column:span 8/span 8}}}:root{--font-size:16px;--background:#fff;--foreground:oklch(14.5% 0 0);--card:#fff;--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:#030213;--primary-foreground:oklch(100% 0 0);--secondary:oklch(95% .0058 264.53);--secondary-foreground:#030213;--muted:#ececf0;--muted-foreground:#717182;--accent:#e9ebef;--accent-foreground:#030213;--destructive:#d4183d;--destructive-foreground:#fff;--border:#0000001a;--input:transparent;--input-background:#f3f3f5;--switch-background:#cbced4;--font-weight-medium:500;--font-weight-normal:400;--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--radius:.625rem;--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:#030213;--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0)}.dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(14.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(14.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(98.5% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(39.6% .141 25.723);--destructive-foreground:oklch(63.7% .237 25.331);--border:oklch(26.9% 0 0);--input:oklch(26.9% 0 0);--ring:oklch(43.9% 0 0);--font-weight-medium:500;--font-weight-normal:400;--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(26.9% 0 0);--sidebar-ring:oklch(43.9% 0 0)}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}';
var rh = { exports: {} }, Es = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gp = Q, Jp = Symbol.for("react.element"), Qp = Symbol.for("react.fragment"), Yp = Object.prototype.hasOwnProperty, Xp = Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Zp = { key: !0, ref: !0, __self: !0, __source: !0 };
function nh(e, t, r) {
  var n, i = {}, s = null, o = null;
  r !== void 0 && (s = "" + r), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) Yp.call(t, n) && !Zp.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: Jp, type: e, key: s, ref: o, props: i, _owner: Xp.current };
}
Es.Fragment = Qp;
Es.jsx = nh;
Es.jsxs = nh;
rh.exports = Es;
var b = rh.exports;
function Ts({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ b.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      ...t,
      children: e
    }
  );
}
function eg(e) {
  return /* @__PURE__ */ b.jsxs(Ts, { ...e, children: [
    /* @__PURE__ */ b.jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ b.jsx("path", { d: "M12 16v-4" }),
    /* @__PURE__ */ b.jsx("path", { d: "M12 8h.01" })
  ] });
}
function tg(e) {
  return /* @__PURE__ */ b.jsx(Ts, { ...e, children: /* @__PURE__ */ b.jsx("path", { d: "m18 15-6-6-6 6" }) });
}
function rg(e) {
  return /* @__PURE__ */ b.jsx(Ts, { ...e, children: /* @__PURE__ */ b.jsx("path", { d: "m6 9 6 6 6-6" }) });
}
function wu(e) {
  return /* @__PURE__ */ b.jsx(Ts, { ...e, children: /* @__PURE__ */ b.jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) });
}
function Cs(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function ng(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(c) {
      try {
        u(n.next(c));
      } catch (p) {
        o(p);
      }
    }
    function l(c) {
      try {
        u(n.throw(c));
      } catch (p) {
        o(p);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
const ig = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t);
class ll extends Error {
  constructor(t, r = "FunctionsError", n) {
    super(t), this.name = r, this.context = n;
  }
}
class sg extends ll {
  constructor(t) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", t);
  }
}
class _u extends ll {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class ku extends ll {
  constructor(t) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t);
  }
}
var ia;
(function(e) {
  e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2";
})(ia || (ia = {}));
class og {
  /**
   * Creates a new Functions client bound to an Edge Functions URL.
   *
   * @example
   * ```ts
   * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
   *
   * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
   *   headers: { apikey: 'public-anon-key' },
   *   region: FunctionRegion.UsEast1,
   * })
   * ```
   */
  constructor(t, { headers: r = {}, customFetch: n, region: i = ia.Any } = {}) {
    this.url = t, this.headers = r, this.region = i, this.fetch = ig(n);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   * @example
   * ```ts
   * functions.setAuth(session.access_token)
   * ```
   */
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   * @example
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   */
  invoke(t) {
    return ng(this, arguments, void 0, function* (r, n = {}) {
      var i;
      let s, o;
      try {
        const { headers: a, method: l, body: u, signal: c, timeout: p } = n;
        let h = {}, { region: m } = n;
        m || (m = this.region);
        const v = new URL(`${this.url}/${r}`);
        m && m !== "any" && (h["x-region"] = m, v.searchParams.set("forceFunctionRegion", m));
        let y;
        u && (a && !Object.prototype.hasOwnProperty.call(a, "Content-Type") || !a) ? typeof Blob < "u" && u instanceof Blob || u instanceof ArrayBuffer ? (h["Content-Type"] = "application/octet-stream", y = u) : typeof u == "string" ? (h["Content-Type"] = "text/plain", y = u) : typeof FormData < "u" && u instanceof FormData ? y = u : (h["Content-Type"] = "application/json", y = JSON.stringify(u)) : u && typeof u != "string" && !(typeof Blob < "u" && u instanceof Blob) && !(u instanceof ArrayBuffer) && !(typeof FormData < "u" && u instanceof FormData) ? y = JSON.stringify(u) : y = u;
        let _ = c;
        p && (o = new AbortController(), s = setTimeout(() => o.abort(), p), c ? (_ = o.signal, c.addEventListener("abort", () => o.abort())) : _ = o.signal);
        const f = yield this.fetch(v.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, h), this.headers), a),
          body: y,
          signal: _
        }).catch((x) => {
          throw new sg(x);
        }), d = f.headers.get("x-relay-error");
        if (d && d === "true")
          throw new _u(f);
        if (!f.ok)
          throw new ku(f);
        let g = ((i = f.headers.get("Content-Type")) !== null && i !== void 0 ? i : "text/plain").split(";")[0].trim(), w;
        return g === "application/json" ? w = yield f.json() : g === "application/octet-stream" || g === "application/pdf" ? w = yield f.blob() : g === "text/event-stream" ? w = f : g === "multipart/form-data" ? w = yield f.formData() : w = yield f.text(), { data: w, error: null, response: f };
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof ku || a instanceof _u ? a.context : void 0
        };
      } finally {
        s && clearTimeout(s);
      }
    });
  }
}
var ag = class extends Error {
  /**
  * @example
  * ```ts
  * import PostgrestError from '@supabase/postgrest-js'
  *
  * throw new PostgrestError({
  *   message: 'Row level security prevented the request',
  *   details: 'RLS denied the insert',
  *   hint: 'Check your policies',
  *   code: 'PGRST301',
  * })
  * ```
  */
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
}, lg = class {
  /**
  * Creates a builder configured for a specific PostgREST request.
  *
  * @example
  * ```ts
  * import PostgrestQueryBuilder from '@supabase/postgrest-js'
  *
  * const builder = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: new Headers({ apikey: 'public-anon-key' }) }
  * )
  * ```
  */
  constructor(e) {
    var t, r, n;
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = new Headers(e.headers), this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = (t = e.shouldThrowOnError) !== null && t !== void 0 ? t : !1, this.signal = e.signal, this.isMaybeSingle = (r = e.isMaybeSingle) !== null && r !== void 0 ? r : !1, this.urlLengthLimit = (n = e.urlLengthLimit) !== null && n !== void 0 ? n : 8e3, e.fetch ? this.fetch = e.fetch : this.fetch = fetch;
  }
  /**
  * If there's an error with the query, throwOnError will reject the promise by
  * throwing the error instead of returning it as part of a successful response.
  *
  * {@link https://github.com/supabase/supabase-js/issues/92}
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  */
  setHeader(e, t) {
    return this.headers = new Headers(this.headers), this.headers.set(e, t), this;
  }
  then(e, t) {
    var r = this;
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
    const n = this.fetch;
    let i = n(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (s) => {
      let o = null, a = null, l = null, u = s.status, c = s.statusText;
      if (s.ok) {
        var p, h;
        if (r.method !== "HEAD") {
          var m;
          const f = await s.text();
          f === "" || (r.headers.get("Accept") === "text/csv" || r.headers.get("Accept") && (!((m = r.headers.get("Accept")) === null || m === void 0) && m.includes("application/vnd.pgrst.plan+text")) ? a = f : a = JSON.parse(f));
        }
        const y = (p = r.headers.get("Prefer")) === null || p === void 0 ? void 0 : p.match(/count=(exact|planned|estimated)/), _ = (h = s.headers.get("content-range")) === null || h === void 0 ? void 0 : h.split("/");
        y && _ && _.length > 1 && (l = parseInt(_[1])), r.isMaybeSingle && r.method === "GET" && Array.isArray(a) && (a.length > 1 ? (o = {
          code: "PGRST116",
          details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, a = null, l = null, u = 406, c = "Not Acceptable") : a.length === 1 ? a = a[0] : a = null);
      } else {
        var v;
        const y = await s.text();
        try {
          o = JSON.parse(y), Array.isArray(o) && s.status === 404 && (a = [], o = null, u = 200, c = "OK");
        } catch {
          s.status === 404 && y === "" ? (u = 204, c = "No Content") : o = { message: y };
        }
        if (o && r.isMaybeSingle && (!(o == null || (v = o.details) === null || v === void 0) && v.includes("0 rows")) && (o = null, u = 200, c = "OK"), o && r.shouldThrowOnError) throw new ag(o);
      }
      return {
        error: o,
        data: a,
        count: l,
        status: u,
        statusText: c
      };
    });
    return this.shouldThrowOnError || (i = i.catch((s) => {
      var o;
      let a = "", l = "", u = "";
      const c = s?.cause;
      if (c) {
        var p, h, m, v;
        const f = (p = c?.message) !== null && p !== void 0 ? p : "", d = (h = c?.code) !== null && h !== void 0 ? h : "";
        a = `${(m = s?.name) !== null && m !== void 0 ? m : "FetchError"}: ${s?.message}`, a += `

Caused by: ${(v = c?.name) !== null && v !== void 0 ? v : "Error"}: ${f}`, d && (a += ` (${d})`), c?.stack && (a += `
${c.stack}`);
      } else {
        var y;
        a = (y = s?.stack) !== null && y !== void 0 ? y : "";
      }
      const _ = this.url.toString().length;
      return s?.name === "AbortError" || s?.code === "ABORT_ERR" ? (u = "", l = "Request was aborted (timeout or manual cancellation)", _ > this.urlLengthLimit && (l += `. Note: Your request URL is ${_} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (c?.name === "HeadersOverflowError" || c?.code === "UND_ERR_HEADERS_OVERFLOW") && (u = "", l = "HTTP headers exceeded server limits (typically 16KB)", _ > this.urlLengthLimit && (l += `. Your request URL is ${_} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
        error: {
          message: `${(o = s?.name) !== null && o !== void 0 ? o : "FetchError"}: ${s?.message}`,
          details: a,
          hint: l,
          code: u
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), i.then(e, t);
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  */
  returns() {
    return this;
  }
  /**
  * Override the type of the returned `data` field in the response.
  *
  * @typeParam NewResult - The new type to cast the response data to
  * @typeParam Options - Optional type configuration (defaults to { merge: true })
  * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
  * @example
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  * @returns A PostgrestBuilder instance with the new type
  */
  overrideTypes() {
    return this;
  }
}, ug = class extends lg {
  /**
  * Perform a SELECT on the query result.
  *
  * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
  * return modified rows. By calling this method, modified rows are returned in
  * `data`.
  *
  * @param columns - The columns to retrieve, separated by commas
  */
  select(e) {
    let t = !1;
    const r = (e ?? "*").split("").map((n) => /\s/.test(n) && !t ? "" : (n === '"' && (t = !t), n)).join("");
    return this.url.searchParams.set("select", r), this.headers.append("Prefer", "return=representation"), this;
  }
  /**
  * Order the query result by `column`.
  *
  * You can call this method multiple times to order by multiple columns.
  *
  * You can order referenced tables, but it only affects the ordering of the
  * parent table if you use `!inner` in the query.
  *
  * @param column - The column to order by
  * @param options - Named parameters
  * @param options.ascending - If `true`, the result will be in ascending order
  * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
  * `null`s appear last.
  * @param options.referencedTable - Set this to order a referenced table by
  * its columns
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  */
  order(e, { ascending: t = !0, nullsFirst: r, foreignTable: n, referencedTable: i = n } = {}) {
    const s = i ? `${i}.order` : "order", o = this.url.searchParams.get(s);
    return this.url.searchParams.set(s, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
  * Limit the query result by `count`.
  *
  * @param count - The maximum number of rows to return
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  */
  limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
    const n = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(n, `${e}`), this;
  }
  /**
  * Limit the query result by starting at an offset `from` and ending at the offset `to`.
  * Only records within this range are returned.
  * This respects the query order and if there is no order clause the range could behave unexpectedly.
  * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
  * and fourth rows of the query.
  *
  * @param from - The starting index from which to limit the result
  * @param to - The last index to which to limit the result
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  */
  range(e, t, { foreignTable: r, referencedTable: n = r } = {}) {
    const i = typeof n > "u" ? "offset" : `${n}.offset`, s = typeof n > "u" ? "limit" : `${n}.limit`;
    return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(s, `${t - e + 1}`), this;
  }
  /**
  * Set the AbortSignal for the fetch request.
  *
  * @param signal - The AbortSignal to use for the fetch request
  */
  abortSignal(e) {
    return this.signal = e, this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be one row (e.g. using `.limit(1)`), otherwise this
  * returns an error.
  */
  single() {
    return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
  * this returns an error.
  */
  maybeSingle() {
    return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
  }
  /**
  * Return `data` as a string in CSV format.
  */
  csv() {
    return this.headers.set("Accept", "text/csv"), this;
  }
  /**
  * Return `data` as an object in [GeoJSON](https://geojson.org) format.
  */
  geojson() {
    return this.headers.set("Accept", "application/geo+json"), this;
  }
  /**
  * Return `data` as the EXPLAIN plan for the query.
  *
  * You need to enable the
  * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
  * setting before using this method.
  *
  * @param options - Named parameters
  *
  * @param options.analyze - If `true`, the query will be executed and the
  * actual run time will be returned
  *
  * @param options.verbose - If `true`, the query identifier will be returned
  * and `data` will include the output columns of the query
  *
  * @param options.settings - If `true`, include information on configuration
  * parameters that affect query planning
  *
  * @param options.buffers - If `true`, include information on buffer usage
  *
  * @param options.wal - If `true`, include information on WAL record generation
  *
  * @param options.format - The format of the output, can be `"text"` (default)
  * or `"json"`
  */
  explain({ analyze: e = !1, verbose: t = !1, settings: r = !1, buffers: n = !1, wal: i = !1, format: s = "text" } = {}) {
    var o;
    const a = [
      e ? "analyze" : null,
      t ? "verbose" : null,
      r ? "settings" : null,
      n ? "buffers" : null,
      i ? "wal" : null
    ].filter(Boolean).join("|"), l = (o = this.headers.get("Accept")) !== null && o !== void 0 ? o : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${s}; for="${l}"; options=${a};`), s === "json" ? this : this;
  }
  /**
  * Rollback the query.
  *
  * `data` will still be returned, but the query is not committed.
  */
  rollback() {
    return this.headers.append("Prefer", "tx=rollback"), this;
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  */
  returns() {
    return this;
  }
  /**
  * Set the maximum number of rows that can be affected by the query.
  * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
  *
  * @param value - The maximum number of rows that can be affected
  */
  maxAffected(e) {
    return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${e}`), this;
  }
};
const Su = /* @__PURE__ */ new RegExp("[,()]");
var hr = class extends ug {
  /**
  * Match only rows where `column` is equal to `value`.
  *
  * To check if the value of `column` is NULL, you should use `.is()` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  eq(e, t) {
    return this.url.searchParams.append(e, `eq.${t}`), this;
  }
  /**
  * Match only rows where `column` is not equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  neq(e, t) {
    return this.url.searchParams.append(e, `neq.${t}`), this;
  }
  /**
  * Match only rows where `column` is greater than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  gt(e, t) {
    return this.url.searchParams.append(e, `gt.${t}`), this;
  }
  /**
  * Match only rows where `column` is greater than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  gte(e, t) {
    return this.url.searchParams.append(e, `gte.${t}`), this;
  }
  /**
  * Match only rows where `column` is less than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  lt(e, t) {
    return this.url.searchParams.append(e, `lt.${t}`), this;
  }
  /**
  * Match only rows where `column` is less than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  lte(e, t) {
    return this.url.searchParams.append(e, `lte.${t}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-sensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  */
  like(e, t) {
    return this.url.searchParams.append(e, `like.${t}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  likeAllOf(e, t) {
    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  likeAnyOf(e, t) {
    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-insensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  */
  ilike(e, t) {
    return this.url.searchParams.append(e, `ilike.${t}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  ilikeAllOf(e, t) {
    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  ilikeAnyOf(e, t) {
    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-sensitively (using the `~` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexMatch(e, t) {
    return this.url.searchParams.append(e, `match.${t}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-insensitively (using the `~*` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexIMatch(e, t) {
    return this.url.searchParams.append(e, `imatch.${t}`), this;
  }
  /**
  * Match only rows where `column` IS `value`.
  *
  * For non-boolean columns, this is only relevant for checking if the value of
  * `column` is NULL by setting `value` to `null`.
  *
  * For boolean columns, you can also set `value` to `true` or `false` and it
  * will behave the same way as `.eq()`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  is(e, t) {
    return this.url.searchParams.append(e, `is.${t}`), this;
  }
  /**
  * Match only rows where `column` IS DISTINCT FROM `value`.
  *
  * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
  * are considered equal (not distinct), and comparing `NULL` with any non-NULL
  * value returns true (distinct).
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  isDistinct(e, t) {
    return this.url.searchParams.append(e, `isdistinct.${t}`), this;
  }
  /**
  * Match only rows where `column` is included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  in(e, t) {
    const r = Array.from(new Set(t)).map((n) => typeof n == "string" && Su.test(n) ? `"${n}"` : `${n}`).join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(e, t) {
    const r = Array.from(new Set(t)).map((n) => typeof n == "string" && Su.test(n) ? `"${n}"` : `${n}`).join(",");
    return this.url.searchParams.append(e, `not.in.(${r})`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * `column` contains every element appearing in `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  */
  contains(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * every element appearing in `column` is contained by `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  */
  containedBy(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is greater than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeGt(e, t) {
    return this.url.searchParams.append(e, `sr.${t}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or greater than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeGte(e, t) {
    return this.url.searchParams.append(e, `nxl.${t}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is less than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeLt(e, t) {
    return this.url.searchParams.append(e, `sl.${t}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or less than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeLte(e, t) {
    return this.url.searchParams.append(e, `nxr.${t}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where `column` is
  * mutually exclusive to `range` and there can be no element between the two
  * ranges.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeAdjacent(e, t) {
    return this.url.searchParams.append(e, `adj.${t}`), this;
  }
  /**
  * Only relevant for array and range columns. Match only rows where
  * `column` and `value` have an element in common.
  *
  * @param column - The array or range column to filter on
  * @param value - The array or range value to filter with
  */
  overlaps(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this;
  }
  /**
  * Only relevant for text and tsvector columns. Match only rows where
  * `column` matches the query string in `query`.
  *
  * @param column - The text or tsvector column to filter on
  * @param query - The query text to match with
  * @param options - Named parameters
  * @param options.config - The text search configuration to use
  * @param options.type - Change how the `query` text is interpreted
  */
  textSearch(e, t, { config: r, type: n } = {}) {
    let i = "";
    n === "plain" ? i = "pl" : n === "phrase" ? i = "ph" : n === "websearch" && (i = "w");
    const s = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${i}fts${s}.${t}`), this;
  }
  /**
  * Match only rows where each column in `query` keys is equal to its
  * associated value. Shorthand for multiple `.eq()`s.
  *
  * @param query - The object to filter with, with column names as keys mapped
  * to their filter values
  */
  match(e) {
    return Object.entries(e).forEach(([t, r]) => {
      this.url.searchParams.append(t, `eq.${r}`);
    }), this;
  }
  /**
  * Match only rows which doesn't satisfy the filter.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to be negated to filter with, following
  * PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  */
  not(e, t, r) {
    return this.url.searchParams.append(e, `not.${t}.${r}`), this;
  }
  /**
  * Match only rows which satisfy at least one of the filters.
  *
  * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure it's properly sanitized.
  *
  * It's currently not possible to do an `.or()` filter across multiple tables.
  *
  * @param filters - The filters to use, following PostgREST syntax
  * @param options - Named parameters
  * @param options.referencedTable - Set this to filter on referenced tables
  * instead of the parent table
  * @param options.foreignTable - Deprecated, use `referencedTable` instead
  */
  or(e, { foreignTable: t, referencedTable: r = t } = {}) {
    const n = r ? `${r}.or` : "or";
    return this.url.searchParams.append(n, `(${e})`), this;
  }
  /**
  * Match only rows which satisfy the filter. This is an escape hatch - you
  * should use the specific filter methods wherever possible.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to filter with, following PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  */
  filter(e, t, r) {
    return this.url.searchParams.append(e, `${t}.${r}`), this;
  }
}, cg = class {
  /**
  * Creates a query builder scoped to a Postgres table or view.
  *
  * @example
  * ```ts
  * import PostgrestQueryBuilder from '@supabase/postgrest-js'
  *
  * const query = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: { apikey: 'public-anon-key' } }
  * )
  * ```
  */
  constructor(e, { headers: t = {}, schema: r, fetch: n, urlLengthLimit: i = 8e3 }) {
    this.url = e, this.headers = new Headers(t), this.schema = r, this.fetch = n, this.urlLengthLimit = i;
  }
  /**
  * Clone URL and headers to prevent shared state between operations.
  */
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  /**
  * Perform a SELECT query on the table or view.
  *
  * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
  *
  * @param options - Named parameters
  *
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  *
  * @param options.count - Count algorithm to use to count rows in the table or view.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @remarks
  * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
  * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
  */
  select(e, t) {
    const { head: r = !1, count: n } = t ?? {}, i = r ? "HEAD" : "GET";
    let s = !1;
    const o = (e ?? "*").split("").map((u) => /\s/.test(u) && !s ? "" : (u === '"' && (s = !s), u)).join(""), { url: a, headers: l } = this.cloneRequestState();
    return a.searchParams.set("select", o), n && l.append("Prefer", `count=${n}`), new hr({
      method: i,
      url: a,
      headers: l,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform an INSERT into the table or view.
  *
  * By default, inserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to insert. Pass an object to insert a single row
  * or an array to insert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count inserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. Only applies for bulk
  * inserts.
  */
  insert(e, { count: t, defaultToNull: r = !0 } = {}) {
    var n;
    const i = "POST", { url: s, headers: o } = this.cloneRequestState();
    if (t && o.append("Prefer", `count=${t}`), r || o.append("Prefer", "missing=default"), Array.isArray(e)) {
      const a = e.reduce((l, u) => l.concat(Object.keys(u)), []);
      if (a.length > 0) {
        const l = [...new Set(a)].map((u) => `"${u}"`);
        s.searchParams.set("columns", l.join(","));
      }
    }
    return new hr({
      method: i,
      url: s,
      headers: o,
      schema: this.schema,
      body: e,
      fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform an UPSERT on the table or view. Depending on the column(s) passed
  * to `onConflict`, `.upsert()` allows you to perform the equivalent of
  * `.insert()` if a row with the corresponding `onConflict` columns doesn't
  * exist, or if it does exist, perform an alternative action depending on
  * `ignoreDuplicates`.
  *
  * By default, upserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to upsert with. Pass an object to upsert a
  * single row or an array to upsert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
  * duplicate rows are determined. Two rows are duplicates if all the
  * `onConflict` columns are equal.
  *
  * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
  * `false`, duplicate rows are merged with existing rows.
  *
  * @param options.count - Count algorithm to use to count upserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. This only applies when
  * inserting new rows, not when merging with existing rows under
  * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
  *
  * @example Upsert a single row using a unique key
  * ```ts
  * // Upserting a single row, overwriting based on the 'username' unique column
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
  *
  * // Example response:
  * // {
  * //   data: [
  * //     { id: 4, message: 'bar', username: 'supabot' }
  * //   ],
  * //   error: null
  * // }
  * ```
  *
  * @example Upsert with conflict resolution and exact row counting
  * ```ts
  * // Upserting and returning exact count
  * const { data, error, count } = await supabase
  *   .from('users')
  *   .upsert(
  *     {
  *       id: 3,
  *       message: 'foo',
  *       username: 'supabot'
  *     },
  *     {
  *       onConflict: 'username',
  *       count: 'exact'
  *     }
  *   )
  *
  * // Example response:
  * // {
  * //   data: [
  * //     {
  * //       id: 42,
  * //       handle: "saoirse",
  * //       display_name: "Saoirse"
  * //     }
  * //   ],
  * //   count: 1,
  * //   error: null
  * // }
  * ```
  */
  upsert(e, { onConflict: t, ignoreDuplicates: r = !1, count: n, defaultToNull: i = !0 } = {}) {
    var s;
    const o = "POST", { url: a, headers: l } = this.cloneRequestState();
    if (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`), t !== void 0 && a.searchParams.set("on_conflict", t), n && l.append("Prefer", `count=${n}`), i || l.append("Prefer", "missing=default"), Array.isArray(e)) {
      const u = e.reduce((c, p) => c.concat(Object.keys(p)), []);
      if (u.length > 0) {
        const c = [...new Set(u)].map((p) => `"${p}"`);
        a.searchParams.set("columns", c.join(","));
      }
    }
    return new hr({
      method: o,
      url: a,
      headers: l,
      schema: this.schema,
      body: e,
      fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform an UPDATE on the table or view.
  *
  * By default, updated rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param values - The values to update with
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count updated rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  update(e, { count: t } = {}) {
    var r;
    const n = "PATCH", { url: i, headers: s } = this.cloneRequestState();
    return t && s.append("Prefer", `count=${t}`), new hr({
      method: n,
      url: i,
      headers: s,
      schema: this.schema,
      body: e,
      fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform a DELETE on the table or view.
  *
  * By default, deleted rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count deleted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  delete({ count: e } = {}) {
    var t;
    const r = "DELETE", { url: n, headers: i } = this.cloneRequestState();
    return e && i.append("Prefer", `count=${e}`), new hr({
      method: r,
      url: n,
      headers: i,
      schema: this.schema,
      fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
function Un(e) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Un(e);
}
function dg(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hg(e) {
  var t = dg(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function fg(e, t, r) {
  return (t = hg(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function bu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bu(Object(r), !0).forEach(function(n) {
      fg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var pg = class ih {
  /**
  * Creates a PostgREST client.
  *
  * @param url - URL of the PostgREST endpoint
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to switch to
  * @param options.fetch - Custom fetch
  * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
  * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
  * @example
  * ```ts
  * import PostgrestClient from '@supabase/postgrest-js'
  *
  * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
  *   headers: { apikey: 'public-anon-key' },
  *   schema: 'public',
  *   timeout: 30000, // 30 second timeout
  * })
  * ```
  */
  constructor(t, { headers: r = {}, schema: n, fetch: i, timeout: s, urlLengthLimit: o = 8e3 } = {}) {
    this.url = t, this.headers = new Headers(r), this.schemaName = n, this.urlLengthLimit = o;
    const a = i ?? globalThis.fetch;
    s !== void 0 && s > 0 ? this.fetch = (l, u) => {
      const c = new AbortController(), p = setTimeout(() => c.abort(), s), h = u?.signal;
      if (h) {
        if (h.aborted)
          return clearTimeout(p), a(l, u);
        const m = () => {
          clearTimeout(p), c.abort();
        };
        return h.addEventListener("abort", m, { once: !0 }), a(l, vi(vi({}, u), {}, { signal: c.signal })).finally(() => {
          clearTimeout(p), h.removeEventListener("abort", m);
        });
      }
      return a(l, vi(vi({}, u), {}, { signal: c.signal })).finally(() => clearTimeout(p));
    } : this.fetch = a;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(t) {
    if (!t || typeof t != "string" || t.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new cg(new URL(`${this.url}/${t}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(t) {
    return new ih(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @example
  * ```ts
  * // For cross-schema functions where type inference fails, use overrideTypes:
  * const { data } = await supabase
  *   .schema('schema_b')
  *   .rpc('function_a', {})
  *   .overrideTypes<{ id: string; user_id: string }[]>()
  * ```
  */
  rpc(t, r = {}, { head: n = !1, get: i = !1, count: s } = {}) {
    var o;
    let a;
    const l = new URL(`${this.url}/rpc/${t}`);
    let u;
    const c = (m) => m !== null && typeof m == "object" && (!Array.isArray(m) || m.some(c)), p = n && Object.values(r).some(c);
    p ? (a = "POST", u = r) : n || i ? (a = n ? "HEAD" : "GET", Object.entries(r).filter(([m, v]) => v !== void 0).map(([m, v]) => [m, Array.isArray(v) ? `{${v.join(",")}}` : `${v}`]).forEach(([m, v]) => {
      l.searchParams.append(m, v);
    })) : (a = "POST", u = r);
    const h = new Headers(this.headers);
    return p ? h.set("Prefer", s ? `count=${s},return=minimal` : "return=minimal") : s && h.set("Prefer", `count=${s}`), new hr({
      method: a,
      url: l,
      headers: h,
      schema: this.schemaName,
      body: u,
      fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
class gg {
  /**
   * Static-only utility – prevent instantiation.
   */
  constructor() {
  }
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((t = navigator.userAgent) === null || t === void 0) && t.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    const r = globalThis.process;
    if (r) {
      const n = r.versions;
      if (n && n.node) {
        const i = n.node, s = parseInt(i.replace(/^v/, "").split(".")[0]);
        return s >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${s} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${s} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  /**
   * Returns the best available WebSocket constructor for the current runtime.
   *
   * @example
   * ```ts
   * const WS = WebSocketFactory.getWebSocketConstructor()
   * const socket = new WS('wss://realtime.supabase.co/socket')
   * ```
   */
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.constructor)
      return t.constructor;
    let r = t.error || "WebSocket not supported in this environment.";
    throw t.workaround && (r += `

Suggested solution: ${t.workaround}`), new Error(r);
  }
  /**
   * Creates a WebSocket using the detected constructor.
   *
   * @example
   * ```ts
   * const socket = WebSocketFactory.createWebSocket('wss://realtime.supabase.co/socket')
   * ```
   */
  static createWebSocket(t, r) {
    const n = this.getWebSocketConstructor();
    return new n(t, r);
  }
  /**
   * Detects whether the runtime can establish WebSocket connections.
   *
   * @example
   * ```ts
   * if (!WebSocketFactory.isWebSocketSupported()) {
   *   console.warn('Falling back to long polling')
   * }
   * ```
   */
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const mg = "2.95.3", vg = `realtime-js/${mg}`, yg = "1.0.0", sh = "2.0.0", xu = sh, sa = 1e4, wg = 1e3, _g = 100;
var vt;
(function(e) {
  e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed";
})(vt || (vt = {}));
var te;
(function(e) {
  e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving";
})(te || (te = {}));
var He;
(function(e) {
  e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token";
})(He || (He = {}));
var oa;
(function(e) {
  e.websocket = "websocket";
})(oa || (oa = {}));
var Wt;
(function(e) {
  e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed";
})(Wt || (Wt = {}));
class kg {
  constructor(t) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = t ?? [];
  }
  encode(t, r) {
    if (t.event === this.BROADCAST_EVENT && !(t.payload instanceof ArrayBuffer) && typeof t.payload.event == "string")
      return r(this._binaryEncodeUserBroadcastPush(t));
    let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
    return r(JSON.stringify(n));
  }
  _binaryEncodeUserBroadcastPush(t) {
    var r;
    return this._isArrayBuffer((r = t.payload) === null || r === void 0 ? void 0 : r.payload) ? this._encodeBinaryUserBroadcastPush(t) : this._encodeJsonUserBroadcastPush(t);
  }
  _encodeBinaryUserBroadcastPush(t) {
    var r, n;
    const i = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, i);
  }
  _encodeJsonUserBroadcastPush(t) {
    var r, n;
    const i = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : {}, o = new TextEncoder().encode(JSON.stringify(i)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(t, r, n) {
    var i, s;
    const o = t.topic, a = (i = t.ref) !== null && i !== void 0 ? i : "", l = (s = t.join_ref) !== null && s !== void 0 ? s : "", u = t.payload.event, c = this.allowedMetadataKeys ? this._pick(t.payload, this.allowedMetadataKeys) : {}, p = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
    if (p.length > 255)
      throw new Error(`metadata length ${p.length} exceeds maximum of 255`);
    const h = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + a.length + o.length + u.length + p.length, m = new ArrayBuffer(this.HEADER_LENGTH + h);
    let v = new DataView(m), y = 0;
    v.setUint8(y++, this.KINDS.userBroadcastPush), v.setUint8(y++, l.length), v.setUint8(y++, a.length), v.setUint8(y++, o.length), v.setUint8(y++, u.length), v.setUint8(y++, p.length), v.setUint8(y++, r), Array.from(l, (f) => v.setUint8(y++, f.charCodeAt(0))), Array.from(a, (f) => v.setUint8(y++, f.charCodeAt(0))), Array.from(o, (f) => v.setUint8(y++, f.charCodeAt(0))), Array.from(u, (f) => v.setUint8(y++, f.charCodeAt(0))), Array.from(p, (f) => v.setUint8(y++, f.charCodeAt(0)));
    var _ = new Uint8Array(m.byteLength + n.byteLength);
    return _.set(new Uint8Array(m), 0), _.set(new Uint8Array(n), m.byteLength), _.buffer;
  }
  decode(t, r) {
    if (this._isArrayBuffer(t)) {
      let n = this._binaryDecode(t);
      return r(n);
    }
    if (typeof t == "string") {
      const n = JSON.parse(t), [i, s, o, a, l] = n;
      return r({ join_ref: i, ref: s, topic: o, event: a, payload: l });
    }
    return r({});
  }
  _binaryDecode(t) {
    const r = new DataView(t), n = r.getUint8(0), i = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(t, r, i);
    }
  }
  _decodeUserBroadcast(t, r, n) {
    const i = r.getUint8(1), s = r.getUint8(2), o = r.getUint8(3), a = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = n.decode(t.slice(l, l + i));
    l = l + i;
    const c = n.decode(t.slice(l, l + s));
    l = l + s;
    const p = n.decode(t.slice(l, l + o));
    l = l + o;
    const h = t.slice(l, t.byteLength), m = a === this.JSON_ENCODING ? JSON.parse(n.decode(h)) : h, v = {
      type: this.BROADCAST_EVENT,
      event: c,
      payload: m
    };
    return o > 0 && (v.meta = JSON.parse(p)), { join_ref: null, ref: null, topic: u, event: this.BROADCAST_EVENT, payload: v };
  }
  _isArrayBuffer(t) {
    var r;
    return t instanceof ArrayBuffer || ((r = t?.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer";
  }
  _pick(t, r) {
    return !t || typeof t != "object" ? {} : Object.fromEntries(Object.entries(t).filter(([n]) => r.includes(n)));
  }
}
class oh {
  constructor(t, r) {
    this.callback = t, this.timerCalc = r, this.timer = void 0, this.tries = 0, this.callback = t, this.timerCalc = r;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer), this.timer = void 0;
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var z;
(function(e) {
  e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange";
})(z || (z = {}));
const Eu = (e, t, r = {}) => {
  var n;
  const i = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
  return t ? Object.keys(t).reduce((s, o) => (s[o] = Sg(o, e, t, i), s), {}) : {};
}, Sg = (e, t, r, n) => {
  const i = t.find((a) => a.name === e), s = i?.type, o = r[e];
  return s && !n.includes(s) ? ah(s, o) : aa(o);
}, ah = (e, t) => {
  if (e.charAt(0) === "_") {
    const r = e.slice(1, e.length);
    return Tg(t, r);
  }
  switch (e) {
    case z.bool:
      return bg(t);
    case z.float4:
    case z.float8:
    case z.int2:
    case z.int4:
    case z.int8:
    case z.numeric:
    case z.oid:
      return xg(t);
    case z.json:
    case z.jsonb:
      return Eg(t);
    case z.timestamp:
      return Cg(t);
    case z.abstime:
    case z.date:
    case z.daterange:
    case z.int4range:
    case z.int8range:
    case z.money:
    case z.reltime:
    case z.text:
    case z.time:
    case z.timestamptz:
    case z.timetz:
    case z.tsrange:
    case z.tstzrange:
      return aa(t);
    default:
      return aa(t);
  }
}, aa = (e) => e, bg = (e) => {
  switch (e) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return e;
  }
}, xg = (e) => {
  if (typeof e == "string") {
    const t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return e;
}, Eg = (e) => {
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return e;
}, Tg = (e, t) => {
  if (typeof e != "string")
    return e;
  const r = e.length - 1, n = e[r];
  if (e[0] === "{" && n === "}") {
    let s;
    const o = e.slice(1, r);
    try {
      s = JSON.parse("[" + o + "]");
    } catch {
      s = o ? o.split(",") : [];
    }
    return s.map((a) => ah(t, a));
  }
  return e;
}, Cg = (e) => typeof e == "string" ? e.replace(" ", "T") : e, lh = (e) => {
  const t = new URL(e);
  return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname = t.pathname + "/api/broadcast", t.href;
};
class io {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(t, r, n = {}, i = sa) {
    this.channel = t, this.event = r, this.payload = n, this.timeout = i, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(t) {
    this.timeout = t, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, r) {
    var n;
    return this._hasReceived(t) && r((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response), this.recHooks.push({ status: t, callback: r }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const t = (r) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = r, this._matchReceive(r);
    };
    this.channel._on(this.refEvent, {}, t), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(t, r) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: t, response: r });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: t, response: r }) {
    this.recHooks.filter((n) => n.status === t).forEach((n) => n.callback(r));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var Tu;
(function(e) {
  e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
})(Tu || (Tu = {}));
class yn {
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @example
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  constructor(t, r) {
    this.channel = t, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const n = r?.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(n.state, {}, (i) => {
      const { onJoin: s, onLeave: o, onSync: a } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = yn.syncState(this.state, i, s, o), this.pendingDiffs.forEach((l) => {
        this.state = yn.syncDiff(this.state, l, s, o);
      }), this.pendingDiffs = [], a();
    }), this.channel._on(n.diff, {}, (i) => {
      const { onJoin: s, onLeave: o, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(i) : (this.state = yn.syncDiff(this.state, i, s, o), a());
    }), this.onJoin((i, s, o) => {
      this.channel._trigger("presence", {
        event: "join",
        key: i,
        currentPresences: s,
        newPresences: o
      });
    }), this.onLeave((i, s, o) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: i,
        currentPresences: s,
        leftPresences: o
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(t, r, n, i) {
    const s = this.cloneDeep(t), o = this.transformState(r), a = {}, l = {};
    return this.map(s, (u, c) => {
      o[u] || (l[u] = c);
    }), this.map(o, (u, c) => {
      const p = s[u];
      if (p) {
        const h = c.map((_) => _.presence_ref), m = p.map((_) => _.presence_ref), v = c.filter((_) => m.indexOf(_.presence_ref) < 0), y = p.filter((_) => h.indexOf(_.presence_ref) < 0);
        v.length > 0 && (a[u] = v), y.length > 0 && (l[u] = y);
      } else
        a[u] = c;
    }), this.syncDiff(s, { joins: a, leaves: l }, n, i);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(t, r, n, i) {
    const { joins: s, leaves: o } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves)
    };
    return n || (n = () => {
    }), i || (i = () => {
    }), this.map(s, (a, l) => {
      var u;
      const c = (u = t[a]) !== null && u !== void 0 ? u : [];
      if (t[a] = this.cloneDeep(l), c.length > 0) {
        const p = t[a].map((m) => m.presence_ref), h = c.filter((m) => p.indexOf(m.presence_ref) < 0);
        t[a].unshift(...h);
      }
      n(a, c, l);
    }), this.map(o, (a, l) => {
      let u = t[a];
      if (!u)
        return;
      const c = l.map((p) => p.presence_ref);
      u = u.filter((p) => c.indexOf(p.presence_ref) < 0), t[a] = u, i(a, u, l), u.length === 0 && delete t[a];
    }), t;
  }
  /** @internal */
  static map(t, r) {
    return Object.getOwnPropertyNames(t).map((n) => r(n, t[n]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(t) {
    return t = this.cloneDeep(t), Object.getOwnPropertyNames(t).reduce((r, n) => {
      const i = t[n];
      return "metas" in i ? r[n] = i.metas.map((s) => (s.presence_ref = s.phx_ref, delete s.phx_ref, delete s.phx_ref_prev, s)) : r[n] = i, r;
    }, {});
  }
  /** @internal */
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  /** @internal */
  onJoin(t) {
    this.caller.onJoin = t;
  }
  /** @internal */
  onLeave(t) {
    this.caller.onLeave = t;
  }
  /** @internal */
  onSync(t) {
    this.caller.onSync = t;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Cu;
(function(e) {
  e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
})(Cu || (Cu = {}));
var wn;
(function(e) {
  e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system";
})(wn || (wn = {}));
var nt;
(function(e) {
  e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
})(nt || (nt = {}));
class Cr {
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  constructor(t, r = { config: {} }, n) {
    var i, s;
    if (this.topic = t, this.params = r, this.socket = n, this.bindings = {}, this.state = te.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = t.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, r.config), this.timeout = this.socket.timeout, this.joinPush = new io(this, He.join, this.params, this.timeout), this.rejoinTimer = new oh(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = te.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((o) => o.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = te.closed, this.socket._remove(this);
    }), this._onError((o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = te.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = te.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = te.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(He.reply, {}, (o, a) => {
      this._trigger(this._replyEventName(a), o);
    }), this.presence = new yn(this), this.broadcastEndpointURL = lh(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((s = (i = this.params.config) === null || i === void 0 ? void 0 : i.broadcast) === null || s === void 0) && s.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(t, r = this.timeout) {
    var n, i, s;
    if (this.socket.isConnected() || this.socket.connect(), this.state == te.closed) {
      const { config: { broadcast: o, presence: a, private: l } } = this.params, u = (i = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map((m) => m.filter)) !== null && i !== void 0 ? i : [], c = !!this.bindings[wn.PRESENCE] && this.bindings[wn.PRESENCE].length > 0 || ((s = this.params.config.presence) === null || s === void 0 ? void 0 : s.enabled) === !0, p = {}, h = {
        broadcast: o,
        presence: Object.assign(Object.assign({}, a), { enabled: c }),
        postgres_changes: u,
        private: l
      };
      this.socket.accessTokenValue && (p.access_token = this.socket.accessTokenValue), this._onError((m) => t?.(nt.CHANNEL_ERROR, m)), this._onClose(() => t?.(nt.CLOSED)), this.updateJoinPayload(Object.assign({ config: h }, p)), this.joinedOnce = !0, this._rejoin(r), this.joinPush.receive("ok", async ({ postgres_changes: m }) => {
        var v;
        if (this.socket._isManualToken() || this.socket.setAuth(), m === void 0) {
          t?.(nt.SUBSCRIBED);
          return;
        } else {
          const y = this.bindings.postgres_changes, _ = (v = y?.length) !== null && v !== void 0 ? v : 0, f = [];
          for (let d = 0; d < _; d++) {
            const g = y[d], { filter: { event: w, schema: x, table: S, filter: T } } = g, E = m && m[d];
            if (E && E.event === w && Cr.isFilterValueEqual(E.schema, x) && Cr.isFilterValueEqual(E.table, S) && Cr.isFilterValueEqual(E.filter, T))
              f.push(Object.assign(Object.assign({}, g), { id: E.id }));
            else {
              this.unsubscribe(), this.state = te.errored, t?.(nt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = f, t && t(nt.SUBSCRIBED);
          return;
        }
      }).receive("error", (m) => {
        this.state = te.errored, t?.(nt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(m).join(", ") || "error")));
      }).receive("timeout", () => {
        t?.(nt.TIMED_OUT);
      });
    }
    return this;
  }
  /**
   * Returns the current presence state for this channel.
   *
   * The shape is a map keyed by presence key (for example a user id) where each entry contains the
   * tracked metadata for that user.
   */
  presenceState() {
    return this.presence.state;
  }
  /**
   * Sends the supplied payload to the presence tracker so other subscribers can see that this
   * client is online. Use `untrack` to stop broadcasting presence for the same key.
   */
  async track(t, r = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: t
    }, r.timeout || this.timeout);
  }
  /**
   * Removes the current presence state for this client.
   */
  async untrack(t = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, t);
  }
  on(t, r, n) {
    return this.state === te.joined && t === wn.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(async () => await this.subscribe())), this._on(t, r, n);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   */
  async httpSend(t, r, n = {}) {
    var i;
    if (r == null)
      return Promise.reject("Payload is required for httpSend()");
    const s = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    this.socket.accessTokenValue && (s.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
      method: "POST",
      headers: s,
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: t,
            payload: r,
            private: this.private
          }
        ]
      })
    }, a = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (i = n.timeout) !== null && i !== void 0 ? i : this.timeout);
    if (a.status === 202)
      return { success: !0 };
    let l = a.statusText;
    try {
      const u = await a.json();
      l = u.error || u.message || l;
    } catch {
    }
    return Promise.reject(new Error(l));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(t, r = {}) {
    var n, i;
    if (!this._canPush() && t.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: s, payload: o } = t, a = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      this.socket.accessTokenValue && (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: a,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: s,
              payload: o,
              private: this.private
            }
          ]
        })
      };
      try {
        const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
        return await ((i = u.body) === null || i === void 0 ? void 0 : i.cancel()), u.ok ? "ok" : "error";
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((s) => {
        var o, a, l;
        const u = this._push(t.type, t, r.timeout || this.timeout);
        t.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && s("ok"), u.receive("ok", () => s("ok")), u.receive("error", () => s("error")), u.receive("timeout", () => s("timed out"));
      });
  }
  /**
   * Updates the payload that will be sent the next time the channel joins (reconnects).
   * Useful for rotating access tokens or updating config without re-creating the channel.
   */
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(t = this.timeout) {
    this.state = te.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(He.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((i) => {
      n = new io(this, He.leave, {}, t), n.receive("ok", () => {
        r(), i("ok");
      }).receive("timeout", () => {
        r(), i("timed out");
      }).receive("error", () => {
        i("error");
      }), n.send(), this._canPush() || n.trigger("ok", {});
    }).finally(() => {
      n?.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((t) => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = te.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(t, r, n) {
    const i = new AbortController(), s = setTimeout(() => i.abort(), n), o = await this.socket.fetch(t, Object.assign(Object.assign({}, r), { signal: i.signal }));
    return clearTimeout(s), o;
  }
  /** @internal */
  _push(t, r, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new io(this, t, r, n);
    return this._canPush() ? i.send() : this._addToPushBuffer(i), i;
  }
  /** @internal */
  _addToPushBuffer(t) {
    if (t.startTimeout(), this.pushBuffer.push(t), this.pushBuffer.length > _g) {
      const r = this.pushBuffer.shift();
      r && (r.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${r.event}`, r.payload));
    }
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(t, r, n) {
    return r;
  }
  /** @internal */
  _isMember(t) {
    return this.topic === t;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(t, r, n) {
    var i, s;
    const o = t.toLocaleLowerCase(), { close: a, error: l, leave: u, join: c } = He;
    if (n && [a, l, u, c].indexOf(o) >= 0 && n !== this._joinRef())
      return;
    let h = this._onMessage(o, r, n);
    if (r && !h)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o) ? (i = this.bindings.postgres_changes) === null || i === void 0 || i.filter((m) => {
      var v, y, _;
      return ((v = m.filter) === null || v === void 0 ? void 0 : v.event) === "*" || ((_ = (y = m.filter) === null || y === void 0 ? void 0 : y.event) === null || _ === void 0 ? void 0 : _.toLocaleLowerCase()) === o;
    }).map((m) => m.callback(h, n)) : (s = this.bindings[o]) === null || s === void 0 || s.filter((m) => {
      var v, y, _, f, d, g;
      if (["broadcast", "presence", "postgres_changes"].includes(o))
        if ("id" in m) {
          const w = m.id, x = (v = m.filter) === null || v === void 0 ? void 0 : v.event;
          return w && ((y = r.ids) === null || y === void 0 ? void 0 : y.includes(w)) && (x === "*" || x?.toLocaleLowerCase() === ((_ = r.data) === null || _ === void 0 ? void 0 : _.type.toLocaleLowerCase()));
        } else {
          const w = (d = (f = m?.filter) === null || f === void 0 ? void 0 : f.event) === null || d === void 0 ? void 0 : d.toLocaleLowerCase();
          return w === "*" || w === ((g = r?.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase());
        }
      else
        return m.type.toLocaleLowerCase() === o;
    }).map((m) => {
      if (typeof h == "object" && "ids" in h) {
        const v = h.data, { schema: y, table: _, commit_timestamp: f, type: d, errors: g } = v;
        h = Object.assign(Object.assign({}, {
          schema: y,
          table: _,
          commit_timestamp: f,
          eventType: d,
          new: {},
          old: {},
          errors: g
        }), this._getPayloadRecords(v));
      }
      m.callback(h, n);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === te.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === te.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === te.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === te.leaving;
  }
  /** @internal */
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  /** @internal */
  _on(t, r, n) {
    const i = t.toLocaleLowerCase(), s = {
      type: i,
      filter: r,
      callback: n
    };
    return this.bindings[i] ? this.bindings[i].push(s) : this.bindings[i] = [s], this;
  }
  /** @internal */
  _off(t, r) {
    const n = t.toLocaleLowerCase();
    return this.bindings[n] && (this.bindings[n] = this.bindings[n].filter((i) => {
      var s;
      return !(((s = i.type) === null || s === void 0 ? void 0 : s.toLocaleLowerCase()) === n && Cr.isEqual(i.filter, r));
    })), this;
  }
  /** @internal */
  static isEqual(t, r) {
    if (Object.keys(t).length !== Object.keys(r).length)
      return !1;
    for (const n in t)
      if (t[n] !== r[n])
        return !1;
    return !0;
  }
  /**
   * Compares two optional filter values for equality.
   * Treats undefined, null, and empty string as equivalent empty values.
   * @internal
   */
  static isFilterValueEqual(t, r) {
    return (t ?? void 0) === (r ?? void 0);
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(t) {
    this._on(He.close, {}, t);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(t) {
    this._on(He.error, {}, (r) => t(r));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(t = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = te.joining, this.joinPush.resend(t));
  }
  /** @internal */
  _getPayloadRecords(t) {
    const r = {
      new: {},
      old: {}
    };
    return (t.type === "INSERT" || t.type === "UPDATE") && (r.new = Eu(t.columns, t.record)), (t.type === "UPDATE" || t.type === "DELETE") && (r.old = Eu(t.columns, t.old_record)), r;
  }
}
const so = () => {
}, yi = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Og = [1e3, 2e3, 5e3, 1e4], Rg = 1e4, Pg = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class jg {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * client.connect()
   * ```
   */
  constructor(t, r) {
    var n;
    if (this.accessTokenValue = null, this.apiKey = null, this._manuallySetToken = !1, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = sa, this.transport = null, this.heartbeatIntervalMs = yi.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = so, this.ref = 0, this.reconnectTimer = null, this.vsn = xu, this.logger = so, this.conn = null, this.sendBuffer = [], this.serializer = new kg(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._heartbeatSentAt = null, this._resolveFetch = (i) => i ? (...s) => i(...s) : (...s) => fetch(...s), !(!((n = r?.params) === null || n === void 0) && n.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = r.params.apikey, this.endPoint = `${t}/${oa.websocket}`, this.httpEndpoint = lh(t), this._initializeOptions(r), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(r?.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
      if (this._setConnectionState("connecting"), this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this.transport)
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = gg.createWebSocket(this.endpointURL());
        } catch (t) {
          this._setConnectionState("disconnected");
          const r = t.message;
          throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${r}`);
        }
      this._setupConnectionHandlers();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: this.vsn }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(t, r) {
    if (!this.isDisconnecting())
      if (this._setConnectionState("disconnecting", !0), this.conn) {
        const n = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(n), this._setConnectionState("disconnected");
        }, typeof this.conn.close == "function" && (t ? this.conn.close(t, r ?? "") : this.conn.close()), this._teardownConnection();
      } else
        this._setConnectionState("disconnected");
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(t) {
    const r = await t.unsubscribe();
    return r === "ok" && this._remove(t), this.channels.length === 0 && this.disconnect(), r;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return this.channels = [], this.disconnect(), t;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(t, r, n) {
    this.logger(t, r, n);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case vt.connecting:
        return Wt.Connecting;
      case vt.open:
        return Wt.Open;
      case vt.closing:
        return Wt.Closing;
      default:
        return Wt.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Wt.Open;
  }
  /**
   * Returns `true` if the connection is currently connecting.
   */
  isConnecting() {
    return this._connectionState === "connecting";
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   */
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  /**
   * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
   *
   * Topics are automatically prefixed with `realtime:` to match the Realtime service.
   * If a channel with the same topic already exists it will be returned instead of creating
   * a duplicate connection.
   */
  channel(t, r = { config: {} }) {
    const n = `realtime:${t}`, i = this.getChannels().find((s) => s.topic === n);
    if (i)
      return i;
    {
      const s = new Cr(`realtime:${t}`, r, this);
      return this.channels.push(s), s;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(t) {
    const { topic: r, event: n, payload: i, ref: s } = t, o = () => {
      this.encode(t, (a) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(a);
      });
    };
    this.log("push", `${r} ${n} (${s})`, i), this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * When a token is explicitly provided, it will be preserved across channel operations
   * (including removeChannel and resubscribe). The `accessToken` callback will not be
   * invoked until `setAuth()` is called without arguments.
   *
   * @param token A JWT string to override the token set on the client.
   *
   * @example
   * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
   * client.realtime.setAuth('my-custom-jwt')
   *
   * // Switch back to using the accessToken callback
   * client.realtime.setAuth()
   */
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Returns true if the current access token was explicitly set via setAuth(token),
   * false if it was obtained via the accessToken callback.
   * @internal
   */
  _isManualToken() {
    return this._manuallySetToken;
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var t;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this._heartbeatSentAt = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      this._wasManualDisconnect = !1, (t = this.conn) === null || t === void 0 || t.close(wg, "heartbeat timeout"), setTimeout(() => {
        var r;
        this.isConnected() || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout();
      }, yi.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    this._heartbeatSentAt = Date.now(), this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
    this._setAuthSafely("heartbeat");
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   */
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((t) => t()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let t = this.ref + 1;
    return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(t) {
    let r = this.channels.find((n) => n.topic === t && (n._isJoined() || n._isJoining()));
    r && (this.log("transport", `leaving duplicate topic "${t}"`), r.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(t) {
    this.channels = this.channels.filter((r) => r.topic !== t.topic);
  }
  /** @internal */
  _onConnMessage(t) {
    this.decode(t.data, (r) => {
      if (r.topic === "phoenix" && r.event === "phx_reply" && r.ref && r.ref === this.pendingHeartbeatRef) {
        const u = this._heartbeatSentAt ? Date.now() - this._heartbeatSentAt : void 0;
        try {
          this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error", u);
        } catch (c) {
          this.log("error", "error in heartbeat callback", c);
        }
        this._heartbeatSentAt = null, this.pendingHeartbeatRef = null;
      }
      const { topic: n, event: i, payload: s, ref: o } = r, a = o ? `(${o})` : "", l = s.status || "";
      this.log("receive", `${l} ${n} ${i} ${a}`.trim(), s), this.channels.filter((u) => u._isMember(n)).forEach((u) => u._trigger(i, s, o)), this._triggerStateCallbacks("message", r);
    });
  }
  /**
   * Clear specific timer
   * @internal
   */
  _clearTimer(t) {
    var r;
    t === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : t === "reconnect" && ((r = this.reconnectTimer) === null || r === void 0 || r.reset());
  }
  /**
   * Clear all timers
   * @internal
   */
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  /**
   * Setup connection handlers for WebSocket events
   * @internal
   */
  _setupConnectionHandlers() {
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (t) => this._onConnError(t), this.conn.onmessage = (t) => this._onConnMessage(t), this.conn.onclose = (t) => this._onConnClose(t), this.conn.readyState === vt.open && this._onConnOpen());
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === vt.open || this.conn.readyState === vt.connecting)
        try {
          this.conn.close();
        } catch (t) {
          this.log("error", "Error closing connection", t);
        }
      this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, this.conn = null;
    }
    this._clearAllTimers(), this._terminateWorker(), this.channels.forEach((t) => t.teardown());
  }
  /** @internal */
  _onConnOpen() {
    this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).then(() => {
      this.flushSendBuffer();
    }).catch((r) => {
      this.log("error", "error waiting for auth on connect", r), this.flushSendBuffer();
    }), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open");
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(t), this.workerRef.onerror = (r) => {
      this.log("worker", "worker error", r.message), this._terminateWorker();
    }, this.workerRef.onmessage = (r) => {
      r.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /**
   * Terminate the Web Worker and clear the reference
   * @internal
   */
  _terminateWorker() {
    this.workerRef && (this.log("worker", "terminating worker"), this.workerRef.terminate(), this.workerRef = void 0);
  }
  /** @internal */
  _onConnClose(t) {
    var r;
    this._setConnectionState("disconnected"), this.log("transport", "close", t), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout(), this._triggerStateCallbacks("close", t);
  }
  /** @internal */
  _onConnError(t) {
    this._setConnectionState("disconnected"), this.log("transport", `${t}`), this._triggerChanError(), this._triggerStateCallbacks("error", t);
    try {
      this.heartbeatCallback("error");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(He.error));
  }
  /** @internal */
  _appendParams(t, r) {
    if (Object.keys(r).length === 0)
      return t;
    const n = t.match(/\?/) ? "&" : "?", i = new URLSearchParams(r);
    return `${t}${n}${i}`;
  }
  _workerObjectUrl(t) {
    let r;
    if (t)
      r = t;
    else {
      const n = new Blob([Pg], { type: "application/javascript" });
      r = URL.createObjectURL(n);
    }
    return r;
  }
  /**
   * Set connection state with proper state management
   * @internal
   */
  _setConnectionState(t, r = !1) {
    this._connectionState = t, t === "connecting" ? this._wasManualDisconnect = !1 : t === "disconnecting" && (this._wasManualDisconnect = r);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(t = null) {
    let r, n = !1;
    if (t)
      r = t, n = !0;
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (i) {
        this.log("error", "Error fetching access token from callback", i), r = this.accessTokenValue;
      }
    else
      r = this.accessTokenValue;
    n ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach((i) => {
      const s = {
        access_token: r,
        version: vg
      };
      r && i.updateJoinPayload(s), i.joinedOnce && i._isJoined() && i._push(He.access_token, {
        access_token: r
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(t = "general") {
    this._isManualToken() || this.setAuth().catch((r) => {
      this.log("error", `Error setting auth in ${t}`, r);
    });
  }
  /**
   * Trigger state change callbacks with proper error handling
   * @internal
   */
  _triggerStateCallbacks(t, r) {
    try {
      this.stateChangeCallbacks[t].forEach((n) => {
        try {
          n(r);
        } catch (i) {
          this.log("error", `error in ${t} callback`, i);
        }
      });
    } catch (n) {
      this.log("error", `error triggering ${t} callbacks`, n);
    }
  }
  /**
   * Setup reconnection timer with proper configuration
   * @internal
   */
  _setupReconnectionTimer() {
    this.reconnectTimer = new oh(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, yi.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(t) {
    var r, n, i, s, o, a, l, u, c, p, h, m;
    switch (this.transport = (r = t?.transport) !== null && r !== void 0 ? r : null, this.timeout = (n = t?.timeout) !== null && n !== void 0 ? n : sa, this.heartbeatIntervalMs = (i = t?.heartbeatIntervalMs) !== null && i !== void 0 ? i : yi.HEARTBEAT_INTERVAL, this.worker = (s = t?.worker) !== null && s !== void 0 ? s : !1, this.accessToken = (o = t?.accessToken) !== null && o !== void 0 ? o : null, this.heartbeatCallback = (a = t?.heartbeatCallback) !== null && a !== void 0 ? a : so, this.vsn = (l = t?.vsn) !== null && l !== void 0 ? l : xu, t?.params && (this.params = t.params), t?.logger && (this.logger = t.logger), (t?.logLevel || t?.log_level) && (this.logLevel = t.logLevel || t.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (u = t?.reconnectAfterMs) !== null && u !== void 0 ? u : (v) => Og[v - 1] || Rg, this.vsn) {
      case yg:
        this.encode = (c = t?.encode) !== null && c !== void 0 ? c : (v, y) => y(JSON.stringify(v)), this.decode = (p = t?.decode) !== null && p !== void 0 ? p : (v, y) => y(JSON.parse(v));
        break;
      case sh:
        this.encode = (h = t?.encode) !== null && h !== void 0 ? h : this.serializer.encode.bind(this.serializer), this.decode = (m = t?.decode) !== null && m !== void 0 ? m : this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = t?.workerUrl;
    }
  }
}
var Dn = class extends Error {
  constructor(e, t) {
    super(e), this.name = "IcebergError", this.status = t.status, this.icebergType = t.icebergType, this.icebergCode = t.icebergCode, this.details = t.details, this.isCommitStateUnknown = t.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(t.status) && t.icebergType?.includes("CommitState") === !0;
  }
  /**
   * Returns true if the error is a 404 Not Found error.
   */
  isNotFound() {
    return this.status === 404;
  }
  /**
   * Returns true if the error is a 409 Conflict error.
   */
  isConflict() {
    return this.status === 409;
  }
  /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function Ag(e, t, r) {
  const n = new URL(t, e);
  if (r)
    for (const [i, s] of Object.entries(r))
      s !== void 0 && n.searchParams.set(i, s);
  return n.toString();
}
async function Ig(e) {
  return !e || e.type === "none" ? {} : e.type === "bearer" ? { Authorization: `Bearer ${e.token}` } : e.type === "header" ? { [e.name]: e.value } : e.type === "custom" ? await e.getHeaders() : {};
}
function Ng(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: r,
      path: n,
      query: i,
      body: s,
      headers: o
    }) {
      const a = Ag(e.baseUrl, n, i), l = await Ig(e.auth), u = await t(a, {
        method: r,
        headers: {
          ...s ? { "Content-Type": "application/json" } : {},
          ...l,
          ...o
        },
        body: s ? JSON.stringify(s) : void 0
      }), c = await u.text(), p = (u.headers.get("content-type") || "").includes("application/json"), h = p && c ? JSON.parse(c) : c;
      if (!u.ok) {
        const m = p ? h : void 0, v = m?.error;
        throw new Dn(
          v?.message ?? `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: v?.type,
            icebergCode: v?.code,
            details: m
          }
        );
      }
      return { status: u.status, headers: u.headers, data: h };
    }
  };
}
function wi(e) {
  return e.join("");
}
var $g = class {
  constructor(e, t = "") {
    this.client = e, this.prefix = t;
  }
  async listNamespaces(e) {
    const t = e ? { parent: wi(e.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: t
    })).data.namespaces.map((n) => ({ namespace: n }));
  }
  async createNamespace(e, t) {
    const r = {
      namespace: e.namespace,
      properties: t?.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: r
    })).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${wi(e.namespace)}`
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${wi(e.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(e) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${wi(e.namespace)}`
      }), !0;
    } catch (t) {
      if (t instanceof Dn && t.status === 404)
        return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (r) {
      if (r instanceof Dn && r.status === 409)
        return;
      throw r;
    }
  }
};
function or(e) {
  return e.join("");
}
var Lg = class {
  constructor(e, t = "", r) {
    this.client = e, this.prefix = t, this.accessDelegation = r;
  }
  async listTables(e) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(e, t) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables`,
      body: t,
      headers: r
    })).data.metadata;
  }
  async updateTable(e, t) {
    const r = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables/${e.name}`,
      body: t
    });
    return {
      "metadata-location": r.data["metadata-location"],
      metadata: r.data.metadata
    };
  }
  async dropTable(e, t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables/${e.name}`,
      query: { purgeRequested: String(t?.purge ?? !1) }
    });
  }
  async loadTable(e) {
    const t = {};
    return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables/${e.name}`,
      headers: t
    })).data.metadata;
  }
  async tableExists(e) {
    const t = {};
    this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${or(e.namespace)}/tables/${e.name}`,
        headers: t
      }), !0;
    } catch (r) {
      if (r instanceof Dn && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createTableIfNotExists(e, t) {
    try {
      return await this.createTable(e, t);
    } catch (r) {
      if (r instanceof Dn && r.status === 409)
        return await this.loadTable({ namespace: e.namespace, name: t.name });
      throw r;
    }
  }
}, Ug = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(e) {
    let t = "v1";
    e.catalogName && (t += `/${e.catalogName}`);
    const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
    this.client = Ng({
      baseUrl: r,
      auth: e.auth,
      fetchImpl: e.fetch
    }), this.accessDelegation = e.accessDelegation?.join(","), this.namespaceOps = new $g(this.client, t), this.tableOps = new Lg(this.client, t, this.accessDelegation);
  }
  /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */
  async listNamespaces(e) {
    return this.namespaceOps.listNamespaces(e);
  }
  /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */
  async createNamespace(e, t) {
    return this.namespaceOps.createNamespace(e, t);
  }
  /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */
  async dropNamespace(e) {
    await this.namespaceOps.dropNamespace(e);
  }
  /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */
  async loadNamespaceMetadata(e) {
    return this.namespaceOps.loadNamespaceMetadata(e);
  }
  /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */
  async listTables(e) {
    return this.tableOps.listTables(e);
  }
  /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */
  async createTable(e, t) {
    return this.tableOps.createTable(e, t);
  }
  /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */
  async updateTable(e, t) {
    return this.tableOps.updateTable(e, t);
  }
  /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */
  async dropTable(e, t) {
    await this.tableOps.dropTable(e, t);
  }
  /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */
  async loadTable(e) {
    return this.tableOps.loadTable(e);
  }
  /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */
  async namespaceExists(e) {
    return this.namespaceOps.namespaceExists(e);
  }
  /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */
  async tableExists(e) {
    return this.tableOps.tableExists(e);
  }
  /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */
  async createNamespaceIfNotExists(e, t) {
    return this.namespaceOps.createNamespaceIfNotExists(e, t);
  }
  /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */
  async createTableIfNotExists(e, t) {
    return this.tableOps.createTableIfNotExists(e, t);
  }
}, Os = class extends Error {
  constructor(e, t = "storage", r, n) {
    super(e), this.__isStorageError = !0, this.namespace = t, this.name = t === "vectors" ? "StorageVectorsError" : "StorageError", this.status = r, this.statusCode = n;
  }
};
function Rs(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var _i = class extends Os {
  constructor(e, t, r, n = "storage") {
    super(e, n, t, r), this.name = n === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = t, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}, uh = class extends Os {
  constructor(e, t, r = "storage") {
    super(e, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = t;
  }
};
const Dg = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), zg = (e) => {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, la = (e) => {
  if (Array.isArray(e)) return e.map((r) => la(r));
  if (typeof e == "function" || e !== Object(e)) return e;
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const i = r.replace(/([-_][a-z])/gi, (s) => s.toUpperCase().replace(/[-_]/g, ""));
    t[i] = la(n);
  }), t;
}, Bg = (e) => !e || typeof e != "string" || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes("/") || e.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e);
function zn(e) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
}
function Mg(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fg(e) {
  var t = Mg(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function Wg(e, t, r) {
  return (t = Fg(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ou(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ou(Object(r), !0).forEach(function(n) {
      Wg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ou(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Ru = (e) => {
  var t;
  return e.msg || e.message || e.error_description || (typeof e.error == "string" ? e.error : (t = e.error) === null || t === void 0 ? void 0 : t.message) || JSON.stringify(e);
}, Vg = async (e, t, r, n) => {
  if (e && typeof e == "object" && "status" in e && "ok" in e && typeof e.status == "number" && !r?.noResolveJson) {
    const i = e, s = i.status || 500;
    if (typeof i.json == "function") i.json().then((o) => {
      const a = o?.statusCode || o?.code || s + "";
      t(new _i(Ru(o), s, a, n));
    }).catch(() => {
      if (n === "vectors") {
        const o = s + "";
        t(new _i(i.statusText || `HTTP ${s} error`, s, o, n));
      } else {
        const o = s + "";
        t(new _i(i.statusText || `HTTP ${s} error`, s, o, n));
      }
    });
    else {
      const o = s + "";
      t(new _i(i.statusText || `HTTP ${s} error`, s, o, n));
    }
  } else t(new uh(Ru(e), e, n));
}, Hg = (e, t, r, n) => {
  const i = {
    method: e,
    headers: t?.headers || {}
  };
  return e === "GET" || e === "HEAD" || !n ? A(A({}, i), r) : (zg(n) ? (i.headers = A({ "Content-Type": "application/json" }, t?.headers), i.body = JSON.stringify(n)) : i.body = n, t?.duplex && (i.duplex = t.duplex), A(A({}, i), r));
};
async function rn(e, t, r, n, i, s, o) {
  return new Promise((a, l) => {
    e(r, Hg(t, n, i, s)).then((u) => {
      if (!u.ok) throw u;
      if (n?.noResolveJson) return u;
      if (o === "vectors") {
        const c = u.headers.get("content-type");
        if (u.headers.get("content-length") === "0" || u.status === 204) return {};
        if (!c || !c.includes("application/json")) return {};
      }
      return u.json();
    }).then((u) => a(u)).catch((u) => Vg(u, l, n, o));
  });
}
function ch(e = "storage") {
  return {
    get: async (t, r, n, i) => rn(t, "GET", r, n, i, void 0, e),
    post: async (t, r, n, i, s) => rn(t, "POST", r, i, s, n, e),
    put: async (t, r, n, i, s) => rn(t, "PUT", r, i, s, n, e),
    head: async (t, r, n, i) => rn(t, "HEAD", r, A(A({}, n), {}, { noResolveJson: !0 }), i, void 0, e),
    remove: async (t, r, n, i, s) => rn(t, "DELETE", r, i, s, n, e)
  };
}
const Kg = ch("storage"), { get: Bn, post: We, put: ua, head: qg, remove: ul } = Kg, Ce = ch("vectors");
var Hr = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(e, t = {}, r, n = "storage") {
    this.shouldThrowOnError = !1, this.url = e, this.headers = t, this.fetch = Dg(r), this.namespace = n;
  }
  /**
  * Enable throwing errors instead of returning them.
  * When enabled, errors are thrown instead of returned in { data, error } format.
  *
  * @returns this - For method chaining
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Handles API operation with standardized error handling
  * Eliminates repetitive try-catch blocks across all API methods
  *
  * This wrapper:
  * 1. Executes the operation
  * 2. Returns { data, error: null } on success
  * 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
  * 4. Throws error on failure (if shouldThrowOnError is true)
  *
  * @typeParam T - The expected data type from the operation
  * @param operation - Async function that performs the API call
  * @returns Promise with { data, error } tuple
  *
  * @example
  * ```typescript
  * async listBuckets() {
  *   return this.handleOperation(async () => {
  *     return await get(this.fetch, `${this.url}/bucket`, {
  *       headers: this.headers,
  *     })
  *   })
  * }
  * ```
  */
  async handleOperation(e) {
    var t = this;
    try {
      return {
        data: await e(),
        error: null
      };
    } catch (r) {
      if (t.shouldThrowOnError) throw r;
      if (Rs(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
}, Gg = class {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t;
  }
  then(e, t) {
    return this.execute().then(e, t);
  }
  async execute() {
    var e = this;
    try {
      return {
        data: (await e.downloadFn()).body,
        error: null
      };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (Rs(t)) return {
        data: null,
        error: t
      };
      throw t;
    }
  }
};
let dh;
dh = Symbol.toStringTag;
var Jg = class {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t, this[dh] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new Gg(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var e = this;
    try {
      return {
        data: await (await e.downloadFn()).blob(),
        error: null
      };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (Rs(t)) return {
        data: null,
        error: t
      };
      throw t;
    }
  }
};
const Qg = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Pu = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var Yg = class extends Hr {
  constructor(e, t = {}, r, n) {
    super(e, t, n, "storage"), this.bucketId = r;
  }
  /**
  * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
  *
  * @param method HTTP method.
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  */
  async uploadOrUpdate(e, t, r, n) {
    var i = this;
    return i.handleOperation(async () => {
      let s;
      const o = A(A({}, Pu), n);
      let a = A(A({}, i.headers), e === "POST" && { "x-upsert": String(o.upsert) });
      const l = o.metadata;
      typeof Blob < "u" && r instanceof Blob ? (s = new FormData(), s.append("cacheControl", o.cacheControl), l && s.append("metadata", i.encodeMetadata(l)), s.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (s = r, s.has("cacheControl") || s.append("cacheControl", o.cacheControl), l && !s.has("metadata") && s.append("metadata", i.encodeMetadata(l))) : (s = r, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType, l && (a["x-metadata"] = i.toBase64(i.encodeMetadata(l))), (typeof ReadableStream < "u" && s instanceof ReadableStream || s && typeof s == "object" && "pipe" in s && typeof s.pipe == "function") && !o.duplex && (o.duplex = "half")), n?.headers && (a = A(A({}, a), n.headers));
      const u = i._removeEmptyFolders(t), c = i._getFinalPath(u), p = await (e == "PUT" ? ua : We)(i.fetch, `${i.url}/object/${c}`, s, A({ headers: a }, o?.duplex ? { duplex: o.duplex } : {}));
      return {
        path: u,
        id: p.Id,
        fullPath: p.Key
      };
    });
  }
  /**
  * Uploads a file to an existing bucket.
  *
  * @category File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Upload file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: false
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Upload file using `ArrayBuffer` from base64 file data
  * ```js
  * import { decode } from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  */
  async upload(e, t, r) {
    return this.uploadOrUpdate("POST", e, t, r);
  }
  /**
  * Upload a file with a token generated from `createSignedUploadUrl`.
  *
  * @category File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param token The token generated from `createSignedUploadUrl`
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions HTTP headers (cacheControl, contentType, etc.).
  * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
  * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
  * @returns Promise with response containing file path and fullPath or error
  *
  * @example Upload to a signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "folder/cat.jpg",
  *     "fullPath": "avatars/folder/cat.jpg"
  *   },
  *   "error": null
  * }
  * ```
  */
  async uploadToSignedUrl(e, t, r, n) {
    var i = this;
    const s = i._removeEmptyFolders(e), o = i._getFinalPath(s), a = new URL(i.url + `/object/upload/sign/${o}`);
    return a.searchParams.set("token", t), i.handleOperation(async () => {
      let l;
      const u = A({ upsert: Pu.upsert }, n), c = A(A({}, i.headers), { "x-upsert": String(u.upsert) });
      return typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", u.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", u.cacheControl)) : (l = r, c["cache-control"] = `max-age=${u.cacheControl}`, c["content-type"] = u.contentType), {
        path: s,
        fullPath: (await ua(i.fetch, a.toString(), l, { headers: c })).Key
      };
    });
  }
  /**
  * Creates a signed upload URL.
  * Signed upload URLs can be used to upload files to the bucket without further authentication.
  * They are valid for 2 hours.
  *
  * @category File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
  * @returns Promise with response containing signed upload URL, token, and path or error
  *
  * @example Create Signed Upload URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUploadUrl('folder/cat.jpg')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
  *     "path": "folder/cat.jpg",
  *     "token": "<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  */
  async createSignedUploadUrl(e, t) {
    var r = this;
    return r.handleOperation(async () => {
      let n = r._getFinalPath(e);
      const i = A({}, r.headers);
      t?.upsert && (i["x-upsert"] = "true");
      const s = await We(r.fetch, `${r.url}/object/upload/sign/${n}`, {}, { headers: i }), o = new URL(r.url + s.url), a = o.searchParams.get("token");
      if (!a) throw new Os("No token returned by API");
      return {
        signedUrl: o.toString(),
        path: e,
        token: a
      };
    });
  }
  /**
  * Replaces an existing file at the specified path with a new one.
  *
  * @category File Buckets
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Update file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: true
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Update file using `ArrayBuffer` from base64 file data
  * ```js
  * import {decode} from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  */
  async update(e, t, r) {
    return this.uploadOrUpdate("PUT", e, t, r);
  }
  /**
  * Moves an existing file to a new path in the same bucket.
  *
  * @category File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
  * @param options The destination options.
  * @returns Promise with response containing success message or error
  *
  * @example Move file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .move('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully moved"
  *   },
  *   "error": null
  * }
  * ```
  */
  async move(e, t, r) {
    var n = this;
    return n.handleOperation(async () => await We(n.fetch, `${n.url}/object/move`, {
      bucketId: n.bucketId,
      sourceKey: e,
      destinationKey: t,
      destinationBucket: r?.destinationBucket
    }, { headers: n.headers }));
  }
  /**
  * Copies an existing file to a new path in the same bucket.
  *
  * @category File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
  * @param options The destination options.
  * @returns Promise with response containing copied file path or error
  *
  * @example Copy file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .copy('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "avatars/private/avatar2.png"
  *   },
  *   "error": null
  * }
  * ```
  */
  async copy(e, t, r) {
    var n = this;
    return n.handleOperation(async () => ({ path: (await We(n.fetch, `${n.url}/object/copy`, {
      bucketId: n.bucketId,
      sourceKey: e,
      destinationKey: t,
      destinationBucket: r?.destinationBucket
    }, { headers: n.headers })).Key }));
  }
  /**
  * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @returns Promise with response containing signed URL or error
  *
  * @example Create Signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Create a signed URL for an asset with transformations
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Create a signed URL which triggers the download of the asset
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     download: true,
  *   })
  * ```
  */
  async createSignedUrl(e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      let i = n._getFinalPath(e), s = await We(n.fetch, `${n.url}/object/sign/${i}`, A({ expiresIn: t }, r?.transform ? { transform: r.transform } : {}), { headers: n.headers });
      const o = r?.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
      return { signedUrl: encodeURI(`${n.url}${s.signedURL}${o}`) };
    });
  }
  /**
  * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category File Buckets
  * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
  * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @returns Promise with response containing array of objects with signedUrl, path, and error or error
  *
  * @example Create Signed URLs
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "error": null,
  *       "path": "folder/avatar1.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *     },
  *     {
  *       "error": null,
  *       "path": "folder/avatar2.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  */
  async createSignedUrls(e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      const i = await We(n.fetch, `${n.url}/object/sign/${n.bucketId}`, {
        expiresIn: t,
        paths: e
      }, { headers: n.headers }), s = r?.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
      return i.map((o) => A(A({}, o), {}, { signedUrl: o.signedURL ? encodeURI(`${n.url}${o.signedURL}${s}`) : null }));
    });
  }
  /**
  * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
  *
  * @category File Buckets
  * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
  * @param options.transform Transform the asset before serving it to the client.
  * @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
  * @returns BlobDownloadBuilder instance for downloading the file
  *
  * @example Download file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": <BLOB>,
  *   "error": null
  * }
  * ```
  *
  * @example Download file with transformations
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *       quality: 80
  *     }
  *   })
  * ```
  *
  * @example Download with cache control (useful in Edge Functions)
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { cache: 'no-store' })
  * ```
  *
  * @example Download with abort signal
  * ```js
  * const controller = new AbortController()
  * setTimeout(() => controller.abort(), 5000)
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { signal: controller.signal })
  * ```
  */
  download(e, t, r) {
    const n = typeof t?.transform < "u" ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString(t?.transform || {}), s = i ? `?${i}` : "", o = this._getFinalPath(e), a = () => Bn(this.fetch, `${this.url}/${n}/${o}${s}`, {
      headers: this.headers,
      noResolveJson: !0
    }, r);
    return new Jg(a, this.shouldThrowOnError);
  }
  /**
  * Retrieves the details of an existing file.
  *
  * @category File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing file metadata or error
  *
  * @example Get file info
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .info('folder/avatar1.png')
  * ```
  */
  async info(e) {
    var t = this;
    const r = t._getFinalPath(e);
    return t.handleOperation(async () => la(await Bn(t.fetch, `${t.url}/object/info/${r}`, { headers: t.headers })));
  }
  /**
  * Checks the existence of a file.
  *
  * @category File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing boolean indicating file existence or error
  *
  * @example Check file existence
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .exists('folder/avatar1.png')
  * ```
  */
  async exists(e) {
    var t = this;
    const r = t._getFinalPath(e);
    try {
      return await qg(t.fetch, `${t.url}/object/${r}`, { headers: t.headers }), {
        data: !0,
        error: null
      };
    } catch (n) {
      if (t.shouldThrowOnError) throw n;
      if (Rs(n) && n instanceof uh) {
        const i = n.originalError;
        if ([400, 404].includes(i?.status)) return {
          data: !1,
          error: n
        };
      }
      throw n;
    }
  }
  /**
  * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
  * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
  *
  * @category File Buckets
  * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
  * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @returns Object with public URL
  *
  * @example Returns the URL for an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
  *   }
  * }
  * ```
  *
  * @example Returns the URL for an asset in a public bucket with transformations
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Returns the URL which triggers the download of an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     download: true,
  *   })
  * ```
  */
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e), n = [], i = t?.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    i !== "" && n.push(i);
    const s = typeof t?.transform < "u" ? "render/image" : "object", o = this.transformOptsToQueryString(t?.transform || {});
    o !== "" && n.push(o);
    let a = n.join("&");
    return a !== "" && (a = `?${a}`), { data: { publicUrl: encodeURI(`${this.url}/${s}/public/${r}${a}`) } };
  }
  /**
  * Deletes files within the same bucket
  *
  * @category File Buckets
  * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
  * @returns Promise with response containing array of deleted file objects or error
  *
  * @example Delete file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .remove(['folder/avatar1.png'])
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [],
  *   "error": null
  * }
  * ```
  */
  async remove(e) {
    var t = this;
    return t.handleOperation(async () => await ul(t.fetch, `${t.url}/object/${t.bucketId}`, { prefixes: e }, { headers: t.headers }));
  }
  /**
  * Get file metadata
  * @param id the file id to retrieve metadata
  */
  /**
  * Update file metadata
  * @param id the file id to update metadata
  * @param meta the new file metadata
  */
  /**
  * Lists all the files and folders within a path of the bucket.
  *
  * @category File Buckets
  * @param path The folder path.
  * @param options Search options including limit (defaults to 100), offset, sortBy, and search
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing array of files or error
  *
  * @example List files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "avatar1.png",
  *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
  *       "updated_at": "2024-05-22T23:06:05.580Z",
  *       "created_at": "2024-05-22T23:04:34.443Z",
  *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
  *       "metadata": {
  *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
  *         "size": 32175,
  *         "mimetype": "image/png",
  *         "cacheControl": "max-age=3600",
  *         "lastModified": "2024-05-22T23:06:05.574Z",
  *         "contentLength": 32175,
  *         "httpStatusCode": 200
  *       }
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @example Search files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *     search: 'jon'
  *   })
  * ```
  */
  async list(e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      const i = A(A(A({}, Qg), t), {}, { prefix: e || "" });
      return await We(n.fetch, `${n.url}/object/list/${n.bucketId}`, i, { headers: n.headers }, r);
    });
  }
  /**
  * @experimental this method signature might change in the future
  *
  * @category File Buckets
  * @param options search options
  * @param parameters
  */
  async listV2(e, t) {
    var r = this;
    return r.handleOperation(async () => {
      const n = A({}, e);
      return await We(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, n, { headers: r.headers }, t);
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
  }
};
const Xg = "2.95.3", Jn = { "X-Client-Info": `storage-js/${Xg}` };
var Zg = class extends Hr {
  constructor(e, t = {}, r, n) {
    const i = new URL(e);
    n?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase."));
    const s = i.href.replace(/\/$/, ""), o = A(A({}, Jn), t);
    super(s, o, r, "storage");
  }
  /**
  * Retrieves the details of all Storage buckets within an existing project.
  *
  * @category File Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of buckets or error
  *
  * @example List buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets()
  * ```
  *
  * @example List buckets with options
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc',
  *     search: 'prod'
  *   })
  * ```
  */
  async listBuckets(e) {
    var t = this;
    return t.handleOperation(async () => {
      const r = t.listBucketOptionsToQueryString(e);
      return await Bn(t.fetch, `${t.url}/bucket${r}`, { headers: t.headers });
    });
  }
  /**
  * Retrieves the details of an existing Storage bucket.
  *
  * @category File Buckets
  * @param id The unique identifier of the bucket you would like to retrieve.
  * @returns Promise with response containing bucket details or error
  *
  * @example Get bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .getBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "id": "avatars",
  *     "name": "avatars",
  *     "owner": "",
  *     "public": false,
  *     "file_size_limit": 1024,
  *     "allowed_mime_types": [
  *       "image/png"
  *     ],
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  */
  async getBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Bn(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }));
  }
  /**
  * Creates a new Storage bucket
  *
  * @category File Buckets
  * @param id A unique identifier for the bucket you are creating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
  *   - default bucket type is `STANDARD`
  * @returns Promise with response containing newly created bucket name or error
  *
  * @example Create bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .createBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "avatars"
  *   },
  *   "error": null
  * }
  * ```
  */
  async createBucket(e, t = { public: !1 }) {
    var r = this;
    return r.handleOperation(async () => await We(r.fetch, `${r.url}/bucket`, {
      id: e,
      name: e,
      type: t.type,
      public: t.public,
      file_size_limit: t.fileSizeLimit,
      allowed_mime_types: t.allowedMimeTypes
    }, { headers: r.headers }));
  }
  /**
  * Updates a Storage bucket
  *
  * @category File Buckets
  * @param id A unique identifier for the bucket you are updating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @returns Promise with response containing success message or error
  *
  * @example Update bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .updateBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully updated"
  *   },
  *   "error": null
  * }
  * ```
  */
  async updateBucket(e, t) {
    var r = this;
    return r.handleOperation(async () => await ua(r.fetch, `${r.url}/bucket/${e}`, {
      id: e,
      name: e,
      public: t.public,
      file_size_limit: t.fileSizeLimit,
      allowed_mime_types: t.allowedMimeTypes
    }, { headers: r.headers }));
  }
  /**
  * Removes all objects inside a single bucket.
  *
  * @category File Buckets
  * @param id The unique identifier of the bucket you would like to empty.
  * @returns Promise with success message or error
  *
  * @example Empty bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .emptyBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully emptied"
  *   },
  *   "error": null
  * }
  * ```
  */
  async emptyBucket(e) {
    var t = this;
    return t.handleOperation(async () => await We(t.fetch, `${t.url}/bucket/${e}/empty`, {}, { headers: t.headers }));
  }
  /**
  * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
  * You must first `empty()` the bucket.
  *
  * @category File Buckets
  * @param id The unique identifier of the bucket you would like to delete.
  * @returns Promise with success message or error
  *
  * @example Delete bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .deleteBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  */
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await ul(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
  }
  listBucketOptionsToQueryString(e) {
    const t = {};
    return e && ("limit" in e && (t.limit = String(e.limit)), "offset" in e && (t.offset = String(e.offset)), e.search && (t.search = e.search), e.sortColumn && (t.sortColumn = e.sortColumn), e.sortOrder && (t.sortOrder = e.sortOrder)), Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : "";
  }
}, em = class extends Hr {
  /**
  * @alpha
  *
  * Creates a new StorageAnalyticsClient instance
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param url - The base URL for the storage API
  * @param headers - HTTP headers to include in requests
  * @param fetch - Optional custom fetch implementation
  *
  * @example
  * ```typescript
  * const client = new StorageAnalyticsClient(url, headers)
  * ```
  */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = A(A({}, Jn), t);
    super(n, i, r, "storage");
  }
  /**
  * @alpha
  *
  * Creates a new analytics bucket using Iceberg tables
  * Analytics buckets are optimized for analytical queries and data processing
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param name A unique name for the bucket you are creating
  * @returns Promise with response containing newly created analytics bucket or error
  *
  * @example Create analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "analytics-data",
  *     "type": "ANALYTICS",
  *     "format": "iceberg",
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  */
  async createBucket(e) {
    var t = this;
    return t.handleOperation(async () => await We(t.fetch, `${t.url}/bucket`, { name: e }, { headers: t.headers }));
  }
  /**
  * @alpha
  *
  * Retrieves the details of all Analytics Storage buckets within an existing project
  * Only returns buckets of type 'ANALYTICS'
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of analytics buckets or error
  *
  * @example List analytics buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "analytics-data",
  *       "type": "ANALYTICS",
  *       "format": "iceberg",
  *       "created_at": "2024-05-22T22:26:05.100Z",
  *       "updated_at": "2024-05-22T22:26:05.100Z"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  */
  async listBuckets(e) {
    var t = this;
    return t.handleOperation(async () => {
      const r = new URLSearchParams();
      e?.limit !== void 0 && r.set("limit", e.limit.toString()), e?.offset !== void 0 && r.set("offset", e.offset.toString()), e?.sortColumn && r.set("sortColumn", e.sortColumn), e?.sortOrder && r.set("sortOrder", e.sortOrder), e?.search && r.set("search", e.search);
      const n = r.toString(), i = n ? `${t.url}/bucket?${n}` : `${t.url}/bucket`;
      return await Bn(t.fetch, i, { headers: t.headers });
    });
  }
  /**
  * @alpha
  *
  * Deletes an existing analytics bucket
  * A bucket can't be deleted with existing objects inside it
  * You must first empty the bucket before deletion
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param bucketName The unique identifier of the bucket you would like to delete
  * @returns Promise with response containing success message or error
  *
  * @example Delete analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .deleteBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  */
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await ul(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
  }
  /**
  * @alpha
  *
  * Get an Iceberg REST Catalog client configured for a specific analytics bucket
  * Use this to perform advanced table and namespace operations within the bucket
  * The returned client provides full access to the Apache Iceberg REST Catalog API
  * with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param bucketName - The name of the analytics bucket (warehouse) to connect to
  * @returns The wrapped Iceberg catalog client
  * @throws {StorageError} If the bucket name is invalid
  *
  * @example Get catalog and create table
  * ```js
  * // First, create an analytics bucket
  * const { data: bucket, error: bucketError } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  *
  * // Get the Iceberg catalog for that bucket
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Create a namespace
  * const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
  *
  * // Create a table with schema
  * const { data: tableMetadata, error: tableError } = await catalog.createTable(
  *   { namespace: ['default'] },
  *   {
  *     name: 'events',
  *     schema: {
  *       type: 'struct',
  *       fields: [
  *         { id: 1, name: 'id', type: 'long', required: true },
  *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
  *         { id: 3, name: 'user_id', type: 'string', required: false }
  *       ],
  *       'schema-id': 0,
  *       'identifier-field-ids': [1]
  *     },
  *     'partition-spec': {
  *       'spec-id': 0,
  *       fields: []
  *     },
  *     'write-order': {
  *       'order-id': 0,
  *       fields: []
  *     },
  *     properties: {
  *       'write.format.default': 'parquet'
  *     }
  *   }
  * )
  * ```
  *
  * @example List tables in namespace
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all tables in the default namespace
  * const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
  * if (listError) {
  *   if (listError.isNotFound()) {
  *     console.log('Namespace not found')
  *   }
  *   return
  * }
  * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
  * ```
  *
  * @example Working with namespaces
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all namespaces
  * const { data: namespaces } = await catalog.listNamespaces()
  *
  * // Create namespace with properties
  * await catalog.createNamespace(
  *   { namespace: ['production'] },
  *   { properties: { owner: 'data-team', env: 'prod' } }
  * )
  * ```
  *
  * @example Cleanup operations
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Drop table with purge option (removes all data)
  * const { error: dropError } = await catalog.dropTable(
  *   { namespace: ['default'], name: 'events' },
  *   { purge: true }
  * )
  *
  * if (dropError?.isNotFound()) {
  *   console.log('Table does not exist')
  * }
  *
  * // Drop namespace (must be empty)
  * await catalog.dropNamespace({ namespace: ['default'] })
  * ```
  *
  * @remarks
  * This method provides a bridge between Supabase's bucket management and the standard
  * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
  * All authentication and configuration is handled automatically using your Supabase credentials.
  *
  * **Error Handling**: Invalid bucket names throw immediately. All catalog
  * operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
  * Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
  * Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
  *
  * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
  * deletes all table data. Without it, the table is marked as deleted but data remains.
  *
  * **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
  * For complete API documentation and advanced usage, refer to the
  * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
  */
  from(e) {
    var t = this;
    if (!Bg(e)) throw new Os("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const r = new Ug({
      baseUrl: this.url,
      catalogName: e,
      auth: {
        type: "custom",
        getHeaders: async () => t.headers
      },
      fetch: this.fetch
    }), n = this.shouldThrowOnError;
    return new Proxy(r, { get(i, s) {
      const o = i[s];
      return typeof o != "function" ? o : async (...a) => {
        try {
          return {
            data: await o.apply(i, a),
            error: null
          };
        } catch (l) {
          if (n) throw l;
          return {
            data: null,
            error: l
          };
        }
      };
    } });
  }
}, tm = class extends Hr {
  /** Creates a new VectorIndexApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = A(A({}, Jn), {}, { "Content-Type": "application/json" }, t);
    super(n, i, r, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(e) {
    var t = this;
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/CreateIndex`, e, { headers: t.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => await Ce.post(r.fetch, `${r.url}/GetIndex`, {
      vectorBucketName: e,
      indexName: t
    }, { headers: r.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(e) {
    var t = this;
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/ListIndexes`, e, { headers: t.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => await Ce.post(r.fetch, `${r.url}/DeleteIndex`, {
      vectorBucketName: e,
      indexName: t
    }, { headers: r.headers }) || {});
  }
}, rm = class extends Hr {
  /** Creates a new VectorDataApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = A(A({}, Jn), {}, { "Content-Type": "application/json" }, t);
    super(n, i, r, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(e) {
    var t = this;
    if (e.vectors.length < 1 || e.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/PutVectors`, e, { headers: t.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(e) {
    var t = this;
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/GetVectors`, e, { headers: t.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(e) {
    var t = this;
    if (e.segmentCount !== void 0) {
      if (e.segmentCount < 1 || e.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
    }
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/ListVectors`, e, { headers: t.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(e) {
    var t = this;
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/QueryVectors`, e, { headers: t.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(e) {
    var t = this;
    if (e.keys.length < 1 || e.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/DeleteVectors`, e, { headers: t.headers }) || {});
  }
}, nm = class extends Hr {
  /** Creates a new VectorBucketApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = A(A({}, Jn), {}, { "Content-Type": "application/json" }, t);
    super(n, i, r, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: t.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(e = {}) {
    var t = this;
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/ListVectorBuckets`, e, { headers: t.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Ce.post(t.fetch, `${t.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
  }
}, im = class extends nm {
  /**
  * @alpha
  *
  * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param url - Base URL of the Storage Vectors REST API.
  * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
  * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
  *
  * @example
  * ```typescript
  * const client = new StorageVectorsClient(url, options)
  * ```
  */
  constructor(e, t = {}) {
    super(e, t.headers || {}, t.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific vector bucket
  * Returns a scoped client for index and vector operations within the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Bucket-scoped client with index and vector operations
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  from(e) {
    return new sm(this.url, this.headers, e, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector bucket
  * Vector buckets are containers for vector indexes and their data
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Unique name for the vector bucket
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .createBucket('embeddings-prod')
  * ```
  */
  async createBucket(e) {
    var t = () => super.createBucket, r = this;
    return t().call(r, e);
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific vector bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Promise with bucket metadata or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .getBucket('embeddings-prod')
  *
  * console.log('Bucket created:', data?.vectorBucket.creationTime)
  * ```
  */
  async getBucket(e) {
    var t = () => super.getBucket, r = this;
    return t().call(r, e);
  }
  /**
  *
  * @alpha
  *
  * Lists all vector buckets with optional filtering and pagination
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Optional filters (prefix, maxResults, nextToken)
  * @returns Promise with list of buckets or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .listBuckets({ prefix: 'embeddings-' })
  *
  * data?.vectorBuckets.forEach(bucket => {
  *   console.log(bucket.vectorBucketName)
  * })
  * ```
  */
  async listBuckets(e = {}) {
    var t = () => super.listBuckets, r = this;
    return t().call(r, e);
  }
  /**
  *
  * @alpha
  *
  * Deletes a vector bucket (bucket must be empty)
  * All indexes must be deleted before deleting the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Name of the vector bucket to delete
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .deleteBucket('embeddings-old')
  * ```
  */
  async deleteBucket(e) {
    var t = () => super.deleteBucket, r = this;
    return t().call(r, e);
  }
}, sm = class extends tm {
  /**
  * @alpha
  *
  * Creates a helper that automatically scopes all index operations to the provided bucket.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  constructor(e, t, r, n) {
    super(e, t, n), this.vectorBucketName = r;
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Index configuration (vectorBucketName is automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.createIndex({
  *   indexName: 'documents-openai',
  *   dataType: 'float32',
  *   dimension: 1536,
  *   distanceMetric: 'cosine',
  *   metadataConfiguration: {
  *     nonFilterableMetadataKeys: ['raw_text']
  *   }
  * })
  * ```
  */
  async createIndex(e) {
    var t = () => super.createIndex, r = this;
    return t().call(r, A(A({}, e), {}, { vectorBucketName: r.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Lists indexes in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Listing options (vectorBucketName is automatically set)
  * @returns Promise with response containing indexes array and pagination token or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
  * ```
  */
  async listIndexes(e = {}) {
    var t = () => super.listIndexes, r = this;
    return t().call(r, A(A({}, e), {}, { vectorBucketName: r.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param indexName - Name of the index to retrieve
  * @returns Promise with index metadata or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.getIndex('documents-openai')
  * console.log('Dimension:', data?.index.dimension)
  * ```
  */
  async getIndex(e) {
    var t = () => super.getIndex, r = this;
    return t().call(r, r.vectorBucketName, e);
  }
  /**
  *
  * @alpha
  *
  * Deletes an index from this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param indexName - Name of the index to delete
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.deleteIndex('old-index')
  * ```
  */
  async deleteIndex(e) {
    var t = () => super.deleteIndex, r = this;
    return t().call(r, r.vectorBucketName, e);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific index within this bucket
  * Returns a scoped client for vector data operations
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param indexName - Name of the index
  * @returns Index-scoped client with vector data operations
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  *
  * // Insert vectors
  * await index.putVectors({
  *   vectors: [
  *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
  *   ]
  * })
  *
  * // Query similar vectors
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [...] },
  *   topK: 5
  * })
  * ```
  */
  index(e) {
    return new om(this.url, this.headers, this.vectorBucketName, e, this.fetch);
  }
}, om = class extends rm {
  /**
  *
  * @alpha
  *
  * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * ```
  */
  constructor(e, t, r, n, i) {
    super(e, t, i), this.vectorBucketName = r, this.indexName = n;
  }
  /**
  *
  * @alpha
  *
  * Inserts or updates vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Vector insertion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.putVectors({
  *   vectors: [
  *     {
  *       key: 'doc-1',
  *       data: { float32: [0.1, 0.2, ...] },
  *       metadata: { title: 'Introduction', page: 1 }
  *     }
  *   ]
  * })
  * ```
  */
  async putVectors(e) {
    var t = () => super.putVectors, r = this;
    return t().call(r, A(A({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Vector retrieval options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.getVectors({
  *   keys: ['doc-1', 'doc-2'],
  *   returnMetadata: true
  * })
  * ```
  */
  async getVectors(e) {
    var t = () => super.getVectors, r = this;
    return t().call(r, A(A({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Lists vectors in this index with pagination
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Listing options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array and pagination token or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.listVectors({
  *   maxResults: 500,
  *   returnMetadata: true
  * })
  * ```
  */
  async listVectors(e = {}) {
    var t = () => super.listVectors, r = this;
    return t().call(r, A(A({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Queries for similar vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Query options (bucket and index names automatically set)
  * @returns Promise with response containing matches array of similar vectors ordered by distance or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [0.1, 0.2, ...] },
  *   topK: 5,
  *   filter: { category: 'technical' },
  *   returnDistance: true,
  *   returnMetadata: true
  * })
  * ```
  */
  async queryVectors(e) {
    var t = () => super.queryVectors, r = this;
    return t().call(r, A(A({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Deletes vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Deletion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.deleteVectors({
  *   keys: ['doc-1', 'doc-2', 'doc-3']
  * })
  * ```
  */
  async deleteVectors(e) {
    var t = () => super.deleteVectors, r = this;
    return t().call(r, A(A({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
}, am = class extends Zg {
  /**
  * Creates a client for Storage buckets, files, analytics, and vectors.
  *
  * @category File Buckets
  * @example
  * ```ts
  * import { StorageClient } from '@supabase/storage-js'
  *
  * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
  *   apikey: 'public-anon-key',
  * })
  * const avatars = storage.from('avatars')
  * ```
  */
  constructor(e, t = {}, r, n) {
    super(e, t, r, n);
  }
  /**
  * Perform file operation in a bucket.
  *
  * @category File Buckets
  * @param id The bucket id to operate on.
  *
  * @example
  * ```typescript
  * const avatars = supabase.storage.from('avatars')
  * ```
  */
  from(e) {
    return new Yg(this.url, this.headers, e, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access vector storage operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @returns A StorageVectorsClient instance configured with the current storage settings.
  */
  get vectors() {
    return new im(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
  *
  * @alpha
  *
  * Access analytics storage operations using Iceberg tables.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @returns A StorageAnalyticsClient instance configured with the current storage settings.
  */
  get analytics() {
    return new em(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const hh = "2.95.3", fr = 30 * 1e3, ca = 3, oo = ca * fr, lm = "http://localhost:9999", um = "supabase.auth.token", cm = { "X-Client-Info": `gotrue-js/${hh}` }, da = "X-Supabase-Api-Version", fh = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, dm = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, hm = 10 * 60 * 1e3;
class Mn extends Error {
  constructor(t, r, n) {
    super(t), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = n;
  }
}
function R(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class fm extends Mn {
  constructor(t, r, n) {
    super(t, r, n), this.name = "AuthApiError", this.status = r, this.code = n;
  }
}
function pm(e) {
  return R(e) && e.name === "AuthApiError";
}
class Vt extends Mn {
  constructor(t, r) {
    super(t), this.name = "AuthUnknownError", this.originalError = r;
  }
}
class ft extends Mn {
  constructor(t, r, n, i) {
    super(t, n, i), this.name = r, this.status = n;
  }
}
class Ee extends ft {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function ao(e) {
  return R(e) && e.name === "AuthSessionMissingError";
}
class ar extends ft {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class ki extends ft {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Si extends ft {
  constructor(t, r = null) {
    super(t, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function gm(e) {
  return R(e) && e.name === "AuthImplicitGrantRedirectError";
}
class ju extends ft {
  constructor(t, r = null) {
    super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class mm extends ft {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class ha extends ft {
  constructor(t, r) {
    super(t, "AuthRetryableFetchError", r, void 0);
  }
}
function lo(e) {
  return R(e) && e.name === "AuthRetryableFetchError";
}
class Au extends ft {
  constructor(t, r, n) {
    super(t, "AuthWeakPasswordError", r, "weak_password"), this.reasons = n;
  }
}
class fa extends ft {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const os = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Iu = ` 	
\r=`.split(""), vm = (() => {
  const e = new Array(128);
  for (let t = 0; t < e.length; t += 1)
    e[t] = -1;
  for (let t = 0; t < Iu.length; t += 1)
    e[Iu[t].charCodeAt(0)] = -2;
  for (let t = 0; t < os.length; t += 1)
    e[os[t].charCodeAt(0)] = t;
  return e;
})();
function Nu(e, t, r) {
  if (e !== null)
    for (t.queue = t.queue << 8 | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(os[n]), t.queuedBits -= 6;
    }
  else if (t.queuedBits > 0)
    for (t.queue = t.queue << 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(os[n]), t.queuedBits -= 6;
    }
}
function ph(e, t, r) {
  const n = vm[e];
  if (n > -1)
    for (t.queue = t.queue << 6 | n, t.queuedBits += 6; t.queuedBits >= 8; )
      r(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
  else {
    if (n === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function $u(e) {
  const t = [], r = (o) => {
    t.push(String.fromCodePoint(o));
  }, n = {
    utf8seq: 0,
    codepoint: 0
  }, i = { queue: 0, queuedBits: 0 }, s = (o) => {
    _m(o, n, r);
  };
  for (let o = 0; o < e.length; o += 1)
    ph(e.charCodeAt(o), i, s);
  return t.join("");
}
function ym(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    t(192 | e >> 6), t(128 | e & 63);
    return;
  } else if (e <= 65535) {
    t(224 | e >> 12), t(128 | e >> 6 & 63), t(128 | e & 63);
    return;
  } else if (e <= 1114111) {
    t(240 | e >> 18), t(128 | e >> 12 & 63), t(128 | e >> 6 & 63), t(128 | e & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function wm(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    let n = e.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const i = (n - 55296) * 1024 & 65535;
      n = (e.charCodeAt(r + 1) - 56320 & 65535 | i) + 65536, r += 1;
    }
    ym(n, t);
  }
}
function _m(e, t, r) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      r(e);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if (!(e >> 7 - n & 1)) {
        t.utf8seq = n;
        break;
      }
    if (t.utf8seq === 2)
      t.codepoint = e & 31;
    else if (t.utf8seq === 3)
      t.codepoint = e & 15;
    else if (t.utf8seq === 4)
      t.codepoint = e & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (e <= 127)
      throw new Error("Invalid UTF-8 sequence");
    t.codepoint = t.codepoint << 6 | e & 63, t.utf8seq -= 1, t.utf8seq === 0 && r(t.codepoint);
  }
}
function Nr(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (i) => {
    t.push(i);
  };
  for (let i = 0; i < e.length; i += 1)
    ph(e.charCodeAt(i), r, n);
  return new Uint8Array(t);
}
function km(e) {
  const t = [];
  return wm(e, (r) => t.push(r)), new Uint8Array(t);
}
function Gt(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (i) => {
    t.push(i);
  };
  return e.forEach((i) => Nu(i, r, n)), Nu(null, r, n), t.join("");
}
function Sm(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function bm() {
  return Symbol("auth-callback");
}
const le = () => typeof window < "u" && typeof document < "u", Dt = {
  tested: !1,
  writable: !1
}, gh = () => {
  if (!le())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Dt.tested)
    return Dt.writable;
  const e = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), Dt.tested = !0, Dt.writable = !0;
  } catch {
    Dt.tested = !0, Dt.writable = !1;
  }
  return Dt.writable;
};
function xm(e) {
  const t = {}, r = new URL(e);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((i, s) => {
        t[s] = i;
      });
    } catch {
    }
  return r.searchParams.forEach((n, i) => {
    t[i] = n;
  }), t;
}
const mh = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), Em = (e) => typeof e == "object" && e !== null && "status" in e && "ok" in e && "json" in e && typeof e.json == "function", pr = async (e, t, r) => {
  await e.setItem(t, JSON.stringify(r));
}, zt = async (e, t) => {
  const r = await e.getItem(t);
  if (!r)
    return null;
  try {
    return JSON.parse(r);
  } catch {
    return r;
  }
}, ae = async (e, t) => {
  await e.removeItem(t);
};
class Ps {
  constructor() {
    this.promise = new Ps.promiseConstructor((t, r) => {
      this.resolve = t, this.reject = r;
    });
  }
}
Ps.promiseConstructor = Promise;
function bi(e) {
  const t = e.split(".");
  if (t.length !== 3)
    throw new fa("Invalid JWT structure");
  for (let n = 0; n < t.length; n++)
    if (!dm.test(t[n]))
      throw new fa("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse($u(t[0])),
    payload: JSON.parse($u(t[1])),
    signature: Nr(t[2]),
    raw: {
      header: t[0],
      payload: t[1]
    }
  };
}
async function Tm(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function Cm(e, t) {
  return new Promise((n, i) => {
    (async () => {
      for (let s = 0; s < 1 / 0; s++)
        try {
          const o = await e(s);
          if (!t(s, null, o)) {
            n(o);
            return;
          }
        } catch (o) {
          if (!t(s, o)) {
            i(o);
            return;
          }
        }
    })();
  });
}
function Om(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function Rm() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = r.length;
    let i = "";
    for (let s = 0; s < 56; s++)
      i += r.charAt(Math.floor(Math.random() * n));
    return i;
  }
  return crypto.getRandomValues(t), Array.from(t, Om).join("");
}
async function Pm(e) {
  const r = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", r), i = new Uint8Array(n);
  return Array.from(i).map((s) => String.fromCharCode(s)).join("");
}
async function jm(e) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
  const r = await Pm(e);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function lr(e, t, r = !1) {
  const n = Rm();
  let i = n;
  r && (i += "/PASSWORD_RECOVERY"), await pr(e, `${t}-code-verifier`, i);
  const s = await jm(n);
  return [s, n === s ? "plain" : "s256"];
}
const Am = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Im(e) {
  const t = e.headers.get(da);
  if (!t || !t.match(Am))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Nm(e) {
  if (!e)
    throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t)
    throw new Error("JWT has expired");
}
function $m(e) {
  switch (e) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const Lm = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ur(e) {
  if (!Lm.test(e))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function uo() {
  const e = {};
  return new Proxy(e, {
    get: (t, r) => {
      if (r === "__isUserNotAvailableProxy")
        return !0;
      if (typeof r == "symbol") {
        const n = r.toString();
        if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (t, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (t, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function Um(e, t) {
  return new Proxy(e, {
    get: (r, n, i) => {
      if (n === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof n == "symbol") {
        const s = n.toString();
        if (s === "Symbol(Symbol.toPrimitive)" || s === "Symbol(Symbol.toStringTag)" || s === "Symbol(util.inspect.custom)" || s === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(r, n, i);
      }
      return !t.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), t.value = !0), Reflect.get(r, n, i);
    }
  });
}
function Lu(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ft = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), Dm = [502, 503, 504];
async function Uu(e) {
  var t;
  if (!Em(e))
    throw new ha(Ft(e), 0);
  if (Dm.includes(e.status))
    throw new ha(Ft(e), e.status);
  let r;
  try {
    r = await e.json();
  } catch (s) {
    throw new Vt(Ft(s), s);
  }
  let n;
  const i = Im(e);
  if (i && i.getTime() >= fh["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code), n) {
    if (n === "weak_password")
      throw new Au(Ft(r), e.status, ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
    if (n === "session_not_found")
      throw new Ee();
  } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((s, o) => s && typeof o == "string", !0))
    throw new Au(Ft(r), e.status, r.weak_password.reasons);
  throw new fm(Ft(r), e.status || 500, n);
}
const zm = (e, t, r, n) => {
  const i = { method: e, headers: t?.headers || {} };
  return e === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t?.headers), i.body = JSON.stringify(n), Object.assign(Object.assign({}, i), r));
};
async function j(e, t, r, n) {
  var i;
  const s = Object.assign({}, n?.headers);
  s[da] || (s[da] = fh["2024-01-01"].name), n?.jwt && (s.Authorization = `Bearer ${n.jwt}`);
  const o = (i = n?.query) !== null && i !== void 0 ? i : {};
  n?.redirectTo && (o.redirect_to = n.redirectTo);
  const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", l = await Bm(e, t, r + a, {
    headers: s,
    noResolveJson: n?.noResolveJson
  }, {}, n?.body);
  return n?.xform ? n?.xform(l) : { data: Object.assign({}, l), error: null };
}
async function Bm(e, t, r, n, i, s) {
  const o = zm(t, n, i, s);
  let a;
  try {
    a = await e(r, Object.assign({}, o));
  } catch (l) {
    throw console.error(l), new ha(Ft(l), 0);
  }
  if (a.ok || await Uu(a), n?.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await Uu(l);
  }
}
function Me(e) {
  var t;
  let r = null;
  Wm(e) && (r = Object.assign({}, e), e.expires_at || (r.expires_at = Sm(e.expires_in)));
  const n = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: r, user: n }, error: null };
}
function Du(e) {
  const t = Me(e);
  return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) && (t.data.weak_password = e.weak_password), t;
}
function _t(e) {
  var t;
  return { data: { user: (t = e.user) !== null && t !== void 0 ? t : e }, error: null };
}
function Mm(e) {
  return { data: e, error: null };
}
function Fm(e) {
  const { action_link: t, email_otp: r, hashed_token: n, redirect_to: i, verification_type: s } = e, o = Cs(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
    action_link: t,
    email_otp: r,
    hashed_token: n,
    redirect_to: i,
    verification_type: s
  }, l = Object.assign({}, o);
  return {
    data: {
      properties: a,
      user: l
    },
    error: null
  };
}
function zu(e) {
  return e;
}
function Wm(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
const co = ["global", "local", "others"];
class Vm {
  /**
   * Creates an admin API client that can be used to manage users and OAuth clients.
   *
   * @example
   * ```ts
   * import { GoTrueAdminApi } from '@supabase/auth-js'
   *
   * const admin = new GoTrueAdminApi({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}` },
   * })
   * ```
   */
  constructor({ url: t = "", headers: r = {}, fetch: n }) {
    this.url = t, this.headers = r, this.fetch = mh(n), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(t, r = co[0]) {
    if (co.indexOf(r) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${co.join(", ")}`);
    try {
      return await j(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
        headers: this.headers,
        jwt: t,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (R(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(t, r = {}) {
    try {
      return await j(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: _t
      });
    } catch (n) {
      if (R(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(t) {
    try {
      const { options: r } = t, n = Cs(t, ["options"]), i = Object.assign(Object.assign({}, n), r);
      return "newEmail" in n && (i.new_email = n?.newEmail, delete i.newEmail), await j(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: i,
        headers: this.headers,
        xform: Fm,
        redirectTo: r?.redirectTo
      });
    } catch (r) {
      if (R(r))
        return {
          data: {
            properties: null,
            user: null
          },
          error: r
        };
      throw r;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(t) {
    try {
      return await j(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: _t
      });
    } catch (r) {
      if (R(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(t) {
    var r, n, i, s, o, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await j(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (s = (i = t?.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: zu
      });
      if (c.error)
        throw c.error;
      const p = await c.json(), h = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, m = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return m.length > 0 && (m.forEach((v) => {
        const y = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)), _ = JSON.parse(v.split(";")[1].split("=")[1]);
        u[`${_}Page`] = y;
      }), u.total = parseInt(h)), { data: Object.assign(Object.assign({}, p), u), error: null };
    } catch (u) {
      if (R(u))
        return { data: { users: [] }, error: u };
      throw u;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(t) {
    ur(t);
    try {
      return await j(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: _t
      });
    } catch (r) {
      if (R(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Updates the user data. Changes are applied directly without confirmation flows.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(t, r) {
    ur(t);
    try {
      return await j(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: r,
        headers: this.headers,
        xform: _t
      });
    } catch (n) {
      if (R(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(t, r = !1) {
    ur(t);
    try {
      return await j(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: {
          should_soft_delete: r
        },
        xform: _t
      });
    } catch (n) {
      if (R(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(t) {
    ur(t.userId);
    try {
      const { data: r, error: n } = await j(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
        headers: this.headers,
        xform: (i) => ({ data: { factors: i }, error: null })
      });
      return { data: r, error: n };
    } catch (r) {
      if (R(r))
        return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(t) {
    ur(t.userId), ur(t.id);
    try {
      return { data: await j(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
        headers: this.headers
      }), error: null };
    } catch (r) {
      if (R(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(t) {
    var r, n, i, s, o, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await j(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (s = (i = t?.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: zu
      });
      if (c.error)
        throw c.error;
      const p = await c.json(), h = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, m = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return m.length > 0 && (m.forEach((v) => {
        const y = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)), _ = JSON.parse(v.split(";")[1].split("=")[1]);
        u[`${_}Page`] = y;
      }), u.total = parseInt(h)), { data: Object.assign(Object.assign({}, p), u), error: null };
    } catch (u) {
      if (R(u))
        return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(t) {
    try {
      return await j(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (R(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(t) {
    try {
      return await j(this.fetch, "GET", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (R(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(t, r) {
    try {
      return await j(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${t}`, {
        body: r,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (R(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(t) {
    try {
      return await j(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (R(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(t) {
    try {
      return await j(this.fetch, "POST", `${this.url}/admin/oauth/clients/${t}/regenerate_secret`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (R(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
function Bu(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, r) => {
      e[t] = r;
    },
    removeItem: (t) => {
      delete e[t];
    }
  };
}
const cr = {
  /**
   * @experimental
   */
  debug: !!(globalThis && gh() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class vh extends Error {
  constructor(t) {
    super(t), this.isAcquireTimeout = !0;
  }
}
class Hm extends vh {
}
async function Km(e, t, r) {
  cr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const n = new globalThis.AbortController();
  return t > 0 && setTimeout(() => {
    n.abort(), cr.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e);
  }, t), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, t === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: n.signal
  }, async (i) => {
    if (i) {
      cr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, i.name);
      try {
        return await r();
      } finally {
        cr.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, i.name);
      }
    } else {
      if (t === 0)
        throw cr.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new Hm(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
      if (cr.debug)
        try {
          const s = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(s, null, "  "));
        } catch (s) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", s);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await r();
    }
  }));
}
function qm() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function yh(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function Gm(e) {
  return parseInt(e, 16);
}
function Jm(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Qm(e) {
  var t;
  const { chainId: r, domain: n, expirationTime: i, issuedAt: s = /* @__PURE__ */ new Date(), nonce: o, notBefore: a, requestId: l, resources: u, scheme: c, uri: p, version: h } = e;
  {
    if (!Number.isInteger(r))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
    if (!n)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (o && o.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
    if (!p)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (h !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${h}`);
    if (!((t = e.statement) === null || t === void 0) && t.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
  }
  const m = yh(e.address), v = c ? `${c}://${n}` : n, y = e.statement ? `${e.statement}
` : "", _ = `${v} wants you to sign in with your Ethereum account:
${m}

${y}`;
  let f = `URI: ${p}
Version: ${h}
Chain ID: ${r}${o ? `
Nonce: ${o}` : ""}
Issued At: ${s.toISOString()}`;
  if (i && (f += `
Expiration Time: ${i.toISOString()}`), a && (f += `
Not Before: ${a.toISOString()}`), l && (f += `
Request ID: ${l}`), u) {
    let d = `
Resources:`;
    for (const g of u) {
      if (!g || typeof g != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${g}`);
      d += `
- ${g}`;
    }
    f += d;
  }
  return `${_}
${f}`;
}
class Z extends Error {
  constructor({ message: t, code: r, cause: n, name: i }) {
    var s;
    super(t, { cause: n }), this.__isWebAuthnError = !0, this.name = (s = i ?? (n instanceof Error ? n.name : void 0)) !== null && s !== void 0 ? s : "Unknown Error", this.code = r;
  }
}
class as extends Z {
  constructor(t, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: t
    }), this.name = "WebAuthnUnknownError", this.originalError = r;
  }
}
function Ym({ error: e, options: t }) {
  var r, n, i;
  const { publicKey: s } = t;
  if (!s)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new Z({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else if (e.name === "ConstraintError") {
    if (((r = s.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
      return new Z({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      t.mediation === "conditional" && ((n = s.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required"
    )
      return new Z({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e
      });
    if (((i = s.authenticatorSelection) === null || i === void 0 ? void 0 : i.userVerification) === "required")
      return new Z({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e
      });
  } else {
    if (e.name === "InvalidStateError")
      return new Z({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e
      });
    if (e.name === "NotAllowedError")
      return new Z({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "NotSupportedError")
      return s.pubKeyCredParams.filter((a) => a.type === "public-key").length === 0 ? new Z({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: e
      }) : new Z({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: e
      });
    if (e.name === "SecurityError") {
      const o = window.location.hostname;
      if (wh(o)) {
        if (s.rp.id !== o)
          return new Z({
            message: `The RP ID "${s.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new Z({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "TypeError") {
      if (s.user.id.byteLength < 1 || s.user.id.byteLength > 64)
        return new Z({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e
        });
    } else if (e.name === "UnknownError")
      return new Z({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new Z({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
function Xm({ error: e, options: t }) {
  const { publicKey: r } = t;
  if (!r)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new Z({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else {
    if (e.name === "NotAllowedError")
      return new Z({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "SecurityError") {
      const n = window.location.hostname;
      if (wh(n)) {
        if (r.rpId !== n)
          return new Z({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new Z({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "UnknownError")
      return new Z({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new Z({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
class Zm {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      r.name = "AbortError", this.controller.abort(r);
    }
    const t = new AbortController();
    return this.controller = t, t.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      t.name = "AbortError", this.controller.abort(t), this.controller = void 0;
    }
  }
}
const ev = new Zm();
function tv(e) {
  if (!e)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      e
    );
  const { challenge: t, user: r, excludeCredentials: n } = e, i = Cs(
    e,
    ["challenge", "user", "excludeCredentials"]
  ), s = Nr(t).buffer, o = Object.assign(Object.assign({}, r), { id: Nr(r.id).buffer }), a = Object.assign(Object.assign({}, i), {
    challenge: s,
    user: o
  });
  if (n && n.length > 0) {
    a.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: Nr(u.id).buffer,
        type: u.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: u.transports
      });
    }
  }
  return a;
}
function rv(e) {
  if (!e)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: r } = e, n = Cs(
    e,
    ["challenge", "allowCredentials"]
  ), i = Nr(t).buffer, s = Object.assign(Object.assign({}, n), { challenge: i });
  if (r && r.length > 0) {
    s.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      s.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: Nr(a.id).buffer,
        type: a.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: a.transports
      });
    }
  }
  return s;
}
function nv(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: Gt(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: Gt(new Uint8Array(e.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function iv(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e, n = e.getClientExtensionResults(), i = e.response;
  return {
    id: e.id,
    rawId: e.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: Gt(new Uint8Array(i.authenticatorData)),
      clientDataJSON: Gt(new Uint8Array(i.clientDataJSON)),
      signature: Gt(new Uint8Array(i.signature)),
      userHandle: i.userHandle ? Gt(new Uint8Array(i.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: n,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function wh(e) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
  );
}
function Mu() {
  var e, t;
  return !!(le() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.create) == "function" && typeof ((t = navigator?.credentials) === null || t === void 0 ? void 0 : t.get) == "function");
}
async function sv(e) {
  try {
    const t = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new as("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new as("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: Ym({
        error: t,
        options: e
      })
    };
  }
}
async function ov(e) {
  try {
    const t = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new as("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new as("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: Xm({
        error: t,
        options: e
      })
    };
  }
}
const av = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, lv = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function ls(...e) {
  const t = (i) => i !== null && typeof i == "object" && !Array.isArray(i), r = (i) => i instanceof ArrayBuffer || ArrayBuffer.isView(i), n = {};
  for (const i of e)
    if (i)
      for (const s in i) {
        const o = i[s];
        if (o !== void 0)
          if (Array.isArray(o))
            n[s] = o;
          else if (r(o))
            n[s] = o;
          else if (t(o)) {
            const a = n[s];
            t(a) ? n[s] = ls(a, o) : n[s] = ls(o);
          } else
            n[s] = o;
      }
  return n;
}
function uv(e, t) {
  return ls(av, e, t || {});
}
function cv(e, t) {
  return ls(lv, e, t || {});
}
class dv {
  constructor(t) {
    this.client = t, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(t) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, t), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: t, webauthn: r, friendlyName: n, signal: i }, s) {
    var o;
    try {
      const { data: a, error: l } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: r
      });
      if (!a)
        return { data: null, error: l };
      const u = i ?? ev.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: c } = a.webauthn.credential_options.publicKey;
        if (!c.name) {
          const p = n;
          if (p)
            c.name = `${c.id}:${p}`;
          else {
            const m = (await this.client.getUser()).data.user, v = ((o = m?.user_metadata) === null || o === void 0 ? void 0 : o.name) || m?.email || m?.id || "User";
            c.name = `${c.id}:${v}`;
          }
        }
        c.displayName || (c.displayName = c.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const c = uv(a.webauthn.credential_options.publicKey, s?.create), { data: p, error: h } = await sv({
            publicKey: c,
            signal: u
          });
          return p ? {
            data: {
              factorId: t,
              challengeId: a.id,
              webauthn: {
                type: a.webauthn.type,
                credential_response: p
              }
            },
            error: null
          } : { data: null, error: h };
        }
        case "request": {
          const c = cv(a.webauthn.credential_options.publicKey, s?.request), { data: p, error: h } = await ov(Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: c, signal: u }));
          return p ? {
            data: {
              factorId: t,
              challengeId: a.id,
              webauthn: {
                type: a.webauthn.type,
                credential_response: p
              }
            },
            error: null
          } : { data: null, error: h };
        }
      }
    } catch (a) {
      return R(a) ? { data: null, error: a } : {
        data: null,
        error: new Vt("Unexpected error in challenge", a)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: t, factorId: r, webauthn: n }) {
    return this.client.mfa.verify({
      factorId: r,
      challengeId: t,
      webauthn: n
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: t, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: i } = {} }, s) {
    if (!r)
      return {
        data: null,
        error: new Mn("rpId is required for WebAuthn authentication")
      };
    try {
      if (!Mu())
        return {
          data: null,
          error: new Vt("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this.challenge({
        factorId: t,
        webauthn: { rpId: r, rpOrigins: n },
        signal: i
      }, { request: s });
      if (!o)
        return { data: null, error: a };
      const { webauthn: l } = o;
      return this._verify({
        factorId: t,
        challengeId: o.challengeId,
        webauthn: {
          type: l.type,
          rpId: r,
          rpOrigins: n,
          credential_response: l.credential_response
        }
      });
    } catch (o) {
      return R(o) ? { data: null, error: o } : {
        data: null,
        error: new Vt("Unexpected error in authenticate", o)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: t, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: i } = {} }, s) {
    if (!r)
      return {
        data: null,
        error: new Mn("rpId is required for WebAuthn registration")
      };
    try {
      if (!Mu())
        return {
          data: null,
          error: new Vt("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this._enroll({
        friendlyName: t
      });
      if (!o)
        return await this.client.mfa.listFactors().then((c) => {
          var p;
          return (p = c.data) === null || p === void 0 ? void 0 : p.all.find((h) => h.factor_type === "webauthn" && h.friendly_name === t && h.status !== "unverified");
        }).then((c) => c ? this.client.mfa.unenroll({ factorId: c?.id }) : void 0), { data: null, error: a };
      const { data: l, error: u } = await this._challenge({
        factorId: o.id,
        friendlyName: o.friendly_name,
        webauthn: { rpId: r, rpOrigins: n },
        signal: i
      }, {
        create: s
      });
      return l ? this._verify({
        factorId: o.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: r,
          rpOrigins: n,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: u };
    } catch (o) {
      return R(o) ? { data: null, error: o } : {
        data: null,
        error: new Vt("Unexpected error in register", o)
      };
    }
  }
}
qm();
const hv = {
  url: lm,
  storageKey: um,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: cm,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 1e4
  // 10 seconds
};
async function Fu(e, t, r) {
  return await r();
}
const dr = {};
class Fn {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var t, r;
    return (r = (t = dr[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null && r !== void 0 ? r : { keys: [] };
  }
  set jwks(t) {
    dr[this.storageKey] = Object.assign(Object.assign({}, dr[this.storageKey]), { jwks: t });
  }
  get jwks_cached_at() {
    var t, r;
    return (r = (t = dr[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    dr[this.storageKey] = Object.assign(Object.assign({}, dr[this.storageKey]), { cachedAt: t });
  }
  /**
   * Create a new client for use in the browser.
   *
   * @example
   * ```ts
   * import { GoTrueClient } from '@supabase/auth-js'
   *
   * const auth = new GoTrueClient({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { apikey: 'public-anon-key' },
   *   storageKey: 'supabase-auth',
   * })
   * ```
   */
  constructor(t) {
    var r, n, i;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const s = Object.assign(Object.assign({}, hv), t);
    if (this.storageKey = s.storageKey, this.instanceID = (r = Fn.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, Fn.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!s.debug, typeof s.debug == "function" && (this.logger = s.debug), this.instanceID > 0 && le()) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(o), this.logDebugMessages && console.trace(o);
    }
    if (this.persistSession = s.persistSession, this.autoRefreshToken = s.autoRefreshToken, this.admin = new Vm({
      url: s.url,
      headers: s.headers,
      fetch: s.fetch
    }), this.url = s.url, this.headers = s.headers, this.fetch = mh(s.fetch), this.lock = s.lock || Fu, this.detectSessionInUrl = s.detectSessionInUrl, this.flowType = s.flowType, this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader, this.throwOnError = s.throwOnError, this.lockAcquireTimeout = s.lockAcquireTimeout, s.lock ? this.lock = s.lock : this.persistSession && le() && (!((n = globalThis?.navigator) === null || n === void 0) && n.locks) ? this.lock = Km : this.lock = Fu, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new dv(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.persistSession ? (s.storage ? this.storage = s.storage : gh() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Bu(this.memoryStorage)), s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {}, this.storage = Bu(this.memoryStorage)), le() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (o) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o);
      }
      (i = this.broadcastChannel) === null || i === void 0 || i.addEventListener("message", async (o) => {
        this._debug("received broadcast notification from other tab or client", o);
        try {
          await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
        } catch (a) {
          this._debug("#broadcastChannel", "error", a);
        }
      });
    }
    this.initialize().catch((o) => {
      this._debug("#initialize()", "error", o);
    });
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(t) {
    if (this.throwOnError && t && t.error)
      throw t.error;
    return t;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${hh}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...t) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...t), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var t;
    try {
      let r = {}, n = "none";
      if (le() && (r = xm(window.location.href), this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce")), le() && this.detectSessionInUrl && n !== "none") {
        const { data: i, error: s } = await this._getSessionFromURL(r, n);
        if (s) {
          if (this._debug("#_initialize()", "error detecting session from URL", s), gm(s)) {
            const l = (t = s.details) === null || t === void 0 ? void 0 : t.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: s };
          }
          return { error: s };
        }
        const { session: o, redirectType: a } = i;
        return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a), await this._saveSession(o), setTimeout(async () => {
          a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (r) {
      return R(r) ? this._returnResult({ error: r }) : this._returnResult({
        error: new Vt("Unexpected error during initialization", r)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(t) {
    var r, n, i;
    try {
      const s = await j(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (n = (r = t?.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
          gotrue_meta_security: { captcha_token: (i = t?.options) === null || i === void 0 ? void 0 : i.captchaToken }
        },
        xform: Me
      }), { data: o, error: a } = s;
      if (a || !o)
        return this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (s) {
      if (R(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(t) {
    var r, n, i;
    try {
      let s;
      if ("email" in t) {
        const { email: c, password: p, options: h } = t;
        let m = null, v = null;
        this.flowType === "pkce" && ([m, v] = await lr(this.storage, this.storageKey)), s = await j(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: h?.emailRedirectTo,
          body: {
            email: c,
            password: p,
            data: (r = h?.data) !== null && r !== void 0 ? r : {},
            gotrue_meta_security: { captcha_token: h?.captchaToken },
            code_challenge: m,
            code_challenge_method: v
          },
          xform: Me
        });
      } else if ("phone" in t) {
        const { phone: c, password: p, options: h } = t;
        s = await j(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: p,
            data: (n = h?.data) !== null && n !== void 0 ? n : {},
            channel: (i = h?.channel) !== null && i !== void 0 ? i : "sms",
            gotrue_meta_security: { captcha_token: h?.captchaToken }
          },
          xform: Me
        });
      } else
        throw new ki("You must provide either an email or phone number and a password");
      const { data: o, error: a } = s;
      if (a || !o)
        return await ae(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (s) {
      if (await ae(this.storage, `${this.storageKey}-code-verifier`), R(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(t) {
    try {
      let r;
      if ("email" in t) {
        const { email: s, password: o, options: a } = t;
        r = await j(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: s,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Du
        });
      } else if ("phone" in t) {
        const { phone: s, password: o, options: a } = t;
        r = await j(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: s,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Du
        });
      } else
        throw new ki("You must provide either an email or phone number and a password");
      const { data: n, error: i } = r;
      if (i)
        return this._returnResult({ data: { user: null, session: null }, error: i });
      if (!n || !n.session || !n.user) {
        const s = new ar();
        return this._returnResult({ data: { user: null, session: null }, error: s });
      }
      return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), this._returnResult({
        data: Object.assign({ user: n.user, session: n.session }, n.weak_password ? { weakPassword: n.weak_password } : null),
        error: i
      });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(t) {
    var r, n, i, s;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo: (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams: (i = t.options) === null || i === void 0 ? void 0 : i.queryParams,
      skipBrowserRedirect: (s = t.options) === null || s === void 0 ? void 0 : s.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(t) {
    return await this.initializePromise, this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(t));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   */
  async signInWithWeb3(t) {
    const { chain: r } = t;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(t) {
    var r, n, i, s, o, a, l, u, c, p, h;
    let m, v;
    if ("message" in t)
      m = t.message, v = t.signature;
    else {
      const { chain: y, wallet: _, statement: f, options: d } = t;
      let g;
      if (le())
        if (typeof _ == "object")
          g = _;
        else {
          const I = window;
          if ("ethereum" in I && typeof I.ethereum == "object" && "request" in I.ethereum && typeof I.ethereum.request == "function")
            g = I.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof _ != "object" || !d?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        g = _;
      }
      const w = new URL((r = d?.url) !== null && r !== void 0 ? r : window.location.href), x = await g.request({
        method: "eth_requestAccounts"
      }).then((I) => I).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!x || x.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const S = yh(x[0]);
      let T = (n = d?.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
      if (!T) {
        const I = await g.request({
          method: "eth_chainId"
        });
        T = Gm(I);
      }
      const E = {
        domain: w.host,
        address: S,
        statement: f,
        uri: w.href,
        version: "1",
        chainId: T,
        nonce: (i = d?.signInWithEthereum) === null || i === void 0 ? void 0 : i.nonce,
        issuedAt: (o = (s = d?.signInWithEthereum) === null || s === void 0 ? void 0 : s.issuedAt) !== null && o !== void 0 ? o : /* @__PURE__ */ new Date(),
        expirationTime: (a = d?.signInWithEthereum) === null || a === void 0 ? void 0 : a.expirationTime,
        notBefore: (l = d?.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (u = d?.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
        resources: (c = d?.signInWithEthereum) === null || c === void 0 ? void 0 : c.resources
      };
      m = Qm(E), v = await g.request({
        method: "personal_sign",
        params: [Jm(m), S]
      });
    }
    try {
      const { data: y, error: _ } = await j(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: m,
          signature: v
        }, !((p = t.options) === null || p === void 0) && p.captchaToken ? { gotrue_meta_security: { captcha_token: (h = t.options) === null || h === void 0 ? void 0 : h.captchaToken } } : null),
        xform: Me
      });
      if (_)
        throw _;
      if (!y || !y.session || !y.user) {
        const f = new ar();
        return this._returnResult({ data: { user: null, session: null }, error: f });
      }
      return y.session && (await this._saveSession(y.session), await this._notifyAllSubscribers("SIGNED_IN", y.session)), this._returnResult({ data: Object.assign({}, y), error: _ });
    } catch (y) {
      if (R(y))
        return this._returnResult({ data: { user: null, session: null }, error: y });
      throw y;
    }
  }
  async signInWithSolana(t) {
    var r, n, i, s, o, a, l, u, c, p, h, m;
    let v, y;
    if ("message" in t)
      v = t.message, y = t.signature;
    else {
      const { chain: _, wallet: f, statement: d, options: g } = t;
      let w;
      if (le())
        if (typeof f == "object")
          w = f;
        else {
          const S = window;
          if ("solana" in S && typeof S.solana == "object" && ("signIn" in S.solana && typeof S.solana.signIn == "function" || "signMessage" in S.solana && typeof S.solana.signMessage == "function"))
            w = S.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof f != "object" || !g?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        w = f;
      }
      const x = new URL((r = g?.url) !== null && r !== void 0 ? r : window.location.href);
      if ("signIn" in w && w.signIn) {
        const S = await w.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, g?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: x.host,
          uri: x.href
        }), d ? { statement: d } : null));
        let T;
        if (Array.isArray(S) && S[0] && typeof S[0] == "object")
          T = S[0];
        else if (S && typeof S == "object" && "signedMessage" in S && "signature" in S)
          T = S;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in T && "signature" in T && (typeof T.signedMessage == "string" || T.signedMessage instanceof Uint8Array) && T.signature instanceof Uint8Array)
          v = typeof T.signedMessage == "string" ? T.signedMessage : new TextDecoder().decode(T.signedMessage), y = T.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in w) || typeof w.signMessage != "function" || !("publicKey" in w) || typeof w != "object" || !w.publicKey || !("toBase58" in w.publicKey) || typeof w.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        v = [
          `${x.host} wants you to sign in with your Solana account:`,
          w.publicKey.toBase58(),
          ...d ? ["", d, ""] : [""],
          "Version: 1",
          `URI: ${x.href}`,
          `Issued At: ${(i = (n = g?.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && i !== void 0 ? i : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((s = g?.signInWithSolana) === null || s === void 0) && s.notBefore ? [`Not Before: ${g.signInWithSolana.notBefore}`] : [],
          ...!((o = g?.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${g.signInWithSolana.expirationTime}`] : [],
          ...!((a = g?.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${g.signInWithSolana.chainId}`] : [],
          ...!((l = g?.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${g.signInWithSolana.nonce}`] : [],
          ...!((u = g?.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${g.signInWithSolana.requestId}`] : [],
          ...!((p = (c = g?.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || p === void 0) && p.length ? [
            "Resources",
            ...g.signInWithSolana.resources.map((T) => `- ${T}`)
          ] : []
        ].join(`
`);
        const S = await w.signMessage(new TextEncoder().encode(v), "utf8");
        if (!S || !(S instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        y = S;
      }
    }
    try {
      const { data: _, error: f } = await j(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: v, signature: Gt(y) }, !((h = t.options) === null || h === void 0) && h.captchaToken ? { gotrue_meta_security: { captcha_token: (m = t.options) === null || m === void 0 ? void 0 : m.captchaToken } } : null),
        xform: Me
      });
      if (f)
        throw f;
      if (!_ || !_.session || !_.user) {
        const d = new ar();
        return this._returnResult({ data: { user: null, session: null }, error: d });
      }
      return _.session && (await this._saveSession(_.session), await this._notifyAllSubscribers("SIGNED_IN", _.session)), this._returnResult({ data: Object.assign({}, _), error: f });
    } catch (_) {
      if (R(_))
        return this._returnResult({ data: { user: null, session: null }, error: _ });
      throw _;
    }
  }
  async _exchangeCodeForSession(t) {
    const r = await zt(this.storage, `${this.storageKey}-code-verifier`), [n, i] = (r ?? "").split("/");
    try {
      if (!n && this.flowType === "pkce")
        throw new mm();
      const { data: s, error: o } = await j(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: t,
          code_verifier: n
        },
        xform: Me
      });
      if (await ae(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      if (!s || !s.session || !s.user) {
        const a = new ar();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a
        });
      }
      return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), this._returnResult({ data: Object.assign(Object.assign({}, s), { redirectType: i ?? null }), error: o });
    } catch (s) {
      if (await ae(this.storage, `${this.storageKey}-code-verifier`), R(s))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: s
        });
      throw s;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(t) {
    try {
      const { options: r, provider: n, token: i, access_token: s, nonce: o } = t, a = await j(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: n,
          id_token: i,
          access_token: s,
          nonce: o,
          gotrue_meta_security: { captcha_token: r?.captchaToken }
        },
        xform: Me
      }), { data: l, error: u } = a;
      if (u)
        return this._returnResult({ data: { user: null, session: null }, error: u });
      if (!l || !l.session || !l.user) {
        const c = new ar();
        return this._returnResult({ data: { user: null, session: null }, error: c });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: u });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(t) {
    var r, n, i, s, o;
    try {
      if ("email" in t) {
        const { email: a, options: l } = t;
        let u = null, c = null;
        this.flowType === "pkce" && ([u, c] = await lr(this.storage, this.storageKey));
        const { error: p } = await j(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data: (r = l?.data) !== null && r !== void 0 ? r : {},
            create_user: (n = l?.shouldCreateUser) !== null && n !== void 0 ? n : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            code_challenge: u,
            code_challenge_method: c
          },
          redirectTo: l?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: p });
      }
      if ("phone" in t) {
        const { phone: a, options: l } = t, { data: u, error: c } = await j(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: a,
            data: (i = l?.data) !== null && i !== void 0 ? i : {},
            create_user: (s = l?.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            channel: (o = l?.channel) !== null && o !== void 0 ? o : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: u?.message_id },
          error: c
        });
      }
      throw new ki("You must provide either an email or phone number.");
    } catch (a) {
      if (await ae(this.storage, `${this.storageKey}-code-verifier`), R(a))
        return this._returnResult({ data: { user: null, session: null }, error: a });
      throw a;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(t) {
    var r, n;
    try {
      let i, s;
      "options" in t && (i = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo, s = (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken);
      const { data: o, error: a } = await j(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, t), { gotrue_meta_security: { captcha_token: s } }),
        redirectTo: i,
        xform: Me
      });
      if (a)
        throw a;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const l = o.session, u = o.user;
      return l?.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (R(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(t) {
    var r, n, i, s, o;
    try {
      let a = null, l = null;
      this.flowType === "pkce" && ([a, l] = await lr(this.storage, this.storageKey));
      const u = await j(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in t ? { provider_id: t.providerId } : null), "domain" in t ? { domain: t.domain } : null), { redirect_to: (n = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0 }), !((i = t?.options) === null || i === void 0) && i.captchaToken ? { gotrue_meta_security: { captcha_token: t.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: a, code_challenge_method: l }),
        headers: this.headers,
        xform: Mm
      });
      return !((s = u.data) === null || s === void 0) && s.url && le() && !(!((o = t.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(u.data.url), this._returnResult(u);
    } catch (a) {
      if (await ae(this.storage, `${this.storageKey}-code-verifier`), R(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        if (n)
          throw n;
        if (!r)
          throw new Ee();
        const { error: i } = await j(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: r.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: i });
      });
    } catch (t) {
      if (R(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(t) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in t) {
        const { email: n, type: i, options: s } = t, { error: o } = await j(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            email: n,
            type: i,
            gotrue_meta_security: { captcha_token: s?.captchaToken }
          },
          redirectTo: s?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: o });
      } else if ("phone" in t) {
        const { phone: n, type: i, options: s } = t, { data: o, error: a } = await j(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            phone: n,
            type: i,
            gotrue_meta_security: { captcha_token: s?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: o?.message_id },
          error: a
        });
      }
      throw new ki("You must provide either an email or phone number and a type");
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (r) => r));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(t, r) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), i = (async () => (await n, await r()))();
        return this.pendingInLock.push((async () => {
          try {
            await i;
          } catch {
          }
        })()), i;
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const n = r();
          for (this.pendingInLock.push((async () => {
            try {
              await n;
            } catch {
            }
          })()), await n; this.pendingInLock.length; ) {
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
          }
          return await n;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await t(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let t = null;
      const r = await zt(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? t = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !t)
        return { data: { session: null }, error: null };
      const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < oo : !1;
      if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", t.expires_at), !n) {
        if (this.userStorage) {
          const o = await zt(this.userStorage, this.storageKey + "-user");
          o?.user ? t.user = o.user : t.user = uo();
        }
        if (this.storage.isServer && t.user && !t.user.__isUserNotAvailableProxy) {
          const o = { value: this.suppressGetSessionWarning };
          t.user = Um(t.user, o), o.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: t }, error: null };
      }
      const { data: i, error: s } = await this._callRefreshToken(t.refresh_token);
      return s ? this._returnResult({ data: { session: null }, error: s }) : this._returnResult({ data: { session: i }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(t) {
    if (t)
      return await this._getUser(t);
    await this.initializePromise;
    const r = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    return r.data.user && (this.suppressGetSessionWarning = !0), r;
  }
  async _getUser(t) {
    try {
      return t ? await j(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: t,
        xform: _t
      }) : await this._useSession(async (r) => {
        var n, i, s;
        const { data: o, error: a } = r;
        if (a)
          throw a;
        return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Ee() } : await j(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (s = (i = o.session) === null || i === void 0 ? void 0 : i.access_token) !== null && s !== void 0 ? s : void 0,
          xform: _t
        });
      });
    } catch (r) {
      if (R(r))
        return ao(r) && (await this._removeSession(), await ae(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(t, r = {}) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(t, r));
  }
  async _updateUser(t, r = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: i, error: s } = n;
        if (s)
          throw s;
        if (!i.session)
          throw new Ee();
        const o = i.session;
        let a = null, l = null;
        this.flowType === "pkce" && t.email != null && ([a, l] = await lr(this.storage, this.storageKey));
        const { data: u, error: c } = await j(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: r?.emailRedirectTo,
          body: Object.assign(Object.assign({}, t), { code_challenge: a, code_challenge_method: l }),
          jwt: o.access_token,
          xform: _t
        });
        if (c)
          throw c;
        return o.user = u.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), this._returnResult({ data: { user: o.user }, error: null });
      });
    } catch (n) {
      if (await ae(this.storage, `${this.storageKey}-code-verifier`), R(n))
        return this._returnResult({ data: { user: null }, error: n });
      throw n;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(t) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(t));
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token)
        throw new Ee();
      const r = Date.now() / 1e3;
      let n = r, i = !0, s = null;
      const { payload: o } = bi(t.access_token);
      if (o.exp && (n = o.exp, i = n <= r), i) {
        const { data: a, error: l } = await this._callRefreshToken(t.refresh_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        if (!a)
          return { data: { user: null, session: null }, error: null };
        s = a;
      } else {
        const { data: a, error: l } = await this._getUser(t.access_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        s = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n
        }, await this._saveSession(s), await this._notifyAllSubscribers("SIGNED_IN", s);
      }
      return this._returnResult({ data: { user: s.user, session: s }, error: null });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: { session: null, user: null }, error: r });
      throw r;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(t) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(t));
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        if (!t) {
          const { data: o, error: a } = r;
          if (a)
            throw a;
          t = (n = o.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!t?.refresh_token)
          throw new Ee();
        const { data: i, error: s } = await this._callRefreshToken(t.refresh_token);
        return s ? this._returnResult({ data: { user: null, session: null }, error: s }) : i ? this._returnResult({ data: { user: i.user, session: i }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(t, r) {
    try {
      if (!le())
        throw new Si("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new Si(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code"
        });
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new ju("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Si("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
          throw new ju("No code detected.");
        const { data: d, error: g } = await this._exchangeCodeForSession(t.code);
        if (g)
          throw g;
        const w = new URL(window.location.href);
        return w.searchParams.delete("code"), window.history.replaceState(window.history.state, "", w.toString()), { data: { session: d.session, redirectType: null }, error: null };
      }
      const { provider_token: n, provider_refresh_token: i, access_token: s, refresh_token: o, expires_in: a, expires_at: l, token_type: u } = t;
      if (!s || !a || !o || !u)
        throw new Si("No session defined in URL");
      const c = Math.round(Date.now() / 1e3), p = parseInt(a);
      let h = c + p;
      l && (h = parseInt(l));
      const m = h - c;
      m * 1e3 <= fr && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${p}s`);
      const v = h - p;
      c - v >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", v, h, c) : c - v < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", v, h, c);
      const { data: y, error: _ } = await this._getUser(s);
      if (_)
        throw _;
      const f = {
        provider_token: n,
        provider_refresh_token: i,
        access_token: s,
        expires_in: p,
        expires_at: h,
        refresh_token: o,
        token_type: u,
        user: y.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: f, redirectType: t.type }, error: null });
    } catch (n) {
      if (R(n))
        return this._returnResult({ data: { session: null, redirectType: null }, error: n });
      throw n;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   *
   * If `detectSessionInUrl` is a function, it will be called with the URL and params to determine
   * if the URL should be processed as a Supabase auth callback. This allows users to exclude
   * URLs from other OAuth providers (e.g., Facebook Login) that also return access_token in the fragment.
   */
  _isImplicitGrantCallback(t) {
    return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), t) : !!(t.access_token || t.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(t) {
    const r = await zt(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && r);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(t = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(t));
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var n;
      const { data: i, error: s } = r;
      if (s && !ao(s))
        return this._returnResult({ error: s });
      const o = (n = i.session) === null || n === void 0 ? void 0 : n.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, t);
        if (a && !(pm(a) && (a.status === 404 || a.status === 401 || a.status === 403) || ao(a)))
          return this._returnResult({ error: a });
      }
      return t !== "others" && (await this._removeSession(), await ae(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(t) {
    const r = bm(), n = {
      id: r,
      callback: t,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, n), (async () => (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      this._emitInitialSession(r);
    })))(), { data: { subscription: n } };
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (r) => {
      var n, i;
      try {
        const { data: { session: s }, error: o } = r;
        if (o)
          throw o;
        await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", s)), this._debug("INITIAL_SESSION", "callback id", t, "session", s);
      } catch (s) {
        await ((i = this.stateChangeEmitters.get(t)) === null || i === void 0 ? void 0 : i.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", t, "error", s), console.error(s);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(t, r = {}) {
    let n = null, i = null;
    this.flowType === "pkce" && ([n, i] = await lr(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await j(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: n,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: r.captchaToken }
        },
        headers: this.headers,
        redirectTo: r.redirectTo
      });
    } catch (s) {
      if (await ae(this.storage, `${this.storageKey}-code-verifier`), R(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var t;
    try {
      const { data: r, error: n } = await this.getUser();
      if (n)
        throw n;
      return this._returnResult({ data: { identities: (t = r.user.identities) !== null && t !== void 0 ? t : [] }, error: null });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async linkIdentity(t) {
    return "token" in t ? this.linkIdentityIdToken(t) : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var r;
    try {
      const { data: n, error: i } = await this._useSession(async (s) => {
        var o, a, l, u, c;
        const { data: p, error: h } = s;
        if (h)
          throw h;
        const m = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
          redirectTo: (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await j(this.fetch, "GET", m, {
          headers: this.headers,
          jwt: (c = (u = p.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
        });
      });
      if (i)
        throw i;
      return le() && !(!((r = t.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n?.url), this._returnResult({
        data: { provider: t.provider, url: n?.url },
        error: null
      });
    } catch (n) {
      if (R(n))
        return this._returnResult({ data: { provider: t.provider, url: null }, error: n });
      throw n;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (r) => {
      var n;
      try {
        const { error: i, data: { session: s } } = r;
        if (i)
          throw i;
        const { options: o, provider: a, token: l, access_token: u, nonce: c } = t, p = await j(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (n = s?.access_token) !== null && n !== void 0 ? n : void 0,
          body: {
            provider: a,
            id_token: l,
            access_token: u,
            nonce: c,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: Me
        }), { data: h, error: m } = p;
        return m ? this._returnResult({ data: { user: null, session: null }, error: m }) : !h || !h.session || !h.user ? this._returnResult({
          data: { user: null, session: null },
          error: new ar()
        }) : (h.session && (await this._saveSession(h.session), await this._notifyAllSubscribers("USER_UPDATED", h.session)), this._returnResult({ data: h, error: m }));
      } catch (i) {
        if (await ae(this.storage, `${this.storageKey}-code-verifier`), R(i))
          return this._returnResult({ data: { user: null, session: null }, error: i });
        throw i;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (r) => {
        var n, i;
        const { data: s, error: o } = r;
        if (o)
          throw o;
        return await j(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
          headers: this.headers,
          jwt: (i = (n = s.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0
        });
      });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(t) {
    const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const n = Date.now();
      return await Cm(async (i) => (i > 0 && await Tm(200 * Math.pow(2, i - 1)), this._debug(r, "refreshing attempt", i), await j(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: t },
        headers: this.headers,
        xform: Me
      })), (i, s) => {
        const o = 200 * Math.pow(2, i);
        return s && lo(s) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - n < fr;
      });
    } catch (n) {
      if (this._debug(r, "error", n), R(n))
        return this._returnResult({ data: { session: null, user: null }, error: n });
      throw n;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(t) {
    return typeof t == "object" && t !== null && "access_token" in t && "refresh_token" in t && "expires_at" in t;
  }
  async _handleProviderSignIn(t, r) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", t, "options", r, "url", n), le() && !r.skipBrowserRedirect && window.location.assign(n), { data: { provider: t, url: n }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var t, r;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const i = await zt(this.storage, this.storageKey);
      if (i && this.userStorage) {
        let o = await zt(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = { user: i.user }, await pr(this.userStorage, this.storageKey + "-user", o)), i.user = (t = o?.user) !== null && t !== void 0 ? t : uo();
      } else if (i && !i.user && !i.user) {
        const o = await zt(this.storage, this.storageKey + "-user");
        o && o?.user ? (i.user = o.user, await ae(this.storage, this.storageKey + "-user"), await pr(this.storage, this.storageKey, i)) : i.user = uo();
      }
      if (this._debug(n, "session from storage", i), !this._isValidSession(i)) {
        this._debug(n, "session is not valid"), i !== null && await this._removeSession();
        return;
      }
      const s = ((r = i.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < oo;
      if (this._debug(n, `session has${s ? "" : " not"} expired with margin of ${oo}s`), s) {
        if (this.autoRefreshToken && i.refresh_token) {
          const { error: o } = await this._callRefreshToken(i.refresh_token);
          o && (console.error(o), lo(o) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
        }
      } else if (i.user && i.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(i.access_token);
          !a && o?.user ? (i.user = o.user, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification");
        } catch (o) {
          console.error("Error getting user data:", o), this._debug(n, "error getting user data, skipping SIGNED_IN notification", o);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", i);
    } catch (i) {
      this._debug(n, "error", i), console.error(i);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(t) {
    var r, n;
    if (!t)
      throw new Ee();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new Ps();
      const { data: s, error: o } = await this._refreshAccessToken(t);
      if (o)
        throw o;
      if (!s.session)
        throw new Ee();
      await this._saveSession(s.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
      const a = { data: s.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (s) {
      if (this._debug(i, "error", s), R(s)) {
        const o = { data: null, error: s };
        return lo(s) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o), o;
      }
      throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(s), s;
    } finally {
      this.refreshingDeferred = null, this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(t, r, n = !0) {
    const i = `#_notifyAllSubscribers(${t})`;
    this._debug(i, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel && n && this.broadcastChannel.postMessage({ event: t, session: r });
      const s = [], o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
        try {
          await a.callback(t, r);
        } catch (l) {
          s.push(l);
        }
      });
      if (await Promise.all(o), s.length > 0) {
        for (let a = 0; a < s.length; a += 1)
          console.error(s[a]);
        throw s[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(t) {
    this._debug("#_saveSession()", t), this.suppressGetSessionWarning = !0, await ae(this.storage, `${this.storageKey}-code-verifier`);
    const r = Object.assign({}, t), n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n && r.user && await pr(this.userStorage, this.storageKey + "-user", {
        user: r.user
      });
      const i = Object.assign({}, r);
      delete i.user;
      const s = Lu(i);
      await pr(this.storage, this.storageKey, s);
    } else {
      const i = Lu(r);
      await pr(this.storage, this.storageKey, i);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await ae(this.storage, this.storageKey), await ae(this.storage, this.storageKey + "-code-verifier"), await ae(this.storage, this.storageKey + "-user"), this.userStorage && await ae(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t && le() && window?.removeEventListener && window.removeEventListener("visibilitychange", t);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const t = setInterval(() => this._autoRefreshTokenTick(), fr);
    this.autoRefreshTicker = t, t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t);
    const r = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = r, r && typeof r == "object" && typeof r.unref == "function" ? r.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(r);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    this.autoRefreshTicker = null, t && clearInterval(t);
    const r = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null, r && clearTimeout(r);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (r) => {
              const { data: { session: n } } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((n.expires_at * 1e3 - t) / fr);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts ${fr}ms, refresh threshold is ${ca} ticks`), i <= ca && await this._callRefreshToken(n.refresh_token);
            });
          } catch (r) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof vh)
        this._debug("auto refresh token tick lock not available");
      else
        throw t;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !le() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (t) {
          this._debug("#visibilityChangedCallback", "error", t);
        }
      }, window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(t) {
    const r = `#_onVisibilityChanged(${t})`;
    this._debug(r, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), t || (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(t, r, n) {
    const i = [`provider=${encodeURIComponent(r)}`];
    if (n?.redirectTo && i.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n?.scopes && i.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
      const [s, o] = await lr(this.storage, this.storageKey), a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(s)}`,
        code_challenge_method: `${encodeURIComponent(o)}`
      });
      i.push(a.toString());
    }
    if (n?.queryParams) {
      const s = new URLSearchParams(n.queryParams);
      i.push(s.toString());
    }
    return n?.skipBrowserRedirect && i.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${t}?${i.join("&")}`;
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: i, error: s } = r;
        return s ? this._returnResult({ data: null, error: s }) : await j(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
          headers: this.headers,
          jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
        });
      });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n, i;
        const { data: s, error: o } = r;
        if (o)
          return this._returnResult({ data: null, error: o });
        const a = Object.assign({ friendly_name: t.friendlyName, factor_type: t.factorType }, t.factorType === "phone" ? { phone: t.phone } : t.factorType === "totp" ? { issuer: t.issuer } : {}), { data: l, error: u } = await j(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (n = s?.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return u ? this._returnResult({ data: null, error: u }) : (t.factorType === "totp" && l.type === "totp" && (!((i = l?.totp) === null || i === void 0) && i.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: i, error: s } = r;
          if (s)
            return this._returnResult({ data: null, error: s });
          const o = Object.assign({ challenge_id: t.challengeId }, "webauthn" in t ? {
            webauthn: Object.assign(Object.assign({}, t.webauthn), { credential_response: t.webauthn.type === "create" ? nv(t.webauthn.credential_response) : iv(t.webauthn.credential_response) })
          } : { code: t.code }), { data: a, error: l } = await j(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
            body: o,
            headers: this.headers,
            jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), this._returnResult({ data: a, error: l }));
        });
      } catch (r) {
        if (R(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: i, error: s } = r;
          if (s)
            return this._returnResult({ data: null, error: s });
          const o = await j(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
            body: t,
            headers: this.headers,
            jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          if (o.error)
            return o;
          const { data: a } = o;
          if (a.type !== "webauthn")
            return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: tv(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: rv(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (r) {
        if (R(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(t) {
    const { data: r, error: n } = await this._challenge({
      factorId: t.factorId
    });
    return n ? this._returnResult({ data: null, error: n }) : await this._verify({
      factorId: t.factorId,
      challengeId: r.id,
      code: t.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var t;
    const { data: { user: r }, error: n } = await this.getUser();
    if (n)
      return { data: null, error: n };
    const i = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const s of (t = r?.factors) !== null && t !== void 0 ? t : [])
      i.all.push(s), s.status === "verified" && i[s.factor_type].push(s);
    return {
      data: i,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(t) {
    var r, n, i, s;
    if (t)
      try {
        const { payload: m } = bi(t);
        let v = null;
        m.aal && (v = m.aal);
        let y = v;
        const { data: { user: _ }, error: f } = await this.getUser(t);
        if (f)
          return this._returnResult({ data: null, error: f });
        ((n = (r = _?.factors) === null || r === void 0 ? void 0 : r.filter((w) => w.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (y = "aal2");
        const g = m.amr || [];
        return { data: { currentLevel: v, nextLevel: y, currentAuthenticationMethods: g }, error: null };
      } catch (m) {
        if (R(m))
          return this._returnResult({ data: null, error: m });
        throw m;
      }
    const { data: { session: o }, error: a } = await this.getSession();
    if (a)
      return this._returnResult({ data: null, error: a });
    if (!o)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: l } = bi(o.access_token);
    let u = null;
    l.aal && (u = l.aal);
    let c = u;
    ((s = (i = o.user.factors) === null || i === void 0 ? void 0 : i.filter((m) => m.status === "verified")) !== null && s !== void 0 ? s : []).length > 0 && (c = "aal2");
    const h = l.amr || [];
    return { data: { currentLevel: u, nextLevel: c, currentAuthenticationMethods: h }, error: null };
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the response includes only a redirect_url field, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        return i ? this._returnResult({ data: null, error: i }) : n ? await j(this.fetch, "GET", `${this.url}/oauth/authorizations/${t}`, {
          headers: this.headers,
          jwt: n.access_token,
          xform: (s) => ({ data: s, error: null })
        }) : this._returnResult({ data: null, error: new Ee() });
      });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: i }, error: s } = n;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!i)
          return this._returnResult({ data: null, error: new Ee() });
        const o = await j(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "approve" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && le() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (R(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: i }, error: s } = n;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!i)
          return this._returnResult({ data: null, error: new Ee() });
        const o = await j(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "deny" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && le() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (R(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        return n ? this._returnResult({ data: null, error: n }) : r ? await j(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new Ee() });
      });
    } catch (t) {
      if (R(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _revokeOAuthGrant(t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        return i ? this._returnResult({ data: null, error: i }) : n ? (await j(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: n.access_token,
          query: { client_id: t.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new Ee() });
      });
    } catch (r) {
      if (R(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(t, r = { keys: [] }) {
    let n = r.keys.find((a) => a.kid === t);
    if (n)
      return n;
    const i = Date.now();
    if (n = this.jwks.keys.find((a) => a.kid === t), n && this.jwks_cached_at + hm > i)
      return n;
    const { data: s, error: o } = await j(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (o)
      throw o;
    return !s.keys || s.keys.length === 0 || (this.jwks = s, this.jwks_cached_at = i, n = s.keys.find((a) => a.kid === t), !n) ? null : n;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(t, r = {}) {
    try {
      let n = t;
      if (!n) {
        const { data: m, error: v } = await this.getSession();
        if (v || !m.session)
          return this._returnResult({ data: null, error: v });
        n = m.session.access_token;
      }
      const { header: i, payload: s, signature: o, raw: { header: a, payload: l } } = bi(n);
      r?.allowExpired || Nm(s.exp);
      const u = !i.alg || i.alg.startsWith("HS") || !i.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(i.kid, r?.keys ? { keys: r.keys } : r?.jwks);
      if (!u) {
        const { error: m } = await this.getUser(n);
        if (m)
          throw m;
        return {
          data: {
            claims: s,
            header: i,
            signature: o
          },
          error: null
        };
      }
      const c = $m(i.alg), p = await crypto.subtle.importKey("jwk", u, c, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(c, p, o, km(`${a}.${l}`)))
        throw new fa("Invalid JWT signature");
      return {
        data: {
          claims: s,
          header: i,
          signature: o
        },
        error: null
      };
    } catch (n) {
      if (R(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
Fn.nextInstanceID = {};
const fv = Fn, pv = "2.95.3";
let ln = "";
typeof Deno < "u" ? ln = "deno" : typeof document < "u" ? ln = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? ln = "react-native" : ln = "node";
const gv = { "X-Client-Info": `supabase-js-${ln}/${pv}` }, mv = { headers: gv }, vv = { schema: "public" }, yv = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, wv = {};
function Wn(e) {
  "@babel/helpers - typeof";
  return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wn(e);
}
function _v(e, t) {
  if (Wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kv(e) {
  var t = _v(e, "string");
  return Wn(t) == "symbol" ? t : t + "";
}
function Sv(e, t, r) {
  return (t = kv(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Wu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wu(Object(r), !0).forEach(function(n) {
      Sv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const bv = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), xv = () => Headers, Ev = (e, t, r) => {
  const n = bv(r), i = xv();
  return async (s, o) => {
    var a;
    const l = (a = await t()) !== null && a !== void 0 ? a : e;
    let u = new i(o?.headers);
    return u.has("apikey") || u.set("apikey", e), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), n(s, G(G({}, o), {}, { headers: u }));
  };
};
function Tv(e) {
  return e.endsWith("/") ? e : e + "/";
}
function Cv(e, t) {
  var r, n;
  const { db: i, auth: s, realtime: o, global: a } = e, { db: l, auth: u, realtime: c, global: p } = t, h = {
    db: G(G({}, l), i),
    auth: G(G({}, u), s),
    realtime: G(G({}, c), o),
    storage: {},
    global: G(G(G({}, p), a), {}, { headers: G(G({}, (r = p?.headers) !== null && r !== void 0 ? r : {}), (n = a?.headers) !== null && n !== void 0 ? n : {}) }),
    accessToken: async () => ""
  };
  return e.accessToken ? h.accessToken = e.accessToken : delete h.accessToken, h;
}
function Ov(e) {
  const t = e?.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(Tv(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var Rv = class extends fv {
  constructor(e) {
    super(e);
  }
}, Pv = class {
  /**
  * Create a new client for use in the browser.
  * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
  * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
  * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
  * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
  * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
  * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
  * @param options.realtime Options passed along to realtime-js constructor.
  * @param options.storage Options passed along to the storage-js constructor.
  * @param options.global.fetch A custom fetch implementation.
  * @param options.global.headers Any additional headers to send with each network request.
  * @example
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
  * const { data } = await supabase.from('profiles').select('*')
  * ```
  */
  constructor(e, t, r) {
    var n, i;
    this.supabaseUrl = e, this.supabaseKey = t;
    const s = Ov(e);
    if (!t) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", s), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", s), this.storageUrl = new URL("storage/v1", s), this.functionsUrl = new URL("functions/v1", s);
    const o = `sb-${s.hostname.split(".")[0]}-auth-token`, a = {
      db: vv,
      realtime: wv,
      auth: G(G({}, yv), {}, { storageKey: o }),
      global: mv
    }, l = Cv(r ?? {}, a);
    if (this.storageKey = (n = l.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (i = l.global.headers) !== null && i !== void 0 ? i : {}, l.accessToken)
      this.accessToken = l.accessToken, this.auth = new Proxy({}, { get: (c, p) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`);
      } });
    else {
      var u;
      this.auth = this._initSupabaseAuthClient((u = l.auth) !== null && u !== void 0 ? u : {}, this.headers, l.global.fetch);
    }
    this.fetch = Ev(t, this._getAccessToken.bind(this), l.global.fetch), this.realtime = this._initRealtimeClient(G({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this)
    }, l.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((c) => this.realtime.setAuth(c)).catch((c) => console.warn("Failed to set initial Realtime auth token:", c)), this.rest = new pg(new URL("rest/v1", s).href, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch,
      timeout: l.db.timeout,
      urlLengthLimit: l.db.urlLengthLimit
    }), this.storage = new am(this.storageUrl.href, this.headers, this.fetch, r?.storage), l.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new og(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(e) {
    return this.rest.from(e);
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(e) {
    return this.rest.schema(e);
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  rpc(e, t = {}, r = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(e, t, r);
  }
  /**
  * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
  *
  * @param {string} name - The name of the Realtime channel.
  * @param {Object} opts - The options to pass to the Realtime channel.
  *
  */
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  /**
  * Returns all Realtime channels.
  */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
  * Unsubscribes and removes Realtime channel from Realtime client.
  *
  * @param {RealtimeChannel} channel - The name of the Realtime channel.
  *
  */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
  * Unsubscribes and removes all Realtime channels from Realtime client.
  */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var e = this, t, r;
    if (e.accessToken) return await e.accessToken();
    const { data: n } = await e.auth.getSession();
    return (t = (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !== null && t !== void 0 ? t : e.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: n, userStorage: i, storageKey: s, flowType: o, lock: a, debug: l, throwOnError: u }, c, p) {
    const h = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Rv({
      url: this.authUrl.href,
      headers: G(G({}, h), c),
      storageKey: s,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: n,
      userStorage: i,
      flowType: o,
      lock: a,
      debug: l,
      throwOnError: u,
      fetch: p,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((m) => m.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(e) {
    return new jg(this.realtimeUrl.href, G(G({}, e), {}, { params: G(G({}, { apikey: this.supabaseKey }), e?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((e, t) => {
      this._handleTokenChanged(e, "CLIENT", t?.access_token);
    });
  }
  _handleTokenChanged(e, t, r) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r ? (this.changedAccessToken = r, this.realtime.setAuth(r)) : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
};
const jv = (e, t, r) => new Pv(e, t, r);
function Av() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const r = t.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
Av() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
async function Iv(e) {
  const t = e.projectKey.trim();
  if (!t) throw new Error("XOOS projectKey is required.");
  const r = await e.bridge.getProjectConfig(t);
  if (r.provider !== "supabase")
    throw new Error(`Unsupported XOOS data provider '${r.provider}'.`);
  const n = jv(r.supabaseUrl, r.publishableKey, {
    accessToken: async () => e.bridge.getAccessToken(t),
    auth: {
      persistSession: !1,
      autoRefreshToken: !1,
      detectSessionInUrl: !1
    }
  });
  return { projectKey: t, config: r, supabase: n };
}
async function Nv(e) {
  return (await Iv(e)).supabase;
}
const _h = Q.createContext(null);
function $v({
  bridge: e,
  props: t = {},
  children: r
}) {
  return /* @__PURE__ */ b.jsx(_h.Provider, { value: { bridge: e, props: t }, children: r });
}
function kh() {
  return Q.useContext(_h);
}
function Lv() {
  const e = kh();
  return Q.useMemo(() => {
    if (e) {
      const t = e.bridge.context.user;
      return {
        bridge: e.bridge,
        props: e.props,
        userId: e.bridge.context.user.id,
        email: t.email ?? (typeof e.props.email == "string" ? e.props.email : ""),
        tenantId: e.bridge.context.tenant.id,
        templateId: typeof e.props.templateId == "string" ? e.props.templateId : typeof e.props.template_id == "string" ? e.props.template_id : "",
        scopes: e.bridge.context.scopes,
        hasScope: (r) => e.bridge.context.scopes.includes(r),
        isRuntimeHosted: !0
      };
    }
    return {
      bridge: null,
      props: {},
      userId: "",
      email: "",
      tenantId: "",
      templateId: "",
      scopes: [],
      hasScope: () => !1,
      isRuntimeHosted: !1
    };
  }, [e]);
}
const Vu = /* @__PURE__ */ new WeakMap();
function Uv(e) {
  const t = typeof e.datasourceKey == "string" ? e.datasourceKey.trim() : typeof e.datasource_key == "string" ? e.datasource_key.trim() : "";
  if (t) return t;
  throw new Error(
    "BLOCKED_DATASOURCE_MAPPING: XOOS datasourceKey was not supplied by the runtime/control-plane mapping."
  );
}
async function Dv(e, t) {
  const r = Uv(t);
  let n = Vu.get(e);
  n || (n = /* @__PURE__ */ new Map(), Vu.set(e, n));
  let i = n.get(r);
  return i || (i = Nv({
    projectKey: r,
    bridge: e.data
  }), n.set(r, i)), i;
}
function Sh() {
  const e = kh(), [t, r] = Q.useState(null), [n, i] = Q.useState(null);
  return Q.useEffect(() => {
    let s = !1;
    return r(null), i(null), e ? (Dv(
      e.bridge,
      e.props
    ).then((o) => {
      s || r(o);
    }).catch((o) => {
      s || i(
        o instanceof Error ? o : new Error(String(o))
      );
    }), () => {
      s = !0;
    }) : (i(
      new Error(
        "XOOS Runtime bridge is required for the Native ESM microapp."
      )
    ), () => {
      s = !0;
    });
  }, [e]), {
    client: t,
    error: n,
    isReady: !!t
  };
}
const us = {
  schemaVersion: "1",
  microappKey: "edit-approval",
  version: "1.0.1",
  elementName: "xoos-edit-approval",
  entry: "https://bolngokjtpjomleifuto.supabase.co/storage/v1/object/public/xoos-microapps/xoos-edit-approval/1.0.1/xoos-microapp.js",
  deliveryType: "native_esm",
  contractVersion: "1",
  minimumRuntimeVersion: "1.0.0"
};
function bh(e, t, r) {
  e && e.telemetry.track(t, r, us.microappKey).catch(() => {
  });
}
function zv(e, t, r, n) {
  const i = r instanceof Error ? r.message : String(r);
  bh(e, t, { ...n, error: i, severity: "error" });
}
function Bv() {
  const e = Lv(), t = !e.userId || !e.tenantId || !e.templateId;
  return {
    userId: e.userId,
    email: e.email,
    tenantId: e.tenantId,
    templateId: e.templateId,
    isAuthenticated: !t,
    isLoading: !1,
    error: t ? "Missing XOOS runtime identity or template context" : null,
    bridge: e.bridge
  };
}
function Mv(e, t) {
  const { client: r, error: n } = Sh(), [i, s] = Q.useState({
    template: null,
    steps: [],
    originalSteps: [],
    versionId: null,
    isLoading: !0,
    error: null
  }), o = Q.useCallback(async () => {
    if (!(!e || !t || !r))
      try {
        s((f) => ({ ...f, isLoading: !0, error: null }));
        const { data: c, error: p } = await r.from("approval_templates").select("approval_template_name, approval_type, description").eq("template_id", e).single();
        if (p) throw p;
        const { data: h, error: m } = await r.from("approval_template_versions").select("version_id").eq("template_id", e).eq("status", "DRAFT").eq("is_active", !1).order("created_at", { ascending: !1 }).limit(1).single();
        if (m) throw m;
        const { data: v, error: y } = await r.from("approval_template_steps").select("step_id, step_order, name, email, user_id, version_id").eq("version_id", h.version_id).order("step_order", { ascending: !0 });
        if (y) throw y;
        const _ = v || [];
        s({
          template: c,
          steps: _,
          originalSteps: JSON.parse(JSON.stringify(_)),
          versionId: h.version_id,
          isLoading: !1,
          error: null
        });
      } catch (c) {
        s((p) => ({
          ...p,
          isLoading: !1,
          error: c.message || "Failed to fetch data"
        }));
      }
  }, [r, e, t]);
  return Q.useEffect(() => {
    if (n) {
      s((c) => ({ ...c, isLoading: !1, error: n.message }));
      return;
    }
    o();
  }, [o, n]), { ...i, setSteps: (c) => {
    s((p) => ({ ...p, steps: c }));
  }, resetOriginal: () => {
    s((c) => ({
      ...c,
      originalSteps: JSON.parse(JSON.stringify(c.steps))
    }));
  }, hasChanges: () => JSON.stringify(i.steps.map((c) => c.step_id)) !== JSON.stringify(i.originalSteps.map((c) => c.step_id)), refetch: o };
}
function Fv({ show: e, onComplete: t, message: r = "Changes saved successfully!" }) {
  return Q.useEffect(() => {
    if (e) {
      const n = setTimeout(t, 2200);
      return () => clearTimeout(n);
    }
  }, [e, t]), e ? /* @__PURE__ */ b.jsxs("div", { className: "fixed inset-0 flex items-center justify-center z-50", style: { backgroundColor: "rgba(0, 0, 0, 0.4)" }, children: [
    /* @__PURE__ */ b.jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 animate-[scaleIn_0.3s_ease-out]", children: [
      /* @__PURE__ */ b.jsx("div", { className: "w-20 h-20 rounded-full flex items-center justify-center relative", children: /* @__PURE__ */ b.jsxs("svg", { className: "w-20 h-20", viewBox: "0 0 80 80", children: [
        /* @__PURE__ */ b.jsx(
          "circle",
          {
            cx: "40",
            cy: "40",
            r: "36",
            fill: "none",
            stroke: "#22c55e",
            strokeWidth: "4",
            strokeDasharray: "226",
            strokeDashoffset: "226",
            className: "animate-[circleDraw_0.6s_ease-out_0.1s_forwards]"
          }
        ),
        /* @__PURE__ */ b.jsx(
          "circle",
          {
            cx: "40",
            cy: "40",
            r: "34",
            fill: "#22c55e",
            opacity: "0",
            className: "animate-[fadeIn_0.3s_ease-out_0.5s_forwards]"
          }
        ),
        /* @__PURE__ */ b.jsx(
          "path",
          {
            d: "M24 42 L35 53 L56 28",
            fill: "none",
            stroke: "white",
            strokeWidth: "4",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "50",
            strokeDashoffset: "50",
            className: "animate-[checkDraw_0.4s_ease-out_0.7s_forwards]"
          }
        )
      ] }) }),
      /* @__PURE__ */ b.jsx("p", { className: "text-slate-800 font-semibold text-base animate-[fadeIn_0.3s_ease-out_0.9s_forwards] opacity-0", children: r })
    ] }),
    /* @__PURE__ */ b.jsx("style", { children: `
        @keyframes scaleIn {
          from { transform: scale(0.7); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes circleDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes checkDraw {
          to { stroke-dashoffset: 0; }
        }
      ` })
  ] }) : null;
}
function Wv() {
  const e = Bv(), { client: t } = Sh(), { template: r, steps: n, setSteps: i, versionId: s, isLoading: o, error: a, hasChanges: l, resetOriginal: u, refetch: c } = Mv(e.templateId, e.isAuthenticated), [p, h] = Q.useState(!1), [m, v] = Q.useState(!1), [y, _] = Q.useState(!1), f = Q.useCallback((E, I) => {
    const P = [...n], q = I === "up" ? E - 1 : E + 1;
    if (q < 0 || q >= P.length) return;
    const tt = P[E].step_order;
    P[E] = { ...P[E], step_order: P[q].step_order }, P[q] = { ...P[q], step_order: tt }, [P[E], P[q]] = [P[q], P[E]], i(P);
  }, [n, i]), d = Q.useCallback(async () => {
    if (!(!l() || m || !t)) {
      v(!0);
      try {
        const { data: E, error: I } = await t.rpc("generate_trace_context", {
          headers: {
            source_system: "approval-authority-editor",
            tenant_id: e.tenantId
          }
        });
        if (I) throw I;
        const P = E, q = P?.context || P, tt = n.map(
          (ze) => t.from("approval_template_steps").update({ step_order: ze.step_order, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("step_id", ze.step_id)
        ), Kr = (await Promise.all(tt)).find((ze) => ze.error);
        if (Kr?.error) throw Kr.error;
        const { error: Qn } = await t.rpc("audit_event_intake", {
          input_payload: {
            headers: {
              trace_id: q?.trace_id,
              request_id: q?.request_id,
              source_system: "approval-authority-editor",
              tenant_id: e.tenantId
            },
            event_type: "approval_step_order.updated",
            actor: {
              actor_type: "user",
              actor_id: e.userId,
              email: e.email
            },
            subject: {
              subject_type: "approval_template_version",
              subject_id: s
            },
            context: {
              template_id: e.templateId,
              changes: n.map((ze, Yn) => ({
                step_id: ze.step_id,
                new_order: ze.step_order
              }))
            },
            occurred_at: (/* @__PURE__ */ new Date()).toISOString()
          }
        });
        Qn && console.warn("Audit write failed:", Qn), u(), bh(e.bridge, "edit_approval.saved", { template_id: e.templateId }), h(!0);
      } catch (E) {
        zv(e.bridge, "edit_approval.save_failed", E, { template_id: e.templateId }), console.error("Save failed:", E), alert("Failed to save changes: " + (E.message || "Unknown error"));
      } finally {
        v(!1);
      }
    }
  }, [l, m, n, e, s, u]), g = Q.useCallback(() => {
    h(!1), e.bridge?.events.emit("edit-approval.close", { action: "saved", template_id: e.templateId });
  }, [e.templateId]), w = Q.useCallback(() => {
    l() ? _(!0) : e.bridge?.events.emit("edit-approval.close", { action: "cancel", template_id: e.templateId });
  }, [l, e.templateId]), x = Q.useCallback(() => {
    _(!1), e.bridge?.events.emit("edit-approval.close", { action: "cancel", template_id: e.templateId });
  }, [e.templateId]), S = (E) => E.split(" ").map((I) => I[0]).join("").toUpperCase().slice(0, 2);
  if (e.isLoading || o)
    return /* @__PURE__ */ b.jsx("div", { className: "min-h-screen bg-slate-50 flex items-center justify-center", children: /* @__PURE__ */ b.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ b.jsx(wu, { className: "w-8 h-8 text-indigo-600 animate-spin" }),
      /* @__PURE__ */ b.jsx("p", { className: "text-slate-500 text-sm", children: "Loading approval data..." })
    ] }) });
  if (e.error || a)
    return /* @__PURE__ */ b.jsx("div", { className: "min-h-screen bg-slate-50 flex items-center justify-center", children: /* @__PURE__ */ b.jsxs("div", { className: "bg-white rounded-xl border border-red-200 p-6 max-w-md text-center", children: [
      /* @__PURE__ */ b.jsx("p", { className: "text-red-600 font-semibold mb-2", children: "Error" }),
      /* @__PURE__ */ b.jsx("p", { className: "text-slate-600 text-sm", children: e.error || a })
    ] }) });
  const T = l();
  return /* @__PURE__ */ b.jsxs("div", { className: "min-h-screen bg-slate-50 text-slate-900 antialiased", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4", children: [
      /* @__PURE__ */ b.jsx("h1", { className: "text-xl sm:text-2xl font-bold text-slate-900 mb-2", children: "Edit Approval Authority" }),
      /* @__PURE__ */ b.jsx("p", { className: "text-slate-600 text-sm", children: "Review and update approval configuration. Changes are saved as draft." })
    ] }),
    /* @__PURE__ */ b.jsx("main", { className: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 pb-8", children: /* @__PURE__ */ b.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8", children: [
      /* @__PURE__ */ b.jsx("section", { className: "md:col-span-7 xl:col-span-8", children: /* @__PURE__ */ b.jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", children: [
        /* @__PURE__ */ b.jsx("div", { className: "px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100", children: /* @__PURE__ */ b.jsx("h3", { className: "font-bold text-slate-800 text-sm sm:text-base", children: "Configure Hierarchy Levels" }) }),
        /* @__PURE__ */ b.jsx("div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ b.jsx("div", { className: "space-y-2", children: n.length === 0 ? /* @__PURE__ */ b.jsx("p", { className: "text-slate-400 text-sm text-center py-8", children: "No approval steps found for this draft version." }) : n.map((E, I) => /* @__PURE__ */ b.jsxs(
          "div",
          {
            className: "grid grid-cols-12 gap-4 items-center p-4 border rounded-lg bg-white border-slate-200 hover:border-indigo-300 transition-colors",
            children: [
              /* @__PURE__ */ b.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ b.jsx("div", { className: "w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center", children: /* @__PURE__ */ b.jsx("span", { className: "text-white font-bold text-sm", children: E.step_order }) }) }),
              /* @__PURE__ */ b.jsxs("div", { className: "col-span-8 flex items-center gap-3", children: [
                /* @__PURE__ */ b.jsx("div", { className: "w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ b.jsx("span", { className: "text-slate-600 font-semibold text-xs", children: S(E.name) }) }),
                /* @__PURE__ */ b.jsxs("div", { children: [
                  /* @__PURE__ */ b.jsx("p", { className: "text-sm font-medium text-slate-800", children: E.name }),
                  /* @__PURE__ */ b.jsx("p", { className: "text-xs text-slate-500", children: E.email })
                ] })
              ] }),
              /* @__PURE__ */ b.jsxs("div", { className: "col-span-3 flex items-center justify-end gap-1", children: [
                /* @__PURE__ */ b.jsx(
                  "button",
                  {
                    onClick: () => f(I, "up"),
                    disabled: I === 0,
                    className: "p-1.5 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-slate-500 hover:text-indigo-600 hover:bg-indigo-50",
                    title: "Move Up",
                    children: /* @__PURE__ */ b.jsx(tg, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ b.jsx(
                  "button",
                  {
                    onClick: () => f(I, "down"),
                    disabled: I === n.length - 1,
                    className: "p-1.5 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-slate-500 hover:text-indigo-600 hover:bg-indigo-50",
                    title: "Move Down",
                    children: /* @__PURE__ */ b.jsx(rg, { className: "w-4 h-4" })
                  }
                )
              ] })
            ]
          },
          E.step_id
        )) }) }),
        /* @__PURE__ */ b.jsxs("div", { className: "px-4 sm:px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex flex-col sm:flex-row justify-end gap-3", children: [
          /* @__PURE__ */ b.jsx(
            "button",
            {
              onClick: w,
              className: "w-full sm:w-auto px-4 sm:px-6 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ b.jsxs(
            "button",
            {
              onClick: d,
              disabled: !T || m,
              className: "w-full sm:w-auto px-6 sm:px-8 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-md shadow-lg shadow-indigo-200 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2",
              children: [
                m && /* @__PURE__ */ b.jsx(wu, { className: "w-4 h-4 animate-spin" }),
                "Save Changes"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ b.jsx("aside", { className: "md:col-span-5 xl:col-span-4", children: /* @__PURE__ */ b.jsxs("section", { className: "bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ b.jsx("div", { className: "px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 bg-gray-50/50", children: /* @__PURE__ */ b.jsxs("h3", { className: "font-bold text-slate-800 flex items-center gap-2 text-sm sm:text-base", children: [
          /* @__PURE__ */ b.jsx(eg, { className: "w-4 h-4 sm:w-5 sm:h-5 text-slate-400" }),
          "Authority Details"
        ] }) }),
        /* @__PURE__ */ b.jsx("div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ b.jsxs("div", { className: "space-y-4 sm:space-y-5", children: [
          /* @__PURE__ */ b.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ b.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Authority Name" }),
            /* @__PURE__ */ b.jsx(
              "input",
              {
                type: "text",
                value: r?.approval_template_name || "",
                className: "w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm",
                readOnly: !0
              }
            )
          ] }),
          /* @__PURE__ */ b.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ b.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Authority Type" }),
            /* @__PURE__ */ b.jsx(
              "input",
              {
                type: "text",
                value: r?.approval_type || "",
                className: "w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm",
                readOnly: !0
              }
            )
          ] }),
          /* @__PURE__ */ b.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ b.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Description" }),
            /* @__PURE__ */ b.jsx(
              "textarea",
              {
                className: "w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm h-20 resize-none",
                readOnly: !0,
                value: r?.description || ""
              }
            )
          ] })
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ b.jsx(Fv, { show: p, onComplete: g }),
    y && /* @__PURE__ */ b.jsx("div", { className: "fixed inset-0 flex items-center justify-center z-50", style: { backgroundColor: "rgba(0, 0, 0, 0.5)" }, children: /* @__PURE__ */ b.jsxs("div", { className: "bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl", children: [
      /* @__PURE__ */ b.jsx("h3", { className: "text-base font-bold text-slate-800 mb-3", children: "Confirm Cancel" }),
      /* @__PURE__ */ b.jsx("p", { className: "text-sm text-slate-500 mb-4", children: "You have unsaved changes. Are you sure you want to cancel?" }),
      /* @__PURE__ */ b.jsxs("div", { className: "mt-4 flex justify-end gap-3", children: [
        /* @__PURE__ */ b.jsx(
          "button",
          {
            onClick: () => _(!1),
            className: "px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors",
            children: "Go Back"
          }
        ),
        /* @__PURE__ */ b.jsx(
          "button",
          {
            onClick: x,
            className: "px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-md shadow-lg transition-all",
            children: "Confirm"
          }
        )
      ] })
    ] }) })
  ] });
}
class Vv extends HTMLElement {
  constructor() {
    super(...arguments);
    qr(this, "xoos");
    qr(this, "xoosProps");
    qr(this, "root", null);
    qr(this, "mountPoint", null);
  }
  connectedCallback() {
    if (this.root) return;
    const r = this.shadowRoot ?? this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = qp, r.appendChild(n);
    const i = document.createElement("div");
    if (i.setAttribute("data-xoos-microapp", us.microappKey), i.style.display = "contents", r.appendChild(i), this.mountPoint = i, !this.xoos) {
      i.textContent = "XOOS runtime bridge missing.";
      return;
    }
    this.root = th(i), this.root.render(
      Q.createElement($v, {
        bridge: this.xoos,
        props: this.xoosProps ?? {},
        children: Q.createElement(Wv)
      })
    );
  }
  disconnectedCallback() {
    this.root?.unmount(), this.root = null, this.mountPoint?.remove(), this.mountPoint = null;
  }
}
customElements.get(us.elementName) || customElements.define(us.elementName, Vv);
export {
  Vv as XoosEditApprovalElement,
  Vv as default,
  us as microappConfig
};
