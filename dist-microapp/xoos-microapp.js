var Nf = Object.defineProperty;
var If = (e, t, r) => t in e ? Nf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var mt = (e, t, r) => If(e, typeof t != "symbol" ? t + "" : t, r);
function Ic(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $c = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gi = Symbol.for("react.element"), $f = Symbol.for("react.portal"), Lf = Symbol.for("react.fragment"), Df = Symbol.for("react.strict_mode"), Uf = Symbol.for("react.profiler"), zf = Symbol.for("react.provider"), Mf = Symbol.for("react.context"), Bf = Symbol.for("react.forward_ref"), Ff = Symbol.for("react.suspense"), Wf = Symbol.for("react.memo"), Vf = Symbol.for("react.lazy"), Yl = Symbol.iterator;
function Hf(e) {
  return e === null || typeof e != "object" ? null : (e = Yl && e[Yl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Lc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Dc = Object.assign, Uc = {};
function pn(e, t, r) {
  this.props = e, this.context = t, this.refs = Uc, this.updater = r || Lc;
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
pn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function zc() {
}
zc.prototype = pn.prototype;
function qa(e, t, r) {
  this.props = e, this.context = t, this.refs = Uc, this.updater = r || Lc;
}
var Ga = qa.prototype = new zc();
Ga.constructor = qa;
Dc(Ga, pn.prototype);
Ga.isPureReactComponent = !0;
var Xl = Array.isArray, Mc = Object.prototype.hasOwnProperty, Ja = { current: null }, Bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fc(e, t, r) {
  var n, i = {}, s = null, o = null;
  if (t != null) for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Mc.call(t, n) && !Bc.hasOwnProperty(n) && (i[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) i.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (n in a = e.defaultProps, a) i[n] === void 0 && (i[n] = a[n]);
  return { $$typeof: gi, type: e, key: s, ref: o, props: i, _owner: Ja.current };
}
function Kf(e, t) {
  return { $$typeof: gi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gi;
}
function qf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Zl = /\/+/g;
function ao(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? qf("" + e.key) : t.toString(36);
}
function Ji(e, t, r, n, i) {
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
        case gi:
        case $f:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = n === "" ? "." + ao(o, 0) : n, Xl(i) ? (r = "", e != null && (r = e.replace(Zl, "$&/") + "/"), Ji(i, t, r, "", function(u) {
    return u;
  })) : i != null && (Qa(i) && (i = Kf(i, r + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Zl, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", Xl(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = n + ao(s, a);
    o += Ji(s, t, r, l, i);
  }
  else if (l = Hf(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = n + ao(s, a++), o += Ji(s, t, r, l, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function xi(e, t, r) {
  if (e == null) return e;
  var n = [], i = 0;
  return Ji(e, n, "", "", function(s) {
    return t.call(r, s, i++);
  }), n;
}
function Gf(e) {
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
var Re = { current: null }, Qi = { transition: null }, Jf = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: Qi, ReactCurrentOwner: Ja };
function Wc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: xi, forEach: function(e, t, r) {
  xi(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return xi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return xi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Qa(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = pn;
z.Fragment = Lf;
z.Profiler = Uf;
z.PureComponent = qa;
z.StrictMode = Df;
z.Suspense = Ff;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jf;
z.act = Wc;
z.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = Dc({}, e.props), i = e.key, s = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = Ja.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Mc.call(t, l) && !Bc.hasOwnProperty(l) && (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: gi, type: e.type, key: i, ref: s, props: n, _owner: o };
};
z.createContext = function(e) {
  return e = { $$typeof: Mf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: zf, _context: e }, e.Consumer = e;
};
z.createElement = Fc;
z.createFactory = function(e) {
  var t = Fc.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: Bf, render: e };
};
z.isValidElement = Qa;
z.lazy = function(e) {
  return { $$typeof: Vf, _payload: { _status: -1, _result: e }, _init: Gf };
};
z.memo = function(e, t) {
  return { $$typeof: Wf, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = Qi.transition;
  Qi.transition = {};
  try {
    e();
  } finally {
    Qi.transition = t;
  }
};
z.unstable_act = Wc;
z.useCallback = function(e, t) {
  return Re.current.useCallback(e, t);
};
z.useContext = function(e) {
  return Re.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return Re.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return Re.current.useEffect(e, t);
};
z.useId = function() {
  return Re.current.useId();
};
z.useImperativeHandle = function(e, t, r) {
  return Re.current.useImperativeHandle(e, t, r);
};
z.useInsertionEffect = function(e, t) {
  return Re.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return Re.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return Re.current.useMemo(e, t);
};
z.useReducer = function(e, t, r) {
  return Re.current.useReducer(e, t, r);
};
z.useRef = function(e) {
  return Re.current.useRef(e);
};
z.useState = function(e) {
  return Re.current.useState(e);
};
z.useSyncExternalStore = function(e, t, r) {
  return Re.current.useSyncExternalStore(e, t, r);
};
z.useTransition = function() {
  return Re.current.useTransition();
};
z.version = "18.3.1";
$c.exports = z;
var M = $c.exports;
const O = /* @__PURE__ */ Ic(M);
var Vc = { exports: {} }, Ke = {}, Hc = { exports: {} }, Kc = {};
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
  function t(T, C) {
    var N = T.length;
    T.push(C);
    e: for (; 0 < N; ) {
      var Y = N - 1 >>> 1, L = T[Y];
      if (0 < i(L, C)) T[Y] = C, T[N] = L, N = Y;
      else break e;
    }
  }
  function r(T) {
    return T.length === 0 ? null : T[0];
  }
  function n(T) {
    if (T.length === 0) return null;
    var C = T[0], N = T.pop();
    if (N !== C) {
      T[0] = N;
      e: for (var Y = 0, L = T.length, V = L >>> 1; Y < V; ) {
        var W = 2 * (Y + 1) - 1, pe = T[W], Ae = W + 1, G = T[Ae];
        if (0 > i(pe, N)) Ae < L && 0 > i(G, pe) ? (T[Y] = G, T[Ae] = N, Y = Ae) : (T[Y] = pe, T[W] = N, Y = W);
        else if (Ae < L && 0 > i(G, N)) T[Y] = G, T[Ae] = N, Y = Ae;
        else break e;
      }
    }
    return C;
  }
  function i(T, C) {
    var N = T.sortIndex - C.sortIndex;
    return N !== 0 ? N : T.id - C.id;
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
  var l = [], u = [], c = 1, p = null, f = 3, d = !1, y = !1, v = !1, _ = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var C = r(u); C !== null; ) {
      if (C.callback === null) n(u);
      else if (C.startTime <= T) n(u), C.sortIndex = C.expirationTime, t(l, C);
      else break;
      C = r(u);
    }
  }
  function w(T) {
    if (v = !1, m(T), !y) if (r(l) !== null) y = !0, je(x);
    else {
      var C = r(u);
      C !== null && be(w, C.startTime - T);
    }
  }
  function x(T, C) {
    y = !1, v && (v = !1, g(R), R = -1), d = !0;
    var N = f;
    try {
      for (m(C), p = r(l); p !== null && (!(p.expirationTime > C) || T && !H()); ) {
        var Y = p.callback;
        if (typeof Y == "function") {
          p.callback = null, f = p.priorityLevel;
          var L = Y(p.expirationTime <= C);
          C = e.unstable_now(), typeof L == "function" ? p.callback = L : p === r(l) && n(l), m(C);
        } else n(l);
        p = r(l);
      }
      if (p !== null) var V = !0;
      else {
        var W = r(u);
        W !== null && be(w, W.startTime - C), V = !1;
      }
      return V;
    } finally {
      p = null, f = N, d = !1;
    }
  }
  var k = !1, E = null, R = -1, U = 5, j = -1;
  function H() {
    return !(e.unstable_now() - j < U);
  }
  function F() {
    if (E !== null) {
      var T = e.unstable_now();
      j = T;
      var C = !0;
      try {
        C = E(!0, T);
      } finally {
        C ? ae() : (k = !1, E = null);
      }
    } else k = !1;
  }
  var ae;
  if (typeof h == "function") ae = function() {
    h(F);
  };
  else if (typeof MessageChannel < "u") {
    var ze = new MessageChannel(), ir = ze.port2;
    ze.port1.onmessage = F, ae = function() {
      ir.postMessage(null);
    };
  } else ae = function() {
    _(F, 0);
  };
  function je(T) {
    E = T, k || (k = !0, ae());
  }
  function be(T, C) {
    R = _(function() {
      T(e.unstable_now());
    }, C);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    y || d || (y = !0, je(x));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(T) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var C = 3;
        break;
      default:
        C = f;
    }
    var N = f;
    f = C;
    try {
      return T();
    } finally {
      f = N;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, C) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var N = f;
    f = T;
    try {
      return C();
    } finally {
      f = N;
    }
  }, e.unstable_scheduleCallback = function(T, C, N) {
    var Y = e.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? Y + N : Y) : N = Y, T) {
      case 1:
        var L = -1;
        break;
      case 2:
        L = 250;
        break;
      case 5:
        L = 1073741823;
        break;
      case 4:
        L = 1e4;
        break;
      default:
        L = 5e3;
    }
    return L = N + L, T = { id: c++, callback: C, priorityLevel: T, startTime: N, expirationTime: L, sortIndex: -1 }, N > Y ? (T.sortIndex = N, t(u, T), r(l) === null && T === r(u) && (v ? (g(R), R = -1) : v = !0, be(w, N - Y))) : (T.sortIndex = L, t(l, T), y || d || (y = !0, je(x))), T;
  }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(T) {
    var C = f;
    return function() {
      var N = f;
      f = C;
      try {
        return T.apply(this, arguments);
      } finally {
        f = N;
      }
    };
  };
})(Kc);
Hc.exports = Kc;
var Qf = Hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yf = M, He = Qf;
function b(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var qc = /* @__PURE__ */ new Set(), Kn = {};
function Er(e, t) {
  an(e, t), an(e + "Capture", t);
}
function an(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) qc.add(t[e]);
}
var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wo = Object.prototype.hasOwnProperty, Xf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eu = {}, tu = {};
function Zf(e) {
  return Wo.call(tu, e) ? !0 : Wo.call(eu, e) ? !1 : Xf.test(e) ? tu[e] = !0 : (eu[e] = !0, !1);
}
function ep(e, t, r, n) {
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
function tp(e, t, r, n) {
  if (t === null || typeof t > "u" || ep(e, t, r, n)) return !0;
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
function Pe(e, t, r, n, i, s, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o;
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ke[e] = new Pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ke[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ke[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ke[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ke[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ke[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ke[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ke[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ke[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ya = /[\-:]([a-z])/g;
function Xa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ya,
    Xa
  );
  ke[t] = new Pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ya, Xa);
  ke[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ya, Xa);
  ke[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Za(e, t, r, n) {
  var i = ke.hasOwnProperty(t) ? ke[t] : null;
  (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tp(t, r, i, n) && (r = null), n || i === null ? Zf(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var jt = Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ei = Symbol.for("react.element"), Mr = Symbol.for("react.portal"), Br = Symbol.for("react.fragment"), el = Symbol.for("react.strict_mode"), Vo = Symbol.for("react.profiler"), Gc = Symbol.for("react.provider"), Jc = Symbol.for("react.context"), tl = Symbol.for("react.forward_ref"), Ho = Symbol.for("react.suspense"), Ko = Symbol.for("react.suspense_list"), rl = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Qc = Symbol.for("react.offscreen"), ru = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object" ? null : (e = ru && e[ru] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ie = Object.assign, lo;
function Pn(e) {
  if (lo === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    lo = t && t[1] || "";
  }
  return `
` + lo + e;
}
var uo = !1;
function co(e, t) {
  if (!e || uo) return "";
  uo = !0;
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
    uo = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? Pn(e) : "";
}
function rp(e) {
  switch (e.tag) {
    case 5:
      return Pn(e.type);
    case 16:
      return Pn("Lazy");
    case 13:
      return Pn("Suspense");
    case 19:
      return Pn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = co(e.type, !1), e;
    case 11:
      return e = co(e.type.render, !1), e;
    case 1:
      return e = co(e.type, !0), e;
    default:
      return "";
  }
}
function qo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Br:
      return "Fragment";
    case Mr:
      return "Portal";
    case Vo:
      return "Profiler";
    case el:
      return "StrictMode";
    case Ho:
      return "Suspense";
    case Ko:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Jc:
      return (e.displayName || "Context") + ".Consumer";
    case Gc:
      return (e._context.displayName || "Context") + ".Provider";
    case tl:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case rl:
      return t = e.displayName || null, t !== null ? t : qo(e.type) || "Memo";
    case Dt:
      t = e._payload, e = e._init;
      try {
        return qo(e(t));
      } catch {
      }
  }
  return null;
}
function np(e) {
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
      return qo(t);
    case 8:
      return t === el ? "StrictMode" : "Mode";
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
function Zt(e) {
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
function Yc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ip(e) {
  var t = Yc(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
function Ti(e) {
  e._valueTracker || (e._valueTracker = ip(e));
}
function Xc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(), n = "";
  return e && (n = Yc(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function as(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Go(e, t) {
  var r = t.checked;
  return ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function nu(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Zt(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Zc(e, t) {
  t = t.checked, t != null && Za(e, "checked", t, !1);
}
function Jo(e, t) {
  Zc(e, t);
  var r = Zt(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qo(e, t.type, r) : t.hasOwnProperty("defaultValue") && Qo(e, t.type, Zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function iu(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Qo(e, t, r) {
  (t !== "number" || as(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var jn = Array.isArray;
function Zr(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Zt(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        e[i].selected = !0, n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function su(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(b(92));
      if (jn(r)) {
        if (1 < r.length) throw Error(b(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: Zt(r) };
}
function ed(e, t) {
  var r = Zt(t.value), n = Zt(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function td(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? td(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ci, rd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ci = Ci || document.createElement("div"), Ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ci.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function qn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $n = {
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
}, sp = ["Webkit", "ms", "Moz", "O"];
Object.keys($n).forEach(function(e) {
  sp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), $n[t] = $n[e];
  });
});
function nd(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || $n.hasOwnProperty(e) && $n[e] ? ("" + t).trim() : t + "px";
}
function id(e, t) {
  e = e.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, i = nd(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i;
  }
}
var op = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zo(e, t) {
  if (t) {
    if (op[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
  }
}
function ea(e, t) {
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
var ta = null;
function nl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ra = null, en = null, tn = null;
function au(e) {
  if (e = wi(e)) {
    if (typeof ra != "function") throw Error(b(280));
    var t = e.stateNode;
    t && (t = zs(t), ra(e.stateNode, e.type, t));
  }
}
function sd(e) {
  en ? tn ? tn.push(e) : tn = [e] : en = e;
}
function od() {
  if (en) {
    var e = en, t = tn;
    if (tn = en = null, au(e), t) for (e = 0; e < t.length; e++) au(t[e]);
  }
}
function ad(e, t) {
  return e(t);
}
function ld() {
}
var ho = !1;
function ud(e, t, r) {
  if (ho) return e(t, r);
  ho = !0;
  try {
    return ad(e, t, r);
  } finally {
    ho = !1, (en !== null || tn !== null) && (ld(), od());
  }
}
function Gn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = zs(r);
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
  if (r && typeof r != "function") throw Error(b(231, t, typeof r));
  return r;
}
var na = !1;
if (Ct) try {
  var bn = {};
  Object.defineProperty(bn, "passive", { get: function() {
    na = !0;
  } }), window.addEventListener("test", bn, bn), window.removeEventListener("test", bn, bn);
} catch {
  na = !1;
}
function ap(e, t, r, n, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ln = !1, ls = null, us = !1, ia = null, lp = { onError: function(e) {
  Ln = !0, ls = e;
} };
function up(e, t, r, n, i, s, o, a, l) {
  Ln = !1, ls = null, ap.apply(lp, arguments);
}
function cp(e, t, r, n, i, s, o, a, l) {
  if (up.apply(this, arguments), Ln) {
    if (Ln) {
      var u = ls;
      Ln = !1, ls = null;
    } else throw Error(b(198));
    us || (us = !0, ia = u);
  }
}
function Tr(e) {
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
function cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function lu(e) {
  if (Tr(e) !== e) throw Error(b(188));
}
function dp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Tr(e), t === null) throw Error(b(188));
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
        if (s === r) return lu(i), e;
        if (s === n) return lu(i), t;
        s = s.sibling;
      }
      throw Error(b(188));
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
        if (!o) throw Error(b(189));
      }
    }
    if (r.alternate !== n) throw Error(b(190));
  }
  if (r.tag !== 3) throw Error(b(188));
  return r.stateNode.current === r ? e : t;
}
function dd(e) {
  return e = dp(e), e !== null ? hd(e) : null;
}
function hd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fd = He.unstable_scheduleCallback, uu = He.unstable_cancelCallback, hp = He.unstable_shouldYield, fp = He.unstable_requestPaint, le = He.unstable_now, pp = He.unstable_getCurrentPriorityLevel, il = He.unstable_ImmediatePriority, pd = He.unstable_UserBlockingPriority, cs = He.unstable_NormalPriority, mp = He.unstable_LowPriority, md = He.unstable_IdlePriority, $s = null, wt = null;
function gp(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot($s, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ht = Math.clz32 ? Math.clz32 : wp, vp = Math.log, yp = Math.LN2;
function wp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (vp(e) / yp | 0) | 0;
}
var Oi = 64, Ri = 4194304;
function An(e) {
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
function ds(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0, i = e.suspendedLanes, s = e.pingedLanes, o = r & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? n = An(a) : (s &= o, s !== 0 && (n = An(s)));
  } else o = r & ~i, o !== 0 ? n = An(o) : s !== 0 && (n = An(s));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && (i = n & -n, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - ht(t), i = 1 << r, n |= e[r], t &= ~i;
  return n;
}
function _p(e, t) {
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
function kp(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - ht(s), a = 1 << o, l = i[o];
    l === -1 ? (!(a & r) || a & n) && (i[o] = _p(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function sa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function gd() {
  var e = Oi;
  return Oi <<= 1, !(Oi & 4194240) && (Oi = 64), e;
}
function fo(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function vi(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ht(t), e[t] = r;
}
function bp(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - ht(r), s = 1 << i;
    t[i] = 0, n[i] = -1, e[i] = -1, r &= ~s;
  }
}
function sl(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - ht(r), i = 1 << n;
    i & t | e[n] & t && (e[n] |= t), r &= ~i;
  }
}
var K = 0;
function vd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var yd, ol, wd, _d, kd, oa = !1, Pi = [], Ht = null, Kt = null, qt = null, Jn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), Mt = [], Sp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qn.delete(t.pointerId);
  }
}
function Sn(e, t, r, n, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: s, targetContainers: [i] }, t !== null && (t = wi(t), t !== null && ol(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function xp(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return Ht = Sn(Ht, e, t, r, n, i), !0;
    case "dragenter":
      return Kt = Sn(Kt, e, t, r, n, i), !0;
    case "mouseover":
      return qt = Sn(qt, e, t, r, n, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return Jn.set(s, Sn(Jn.get(s) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, Qn.set(s, Sn(Qn.get(s) || null, e, t, r, n, i)), !0;
  }
  return !1;
}
function bd(e) {
  var t = pr(e.target);
  if (t !== null) {
    var r = Tr(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = cd(r), t !== null) {
          e.blockedOn = t, kd(e.priority, function() {
            wd(r);
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
function Yi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      ta = n, r.target.dispatchEvent(n), ta = null;
    } else return t = wi(r), t !== null && ol(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function du(e, t, r) {
  Yi(e) && r.delete(t);
}
function Ep() {
  oa = !1, Ht !== null && Yi(Ht) && (Ht = null), Kt !== null && Yi(Kt) && (Kt = null), qt !== null && Yi(qt) && (qt = null), Jn.forEach(du), Qn.forEach(du);
}
function xn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, oa || (oa = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, Ep)));
}
function Yn(e) {
  function t(i) {
    return xn(i, e);
  }
  if (0 < Pi.length) {
    xn(Pi[0], e);
    for (var r = 1; r < Pi.length; r++) {
      var n = Pi[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Ht !== null && xn(Ht, e), Kt !== null && xn(Kt, e), qt !== null && xn(qt, e), Jn.forEach(t), Qn.forEach(t), r = 0; r < Mt.length; r++) n = Mt[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Mt.length && (r = Mt[0], r.blockedOn === null); ) bd(r), r.blockedOn === null && Mt.shift();
}
var rn = jt.ReactCurrentBatchConfig, hs = !0;
function Tp(e, t, r, n) {
  var i = K, s = rn.transition;
  rn.transition = null;
  try {
    K = 1, al(e, t, r, n);
  } finally {
    K = i, rn.transition = s;
  }
}
function Cp(e, t, r, n) {
  var i = K, s = rn.transition;
  rn.transition = null;
  try {
    K = 4, al(e, t, r, n);
  } finally {
    K = i, rn.transition = s;
  }
}
function al(e, t, r, n) {
  if (hs) {
    var i = aa(e, t, r, n);
    if (i === null) So(e, t, n, fs, r), cu(e, n);
    else if (xp(i, e, t, r, n)) n.stopPropagation();
    else if (cu(e, n), t & 4 && -1 < Sp.indexOf(e)) {
      for (; i !== null; ) {
        var s = wi(i);
        if (s !== null && yd(s), s = aa(e, t, r, n), s === null && So(e, t, n, fs, r), s === i) break;
        i = s;
      }
      i !== null && n.stopPropagation();
    } else So(e, t, n, null, r);
  }
}
var fs = null;
function aa(e, t, r, n) {
  if (fs = null, e = nl(n), e = pr(e), e !== null) if (t = Tr(e), t === null) e = null;
  else if (r = t.tag, r === 13) {
    if (e = cd(t), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return fs = e, null;
}
function Sd(e) {
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
      switch (pp()) {
        case il:
          return 1;
        case pd:
          return 4;
        case cs:
        case mp:
          return 16;
        case md:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null, ll = null, Xi = null;
function xd() {
  if (Xi) return Xi;
  var e, t = ll, r = t.length, n, i = "value" in Wt ? Wt.value : Wt.textContent, s = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++) ;
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[s - n]; n++) ;
  return Xi = i.slice(e, 1 < n ? 1 - n : void 0);
}
function Zi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ji() {
  return !0;
}
function hu() {
  return !1;
}
function qe(e) {
  function t(r, n, i, s, o) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (r = e[a], this[a] = r ? r(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ji : hu, this.isPropagationStopped = hu, this;
  }
  return ie(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = ji);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = ji);
  }, persist: function() {
  }, isPersistent: ji }), t;
}
var mn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ul = qe(mn), yi = ie({}, mn, { view: 0, detail: 0 }), Op = qe(yi), po, mo, En, Ls = ie({}, yi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (po = e.screenX - En.screenX, mo = e.screenY - En.screenY) : mo = po = 0, En = e), po);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : mo;
} }), fu = qe(Ls), Rp = ie({}, Ls, { dataTransfer: 0 }), Pp = qe(Rp), jp = ie({}, yi, { relatedTarget: 0 }), go = qe(jp), Ap = ie({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Np = qe(Ap), Ip = ie({}, mn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), $p = qe(Ip), Lp = ie({}, mn, { data: 0 }), pu = qe(Lp), Dp = {
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
}, Up = {
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
}, zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Mp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zp[e]) ? !!t[e] : !1;
}
function cl() {
  return Mp;
}
var Bp = ie({}, yi, { key: function(e) {
  if (e.key) {
    var t = Dp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Zi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Up[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cl, charCode: function(e) {
  return e.type === "keypress" ? Zi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Fp = qe(Bp), Wp = ie({}, Ls, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), mu = qe(Wp), Vp = ie({}, yi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cl }), Hp = qe(Vp), Kp = ie({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qp = qe(Kp), Gp = ie({}, Ls, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Jp = qe(Gp), Qp = [9, 13, 27, 32], dl = Ct && "CompositionEvent" in window, Dn = null;
Ct && "documentMode" in document && (Dn = document.documentMode);
var Yp = Ct && "TextEvent" in window && !Dn, Ed = Ct && (!dl || Dn && 8 < Dn && 11 >= Dn), gu = " ", vu = !1;
function Td(e, t) {
  switch (e) {
    case "keyup":
      return Qp.indexOf(t.keyCode) !== -1;
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
function Cd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Fr = !1;
function Xp(e, t) {
  switch (e) {
    case "compositionend":
      return Cd(t);
    case "keypress":
      return t.which !== 32 ? null : (vu = !0, gu);
    case "textInput":
      return e = t.data, e === gu && vu ? null : e;
    default:
      return null;
  }
}
function Zp(e, t) {
  if (Fr) return e === "compositionend" || !dl && Td(e, t) ? (e = xd(), Xi = ll = Wt = null, Fr = !1, e) : null;
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
      return Ed && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var em = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!em[e.type] : t === "textarea";
}
function Od(e, t, r, n) {
  sd(n), t = ps(t, "onChange"), 0 < t.length && (r = new ul("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Un = null, Xn = null;
function tm(e) {
  zd(e, 0);
}
function Ds(e) {
  var t = Hr(e);
  if (Xc(t)) return e;
}
function rm(e, t) {
  if (e === "change") return t;
}
var Rd = !1;
if (Ct) {
  var vo;
  if (Ct) {
    var yo = "oninput" in document;
    if (!yo) {
      var wu = document.createElement("div");
      wu.setAttribute("oninput", "return;"), yo = typeof wu.oninput == "function";
    }
    vo = yo;
  } else vo = !1;
  Rd = vo && (!document.documentMode || 9 < document.documentMode);
}
function _u() {
  Un && (Un.detachEvent("onpropertychange", Pd), Xn = Un = null);
}
function Pd(e) {
  if (e.propertyName === "value" && Ds(Xn)) {
    var t = [];
    Od(t, Xn, e, nl(e)), ud(tm, t);
  }
}
function nm(e, t, r) {
  e === "focusin" ? (_u(), Un = t, Xn = r, Un.attachEvent("onpropertychange", Pd)) : e === "focusout" && _u();
}
function im(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ds(Xn);
}
function sm(e, t) {
  if (e === "click") return Ds(t);
}
function om(e, t) {
  if (e === "input" || e === "change") return Ds(t);
}
function am(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pt = typeof Object.is == "function" ? Object.is : am;
function Zn(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Wo.call(t, i) || !pt(e[i], t[i])) return !1;
  }
  return !0;
}
function ku(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function bu(e, t) {
  var r = ku(e);
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
    r = ku(r);
  }
}
function jd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ad() {
  for (var e = window, t = as(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = as(e.document);
  }
  return t;
}
function hl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function lm(e) {
  var t = Ad(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && jd(r.ownerDocument.documentElement, r)) {
    if (n !== null && hl(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = r.textContent.length, s = Math.min(n.start, i);
        n = n.end === void 0 ? s : Math.min(n.end, i), !e.extend && s > n && (i = n, n = s, s = i), i = bu(r, s);
        var o = bu(
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
var um = Ct && "documentMode" in document && 11 >= document.documentMode, Wr = null, la = null, zn = null, ua = !1;
function Su(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  ua || Wr == null || Wr !== as(n) || (n = Wr, "selectionStart" in n && hl(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), zn && Zn(zn, n) || (zn = n, n = ps(la, "onSelect"), 0 < n.length && (t = new ul("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Wr)));
}
function Ai(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Vr = { animationend: Ai("Animation", "AnimationEnd"), animationiteration: Ai("Animation", "AnimationIteration"), animationstart: Ai("Animation", "AnimationStart"), transitionend: Ai("Transition", "TransitionEnd") }, wo = {}, Nd = {};
Ct && (Nd = document.createElement("div").style, "AnimationEvent" in window || (delete Vr.animationend.animation, delete Vr.animationiteration.animation, delete Vr.animationstart.animation), "TransitionEvent" in window || delete Vr.transitionend.transition);
function Us(e) {
  if (wo[e]) return wo[e];
  if (!Vr[e]) return e;
  var t = Vr[e], r;
  for (r in t) if (t.hasOwnProperty(r) && r in Nd) return wo[e] = t[r];
  return e;
}
var Id = Us("animationend"), $d = Us("animationiteration"), Ld = Us("animationstart"), Dd = Us("transitionend"), Ud = /* @__PURE__ */ new Map(), xu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function tr(e, t) {
  Ud.set(e, t), Er(t, [e]);
}
for (var _o = 0; _o < xu.length; _o++) {
  var ko = xu[_o], cm = ko.toLowerCase(), dm = ko[0].toUpperCase() + ko.slice(1);
  tr(cm, "on" + dm);
}
tr(Id, "onAnimationEnd");
tr($d, "onAnimationIteration");
tr(Ld, "onAnimationStart");
tr("dblclick", "onDoubleClick");
tr("focusin", "onFocus");
tr("focusout", "onBlur");
tr(Dd, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
Er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function Eu(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, cp(n, t, void 0, e), e.currentTarget = null;
}
function zd(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], i = n.event;
    n = n.listeners;
    e: {
      var s = void 0;
      if (t) for (var o = n.length - 1; 0 <= o; o--) {
        var a = n[o], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
        Eu(i, a, u), s = l;
      }
      else for (o = 0; o < n.length; o++) {
        if (a = n[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
        Eu(i, a, u), s = l;
      }
    }
  }
  if (us) throw e = ia, us = !1, ia = null, e;
}
function X(e, t) {
  var r = t[pa];
  r === void 0 && (r = t[pa] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (Md(t, e, 2, !1), r.add(n));
}
function bo(e, t, r) {
  var n = 0;
  t && (n |= 4), Md(r, e, n, t);
}
var Ni = "_reactListening" + Math.random().toString(36).slice(2);
function ei(e) {
  if (!e[Ni]) {
    e[Ni] = !0, qc.forEach(function(r) {
      r !== "selectionchange" && (hm.has(r) || bo(r, !1, e), bo(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ni] || (t[Ni] = !0, bo("selectionchange", !1, t));
  }
}
function Md(e, t, r, n) {
  switch (Sd(t)) {
    case 1:
      var i = Tp;
      break;
    case 4:
      i = Cp;
      break;
    default:
      i = al;
  }
  r = i.bind(null, t, r, e), i = void 0, !na || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: i }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, { passive: i }) : e.addEventListener(t, r, !1);
}
function So(e, t, r, n, i) {
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
        if (o = pr(a), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          n = s = o;
          continue e;
        }
        a = a.parentNode;
      }
    }
    n = n.return;
  }
  ud(function() {
    var u = s, c = nl(r), p = [];
    e: {
      var f = Ud.get(e);
      if (f !== void 0) {
        var d = ul, y = e;
        switch (e) {
          case "keypress":
            if (Zi(r) === 0) break e;
          case "keydown":
          case "keyup":
            d = Fp;
            break;
          case "focusin":
            y = "focus", d = go;
            break;
          case "focusout":
            y = "blur", d = go;
            break;
          case "beforeblur":
          case "afterblur":
            d = go;
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
            d = fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Pp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = Hp;
            break;
          case Id:
          case $d:
          case Ld:
            d = Np;
            break;
          case Dd:
            d = qp;
            break;
          case "scroll":
            d = Op;
            break;
          case "wheel":
            d = Jp;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = $p;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = mu;
        }
        var v = (t & 4) !== 0, _ = !v && e === "scroll", g = v ? f !== null ? f + "Capture" : null : f;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, g !== null && (w = Gn(h, g), w != null && v.push(ti(h, w, m)))), _) break;
          h = h.return;
        }
        0 < v.length && (f = new d(f, y, null, r, c), p.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", f && r !== ta && (y = r.relatedTarget || r.fromElement) && (pr(y) || y[Ot])) break e;
        if ((d || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, d ? (y = r.relatedTarget || r.toElement, d = u, y = y ? pr(y) : null, y !== null && (_ = Tr(y), y !== _ || y.tag !== 5 && y.tag !== 6) && (y = null)) : (d = null, y = u), d !== y)) {
          if (v = fu, w = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = mu, w = "onPointerLeave", g = "onPointerEnter", h = "pointer"), _ = d == null ? f : Hr(d), m = y == null ? f : Hr(y), f = new v(w, h + "leave", d, r, c), f.target = _, f.relatedTarget = m, w = null, pr(c) === u && (v = new v(g, h + "enter", y, r, c), v.target = m, v.relatedTarget = _, w = v), _ = w, d && y) t: {
            for (v = d, g = y, h = 0, m = v; m; m = Pr(m)) h++;
            for (m = 0, w = g; w; w = Pr(w)) m++;
            for (; 0 < h - m; ) v = Pr(v), h--;
            for (; 0 < m - h; ) g = Pr(g), m--;
            for (; h--; ) {
              if (v === g || g !== null && v === g.alternate) break t;
              v = Pr(v), g = Pr(g);
            }
            v = null;
          }
          else v = null;
          d !== null && Tu(p, f, d, v, !1), y !== null && _ !== null && Tu(p, _, y, v, !0);
        }
      }
      e: {
        if (f = u ? Hr(u) : window, d = f.nodeName && f.nodeName.toLowerCase(), d === "select" || d === "input" && f.type === "file") var x = rm;
        else if (yu(f)) if (Rd) x = om;
        else {
          x = im;
          var k = nm;
        }
        else (d = f.nodeName) && d.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (x = sm);
        if (x && (x = x(e, u))) {
          Od(p, x, r, c);
          break e;
        }
        k && k(e, f, u), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Qo(f, "number", f.value);
      }
      switch (k = u ? Hr(u) : window, e) {
        case "focusin":
          (yu(k) || k.contentEditable === "true") && (Wr = k, la = u, zn = null);
          break;
        case "focusout":
          zn = la = Wr = null;
          break;
        case "mousedown":
          ua = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ua = !1, Su(p, r, c);
          break;
        case "selectionchange":
          if (um) break;
        case "keydown":
        case "keyup":
          Su(p, r, c);
      }
      var E;
      if (dl) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else Fr ? Td(e, r) && (R = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (R = "onCompositionStart");
      R && (Ed && r.locale !== "ko" && (Fr || R !== "onCompositionStart" ? R === "onCompositionEnd" && Fr && (E = xd()) : (Wt = c, ll = "value" in Wt ? Wt.value : Wt.textContent, Fr = !0)), k = ps(u, R), 0 < k.length && (R = new pu(R, e, null, r, c), p.push({ event: R, listeners: k }), E ? R.data = E : (E = Cd(r), E !== null && (R.data = E)))), (E = Yp ? Xp(e, r) : Zp(e, r)) && (u = ps(u, "onBeforeInput"), 0 < u.length && (c = new pu("onBeforeInput", "beforeinput", null, r, c), p.push({ event: c, listeners: u }), c.data = E));
    }
    zd(p, t);
  });
}
function ti(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function ps(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = Gn(e, r), s != null && n.unshift(ti(e, s, i)), s = Gn(e, t), s != null && n.push(ti(e, s, i))), e = e.return;
  }
  return n;
}
function Pr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tu(e, t, r, n, i) {
  for (var s = t._reactName, o = []; r !== null && r !== n; ) {
    var a = r, l = a.alternate, u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 && u !== null && (a = u, i ? (l = Gn(r, s), l != null && o.unshift(ti(r, l, a))) : i || (l = Gn(r, s), l != null && o.push(ti(r, l, a)))), r = r.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var fm = /\r\n?/g, pm = /\u0000|\uFFFD/g;
function Cu(e) {
  return (typeof e == "string" ? e : "" + e).replace(fm, `
`).replace(pm, "");
}
function Ii(e, t, r) {
  if (t = Cu(t), Cu(e) !== t && r) throw Error(b(425));
}
function ms() {
}
var ca = null, da = null;
function ha(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fa = typeof setTimeout == "function" ? setTimeout : void 0, mm = typeof clearTimeout == "function" ? clearTimeout : void 0, Ou = typeof Promise == "function" ? Promise : void 0, gm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ou < "u" ? function(e) {
  return Ou.resolve(null).then(e).catch(vm);
} : fa;
function vm(e) {
  setTimeout(function() {
    throw e;
  });
}
function xo(e, t) {
  var r = t, n = 0;
  do {
    var i = r.nextSibling;
    if (e.removeChild(r), i && i.nodeType === 8) if (r = i.data, r === "/$") {
      if (n === 0) {
        e.removeChild(i), Yn(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  Yn(t);
}
function Gt(e) {
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
function Ru(e) {
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
var gn = Math.random().toString(36).slice(2), yt = "__reactFiber$" + gn, ri = "__reactProps$" + gn, Ot = "__reactContainer$" + gn, pa = "__reactEvents$" + gn, ym = "__reactListeners$" + gn, wm = "__reactHandles$" + gn;
function pr(e) {
  var t = e[yt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Ot] || r[yt]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Ru(e); e !== null; ) {
        if (r = e[yt]) return r;
        e = Ru(e);
      }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function wi(e) {
  return e = e[yt] || e[Ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Hr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function zs(e) {
  return e[ri] || null;
}
var ma = [], Kr = -1;
function rr(e) {
  return { current: e };
}
function Z(e) {
  0 > Kr || (e.current = ma[Kr], ma[Kr] = null, Kr--);
}
function Q(e, t) {
  Kr++, ma[Kr] = e.current, e.current = t;
}
var er = {}, Te = rr(er), Le = rr(!1), _r = er;
function ln(e, t) {
  var r = e.type.contextTypes;
  if (!r) return er;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in r) i[s] = t[s];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function De(e) {
  return e = e.childContextTypes, e != null;
}
function gs() {
  Z(Le), Z(Te);
}
function Pu(e, t, r) {
  if (Te.current !== er) throw Error(b(168));
  Q(Te, t), Q(Le, r);
}
function Bd(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(b(108, np(e) || "Unknown", i));
  return ie({}, r, n);
}
function vs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || er, _r = Te.current, Q(Te, e), Q(Le, Le.current), !0;
}
function ju(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(b(169));
  r ? (e = Bd(e, t, _r), n.__reactInternalMemoizedMergedChildContext = e, Z(Le), Z(Te), Q(Te, e)) : Z(Le), Q(Le, r);
}
var St = null, Ms = !1, Eo = !1;
function Fd(e) {
  St === null ? St = [e] : St.push(e);
}
function _m(e) {
  Ms = !0, Fd(e);
}
function nr() {
  if (!Eo && St !== null) {
    Eo = !0;
    var e = 0, t = K;
    try {
      var r = St;
      for (K = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      St = null, Ms = !1;
    } catch (i) {
      throw St !== null && (St = St.slice(e + 1)), fd(il, nr), i;
    } finally {
      K = t, Eo = !1;
    }
  }
  return null;
}
var qr = [], Gr = 0, ys = null, ws = 0, Je = [], Qe = 0, kr = null, xt = 1, Et = "";
function ur(e, t) {
  qr[Gr++] = ws, qr[Gr++] = ys, ys = e, ws = t;
}
function Wd(e, t, r) {
  Je[Qe++] = xt, Je[Qe++] = Et, Je[Qe++] = kr, kr = e;
  var n = xt;
  e = Et;
  var i = 32 - ht(n) - 1;
  n &= ~(1 << i), r += 1;
  var s = 32 - ht(t) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (n & (1 << o) - 1).toString(32), n >>= o, i -= o, xt = 1 << 32 - ht(t) + i | r << i | n, Et = s + e;
  } else xt = 1 << s | r << i | n, Et = e;
}
function fl(e) {
  e.return !== null && (ur(e, 1), Wd(e, 1, 0));
}
function pl(e) {
  for (; e === ys; ) ys = qr[--Gr], qr[Gr] = null, ws = qr[--Gr], qr[Gr] = null;
  for (; e === kr; ) kr = Je[--Qe], Je[Qe] = null, Et = Je[--Qe], Je[Qe] = null, xt = Je[--Qe], Je[Qe] = null;
}
var Ve = null, We = null, te = !1, dt = null;
function Vd(e, t) {
  var r = Ye(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function Au(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, We = Gt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, We = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = kr !== null ? { id: xt, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Ye(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Ve = e, We = null, !0) : !1;
    default:
      return !1;
  }
}
function ga(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function va(e) {
  if (te) {
    var t = We;
    if (t) {
      var r = t;
      if (!Au(e, t)) {
        if (ga(e)) throw Error(b(418));
        t = Gt(r.nextSibling);
        var n = Ve;
        t && Au(e, t) ? Vd(n, r) : (e.flags = e.flags & -4097 | 2, te = !1, Ve = e);
      }
    } else {
      if (ga(e)) throw Error(b(418));
      e.flags = e.flags & -4097 | 2, te = !1, Ve = e;
    }
  }
}
function Nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ve = e;
}
function $i(e) {
  if (e !== Ve) return !1;
  if (!te) return Nu(e), te = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ha(e.type, e.memoizedProps)), t && (t = We)) {
    if (ga(e)) throw Hd(), Error(b(418));
    for (; t; ) Vd(e, t), t = Gt(t.nextSibling);
  }
  if (Nu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              We = Gt(e.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Ve ? Gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Hd() {
  for (var e = We; e; ) e = Gt(e.nextSibling);
}
function un() {
  We = Ve = null, te = !1;
}
function ml(e) {
  dt === null ? dt = [e] : dt.push(e);
}
var km = jt.ReactCurrentBatchConfig;
function Tn(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(b(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(b(147, e));
      var i = n, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
        var a = i.refs;
        o === null ? delete a[s] : a[s] = o;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(b(284));
    if (!r._owner) throw Error(b(290, e));
  }
  return e;
}
function Li(e, t) {
  throw e = Object.prototype.toString.call(t), Error(b(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Iu(e) {
  var t = e._init;
  return t(e._payload);
}
function Kd(e) {
  function t(g, h) {
    if (e) {
      var m = g.deletions;
      m === null ? (g.deletions = [h], g.flags |= 16) : m.push(h);
    }
  }
  function r(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), h = h.sibling;
    return null;
  }
  function n(g, h) {
    for (g = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
    return g;
  }
  function i(g, h) {
    return g = Xt(g, h), g.index = 0, g.sibling = null, g;
  }
  function s(g, h, m) {
    return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < h ? (g.flags |= 2, h) : m) : (g.flags |= 2, h)) : (g.flags |= 1048576, h);
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, h, m, w) {
    return h === null || h.tag !== 6 ? (h = Ao(m, g.mode, w), h.return = g, h) : (h = i(h, m), h.return = g, h);
  }
  function l(g, h, m, w) {
    var x = m.type;
    return x === Br ? c(g, h, m.props.children, w, m.key) : h !== null && (h.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Dt && Iu(x) === h.type) ? (w = i(h, m.props), w.ref = Tn(g, h, m), w.return = g, w) : (w = os(m.type, m.key, m.props, null, g.mode, w), w.ref = Tn(g, h, m), w.return = g, w);
  }
  function u(g, h, m, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = No(m, g.mode, w), h.return = g, h) : (h = i(h, m.children || []), h.return = g, h);
  }
  function c(g, h, m, w, x) {
    return h === null || h.tag !== 7 ? (h = wr(m, g.mode, w, x), h.return = g, h) : (h = i(h, m), h.return = g, h);
  }
  function p(g, h, m) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Ao("" + h, g.mode, m), h.return = g, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ei:
          return m = os(h.type, h.key, h.props, null, g.mode, m), m.ref = Tn(g, null, h), m.return = g, m;
        case Mr:
          return h = No(h, g.mode, m), h.return = g, h;
        case Dt:
          var w = h._init;
          return p(g, w(h._payload), m);
      }
      if (jn(h) || kn(h)) return h = wr(h, g.mode, m, null), h.return = g, h;
      Li(g, h);
    }
    return null;
  }
  function f(g, h, m, w) {
    var x = h !== null ? h.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return x !== null ? null : a(g, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ei:
          return m.key === x ? l(g, h, m, w) : null;
        case Mr:
          return m.key === x ? u(g, h, m, w) : null;
        case Dt:
          return x = m._init, f(
            g,
            h,
            x(m._payload),
            w
          );
      }
      if (jn(m) || kn(m)) return x !== null ? null : c(g, h, m, w, null);
      Li(g, m);
    }
    return null;
  }
  function d(g, h, m, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return g = g.get(m) || null, a(h, g, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ei:
          return g = g.get(w.key === null ? m : w.key) || null, l(h, g, w, x);
        case Mr:
          return g = g.get(w.key === null ? m : w.key) || null, u(h, g, w, x);
        case Dt:
          var k = w._init;
          return d(g, h, m, k(w._payload), x);
      }
      if (jn(w) || kn(w)) return g = g.get(m) || null, c(h, g, w, x, null);
      Li(h, w);
    }
    return null;
  }
  function y(g, h, m, w) {
    for (var x = null, k = null, E = h, R = h = 0, U = null; E !== null && R < m.length; R++) {
      E.index > R ? (U = E, E = null) : U = E.sibling;
      var j = f(g, E, m[R], w);
      if (j === null) {
        E === null && (E = U);
        break;
      }
      e && E && j.alternate === null && t(g, E), h = s(j, h, R), k === null ? x = j : k.sibling = j, k = j, E = U;
    }
    if (R === m.length) return r(g, E), te && ur(g, R), x;
    if (E === null) {
      for (; R < m.length; R++) E = p(g, m[R], w), E !== null && (h = s(E, h, R), k === null ? x = E : k.sibling = E, k = E);
      return te && ur(g, R), x;
    }
    for (E = n(g, E); R < m.length; R++) U = d(E, g, R, m[R], w), U !== null && (e && U.alternate !== null && E.delete(U.key === null ? R : U.key), h = s(U, h, R), k === null ? x = U : k.sibling = U, k = U);
    return e && E.forEach(function(H) {
      return t(g, H);
    }), te && ur(g, R), x;
  }
  function v(g, h, m, w) {
    var x = kn(m);
    if (typeof x != "function") throw Error(b(150));
    if (m = x.call(m), m == null) throw Error(b(151));
    for (var k = x = null, E = h, R = h = 0, U = null, j = m.next(); E !== null && !j.done; R++, j = m.next()) {
      E.index > R ? (U = E, E = null) : U = E.sibling;
      var H = f(g, E, j.value, w);
      if (H === null) {
        E === null && (E = U);
        break;
      }
      e && E && H.alternate === null && t(g, E), h = s(H, h, R), k === null ? x = H : k.sibling = H, k = H, E = U;
    }
    if (j.done) return r(
      g,
      E
    ), te && ur(g, R), x;
    if (E === null) {
      for (; !j.done; R++, j = m.next()) j = p(g, j.value, w), j !== null && (h = s(j, h, R), k === null ? x = j : k.sibling = j, k = j);
      return te && ur(g, R), x;
    }
    for (E = n(g, E); !j.done; R++, j = m.next()) j = d(E, g, R, j.value, w), j !== null && (e && j.alternate !== null && E.delete(j.key === null ? R : j.key), h = s(j, h, R), k === null ? x = j : k.sibling = j, k = j);
    return e && E.forEach(function(F) {
      return t(g, F);
    }), te && ur(g, R), x;
  }
  function _(g, h, m, w) {
    if (typeof m == "object" && m !== null && m.type === Br && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ei:
          e: {
            for (var x = m.key, k = h; k !== null; ) {
              if (k.key === x) {
                if (x = m.type, x === Br) {
                  if (k.tag === 7) {
                    r(g, k.sibling), h = i(k, m.props.children), h.return = g, g = h;
                    break e;
                  }
                } else if (k.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Dt && Iu(x) === k.type) {
                  r(g, k.sibling), h = i(k, m.props), h.ref = Tn(g, k, m), h.return = g, g = h;
                  break e;
                }
                r(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            m.type === Br ? (h = wr(m.props.children, g.mode, w, m.key), h.return = g, g = h) : (w = os(m.type, m.key, m.props, null, g.mode, w), w.ref = Tn(g, h, m), w.return = g, g = w);
          }
          return o(g);
        case Mr:
          e: {
            for (k = m.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                r(g, h.sibling), h = i(h, m.children || []), h.return = g, g = h;
                break e;
              } else {
                r(g, h);
                break;
              }
              else t(g, h);
              h = h.sibling;
            }
            h = No(m, g.mode, w), h.return = g, g = h;
          }
          return o(g);
        case Dt:
          return k = m._init, _(g, h, k(m._payload), w);
      }
      if (jn(m)) return y(g, h, m, w);
      if (kn(m)) return v(g, h, m, w);
      Li(g, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (r(g, h.sibling), h = i(h, m), h.return = g, g = h) : (r(g, h), h = Ao(m, g.mode, w), h.return = g, g = h), o(g)) : r(g, h);
  }
  return _;
}
var cn = Kd(!0), qd = Kd(!1), _s = rr(null), ks = null, Jr = null, gl = null;
function vl() {
  gl = Jr = ks = null;
}
function yl(e) {
  var t = _s.current;
  Z(_s), e._currentValue = t;
}
function ya(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
    e = e.return;
  }
}
function nn(e, t) {
  ks = e, gl = Jr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0), e.firstContext = null);
}
function Ze(e) {
  var t = e._currentValue;
  if (gl !== e) if (e = { context: e, memoizedValue: t, next: null }, Jr === null) {
    if (ks === null) throw Error(b(308));
    Jr = e, ks.dependencies = { lanes: 0, firstContext: e };
  } else Jr = Jr.next = e;
  return t;
}
var mr = null;
function wl(e) {
  mr === null ? mr = [e] : mr.push(e);
}
function Gd(e, t, r, n) {
  var i = t.interleaved;
  return i === null ? (r.next = r, wl(t)) : (r.next = i.next, i.next = r), t.interleaved = r, Rt(e, n);
}
function Rt(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var Ut = !1;
function _l(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Jd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Jt(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (n = n.shared, B & 2) {
    var i = n.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, Rt(e, r);
  }
  return i = n.interleaved, i === null ? (t.next = t, wl(n)) : (t.next = i.next, i.next = t), n.interleaved = t, Rt(e, r);
}
function es(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, sl(e, r);
  }
}
function $u(e, t) {
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
function bs(e, t, r, n) {
  var i = e.updateQueue;
  Ut = !1;
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
      var f = a.lane, d = a.eventTime;
      if ((n & f) === f) {
        c !== null && (c = c.next = {
          eventTime: d,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var y = e, v = a;
          switch (f = t, d = r, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                p = y.call(d, p, f);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, f = typeof y == "function" ? y.call(d, p, f) : y, f == null) break e;
              p = ie({}, p, f);
              break e;
            case 2:
              Ut = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [a] : f.push(a));
      } else d = { eventTime: d, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = d, l = p) : c = c.next = d, o |= f;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = p), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    Sr |= o, e.lanes = o, e.memoizedState = p;
  }
}
function Lu(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var n = e[t], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = r, typeof i != "function") throw Error(b(191, i));
      i.call(n);
    }
  }
}
var _i = {}, _t = rr(_i), ni = rr(_i), ii = rr(_i);
function gr(e) {
  if (e === _i) throw Error(b(174));
  return e;
}
function kl(e, t) {
  switch (Q(ii, t), Q(ni, e), Q(_t, _i), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xo(t, e);
  }
  Z(_t), Q(_t, t);
}
function dn() {
  Z(_t), Z(ni), Z(ii);
}
function Qd(e) {
  gr(ii.current);
  var t = gr(_t.current), r = Xo(t, e.type);
  t !== r && (Q(ni, e), Q(_t, r));
}
function bl(e) {
  ni.current === e && (Z(_t), Z(ni));
}
var re = rr(0);
function Ss(e) {
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
var To = [];
function Sl() {
  for (var e = 0; e < To.length; e++) To[e]._workInProgressVersionPrimary = null;
  To.length = 0;
}
var ts = jt.ReactCurrentDispatcher, Co = jt.ReactCurrentBatchConfig, br = 0, ne = null, he = null, me = null, xs = !1, Mn = !1, si = 0, bm = 0;
function Se() {
  throw Error(b(321));
}
function xl(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!pt(e[r], t[r])) return !1;
  return !0;
}
function El(e, t, r, n, i, s) {
  if (br = s, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ts.current = e === null || e.memoizedState === null ? Tm : Cm, e = r(n, i), Mn) {
    s = 0;
    do {
      if (Mn = !1, si = 0, 25 <= s) throw Error(b(301));
      s += 1, me = he = null, t.updateQueue = null, ts.current = Om, e = r(n, i);
    } while (Mn);
  }
  if (ts.current = Es, t = he !== null && he.next !== null, br = 0, me = he = ne = null, xs = !1, t) throw Error(b(300));
  return e;
}
function Tl() {
  var e = si !== 0;
  return si = 0, e;
}
function vt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? ne.memoizedState = me = e : me = me.next = e, me;
}
function et() {
  if (he === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = me === null ? ne.memoizedState : me.next;
  if (t !== null) me = t, he = e;
  else {
    if (e === null) throw Error(b(310));
    he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, me === null ? ne.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function oi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oo(e) {
  var t = et(), r = t.queue;
  if (r === null) throw Error(b(311));
  r.lastRenderedReducer = e;
  var n = he, i = n.baseQueue, s = r.pending;
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
      if ((br & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = p, o = n) : l = l.next = p, ne.lanes |= c, Sr |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? o = n : l.next = a, pt(n, t.memoizedState) || ($e = !0), t.memoizedState = n, t.baseState = o, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, ne.lanes |= s, Sr |= s, i = i.next;
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Ro(e) {
  var t = et(), r = t.queue;
  if (r === null) throw Error(b(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, i = r.pending, s = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = i = i.next;
    do
      s = e(s, o.action), o = o.next;
    while (o !== i);
    pt(s, t.memoizedState) || ($e = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), r.lastRenderedState = s;
  }
  return [s, n];
}
function Yd() {
}
function Xd(e, t) {
  var r = ne, n = et(), i = t(), s = !pt(n.memoizedState, i);
  if (s && (n.memoizedState = i, $e = !0), n = n.queue, Cl(th.bind(null, r, n, e), [e]), n.getSnapshot !== t || s || me !== null && me.memoizedState.tag & 1) {
    if (r.flags |= 2048, ai(9, eh.bind(null, r, n, i, t), void 0, null), ge === null) throw Error(b(349));
    br & 30 || Zd(r, t, i);
  }
  return i;
}
function Zd(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function eh(e, t, r, n) {
  t.value = r, t.getSnapshot = n, rh(t) && nh(e);
}
function th(e, t, r) {
  return r(function() {
    rh(t) && nh(e);
  });
}
function rh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !pt(e, r);
  } catch {
    return !0;
  }
}
function nh(e) {
  var t = Rt(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function Du(e) {
  var t = vt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: oi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Em.bind(null, ne, e), [t.memoizedState, e];
}
function ai(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function ih() {
  return et().memoizedState;
}
function rs(e, t, r, n) {
  var i = vt();
  ne.flags |= e, i.memoizedState = ai(1 | t, r, void 0, n === void 0 ? null : n);
}
function Bs(e, t, r, n) {
  var i = et();
  n = n === void 0 ? null : n;
  var s = void 0;
  if (he !== null) {
    var o = he.memoizedState;
    if (s = o.destroy, n !== null && xl(n, o.deps)) {
      i.memoizedState = ai(t, r, s, n);
      return;
    }
  }
  ne.flags |= e, i.memoizedState = ai(1 | t, r, s, n);
}
function Uu(e, t) {
  return rs(8390656, 8, e, t);
}
function Cl(e, t) {
  return Bs(2048, 8, e, t);
}
function sh(e, t) {
  return Bs(4, 2, e, t);
}
function oh(e, t) {
  return Bs(4, 4, e, t);
}
function ah(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function lh(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Bs(4, 4, ah.bind(null, t, e), r);
}
function Ol() {
}
function uh(e, t) {
  var r = et();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && xl(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function ch(e, t) {
  var r = et();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && xl(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function dh(e, t, r) {
  return br & 21 ? (pt(r, t) || (r = gd(), ne.lanes |= r, Sr |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, $e = !0), e.memoizedState = r);
}
function Sm(e, t) {
  var r = K;
  K = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Co.transition;
  Co.transition = {};
  try {
    e(!1), t();
  } finally {
    K = r, Co.transition = n;
  }
}
function hh() {
  return et().memoizedState;
}
function xm(e, t, r) {
  var n = Yt(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, fh(e)) ph(t, r);
  else if (r = Gd(e, t, r, n), r !== null) {
    var i = Oe();
    ft(r, e, n, i), mh(r, t, n);
  }
}
function Em(e, t, r) {
  var n = Yt(e), i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (fh(e)) ph(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var o = t.lastRenderedState, a = s(o, r);
      if (i.hasEagerState = !0, i.eagerState = a, pt(a, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, wl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    r = Gd(e, t, i, n), r !== null && (i = Oe(), ft(r, e, n, i), mh(r, t, n));
  }
}
function fh(e) {
  var t = e.alternate;
  return e === ne || t !== null && t === ne;
}
function ph(e, t) {
  Mn = xs = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function mh(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, sl(e, r);
  }
}
var Es = { readContext: Ze, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, Tm = { readContext: Ze, useCallback: function(e, t) {
  return vt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ze, useEffect: Uu, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, rs(
    4194308,
    4,
    ah.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return rs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return rs(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = vt();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = vt();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = xm.bind(null, ne, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = vt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Du, useDebugValue: Ol, useDeferredValue: function(e) {
  return vt().memoizedState = e;
}, useTransition: function() {
  var e = Du(!1), t = e[0];
  return e = Sm.bind(null, e[1]), vt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = ne, i = vt();
  if (te) {
    if (r === void 0) throw Error(b(407));
    r = r();
  } else {
    if (r = t(), ge === null) throw Error(b(349));
    br & 30 || Zd(n, t, r);
  }
  i.memoizedState = r;
  var s = { value: r, getSnapshot: t };
  return i.queue = s, Uu(th.bind(
    null,
    n,
    s,
    e
  ), [e]), n.flags |= 2048, ai(9, eh.bind(null, n, s, r, t), void 0, null), r;
}, useId: function() {
  var e = vt(), t = ge.identifierPrefix;
  if (te) {
    var r = Et, n = xt;
    r = (n & ~(1 << 32 - ht(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = si++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = bm++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Cm = {
  readContext: Ze,
  useCallback: uh,
  useContext: Ze,
  useEffect: Cl,
  useImperativeHandle: lh,
  useInsertionEffect: sh,
  useLayoutEffect: oh,
  useMemo: ch,
  useReducer: Oo,
  useRef: ih,
  useState: function() {
    return Oo(oi);
  },
  useDebugValue: Ol,
  useDeferredValue: function(e) {
    var t = et();
    return dh(t, he.memoizedState, e);
  },
  useTransition: function() {
    var e = Oo(oi)[0], t = et().memoizedState;
    return [e, t];
  },
  useMutableSource: Yd,
  useSyncExternalStore: Xd,
  useId: hh,
  unstable_isNewReconciler: !1
}, Om = { readContext: Ze, useCallback: uh, useContext: Ze, useEffect: Cl, useImperativeHandle: lh, useInsertionEffect: sh, useLayoutEffect: oh, useMemo: ch, useReducer: Ro, useRef: ih, useState: function() {
  return Ro(oi);
}, useDebugValue: Ol, useDeferredValue: function(e) {
  var t = et();
  return he === null ? t.memoizedState = e : dh(t, he.memoizedState, e);
}, useTransition: function() {
  var e = Ro(oi)[0], t = et().memoizedState;
  return [e, t];
}, useMutableSource: Yd, useSyncExternalStore: Xd, useId: hh, unstable_isNewReconciler: !1 };
function at(e, t) {
  if (e && e.defaultProps) {
    t = ie({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function wa(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : ie({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Fs = { isMounted: function(e) {
  return (e = e._reactInternals) ? Tr(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = Oe(), i = Yt(e), s = Tt(n, i);
  s.payload = t, r != null && (s.callback = r), t = Jt(e, s, i), t !== null && (ft(t, e, i, n), es(t, e, i));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = Oe(), i = Yt(e), s = Tt(n, i);
  s.tag = 1, s.payload = t, r != null && (s.callback = r), t = Jt(e, s, i), t !== null && (ft(t, e, i, n), es(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = Oe(), n = Yt(e), i = Tt(r, n);
  i.tag = 2, t != null && (i.callback = t), t = Jt(e, i, n), t !== null && (ft(t, e, n, r), es(t, e, n));
} };
function zu(e, t, r, n, i, s, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Zn(r, n) || !Zn(i, s) : !0;
}
function gh(e, t, r) {
  var n = !1, i = er, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Ze(s) : (i = De(t) ? _r : Te.current, n = t.contextTypes, s = (n = n != null) ? ln(e, i) : er), t = new t(r, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Fs, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Mu(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Fs.enqueueReplaceState(t, t.state, null);
}
function _a(e, t, r, n) {
  var i = e.stateNode;
  i.props = r, i.state = e.memoizedState, i.refs = {}, _l(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = Ze(s) : (s = De(t) ? _r : Te.current, i.context = ln(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (wa(e, t, s, r), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Fs.enqueueReplaceState(i, i.state, null), bs(e, r, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var r = "", n = t;
    do
      r += rp(n), n = n.return;
    while (n);
    var i = r;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Po(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function ka(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var Rm = typeof WeakMap == "function" ? WeakMap : Map;
function vh(e, t, r) {
  r = Tt(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Cs || (Cs = !0, ja = n), ka(e, t);
  }, r;
}
function yh(e, t, r) {
  r = Tt(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      ka(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (r.callback = function() {
    ka(e, t), typeof n != "function" && (Qt === null ? Qt = /* @__PURE__ */ new Set([this]) : Qt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), r;
}
function Bu(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Rm();
    var i = /* @__PURE__ */ new Set();
    n.set(t, i);
  } else i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
  i.has(r) || (i.add(r), e = Wm.bind(null, e, t, r), t.then(e, e));
}
function Fu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wu(e, t, r, n, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Tt(-1, 1), t.tag = 2, Jt(r, t, 1))), r.lanes |= 1), e);
}
var Pm = jt.ReactCurrentOwner, $e = !1;
function Ce(e, t, r, n) {
  t.child = e === null ? qd(t, null, r, n) : cn(t, e.child, r, n);
}
function Vu(e, t, r, n, i) {
  r = r.render;
  var s = t.ref;
  return nn(t, i), n = El(e, t, r, n, s, i), r = Tl(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Pt(e, t, i)) : (te && r && fl(t), t.flags |= 1, Ce(e, t, n, i), t.child);
}
function Hu(e, t, r, n, i) {
  if (e === null) {
    var s = r.type;
    return typeof s == "function" && !Ll(s) && s.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = s, wh(e, t, s, n, i)) : (e = os(r.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Zn, r(o, n) && e.ref === t.ref) return Pt(e, t, i);
  }
  return t.flags |= 1, e = Xt(s, n), e.ref = t.ref, e.return = t, t.child = e;
}
function wh(e, t, r, n, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Zn(s, n) && e.ref === t.ref) if ($e = !1, t.pendingProps = n = s, (e.lanes & i) !== 0) e.flags & 131072 && ($e = !0);
    else return t.lanes = e.lanes, Pt(e, t, i);
  }
  return ba(e, t, r, n, i);
}
function _h(e, t, r) {
  var n = t.pendingProps, i = n.children, s = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Q(Yr, Be), Be |= r;
  else {
    if (!(r & 1073741824)) return e = s !== null ? s.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Q(Yr, Be), Be |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = s !== null ? s.baseLanes : r, Q(Yr, Be), Be |= n;
  }
  else s !== null ? (n = s.baseLanes | r, t.memoizedState = null) : n = r, Q(Yr, Be), Be |= n;
  return Ce(e, t, i, r), t.child;
}
function kh(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function ba(e, t, r, n, i) {
  var s = De(r) ? _r : Te.current;
  return s = ln(t, s), nn(t, i), r = El(e, t, r, n, s, i), n = Tl(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Pt(e, t, i)) : (te && n && fl(t), t.flags |= 1, Ce(e, t, r, i), t.child);
}
function Ku(e, t, r, n, i) {
  if (De(r)) {
    var s = !0;
    vs(t);
  } else s = !1;
  if (nn(t, i), t.stateNode === null) ns(e, t), gh(t, r, n), _a(t, r, n, i), n = !0;
  else if (e === null) {
    var o = t.stateNode, a = t.memoizedProps;
    o.props = a;
    var l = o.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Ze(u) : (u = De(r) ? _r : Te.current, u = ln(t, u));
    var c = r.getDerivedStateFromProps, p = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== u) && Mu(t, o, n, u), Ut = !1;
    var f = t.memoizedState;
    o.state = f, bs(t, n, o, i), l = t.memoizedState, a !== n || f !== l || Le.current || Ut ? (typeof c == "function" && (wa(t, r, c, n), l = t.memoizedState), (a = Ut || zu(t, r, a, n, f, l, u)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), o.props = n, o.state = l, o.context = u, n = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    o = t.stateNode, Jd(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : at(t.type, a), o.props = u, p = t.pendingProps, f = o.context, l = r.contextType, typeof l == "object" && l !== null ? l = Ze(l) : (l = De(r) ? _r : Te.current, l = ln(t, l));
    var d = r.getDerivedStateFromProps;
    (c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== p || f !== l) && Mu(t, o, n, l), Ut = !1, f = t.memoizedState, o.state = f, bs(t, n, o, i);
    var y = t.memoizedState;
    a !== p || f !== y || Le.current || Ut ? (typeof d == "function" && (wa(t, r, d, n), y = t.memoizedState), (u = Ut || zu(t, r, u, n, f, y, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, y, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, y, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = y), o.props = n, o.state = y, o.context = l, n = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return Sa(e, t, r, n, s, i);
}
function Sa(e, t, r, n, i, s) {
  kh(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return i && ju(t, r, !1), Pt(e, t, s);
  n = t.stateNode, Pm.current = t;
  var a = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && o ? (t.child = cn(t, e.child, null, s), t.child = cn(t, null, a, s)) : Ce(e, t, a, s), t.memoizedState = n.state, i && ju(t, r, !0), t.child;
}
function bh(e) {
  var t = e.stateNode;
  t.pendingContext ? Pu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pu(e, t.context, !1), kl(e, t.containerInfo);
}
function qu(e, t, r, n, i) {
  return un(), ml(i), t.flags |= 256, Ce(e, t, r, n), t.child;
}
var xa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ea(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sh(e, t, r) {
  var n = t.pendingProps, i = re.current, s = !1, o = (t.flags & 128) !== 0, a;
  if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Q(re, i & 1), e === null)
    return va(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = n.children, e = n.fallback, s ? (n = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(n & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Hs(o, n, 0, null), e = wr(e, n, r, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Ea(r), t.memoizedState = xa, e) : Rl(t, o));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return jm(e, t, o, n, a, i, r);
  if (s) {
    s = n.fallback, o = t.mode, i = e.child, a = i.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(o & 1) && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = Xt(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = Xt(a, s) : (s = wr(s, o, r, null), s.flags |= 2), s.return = t, n.return = t, n.sibling = s, t.child = n, n = s, s = t.child, o = e.child.memoizedState, o = o === null ? Ea(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~r, t.memoizedState = xa, n;
  }
  return s = e.child, e = s.sibling, n = Xt(s, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Rl(e, t) {
  return t = Hs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Di(e, t, r, n) {
  return n !== null && ml(n), cn(t, e.child, null, r), e = Rl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function jm(e, t, r, n, i, s, o) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Po(Error(b(422))), Di(e, t, o, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = n.fallback, i = t.mode, n = Hs({ mode: "visible", children: n.children }, i, 0, null), s = wr(s, i, o, null), s.flags |= 2, n.return = t, s.return = t, n.sibling = s, t.child = n, t.mode & 1 && cn(t, e.child, null, o), t.child.memoizedState = Ea(o), t.memoizedState = xa, s);
  if (!(t.mode & 1)) return Di(e, t, o, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var a = n.dgst;
    return n = a, s = Error(b(419)), n = Po(s, n, void 0), Di(e, t, o, n);
  }
  if (a = (o & e.childLanes) !== 0, $e || a) {
    if (n = ge, n !== null) {
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
      i = i & (n.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Rt(e, i), ft(n, e, i, -1));
    }
    return $l(), n = Po(Error(b(421))), Di(e, t, o, n);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vm.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, We = Gt(i.nextSibling), Ve = t, te = !0, dt = null, e !== null && (Je[Qe++] = xt, Je[Qe++] = Et, Je[Qe++] = kr, xt = e.id, Et = e.overflow, kr = t), t = Rl(t, n.children), t.flags |= 4096, t);
}
function Gu(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), ya(e.return, t, r);
}
function jo(e, t, r, n, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = r, s.tailMode = i);
}
function xh(e, t, r) {
  var n = t.pendingProps, i = n.revealOrder, s = n.tail;
  if (Ce(e, t, n.children, r), n = re.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Gu(e, r, t);
      else if (e.tag === 19) Gu(e, r, t);
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
  if (Q(re, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (r = t.child, i = null; r !== null; ) e = r.alternate, e !== null && Ss(e) === null && (i = r), r = r.sibling;
      r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), jo(t, !1, i, r, s);
      break;
    case "backwards":
      for (r = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Ss(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = r, r = i, i = e;
      }
      jo(t, !0, r, null, s);
      break;
    case "together":
      jo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ns(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Pt(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), Sr |= t.lanes, !(r & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (e = t.child, r = Xt(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Xt(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function Am(e, t, r) {
  switch (t.tag) {
    case 3:
      bh(t), un();
      break;
    case 5:
      Qd(t);
      break;
    case 1:
      De(t.type) && vs(t);
      break;
    case 4:
      kl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, i = t.memoizedProps.value;
      Q(_s, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (Q(re, re.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Sh(e, t, r) : (Q(re, re.current & 1), e = Pt(e, t, r), e !== null ? e.sibling : null);
      Q(re, re.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n) return xh(e, t, r);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Q(re, re.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, _h(e, t, r);
  }
  return Pt(e, t, r);
}
var Eh, Ta, Th, Ch;
Eh = function(e, t) {
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
Ta = function() {
};
Th = function(e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    e = t.stateNode, gr(_t.current);
    var s = null;
    switch (r) {
      case "input":
        i = Go(e, i), n = Go(e, n), s = [];
        break;
      case "select":
        i = ie({}, i, { value: void 0 }), n = ie({}, n, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = Yo(e, i), n = Yo(e, n), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ms);
    }
    Zo(r, n);
    var o;
    r = null;
    for (u in i) if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var a = i[u];
      for (o in a) a.hasOwnProperty(o) && (r || (r = {}), r[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Kn.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (a = i?.[u], n.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (r || (r = {}), r[o] = l[o]);
      } else r || (s || (s = []), s.push(
        u,
        r
      )), r = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Kn.hasOwnProperty(u) ? (l != null && u === "onScroll" && X("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    r && (s = s || []).push("style", r);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ch = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Cn(e, t) {
  if (!te) switch (e.tailMode) {
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
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t) for (var i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function Nm(e, t, r) {
  var n = t.pendingProps;
  switch (pl(t), t.tag) {
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
      return xe(t), null;
    case 1:
      return De(t.type) && gs(), xe(t), null;
    case 3:
      return n = t.stateNode, dn(), Z(Le), Z(Te), Sl(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && ($i(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (Ia(dt), dt = null))), Ta(e, t), xe(t), null;
    case 5:
      bl(t);
      var i = gr(ii.current);
      if (r = t.type, e !== null && t.stateNode != null) Th(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(b(166));
          return xe(t), null;
        }
        if (e = gr(_t.current), $i(t)) {
          n = t.stateNode, r = t.type;
          var s = t.memoizedProps;
          switch (n[yt] = t, n[ri] = s, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              X("cancel", n), X("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Nn.length; i++) X(Nn[i], n);
              break;
            case "source":
              X("error", n);
              break;
            case "img":
            case "image":
            case "link":
              X(
                "error",
                n
              ), X("load", n);
              break;
            case "details":
              X("toggle", n);
              break;
            case "input":
              nu(n, s), X("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!s.multiple }, X("invalid", n);
              break;
            case "textarea":
              su(n, s), X("invalid", n);
          }
          Zo(r, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var a = s[o];
            o === "children" ? typeof a == "string" ? n.textContent !== a && (s.suppressHydrationWarning !== !0 && Ii(n.textContent, a, e), i = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Ii(
              n.textContent,
              a,
              e
            ), i = ["children", "" + a]) : Kn.hasOwnProperty(o) && a != null && o === "onScroll" && X("scroll", n);
          }
          switch (r) {
            case "input":
              Ti(n), iu(n, s, !0);
              break;
            case "textarea":
              Ti(n), ou(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (n.onclick = ms);
          }
          n = i, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = td(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = o.createElement(r, { is: n.is }) : (e = o.createElement(r), r === "select" && (o = e, n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : e = o.createElementNS(e, r), e[yt] = t, e[ri] = n, Eh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ea(r, n), r) {
              case "dialog":
                X("cancel", e), X("close", e), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Nn.length; i++) X(Nn[i], e);
                i = n;
                break;
              case "source":
                X("error", e), i = n;
                break;
              case "img":
              case "image":
              case "link":
                X(
                  "error",
                  e
                ), X("load", e), i = n;
                break;
              case "details":
                X("toggle", e), i = n;
                break;
              case "input":
                nu(e, n), i = Go(e, n), X("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, i = ie({}, n, { value: void 0 }), X("invalid", e);
                break;
              case "textarea":
                su(e, n), i = Yo(e, n), X("invalid", e);
                break;
              default:
                i = n;
            }
            Zo(r, i), a = i;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? id(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && rd(e, l)) : s === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && qn(e, l) : typeof l == "number" && qn(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Kn.hasOwnProperty(s) ? l != null && s === "onScroll" && X("scroll", e) : l != null && Za(e, s, l, o));
            }
            switch (r) {
              case "input":
                Ti(e), iu(e, n, !1);
                break;
              case "textarea":
                Ti(e), ou(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Zt(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, s = n.value, s != null ? Zr(e, !!n.multiple, s, !1) : n.defaultValue != null && Zr(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ms);
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) Ch(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(b(166));
        if (r = gr(ii.current), gr(_t.current), $i(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[yt] = t, (s = n.nodeValue !== r) && (e = Ve, e !== null)) switch (e.tag) {
            case 3:
              Ii(n.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ii(n.nodeValue, r, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[yt] = t, t.stateNode = n;
      }
      return xe(t), null;
    case 13:
      if (Z(re), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (te && We !== null && t.mode & 1 && !(t.flags & 128)) Hd(), un(), t.flags |= 98560, s = !1;
        else if (s = $i(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(b(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(b(317));
            s[yt] = t;
          } else un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), s = !1;
        } else dt !== null && (Ia(dt), dt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? fe === 0 && (fe = 3) : $l())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return dn(), Ta(e, t), e === null && ei(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return yl(t.type._context), xe(t), null;
    case 17:
      return De(t.type) && gs(), xe(t), null;
    case 19:
      if (Z(re), s = t.memoizedState, s === null) return xe(t), null;
      if (n = (t.flags & 128) !== 0, o = s.rendering, o === null) if (n) Cn(s, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Ss(e), o !== null) {
            for (t.flags |= 128, Cn(s, !1), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) s = r, e = n, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return Q(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && le() > fn && (t.flags |= 128, n = !0, Cn(s, !1), t.lanes = 4194304);
      }
      else {
        if (!n) if (e = Ss(o), e !== null) {
          if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Cn(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !te) return xe(t), null;
        } else 2 * le() - s.renderingStartTime > fn && r !== 1073741824 && (t.flags |= 128, n = !0, Cn(s, !1), t.lanes = 4194304);
        s.isBackwards ? (o.sibling = t.child, t.child = o) : (r = s.last, r !== null ? r.sibling = o : t.child = o, s.last = o);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = le(), t.sibling = null, r = re.current, Q(re, n ? r & 1 | 2 : r & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return Il(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Be & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function Im(e, t) {
  switch (pl(t), t.tag) {
    case 1:
      return De(t.type) && gs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return dn(), Z(Le), Z(Te), Sl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return bl(t), null;
    case 13:
      if (Z(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(b(340));
        un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(re), null;
    case 4:
      return dn(), null;
    case 10:
      return yl(t.type._context), null;
    case 22:
    case 23:
      return Il(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ui = !1, Ee = !1, $m = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function Qr(e, t) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    oe(e, t, n);
  }
  else r.current = null;
}
function Ca(e, t, r) {
  try {
    r();
  } catch (n) {
    oe(e, t, n);
  }
}
var Ju = !1;
function Lm(e, t) {
  if (ca = hs, e = Ad(), hl(e)) {
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
        var o = 0, a = -1, l = -1, u = 0, c = 0, p = e, f = null;
        t: for (; ; ) {
          for (var d; p !== r || i !== 0 && p.nodeType !== 3 || (a = o + i), p !== s || n !== 0 && p.nodeType !== 3 || (l = o + n), p.nodeType === 3 && (o += p.nodeValue.length), (d = p.firstChild) !== null; )
            f = p, p = d;
          for (; ; ) {
            if (p === e) break t;
            if (f === r && ++u === i && (a = o), f === s && ++c === n && (l = o), (d = p.nextSibling) !== null) break;
            p = f, f = p.parentNode;
          }
          p = d;
        }
        r = a === -1 || l === -1 ? null : { start: a, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (da = { focusedElem: e, selectionRange: r }, hs = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, _ = y.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : at(t.type, v), _);
            g.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(b(163));
      }
    } catch (w) {
      oe(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return y = Ju, Ju = !1, y;
}
function Bn(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && Ca(t, r, s);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Ws(e, t) {
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
function Oa(e) {
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
function Oh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Oh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[ri], delete t[pa], delete t[ym], delete t[wm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Rh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ra(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = ms));
  else if (n !== 4 && (e = e.child, e !== null)) for (Ra(e, t, r), e = e.sibling; e !== null; ) Ra(e, t, r), e = e.sibling;
}
function Pa(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null)) for (Pa(e, t, r), e = e.sibling; e !== null; ) Pa(e, t, r), e = e.sibling;
}
var we = null, ut = !1;
function Lt(e, t, r) {
  for (r = r.child; r !== null; ) Ph(e, t, r), r = r.sibling;
}
function Ph(e, t, r) {
  if (wt && typeof wt.onCommitFiberUnmount == "function") try {
    wt.onCommitFiberUnmount($s, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      Ee || Qr(r, t);
    case 6:
      var n = we, i = ut;
      we = null, Lt(e, t, r), we = n, ut = i, we !== null && (ut ? (e = we, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : we.removeChild(r.stateNode));
      break;
    case 18:
      we !== null && (ut ? (e = we, r = r.stateNode, e.nodeType === 8 ? xo(e.parentNode, r) : e.nodeType === 1 && xo(e, r), Yn(e)) : xo(we, r.stateNode));
      break;
    case 4:
      n = we, i = ut, we = r.stateNode.containerInfo, ut = !0, Lt(e, t, r), we = n, ut = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ee && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && Ca(r, t, o), i = i.next;
        } while (i !== n);
      }
      Lt(e, t, r);
      break;
    case 1:
      if (!Ee && (Qr(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (a) {
        oe(r, t, a);
      }
      Lt(e, t, r);
      break;
    case 21:
      Lt(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (Ee = (n = Ee) || r.memoizedState !== null, Lt(e, t, r), Ee = n) : Lt(e, t, r);
      break;
    default:
      Lt(e, t, r);
  }
}
function Yu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new $m()), t.forEach(function(n) {
      var i = Hm.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function it(e, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var i = r[n];
    try {
      var s = e, o = t, a = o;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            we = a.stateNode, ut = !1;
            break e;
          case 3:
            we = a.stateNode.containerInfo, ut = !0;
            break e;
          case 4:
            we = a.stateNode.containerInfo, ut = !0;
            break e;
        }
        a = a.return;
      }
      if (we === null) throw Error(b(160));
      Ph(s, o, i), we = null, ut = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      oe(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) jh(t, e), t = t.sibling;
}
function jh(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(t, e), gt(e), n & 4) {
        try {
          Bn(3, e, e.return), Ws(3, e);
        } catch (v) {
          oe(e, e.return, v);
        }
        try {
          Bn(5, e, e.return);
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 1:
      it(t, e), gt(e), n & 512 && r !== null && Qr(r, r.return);
      break;
    case 5:
      if (it(t, e), gt(e), n & 512 && r !== null && Qr(r, r.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          qn(i, "");
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      if (n & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, o = r !== null ? r.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Zc(i, s), ea(a, o);
          var u = ea(a, s);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], p = l[o + 1];
            c === "style" ? id(i, p) : c === "dangerouslySetInnerHTML" ? rd(i, p) : c === "children" ? qn(i, p) : Za(i, c, p, u);
          }
          switch (a) {
            case "input":
              Jo(i, s);
              break;
            case "textarea":
              ed(i, s);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var d = s.value;
              d != null ? Zr(i, !!s.multiple, d, !1) : f !== !!s.multiple && (s.defaultValue != null ? Zr(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Zr(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[ri] = s;
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 6:
      if (it(t, e), gt(e), n & 4) {
        if (e.stateNode === null) throw Error(b(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (it(t, e), gt(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        Yn(t.containerInfo);
      } catch (v) {
        oe(e, e.return, v);
      }
      break;
    case 4:
      it(t, e), gt(e);
      break;
    case 13:
      it(t, e), gt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Al = le())), n & 4 && Yu(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (Ee = (u = Ee) || c, it(t, e), Ee = u) : it(t, e), gt(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (P = e, c = e.child; c !== null; ) {
          for (p = P = c; P !== null; ) {
            switch (f = P, d = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bn(4, f, f.return);
                break;
              case 1:
                Qr(f, f.return);
                var y = f.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  n = f, r = f.return;
                  try {
                    t = n, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    oe(n, r, v);
                  }
                }
                break;
              case 5:
                Qr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Zu(p);
                  continue;
                }
            }
            d !== null ? (d.return = f, P = d) : Zu(p);
          }
          c = c.sibling;
        }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                i = p.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = p.stateNode, l = p.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = nd("display", o));
              } catch (v) {
                oe(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (c === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (v) {
              oe(e, e.return, v);
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
      it(t, e), gt(e), n & 4 && Yu(e);
      break;
    case 21:
      break;
    default:
      it(
        t,
        e
      ), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Rh(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(b(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (qn(i, ""), n.flags &= -33);
          var s = Qu(e);
          Pa(e, s, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo, a = Qu(e);
          Ra(e, a, o);
          break;
        default:
          throw Error(b(161));
      }
    } catch (l) {
      oe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dm(e, t, r) {
  P = e, Ah(e);
}
function Ah(e, t, r) {
  for (var n = (e.mode & 1) !== 0; P !== null; ) {
    var i = P, s = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || Ui;
      if (!o) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || Ee;
        a = Ui;
        var u = Ee;
        if (Ui = o, (Ee = l) && !u) for (P = i; P !== null; ) o = P, l = o.child, o.tag === 22 && o.memoizedState !== null ? ec(i) : l !== null ? (l.return = o, P = l) : ec(i);
        for (; s !== null; ) P = s, Ah(s), s = s.sibling;
        P = i, Ui = a, Ee = u;
      }
      Xu(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, P = s) : Xu(e);
  }
}
function Xu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ee || Ws(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !Ee) if (r === null) n.componentDidMount();
            else {
              var i = t.elementType === t.type ? r.memoizedProps : at(t.type, r.memoizedProps);
              n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Lu(t, s, n);
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
              Lu(t, o, r);
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
                  p !== null && Yn(p);
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
            throw Error(b(163));
        }
        Ee || t.flags & 512 && Oa(t);
      } catch (f) {
        oe(t, t.return, f);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, P = r;
      break;
    }
    P = t.return;
  }
}
function Zu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, P = r;
      break;
    }
    P = t.return;
  }
}
function ec(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Ws(4, t);
          } catch (l) {
            oe(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              oe(t, i, l);
            }
          }
          var s = t.return;
          try {
            Oa(t);
          } catch (l) {
            oe(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Oa(t);
          } catch (l) {
            oe(t, o, l);
          }
      }
    } catch (l) {
      oe(t, t.return, l);
    }
    if (t === e) {
      P = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, P = a;
      break;
    }
    P = t.return;
  }
}
var Um = Math.ceil, Ts = jt.ReactCurrentDispatcher, Pl = jt.ReactCurrentOwner, Xe = jt.ReactCurrentBatchConfig, B = 0, ge = null, ce = null, _e = 0, Be = 0, Yr = rr(0), fe = 0, li = null, Sr = 0, Vs = 0, jl = 0, Fn = null, Ie = null, Al = 0, fn = 1 / 0, kt = null, Cs = !1, ja = null, Qt = null, zi = !1, Vt = null, Os = 0, Wn = 0, Aa = null, is = -1, ss = 0;
function Oe() {
  return B & 6 ? le() : is !== -1 ? is : is = le();
}
function Yt(e) {
  return e.mode & 1 ? B & 2 && _e !== 0 ? _e & -_e : km.transition !== null ? (ss === 0 && (ss = gd()), ss) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sd(e.type)), e) : 1;
}
function ft(e, t, r, n) {
  if (50 < Wn) throw Wn = 0, Aa = null, Error(b(185));
  vi(e, r, n), (!(B & 2) || e !== ge) && (e === ge && (!(B & 2) && (Vs |= r), fe === 4 && Bt(e, _e)), Ue(e, n), r === 1 && B === 0 && !(t.mode & 1) && (fn = le() + 500, Ms && nr()));
}
function Ue(e, t) {
  var r = e.callbackNode;
  kp(e, t);
  var n = ds(e, e === ge ? _e : 0);
  if (n === 0) r !== null && uu(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && uu(r), t === 1) e.tag === 0 ? _m(tc.bind(null, e)) : Fd(tc.bind(null, e)), gm(function() {
      !(B & 6) && nr();
    }), r = null;
    else {
      switch (vd(n)) {
        case 1:
          r = il;
          break;
        case 4:
          r = pd;
          break;
        case 16:
          r = cs;
          break;
        case 536870912:
          r = md;
          break;
        default:
          r = cs;
      }
      r = Mh(r, Nh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Nh(e, t) {
  if (is = -1, ss = 0, B & 6) throw Error(b(327));
  var r = e.callbackNode;
  if (sn() && e.callbackNode !== r) return null;
  var n = ds(e, e === ge ? _e : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Rs(e, n);
  else {
    t = n;
    var i = B;
    B |= 2;
    var s = $h();
    (ge !== e || _e !== t) && (kt = null, fn = le() + 500, yr(e, t));
    do
      try {
        Bm();
        break;
      } catch (a) {
        Ih(e, a);
      }
    while (!0);
    vl(), Ts.current = s, B = i, ce !== null ? t = 0 : (ge = null, _e = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (i = sa(e), i !== 0 && (n = i, t = Na(e, i))), t === 1) throw r = li, yr(e, 0), Bt(e, n), Ue(e, le()), r;
    if (t === 6) Bt(e, n);
    else {
      if (i = e.current.alternate, !(n & 30) && !zm(i) && (t = Rs(e, n), t === 2 && (s = sa(e), s !== 0 && (n = s, t = Na(e, s))), t === 1)) throw r = li, yr(e, 0), Bt(e, n), Ue(e, le()), r;
      switch (e.finishedWork = i, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          cr(e, Ie, kt);
          break;
        case 3:
          if (Bt(e, n), (n & 130023424) === n && (t = Al + 500 - le(), 10 < t)) {
            if (ds(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & n) !== n) {
              Oe(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = fa(cr.bind(null, e, Ie, kt), t);
            break;
          }
          cr(e, Ie, kt);
          break;
        case 4:
          if (Bt(e, n), (n & 4194240) === n) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - ht(n);
            s = 1 << o, o = t[o], o > i && (i = o), n &= ~s;
          }
          if (n = i, n = le() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Um(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = fa(cr.bind(null, e, Ie, kt), n);
            break;
          }
          cr(e, Ie, kt);
          break;
        case 5:
          cr(e, Ie, kt);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return Ue(e, le()), e.callbackNode === r ? Nh.bind(null, e) : null;
}
function Na(e, t) {
  var r = Fn;
  return e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256), e = Rs(e, t), e !== 2 && (t = Ie, Ie = r, t !== null && Ia(t)), e;
}
function Ia(e) {
  Ie === null ? Ie = e : Ie.push.apply(Ie, e);
}
function zm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var i = r[n], s = i.getSnapshot;
        i = i.value;
        try {
          if (!pt(s(), i)) return !1;
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
function Bt(e, t) {
  for (t &= ~jl, t &= ~Vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - ht(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function tc(e) {
  if (B & 6) throw Error(b(327));
  sn();
  var t = ds(e, 0);
  if (!(t & 1)) return Ue(e, le()), null;
  var r = Rs(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = sa(e);
    n !== 0 && (t = n, r = Na(e, n));
  }
  if (r === 1) throw r = li, yr(e, 0), Bt(e, t), Ue(e, le()), r;
  if (r === 6) throw Error(b(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, cr(e, Ie, kt), Ue(e, le()), null;
}
function Nl(e, t) {
  var r = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    B = r, B === 0 && (fn = le() + 500, Ms && nr());
  }
}
function xr(e) {
  Vt !== null && Vt.tag === 0 && !(B & 6) && sn();
  var t = B;
  B |= 1;
  var r = Xe.transition, n = K;
  try {
    if (Xe.transition = null, K = 1, e) return e();
  } finally {
    K = n, Xe.transition = r, B = t, !(B & 6) && nr();
  }
}
function Il() {
  Be = Yr.current, Z(Yr);
}
function yr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, mm(r)), ce !== null) for (r = ce.return; r !== null; ) {
    var n = r;
    switch (pl(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && gs();
        break;
      case 3:
        dn(), Z(Le), Z(Te), Sl();
        break;
      case 5:
        bl(n);
        break;
      case 4:
        dn();
        break;
      case 13:
        Z(re);
        break;
      case 19:
        Z(re);
        break;
      case 10:
        yl(n.type._context);
        break;
      case 22:
      case 23:
        Il();
    }
    r = r.return;
  }
  if (ge = e, ce = e = Xt(e.current, null), _e = Be = t, fe = 0, li = null, jl = Vs = Sr = 0, Ie = Fn = null, mr !== null) {
    for (t = 0; t < mr.length; t++) if (r = mr[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var i = n.next, s = r.pending;
      if (s !== null) {
        var o = s.next;
        s.next = i, n.next = o;
      }
      r.pending = n;
    }
    mr = null;
  }
  return e;
}
function Ih(e, t) {
  do {
    var r = ce;
    try {
      if (vl(), ts.current = Es, xs) {
        for (var n = ne.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        xs = !1;
      }
      if (br = 0, me = he = ne = null, Mn = !1, si = 0, Pl.current = null, r === null || r.return === null) {
        fe = 1, li = t, ce = null;
        break;
      }
      e: {
        var s = e, o = r.return, a = r, l = t;
        if (t = _e, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var d = Fu(o);
          if (d !== null) {
            d.flags &= -257, Wu(d, o, a, s, t), d.mode & 1 && Bu(s, u, t), t = d, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Bu(s, u, t), $l();
              break e;
            }
            l = Error(b(426));
          }
        } else if (te && a.mode & 1) {
          var _ = Fu(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Wu(_, o, a, s, t), ml(hn(l, a));
            break e;
          }
        }
        s = l = hn(l, a), fe !== 4 && (fe = 2), Fn === null ? Fn = [s] : Fn.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var g = vh(s, l, t);
              $u(s, g);
              break e;
            case 1:
              a = l;
              var h = s.type, m = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Qt === null || !Qt.has(m)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var w = yh(s, a, t);
                $u(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Dh(r);
    } catch (x) {
      t = x, ce === r && r !== null && (ce = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function $h() {
  var e = Ts.current;
  return Ts.current = Es, e === null ? Es : e;
}
function $l() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), ge === null || !(Sr & 268435455) && !(Vs & 268435455) || Bt(ge, _e);
}
function Rs(e, t) {
  var r = B;
  B |= 2;
  var n = $h();
  (ge !== e || _e !== t) && (kt = null, yr(e, t));
  do
    try {
      Mm();
      break;
    } catch (i) {
      Ih(e, i);
    }
  while (!0);
  if (vl(), B = r, Ts.current = n, ce !== null) throw Error(b(261));
  return ge = null, _e = 0, fe;
}
function Mm() {
  for (; ce !== null; ) Lh(ce);
}
function Bm() {
  for (; ce !== null && !hp(); ) Lh(ce);
}
function Lh(e) {
  var t = zh(e.alternate, e, Be);
  e.memoizedProps = e.pendingProps, t === null ? Dh(e) : ce = t, Pl.current = null;
}
function Dh(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = Im(r, t), r !== null) {
        r.flags &= 32767, ce = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ce = null;
        return;
      }
    } else if (r = Nm(r, t, Be), r !== null) {
      ce = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function cr(e, t, r) {
  var n = K, i = Xe.transition;
  try {
    Xe.transition = null, K = 1, Fm(e, t, r, n);
  } finally {
    Xe.transition = i, K = n;
  }
  return null;
}
function Fm(e, t, r, n) {
  do
    sn();
  while (Vt !== null);
  if (B & 6) throw Error(b(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(b(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = r.lanes | r.childLanes;
  if (bp(e, s), e === ge && (ce = ge = null, _e = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || zi || (zi = !0, Mh(cs, function() {
    return sn(), null;
  })), s = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || s) {
    s = Xe.transition, Xe.transition = null;
    var o = K;
    K = 1;
    var a = B;
    B |= 4, Pl.current = null, Lm(e, r), jh(r, e), lm(da), hs = !!ca, da = ca = null, e.current = r, Dm(r), fp(), B = a, K = o, Xe.transition = s;
  } else e.current = r;
  if (zi && (zi = !1, Vt = e, Os = i), s = e.pendingLanes, s === 0 && (Qt = null), gp(r.stateNode), Ue(e, le()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (Cs) throw Cs = !1, e = ja, ja = null, e;
  return Os & 1 && e.tag !== 0 && sn(), s = e.pendingLanes, s & 1 ? e === Aa ? Wn++ : (Wn = 0, Aa = e) : Wn = 0, nr(), null;
}
function sn() {
  if (Vt !== null) {
    var e = vd(Os), t = Xe.transition, r = K;
    try {
      if (Xe.transition = null, K = 16 > e ? 16 : e, Vt === null) var n = !1;
      else {
        if (e = Vt, Vt = null, Os = 0, B & 6) throw Error(b(331));
        var i = B;
        for (B |= 4, P = e.current; P !== null; ) {
          var s = P, o = s.child;
          if (P.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (P = u; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, c, s);
                  }
                  var p = c.child;
                  if (p !== null) p.return = c, P = p;
                  else for (; P !== null; ) {
                    c = P;
                    var f = c.sibling, d = c.return;
                    if (Oh(c), c === u) {
                      P = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = d, P = f;
                      break;
                    }
                    P = d;
                  }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var _ = v.sibling;
                    v.sibling = null, v = _;
                  } while (v !== null);
                }
              }
              P = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) o.return = s, P = o;
          else e: for (; P !== null; ) {
            if (s = P, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Bn(9, s, s.return);
            }
            var g = s.sibling;
            if (g !== null) {
              g.return = s.return, P = g;
              break e;
            }
            P = s.return;
          }
        }
        var h = e.current;
        for (P = h; P !== null; ) {
          o = P;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, P = m;
          else e: for (o = h; P !== null; ) {
            if (a = P, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Ws(9, a);
              }
            } catch (x) {
              oe(a, a.return, x);
            }
            if (a === o) {
              P = null;
              break e;
            }
            var w = a.sibling;
            if (w !== null) {
              w.return = a.return, P = w;
              break e;
            }
            P = a.return;
          }
        }
        if (B = i, nr(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
          wt.onPostCommitFiberRoot($s, e);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      K = r, Xe.transition = t;
    }
  }
  return !1;
}
function rc(e, t, r) {
  t = hn(r, t), t = vh(e, t, 1), e = Jt(e, t, 1), t = Oe(), e !== null && (vi(e, 1, t), Ue(e, t));
}
function oe(e, t, r) {
  if (e.tag === 3) rc(e, e, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      rc(t, e, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Qt === null || !Qt.has(n))) {
        e = hn(r, e), e = yh(t, e, 1), t = Jt(t, e, 1), e = Oe(), t !== null && (vi(t, 1, e), Ue(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Wm(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & r, ge === e && (_e & r) === r && (fe === 4 || fe === 3 && (_e & 130023424) === _e && 500 > le() - Al ? yr(e, 0) : jl |= r), Ue(e, t);
}
function Uh(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ri, Ri <<= 1, !(Ri & 130023424) && (Ri = 4194304)) : t = 1);
  var r = Oe();
  e = Rt(e, t), e !== null && (vi(e, t, r), Ue(e, r));
}
function Vm(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), Uh(e, r);
}
function Hm(e, t) {
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
      throw Error(b(314));
  }
  n !== null && n.delete(t), Uh(e, r);
}
var zh;
zh = function(e, t, r) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) $e = !0;
  else {
    if (!(e.lanes & r) && !(t.flags & 128)) return $e = !1, Am(e, t, r);
    $e = !!(e.flags & 131072);
  }
  else $e = !1, te && t.flags & 1048576 && Wd(t, ws, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      ns(e, t), e = t.pendingProps;
      var i = ln(t, Te.current);
      nn(t, r), i = El(null, t, n, e, i, r);
      var s = Tl();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(n) ? (s = !0, vs(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, _l(t), i.updater = Fs, t.stateNode = i, i._reactInternals = t, _a(t, n, e, r), t = Sa(null, t, n, !0, s, r)) : (t.tag = 0, te && s && fl(t), Ce(null, t, i, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (ns(e, t), e = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = qm(n), e = at(n, e), i) {
          case 0:
            t = ba(null, t, n, e, r);
            break e;
          case 1:
            t = Ku(null, t, n, e, r);
            break e;
          case 11:
            t = Vu(null, t, n, e, r);
            break e;
          case 14:
            t = Hu(null, t, n, at(n.type, e), r);
            break e;
        }
        throw Error(b(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : at(n, i), ba(e, t, n, i, r);
    case 1:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : at(n, i), Ku(e, t, n, i, r);
    case 3:
      e: {
        if (bh(t), e === null) throw Error(b(387));
        n = t.pendingProps, s = t.memoizedState, i = s.element, Jd(e, t), bs(t, n, null, r);
        var o = t.memoizedState;
        if (n = o.element, s.isDehydrated) if (s = { element: n, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = hn(Error(b(423)), t), t = qu(e, t, n, r, i);
          break e;
        } else if (n !== i) {
          i = hn(Error(b(424)), t), t = qu(e, t, n, r, i);
          break e;
        } else for (We = Gt(t.stateNode.containerInfo.firstChild), Ve = t, te = !0, dt = null, r = qd(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (un(), n === i) {
            t = Pt(e, t, r);
            break e;
          }
          Ce(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Qd(t), e === null && va(t), n = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, ha(n, i) ? o = null : s !== null && ha(n, s) && (t.flags |= 32), kh(e, t), Ce(e, t, o, r), t.child;
    case 6:
      return e === null && va(t), null;
    case 13:
      return Sh(e, t, r);
    case 4:
      return kl(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = cn(t, null, n, r) : Ce(e, t, n, r), t.child;
    case 11:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : at(n, i), Vu(e, t, n, i, r);
    case 7:
      return Ce(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, Q(_s, n._currentValue), n._currentValue = o, s !== null) if (pt(s.value, o)) {
          if (s.children === i.children && !Le.current) {
            t = Pt(e, t, r);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            o = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === n) {
                if (s.tag === 1) {
                  l = Tt(-1, r & -r), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= r, l = s.alternate, l !== null && (l.lanes |= r), ya(
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
            if (o = s.return, o === null) throw Error(b(341));
            o.lanes |= r, a = o.alternate, a !== null && (a.lanes |= r), ya(o, r, t), o = s.sibling;
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
        Ce(e, t, i.children, r), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, n = t.pendingProps.children, nn(t, r), i = Ze(i), n = n(i), t.flags |= 1, Ce(e, t, n, r), t.child;
    case 14:
      return n = t.type, i = at(n, t.pendingProps), i = at(n.type, i), Hu(e, t, n, i, r);
    case 15:
      return wh(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : at(n, i), ns(e, t), t.tag = 1, De(n) ? (e = !0, vs(t)) : e = !1, nn(t, r), gh(t, n, i), _a(t, n, i, r), Sa(null, t, n, !0, e, r);
    case 19:
      return xh(e, t, r);
    case 22:
      return _h(e, t, r);
  }
  throw Error(b(156, t.tag));
};
function Mh(e, t) {
  return fd(e, t);
}
function Km(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, r, n) {
  return new Km(e, t, r, n);
}
function Ll(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function qm(e) {
  if (typeof e == "function") return Ll(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === tl) return 11;
    if (e === rl) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var r = e.alternate;
  return r === null ? (r = Ye(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function os(e, t, r, n, i, s) {
  var o = 2;
  if (n = e, typeof e == "function") Ll(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Br:
      return wr(r.children, i, s, t);
    case el:
      o = 8, i |= 8;
      break;
    case Vo:
      return e = Ye(12, r, t, i | 2), e.elementType = Vo, e.lanes = s, e;
    case Ho:
      return e = Ye(13, r, t, i), e.elementType = Ho, e.lanes = s, e;
    case Ko:
      return e = Ye(19, r, t, i), e.elementType = Ko, e.lanes = s, e;
    case Qc:
      return Hs(r, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Gc:
          o = 10;
          break e;
        case Jc:
          o = 9;
          break e;
        case tl:
          o = 11;
          break e;
        case rl:
          o = 14;
          break e;
        case Dt:
          o = 16, n = null;
          break e;
      }
      throw Error(b(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(o, r, t, i), t.elementType = e, t.type = n, t.lanes = s, t;
}
function wr(e, t, r, n) {
  return e = Ye(7, e, n, t), e.lanes = r, e;
}
function Hs(e, t, r, n) {
  return e = Ye(22, e, n, t), e.elementType = Qc, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Ao(e, t, r) {
  return e = Ye(6, e, null, t), e.lanes = r, e;
}
function No(e, t, r) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Gm(e, t, r, n, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fo(0), this.expirationTimes = fo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fo(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Dl(e, t, r, n, i, s, o, a, l) {
  return e = new Gm(e, t, r, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Ye(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _l(s), e;
}
function Jm(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mr, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Bh(e) {
  if (!e) return er;
  e = e._reactInternals;
  e: {
    if (Tr(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (De(r)) return Bd(e, r, t);
  }
  return t;
}
function Fh(e, t, r, n, i, s, o, a, l) {
  return e = Dl(r, n, !0, e, i, s, o, a, l), e.context = Bh(null), r = e.current, n = Oe(), i = Yt(r), s = Tt(n, i), s.callback = t ?? null, Jt(r, s, i), e.current.lanes = i, vi(e, i, n), Ue(e, n), e;
}
function Ks(e, t, r, n) {
  var i = t.current, s = Oe(), o = Yt(i);
  return r = Bh(r), t.context === null ? t.context = r : t.pendingContext = r, t = Tt(s, o), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Jt(i, t, o), e !== null && (ft(e, i, o, s), es(e, i, o)), o;
}
function Ps(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function nc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Ul(e, t) {
  nc(e, t), (e = e.alternate) && nc(e, t);
}
function Qm() {
  return null;
}
var Wh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function zl(e) {
  this._internalRoot = e;
}
qs.prototype.render = zl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  Ks(e, t, null, null);
};
qs.prototype.unmount = zl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xr(function() {
      Ks(null, e, null, null);
    }), t[Ot] = null;
  }
};
function qs(e) {
  this._internalRoot = e;
}
qs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = _d();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Mt.length && t !== 0 && t < Mt[r].priority; r++) ;
    Mt.splice(r, 0, e), r === 0 && bd(e);
  }
};
function Ml(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Gs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ic() {
}
function Ym(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var s = n;
      n = function() {
        var u = Ps(o);
        s.call(u);
      };
    }
    var o = Fh(t, n, e, 0, null, !1, !1, "", ic);
    return e._reactRootContainer = o, e[Ot] = o.current, ei(e.nodeType === 8 ? e.parentNode : e), xr(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof n == "function") {
    var a = n;
    n = function() {
      var u = Ps(l);
      a.call(u);
    };
  }
  var l = Dl(e, 0, !1, null, null, !1, !1, "", ic);
  return e._reactRootContainer = l, e[Ot] = l.current, ei(e.nodeType === 8 ? e.parentNode : e), xr(function() {
    Ks(t, l, r, n);
  }), l;
}
function Js(e, t, r, n, i) {
  var s = r._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = Ps(o);
        a.call(l);
      };
    }
    Ks(t, o, e, i);
  } else o = Ym(r, t, e, i, n);
  return Ps(o);
}
yd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = An(t.pendingLanes);
        r !== 0 && (sl(t, r | 1), Ue(t, le()), !(B & 6) && (fn = le() + 500, nr()));
      }
      break;
    case 13:
      xr(function() {
        var n = Rt(e, 1);
        if (n !== null) {
          var i = Oe();
          ft(n, e, 1, i);
        }
      }), Ul(e, 1);
  }
};
ol = function(e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var r = Oe();
      ft(t, e, 134217728, r);
    }
    Ul(e, 134217728);
  }
};
wd = function(e) {
  if (e.tag === 13) {
    var t = Yt(e), r = Rt(e, t);
    if (r !== null) {
      var n = Oe();
      ft(r, e, t, n);
    }
    Ul(e, t);
  }
};
_d = function() {
  return K;
};
kd = function(e, t) {
  var r = K;
  try {
    return K = e, t();
  } finally {
    K = r;
  }
};
ra = function(e, t, r) {
  switch (t) {
    case "input":
      if (Jo(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = zs(n);
            if (!i) throw Error(b(90));
            Xc(n), Jo(n, i);
          }
        }
      }
      break;
    case "textarea":
      ed(e, r);
      break;
    case "select":
      t = r.value, t != null && Zr(e, !!r.multiple, t, !1);
  }
};
ad = Nl;
ld = xr;
var Xm = { usingClientEntryPoint: !1, Events: [wi, Hr, zs, sd, od, Nl] }, On = { findFiberByHostInstance: pr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Zm = { bundleType: On.bundleType, version: On.version, rendererPackageName: On.rendererPackageName, rendererConfig: On.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: jt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = dd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: On.findFiberByHostInstance || Qm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mi.isDisabled && Mi.supportsFiber) try {
    $s = Mi.inject(Zm), wt = Mi;
  } catch {
  }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xm;
Ke.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ml(t)) throw Error(b(200));
  return Jm(e, t, null, r);
};
Ke.createRoot = function(e, t) {
  if (!Ml(e)) throw Error(b(299));
  var r = !1, n = "", i = Wh;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Dl(e, 1, !1, null, null, r, !1, n, i), e[Ot] = t.current, ei(e.nodeType === 8 ? e.parentNode : e), new zl(t);
};
Ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(b(188)) : (e = Object.keys(e).join(","), Error(b(268, e)));
  return e = dd(t), e = e === null ? null : e.stateNode, e;
};
Ke.flushSync = function(e) {
  return xr(e);
};
Ke.hydrate = function(e, t, r) {
  if (!Gs(t)) throw Error(b(200));
  return Js(null, e, t, !0, r);
};
Ke.hydrateRoot = function(e, t, r) {
  if (!Ml(e)) throw Error(b(405));
  var n = r != null && r.hydratedSources || null, i = !1, s = "", o = Wh;
  if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = Fh(t, null, e, 1, r ?? null, i, !1, s, o), e[Ot] = t.current, ei(e), n) for (e = 0; e < n.length; e++) r = n[e], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(
    r,
    i
  );
  return new qs(t);
};
Ke.render = function(e, t, r) {
  if (!Gs(t)) throw Error(b(200));
  return Js(null, e, t, !1, r);
};
Ke.unmountComponentAtNode = function(e) {
  if (!Gs(e)) throw Error(b(40));
  return e._reactRootContainer ? (xr(function() {
    Js(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ot] = null;
    });
  }), !0) : !1;
};
Ke.unstable_batchedUpdates = Nl;
Ke.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Gs(r)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return Js(e, t, r, !1, n);
};
Ke.version = "18.3.1-next-f1338f8080-20240426";
function Vh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vh);
    } catch (e) {
      console.error(e);
    }
}
Vh(), Vc.exports = Ke;
var Hh = Vc.exports;
const eg = /* @__PURE__ */ Ic(Hh);
var tg = (e) => {
  switch (e) {
    case "success":
      return ig;
    case "info":
      return og;
    case "warning":
      return sg;
    case "error":
      return ag;
    default:
      return null;
  }
}, rg = Array(12).fill(0), ng = ({ visible: e, className: t }) => O.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, O.createElement("div", { className: "sonner-spinner" }, rg.map((r, n) => O.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), ig = O.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, O.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), sg = O.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, O.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), og = O.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, O.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), ag = O.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, O.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), lg = O.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), ug = () => {
  let [e, t] = O.useState(document.hidden);
  return O.useEffect(() => {
    let r = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, $a = 1, cg = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: r, ...n } = e, i = typeof e?.id == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : $a++, s = this.toasts.find((a) => a.id === i), o = e.dismissible === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), s ? this.toasts = this.toasts.map((a) => a.id === i ? (this.publish({ ...a, ...e, id: i, title: r }), { ...a, ...e, id: i, dismissible: o, title: r }) : a) : this.addToast({ title: r, ...n, dismissible: o, id: i }), i;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((r) => r({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let r;
      t.loading !== void 0 && (r = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let n = e instanceof Promise ? e : e(), i = r !== void 0, s, o = n.then(async (l) => {
        if (s = ["resolve", l], O.isValidElement(l)) i = !1, this.create({ id: r, type: "default", message: l });
        else if (hg(l) && !l.ok) {
          i = !1;
          let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
          this.create({ id: r, type: "error", message: u, description: c });
        } else if (t.success !== void 0) {
          i = !1;
          let u = typeof t.success == "function" ? await t.success(l) : t.success, c = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: r, type: "success", message: u, description: c });
        }
      }).catch(async (l) => {
        if (s = ["reject", l], t.error !== void 0) {
          i = !1;
          let u = typeof t.error == "function" ? await t.error(l) : t.error, c = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: r, type: "error", message: u, description: c });
        }
      }).finally(() => {
        var l;
        i && (this.dismiss(r), r = void 0), (l = t.finally) == null || l.call(t);
      }), a = () => new Promise((l, u) => o.then(() => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
      return typeof r != "string" && typeof r != "number" ? { unwrap: a } : Object.assign(r, { unwrap: a });
    }, this.custom = (e, t) => {
      let r = t?.id || $a++;
      return this.create({ jsx: e(r), id: r, ...t }), r;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, Ne = new cg(), dg = (e, t) => {
  let r = t?.id || $a++;
  return Ne.addToast({ title: e, ...t, id: r }), r;
}, hg = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", fg = dg, pg = () => Ne.toasts, mg = () => Ne.getActiveToasts(), Io = Object.assign(fg, { success: Ne.success, info: Ne.info, warning: Ne.warning, error: Ne.error, custom: Ne.custom, message: Ne.message, promise: Ne.promise, dismiss: Ne.dismiss, loading: Ne.loading }, { getHistory: pg, getToasts: mg });
function gg(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
gg(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Bi(e) {
  return e.label !== void 0;
}
var vg = 3, yg = "32px", wg = "16px", sc = 4e3, _g = 356, kg = 14, bg = 20, Sg = 200;
function st(...e) {
  return e.filter(Boolean).join(" ");
}
function xg(e) {
  let [t, r] = e.split("-"), n = [];
  return t && n.push(t), r && n.push(r), n;
}
var Eg = (e) => {
  var t, r, n, i, s, o, a, l, u, c, p;
  let { invert: f, toast: d, unstyled: y, interacting: v, setHeights: _, visibleToasts: g, heights: h, index: m, toasts: w, expanded: x, removeToast: k, defaultRichColors: E, closeButton: R, style: U, cancelButtonStyle: j, actionButtonStyle: H, className: F = "", descriptionClassName: ae = "", duration: ze, position: ir, gap: je, loadingIcon: be, expandByDefault: T, classNames: C, icons: N, closeButtonAriaLabel: Y = "Close toast", pauseWhenPageIsHidden: L } = e, [V, W] = O.useState(null), [pe, Ae] = O.useState(null), [G, ro] = O.useState(!1), [yn, bi] = O.useState(!1), [wn, no] = O.useState(!1), [Wl, _f] = O.useState(!1), [kf, Vl] = O.useState(!1), [bf, io] = O.useState(0), [Sf, Hl] = O.useState(0), _n = O.useRef(d.duration || ze || sc), Kl = O.useRef(null), sr = O.useRef(null), xf = m === 0, Ef = m + 1 <= g, Ge = d.type, Cr = d.dismissible !== !1, Tf = d.className || "", Cf = d.descriptionClassName || "", Si = O.useMemo(() => h.findIndex((D) => D.toastId === d.id) || 0, [h, d.id]), Of = O.useMemo(() => {
    var D;
    return (D = d.closeButton) != null ? D : R;
  }, [d.closeButton, R]), ql = O.useMemo(() => d.duration || ze || sc, [d.duration, ze]), so = O.useRef(0), Or = O.useRef(0), Gl = O.useRef(0), Rr = O.useRef(null), [Rf, Pf] = ir.split("-"), Jl = O.useMemo(() => h.reduce((D, q, ee) => ee >= Si ? D : D + q.height, 0), [h, Si]), Ql = ug(), jf = d.invert || f, oo = Ge === "loading";
  Or.current = O.useMemo(() => Si * je + Jl, [Si, Jl]), O.useEffect(() => {
    _n.current = ql;
  }, [ql]), O.useEffect(() => {
    ro(!0);
  }, []), O.useEffect(() => {
    let D = sr.current;
    if (D) {
      let q = D.getBoundingClientRect().height;
      return Hl(q), _((ee) => [{ toastId: d.id, height: q, position: d.position }, ...ee]), () => _((ee) => ee.filter((tt) => tt.toastId !== d.id));
    }
  }, [_, d.id]), O.useLayoutEffect(() => {
    if (!G) return;
    let D = sr.current, q = D.style.height;
    D.style.height = "auto";
    let ee = D.getBoundingClientRect().height;
    D.style.height = q, Hl(ee), _((tt) => tt.find((rt) => rt.toastId === d.id) ? tt.map((rt) => rt.toastId === d.id ? { ...rt, height: ee } : rt) : [{ toastId: d.id, height: ee, position: d.position }, ...tt]);
  }, [G, d.title, d.description, _, d.id]);
  let Nt = O.useCallback(() => {
    bi(!0), io(Or.current), _((D) => D.filter((q) => q.toastId !== d.id)), setTimeout(() => {
      k(d);
    }, Sg);
  }, [d, k, _, Or]);
  O.useEffect(() => {
    if (d.promise && Ge === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let D;
    return x || v || L && Ql ? (() => {
      if (Gl.current < so.current) {
        let q = (/* @__PURE__ */ new Date()).getTime() - so.current;
        _n.current = _n.current - q;
      }
      Gl.current = (/* @__PURE__ */ new Date()).getTime();
    })() : _n.current !== 1 / 0 && (so.current = (/* @__PURE__ */ new Date()).getTime(), D = setTimeout(() => {
      var q;
      (q = d.onAutoClose) == null || q.call(d, d), Nt();
    }, _n.current)), () => clearTimeout(D);
  }, [x, v, d, Ge, L, Ql, Nt]), O.useEffect(() => {
    d.delete && Nt();
  }, [Nt, d.delete]);
  function Af() {
    var D, q, ee;
    return N != null && N.loading ? O.createElement("div", { className: st(C?.loader, (D = d?.classNames) == null ? void 0 : D.loader, "sonner-loader"), "data-visible": Ge === "loading" }, N.loading) : be ? O.createElement("div", { className: st(C?.loader, (q = d?.classNames) == null ? void 0 : q.loader, "sonner-loader"), "data-visible": Ge === "loading" }, be) : O.createElement(ng, { className: st(C?.loader, (ee = d?.classNames) == null ? void 0 : ee.loader), visible: Ge === "loading" });
  }
  return O.createElement("li", { tabIndex: 0, ref: sr, className: st(F, Tf, C?.toast, (t = d?.classNames) == null ? void 0 : t.toast, C?.default, C?.[Ge], (r = d?.classNames) == null ? void 0 : r[Ge]), "data-sonner-toast": "", "data-rich-colors": (n = d.richColors) != null ? n : E, "data-styled": !(d.jsx || d.unstyled || y), "data-mounted": G, "data-promise": !!d.promise, "data-swiped": kf, "data-removed": yn, "data-visible": Ef, "data-y-position": Rf, "data-x-position": Pf, "data-index": m, "data-front": xf, "data-swiping": wn, "data-dismissible": Cr, "data-type": Ge, "data-invert": jf, "data-swipe-out": Wl, "data-swipe-direction": pe, "data-expanded": !!(x || T && G), style: { "--index": m, "--toasts-before": m, "--z-index": w.length - m, "--offset": `${yn ? bf : Or.current}px`, "--initial-height": T ? "auto" : `${Sf}px`, ...U, ...d.style }, onDragEnd: () => {
    no(!1), W(null), Rr.current = null;
  }, onPointerDown: (D) => {
    oo || !Cr || (Kl.current = /* @__PURE__ */ new Date(), io(Or.current), D.target.setPointerCapture(D.pointerId), D.target.tagName !== "BUTTON" && (no(!0), Rr.current = { x: D.clientX, y: D.clientY }));
  }, onPointerUp: () => {
    var D, q, ee, tt;
    if (Wl || !Cr) return;
    Rr.current = null;
    let rt = Number(((D = sr.current) == null ? void 0 : D.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), It = Number(((q = sr.current) == null ? void 0 : q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), or = (/* @__PURE__ */ new Date()).getTime() - ((ee = Kl.current) == null ? void 0 : ee.getTime()), nt = V === "x" ? rt : It, $t = Math.abs(nt) / or;
    if (Math.abs(nt) >= bg || $t > 0.11) {
      io(Or.current), (tt = d.onDismiss) == null || tt.call(d, d), Ae(V === "x" ? rt > 0 ? "right" : "left" : It > 0 ? "down" : "up"), Nt(), _f(!0), Vl(!1);
      return;
    }
    no(!1), W(null);
  }, onPointerMove: (D) => {
    var q, ee, tt, rt;
    if (!Rr.current || !Cr || ((q = window.getSelection()) == null ? void 0 : q.toString().length) > 0) return;
    let It = D.clientY - Rr.current.y, or = D.clientX - Rr.current.x, nt = (ee = e.swipeDirections) != null ? ee : xg(ir);
    !V && (Math.abs(or) > 1 || Math.abs(It) > 1) && W(Math.abs(or) > Math.abs(It) ? "x" : "y");
    let $t = { x: 0, y: 0 };
    V === "y" ? (nt.includes("top") || nt.includes("bottom")) && (nt.includes("top") && It < 0 || nt.includes("bottom") && It > 0) && ($t.y = It) : V === "x" && (nt.includes("left") || nt.includes("right")) && (nt.includes("left") && or < 0 || nt.includes("right") && or > 0) && ($t.x = or), (Math.abs($t.x) > 0 || Math.abs($t.y) > 0) && Vl(!0), (tt = sr.current) == null || tt.style.setProperty("--swipe-amount-x", `${$t.x}px`), (rt = sr.current) == null || rt.style.setProperty("--swipe-amount-y", `${$t.y}px`);
  } }, Of && !d.jsx ? O.createElement("button", { "aria-label": Y, "data-disabled": oo, "data-close-button": !0, onClick: oo || !Cr ? () => {
  } : () => {
    var D;
    Nt(), (D = d.onDismiss) == null || D.call(d, d);
  }, className: st(C?.closeButton, (i = d?.classNames) == null ? void 0 : i.closeButton) }, (s = N?.close) != null ? s : lg) : null, d.jsx || M.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : O.createElement(O.Fragment, null, Ge || d.icon || d.promise ? O.createElement("div", { "data-icon": "", className: st(C?.icon, (o = d?.classNames) == null ? void 0 : o.icon) }, d.promise || d.type === "loading" && !d.icon ? d.icon || Af() : null, d.type !== "loading" ? d.icon || N?.[Ge] || tg(Ge) : null) : null, O.createElement("div", { "data-content": "", className: st(C?.content, (a = d?.classNames) == null ? void 0 : a.content) }, O.createElement("div", { "data-title": "", className: st(C?.title, (l = d?.classNames) == null ? void 0 : l.title) }, typeof d.title == "function" ? d.title() : d.title), d.description ? O.createElement("div", { "data-description": "", className: st(ae, Cf, C?.description, (u = d?.classNames) == null ? void 0 : u.description) }, typeof d.description == "function" ? d.description() : d.description) : null), M.isValidElement(d.cancel) ? d.cancel : d.cancel && Bi(d.cancel) ? O.createElement("button", { "data-button": !0, "data-cancel": !0, style: d.cancelButtonStyle || j, onClick: (D) => {
    var q, ee;
    Bi(d.cancel) && Cr && ((ee = (q = d.cancel).onClick) == null || ee.call(q, D), Nt());
  }, className: st(C?.cancelButton, (c = d?.classNames) == null ? void 0 : c.cancelButton) }, d.cancel.label) : null, M.isValidElement(d.action) ? d.action : d.action && Bi(d.action) ? O.createElement("button", { "data-button": !0, "data-action": !0, style: d.actionButtonStyle || H, onClick: (D) => {
    var q, ee;
    Bi(d.action) && ((ee = (q = d.action).onClick) == null || ee.call(q, D), !D.defaultPrevented && Nt());
  }, className: st(C?.actionButton, (p = d?.classNames) == null ? void 0 : p.actionButton) }, d.action.label) : null));
};
function oc() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Tg(e, t) {
  let r = {};
  return [e, t].forEach((n, i) => {
    let s = i === 1, o = s ? "--mobile-offset" : "--offset", a = s ? wg : yg;
    function l(u) {
      ["top", "right", "bottom", "left"].forEach((c) => {
        r[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
      });
    }
    typeof n == "number" || typeof n == "string" ? l(n) : typeof n == "object" ? ["top", "right", "bottom", "left"].forEach((u) => {
      n[u] === void 0 ? r[`${o}-${u}`] = a : r[`${o}-${u}`] = typeof n[u] == "number" ? `${n[u]}px` : n[u];
    }) : l(a);
  }), r;
}
var Cg = M.forwardRef(function(e, t) {
  let { invert: r, position: n = "bottom-right", hotkey: i = ["altKey", "KeyT"], expand: s, closeButton: o, className: a, offset: l, mobileOffset: u, theme: c = "light", richColors: p, duration: f, style: d, visibleToasts: y = vg, toastOptions: v, dir: _ = oc(), gap: g = kg, loadingIcon: h, icons: m, containerAriaLabel: w = "Notifications", pauseWhenPageIsHidden: x } = e, [k, E] = O.useState([]), R = O.useMemo(() => Array.from(new Set([n].concat(k.filter((L) => L.position).map((L) => L.position)))), [k, n]), [U, j] = O.useState([]), [H, F] = O.useState(!1), [ae, ze] = O.useState(!1), [ir, je] = O.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), be = O.useRef(null), T = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), C = O.useRef(null), N = O.useRef(!1), Y = O.useCallback((L) => {
    E((V) => {
      var W;
      return (W = V.find((pe) => pe.id === L.id)) != null && W.delete || Ne.dismiss(L.id), V.filter(({ id: pe }) => pe !== L.id);
    });
  }, []);
  return O.useEffect(() => Ne.subscribe((L) => {
    if (L.dismiss) {
      E((V) => V.map((W) => W.id === L.id ? { ...W, delete: !0 } : W));
      return;
    }
    setTimeout(() => {
      eg.flushSync(() => {
        E((V) => {
          let W = V.findIndex((pe) => pe.id === L.id);
          return W !== -1 ? [...V.slice(0, W), { ...V[W], ...L }, ...V.slice(W + 1)] : [L, ...V];
        });
      });
    });
  }), []), O.useEffect(() => {
    if (c !== "system") {
      je(c);
      return;
    }
    if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? je("dark") : je("light")), typeof window > "u") return;
    let L = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      L.addEventListener("change", ({ matches: V }) => {
        je(V ? "dark" : "light");
      });
    } catch {
      L.addListener(({ matches: W }) => {
        try {
          je(W ? "dark" : "light");
        } catch (pe) {
          console.error(pe);
        }
      });
    }
  }, [c]), O.useEffect(() => {
    k.length <= 1 && F(!1);
  }, [k]), O.useEffect(() => {
    let L = (V) => {
      var W, pe;
      i.every((Ae) => V[Ae] || V.code === Ae) && (F(!0), (W = be.current) == null || W.focus()), V.code === "Escape" && (document.activeElement === be.current || (pe = be.current) != null && pe.contains(document.activeElement)) && F(!1);
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [i]), O.useEffect(() => {
    if (be.current) return () => {
      C.current && (C.current.focus({ preventScroll: !0 }), C.current = null, N.current = !1);
    };
  }, [be.current]), O.createElement("section", { ref: t, "aria-label": `${w} ${T}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: !0 }, R.map((L, V) => {
    var W;
    let [pe, Ae] = L.split("-");
    return k.length ? O.createElement("ol", { key: L, dir: _ === "auto" ? oc() : _, tabIndex: -1, ref: be, className: a, "data-sonner-toaster": !0, "data-theme": ir, "data-y-position": pe, "data-lifted": H && k.length > 1 && !s, "data-x-position": Ae, style: { "--front-toast-height": `${((W = U[0]) == null ? void 0 : W.height) || 0}px`, "--width": `${_g}px`, "--gap": `${g}px`, ...d, ...Tg(l, u) }, onBlur: (G) => {
      N.current && !G.currentTarget.contains(G.relatedTarget) && (N.current = !1, C.current && (C.current.focus({ preventScroll: !0 }), C.current = null));
    }, onFocus: (G) => {
      G.target instanceof HTMLElement && G.target.dataset.dismissible === "false" || N.current || (N.current = !0, C.current = G.relatedTarget);
    }, onMouseEnter: () => F(!0), onMouseMove: () => F(!0), onMouseLeave: () => {
      ae || F(!1);
    }, onDragEnd: () => F(!1), onPointerDown: (G) => {
      G.target instanceof HTMLElement && G.target.dataset.dismissible === "false" || ze(!0);
    }, onPointerUp: () => ze(!1) }, k.filter((G) => !G.position && V === 0 || G.position === L).map((G, ro) => {
      var yn, bi;
      return O.createElement(Eg, { key: G.id, icons: m, index: ro, toast: G, defaultRichColors: p, duration: (yn = v?.duration) != null ? yn : f, className: v?.className, descriptionClassName: v?.descriptionClassName, invert: r, visibleToasts: y, closeButton: (bi = v?.closeButton) != null ? bi : o, interacting: ae, position: L, style: v?.style, unstyled: v?.unstyled, classNames: v?.classNames, cancelButtonStyle: v?.cancelButtonStyle, actionButtonStyle: v?.actionButtonStyle, removeToast: Y, toasts: k.filter((wn) => wn.position == G.position), heights: U.filter((wn) => wn.position == G.position), setHeights: j, expandByDefault: s, gap: g, loadingIcon: h, expanded: H, pauseWhenPageIsHidden: x, swipeDirections: e.swipeDirections });
    })) : null;
  }));
}), Kh, ac = Hh;
Kh = ac.createRoot, ac.hydrateRoot;
var qh = { exports: {} }, Qs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Og = M, Rg = Symbol.for("react.element"), Pg = Symbol.for("react.fragment"), jg = Object.prototype.hasOwnProperty, Ag = Og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ng = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gh(e, t, r) {
  var n, i = {}, s = null, o = null;
  r !== void 0 && (s = "" + r), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) jg.call(t, n) && !Ng.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: Rg, type: e, key: s, ref: o, props: i, _owner: Ag.current };
}
Qs.Fragment = Pg;
Qs.jsx = Gh;
Qs.jsxs = Gh;
qh.exports = Qs;
var S = qh.exports, La = class extends Error {
  constructor(t, r, n) {
    super(r);
    mt(this, "code");
    mt(this, "cause");
    this.code = t, this.cause = n, this.name = "XOOSMicroappError";
  }
}, Jh = M.createContext(null);
function Qh() {
  const e = M.useContext(Jh);
  if (!e)
    throw new La(
      "XOOS_CONTEXT_MISSING",
      "XOOS Microapp is not mounted inside the XOOS Runtime."
    );
  return e;
}
var Ig = class extends O.Component {
  constructor() {
    super(...arguments);
    mt(this, "state", { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(t, r) {
    this.props.onError?.(t), this.props.bridge.telemetry.track("microapp.error", { microappKey: this.props.microappKey }, this.props.microappKey).catch(() => {
    });
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ S.jsx("div", { role: "alert", children: "This XOOS component could not be loaded." }) : this.props.children;
  }
}, Yh = M.createContext(null);
function $g(e) {
  return /* @__PURE__ */ S.jsx(Yh.Provider, { value: e.value, children: e.children });
}
function Lg() {
  return M.useContext(Yh);
}
function Dg(e) {
  const { id: t, element: r, App: n, styles: i = "", shadowDom: s = !0, onError: o } = e;
  if (!t.trim()) throw new La("MICROAPP_ID_REQUIRED", "XOOS Microapp id is required.");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(r))
    throw new La(
      "ELEMENT_NAME_INVALID",
      "XOOS custom element name must be lowercase, hyphenated, and contain at least one hyphen."
    );
  if (customElements.get(r)) return;
  class a extends HTMLElement {
    constructor() {
      super(...arguments);
      mt(this, "reactRoot", null);
      mt(this, "mountNode", null);
      mt(this, "portalNode", null);
      mt(this, "bridge");
      mt(this, "props", {});
      mt(this, "mountedTelemetrySent", !1);
    }
    set xoos(c) {
      this.bridge = c, this.isConnected && this.renderMicroapp();
    }
    get xoos() {
      return this.bridge;
    }
    set xoosProps(c) {
      this.props = c ?? {}, this.isConnected && this.renderMicroapp();
    }
    get xoosProps() {
      return this.props;
    }
    connectedCallback() {
      this.mountMicroapp();
    }
    disconnectedCallback() {
      this.unmountMicroapp();
    }
    mountMicroapp() {
      if (this.reactRoot) return;
      const c = s ? this.shadowRoot ?? this.attachShadow({ mode: "open" }) : this;
      if (i && !c.querySelector("style[data-xoos-adapter-styles]")) {
        const p = document.createElement("style");
        p.setAttribute("data-xoos-adapter-styles", t), p.textContent = i, c.appendChild(p);
      }
      this.mountNode = document.createElement("div"), this.mountNode.setAttribute("data-xoos-microapp", t), c.appendChild(this.mountNode), this.portalNode = document.createElement("div"), this.portalNode.setAttribute("data-xoos-portal-root", t), c.appendChild(this.portalNode), this.reactRoot = Kh(this.mountNode), this.renderMicroapp(), this.emitMountTelemetry();
    }
    renderMicroapp() {
      !this.reactRoot || !this.bridge || this.reactRoot.render(
        /* @__PURE__ */ S.jsx(Ig, { microappKey: t, bridge: this.bridge, onError: o, children: /* @__PURE__ */ S.jsx(Jh.Provider, { value: this.bridge, children: /* @__PURE__ */ S.jsx($g, { value: this.portalNode, children: /* @__PURE__ */ S.jsx(n, { ...this.props }) }) }) })
      );
    }
    emitMountTelemetry() {
      !this.bridge || this.mountedTelemetrySent || (this.mountedTelemetrySent = !0, this.bridge.telemetry.track("microapp.mount", { microappKey: t }, t).catch(() => {
      }));
    }
    unmountMicroapp() {
      this.bridge && this.mountedTelemetrySent && this.bridge.telemetry.track("microapp.unmount", { microappKey: t }, t).catch(() => {
      }), this.reactRoot?.unmount(), this.reactRoot = null, this.mountNode = null, this.portalNode = null, this.mountedTelemetrySent = !1;
    }
  }
  customElements.define(r, a);
}
function Ug() {
  const e = Qh(), t = e.context.scopes, r = (n) => t.includes(n);
  return {
    list: () => e.permissions.list(),
    can: (n) => e.permissions.can(n),
    require: (n) => e.permissions.require(n),
    hasScope: r,
    hasAnyScope: (n) => n.some(r),
    hasAllScopes: (n) => n.every(r)
  };
}
const zg = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-200:oklch(88.5% .062 18.334);--color-red-600:oklch(57.7% .245 27.325);--color-indigo-50:oklch(96.2% .018 272.314);--color-indigo-200:oklch(87% .065 274.039);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-violet-600:oklch(54.1% .281 293.009);--color-violet-700:oklch(49.1% .27 292.581);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-800:oklch(27.9% .041 260.031);--color-slate-900:oklch(20.8% .042 265.755);--color-gray-50:oklch(98.5% .002 247.839);--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}body{background-color:var(--background);color:var(--foreground)}html{font-size:var(--font-size)}h1{font-size:var(--text-2xl);font-weight:var(--font-weight-medium);line-height:1.5}h2{font-size:var(--text-xl);font-weight:var(--font-weight-medium);line-height:1.5}h3{font-size:var(--text-lg);font-weight:var(--font-weight-medium);line-height:1.5}h4,label,button{font-size:var(--text-base);font-weight:var(--font-weight-medium);line-height:1.5}input{font-size:var(--text-base);font-weight:var(--font-weight-normal);line-height:1.5}}@layer components;@layer utilities{.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.z-50{z-index:50}.col-span-1{grid-column:span 1/span 1}.col-span-3{grid-column:span 3/span 3}.col-span-8{grid-column:span 8/span 8}.mx-auto{margin-inline:auto}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.flex{display:flex}.grid{display:grid}.h-4{height:calc(var(--spacing)*4)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-20{height:calc(var(--spacing)*20)}.min-h-screen{min-height:100vh}.w-4{width:calc(var(--spacing)*4)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-20{width:calc(var(--spacing)*20)}.w-\\[90\\%\\]{width:90%}.w-full{width:100%}.max-w-\\[1440px\\]{max-width:1440px}.max-w-md{max-width:var(--container-md)}.flex-shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-\\[checkDraw_0\\.4s_ease-out_0\\.7s_forwards\\]{animation:.4s ease-out .7s forwards checkDraw}.animate-\\[circleDraw_0\\.6s_ease-out_0\\.1s_forwards\\]{animation:.6s ease-out .1s forwards circleDraw}.animate-\\[fadeIn_0\\.3s_ease-out_0\\.5s_forwards\\]{animation:.3s ease-out .5s forwards fadeIn}.animate-\\[fadeIn_0\\.3s_ease-out_0\\.9s_forwards\\]{animation:.3s ease-out .9s forwards fadeIn}.animate-\\[scaleIn_0\\.3s_ease-out\\]{animation:.3s ease-out scaleIn}.animate-spin{animation:var(--animate-spin)}.cursor-not-allowed{cursor:not-allowed}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1.5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1.5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-red-200{border-color:var(--color-red-200)}.border-slate-100{border-color:var(--color-slate-100)}.border-slate-200{border-color:var(--color-slate-200)}.bg-gray-50\\/50{background-color:#f9fafb80}@supports (color:color-mix(in lab,red,red)){.bg-gray-50\\/50{background-color:color-mix(in oklab,var(--color-gray-50)50%,transparent)}}.bg-indigo-600{background-color:var(--color-indigo-600)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-50\\/30{background-color:#f8fafc4d}@supports (color:color-mix(in lab,red,red)){.bg-slate-50\\/30{background-color:color-mix(in oklab,var(--color-slate-50)30%,transparent)}}.bg-slate-100{background-color:var(--color-slate-100)}.bg-slate-200{background-color:var(--color-slate-200)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-indigo-600{--tw-gradient-from:var(--color-indigo-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-violet-600{--tw-gradient-to:var(--color-violet-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.pt-6{padding-top:calc(var(--spacing)*6)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pb-8{padding-bottom:calc(var(--spacing)*8)}.text-center{text-align:center}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-indigo-600{color:var(--color-indigo-600)}.text-red-600{color:var(--color-red-600)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-800{color:var(--color-slate-800)}.text-slate-900{color:var(--color-slate-900)}.text-white{color:var(--color-white)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-0{opacity:0}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-indigo-200{--tw-shadow-color:oklch(87% .065 274.039)}@supports (color:color-mix(in lab,red,red)){.shadow-indigo-200{--tw-shadow-color:color-mix(in oklab,var(--color-indigo-200)var(--tw-shadow-alpha),transparent)}}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media (hover:hover){.hover\\:border-indigo-300:hover{border-color:var(--color-indigo-300)}.hover\\:bg-indigo-50:hover{background-color:var(--color-indigo-50)}.hover\\:bg-slate-100:hover{background-color:var(--color-slate-100)}.hover\\:from-indigo-700:hover{--tw-gradient-from:var(--color-indigo-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:to-violet-700:hover{--tw-gradient-to:var(--color-violet-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:text-indigo-600:hover{color:var(--color-indigo-600)}}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-30:disabled{opacity:.3}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:active\\:scale-100:disabled:active{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}@media (min-width:40rem){.sm\\:h-5{height:calc(var(--spacing)*5)}.sm\\:w-5{width:calc(var(--spacing)*5)}.sm\\:w-auto{width:auto}.sm\\:flex-row{flex-direction:row}:where(.sm\\:space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*5)*calc(1 - var(--tw-space-y-reverse)))}.sm\\:p-6{padding:calc(var(--spacing)*6)}.sm\\:px-4{padding-inline:calc(var(--spacing)*4)}.sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.sm\\:px-8{padding-inline:calc(var(--spacing)*8)}.sm\\:py-4{padding-block:calc(var(--spacing)*4)}.sm\\:py-6{padding-block:calc(var(--spacing)*6)}.sm\\:pt-8{padding-top:calc(var(--spacing)*8)}.sm\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}}@media (min-width:48rem){.md\\:col-span-5{grid-column:span 5/span 5}.md\\:col-span-7{grid-column:span 7/span 7}.md\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.md\\:gap-8{gap:calc(var(--spacing)*8)}}@media (min-width:64rem){.lg\\:px-8{padding-inline:calc(var(--spacing)*8)}.lg\\:py-8{padding-block:calc(var(--spacing)*8)}}@media (min-width:80rem){.xl\\:col-span-4{grid-column:span 4/span 4}.xl\\:col-span-8{grid-column:span 8/span 8}}}:host,:root{--font-size:16px;--background:#fff;--foreground:oklch(14.5% 0 0);--card:#fff;--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:#030213;--primary-foreground:oklch(100% 0 0);--secondary:oklch(95% .0058 264.53);--secondary-foreground:#030213;--muted:#ececf0;--muted-foreground:#717182;--accent:#e9ebef;--accent-foreground:#030213;--destructive:#d4183d;--destructive-foreground:#fff;--border:#0000001a;--input:transparent;--input-background:#f3f3f5;--switch-background:#cbced4;--font-weight-medium:500;--font-weight-normal:400;--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--radius:.625rem;--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:#030213;--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0)}.dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(14.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(14.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(98.5% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(39.6% .141 25.723);--destructive-foreground:oklch(63.7% .237 25.331);--border:oklch(26.9% 0 0);--input:oklch(26.9% 0 0);--ring:oklch(43.9% 0 0);--font-weight-medium:500;--font-weight-normal:400;--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(26.9% 0 0);--sidebar-ring:oklch(43.9% 0 0)}:host{min-height:100%;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;display:block}[data-xoos-microapp]{min-height:100%}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}';
function Ys({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ S.jsx(
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
function Mg(e) {
  return /* @__PURE__ */ S.jsxs(Ys, { ...e, children: [
    /* @__PURE__ */ S.jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ S.jsx("path", { d: "M12 16v-4" }),
    /* @__PURE__ */ S.jsx("path", { d: "M12 8h.01" })
  ] });
}
function Bg(e) {
  return /* @__PURE__ */ S.jsx(Ys, { ...e, children: /* @__PURE__ */ S.jsx("path", { d: "m18 15-6-6-6 6" }) });
}
function Fg(e) {
  return /* @__PURE__ */ S.jsx(Ys, { ...e, children: /* @__PURE__ */ S.jsx("path", { d: "m6 9 6 6 6-6" }) });
}
function lc(e) {
  return /* @__PURE__ */ S.jsx(Ys, { ...e, children: /* @__PURE__ */ S.jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) });
}
function Xs(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Wg(e, t, r, n) {
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
const Vg = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t);
class Bl extends Error {
  constructor(t, r = "FunctionsError", n) {
    super(t), this.name = r, this.context = n;
  }
}
class Hg extends Bl {
  constructor(t) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", t);
  }
}
class uc extends Bl {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class cc extends Bl {
  constructor(t) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t);
  }
}
var Da;
(function(e) {
  e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2";
})(Da || (Da = {}));
class Kg {
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
  constructor(t, { headers: r = {}, customFetch: n, region: i = Da.Any } = {}) {
    this.url = t, this.headers = r, this.region = i, this.fetch = Vg(n);
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
    return Wg(this, arguments, void 0, function* (r, n = {}) {
      var i;
      let s, o;
      try {
        const { headers: a, method: l, body: u, signal: c, timeout: p } = n;
        let f = {}, { region: d } = n;
        d || (d = this.region);
        const y = new URL(`${this.url}/${r}`);
        d && d !== "any" && (f["x-region"] = d, y.searchParams.set("forceFunctionRegion", d));
        let v;
        u && (a && !Object.prototype.hasOwnProperty.call(a, "Content-Type") || !a) ? typeof Blob < "u" && u instanceof Blob || u instanceof ArrayBuffer ? (f["Content-Type"] = "application/octet-stream", v = u) : typeof u == "string" ? (f["Content-Type"] = "text/plain", v = u) : typeof FormData < "u" && u instanceof FormData ? v = u : (f["Content-Type"] = "application/json", v = JSON.stringify(u)) : u && typeof u != "string" && !(typeof Blob < "u" && u instanceof Blob) && !(u instanceof ArrayBuffer) && !(typeof FormData < "u" && u instanceof FormData) ? v = JSON.stringify(u) : v = u;
        let _ = c;
        p && (o = new AbortController(), s = setTimeout(() => o.abort(), p), c ? (_ = o.signal, c.addEventListener("abort", () => o.abort())) : _ = o.signal);
        const g = yield this.fetch(y.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, f), this.headers), a),
          body: v,
          signal: _
        }).catch((x) => {
          throw new Hg(x);
        }), h = g.headers.get("x-relay-error");
        if (h && h === "true")
          throw new uc(g);
        if (!g.ok)
          throw new cc(g);
        let m = ((i = g.headers.get("Content-Type")) !== null && i !== void 0 ? i : "text/plain").split(";")[0].trim(), w;
        return m === "application/json" ? w = yield g.json() : m === "application/octet-stream" || m === "application/pdf" ? w = yield g.blob() : m === "text/event-stream" ? w = g : m === "multipart/form-data" ? w = yield g.formData() : w = yield g.text(), { data: w, error: null, response: g };
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof cc || a instanceof uc ? a.context : void 0
        };
      } finally {
        s && clearTimeout(s);
      }
    });
  }
}
var qg = class extends Error {
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
}, Gg = class {
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
        var p, f;
        if (r.method !== "HEAD") {
          var d;
          const g = await s.text();
          g === "" || (r.headers.get("Accept") === "text/csv" || r.headers.get("Accept") && (!((d = r.headers.get("Accept")) === null || d === void 0) && d.includes("application/vnd.pgrst.plan+text")) ? a = g : a = JSON.parse(g));
        }
        const v = (p = r.headers.get("Prefer")) === null || p === void 0 ? void 0 : p.match(/count=(exact|planned|estimated)/), _ = (f = s.headers.get("content-range")) === null || f === void 0 ? void 0 : f.split("/");
        v && _ && _.length > 1 && (l = parseInt(_[1])), r.isMaybeSingle && r.method === "GET" && Array.isArray(a) && (a.length > 1 ? (o = {
          code: "PGRST116",
          details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, a = null, l = null, u = 406, c = "Not Acceptable") : a.length === 1 ? a = a[0] : a = null);
      } else {
        var y;
        const v = await s.text();
        try {
          o = JSON.parse(v), Array.isArray(o) && s.status === 404 && (a = [], o = null, u = 200, c = "OK");
        } catch {
          s.status === 404 && v === "" ? (u = 204, c = "No Content") : o = { message: v };
        }
        if (o && r.isMaybeSingle && (!(o == null || (y = o.details) === null || y === void 0) && y.includes("0 rows")) && (o = null, u = 200, c = "OK"), o && r.shouldThrowOnError) throw new qg(o);
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
        var p, f, d, y;
        const g = (p = c?.message) !== null && p !== void 0 ? p : "", h = (f = c?.code) !== null && f !== void 0 ? f : "";
        a = `${(d = s?.name) !== null && d !== void 0 ? d : "FetchError"}: ${s?.message}`, a += `

Caused by: ${(y = c?.name) !== null && y !== void 0 ? y : "Error"}: ${g}`, h && (a += ` (${h})`), c?.stack && (a += `
${c.stack}`);
      } else {
        var v;
        a = (v = s?.stack) !== null && v !== void 0 ? v : "";
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
}, Jg = class extends Gg {
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
const dc = /* @__PURE__ */ new RegExp("[,()]");
var Dr = class extends Jg {
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
    const r = Array.from(new Set(t)).map((n) => typeof n == "string" && dc.test(n) ? `"${n}"` : `${n}`).join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(e, t) {
    const r = Array.from(new Set(t)).map((n) => typeof n == "string" && dc.test(n) ? `"${n}"` : `${n}`).join(",");
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
}, Qg = class {
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
    return a.searchParams.set("select", o), n && l.append("Prefer", `count=${n}`), new Dr({
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
    return new Dr({
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
    return new Dr({
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
    return t && s.append("Prefer", `count=${t}`), new Dr({
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
    return e && i.append("Prefer", `count=${e}`), new Dr({
      method: r,
      url: n,
      headers: i,
      schema: this.schema,
      fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
function ui(e) {
  "@babel/helpers - typeof";
  return ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ui(e);
}
function Yg(e, t) {
  if (ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xg(e) {
  var t = Yg(e, "string");
  return ui(t) == "symbol" ? t : t + "";
}
function Zg(e, t, r) {
  return (t = Xg(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function hc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hc(Object(r), !0).forEach(function(n) {
      Zg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var e0 = class Xh {
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
      const c = new AbortController(), p = setTimeout(() => c.abort(), s), f = u?.signal;
      if (f) {
        if (f.aborted)
          return clearTimeout(p), a(l, u);
        const d = () => {
          clearTimeout(p), c.abort();
        };
        return f.addEventListener("abort", d, { once: !0 }), a(l, Fi(Fi({}, u), {}, { signal: c.signal })).finally(() => {
          clearTimeout(p), f.removeEventListener("abort", d);
        });
      }
      return a(l, Fi(Fi({}, u), {}, { signal: c.signal })).finally(() => clearTimeout(p));
    } : this.fetch = a;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(t) {
    if (!t || typeof t != "string" || t.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new Qg(new URL(`${this.url}/${t}`), {
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
    return new Xh(this.url, {
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
    const c = (d) => d !== null && typeof d == "object" && (!Array.isArray(d) || d.some(c)), p = n && Object.values(r).some(c);
    p ? (a = "POST", u = r) : n || i ? (a = n ? "HEAD" : "GET", Object.entries(r).filter(([d, y]) => y !== void 0).map(([d, y]) => [d, Array.isArray(y) ? `{${y.join(",")}}` : `${y}`]).forEach(([d, y]) => {
      l.searchParams.append(d, y);
    })) : (a = "POST", u = r);
    const f = new Headers(this.headers);
    return p ? f.set("Prefer", s ? `count=${s},return=minimal` : "return=minimal") : s && f.set("Prefer", `count=${s}`), new Dr({
      method: a,
      url: l,
      headers: f,
      schema: this.schemaName,
      body: u,
      fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
class t0 {
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
const r0 = "2.95.3", n0 = `realtime-js/${r0}`, i0 = "1.0.0", Zh = "2.0.0", fc = Zh, Ua = 1e4, s0 = 1e3, o0 = 100;
var zt;
(function(e) {
  e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed";
})(zt || (zt = {}));
var de;
(function(e) {
  e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving";
})(de || (de = {}));
var ct;
(function(e) {
  e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token";
})(ct || (ct = {}));
var za;
(function(e) {
  e.websocket = "websocket";
})(za || (za = {}));
var hr;
(function(e) {
  e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed";
})(hr || (hr = {}));
class a0 {
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
    const f = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + a.length + o.length + u.length + p.length, d = new ArrayBuffer(this.HEADER_LENGTH + f);
    let y = new DataView(d), v = 0;
    y.setUint8(v++, this.KINDS.userBroadcastPush), y.setUint8(v++, l.length), y.setUint8(v++, a.length), y.setUint8(v++, o.length), y.setUint8(v++, u.length), y.setUint8(v++, p.length), y.setUint8(v++, r), Array.from(l, (g) => y.setUint8(v++, g.charCodeAt(0))), Array.from(a, (g) => y.setUint8(v++, g.charCodeAt(0))), Array.from(o, (g) => y.setUint8(v++, g.charCodeAt(0))), Array.from(u, (g) => y.setUint8(v++, g.charCodeAt(0))), Array.from(p, (g) => y.setUint8(v++, g.charCodeAt(0)));
    var _ = new Uint8Array(d.byteLength + n.byteLength);
    return _.set(new Uint8Array(d), 0), _.set(new Uint8Array(n), d.byteLength), _.buffer;
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
    const f = t.slice(l, t.byteLength), d = a === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f, y = {
      type: this.BROADCAST_EVENT,
      event: c,
      payload: d
    };
    return o > 0 && (y.meta = JSON.parse(p)), { join_ref: null, ref: null, topic: u, event: this.BROADCAST_EVENT, payload: y };
  }
  _isArrayBuffer(t) {
    var r;
    return t instanceof ArrayBuffer || ((r = t?.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer";
  }
  _pick(t, r) {
    return !t || typeof t != "object" ? {} : Object.fromEntries(Object.entries(t).filter(([n]) => r.includes(n)));
  }
}
class ef {
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
var J;
(function(e) {
  e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange";
})(J || (J = {}));
const pc = (e, t, r = {}) => {
  var n;
  const i = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
  return t ? Object.keys(t).reduce((s, o) => (s[o] = l0(o, e, t, i), s), {}) : {};
}, l0 = (e, t, r, n) => {
  const i = t.find((a) => a.name === e), s = i?.type, o = r[e];
  return s && !n.includes(s) ? tf(s, o) : Ma(o);
}, tf = (e, t) => {
  if (e.charAt(0) === "_") {
    const r = e.slice(1, e.length);
    return h0(t, r);
  }
  switch (e) {
    case J.bool:
      return u0(t);
    case J.float4:
    case J.float8:
    case J.int2:
    case J.int4:
    case J.int8:
    case J.numeric:
    case J.oid:
      return c0(t);
    case J.json:
    case J.jsonb:
      return d0(t);
    case J.timestamp:
      return f0(t);
    case J.abstime:
    case J.date:
    case J.daterange:
    case J.int4range:
    case J.int8range:
    case J.money:
    case J.reltime:
    case J.text:
    case J.time:
    case J.timestamptz:
    case J.timetz:
    case J.tsrange:
    case J.tstzrange:
      return Ma(t);
    default:
      return Ma(t);
  }
}, Ma = (e) => e, u0 = (e) => {
  switch (e) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return e;
  }
}, c0 = (e) => {
  if (typeof e == "string") {
    const t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return e;
}, d0 = (e) => {
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return e;
}, h0 = (e, t) => {
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
    return s.map((a) => tf(t, a));
  }
  return e;
}, f0 = (e) => typeof e == "string" ? e.replace(" ", "T") : e, rf = (e) => {
  const t = new URL(e);
  return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname = t.pathname + "/api/broadcast", t.href;
};
class $o {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(t, r, n = {}, i = Ua) {
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
var mc;
(function(e) {
  e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
})(mc || (mc = {}));
class Vn {
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
      this.joinRef = this.channel._joinRef(), this.state = Vn.syncState(this.state, i, s, o), this.pendingDiffs.forEach((l) => {
        this.state = Vn.syncDiff(this.state, l, s, o);
      }), this.pendingDiffs = [], a();
    }), this.channel._on(n.diff, {}, (i) => {
      const { onJoin: s, onLeave: o, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(i) : (this.state = Vn.syncDiff(this.state, i, s, o), a());
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
        const f = c.map((_) => _.presence_ref), d = p.map((_) => _.presence_ref), y = c.filter((_) => d.indexOf(_.presence_ref) < 0), v = p.filter((_) => f.indexOf(_.presence_ref) < 0);
        y.length > 0 && (a[u] = y), v.length > 0 && (l[u] = v);
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
        const p = t[a].map((d) => d.presence_ref), f = c.filter((d) => p.indexOf(d.presence_ref) < 0);
        t[a].unshift(...f);
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
var gc;
(function(e) {
  e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
})(gc || (gc = {}));
var Hn;
(function(e) {
  e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system";
})(Hn || (Hn = {}));
var bt;
(function(e) {
  e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
})(bt || (bt = {}));
class Xr {
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
    if (this.topic = t, this.params = r, this.socket = n, this.bindings = {}, this.state = de.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = t.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, r.config), this.timeout = this.socket.timeout, this.joinPush = new $o(this, ct.join, this.params, this.timeout), this.rejoinTimer = new ef(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = de.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((o) => o.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = de.closed, this.socket._remove(this);
    }), this._onError((o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = de.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = de.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = de.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(ct.reply, {}, (o, a) => {
      this._trigger(this._replyEventName(a), o);
    }), this.presence = new Vn(this), this.broadcastEndpointURL = rf(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((s = (i = this.params.config) === null || i === void 0 ? void 0 : i.broadcast) === null || s === void 0) && s.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(t, r = this.timeout) {
    var n, i, s;
    if (this.socket.isConnected() || this.socket.connect(), this.state == de.closed) {
      const { config: { broadcast: o, presence: a, private: l } } = this.params, u = (i = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map((d) => d.filter)) !== null && i !== void 0 ? i : [], c = !!this.bindings[Hn.PRESENCE] && this.bindings[Hn.PRESENCE].length > 0 || ((s = this.params.config.presence) === null || s === void 0 ? void 0 : s.enabled) === !0, p = {}, f = {
        broadcast: o,
        presence: Object.assign(Object.assign({}, a), { enabled: c }),
        postgres_changes: u,
        private: l
      };
      this.socket.accessTokenValue && (p.access_token = this.socket.accessTokenValue), this._onError((d) => t?.(bt.CHANNEL_ERROR, d)), this._onClose(() => t?.(bt.CLOSED)), this.updateJoinPayload(Object.assign({ config: f }, p)), this.joinedOnce = !0, this._rejoin(r), this.joinPush.receive("ok", async ({ postgres_changes: d }) => {
        var y;
        if (this.socket._isManualToken() || this.socket.setAuth(), d === void 0) {
          t?.(bt.SUBSCRIBED);
          return;
        } else {
          const v = this.bindings.postgres_changes, _ = (y = v?.length) !== null && y !== void 0 ? y : 0, g = [];
          for (let h = 0; h < _; h++) {
            const m = v[h], { filter: { event: w, schema: x, table: k, filter: E } } = m, R = d && d[h];
            if (R && R.event === w && Xr.isFilterValueEqual(R.schema, x) && Xr.isFilterValueEqual(R.table, k) && Xr.isFilterValueEqual(R.filter, E))
              g.push(Object.assign(Object.assign({}, m), { id: R.id }));
            else {
              this.unsubscribe(), this.state = de.errored, t?.(bt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = g, t && t(bt.SUBSCRIBED);
          return;
        }
      }).receive("error", (d) => {
        this.state = de.errored, t?.(bt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")));
      }).receive("timeout", () => {
        t?.(bt.TIMED_OUT);
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
    return this.state === de.joined && t === Hn.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(async () => await this.subscribe())), this._on(t, r, n);
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
    this.state = de.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(ct.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((i) => {
      n = new $o(this, ct.leave, {}, t), n.receive("ok", () => {
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
    this.pushBuffer.forEach((t) => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = de.closed, this.bindings = {};
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
    let i = new $o(this, t, r, n);
    return this._canPush() ? i.send() : this._addToPushBuffer(i), i;
  }
  /** @internal */
  _addToPushBuffer(t) {
    if (t.startTimeout(), this.pushBuffer.push(t), this.pushBuffer.length > o0) {
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
    const o = t.toLocaleLowerCase(), { close: a, error: l, leave: u, join: c } = ct;
    if (n && [a, l, u, c].indexOf(o) >= 0 && n !== this._joinRef())
      return;
    let f = this._onMessage(o, r, n);
    if (r && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o) ? (i = this.bindings.postgres_changes) === null || i === void 0 || i.filter((d) => {
      var y, v, _;
      return ((y = d.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((_ = (v = d.filter) === null || v === void 0 ? void 0 : v.event) === null || _ === void 0 ? void 0 : _.toLocaleLowerCase()) === o;
    }).map((d) => d.callback(f, n)) : (s = this.bindings[o]) === null || s === void 0 || s.filter((d) => {
      var y, v, _, g, h, m;
      if (["broadcast", "presence", "postgres_changes"].includes(o))
        if ("id" in d) {
          const w = d.id, x = (y = d.filter) === null || y === void 0 ? void 0 : y.event;
          return w && ((v = r.ids) === null || v === void 0 ? void 0 : v.includes(w)) && (x === "*" || x?.toLocaleLowerCase() === ((_ = r.data) === null || _ === void 0 ? void 0 : _.type.toLocaleLowerCase()));
        } else {
          const w = (h = (g = d?.filter) === null || g === void 0 ? void 0 : g.event) === null || h === void 0 ? void 0 : h.toLocaleLowerCase();
          return w === "*" || w === ((m = r?.event) === null || m === void 0 ? void 0 : m.toLocaleLowerCase());
        }
      else
        return d.type.toLocaleLowerCase() === o;
    }).map((d) => {
      if (typeof f == "object" && "ids" in f) {
        const y = f.data, { schema: v, table: _, commit_timestamp: g, type: h, errors: m } = y;
        f = Object.assign(Object.assign({}, {
          schema: v,
          table: _,
          commit_timestamp: g,
          eventType: h,
          new: {},
          old: {},
          errors: m
        }), this._getPayloadRecords(y));
      }
      d.callback(f, n);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === de.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === de.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === de.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === de.leaving;
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
      return !(((s = i.type) === null || s === void 0 ? void 0 : s.toLocaleLowerCase()) === n && Xr.isEqual(i.filter, r));
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
    this._on(ct.close, {}, t);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(t) {
    this._on(ct.error, {}, (r) => t(r));
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
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = de.joining, this.joinPush.resend(t));
  }
  /** @internal */
  _getPayloadRecords(t) {
    const r = {
      new: {},
      old: {}
    };
    return (t.type === "INSERT" || t.type === "UPDATE") && (r.new = pc(t.columns, t.record)), (t.type === "UPDATE" || t.type === "DELETE") && (r.old = pc(t.columns, t.old_record)), r;
  }
}
const Lo = () => {
}, Wi = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, p0 = [1e3, 2e3, 5e3, 1e4], m0 = 1e4, g0 = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class v0 {
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
    if (this.accessTokenValue = null, this.apiKey = null, this._manuallySetToken = !1, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Ua, this.transport = null, this.heartbeatIntervalMs = Wi.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Lo, this.ref = 0, this.reconnectTimer = null, this.vsn = fc, this.logger = Lo, this.conn = null, this.sendBuffer = [], this.serializer = new a0(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._heartbeatSentAt = null, this._resolveFetch = (i) => i ? (...s) => i(...s) : (...s) => fetch(...s), !(!((n = r?.params) === null || n === void 0) && n.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = r.params.apikey, this.endPoint = `${t}/${za.websocket}`, this.httpEndpoint = rf(t), this._initializeOptions(r), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(r?.fetch);
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
          this.conn = t0.createWebSocket(this.endpointURL());
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
      case zt.connecting:
        return hr.Connecting;
      case zt.open:
        return hr.Open;
      case zt.closing:
        return hr.Closing;
      default:
        return hr.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === hr.Open;
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
      const s = new Xr(`realtime:${t}`, r, this);
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
      this._wasManualDisconnect = !1, (t = this.conn) === null || t === void 0 || t.close(s0, "heartbeat timeout"), setTimeout(() => {
        var r;
        this.isConnected() || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout();
      }, Wi.HEARTBEAT_TIMEOUT_FALLBACK);
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
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (t) => this._onConnError(t), this.conn.onmessage = (t) => this._onConnMessage(t), this.conn.onclose = (t) => this._onConnClose(t), this.conn.readyState === zt.open && this._onConnOpen());
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === zt.open || this.conn.readyState === zt.connecting)
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
    this.channels.forEach((t) => t._trigger(ct.error));
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
      const n = new Blob([g0], { type: "application/javascript" });
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
        version: n0
      };
      r && i.updateJoinPayload(s), i.joinedOnce && i._isJoined() && i._push(ct.access_token, {
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
    this.reconnectTimer = new ef(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Wi.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(t) {
    var r, n, i, s, o, a, l, u, c, p, f, d;
    switch (this.transport = (r = t?.transport) !== null && r !== void 0 ? r : null, this.timeout = (n = t?.timeout) !== null && n !== void 0 ? n : Ua, this.heartbeatIntervalMs = (i = t?.heartbeatIntervalMs) !== null && i !== void 0 ? i : Wi.HEARTBEAT_INTERVAL, this.worker = (s = t?.worker) !== null && s !== void 0 ? s : !1, this.accessToken = (o = t?.accessToken) !== null && o !== void 0 ? o : null, this.heartbeatCallback = (a = t?.heartbeatCallback) !== null && a !== void 0 ? a : Lo, this.vsn = (l = t?.vsn) !== null && l !== void 0 ? l : fc, t?.params && (this.params = t.params), t?.logger && (this.logger = t.logger), (t?.logLevel || t?.log_level) && (this.logLevel = t.logLevel || t.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (u = t?.reconnectAfterMs) !== null && u !== void 0 ? u : (y) => p0[y - 1] || m0, this.vsn) {
      case i0:
        this.encode = (c = t?.encode) !== null && c !== void 0 ? c : (y, v) => v(JSON.stringify(y)), this.decode = (p = t?.decode) !== null && p !== void 0 ? p : (y, v) => v(JSON.parse(y));
        break;
      case Zh:
        this.encode = (f = t?.encode) !== null && f !== void 0 ? f : this.serializer.encode.bind(this.serializer), this.decode = (d = t?.decode) !== null && d !== void 0 ? d : this.serializer.decode.bind(this.serializer);
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
var ci = class extends Error {
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
function y0(e, t, r) {
  const n = new URL(t, e);
  if (r)
    for (const [i, s] of Object.entries(r))
      s !== void 0 && n.searchParams.set(i, s);
  return n.toString();
}
async function w0(e) {
  return !e || e.type === "none" ? {} : e.type === "bearer" ? { Authorization: `Bearer ${e.token}` } : e.type === "header" ? { [e.name]: e.value } : e.type === "custom" ? await e.getHeaders() : {};
}
function _0(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: r,
      path: n,
      query: i,
      body: s,
      headers: o
    }) {
      const a = y0(e.baseUrl, n, i), l = await w0(e.auth), u = await t(a, {
        method: r,
        headers: {
          ...s ? { "Content-Type": "application/json" } : {},
          ...l,
          ...o
        },
        body: s ? JSON.stringify(s) : void 0
      }), c = await u.text(), p = (u.headers.get("content-type") || "").includes("application/json"), f = p && c ? JSON.parse(c) : c;
      if (!u.ok) {
        const d = p ? f : void 0, y = d?.error;
        throw new ci(
          y?.message ?? `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: y?.type,
            icebergCode: y?.code,
            details: d
          }
        );
      }
      return { status: u.status, headers: u.headers, data: f };
    }
  };
}
function Vi(e) {
  return e.join("");
}
var k0 = class {
  constructor(e, t = "") {
    this.client = e, this.prefix = t;
  }
  async listNamespaces(e) {
    const t = e ? { parent: Vi(e.namespace) } : void 0;
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
      path: `${this.prefix}/namespaces/${Vi(e.namespace)}`
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${Vi(e.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(e) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Vi(e.namespace)}`
      }), !0;
    } catch (t) {
      if (t instanceof ci && t.status === 404)
        return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (r) {
      if (r instanceof ci && r.status === 409)
        return;
      throw r;
    }
  }
};
function jr(e) {
  return e.join("");
}
var b0 = class {
  constructor(e, t = "", r) {
    this.client = e, this.prefix = t, this.accessDelegation = r;
  }
  async listTables(e) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${jr(e.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(e, t) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${jr(e.namespace)}/tables`,
      body: t,
      headers: r
    })).data.metadata;
  }
  async updateTable(e, t) {
    const r = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${jr(e.namespace)}/tables/${e.name}`,
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
      path: `${this.prefix}/namespaces/${jr(e.namespace)}/tables/${e.name}`,
      query: { purgeRequested: String(t?.purge ?? !1) }
    });
  }
  async loadTable(e) {
    const t = {};
    return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${jr(e.namespace)}/tables/${e.name}`,
      headers: t
    })).data.metadata;
  }
  async tableExists(e) {
    const t = {};
    this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${jr(e.namespace)}/tables/${e.name}`,
        headers: t
      }), !0;
    } catch (r) {
      if (r instanceof ci && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createTableIfNotExists(e, t) {
    try {
      return await this.createTable(e, t);
    } catch (r) {
      if (r instanceof ci && r.status === 409)
        return await this.loadTable({ namespace: e.namespace, name: t.name });
      throw r;
    }
  }
}, S0 = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(e) {
    let t = "v1";
    e.catalogName && (t += `/${e.catalogName}`);
    const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
    this.client = _0({
      baseUrl: r,
      auth: e.auth,
      fetchImpl: e.fetch
    }), this.accessDelegation = e.accessDelegation?.join(","), this.namespaceOps = new k0(this.client, t), this.tableOps = new b0(this.client, t, this.accessDelegation);
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
}, Zs = class extends Error {
  constructor(e, t = "storage", r, n) {
    super(e), this.__isStorageError = !0, this.namespace = t, this.name = t === "vectors" ? "StorageVectorsError" : "StorageError", this.status = r, this.statusCode = n;
  }
};
function eo(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var Hi = class extends Zs {
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
}, nf = class extends Zs {
  constructor(e, t, r = "storage") {
    super(e, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = t;
  }
};
const x0 = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), E0 = (e) => {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ba = (e) => {
  if (Array.isArray(e)) return e.map((r) => Ba(r));
  if (typeof e == "function" || e !== Object(e)) return e;
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const i = r.replace(/([-_][a-z])/gi, (s) => s.toUpperCase().replace(/[-_]/g, ""));
    t[i] = Ba(n);
  }), t;
}, T0 = (e) => !e || typeof e != "string" || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes("/") || e.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e);
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function C0(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O0(e) {
  var t = C0(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function R0(e, t, r) {
  return (t = O0(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function vc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vc(Object(r), !0).forEach(function(n) {
      R0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const yc = (e) => {
  var t;
  return e.msg || e.message || e.error_description || (typeof e.error == "string" ? e.error : (t = e.error) === null || t === void 0 ? void 0 : t.message) || JSON.stringify(e);
}, P0 = async (e, t, r, n) => {
  if (e && typeof e == "object" && "status" in e && "ok" in e && typeof e.status == "number" && !r?.noResolveJson) {
    const i = e, s = i.status || 500;
    if (typeof i.json == "function") i.json().then((o) => {
      const a = o?.statusCode || o?.code || s + "";
      t(new Hi(yc(o), s, a, n));
    }).catch(() => {
      if (n === "vectors") {
        const o = s + "";
        t(new Hi(i.statusText || `HTTP ${s} error`, s, o, n));
      } else {
        const o = s + "";
        t(new Hi(i.statusText || `HTTP ${s} error`, s, o, n));
      }
    });
    else {
      const o = s + "";
      t(new Hi(i.statusText || `HTTP ${s} error`, s, o, n));
    }
  } else t(new nf(yc(e), e, n));
}, j0 = (e, t, r, n) => {
  const i = {
    method: e,
    headers: t?.headers || {}
  };
  return e === "GET" || e === "HEAD" || !n ? $($({}, i), r) : (E0(n) ? (i.headers = $({ "Content-Type": "application/json" }, t?.headers), i.body = JSON.stringify(n)) : i.body = n, t?.duplex && (i.duplex = t.duplex), $($({}, i), r));
};
async function Rn(e, t, r, n, i, s, o) {
  return new Promise((a, l) => {
    e(r, j0(t, n, i, s)).then((u) => {
      if (!u.ok) throw u;
      if (n?.noResolveJson) return u;
      if (o === "vectors") {
        const c = u.headers.get("content-type");
        if (u.headers.get("content-length") === "0" || u.status === 204) return {};
        if (!c || !c.includes("application/json")) return {};
      }
      return u.json();
    }).then((u) => a(u)).catch((u) => P0(u, l, n, o));
  });
}
function sf(e = "storage") {
  return {
    get: async (t, r, n, i) => Rn(t, "GET", r, n, i, void 0, e),
    post: async (t, r, n, i, s) => Rn(t, "POST", r, i, s, n, e),
    put: async (t, r, n, i, s) => Rn(t, "PUT", r, i, s, n, e),
    head: async (t, r, n, i) => Rn(t, "HEAD", r, $($({}, n), {}, { noResolveJson: !0 }), i, void 0, e),
    remove: async (t, r, n, i, s) => Rn(t, "DELETE", r, i, s, n, e)
  };
}
const A0 = sf("storage"), { get: hi, post: lt, put: Fa, head: N0, remove: Fl } = A0, Fe = sf("vectors");
var vn = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(e, t = {}, r, n = "storage") {
    this.shouldThrowOnError = !1, this.url = e, this.headers = t, this.fetch = x0(r), this.namespace = n;
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
      if (eo(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
}, I0 = class {
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
      if (eo(t)) return {
        data: null,
        error: t
      };
      throw t;
    }
  }
};
let of;
of = Symbol.toStringTag;
var $0 = class {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t, this[of] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new I0(this.downloadFn, this.shouldThrowOnError);
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
      if (eo(t)) return {
        data: null,
        error: t
      };
      throw t;
    }
  }
};
const L0 = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, wc = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var D0 = class extends vn {
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
      const o = $($({}, wc), n);
      let a = $($({}, i.headers), e === "POST" && { "x-upsert": String(o.upsert) });
      const l = o.metadata;
      typeof Blob < "u" && r instanceof Blob ? (s = new FormData(), s.append("cacheControl", o.cacheControl), l && s.append("metadata", i.encodeMetadata(l)), s.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (s = r, s.has("cacheControl") || s.append("cacheControl", o.cacheControl), l && !s.has("metadata") && s.append("metadata", i.encodeMetadata(l))) : (s = r, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType, l && (a["x-metadata"] = i.toBase64(i.encodeMetadata(l))), (typeof ReadableStream < "u" && s instanceof ReadableStream || s && typeof s == "object" && "pipe" in s && typeof s.pipe == "function") && !o.duplex && (o.duplex = "half")), n?.headers && (a = $($({}, a), n.headers));
      const u = i._removeEmptyFolders(t), c = i._getFinalPath(u), p = await (e == "PUT" ? Fa : lt)(i.fetch, `${i.url}/object/${c}`, s, $({ headers: a }, o?.duplex ? { duplex: o.duplex } : {}));
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
      const u = $({ upsert: wc.upsert }, n), c = $($({}, i.headers), { "x-upsert": String(u.upsert) });
      return typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", u.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", u.cacheControl)) : (l = r, c["cache-control"] = `max-age=${u.cacheControl}`, c["content-type"] = u.contentType), {
        path: s,
        fullPath: (await Fa(i.fetch, a.toString(), l, { headers: c })).Key
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
      const i = $({}, r.headers);
      t?.upsert && (i["x-upsert"] = "true");
      const s = await lt(r.fetch, `${r.url}/object/upload/sign/${n}`, {}, { headers: i }), o = new URL(r.url + s.url), a = o.searchParams.get("token");
      if (!a) throw new Zs("No token returned by API");
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
    return n.handleOperation(async () => await lt(n.fetch, `${n.url}/object/move`, {
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
    return n.handleOperation(async () => ({ path: (await lt(n.fetch, `${n.url}/object/copy`, {
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
      let i = n._getFinalPath(e), s = await lt(n.fetch, `${n.url}/object/sign/${i}`, $({ expiresIn: t }, r?.transform ? { transform: r.transform } : {}), { headers: n.headers });
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
      const i = await lt(n.fetch, `${n.url}/object/sign/${n.bucketId}`, {
        expiresIn: t,
        paths: e
      }, { headers: n.headers }), s = r?.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
      return i.map((o) => $($({}, o), {}, { signedUrl: o.signedURL ? encodeURI(`${n.url}${o.signedURL}${s}`) : null }));
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
    const n = typeof t?.transform < "u" ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString(t?.transform || {}), s = i ? `?${i}` : "", o = this._getFinalPath(e), a = () => hi(this.fetch, `${this.url}/${n}/${o}${s}`, {
      headers: this.headers,
      noResolveJson: !0
    }, r);
    return new $0(a, this.shouldThrowOnError);
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
    return t.handleOperation(async () => Ba(await hi(t.fetch, `${t.url}/object/info/${r}`, { headers: t.headers })));
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
      return await N0(t.fetch, `${t.url}/object/${r}`, { headers: t.headers }), {
        data: !0,
        error: null
      };
    } catch (n) {
      if (t.shouldThrowOnError) throw n;
      if (eo(n) && n instanceof nf) {
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
    return t.handleOperation(async () => await Fl(t.fetch, `${t.url}/object/${t.bucketId}`, { prefixes: e }, { headers: t.headers }));
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
      const i = $($($({}, L0), t), {}, { prefix: e || "" });
      return await lt(n.fetch, `${n.url}/object/list/${n.bucketId}`, i, { headers: n.headers }, r);
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
      const n = $({}, e);
      return await lt(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, n, { headers: r.headers }, t);
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
const U0 = "2.95.3", ki = { "X-Client-Info": `storage-js/${U0}` };
var z0 = class extends vn {
  constructor(e, t = {}, r, n) {
    const i = new URL(e);
    n?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase."));
    const s = i.href.replace(/\/$/, ""), o = $($({}, ki), t);
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
      return await hi(t.fetch, `${t.url}/bucket${r}`, { headers: t.headers });
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
    return t.handleOperation(async () => await hi(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }));
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
    return r.handleOperation(async () => await lt(r.fetch, `${r.url}/bucket`, {
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
    return r.handleOperation(async () => await Fa(r.fetch, `${r.url}/bucket/${e}`, {
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
    return t.handleOperation(async () => await lt(t.fetch, `${t.url}/bucket/${e}/empty`, {}, { headers: t.headers }));
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
    return t.handleOperation(async () => await Fl(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
  }
  listBucketOptionsToQueryString(e) {
    const t = {};
    return e && ("limit" in e && (t.limit = String(e.limit)), "offset" in e && (t.offset = String(e.offset)), e.search && (t.search = e.search), e.sortColumn && (t.sortColumn = e.sortColumn), e.sortOrder && (t.sortOrder = e.sortOrder)), Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : "";
  }
}, M0 = class extends vn {
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
    const n = e.replace(/\/$/, ""), i = $($({}, ki), t);
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
    return t.handleOperation(async () => await lt(t.fetch, `${t.url}/bucket`, { name: e }, { headers: t.headers }));
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
      return await hi(t.fetch, i, { headers: t.headers });
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
    return t.handleOperation(async () => await Fl(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
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
    if (!T0(e)) throw new Zs("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const r = new S0({
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
}, B0 = class extends vn {
  /** Creates a new VectorIndexApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = $($({}, ki), {}, { "Content-Type": "application/json" }, t);
    super(n, i, r, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(e) {
    var t = this;
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/CreateIndex`, e, { headers: t.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => await Fe.post(r.fetch, `${r.url}/GetIndex`, {
      vectorBucketName: e,
      indexName: t
    }, { headers: r.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(e) {
    var t = this;
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/ListIndexes`, e, { headers: t.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => await Fe.post(r.fetch, `${r.url}/DeleteIndex`, {
      vectorBucketName: e,
      indexName: t
    }, { headers: r.headers }) || {});
  }
}, F0 = class extends vn {
  /** Creates a new VectorDataApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = $($({}, ki), {}, { "Content-Type": "application/json" }, t);
    super(n, i, r, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(e) {
    var t = this;
    if (e.vectors.length < 1 || e.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/PutVectors`, e, { headers: t.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(e) {
    var t = this;
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/GetVectors`, e, { headers: t.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(e) {
    var t = this;
    if (e.segmentCount !== void 0) {
      if (e.segmentCount < 1 || e.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
    }
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/ListVectors`, e, { headers: t.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(e) {
    var t = this;
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/QueryVectors`, e, { headers: t.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(e) {
    var t = this;
    if (e.keys.length < 1 || e.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/DeleteVectors`, e, { headers: t.headers }) || {});
  }
}, W0 = class extends vn {
  /** Creates a new VectorBucketApi instance */
  constructor(e, t = {}, r) {
    const n = e.replace(/\/$/, ""), i = $($({}, ki), {}, { "Content-Type": "application/json" }, t);
    super(n, i, r, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: t.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(e = {}) {
    var t = this;
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/ListVectorBuckets`, e, { headers: t.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Fe.post(t.fetch, `${t.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
  }
}, V0 = class extends W0 {
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
    return new H0(this.url, this.headers, e, this.fetch);
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
}, H0 = class extends B0 {
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
    return t().call(r, $($({}, e), {}, { vectorBucketName: r.vectorBucketName }));
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
    return t().call(r, $($({}, e), {}, { vectorBucketName: r.vectorBucketName }));
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
    return new K0(this.url, this.headers, this.vectorBucketName, e, this.fetch);
  }
}, K0 = class extends F0 {
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
    return t().call(r, $($({}, e), {}, {
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
    return t().call(r, $($({}, e), {}, {
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
    return t().call(r, $($({}, e), {}, {
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
    return t().call(r, $($({}, e), {}, {
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
    return t().call(r, $($({}, e), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
}, q0 = class extends z0 {
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
    return new D0(this.url, this.headers, e, this.fetch);
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
    return new V0(this.url + "/vector", {
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
    return new M0(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const af = "2.95.3", Ur = 30 * 1e3, Wa = 3, Do = Wa * Ur, G0 = "http://localhost:9999", J0 = "supabase.auth.token", Q0 = { "X-Client-Info": `gotrue-js/${af}` }, Va = "X-Supabase-Api-Version", lf = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Y0 = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, X0 = 10 * 60 * 1e3;
class fi extends Error {
  constructor(t, r, n) {
    super(t), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = n;
  }
}
function A(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class Z0 extends fi {
  constructor(t, r, n) {
    super(t, r, n), this.name = "AuthApiError", this.status = r, this.code = n;
  }
}
function ev(e) {
  return A(e) && e.name === "AuthApiError";
}
class fr extends fi {
  constructor(t, r) {
    super(t), this.name = "AuthUnknownError", this.originalError = r;
  }
}
class At extends fi {
  constructor(t, r, n, i) {
    super(t, n, i), this.name = r, this.status = n;
  }
}
class Me extends At {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Uo(e) {
  return A(e) && e.name === "AuthSessionMissingError";
}
class Ar extends At {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class Ki extends At {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class qi extends At {
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
function tv(e) {
  return A(e) && e.name === "AuthImplicitGrantRedirectError";
}
class _c extends At {
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
class rv extends At {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class Ha extends At {
  constructor(t, r) {
    super(t, "AuthRetryableFetchError", r, void 0);
  }
}
function zo(e) {
  return A(e) && e.name === "AuthRetryableFetchError";
}
class kc extends At {
  constructor(t, r, n) {
    super(t, "AuthWeakPasswordError", r, "weak_password"), this.reasons = n;
  }
}
class Ka extends At {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const js = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), bc = ` 	
\r=`.split(""), nv = (() => {
  const e = new Array(128);
  for (let t = 0; t < e.length; t += 1)
    e[t] = -1;
  for (let t = 0; t < bc.length; t += 1)
    e[bc[t].charCodeAt(0)] = -2;
  for (let t = 0; t < js.length; t += 1)
    e[js[t].charCodeAt(0)] = t;
  return e;
})();
function Sc(e, t, r) {
  if (e !== null)
    for (t.queue = t.queue << 8 | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(js[n]), t.queuedBits -= 6;
    }
  else if (t.queuedBits > 0)
    for (t.queue = t.queue << 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(js[n]), t.queuedBits -= 6;
    }
}
function uf(e, t, r) {
  const n = nv[e];
  if (n > -1)
    for (t.queue = t.queue << 6 | n, t.queuedBits += 6; t.queuedBits >= 8; )
      r(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
  else {
    if (n === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function xc(e) {
  const t = [], r = (o) => {
    t.push(String.fromCodePoint(o));
  }, n = {
    utf8seq: 0,
    codepoint: 0
  }, i = { queue: 0, queuedBits: 0 }, s = (o) => {
    ov(o, n, r);
  };
  for (let o = 0; o < e.length; o += 1)
    uf(e.charCodeAt(o), i, s);
  return t.join("");
}
function iv(e, t) {
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
function sv(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    let n = e.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const i = (n - 55296) * 1024 & 65535;
      n = (e.charCodeAt(r + 1) - 56320 & 65535 | i) + 65536, r += 1;
    }
    iv(n, t);
  }
}
function ov(e, t, r) {
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
function on(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (i) => {
    t.push(i);
  };
  for (let i = 0; i < e.length; i += 1)
    uf(e.charCodeAt(i), r, n);
  return new Uint8Array(t);
}
function av(e) {
  const t = [];
  return sv(e, (r) => t.push(r)), new Uint8Array(t);
}
function vr(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (i) => {
    t.push(i);
  };
  return e.forEach((i) => Sc(i, r, n)), Sc(null, r, n), t.join("");
}
function lv(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function uv() {
  return Symbol("auth-callback");
}
const ye = () => typeof window < "u" && typeof document < "u", ar = {
  tested: !1,
  writable: !1
}, cf = () => {
  if (!ye())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (ar.tested)
    return ar.writable;
  const e = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), ar.tested = !0, ar.writable = !0;
  } catch {
    ar.tested = !0, ar.writable = !1;
  }
  return ar.writable;
};
function cv(e) {
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
const df = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), dv = (e) => typeof e == "object" && e !== null && "status" in e && "ok" in e && "json" in e && typeof e.json == "function", zr = async (e, t, r) => {
  await e.setItem(t, JSON.stringify(r));
}, lr = async (e, t) => {
  const r = await e.getItem(t);
  if (!r)
    return null;
  try {
    return JSON.parse(r);
  } catch {
    return r;
  }
}, ve = async (e, t) => {
  await e.removeItem(t);
};
class to {
  constructor() {
    this.promise = new to.promiseConstructor((t, r) => {
      this.resolve = t, this.reject = r;
    });
  }
}
to.promiseConstructor = Promise;
function Gi(e) {
  const t = e.split(".");
  if (t.length !== 3)
    throw new Ka("Invalid JWT structure");
  for (let n = 0; n < t.length; n++)
    if (!Y0.test(t[n]))
      throw new Ka("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(xc(t[0])),
    payload: JSON.parse(xc(t[1])),
    signature: on(t[2]),
    raw: {
      header: t[0],
      payload: t[1]
    }
  };
}
async function hv(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function fv(e, t) {
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
function pv(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function mv() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = r.length;
    let i = "";
    for (let s = 0; s < 56; s++)
      i += r.charAt(Math.floor(Math.random() * n));
    return i;
  }
  return crypto.getRandomValues(t), Array.from(t, pv).join("");
}
async function gv(e) {
  const r = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", r), i = new Uint8Array(n);
  return Array.from(i).map((s) => String.fromCharCode(s)).join("");
}
async function vv(e) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
  const r = await gv(e);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Nr(e, t, r = !1) {
  const n = mv();
  let i = n;
  r && (i += "/PASSWORD_RECOVERY"), await zr(e, `${t}-code-verifier`, i);
  const s = await vv(n);
  return [s, n === s ? "plain" : "s256"];
}
const yv = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function wv(e) {
  const t = e.headers.get(Va);
  if (!t || !t.match(yv))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function _v(e) {
  if (!e)
    throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t)
    throw new Error("JWT has expired");
}
function kv(e) {
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
const bv = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Ir(e) {
  if (!bv.test(e))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function Mo() {
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
function Sv(e, t) {
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
function Ec(e) {
  return JSON.parse(JSON.stringify(e));
}
const dr = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), xv = [502, 503, 504];
async function Tc(e) {
  var t;
  if (!dv(e))
    throw new Ha(dr(e), 0);
  if (xv.includes(e.status))
    throw new Ha(dr(e), e.status);
  let r;
  try {
    r = await e.json();
  } catch (s) {
    throw new fr(dr(s), s);
  }
  let n;
  const i = wv(e);
  if (i && i.getTime() >= lf["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code), n) {
    if (n === "weak_password")
      throw new kc(dr(r), e.status, ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
    if (n === "session_not_found")
      throw new Me();
  } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((s, o) => s && typeof o == "string", !0))
    throw new kc(dr(r), e.status, r.weak_password.reasons);
  throw new Z0(dr(r), e.status || 500, n);
}
const Ev = (e, t, r, n) => {
  const i = { method: e, headers: t?.headers || {} };
  return e === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t?.headers), i.body = JSON.stringify(n), Object.assign(Object.assign({}, i), r));
};
async function I(e, t, r, n) {
  var i;
  const s = Object.assign({}, n?.headers);
  s[Va] || (s[Va] = lf["2024-01-01"].name), n?.jwt && (s.Authorization = `Bearer ${n.jwt}`);
  const o = (i = n?.query) !== null && i !== void 0 ? i : {};
  n?.redirectTo && (o.redirect_to = n.redirectTo);
  const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", l = await Tv(e, t, r + a, {
    headers: s,
    noResolveJson: n?.noResolveJson
  }, {}, n?.body);
  return n?.xform ? n?.xform(l) : { data: Object.assign({}, l), error: null };
}
async function Tv(e, t, r, n, i, s) {
  const o = Ev(t, n, i, s);
  let a;
  try {
    a = await e(r, Object.assign({}, o));
  } catch (l) {
    throw console.error(l), new Ha(dr(l), 0);
  }
  if (a.ok || await Tc(a), n?.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await Tc(l);
  }
}
function ot(e) {
  var t;
  let r = null;
  Rv(e) && (r = Object.assign({}, e), e.expires_at || (r.expires_at = lv(e.expires_in)));
  const n = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: r, user: n }, error: null };
}
function Cc(e) {
  const t = ot(e);
  return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) && (t.data.weak_password = e.weak_password), t;
}
function Ft(e) {
  var t;
  return { data: { user: (t = e.user) !== null && t !== void 0 ? t : e }, error: null };
}
function Cv(e) {
  return { data: e, error: null };
}
function Ov(e) {
  const { action_link: t, email_otp: r, hashed_token: n, redirect_to: i, verification_type: s } = e, o = Xs(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
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
function Oc(e) {
  return e;
}
function Rv(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
const Bo = ["global", "local", "others"];
class Pv {
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
    this.url = t, this.headers = r, this.fetch = df(n), this.mfa = {
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
  async signOut(t, r = Bo[0]) {
    if (Bo.indexOf(r) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Bo.join(", ")}`);
    try {
      return await I(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
        headers: this.headers,
        jwt: t,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (A(n))
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
      return await I(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Ft
      });
    } catch (n) {
      if (A(n))
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
      const { options: r } = t, n = Xs(t, ["options"]), i = Object.assign(Object.assign({}, n), r);
      return "newEmail" in n && (i.new_email = n?.newEmail, delete i.newEmail), await I(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: i,
        headers: this.headers,
        xform: Ov,
        redirectTo: r?.redirectTo
      });
    } catch (r) {
      if (A(r))
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
      return await I(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Ft
      });
    } catch (r) {
      if (A(r))
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
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await I(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (s = (i = t?.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: Oc
      });
      if (c.error)
        throw c.error;
      const p = await c.json(), f = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, d = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((y) => {
        const v = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)), _ = JSON.parse(y.split(";")[1].split("=")[1]);
        u[`${_}Page`] = v;
      }), u.total = parseInt(f)), { data: Object.assign(Object.assign({}, p), u), error: null };
    } catch (u) {
      if (A(u))
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
    Ir(t);
    try {
      return await I(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Ft
      });
    } catch (r) {
      if (A(r))
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
    Ir(t);
    try {
      return await I(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: r,
        headers: this.headers,
        xform: Ft
      });
    } catch (n) {
      if (A(n))
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
    Ir(t);
    try {
      return await I(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: {
          should_soft_delete: r
        },
        xform: Ft
      });
    } catch (n) {
      if (A(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(t) {
    Ir(t.userId);
    try {
      const { data: r, error: n } = await I(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
        headers: this.headers,
        xform: (i) => ({ data: { factors: i }, error: null })
      });
      return { data: r, error: n };
    } catch (r) {
      if (A(r))
        return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(t) {
    Ir(t.userId), Ir(t.id);
    try {
      return { data: await I(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
        headers: this.headers
      }), error: null };
    } catch (r) {
      if (A(r))
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
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await I(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (s = (i = t?.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: Oc
      });
      if (c.error)
        throw c.error;
      const p = await c.json(), f = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, d = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((y) => {
        const v = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)), _ = JSON.parse(y.split(";")[1].split("=")[1]);
        u[`${_}Page`] = v;
      }), u.total = parseInt(f)), { data: Object.assign(Object.assign({}, p), u), error: null };
    } catch (u) {
      if (A(u))
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
      return await I(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (A(r))
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
      return await I(this.fetch, "GET", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (A(r))
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
      return await I(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${t}`, {
        body: r,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (A(n))
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
      return await I(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (A(r))
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
      return await I(this.fetch, "POST", `${this.url}/admin/oauth/clients/${t}/regenerate_secret`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (A(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
function Rc(e = {}) {
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
const $r = {
  /**
   * @experimental
   */
  debug: !!(globalThis && cf() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class hf extends Error {
  constructor(t) {
    super(t), this.isAcquireTimeout = !0;
  }
}
class jv extends hf {
}
async function Av(e, t, r) {
  $r.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const n = new globalThis.AbortController();
  return t > 0 && setTimeout(() => {
    n.abort(), $r.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e);
  }, t), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, t === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: n.signal
  }, async (i) => {
    if (i) {
      $r.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, i.name);
      try {
        return await r();
      } finally {
        $r.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, i.name);
      }
    } else {
      if (t === 0)
        throw $r.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new jv(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
      if ($r.debug)
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
function Nv() {
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
function ff(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function Iv(e) {
  return parseInt(e, 16);
}
function $v(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Lv(e) {
  var t;
  const { chainId: r, domain: n, expirationTime: i, issuedAt: s = /* @__PURE__ */ new Date(), nonce: o, notBefore: a, requestId: l, resources: u, scheme: c, uri: p, version: f } = e;
  {
    if (!Number.isInteger(r))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
    if (!n)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (o && o.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
    if (!p)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (f !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);
    if (!((t = e.statement) === null || t === void 0) && t.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
  }
  const d = ff(e.address), y = c ? `${c}://${n}` : n, v = e.statement ? `${e.statement}
` : "", _ = `${y} wants you to sign in with your Ethereum account:
${d}

${v}`;
  let g = `URI: ${p}
Version: ${f}
Chain ID: ${r}${o ? `
Nonce: ${o}` : ""}
Issued At: ${s.toISOString()}`;
  if (i && (g += `
Expiration Time: ${i.toISOString()}`), a && (g += `
Not Before: ${a.toISOString()}`), l && (g += `
Request ID: ${l}`), u) {
    let h = `
Resources:`;
    for (const m of u) {
      if (!m || typeof m != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${m}`);
      h += `
- ${m}`;
    }
    g += h;
  }
  return `${_}
${g}`;
}
class ue extends Error {
  constructor({ message: t, code: r, cause: n, name: i }) {
    var s;
    super(t, { cause: n }), this.__isWebAuthnError = !0, this.name = (s = i ?? (n instanceof Error ? n.name : void 0)) !== null && s !== void 0 ? s : "Unknown Error", this.code = r;
  }
}
class As extends ue {
  constructor(t, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: t
    }), this.name = "WebAuthnUnknownError", this.originalError = r;
  }
}
function Dv({ error: e, options: t }) {
  var r, n, i;
  const { publicKey: s } = t;
  if (!s)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new ue({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else if (e.name === "ConstraintError") {
    if (((r = s.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
      return new ue({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      t.mediation === "conditional" && ((n = s.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required"
    )
      return new ue({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e
      });
    if (((i = s.authenticatorSelection) === null || i === void 0 ? void 0 : i.userVerification) === "required")
      return new ue({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e
      });
  } else {
    if (e.name === "InvalidStateError")
      return new ue({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e
      });
    if (e.name === "NotAllowedError")
      return new ue({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "NotSupportedError")
      return s.pubKeyCredParams.filter((a) => a.type === "public-key").length === 0 ? new ue({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: e
      }) : new ue({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: e
      });
    if (e.name === "SecurityError") {
      const o = window.location.hostname;
      if (pf(o)) {
        if (s.rp.id !== o)
          return new ue({
            message: `The RP ID "${s.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new ue({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "TypeError") {
      if (s.user.id.byteLength < 1 || s.user.id.byteLength > 64)
        return new ue({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e
        });
    } else if (e.name === "UnknownError")
      return new ue({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new ue({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
function Uv({ error: e, options: t }) {
  const { publicKey: r } = t;
  if (!r)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new ue({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else {
    if (e.name === "NotAllowedError")
      return new ue({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "SecurityError") {
      const n = window.location.hostname;
      if (pf(n)) {
        if (r.rpId !== n)
          return new ue({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new ue({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "UnknownError")
      return new ue({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new ue({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
class zv {
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
const Mv = new zv();
function Bv(e) {
  if (!e)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      e
    );
  const { challenge: t, user: r, excludeCredentials: n } = e, i = Xs(
    e,
    ["challenge", "user", "excludeCredentials"]
  ), s = on(t).buffer, o = Object.assign(Object.assign({}, r), { id: on(r.id).buffer }), a = Object.assign(Object.assign({}, i), {
    challenge: s,
    user: o
  });
  if (n && n.length > 0) {
    a.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: on(u.id).buffer,
        type: u.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: u.transports
      });
    }
  }
  return a;
}
function Fv(e) {
  if (!e)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: r } = e, n = Xs(
    e,
    ["challenge", "allowCredentials"]
  ), i = on(t).buffer, s = Object.assign(Object.assign({}, n), { challenge: i });
  if (r && r.length > 0) {
    s.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      s.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: on(a.id).buffer,
        type: a.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: a.transports
      });
    }
  }
  return s;
}
function Wv(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: vr(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: vr(new Uint8Array(e.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function Vv(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e, n = e.getClientExtensionResults(), i = e.response;
  return {
    id: e.id,
    rawId: e.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: vr(new Uint8Array(i.authenticatorData)),
      clientDataJSON: vr(new Uint8Array(i.clientDataJSON)),
      signature: vr(new Uint8Array(i.signature)),
      userHandle: i.userHandle ? vr(new Uint8Array(i.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: n,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function pf(e) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
  );
}
function Pc() {
  var e, t;
  return !!(ye() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.create) == "function" && typeof ((t = navigator?.credentials) === null || t === void 0 ? void 0 : t.get) == "function");
}
async function Hv(e) {
  try {
    const t = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new As("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new As("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: Dv({
        error: t,
        options: e
      })
    };
  }
}
async function Kv(e) {
  try {
    const t = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new As("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new As("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: Uv({
        error: t,
        options: e
      })
    };
  }
}
const qv = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, Gv = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function Ns(...e) {
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
            t(a) ? n[s] = Ns(a, o) : n[s] = Ns(o);
          } else
            n[s] = o;
      }
  return n;
}
function Jv(e, t) {
  return Ns(qv, e, t || {});
}
function Qv(e, t) {
  return Ns(Gv, e, t || {});
}
class Yv {
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
      const u = i ?? Mv.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: c } = a.webauthn.credential_options.publicKey;
        if (!c.name) {
          const p = n;
          if (p)
            c.name = `${c.id}:${p}`;
          else {
            const d = (await this.client.getUser()).data.user, y = ((o = d?.user_metadata) === null || o === void 0 ? void 0 : o.name) || d?.email || d?.id || "User";
            c.name = `${c.id}:${y}`;
          }
        }
        c.displayName || (c.displayName = c.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const c = Jv(a.webauthn.credential_options.publicKey, s?.create), { data: p, error: f } = await Hv({
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
          } : { data: null, error: f };
        }
        case "request": {
          const c = Qv(a.webauthn.credential_options.publicKey, s?.request), { data: p, error: f } = await Kv(Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: c, signal: u }));
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
          } : { data: null, error: f };
        }
      }
    } catch (a) {
      return A(a) ? { data: null, error: a } : {
        data: null,
        error: new fr("Unexpected error in challenge", a)
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
        error: new fi("rpId is required for WebAuthn authentication")
      };
    try {
      if (!Pc())
        return {
          data: null,
          error: new fr("Browser does not support WebAuthn", null)
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
      return A(o) ? { data: null, error: o } : {
        data: null,
        error: new fr("Unexpected error in authenticate", o)
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
        error: new fi("rpId is required for WebAuthn registration")
      };
    try {
      if (!Pc())
        return {
          data: null,
          error: new fr("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this._enroll({
        friendlyName: t
      });
      if (!o)
        return await this.client.mfa.listFactors().then((c) => {
          var p;
          return (p = c.data) === null || p === void 0 ? void 0 : p.all.find((f) => f.factor_type === "webauthn" && f.friendly_name === t && f.status !== "unverified");
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
      return A(o) ? { data: null, error: o } : {
        data: null,
        error: new fr("Unexpected error in register", o)
      };
    }
  }
}
Nv();
const Xv = {
  url: G0,
  storageKey: J0,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Q0,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 1e4
  // 10 seconds
};
async function jc(e, t, r) {
  return await r();
}
const Lr = {};
class pi {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var t, r;
    return (r = (t = Lr[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null && r !== void 0 ? r : { keys: [] };
  }
  set jwks(t) {
    Lr[this.storageKey] = Object.assign(Object.assign({}, Lr[this.storageKey]), { jwks: t });
  }
  get jwks_cached_at() {
    var t, r;
    return (r = (t = Lr[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    Lr[this.storageKey] = Object.assign(Object.assign({}, Lr[this.storageKey]), { cachedAt: t });
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
    const s = Object.assign(Object.assign({}, Xv), t);
    if (this.storageKey = s.storageKey, this.instanceID = (r = pi.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, pi.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!s.debug, typeof s.debug == "function" && (this.logger = s.debug), this.instanceID > 0 && ye()) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(o), this.logDebugMessages && console.trace(o);
    }
    if (this.persistSession = s.persistSession, this.autoRefreshToken = s.autoRefreshToken, this.admin = new Pv({
      url: s.url,
      headers: s.headers,
      fetch: s.fetch
    }), this.url = s.url, this.headers = s.headers, this.fetch = df(s.fetch), this.lock = s.lock || jc, this.detectSessionInUrl = s.detectSessionInUrl, this.flowType = s.flowType, this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader, this.throwOnError = s.throwOnError, this.lockAcquireTimeout = s.lockAcquireTimeout, s.lock ? this.lock = s.lock : this.persistSession && ye() && (!((n = globalThis?.navigator) === null || n === void 0) && n.locks) ? this.lock = Av : this.lock = jc, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Yv(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.persistSession ? (s.storage ? this.storage = s.storage : cf() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Rc(this.memoryStorage)), s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {}, this.storage = Rc(this.memoryStorage)), ye() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${af}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
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
      if (ye() && (r = cv(window.location.href), this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce")), ye() && this.detectSessionInUrl && n !== "none") {
        const { data: i, error: s } = await this._getSessionFromURL(r, n);
        if (s) {
          if (this._debug("#_initialize()", "error detecting session from URL", s), tv(s)) {
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
      return A(r) ? this._returnResult({ error: r }) : this._returnResult({
        error: new fr("Unexpected error during initialization", r)
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
      const s = await I(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (n = (r = t?.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
          gotrue_meta_security: { captcha_token: (i = t?.options) === null || i === void 0 ? void 0 : i.captchaToken }
        },
        xform: ot
      }), { data: o, error: a } = s;
      if (a || !o)
        return this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (s) {
      if (A(s))
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
        const { email: c, password: p, options: f } = t;
        let d = null, y = null;
        this.flowType === "pkce" && ([d, y] = await Nr(this.storage, this.storageKey)), s = await I(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: f?.emailRedirectTo,
          body: {
            email: c,
            password: p,
            data: (r = f?.data) !== null && r !== void 0 ? r : {},
            gotrue_meta_security: { captcha_token: f?.captchaToken },
            code_challenge: d,
            code_challenge_method: y
          },
          xform: ot
        });
      } else if ("phone" in t) {
        const { phone: c, password: p, options: f } = t;
        s = await I(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: p,
            data: (n = f?.data) !== null && n !== void 0 ? n : {},
            channel: (i = f?.channel) !== null && i !== void 0 ? i : "sms",
            gotrue_meta_security: { captcha_token: f?.captchaToken }
          },
          xform: ot
        });
      } else
        throw new Ki("You must provide either an email or phone number and a password");
      const { data: o, error: a } = s;
      if (a || !o)
        return await ve(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (s) {
      if (await ve(this.storage, `${this.storageKey}-code-verifier`), A(s))
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
        r = await I(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: s,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Cc
        });
      } else if ("phone" in t) {
        const { phone: s, password: o, options: a } = t;
        r = await I(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: s,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Cc
        });
      } else
        throw new Ki("You must provide either an email or phone number and a password");
      const { data: n, error: i } = r;
      if (i)
        return this._returnResult({ data: { user: null, session: null }, error: i });
      if (!n || !n.session || !n.user) {
        const s = new Ar();
        return this._returnResult({ data: { user: null, session: null }, error: s });
      }
      return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), this._returnResult({
        data: Object.assign({ user: n.user, session: n.session }, n.weak_password ? { weakPassword: n.weak_password } : null),
        error: i
      });
    } catch (r) {
      if (A(r))
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
    var r, n, i, s, o, a, l, u, c, p, f;
    let d, y;
    if ("message" in t)
      d = t.message, y = t.signature;
    else {
      const { chain: v, wallet: _, statement: g, options: h } = t;
      let m;
      if (ye())
        if (typeof _ == "object")
          m = _;
        else {
          const U = window;
          if ("ethereum" in U && typeof U.ethereum == "object" && "request" in U.ethereum && typeof U.ethereum.request == "function")
            m = U.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof _ != "object" || !h?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        m = _;
      }
      const w = new URL((r = h?.url) !== null && r !== void 0 ? r : window.location.href), x = await m.request({
        method: "eth_requestAccounts"
      }).then((U) => U).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!x || x.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const k = ff(x[0]);
      let E = (n = h?.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
      if (!E) {
        const U = await m.request({
          method: "eth_chainId"
        });
        E = Iv(U);
      }
      const R = {
        domain: w.host,
        address: k,
        statement: g,
        uri: w.href,
        version: "1",
        chainId: E,
        nonce: (i = h?.signInWithEthereum) === null || i === void 0 ? void 0 : i.nonce,
        issuedAt: (o = (s = h?.signInWithEthereum) === null || s === void 0 ? void 0 : s.issuedAt) !== null && o !== void 0 ? o : /* @__PURE__ */ new Date(),
        expirationTime: (a = h?.signInWithEthereum) === null || a === void 0 ? void 0 : a.expirationTime,
        notBefore: (l = h?.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (u = h?.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
        resources: (c = h?.signInWithEthereum) === null || c === void 0 ? void 0 : c.resources
      };
      d = Lv(R), y = await m.request({
        method: "personal_sign",
        params: [$v(d), k]
      });
    }
    try {
      const { data: v, error: _ } = await I(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: d,
          signature: y
        }, !((p = t.options) === null || p === void 0) && p.captchaToken ? { gotrue_meta_security: { captcha_token: (f = t.options) === null || f === void 0 ? void 0 : f.captchaToken } } : null),
        xform: ot
      });
      if (_)
        throw _;
      if (!v || !v.session || !v.user) {
        const g = new Ar();
        return this._returnResult({ data: { user: null, session: null }, error: g });
      }
      return v.session && (await this._saveSession(v.session), await this._notifyAllSubscribers("SIGNED_IN", v.session)), this._returnResult({ data: Object.assign({}, v), error: _ });
    } catch (v) {
      if (A(v))
        return this._returnResult({ data: { user: null, session: null }, error: v });
      throw v;
    }
  }
  async signInWithSolana(t) {
    var r, n, i, s, o, a, l, u, c, p, f, d;
    let y, v;
    if ("message" in t)
      y = t.message, v = t.signature;
    else {
      const { chain: _, wallet: g, statement: h, options: m } = t;
      let w;
      if (ye())
        if (typeof g == "object")
          w = g;
        else {
          const k = window;
          if ("solana" in k && typeof k.solana == "object" && ("signIn" in k.solana && typeof k.solana.signIn == "function" || "signMessage" in k.solana && typeof k.solana.signMessage == "function"))
            w = k.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof g != "object" || !m?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        w = g;
      }
      const x = new URL((r = m?.url) !== null && r !== void 0 ? r : window.location.href);
      if ("signIn" in w && w.signIn) {
        const k = await w.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, m?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: x.host,
          uri: x.href
        }), h ? { statement: h } : null));
        let E;
        if (Array.isArray(k) && k[0] && typeof k[0] == "object")
          E = k[0];
        else if (k && typeof k == "object" && "signedMessage" in k && "signature" in k)
          E = k;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in E && "signature" in E && (typeof E.signedMessage == "string" || E.signedMessage instanceof Uint8Array) && E.signature instanceof Uint8Array)
          y = typeof E.signedMessage == "string" ? E.signedMessage : new TextDecoder().decode(E.signedMessage), v = E.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in w) || typeof w.signMessage != "function" || !("publicKey" in w) || typeof w != "object" || !w.publicKey || !("toBase58" in w.publicKey) || typeof w.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        y = [
          `${x.host} wants you to sign in with your Solana account:`,
          w.publicKey.toBase58(),
          ...h ? ["", h, ""] : [""],
          "Version: 1",
          `URI: ${x.href}`,
          `Issued At: ${(i = (n = m?.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && i !== void 0 ? i : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((s = m?.signInWithSolana) === null || s === void 0) && s.notBefore ? [`Not Before: ${m.signInWithSolana.notBefore}`] : [],
          ...!((o = m?.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${m.signInWithSolana.expirationTime}`] : [],
          ...!((a = m?.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${m.signInWithSolana.chainId}`] : [],
          ...!((l = m?.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${m.signInWithSolana.nonce}`] : [],
          ...!((u = m?.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${m.signInWithSolana.requestId}`] : [],
          ...!((p = (c = m?.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || p === void 0) && p.length ? [
            "Resources",
            ...m.signInWithSolana.resources.map((E) => `- ${E}`)
          ] : []
        ].join(`
`);
        const k = await w.signMessage(new TextEncoder().encode(y), "utf8");
        if (!k || !(k instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        v = k;
      }
    }
    try {
      const { data: _, error: g } = await I(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: y, signature: vr(v) }, !((f = t.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (d = t.options) === null || d === void 0 ? void 0 : d.captchaToken } } : null),
        xform: ot
      });
      if (g)
        throw g;
      if (!_ || !_.session || !_.user) {
        const h = new Ar();
        return this._returnResult({ data: { user: null, session: null }, error: h });
      }
      return _.session && (await this._saveSession(_.session), await this._notifyAllSubscribers("SIGNED_IN", _.session)), this._returnResult({ data: Object.assign({}, _), error: g });
    } catch (_) {
      if (A(_))
        return this._returnResult({ data: { user: null, session: null }, error: _ });
      throw _;
    }
  }
  async _exchangeCodeForSession(t) {
    const r = await lr(this.storage, `${this.storageKey}-code-verifier`), [n, i] = (r ?? "").split("/");
    try {
      if (!n && this.flowType === "pkce")
        throw new rv();
      const { data: s, error: o } = await I(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: t,
          code_verifier: n
        },
        xform: ot
      });
      if (await ve(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      if (!s || !s.session || !s.user) {
        const a = new Ar();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a
        });
      }
      return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), this._returnResult({ data: Object.assign(Object.assign({}, s), { redirectType: i ?? null }), error: o });
    } catch (s) {
      if (await ve(this.storage, `${this.storageKey}-code-verifier`), A(s))
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
      const { options: r, provider: n, token: i, access_token: s, nonce: o } = t, a = await I(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: n,
          id_token: i,
          access_token: s,
          nonce: o,
          gotrue_meta_security: { captcha_token: r?.captchaToken }
        },
        xform: ot
      }), { data: l, error: u } = a;
      if (u)
        return this._returnResult({ data: { user: null, session: null }, error: u });
      if (!l || !l.session || !l.user) {
        const c = new Ar();
        return this._returnResult({ data: { user: null, session: null }, error: c });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: u });
    } catch (r) {
      if (A(r))
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
        this.flowType === "pkce" && ([u, c] = await Nr(this.storage, this.storageKey));
        const { error: p } = await I(this.fetch, "POST", `${this.url}/otp`, {
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
        const { phone: a, options: l } = t, { data: u, error: c } = await I(this.fetch, "POST", `${this.url}/otp`, {
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
      throw new Ki("You must provide either an email or phone number.");
    } catch (a) {
      if (await ve(this.storage, `${this.storageKey}-code-verifier`), A(a))
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
      const { data: o, error: a } = await I(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, t), { gotrue_meta_security: { captcha_token: s } }),
        redirectTo: i,
        xform: ot
      });
      if (a)
        throw a;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const l = o.session, u = o.user;
      return l?.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (A(i))
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
      this.flowType === "pkce" && ([a, l] = await Nr(this.storage, this.storageKey));
      const u = await I(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in t ? { provider_id: t.providerId } : null), "domain" in t ? { domain: t.domain } : null), { redirect_to: (n = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0 }), !((i = t?.options) === null || i === void 0) && i.captchaToken ? { gotrue_meta_security: { captcha_token: t.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: a, code_challenge_method: l }),
        headers: this.headers,
        xform: Cv
      });
      return !((s = u.data) === null || s === void 0) && s.url && ye() && !(!((o = t.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(u.data.url), this._returnResult(u);
    } catch (a) {
      if (await ve(this.storage, `${this.storageKey}-code-verifier`), A(a))
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
          throw new Me();
        const { error: i } = await I(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: r.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: i });
      });
    } catch (t) {
      if (A(t))
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
        const { email: n, type: i, options: s } = t, { error: o } = await I(this.fetch, "POST", r, {
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
        const { phone: n, type: i, options: s } = t, { data: o, error: a } = await I(this.fetch, "POST", r, {
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
      throw new Ki("You must provide either an email or phone number and a type");
    } catch (r) {
      if (A(r))
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
      const r = await lr(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? t = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !t)
        return { data: { session: null }, error: null };
      const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < Do : !1;
      if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", t.expires_at), !n) {
        if (this.userStorage) {
          const o = await lr(this.userStorage, this.storageKey + "-user");
          o?.user ? t.user = o.user : t.user = Mo();
        }
        if (this.storage.isServer && t.user && !t.user.__isUserNotAvailableProxy) {
          const o = { value: this.suppressGetSessionWarning };
          t.user = Sv(t.user, o), o.value && (this.suppressGetSessionWarning = !0);
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
      return t ? await I(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: t,
        xform: Ft
      }) : await this._useSession(async (r) => {
        var n, i, s;
        const { data: o, error: a } = r;
        if (a)
          throw a;
        return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Me() } : await I(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (s = (i = o.session) === null || i === void 0 ? void 0 : i.access_token) !== null && s !== void 0 ? s : void 0,
          xform: Ft
        });
      });
    } catch (r) {
      if (A(r))
        return Uo(r) && (await this._removeSession(), await ve(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: r });
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
          throw new Me();
        const o = i.session;
        let a = null, l = null;
        this.flowType === "pkce" && t.email != null && ([a, l] = await Nr(this.storage, this.storageKey));
        const { data: u, error: c } = await I(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: r?.emailRedirectTo,
          body: Object.assign(Object.assign({}, t), { code_challenge: a, code_challenge_method: l }),
          jwt: o.access_token,
          xform: Ft
        });
        if (c)
          throw c;
        return o.user = u.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), this._returnResult({ data: { user: o.user }, error: null });
      });
    } catch (n) {
      if (await ve(this.storage, `${this.storageKey}-code-verifier`), A(n))
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
        throw new Me();
      const r = Date.now() / 1e3;
      let n = r, i = !0, s = null;
      const { payload: o } = Gi(t.access_token);
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
      if (A(r))
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
          throw new Me();
        const { data: i, error: s } = await this._callRefreshToken(t.refresh_token);
        return s ? this._returnResult({ data: { user: null, session: null }, error: s }) : i ? this._returnResult({ data: { user: i.user, session: i }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (r) {
      if (A(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(t, r) {
    try {
      if (!ye())
        throw new qi("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new qi(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code"
        });
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new _c("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new qi("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
          throw new _c("No code detected.");
        const { data: h, error: m } = await this._exchangeCodeForSession(t.code);
        if (m)
          throw m;
        const w = new URL(window.location.href);
        return w.searchParams.delete("code"), window.history.replaceState(window.history.state, "", w.toString()), { data: { session: h.session, redirectType: null }, error: null };
      }
      const { provider_token: n, provider_refresh_token: i, access_token: s, refresh_token: o, expires_in: a, expires_at: l, token_type: u } = t;
      if (!s || !a || !o || !u)
        throw new qi("No session defined in URL");
      const c = Math.round(Date.now() / 1e3), p = parseInt(a);
      let f = c + p;
      l && (f = parseInt(l));
      const d = f - c;
      d * 1e3 <= Ur && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${p}s`);
      const y = f - p;
      c - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, f, c) : c - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, f, c);
      const { data: v, error: _ } = await this._getUser(s);
      if (_)
        throw _;
      const g = {
        provider_token: n,
        provider_refresh_token: i,
        access_token: s,
        expires_in: p,
        expires_at: f,
        refresh_token: o,
        token_type: u,
        user: v.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: g, redirectType: t.type }, error: null });
    } catch (n) {
      if (A(n))
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
    const r = await lr(this.storage, `${this.storageKey}-code-verifier`);
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
      if (s && !Uo(s))
        return this._returnResult({ error: s });
      const o = (n = i.session) === null || n === void 0 ? void 0 : n.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, t);
        if (a && !(ev(a) && (a.status === 404 || a.status === 401 || a.status === 403) || Uo(a)))
          return this._returnResult({ error: a });
      }
      return t !== "others" && (await this._removeSession(), await ve(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(t) {
    const r = uv(), n = {
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
    this.flowType === "pkce" && ([n, i] = await Nr(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await I(this.fetch, "POST", `${this.url}/recover`, {
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
      if (await ve(this.storage, `${this.storageKey}-code-verifier`), A(s))
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
      if (A(r))
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
        const { data: p, error: f } = s;
        if (f)
          throw f;
        const d = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
          redirectTo: (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await I(this.fetch, "GET", d, {
          headers: this.headers,
          jwt: (c = (u = p.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
        });
      });
      if (i)
        throw i;
      return ye() && !(!((r = t.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n?.url), this._returnResult({
        data: { provider: t.provider, url: n?.url },
        error: null
      });
    } catch (n) {
      if (A(n))
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
        const { options: o, provider: a, token: l, access_token: u, nonce: c } = t, p = await I(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
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
          xform: ot
        }), { data: f, error: d } = p;
        return d ? this._returnResult({ data: { user: null, session: null }, error: d }) : !f || !f.session || !f.user ? this._returnResult({
          data: { user: null, session: null },
          error: new Ar()
        }) : (f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("USER_UPDATED", f.session)), this._returnResult({ data: f, error: d }));
      } catch (i) {
        if (await ve(this.storage, `${this.storageKey}-code-verifier`), A(i))
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
        return await I(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
          headers: this.headers,
          jwt: (i = (n = s.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0
        });
      });
    } catch (r) {
      if (A(r))
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
      return await fv(async (i) => (i > 0 && await hv(200 * Math.pow(2, i - 1)), this._debug(r, "refreshing attempt", i), await I(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: t },
        headers: this.headers,
        xform: ot
      })), (i, s) => {
        const o = 200 * Math.pow(2, i);
        return s && zo(s) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - n < Ur;
      });
    } catch (n) {
      if (this._debug(r, "error", n), A(n))
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
    return this._debug("#_handleProviderSignIn()", "provider", t, "options", r, "url", n), ye() && !r.skipBrowserRedirect && window.location.assign(n), { data: { provider: t, url: n }, error: null };
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
      const i = await lr(this.storage, this.storageKey);
      if (i && this.userStorage) {
        let o = await lr(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = { user: i.user }, await zr(this.userStorage, this.storageKey + "-user", o)), i.user = (t = o?.user) !== null && t !== void 0 ? t : Mo();
      } else if (i && !i.user && !i.user) {
        const o = await lr(this.storage, this.storageKey + "-user");
        o && o?.user ? (i.user = o.user, await ve(this.storage, this.storageKey + "-user"), await zr(this.storage, this.storageKey, i)) : i.user = Mo();
      }
      if (this._debug(n, "session from storage", i), !this._isValidSession(i)) {
        this._debug(n, "session is not valid"), i !== null && await this._removeSession();
        return;
      }
      const s = ((r = i.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < Do;
      if (this._debug(n, `session has${s ? "" : " not"} expired with margin of ${Do}s`), s) {
        if (this.autoRefreshToken && i.refresh_token) {
          const { error: o } = await this._callRefreshToken(i.refresh_token);
          o && (console.error(o), zo(o) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
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
      throw new Me();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new to();
      const { data: s, error: o } = await this._refreshAccessToken(t);
      if (o)
        throw o;
      if (!s.session)
        throw new Me();
      await this._saveSession(s.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
      const a = { data: s.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (s) {
      if (this._debug(i, "error", s), A(s)) {
        const o = { data: null, error: s };
        return zo(s) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o), o;
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
    this._debug("#_saveSession()", t), this.suppressGetSessionWarning = !0, await ve(this.storage, `${this.storageKey}-code-verifier`);
    const r = Object.assign({}, t), n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n && r.user && await zr(this.userStorage, this.storageKey + "-user", {
        user: r.user
      });
      const i = Object.assign({}, r);
      delete i.user;
      const s = Ec(i);
      await zr(this.storage, this.storageKey, s);
    } else {
      const i = Ec(r);
      await zr(this.storage, this.storageKey, i);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await ve(this.storage, this.storageKey), await ve(this.storage, this.storageKey + "-code-verifier"), await ve(this.storage, this.storageKey + "-user"), this.userStorage && await ve(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
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
      t && ye() && window?.removeEventListener && window.removeEventListener("visibilitychange", t);
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
    const t = setInterval(() => this._autoRefreshTokenTick(), Ur);
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
              const i = Math.floor((n.expires_at * 1e3 - t) / Ur);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts ${Ur}ms, refresh threshold is ${Wa} ticks`), i <= Wa && await this._callRefreshToken(n.refresh_token);
            });
          } catch (r) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof hf)
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
    if (this._debug("#_handleVisibilityChange()"), !ye() || !window?.addEventListener)
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
      const [s, o] = await Nr(this.storage, this.storageKey), a = new URLSearchParams({
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
        return s ? this._returnResult({ data: null, error: s }) : await I(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
          headers: this.headers,
          jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
        });
      });
    } catch (r) {
      if (A(r))
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
        const a = Object.assign({ friendly_name: t.friendlyName, factor_type: t.factorType }, t.factorType === "phone" ? { phone: t.phone } : t.factorType === "totp" ? { issuer: t.issuer } : {}), { data: l, error: u } = await I(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (n = s?.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return u ? this._returnResult({ data: null, error: u }) : (t.factorType === "totp" && l.type === "totp" && (!((i = l?.totp) === null || i === void 0) && i.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (A(r))
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
            webauthn: Object.assign(Object.assign({}, t.webauthn), { credential_response: t.webauthn.type === "create" ? Wv(t.webauthn.credential_response) : Vv(t.webauthn.credential_response) })
          } : { code: t.code }), { data: a, error: l } = await I(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
            body: o,
            headers: this.headers,
            jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), this._returnResult({ data: a, error: l }));
        });
      } catch (r) {
        if (A(r))
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
          const o = await I(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
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
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: Bv(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: Fv(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (r) {
        if (A(r))
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
        const { payload: d } = Gi(t);
        let y = null;
        d.aal && (y = d.aal);
        let v = y;
        const { data: { user: _ }, error: g } = await this.getUser(t);
        if (g)
          return this._returnResult({ data: null, error: g });
        ((n = (r = _?.factors) === null || r === void 0 ? void 0 : r.filter((w) => w.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (v = "aal2");
        const m = d.amr || [];
        return { data: { currentLevel: y, nextLevel: v, currentAuthenticationMethods: m }, error: null };
      } catch (d) {
        if (A(d))
          return this._returnResult({ data: null, error: d });
        throw d;
      }
    const { data: { session: o }, error: a } = await this.getSession();
    if (a)
      return this._returnResult({ data: null, error: a });
    if (!o)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: l } = Gi(o.access_token);
    let u = null;
    l.aal && (u = l.aal);
    let c = u;
    ((s = (i = o.user.factors) === null || i === void 0 ? void 0 : i.filter((d) => d.status === "verified")) !== null && s !== void 0 ? s : []).length > 0 && (c = "aal2");
    const f = l.amr || [];
    return { data: { currentLevel: u, nextLevel: c, currentAuthenticationMethods: f }, error: null };
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
        return i ? this._returnResult({ data: null, error: i }) : n ? await I(this.fetch, "GET", `${this.url}/oauth/authorizations/${t}`, {
          headers: this.headers,
          jwt: n.access_token,
          xform: (s) => ({ data: s, error: null })
        }) : this._returnResult({ data: null, error: new Me() });
      });
    } catch (r) {
      if (A(r))
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
          return this._returnResult({ data: null, error: new Me() });
        const o = await I(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "approve" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && ye() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (A(n))
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
          return this._returnResult({ data: null, error: new Me() });
        const o = await I(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "deny" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && ye() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (A(n))
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
        return n ? this._returnResult({ data: null, error: n }) : r ? await I(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new Me() });
      });
    } catch (t) {
      if (A(t))
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
        return i ? this._returnResult({ data: null, error: i }) : n ? (await I(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: n.access_token,
          query: { client_id: t.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new Me() });
      });
    } catch (r) {
      if (A(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(t, r = { keys: [] }) {
    let n = r.keys.find((a) => a.kid === t);
    if (n)
      return n;
    const i = Date.now();
    if (n = this.jwks.keys.find((a) => a.kid === t), n && this.jwks_cached_at + X0 > i)
      return n;
    const { data: s, error: o } = await I(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
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
        const { data: d, error: y } = await this.getSession();
        if (y || !d.session)
          return this._returnResult({ data: null, error: y });
        n = d.session.access_token;
      }
      const { header: i, payload: s, signature: o, raw: { header: a, payload: l } } = Gi(n);
      r?.allowExpired || _v(s.exp);
      const u = !i.alg || i.alg.startsWith("HS") || !i.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(i.kid, r?.keys ? { keys: r.keys } : r?.jwks);
      if (!u) {
        const { error: d } = await this.getUser(n);
        if (d)
          throw d;
        return {
          data: {
            claims: s,
            header: i,
            signature: o
          },
          error: null
        };
      }
      const c = kv(i.alg), p = await crypto.subtle.importKey("jwk", u, c, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(c, p, o, av(`${a}.${l}`)))
        throw new Ka("Invalid JWT signature");
      return {
        data: {
          claims: s,
          header: i,
          signature: o
        },
        error: null
      };
    } catch (n) {
      if (A(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
pi.nextInstanceID = {};
const Zv = pi, ey = "2.95.3";
let In = "";
typeof Deno < "u" ? In = "deno" : typeof document < "u" ? In = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? In = "react-native" : In = "node";
const ty = { "X-Client-Info": `supabase-js-${In}/${ey}` }, ry = { headers: ty }, ny = { schema: "public" }, iy = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, sy = {};
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function oy(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ay(e) {
  var t = oy(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function ly(e, t, r) {
  return (t = ay(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ac(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ac(Object(r), !0).forEach(function(n) {
      ly(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ac(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const uy = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), cy = () => Headers, dy = (e, t, r) => {
  const n = uy(r), i = cy();
  return async (s, o) => {
    var a;
    const l = (a = await t()) !== null && a !== void 0 ? a : e;
    let u = new i(o?.headers);
    return u.has("apikey") || u.set("apikey", e), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), n(s, se(se({}, o), {}, { headers: u }));
  };
};
function hy(e) {
  return e.endsWith("/") ? e : e + "/";
}
function fy(e, t) {
  var r, n;
  const { db: i, auth: s, realtime: o, global: a } = e, { db: l, auth: u, realtime: c, global: p } = t, f = {
    db: se(se({}, l), i),
    auth: se(se({}, u), s),
    realtime: se(se({}, c), o),
    storage: {},
    global: se(se(se({}, p), a), {}, { headers: se(se({}, (r = p?.headers) !== null && r !== void 0 ? r : {}), (n = a?.headers) !== null && n !== void 0 ? n : {}) }),
    accessToken: async () => ""
  };
  return e.accessToken ? f.accessToken = e.accessToken : delete f.accessToken, f;
}
function py(e) {
  const t = e?.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(hy(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var my = class extends Zv {
  constructor(e) {
    super(e);
  }
}, gy = class {
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
    const s = py(e);
    if (!t) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", s), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", s), this.storageUrl = new URL("storage/v1", s), this.functionsUrl = new URL("functions/v1", s);
    const o = `sb-${s.hostname.split(".")[0]}-auth-token`, a = {
      db: ny,
      realtime: sy,
      auth: se(se({}, iy), {}, { storageKey: o }),
      global: ry
    }, l = fy(r ?? {}, a);
    if (this.storageKey = (n = l.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (i = l.global.headers) !== null && i !== void 0 ? i : {}, l.accessToken)
      this.accessToken = l.accessToken, this.auth = new Proxy({}, { get: (c, p) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`);
      } });
    else {
      var u;
      this.auth = this._initSupabaseAuthClient((u = l.auth) !== null && u !== void 0 ? u : {}, this.headers, l.global.fetch);
    }
    this.fetch = dy(t, this._getAccessToken.bind(this), l.global.fetch), this.realtime = this._initRealtimeClient(se({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this)
    }, l.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((c) => this.realtime.setAuth(c)).catch((c) => console.warn("Failed to set initial Realtime auth token:", c)), this.rest = new e0(new URL("rest/v1", s).href, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch,
      timeout: l.db.timeout,
      urlLengthLimit: l.db.urlLengthLimit
    }), this.storage = new q0(this.storageUrl.href, this.headers, this.fetch, r?.storage), l.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new Kg(this.functionsUrl.href, {
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
    const f = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new my({
      url: this.authUrl.href,
      headers: se(se({}, f), c),
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
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((d) => d.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(e) {
    return new v0(this.realtimeUrl.href, se(se({}, e), {}, { params: se(se({}, { apikey: this.supabaseKey }), e?.params) }));
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
const vy = (e, t, r) => new gy(e, t, r);
function yy() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const r = t.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
yy() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
async function wy(e) {
  const t = e.projectKey.trim();
  if (!t) throw new Error("XOOS projectKey is required.");
  const r = await e.bridge.getProjectConfig(t);
  if (r.provider !== "supabase")
    throw new Error(`Unsupported XOOS data provider '${r.provider}'.`);
  const n = vy(r.supabaseUrl, r.publishableKey, {
    accessToken: async () => e.bridge.getAccessToken(t),
    auth: {
      persistSession: !1,
      autoRefreshToken: !1,
      detectSessionInUrl: !1
    }
  });
  return { projectKey: t, config: r, supabase: n };
}
async function _y(e) {
  return (await wy(e)).supabase;
}
const Is = {
  schemaVersion: "1",
  microappKey: "edit-approval",
  version: "1.0.4",
  elementName: "xoos-edit-approval",
  deliveryType: "native_esm",
  contractVersion: "1",
  minimumRuntimeVersion: "1.0.0",
  dataProjectKey: "xoos-core"
}, mf = M.createContext(null);
function ky({
  bridge: e,
  props: t = {},
  portalRoot: r = null,
  navigationTarget: n = null,
  children: i
}) {
  return /* @__PURE__ */ S.jsx(mf.Provider, { value: { bridge: e, props: t, portalRoot: r, navigationTarget: n }, children: i });
}
function gf() {
  return M.useContext(mf);
}
function vf() {
  const e = gf();
  return M.useMemo(() => {
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
        navigationTarget: e.navigationTarget,
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
      navigationTarget: null,
      isRuntimeHosted: !1
    };
  }, [e]);
}
async function Fo(e, t, r) {
  !e || !r || await e.navigation.navigate(t, r);
}
const Nc = /* @__PURE__ */ new WeakMap();
function by() {
  return Is.dataProjectKey;
}
async function Sy(e, t) {
  const r = by();
  let n = Nc.get(e);
  n || (n = /* @__PURE__ */ new Map(), Nc.set(e, n));
  let i = n.get(r);
  return i || (i = _y({
    projectKey: r,
    bridge: e.data
  }), n.set(r, i)), i;
}
function yf() {
  const e = gf(), [t, r] = M.useState(null), [n, i] = M.useState(null);
  return M.useEffect(() => {
    let s = !1;
    return r(null), i(null), e ? (Sy(
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
function wf(e, t, r) {
  e && e.telemetry.track(t, r, Is.microappKey).catch(() => {
  });
}
function xy(e, t, r, n) {
  const i = r instanceof Error ? r.message : String(r);
  wf(e, t, { ...n, error: i, severity: "error" });
}
function Ey() {
  const e = vf(), t = !e.userId || !e.tenantId || !e.templateId;
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
function Ty(e, t) {
  const { client: r, error: n } = yf(), [i, s] = M.useState({
    template: null,
    steps: [],
    originalSteps: [],
    versionId: null,
    isLoading: !0,
    error: null
  }), o = M.useCallback(async () => {
    if (!(!e || !t || !r))
      try {
        s((g) => ({ ...g, isLoading: !0, error: null }));
        const { data: c, error: p } = await r.from("approval_templates").select("approval_template_name, approval_type, description").eq("template_id", e).single();
        if (p) throw p;
        const { data: f, error: d } = await r.from("approval_template_versions").select("version_id").eq("template_id", e).eq("status", "DRAFT").eq("is_active", !1).order("created_at", { ascending: !1 }).limit(1).single();
        if (d) throw d;
        const { data: y, error: v } = await r.from("approval_template_steps").select("step_id, step_order, name, email, user_id, version_id").eq("version_id", f.version_id).order("step_order", { ascending: !0 });
        if (v) throw v;
        const _ = y || [];
        s({
          template: c,
          steps: _,
          originalSteps: JSON.parse(JSON.stringify(_)),
          versionId: f.version_id,
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
  return M.useEffect(() => {
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
function Cy({ show: e, onComplete: t, message: r = "Changes saved successfully!" }) {
  return M.useEffect(() => {
    if (e) {
      const n = setTimeout(t, 2200);
      return () => clearTimeout(n);
    }
  }, [e, t]), e ? /* @__PURE__ */ S.jsxs("div", { className: "fixed inset-0 flex items-center justify-center z-50", style: { backgroundColor: "rgba(0, 0, 0, 0.4)" }, children: [
    /* @__PURE__ */ S.jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 animate-[scaleIn_0.3s_ease-out]", children: [
      /* @__PURE__ */ S.jsx("div", { className: "w-20 h-20 rounded-full flex items-center justify-center relative", children: /* @__PURE__ */ S.jsxs("svg", { className: "w-20 h-20", viewBox: "0 0 80 80", children: [
        /* @__PURE__ */ S.jsx(
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
        /* @__PURE__ */ S.jsx(
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
        /* @__PURE__ */ S.jsx(
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
      /* @__PURE__ */ S.jsx("p", { className: "text-slate-800 font-semibold text-base animate-[fadeIn_0.3s_ease-out_0.9s_forwards] opacity-0", children: r })
    ] }),
    /* @__PURE__ */ S.jsx("style", { children: `
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
function Oy() {
  const e = Ey(), t = Ug(), { client: r } = yf(), { navigationTarget: n } = vf(), { template: i, steps: s, setSteps: o, versionId: a, isLoading: l, error: u, hasChanges: c, resetOriginal: p, refetch: f } = Ty(e.templateId, e.isAuthenticated), [d, y] = M.useState(!1), [v, _] = M.useState(!1), [g, h] = M.useState(!1), m = M.useCallback((j, H) => {
    const F = [...s], ae = H === "up" ? j - 1 : j + 1;
    if (ae < 0 || ae >= F.length) return;
    const ze = F[j].step_order;
    F[j] = { ...F[j], step_order: F[ae].step_order }, F[ae] = { ...F[ae], step_order: ze }, [F[j], F[ae]] = [F[ae], F[j]], o(F);
  }, [s, o]), w = M.useCallback(async () => {
    if (!t.can("UPDATE")) {
      Io.error("You don't have permission to update this record.");
      return;
    }
    if (t.require("UPDATE"), !(!c() || v || !r)) {
      _(!0);
      try {
        const { data: j, error: H } = await r.rpc("generate_trace_context", {
          headers: {
            source_system: "approval-authority-editor",
            tenant_id: e.tenantId
          }
        });
        if (H) throw H;
        const F = j, ae = F?.context || F, ze = s.map(
          (T) => r.from("approval_template_steps").update({ step_order: T.step_order, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("step_id", T.step_id)
        ), je = (await Promise.all(ze)).find((T) => T.error);
        if (je?.error) throw je.error;
        const { error: be } = await r.rpc("audit_event_intake", {
          input_payload: {
            headers: {
              trace_id: ae?.trace_id,
              request_id: ae?.request_id,
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
              subject_id: a
            },
            context: {
              template_id: e.templateId,
              changes: s.map((T, C) => ({
                step_id: T.step_id,
                new_order: T.step_order
              }))
            },
            occurred_at: (/* @__PURE__ */ new Date()).toISOString()
          }
        });
        be && console.warn("Audit write failed:", be), p(), wf(e.bridge, "edit_approval.saved", { template_id: e.templateId }), y(!0);
      } catch (j) {
        xy(e.bridge, "edit_approval.save_failed", j, { template_id: e.templateId }), console.error("Save failed:", j), (j && typeof j == "object" && "code" in j ? String(j.code ?? "") : "") === "42501" ? Io.error("Your permission to perform this action is no longer available.") : Io.error("Failed to save changes: " + (j.message || "Unknown error"));
      } finally {
        _(!1);
      }
    }
  }, [t, c, v, r, s, e, a, p]), x = M.useCallback(() => {
    y(!1), e.bridge?.events.emit("edit-approval.close", { action: "saved", template_id: e.templateId }), Fo(
      e.bridge,
      "approval-workflow-mgmt",
      n
    );
  }, [e.templateId]), k = M.useCallback(() => {
    c() ? h(!0) : (e.bridge?.events.emit("edit-approval.close", { action: "cancel", template_id: e.templateId }), Fo(
      e.bridge,
      "approval-workflow-mgmt",
      n
    ));
  }, [c, e.templateId]), E = M.useCallback(() => {
    h(!1), e.bridge?.events.emit("edit-approval.close", { action: "cancel", template_id: e.templateId }), Fo(
      e.bridge,
      "approval-workflow-mgmt",
      n
    );
  }, [e.templateId]), R = (j) => j.split(" ").map((H) => H[0]).join("").toUpperCase().slice(0, 2);
  if (e.isLoading || l)
    return /* @__PURE__ */ S.jsx("div", { className: "min-h-screen bg-slate-50 flex items-center justify-center", children: /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ S.jsx(lc, { className: "w-8 h-8 text-indigo-600 animate-spin" }),
      /* @__PURE__ */ S.jsx("p", { className: "text-slate-500 text-sm", children: "Loading approval data..." })
    ] }) });
  if (e.error || u)
    return /* @__PURE__ */ S.jsx("div", { className: "min-h-screen bg-slate-50 flex items-center justify-center", children: /* @__PURE__ */ S.jsxs("div", { className: "bg-white rounded-xl border border-red-200 p-6 max-w-md text-center", children: [
      /* @__PURE__ */ S.jsx("p", { className: "text-red-600 font-semibold mb-2", children: "Error" }),
      /* @__PURE__ */ S.jsx("p", { className: "text-slate-600 text-sm", children: e.error || u })
    ] }) });
  const U = c();
  return /* @__PURE__ */ S.jsxs("div", { className: "min-h-screen bg-slate-50 text-slate-900 antialiased", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4", children: [
      /* @__PURE__ */ S.jsx("h1", { className: "text-xl sm:text-2xl font-bold text-slate-900 mb-2", children: "Edit Approval Authority" }),
      /* @__PURE__ */ S.jsx("p", { className: "text-slate-600 text-sm", children: "Review and update approval configuration. Changes are saved as draft." })
    ] }),
    /* @__PURE__ */ S.jsx("main", { className: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 pb-8", children: /* @__PURE__ */ S.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8", children: [
      /* @__PURE__ */ S.jsx("section", { className: "md:col-span-7 xl:col-span-8", children: /* @__PURE__ */ S.jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", children: [
        /* @__PURE__ */ S.jsx("div", { className: "px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100", children: /* @__PURE__ */ S.jsx("h3", { className: "font-bold text-slate-800 text-sm sm:text-base", children: "Configure Hierarchy Levels" }) }),
        /* @__PURE__ */ S.jsx("div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ S.jsx("div", { className: "space-y-2", children: s.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "text-slate-400 text-sm text-center py-8", children: "No approval steps found for this draft version." }) : s.map((j, H) => /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "grid grid-cols-12 gap-4 items-center p-4 border rounded-lg bg-white border-slate-200 hover:border-indigo-300 transition-colors",
            children: [
              /* @__PURE__ */ S.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ S.jsx("div", { className: "w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center", children: /* @__PURE__ */ S.jsx("span", { className: "text-white font-bold text-sm", children: j.step_order }) }) }),
              /* @__PURE__ */ S.jsxs("div", { className: "col-span-8 flex items-center gap-3", children: [
                /* @__PURE__ */ S.jsx("div", { className: "w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ S.jsx("span", { className: "text-slate-600 font-semibold text-xs", children: R(j.name) }) }),
                /* @__PURE__ */ S.jsxs("div", { children: [
                  /* @__PURE__ */ S.jsx("p", { className: "text-sm font-medium text-slate-800", children: j.name }),
                  /* @__PURE__ */ S.jsx("p", { className: "text-xs text-slate-500", children: j.email })
                ] })
              ] }),
              /* @__PURE__ */ S.jsxs("div", { className: "col-span-3 flex items-center justify-end gap-1", children: [
                /* @__PURE__ */ S.jsx(
                  "button",
                  {
                    onClick: () => m(H, "up"),
                    disabled: H === 0,
                    className: "p-1.5 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-slate-500 hover:text-indigo-600 hover:bg-indigo-50",
                    title: "Move Up",
                    children: /* @__PURE__ */ S.jsx(Bg, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  "button",
                  {
                    onClick: () => m(H, "down"),
                    disabled: H === s.length - 1,
                    className: "p-1.5 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-slate-500 hover:text-indigo-600 hover:bg-indigo-50",
                    title: "Move Down",
                    children: /* @__PURE__ */ S.jsx(Fg, { className: "w-4 h-4" })
                  }
                )
              ] })
            ]
          },
          j.step_id
        )) }) }),
        /* @__PURE__ */ S.jsxs("div", { className: "px-4 sm:px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex flex-col sm:flex-row justify-end gap-3", children: [
          /* @__PURE__ */ S.jsx(
            "button",
            {
              onClick: k,
              className: "w-full sm:w-auto px-4 sm:px-6 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ S.jsxs(
            "button",
            {
              onClick: w,
              disabled: !U || v,
              className: "w-full sm:w-auto px-6 sm:px-8 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-md shadow-lg shadow-indigo-200 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2",
              children: [
                v && /* @__PURE__ */ S.jsx(lc, { className: "w-4 h-4 animate-spin" }),
                "Save Changes"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ S.jsx("aside", { className: "md:col-span-5 xl:col-span-4", children: /* @__PURE__ */ S.jsxs("section", { className: "bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ S.jsx("div", { className: "px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 bg-gray-50/50", children: /* @__PURE__ */ S.jsxs("h3", { className: "font-bold text-slate-800 flex items-center gap-2 text-sm sm:text-base", children: [
          /* @__PURE__ */ S.jsx(Mg, { className: "w-4 h-4 sm:w-5 sm:h-5 text-slate-400" }),
          "Authority Details"
        ] }) }),
        /* @__PURE__ */ S.jsx("div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ S.jsxs("div", { className: "space-y-4 sm:space-y-5", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ S.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Authority Name" }),
            /* @__PURE__ */ S.jsx(
              "input",
              {
                type: "text",
                value: i?.approval_template_name || "",
                className: "w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm",
                readOnly: !0
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ S.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Authority Type" }),
            /* @__PURE__ */ S.jsx(
              "input",
              {
                type: "text",
                value: i?.approval_type || "",
                className: "w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm",
                readOnly: !0
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ S.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Description" }),
            /* @__PURE__ */ S.jsx(
              "textarea",
              {
                className: "w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm h-20 resize-none",
                readOnly: !0,
                value: i?.description || ""
              }
            )
          ] })
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ S.jsx(Cy, { show: d, onComplete: x }),
    g && /* @__PURE__ */ S.jsx("div", { className: "fixed inset-0 flex items-center justify-center z-50", style: { backgroundColor: "rgba(0, 0, 0, 0.5)" }, children: /* @__PURE__ */ S.jsxs("div", { className: "bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "text-base font-bold text-slate-800 mb-3", children: "Confirm Cancel" }),
      /* @__PURE__ */ S.jsx("p", { className: "text-sm text-slate-500 mb-4", children: "You have unsaved changes. Are you sure you want to cancel?" }),
      /* @__PURE__ */ S.jsxs("div", { className: "mt-4 flex justify-end gap-3", children: [
        /* @__PURE__ */ S.jsx(
          "button",
          {
            onClick: () => h(!1),
            className: "px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors",
            children: "Go Back"
          }
        ),
        /* @__PURE__ */ S.jsx(
          "button",
          {
            onClick: E,
            className: "px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-md shadow-lg transition-all",
            children: "Confirm"
          }
        )
      ] })
    ] }) })
  ] });
}
function Ry(e) {
  if (!e) return null;
  const t = e.getRootNode();
  return t instanceof ShadowRoot && t.host instanceof HTMLElement ? t.host.parentElement : null;
}
function Py(e) {
  const t = Qh(), r = Lg(), n = Ry(r);
  return M.createElement(
    ky,
    {
      bridge: t,
      props: e,
      portalRoot: r,
      navigationTarget: n
    },
    M.createElement(
      M.Fragment,
      null,
      M.createElement(Oy),
      M.createElement(Cg, { position: "top-right", richColors: !0 })
    )
  );
}
Dg({
  id: Is.microappKey,
  element: Is.elementName,
  App: Py,
  styles: zg,
  shadowDom: !0
});
export {
  Py as default,
  Is as microappConfig
};
