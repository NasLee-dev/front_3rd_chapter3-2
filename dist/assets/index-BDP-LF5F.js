function hT(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Ia =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Ah(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var i1 = { exports: {} },
  Mc = {},
  s1 = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ua = Symbol.for('react.element'),
  pT = Symbol.for('react.portal'),
  mT = Symbol.for('react.fragment'),
  gT = Symbol.for('react.strict_mode'),
  yT = Symbol.for('react.profiler'),
  vT = Symbol.for('react.provider'),
  bT = Symbol.for('react.context'),
  ST = Symbol.for('react.forward_ref'),
  xT = Symbol.for('react.suspense'),
  wT = Symbol.for('react.memo'),
  kT = Symbol.for('react.lazy'),
  yg = Symbol.iterator;
function CT(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (yg && e[yg]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var a1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  l1 = Object.assign,
  c1 = {};
function _i(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = c1), (this.updater = n || a1);
}
_i.prototype.isReactComponent = {};
_i.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
_i.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function u1() {}
u1.prototype = _i.prototype;
function Rh(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = c1), (this.updater = n || a1);
}
var Mh = (Rh.prototype = new u1());
Mh.constructor = Rh;
l1(Mh, _i.prototype);
Mh.isPureReactComponent = !0;
var vg = Array.isArray,
  d1 = Object.prototype.hasOwnProperty,
  jh = { current: null },
  f1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function h1(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      d1.call(t, r) && !f1.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: ua, type: e, key: i, ref: s, props: o, _owner: jh.current };
}
function TT(e, t) {
  return { $$typeof: ua, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function zh(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ua;
}
function PT(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bg = /\/+/g;
function zu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? PT('' + e.key) : t.toString(36);
}
function yl(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ua:
          case pT:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + zu(s, 0) : r),
      vg(o)
        ? ((n = ''),
          e != null && (n = e.replace(bg, '$&/') + '/'),
          yl(o, t, n, '', function (c) {
            return c;
          }))
        : o != null &&
          (zh(o) &&
            (o = TT(
              o,
              n +
                (!o.key || (s && s.key === o.key) ? '' : ('' + o.key).replace(bg, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), vg(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + zu(i, a);
      s += yl(i, t, n, l, o);
    }
  else if (((l = CT(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + zu(i, a++)), (s += yl(i, t, n, l, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function Da(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    yl(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function _T(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ct = { current: null },
  vl = { transition: null },
  ET = { ReactCurrentDispatcher: ct, ReactCurrentBatchConfig: vl, ReactCurrentOwner: jh };
function p1() {
  throw Error('act(...) is not supported in production builds of React.');
}
U.Children = {
  map: Da,
  forEach: function (e, t, n) {
    Da(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Da(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Da(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!zh(e))
      throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
U.Component = _i;
U.Fragment = mT;
U.Profiler = yT;
U.PureComponent = Rh;
U.StrictMode = gT;
U.Suspense = xT;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ET;
U.act = p1;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    );
  var r = l1({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = jh.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      d1.call(t, l) &&
        !f1.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ua, type: e.type, key: o, ref: i, props: r, _owner: s };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: bT,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vT, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = h1;
U.createFactory = function (e) {
  var t = h1.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: ST, render: e };
};
U.isValidElement = zh;
U.lazy = function (e) {
  return { $$typeof: kT, _payload: { _status: -1, _result: e }, _init: _T };
};
U.memo = function (e, t) {
  return { $$typeof: wT, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = vl.transition;
  vl.transition = {};
  try {
    e();
  } finally {
    vl.transition = t;
  }
};
U.unstable_act = p1;
U.useCallback = function (e, t) {
  return ct.current.useCallback(e, t);
};
U.useContext = function (e) {
  return ct.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return ct.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return ct.current.useEffect(e, t);
};
U.useId = function () {
  return ct.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return ct.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return ct.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return ct.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return ct.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return ct.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return ct.current.useRef(e);
};
U.useState = function (e) {
  return ct.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return ct.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return ct.current.useTransition();
};
U.version = '18.3.1';
s1.exports = U;
var S = s1.exports;
const Fh = Ah(S),
  Sg = hT({ __proto__: null, default: Fh }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $T = S,
  AT = Symbol.for('react.element'),
  RT = Symbol.for('react.fragment'),
  MT = Object.prototype.hasOwnProperty,
  jT = $T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zT = { key: !0, ref: !0, __self: !0, __source: !0 };
function m1(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) MT.call(t, r) && !zT.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: AT, type: e, key: i, ref: s, props: o, _owner: jT.current };
}
Mc.Fragment = RT;
Mc.jsx = m1;
Mc.jsxs = m1;
i1.exports = Mc;
var b = i1.exports;
function FT(e) {
  return e != null && typeof e == 'object' && 'nodeType' in e && e.nodeType === Node.ELEMENT_NODE;
}
function IT() {
  return !!(globalThis != null && globalThis.document);
}
function g1(e) {
  return e.parentElement && g1(e.parentElement) ? !0 : e.hidden;
}
function DT(e) {
  const t = e.getAttribute('contenteditable');
  return t !== 'false' && t != null;
}
function LT(e) {
  return !!e.getAttribute('disabled') || !!e.getAttribute('aria-disabled');
}
function OT(e, ...t) {
  if (e == null) throw new TypeError('Cannot convert undefined or null to object');
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
const G = (e) => (e ? '' : void 0),
  Fu = (e) => (e ? !0 : void 0);
function NT(e) {
  return Array.isArray(e);
}
function Ut(e) {
  const t = typeof e;
  return e != null && (t === 'object' || t === 'function') && !NT(e);
}
function BT(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function VT(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), '');
  return { unitless: !n, value: t, unit: n };
}
function Xd(e) {
  if (e == null) return e;
  const { unitless: t } = VT(e);
  return t || typeof e == 'number' ? `${e}px` : e;
}
const y1 = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  Ih = (e) => Object.fromEntries(Object.entries(e).sort(y1));
function xg(e) {
  const t = Ih(e);
  return Object.assign(Object.values(t), t);
}
function WT(e) {
  const t = Object.keys(Ih(e));
  return new Set(t);
}
function wg(e) {
  if (!e) return e;
  e = Xd(e) ?? e;
  const t = -0.02;
  return typeof e == 'number'
    ? `${e + t}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + t}`);
}
function Zi(e, t) {
  const n = ['@media screen'];
  return (
    e && n.push('and', `(min-width: ${Xd(e)})`),
    t && n.push('and', `(max-width: ${Xd(t)})`),
    n.join(' ')
  );
}
function UT(e) {
  if (!e) return null;
  e.base = e.base ?? '0px';
  const t = xg(e),
    n = Object.entries(e)
      .sort(y1)
      .map(([i, s], a, l) => {
        let [, c] = l[a + 1] ?? [];
        return (
          (c = parseFloat(c) > 0 ? wg(c) : void 0),
          {
            _minW: wg(s),
            breakpoint: i,
            minW: s,
            maxW: c,
            maxWQuery: Zi(null, c),
            minWQuery: Zi(s),
            minMaxQuery: Zi(s, c),
          }
        );
      }),
    r = WT(e),
    o = Array.from(r.values());
  return {
    keys: r,
    normalized: t,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((a) => r.has(a));
    },
    asObject: Ih(e),
    asArray: xg(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [null, ...t.map((i) => Zi(i)).slice(1)],
    toArrayValue(i) {
      if (!Ut(i)) throw new Error('toArrayValue: value must be an object');
      const s = o.map((a) => i[a] ?? null);
      for (; BT(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(i) {
      if (!Array.isArray(i)) throw new Error('toObjectValue: value must be an array');
      return i.reduce((s, a, l) => {
        const c = o[l];
        return c != null && a != null && (s[c] = a), s;
      }, {});
    },
  };
}
function HT(...e) {
  return function (...n) {
    e.forEach((r) => (r == null ? void 0 : r(...n)));
  };
}
function He(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function GT(e) {
  return S.Children.toArray(e).filter((t) => S.isValidElement(t));
}
function jc(e) {
  const t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function KT(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Rt(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = 'useContext',
      providerName: o = 'Provider',
      errorMessage: i,
      defaultValue: s,
    } = e,
    a = S.createContext(s);
  a.displayName = t;
  function l() {
    var u;
    const c = S.useContext(a);
    if (!c && n) {
      const d = new Error(i ?? KT(r, o));
      throw (
        ((d.name = 'ContextError'), (u = Error.captureStackTrace) == null || u.call(Error, d, l), d)
      );
    }
    return c;
  }
  return [a.Provider, l, a];
}
const ue = (...e) => e.filter(Boolean).join(' '),
  YT = (e) => e.hasAttribute('tabindex');
function XT(e) {
  if (!FT(e) || g1(e) || LT(e)) return !1;
  const { localName: t } = e;
  if (['input', 'select', 'textarea', 'button'].indexOf(t) >= 0) return !0;
  const r = {
    a: () => e.hasAttribute('href'),
    audio: () => e.hasAttribute('controls'),
    video: () => e.hasAttribute('controls'),
  };
  return t in r ? r[t]() : DT(e) ? !0 : YT(e);
}
const qT = [
    'input:not(:disabled):not([disabled])',
    'select:not(:disabled):not([disabled])',
    'textarea:not(:disabled):not([disabled])',
    'embed',
    'iframe',
    'object',
    'a[href]',
    'area[href]',
    'button:not(:disabled):not([disabled])',
    '[tabindex]',
    'audio[controls]',
    'video[controls]',
    '*[tabindex]:not([aria-disabled])',
    '*[contenteditable]',
  ],
  QT = qT.join(),
  ZT = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function JT(e) {
  const t = Array.from(e.querySelectorAll(QT));
  return t.unshift(e), t.filter((n) => XT(n) && ZT(n));
}
function e2(e, t, n, r) {
  const o = typeof t == 'string' ? t.split('.') : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
const t2 = (e) => {
    const t = new WeakMap();
    return (r, o, i, s) => {
      if (typeof r > 'u') return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const a = t.get(r);
      if (a.has(o)) return a.get(o);
      const l = e(r, o, i, s);
      return a.set(o, l), l;
    };
  },
  v1 = t2(e2),
  n2 = (e) => e.default || e;
function Dh(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function r2(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function o2(e, t) {
  return Array.isArray(e)
    ? e.map((n) => (n === null ? null : t(n)))
    : Ut(e)
      ? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
      : e != null
        ? t(e)
        : null;
}
const i2 = (e) => typeof e == 'function';
function Vt(e, ...t) {
  return i2(e) ? e(...t) : e;
}
function s2(e, t) {
  const n = {},
    r = {};
  for (const [o, i] of Object.entries(e)) t.includes(o) ? (n[o] = i) : (r[o] = i);
  return [n, r];
}
function a2(e, ...t) {
  const n = Object.getOwnPropertyDescriptors(e),
    r = Object.keys(n),
    o = (s) => {
      const a = {};
      for (let l = 0; l < s.length; l++) {
        const c = s[l];
        n[c] && (Object.defineProperty(a, c, n[c]), delete n[c]);
      }
      return a;
    },
    i = (s) => o(Array.isArray(s) ? s : r.filter(s));
  return t.map(i).concat(o(r));
}
function kg(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(s, a = []) {
    if (Ut(s) || Array.isArray(s)) {
      const l = {};
      for (const [c, u] of Object.entries(s)) {
        const d = (o == null ? void 0 : o(c)) ?? c,
          f = [...a, d];
        if (r != null && r(s, f)) return t(s, a);
        l[d] = i(u, f);
      }
      return l;
    }
    return t(s, a);
  }
  return i(e);
}
var Yl = { exports: {} };
Yl.exports;
(function (e, t) {
  var n = 200,
    r = '__lodash_hash_undefined__',
    o = 800,
    i = 16,
    s = 9007199254740991,
    a = '[object Arguments]',
    l = '[object Array]',
    c = '[object AsyncFunction]',
    u = '[object Boolean]',
    d = '[object Date]',
    f = '[object Error]',
    p = '[object Function]',
    v = '[object GeneratorFunction]',
    g = '[object Map]',
    w = '[object Number]',
    m = '[object Null]',
    h = '[object Object]',
    y = '[object Proxy]',
    k = '[object RegExp]',
    P = '[object Set]',
    $ = '[object String]',
    _ = '[object Undefined]',
    A = '[object WeakMap]',
    j = '[object ArrayBuffer]',
    z = '[object DataView]',
    Q = '[object Float32Array]',
    we = '[object Float64Array]',
    We = '[object Int8Array]',
    ot = '[object Int16Array]',
    sn = '[object Int32Array]',
    dt = '[object Uint8Array]',
    oe = '[object Uint8ClampedArray]',
    M = '[object Uint16Array]',
    D = '[object Uint32Array]',
    B = /[\\^$.*+?()[\]{}|]/g,
    ie = /^\[object .+?Constructor\]$/,
    se = /^(?:0|[1-9]\d*)$/,
    H = {};
  (H[Q] = H[we] = H[We] = H[ot] = H[sn] = H[dt] = H[oe] = H[M] = H[D] = !0),
    (H[a] =
      H[l] =
      H[j] =
      H[u] =
      H[z] =
      H[d] =
      H[f] =
      H[p] =
      H[g] =
      H[w] =
      H[h] =
      H[k] =
      H[P] =
      H[$] =
      H[A] =
        !1);
  var de = typeof Ia == 'object' && Ia && Ia.Object === Object && Ia,
    an = typeof self == 'object' && self && self.Object === Object && self,
    Le = de || an || Function('return this')(),
    Ft = t && !t.nodeType && t,
    ln = Ft && !0 && e && !e.nodeType && e,
    vo = ln && ln.exports === Ft,
    $r = vo && de.process,
    bo = (function () {
      try {
        var x = ln && ln.require && ln.require('util').types;
        return x || ($r && $r.binding && $r.binding('util'));
      } catch {}
    })(),
    Ar = bo && bo.isTypedArray;
  function zi(x, T, E) {
    switch (E.length) {
      case 0:
        return x.call(T);
      case 1:
        return x.call(T, E[0]);
      case 2:
        return x.call(T, E[0], E[1]);
      case 3:
        return x.call(T, E[0], E[1], E[2]);
    }
    return x.apply(T, E);
  }
  function Ea(x, T) {
    for (var E = -1, I = Array(x); ++E < x; ) I[E] = T(E);
    return I;
  }
  function W(x) {
    return function (T) {
      return x(T);
    };
  }
  function ve(x, T) {
    return x == null ? void 0 : x[T];
  }
  function je(x, T) {
    return function (E) {
      return x(T(E));
    };
  }
  var bt = Array.prototype,
    _n = Function.prototype,
    Rr = Object.prototype,
    ku = Le['__core-js_shared__'],
    $a = _n.toString,
    Zn = Rr.hasOwnProperty,
    Jm = (function () {
      var x = /[^.]+$/.exec((ku && ku.keys && ku.keys.IE_PROTO) || '');
      return x ? 'Symbol(src)_1.' + x : '';
    })(),
    eg = Rr.toString,
    aC = $a.call(Object),
    lC = RegExp(
      '^' +
        $a
          .call(Zn)
          .replace(B, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    ),
    Aa = vo ? Le.Buffer : void 0,
    tg = Le.Symbol,
    ng = Le.Uint8Array;
  Aa && Aa.allocUnsafe;
  var rg = je(Object.getPrototypeOf, Object),
    og = Object.create,
    cC = Rr.propertyIsEnumerable,
    uC = bt.splice,
    Mr = tg ? tg.toStringTag : void 0,
    Ra = (function () {
      try {
        var x = Pu(Object, 'defineProperty');
        return x({}, '', {}), x;
      } catch {}
    })(),
    dC = Aa ? Aa.isBuffer : void 0,
    ig = Math.max,
    fC = Date.now,
    sg = Pu(Le, 'Map'),
    Fi = Pu(Object, 'create'),
    hC = (function () {
      function x() {}
      return function (T) {
        if (!zr(T)) return {};
        if (og) return og(T);
        x.prototype = T;
        var E = new x();
        return (x.prototype = void 0), E;
      };
    })();
  function jr(x) {
    var T = -1,
      E = x == null ? 0 : x.length;
    for (this.clear(); ++T < E; ) {
      var I = x[T];
      this.set(I[0], I[1]);
    }
  }
  function pC() {
    (this.__data__ = Fi ? Fi(null) : {}), (this.size = 0);
  }
  function mC(x) {
    var T = this.has(x) && delete this.__data__[x];
    return (this.size -= T ? 1 : 0), T;
  }
  function gC(x) {
    var T = this.__data__;
    if (Fi) {
      var E = T[x];
      return E === r ? void 0 : E;
    }
    return Zn.call(T, x) ? T[x] : void 0;
  }
  function yC(x) {
    var T = this.__data__;
    return Fi ? T[x] !== void 0 : Zn.call(T, x);
  }
  function vC(x, T) {
    var E = this.__data__;
    return (this.size += this.has(x) ? 0 : 1), (E[x] = Fi && T === void 0 ? r : T), this;
  }
  (jr.prototype.clear = pC),
    (jr.prototype.delete = mC),
    (jr.prototype.get = gC),
    (jr.prototype.has = yC),
    (jr.prototype.set = vC);
  function En(x) {
    var T = -1,
      E = x == null ? 0 : x.length;
    for (this.clear(); ++T < E; ) {
      var I = x[T];
      this.set(I[0], I[1]);
    }
  }
  function bC() {
    (this.__data__ = []), (this.size = 0);
  }
  function SC(x) {
    var T = this.__data__,
      E = Ma(T, x);
    if (E < 0) return !1;
    var I = T.length - 1;
    return E == I ? T.pop() : uC.call(T, E, 1), --this.size, !0;
  }
  function xC(x) {
    var T = this.__data__,
      E = Ma(T, x);
    return E < 0 ? void 0 : T[E][1];
  }
  function wC(x) {
    return Ma(this.__data__, x) > -1;
  }
  function kC(x, T) {
    var E = this.__data__,
      I = Ma(E, x);
    return I < 0 ? (++this.size, E.push([x, T])) : (E[I][1] = T), this;
  }
  (En.prototype.clear = bC),
    (En.prototype.delete = SC),
    (En.prototype.get = xC),
    (En.prototype.has = wC),
    (En.prototype.set = kC);
  function So(x) {
    var T = -1,
      E = x == null ? 0 : x.length;
    for (this.clear(); ++T < E; ) {
      var I = x[T];
      this.set(I[0], I[1]);
    }
  }
  function CC() {
    (this.size = 0), (this.__data__ = { hash: new jr(), map: new (sg || En)(), string: new jr() });
  }
  function TC(x) {
    var T = za(this, x).delete(x);
    return (this.size -= T ? 1 : 0), T;
  }
  function PC(x) {
    return za(this, x).get(x);
  }
  function _C(x) {
    return za(this, x).has(x);
  }
  function EC(x, T) {
    var E = za(this, x),
      I = E.size;
    return E.set(x, T), (this.size += E.size == I ? 0 : 1), this;
  }
  (So.prototype.clear = CC),
    (So.prototype.delete = TC),
    (So.prototype.get = PC),
    (So.prototype.has = _C),
    (So.prototype.set = EC);
  function xo(x) {
    var T = (this.__data__ = new En(x));
    this.size = T.size;
  }
  function $C() {
    (this.__data__ = new En()), (this.size = 0);
  }
  function AC(x) {
    var T = this.__data__,
      E = T.delete(x);
    return (this.size = T.size), E;
  }
  function RC(x) {
    return this.__data__.get(x);
  }
  function MC(x) {
    return this.__data__.has(x);
  }
  function jC(x, T) {
    var E = this.__data__;
    if (E instanceof En) {
      var I = E.__data__;
      if (!sg || I.length < n - 1) return I.push([x, T]), (this.size = ++E.size), this;
      E = this.__data__ = new So(I);
    }
    return E.set(x, T), (this.size = E.size), this;
  }
  (xo.prototype.clear = $C),
    (xo.prototype.delete = AC),
    (xo.prototype.get = RC),
    (xo.prototype.has = MC),
    (xo.prototype.set = jC);
  function zC(x, T) {
    var E = $u(x),
      I = !E && Eu(x),
      X = !E && !I && dg(x),
      fe = !E && !I && !X && hg(x),
      be = E || I || X || fe,
      Z = be ? Ea(x.length, String) : [],
      Se = Z.length;
    for (var Xt in x)
      (be &&
        (Xt == 'length' ||
          (X && (Xt == 'offset' || Xt == 'parent')) ||
          (fe && (Xt == 'buffer' || Xt == 'byteLength' || Xt == 'byteOffset')) ||
          cg(Xt, Se))) ||
        Z.push(Xt);
    return Z;
  }
  function Cu(x, T, E) {
    ((E !== void 0 && !Fa(x[T], E)) || (E === void 0 && !(T in x))) && Tu(x, T, E);
  }
  function FC(x, T, E) {
    var I = x[T];
    (!(Zn.call(x, T) && Fa(I, E)) || (E === void 0 && !(T in x))) && Tu(x, T, E);
  }
  function Ma(x, T) {
    for (var E = x.length; E--; ) if (Fa(x[E][0], T)) return E;
    return -1;
  }
  function Tu(x, T, E) {
    T == '__proto__' && Ra
      ? Ra(x, T, { configurable: !0, enumerable: !0, value: E, writable: !0 })
      : (x[T] = E);
  }
  var IC = XC();
  function ja(x) {
    return x == null ? (x === void 0 ? _ : m) : Mr && Mr in Object(x) ? qC(x) : nT(x);
  }
  function ag(x) {
    return Ii(x) && ja(x) == a;
  }
  function DC(x) {
    if (!zr(x) || eT(x)) return !1;
    var T = Ru(x) ? lC : ie;
    return T.test(sT(x));
  }
  function LC(x) {
    return Ii(x) && fg(x.length) && !!H[ja(x)];
  }
  function OC(x) {
    if (!zr(x)) return tT(x);
    var T = ug(x),
      E = [];
    for (var I in x) (I == 'constructor' && (T || !Zn.call(x, I))) || E.push(I);
    return E;
  }
  function lg(x, T, E, I, X) {
    x !== T &&
      IC(
        T,
        function (fe, be) {
          if ((X || (X = new xo()), zr(fe))) NC(x, T, be, E, lg, I, X);
          else {
            var Z = I ? I(_u(x, be), fe, be + '', x, T, X) : void 0;
            Z === void 0 && (Z = fe), Cu(x, be, Z);
          }
        },
        pg
      );
  }
  function NC(x, T, E, I, X, fe, be) {
    var Z = _u(x, E),
      Se = _u(T, E),
      Xt = be.get(Se);
    if (Xt) {
      Cu(x, E, Xt);
      return;
    }
    var St = fe ? fe(Z, Se, E + '', x, T, be) : void 0,
      Di = St === void 0;
    if (Di) {
      var Mu = $u(Se),
        ju = !Mu && dg(Se),
        gg = !Mu && !ju && hg(Se);
      (St = Se),
        Mu || ju || gg
          ? $u(Z)
            ? (St = Z)
            : aT(Z)
              ? (St = GC(Z))
              : ju
                ? ((Di = !1), (St = WC(Se)))
                : gg
                  ? ((Di = !1), (St = HC(Se)))
                  : (St = [])
          : lT(Se) || Eu(Se)
            ? ((St = Z), Eu(Z) ? (St = cT(Z)) : (!zr(Z) || Ru(Z)) && (St = QC(Se)))
            : (Di = !1);
    }
    Di && (be.set(Se, St), X(St, Se, I, fe, be), be.delete(Se)), Cu(x, E, St);
  }
  function BC(x, T) {
    return oT(rT(x, T, mg), x + '');
  }
  var VC = Ra
    ? function (x, T) {
        return Ra(x, 'toString', { configurable: !0, enumerable: !1, value: dT(T), writable: !0 });
      }
    : mg;
  function WC(x, T) {
    return x.slice();
  }
  function UC(x) {
    var T = new x.constructor(x.byteLength);
    return new ng(T).set(new ng(x)), T;
  }
  function HC(x, T) {
    var E = UC(x.buffer);
    return new x.constructor(E, x.byteOffset, x.length);
  }
  function GC(x, T) {
    var E = -1,
      I = x.length;
    for (T || (T = Array(I)); ++E < I; ) T[E] = x[E];
    return T;
  }
  function KC(x, T, E, I) {
    var X = !E;
    E || (E = {});
    for (var fe = -1, be = T.length; ++fe < be; ) {
      var Z = T[fe],
        Se = void 0;
      Se === void 0 && (Se = x[Z]), X ? Tu(E, Z, Se) : FC(E, Z, Se);
    }
    return E;
  }
  function YC(x) {
    return BC(function (T, E) {
      var I = -1,
        X = E.length,
        fe = X > 1 ? E[X - 1] : void 0,
        be = X > 2 ? E[2] : void 0;
      for (
        fe = x.length > 3 && typeof fe == 'function' ? (X--, fe) : void 0,
          be && ZC(E[0], E[1], be) && ((fe = X < 3 ? void 0 : fe), (X = 1)),
          T = Object(T);
        ++I < X;

      ) {
        var Z = E[I];
        Z && x(T, Z, I, fe);
      }
      return T;
    });
  }
  function XC(x) {
    return function (T, E, I) {
      for (var X = -1, fe = Object(T), be = I(T), Z = be.length; Z--; ) {
        var Se = be[++X];
        if (E(fe[Se], Se, fe) === !1) break;
      }
      return T;
    };
  }
  function za(x, T) {
    var E = x.__data__;
    return JC(T) ? E[typeof T == 'string' ? 'string' : 'hash'] : E.map;
  }
  function Pu(x, T) {
    var E = ve(x, T);
    return DC(E) ? E : void 0;
  }
  function qC(x) {
    var T = Zn.call(x, Mr),
      E = x[Mr];
    try {
      x[Mr] = void 0;
      var I = !0;
    } catch {}
    var X = eg.call(x);
    return I && (T ? (x[Mr] = E) : delete x[Mr]), X;
  }
  function QC(x) {
    return typeof x.constructor == 'function' && !ug(x) ? hC(rg(x)) : {};
  }
  function cg(x, T) {
    var E = typeof x;
    return (
      (T = T ?? s),
      !!T && (E == 'number' || (E != 'symbol' && se.test(x))) && x > -1 && x % 1 == 0 && x < T
    );
  }
  function ZC(x, T, E) {
    if (!zr(E)) return !1;
    var I = typeof T;
    return (I == 'number' ? Au(E) && cg(T, E.length) : I == 'string' && T in E) ? Fa(E[T], x) : !1;
  }
  function JC(x) {
    var T = typeof x;
    return T == 'string' || T == 'number' || T == 'symbol' || T == 'boolean'
      ? x !== '__proto__'
      : x === null;
  }
  function eT(x) {
    return !!Jm && Jm in x;
  }
  function ug(x) {
    var T = x && x.constructor,
      E = (typeof T == 'function' && T.prototype) || Rr;
    return x === E;
  }
  function tT(x) {
    var T = [];
    if (x != null) for (var E in Object(x)) T.push(E);
    return T;
  }
  function nT(x) {
    return eg.call(x);
  }
  function rT(x, T, E) {
    return (
      (T = ig(T === void 0 ? x.length - 1 : T, 0)),
      function () {
        for (var I = arguments, X = -1, fe = ig(I.length - T, 0), be = Array(fe); ++X < fe; )
          be[X] = I[T + X];
        X = -1;
        for (var Z = Array(T + 1); ++X < T; ) Z[X] = I[X];
        return (Z[T] = E(be)), zi(x, this, Z);
      }
    );
  }
  function _u(x, T) {
    if (!(T === 'constructor' && typeof x[T] == 'function') && T != '__proto__') return x[T];
  }
  var oT = iT(VC);
  function iT(x) {
    var T = 0,
      E = 0;
    return function () {
      var I = fC(),
        X = i - (I - E);
      if (((E = I), X > 0)) {
        if (++T >= o) return arguments[0];
      } else T = 0;
      return x.apply(void 0, arguments);
    };
  }
  function sT(x) {
    if (x != null) {
      try {
        return $a.call(x);
      } catch {}
      try {
        return x + '';
      } catch {}
    }
    return '';
  }
  function Fa(x, T) {
    return x === T || (x !== x && T !== T);
  }
  var Eu = ag(
      (function () {
        return arguments;
      })()
    )
      ? ag
      : function (x) {
          return Ii(x) && Zn.call(x, 'callee') && !cC.call(x, 'callee');
        },
    $u = Array.isArray;
  function Au(x) {
    return x != null && fg(x.length) && !Ru(x);
  }
  function aT(x) {
    return Ii(x) && Au(x);
  }
  var dg = dC || fT;
  function Ru(x) {
    if (!zr(x)) return !1;
    var T = ja(x);
    return T == p || T == v || T == c || T == y;
  }
  function fg(x) {
    return typeof x == 'number' && x > -1 && x % 1 == 0 && x <= s;
  }
  function zr(x) {
    var T = typeof x;
    return x != null && (T == 'object' || T == 'function');
  }
  function Ii(x) {
    return x != null && typeof x == 'object';
  }
  function lT(x) {
    if (!Ii(x) || ja(x) != h) return !1;
    var T = rg(x);
    if (T === null) return !0;
    var E = Zn.call(T, 'constructor') && T.constructor;
    return typeof E == 'function' && E instanceof E && $a.call(E) == aC;
  }
  var hg = Ar ? W(Ar) : LC;
  function cT(x) {
    return KC(x, pg(x));
  }
  function pg(x) {
    return Au(x) ? zC(x) : OC(x);
  }
  var uT = YC(function (x, T, E, I) {
    lg(x, T, E, I);
  });
  function dT(x) {
    return function () {
      return x;
    };
  }
  function mg(x) {
    return x;
  }
  function fT() {
    return !1;
  }
  e.exports = uT;
})(Yl, Yl.exports);
var l2 = Yl.exports;
const bn = Ah(l2);
function ds(e, t = []) {
  const n = S.useRef(e);
  return (
    S.useEffect(() => {
      n.current = e;
    }),
    S.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
const Qo = globalThis != null && globalThis.document ? S.useLayoutEffect : S.useEffect,
  qd = (e, t) => {
    const n = S.useRef(!1),
      r = S.useRef(!1);
    S.useEffect(() => {
      if (n.current && r.current) return e();
      r.current = !0;
    }, t),
      S.useEffect(
        () => (
          (n.current = !0),
          () => {
            n.current = !1;
          }
        ),
        []
      );
  };
function c2(e, t) {
  const n = ds(e);
  S.useEffect(() => {
    let r = null;
    const o = () => n();
    return (
      (r = window.setInterval(o, t)),
      () => {
        r && window.clearInterval(r);
      }
    );
  }, [t, n]);
}
function u2(e, t) {
  if (e != null) {
    if (typeof e == 'function') {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function to(...e) {
  return (t) => {
    e.forEach((n) => {
      u2(n, t);
    });
  };
}
function d2(...e) {
  return S.useMemo(() => to(...e), e);
}
function f2(e, t) {
  const n = ds(e);
  S.useEffect(() => {
    if (t == null) return;
    let r = null;
    return (
      (r = window.setTimeout(() => {
        n();
      }, t)),
      () => {
        r && window.clearTimeout(r);
      }
    );
  }, [t, n]);
}
const ze = {
    open: (e, t) => `${e}[data-open], ${e}[open], ${e}[data-state=open] ${t}`,
    closed: (e, t) => `${e}[data-closed], ${e}[data-state=closed] ${t}`,
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  cn = (e) => b1((t) => e(t, '&'), '[role=group]', '[data-group]', '.group'),
  $n = (e) => b1((t) => e(t, '~ &'), '[data-peer]', '.peer'),
  b1 = (e, ...t) => t.map(e).join(', '),
  h2 = {
    _hover: '&:hover, &[data-hover]',
    _active: '&:active, &[data-active]',
    _focus: '&:focus, &[data-focus]',
    _highlighted: '&[data-highlighted]',
    _focusWithin: '&:focus-within, &[data-focus-within]',
    _focusVisible: '&:focus-visible, &[data-focus-visible]',
    _disabled: '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
    _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
    _before: '&::before',
    _after: '&::after',
    _empty: '&:empty, &[data-empty]',
    _expanded: '&[aria-expanded=true], &[data-expanded], &[data-state=expanded]',
    _checked: '&[aria-checked=true], &[data-checked], &[data-state=checked]',
    _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
    _pressed: '&[aria-pressed=true], &[data-pressed]',
    _invalid: '&[aria-invalid=true], &[data-invalid]',
    _valid: '&[data-valid], &[data-state=valid]',
    _loading: '&[data-loading], &[aria-busy=true]',
    _selected: '&[aria-selected=true], &[data-selected]',
    _hidden: '&[hidden], &[data-hidden]',
    _autofill: '&:-webkit-autofill',
    _even: '&:nth-of-type(even)',
    _odd: '&:nth-of-type(odd)',
    _first: '&:first-of-type',
    _firstLetter: '&::first-letter',
    _last: '&:last-of-type',
    _notFirst: '&:not(:first-of-type)',
    _notLast: '&:not(:last-of-type)',
    _visited: '&:visited',
    _activeLink: '&[aria-current=page]',
    _activeStep: '&[aria-current=step]',
    _indeterminate:
      '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]',
    _groupOpen: cn(ze.open),
    _groupClosed: cn(ze.closed),
    _groupHover: cn(ze.hover),
    _peerHover: $n(ze.hover),
    _groupFocus: cn(ze.focus),
    _peerFocus: $n(ze.focus),
    _groupFocusVisible: cn(ze.focusVisible),
    _peerFocusVisible: $n(ze.focusVisible),
    _groupActive: cn(ze.active),
    _peerActive: $n(ze.active),
    _groupDisabled: cn(ze.disabled),
    _peerDisabled: $n(ze.disabled),
    _groupInvalid: cn(ze.invalid),
    _peerInvalid: $n(ze.invalid),
    _groupChecked: cn(ze.checked),
    _peerChecked: $n(ze.checked),
    _groupFocusWithin: cn(ze.focusWithin),
    _peerFocusWithin: $n(ze.focusWithin),
    _peerPlaceholderShown: $n(ze.placeholderShown),
    _placeholder: '&::placeholder, &[data-placeholder]',
    _placeholderShown: '&:placeholder-shown, &[data-placeholder-shown]',
    _fullScreen: '&:fullscreen, &[data-fullscreen]',
    _selection: '&::selection',
    _rtl: '[dir=rtl] &, &[dir=rtl]',
    _ltr: '[dir=ltr] &, &[dir=ltr]',
    _mediaDark: '@media (prefers-color-scheme: dark)',
    _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
    _dark:
      '.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
    _light:
      '.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]',
    _horizontal: '&[data-orientation=horizontal]',
    _vertical: '&[data-orientation=vertical]',
    _open: '&[data-open], &[open], &[data-state=open]',
    _closed: '&[data-closed], &[data-state=closed]',
    _complete: '&[data-complete]',
    _incomplete: '&[data-incomplete]',
    _current: '&[data-current]',
  };
function zc(e) {
  const t = e.conditions ?? {},
    n = Object.fromEntries(Object.entries(t).map(([r, o]) => [`_${r}`, o]));
  return { ...h2, ...n };
}
function S1(e) {
  return Object.keys(zc(e));
}
const p2 = (e) => /!(important)?$/.test(e),
  Cg = (e) => (typeof e == 'string' ? e.replace(/!(important)?$/, '').trim() : e),
  m2 = (e, t) => (n) => {
    const r = String(t),
      o = p2(r),
      i = Cg(r),
      s = e ? `${e}.${i}` : i;
    let a = Ut(n.__cssMap) && s in n.__cssMap ? n.__cssMap[s].varRef : t;
    return (a = Cg(a)), o ? `${a} !important` : a;
  };
function Lh(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, s) => {
    const a = m2(t, i)(s);
    let l = (n == null ? void 0 : n(a, s)) ?? a;
    return r && (l = r(l, s)), l;
  };
}
const La =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function It(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = Lh({ scale: e, transform: t })), r;
  };
}
const g2 =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === 'rtl' ? e : t;
function y2(e) {
  const { property: t, scale: n, transform: r } = e;
  return { scale: n, property: g2(t), transform: n ? Lh({ scale: n, compose: r }) : r };
}
const x1 = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))',
];
function v2() {
  return [
    'translateX(var(--chakra-translate-x, 0))',
    'translateY(var(--chakra-translate-y, 0))',
    ...x1,
  ].join(' ');
}
function b2() {
  return ['translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)', ...x1].join(
    ' '
  );
}
const S2 = {
    '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
    filter: [
      'var(--chakra-blur)',
      'var(--chakra-brightness)',
      'var(--chakra-contrast)',
      'var(--chakra-grayscale)',
      'var(--chakra-hue-rotate)',
      'var(--chakra-invert)',
      'var(--chakra-saturate)',
      'var(--chakra-sepia)',
      'var(--chakra-drop-shadow)',
    ].join(' '),
  },
  x2 = {
    backdropFilter: [
      'var(--chakra-backdrop-blur)',
      'var(--chakra-backdrop-brightness)',
      'var(--chakra-backdrop-contrast)',
      'var(--chakra-backdrop-grayscale)',
      'var(--chakra-backdrop-hue-rotate)',
      'var(--chakra-backdrop-invert)',
      'var(--chakra-backdrop-opacity)',
      'var(--chakra-backdrop-saturate)',
      'var(--chakra-backdrop-sepia)',
    ].join(' '),
    '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
  };
function w2(e) {
  return {
    '--chakra-ring-offset-shadow':
      'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
    '--chakra-ring-shadow':
      'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
    '--chakra-ring-width': e,
    boxShadow: [
      'var(--chakra-ring-offset-shadow)',
      'var(--chakra-ring-shadow)',
      'var(--chakra-shadow, 0 0 #0000)',
    ].join(', '),
  };
}
const k2 = {
    'row-reverse': { space: '--chakra-space-x-reverse', divide: '--chakra-divide-x-reverse' },
    'column-reverse': { space: '--chakra-space-y-reverse', divide: '--chakra-divide-y-reverse' },
  },
  Qd = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  C2 = new Set(Object.values(Qd)),
  Zd = new Set(['none', '-moz-initial', 'inherit', 'initial', 'revert', 'unset']),
  T2 = (e) => e.trim();
function P2(e, t) {
  if (e == null || Zd.has(e)) return e;
  if (!(Jd(e) || Zd.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    s = o == null ? void 0 : o[2];
  if (!i || !s) return e;
  const a = i.includes('-gradient') ? i : `${i}-gradient`,
    [l, ...c] = s.split(',').map(T2).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0) return e;
  const u = l in Qd ? Qd[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (C2.has(f)) return f;
    const p = f.indexOf(' '),
      [v, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f],
      w = Jd(g) ? g : g && g.split(' '),
      m = `colors.${v}`,
      h = m in t.__cssMap ? t.__cssMap[m].varRef : v;
    return w ? [h, ...(Array.isArray(w) ? w : [w])].join(' ') : h;
  });
  return `${a}(${d.join(', ')})`;
}
const Jd = (e) => typeof e == 'string' && e.includes('(') && e.includes(')'),
  _2 = (e, t) => P2(e, t ?? {});
function E2(e) {
  return /^var\(--.+\)$/.test(e);
}
const $2 = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), '');
    return { unitless: !n, value: t, unit: n };
  },
  un = (e) => (t) => `${e}(${t})`,
  K = {
    filter(e) {
      return e !== 'auto' ? e : S2;
    },
    backdropFilter(e) {
      return e !== 'auto' ? e : x2;
    },
    ring(e) {
      return w2(K.px(e));
    },
    bgClip(e) {
      return e === 'text'
        ? { color: 'transparent', backgroundClip: 'text' }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === 'auto' ? v2() : e === 'auto-gpu' ? b2() : e;
    },
    vh(e) {
      return e === '$100vh' ? 'var(--chakra-vh)' : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = $2(e);
      return t || typeof e == 'number' ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != 'number' || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: 'right', right: 'left' };
      return t.direction === 'rtl' ? n[e] : e;
    },
    degree(e) {
      if (E2(e) || e == null) return e;
      const t = typeof e == 'string' && !e.endsWith('deg');
      return typeof e == 'number' || t ? `${e}deg` : e;
    },
    gradient: _2,
    blur: un('blur'),
    opacity: un('opacity'),
    brightness: un('brightness'),
    contrast: un('contrast'),
    dropShadow: un('drop-shadow'),
    grayscale: un('grayscale'),
    hueRotate: (e) => un('hue-rotate')(K.degree(e)),
    invert: un('invert'),
    saturate: un('saturate'),
    sepia: un('sepia'),
    bgImage(e) {
      return e == null || Jd(e) || Zd.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === '0' || String(e) === 'none';
      return e !== null && t
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: e };
    },
    flexDirection(e) {
      const { space: t, divide: n } = k2[e] ?? {},
        r = { flexDirection: e };
      return t && (r[t] = 1), n && (r[n] = 1), r;
    },
  },
  C = {
    borderWidths: It('borderWidths'),
    borderStyles: It('borderStyles'),
    colors: It('colors'),
    borders: It('borders'),
    gradients: It('gradients', K.gradient),
    radii: It('radii', K.px),
    space: It('space', La(K.vh, K.px)),
    spaceT: It('space', La(K.vh, K.px)),
    degreeT(e) {
      return { property: e, transform: K.degree };
    },
    prop(e, t, n) {
      return { property: e, scale: t, ...(t && { transform: Lh({ scale: t, transform: n }) }) };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: It('sizes', La(K.vh, K.px)),
    sizesT: It('sizes', La(K.vh, K.fraction)),
    shadows: It('shadows'),
    logical: y2,
    blur: It('blur', K.blur),
  },
  bl = {
    background: C.colors('background'),
    backgroundColor: C.colors('backgroundColor'),
    backgroundImage: C.gradients('backgroundImage'),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: K.bgClip },
    bgSize: C.prop('backgroundSize'),
    bgPosition: C.prop('backgroundPosition'),
    bg: C.colors('background'),
    bgColor: C.colors('backgroundColor'),
    bgPos: C.prop('backgroundPosition'),
    bgRepeat: C.prop('backgroundRepeat'),
    bgAttachment: C.prop('backgroundAttachment'),
    bgGradient: C.gradients('backgroundImage'),
    bgClip: { transform: K.bgClip },
  };
Object.assign(bl, { bgImage: bl.backgroundImage, bgImg: bl.backgroundImage });
const J = {
  border: C.borders('border'),
  borderWidth: C.borderWidths('borderWidth'),
  borderStyle: C.borderStyles('borderStyle'),
  borderColor: C.colors('borderColor'),
  borderRadius: C.radii('borderRadius'),
  borderTop: C.borders('borderTop'),
  borderBlockStart: C.borders('borderBlockStart'),
  borderTopLeftRadius: C.radii('borderTopLeftRadius'),
  borderStartStartRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
  }),
  borderEndStartRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' },
  }),
  borderTopRightRadius: C.radii('borderTopRightRadius'),
  borderStartEndRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
  }),
  borderEndEndRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' },
  }),
  borderRight: C.borders('borderRight'),
  borderInlineEnd: C.borders('borderInlineEnd'),
  borderBottom: C.borders('borderBottom'),
  borderBlockEnd: C.borders('borderBlockEnd'),
  borderBottomLeftRadius: C.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: C.radii('borderBottomRightRadius'),
  borderLeft: C.borders('borderLeft'),
  borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
  borderInlineStartRadius: C.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
  }),
  borderInlineEndRadius: C.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
  }),
  borderX: C.borders(['borderLeft', 'borderRight']),
  borderInline: C.borders('borderInline'),
  borderY: C.borders(['borderTop', 'borderBottom']),
  borderBlock: C.borders('borderBlock'),
  borderTopWidth: C.borderWidths('borderTopWidth'),
  borderBlockStartWidth: C.borderWidths('borderBlockStartWidth'),
  borderTopColor: C.colors('borderTopColor'),
  borderBlockStartColor: C.colors('borderBlockStartColor'),
  borderTopStyle: C.borderStyles('borderTopStyle'),
  borderBlockStartStyle: C.borderStyles('borderBlockStartStyle'),
  borderBottomWidth: C.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: C.borderWidths('borderBlockEndWidth'),
  borderBottomColor: C.colors('borderBottomColor'),
  borderBlockEndColor: C.colors('borderBlockEndColor'),
  borderBottomStyle: C.borderStyles('borderBottomStyle'),
  borderBlockEndStyle: C.borderStyles('borderBlockEndStyle'),
  borderLeftWidth: C.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: C.borderWidths('borderInlineStartWidth'),
  borderLeftColor: C.colors('borderLeftColor'),
  borderInlineStartColor: C.colors('borderInlineStartColor'),
  borderLeftStyle: C.borderStyles('borderLeftStyle'),
  borderInlineStartStyle: C.borderStyles('borderInlineStartStyle'),
  borderRightWidth: C.borderWidths('borderRightWidth'),
  borderInlineEndWidth: C.borderWidths('borderInlineEndWidth'),
  borderRightColor: C.colors('borderRightColor'),
  borderInlineEndColor: C.colors('borderInlineEndColor'),
  borderRightStyle: C.borderStyles('borderRightStyle'),
  borderInlineEndStyle: C.borderStyles('borderInlineEndStyle'),
  borderTopRadius: C.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: C.radii(['borderBottomLeftRadius', 'borderBottomRightRadius']),
  borderLeftRadius: C.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: C.radii(['borderTopRightRadius', 'borderBottomRightRadius']),
};
Object.assign(J, {
  rounded: J.borderRadius,
  roundedTop: J.borderTopRadius,
  roundedTopLeft: J.borderTopLeftRadius,
  roundedTopRight: J.borderTopRightRadius,
  roundedTopStart: J.borderStartStartRadius,
  roundedTopEnd: J.borderStartEndRadius,
  roundedBottom: J.borderBottomRadius,
  roundedBottomLeft: J.borderBottomLeftRadius,
  roundedBottomRight: J.borderBottomRightRadius,
  roundedBottomStart: J.borderEndStartRadius,
  roundedBottomEnd: J.borderEndEndRadius,
  roundedLeft: J.borderLeftRadius,
  roundedRight: J.borderRightRadius,
  roundedStart: J.borderInlineStartRadius,
  roundedEnd: J.borderInlineEndRadius,
  borderStart: J.borderInlineStart,
  borderEnd: J.borderInlineEnd,
  borderTopStartRadius: J.borderStartStartRadius,
  borderTopEndRadius: J.borderStartEndRadius,
  borderBottomStartRadius: J.borderEndStartRadius,
  borderBottomEndRadius: J.borderEndEndRadius,
  borderStartRadius: J.borderInlineStartRadius,
  borderEndRadius: J.borderInlineEndRadius,
  borderStartWidth: J.borderInlineStartWidth,
  borderEndWidth: J.borderInlineEndWidth,
  borderStartColor: J.borderInlineStartColor,
  borderEndColor: J.borderInlineEndColor,
  borderStartStyle: J.borderInlineStartStyle,
  borderEndStyle: J.borderInlineEndStyle,
});
const A2 = {
    color: C.colors('color'),
    textColor: C.colors('color'),
    fill: C.colors('fill'),
    stroke: C.colors('stroke'),
    accentColor: C.colors('accentColor'),
    textFillColor: C.colors('textFillColor'),
  },
  Xl = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: K.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: C.sizes('flexBasis'),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: C.space('gap'),
    rowGap: C.space('rowGap'),
    columnGap: C.space('columnGap'),
  };
Object.assign(Xl, { flexDir: Xl.flexDirection });
const Lt = {
  width: C.sizesT('width'),
  inlineSize: C.sizesT('inlineSize'),
  height: C.sizes('height'),
  blockSize: C.sizes('blockSize'),
  boxSize: C.sizes(['width', 'height']),
  minWidth: C.sizes('minWidth'),
  minInlineSize: C.sizes('minInlineSize'),
  minHeight: C.sizes('minHeight'),
  minBlockSize: C.sizes('minBlockSize'),
  maxWidth: C.sizes('maxWidth'),
  maxInlineSize: C.sizes('maxInlineSize'),
  maxHeight: C.sizes('maxHeight'),
  maxBlockSize: C.sizes('maxBlockSize'),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: 'breakpoints',
    transform: (e, t) => {
      var o, i;
      return {
        [`@media screen and (min-width: ${((i = (o = t.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : i.minW) ?? e})`]:
          { display: 'none' },
      };
    },
  },
  hideBelow: {
    scale: 'breakpoints',
    transform: (e, t) => {
      var o, i;
      return {
        [`@media screen and (max-width: ${((i = (o = t.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : i._minW) ?? e})`]:
          { display: 'none' },
      };
    },
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: C.propT('float', K.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0,
};
Object.assign(Lt, {
  w: Lt.width,
  h: Lt.height,
  minW: Lt.minWidth,
  maxW: Lt.maxWidth,
  minH: Lt.minHeight,
  maxH: Lt.maxHeight,
  overscroll: Lt.overscrollBehavior,
  overscrollX: Lt.overscrollBehaviorX,
  overscrollY: Lt.overscrollBehaviorY,
});
const R2 = {
    filter: { transform: K.filter },
    blur: C.blur('--chakra-blur'),
    brightness: C.propT('--chakra-brightness', K.brightness),
    contrast: C.propT('--chakra-contrast', K.contrast),
    hueRotate: C.propT('--chakra-hue-rotate', K.hueRotate),
    invert: C.propT('--chakra-invert', K.invert),
    saturate: C.propT('--chakra-saturate', K.saturate),
    dropShadow: C.propT('--chakra-drop-shadow', K.dropShadow),
    backdropFilter: { transform: K.backdropFilter },
    backdropBlur: C.blur('--chakra-backdrop-blur'),
    backdropBrightness: C.propT('--chakra-backdrop-brightness', K.brightness),
    backdropContrast: C.propT('--chakra-backdrop-contrast', K.contrast),
    backdropHueRotate: C.propT('--chakra-backdrop-hue-rotate', K.hueRotate),
    backdropInvert: C.propT('--chakra-backdrop-invert', K.invert),
    backdropSaturate: C.propT('--chakra-backdrop-saturate', K.saturate),
  },
  M2 = {
    ring: { transform: K.ring },
    ringColor: C.colors('--chakra-ring-color'),
    ringOffset: C.prop('--chakra-ring-offset-width'),
    ringOffsetColor: C.colors('--chakra-ring-offset-color'),
    ringInset: C.prop('--chakra-ring-inset'),
  },
  j2 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: K.outline },
    outlineOffset: !0,
    outlineColor: C.colors('outlineColor'),
  },
  w1 = {
    gridGap: C.space('gridGap'),
    gridColumnGap: C.space('gridColumnGap'),
    gridRowGap: C.space('gridRowGap'),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  };
function z2(e, t, n, r) {
  const o = typeof t == 'string' ? t.split('.') : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
const F2 = (e) => {
    const t = new WeakMap();
    return (r, o, i, s) => {
      if (typeof r > 'u') return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const a = t.get(r);
      if (a.has(o)) return a.get(o);
      const l = e(r, o, i, s);
      return a.set(o, l), l;
    };
  },
  I2 = F2(z2),
  D2 = {
    border: '0px',
    clip: 'rect(0, 0, 0, 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
  },
  L2 = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  Iu = (e, t, n) => {
    const r = {},
      o = I2(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  O2 = {
    srOnly: {
      transform(e) {
        return e === !0 ? D2 : e === 'focusable' ? L2 : {};
      },
    },
    layerStyle: { processResult: !0, transform: (e, t, n) => Iu(t, `layerStyles.${e}`, n) },
    textStyle: { processResult: !0, transform: (e, t, n) => Iu(t, `textStyles.${e}`, n) },
    apply: { processResult: !0, transform: (e, t, n) => Iu(t, e, n) },
  },
  fs = {
    position: !0,
    pos: C.prop('position'),
    zIndex: C.prop('zIndex', 'zIndices'),
    inset: C.spaceT('inset'),
    insetX: C.spaceT(['left', 'right']),
    insetInline: C.spaceT('insetInline'),
    insetY: C.spaceT(['top', 'bottom']),
    insetBlock: C.spaceT('insetBlock'),
    top: C.spaceT('top'),
    insetBlockStart: C.spaceT('insetBlockStart'),
    bottom: C.spaceT('bottom'),
    insetBlockEnd: C.spaceT('insetBlockEnd'),
    left: C.spaceT('left'),
    insetInlineStart: C.logical({ scale: 'space', property: { ltr: 'left', rtl: 'right' } }),
    right: C.spaceT('right'),
    insetInlineEnd: C.logical({ scale: 'space', property: { ltr: 'right', rtl: 'left' } }),
  };
Object.assign(fs, { insetStart: fs.insetInlineStart, insetEnd: fs.insetInlineEnd });
const ef = {
  boxShadow: C.shadows('boxShadow'),
  mixBlendMode: !0,
  blendMode: C.prop('mixBlendMode'),
  backgroundBlendMode: !0,
  bgBlendMode: C.prop('backgroundBlendMode'),
  opacity: !0,
};
Object.assign(ef, { shadow: ef.boxShadow });
const ge = {
  margin: C.spaceT('margin'),
  marginTop: C.spaceT('marginTop'),
  marginBlockStart: C.spaceT('marginBlockStart'),
  marginRight: C.spaceT('marginRight'),
  marginInlineEnd: C.spaceT('marginInlineEnd'),
  marginBottom: C.spaceT('marginBottom'),
  marginBlockEnd: C.spaceT('marginBlockEnd'),
  marginLeft: C.spaceT('marginLeft'),
  marginInlineStart: C.spaceT('marginInlineStart'),
  marginX: C.spaceT(['marginInlineStart', 'marginInlineEnd']),
  marginInline: C.spaceT('marginInline'),
  marginY: C.spaceT(['marginTop', 'marginBottom']),
  marginBlock: C.spaceT('marginBlock'),
  padding: C.space('padding'),
  paddingTop: C.space('paddingTop'),
  paddingBlockStart: C.space('paddingBlockStart'),
  paddingRight: C.space('paddingRight'),
  paddingBottom: C.space('paddingBottom'),
  paddingBlockEnd: C.space('paddingBlockEnd'),
  paddingLeft: C.space('paddingLeft'),
  paddingInlineStart: C.space('paddingInlineStart'),
  paddingInlineEnd: C.space('paddingInlineEnd'),
  paddingX: C.space(['paddingInlineStart', 'paddingInlineEnd']),
  paddingInline: C.space('paddingInline'),
  paddingY: C.space(['paddingTop', 'paddingBottom']),
  paddingBlock: C.space('paddingBlock'),
};
Object.assign(ge, {
  m: ge.margin,
  mt: ge.marginTop,
  mr: ge.marginRight,
  me: ge.marginInlineEnd,
  marginEnd: ge.marginInlineEnd,
  mb: ge.marginBottom,
  ml: ge.marginLeft,
  ms: ge.marginInlineStart,
  marginStart: ge.marginInlineStart,
  mx: ge.marginX,
  my: ge.marginY,
  p: ge.padding,
  pt: ge.paddingTop,
  py: ge.paddingY,
  px: ge.paddingX,
  pb: ge.paddingBottom,
  pl: ge.paddingLeft,
  ps: ge.paddingInlineStart,
  paddingStart: ge.paddingInlineStart,
  pr: ge.paddingRight,
  pe: ge.paddingInlineEnd,
  paddingEnd: ge.paddingInlineEnd,
});
const N2 = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: C.spaceT('scrollMargin'),
    scrollMarginTop: C.spaceT('scrollMarginTop'),
    scrollMarginBottom: C.spaceT('scrollMarginBottom'),
    scrollMarginLeft: C.spaceT('scrollMarginLeft'),
    scrollMarginRight: C.spaceT('scrollMarginRight'),
    scrollMarginX: C.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
    scrollMarginY: C.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
    scrollPadding: C.spaceT('scrollPadding'),
    scrollPaddingTop: C.spaceT('scrollPaddingTop'),
    scrollPaddingBottom: C.spaceT('scrollPaddingBottom'),
    scrollPaddingLeft: C.spaceT('scrollPaddingLeft'),
    scrollPaddingRight: C.spaceT('scrollPaddingRight'),
    scrollPaddingX: C.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
    scrollPaddingY: C.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
  },
  B2 = {
    fontFamily: C.prop('fontFamily', 'fonts'),
    fontSize: C.prop('fontSize', 'fontSizes', K.px),
    fontWeight: C.prop('fontWeight', 'fontWeights'),
    lineHeight: C.prop('lineHeight', 'lineHeights'),
    letterSpacing: C.prop('letterSpacing', 'letterSpacings'),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0) return { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };
      },
    },
    noOfLines: {
      static: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 'var(--chakra-line-clamp)',
      },
      property: '--chakra-line-clamp',
    },
  },
  V2 = {
    textDecorationColor: C.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: C.shadows('textShadow'),
  },
  W2 = {
    clipPath: !0,
    transform: C.propT('transform', K.transform),
    transformOrigin: !0,
    translateX: C.spaceT('--chakra-translate-x'),
    translateY: C.spaceT('--chakra-translate-y'),
    skewX: C.degreeT('--chakra-skew-x'),
    skewY: C.degreeT('--chakra-skew-y'),
    scaleX: C.prop('--chakra-scale-x'),
    scaleY: C.prop('--chakra-scale-y'),
    scale: C.prop(['--chakra-scale-x', '--chakra-scale-y']),
    rotate: C.degreeT('--chakra-rotate'),
  },
  U2 = {
    listStyleType: !0,
    listStylePosition: !0,
    listStylePos: C.prop('listStylePosition'),
    listStyleImage: !0,
    listStyleImg: C.prop('listStyleImage'),
  },
  H2 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: C.prop('transitionDuration', 'transition.duration'),
    transitionProperty: C.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: C.prop('transitionTimingFunction', 'transition.easing'),
  },
  Oh = bn({}, bl, J, A2, Xl, Lt, R2, M2, j2, w1, O2, fs, ef, ge, N2, B2, V2, W2, U2, H2),
  G2 = Object.assign({}, ge, Lt, Xl, w1, fs),
  K2 = Object.keys(G2),
  Y2 = (e) => [...Object.keys(Oh), ...S1(e)],
  X2 = (e) => {
    const t = zc(e),
      n = { ...Oh, ...t };
    return (r) => Object.hasOwnProperty.call(n, r);
  },
  q2 = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const s in e) {
      let a = Vt(e[s], t);
      if (a == null) continue;
      if (((a = Ut(a) && n(a) ? r(a) : a), !Array.isArray(a))) {
        i[s] = a;
        continue;
      }
      const l = a.slice(0, o.length).length;
      for (let c = 0; c < l; c += 1) {
        const u = o == null ? void 0 : o[c];
        if (!u) {
          i[s] = a[c];
          continue;
        }
        (i[u] = i[u] || {}), a[c] != null && (i[u][s] = a[c]);
      }
    }
    return i;
  };
function Q2(e) {
  const t = [];
  let n = '',
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === '('
      ? ((r = !0), (n += i))
      : i === ')'
        ? ((r = !1), (n += i))
        : i === ',' && !r
          ? (t.push(n), (n = ''))
          : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function Z2(e) {
  return /^var\(--.+\)$/.test(e);
}
const J2 = (e, t) => e.startsWith('--') && typeof t == 'string' && !Z2(t),
  eP = (e, t) => {
    if (t == null) return t;
    const n = (s) => {
        var a, l;
        return (l = (a = e.__cssMap) == null ? void 0 : a[s]) == null ? void 0 : l.varRef;
      },
      r = (s) => n(s) ?? s,
      [o, i] = Q2(t);
    return (t = n(o) ?? r(i) ?? r(t)), t;
  };
function tP(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, s = !1) => {
      var u;
      const a = Vt(i, r),
        l = q2(a)(r);
      let c = {};
      for (let d in l) {
        const f = l[d];
        let p = Vt(f, r);
        d in n && (d = n[d]), J2(d, p) && (p = eP(r, p));
        let v = t[d];
        if ((v === !0 && (v = { property: d }), Ut(p))) {
          (c[d] = c[d] ?? {}), (c[d] = bn({}, c[d], o(p, !0)));
          continue;
        }
        let g = ((u = v == null ? void 0 : v.transform) == null ? void 0 : u.call(v, p, r, a)) ?? p;
        g = v != null && v.processResult ? o(g, !0) : g;
        const w = Vt(v == null ? void 0 : v.property, r);
        if (!s && v != null && v.static) {
          const m = Vt(v.static, r);
          c = bn({}, c, m);
        }
        if (w && Array.isArray(w)) {
          for (const m of w) c[m] = g;
          continue;
        }
        if (w) {
          w === '&' && Ut(g) ? (c = bn({}, c, g)) : (c[w] = g);
          continue;
        }
        if (Ut(g)) {
          c = bn({}, c, g);
          continue;
        }
        c[d] = g;
      }
      return c;
    };
  return o;
}
const k1 = (e) => (t) => tP({ theme: t, pseudos: zc(t), configs: Oh })(e);
function pe(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function nP(e, t) {
  if (Array.isArray(e)) return e;
  if (Ut(e)) return t(e);
  if (e != null) return [e];
}
function rP(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function oP(e) {
  const t = e.__breakpoints;
  return function (r, o, i, s) {
    var f, p;
    if (!t) return;
    const a = {},
      l = nP(i, t.toArrayValue);
    if (!l) return a;
    const c = l.length,
      u = c === 1,
      d = !!r.parts;
    for (let v = 0; v < c; v++) {
      const g = t.details[v],
        w = t.details[rP(l, v)],
        m = Zi(g.minW, w == null ? void 0 : w._minW),
        h = Vt((f = r[o]) == null ? void 0 : f[l[v]], s);
      if (h) {
        if (d) {
          (p = r.parts) == null ||
            p.forEach((y) => {
              bn(a, { [y]: u ? h[y] : { [m]: h[y] } });
            });
          continue;
        }
        if (!d) {
          u ? bn(a, h) : (a[m] = h);
          continue;
        }
        a[m] = h;
      }
    }
    return a;
  };
}
function iP(e) {
  return (t) => {
    const { variant: n, size: r, theme: o } = t,
      i = oP(o);
    return bn({}, Vt(e.baseStyle ?? {}, t), i(e, 'sizes', r, t), i(e, 'variants', n, t));
  };
}
function Yt(e) {
  return Dh(e, ['styleConfig', 'size', 'variant', 'colorScheme']);
}
function C1(e) {
  return Ut(e) && e.reference ? e.reference : String(e);
}
const Fc = (e, ...t) => t.map(C1).join(` ${e} `).replace(/calc/g, ''),
  Tg = (...e) => `calc(${Fc('+', ...e)})`,
  Pg = (...e) => `calc(${Fc('-', ...e)})`,
  tf = (...e) => `calc(${Fc('*', ...e)})`,
  _g = (...e) => `calc(${Fc('/', ...e)})`,
  Eg = (e) => {
    const t = C1(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : tf(t, -1);
  },
  jn = Object.assign(
    (e) => ({
      add: (...t) => jn(Tg(e, ...t)),
      subtract: (...t) => jn(Pg(e, ...t)),
      multiply: (...t) => jn(tf(e, ...t)),
      divide: (...t) => jn(_g(e, ...t)),
      negate: () => jn(Eg(e)),
      toString: () => e.toString(),
    }),
    { add: Tg, subtract: Pg, multiply: tf, divide: _g, negate: Eg }
  );
function sP(e, t = '-') {
  return e.replace(/\s+/g, t);
}
function aP(e) {
  const t = sP(e.toString());
  return cP(lP(t));
}
function lP(e) {
  return e.includes('\\.')
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
      ? e.replace('.', '\\.')
      : e;
}
function cP(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, '\\$&');
}
function uP(e, t = '') {
  return [t, e].filter(Boolean).join('-');
}
function dP(e, t) {
  return `var(${e}${t ? `, ${t}` : ''})`;
}
function fP(e, t = '') {
  return aP(`--${uP(e, t)}`);
}
function O(e, t, n) {
  const r = fP(e, n);
  return { variable: r, reference: dP(r, t) };
}
function hP(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = O(`${e}-${o}`, i);
      continue;
    }
    n[r] = O(`${e}-${r}`);
  }
  return n;
}
const pP = [
  'colors',
  'borders',
  'borderWidths',
  'borderStyles',
  'fonts',
  'fontSizes',
  'fontWeights',
  'gradients',
  'letterSpacings',
  'lineHeights',
  'radii',
  'space',
  'shadows',
  'sizes',
  'zIndices',
  'transition',
  'blur',
  'breakpoints',
];
function mP(e) {
  return r2(e, pP);
}
function gP(e) {
  return e.semanticTokens;
}
function yP(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
function vP(e) {
  const t = mP(e),
    n = gP(e),
    r = S1(e),
    o = (s) => r.includes(s) || s === 'default',
    i = {};
  return (
    kg(t, (s, a) => {
      s != null && (i[a.join('.')] = { isSemantic: !1, value: s });
    }),
    kg(
      n,
      (s, a) => {
        s != null && (i[a.join('.')] = { isSemantic: !0, value: s });
      },
      { stop: (s) => Object.keys(s).every(o) }
    ),
    i
  );
}
function $g(e, t) {
  return O(String(e).replace(/\./g, '-'), void 0, t);
}
function bP(e) {
  var a;
  const t = vP(e),
    n = (a = e.config) == null ? void 0 : a.cssVarPrefix,
    r = zc(e);
  let o = {};
  const i = {};
  function s(l, c) {
    const d = [String(l).split('.')[0], c].join('.');
    if (!t[d]) return c;
    const { reference: p } = $g(d, n);
    return p;
  }
  for (const [l, c] of Object.entries(t)) {
    const { isSemantic: u, value: d } = c,
      { variable: f, reference: p } = $g(l, n);
    if (!u) {
      if (l.startsWith('space')) {
        const g = l.split('.'),
          [w, ...m] = g,
          h = `${w}.-${m.join('.')}`,
          y = jn.negate(d),
          k = jn.negate(p);
        i[h] = { value: y, var: f, varRef: k };
      }
      (o[f] = d), (i[l] = { value: d, var: f, varRef: p });
      continue;
    }
    const v = Ut(d) ? d : { default: d };
    (o = bn(
      o,
      Object.entries(v).reduce((g, [w, m]) => {
        if (!m) return g;
        const h = s(l, `${m}`);
        if (w === 'default') return (g[f] = h), g;
        const y = (r == null ? void 0 : r[w]) ?? w;
        return (g[y] = { [f]: h }), g;
      }, {})
    )),
      (i[l] = { value: p, var: f, varRef: p });
  }
  return { cssVars: o, cssMap: i };
}
function SP(e) {
  const t = yP(e),
    { cssMap: n, cssVars: r } = bP(t),
    o = {
      '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
      '--chakra-ring-offset-width': '0px',
      '--chakra-ring-offset-color': '#fff',
      '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
      '--chakra-ring-offset-shadow': '0 0 #0000',
      '--chakra-ring-shadow': '0 0 #0000',
      '--chakra-space-x-reverse': '0',
      '--chakra-space-y-reverse': '0',
    },
    i = X2(t);
  return (
    Object.assign(t, {
      __cssVars: { ...o, ...r },
      __cssMap: n,
      __breakpoints: UT(t.breakpoints),
      __isStyleProp: i,
    }),
    t
  );
}
function re(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
    );
  }
  function o(...u) {
    r();
    for (const d of u) t[d] = l(d);
    return re(e, t);
  }
  function i(...u) {
    for (const d of u) d in t || (t[d] = l(d));
    return re(e, t);
  }
  function s() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.selector]));
  }
  function a() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.className]));
  }
  function l(u) {
    const p = `chakra-${(['container', 'root'].includes(u ?? '') ? [e] : [e, u]).filter(Boolean).join('__')}`;
    return { className: p, selector: `.${p}`, toString: () => u };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: s,
    classnames: a,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
const xP = re('accordion').parts('root', 'container', 'button', 'panel', 'icon'),
  wP = re('alert').parts('title', 'description', 'container', 'icon', 'spinner'),
  kP = re('avatar').parts('label', 'badge', 'container', 'excessLabel', 'group'),
  CP = re('breadcrumb').parts('link', 'item', 'container', 'separator');
re('button').parts();
const TP = re('checkbox').parts('control', 'icon', 'container', 'label');
re('progress').parts('track', 'filledTrack', 'label');
const PP = re('drawer').parts(
    'overlay',
    'dialogContainer',
    'dialog',
    'header',
    'closeButton',
    'body',
    'footer'
  ),
  _P = re('editable').parts('preview', 'input', 'textarea'),
  EP = re('form').parts('container', 'requiredIndicator', 'helperText'),
  $P = re('formError').parts('text', 'icon'),
  AP = re('input').parts('addon', 'field', 'element', 'group'),
  RP = re('list').parts('container', 'item', 'icon'),
  MP = re('menu').parts('button', 'list', 'item', 'groupTitle', 'icon', 'command', 'divider'),
  jP = re('modal').parts(
    'overlay',
    'dialogContainer',
    'dialog',
    'header',
    'closeButton',
    'body',
    'footer'
  ),
  zP = re('numberinput').parts('root', 'field', 'stepperGroup', 'stepper');
re('pininput').parts('field');
const FP = re('popover').parts(
    'content',
    'header',
    'body',
    'footer',
    'popper',
    'arrow',
    'closeButton'
  ),
  IP = re('progress').parts('label', 'filledTrack', 'track'),
  DP = re('radio').parts('container', 'control', 'label'),
  LP = re('select').parts('field', 'icon'),
  OP = re('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
  NP = re('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  BP = re('switch').parts('container', 'track', 'thumb', 'label'),
  VP = re('table').parts('table', 'thead', 'tbody', 'tr', 'th', 'td', 'tfoot', 'caption'),
  WP = re('tabs').parts('root', 'tab', 'tablist', 'tabpanel', 'tabpanels', 'indicator'),
  UP = re('tag').parts('container', 'label', 'closeButton'),
  HP = re('card').parts('container', 'header', 'body', 'footer');
re('stepper').parts(
  'stepper',
  'step',
  'title',
  'description',
  'indicator',
  'separator',
  'icon',
  'number'
);
const { definePartsStyle: GP, defineMultiStyleConfig: KP } = pe(xP.keys),
  YP = { borderTopWidth: '1px', borderColor: 'inherit', _last: { borderBottomWidth: '1px' } },
  XP = {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    fontSize: 'md',
    _focusVisible: { boxShadow: 'outline' },
    _hover: { bg: 'blackAlpha.50' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    px: '4',
    py: '2',
  },
  qP = { pt: '2', px: '4', pb: '5' },
  QP = { fontSize: '1.25em' },
  ZP = GP({ container: YP, button: XP, panel: qP, icon: QP }),
  JP = KP({ baseStyle: ZP });
function Br(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class e_ extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Ji = e_;
function Nh(e) {
  if (typeof e != 'string') throw new Ji(e);
  if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0];
  let t = e.trim();
  t = l_.test(e) ? r_(e) : e;
  const n = o_.exec(t);
  if (n) {
    const s = Array.from(n).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(As(a, 2), 16)),
      parseInt(As(s[3] || 'f', 2), 16) / 255,
    ];
  }
  const r = i_.exec(t);
  if (r) {
    const s = Array.from(r).slice(1);
    return [...s.slice(0, 3).map((a) => parseInt(a, 16)), parseInt(s[3] || 'ff', 16) / 255];
  }
  const o = s_.exec(t);
  if (o) {
    const s = Array.from(o).slice(1);
    return [...s.slice(0, 3).map((a) => parseInt(a, 10)), parseFloat(s[3] || '1')];
  }
  const i = a_.exec(t);
  if (i) {
    const [s, a, l, c] = Array.from(i).slice(1).map(parseFloat);
    if (Br(0, 100, a) !== a) throw new Ji(e);
    if (Br(0, 100, l) !== l) throw new Ji(e);
    return [...c_(s, a, l), Number.isNaN(c) ? 1 : c];
  }
  throw new Ji(e);
}
function t_(e) {
  let t = 5381,
    n = e.length;
  for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Ag = (e) => parseInt(e.replace(/_/g, ''), 36),
  n_ =
    '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
      .split(' ')
      .reduce((e, t) => {
        const n = Ag(t.substring(0, 3)),
          r = Ag(t.substring(3)).toString(16);
        let o = '';
        for (let i = 0; i < 6 - r.length; i++) o += '0';
        return (e[n] = `${o}${r}`), e;
      }, {});
function r_(e) {
  const t = e.toLowerCase().trim(),
    n = n_[t_(t)];
  if (!n) throw new Ji(e);
  return `#${n}`;
}
const As = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(''),
  o_ = new RegExp(`^#${As('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
  i_ = new RegExp(`^#${As('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
  s_ = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${As(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    'i'
  ),
  a_ = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  l_ = /^[a-z]+$/i,
  Rg = (e) => Math.round(e * 255),
  c_ = (e, t, n) => {
    let r = n / 100;
    if (t === 0) return [r, r, r].map(Rg);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * (t / 100),
      s = i * (1 - Math.abs((o % 2) - 1));
    let a = 0,
      l = 0,
      c = 0;
    o >= 0 && o < 1
      ? ((a = i), (l = s))
      : o >= 1 && o < 2
        ? ((a = s), (l = i))
        : o >= 2 && o < 3
          ? ((l = i), (c = s))
          : o >= 3 && o < 4
            ? ((l = s), (c = i))
            : o >= 4 && o < 5
              ? ((a = s), (c = i))
              : o >= 5 && o < 6 && ((a = i), (c = s));
    const u = r - i / 2,
      d = a + u,
      f = l + u,
      p = c + u;
    return [d, f, p].map(Rg);
  };
function u_(e, t, n, r) {
  return `rgba(${Br(0, 255, e).toFixed()}, ${Br(0, 255, t).toFixed()}, ${Br(0, 255, n).toFixed()}, ${parseFloat(Br(0, 1, r).toFixed(3))})`;
}
function d_(e, t) {
  const [n, r, o, i] = Nh(e);
  return u_(n, r, o, i - t);
}
function f_(e) {
  const [t, n, r, o] = Nh(e);
  let i = (s) => {
    const a = Br(0, 255, s).toString(16);
    return a.length === 1 ? `0${a}` : a;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ''}`;
}
const h_ = (e) => Object.keys(e).length === 0;
function p_(e, t, n, r, o) {
  for (t = t.split ? t.split('.') : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
const st = (e, t, n) => {
    const r = p_(e, `colors.${t}`, t);
    try {
      return f_(r), r;
    } catch {
      return '#000000';
    }
  },
  m_ = (e) => {
    const [t, n, r] = Nh(e);
    return (t * 299 + n * 587 + r * 114) / 1e3;
  },
  g_ = (e) => (t) => {
    const n = st(t, e);
    return m_(n) < 128 ? 'dark' : 'light';
  },
  y_ = (e) => (t) => g_(e)(t) === 'dark',
  fi = (e, t) => (n) => {
    const r = st(n, e);
    return d_(r, 1 - t);
  };
function Mg(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
const v_ = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`;
function b_(e) {
  const t = v_();
  return !e || h_(e)
    ? t
    : e.string && e.colors
      ? x_(e.string, e.colors)
      : e.string && !e.colors
        ? S_(e.string)
        : e.colors && !e.string
          ? w_(e.colors)
          : t;
}
function S_(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let r = 0; r < e.length; r += 1) (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  let n = '#';
  for (let r = 0; r < 3; r += 1) {
    const o = (t >> (r * 8)) & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function x_(e, t) {
  let n = 0;
  if (e.length === 0) return t[0];
  for (let r = 0; r < e.length; r += 1) (n = e.charCodeAt(r) + ((n << 5) - n)), (n = n & n);
  return (n = ((n % t.length) + t.length) % t.length), t[n];
}
function w_(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function L(e, t) {
  return (n) => (n.colorMode === 'dark' ? t : e);
}
function Bh(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? (t === 'vertical' ? n : r) : {};
}
function T1(e) {
  return Ut(e) && e.reference ? e.reference : String(e);
}
const Ic = (e, ...t) => t.map(T1).join(` ${e} `).replace(/calc/g, ''),
  jg = (...e) => `calc(${Ic('+', ...e)})`,
  zg = (...e) => `calc(${Ic('-', ...e)})`,
  nf = (...e) => `calc(${Ic('*', ...e)})`,
  Fg = (...e) => `calc(${Ic('/', ...e)})`,
  Ig = (e) => {
    const t = T1(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : nf(t, -1);
  },
  zn = Object.assign(
    (e) => ({
      add: (...t) => zn(jg(e, ...t)),
      subtract: (...t) => zn(zg(e, ...t)),
      multiply: (...t) => zn(nf(e, ...t)),
      divide: (...t) => zn(Fg(e, ...t)),
      negate: () => zn(Ig(e)),
      toString: () => e.toString(),
    }),
    { add: jg, subtract: zg, multiply: nf, divide: Fg, negate: Ig }
  );
function k_(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function C_(e, t = '-') {
  return e.replace(/\s+/g, t);
}
function P1(e) {
  const t = C_(e.toString());
  return t.includes('\\.') ? e : k_(e) ? t.replace('.', '\\.') : e;
}
function T_(e, t = '') {
  return [t, P1(e)].filter(Boolean).join('-');
}
function P_(e, t) {
  return `var(${P1(e)}${t ? `, ${t}` : ''})`;
}
function __(e, t = '') {
  return `--${T_(e, t)}`;
}
function De(e, t) {
  const n = __(e, t == null ? void 0 : t.prefix);
  return { variable: n, reference: P_(n, E_(t == null ? void 0 : t.fallback)) };
}
function E_(e) {
  return e == null ? void 0 : e.reference;
}
const { definePartsStyle: da, defineMultiStyleConfig: $_ } = pe(wP.keys),
  Pt = O('alert-fg'),
  Gn = O('alert-bg'),
  A_ = da({
    container: { bg: Gn.reference, px: '4', py: '3' },
    title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
    description: { lineHeight: '6' },
    icon: { color: Pt.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '6' },
    spinner: { color: Pt.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '5' },
  });
function Vh(e) {
  const { theme: t, colorScheme: n } = e,
    r = fi(`${n}.200`, 0.16)(t);
  return { light: `colors.${n}.100`, dark: r };
}
const R_ = da((e) => {
    const { colorScheme: t } = e,
      n = Vh(e);
    return {
      container: {
        [Pt.variable]: `colors.${t}.600`,
        [Gn.variable]: n.light,
        _dark: { [Pt.variable]: `colors.${t}.200`, [Gn.variable]: n.dark },
      },
    };
  }),
  M_ = da((e) => {
    const { colorScheme: t } = e,
      n = Vh(e);
    return {
      container: {
        [Pt.variable]: `colors.${t}.600`,
        [Gn.variable]: n.light,
        _dark: { [Pt.variable]: `colors.${t}.200`, [Gn.variable]: n.dark },
        paddingStart: '3',
        borderStartWidth: '4px',
        borderStartColor: Pt.reference,
      },
    };
  }),
  j_ = da((e) => {
    const { colorScheme: t } = e,
      n = Vh(e);
    return {
      container: {
        [Pt.variable]: `colors.${t}.600`,
        [Gn.variable]: n.light,
        _dark: { [Pt.variable]: `colors.${t}.200`, [Gn.variable]: n.dark },
        pt: '2',
        borderTopWidth: '4px',
        borderTopColor: Pt.reference,
      },
    };
  }),
  z_ = da((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [Pt.variable]: 'colors.white',
        [Gn.variable]: `colors.${t}.600`,
        _dark: { [Pt.variable]: 'colors.gray.900', [Gn.variable]: `colors.${t}.200` },
        color: Pt.reference,
      },
    };
  }),
  F_ = { subtle: R_, 'left-accent': M_, 'top-accent': j_, solid: z_ },
  I_ = $_({
    baseStyle: A_,
    variants: F_,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' },
  }),
  _1 = {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  D_ = {
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    prose: '60ch',
  },
  L_ = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  E1 = { ..._1, ...D_, container: L_ },
  O_ = (e) => typeof e == 'function';
function at(e, ...t) {
  return O_(e) ? e(...t) : e;
}
const { definePartsStyle: $1, defineMultiStyleConfig: N_ } = pe(kP.keys),
  Zo = O('avatar-border-color'),
  hs = O('avatar-bg'),
  Rs = O('avatar-font-size'),
  hi = O('avatar-size'),
  B_ = {
    borderRadius: 'full',
    border: '0.2em solid',
    borderColor: Zo.reference,
    [Zo.variable]: 'white',
    _dark: { [Zo.variable]: 'colors.gray.800' },
  },
  V_ = {
    bg: hs.reference,
    fontSize: Rs.reference,
    width: hi.reference,
    height: hi.reference,
    lineHeight: '1',
    [hs.variable]: 'colors.gray.200',
    _dark: { [hs.variable]: 'colors.whiteAlpha.400' },
  },
  W_ = (e) => {
    const { name: t, theme: n } = e,
      r = t ? b_({ string: t }) : 'colors.gray.400',
      o = y_(r)(n);
    let i = 'white';
    return (
      o || (i = 'gray.800'),
      {
        bg: hs.reference,
        fontSize: Rs.reference,
        color: i,
        borderColor: Zo.reference,
        verticalAlign: 'top',
        width: hi.reference,
        height: hi.reference,
        '&:not([data-loaded])': { [hs.variable]: r },
        [Zo.variable]: 'colors.white',
        _dark: { [Zo.variable]: 'colors.gray.800' },
      }
    );
  },
  U_ = { fontSize: Rs.reference, lineHeight: '1' },
  H_ = $1((e) => ({ badge: at(B_, e), excessLabel: at(V_, e), container: at(W_, e), label: U_ }));
function Jn(e) {
  const t = e !== '100%' ? E1[e] : void 0;
  return $1({
    container: { [hi.variable]: t ?? e, [Rs.variable]: `calc(${t ?? e} / 2.5)` },
    excessLabel: { [hi.variable]: t ?? e, [Rs.variable]: `calc(${t ?? e} / 2.5)` },
  });
}
const G_ = {
    '2xs': Jn(4),
    xs: Jn(6),
    sm: Jn(8),
    md: Jn(12),
    lg: Jn(16),
    xl: Jn(24),
    '2xl': Jn(32),
    full: Jn('100%'),
  },
  K_ = N_({ baseStyle: H_, sizes: G_, defaultProps: { size: 'md' } }),
  Ae = hP('badge', ['bg', 'color', 'shadow']),
  Y_ = {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
    bg: Ae.bg.reference,
    color: Ae.color.reference,
    boxShadow: Ae.shadow.reference,
  },
  X_ = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = fi(`${t}.500`, 0.6)(n);
    return {
      [Ae.bg.variable]: `colors.${t}.500`,
      [Ae.color.variable]: 'colors.white',
      _dark: { [Ae.bg.variable]: r, [Ae.color.variable]: 'colors.whiteAlpha.800' },
    };
  },
  q_ = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = fi(`${t}.200`, 0.16)(n);
    return {
      [Ae.bg.variable]: `colors.${t}.100`,
      [Ae.color.variable]: `colors.${t}.800`,
      _dark: { [Ae.bg.variable]: r, [Ae.color.variable]: `colors.${t}.200` },
    };
  },
  Q_ = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = fi(`${t}.200`, 0.8)(n);
    return {
      [Ae.color.variable]: `colors.${t}.500`,
      _dark: { [Ae.color.variable]: r },
      [Ae.shadow.variable]: `inset 0 0 0px 1px ${Ae.color.reference}`,
    };
  },
  Z_ = { solid: X_, subtle: q_, outline: Q_ },
  ps = { baseStyle: Y_, variants: Z_, defaultProps: { variant: 'subtle', colorScheme: 'gray' } },
  { defineMultiStyleConfig: J_, definePartsStyle: eE } = pe(CP.keys),
  Du = O('breadcrumb-link-decor'),
  tE = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    outline: 'none',
    color: 'inherit',
    textDecoration: Du.reference,
    [Du.variable]: 'none',
    '&:not([aria-current=page])': {
      cursor: 'pointer',
      _hover: { [Du.variable]: 'underline' },
      _focusVisible: { boxShadow: 'outline' },
    },
  },
  nE = eE({ link: tE }),
  rE = J_({ baseStyle: nE }),
  oE = {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusVisible: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: { _disabled: { bg: 'initial' } },
  },
  A1 = (e) => {
    const { colorScheme: t, theme: n } = e;
    if (t === 'gray')
      return {
        color: L('gray.800', 'whiteAlpha.900')(e),
        _hover: { bg: L('gray.100', 'whiteAlpha.200')(e) },
        _active: { bg: L('gray.200', 'whiteAlpha.300')(e) },
      };
    const r = fi(`${t}.200`, 0.12)(n),
      o = fi(`${t}.200`, 0.24)(n);
    return {
      color: L(`${t}.600`, `${t}.200`)(e),
      bg: 'transparent',
      _hover: { bg: L(`${t}.50`, r)(e) },
      _active: { bg: L(`${t}.100`, o)(e) },
    };
  },
  iE = (e) => {
    const { colorScheme: t } = e,
      n = L('gray.200', 'whiteAlpha.300')(e);
    return {
      border: '1px solid',
      borderColor: t === 'gray' ? n : 'currentColor',
      '.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)': {
        marginEnd: '-1px',
      },
      '.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)': {
        marginBottom: '-1px',
      },
      ...at(A1, e),
    };
  },
  sE = {
    yellow: { bg: 'yellow.400', color: 'black', hoverBg: 'yellow.500', activeBg: 'yellow.600' },
    cyan: { bg: 'cyan.400', color: 'black', hoverBg: 'cyan.500', activeBg: 'cyan.600' },
  },
  aE = (e) => {
    const { colorScheme: t } = e;
    if (t === 'gray') {
      const a = L('gray.100', 'whiteAlpha.200')(e);
      return {
        bg: a,
        color: L('gray.800', 'whiteAlpha.900')(e),
        _hover: { bg: L('gray.200', 'whiteAlpha.300')(e), _disabled: { bg: a } },
        _active: { bg: L('gray.300', 'whiteAlpha.400')(e) },
      };
    }
    const {
        bg: n = `${t}.500`,
        color: r = 'white',
        hoverBg: o = `${t}.600`,
        activeBg: i = `${t}.700`,
      } = sE[t] ?? {},
      s = L(n, `${t}.200`)(e);
    return {
      bg: s,
      color: L(r, 'gray.800')(e),
      _hover: { bg: L(o, `${t}.300`)(e), _disabled: { bg: s } },
      _active: { bg: L(i, `${t}.400`)(e) },
    };
  },
  lE = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: L(`${t}.500`, `${t}.200`)(e),
      _hover: { textDecoration: 'underline', _disabled: { textDecoration: 'none' } },
      _active: { color: L(`${t}.700`, `${t}.500`)(e) },
    };
  },
  cE = { bg: 'none', color: 'inherit', display: 'inline', lineHeight: 'inherit', m: '0', p: '0' },
  uE = { ghost: A1, outline: iE, solid: aE, link: lE, unstyled: cE },
  dE = {
    lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
    md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
    sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
    xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' },
  },
  fE = {
    baseStyle: oE,
    variants: uE,
    sizes: dE,
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
  },
  { definePartsStyle: Gr, defineMultiStyleConfig: hE } = pe(HP.keys),
  ql = O('card-bg'),
  Nn = O('card-padding'),
  R1 = O('card-shadow'),
  Sl = O('card-radius'),
  M1 = O('card-border-width', '0'),
  j1 = O('card-border-color'),
  pE = Gr({
    container: {
      [ql.variable]: 'colors.chakra-body-bg',
      backgroundColor: ql.reference,
      boxShadow: R1.reference,
      borderRadius: Sl.reference,
      color: 'chakra-body-text',
      borderWidth: M1.reference,
      borderColor: j1.reference,
    },
    body: { padding: Nn.reference, flex: '1 1 0%' },
    header: { padding: Nn.reference },
    footer: { padding: Nn.reference },
  }),
  mE = {
    sm: Gr({ container: { [Sl.variable]: 'radii.base', [Nn.variable]: 'space.3' } }),
    md: Gr({ container: { [Sl.variable]: 'radii.md', [Nn.variable]: 'space.5' } }),
    lg: Gr({ container: { [Sl.variable]: 'radii.xl', [Nn.variable]: 'space.7' } }),
  },
  gE = {
    elevated: Gr({
      container: { [R1.variable]: 'shadows.base', _dark: { [ql.variable]: 'colors.gray.700' } },
    }),
    outline: Gr({
      container: { [M1.variable]: '1px', [j1.variable]: 'colors.chakra-border-color' },
    }),
    filled: Gr({ container: { [ql.variable]: 'colors.chakra-subtle-bg' } }),
    unstyled: {
      body: { [Nn.variable]: 0 },
      header: { [Nn.variable]: 0 },
      footer: { [Nn.variable]: 0 },
    },
  },
  yE = hE({
    baseStyle: pE,
    variants: gE,
    sizes: mE,
    defaultProps: { variant: 'elevated', size: 'md' },
  }),
  { definePartsStyle: xl, defineMultiStyleConfig: vE } = pe(TP.keys),
  ms = O('checkbox-size'),
  bE = (e) => {
    const { colorScheme: t } = e;
    return {
      w: ms.reference,
      h: ms.reference,
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: L(`${t}.500`, `${t}.200`)(e),
        borderColor: L(`${t}.500`, `${t}.200`)(e),
        color: L('white', 'gray.900')(e),
        _hover: { bg: L(`${t}.600`, `${t}.300`)(e), borderColor: L(`${t}.600`, `${t}.300`)(e) },
        _disabled: {
          borderColor: L('gray.200', 'transparent')(e),
          bg: L('gray.200', 'whiteAlpha.300')(e),
          color: L('gray.500', 'whiteAlpha.500')(e),
        },
      },
      _indeterminate: {
        bg: L(`${t}.500`, `${t}.200`)(e),
        borderColor: L(`${t}.500`, `${t}.200`)(e),
        color: L('white', 'gray.900')(e),
      },
      _disabled: {
        bg: L('gray.100', 'whiteAlpha.100')(e),
        borderColor: L('gray.100', 'transparent')(e),
      },
      _focusVisible: { boxShadow: 'outline' },
      _invalid: { borderColor: L('red.500', 'red.300')(e) },
    };
  },
  SE = { _disabled: { cursor: 'not-allowed' } },
  xE = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  wE = { transitionProperty: 'transform', transitionDuration: 'normal' },
  kE = xl((e) => ({ icon: wE, container: SE, control: at(bE, e), label: xE })),
  CE = {
    sm: xl({
      control: { [ms.variable]: 'sizes.3' },
      label: { fontSize: 'sm' },
      icon: { fontSize: '3xs' },
    }),
    md: xl({
      control: { [ms.variable]: 'sizes.4' },
      label: { fontSize: 'md' },
      icon: { fontSize: '2xs' },
    }),
    lg: xl({
      control: { [ms.variable]: 'sizes.5' },
      label: { fontSize: 'lg' },
      icon: { fontSize: '2xs' },
    }),
  },
  rr = vE({ baseStyle: kE, sizes: CE, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  gs = De('close-button-size'),
  Li = De('close-button-bg'),
  TE = {
    w: [gs.reference],
    h: [gs.reference],
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: {
      [Li.variable]: 'colors.blackAlpha.100',
      _dark: { [Li.variable]: 'colors.whiteAlpha.100' },
    },
    _active: {
      [Li.variable]: 'colors.blackAlpha.200',
      _dark: { [Li.variable]: 'colors.whiteAlpha.200' },
    },
    _focusVisible: { boxShadow: 'outline' },
    bg: Li.reference,
  },
  PE = {
    lg: { [gs.variable]: 'sizes.10', fontSize: 'md' },
    md: { [gs.variable]: 'sizes.8', fontSize: 'xs' },
    sm: { [gs.variable]: 'sizes.6', fontSize: '2xs' },
  },
  _E = { baseStyle: TE, sizes: PE, defaultProps: { size: 'md' } },
  { variants: EE, defaultProps: $E } = ps,
  AE = {
    fontFamily: 'mono',
    fontSize: 'sm',
    px: '0.2em',
    borderRadius: 'sm',
    bg: Ae.bg.reference,
    color: Ae.color.reference,
    boxShadow: Ae.shadow.reference,
  },
  RE = { baseStyle: AE, variants: EE, defaultProps: $E },
  ME = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
  jE = { baseStyle: ME },
  zE = { opacity: 0.6, borderColor: 'inherit' },
  FE = { borderStyle: 'solid' },
  IE = { borderStyle: 'dashed' },
  DE = { solid: FE, dashed: IE },
  LE = { baseStyle: zE, variants: DE, defaultProps: { variant: 'solid' } },
  { definePartsStyle: rf, defineMultiStyleConfig: OE } = pe(PP.keys),
  Lu = O('drawer-bg'),
  Ou = O('drawer-box-shadow');
function wo(e) {
  return rf(e === 'full' ? { dialog: { maxW: '100vw', h: '100vh' } } : { dialog: { maxW: e } });
}
const NE = { bg: 'blackAlpha.600', zIndex: 'modal' },
  BE = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  VE = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: '100vh' }),
      zIndex: 'modal',
      maxH: '100vh',
      color: 'inherit',
      [Lu.variable]: 'colors.white',
      [Ou.variable]: 'shadows.lg',
      _dark: { [Lu.variable]: 'colors.gray.700', [Ou.variable]: 'shadows.dark-lg' },
      bg: Lu.reference,
      boxShadow: Ou.reference,
    };
  },
  WE = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  UE = { position: 'absolute', top: '2', insetEnd: '3' },
  HE = { px: '6', py: '2', flex: '1', overflow: 'auto' },
  GE = { px: '6', py: '4' },
  KE = rf((e) => ({
    overlay: NE,
    dialogContainer: BE,
    dialog: at(VE, e),
    header: WE,
    closeButton: UE,
    body: HE,
    footer: GE,
  })),
  YE = { xs: wo('xs'), sm: wo('md'), md: wo('lg'), lg: wo('2xl'), xl: wo('4xl'), full: wo('full') },
  XE = OE({ baseStyle: KE, sizes: YE, defaultProps: { size: 'xs' } }),
  { definePartsStyle: qE, defineMultiStyleConfig: QE } = pe(_P.keys),
  ZE = { borderRadius: 'md', py: '1', transitionProperty: 'common', transitionDuration: 'normal' },
  JE = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  e5 = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  t5 = qE({ preview: ZE, input: JE, textarea: e5 }),
  n5 = QE({ baseStyle: t5 }),
  { definePartsStyle: r5, defineMultiStyleConfig: o5 } = pe(EP.keys),
  Jo = O('form-control-color'),
  i5 = {
    marginStart: '1',
    [Jo.variable]: 'colors.red.500',
    _dark: { [Jo.variable]: 'colors.red.300' },
    color: Jo.reference,
  },
  s5 = {
    mt: '2',
    [Jo.variable]: 'colors.gray.600',
    _dark: { [Jo.variable]: 'colors.whiteAlpha.600' },
    color: Jo.reference,
    lineHeight: 'normal',
    fontSize: 'sm',
  },
  a5 = r5({
    container: { width: '100%', position: 'relative' },
    requiredIndicator: i5,
    helperText: s5,
  }),
  l5 = o5({ baseStyle: a5 }),
  { definePartsStyle: c5, defineMultiStyleConfig: u5 } = pe($P.keys),
  ei = O('form-error-color'),
  d5 = {
    [ei.variable]: 'colors.red.500',
    _dark: { [ei.variable]: 'colors.red.300' },
    color: ei.reference,
    mt: '2',
    fontSize: 'sm',
    lineHeight: 'normal',
  },
  f5 = {
    marginEnd: '0.5em',
    [ei.variable]: 'colors.red.500',
    _dark: { [ei.variable]: 'colors.red.300' },
    color: ei.reference,
  },
  h5 = c5({ text: d5, icon: f5 }),
  p5 = u5({ baseStyle: h5 }),
  m5 = {
    fontSize: 'md',
    marginEnd: '3',
    mb: '2',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  g5 = { baseStyle: m5 },
  y5 = { fontFamily: 'heading', fontWeight: 'bold' },
  v5 = {
    '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
    '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
    '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: 'xl', lineHeight: 1.2 },
    sm: { fontSize: 'md', lineHeight: 1.2 },
    xs: { fontSize: 'sm', lineHeight: 1.2 },
  },
  b5 = { baseStyle: y5, sizes: v5, defaultProps: { size: 'xl' } },
  { definePartsStyle: In, defineMultiStyleConfig: S5 } = pe(AP.keys),
  Eo = O('input-height'),
  $o = O('input-font-size'),
  Ao = O('input-padding'),
  Ro = O('input-border-radius'),
  x5 = In({
    addon: {
      height: Eo.reference,
      fontSize: $o.reference,
      px: Ao.reference,
      borderRadius: Ro.reference,
    },
    field: {
      width: '100%',
      height: Eo.reference,
      fontSize: $o.reference,
      px: Ao.reference,
      borderRadius: Ro.reference,
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    },
  }),
  er = {
    lg: {
      [$o.variable]: 'fontSizes.lg',
      [Ao.variable]: 'space.4',
      [Ro.variable]: 'radii.md',
      [Eo.variable]: 'sizes.12',
    },
    md: {
      [$o.variable]: 'fontSizes.md',
      [Ao.variable]: 'space.4',
      [Ro.variable]: 'radii.md',
      [Eo.variable]: 'sizes.10',
    },
    sm: {
      [$o.variable]: 'fontSizes.sm',
      [Ao.variable]: 'space.3',
      [Ro.variable]: 'radii.sm',
      [Eo.variable]: 'sizes.8',
    },
    xs: {
      [$o.variable]: 'fontSizes.xs',
      [Ao.variable]: 'space.2',
      [Ro.variable]: 'radii.sm',
      [Eo.variable]: 'sizes.6',
    },
  },
  w5 = {
    lg: In({ field: er.lg, group: er.lg }),
    md: In({ field: er.md, group: er.md }),
    sm: In({ field: er.sm, group: er.sm }),
    xs: In({ field: er.xs, group: er.xs }),
  };
function Wh(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || L('blue.500', 'blue.300')(e),
    errorBorderColor: n || L('red.500', 'red.300')(e),
  };
}
const k5 = In((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Wh(e);
    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: { borderColor: L('gray.300', 'whiteAlpha.400')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: st(t, r), boxShadow: `0 0 0 1px ${st(t, r)}` },
        _focusVisible: { zIndex: 1, borderColor: st(t, n), boxShadow: `0 0 0 1px ${st(t, n)}` },
      },
      addon: {
        border: '1px solid',
        borderColor: L('inherit', 'whiteAlpha.50')(e),
        bg: L('gray.100', 'whiteAlpha.300')(e),
      },
    };
  }),
  C5 = In((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Wh(e);
    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: L('gray.100', 'whiteAlpha.50')(e),
        _hover: { bg: L('gray.200', 'whiteAlpha.100')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: st(t, r) },
        _focusVisible: { bg: 'transparent', borderColor: st(t, n) },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: L('gray.100', 'whiteAlpha.50')(e),
      },
    };
  }),
  T5 = In((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Wh(e);
    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: st(t, r), boxShadow: `0px 1px 0px 0px ${st(t, r)}` },
        _focusVisible: { borderColor: st(t, n), boxShadow: `0px 1px 0px 0px ${st(t, n)}` },
      },
      addon: {
        borderBottom: '2px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
      },
    };
  }),
  P5 = In({
    field: { bg: 'transparent', px: '0', height: 'auto' },
    addon: { bg: 'transparent', px: '0', height: 'auto' },
  }),
  _5 = { outline: k5, filled: C5, flushed: T5, unstyled: P5 },
  ne = S5({
    baseStyle: x5,
    sizes: w5,
    variants: _5,
    defaultProps: { size: 'md', variant: 'outline' },
  }),
  Nu = O('kbd-bg'),
  E5 = {
    [Nu.variable]: 'colors.gray.100',
    _dark: { [Nu.variable]: 'colors.whiteAlpha.100' },
    bg: Nu.reference,
    borderRadius: 'md',
    borderWidth: '1px',
    borderBottomWidth: '3px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    lineHeight: 'normal',
    px: '0.4em',
    whiteSpace: 'nowrap',
  },
  $5 = { baseStyle: E5 },
  A5 = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focusVisible: { boxShadow: 'outline' },
  },
  R5 = { baseStyle: A5 },
  { defineMultiStyleConfig: M5, definePartsStyle: j5 } = pe(RP.keys),
  z5 = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
  F5 = j5({ icon: z5 }),
  I5 = M5({ baseStyle: F5 }),
  { defineMultiStyleConfig: D5, definePartsStyle: L5 } = pe(MP.keys),
  hn = O('menu-bg'),
  Bu = O('menu-shadow'),
  O5 = {
    [hn.variable]: '#fff',
    [Bu.variable]: 'shadows.sm',
    _dark: { [hn.variable]: 'colors.gray.700', [Bu.variable]: 'shadows.dark-lg' },
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 'dropdown',
    borderRadius: 'md',
    borderWidth: '1px',
    bg: hn.reference,
    boxShadow: Bu.reference,
  },
  N5 = {
    py: '1.5',
    px: '3',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: { [hn.variable]: 'colors.gray.100', _dark: { [hn.variable]: 'colors.whiteAlpha.100' } },
    _active: {
      [hn.variable]: 'colors.gray.200',
      _dark: { [hn.variable]: 'colors.whiteAlpha.200' },
    },
    _expanded: {
      [hn.variable]: 'colors.gray.100',
      _dark: { [hn.variable]: 'colors.whiteAlpha.100' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    bg: hn.reference,
  },
  B5 = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  V5 = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  W5 = { opacity: 0.6 },
  U5 = { border: 0, borderBottom: '1px solid', borderColor: 'inherit', my: '2', opacity: 0.6 },
  H5 = { transitionProperty: 'common', transitionDuration: 'normal' },
  G5 = L5({ button: H5, list: O5, item: N5, groupTitle: B5, icon: V5, command: W5, divider: U5 }),
  K5 = D5({ baseStyle: G5 }),
  { defineMultiStyleConfig: Y5, definePartsStyle: of } = pe(jP.keys),
  Vu = O('modal-bg'),
  Wu = O('modal-shadow'),
  X5 = { bg: 'blackAlpha.600', zIndex: 'modal' },
  q5 = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      display: 'flex',
      zIndex: 'modal',
      justifyContent: 'center',
      alignItems: t ? 'center' : 'flex-start',
      overflow: n === 'inside' ? 'hidden' : 'auto',
      overscrollBehaviorY: 'none',
    };
  },
  Q5 = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      borderRadius: 'md',
      color: 'inherit',
      my: t ? 'auto' : '16',
      mx: t ? 'auto' : void 0,
      zIndex: 'modal',
      maxH: n === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
      [Vu.variable]: 'colors.white',
      [Wu.variable]: 'shadows.lg',
      _dark: { [Vu.variable]: 'colors.gray.700', [Wu.variable]: 'shadows.dark-lg' },
      bg: Vu.reference,
      boxShadow: Wu.reference,
    };
  },
  Z5 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  J5 = { position: 'absolute', top: '2', insetEnd: '3' },
  e$ = (e) => {
    const { scrollBehavior: t } = e;
    return { px: '6', py: '2', flex: '1', overflow: t === 'inside' ? 'auto' : void 0 };
  },
  t$ = { px: '6', py: '4' },
  n$ = of((e) => ({
    overlay: X5,
    dialogContainer: at(q5, e),
    dialog: at(Q5, e),
    header: Z5,
    closeButton: J5,
    body: at(e$, e),
    footer: t$,
  }));
function qt(e) {
  return of(
    e === 'full'
      ? { dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' } }
      : { dialog: { maxW: e } }
  );
}
const r$ = {
    xs: qt('xs'),
    sm: qt('sm'),
    md: qt('md'),
    lg: qt('lg'),
    xl: qt('xl'),
    '2xl': qt('2xl'),
    '3xl': qt('3xl'),
    '4xl': qt('4xl'),
    '5xl': qt('5xl'),
    '6xl': qt('6xl'),
    full: qt('full'),
  },
  o$ = Y5({ baseStyle: n$, sizes: r$, defaultProps: { size: 'md' } }),
  z1 = {
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      '3xs': '0.45rem',
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
  },
  { defineMultiStyleConfig: i$, definePartsStyle: F1 } = pe(zP.keys),
  Uh = De('number-input-stepper-width'),
  I1 = De('number-input-input-padding'),
  s$ = zn(Uh).add('0.5rem').toString(),
  Uu = De('number-input-bg'),
  Hu = De('number-input-color'),
  Gu = De('number-input-border-color'),
  a$ = { [Uh.variable]: 'sizes.6', [I1.variable]: s$ },
  l$ = (e) => {
    var t;
    return ((t = at(ne.baseStyle, e)) == null ? void 0 : t.field) ?? {};
  },
  c$ = { width: Uh.reference },
  u$ = {
    borderStart: '1px solid',
    borderStartColor: Gu.reference,
    color: Hu.reference,
    bg: Uu.reference,
    [Hu.variable]: 'colors.chakra-body-text',
    [Gu.variable]: 'colors.chakra-border-color',
    _dark: { [Hu.variable]: 'colors.whiteAlpha.800', [Gu.variable]: 'colors.whiteAlpha.300' },
    _active: {
      [Uu.variable]: 'colors.gray.200',
      _dark: { [Uu.variable]: 'colors.whiteAlpha.300' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  },
  d$ = F1((e) => ({ root: a$, field: at(l$, e) ?? {}, stepperGroup: c$, stepper: u$ }));
function Oa(e) {
  var i, s;
  const t = (i = ne.sizes) == null ? void 0 : i[e],
    n = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    r = ((s = t.field) == null ? void 0 : s.fontSize) ?? 'md',
    o = z1.fontSizes[r];
  return F1({
    field: { ...t.field, paddingInlineEnd: I1.reference, verticalAlign: 'top' },
    stepper: {
      fontSize: zn(o).multiply(0.75).toString(),
      _first: { borderTopEndRadius: n[e] },
      _last: { borderBottomEndRadius: n[e], mt: '-1px', borderTopWidth: 1 },
    },
  });
}
const f$ = { xs: Oa('xs'), sm: Oa('sm'), md: Oa('md'), lg: Oa('lg') },
  h$ = i$({ baseStyle: d$, sizes: f$, variants: ne.variants, defaultProps: ne.defaultProps });
var Vv;
const p$ = { ...((Vv = ne.baseStyle) == null ? void 0 : Vv.field), textAlign: 'center' },
  m$ = {
    lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
  };
var Wv;
const g$ = {
    outline: (e) => {
      var t, n;
      return (
        ((n = at((t = ne.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) ??
        {}
      );
    },
    flushed: (e) => {
      var t, n;
      return (
        ((n = at((t = ne.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) ??
        {}
      );
    },
    filled: (e) => {
      var t, n;
      return (
        ((n = at((t = ne.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) ??
        {}
      );
    },
    unstyled: ((Wv = ne.variants) == null ? void 0 : Wv.unstyled.field) ?? {},
  },
  y$ = { baseStyle: p$, sizes: m$, variants: g$, defaultProps: ne.defaultProps },
  { defineMultiStyleConfig: v$, definePartsStyle: b$ } = pe(FP.keys),
  Na = De('popper-bg'),
  S$ = De('popper-arrow-bg'),
  Dg = De('popper-arrow-shadow-color'),
  x$ = { zIndex: 'popover' },
  w$ = {
    [Na.variable]: 'colors.white',
    bg: Na.reference,
    [S$.variable]: Na.reference,
    [Dg.variable]: 'colors.gray.200',
    _dark: { [Na.variable]: 'colors.gray.700', [Dg.variable]: 'colors.whiteAlpha.300' },
    width: 'xs',
    border: '1px solid',
    borderColor: 'inherit',
    borderRadius: 'md',
    boxShadow: 'sm',
    zIndex: 'inherit',
    _focusVisible: { outline: 0, boxShadow: 'outline' },
  },
  k$ = { px: 3, py: 2, borderBottomWidth: '1px' },
  C$ = { px: 3, py: 2 },
  T$ = { px: 3, py: 2, borderTopWidth: '1px' },
  P$ = { position: 'absolute', borderRadius: 'md', top: 1, insetEnd: 2, padding: 2 },
  _$ = b$({ popper: x$, content: w$, header: k$, body: C$, footer: T$, closeButton: P$ }),
  E$ = v$({ baseStyle: _$ }),
  { defineMultiStyleConfig: $$, definePartsStyle: es } = pe(IP.keys),
  A$ = (e) => {
    const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e,
      i = L(Mg(), Mg('1rem', 'rgba(0,0,0,0.1)'))(e),
      s = L(`${t}.500`, `${t}.200`)(e),
      a = `linear-gradient(
    to right,
    transparent 0%,
    ${st(n, s)} 50%,
    transparent 100%
  )`;
    return { ...(!r && o && i), ...(r ? { bgImage: a } : { bgColor: s }) };
  },
  R$ = { lineHeight: '1', fontSize: '0.25em', fontWeight: 'bold', color: 'white' },
  M$ = (e) => ({ bg: L('gray.100', 'whiteAlpha.300')(e) }),
  j$ = (e) => ({ transitionProperty: 'common', transitionDuration: 'slow', ...A$(e) }),
  z$ = es((e) => ({ label: R$, filledTrack: j$(e), track: M$(e) })),
  F$ = {
    xs: es({ track: { h: '1' } }),
    sm: es({ track: { h: '2' } }),
    md: es({ track: { h: '3' } }),
    lg: es({ track: { h: '4' } }),
  },
  I$ = $$({ sizes: F$, baseStyle: z$, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: D$, definePartsStyle: wl } = pe(DP.keys),
  L$ = (e) => {
    var n;
    const t = (n = at(rr.baseStyle, e)) == null ? void 0 : n.control;
    return {
      ...t,
      borderRadius: 'full',
      _checked: {
        ...(t == null ? void 0 : t._checked),
        _before: {
          content: '""',
          display: 'inline-block',
          pos: 'relative',
          w: '50%',
          h: '50%',
          borderRadius: '50%',
          bg: 'currentColor',
        },
      },
    };
  },
  O$ = wl((e) => {
    var t, n;
    return {
      label: (t = rr.baseStyle) == null ? void 0 : t.call(rr, e).label,
      container: (n = rr.baseStyle) == null ? void 0 : n.call(rr, e).container,
      control: L$(e),
    };
  }),
  N$ = {
    md: wl({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
    lg: wl({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
    sm: wl({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } }),
  },
  B$ = D$({ baseStyle: O$, sizes: N$, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: V$, definePartsStyle: W$ } = pe(LP.keys),
  Ba = O('select-bg');
var Uv;
const U$ = {
    ...((Uv = ne.baseStyle) == null ? void 0 : Uv.field),
    appearance: 'none',
    paddingBottom: '1px',
    lineHeight: 'normal',
    bg: Ba.reference,
    [Ba.variable]: 'colors.white',
    _dark: { [Ba.variable]: 'colors.gray.700' },
    '> option, > optgroup': { bg: Ba.reference },
  },
  H$ = {
    width: '6',
    height: '100%',
    insetEnd: '2',
    position: 'relative',
    color: 'currentColor',
    fontSize: 'xl',
    _disabled: { opacity: 0.5 },
  },
  G$ = W$({ field: U$, icon: H$ }),
  Va = { paddingInlineEnd: '8' };
var Hv, Gv, Kv, Yv, Xv, qv, Qv, Zv;
const K$ = {
    lg: {
      ...((Hv = ne.sizes) == null ? void 0 : Hv.lg),
      field: { ...((Gv = ne.sizes) == null ? void 0 : Gv.lg.field), ...Va },
    },
    md: {
      ...((Kv = ne.sizes) == null ? void 0 : Kv.md),
      field: { ...((Yv = ne.sizes) == null ? void 0 : Yv.md.field), ...Va },
    },
    sm: {
      ...((Xv = ne.sizes) == null ? void 0 : Xv.sm),
      field: { ...((qv = ne.sizes) == null ? void 0 : qv.sm.field), ...Va },
    },
    xs: {
      ...((Qv = ne.sizes) == null ? void 0 : Qv.xs),
      field: { ...((Zv = ne.sizes) == null ? void 0 : Zv.xs.field), ...Va },
      icon: { insetEnd: '1' },
    },
  },
  Y$ = V$({ baseStyle: G$, sizes: K$, variants: ne.variants, defaultProps: ne.defaultProps }),
  Ku = O('skeleton-start-color'),
  Yu = O('skeleton-end-color'),
  X$ = {
    [Ku.variable]: 'colors.gray.100',
    [Yu.variable]: 'colors.gray.400',
    _dark: { [Ku.variable]: 'colors.gray.800', [Yu.variable]: 'colors.gray.600' },
    background: Ku.reference,
    borderColor: Yu.reference,
    opacity: 0.7,
    borderRadius: 'sm',
  },
  q$ = { baseStyle: X$ },
  Xu = O('skip-link-bg'),
  Q$ = {
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focusVisible: {
      boxShadow: 'outline',
      padding: '4',
      position: 'fixed',
      top: '6',
      insetStart: '6',
      [Xu.variable]: 'colors.white',
      _dark: { [Xu.variable]: 'colors.gray.700' },
      bg: Xu.reference,
    },
  },
  Z$ = { baseStyle: Q$ },
  { defineMultiStyleConfig: J$, definePartsStyle: Dc } = pe(OP.keys),
  no = O('slider-thumb-size'),
  Ms = O('slider-track-size'),
  sr = O('slider-bg'),
  eA = (e) => {
    const { orientation: t } = e;
    return {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
      ...Bh({
        orientation: t,
        vertical: { h: '100%', px: jn(no.reference).divide(2).toString() },
        horizontal: { w: '100%', py: jn(no.reference).divide(2).toString() },
      }),
    };
  },
  tA = (e) => ({
    ...Bh({
      orientation: e.orientation,
      horizontal: { h: Ms.reference },
      vertical: { w: Ms.reference },
    }),
    overflow: 'hidden',
    borderRadius: 'sm',
    [sr.variable]: 'colors.gray.200',
    _dark: { [sr.variable]: 'colors.whiteAlpha.200' },
    _disabled: {
      [sr.variable]: 'colors.gray.300',
      _dark: { [sr.variable]: 'colors.whiteAlpha.300' },
    },
    bg: sr.reference,
  }),
  nA = (e) => {
    const { orientation: t } = e;
    return {
      ...Bh({
        orientation: t,
        vertical: {
          left: '50%',
          transform: 'translateX(-50%)',
          _active: { transform: 'translateX(-50%) scale(1.15)' },
        },
        horizontal: {
          top: '50%',
          transform: 'translateY(-50%)',
          _active: { transform: 'translateY(-50%) scale(1.15)' },
        },
      }),
      w: no.reference,
      h: no.reference,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      outline: 0,
      zIndex: 1,
      borderRadius: 'full',
      bg: 'white',
      boxShadow: 'base',
      border: '1px solid',
      borderColor: 'transparent',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { bg: 'gray.300' },
    };
  },
  rA = (e) => {
    const { colorScheme: t } = e;
    return {
      width: 'inherit',
      height: 'inherit',
      [sr.variable]: `colors.${t}.500`,
      _dark: { [sr.variable]: `colors.${t}.200` },
      bg: sr.reference,
    };
  },
  oA = Dc((e) => ({ container: eA(e), track: tA(e), thumb: nA(e), filledTrack: rA(e) })),
  iA = Dc({ container: { [no.variable]: 'sizes.4', [Ms.variable]: 'sizes.1' } }),
  sA = Dc({ container: { [no.variable]: 'sizes.3.5', [Ms.variable]: 'sizes.1' } }),
  aA = Dc({ container: { [no.variable]: 'sizes.2.5', [Ms.variable]: 'sizes.0.5' } }),
  lA = { lg: iA, md: sA, sm: aA },
  cA = J$({ baseStyle: oA, sizes: lA, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  Nr = De('spinner-size'),
  uA = { width: [Nr.reference], height: [Nr.reference] },
  dA = {
    xs: { [Nr.variable]: 'sizes.3' },
    sm: { [Nr.variable]: 'sizes.4' },
    md: { [Nr.variable]: 'sizes.6' },
    lg: { [Nr.variable]: 'sizes.8' },
    xl: { [Nr.variable]: 'sizes.12' },
  },
  fA = { baseStyle: uA, sizes: dA, defaultProps: { size: 'md' } },
  { defineMultiStyleConfig: hA, definePartsStyle: D1 } = pe(NP.keys),
  pA = { fontWeight: 'medium' },
  mA = { opacity: 0.8, marginBottom: '2' },
  gA = { verticalAlign: 'baseline', fontWeight: 'semibold' },
  yA = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
  vA = D1({ container: {}, label: pA, helpText: mA, number: gA, icon: yA }),
  bA = {
    md: D1({
      label: { fontSize: 'sm' },
      helpText: { fontSize: 'sm' },
      number: { fontSize: '2xl' },
    }),
  },
  SA = hA({ baseStyle: vA, sizes: bA, defaultProps: { size: 'md' } }),
  { defineMultiStyleConfig: xA, definePartsStyle: ts } = pe([
    'stepper',
    'step',
    'title',
    'description',
    'indicator',
    'separator',
    'icon',
    'number',
  ]),
  Fn = O('stepper-indicator-size'),
  Mo = O('stepper-icon-size'),
  jo = O('stepper-title-font-size'),
  ns = O('stepper-description-font-size'),
  Oi = O('stepper-accent-color'),
  wA = ts(({ colorScheme: e }) => ({
    stepper: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '4',
      '&[data-orientation=vertical]': { flexDirection: 'column', alignItems: 'flex-start' },
      '&[data-orientation=horizontal]': { flexDirection: 'row', alignItems: 'center' },
      [Oi.variable]: `colors.${e}.500`,
      _dark: { [Oi.variable]: `colors.${e}.200` },
    },
    title: { fontSize: jo.reference, fontWeight: 'medium' },
    description: { fontSize: ns.reference, color: 'chakra-subtle-text' },
    number: { fontSize: jo.reference },
    step: {
      flexShrink: 0,
      position: 'relative',
      display: 'flex',
      gap: '2',
      '&[data-orientation=horizontal]': { alignItems: 'center' },
      flex: '1',
      '&:last-of-type:not([data-stretch])': { flex: 'initial' },
    },
    icon: { flexShrink: 0, width: Mo.reference, height: Mo.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: 'full',
      width: Fn.reference,
      height: Fn.reference,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&[data-status=active]': { borderWidth: '2px', borderColor: Oi.reference },
      '&[data-status=complete]': { bg: Oi.reference, color: 'chakra-inverse-text' },
      '&[data-status=incomplete]': { borderWidth: '2px' },
    },
    separator: {
      bg: 'chakra-border-color',
      flex: '1',
      '&[data-status=complete]': { bg: Oi.reference },
      '&[data-orientation=horizontal]': { width: '100%', height: '2px', marginStart: '2' },
      '&[data-orientation=vertical]': {
        width: '2px',
        position: 'absolute',
        height: '100%',
        maxHeight: `calc(100% - ${Fn.reference} - 8px)`,
        top: `calc(${Fn.reference} + 4px)`,
        insetStart: `calc(${Fn.reference} / 2 - 1px)`,
      },
    },
  })),
  kA = xA({
    baseStyle: wA,
    sizes: {
      xs: ts({
        stepper: {
          [Fn.variable]: 'sizes.4',
          [Mo.variable]: 'sizes.3',
          [jo.variable]: 'fontSizes.xs',
          [ns.variable]: 'fontSizes.xs',
        },
      }),
      sm: ts({
        stepper: {
          [Fn.variable]: 'sizes.6',
          [Mo.variable]: 'sizes.4',
          [jo.variable]: 'fontSizes.sm',
          [ns.variable]: 'fontSizes.xs',
        },
      }),
      md: ts({
        stepper: {
          [Fn.variable]: 'sizes.8',
          [Mo.variable]: 'sizes.5',
          [jo.variable]: 'fontSizes.md',
          [ns.variable]: 'fontSizes.sm',
        },
      }),
      lg: ts({
        stepper: {
          [Fn.variable]: 'sizes.10',
          [Mo.variable]: 'sizes.6',
          [jo.variable]: 'fontSizes.lg',
          [ns.variable]: 'fontSizes.md',
        },
      }),
    },
    defaultProps: { size: 'md', colorScheme: 'blue' },
  }),
  { defineMultiStyleConfig: CA, definePartsStyle: kl } = pe(BP.keys),
  ys = De('switch-track-width'),
  Kr = De('switch-track-height'),
  qu = De('switch-track-diff'),
  TA = zn.subtract(ys, Kr),
  sf = De('switch-thumb-x'),
  Ni = De('switch-bg'),
  PA = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: 'full',
      p: '0.5',
      width: [ys.reference],
      height: [Kr.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      [Ni.variable]: 'colors.gray.300',
      _dark: { [Ni.variable]: 'colors.whiteAlpha.400' },
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: { [Ni.variable]: `colors.${t}.500`, _dark: { [Ni.variable]: `colors.${t}.200` } },
      bg: Ni.reference,
    };
  },
  _A = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [Kr.reference],
    height: [Kr.reference],
    _checked: { transform: `translateX(${sf.reference})` },
  },
  EA = kl((e) => ({
    container: {
      [qu.variable]: TA,
      [sf.variable]: qu.reference,
      _rtl: { [sf.variable]: zn(qu).negate().toString() },
    },
    track: PA(e),
    thumb: _A,
  })),
  $A = {
    sm: kl({ container: { [ys.variable]: '1.375rem', [Kr.variable]: 'sizes.3' } }),
    md: kl({ container: { [ys.variable]: '1.875rem', [Kr.variable]: 'sizes.4' } }),
    lg: kl({ container: { [ys.variable]: '2.875rem', [Kr.variable]: 'sizes.6' } }),
  },
  AA = CA({ baseStyle: EA, sizes: $A, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: RA, definePartsStyle: ti } = pe(VP.keys),
  MA = ti({
    table: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
    },
    th: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      textAlign: 'start',
    },
    td: { textAlign: 'start' },
    caption: { mt: 4, fontFamily: 'heading', textAlign: 'center', fontWeight: 'medium' },
  }),
  Ql = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  jA = ti((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: L('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: L(`${t}.100`, `${t}.700`)(e),
        ...Ql,
      },
      td: { borderBottom: '1px', borderColor: L(`${t}.100`, `${t}.700`)(e), ...Ql },
      caption: { color: L('gray.600', 'gray.100')(e) },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    };
  }),
  zA = ti((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: L('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: L(`${t}.100`, `${t}.700`)(e),
        ...Ql,
      },
      td: { borderBottom: '1px', borderColor: L(`${t}.100`, `${t}.700`)(e), ...Ql },
      caption: { color: L('gray.600', 'gray.100')(e) },
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            'th, td': { borderBottomWidth: '1px', borderColor: L(`${t}.100`, `${t}.700`)(e) },
            td: { background: L(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    };
  }),
  FA = { simple: jA, striped: zA, unstyled: {} },
  IA = {
    sm: ti({
      th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
      td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
      caption: { px: '4', py: '2', fontSize: 'xs' },
    }),
    md: ti({
      th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
      td: { px: '6', py: '4', lineHeight: '5' },
      caption: { px: '6', py: '2', fontSize: 'sm' },
    }),
    lg: ti({
      th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
      td: { px: '8', py: '5', lineHeight: '6' },
      caption: { px: '6', py: '2', fontSize: 'md' },
    }),
  },
  DA = RA({
    baseStyle: MA,
    variants: FA,
    sizes: IA,
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
  }),
  ht = O('tabs-color'),
  tn = O('tabs-bg'),
  Wa = O('tabs-border-color'),
  { defineMultiStyleConfig: LA, definePartsStyle: Sn } = pe(WP.keys),
  OA = (e) => {
    const { orientation: t } = e;
    return { display: t === 'vertical' ? 'flex' : 'block' };
  },
  NA = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: { zIndex: 1, boxShadow: 'outline' },
      _disabled: { cursor: 'not-allowed', opacity: 0.4 },
    };
  },
  BA = (e) => {
    const { align: t = 'start', orientation: n } = e;
    return {
      justifyContent: { end: 'flex-end', center: 'center', start: 'flex-start' }[t],
      flexDirection: n === 'vertical' ? 'column' : 'row',
    };
  },
  VA = { p: 4 },
  WA = Sn((e) => ({ root: OA(e), tab: NA(e), tablist: BA(e), tabpanel: VA })),
  UA = {
    sm: Sn({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
    md: Sn({ tab: { fontSize: 'md', py: 2, px: 4 } }),
    lg: Sn({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
  },
  HA = Sn((e) => {
    const { colorScheme: t, orientation: n } = e,
      r = n === 'vertical',
      o = r ? 'borderStart' : 'borderBottom',
      i = r ? 'marginStart' : 'marginBottom';
    return {
      tablist: { [o]: '2px solid', borderColor: 'inherit' },
      tab: {
        [o]: '2px solid',
        borderColor: 'transparent',
        [i]: '-2px',
        _selected: {
          [ht.variable]: `colors.${t}.600`,
          _dark: { [ht.variable]: `colors.${t}.300` },
          borderColor: 'currentColor',
        },
        _active: {
          [tn.variable]: 'colors.gray.200',
          _dark: { [tn.variable]: 'colors.whiteAlpha.300' },
        },
        _disabled: { _active: { bg: 'none' } },
        color: ht.reference,
        bg: tn.reference,
      },
    };
  }),
  GA = Sn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: 'md',
        border: '1px solid',
        borderColor: 'transparent',
        mb: '-1px',
        [Wa.variable]: 'transparent',
        _selected: {
          [ht.variable]: `colors.${t}.600`,
          [Wa.variable]: 'colors.white',
          _dark: { [ht.variable]: `colors.${t}.300`, [Wa.variable]: 'colors.gray.800' },
          borderColor: 'inherit',
          borderBottomColor: Wa.reference,
        },
        color: ht.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    };
  }),
  KA = Sn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        [tn.variable]: 'colors.gray.50',
        _dark: { [tn.variable]: 'colors.whiteAlpha.50' },
        mb: '-1px',
        _notLast: { marginEnd: '-1px' },
        _selected: {
          [tn.variable]: 'colors.white',
          [ht.variable]: `colors.${t}.600`,
          _dark: { [tn.variable]: 'colors.gray.800', [ht.variable]: `colors.${t}.300` },
          borderColor: 'inherit',
          borderTopColor: 'currentColor',
          borderBottomColor: 'transparent',
        },
        color: ht.reference,
        bg: tn.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    };
  }),
  YA = Sn((e) => {
    const { colorScheme: t, theme: n } = e;
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: { color: st(n, `${t}.700`), bg: st(n, `${t}.100`) },
      },
    };
  }),
  XA = Sn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        [ht.variable]: 'colors.gray.600',
        _dark: { [ht.variable]: 'inherit' },
        _selected: {
          [ht.variable]: 'colors.white',
          [tn.variable]: `colors.${t}.600`,
          _dark: { [ht.variable]: 'colors.gray.800', [tn.variable]: `colors.${t}.300` },
        },
        color: ht.reference,
        bg: tn.reference,
      },
    };
  }),
  qA = Sn({}),
  QA = {
    line: HA,
    enclosed: GA,
    'enclosed-colored': KA,
    'soft-rounded': YA,
    'solid-rounded': XA,
    unstyled: qA,
  },
  ZA = LA({
    baseStyle: WA,
    sizes: UA,
    variants: QA,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
  }),
  { defineMultiStyleConfig: JA, definePartsStyle: Yr } = pe(UP.keys),
  Lg = O('tag-bg'),
  Og = O('tag-color'),
  Qu = O('tag-shadow'),
  Cl = O('tag-min-height'),
  Tl = O('tag-min-width'),
  Pl = O('tag-font-size'),
  _l = O('tag-padding-inline'),
  eR = {
    fontWeight: 'medium',
    lineHeight: 1.2,
    outline: 0,
    [Og.variable]: Ae.color.reference,
    [Lg.variable]: Ae.bg.reference,
    [Qu.variable]: Ae.shadow.reference,
    color: Og.reference,
    bg: Lg.reference,
    boxShadow: Qu.reference,
    borderRadius: 'md',
    minH: Cl.reference,
    minW: Tl.reference,
    fontSize: Pl.reference,
    px: _l.reference,
    _focusVisible: { [Qu.variable]: 'shadows.outline' },
  },
  tR = { lineHeight: 1.2, overflow: 'visible' },
  nR = {
    fontSize: 'lg',
    w: '5',
    h: '5',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    borderRadius: 'full',
    marginStart: '1.5',
    marginEnd: '-1',
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  rR = Yr({ container: eR, label: tR, closeButton: nR }),
  oR = {
    sm: Yr({
      container: {
        [Cl.variable]: 'sizes.5',
        [Tl.variable]: 'sizes.5',
        [Pl.variable]: 'fontSizes.xs',
        [_l.variable]: 'space.2',
      },
      closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
    }),
    md: Yr({
      container: {
        [Cl.variable]: 'sizes.6',
        [Tl.variable]: 'sizes.6',
        [Pl.variable]: 'fontSizes.sm',
        [_l.variable]: 'space.2',
      },
    }),
    lg: Yr({
      container: {
        [Cl.variable]: 'sizes.8',
        [Tl.variable]: 'sizes.8',
        [Pl.variable]: 'fontSizes.md',
        [_l.variable]: 'space.3',
      },
    }),
  },
  iR = {
    subtle: Yr((e) => {
      var t;
      return { container: (t = ps.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: Yr((e) => {
      var t;
      return { container: (t = ps.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: Yr((e) => {
      var t;
      return { container: (t = ps.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  sR = JA({
    variants: iR,
    baseStyle: rR,
    sizes: oR,
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
  });
var Jv;
const aR = {
  ...((Jv = ne.baseStyle) == null ? void 0 : Jv.field),
  paddingY: '2',
  minHeight: '20',
  lineHeight: 'short',
  verticalAlign: 'top',
};
var e1;
const lR = {
  outline: (e) => {
    var t;
    return ((t = ne.variants) == null ? void 0 : t.outline(e).field) ?? {};
  },
  flushed: (e) => {
    var t;
    return ((t = ne.variants) == null ? void 0 : t.flushed(e).field) ?? {};
  },
  filled: (e) => {
    var t;
    return ((t = ne.variants) == null ? void 0 : t.filled(e).field) ?? {};
  },
  unstyled: ((e1 = ne.variants) == null ? void 0 : e1.unstyled.field) ?? {},
};
var t1, n1, r1, o1;
const cR = {
    xs: ((t1 = ne.sizes) == null ? void 0 : t1.xs.field) ?? {},
    sm: ((n1 = ne.sizes) == null ? void 0 : n1.sm.field) ?? {},
    md: ((r1 = ne.sizes) == null ? void 0 : r1.md.field) ?? {},
    lg: ((o1 = ne.sizes) == null ? void 0 : o1.lg.field) ?? {},
  },
  uR = { baseStyle: aR, sizes: cR, variants: lR, defaultProps: { size: 'md', variant: 'outline' } },
  Ua = De('tooltip-bg'),
  Zu = De('tooltip-fg'),
  dR = De('popper-arrow-bg'),
  fR = {
    bg: Ua.reference,
    color: Zu.reference,
    [Ua.variable]: 'colors.gray.700',
    [Zu.variable]: 'colors.whiteAlpha.900',
    _dark: { [Ua.variable]: 'colors.gray.300', [Zu.variable]: 'colors.gray.900' },
    [dR.variable]: Ua.reference,
    px: '2',
    py: '0.5',
    borderRadius: 'sm',
    fontWeight: 'medium',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: 'xs',
    zIndex: 'tooltip',
  },
  hR = { baseStyle: fR },
  pR = {
    Accordion: JP,
    Alert: I_,
    Avatar: K_,
    Badge: ps,
    Breadcrumb: rE,
    Button: fE,
    Checkbox: rr,
    CloseButton: _E,
    Code: RE,
    Container: jE,
    Divider: LE,
    Drawer: XE,
    Editable: n5,
    Form: l5,
    FormError: p5,
    FormLabel: g5,
    Heading: b5,
    Input: ne,
    Kbd: $5,
    Link: R5,
    List: I5,
    Menu: K5,
    Modal: o$,
    NumberInput: h$,
    PinInput: y$,
    Popover: E$,
    Progress: I$,
    Radio: B$,
    Select: Y$,
    Skeleton: q$,
    SkipLink: Z$,
    Slider: cA,
    Spinner: fA,
    Stat: SA,
    Switch: AA,
    Table: DA,
    Tabs: ZA,
    Tag: sR,
    Textarea: uR,
    Tooltip: hR,
    Card: yE,
    Stepper: kA,
  },
  mR = { none: 0, '1px': '1px solid', '2px': '2px solid', '4px': '4px solid', '8px': '8px solid' },
  gR = { base: '0em', sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' },
  yR = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',
    whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)',
    },
    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
    },
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    red: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
    orange: {
      50: '#FFFAF0',
      100: '#FEEBC8',
      200: '#FBD38D',
      300: '#F6AD55',
      400: '#ED8936',
      500: '#DD6B20',
      600: '#C05621',
      700: '#9C4221',
      800: '#7B341E',
      900: '#652B19',
    },
    yellow: {
      50: '#FFFFF0',
      100: '#FEFCBF',
      200: '#FAF089',
      300: '#F6E05E',
      400: '#ECC94B',
      500: '#D69E2E',
      600: '#B7791F',
      700: '#975A16',
      800: '#744210',
      900: '#5F370E',
    },
    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },
    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },
    cyan: {
      50: '#EDFDFD',
      100: '#C4F1F9',
      200: '#9DECF9',
      300: '#76E4F7',
      400: '#0BC5EA',
      500: '#00B5D8',
      600: '#00A3C4',
      700: '#0987A0',
      800: '#086F83',
      900: '#065666',
    },
    purple: {
      50: '#FAF5FF',
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
      600: '#6B46C1',
      700: '#553C9A',
      800: '#44337A',
      900: '#322659',
    },
    pink: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C',
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41',
    },
  },
  vR = {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  bR = {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
    'dark-lg':
      'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
  },
  SR = {
    common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
  },
  xR = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  wR = {
    'ultra-fast': '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    'ultra-slow': '500ms',
  },
  kR = { property: SR, easing: xR, duration: wR },
  CR = {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  TR = {
    none: 0,
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  PR = {
    breakpoints: gR,
    zIndices: CR,
    radii: vR,
    blur: TR,
    colors: yR,
    ...z1,
    sizes: E1,
    shadows: bR,
    space: _1,
    borders: mR,
    transition: kR,
  },
  _R = {
    colors: {
      'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
      'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
      'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
      'chakra-inverse-text': { _light: 'white', _dark: 'gray.800' },
      'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
      'chakra-subtle-text': { _light: 'gray.600', _dark: 'gray.400' },
      'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
    },
  },
  ER = {
    global: {
      body: {
        fontFamily: 'body',
        color: 'chakra-body-text',
        bg: 'chakra-body-bg',
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
        lineHeight: 'base',
      },
      '*::placeholder': { color: 'chakra-placeholder-color' },
      '*, *::before, &::after': { borderColor: 'chakra-border-color' },
    },
  },
  $R = 'ltr',
  AR = { useSystemColorMode: !1, initialColorMode: 'light', cssVarPrefix: 'chakra' },
  RR = { semanticTokens: _R, direction: $R, ...PR, components: pR, styles: ER, config: AR };
var MR = !1;
function jR(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function zR(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var FR = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !MR : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zR(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = jR(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ze = '-ms-',
  Zl = '-moz-',
  ee = '-webkit-',
  L1 = 'comm',
  Hh = 'rule',
  Gh = 'decl',
  IR = '@import',
  O1 = '@keyframes',
  DR = '@layer',
  LR = Math.abs,
  Lc = String.fromCharCode,
  OR = Object.assign;
function NR(e, t) {
  return Ke(e, 0) ^ 45
    ? (((((((t << 2) ^ Ke(e, 0)) << 2) ^ Ke(e, 1)) << 2) ^ Ke(e, 2)) << 2) ^ Ke(e, 3)
    : 0;
}
function N1(e) {
  return e.trim();
}
function BR(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, n) {
  return e.replace(t, n);
}
function af(e, t) {
  return e.indexOf(t);
}
function Ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function js(e, t, n) {
  return e.slice(t, n);
}
function pn(e) {
  return e.length;
}
function Kh(e) {
  return e.length;
}
function Ha(e, t) {
  return t.push(e), e;
}
function VR(e, t) {
  return e.map(t).join('');
}
var Oc = 1,
  pi = 1,
  B1 = 0,
  vt = 0,
  Re = 0,
  Ei = '';
function Nc(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Oc,
    column: pi,
    length: s,
    return: '',
  };
}
function Bi(e, t) {
  return OR(Nc('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function WR() {
  return Re;
}
function UR() {
  return (Re = vt > 0 ? Ke(Ei, --vt) : 0), pi--, Re === 10 && ((pi = 1), Oc--), Re;
}
function _t() {
  return (Re = vt < B1 ? Ke(Ei, vt++) : 0), pi++, Re === 10 && ((pi = 1), Oc++), Re;
}
function xn() {
  return Ke(Ei, vt);
}
function El() {
  return vt;
}
function fa(e, t) {
  return js(Ei, e, t);
}
function zs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function V1(e) {
  return (Oc = pi = 1), (B1 = pn((Ei = e))), (vt = 0), [];
}
function W1(e) {
  return (Ei = ''), e;
}
function $l(e) {
  return N1(fa(vt - 1, lf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function HR(e) {
  for (; (Re = xn()) && Re < 33; ) _t();
  return zs(e) > 2 || zs(Re) > 3 ? '' : ' ';
}
function GR(e, t) {
  for (; --t && _t() && !(Re < 48 || Re > 102 || (Re > 57 && Re < 65) || (Re > 70 && Re < 97)); );
  return fa(e, El() + (t < 6 && xn() == 32 && _t() == 32));
}
function lf(e) {
  for (; _t(); )
    switch (Re) {
      case e:
        return vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && lf(Re);
        break;
      case 40:
        e === 41 && lf(e);
        break;
      case 92:
        _t();
        break;
    }
  return vt;
}
function KR(e, t) {
  for (; _t() && e + Re !== 57; ) if (e + Re === 84 && xn() === 47) break;
  return '/*' + fa(t, vt - 1) + '*' + Lc(e === 47 ? e : _t());
}
function YR(e) {
  for (; !zs(xn()); ) _t();
  return fa(e, vt);
}
function XR(e) {
  return W1(Al('', null, null, null, [''], (e = V1(e)), 0, [0], e));
}
function Al(e, t, n, r, o, i, s, a, l) {
  for (
    var c = 0,
      u = 0,
      d = s,
      f = 0,
      p = 0,
      v = 0,
      g = 1,
      w = 1,
      m = 1,
      h = 0,
      y = '',
      k = o,
      P = i,
      $ = r,
      _ = y;
    w;

  )
    switch (((v = h), (h = _t()))) {
      case 40:
        if (v != 108 && Ke(_, d - 1) == 58) {
          af((_ += te($l(h), '&', '&\f')), '&\f') != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += $l(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += HR(v);
        break;
      case 92:
        _ += GR(El() - 1, 7);
        continue;
      case 47:
        switch (xn()) {
          case 42:
          case 47:
            Ha(qR(KR(_t(), El()), t, n), l);
            break;
          default:
            _ += '/';
        }
        break;
      case 123 * g:
        a[c++] = pn(_) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            w = 0;
          case 59 + u:
            m == -1 && (_ = te(_, /\f/g, '')),
              p > 0 &&
                pn(_) - d &&
                Ha(p > 32 ? Bg(_ + ';', r, n, d - 1) : Bg(te(_, ' ', '') + ';', r, n, d - 2), l);
            break;
          case 59:
            _ += ';';
          default:
            if ((Ha(($ = Ng(_, t, n, c, u, o, a, y, (k = []), (P = []), d)), i), h === 123))
              if (u === 0) Al(_, t, $, $, k, i, d, a, P);
              else
                switch (f === 99 && Ke(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Al(
                      e,
                      $,
                      $,
                      r && Ha(Ng(e, $, $, 0, 0, o, a, y, o, (k = []), d), P),
                      o,
                      P,
                      d,
                      a,
                      r ? k : P
                    );
                    break;
                  default:
                    Al(_, $, $, $, [''], P, 0, a, P);
                }
        }
        (c = u = p = 0), (g = m = 1), (y = _ = ''), (d = s);
        break;
      case 58:
        (d = 1 + pn(_)), (p = v);
      default:
        if (g < 1) {
          if (h == 123) --g;
          else if (h == 125 && g++ == 0 && UR() == 125) continue;
        }
        switch (((_ += Lc(h)), h * g)) {
          case 38:
            m = u > 0 ? 1 : ((_ += '\f'), -1);
            break;
          case 44:
            (a[c++] = (pn(_) - 1) * m), (m = 1);
            break;
          case 64:
            xn() === 45 && (_ += $l(_t())), (f = xn()), (u = d = pn((y = _ += YR(El())))), h++;
            break;
          case 45:
            v === 45 && pn(_) == 2 && (g = 0);
        }
    }
  return i;
}
function Ng(e, t, n, r, o, i, s, a, l, c, u) {
  for (var d = o - 1, f = o === 0 ? i : [''], p = Kh(f), v = 0, g = 0, w = 0; v < r; ++v)
    for (var m = 0, h = js(e, d + 1, (d = LR((g = s[v])))), y = e; m < p; ++m)
      (y = N1(g > 0 ? f[m] + ' ' + h : te(h, /&\f/g, f[m]))) && (l[w++] = y);
  return Nc(e, t, n, o === 0 ? Hh : a, l, c, u);
}
function qR(e, t, n) {
  return Nc(e, t, n, L1, Lc(WR()), js(e, 2, -2), 0);
}
function Bg(e, t, n, r) {
  return Nc(e, t, n, Gh, js(e, 0, r), js(e, r + 1, -1), r);
}
function ni(e, t) {
  for (var n = '', r = Kh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function QR(e, t, n, r) {
  switch (e.type) {
    case DR:
      if (e.children.length) break;
    case IR:
    case Gh:
      return (e.return = e.return || e.value);
    case L1:
      return '';
    case O1:
      return (e.return = e.value + '{' + ni(e.children, r) + '}');
    case Hh:
      e.value = e.props.join(',');
  }
  return pn((n = ni(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
}
function ZR(e) {
  var t = Kh(e);
  return function (n, r, o, i) {
    for (var s = '', a = 0; a < t; a++) s += e[a](n, r, o, i) || '';
    return s;
  };
}
function JR(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Vg = function (t) {
  var n = new WeakMap();
  return function (r) {
    if (n.has(r)) return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function U1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var eM = function (t, n, r) {
    for (var o = 0, i = 0; (o = i), (i = xn()), o === 38 && i === 12 && (n[r] = 1), !zs(i); ) _t();
    return fa(t, vt);
  },
  tM = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (zs(o)) {
        case 0:
          o === 38 && xn() === 12 && (n[r] = 1), (t[r] += eM(vt - 1, n, r));
          break;
        case 2:
          t[r] += $l(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = xn() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Lc(o);
      }
    while ((o = _t()));
    return t;
  },
  nM = function (t, n) {
    return W1(tM(V1(t), n));
  },
  Wg = new WeakMap(),
  rM = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Wg.get(r)) && !o) {
        Wg.set(t, !0);
        for (var i = [], s = nM(n, i), a = r.props, l = 0, c = 0; l < s.length; l++)
          for (var u = 0; u < a.length; u++, c++)
            t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + ' ' + s[l];
      }
    }
  },
  oM = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''));
    }
  };
function H1(e, t) {
  switch (NR(e, t)) {
    case 5103:
      return ee + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + Zl + e + Ze + e + e;
    case 6828:
    case 4268:
      return ee + e + Ze + e + e;
    case 6165:
      return ee + e + Ze + 'flex-' + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + 'box-$1$2' + Ze + 'flex-$1$2') + e;
    case 5443:
      return ee + e + Ze + 'flex-item-' + te(e, /flex-|-self/, '') + e;
    case 4675:
      return ee + e + Ze + 'flex-line-pack' + te(e, /align-content|flex-|-self/, '') + e;
    case 5548:
      return ee + e + Ze + te(e, 'shrink', 'negative') + e;
    case 5292:
      return ee + e + Ze + te(e, 'basis', 'preferred-size') + e;
    case 6060:
      return ee + 'box-' + te(e, '-grow', '') + ee + e + Ze + te(e, 'grow', 'positive') + e;
    case 4554:
      return ee + te(e, /([^-])(transform)/g, '$1' + ee + '$2') + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ee + '$1'), /(image-set)/, ee + '$1'), e, '') + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ee + '$1$`$1');
    case 4968:
      return (
        te(
          te(e, /(.+:)(flex-)?(.*)/, ee + 'box-pack:$3' + Ze + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        ee +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ee + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (pn(e) - 1 - t > 6)
        switch (Ke(e, t + 1)) {
          case 109:
            if (Ke(e, t + 4) !== 45) break;
          case 102:
            return (
              te(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + ee + '$2-$3$1' + Zl + (Ke(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~af(e, 'stretch') ? H1(te(e, 'stretch', 'fill-available'), t) + e : e;
        }
      break;
    case 4949:
      if (Ke(e, t + 1) !== 115) break;
    case 6444:
      switch (Ke(e, pn(e) - 3 - (~af(e, '!important') && 10))) {
        case 107:
          return te(e, ':', ':' + ee) + e;
        case 101:
          return (
            te(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                ee +
                (Ke(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                ee +
                '$2$3$1' +
                Ze +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ke(e, t + 11)) {
        case 114:
          return ee + e + Ze + te(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return ee + e + Ze + te(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return ee + e + Ze + te(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return ee + e + Ze + e + e;
  }
  return e;
}
var iM = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Gh:
          t.return = H1(t.value, t.length);
          break;
        case O1:
          return ni([Bi(t, { value: te(t.value, '@', '@' + ee) })], o);
        case Hh:
          if (t.length)
            return VR(t.props, function (i) {
              switch (BR(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return ni([Bi(t, { props: [te(i, /:(read-\w+)/, ':' + Zl + '$1')] })], o);
                case '::placeholder':
                  return ni(
                    [
                      Bi(t, { props: [te(i, /:(plac\w+)/, ':' + ee + 'input-$1')] }),
                      Bi(t, { props: [te(i, /:(plac\w+)/, ':' + Zl + '$1')] }),
                      Bi(t, { props: [te(i, /:(plac\w+)/, Ze + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  sM = [iM],
  aM = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (g) {
        var w = g.getAttribute('data-emotion');
        w.indexOf(' ') !== -1 && (document.head.appendChild(g), g.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || sM,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (var w = g.getAttribute('data-emotion').split(' '), m = 1; m < w.length; m++)
            i[w[m]] = !0;
          a.push(g);
        }
      );
    var l,
      c = [rM, oM];
    {
      var u,
        d = [
          QR,
          JR(function (g) {
            u.insert(g);
          }),
        ],
        f = ZR(c.concat(o, d)),
        p = function (w) {
          return ni(XR(w), f);
        };
      l = function (w, m, h, y) {
        (u = h), p(w ? w + '{' + m.styles + '}' : m.styles), y && (v.inserted[m.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new FR({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return v.sheet.hydrate(a), v;
  };
function ro() {
  return (
    (ro = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ro.apply(null, arguments)
  );
}
var G1 = { exports: {} },
  le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ve = typeof Symbol == 'function' && Symbol.for,
  Yh = Ve ? Symbol.for('react.element') : 60103,
  Xh = Ve ? Symbol.for('react.portal') : 60106,
  Bc = Ve ? Symbol.for('react.fragment') : 60107,
  Vc = Ve ? Symbol.for('react.strict_mode') : 60108,
  Wc = Ve ? Symbol.for('react.profiler') : 60114,
  Uc = Ve ? Symbol.for('react.provider') : 60109,
  Hc = Ve ? Symbol.for('react.context') : 60110,
  qh = Ve ? Symbol.for('react.async_mode') : 60111,
  Gc = Ve ? Symbol.for('react.concurrent_mode') : 60111,
  Kc = Ve ? Symbol.for('react.forward_ref') : 60112,
  Yc = Ve ? Symbol.for('react.suspense') : 60113,
  lM = Ve ? Symbol.for('react.suspense_list') : 60120,
  Xc = Ve ? Symbol.for('react.memo') : 60115,
  qc = Ve ? Symbol.for('react.lazy') : 60116,
  cM = Ve ? Symbol.for('react.block') : 60121,
  uM = Ve ? Symbol.for('react.fundamental') : 60117,
  dM = Ve ? Symbol.for('react.responder') : 60118,
  fM = Ve ? Symbol.for('react.scope') : 60119;
function Mt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Yh:
        switch (((e = e.type), e)) {
          case qh:
          case Gc:
          case Bc:
          case Wc:
          case Vc:
          case Yc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Hc:
              case Kc:
              case qc:
              case Xc:
              case Uc:
                return e;
              default:
                return t;
            }
        }
      case Xh:
        return t;
    }
  }
}
function K1(e) {
  return Mt(e) === Gc;
}
le.AsyncMode = qh;
le.ConcurrentMode = Gc;
le.ContextConsumer = Hc;
le.ContextProvider = Uc;
le.Element = Yh;
le.ForwardRef = Kc;
le.Fragment = Bc;
le.Lazy = qc;
le.Memo = Xc;
le.Portal = Xh;
le.Profiler = Wc;
le.StrictMode = Vc;
le.Suspense = Yc;
le.isAsyncMode = function (e) {
  return K1(e) || Mt(e) === qh;
};
le.isConcurrentMode = K1;
le.isContextConsumer = function (e) {
  return Mt(e) === Hc;
};
le.isContextProvider = function (e) {
  return Mt(e) === Uc;
};
le.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Yh;
};
le.isForwardRef = function (e) {
  return Mt(e) === Kc;
};
le.isFragment = function (e) {
  return Mt(e) === Bc;
};
le.isLazy = function (e) {
  return Mt(e) === qc;
};
le.isMemo = function (e) {
  return Mt(e) === Xc;
};
le.isPortal = function (e) {
  return Mt(e) === Xh;
};
le.isProfiler = function (e) {
  return Mt(e) === Wc;
};
le.isStrictMode = function (e) {
  return Mt(e) === Vc;
};
le.isSuspense = function (e) {
  return Mt(e) === Yc;
};
le.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Bc ||
    e === Gc ||
    e === Wc ||
    e === Vc ||
    e === Yc ||
    e === lM ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === qc ||
        e.$$typeof === Xc ||
        e.$$typeof === Uc ||
        e.$$typeof === Hc ||
        e.$$typeof === Kc ||
        e.$$typeof === uM ||
        e.$$typeof === dM ||
        e.$$typeof === fM ||
        e.$$typeof === cM))
  );
};
le.typeOf = Mt;
G1.exports = le;
var hM = G1.exports,
  Y1 = hM,
  pM = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  mM = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  X1 = {};
X1[Y1.ForwardRef] = pM;
X1[Y1.Memo] = mM;
var gM = !0;
function yM(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : o && (r += o + ' ');
    }),
    r
  );
}
var q1 = function (t, n, r) {
    var o = t.key + '-' + n.name;
    (r === !1 || gM === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
  },
  Q1 = function (t, n, r) {
    q1(t, n, r);
    var o = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function vM(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var bM = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  SM = !1,
  xM = /[A-Z]|^ms/g,
  wM = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Z1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ug = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Ju = U1(function (e) {
    return Z1(e) ? e : e.replace(xM, '-$&').toLowerCase();
  }),
  Hg = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(wM, function (r, o, i) {
            return (mn = { name: o, styles: i, next: mn }), o;
          });
    }
    return bM[t] !== 1 && !Z1(t) && typeof n == 'number' && n !== 0 ? n + 'px' : n;
  },
  kM =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function Fs(e, t, n) {
  if (n == null) return '';
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      var o = n;
      if (o.anim === 1) return (mn = { name: o.name, styles: o.styles, next: mn }), o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; ) (mn = { name: s.name, styles: s.styles, next: mn }), (s = s.next);
        var a = i.styles + ';';
        return a;
      }
      return CM(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var l = mn,
          c = n(e);
        return (mn = l), Fs(e, t, c);
      }
      break;
    }
  }
  var u = n;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function CM(e, t, n) {
  var r = '';
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += Fs(e, t, n[o]) + ';';
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != 'object') {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += i + '{' + t[a] + '}')
          : Ug(a) && (r += Ju(i) + ':' + Hg(i, a) + ';');
      } else {
        if (i === 'NO_COMPONENT_SELECTOR' && SM) throw new Error(kM);
        if (Array.isArray(s) && typeof s[0] == 'string' && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++) Ug(s[l]) && (r += Ju(i) + ':' + Hg(i, s[l]) + ';');
        else {
          var c = Fs(e, t, s);
          switch (i) {
            case 'animation':
            case 'animationName': {
              r += Ju(i) + ':' + c + ';';
              break;
            }
            default:
              r += i + '{' + c + '}';
          }
        }
      }
    }
  return r;
}
var Gg = /label:\s*([^\s;{]+)\s*(;|$)/g,
  mn;
function Qh(e, t, n) {
  if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0,
    o = '';
  mn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (r = !1), (o += Fs(n, t, i));
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((o += Fs(n, t, e[a])), r)) {
      var l = i;
      o += l[a];
    }
  Gg.lastIndex = 0;
  for (var c = '', u; (u = Gg.exec(o)) !== null; ) c += '-' + u[1];
  var d = vM(o) + c;
  return { name: d, styles: o, next: mn };
}
var TM = function (t) {
    return t();
  },
  J1 = Sg.useInsertionEffect ? Sg.useInsertionEffect : !1,
  PM = J1 || TM,
  Kg = J1 || S.useLayoutEffect,
  eb = S.createContext(typeof HTMLElement < 'u' ? aM({ key: 'css' }) : null);
eb.Provider;
var Zh = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(eb);
      return t(n, o, r);
    });
  },
  Is = S.createContext({}),
  _M = function (t, n) {
    if (typeof n == 'function') {
      var r = n(t);
      return r;
    }
    return ro({}, t, n);
  },
  EM = Vg(function (e) {
    return Vg(function (t) {
      return _M(e, t);
    });
  }),
  $M = function (t) {
    var n = S.useContext(Is);
    return (
      t.theme !== n && (n = EM(n)(t.theme)), S.createElement(Is.Provider, { value: n }, t.children)
    );
  },
  Qc = Zh(function (e, t) {
    var n = e.styles,
      r = Qh([n], void 0, S.useContext(Is)),
      o = S.useRef();
    return (
      Kg(
        function () {
          var i = t.key + '-global',
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector('style[data-emotion="' + i + ' ' + r.name + '"]');
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null && ((a = !0), l.setAttribute('data-emotion', i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      Kg(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && Q1(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert('', r, s, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function AM() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return Qh(t);
}
var Zc = function () {
  var t = AM.apply(void 0, arguments),
    n = 'animation-' + t.name;
  return {
    name: n,
    styles: '@keyframes ' + n + '{' + t.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
};
const Jh = S.createContext({});
Jh.displayName = 'ColorModeContext';
function ep() {
  const e = S.useContext(Jh);
  if (e === void 0) throw new Error('useColorMode must be used within a ColorModeProvider');
  return e;
}
const Ga = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' };
function RM(e = {}) {
  const { preventTransition: t = !0, nonce: n } = e,
    r = {
      setDataset: (o) => {
        const i = t ? r.preventTransition() : void 0;
        (document.documentElement.dataset.theme = o),
          (document.documentElement.style.colorScheme = o),
          i == null || i();
      },
      setClassName(o) {
        document.body.classList.add(o ? Ga.dark : Ga.light),
          document.body.classList.remove(o ? Ga.light : Ga.dark);
      },
      query() {
        return window.matchMedia('(prefers-color-scheme: dark)');
      },
      getSystemTheme(o) {
        return (r.query().matches ?? o === 'dark') ? 'dark' : 'light';
      },
      addListener(o) {
        const i = r.query(),
          s = (a) => {
            o(a.matches ? 'dark' : 'light');
          };
        return (
          typeof i.addListener == 'function' ? i.addListener(s) : i.addEventListener('change', s),
          () => {
            typeof i.removeListener == 'function'
              ? i.removeListener(s)
              : i.removeEventListener('change', s);
          }
        );
      },
      preventTransition() {
        const o = document.createElement('style');
        return (
          o.appendChild(
            document.createTextNode(
              '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          n !== void 0 && (o.nonce = n),
          document.head.appendChild(o),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(o);
                });
              });
          }
        );
      },
    };
  return r;
}
const MM = 'chakra-ui-color-mode';
function jM(e) {
  return {
    ssr: !1,
    type: 'localStorage',
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {}
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
const zM = jM(MM),
  Yg = () => {},
  FM = IT() ? S.useLayoutEffect : S.useEffect;
function Xg(e, t) {
  return e.type === 'cookie' && e.ssr ? e.get(t) : t;
}
const tb = Zh(function (t, n) {
  const {
      value: r,
      children: o,
      options: { useSystemColorMode: i, initialColorMode: s, disableTransitionOnChange: a } = {},
      colorModeManager: l = zM,
    } = t,
    c = s === 'dark' ? 'dark' : 'light',
    [u, d] = S.useState(() => Xg(l, c)),
    [f, p] = S.useState(() => Xg(l)),
    {
      getSystemTheme: v,
      setClassName: g,
      setDataset: w,
      addListener: m,
    } = S.useMemo(
      () => RM({ preventTransition: a, nonce: n == null ? void 0 : n.nonce }),
      [a, n == null ? void 0 : n.nonce]
    ),
    h = s === 'system' && !u ? f : u,
    y = S.useCallback(
      ($) => {
        const _ = $ === 'system' ? v() : $;
        d(_), g(_ === 'dark'), w(_), l.set(_);
      },
      [l, v, g, w]
    );
  FM(() => {
    s === 'system' && p(v());
  }, []),
    S.useEffect(() => {
      const $ = l.get();
      if ($) {
        y($);
        return;
      }
      if (s === 'system') {
        y('system');
        return;
      }
      y(c);
    }, [l, c, s, y]);
  const k = S.useCallback(() => {
    y(h === 'dark' ? 'light' : 'dark');
  }, [h, y]);
  S.useEffect(() => {
    if (i) return m(y);
  }, [i, m, y]);
  const P = S.useMemo(
    () => ({
      colorMode: r ?? h,
      toggleColorMode: r ? Yg : k,
      setColorMode: r ? Yg : y,
      forced: r !== void 0,
    }),
    [h, k, y, r]
  );
  return b.jsx(Jh.Provider, { value: P, children: o });
});
tb.displayName = 'ColorModeProvider';
const nb = String.raw,
  rb = nb`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  IM = () => b.jsx(Qc, { styles: rb }),
  DM = ({ scope: e = '' }) =>
    b.jsx(Qc, {
      styles: nb`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${rb}
    `,
    });
function LM(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e,
    o = S.useMemo(() => SP(n), [n]);
  return b.jsxs($M, { theme: o, children: [b.jsx(OM, { root: t }), r] });
}
function OM({ root: e = ':host, :root' }) {
  const t = [e, '[data-theme]'].join(',');
  return b.jsx(Qc, { styles: (n) => ({ [t]: n.__cssVars }) });
}
Rt({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
});
function NM() {
  const { colorMode: e } = ep();
  return b.jsx(Qc, {
    styles: (t) => {
      const n = v1(t, 'styles.global'),
        r = Vt(n, { theme: t, colorMode: e });
      return r ? k1(r)(t) : void 0;
    },
  });
}
const [BM, VM] = Rt({ strict: !1, name: 'PortalManagerContext' });
function ob(e) {
  const { children: t, zIndex: n } = e;
  return b.jsx(BM, { value: { zIndex: n }, children: t });
}
ob.displayName = 'PortalManager';
const ib = S.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
ib.displayName = 'EnvironmentContext';
function sb(e) {
  const { children: t, environment: n, disabled: r } = e,
    o = S.useRef(null),
    i = S.useMemo(
      () =>
        n || {
          getDocument: () => {
            var a;
            return ((a = o.current) == null ? void 0 : a.ownerDocument) ?? document;
          },
          getWindow: () => {
            var a;
            return ((a = o.current) == null ? void 0 : a.ownerDocument.defaultView) ?? window;
          },
        },
      [n]
    ),
    s = !r || !n;
  return b.jsxs(ib.Provider, {
    value: i,
    children: [t, s && b.jsx('span', { id: '__chakra_env', hidden: !0, ref: o })],
  });
}
sb.displayName = 'EnvironmentProvider';
const WM = (e) => {
  const {
      children: t,
      colorModeManager: n,
      portalZIndex: r,
      resetScope: o,
      resetCSS: i = !0,
      theme: s = {},
      environment: a,
      cssVarsRoot: l,
      disableEnvironment: c,
      disableGlobalStyle: u,
    } = e,
    d = b.jsx(sb, { environment: a, disabled: c, children: t });
  return b.jsx(LM, {
    theme: s,
    cssVarsRoot: l,
    children: b.jsxs(tb, {
      colorModeManager: n,
      options: s.config,
      children: [
        i ? b.jsx(DM, { scope: o }) : b.jsx(IM, {}),
        !u && b.jsx(NM, {}),
        r ? b.jsx(ob, { zIndex: r, children: d }) : d,
      ],
    }),
  });
};
function UM(e) {
  if (typeof Proxy > 'u') return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, o) => (o === 'create' ? e : (t.has(o) || t.set(o, e(o)), t.get(o))),
  });
}
function Jc(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
const cf = (e) => Array.isArray(e);
function ab(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ds(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function qg(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function tp(e, t, n, r) {
  if (typeof t == 'function') {
    const [o, i] = qg(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if ((typeof t == 'string' && (t = e.variants && e.variants[t]), typeof t == 'function')) {
    const [o, i] = qg(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function eu(e, t, n) {
  const r = e.getProps();
  return tp(r, t, n !== void 0 ? n : r.custom, e);
}
const np = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  rp = ['initial', ...np],
  ha = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  ho = new Set(ha),
  Bn = (e) => e * 1e3,
  Vn = (e) => e / 1e3,
  HM = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  GM = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  KM = { type: 'keyframes', duration: 0.8 },
  YM = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  XM = (e, { keyframes: t }) =>
    t.length > 2 ? KM : ho.has(e) ? (e.startsWith('scale') ? GM(t[1]) : HM) : YM;
function op(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const qM = { skipAnimations: !1, useManualTiming: !1 },
  QM = (e) => e !== null;
function tu(e, { repeat: t, repeatType: n = 'loop' }, r) {
  const o = e.filter(QM),
    i = t && n !== 'loop' && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const nt = (e) => e;
function ZM(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(s);
  }
  const l = {
    schedule: (c, u = !1, d = !1) => {
      const p = d && r ? t : n;
      return u && i.add(c), p.has(c) || p.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), i.delete(c);
    },
    process: (c) => {
      if (((s = c), r)) {
        o = !0;
        return;
      }
      (r = !0), ([t, n] = [n, t]), n.clear(), t.forEach(a), (r = !1), o && ((o = !1), l.process(c));
    },
  };
  return l;
}
const Ka = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'],
  JM = 40;
function lb(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = Ka.reduce((m, h) => ((m[h] = ZM(i)), m), {}),
    { read: a, resolveKeyframes: l, update: c, preRender: u, render: d, postRender: f } = s,
    p = () => {
      const m = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, JM), 1)),
        (o.timestamp = m),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        c.process(o),
        u.process(o),
        d.process(o),
        f.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(p));
    },
    v = () => {
      (n = !0), (r = !0), o.isProcessing || e(p);
    };
  return {
    schedule: Ka.reduce((m, h) => {
      const y = s[h];
      return (m[h] = (k, P = !1, $ = !1) => (n || v(), y.schedule(k, P, $))), m;
    }, {}),
    cancel: (m) => {
      for (let h = 0; h < Ka.length; h++) s[Ka[h]].cancel(m);
    },
    state: o,
    steps: s,
  };
}
const {
    schedule: ce,
    cancel: Sr,
    state: Ge,
    steps: ed,
  } = lb(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : nt, !0),
  cb = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  ej = 1e-7,
  tj = 12;
function nj(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = cb(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > ej && ++a < tj);
  return s;
}
function pa(e, t, n, r) {
  if (e === t && n === r) return nt;
  const o = (i) => nj(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : cb(o(i), t, r));
}
const ub = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  db = (e) => (t) => 1 - e(1 - t),
  fb = pa(0.33, 1.53, 0.69, 0.99),
  ip = db(fb),
  hb = ub(ip),
  pb = (e) => ((e *= 2) < 1 ? 0.5 * ip(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  sp = (e) => 1 - Math.sin(Math.acos(e)),
  mb = db(sp),
  gb = ub(sp),
  yb = (e) => /^0[^.\s]+$/u.test(e);
function rj(e) {
  return typeof e == 'number' ? e === 0 : e !== null ? e === 'none' || e === '0' || yb(e) : !0;
}
let uf = nt;
const vb = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  bb = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  Sb = bb('--'),
  oj = bb('var(--'),
  ap = (e) => (oj(e) ? ij.test(e.split('/*')[0].trim()) : !1),
  ij = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  sj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function aj(e) {
  const t = sj.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function xb(e, t, n = 1) {
  const [r, o] = aj(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return vb(s) ? parseFloat(s) : s;
  }
  return ap(o) ? xb(o, t, n + 1) : o;
}
const xr = (e, t, n) => (n > t ? t : n < e ? e : n),
  $i = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
  Ls = { ...$i, transform: (e) => xr(0, 1, e) },
  Ya = { ...$i, default: 1 },
  ma = (e) => ({
    test: (t) => typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  nr = ma('deg'),
  wn = ma('%'),
  N = ma('px'),
  lj = ma('vh'),
  cj = ma('vw'),
  Qg = { ...wn, parse: (e) => wn.parse(e) / 100, transform: (e) => wn.transform(e * 100) },
  uj = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  Zg = (e) => e === $i || e === N,
  Jg = (e, t) => parseFloat(e.split(', ')[t]),
  e0 =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return Jg(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? Jg(i[1], e) : 0;
      }
    },
  dj = new Set(['x', 'y', 'z']),
  fj = ha.filter((e) => !dj.has(e));
function hj(e) {
  const t = [];
  return (
    fj.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
const mi = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: e0(4, 13),
  y: e0(5, 14),
};
mi.translateX = mi.x;
mi.translateY = mi.y;
const wb = (e) => (t) => t.test(e),
  pj = { test: (e) => e === 'auto', parse: (e) => e },
  kb = [$i, N, wn, nr, cj, lj, pj],
  t0 = (e) => kb.find(wb(e)),
  Xr = new Set();
let df = !1,
  ff = !1;
function Cb() {
  if (ff) {
    const e = Array.from(Xr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = hj(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (ff = !1), (df = !1), Xr.forEach((e) => e.complete()), Xr.clear();
}
function Tb() {
  Xr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ff = !0);
  });
}
function mj() {
  Tb(), Cb();
}
class lp {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Xr.add(this), df || ((df = !0), ce.read(Tb), ce.resolveKeyframes(Cb)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Xr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Xr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const vs = (e) => Math.round(e * 1e5) / 1e5,
  cp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function gj(e) {
  return e == null;
}
const yj =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  up = (e, t) => (n) =>
    !!(
      (typeof n == 'string' && yj.test(n) && n.startsWith(e)) ||
      (t && !gj(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Pb = (e, t, n) => (r) => {
    if (typeof r != 'string') return r;
    const [o, i, s, a] = r.match(cp);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  vj = (e) => xr(0, 255, e),
  td = { ...$i, transform: (e) => Math.round(vj(e)) },
  Vr = {
    test: up('rgb', 'red'),
    parse: Pb('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      td.transform(e) +
      ', ' +
      td.transform(t) +
      ', ' +
      td.transform(n) +
      ', ' +
      vs(Ls.transform(r)) +
      ')',
  };
function bj(e) {
  let t = '',
    n = '',
    r = '',
    o = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const hf = { test: up('#'), parse: bj, transform: Vr.transform },
  zo = {
    test: up('hsl', 'hue'),
    parse: Pb('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      wn.transform(vs(t)) +
      ', ' +
      wn.transform(vs(n)) +
      ', ' +
      vs(Ls.transform(r)) +
      ')',
  },
  Je = {
    test: (e) => Vr.test(e) || hf.test(e) || zo.test(e),
    parse: (e) => (Vr.test(e) ? Vr.parse(e) : zo.test(e) ? zo.parse(e) : hf.parse(e)),
    transform: (e) =>
      typeof e == 'string' ? e : e.hasOwnProperty('red') ? Vr.transform(e) : zo.transform(e),
  },
  Sj =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function xj(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == 'string' &&
    (((t = e.match(cp)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Sj)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const _b = 'number',
  Eb = 'color',
  wj = 'var',
  kj = 'var(',
  n0 = '${}',
  Cj =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Os(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      Cj,
      (l) => (
        Je.test(l)
          ? (r.color.push(i), o.push(Eb), n.push(Je.parse(l)))
          : l.startsWith(kj)
            ? (r.var.push(i), o.push(wj), n.push(l))
            : (r.number.push(i), o.push(_b), n.push(parseFloat(l))),
        ++i,
        n0
      )
    )
    .split(n0);
  return { values: n, split: a, indexes: r, types: o };
}
function $b(e) {
  return Os(e).values;
}
function Ab(e) {
  const { split: t, types: n } = Os(e),
    r = t.length;
  return (o) => {
    let i = '';
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === _b ? (i += vs(o[s])) : a === Eb ? (i += Je.transform(o[s])) : (i += o[s]);
      }
    return i;
  };
}
const Tj = (e) => (typeof e == 'number' ? 0 : e);
function Pj(e) {
  const t = $b(e);
  return Ab(e)(t.map(Tj));
}
const wr = { test: xj, parse: $b, createTransformer: Ab, getAnimatableNone: Pj },
  _j = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function Ej(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [r] = n.match(cp) || [];
  if (!r) return e;
  const o = n.replace(r, '');
  let i = _j.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + '(' + i + o + ')';
}
const $j = /\b([a-z-]*)\(.*?\)/gu,
  pf = {
    ...wr,
    getAnimatableNone: (e) => {
      const t = e.match($j);
      return t ? t.map(Ej).join(' ') : e;
    },
  },
  Aj = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    backgroundPositionX: N,
    backgroundPositionY: N,
  },
  Rj = {
    rotate: nr,
    rotateX: nr,
    rotateY: nr,
    rotateZ: nr,
    scale: Ya,
    scaleX: Ya,
    scaleY: Ya,
    scaleZ: Ya,
    skew: nr,
    skewX: nr,
    skewY: nr,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Ls,
    originX: Qg,
    originY: Qg,
    originZ: N,
  },
  r0 = { ...$i, transform: Math.round },
  dp = { ...Aj, ...Rj, zIndex: r0, size: N, fillOpacity: Ls, strokeOpacity: Ls, numOctaves: r0 },
  Mj = {
    ...dp,
    color: Je,
    backgroundColor: Je,
    outlineColor: Je,
    fill: Je,
    stroke: Je,
    borderColor: Je,
    borderTopColor: Je,
    borderRightColor: Je,
    borderBottomColor: Je,
    borderLeftColor: Je,
    filter: pf,
    WebkitFilter: pf,
  },
  fp = (e) => Mj[e];
function Rb(e, t) {
  let n = fp(e);
  return n !== pf && (n = wr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const jj = new Set(['auto', 'none', '0']);
function zj(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == 'string' && !jj.has(i) && Os(i).values.length && (o = e[r]), r++;
  }
  if (o && n) for (const i of t) e[i] = Rb(n, o);
}
class Mb extends lp {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == 'string' && ((c = c.trim()), ap(c))) {
        const u = xb(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !uj.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = t0(o),
      a = t0(i);
    if (s !== a)
      if (Zg(s) && Zg(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == 'string' && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) rj(t[o]) && r.push(o);
    r.length && zj(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = mi[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = mi[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function hp(e) {
  return typeof e == 'function';
}
let Rl;
function Fj() {
  Rl = void 0;
}
const kn = {
    now: () => (
      Rl === void 0 &&
        kn.set(Ge.isProcessing || qM.useManualTiming ? Ge.timestamp : performance.now()),
      Rl
    ),
    set: (e) => {
      (Rl = e), queueMicrotask(Fj);
    },
  },
  o0 = (e, t) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' && (wr.test(e) || e === '0') && !e.startsWith('url('))
        );
function Ij(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Dj(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  const i = e[e.length - 1],
    s = o0(o, t),
    a = o0(i, t);
  return !s || !a ? !1 : Ij(e) || ((n === 'spring' || hp(n)) && r);
}
const Lj = 40;
class jb {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = 'loop',
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = kn.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Lj
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && mj(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = kn.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !Dj(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(tu(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }), this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function zb(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Oj = 5;
function Fb(e, t, n) {
  const r = Math.max(t - Oj, 0);
  return zb(n - e(r), t - r);
}
const nd = 0.001,
  Nj = 0.01,
  Bj = 10,
  Vj = 0.05,
  Wj = 1;
function Uj({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o,
    i,
    s = 1 - t;
  (s = xr(Vj, Wj, s)),
    (e = xr(Nj, Bj, Vn(e))),
    s < 1
      ? ((o = (c) => {
          const u = c * s,
            d = u * e,
            f = u - n,
            p = mf(c, s),
            v = Math.exp(-d);
          return nd - (f / p) * v;
        }),
        (i = (c) => {
          const d = c * s * e,
            f = d * n + n,
            p = Math.pow(s, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-d),
            g = mf(Math.pow(c, 2), s);
          return ((-o(c) + nd > 0 ? -1 : 1) * ((f - p) * v)) / g;
        }))
      : ((o = (c) => {
          const u = Math.exp(-c * e),
            d = (c - n) * e + 1;
          return -nd + u * d;
        }),
        (i = (c) => {
          const u = Math.exp(-c * e),
            d = (n - c) * (e * e);
          return u * d;
        }));
  const a = 5 / e,
    l = Gj(o, i, a);
  if (((e = Bn(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
const Hj = 12;
function Gj(e, t, n) {
  let r = n;
  for (let o = 1; o < Hj; o++) r = r - e(r) / t(r);
  return r;
}
function mf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Kj = ['duration', 'bounce'],
  Yj = ['stiffness', 'damping', 'mass'];
function i0(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Xj(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
  if (!i0(e, Yj) && i0(e, Kj)) {
    const n = Uj(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Ib({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: d,
      isResolvedFromDuration: f,
    } = Xj({ ...r, velocity: -Vn(r.velocity || 0) }),
    p = d || 0,
    v = l / (2 * Math.sqrt(a * c)),
    g = i - o,
    w = Vn(Math.sqrt(a / c)),
    m = Math.abs(g) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (v < 1) {
    const y = mf(w, v);
    h = (k) => {
      const P = Math.exp(-v * w * k);
      return i - P * (((p + v * w * g) / y) * Math.sin(y * k) + g * Math.cos(y * k));
    };
  } else if (v === 1) h = (y) => i - Math.exp(-w * y) * (g + (p + w * g) * y);
  else {
    const y = w * Math.sqrt(v * v - 1);
    h = (k) => {
      const P = Math.exp(-v * w * k),
        $ = Math.min(y * k, 300);
      return i - (P * ((p + v * w * g) * Math.sinh($) + y * g * Math.cosh($))) / y;
    };
  }
  return {
    calculatedDuration: (f && u) || null,
    next: (y) => {
      const k = h(y);
      if (f) s.done = y >= u;
      else {
        let P = 0;
        v < 1 && (P = y === 0 ? Bn(p) : Fb(h, y, k));
        const $ = Math.abs(P) <= n,
          _ = Math.abs(i - k) <= t;
        s.done = $ && _;
      }
      return (s.value = s.done ? i : k), s;
    },
  };
}
function s0({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    p = (A) => (a !== void 0 && A < a) || (l !== void 0 && A > l),
    v = (A) => (a === void 0 ? l : l === void 0 || Math.abs(a - A) < Math.abs(l - A) ? a : l);
  let g = n * t;
  const w = d + g,
    m = s === void 0 ? w : s(w);
  m !== w && (g = m - d);
  const h = (A) => -g * Math.exp(-A / r),
    y = (A) => m + h(A),
    k = (A) => {
      const j = h(A),
        z = y(A);
      (f.done = Math.abs(j) <= c), (f.value = f.done ? m : z);
    };
  let P, $;
  const _ = (A) => {
    p(f.value) &&
      ((P = A),
      ($ = Ib({
        keyframes: [f.value, v(f.value)],
        velocity: Fb(y, A, f.value),
        damping: o,
        stiffness: i,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    _(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let j = !1;
        return (
          !$ && P === void 0 && ((j = !0), k(A), _(A)),
          P !== void 0 && A >= P ? $.next(A - P) : (!j && k(A), f)
        );
      },
    }
  );
}
const qj = pa(0.42, 0, 1, 1),
  Qj = pa(0, 0, 0.58, 1),
  Db = pa(0.42, 0, 0.58, 1),
  Zj = (e) => Array.isArray(e) && typeof e[0] != 'number',
  pp = (e) => Array.isArray(e) && typeof e[0] == 'number',
  a0 = {
    linear: nt,
    easeIn: qj,
    easeInOut: Db,
    easeOut: Qj,
    circIn: sp,
    circInOut: gb,
    circOut: mb,
    backIn: ip,
    backInOut: hb,
    backOut: fb,
    anticipate: pb,
  },
  l0 = (e) => {
    if (pp(e)) {
      uf(e.length === 4);
      const [t, n, r, o] = e;
      return pa(t, n, r, o);
    } else if (typeof e == 'string') return uf(a0[e] !== void 0), a0[e];
    return e;
  },
  Jj = (e, t) => (n) => t(e(n)),
  Wn = (...e) => e.reduce(Jj),
  gi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Ce = (e, t, n) => e + (t - e) * n;
function rd(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ez({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = rd(l, a, e + 1 / 3)), (i = rd(l, a, e)), (s = rd(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Jl(e, t) {
  return (n) => (n > 0 ? t : e);
}
const od = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  tz = [hf, Vr, zo],
  nz = (e) => tz.find((t) => t.test(e));
function c0(e) {
  const t = nz(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === zo && (n = ez(n)), n;
}
const u0 = (e, t) => {
    const n = c0(e),
      r = c0(t);
    if (!n || !r) return Jl(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = od(n.red, r.red, i)),
      (o.green = od(n.green, r.green, i)),
      (o.blue = od(n.blue, r.blue, i)),
      (o.alpha = Ce(n.alpha, r.alpha, i)),
      Vr.transform(o)
    );
  },
  gf = new Set(['none', 'hidden']);
function rz(e, t) {
  return gf.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function oz(e, t) {
  return (n) => Ce(e, t, n);
}
function mp(e) {
  return typeof e == 'number'
    ? oz
    : typeof e == 'string'
      ? ap(e)
        ? Jl
        : Je.test(e)
          ? u0
          : az
      : Array.isArray(e)
        ? Lb
        : typeof e == 'object'
          ? Je.test(e)
            ? u0
            : iz
          : Jl;
}
function Lb(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => mp(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function iz(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = mp(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function sz(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[s]++;
  }
  return r;
}
const az = (e, t) => {
  const n = wr.createTransformer(t),
    r = Os(e),
    o = Os(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (gf.has(e) && !o.values.length) || (gf.has(t) && !r.values.length)
      ? rz(e, t)
      : Wn(Lb(sz(r, o), o.values), n)
    : Jl(e, t);
};
function Ob(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? Ce(e, t, n)
    : mp(e)(e, t);
}
function lz(e, t, n) {
  const r = [],
    o = n || Ob,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || nt : t;
      a = Wn(l, a);
    }
    r.push(a);
  }
  return r;
}
function cz(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((uf(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = lz(t, r, o),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      const d = gi(e[u], e[u + 1], c);
      return s[u](d);
    };
  return n ? (c) => l(xr(e[0], e[i - 1], c)) : l;
}
function uz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = gi(0, t, r);
    e.push(Ce(n, 1, o));
  }
}
function dz(e) {
  const t = [0];
  return uz(t, e.length - 1), t;
}
function fz(e, t) {
  return e.map((n) => n * t);
}
function hz(e, t) {
  return e.map(() => t || Db).splice(0, e.length - 1);
}
function ec({ duration: e = 300, keyframes: t, times: n, ease: r = 'easeInOut' }) {
  const o = Zj(r) ? r.map(l0) : l0(r),
    i = { done: !1, value: t[0] },
    s = fz(n && n.length === t.length ? n : dz(t), e),
    a = cz(s, t, { ease: Array.isArray(o) ? o : hz(t, o) });
  return { calculatedDuration: e, next: (l) => ((i.value = a(l)), (i.done = l >= e), i) };
}
const d0 = 2e4;
function pz(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < d0; ) (t += n), (r = e.next(t));
  return t >= d0 ? 1 / 0 : t;
}
const mz = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ce.update(t, !0),
      stop: () => Sr(t),
      now: () => (Ge.isProcessing ? Ge.timestamp : kn.now()),
    };
  },
  gz = { decay: s0, inertia: s0, tween: ec, keyframes: ec, spring: Ib },
  yz = (e) => e / 100;
class gp extends jb {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.startTime = null),
      (this.state = 'idle'),
      (this.stop = () => {
        if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      s = (o == null ? void 0 : o.KeyframeResolver) || lp,
      a = (l, c) => this.onKeyframesResolved(l, c);
    (this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = 'keyframes',
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      a = hp(n) ? n : gz[n] || ec;
    let l, c;
    a !== ec && typeof t[0] != 'number' && ((l = Wn(yz, Ob(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === 'mirror' && (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      u.calculatedDuration === null && (u.calculatedDuration = pz(u));
    const { calculatedDuration: d } = u,
      f = d + o,
      p = f * (r + 1) - o;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: p,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === 'paused' || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: A } = this.options;
      return { done: !0, value: A[A.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const { delay: f, repeat: p, repeatType: v, repeatDelay: g, onUpdate: w } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > u;
    (this.currentTime = Math.max(m, 0)),
      this.state === 'finished' && this.holdTime === null && (this.currentTime = u);
    let y = this.currentTime,
      k = i;
    if (p) {
      const A = Math.min(this.currentTime, u) / d;
      let j = Math.floor(A),
        z = A % 1;
      !z && A >= 1 && (z = 1),
        z === 1 && j--,
        (j = Math.min(j, p + 1)),
        !!(j % 2) &&
          (v === 'reverse' ? ((z = 1 - z), g && (z -= g / d)) : v === 'mirror' && (k = s)),
        (y = xr(0, 1, z) * d);
    }
    const P = h ? { done: !1, value: l[0] } : k.next(y);
    a && (P.value = a(P.value));
    let { done: $ } = P;
    !h && c !== null && ($ = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const _ =
      this.holdTime === null && (this.state === 'finished' || (this.state === 'running' && $));
    return (
      _ && o !== void 0 && (P.value = tu(l, this.options, o)),
      w && w(P.value),
      _ && this.finish(),
      P
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Vn(t.calculatedDuration) : 0;
  }
  get time() {
    return Vn(this.currentTime);
  }
  set time(t) {
    (t = Bn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Vn(this.currentTime));
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = 'running';
      return;
    }
    if (this.isStopped) return;
    const { driver: t = mz, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
        ? this.state === 'finished' && (this.startTime = o)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = 'paused';
      return;
    }
    (this.state = 'paused'),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = 'finished');
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const vz = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  bz = 10,
  Sz = (e, t) => {
    let n = '';
    const r = Math.max(Math.round(t / bz), 2);
    for (let o = 0; o < r; o++) n += e(gi(0, r - 1, o)) + ', ';
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function yp(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const xz = { linearEasing: void 0 };
function wz(e, t) {
  const n = yp(e);
  return () => {
    var r;
    return (r = xz[t]) !== null && r !== void 0 ? r : n();
  };
}
const tc = wz(() => {
  try {
    document.createElement('div').animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
  } catch {
    return !1;
  }
  return !0;
}, 'linearEasing');
function Nb(e) {
  return !!(
    (typeof e == 'function' && tc()) ||
    !e ||
    (typeof e == 'string' && (e in yf || tc())) ||
    pp(e) ||
    (Array.isArray(e) && e.every(Nb))
  );
}
const rs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  yf = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: rs([0, 0.65, 0.55, 1]),
    circOut: rs([0.55, 0, 1, 0.45]),
    backIn: rs([0.31, 0.01, 0.66, -0.59]),
    backOut: rs([0.33, 1.53, 0.69, 0.99]),
  };
function Bb(e, t) {
  if (e)
    return typeof e == 'function' && tc()
      ? Sz(e, t)
      : pp(e)
        ? rs(e)
        : Array.isArray(e)
          ? e.map((n) => Bb(n, t) || yf.easeOut)
          : yf[e];
}
function kz(
  e,
  t,
  n,
  { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: s = 'loop', ease: a, times: l } = {}
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = Bb(a, o);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: o,
      easing: Array.isArray(u) ? 'linear' : u,
      fill: 'both',
      iterations: i + 1,
      direction: s === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
function f0(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Cz = yp(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  nc = 10,
  Tz = 2e4;
function Pz(e) {
  return hp(e.type) || e.type === 'spring' || !Nb(e.ease);
}
function _z(e, t) {
  const n = new gp({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < Tz; ) (r = n.sample(i)), o.push(r.value), (i += nc);
  return { times: void 0, keyframes: o, duration: i - nc, ease: 'linear' };
}
const Vb = { anticipate: pb, backInOut: hb, circInOut: gb };
function Ez(e) {
  return e in Vb;
}
class h0 extends jb {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new Mb(i, (s, a) => this.onKeyframesResolved(s, a), n, r, o)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: s,
      type: a,
      motionValue: l,
      name: c,
      startTime: u,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if ((typeof s == 'string' && tc() && Ez(s) && (s = Vb[s]), Pz(this.options))) {
      const { onComplete: f, onUpdate: p, motionValue: v, element: g, ...w } = this.options,
        m = _z(t, w);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = m.duration),
        (i = m.times),
        (s = m.ease),
        (a = 'keyframes');
    }
    const d = kz(l.owner.current, c, t, { ...this.options, duration: o, times: i, ease: s });
    return (
      (d.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (f0(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(tu(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
          }),
      { animation: d, duration: o, times: i, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Vn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Vn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Bn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return 'idle';
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return nt;
      const { animation: r } = n;
      f0(r, t);
    }
    return nt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === 'finished' && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n, keyframes: r, duration: o, type: i, ease: s, times: a } = t;
    if (n.playState === 'idle' || n.playState === 'finished') return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: d, element: f, ...p } = this.options,
        v = new gp({
          ...p,
          keyframes: r,
          duration: o,
          type: i,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        g = Bn(this.time);
      c.setWithVelocity(v.sample(g - nc).value, v.sample(g).value, nc);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: o, repeatType: i, damping: s, type: a } = t;
    return (
      Cz() &&
      r &&
      vz.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== 'mirror' &&
      s !== 0 &&
      a !== 'inertia'
    );
  }
}
const $z = yp(() => window.ScrollTimeline !== void 0);
class Az {
  constructor(t) {
    (this.stop = () => this.runAll('stop')), (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) => ($z() && o.attachTimeline ? o.attachTimeline(t) : n(o)));
    return () => {
      r.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll('time');
  }
  set time(t) {
    this.setAll('time', t);
  }
  get speed() {
    return this.getAll('speed');
  }
  set speed(t) {
    this.setAll('speed', t);
  }
  get startTime() {
    return this.getAll('startTime');
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll('play');
  }
  pause() {
    this.runAll('pause');
  }
  cancel() {
    this.runAll('cancel');
  }
  complete() {
    this.runAll('complete');
  }
}
function Rz({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
const vp =
    (e, t, n, r = {}, o, i) =>
    (s) => {
      const a = op(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: c = 0 } = r;
      c = c - Bn(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: 'easeOut',
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (f) => {
          t.set(f), a.onUpdate && a.onUpdate(f);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : o,
      };
      Rz(a) || (u = { ...u, ...XM(e, u) }),
        u.duration && (u.duration = Bn(u.duration)),
        u.repeatDelay && (u.repeatDelay = Bn(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from);
      let d = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (d = !0)),
        d && !i && t.get() !== void 0)
      ) {
        const f = tu(u.keyframes, a);
        if (f !== void 0)
          return (
            ce.update(() => {
              u.onUpdate(f), u.onComplete();
            }),
            new Az([])
          );
      }
      return !i && h0.supports(u) ? new h0(u) : new gp(u);
    },
  Mz = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  jz = (e) => (cf(e) ? e[e.length - 1] || 0 : e);
function bp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Sp(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class xp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return bp(this.subscriptions, t), () => Sp(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const p0 = 30,
  zz = (e) => !isNaN(parseFloat(e));
class Fz {
  constructor(t, n = {}) {
    (this.version = '11.11.10'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = kn.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = kn.now()),
      this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = zz(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new xp());
    const r = this.events[t].add(n);
    return t === 'change'
      ? () => {
          r(),
            ce.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = kn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > p0)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, p0);
    return zb(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ns(e, t) {
  return new Fz(e, t);
}
function Iz(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ns(n));
}
function Dz(e, t) {
  const n = eu(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = jz(i[s]);
    Iz(e, s, a);
  }
}
const wp = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  Lz = 'framerAppearId',
  Wb = 'data-' + wp(Lz);
function Ub(e) {
  return e.props[Wb];
}
const tt = (e) => !!(e && e.getVelocity);
function Oz(e) {
  return !!(tt(e) && e.add);
}
function vf(e, t) {
  const n = e.getValue('willChange');
  if (Oz(n)) return n.add(t);
}
function Nz({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Hb(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const c = [],
    u = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(d, (i = e.latestValues[d]) !== null && i !== void 0 ? i : null),
      p = l[d];
    if (p === void 0 || (u && Nz(u, d))) continue;
    const v = { delay: n, ...op(s || {}, d) };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const m = Ub(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, d, ce);
        h !== null && ((v.startTime = h), (g = !0));
      }
    }
    vf(e, d), f.start(vp(d, f, p, e.shouldReduceMotion && ho.has(d) ? { type: !1 } : v, e, g));
    const w = f.animation;
    w && c.push(w);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        ce.update(() => {
          a && Dz(e, a);
        });
      }),
    c
  );
}
function bf(e, t, n = {}) {
  var r;
  const o = eu(
    e,
    t,
    n.type === 'exit'
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(Hb(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const { delayChildren: u = 0, staggerChildren: d, staggerDirection: f } = i;
            return Bz(e, t, u + c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [c, u] = l === 'beforeChildren' ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function Bz(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(Vz)
      .forEach((c, u) => {
        c.notify('AnimationStart', t),
          s.push(bf(c, t, { ...i, delay: n + l(u) }).then(() => c.notify('AnimationComplete', t)));
      }),
    Promise.all(s)
  );
}
function Vz(e, t) {
  return e.sortNodePosition(t);
}
function Wz(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => bf(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == 'string') r = bf(e, t, n);
  else {
    const o = typeof t == 'function' ? eu(e, t, n.custom) : t;
    r = Promise.all(Hb(e, o, n));
  }
  return r.then(() => {
    e.notify('AnimationComplete', t);
  });
}
const Uz = rp.length;
function Gb(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Gb(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Uz; n++) {
    const r = rp[n],
      o = e.props[r];
    (Ds(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const Hz = [...np].reverse(),
  Gz = np.length;
function Kz(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Wz(e, n, r)));
}
function Yz(e) {
  let t = Kz(e),
    n = m0(),
    r = !0;
  const o = (l) => (c, u) => {
    var d;
    const f = eu(
      e,
      u,
      l === 'exit' ? ((d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom) : void 0
    );
    if (f) {
      const { transition: p, transitionEnd: v, ...g } = f;
      c = { ...c, ...g, ...v };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e,
      u = Gb(e.parent) || {},
      d = [],
      f = new Set();
    let p = {},
      v = 1 / 0;
    for (let w = 0; w < Gz; w++) {
      const m = Hz[w],
        h = n[m],
        y = c[m] !== void 0 ? c[m] : u[m],
        k = Ds(y),
        P = m === l ? h.isActive : null;
      P === !1 && (v = w);
      let $ = y === u[m] && y !== c[m] && k;
      if (
        ($ && r && e.manuallyAnimateOnMount && ($ = !1),
        (h.protectedKeys = { ...p }),
        (!h.isActive && P === null) || (!y && !h.prevProp) || Jc(y) || typeof y == 'boolean')
      )
        continue;
      const _ = Xz(h.prevProp, y);
      let A = _ || (m === l && h.isActive && !$ && k) || (w > v && k),
        j = !1;
      const z = Array.isArray(y) ? y : [y];
      let Q = z.reduce(o(m), {});
      P === !1 && (Q = {});
      const { prevResolvedValues: we = {} } = h,
        We = { ...we, ...Q },
        ot = (oe) => {
          (A = !0), f.has(oe) && ((j = !0), f.delete(oe)), (h.needsAnimating[oe] = !0);
          const M = e.getValue(oe);
          M && (M.liveStyle = !1);
        };
      for (const oe in We) {
        const M = Q[oe],
          D = we[oe];
        if (p.hasOwnProperty(oe)) continue;
        let B = !1;
        cf(M) && cf(D) ? (B = !ab(M, D)) : (B = M !== D),
          B
            ? M != null
              ? ot(oe)
              : f.add(oe)
            : M !== void 0 && f.has(oe)
              ? ot(oe)
              : (h.protectedKeys[oe] = !0);
      }
      (h.prevProp = y),
        (h.prevResolvedValues = Q),
        h.isActive && (p = { ...p, ...Q }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
          (!($ && _) || j) &&
          d.push(...z.map((oe) => ({ animation: oe, options: { type: m } })));
    }
    if (f.size) {
      const w = {};
      f.forEach((m) => {
        const h = e.getBaseTarget(m),
          y = e.getValue(m);
        y && (y.liveStyle = !0), (w[m] = h ?? null);
      }),
        d.push({ animation: w });
    }
    let g = !!d.length;
    return (
      r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (g = !1),
      (r = !1),
      g ? t(d) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((f) => {
        var p;
        return (p = f.animationState) === null || p === void 0 ? void 0 : p.setActive(l, c);
      }),
      (n[l].isActive = c);
    const d = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = m0()), (r = !0);
    },
  };
}
function Xz(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !ab(t, e) : !1;
}
function Fr(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function m0() {
  return {
    animate: Fr(!0),
    whileInView: Fr(),
    whileHover: Fr(),
    whileTap: Fr(),
    whileDrag: Fr(),
    whileFocus: Fr(),
    exit: Fr(),
  };
}
class Tr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class qz extends Tr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Yz(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Jc(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let Qz = 0;
class Zz extends Tr {
  constructor() {
    super(...arguments), (this.id = Qz++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive('exit', !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Jz = { animation: { Feature: qz }, exit: { Feature: Zz } },
  Kb = (e) =>
    e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1;
function nu(e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const e4 = (e) => (t) => Kb(t) && e(t, nu(t));
function Dn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Un(e, t, n, r) {
  return Dn(e, t, e4(n), r);
}
const g0 = (e, t) => Math.abs(e - t);
function t4(e, t) {
  const n = g0(e.x, t.x),
    r = g0(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Yb {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = sd(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          p = t4(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !p) return;
        const { point: v } = d,
          { timestamp: g } = Ge;
        this.history.push({ ...v, timestamp: g });
        const { onStart: w, onMove: m } = this.handlers;
        f || (w && w(this.lastMoveEvent, d), (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = id(f, this.transformPagePoint)),
          ce.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: p, onSessionEnd: v, resumeAnimation: g } = this.handlers;
        if ((this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const w = sd(
          d.type === 'pointercancel' ? this.lastMoveEventInfo : id(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && p && p(d, w), v && v(d, w);
      }),
      !Kb(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const s = nu(t),
      a = id(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = Ge;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, sd(a, this.history)),
      (this.removeListeners = Wn(
        Un(this.contextWindow, 'pointermove', this.handlePointerMove),
        Un(this.contextWindow, 'pointerup', this.handlePointerUp),
        Un(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Sr(this.updatePoint);
  }
}
function id(e, t) {
  return t ? { point: t(e.point) } : e;
}
function y0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function sd({ point: e }, t) {
  return { point: e, delta: y0(e, Xb(t)), offset: y0(e, n4(t)), velocity: r4(t, 0.1) };
}
function n4(e) {
  return e[0];
}
function Xb(e) {
  return e[e.length - 1];
}
function r4(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = Xb(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Bn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Vn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function qb(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const v0 = qb('dragHorizontal'),
  b0 = qb('dragVertical');
function Qb(e) {
  let t = !1;
  if (e === 'y') t = b0();
  else if (e === 'x') t = v0();
  else {
    const n = v0(),
      r = b0();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Zb() {
  const e = Qb(!0);
  return e ? (e(), !1) : !0;
}
function Fo(e) {
  return e && typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
}
const Jb = 1e-4,
  o4 = 1 - Jb,
  i4 = 1 + Jb,
  eS = 0.01,
  s4 = 0 - eS,
  a4 = 0 + eS;
function $t(e) {
  return e.max - e.min;
}
function l4(e, t, n) {
  return Math.abs(e - t) <= n;
}
function S0(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Ce(t.min, t.max, e.origin)),
    (e.scale = $t(n) / $t(t)),
    (e.translate = Ce(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= o4 && e.scale <= i4) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= s4 && e.translate <= a4) || isNaN(e.translate)) && (e.translate = 0);
}
function bs(e, t, n, r) {
  S0(e.x, t.x, n.x, r ? r.originX : void 0), S0(e.y, t.y, n.y, r ? r.originY : void 0);
}
function x0(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + $t(t));
}
function c4(e, t, n) {
  x0(e.x, t.x, n.x), x0(e.y, t.y, n.y);
}
function w0(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + $t(t));
}
function Ss(e, t, n) {
  w0(e.x, t.x, n.x), w0(e.y, t.y, n.y);
}
function u4(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Ce(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Ce(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function k0(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function d4(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: k0(e.x, n, o), y: k0(e.y, t, r) };
}
function C0(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function f4(e, t) {
  return { x: C0(e.x, t.x), y: C0(e.y, t.y) };
}
function h4(e, t) {
  let n = 0.5;
  const r = $t(e),
    o = $t(t);
  return (
    o > r ? (n = gi(t.min, t.max - r, e.min)) : r > o && (n = gi(e.min, e.max - o, t.min)),
    xr(0, 1, n)
  );
}
function p4(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
  );
}
const Sf = 0.35;
function m4(e = Sf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Sf),
    { x: T0(e, 'left', 'right'), y: T0(e, 'top', 'bottom') }
  );
}
function T0(e, t, n) {
  return { min: P0(e, t), max: P0(e, n) };
}
function P0(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const _0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Io = () => ({ x: _0(), y: _0() }),
  E0 = () => ({ min: 0, max: 0 }),
  Ee = () => ({ x: E0(), y: E0() });
function Ot(e) {
  return [e('x'), e('y')];
}
function tS({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function g4({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function y4(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ad(e) {
  return e === void 0 || e === 1;
}
function xf({ scale: e, scaleX: t, scaleY: n }) {
  return !ad(e) || !ad(t) || !ad(n);
}
function Ir(e) {
  return xf(e) || nS(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function nS(e) {
  return $0(e.x) || $0(e.y);
}
function $0(e) {
  return e && e !== '0%';
}
function rc(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function A0(e, t, n, r, o) {
  return o !== void 0 && (e = rc(e, o, r)), rc(e, n, r) + t;
}
function wf(e, t = 0, n = 1, r, o) {
  (e.min = A0(e.min, t, n, r, o)), (e.max = A0(e.max, t, n, r, o));
}
function rS(e, { x: t, y: n }) {
  wf(e.x, t.translate, t.scale, t.originPoint), wf(e.y, n.translate, n.scale, n.originPoint);
}
const R0 = 0.999999999999,
  M0 = 1.0000000000001;
function v4(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === 'contents') ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Lo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), rS(e, s)),
      r && Ir(i.latestValues) && Lo(e, i.latestValues));
  }
  t.x < M0 && t.x > R0 && (t.x = 1), t.y < M0 && t.y > R0 && (t.y = 1);
}
function Do(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function j0(e, t, n, r, o = 0.5) {
  const i = Ce(e.min, e.max, o);
  wf(e, t, n, i, r);
}
function Lo(e, t) {
  j0(e.x, t.x, t.scaleX, t.scale, t.originX), j0(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function oS(e, t) {
  return tS(y4(e.getBoundingClientRect(), t));
}
function b4(e, t, n) {
  const r = oS(e, n),
    { scroll: o } = t;
  return o && (Do(r.x, o.offset.x), Do(r.y, o.offset.y)), r;
}
const iS = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  S4 = new WeakMap();
class x4 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ee()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (u) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(nu(u, 'page').point);
      },
      i = (u, d) => {
        const { drag: f, dragPropagation: p, onDragStart: v } = this.getProps();
        if (
          f &&
          !p &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Qb(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ot((w) => {
            let m = this.getAxisMotionValue(w).get() || 0;
            if (wn.test(m)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const y = h.layout.layoutBox[w];
                y && (m = $t(y) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[w] = m;
          }),
          v && ce.postRender(() => v(u, d)),
          vf(this.visualElement, 'transform');
        const { animationState: g } = this.visualElement;
        g && g.setActive('whileDrag', !0);
      },
      s = (u, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: p,
          onDirectionLock: v,
          onDrag: g,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: w } = d;
        if (p && this.currentDirection === null) {
          (this.currentDirection = w4(w)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis('x', d.point, w),
          this.updateAxis('y', d.point, w),
          this.visualElement.render(),
          g && g(u, d);
      },
      a = (u, d) => this.stop(u, d),
      l = () =>
        Ot((u) => {
          var d;
          return (
            this.getAnimationState(u) === 'paused' &&
            ((d = this.getAxisMotionValue(u).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Yb(
      t,
      { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a, resumeAnimation: l },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: iS(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ce.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Xa(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = u4(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    n && Fo(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
        ? (this.constraints = d4(o.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = m4(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ot((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = p4(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Fo(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = b4(r, o.root, this.visualElement.getTransformPagePoint());
    let s = f4(o.layout.layoutBox, i);
    if (n) {
      const a = n(g4(s));
      (this.hasMutatedConstraints = !!a), a && (s = tS(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = Ot((u) => {
        if (!Xa(u, n, this.currentDirection)) return;
        let d = (l && l[u]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          p = o ? 40 : 1e7,
          v = {
            type: 'inertia',
            velocity: r ? t[u] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(u, v);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return vf(this.visualElement, t), r.start(vp(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Ot((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ot((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Ot((n) => {
      const { drag: r } = this.getProps();
      if (!Xa(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - Ce(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Fo(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ot((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = h4({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ot((s) => {
        if (!Xa(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: c } = this.constraints[s];
        a.set(Ce(l, c, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    S4.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Un(t, 'pointerdown', (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Fo(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), ce.read(r);
    const s = Dn(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: c }) => {
        this.isDragging &&
          c &&
          (Ot((u) => {
            const d = this.getAxisMotionValue(u);
            d && ((this.originPoint[u] += l[u].translate), d.set(d.get() + l[u].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = Sf,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Xa(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function w4(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class k4 extends Tr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = nt),
      (this.removeListeners = nt),
      (this.controls = new x4(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || nt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const z0 = (e) => (t, n) => {
  e && ce.postRender(() => e(t, n));
};
class C4 extends Tr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = nt);
  }
  onPointerDown(t) {
    this.session = new Yb(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: iS(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: z0(t),
      onStart: z0(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && ce.postRender(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Un(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ga = S.createContext(null);
function sS() {
  const e = S.useContext(ga);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = S.useId();
  S.useEffect(() => r(o), []);
  const i = S.useCallback(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
function T4() {
  return P4(S.useContext(ga));
}
function P4(e) {
  return e === null ? !0 : e.isPresent;
}
const kp = S.createContext({}),
  aS = S.createContext({}),
  Ml = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function F0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Vi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (N.test(e)) e = parseFloat(e);
        else return e;
      const n = F0(e, t.target.x),
        r = F0(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  _4 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = wr.parse(e);
      if (o.length > 5) return r;
      const i = wr.createTransformer(e),
        s = typeof o[0] != 'number' ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const c = Ce(a, l, 0.5);
      return (
        typeof o[2 + s] == 'number' && (o[2 + s] /= c),
        typeof o[3 + s] == 'number' && (o[3 + s] /= c),
        i(o)
      );
    },
  },
  oc = {};
function E4(e) {
  Object.assign(oc, e);
}
const { schedule: Cp, cancel: QB } = lb(queueMicrotask, !1);
class $4 extends S.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props,
      { projection: i } = t;
    E4(A4),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
      (Ml.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              ce.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Cp.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function lS(e) {
  const [t, n] = sS(),
    r = S.useContext(kp);
  return b.jsx($4, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(aS),
    isPresent: t,
    safeToRemove: n,
  });
}
const A4 = {
    borderRadius: {
      ...Vi,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: Vi,
    borderTopRightRadius: Vi,
    borderBottomLeftRadius: Vi,
    borderBottomRightRadius: Vi,
    boxShadow: _4,
  },
  cS = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  R4 = cS.length,
  I0 = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  D0 = (e) => typeof e == 'number' || N.test(e);
function M4(e, t, n, r, o, i) {
  o
    ? ((e.opacity = Ce(0, n.opacity !== void 0 ? n.opacity : 1, j4(r))),
      (e.opacityExit = Ce(t.opacity !== void 0 ? t.opacity : 1, 0, z4(r))))
    : i &&
      (e.opacity = Ce(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < R4; s++) {
    const a = `border${cS[s]}Radius`;
    let l = L0(t, a),
      c = L0(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || D0(l) === D0(c)
        ? ((e[a] = Math.max(Ce(I0(l), I0(c), r), 0)), (wn.test(c) || wn.test(l)) && (e[a] += '%'))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = Ce(t.rotate || 0, n.rotate || 0, r));
}
function L0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const j4 = uS(0, 0.5, mb),
  z4 = uS(0.5, 0.95, nt);
function uS(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(gi(e, t, r)));
}
function O0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Dt(e, t) {
  O0(e.x, t.x), O0(e.y, t.y);
}
function N0(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function B0(e, t, n, r, o) {
  return (e -= t), (e = rc(e, 1 / n, r)), o !== void 0 && (e = rc(e, 1 / o, r)), e;
}
function F4(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (wn.test(t) && ((t = parseFloat(t)), (t = Ce(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = Ce(i.min, i.max, r);
  e === i && (a -= t), (e.min = B0(e.min, t, n, a, o)), (e.max = B0(e.max, t, n, a, o));
}
function V0(e, t, [n, r, o], i, s) {
  F4(e, t[n], t[r], t[o], t.scale, i, s);
}
const I4 = ['x', 'scaleX', 'originX'],
  D4 = ['y', 'scaleY', 'originY'];
function W0(e, t, n, r) {
  V0(e.x, t, I4, n ? n.x : void 0, r ? r.x : void 0),
    V0(e.y, t, D4, n ? n.y : void 0, r ? r.y : void 0);
}
function U0(e) {
  return e.translate === 0 && e.scale === 1;
}
function dS(e) {
  return U0(e.x) && U0(e.y);
}
function H0(e, t) {
  return e.min === t.min && e.max === t.max;
}
function L4(e, t) {
  return H0(e.x, t.x) && H0(e.y, t.y);
}
function G0(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function fS(e, t) {
  return G0(e.x, t.x) && G0(e.y, t.y);
}
function K0(e) {
  return $t(e.x) / $t(e.y);
}
function Y0(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class O4 {
  constructor() {
    this.members = [];
  }
  add(t) {
    bp(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ((Sp(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function N4(e, t, n) {
  let r = '';
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: f, skewX: p, skewY: v } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      p && (r += `skewX(${p}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || 'none';
}
const B4 = (e, t) => e.depth - t.depth;
class V4 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    bp(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Sp(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(B4), (this.isDirty = !1), this.children.forEach(t);
  }
}
function jl(e) {
  const t = tt(e) ? e.get() : e;
  return Mz(t) ? t.toValue() : t;
}
function W4(e, t) {
  const n = kn.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Sr(r), e(i - t));
    };
  return ce.read(r, !0), () => Sr(r);
}
function U4(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function H4(e, t, n) {
  const r = tt(e) ? e : Ns(e);
  return r.start(vp('', r, t, n)), r.animation;
}
const Dr = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  os = typeof window < 'u' && window.MotionDebug !== void 0,
  ld = ['', 'X', 'Y', 'Z'],
  G4 = { visibility: 'hidden' },
  X0 = 1e3;
let K4 = 0;
function cd(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function hS(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Ub(t);
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, 'transform', ce, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && hS(r);
}
function pS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = K4++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            os && (Dr.totalNodes = Dr.resolvedTargetDeltas = Dr.recalculatedProjection = 0),
            this.nodes.forEach(q4),
            this.nodes.forEach(tF),
            this.nodes.forEach(nF),
            this.nodes.forEach(Q4),
            os && window.MotionDebug.record(Dr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new V4());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new xp()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = U4(s)), (this.instance = s);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = W4(f, 250)),
            Ml.hasAnimatedSinceResize && ((Ml.hasAnimatedSinceResize = !1), this.nodes.forEach(Q0));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: v }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g = this.options.transition || u.getDefaultTransition() || aF,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: m } = u.getProps(),
                h = !this.targetLayout || !fS(this.targetLayout, v) || p,
                y = !f && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, y);
                const k = { ...op(g, 'layout'), onPlay: w, onComplete: m };
                (u.shouldReduceMotion || this.options.layoutRoot) && ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k);
              } else
                f || Q0(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Sr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(rF), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && hS(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (d.shouldResetTransform = !0),
          d.updateScroll('snapshot'),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(q0);
        return;
      }
      this.isUpdating || this.nodes.forEach(J4),
        (this.isUpdating = !1),
        this.nodes.forEach(eF),
        this.nodes.forEach(Y4),
        this.nodes.forEach(X4),
        this.clearAllSnapshots();
      const a = kn.now();
      (Ge.delta = xr(0, 1e3 / 60, a - Ge.timestamp)),
        (Ge.timestamp = a),
        (Ge.isProcessing = !0),
        ed.update.process(Ge),
        ed.preRender.process(Ge),
        ed.render.process(Ge),
        (Ge.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Cp.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Z4), this.sharedNodes.forEach(oF);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), ce.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ce.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ee()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify('LayoutMeasure', this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !dS(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, '') : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || Ir(this.latestValues) || u) &&
        (o(this.instance, c), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        lF(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return Ee();
      const l = a.measureViewportBox();
      if (
        !(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(cF))
      ) {
        const { scroll: u } = this.root;
        u && (Do(l.x, u.offset.x), Do(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = Ee();
      if ((Dt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)) return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: d, options: f } = u;
        u !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Dt(l, s), Do(l.x, d.offset.x), Do(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = Ee();
      Dt(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Lo(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Ir(u.latestValues) && Lo(l, u.latestValues);
      }
      return Ir(this.latestValues) && Lo(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Ee();
      Dt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Ir(c.latestValues)) continue;
        xf(c.latestValues) && c.updateSnapshot();
        const u = Ee(),
          d = c.measurePageBox();
        Dt(u, d), W0(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Ir(this.latestValues) && W0(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ge.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ge.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ee()),
              (this.relativeTargetOrigin = Ee()),
              Ss(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox),
              Dt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Ee()), (this.targetWithTransforms = Ee())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                c4(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Dt(this.target, this.layout.layoutBox),
                  rS(this.target, this.targetDelta))
                : Dt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ee()),
                (this.relativeTargetOrigin = Ee()),
                Ss(this.relativeTargetOrigin, this.target, p.target),
                Dt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          os && Dr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || xf(this.parent.latestValues) || nS(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty)) &&
          (c = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
        this.resolvedRelativeTargetAt === Ge.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || d))
      )
        return;
      Dt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        p = this.treeScale.y;
      v4(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Ee()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (N0(this.prevProjectionDelta.x, this.projectionDelta.x),
          N0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        bs(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== p ||
          !Y0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Y0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', v)),
        os && Dr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Io()),
        (this.projectionDelta = Io()),
        (this.projectionDeltaWithTransform = Io());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        d = Io();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Ee(),
        p = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        g = p !== v,
        w = this.getStack(),
        m = !w || w.members.length <= 1,
        h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(sF));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (k) => {
        const P = k / 1e3;
        Z0(d.x, s.x, P),
          Z0(d.y, s.y, P),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ss(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            iF(this.relativeTarget, this.relativeTargetOrigin, f, P),
            y && L4(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = Ee()),
            Dt(y, this.relativeTarget)),
          g && ((this.animationValues = u), M4(u, c, this.latestValues, P, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (Sr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ce.update(() => {
          (Ml.hasAnimatedSinceResize = !0),
            (this.currentAnimation = H4(0, X0, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(X0), this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          mS(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Ee();
          const d = $t(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = $t(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        Dt(a, l), Lo(a, u), bs(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new O4()), this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && cd('z', s, c, this.animationValues);
      for (let u = 0; u < ld.length; u++)
        cd(`rotate${ld[u]}`, s, c, this.animationValues),
          cd(`skew${ld[u]}`, s, c, this.animationValues);
      s.render();
      for (const u in c)
        s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return G4;
      const c = { visibility: '' },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ''),
          (c.pointerEvents = jl(s == null ? void 0 : s.pointerEvents) || ''),
          (c.transform = u ? u(this.latestValues, '') : 'none'),
          c
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (g.pointerEvents = jl(s == null ? void 0 : s.pointerEvents) || '')),
          this.hasProjected &&
            !Ir(this.latestValues) &&
            ((g.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
          g
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = N4(this.projectionDeltaWithTransform, this.treeScale, f)),
        u && (c.transform = u(f, c.transform));
      const { x: p, y: v } = this.projectionDelta;
      (c.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (c.opacity =
              d === this
                ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !==
                    null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (c.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0);
      for (const g in oc) {
        if (f[g] === void 0) continue;
        const { correct: w, applyTo: m } = oc[g],
          h = c.transform === 'none' ? f[g] : w(f[g], d);
        if (m) {
          const y = m.length;
          for (let k = 0; k < y; k++) c[m[k]] = h;
        } else c[g] = h;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = d === this ? jl(s == null ? void 0 : s.pointerEvents) || '' : 'none'),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(q0),
        this.root.sharedNodes.clear();
    }
  };
}
function Y4(e) {
  e.updateLayout();
}
function X4(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === 'size'
      ? Ot((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            p = $t(f);
          (f.min = r[d].min), (f.max = f.min + p);
        })
      : mS(i, n.layoutBox, r) &&
        Ot((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            p = $t(r[d]);
          (f.max = f.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + p));
        });
    const a = Io();
    bs(a, r, n.layoutBox);
    const l = Io();
    s ? bs(l, e.applyTransform(o, !0), n.measuredBox) : bs(l, r, n.layoutBox);
    const c = !dS(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const v = Ee();
          Ss(v, n.layoutBox, f.layoutBox);
          const g = Ee();
          Ss(g, r, p.layoutBox),
            fS(v, g) || (u = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g), (e.relativeTargetOrigin = v), (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function q4(e) {
  os && Dr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Q4(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Z4(e) {
  e.clearSnapshot();
}
function q0(e) {
  e.clearMeasurements();
}
function J4(e) {
  e.isLayoutDirty = !1;
}
function eF(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform();
}
function Q0(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function tF(e) {
  e.resolveTargetDelta();
}
function nF(e) {
  e.calcProjection();
}
function rF(e) {
  e.resetSkewAndRotation();
}
function oF(e) {
  e.removeLeadSnapshot();
}
function Z0(e, t, n) {
  (e.translate = Ce(t.translate, 0, n)),
    (e.scale = Ce(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function J0(e, t, n, r) {
  (e.min = Ce(t.min, n.min, r)), (e.max = Ce(t.max, n.max, r));
}
function iF(e, t, n, r) {
  J0(e.x, t.x, n.x, r), J0(e.y, t.y, n.y, r);
}
function sF(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const aF = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  ey = (e) =>
    typeof navigator < 'u' && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  ty = ey('applewebkit/') && !ey('chrome/') ? Math.round : nt;
function ny(e) {
  (e.min = ty(e.min)), (e.max = ty(e.max));
}
function lF(e) {
  ny(e.x), ny(e.y);
}
function mS(e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !l4(K0(t), K0(n), 0.2));
}
function cF(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const uF = pS({
    attachResizeListener: (e, t) => Dn(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ud = { current: void 0 },
  gS = pS({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ud.current) {
        const e = new uF({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ud.current = e);
      }
      return ud.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  dF = { pan: { Feature: C4 }, drag: { Feature: k4, ProjectionNode: gS, MeasureLayout: lS } };
function ry(e, t) {
  const n = t ? 'pointerenter' : 'pointerleave',
    r = t ? 'onHoverStart' : 'onHoverEnd',
    o = (i, s) => {
      if (i.pointerType === 'touch' || Zb()) return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive('whileHover', t);
      const l = a[r];
      l && ce.postRender(() => l(i, s));
    };
  return Un(e.current, n, o, { passive: !e.getProps()[r] });
}
class fF extends Tr {
  mount() {
    this.unmount = Wn(ry(this.node, !0), ry(this.node, !1));
  }
  unmount() {}
}
class hF extends Tr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Wn(
      Dn(this.node.current, 'focus', () => this.onFocus()),
      Dn(this.node.current, 'blur', () => this.onBlur())
    );
  }
  unmount() {}
}
const yS = (e, t) => (t ? (e === t ? !0 : yS(e, t.parentElement)) : !1);
function dd(e, t) {
  if (!t) return;
  const n = new PointerEvent('pointer' + e);
  t(n, nu(n));
}
class pF extends Tr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = nt),
      (this.removeEndListeners = nt),
      (this.removeAccessibleListeners = nt),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = Un(
            window,
            'pointerup',
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: c, onTapCancel: u, globalTapTarget: d } = this.node.getProps(),
                f = !d && !yS(this.node.current, a.target) ? u : c;
              f && ce.update(() => f(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Un(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Wn(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== 'Enter' || this.isPressing) return;
            const s = (a) => {
              a.key !== 'Enter' ||
                !this.checkPressEnd() ||
                dd('up', (l, c) => {
                  const { onTap: u } = this.node.getProps();
                  u && ce.postRender(() => u(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Dn(this.node.current, 'keyup', s)),
              dd('down', (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Dn(this.node.current, 'keydown', t),
          r = () => {
            this.isPressing && dd('cancel', (i, s) => this.cancelPress(i, s));
          },
          o = Dn(this.node.current, 'blur', r);
        this.removeAccessibleListeners = Wn(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      r && ce.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !Zb()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ce.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Un(
        t.globalTapTarget ? window : this.node.current,
        'pointerdown',
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Dn(this.node.current, 'focus', this.startAccessiblePress);
    this.removeStartListeners = Wn(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const kf = new WeakMap(),
  fd = new WeakMap(),
  mF = (e) => {
    const t = kf.get(e.target);
    t && t(e);
  },
  gF = (e) => {
    e.forEach(mF);
  };
function yF({ root: e, ...t }) {
  const n = e || document;
  fd.has(n) || fd.set(n, {});
  const r = fd.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(gF, { root: e, ...t })), r[o];
}
function vF(e, t, n) {
  const r = yF(t);
  return (
    kf.set(e, n),
    r.observe(e),
    () => {
      kf.delete(e), r.unobserve(e);
    }
  );
}
const bF = { some: 0, all: 1 };
class SF extends Tr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = 'some', once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == 'number' ? o : bF[o],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (this.isInView === c || ((this.isInView = c), i && !c && this.hasEnteredView)) return;
        c && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', c);
        const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(),
          f = c ? u : d;
        f && f(l);
      };
    return vF(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(xF(t, n)) && this.startObserver();
  }
  unmount() {}
}
function xF({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const wF = {
    inView: { Feature: SF },
    tap: { Feature: pF },
    focus: { Feature: hF },
    hover: { Feature: fF },
  },
  kF = { layout: { ProjectionNode: gS, MeasureLayout: lS } },
  Tp = S.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
  ru = S.createContext({}),
  Pp = typeof window < 'u',
  vS = Pp ? S.useLayoutEffect : S.useEffect,
  bS = S.createContext({ strict: !1 });
function CF(e, t, n, r, o) {
  var i, s;
  const { visualElement: a } = S.useContext(ru),
    l = S.useContext(bS),
    c = S.useContext(ga),
    u = S.useContext(Tp).reducedMotion,
    d = S.useRef();
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const f = d.current,
    p = S.useContext(aS);
  f && !f.projection && o && (f.type === 'html' || f.type === 'svg') && TF(d.current, n, o, p),
    S.useInsertionEffect(() => {
      f && f.update(n, c);
    });
  const v = n[Wb],
    g = S.useRef(
      !!v &&
        !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, v)) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, v))
    );
  return (
    vS(() => {
      f &&
        ((window.MotionIsMounted = !0),
        f.updateFeatures(),
        Cp.render(f.render),
        g.current && f.animationState && f.animationState.animateChanges());
    }),
    S.useEffect(() => {
      f &&
        (!g.current && f.animationState && f.animationState.animateChanges(),
        g.current &&
          (queueMicrotask(() => {
            var w;
            (w = window.MotionHandoffMarkAsComplete) === null || w === void 0 || w.call(window, v);
          }),
          (g.current = !1)));
    }),
    f
  );
}
function TF(e, t, n, r) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  (e.projection = new n(e.latestValues, t['data-framer-portal-id'] ? void 0 : SS(e.parent))),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && Fo(a)),
      visualElement: e,
      animationType: typeof i == 'string' ? i : 'both',
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function SS(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : SS(e.parent);
}
function PF(e, t, n) {
  return S.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : Fo(n) && (n.current = r));
    },
    [t]
  );
}
function ou(e) {
  return Jc(e.animate) || rp.some((t) => Ds(e[t]));
}
function xS(e) {
  return !!(ou(e) || e.variants);
}
function _F(e, t) {
  if (ou(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || Ds(n) ? n : void 0, animate: Ds(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function EF(e) {
  const { initial: t, animate: n } = _F(e, S.useContext(ru));
  return S.useMemo(() => ({ initial: t, animate: n }), [oy(t), oy(n)]);
}
function oy(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const iy = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  yi = {};
for (const e in iy) yi[e] = { isEnabled: (t) => iy[e].some((n) => !!t[n]) };
function $F(e) {
  for (const t in e) yi[t] = { ...yi[t], ...e[t] };
}
const AF = Symbol.for('motionComponentSymbol');
function RF({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && $F(e);
  function i(a, l) {
    let c;
    const u = { ...S.useContext(Tp), ...a, layoutId: MF(a) },
      { isStatic: d } = u,
      f = EF(a),
      p = r(a, d);
    if (!d && Pp) {
      jF();
      const v = zF(u);
      (c = v.MeasureLayout), (f.visualElement = CF(o, p, u, t, v.ProjectionNode));
    }
    return b.jsxs(ru.Provider, {
      value: f,
      children: [
        c && f.visualElement ? b.jsx(c, { visualElement: f.visualElement, ...u }) : null,
        n(o, a, PF(p, f.visualElement, l), p, d, f.visualElement),
      ],
    });
  }
  const s = S.forwardRef(i);
  return (s[AF] = o), s;
}
function MF({ layoutId: e }) {
  const t = S.useContext(kp).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function jF(e, t) {
  S.useContext(bS).strict;
}
function zF(e) {
  const { drag: t, layout: n } = yi;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e)) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const FF = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function _p(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(FF.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function wS(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const kS = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function CS(e, t, n, r) {
  wS(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(kS.has(o) ? o : wp(o), t.attrs[o]);
}
function TS(e, { layout: t, layoutId: n }) {
  return (
    ho.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!oc[e] || e === 'opacity'))
  );
}
function Ep(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (tt(o[s]) ||
      (t.style && tt(t.style[s])) ||
      TS(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (i[s] = o[s]);
  return i;
}
function PS(e, t, n) {
  const r = Ep(e, t, n);
  for (const o in e)
    if (tt(e[o]) || tt(t[o])) {
      const i = ha.indexOf(o) !== -1 ? 'attr' + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
function $p(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function IF({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const s = { latestValues: DF(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const _S = (e) => (t, n) => {
  const r = S.useContext(ru),
    o = S.useContext(ga),
    i = () => IF(e, t, r, o);
  return n ? i() : $p(i);
};
function DF(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = jl(i[f]);
  let { initial: s, animate: a } = e;
  const l = ou(e),
    c = xS(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  const d = u ? a : s;
  if (d && typeof d != 'boolean' && !Jc(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let p = 0; p < f.length; p++) {
      const v = tp(e, f[p]);
      if (v) {
        const { transitionEnd: g, transition: w, ...m } = v;
        for (const h in m) {
          let y = m[h];
          if (Array.isArray(y)) {
            const k = u ? y.length - 1 : 0;
            y = y[k];
          }
          y !== null && (o[h] = y);
        }
        for (const h in g) o[h] = g[h];
      }
    }
  }
  return o;
}
const Ap = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  ES = () => ({ ...Ap(), attrs: {} }),
  $S = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  LF = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  OF = ha.length;
function NF(e, t, n) {
  let r = '',
    o = !0;
  for (let i = 0; i < OF; i++) {
    const s = ha[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == 'number'
        ? (l = a === (s.startsWith('scale') ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = $S(a, dp[s]);
      if (!l) {
        o = !1;
        const u = LF[s] || s;
        r += `${u}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? '' : r)) : o && (r = 'none'), r;
}
function Rp(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (ho.has(l)) {
      s = !0;
      continue;
    } else if (Sb(l)) {
      o[l] = c;
      continue;
    } else {
      const u = $S(c, dp[l]);
      l.startsWith('origin') ? ((a = !0), (i[l] = u)) : (r[l] = u);
    }
  }
  if (
    (t.transform ||
      (s || n ? (r.transform = NF(t, e.transform, n)) : r.transform && (r.transform = 'none')),
    a)
  ) {
    const { originX: l = '50%', originY: c = '50%', originZ: u = 0 } = i;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
function sy(e, t, n) {
  return typeof e == 'string' ? e : N.transform(t + n * e);
}
function BF(e, t, n) {
  const r = sy(t, e.x, e.width),
    o = sy(n, e.y, e.height);
  return `${r} ${o}`;
}
const VF = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  WF = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function UF(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? VF : WF;
  e[i.offset] = N.transform(-r);
  const s = N.transform(t),
    a = N.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Mp(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  d
) {
  if ((Rp(e, c, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: p, dimensions: v } = e;
  f.transform && (v && (p.transform = f.transform), delete f.transform),
    v &&
      (o !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = BF(v, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && UF(f, s, a, l, !1);
}
const jp = (e) => typeof e == 'string' && e.toLowerCase() === 'svg',
  HF = {
    useVisualState: _S({
      scrapeMotionValuesFromProps: PS,
      createRenderState: ES,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ce.read(() => {
          try {
            n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ce.render(() => {
            Mp(n, r, jp(t.tagName), e.transformTemplate), CS(t, n);
          });
      },
    }),
  },
  GF = { useVisualState: _S({ scrapeMotionValuesFromProps: Ep, createRenderState: Ap }) };
function AS(e, t, n) {
  for (const r in t) !tt(t[r]) && !TS(r, n) && (e[r] = t[r]);
}
function KF({ transformTemplate: e }, t) {
  return S.useMemo(() => {
    const n = Ap();
    return Rp(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function YF(e, t) {
  const n = e.style || {},
    r = {};
  return AS(r, n, e), Object.assign(r, KF(e, t)), r;
}
function XF(e, t) {
  const n = {},
    r = YF(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
      (r.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const qF = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function ic(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    qF.has(e)
  );
}
let RS = (e) => !ic(e);
function QF(e) {
  e && (RS = (t) => (t.startsWith('on') ? !ic(t) : e(t)));
}
try {
  QF(require('@emotion/is-prop-valid').default);
} catch {}
function ZF(e, t, n) {
  const r = {};
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((RS(o) ||
        (n === !0 && ic(o)) ||
        (!t && !ic(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (r[o] = e[o]));
  return r;
}
function JF(e, t, n, r) {
  const o = S.useMemo(() => {
    const i = ES();
    return Mp(i, t, jp(r), e.transformTemplate), { ...i.attrs, style: { ...i.style } };
  }, [t]);
  if (e.style) {
    const i = {};
    AS(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function e3(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (_p(n) ? JF : XF)(r, i, s, n),
      c = ZF(r, typeof n == 'string', e),
      u = n !== S.Fragment ? { ...c, ...l, ref: o } : {},
      { children: d } = r,
      f = S.useMemo(() => (tt(d) ? d.get() : d), [d]);
    return S.createElement(n, { ...u, children: f });
  };
}
function t3(e, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...(_p(r) ? HF : GF),
      preloadedFeatures: e,
      useRender: e3(o),
      createVisualElement: t,
      Component: r,
    };
    return RF(s);
  };
}
const Cf = { current: null },
  MS = { current: !1 };
function n3() {
  if (((MS.current = !0), !!Pp))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Cf.current = e.matches);
      e.addListener(t), t();
    } else Cf.current = !1;
}
function r3(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (tt(o)) e.addValue(r, o);
    else if (tt(i)) e.addValue(r, Ns(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Ns(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const ay = new WeakMap(),
  o3 = [...kb, Je, wr],
  i3 = (e) => o3.find(wb(e)),
  ly = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ];
class s3 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = lp),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = kn.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), ce.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = ou(n)),
      (this.isVariantNode = xS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && tt(p) && p.set(l[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      ay.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      MS.current || n3(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : Cf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    ay.delete(this.current),
      this.projection && this.projection.unmount(),
      Sr(this.notifyUpdate),
      Sr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = ho.has(t),
      o = n.on('change', (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ce.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on('renderRequest', this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), i(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = 'animation';
    for (t in yi) {
      const n = yi[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ee();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < ly.length; r++) {
      const o = ly[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = 'on' + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = r3(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ns(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == 'string' && (vb(o) || yb(o))
          ? (o = parseFloat(o))
          : !i3(o) && wr.test(n) && (o = Rb(t, n)),
        this.setBaseTarget(t, tt(o) ? o.get() : o)),
      tt(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == 'string' || typeof r == 'object') {
      const s = tp(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !tt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new xp()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class jS extends s3 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Mb);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function a3(e) {
  return window.getComputedStyle(e);
}
class l3 extends jS {
  constructor() {
    super(...arguments), (this.type = 'html'), (this.renderInstance = wS);
  }
  readValueFromInstance(t, n) {
    if (ho.has(n)) {
      const r = fp(n);
      return (r && r.default) || 0;
    } else {
      const r = a3(t),
        o = (Sb(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return oS(t, n);
  }
  build(t, n, r) {
    Rp(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ep(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    tt(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class c3 extends jS {
  constructor() {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ee);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ho.has(n)) {
      const r = fp(n);
      return (r && r.default) || 0;
    }
    return (n = kS.has(n) ? n : wp(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return PS(t, n, r);
  }
  build(t, n, r) {
    Mp(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    CS(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = jp(t.tagName)), super.mount(t);
  }
}
const u3 = (e, t) => (_p(e) ? new c3(t) : new l3(t, { allowProjection: e !== S.Fragment })),
  d3 = t3({ ...Jz, ...wF, ...dF, ...kF }, u3),
  Ai = UM(d3);
class f3 extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function h3({ children: e, isPresent: t }) {
  const n = S.useId(),
    r = S.useRef(null),
    o = S.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = S.useContext(Tp);
  return (
    S.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: c } = o.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement('style');
      return (
        i && (u.nonce = i),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    b.jsx(f3, { isPresent: t, childRef: r, sizeRef: o, children: S.cloneElement(e, { ref: r }) })
  );
}
const p3 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = $p(m3),
    l = S.useId(),
    c = S.useCallback(
      (d) => {
        a.set(d, !0);
        for (const f of a.values()) if (!f) return;
        r && r();
      },
      [a, r]
    ),
    u = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: c,
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      i ? [Math.random(), c] : [n, c]
    );
  return (
    S.useMemo(() => {
      a.forEach((d, f) => a.set(f, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === 'popLayout' && (e = b.jsx(h3, { isPresent: n, children: e })),
    b.jsx(ga.Provider, { value: u, children: e })
  );
};
function m3() {
  return new Map();
}
const qa = (e) => e.key || '';
function cy(e) {
  const t = [];
  return (
    S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const ya = ({
    children: e,
    exitBeforeEnter: t,
    custom: n,
    initial: r = !0,
    onExitComplete: o,
    presenceAffectsLayout: i = !0,
    mode: s = 'sync',
  }) => {
    const a = S.useMemo(() => cy(e), [e]),
      l = a.map(qa),
      c = S.useRef(!0),
      u = S.useRef(a),
      d = $p(() => new Map()),
      [f, p] = S.useState(a),
      [v, g] = S.useState(a);
    vS(() => {
      (c.current = !1), (u.current = a);
      for (let h = 0; h < v.length; h++) {
        const y = qa(v[h]);
        l.includes(y) ? d.delete(y) : d.get(y) !== !0 && d.set(y, !1);
      }
    }, [v, l.length, l.join('-')]);
    const w = [];
    if (a !== f) {
      let h = [...a];
      for (let y = 0; y < v.length; y++) {
        const k = v[y],
          P = qa(k);
        l.includes(P) || (h.splice(y, 0, k), w.push(k));
      }
      s === 'wait' && w.length && (h = w), g(cy(h)), p(a);
      return;
    }
    const { forceRender: m } = S.useContext(kp);
    return b.jsx(b.Fragment, {
      children: v.map((h) => {
        const y = qa(h),
          k = a === v || l.includes(y),
          P = () => {
            if (d.has(y)) d.set(y, !0);
            else return;
            let $ = !0;
            d.forEach((_) => {
              _ || ($ = !1);
            }),
              $ && (m == null || m(), g(u.current), o && o());
          };
        return b.jsx(
          p3,
          {
            isPresent: k,
            initial: !c.current || r ? void 0 : !1,
            custom: k ? void 0 : n,
            presenceAffectsLayout: i,
            mode: s,
            onExitComplete: k ? void 0 : P,
            children: h,
          },
          y
        );
      }),
    });
  },
  g3 = (e, t) => e.find((n) => n.id === t);
function uy(e, t) {
  const n = zS(e, t),
    r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return { position: n, index: r };
}
function zS(e, t) {
  for (const [n, r] of Object.entries(e)) if (g3(r, t)) return n;
}
function y3(e) {
  const t = e.includes('right'),
    n = e.includes('left');
  let r = 'center';
  return (
    t && (r = 'flex-end'),
    n && (r = 'flex-start'),
    { display: 'flex', flexDirection: 'column', alignItems: r }
  );
}
function v3(e) {
  const n = e === 'top' || e === 'bottom' ? '0 auto' : void 0,
    r = e.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
    o = e.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : void 0,
    i = e.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
    s = e.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)';
  return {
    position: 'fixed',
    zIndex: 'var(--toast-z-index, 5500)',
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: s,
  };
}
var b3 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  S3 = U1(function (e) {
    return (
      b3.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    );
  }),
  x3 = S3,
  w3 = function (t) {
    return t !== 'theme';
  },
  dy = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? x3 : w3;
  },
  fy = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o;
  },
  k3 = !1,
  C3 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      q1(n, r, o),
      PM(function () {
        return Q1(n, r, o);
      }),
      null
    );
  },
  T3 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = fy(t, n, r),
      l = a || dy(o),
      c = !l('as');
    return function () {
      var u = arguments,
        d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if ((i !== void 0 && d.push('label:' + i + ';'), u[0] == null || u[0].raw === void 0))
        d.push.apply(d, u);
      else {
        d.push(u[0][0]);
        for (var f = u.length, p = 1; p < f; p++) d.push(u[p], u[0][p]);
      }
      var v = Zh(function (g, w, m) {
        var h = (c && g.as) || o,
          y = '',
          k = [],
          P = g;
        if (g.theme == null) {
          P = {};
          for (var $ in g) P[$] = g[$];
          P.theme = S.useContext(Is);
        }
        typeof g.className == 'string'
          ? (y = yM(w.registered, k, g.className))
          : g.className != null && (y = g.className + ' ');
        var _ = Qh(d.concat(k), w.registered, P);
        (y += w.key + '-' + _.name), s !== void 0 && (y += ' ' + s);
        var A = c && a === void 0 ? dy(h) : l,
          j = {};
        for (var z in g) (c && z === 'as') || (A(z) && (j[z] = g[z]));
        return (
          (j.className = y),
          m && (j.ref = m),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(C3, { cache: w, serialized: _, isStringTag: typeof h == 'string' }),
            S.createElement(h, j)
          )
        );
      });
      return (
        (v.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string' ? o : o.displayName || o.name || 'Component') +
              ')'),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = d),
        (v.__emotion_forwardProp = a),
        Object.defineProperty(v, 'toString', {
          value: function () {
            return s === void 0 && k3 ? 'NO_COMPONENT_SELECTOR' : '.' + s;
          },
        }),
        (v.withComponent = function (g, w) {
          return e(g, ro({}, n, w, { shouldForwardProp: fy(v, w, !0) })).apply(void 0, d);
        }),
        v
      );
    };
  },
  P3 = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Tf = T3.bind();
P3.forEach(function (e) {
  Tf[e] = Tf(e);
});
const _3 = new Set([
    ...Y2({}),
    'textStyle',
    'layerStyle',
    'apply',
    'noOfLines',
    'focusBorderColor',
    'errorBorderColor',
    'as',
    '__css',
    'css',
    'sx',
  ]),
  E3 = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate']);
function $3(e) {
  return (E3.has(e) || !_3.has(e)) && e[0] !== '_';
}
const A3 = n2(Tf),
  R3 =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...s } = t,
        [a] = a2(s, n.__isStyleProp),
        l = Vt(e, t),
        c = OT({}, o, l, jc(a), i),
        u = k1(c)(t.theme);
      return r ? [u, r] : u;
    };
function hd(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = $3);
  const o = R3({ baseStyle: n }),
    i = A3(e, r)(o);
  return S.forwardRef(function (l, c) {
    const { children: u, ...d } = l,
      { colorMode: f, forced: p } = ep(),
      v = p ? f : void 0;
    return S.createElement(i, { ref: c, 'data-theme': v, ...d }, u);
  });
}
function M3() {
  const e = new Map();
  return new Proxy(hd, {
    apply(t, n, r) {
      return hd(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, hd(n)), e.get(n);
    },
  });
}
const V = M3(),
  j3 = {
    initial: (e) => {
      const { position: t } = e,
        n = ['top', 'bottom'].includes(t) ? 'y' : 'x';
      let r = ['top-right', 'bottom-right'].includes(t) ? 1 : -1;
      return t === 'bottom' && (r = 1), { opacity: 0, [n]: r * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
  },
  FS = S.memo((e) => {
    const {
        id: t,
        message: n,
        onCloseComplete: r,
        onRequestRemove: o,
        requestClose: i = !1,
        position: s = 'bottom',
        duration: a = 5e3,
        containerStyle: l,
        motionVariants: c = j3,
        toastSpacing: u = '0.5rem',
      } = e,
      [d, f] = S.useState(a),
      p = T4();
    qd(() => {
      p || r == null || r();
    }, [p]),
      qd(() => {
        f(a);
      }, [a]);
    const v = () => f(null),
      g = () => f(a),
      w = () => {
        p && o();
      };
    S.useEffect(() => {
      p && i && o();
    }, [p, i, o]),
      f2(w, d);
    const m = S.useMemo(
        () => ({ pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: u, ...l }),
        [l, u]
      ),
      h = S.useMemo(() => y3(s), [s]);
    return b.jsx(Ai.div, {
      layout: !0,
      className: 'chakra-toast',
      variants: c,
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      onHoverStart: v,
      onHoverEnd: g,
      custom: { position: s },
      style: h,
      children: b.jsx(V.div, {
        role: 'status',
        'aria-atomic': 'true',
        className: 'chakra-toast__inner',
        __css: m,
        children: Vt(n, { id: t, onClose: w }),
      }),
    });
  });
FS.displayName = 'ToastComponent';
function Y(e) {
  return S.forwardRef(e);
}
var z3 = typeof Element < 'u',
  F3 = typeof Map == 'function',
  I3 = typeof Set == 'function',
  D3 = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function zl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!zl(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (F3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; ) if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!zl(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (I3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; ) if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (D3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (z3 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !((o[r] === '_owner' || o[r] === '__v' || o[r] === '__o') && e.$$typeof) &&
        !zl(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var L3 = function (t, n) {
  try {
    return zl(t, n);
  } catch (r) {
    if ((r.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1;
    throw r;
  }
};
const O3 = Ah(L3);
function N3() {
  const e = S.useContext(Is);
  if (!e)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
    );
  return e;
}
function IS() {
  const e = ep(),
    t = N3();
  return { ...e, theme: t };
}
function DS(e, t = {}) {
  const { styleConfig: n, ...r } = t,
    { theme: o, colorMode: i } = IS(),
    s = e ? v1(o, `components.${e}`) : void 0,
    a = n || s,
    l = bn(
      { theme: o, colorMode: i },
      (a == null ? void 0 : a.defaultProps) ?? {},
      jc(Dh(r, ['children'])),
      (u, d) => (u ? void 0 : d)
    ),
    c = S.useRef({});
  if (a) {
    const d = iP(a)(l);
    O3(c.current, d) || (c.current = d);
  }
  return c.current;
}
function po(e, t = {}) {
  return DS(e, t);
}
function mo(e, t = {}) {
  return DS(e, t);
}
const hy = {
    path: b.jsxs('g', {
      stroke: 'currentColor',
      strokeWidth: '1.5',
      children: [
        b.jsx('path', {
          strokeLinecap: 'round',
          fill: 'none',
          d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
        }),
        b.jsx('path', {
          fill: 'currentColor',
          strokeLinecap: 'round',
          d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
        }),
        b.jsx('circle', { fill: 'none', strokeMiterlimit: '10', cx: '12', cy: '12', r: '11.25' }),
      ],
    }),
    viewBox: '0 0 24 24',
  },
  Ri = Y((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: o = 'currentColor',
        focusable: i = !1,
        children: s,
        className: a,
        __css: l,
        ...c
      } = e,
      u = ue('chakra-icon', a),
      d = po('Icon', e),
      f = {
        w: '1em',
        h: '1em',
        display: 'inline-block',
        lineHeight: '1em',
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      p = { ref: t, focusable: i, className: u, __css: f },
      v = r ?? hy.viewBox;
    if (n && typeof n != 'string') return b.jsx(V.svg, { as: n, ...p, ...c });
    const g = s ?? hy.path;
    return b.jsx(V.svg, { verticalAlign: 'middle', viewBox: v, ...p, ...c, children: g });
  });
Ri.displayName = 'Icon';
function B3(e) {
  return b.jsx(Ri, {
    viewBox: '0 0 24 24',
    ...e,
    children: b.jsx('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
    }),
  });
}
function V3(e) {
  return b.jsx(Ri, {
    viewBox: '0 0 24 24',
    ...e,
    children: b.jsx('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
    }),
  });
}
function py(e) {
  return b.jsx(Ri, {
    viewBox: '0 0 24 24',
    ...e,
    children: b.jsx('path', {
      fill: 'currentColor',
      d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
    }),
  });
}
const W3 = Zc({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }),
  zp = Y((e, t) => {
    const n = po('Spinner', e),
      {
        label: r = 'Loading...',
        thickness: o = '2px',
        speed: i = '0.45s',
        emptyColor: s = 'transparent',
        className: a,
        ...l
      } = Yt(e),
      c = ue('chakra-spinner', a),
      u = {
        display: 'inline-block',
        borderColor: 'currentColor',
        borderStyle: 'solid',
        borderRadius: '99999px',
        borderWidth: o,
        borderBottomColor: s,
        borderLeftColor: s,
        animation: `${W3} ${i} linear infinite`,
        ...n,
      };
    return b.jsx(V.div, {
      ref: t,
      __css: u,
      className: c,
      ...l,
      children: r && b.jsx(V.span, { srOnly: !0, children: r }),
    });
  });
zp.displayName = 'Spinner';
const [U3, Fp] = Rt({
    name: 'AlertContext',
    hookName: 'useAlertContext',
    providerName: '<Alert />',
  }),
  [H3, Ip] = Rt({
    name: 'AlertStylesContext',
    hookName: 'useAlertStyles',
    providerName: '<Alert />',
  }),
  LS = {
    info: { icon: V3, colorScheme: 'blue' },
    warning: { icon: py, colorScheme: 'orange' },
    success: { icon: B3, colorScheme: 'green' },
    error: { icon: py, colorScheme: 'red' },
    loading: { icon: zp, colorScheme: 'blue' },
  };
function G3(e) {
  return LS[e].colorScheme;
}
function K3(e) {
  return LS[e].icon;
}
const Dp = Y(function (t, n) {
  const { status: r = 'info', addRole: o = !0, ...i } = Yt(t),
    s = t.colorScheme ?? G3(r),
    a = mo('Alert', { ...t, colorScheme: s }),
    l = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...a.container,
    };
  return b.jsx(U3, {
    value: { status: r },
    children: b.jsx(H3, {
      value: a,
      children: b.jsx(V.div, {
        'data-status': r,
        role: o ? 'alert' : void 0,
        ref: n,
        ...i,
        className: ue('chakra-alert', t.className),
        __css: l,
      }),
    }),
  });
});
Dp.displayName = 'Alert';
function Lp(e) {
  const { status: t } = Fp(),
    n = K3(t),
    r = Ip(),
    o = t === 'loading' ? r.spinner : r.icon;
  return b.jsx(V.span, {
    display: 'inherit',
    'data-status': t,
    ...e,
    className: ue('chakra-alert__icon', e.className),
    __css: o,
    children: e.children || b.jsx(n, { h: '100%', w: '100%' }),
  });
}
Lp.displayName = 'AlertIcon';
const Op = Y(function (t, n) {
  const r = Ip(),
    { status: o } = Fp();
  return b.jsx(V.div, {
    ref: n,
    'data-status': o,
    ...t,
    className: ue('chakra-alert__title', t.className),
    __css: r.title,
  });
});
Op.displayName = 'AlertTitle';
const OS = Y(function (t, n) {
  const { status: r } = Fp(),
    o = Ip(),
    i = { display: 'inline', ...o.description };
  return b.jsx(V.div, {
    ref: n,
    'data-status': r,
    ...t,
    className: ue('chakra-alert__desc', t.className),
    __css: i,
  });
});
OS.displayName = 'AlertDescription';
function Y3(e) {
  return b.jsx(Ri, {
    focusable: 'false',
    'aria-hidden': !0,
    ...e,
    children: b.jsx('path', {
      fill: 'currentColor',
      d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
    }),
  });
}
const Np = Y(function (t, n) {
  const r = po('CloseButton', t),
    { children: o, isDisabled: i, __css: s, ...a } = Yt(t),
    l = {
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    };
  return b.jsx(V.button, {
    type: 'button',
    'aria-label': 'Close',
    ref: n,
    disabled: i,
    __css: { ...l, ...r, ...s },
    ...a,
    children: o || b.jsx(Y3, { width: '1em', height: '1em' }),
  });
});
Np.displayName = 'CloseButton';
const X3 = (e) => {
  const {
      status: t,
      variant: n = 'solid',
      id: r,
      title: o,
      isClosable: i,
      onClose: s,
      description: a,
      colorScheme: l,
      icon: c,
    } = e,
    u = r
      ? { root: `toast-${r}`, title: `toast-${r}-title`, description: `toast-${r}-description` }
      : void 0;
  return b.jsxs(Dp, {
    addRole: !1,
    status: t,
    variant: n,
    id: u == null ? void 0 : u.root,
    alignItems: 'start',
    borderRadius: 'md',
    boxShadow: 'lg',
    paddingEnd: 8,
    textAlign: 'start',
    width: 'auto',
    colorScheme: l,
    children: [
      b.jsx(Lp, { children: c }),
      b.jsxs(V.div, {
        flex: '1',
        maxWidth: '100%',
        children: [
          o && b.jsx(Op, { id: u == null ? void 0 : u.title, children: o }),
          a && b.jsx(OS, { id: u == null ? void 0 : u.description, display: 'block', children: a }),
        ],
      }),
      i && b.jsx(Np, { size: 'sm', onClick: s, position: 'absolute', insetEnd: 1, top: 1 }),
    ],
  });
};
function NS(e = {}) {
  const { render: t, toastComponent: n = X3 } = e;
  return (o) => (typeof t == 'function' ? t({ ...o, ...e }) : b.jsx(n, { ...o, ...e }));
}
const q3 = {
    top: [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    bottom: [],
    'bottom-right': [],
  },
  gn = Q3(q3);
function Q3(e) {
  let t = e;
  const n = new Set(),
    r = (o) => {
      (t = o(t)), n.forEach((i) => i());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      n.add(o),
      () => {
        r(() => e), n.delete(o);
      }
    ),
    removeToast: (o, i) => {
      r((s) => ({ ...s, [i]: s[i].filter((a) => a.id != o) }));
    },
    notify: (o, i) => {
      const s = Z3(o, i),
        { position: a, id: l } = s;
      return (
        r((c) => {
          const d = a.includes('top') ? [s, ...(c[a] ?? [])] : [...(c[a] ?? []), s];
          return { ...c, [a]: d };
        }),
        l
      );
    },
    update: (o, i) => {
      o &&
        r((s) => {
          const a = { ...s },
            { position: l, index: c } = uy(a, o);
          return l && c !== -1 && (a[l][c] = { ...a[l][c], ...i, message: NS(i) }), a;
        });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) =>
        (o ?? ['bottom', 'bottom-right', 'bottom-left', 'top', 'top-left', 'top-right']).reduce(
          (l, c) => ((l[c] = i[c].map((u) => ({ ...u, requestClose: !0 }))), l),
          { ...i }
        )
      );
    },
    close: (o) => {
      r((i) => {
        const s = zS(i, o);
        return s ? { ...i, [s]: i[s].map((a) => (a.id == o ? { ...a, requestClose: !0 } : a)) } : i;
      });
    },
    isActive: (o) => !!uy(gn.getState(), o).position,
  };
}
let my = 0;
function Z3(e, t = {}) {
  my += 1;
  const n = t.id ?? my,
    r = t.position ?? 'bottom';
  return {
    id: n,
    message: e,
    position: r,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => gn.removeToast(String(n), r),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var BS = { exports: {} },
  jt = {},
  VS = { exports: {} },
  WS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, D) {
    var B = M.length;
    M.push(D);
    e: for (; 0 < B; ) {
      var ie = (B - 1) >>> 1,
        se = M[ie];
      if (0 < o(se, D)) (M[ie] = D), (M[B] = se), (B = ie);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var D = M[0],
      B = M.pop();
    if (B !== D) {
      M[0] = B;
      e: for (var ie = 0, se = M.length, H = se >>> 1; ie < H; ) {
        var de = 2 * (ie + 1) - 1,
          an = M[de],
          Le = de + 1,
          Ft = M[Le];
        if (0 > o(an, B))
          Le < se && 0 > o(Ft, an)
            ? ((M[ie] = Ft), (M[Le] = B), (ie = Le))
            : ((M[ie] = an), (M[de] = B), (ie = de));
        else if (Le < se && 0 > o(Ft, B)) (M[ie] = Ft), (M[Le] = B), (ie = Le);
        else break e;
      }
    }
    return D;
  }
  function o(M, D) {
    var B = M.sortIndex - D.sortIndex;
    return B !== 0 ? B : M.id - D.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    p = !1,
    v = !1,
    g = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(M) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= M) r(c), (D.sortIndex = D.expirationTime), t(l, D);
      else break;
      D = n(c);
    }
  }
  function k(M) {
    if (((g = !1), y(M), !v))
      if (n(l) !== null) (v = !0), dt(P);
      else {
        var D = n(c);
        D !== null && oe(k, D.startTime - M);
      }
  }
  function P(M, D) {
    (v = !1), g && ((g = !1), m(A), (A = -1)), (p = !0);
    var B = f;
    try {
      for (y(D), d = n(l); d !== null && (!(d.expirationTime > D) || (M && !Q())); ) {
        var ie = d.callback;
        if (typeof ie == 'function') {
          (d.callback = null), (f = d.priorityLevel);
          var se = ie(d.expirationTime <= D);
          (D = e.unstable_now()),
            typeof se == 'function' ? (d.callback = se) : d === n(l) && r(l),
            y(D);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var H = !0;
      else {
        var de = n(c);
        de !== null && oe(k, de.startTime - D), (H = !1);
      }
      return H;
    } finally {
      (d = null), (f = B), (p = !1);
    }
  }
  var $ = !1,
    _ = null,
    A = -1,
    j = 5,
    z = -1;
  function Q() {
    return !(e.unstable_now() - z < j);
  }
  function we() {
    if (_ !== null) {
      var M = e.unstable_now();
      z = M;
      var D = !0;
      try {
        D = _(!0, M);
      } finally {
        D ? We() : (($ = !1), (_ = null));
      }
    } else $ = !1;
  }
  var We;
  if (typeof h == 'function')
    We = function () {
      h(we);
    };
  else if (typeof MessageChannel < 'u') {
    var ot = new MessageChannel(),
      sn = ot.port2;
    (ot.port1.onmessage = we),
      (We = function () {
        sn.postMessage(null);
      });
  } else
    We = function () {
      w(we, 0);
    };
  function dt(M) {
    (_ = M), $ || (($ = !0), We());
  }
  function oe(M, D) {
    A = w(function () {
      M(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), dt(P));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (j = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = f;
      }
      var B = f;
      f = D;
      try {
        return M();
      } finally {
        f = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, D) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var B = f;
      f = M;
      try {
        return D();
      } finally {
        f = B;
      }
    }),
    (e.unstable_scheduleCallback = function (M, D, B) {
      var ie = e.unstable_now();
      switch (
        (typeof B == 'object' && B !== null
          ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? ie + B : ie))
          : (B = ie),
        M)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = B + se),
        (M = {
          id: u++,
          callback: D,
          priorityLevel: M,
          startTime: B,
          expirationTime: se,
          sortIndex: -1,
        }),
        B > ie
          ? ((M.sortIndex = B),
            t(c, M),
            n(l) === null && M === n(c) && (g ? (m(A), (A = -1)) : (g = !0), oe(k, B - ie)))
          : ((M.sortIndex = se), t(l, M), v || p || ((v = !0), dt(P))),
        M
      );
    }),
    (e.unstable_shouldYield = Q),
    (e.unstable_wrapCallback = function (M) {
      var D = f;
      return function () {
        var B = f;
        f = D;
        try {
          return M.apply(this, arguments);
        } finally {
          f = B;
        }
      };
    });
})(WS);
VS.exports = WS;
var J3 = VS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eI = S,
  At = J3;
function R(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var US = new Set(),
  Bs = {};
function go(e, t) {
  vi(e, t), vi(e + 'Capture', t);
}
function vi(e, t) {
  for (Bs[e] = t, e = 0; e < t.length; e++) US.add(t[e]);
}
var Kn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Pf = Object.prototype.hasOwnProperty,
  tI =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gy = {},
  yy = {};
function nI(e) {
  return Pf.call(yy, e) ? !0 : Pf.call(gy, e) ? !1 : tI.test(e) ? (yy[e] = !0) : ((gy[e] = !0), !1);
}
function rI(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function oI(e, t, n, r) {
  if (t === null || typeof t > 'u' || rI(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function ut(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Xe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Xe[e] = new ut(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Xe[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Xe[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Xe[e] = new ut(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Xe[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Xe[e] = new ut(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Xe[e] = new ut(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Xe[e] = new ut(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Xe[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bp = /[\-:]([a-z])/g;
function Vp(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Bp, Vp);
    Xe[t] = new ut(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Bp, Vp);
    Xe[t] = new ut(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Bp, Vp);
  Xe[t] = new ut(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Xe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Xe.xlinkHref = new ut('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Xe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wp(e, t, n, r) {
  var o = Xe.hasOwnProperty(t) ? Xe[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (oI(t, n, o, r) && (n = null),
    r || o === null
      ? nI(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Qn = eI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Qa = Symbol.for('react.element'),
  Oo = Symbol.for('react.portal'),
  No = Symbol.for('react.fragment'),
  Up = Symbol.for('react.strict_mode'),
  _f = Symbol.for('react.profiler'),
  HS = Symbol.for('react.provider'),
  GS = Symbol.for('react.context'),
  Hp = Symbol.for('react.forward_ref'),
  Ef = Symbol.for('react.suspense'),
  $f = Symbol.for('react.suspense_list'),
  Gp = Symbol.for('react.memo'),
  or = Symbol.for('react.lazy'),
  KS = Symbol.for('react.offscreen'),
  vy = Symbol.iterator;
function Wi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (vy && e[vy]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Pe = Object.assign,
  pd;
function is(e) {
  if (pd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pd = (t && t[1]) || '';
    }
  return (
    `
` +
    pd +
    e
  );
}
var md = !1;
function gd(e, t) {
  if (!e || md) return '';
  md = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (md = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? is(e) : '';
}
function iI(e) {
  switch (e.tag) {
    case 5:
      return is(e.type);
    case 16:
      return is('Lazy');
    case 13:
      return is('Suspense');
    case 19:
      return is('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = gd(e.type, !1)), e;
    case 11:
      return (e = gd(e.type.render, !1)), e;
    case 1:
      return (e = gd(e.type, !0)), e;
    default:
      return '';
  }
}
function Af(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case No:
      return 'Fragment';
    case Oo:
      return 'Portal';
    case _f:
      return 'Profiler';
    case Up:
      return 'StrictMode';
    case Ef:
      return 'Suspense';
    case $f:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case GS:
        return (e.displayName || 'Context') + '.Consumer';
      case HS:
        return (e._context.displayName || 'Context') + '.Provider';
      case Hp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Gp:
        return (t = e.displayName || null), t !== null ? t : Af(e.type) || 'Memo';
      case or:
        (t = e._payload), (e = e._init);
        try {
          return Af(e(t));
        } catch {}
    }
  return null;
}
function sI(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Af(t);
    case 8:
      return t === Up ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function kr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function YS(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function aI(e) {
  var t = YS(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = '' + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Za(e) {
  e._valueTracker || (e._valueTracker = aI(e));
}
function XS(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = YS(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function sc(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Rf(e, t) {
  var n = t.checked;
  return Pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function by(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function qS(e, t) {
  (t = t.checked), t != null && Wp(e, 'checked', t, !1);
}
function Mf(e, t) {
  qS(e, t);
  var n = kr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? jf(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && jf(e, t.type, kr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Sy(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function jf(e, t, n) {
  (t !== 'number' || sc(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ss = Array.isArray;
function ri(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + kr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function zf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return Pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function xy(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (ss(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: kr(n) };
}
function QS(e, t) {
  var n = kr(t.value),
    r = kr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function wy(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function ZS(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ff(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ZS(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Ja,
  JS = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Ja = Ja || document.createElement('div'),
          Ja.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ja.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xs = {
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
    strokeWidth: !0,
  },
  lI = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(xs).forEach(function (e) {
  lI.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xs[t] = xs[e]);
  });
});
function ex(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (xs.hasOwnProperty(e) && xs[e])
      ? ('' + t).trim()
      : t + 'px';
}
function tx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = ex(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var cI = Pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function If(e, t) {
  if (t) {
    if (cI[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(R(62));
  }
}
function Df(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Lf = null;
function Kp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Of = null,
  oi = null,
  ii = null;
function ky(e) {
  if ((e = Sa(e))) {
    if (typeof Of != 'function') throw Error(R(280));
    var t = e.stateNode;
    t && ((t = cu(t)), Of(e.stateNode, e.type, t));
  }
}
function nx(e) {
  oi ? (ii ? ii.push(e) : (ii = [e])) : (oi = e);
}
function rx() {
  if (oi) {
    var e = oi,
      t = ii;
    if (((ii = oi = null), ky(e), t)) for (e = 0; e < t.length; e++) ky(t[e]);
  }
}
function ox(e, t) {
  return e(t);
}
function ix() {}
var yd = !1;
function sx(e, t, n) {
  if (yd) return e(t, n);
  yd = !0;
  try {
    return ox(e, t, n);
  } finally {
    (yd = !1), (oi !== null || ii !== null) && (ix(), rx());
  }
}
function Ws(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(R(231, t, typeof n));
  return n;
}
var Nf = !1;
if (Kn)
  try {
    var Ui = {};
    Object.defineProperty(Ui, 'passive', {
      get: function () {
        Nf = !0;
      },
    }),
      window.addEventListener('test', Ui, Ui),
      window.removeEventListener('test', Ui, Ui);
  } catch {
    Nf = !1;
  }
function uI(e, t, n, r, o, i, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var ws = !1,
  ac = null,
  lc = !1,
  Bf = null,
  dI = {
    onError: function (e) {
      (ws = !0), (ac = e);
    },
  };
function fI(e, t, n, r, o, i, s, a, l) {
  (ws = !1), (ac = null), uI.apply(dI, arguments);
}
function hI(e, t, n, r, o, i, s, a, l) {
  if ((fI.apply(this, arguments), ws)) {
    if (ws) {
      var c = ac;
      (ws = !1), (ac = null);
    } else throw Error(R(198));
    lc || ((lc = !0), (Bf = c));
  }
}
function yo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ax(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Cy(e) {
  if (yo(e) !== e) throw Error(R(188));
}
function pI(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yo(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Cy(o), e;
        if (i === r) return Cy(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function lx(e) {
  return (e = pI(e)), e !== null ? cx(e) : null;
}
function cx(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cx(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ux = At.unstable_scheduleCallback,
  Ty = At.unstable_cancelCallback,
  mI = At.unstable_shouldYield,
  gI = At.unstable_requestPaint,
  $e = At.unstable_now,
  yI = At.unstable_getCurrentPriorityLevel,
  Yp = At.unstable_ImmediatePriority,
  dx = At.unstable_UserBlockingPriority,
  cc = At.unstable_NormalPriority,
  vI = At.unstable_LowPriority,
  fx = At.unstable_IdlePriority,
  iu = null,
  Cn = null;
function bI(e) {
  if (Cn && typeof Cn.onCommitFiberRoot == 'function')
    try {
      Cn.onCommitFiberRoot(iu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nn = Math.clz32 ? Math.clz32 : wI,
  SI = Math.log,
  xI = Math.LN2;
function wI(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((SI(e) / xI) | 0)) | 0;
}
var el = 64,
  tl = 4194304;
function as(e) {
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
function uc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = as(a)) : ((i &= s), i !== 0 && (r = as(i)));
  } else (s = n & ~o), s !== 0 ? (r = as(s)) : i !== 0 && (r = as(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - nn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function kI(e, t) {
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
function CI(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - nn(i),
      a = 1 << s,
      l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = kI(a, t)) : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Vf(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hx() {
  var e = el;
  return (el <<= 1), !(el & 4194240) && (el = 64), e;
}
function vd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function va(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nn(t)),
    (e[t] = n);
}
function TI(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - nn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Xp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ae = 0;
function px(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mx,
  qp,
  gx,
  yx,
  vx,
  Wf = !1,
  nl = [],
  dr = null,
  fr = null,
  hr = null,
  Us = new Map(),
  Hs = new Map(),
  ar = [],
  PI =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Py(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      dr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      fr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      hr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Us.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Hs.delete(t.pointerId);
  }
}
function Hi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Sa(t)), t !== null && qp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function _I(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (dr = Hi(dr, e, t, n, r, o)), !0;
    case 'dragenter':
      return (fr = Hi(fr, e, t, n, r, o)), !0;
    case 'mouseover':
      return (hr = Hi(hr, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Us.set(i, Hi(Us.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), Hs.set(i, Hi(Hs.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function bx(e) {
  var t = Wr(e.target);
  if (t !== null) {
    var n = yo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ax(n)), t !== null)) {
          (e.blockedOn = t),
            vx(e.priority, function () {
              gx(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Lf = r), n.target.dispatchEvent(r), (Lf = null);
    } else return (t = Sa(n)), t !== null && qp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _y(e, t, n) {
  Fl(e) && n.delete(t);
}
function EI() {
  (Wf = !1),
    dr !== null && Fl(dr) && (dr = null),
    fr !== null && Fl(fr) && (fr = null),
    hr !== null && Fl(hr) && (hr = null),
    Us.forEach(_y),
    Hs.forEach(_y);
}
function Gi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wf || ((Wf = !0), At.unstable_scheduleCallback(At.unstable_NormalPriority, EI)));
}
function Gs(e) {
  function t(o) {
    return Gi(o, e);
  }
  if (0 < nl.length) {
    Gi(nl[0], e);
    for (var n = 1; n < nl.length; n++) {
      var r = nl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    dr !== null && Gi(dr, e),
      fr !== null && Gi(fr, e),
      hr !== null && Gi(hr, e),
      Us.forEach(t),
      Hs.forEach(t),
      n = 0;
    n < ar.length;
    n++
  )
    (r = ar[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ar.length && ((n = ar[0]), n.blockedOn === null); )
    bx(n), n.blockedOn === null && ar.shift();
}
var si = Qn.ReactCurrentBatchConfig,
  dc = !0;
function $I(e, t, n, r) {
  var o = ae,
    i = si.transition;
  si.transition = null;
  try {
    (ae = 1), Qp(e, t, n, r);
  } finally {
    (ae = o), (si.transition = i);
  }
}
function AI(e, t, n, r) {
  var o = ae,
    i = si.transition;
  si.transition = null;
  try {
    (ae = 4), Qp(e, t, n, r);
  } finally {
    (ae = o), (si.transition = i);
  }
}
function Qp(e, t, n, r) {
  if (dc) {
    var o = Uf(e, t, n, r);
    if (o === null) Ed(e, t, r, fc, n), Py(e, r);
    else if (_I(o, e, t, n, r)) r.stopPropagation();
    else if ((Py(e, r), t & 4 && -1 < PI.indexOf(e))) {
      for (; o !== null; ) {
        var i = Sa(o);
        if ((i !== null && mx(i), (i = Uf(e, t, n, r)), i === null && Ed(e, t, r, fc, n), i === o))
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ed(e, t, r, null, n);
  }
}
var fc = null;
function Uf(e, t, n, r) {
  if (((fc = null), (e = Kp(r)), (e = Wr(e)), e !== null))
    if (((t = yo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ax(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fc = e), null;
}
function Sx(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (yI()) {
        case Yp:
          return 1;
        case dx:
          return 4;
        case cc:
        case vI:
          return 16;
        case fx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cr = null,
  Zp = null,
  Il = null;
function xx() {
  if (Il) return Il;
  var e,
    t = Zp,
    n = t.length,
    r,
    o = 'value' in cr ? cr.value : cr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Il = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Dl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function rl() {
  return !0;
}
function Ey() {
  return !1;
}
function zt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? rl
        : Ey),
      (this.isPropagationStopped = Ey),
      this
    );
  }
  return (
    Pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = rl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = rl));
      },
      persist: function () {},
      isPersistent: rl,
    }),
    t
  );
}
var Mi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jp = zt(Mi),
  ba = Pe({}, Mi, { view: 0, detail: 0 }),
  RI = zt(ba),
  bd,
  Sd,
  Ki,
  su = Pe({}, ba, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: em,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ki &&
            (Ki && e.type === 'mousemove'
              ? ((bd = e.screenX - Ki.screenX), (Sd = e.screenY - Ki.screenY))
              : (Sd = bd = 0),
            (Ki = e)),
          bd);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Sd;
    },
  }),
  $y = zt(su),
  MI = Pe({}, su, { dataTransfer: 0 }),
  jI = zt(MI),
  zI = Pe({}, ba, { relatedTarget: 0 }),
  xd = zt(zI),
  FI = Pe({}, Mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  II = zt(FI),
  DI = Pe({}, Mi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  LI = zt(DI),
  OI = Pe({}, Mi, { data: 0 }),
  Ay = zt(OI),
  NI = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  BI = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  VI = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function WI(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = VI[e]) ? !!t[e] : !1;
}
function em() {
  return WI;
}
var UI = Pe({}, ba, {
    key: function (e) {
      if (e.key) {
        var t = NI[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Dl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? BI[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: em,
    charCode: function (e) {
      return e.type === 'keypress' ? Dl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Dl(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  HI = zt(UI),
  GI = Pe({}, su, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ry = zt(GI),
  KI = Pe({}, ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: em,
  }),
  YI = zt(KI),
  XI = Pe({}, Mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qI = zt(XI),
  QI = Pe({}, su, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ZI = zt(QI),
  JI = [9, 13, 27, 32],
  tm = Kn && 'CompositionEvent' in window,
  ks = null;
Kn && 'documentMode' in document && (ks = document.documentMode);
var eD = Kn && 'TextEvent' in window && !ks,
  wx = Kn && (!tm || (ks && 8 < ks && 11 >= ks)),
  My = ' ',
  jy = !1;
function kx(e, t) {
  switch (e) {
    case 'keyup':
      return JI.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Cx(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Bo = !1;
function tD(e, t) {
  switch (e) {
    case 'compositionend':
      return Cx(t);
    case 'keypress':
      return t.which !== 32 ? null : ((jy = !0), My);
    case 'textInput':
      return (e = t.data), e === My && jy ? null : e;
    default:
      return null;
  }
}
function nD(e, t) {
  if (Bo)
    return e === 'compositionend' || (!tm && kx(e, t))
      ? ((e = xx()), (Il = Zp = cr = null), (Bo = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return wx && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var rD = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function zy(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!rD[e.type] : t === 'textarea';
}
function Tx(e, t, n, r) {
  nx(r),
    (t = hc(t, 'onChange')),
    0 < t.length &&
      ((n = new Jp('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Cs = null,
  Ks = null;
function oD(e) {
  Ix(e, 0);
}
function au(e) {
  var t = Uo(e);
  if (XS(t)) return e;
}
function iD(e, t) {
  if (e === 'change') return t;
}
var Px = !1;
if (Kn) {
  var wd;
  if (Kn) {
    var kd = 'oninput' in document;
    if (!kd) {
      var Fy = document.createElement('div');
      Fy.setAttribute('oninput', 'return;'), (kd = typeof Fy.oninput == 'function');
    }
    wd = kd;
  } else wd = !1;
  Px = wd && (!document.documentMode || 9 < document.documentMode);
}
function Iy() {
  Cs && (Cs.detachEvent('onpropertychange', _x), (Ks = Cs = null));
}
function _x(e) {
  if (e.propertyName === 'value' && au(Ks)) {
    var t = [];
    Tx(t, Ks, e, Kp(e)), sx(oD, t);
  }
}
function sD(e, t, n) {
  e === 'focusin'
    ? (Iy(), (Cs = t), (Ks = n), Cs.attachEvent('onpropertychange', _x))
    : e === 'focusout' && Iy();
}
function aD(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return au(Ks);
}
function lD(e, t) {
  if (e === 'click') return au(t);
}
function cD(e, t) {
  if (e === 'input' || e === 'change') return au(t);
}
function uD(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var on = typeof Object.is == 'function' ? Object.is : uD;
function Ys(e, t) {
  if (on(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Pf.call(t, o) || !on(e[o], t[o])) return !1;
  }
  return !0;
}
function Dy(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ly(e, t) {
  var n = Dy(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Dy(n);
  }
}
function Ex(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ex(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function $x() {
  for (var e = window, t = sc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sc(e.document);
  }
  return t;
}
function nm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function dD(e) {
  var t = $x(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ex(n.ownerDocument.documentElement, n)) {
    if (r !== null && nm(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ly(n, i));
        var s = Ly(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var fD = Kn && 'documentMode' in document && 11 >= document.documentMode,
  Vo = null,
  Hf = null,
  Ts = null,
  Gf = !1;
function Oy(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gf ||
    Vo == null ||
    Vo !== sc(r) ||
    ((r = Vo),
    'selectionStart' in r && nm(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ts && Ys(Ts, r)) ||
      ((Ts = r),
      (r = hc(Hf, 'onSelect')),
      0 < r.length &&
        ((t = new Jp('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vo))));
}
function ol(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Wo = {
    animationend: ol('Animation', 'AnimationEnd'),
    animationiteration: ol('Animation', 'AnimationIteration'),
    animationstart: ol('Animation', 'AnimationStart'),
    transitionend: ol('Transition', 'TransitionEnd'),
  },
  Cd = {},
  Ax = {};
Kn &&
  ((Ax = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Wo.animationend.animation,
    delete Wo.animationiteration.animation,
    delete Wo.animationstart.animation),
  'TransitionEvent' in window || delete Wo.transitionend.transition);
function lu(e) {
  if (Cd[e]) return Cd[e];
  if (!Wo[e]) return e;
  var t = Wo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ax) return (Cd[e] = t[n]);
  return e;
}
var Rx = lu('animationend'),
  Mx = lu('animationiteration'),
  jx = lu('animationstart'),
  zx = lu('transitionend'),
  Fx = new Map(),
  Ny =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Pr(e, t) {
  Fx.set(e, t), go(t, [e]);
}
for (var Td = 0; Td < Ny.length; Td++) {
  var Pd = Ny[Td],
    hD = Pd.toLowerCase(),
    pD = Pd[0].toUpperCase() + Pd.slice(1);
  Pr(hD, 'on' + pD);
}
Pr(Rx, 'onAnimationEnd');
Pr(Mx, 'onAnimationIteration');
Pr(jx, 'onAnimationStart');
Pr('dblclick', 'onDoubleClick');
Pr('focusin', 'onFocus');
Pr('focusout', 'onBlur');
Pr(zx, 'onTransitionEnd');
vi('onMouseEnter', ['mouseout', 'mouseover']);
vi('onMouseLeave', ['mouseout', 'mouseover']);
vi('onPointerEnter', ['pointerout', 'pointerover']);
vi('onPointerLeave', ['pointerout', 'pointerover']);
go('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
go(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
go('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
go('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
go('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
go('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var ls =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  mD = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ls));
function By(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), hI(r, t, void 0, e), (e.currentTarget = null);
}
function Ix(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          By(o, a, c), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          By(o, a, c), (i = l);
        }
    }
  }
  if (lc) throw ((e = Bf), (lc = !1), (Bf = null), e);
}
function me(e, t) {
  var n = t[Qf];
  n === void 0 && (n = t[Qf] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Dx(t, e, 2, !1), n.add(r));
}
function _d(e, t, n) {
  var r = 0;
  t && (r |= 4), Dx(n, e, r, t);
}
var il = '_reactListening' + Math.random().toString(36).slice(2);
function Xs(e) {
  if (!e[il]) {
    (e[il] = !0),
      US.forEach(function (n) {
        n !== 'selectionchange' && (mD.has(n) || _d(n, !1, e), _d(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[il] || ((t[il] = !0), _d('selectionchange', !1, t));
  }
}
function Dx(e, t, n, r) {
  switch (Sx(t)) {
    case 1:
      var o = $I;
      break;
    case 4:
      o = AI;
      break;
    default:
      o = Qp;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Nf || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Ed(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Wr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sx(function () {
    var c = i,
      u = Kp(n),
      d = [];
    e: {
      var f = Fx.get(e);
      if (f !== void 0) {
        var p = Jp,
          v = e;
        switch (e) {
          case 'keypress':
            if (Dl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            p = HI;
            break;
          case 'focusin':
            (v = 'focus'), (p = xd);
            break;
          case 'focusout':
            (v = 'blur'), (p = xd);
            break;
          case 'beforeblur':
          case 'afterblur':
            p = xd;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            p = $y;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            p = jI;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            p = YI;
            break;
          case Rx:
          case Mx:
          case jx:
            p = II;
            break;
          case zx:
            p = qI;
            break;
          case 'scroll':
            p = RI;
            break;
          case 'wheel':
            p = ZI;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            p = LI;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            p = Ry;
        }
        var g = (t & 4) !== 0,
          w = !g && e === 'scroll',
          m = g ? (f !== null ? f + 'Capture' : null) : f;
        g = [];
        for (var h = c, y; h !== null; ) {
          y = h;
          var k = y.stateNode;
          if (
            (y.tag === 5 &&
              k !== null &&
              ((y = k), m !== null && ((k = Ws(h, m)), k != null && g.push(qs(h, k, y)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < g.length && ((f = new p(f, v, null, n, u)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (p = e === 'mouseout' || e === 'pointerout'),
          f && n !== Lf && (v = n.relatedTarget || n.fromElement) && (Wr(v) || v[Yn]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window),
          p
            ? ((v = n.relatedTarget || n.toElement),
              (p = c),
              (v = v ? Wr(v) : null),
              v !== null && ((w = yo(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((p = null), (v = c)),
          p !== v)
        ) {
          if (
            ((g = $y),
            (k = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = Ry), (k = 'onPointerLeave'), (m = 'onPointerEnter'), (h = 'pointer')),
            (w = p == null ? f : Uo(p)),
            (y = v == null ? f : Uo(v)),
            (f = new g(k, h + 'leave', p, n, u)),
            (f.target = w),
            (f.relatedTarget = y),
            (k = null),
            Wr(u) === c &&
              ((g = new g(m, h + 'enter', v, n, u)),
              (g.target = y),
              (g.relatedTarget = w),
              (k = g)),
            (w = k),
            p && v)
          )
            t: {
              for (g = p, m = v, h = 0, y = g; y; y = ko(y)) h++;
              for (y = 0, k = m; k; k = ko(k)) y++;
              for (; 0 < h - y; ) (g = ko(g)), h--;
              for (; 0 < y - h; ) (m = ko(m)), y--;
              for (; h--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = ko(g)), (m = ko(m));
              }
              g = null;
            }
          else g = null;
          p !== null && Vy(d, f, p, g, !1), v !== null && w !== null && Vy(d, w, v, g, !0);
        }
      }
      e: {
        if (
          ((f = c ? Uo(c) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === 'select' || (p === 'input' && f.type === 'file'))
        )
          var P = iD;
        else if (zy(f))
          if (Px) P = cD;
          else {
            P = aD;
            var $ = sD;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (P = lD);
        if (P && (P = P(e, c))) {
          Tx(d, P, n, u);
          break e;
        }
        $ && $(e, f, c),
          e === 'focusout' &&
            ($ = f._wrapperState) &&
            $.controlled &&
            f.type === 'number' &&
            jf(f, 'number', f.value);
      }
      switch ((($ = c ? Uo(c) : window), e)) {
        case 'focusin':
          (zy($) || $.contentEditable === 'true') && ((Vo = $), (Hf = c), (Ts = null));
          break;
        case 'focusout':
          Ts = Hf = Vo = null;
          break;
        case 'mousedown':
          Gf = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Gf = !1), Oy(d, n, u);
          break;
        case 'selectionchange':
          if (fD) break;
        case 'keydown':
        case 'keyup':
          Oy(d, n, u);
      }
      var _;
      if (tm)
        e: {
          switch (e) {
            case 'compositionstart':
              var A = 'onCompositionStart';
              break e;
            case 'compositionend':
              A = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              A = 'onCompositionUpdate';
              break e;
          }
          A = void 0;
        }
      else
        Bo
          ? kx(e, n) && (A = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (A = 'onCompositionStart');
      A &&
        (wx &&
          n.locale !== 'ko' &&
          (Bo || A !== 'onCompositionStart'
            ? A === 'onCompositionEnd' && Bo && (_ = xx())
            : ((cr = u), (Zp = 'value' in cr ? cr.value : cr.textContent), (Bo = !0))),
        ($ = hc(c, A)),
        0 < $.length &&
          ((A = new Ay(A, e, null, n, u)),
          d.push({ event: A, listeners: $ }),
          _ ? (A.data = _) : ((_ = Cx(n)), _ !== null && (A.data = _)))),
        (_ = eD ? tD(e, n) : nD(e, n)) &&
          ((c = hc(c, 'onBeforeInput')),
          0 < c.length &&
            ((u = new Ay('onBeforeInput', 'beforeinput', null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = _)));
    }
    Ix(d, t);
  });
}
function qs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hc(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ws(e, n)),
      i != null && r.unshift(qs(e, i, o)),
      (i = Ws(e, t)),
      i != null && r.push(qs(e, i, o))),
      (e = e.return);
  }
  return r;
}
function ko(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vy(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((l = Ws(n, i)), l != null && s.unshift(qs(n, l, a)))
        : o || ((l = Ws(n, i)), l != null && s.push(qs(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var gD = /\r\n?/g,
  yD = /\u0000|\uFFFD/g;
function Wy(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      gD,
      `
`
    )
    .replace(yD, '');
}
function sl(e, t, n) {
  if (((t = Wy(t)), Wy(e) !== t && n)) throw Error(R(425));
}
function pc() {}
var Kf = null,
  Yf = null;
function Xf(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qf = typeof setTimeout == 'function' ? setTimeout : void 0,
  vD = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Uy = typeof Promise == 'function' ? Promise : void 0,
  bD =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Uy < 'u'
        ? function (e) {
            return Uy.resolve(null).then(e).catch(SD);
          }
        : qf;
function SD(e) {
  setTimeout(function () {
    throw e;
  });
}
function $d(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Gs(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Gs(t);
}
function pr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Hy(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ji = Math.random().toString(36).slice(2),
  yn = '__reactFiber$' + ji,
  Qs = '__reactProps$' + ji,
  Yn = '__reactContainer$' + ji,
  Qf = '__reactEvents$' + ji,
  xD = '__reactListeners$' + ji,
  wD = '__reactHandles$' + ji;
function Wr(e) {
  var t = e[yn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Yn] || n[yn])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Hy(e); e !== null; ) {
          if ((n = e[yn])) return n;
          e = Hy(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Sa(e) {
  return (
    (e = e[yn] || e[Yn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Uo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function cu(e) {
  return e[Qs] || null;
}
var Zf = [],
  Ho = -1;
function _r(e) {
  return { current: e };
}
function ye(e) {
  0 > Ho || ((e.current = Zf[Ho]), (Zf[Ho] = null), Ho--);
}
function he(e, t) {
  Ho++, (Zf[Ho] = e.current), (e.current = t);
}
var Cr = {},
  rt = _r(Cr),
  mt = _r(!1),
  oo = Cr;
function bi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Cr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function gt(e) {
  return (e = e.childContextTypes), e != null;
}
function mc() {
  ye(mt), ye(rt);
}
function Gy(e, t, n) {
  if (rt.current !== Cr) throw Error(R(168));
  he(rt, t), he(mt, n);
}
function Lx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, sI(e) || 'Unknown', o));
  return Pe({}, n, r);
}
function gc(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cr),
    (oo = rt.current),
    he(rt, e),
    he(mt, mt.current),
    !0
  );
}
function Ky(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Lx(e, t, oo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ye(mt),
      ye(rt),
      he(rt, e))
    : ye(mt),
    he(mt, n);
}
var Mn = null,
  uu = !1,
  Ad = !1;
function Ox(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function kD(e) {
  (uu = !0), Ox(e);
}
function Er() {
  if (!Ad && Mn !== null) {
    Ad = !0;
    var e = 0,
      t = ae;
    try {
      var n = Mn;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mn = null), (uu = !1);
    } catch (o) {
      throw (Mn !== null && (Mn = Mn.slice(e + 1)), ux(Yp, Er), o);
    } finally {
      (ae = t), (Ad = !1);
    }
  }
  return null;
}
var Go = [],
  Ko = 0,
  yc = null,
  vc = 0,
  Nt = [],
  Bt = 0,
  io = null,
  Ln = 1,
  On = '';
function Lr(e, t) {
  (Go[Ko++] = vc), (Go[Ko++] = yc), (yc = e), (vc = t);
}
function Nx(e, t, n) {
  (Nt[Bt++] = Ln), (Nt[Bt++] = On), (Nt[Bt++] = io), (io = e);
  var r = Ln;
  e = On;
  var o = 32 - nn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - nn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Ln = (1 << (32 - nn(t) + o)) | (n << o) | r),
      (On = i + e);
  } else (Ln = (1 << i) | (n << o) | r), (On = e);
}
function rm(e) {
  e.return !== null && (Lr(e, 1), Nx(e, 1, 0));
}
function om(e) {
  for (; e === yc; ) (yc = Go[--Ko]), (Go[Ko] = null), (vc = Go[--Ko]), (Go[Ko] = null);
  for (; e === io; )
    (io = Nt[--Bt]),
      (Nt[Bt] = null),
      (On = Nt[--Bt]),
      (Nt[Bt] = null),
      (Ln = Nt[--Bt]),
      (Nt[Bt] = null);
}
var Et = null,
  Tt = null,
  xe = !1,
  en = null;
function Bx(e, t) {
  var n = Wt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yy(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Et = e), (Tt = pr(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Et = e), (Tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = io !== null ? { id: Ln, overflow: On } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Wt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Et = e),
            (Tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Jf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function eh(e) {
  if (xe) {
    var t = Tt;
    if (t) {
      var n = t;
      if (!Yy(e, t)) {
        if (Jf(e)) throw Error(R(418));
        t = pr(n.nextSibling);
        var r = Et;
        t && Yy(e, t) ? Bx(r, n) : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (Et = e));
      }
    } else {
      if (Jf(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (xe = !1), (Et = e);
    }
  }
}
function Xy(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Et = e;
}
function al(e) {
  if (e !== Et) return !1;
  if (!xe) return Xy(e), (xe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Xf(e.type, e.memoizedProps))),
    t && (t = Tt))
  ) {
    if (Jf(e)) throw (Vx(), Error(R(418)));
    for (; t; ) Bx(e, t), (t = pr(t.nextSibling));
  }
  if ((Xy(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Tt = pr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Tt = null;
    }
  } else Tt = Et ? pr(e.stateNode.nextSibling) : null;
  return !0;
}
function Vx() {
  for (var e = Tt; e; ) e = pr(e.nextSibling);
}
function Si() {
  (Tt = Et = null), (xe = !1);
}
function im(e) {
  en === null ? (en = [e]) : en.push(e);
}
var CD = Qn.ReactCurrentBatchConfig;
function Yi(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function ll(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  );
}
function qy(e) {
  var t = e._init;
  return t(e._payload);
}
function Wx(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = vr(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y) : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, y, k) {
    return h === null || h.tag !== 6
      ? ((h = Dd(y, m.mode, k)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function l(m, h, y, k) {
    var P = y.type;
    return P === No
      ? u(m, h, y.props.children, k, y.key)
      : h !== null &&
          (h.elementType === P ||
            (typeof P == 'object' && P !== null && P.$$typeof === or && qy(P) === h.type))
        ? ((k = o(h, y.props)), (k.ref = Yi(m, h, y)), (k.return = m), k)
        : ((k = Ul(y.type, y.key, y.props, null, m.mode, k)),
          (k.ref = Yi(m, h, y)),
          (k.return = m),
          k);
  }
  function c(m, h, y, k) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = Ld(y, m.mode, k)), (h.return = m), h)
      : ((h = o(h, y.children || [])), (h.return = m), h);
  }
  function u(m, h, y, k, P) {
    return h === null || h.tag !== 7
      ? ((h = Qr(y, m.mode, k, P)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function d(m, h, y) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Dd('' + h, m.mode, y)), (h.return = m), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Qa:
          return (
            (y = Ul(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = Yi(m, null, h)),
            (y.return = m),
            y
          );
        case Oo:
          return (h = Ld(h, m.mode, y)), (h.return = m), h;
        case or:
          var k = h._init;
          return d(m, k(h._payload), y);
      }
      if (ss(h) || Wi(h)) return (h = Qr(h, m.mode, y, null)), (h.return = m), h;
      ll(m, h);
    }
    return null;
  }
  function f(m, h, y, k) {
    var P = h !== null ? h.key : null;
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return P !== null ? null : a(m, h, '' + y, k);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Qa:
          return y.key === P ? l(m, h, y, k) : null;
        case Oo:
          return y.key === P ? c(m, h, y, k) : null;
        case or:
          return (P = y._init), f(m, h, P(y._payload), k);
      }
      if (ss(y) || Wi(y)) return P !== null ? null : u(m, h, y, k, null);
      ll(m, y);
    }
    return null;
  }
  function p(m, h, y, k, P) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (m = m.get(y) || null), a(h, m, '' + k, P);
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case Qa:
          return (m = m.get(k.key === null ? y : k.key) || null), l(h, m, k, P);
        case Oo:
          return (m = m.get(k.key === null ? y : k.key) || null), c(h, m, k, P);
        case or:
          var $ = k._init;
          return p(m, h, y, $(k._payload), P);
      }
      if (ss(k) || Wi(k)) return (m = m.get(y) || null), u(h, m, k, P, null);
      ll(h, k);
    }
    return null;
  }
  function v(m, h, y, k) {
    for (var P = null, $ = null, _ = h, A = (h = 0), j = null; _ !== null && A < y.length; A++) {
      _.index > A ? ((j = _), (_ = null)) : (j = _.sibling);
      var z = f(m, _, y[A], k);
      if (z === null) {
        _ === null && (_ = j);
        break;
      }
      e && _ && z.alternate === null && t(m, _),
        (h = i(z, h, A)),
        $ === null ? (P = z) : ($.sibling = z),
        ($ = z),
        (_ = j);
    }
    if (A === y.length) return n(m, _), xe && Lr(m, A), P;
    if (_ === null) {
      for (; A < y.length; A++)
        (_ = d(m, y[A], k)),
          _ !== null && ((h = i(_, h, A)), $ === null ? (P = _) : ($.sibling = _), ($ = _));
      return xe && Lr(m, A), P;
    }
    for (_ = r(m, _); A < y.length; A++)
      (j = p(_, m, A, y[A], k)),
        j !== null &&
          (e && j.alternate !== null && _.delete(j.key === null ? A : j.key),
          (h = i(j, h, A)),
          $ === null ? (P = j) : ($.sibling = j),
          ($ = j));
    return (
      e &&
        _.forEach(function (Q) {
          return t(m, Q);
        }),
      xe && Lr(m, A),
      P
    );
  }
  function g(m, h, y, k) {
    var P = Wi(y);
    if (typeof P != 'function') throw Error(R(150));
    if (((y = P.call(y)), y == null)) throw Error(R(151));
    for (
      var $ = (P = null), _ = h, A = (h = 0), j = null, z = y.next();
      _ !== null && !z.done;
      A++, z = y.next()
    ) {
      _.index > A ? ((j = _), (_ = null)) : (j = _.sibling);
      var Q = f(m, _, z.value, k);
      if (Q === null) {
        _ === null && (_ = j);
        break;
      }
      e && _ && Q.alternate === null && t(m, _),
        (h = i(Q, h, A)),
        $ === null ? (P = Q) : ($.sibling = Q),
        ($ = Q),
        (_ = j);
    }
    if (z.done) return n(m, _), xe && Lr(m, A), P;
    if (_ === null) {
      for (; !z.done; A++, z = y.next())
        (z = d(m, z.value, k)),
          z !== null && ((h = i(z, h, A)), $ === null ? (P = z) : ($.sibling = z), ($ = z));
      return xe && Lr(m, A), P;
    }
    for (_ = r(m, _); !z.done; A++, z = y.next())
      (z = p(_, m, A, z.value, k)),
        z !== null &&
          (e && z.alternate !== null && _.delete(z.key === null ? A : z.key),
          (h = i(z, h, A)),
          $ === null ? (P = z) : ($.sibling = z),
          ($ = z));
    return (
      e &&
        _.forEach(function (we) {
          return t(m, we);
        }),
      xe && Lr(m, A),
      P
    );
  }
  function w(m, h, y, k) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === No &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case Qa:
          e: {
            for (var P = y.key, $ = h; $ !== null; ) {
              if ($.key === P) {
                if (((P = y.type), P === No)) {
                  if ($.tag === 7) {
                    n(m, $.sibling), (h = o($, y.props.children)), (h.return = m), (m = h);
                    break e;
                  }
                } else if (
                  $.elementType === P ||
                  (typeof P == 'object' && P !== null && P.$$typeof === or && qy(P) === $.type)
                ) {
                  n(m, $.sibling),
                    (h = o($, y.props)),
                    (h.ref = Yi(m, $, y)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, $);
                break;
              } else t(m, $);
              $ = $.sibling;
            }
            y.type === No
              ? ((h = Qr(y.props.children, m.mode, k, y.key)), (h.return = m), (m = h))
              : ((k = Ul(y.type, y.key, y.props, null, m.mode, k)),
                (k.ref = Yi(m, h, y)),
                (k.return = m),
                (m = k));
          }
          return s(m);
        case Oo:
          e: {
            for ($ = y.key; h !== null; ) {
              if (h.key === $)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling), (h = o(h, y.children || [])), (h.return = m), (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = Ld(y, m.mode, k)), (h.return = m), (m = h);
          }
          return s(m);
        case or:
          return ($ = y._init), w(m, h, $(y._payload), k);
      }
      if (ss(y)) return v(m, h, y, k);
      if (Wi(y)) return g(m, h, y, k);
      ll(m, y);
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = Dd(y, m.mode, k)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return w;
}
var xi = Wx(!0),
  Ux = Wx(!1),
  bc = _r(null),
  Sc = null,
  Yo = null,
  sm = null;
function am() {
  sm = Yo = Sc = null;
}
function lm(e) {
  var t = bc.current;
  ye(bc), (e._currentValue = t);
}
function th(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ai(e, t) {
  (Sc = e),
    (sm = Yo = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (pt = !0), (e.firstContext = null));
}
function Gt(e) {
  var t = e._currentValue;
  if (sm !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yo === null)) {
      if (Sc === null) throw Error(R(308));
      (Yo = e), (Sc.dependencies = { lanes: 0, firstContext: e });
    } else Yo = Yo.next = e;
  return t;
}
var Ur = null;
function cm(e) {
  Ur === null ? (Ur = [e]) : Ur.push(e);
}
function Hx(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), cm(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Xn(e, r)
  );
}
function Xn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ir = !1;
function um(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Hn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function mr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Xn(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), cm(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Xn(e, n)
  );
}
function Ll(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xp(e, n);
  }
}
function Qy(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function xc(e, t, n, r) {
  var o = e.updateQueue;
  ir = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (i = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s && (a === null ? (u.firstBaseUpdate = c) : (a.next = c), (u.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (u = c = l = null), (a = i);
    do {
      var f = a.lane,
        p = a.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            g = a;
          switch (((f = t), (p = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == 'function')) {
                d = v.call(p, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (((v = g.payload), (f = typeof v == 'function' ? v.call(p, d, f) : v), f == null))
                break e;
              d = Pe({}, d, f);
              break e;
            case 2:
              ir = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (f = o.effects), f === null ? (o.effects = [a]) : f.push(a));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (l = d)) : (u = u.next = p),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a), (a = f.next), (f.next = null), (o.lastBaseUpdate = f), (o.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = u),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (ao |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Zy(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(R(191, o));
        o.call(r);
      }
    }
}
var xa = {},
  Tn = _r(xa),
  Zs = _r(xa),
  Js = _r(xa);
function Hr(e) {
  if (e === xa) throw Error(R(174));
  return e;
}
function dm(e, t) {
  switch ((he(Js, t), he(Zs, e), he(Tn, xa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ff(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ff(t, e));
  }
  ye(Tn), he(Tn, t);
}
function wi() {
  ye(Tn), ye(Zs), ye(Js);
}
function Kx(e) {
  Hr(Js.current);
  var t = Hr(Tn.current),
    n = Ff(t, e.type);
  t !== n && (he(Zs, e), he(Tn, n));
}
function fm(e) {
  Zs.current === e && (ye(Tn), ye(Zs));
}
var ke = _r(0);
function wc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Rd = [];
function hm() {
  for (var e = 0; e < Rd.length; e++) Rd[e]._workInProgressVersionPrimary = null;
  Rd.length = 0;
}
var Ol = Qn.ReactCurrentDispatcher,
  Md = Qn.ReactCurrentBatchConfig,
  so = 0,
  Te = null,
  Fe = null,
  Oe = null,
  kc = !1,
  Ps = !1,
  ea = 0,
  TD = 0;
function qe() {
  throw Error(R(321));
}
function pm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!on(e[n], t[n])) return !1;
  return !0;
}
function mm(e, t, n, r, o, i) {
  if (
    ((so = i),
    (Te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ol.current = e === null || e.memoizedState === null ? $D : AD),
    (e = n(r, o)),
    Ps)
  ) {
    i = 0;
    do {
      if (((Ps = !1), (ea = 0), 25 <= i)) throw Error(R(301));
      (i += 1), (Oe = Fe = null), (t.updateQueue = null), (Ol.current = RD), (e = n(r, o));
    } while (Ps);
  }
  if (
    ((Ol.current = Cc),
    (t = Fe !== null && Fe.next !== null),
    (so = 0),
    (Oe = Fe = Te = null),
    (kc = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function gm() {
  var e = ea !== 0;
  return (ea = 0), e;
}
function fn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Oe === null ? (Te.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function Kt() {
  if (Fe === null) {
    var e = Te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Fe.next;
  var t = Oe === null ? Te.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (Fe = e);
  else {
    if (e === null) throw Error(R(310));
    (Fe = e),
      (e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null,
      }),
      Oe === null ? (Te.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function ta(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function jd(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Fe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = i;
    do {
      var u = c.lane;
      if ((so & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d), (Te.lanes |= u), (ao |= u);
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? (s = r) : (l.next = a),
      on(r, t.memoizedState) || (pt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Te.lanes |= i), (ao |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zd(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    on(i, t.memoizedState) || (pt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Yx() {}
function Xx(e, t) {
  var n = Te,
    r = Kt(),
    o = t(),
    i = !on(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (pt = !0)),
    (r = r.queue),
    ym(Zx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), na(9, Qx.bind(null, n, r, o, t), void 0, null), Be === null))
      throw Error(R(349));
    so & 30 || qx(n, t, o);
  }
  return o;
}
function qx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Te.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jx(t) && ew(e);
}
function Zx(e, t, n) {
  return n(function () {
    Jx(t) && ew(e);
  });
}
function Jx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !on(e, n);
  } catch {
    return !0;
  }
}
function ew(e) {
  var t = Xn(e, 1);
  t !== null && rn(t, e, 1, -1);
}
function Jy(e) {
  var t = fn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ta,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ED.bind(null, Te, e)),
    [t.memoizedState, e]
  );
}
function na(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tw() {
  return Kt().memoizedState;
}
function Nl(e, t, n, r) {
  var o = fn();
  (Te.flags |= e), (o.memoizedState = na(1 | t, n, void 0, r === void 0 ? null : r));
}
function du(e, t, n, r) {
  var o = Kt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Fe !== null) {
    var s = Fe.memoizedState;
    if (((i = s.destroy), r !== null && pm(r, s.deps))) {
      o.memoizedState = na(t, n, i, r);
      return;
    }
  }
  (Te.flags |= e), (o.memoizedState = na(1 | t, n, i, r));
}
function ev(e, t) {
  return Nl(8390656, 8, e, t);
}
function ym(e, t) {
  return du(2048, 8, e, t);
}
function nw(e, t) {
  return du(4, 2, e, t);
}
function rw(e, t) {
  return du(4, 4, e, t);
}
function ow(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function iw(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), du(4, 4, ow.bind(null, t, e), n);
}
function vm() {}
function sw(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pm(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function aw(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pm(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lw(e, t, n) {
  return so & 21
    ? (on(n, t) || ((n = hx()), (Te.lanes |= n), (ao |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (pt = !0)), (e.memoizedState = n));
}
function PD(e, t) {
  var n = ae;
  (ae = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Md.transition;
  Md.transition = {};
  try {
    e(!1), t();
  } finally {
    (ae = n), (Md.transition = r);
  }
}
function cw() {
  return Kt().memoizedState;
}
function _D(e, t, n) {
  var r = yr(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), uw(e)))
    dw(t, n);
  else if (((n = Hx(e, t, n, r)), n !== null)) {
    var o = lt();
    rn(n, e, r, o), fw(n, t, r);
  }
}
function ED(e, t, n) {
  var r = yr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (uw(e)) dw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), on(a, s))) {
          var l = t.interleaved;
          l === null ? ((o.next = o), cm(t)) : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hx(e, t, o, r)), n !== null && ((o = lt()), rn(n, e, r, o), fw(n, t, r));
  }
}
function uw(e) {
  var t = e.alternate;
  return e === Te || (t !== null && t === Te);
}
function dw(e, t) {
  Ps = kc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function fw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xp(e, n);
  }
}
var Cc = {
    readContext: Gt,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useInsertionEffect: qe,
    useLayoutEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useMutableSource: qe,
    useSyncExternalStore: qe,
    useId: qe,
    unstable_isNewReconciler: !1,
  },
  $D = {
    readContext: Gt,
    useCallback: function (e, t) {
      return (fn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Gt,
    useEffect: ev,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Nl(4194308, 4, ow.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = fn();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = fn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _D.bind(null, Te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = fn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Jy,
    useDebugValue: vm,
    useDeferredValue: function (e) {
      return (fn().memoizedState = e);
    },
    useTransition: function () {
      var e = Jy(!1),
        t = e[0];
      return (e = PD.bind(null, e[1])), (fn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Te,
        o = fn();
      if (xe) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Be === null)) throw Error(R(349));
        so & 30 || qx(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ev(Zx.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        na(9, Qx.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = fn(),
        t = Be.identifierPrefix;
      if (xe) {
        var n = On,
          r = Ln;
        (n = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ea++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = TD++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  AD = {
    readContext: Gt,
    useCallback: sw,
    useContext: Gt,
    useEffect: ym,
    useImperativeHandle: iw,
    useInsertionEffect: nw,
    useLayoutEffect: rw,
    useMemo: aw,
    useReducer: jd,
    useRef: tw,
    useState: function () {
      return jd(ta);
    },
    useDebugValue: vm,
    useDeferredValue: function (e) {
      var t = Kt();
      return lw(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = jd(ta)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yx,
    useSyncExternalStore: Xx,
    useId: cw,
    unstable_isNewReconciler: !1,
  },
  RD = {
    readContext: Gt,
    useCallback: sw,
    useContext: Gt,
    useEffect: ym,
    useImperativeHandle: iw,
    useInsertionEffect: nw,
    useLayoutEffect: rw,
    useMemo: aw,
    useReducer: zd,
    useRef: tw,
    useState: function () {
      return zd(ta);
    },
    useDebugValue: vm,
    useDeferredValue: function (e) {
      var t = Kt();
      return Fe === null ? (t.memoizedState = e) : lw(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = zd(ta)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yx,
    useSyncExternalStore: Xx,
    useId: cw,
    unstable_isNewReconciler: !1,
  };
function Zt(e, t) {
  if (e && e.defaultProps) {
    (t = Pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function nh(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      o = yr(e),
      i = Hn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = mr(e, i, o)),
      t !== null && (rn(t, e, o, r), Ll(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      o = yr(e),
      i = Hn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = mr(e, i, o)),
      t !== null && (rn(t, e, o, r), Ll(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = lt(),
      r = yr(e),
      o = Hn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = mr(e, o, r)),
      t !== null && (rn(t, e, r, n), Ll(t, e, r));
  },
};
function tv(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ys(n, r) || !Ys(o, i)
        : !0
  );
}
function hw(e, t, n) {
  var r = !1,
    o = Cr,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Gt(i))
      : ((o = gt(t) ? oo : rt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? bi(e, o) : Cr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function nv(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fu.enqueueReplaceState(t, t.state, null);
}
function rh(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), um(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Gt(i))
    : ((i = gt(t) ? oo : rt.current), (o.context = bi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (nh(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && fu.enqueueReplaceState(o, o.state, null),
      xc(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function ki(e, t) {
  try {
    var n = '',
      r = t;
    do (n += iI(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Fd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var MD = typeof WeakMap == 'function' ? WeakMap : Map;
function pw(e, t, n) {
  (n = Hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pc || ((Pc = !0), (ph = r)), oh(e, t);
    }),
    n
  );
}
function mw(e, t, n) {
  (n = Hn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        oh(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        oh(e, t), typeof r != 'function' && (gr === null ? (gr = new Set([this])) : gr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' });
      }),
    n
  );
}
function rv(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new MD();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = GD.bind(null, e, t, n)), t.then(e, e));
}
function ov(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function iv(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Hn(-1, 1)), (t.tag = 2), mr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jD = Qn.ReactCurrentOwner,
  pt = !1;
function it(e, t, n, r) {
  t.child = e === null ? Ux(t, null, n, r) : xi(t, e.child, n, r);
}
function sv(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ai(t, o),
    (r = mm(e, t, n, r, i, o)),
    (n = gm()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), qn(e, t, o))
      : (xe && n && rm(t), (t.flags |= 1), it(e, t, r, o), t.child)
  );
}
function av(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Pm(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gw(e, t, i, r, o))
      : ((e = Ul(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Ys), n(s, r) && e.ref === t.ref))
      return qn(e, t, o);
  }
  return (t.flags |= 1), (e = vr(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function gw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ys(i, r) && e.ref === t.ref)
      if (((pt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (pt = !0);
      else return (t.lanes = e.lanes), qn(e, t, o);
  }
  return ih(e, t, n, r, o);
}
function yw(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        he(qo, Ct),
        (Ct |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          he(qo, Ct),
          (Ct |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        he(qo, Ct),
        (Ct |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), he(qo, Ct), (Ct |= r);
  return it(e, t, o, n), t.child;
}
function vw(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ih(e, t, n, r, o) {
  var i = gt(n) ? oo : rt.current;
  return (
    (i = bi(t, i)),
    ai(t, o),
    (n = mm(e, t, n, r, i, o)),
    (r = gm()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), qn(e, t, o))
      : (xe && r && rm(t), (t.flags |= 1), it(e, t, n, o), t.child)
  );
}
function lv(e, t, n, r, o) {
  if (gt(n)) {
    var i = !0;
    gc(t);
  } else i = !1;
  if ((ai(t, o), t.stateNode === null)) Bl(e, t), hw(t, n, r), rh(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = Gt(c))
      : ((c = gt(n) ? oo : rt.current), (c = bi(t, c)));
    var u = n.getDerivedStateFromProps,
      d = typeof u == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== c) && nv(t, s, r, c)),
      (ir = !1);
    var f = t.memoizedState;
    (s.state = f),
      xc(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || mt.current || ir
        ? (typeof u == 'function' && (nh(t, n, u, r), (l = t.memoizedState)),
          (a = ir || tv(t, n, a, r, f, l, c))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      Gx(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Zt(t.type, a)),
      (s.props = c),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Gt(l))
        : ((l = gt(n) ? oo : rt.current), (l = bi(t, l)));
    var p = n.getDerivedStateFromProps;
    (u = typeof p == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== d || f !== l) && nv(t, s, r, l)),
      (ir = !1),
      (f = t.memoizedState),
      (s.state = f),
      xc(t, r, s, o);
    var v = t.memoizedState;
    a !== d || f !== v || mt.current || ir
      ? (typeof p == 'function' && (nh(t, n, p, r), (v = t.memoizedState)),
        (c = ir || tv(t, n, c, r, f, v, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return sh(e, t, n, r, i, o);
}
function sh(e, t, n, r, o, i) {
  vw(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Ky(t, n, !1), qn(e, t, i);
  (r = t.stateNode), (jD.current = t);
  var a = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = xi(t, e.child, null, i)), (t.child = xi(t, null, a, i)))
      : it(e, t, a, i),
    (t.memoizedState = r.state),
    o && Ky(t, n, !0),
    t.child
  );
}
function bw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gy(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gy(e, t.context, !1),
    dm(e, t.containerInfo);
}
function cv(e, t, n, r, o) {
  return Si(), im(o), (t.flags |= 256), it(e, t, n, r), t.child;
}
var ah = { dehydrated: null, treeContext: null, retryLane: 0 };
function lh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sw(e, t, n) {
  var r = t.pendingProps,
    o = ke.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    he(ke, o & 1),
    e === null)
  )
    return (
      eh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = mu(s, r, 0, null)),
              (e = Qr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = lh(n)),
              (t.memoizedState = ah),
              e)
            : bm(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return zD(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = vr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = vr(a, i)) : ((i = Qr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? lh(n)
          : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ah),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vr(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bm(e, t) {
  return (t = mu({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function cl(e, t, n, r) {
  return (
    r !== null && im(r),
    xi(t, e.child, null, n),
    (e = bm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function zD(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fd(Error(R(422)))), cl(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = mu({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = Qr(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && xi(t, e.child, null, s),
          (t.child.memoizedState = lh(s)),
          (t.memoizedState = ah),
          i);
  if (!(t.mode & 1)) return cl(e, t, s, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(R(419))), (r = Fd(i, r, void 0)), cl(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), pt || a)) {
    if (((r = Be), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Xn(e, o), rn(r, e, o, -1));
    }
    return Tm(), (r = Fd(Error(R(421)))), cl(e, t, s, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = KD.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Tt = pr(o.nextSibling)),
      (Et = t),
      (xe = !0),
      (en = null),
      e !== null &&
        ((Nt[Bt++] = Ln),
        (Nt[Bt++] = On),
        (Nt[Bt++] = io),
        (Ln = e.id),
        (On = e.overflow),
        (io = t)),
      (t = bm(t, r.children)),
      (t.flags |= 4096),
      t);
}
function uv(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), th(e.return, t, n);
}
function Id(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function xw(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((it(e, t, r.children, n), (r = ke.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && uv(e, n, t);
        else if (e.tag === 19) uv(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((he(ke, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && wc(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          Id(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && wc(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Id(t, !0, n, null, i);
        break;
      case 'together':
        Id(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qn(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (ao |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = vr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = vr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function FD(e, t, n) {
  switch (t.tag) {
    case 3:
      bw(t), Si();
      break;
    case 5:
      Kx(t);
      break;
    case 1:
      gt(t.type) && gc(t);
      break;
    case 4:
      dm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      he(bc, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (he(ke, ke.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Sw(e, t, n)
            : (he(ke, ke.current & 1), (e = qn(e, t, n)), e !== null ? e.sibling : null);
      he(ke, ke.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        he(ke, ke.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yw(e, t, n);
  }
  return qn(e, t, n);
}
var ww, ch, kw, Cw;
ww = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ch = function () {};
kw = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Hr(Tn.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Rf(e, o)), (r = Rf(e, r)), (i = []);
        break;
      case 'select':
        (o = Pe({}, o, { value: void 0 })), (r = Pe({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = zf(e, o)), (r = zf(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = pc);
    }
    If(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === 'style') {
          var a = o[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Bs.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''));
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(c, n)), (n = l);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(c, l))
            : c === 'children'
              ? (typeof l != 'string' && typeof l != 'number') || (i = i || []).push(c, '' + l)
              : c !== 'suppressContentEditableWarning' &&
                c !== 'suppressHydrationWarning' &&
                (Bs.hasOwnProperty(c)
                  ? (l != null && c === 'onScroll' && me('scroll', e), i || a === l || (i = []))
                  : (i = i || []).push(c, l));
    }
    n && (i = i || []).push('style', n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Cw = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xi(e, t) {
  if (!xe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ID(e, t, n) {
  var r = t.pendingProps;
  switch ((om(t), t.tag)) {
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
      return Qe(t), null;
    case 1:
      return gt(t.type) && mc(), Qe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wi(),
        ye(mt),
        ye(rt),
        hm(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (al(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), en !== null && (yh(en), (en = null)))),
        ch(e, t),
        Qe(t),
        null
      );
    case 5:
      fm(t);
      var o = Hr(Js.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kw(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Qe(t), null;
        }
        if (((e = Hr(Tn.current)), al(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[yn] = t), (r[Qs] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              me('cancel', r), me('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              me('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < ls.length; o++) me(ls[o], r);
              break;
            case 'source':
              me('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              me('error', r), me('load', r);
              break;
            case 'details':
              me('toggle', r);
              break;
            case 'input':
              by(r, i), me('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), me('invalid', r);
              break;
            case 'textarea':
              xy(r, i), me('invalid', r);
          }
          If(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && sl(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 && sl(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : Bs.hasOwnProperty(s) && a != null && s === 'onScroll' && me('scroll', r);
            }
          switch (n) {
            case 'input':
              Za(r), Sy(r, i, !0);
              break;
            case 'textarea':
              Za(r), wy(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = pc);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ZS(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[yn] = t),
            (e[Qs] = r),
            ww(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Df(n, r)), n)) {
              case 'dialog':
                me('cancel', e), me('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                me('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < ls.length; o++) me(ls[o], e);
                o = r;
                break;
              case 'source':
                me('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                me('error', e), me('load', e), (o = r);
                break;
              case 'details':
                me('toggle', e), (o = r);
                break;
              case 'input':
                by(e, r), (o = Rf(e, r)), me('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Pe({}, r, { value: void 0 })),
                  me('invalid', e);
                break;
              case 'textarea':
                xy(e, r), (o = zf(e, r)), me('invalid', e);
                break;
              default:
                o = r;
            }
            If(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === 'style'
                  ? tx(e, l)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && JS(e, l))
                    : i === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && Vs(e, l)
                        : typeof l == 'number' && Vs(e, '' + l)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Bs.hasOwnProperty(i)
                          ? l != null && i === 'onScroll' && me('scroll', e)
                          : l != null && Wp(e, i, l, s));
              }
            switch (n) {
              case 'input':
                Za(e), Sy(e, r, !1);
                break;
              case 'textarea':
                Za(e), wy(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + kr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ri(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && ri(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = pc);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Qe(t), null;
    case 6:
      if (e && t.stateNode != null) Cw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(R(166));
        if (((n = Hr(Js.current)), Hr(Tn.current), al(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yn] = t),
            (i = r.nodeValue !== n) && ((e = Et), e !== null))
          )
            switch (e.tag) {
              case 3:
                sl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  sl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yn] = t),
            (t.stateNode = r);
      }
      return Qe(t), null;
    case 13:
      if (
        (ye(ke),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (xe && Tt !== null && t.mode & 1 && !(t.flags & 128))
          Vx(), Si(), (t.flags |= 98560), (i = !1);
        else if (((i = al(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(R(317));
            i[yn] = t;
          } else Si(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Qe(t), (i = !1);
        } else en !== null && (yh(en), (en = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || ke.current & 1 ? Ie === 0 && (Ie = 3) : Tm())),
          t.updateQueue !== null && (t.flags |= 4),
          Qe(t),
          null);
    case 4:
      return wi(), ch(e, t), e === null && Xs(t.stateNode.containerInfo), Qe(t), null;
    case 10:
      return lm(t.type._context), Qe(t), null;
    case 17:
      return gt(t.type) && mc(), Qe(t), null;
    case 19:
      if ((ye(ke), (i = t.memoizedState), i === null)) return Qe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Xi(i, !1);
        else {
          if (Ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = wc(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Xi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return he(ke, (ke.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            $e() > Ci &&
            ((t.flags |= 128), (r = !0), Xi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = wc(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xi(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !xe)
            )
              return Qe(t), null;
          } else
            2 * $e() - i.renderingStartTime > Ci &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = $e()),
          (t.sibling = null),
          (n = ke.current),
          he(ke, r ? (n & 1) | 2 : n & 1),
          t)
        : (Qe(t), null);
    case 22:
    case 23:
      return (
        Cm(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ct & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Qe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function DD(e, t) {
  switch ((om(t), t.tag)) {
    case 1:
      return (
        gt(t.type) && mc(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wi(),
        ye(mt),
        ye(rt),
        hm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fm(t), null;
    case 13:
      if ((ye(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        Si();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return ye(ke), null;
    case 4:
      return wi(), null;
    case 10:
      return lm(t.type._context), null;
    case 22:
    case 23:
      return Cm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ul = !1,
  et = !1,
  LD = typeof WeakSet == 'function' ? WeakSet : Set,
  F = null;
function Xo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        _e(e, t, r);
      }
    else n.current = null;
}
function uh(e, t, n) {
  try {
    n();
  } catch (r) {
    _e(e, t, r);
  }
}
var dv = !1;
function OD(e, t) {
  if (((Kf = dc), (e = $x()), nm(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++c === o && (a = s),
                f === i && ++u === r && (l = s),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yf = { focusedElem: e, selectionRange: n }, dc = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    w = v.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Zt(t.type, g), w);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (k) {
          _e(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (v = dv), (dv = !1), v;
}
function _s(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && uh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function hu(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function dh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Tw(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Tw(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[yn], delete t[Qs], delete t[Qf], delete t[xD], delete t[wD])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Pw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fv(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pw(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fh(e, t, n), e = e.sibling; e !== null; ) fh(e, t, n), (e = e.sibling);
}
function hh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hh(e, t, n), e = e.sibling; e !== null; ) hh(e, t, n), (e = e.sibling);
}
var Ue = null,
  Jt = !1;
function tr(e, t, n) {
  for (n = n.child; n !== null; ) _w(e, t, n), (n = n.sibling);
}
function _w(e, t, n) {
  if (Cn && typeof Cn.onCommitFiberUnmount == 'function')
    try {
      Cn.onCommitFiberUnmount(iu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      et || Xo(n, t);
    case 6:
      var r = Ue,
        o = Jt;
      (Ue = null),
        tr(e, t, n),
        (Ue = r),
        (Jt = o),
        Ue !== null &&
          (Jt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ue.removeChild(n.stateNode));
      break;
    case 18:
      Ue !== null &&
        (Jt
          ? ((e = Ue),
            (n = n.stateNode),
            e.nodeType === 8 ? $d(e.parentNode, n) : e.nodeType === 1 && $d(e, n),
            Gs(e))
          : $d(Ue, n.stateNode));
      break;
    case 4:
      (r = Ue),
        (o = Jt),
        (Ue = n.stateNode.containerInfo),
        (Jt = !0),
        tr(e, t, n),
        (Ue = r),
        (Jt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!et && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag), s !== void 0 && (i & 2 || i & 4) && uh(n, t, s), (o = o.next);
        } while (o !== r);
      }
      tr(e, t, n);
      break;
    case 1:
      if (!et && (Xo(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          _e(n, t, a);
        }
      tr(e, t, n);
      break;
    case 21:
      tr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((et = (r = et) || n.memoizedState !== null), tr(e, t, n), (et = r))
        : tr(e, t, n);
      break;
    default:
      tr(e, t, n);
  }
}
function hv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new LD()),
      t.forEach(function (r) {
        var o = YD.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Qt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ue = a.stateNode), (Jt = !1);
              break e;
            case 3:
              (Ue = a.stateNode.containerInfo), (Jt = !0);
              break e;
            case 4:
              (Ue = a.stateNode.containerInfo), (Jt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ue === null) throw Error(R(160));
        _w(i, s, o), (Ue = null), (Jt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (c) {
        _e(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ew(t, e), (t = t.sibling);
}
function Ew(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qt(t, e), dn(e), r & 4)) {
        try {
          _s(3, e, e.return), hu(3, e);
        } catch (g) {
          _e(e, e.return, g);
        }
        try {
          _s(5, e, e.return);
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      break;
    case 1:
      Qt(t, e), dn(e), r & 512 && n !== null && Xo(n, n.return);
      break;
    case 5:
      if ((Qt(t, e), dn(e), r & 512 && n !== null && Xo(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Vs(o, '');
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && qS(o, i), Df(a, s);
            var c = Df(a, i);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                d = l[s + 1];
              u === 'style'
                ? tx(o, d)
                : u === 'dangerouslySetInnerHTML'
                  ? JS(o, d)
                  : u === 'children'
                    ? Vs(o, d)
                    : Wp(o, u, d, c);
            }
            switch (a) {
              case 'input':
                Mf(o, i);
                break;
              case 'textarea':
                QS(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? ri(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ri(o, !!i.multiple, i.defaultValue, !0)
                      : ri(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Qs] = i;
          } catch (g) {
            _e(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Qt(t, e), dn(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      break;
    case 3:
      if ((Qt(t, e), dn(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Gs(t.containerInfo);
        } catch (g) {
          _e(e, e.return, g);
        }
      break;
    case 4:
      Qt(t, e), dn(e);
      break;
    case 13:
      Qt(t, e),
        dn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (wm = $e())),
        r & 4 && hv(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((et = (c = et) || u), Qt(t, e), (et = c)) : Qt(t, e),
        dn(e),
        r & 8192)
      ) {
        if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !u && e.mode & 1))
          for (F = e, u = e.child; u !== null; ) {
            for (d = F = u; F !== null; ) {
              switch (((f = F), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _s(4, f, f.return);
                  break;
                case 1:
                  Xo(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      _e(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Xo(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    mv(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (F = p)) : mv(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (o = d.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (a.style.display = ex('display', s)));
              } catch (g) {
                _e(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? '' : d.memoizedProps;
              } catch (g) {
                _e(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Qt(t, e), dn(e), r & 4 && hv(e);
      break;
    case 21:
      break;
    default:
      Qt(t, e), dn(e);
  }
}
function dn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Vs(o, ''), (r.flags &= -33));
          var i = fv(e);
          hh(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = fv(e);
          fh(e, a, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      _e(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ND(e, t, n) {
  (F = e), $w(e);
}
function $w(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ul;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || et;
        a = ul;
        var c = et;
        if (((ul = s), (et = l) && !c))
          for (F = o; F !== null; )
            (s = F),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? gv(o)
                : l !== null
                  ? ((l.return = s), (F = l))
                  : gv(o);
        for (; i !== null; ) (F = i), $w(i), (i = i.sibling);
        (F = o), (ul = a), (et = c);
      }
      pv(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : pv(e);
  }
}
function pv(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              et || hu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !et)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Zt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Zy(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zy(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && Gs(d);
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
              throw Error(R(163));
          }
        et || (t.flags & 512 && dh(t));
      } catch (f) {
        _e(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function mv(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function gv(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hu(4, t);
          } catch (l) {
            _e(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              _e(t, o, l);
            }
          }
          var i = t.return;
          try {
            dh(t);
          } catch (l) {
            _e(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            dh(t);
          } catch (l) {
            _e(t, s, l);
          }
      }
    } catch (l) {
      _e(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var BD = Math.ceil,
  Tc = Qn.ReactCurrentDispatcher,
  Sm = Qn.ReactCurrentOwner,
  Ht = Qn.ReactCurrentBatchConfig,
  q = 0,
  Be = null,
  Me = null,
  Ye = 0,
  Ct = 0,
  qo = _r(0),
  Ie = 0,
  ra = null,
  ao = 0,
  pu = 0,
  xm = 0,
  Es = null,
  ft = null,
  wm = 0,
  Ci = 1 / 0,
  Rn = null,
  Pc = !1,
  ph = null,
  gr = null,
  dl = !1,
  ur = null,
  _c = 0,
  $s = 0,
  mh = null,
  Vl = -1,
  Wl = 0;
function lt() {
  return q & 6 ? $e() : Vl !== -1 ? Vl : (Vl = $e());
}
function yr(e) {
  return e.mode & 1
    ? q & 2 && Ye !== 0
      ? Ye & -Ye
      : CD.transition !== null
        ? (Wl === 0 && (Wl = hx()), Wl)
        : ((e = ae), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sx(e.type))), e)
    : 1;
}
function rn(e, t, n, r) {
  if (50 < $s) throw (($s = 0), (mh = null), Error(R(185)));
  va(e, n, r),
    (!(q & 2) || e !== Be) &&
      (e === Be && (!(q & 2) && (pu |= n), Ie === 4 && lr(e, Ye)),
      yt(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((Ci = $e() + 500), uu && Er()));
}
function yt(e, t) {
  var n = e.callbackNode;
  CI(e, t);
  var r = uc(e, e === Be ? Ye : 0);
  if (r === 0) n !== null && Ty(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ty(n), t === 1))
      e.tag === 0 ? kD(yv.bind(null, e)) : Ox(yv.bind(null, e)),
        bD(function () {
          !(q & 6) && Er();
        }),
        (n = null);
    else {
      switch (px(r)) {
        case 1:
          n = Yp;
          break;
        case 4:
          n = dx;
          break;
        case 16:
          n = cc;
          break;
        case 536870912:
          n = fx;
          break;
        default:
          n = cc;
      }
      n = Dw(n, Aw.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Aw(e, t) {
  if (((Vl = -1), (Wl = 0), q & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (li() && e.callbackNode !== n) return null;
  var r = uc(e, e === Be ? Ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ec(e, r);
  else {
    t = r;
    var o = q;
    q |= 2;
    var i = Mw();
    (Be !== e || Ye !== t) && ((Rn = null), (Ci = $e() + 500), qr(e, t));
    do
      try {
        UD();
        break;
      } catch (a) {
        Rw(e, a);
      }
    while (!0);
    am(), (Tc.current = i), (q = o), Me !== null ? (t = 0) : ((Be = null), (Ye = 0), (t = Ie));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Vf(e)), o !== 0 && ((r = o), (t = gh(e, o)))), t === 1))
      throw ((n = ra), qr(e, 0), lr(e, r), yt(e, $e()), n);
    if (t === 6) lr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !VD(o) &&
          ((t = Ec(e, r)), t === 2 && ((i = Vf(e)), i !== 0 && ((r = i), (t = gh(e, i)))), t === 1))
      )
        throw ((n = ra), qr(e, 0), lr(e, r), yt(e, $e()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Or(e, ft, Rn);
          break;
        case 3:
          if ((lr(e, r), (r & 130023424) === r && ((t = wm + 500 - $e()), 10 < t))) {
            if (uc(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              lt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = qf(Or.bind(null, e, ft, Rn), t);
            break;
          }
          Or(e, ft, Rn);
          break;
        case 4:
          if ((lr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - nn(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = $e() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * BD(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qf(Or.bind(null, e, ft, Rn), r);
            break;
          }
          Or(e, ft, Rn);
          break;
        case 5:
          Or(e, ft, Rn);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return yt(e, $e()), e.callbackNode === n ? Aw.bind(null, e) : null;
}
function gh(e, t) {
  var n = Es;
  return (
    e.current.memoizedState.isDehydrated && (qr(e, t).flags |= 256),
    (e = Ec(e, t)),
    e !== 2 && ((t = ft), (ft = n), t !== null && yh(t)),
    e
  );
}
function yh(e) {
  ft === null ? (ft = e) : ft.push.apply(ft, e);
}
function VD(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!on(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function lr(e, t) {
  for (
    t &= ~xm, t &= ~pu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - nn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yv(e) {
  if (q & 6) throw Error(R(327));
  li();
  var t = uc(e, 0);
  if (!(t & 1)) return yt(e, $e()), null;
  var n = Ec(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vf(e);
    r !== 0 && ((t = r), (n = gh(e, r)));
  }
  if (n === 1) throw ((n = ra), qr(e, 0), lr(e, t), yt(e, $e()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Or(e, ft, Rn), yt(e, $e()), null
  );
}
function km(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((Ci = $e() + 500), uu && Er());
  }
}
function lo(e) {
  ur !== null && ur.tag === 0 && !(q & 6) && li();
  var t = q;
  q |= 1;
  var n = Ht.transition,
    r = ae;
  try {
    if (((Ht.transition = null), (ae = 1), e)) return e();
  } finally {
    (ae = r), (Ht.transition = n), (q = t), !(q & 6) && Er();
  }
}
function Cm() {
  (Ct = qo.current), ye(qo);
}
function qr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), vD(n)), Me !== null))
    for (n = Me.return; n !== null; ) {
      var r = n;
      switch ((om(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && mc();
          break;
        case 3:
          wi(), ye(mt), ye(rt), hm();
          break;
        case 5:
          fm(r);
          break;
        case 4:
          wi();
          break;
        case 13:
          ye(ke);
          break;
        case 19:
          ye(ke);
          break;
        case 10:
          lm(r.type._context);
          break;
        case 22:
        case 23:
          Cm();
      }
      n = n.return;
    }
  if (
    ((Be = e),
    (Me = e = vr(e.current, null)),
    (Ye = Ct = t),
    (Ie = 0),
    (ra = null),
    (xm = pu = ao = 0),
    (ft = Es = null),
    Ur !== null)
  ) {
    for (t = 0; t < Ur.length; t++)
      if (((n = Ur[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Ur = null;
  }
  return e;
}
function Rw(e, t) {
  do {
    var n = Me;
    try {
      if ((am(), (Ol.current = Cc), kc)) {
        for (var r = Te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        kc = !1;
      }
      if (
        ((so = 0),
        (Oe = Fe = Te = null),
        (Ps = !1),
        (ea = 0),
        (Sm.current = null),
        n === null || n.return === null)
      ) {
        (Ie = 1), (ra = t), (Me = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Ye),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = ov(s);
          if (p !== null) {
            (p.flags &= -257), iv(p, s, a, i, t), p.mode & 1 && rv(i, c, t), (t = p), (l = c);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              rv(i, c, t), Tm();
              break e;
            }
            l = Error(R(426));
          }
        } else if (xe && a.mode & 1) {
          var w = ov(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), iv(w, s, a, i, t), im(ki(l, a));
            break e;
          }
        }
        (i = l = ki(l, a)), Ie !== 4 && (Ie = 2), Es === null ? (Es = [i]) : Es.push(i), (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = pw(i, l, t);
              Qy(i, m);
              break e;
            case 1:
              a = l;
              var h = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (gr === null || !gr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = mw(i, a, t);
                Qy(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zw(n);
    } catch (P) {
      (t = P), Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mw() {
  var e = Tc.current;
  return (Tc.current = Cc), e === null ? Cc : e;
}
function Tm() {
  (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
    Be === null || (!(ao & 268435455) && !(pu & 268435455)) || lr(Be, Ye);
}
function Ec(e, t) {
  var n = q;
  q |= 2;
  var r = Mw();
  (Be !== e || Ye !== t) && ((Rn = null), qr(e, t));
  do
    try {
      WD();
      break;
    } catch (o) {
      Rw(e, o);
    }
  while (!0);
  if ((am(), (q = n), (Tc.current = r), Me !== null)) throw Error(R(261));
  return (Be = null), (Ye = 0), Ie;
}
function WD() {
  for (; Me !== null; ) jw(Me);
}
function UD() {
  for (; Me !== null && !mI(); ) jw(Me);
}
function jw(e) {
  var t = Iw(e.alternate, e, Ct);
  (e.memoizedProps = e.pendingProps), t === null ? zw(e) : (Me = t), (Sm.current = null);
}
function zw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = DD(n, t)), n !== null)) {
        (n.flags &= 32767), (Me = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ie = 6), (Me = null);
        return;
      }
    } else if (((n = ID(n, t, Ct)), n !== null)) {
      Me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Ie === 0 && (Ie = 5);
}
function Or(e, t, n) {
  var r = ae,
    o = Ht.transition;
  try {
    (Ht.transition = null), (ae = 1), HD(e, t, n, r);
  } finally {
    (Ht.transition = o), (ae = r);
  }
  return null;
}
function HD(e, t, n, r) {
  do li();
  while (ur !== null);
  if (q & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (TI(e, i),
    e === Be && ((Me = Be = null), (Ye = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      dl ||
      ((dl = !0),
      Dw(cc, function () {
        return li(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ht.transition), (Ht.transition = null);
    var s = ae;
    ae = 1;
    var a = q;
    (q |= 4),
      (Sm.current = null),
      OD(e, n),
      Ew(n, e),
      dD(Yf),
      (dc = !!Kf),
      (Yf = Kf = null),
      (e.current = n),
      ND(n),
      gI(),
      (q = a),
      (ae = s),
      (Ht.transition = i);
  } else e.current = n;
  if (
    (dl && ((dl = !1), (ur = e), (_c = o)),
    (i = e.pendingLanes),
    i === 0 && (gr = null),
    bI(n.stateNode),
    yt(e, $e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Pc) throw ((Pc = !1), (e = ph), (ph = null), e);
  return (
    _c & 1 && e.tag !== 0 && li(),
    (i = e.pendingLanes),
    i & 1 ? (e === mh ? $s++ : (($s = 0), (mh = e))) : ($s = 0),
    Er(),
    null
  );
}
function li() {
  if (ur !== null) {
    var e = px(_c),
      t = Ht.transition,
      n = ae;
    try {
      if (((Ht.transition = null), (ae = 16 > e ? 16 : e), ur === null)) var r = !1;
      else {
        if (((e = ur), (ur = null), (_c = 0), q & 6)) throw Error(R(331));
        var o = q;
        for (q |= 4, F = e.current; F !== null; ) {
          var i = F,
            s = i.child;
          if (F.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (F = c; F !== null; ) {
                  var u = F;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _s(8, u, i);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (F = d);
                  else
                    for (; F !== null; ) {
                      u = F;
                      var f = u.sibling,
                        p = u.return;
                      if ((Tw(u), u === c)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (F = f);
                        break;
                      }
                      F = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (F = s);
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _s(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (F = m);
                break e;
              }
              F = i.return;
            }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          s = F;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (F = y);
          else
            e: for (s = h; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hu(9, a);
                  }
                } catch (P) {
                  _e(a, a.return, P);
                }
              if (a === s) {
                F = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (F = k);
                break e;
              }
              F = a.return;
            }
        }
        if (((q = o), Er(), Cn && typeof Cn.onPostCommitFiberRoot == 'function'))
          try {
            Cn.onPostCommitFiberRoot(iu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ae = n), (Ht.transition = t);
    }
  }
  return !1;
}
function vv(e, t, n) {
  (t = ki(n, t)),
    (t = pw(e, t, 1)),
    (e = mr(e, t, 1)),
    (t = lt()),
    e !== null && (va(e, 1, t), yt(e, t));
}
function _e(e, t, n) {
  if (e.tag === 3) vv(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (gr === null || !gr.has(r)))
        ) {
          (e = ki(n, e)),
            (e = mw(t, e, 1)),
            (t = mr(t, e, 1)),
            (e = lt()),
            t !== null && (va(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function GD(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = lt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Be === e &&
      (Ye & n) === n &&
      (Ie === 4 || (Ie === 3 && (Ye & 130023424) === Ye && 500 > $e() - wm) ? qr(e, 0) : (xm |= n)),
    yt(e, t);
}
function Fw(e, t) {
  t === 0 && (e.mode & 1 ? ((t = tl), (tl <<= 1), !(tl & 130023424) && (tl = 4194304)) : (t = 1));
  var n = lt();
  (e = Xn(e, t)), e !== null && (va(e, t, n), yt(e, n));
}
function KD(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fw(e, n);
}
function YD(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Fw(e, n);
}
var Iw;
Iw = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || mt.current) pt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pt = !1), FD(e, t, n);
      pt = !!(e.flags & 131072);
    }
  else (pt = !1), xe && t.flags & 1048576 && Nx(t, vc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bl(e, t), (e = t.pendingProps);
      var o = bi(t, rt.current);
      ai(t, n), (o = mm(null, t, r, e, o, n));
      var i = gm();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            gt(r) ? ((i = !0), gc(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            um(t),
            (o.updater = fu),
            (t.stateNode = o),
            (o._reactInternals = t),
            rh(t, r, e, n),
            (t = sh(null, t, r, !0, i, n)))
          : ((t.tag = 0), xe && i && rm(t), it(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = qD(r)),
          (e = Zt(r, e)),
          o)
        ) {
          case 0:
            t = ih(null, t, r, e, n);
            break e;
          case 1:
            t = lv(null, t, r, e, n);
            break e;
          case 11:
            t = sv(null, t, r, e, n);
            break e;
          case 14:
            t = av(null, t, r, Zt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Zt(r, o)),
        ih(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Zt(r, o)),
        lv(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((bw(t), e === null)) throw Error(R(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Gx(e, t), xc(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ki(Error(R(423)), t)), (t = cv(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ki(Error(R(424)), t)), (t = cv(e, t, r, n, o));
            break e;
          } else
            for (
              Tt = pr(t.stateNode.containerInfo.firstChild),
                Et = t,
                xe = !0,
                en = null,
                n = Ux(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Si(), r === o)) {
            t = qn(e, t, n);
            break e;
          }
          it(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kx(t),
        e === null && eh(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Xf(r, o) ? (s = null) : i !== null && Xf(r, i) && (t.flags |= 32),
        vw(e, t),
        it(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && eh(t), null;
    case 13:
      return Sw(e, t, n);
    case 4:
      return (
        dm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xi(t, null, r, n)) : it(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Zt(r, o)),
        sv(e, t, r, o, n)
      );
    case 7:
      return it(e, t, t.pendingProps, n), t.child;
    case 8:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          he(bc, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (on(i.value, s)) {
            if (i.children === o.children && !mt.current) {
              t = qn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Hn(-1, n & -n)), (l.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      th(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  th(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        it(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ai(t, n),
        (o = Gt(o)),
        (r = r(o)),
        (t.flags |= 1),
        it(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = Zt(r, t.pendingProps)), (o = Zt(r.type, o)), av(e, t, r, o, n);
    case 15:
      return gw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Zt(r, o)),
        Bl(e, t),
        (t.tag = 1),
        gt(r) ? ((e = !0), gc(t)) : (e = !1),
        ai(t, n),
        hw(t, r, o),
        rh(t, r, o, n),
        sh(null, t, r, !0, e, n)
      );
    case 19:
      return xw(e, t, n);
    case 22:
      return yw(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Dw(e, t) {
  return ux(e, t);
}
function XD(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Wt(e, t, n, r) {
  return new XD(e, t, n, r);
}
function Pm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qD(e) {
  if (typeof e == 'function') return Pm(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hp)) return 11;
    if (e === Gp) return 14;
  }
  return 2;
}
function vr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Wt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ul(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) Pm(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case No:
        return Qr(n.children, o, i, t);
      case Up:
        (s = 8), (o |= 8);
        break;
      case _f:
        return (e = Wt(12, n, t, o | 2)), (e.elementType = _f), (e.lanes = i), e;
      case Ef:
        return (e = Wt(13, n, t, o)), (e.elementType = Ef), (e.lanes = i), e;
      case $f:
        return (e = Wt(19, n, t, o)), (e.elementType = $f), (e.lanes = i), e;
      case KS:
        return mu(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case HS:
              s = 10;
              break e;
            case GS:
              s = 9;
              break e;
            case Hp:
              s = 11;
              break e;
            case Gp:
              s = 14;
              break e;
            case or:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ''));
    }
  return (t = Wt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Qr(e, t, n, r) {
  return (e = Wt(7, e, r, t)), (e.lanes = n), e;
}
function mu(e, t, n, r) {
  return (
    (e = Wt(22, e, r, t)), (e.elementType = KS), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function Dd(e, t, n) {
  return (e = Wt(6, e, null, t)), (e.lanes = n), e;
}
function Ld(e, t, n) {
  return (
    (t = Wt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function QD(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = vd(0)),
    (this.expirationTimes = vd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function _m(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new QD(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Wt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    um(i),
    e
  );
}
function ZD(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Oo,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Lw(e) {
  if (!e) return Cr;
  e = e._reactInternals;
  e: {
    if (yo(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (gt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (gt(n)) return Lx(e, n, t);
  }
  return t;
}
function Ow(e, t, n, r, o, i, s, a, l) {
  return (
    (e = _m(n, r, !0, e, o, i, s, a, l)),
    (e.context = Lw(null)),
    (n = e.current),
    (r = lt()),
    (o = yr(n)),
    (i = Hn(r, o)),
    (i.callback = t ?? null),
    mr(n, i, o),
    (e.current.lanes = o),
    va(e, o, r),
    yt(e, r),
    e
  );
}
function gu(e, t, n, r) {
  var o = t.current,
    i = lt(),
    s = yr(o);
  return (
    (n = Lw(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Hn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mr(o, t, s)),
    e !== null && (rn(e, o, s, i), Ll(e, o, s)),
    s
  );
}
function $c(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Em(e, t) {
  bv(e, t), (e = e.alternate) && bv(e, t);
}
function JD() {
  return null;
}
var Nw =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function $m(e) {
  this._internalRoot = e;
}
yu.prototype.render = $m.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  gu(e, t, null, null);
};
yu.prototype.unmount = $m.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    lo(function () {
      gu(null, e, null, null);
    }),
      (t[Yn] = null);
  }
};
function yu(e) {
  this._internalRoot = e;
}
yu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ar.length && t !== 0 && t < ar[n].priority; n++);
    ar.splice(n, 0, e), n === 0 && bx(e);
  }
};
function Am(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Sv() {}
function eL(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = $c(s);
        i.call(c);
      };
    }
    var s = Ow(t, r, e, 0, null, !1, !1, '', Sv);
    return (
      (e._reactRootContainer = s),
      (e[Yn] = s.current),
      Xs(e.nodeType === 8 ? e.parentNode : e),
      lo(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var c = $c(l);
      a.call(c);
    };
  }
  var l = _m(e, 0, !1, null, null, !1, !1, '', Sv);
  return (
    (e._reactRootContainer = l),
    (e[Yn] = l.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    lo(function () {
      gu(t, l, n, r);
    }),
    l
  );
}
function bu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == 'function') {
      var a = o;
      o = function () {
        var l = $c(s);
        a.call(l);
      };
    }
    gu(t, s, e, o);
  } else s = eL(n, t, e, o, r);
  return $c(s);
}
mx = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = as(t.pendingLanes);
        n !== 0 && (Xp(t, n | 1), yt(t, $e()), !(q & 6) && ((Ci = $e() + 500), Er()));
      }
      break;
    case 13:
      lo(function () {
        var r = Xn(e, 1);
        if (r !== null) {
          var o = lt();
          rn(r, e, 1, o);
        }
      }),
        Em(e, 1);
  }
};
qp = function (e) {
  if (e.tag === 13) {
    var t = Xn(e, 134217728);
    if (t !== null) {
      var n = lt();
      rn(t, e, 134217728, n);
    }
    Em(e, 134217728);
  }
};
gx = function (e) {
  if (e.tag === 13) {
    var t = yr(e),
      n = Xn(e, t);
    if (n !== null) {
      var r = lt();
      rn(n, e, t, r);
    }
    Em(e, t);
  }
};
yx = function () {
  return ae;
};
vx = function (e, t) {
  var n = ae;
  try {
    return (ae = e), t();
  } finally {
    ae = n;
  }
};
Of = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Mf(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = cu(r);
            if (!o) throw Error(R(90));
            XS(r), Mf(r, o);
          }
        }
      }
      break;
    case 'textarea':
      QS(e, n);
      break;
    case 'select':
      (t = n.value), t != null && ri(e, !!n.multiple, t, !1);
  }
};
ox = km;
ix = lo;
var tL = { usingClientEntryPoint: !1, Events: [Sa, Uo, cu, nx, rx, km] },
  qi = {
    findFiberByHostInstance: Wr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  nL = {
    bundleType: qi.bundleType,
    version: qi.version,
    rendererPackageName: qi.rendererPackageName,
    rendererConfig: qi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lx(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qi.findFiberByHostInstance || JD,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fl.isDisabled && fl.supportsFiber)
    try {
      (iu = fl.inject(nL)), (Cn = fl);
    } catch {}
}
jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tL;
jt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Am(t)) throw Error(R(200));
  return ZD(e, t, null, n);
};
jt.createRoot = function (e, t) {
  if (!Am(e)) throw Error(R(299));
  var n = !1,
    r = '',
    o = Nw;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = _m(e, 1, !1, null, null, n, !1, r, o)),
    (e[Yn] = t.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    new $m(t)
  );
};
jt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(R(188))
      : ((e = Object.keys(e).join(',')), Error(R(268, e)));
  return (e = lx(t)), (e = e === null ? null : e.stateNode), e;
};
jt.flushSync = function (e) {
  return lo(e);
};
jt.hydrate = function (e, t, n) {
  if (!vu(t)) throw Error(R(200));
  return bu(null, e, t, !0, n);
};
jt.hydrateRoot = function (e, t, n) {
  if (!Am(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Nw;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Ow(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Yn] = t.current),
    Xs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new yu(t);
};
jt.render = function (e, t, n) {
  if (!vu(t)) throw Error(R(200));
  return bu(null, e, t, !1, n);
};
jt.unmountComponentAtNode = function (e) {
  if (!vu(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (lo(function () {
        bu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Yn] = null);
        });
      }),
      !0)
    : !1;
};
jt.unstable_batchedUpdates = km;
jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vu(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return bu(e, t, n, !1, r);
};
jt.version = '18.3.1-next-f1338f8080-20240426';
function Bw() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bw);
    } catch (e) {
      console.error(e);
    }
}
Bw(), (BS.exports = jt);
var Rm = BS.exports;
const [Vw, rL] = Rt({ strict: !1, name: 'PortalContext' }),
  Mm = 'chakra-portal',
  oL = '.chakra-portal',
  iL = (e) =>
    b.jsx('div', {
      className: 'chakra-portal-zIndex',
      style: { position: 'absolute', zIndex: e.zIndex, top: 0, left: 0, right: 0 },
      children: e.children,
    }),
  sL = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, o] = S.useState(null),
      i = S.useRef(null),
      [, s] = S.useState({});
    S.useEffect(() => s({}), []);
    const a = rL(),
      l = VM();
    Qo(() => {
      if (!r) return;
      const u = r.ownerDocument,
        d = t ? (a ?? u.body) : u.body;
      if (!d) return;
      (i.current = u.createElement('div')),
        (i.current.className = Mm),
        d.appendChild(i.current),
        s({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [r]);
    const c =
      l != null && l.zIndex ? b.jsx(iL, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
    return i.current
      ? Rm.createPortal(b.jsx(Vw, { value: i.current, children: c }), i.current)
      : b.jsx('span', {
          ref: (u) => {
            u && o(u);
          },
        });
  },
  aL = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      o = n.current,
      i = o ?? (typeof window < 'u' ? document.body : void 0),
      s = S.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement('div');
        return l && (l.className = Mm), l;
      }, [o]),
      [, a] = S.useState({});
    return (
      Qo(() => a({}), []),
      Qo(() => {
        if (!(!s || !i))
          return (
            i.appendChild(s),
            () => {
              i.removeChild(s);
            }
          );
      }, [s, i]),
      i && s ? Rm.createPortal(b.jsx(Vw, { value: r ? s : null, children: t }), s) : null
    );
  };
function wa(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? b.jsx(aL, { containerRef: n, ...r }) : b.jsx(sL, { ...r });
}
wa.className = Mm;
wa.selector = oL;
wa.displayName = 'Portal';
const [lL, cL] = Rt({ name: 'ToastOptionsContext', strict: !1 }),
  uL = (e) => {
    const t = S.useSyncExternalStore(gn.subscribe, gn.getState, gn.getState),
      { motionVariants: n, component: r = FS, portalProps: o, animatePresenceProps: i } = e,
      a = Object.keys(t).map((l) => {
        const c = t[l];
        return b.jsx(
          'div',
          {
            role: 'region',
            'aria-live': 'polite',
            'aria-label': `Notifications-${l}`,
            id: `chakra-toast-manager-${l}`,
            style: v3(l),
            children: b.jsx(ya, {
              ...i,
              initial: !1,
              children: c.map((u) => b.jsx(r, { motionVariants: n, ...u }, u.id)),
            }),
          },
          l
        );
      });
    return b.jsx(wa, { ...o, children: a });
  },
  dL = (e) =>
    function ({ children: n, theme: r = e, toastOptions: o, ...i }) {
      return b.jsxs(WM, {
        theme: r,
        ...i,
        children: [
          b.jsx(lL, { value: o == null ? void 0 : o.defaultOptions, children: n }),
          b.jsx(uL, { ...o }),
        ],
      });
    },
  fL = dL(RR),
  xv = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  Zr = { enter: { duration: 0.2, ease: xv.easeOut }, exit: { duration: 0.1, ease: xv.easeIn } },
  Jr = {
    enter: (e, t) => ({ ...e, delay: typeof t == 'number' ? t : t == null ? void 0 : t.enter }),
    exit: (e, t) => ({ ...e, delay: typeof t == 'number' ? t : t == null ? void 0 : t.exit }),
  },
  Su = V('div');
Su.displayName = 'Box';
const [JB, hL] = Rt({ strict: !1, name: 'ButtonGroupContext' });
function cs(e) {
  const { children: t, className: n, ...r } = e,
    o = S.isValidElement(t) ? S.cloneElement(t, { 'aria-hidden': !0, focusable: !1 }) : t,
    i = ue('chakra-button__icon', n);
  return b.jsx(V.span, {
    display: 'inline-flex',
    alignSelf: 'center',
    flexShrink: 0,
    ...r,
    className: i,
    children: o,
  });
}
cs.displayName = 'ButtonIcon';
function vh(e) {
  const {
      label: t,
      placement: n,
      spacing: r = '0.5rem',
      children: o = b.jsx(zp, { color: 'currentColor', width: '1em', height: '1em' }),
      className: i,
      __css: s,
      ...a
    } = e,
    l = ue('chakra-button__spinner', i),
    c = n === 'start' ? 'marginEnd' : 'marginStart',
    u = S.useMemo(
      () => ({
        display: 'flex',
        alignItems: 'center',
        position: t ? 'relative' : 'absolute',
        [c]: t ? r : 0,
        fontSize: '1em',
        lineHeight: 'normal',
        ...s,
      }),
      [s, t, c, r]
    );
  return b.jsx(V.div, { className: l, ...a, __css: u, children: o });
}
vh.displayName = 'ButtonSpinner';
function pL(e) {
  const [t, n] = S.useState(!e);
  return {
    ref: S.useCallback((i) => {
      i && n(i.tagName === 'BUTTON');
    }, []),
    type: t ? 'button' : void 0,
  };
}
const oa = Y((e, t) => {
  const n = hL(),
    r = po('Button', { ...n, ...e }),
    {
      isDisabled: o = n == null ? void 0 : n.isDisabled,
      isLoading: i,
      isActive: s,
      children: a,
      leftIcon: l,
      rightIcon: c,
      loadingText: u,
      iconSpacing: d = '0.5rem',
      type: f,
      spinner: p,
      spinnerPlacement: v = 'start',
      className: g,
      as: w,
      shouldWrapChildren: m,
      ...h
    } = Yt(e),
    y = S.useMemo(() => {
      const _ = { ...(r == null ? void 0 : r._focus), zIndex: 1 };
      return {
        display: 'inline-flex',
        appearance: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        position: 'relative',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        outline: 'none',
        ...r,
        ...(!!n && { _focus: _ }),
      };
    }, [r, n]),
    { ref: k, type: P } = pL(w),
    $ = { rightIcon: c, leftIcon: l, iconSpacing: d, children: a, shouldWrapChildren: m };
  return b.jsxs(V.button, {
    disabled: o || i,
    ref: d2(t, k),
    as: w,
    type: f ?? P,
    'data-active': G(s),
    'data-loading': G(i),
    __css: y,
    className: ue('chakra-button', g),
    ...h,
    children: [
      i &&
        v === 'start' &&
        b.jsx(vh, {
          className: 'chakra-button__spinner--start',
          label: u,
          placement: 'start',
          spacing: d,
          children: p,
        }),
      i ? u || b.jsx(V.span, { opacity: 0, children: b.jsx(wv, { ...$ }) }) : b.jsx(wv, { ...$ }),
      i &&
        v === 'end' &&
        b.jsx(vh, {
          className: 'chakra-button__spinner--end',
          label: u,
          placement: 'end',
          spacing: d,
          children: p,
        }),
    ],
  });
});
oa.displayName = 'Button';
function wv(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o, shouldWrapChildren: i } = e;
  return i
    ? b.jsxs('span', {
        style: { display: 'contents' },
        children: [
          t && b.jsx(cs, { marginEnd: o, children: t }),
          r,
          n && b.jsx(cs, { marginStart: o, children: n }),
        ],
      })
    : b.jsxs(b.Fragment, {
        children: [
          t && b.jsx(cs, { marginEnd: o, children: t }),
          r,
          n && b.jsx(cs, { marginStart: o, children: n }),
        ],
      });
}
const ia = Y((e, t) => {
  const { icon: n, children: r, isRound: o, 'aria-label': i, ...s } = e,
    a = n || r,
    l = S.isValidElement(a) ? S.cloneElement(a, { 'aria-hidden': !0, focusable: !1 }) : null;
  return b.jsx(oa, {
    px: '0',
    py: '0',
    borderRadius: o ? 'full' : void 0,
    ref: t,
    'aria-label': i,
    ...s,
    children: l,
  });
});
ia.displayName = 'IconButton';
const [e6, mL] = Rt({ name: 'CheckboxGroupContext', strict: !1 });
function gL(e) {
  return b.jsx(V.svg, {
    width: '1.2em',
    viewBox: '0 0 12 10',
    style: { fill: 'none', strokeWidth: 2, stroke: 'currentColor', strokeDasharray: 16 },
    ...e,
    children: b.jsx('polyline', { points: '1.5 6 4.5 9 10.5 1' }),
  });
}
function yL(e) {
  return b.jsx(V.svg, {
    width: '1.2em',
    viewBox: '0 0 24 24',
    style: { stroke: 'currentColor', strokeWidth: 4 },
    ...e,
    children: b.jsx('line', { x1: '21', x2: '3', y1: '12', y2: '12' }),
  });
}
function vL(e) {
  const { isIndeterminate: t, isChecked: n, ...r } = e,
    o = t ? yL : gL;
  return n || t
    ? b.jsx(V.div, {
        style: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' },
        children: b.jsx(o, { ...r }),
      })
    : null;
}
var bL = () => typeof document < 'u',
  kv = !1,
  ka = null,
  co = !1,
  bh = !1,
  Sh = new Set();
function jm(e, t) {
  Sh.forEach((n) => n(e, t));
}
var SL =
  typeof window < 'u' && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function xL(e) {
  return !(
    e.metaKey ||
    (!SL && e.altKey) ||
    e.ctrlKey ||
    e.key === 'Control' ||
    e.key === 'Shift' ||
    e.key === 'Meta'
  );
}
function Cv(e) {
  (co = !0), xL(e) && ((ka = 'keyboard'), jm('keyboard', e));
}
function Co(e) {
  if (((ka = 'pointer'), e.type === 'mousedown' || e.type === 'pointerdown')) {
    co = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let n = !1;
    try {
      n = t.matches(':focus-visible');
    } catch {}
    if (n) return;
    jm('pointer', e);
  }
}
function wL(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function kL(e) {
  wL(e) && ((co = !0), (ka = 'virtual'));
}
function CL(e) {
  e.target === window ||
    e.target === document ||
    (e.target instanceof Element && e.target.hasAttribute('tabindex')) ||
    (!co && !bh && ((ka = 'virtual'), jm('virtual', e)), (co = !1), (bh = !1));
}
function TL() {
  (co = !1), (bh = !0);
}
function Tv() {
  return ka !== 'pointer';
}
function PL() {
  if (!bL() || kv) return;
  const { focus: e } = HTMLElement.prototype;
  (HTMLElement.prototype.focus = function (...n) {
    (co = !0), e.apply(this, n);
  }),
    document.addEventListener('keydown', Cv, !0),
    document.addEventListener('keyup', Cv, !0),
    document.addEventListener('click', kL, !0),
    window.addEventListener('focus', CL, !0),
    window.addEventListener('blur', TL, !1),
    typeof PointerEvent < 'u'
      ? (document.addEventListener('pointerdown', Co, !0),
        document.addEventListener('pointermove', Co, !0),
        document.addEventListener('pointerup', Co, !0))
      : (document.addEventListener('mousedown', Co, !0),
        document.addEventListener('mousemove', Co, !0),
        document.addEventListener('mouseup', Co, !0)),
    (kv = !0);
}
function _L(e) {
  PL(), e(Tv());
  const t = () => e(Tv());
  return (
    Sh.add(t),
    () => {
      Sh.delete(t);
    }
  );
}
const [EL, Ww] = Rt({
    name: 'FormControlStylesContext',
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [$L, xu] = Rt({ strict: !1, name: 'FormControlContext' });
function AL(e) {
  const { id: t, isRequired: n, isInvalid: r, isDisabled: o, isReadOnly: i, ...s } = e,
    a = S.useId(),
    l = t || `field-${a}`,
    c = `${l}-label`,
    u = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, p] = S.useState(!1),
    [v, g] = S.useState(!1),
    [w, m] = S.useState(!1),
    h = S.useCallback(
      (_ = {}, A = null) => ({
        id: d,
        ..._,
        ref: to(A, (j) => {
          j && g(!0);
        }),
      }),
      [d]
    ),
    y = S.useCallback(
      (_ = {}, A = null) => ({
        ..._,
        ref: A,
        'data-focus': G(w),
        'data-disabled': G(o),
        'data-invalid': G(r),
        'data-readonly': G(i),
        id: _.id !== void 0 ? _.id : c,
        htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l,
      }),
      [l, o, w, r, i, c]
    ),
    k = S.useCallback(
      (_ = {}, A = null) => ({
        id: u,
        ..._,
        ref: to(A, (j) => {
          j && p(!0);
        }),
        'aria-live': 'polite',
      }),
      [u]
    ),
    P = S.useCallback(
      (_ = {}, A = null) => ({
        ..._,
        ...s,
        ref: A,
        role: 'group',
        'data-focus': G(w),
        'data-disabled': G(o),
        'data-invalid': G(r),
        'data-readonly': G(i),
      }),
      [s, o, w, r, i]
    ),
    $ = S.useCallback(
      (_ = {}, A = null) => ({
        ..._,
        ref: A,
        role: 'presentation',
        'aria-hidden': !0,
        children: _.children || '*',
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!w,
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: v,
    setHasHelpText: g,
    id: l,
    labelId: c,
    feedbackId: u,
    helpTextId: d,
    htmlProps: s,
    getHelpTextProps: h,
    getErrorMessageProps: k,
    getRootProps: P,
    getLabelProps: y,
    getRequiredIndicatorProps: $,
  };
}
const Uw = Y(function (t, n) {
  const r = mo('Form', t),
    o = Yt(t),
    { getRootProps: i, htmlProps: s, ...a } = AL(o),
    l = ue('chakra-form-control', t.className);
  return b.jsx($L, {
    value: a,
    children: b.jsx(EL, {
      value: r,
      children: b.jsx(V.div, { ...i({}, n), className: l, __css: r.container }),
    }),
  });
});
Uw.displayName = 'FormControl';
const RL = Y(function (t, n) {
  const r = xu(),
    o = Ww(),
    i = ue('chakra-form__helper-text', t.className);
  return b.jsx(V.div, {
    ...(r == null ? void 0 : r.getHelpTextProps(t, n)),
    __css: o.helperText,
    className: i,
  });
});
RL.displayName = 'FormHelperText';
function Hw(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = Gw(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    'aria-invalid': Fu(n),
    'aria-required': Fu(o),
    'aria-readonly': Fu(r),
  };
}
function Gw(e) {
  const t = xu(),
    {
      id: n,
      disabled: r,
      readOnly: o,
      required: i,
      isRequired: s,
      isInvalid: a,
      isReadOnly: l,
      isDisabled: c,
      onFocus: u,
      onBlur: d,
      ...f
    } = e,
    p = e['aria-describedby'] ? [e['aria-describedby']] : [];
  return (
    t != null && t.hasFeedbackText && t != null && t.isInvalid && p.push(t.feedbackId),
    t != null && t.hasHelpText && p.push(t.helpTextId),
    {
      ...f,
      'aria-describedby': p.join(' ') || void 0,
      id: n ?? (t == null ? void 0 : t.id),
      isDisabled: r ?? c ?? (t == null ? void 0 : t.isDisabled),
      isReadOnly: o ?? l ?? (t == null ? void 0 : t.isReadOnly),
      isRequired: i ?? s ?? (t == null ? void 0 : t.isRequired),
      isInvalid: a ?? (t == null ? void 0 : t.isInvalid),
      onFocus: He(t == null ? void 0 : t.onFocus, u),
      onBlur: He(t == null ? void 0 : t.onBlur, d),
    }
  );
}
const ML = {
  border: '0',
  clip: 'rect(0, 0, 0, 0)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: '0',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
};
function jL(e = {}) {
  const t = Gw(e),
    {
      isDisabled: n,
      isReadOnly: r,
      isRequired: o,
      isInvalid: i,
      id: s,
      onBlur: a,
      onFocus: l,
      'aria-describedby': c,
    } = t,
    {
      defaultChecked: u,
      isChecked: d,
      isFocusable: f,
      onChange: p,
      isIndeterminate: v,
      name: g,
      value: w,
      tabIndex: m = void 0,
      'aria-label': h,
      'aria-labelledby': y,
      'aria-invalid': k,
      ...P
    } = e,
    $ = Dh(P, [
      'isDisabled',
      'isReadOnly',
      'isRequired',
      'isInvalid',
      'id',
      'onBlur',
      'onFocus',
      'aria-describedby',
    ]),
    _ = ds(p),
    A = ds(a),
    j = ds(l),
    [z, Q] = S.useState(!1),
    [we, We] = S.useState(!1),
    [ot, sn] = S.useState(!1),
    [dt, oe] = S.useState(!1);
  S.useEffect(() => _L(Q), []);
  const M = S.useRef(null),
    [D, B] = S.useState(!0),
    [ie, se] = S.useState(!!u),
    H = d !== void 0,
    de = H ? d : ie,
    an = S.useCallback(
      (W) => {
        if (r || n) {
          W.preventDefault();
          return;
        }
        H || se(de ? W.currentTarget.checked : v ? !0 : W.currentTarget.checked), _ == null || _(W);
      },
      [r, n, de, H, v, _]
    );
  Qo(() => {
    M.current && (M.current.indeterminate = !!v);
  }, [v]),
    qd(() => {
      n && We(!1);
    }, [n, We]),
    Qo(() => {
      const W = M.current;
      if (!(W != null && W.form)) return;
      const ve = () => {
        se(!!u);
      };
      return (
        W.form.addEventListener('reset', ve),
        () => {
          var je;
          return (je = W.form) == null ? void 0 : je.removeEventListener('reset', ve);
        }
      );
    }, []);
  const Le = n && !f,
    Ft = S.useCallback(
      (W) => {
        W.key === ' ' && oe(!0);
      },
      [oe]
    ),
    ln = S.useCallback(
      (W) => {
        W.key === ' ' && oe(!1);
      },
      [oe]
    );
  Qo(() => {
    if (!M.current) return;
    M.current.checked !== de && se(M.current.checked);
  }, [M.current]);
  const vo = S.useCallback(
      (W = {}, ve = null) => {
        const je = (bt) => {
          we && bt.preventDefault(), oe(!0);
        };
        return {
          ...W,
          ref: ve,
          'data-active': G(dt),
          'data-hover': G(ot),
          'data-checked': G(de),
          'data-focus': G(we),
          'data-focus-visible': G(we && z),
          'data-indeterminate': G(v),
          'data-disabled': G(n),
          'data-invalid': G(i),
          'data-readonly': G(r),
          'aria-hidden': !0,
          onMouseDown: He(W.onMouseDown, je),
          onMouseUp: He(W.onMouseUp, () => oe(!1)),
          onMouseEnter: He(W.onMouseEnter, () => sn(!0)),
          onMouseLeave: He(W.onMouseLeave, () => sn(!1)),
        };
      },
      [dt, de, n, we, z, ot, v, i, r]
    ),
    $r = S.useCallback(
      (W = {}, ve = null) => ({
        ...W,
        ref: ve,
        'data-active': G(dt),
        'data-hover': G(ot),
        'data-checked': G(de),
        'data-focus': G(we),
        'data-focus-visible': G(we && z),
        'data-indeterminate': G(v),
        'data-disabled': G(n),
        'data-invalid': G(i),
        'data-readonly': G(r),
      }),
      [dt, de, n, we, z, ot, v, i, r]
    ),
    bo = S.useCallback(
      (W = {}, ve = null) => ({
        ...$,
        ...W,
        ref: to(ve, (je) => {
          je && B(je.tagName === 'LABEL');
        }),
        onClick: He(W.onClick, () => {
          var je;
          D ||
            ((je = M.current) == null || je.click(),
            requestAnimationFrame(() => {
              var bt;
              (bt = M.current) == null || bt.focus({ preventScroll: !0 });
            }));
        }),
        'data-disabled': G(n),
        'data-checked': G(de),
        'data-invalid': G(i),
      }),
      [$, n, de, i, D]
    ),
    Ar = S.useCallback(
      (W = {}, ve = null) => ({
        ...W,
        ref: to(M, ve),
        type: 'checkbox',
        name: g,
        value: w,
        id: s,
        tabIndex: m,
        onChange: He(W.onChange, an),
        onBlur: He(W.onBlur, A, () => We(!1)),
        onFocus: He(W.onFocus, j, () => We(!0)),
        onKeyDown: He(W.onKeyDown, Ft),
        onKeyUp: He(W.onKeyUp, ln),
        required: o,
        checked: de,
        disabled: Le,
        readOnly: r,
        'aria-label': h,
        'aria-labelledby': y,
        'aria-invalid': k ? !!k : i,
        'aria-describedby': c,
        'aria-disabled': n,
        style: ML,
      }),
      [g, w, s, an, A, j, Ft, ln, o, de, Le, r, h, y, k, i, c, n, m]
    ),
    zi = S.useCallback(
      (W = {}, ve = null) => ({
        ...W,
        ref: ve,
        onMouseDown: He(W.onMouseDown, zL),
        'data-disabled': G(n),
        'data-checked': G(de),
        'data-invalid': G(i),
      }),
      [de, n, i]
    );
  return {
    state: {
      isInvalid: i,
      isFocused: we,
      isChecked: de,
      isActive: dt,
      isHovered: ot,
      isIndeterminate: v,
      isDisabled: n,
      isReadOnly: r,
      isRequired: o,
    },
    getRootProps: bo,
    getCheckboxProps: vo,
    getIndicatorProps: $r,
    getInputProps: Ar,
    getLabelProps: zi,
    htmlProps: $,
  };
}
function zL(e) {
  e.preventDefault(), e.stopPropagation();
}
function FL(e) {
  const [t, n] = S.useState(e),
    [r, o] = S.useState(!1);
  return e !== t && (o(!0), n(e)), r;
}
const IL = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'top',
    userSelect: 'none',
    flexShrink: 0,
  },
  DL = {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'top',
    position: 'relative',
  },
  LL = Zc({
    from: { opacity: 0, strokeDashoffset: 16, transform: 'scale(0.95)' },
    to: { opacity: 1, strokeDashoffset: 0, transform: 'scale(1)' },
  }),
  OL = Zc({ from: { opacity: 0 }, to: { opacity: 1 } }),
  NL = Zc({ from: { transform: 'scaleX(0.65)' }, to: { transform: 'scaleX(1)' } }),
  Kw = Y(function (t, n) {
    const r = mL(),
      o = { ...r, ...t },
      i = mo('Checkbox', o),
      s = Yt(t),
      {
        spacing: a = '0.5rem',
        className: l,
        children: c,
        iconColor: u,
        iconSize: d,
        icon: f = b.jsx(vL, {}),
        isChecked: p,
        isDisabled: v = r == null ? void 0 : r.isDisabled,
        onChange: g,
        inputProps: w,
        ...m
      } = s;
    let h = p;
    r != null && r.value && s.value && (h = r.value.includes(s.value));
    let y = g;
    r != null && r.onChange && s.value && (y = HT(r.onChange, g));
    const {
        state: k,
        getInputProps: P,
        getCheckboxProps: $,
        getLabelProps: _,
        getRootProps: A,
      } = jL({ ...m, isDisabled: v, isChecked: h, onChange: y }),
      j = FL(k.isChecked),
      z = S.useMemo(
        () => ({
          animation: j
            ? k.isIndeterminate
              ? `${OL} 20ms linear, ${NL} 200ms linear`
              : `${LL} 200ms linear`
            : void 0,
          ...i.icon,
          ...jc({ fontSize: d, color: u }),
        }),
        [u, d, j, k.isIndeterminate, i.icon]
      ),
      Q = S.cloneElement(f, {
        __css: z,
        isIndeterminate: k.isIndeterminate,
        isChecked: k.isChecked,
      });
    return b.jsxs(V.label, {
      __css: { ...DL, ...i.container },
      className: ue('chakra-checkbox', l),
      ...A(),
      children: [
        b.jsx('input', { className: 'chakra-checkbox__input', ...P(w, n) }),
        b.jsx(V.span, {
          __css: { ...IL, ...i.control },
          className: 'chakra-checkbox__control',
          ...$(),
          children: Q,
        }),
        c &&
          b.jsx(V.span, {
            className: 'chakra-checkbox__label',
            ..._(),
            __css: { marginStart: a, ...i.label },
            children: c,
          }),
      ],
    });
  });
Kw.displayName = 'Checkbox';
const zm = Y(function (t, n) {
  const { direction: r, align: o, justify: i, wrap: s, basis: a, grow: l, shrink: c, ...u } = t,
    d = {
      display: 'flex',
      flexDirection: r,
      alignItems: o,
      justifyContent: i,
      flexWrap: s,
      flexBasis: a,
      flexGrow: l,
      flexShrink: c,
    };
  return b.jsx(V.div, { ref: n, __css: d, ...u });
});
zm.displayName = 'Flex';
function BL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
var xh = 'data-focus-lock',
  Yw = 'data-focus-lock-disabled',
  VL = 'data-no-focus-lock',
  WL = 'data-autofocus-inside',
  UL = 'data-no-autofocus';
function Od(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function HL(e, t) {
  var n = S.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var GL = typeof window < 'u' ? S.useLayoutEffect : S.useEffect,
  Pv = new WeakMap();
function Xw(e, t) {
  var n = HL(null, function (r) {
    return e.forEach(function (o) {
      return Od(o, r);
    });
  });
  return (
    GL(
      function () {
        var r = Pv.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (a) {
            i.has(a) || Od(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || Od(a, s);
            });
        }
        Pv.set(n, e);
      },
      [e]
    ),
    n
  );
}
var Nd = {
    width: '1px',
    height: '0px',
    padding: 0,
    overflow: 'hidden',
    position: 'fixed',
    top: '1px',
    left: '1px',
  },
  vn = function () {
    return (
      (vn =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      vn.apply(this, arguments)
    );
  };
function qw(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function KL(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Qw(e) {
  return e;
}
function Zw(e, t) {
  t === void 0 && (t = Qw);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var u = s;
            (s = []), u.forEach(i);
          },
          c = function () {
            return Promise.resolve().then(l);
          };
        c(),
          (n = {
            push: function (u) {
              s.push(u), c();
            },
            filter: function (u) {
              return (s = s.filter(u)), n;
            },
          });
      },
    };
  return o;
}
function Fm(e, t) {
  return t === void 0 && (t = Qw), Zw(e, t);
}
function Jw(e) {
  e === void 0 && (e = {});
  var t = Zw(null);
  return (t.options = vn({ async: !0, ssr: !1 }, e)), t;
}
var ek = function (e) {
  var t = e.sideCar,
    n = qw(e, ['sideCar']);
  if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return S.createElement(r, vn({}, n));
};
ek.isSideCarExport = !0;
function YL(e, t) {
  return e.useMedium(t), ek;
}
var tk = Fm({}, function (e) {
    var t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  nk = Fm(),
  XL = Fm(),
  qL = Jw({ async: !0, ssr: typeof document < 'u' }),
  QL = S.createContext(void 0),
  ZL = [],
  Im = S.forwardRef(function (t, n) {
    var r,
      o = S.useState(),
      i = o[0],
      s = o[1],
      a = S.useRef(),
      l = S.useRef(!1),
      c = S.useRef(null),
      u = S.useState({}),
      d = u[1],
      f = t.children,
      p = t.disabled,
      v = p === void 0 ? !1 : p,
      g = t.noFocusGuards,
      w = g === void 0 ? !1 : g,
      m = t.persistentFocus,
      h = m === void 0 ? !1 : m,
      y = t.crossFrame,
      k = y === void 0 ? !0 : y,
      P = t.autoFocus,
      $ = P === void 0 ? !0 : P;
    t.allowTextSelection;
    var _ = t.group,
      A = t.className,
      j = t.whiteList,
      z = t.hasPositiveIndices,
      Q = t.shards,
      we = Q === void 0 ? ZL : Q,
      We = t.as,
      ot = We === void 0 ? 'div' : We,
      sn = t.lockProps,
      dt = sn === void 0 ? {} : sn,
      oe = t.sideCar,
      M = t.returnFocus,
      D = M === void 0 ? !1 : M,
      B = t.focusOptions,
      ie = t.onActivation,
      se = t.onDeactivation,
      H = S.useState({}),
      de = H[0],
      an = S.useCallback(
        function (ve) {
          var je = ve.captureFocusRestore;
          if (!c.current) {
            var bt,
              _n = (bt = document) == null ? void 0 : bt.activeElement;
            (c.current = _n), _n !== document.body && (c.current = je(_n));
          }
          a.current && ie && ie(a.current), (l.current = !0), d();
        },
        [ie]
      ),
      Le = S.useCallback(
        function () {
          (l.current = !1), se && se(a.current), d();
        },
        [se]
      ),
      Ft = S.useCallback(
        function (ve) {
          var je = c.current;
          if (je) {
            var bt = (typeof je == 'function' ? je() : je) || document.body,
              _n = typeof D == 'function' ? D(bt) : D;
            if (_n) {
              var Rr = typeof _n == 'object' ? _n : void 0;
              (c.current = null),
                ve
                  ? Promise.resolve().then(function () {
                      return bt.focus(Rr);
                    })
                  : bt.focus(Rr);
            }
          }
        },
        [D]
      ),
      ln = S.useCallback(function (ve) {
        l.current && tk.useMedium(ve);
      }, []),
      vo = nk.useMedium,
      $r = S.useCallback(function (ve) {
        a.current !== ve && ((a.current = ve), s(ve));
      }, []),
      bo = ro(((r = {}), (r[Yw] = v && 'disabled'), (r[xh] = _), r), dt),
      Ar = w !== !0,
      zi = Ar && w !== 'tail',
      Ea = Xw([n, $r]),
      W = S.useMemo(
        function () {
          return { observed: a, shards: we, enabled: !v, active: l.current };
        },
        [v, l.current, we, i]
      );
    return S.createElement(
      S.Fragment,
      null,
      Ar && [
        S.createElement('div', {
          key: 'guard-first',
          'data-focus-guard': !0,
          tabIndex: v ? -1 : 0,
          style: Nd,
        }),
        z
          ? S.createElement('div', {
              key: 'guard-nearest',
              'data-focus-guard': !0,
              tabIndex: v ? -1 : 1,
              style: Nd,
            })
          : null,
      ],
      !v &&
        S.createElement(oe, {
          id: de,
          sideCar: qL,
          observed: i,
          disabled: v,
          persistentFocus: h,
          crossFrame: k,
          autoFocus: $,
          whiteList: j,
          shards: we,
          onActivation: an,
          onDeactivation: Le,
          returnFocus: Ft,
          focusOptions: B,
          noFocusGuards: w,
        }),
      S.createElement(
        ot,
        ro({ ref: Ea }, bo, { className: A, onBlur: vo, onFocus: ln }),
        S.createElement(QL.Provider, { value: W }, f)
      ),
      zi && S.createElement('div', { 'data-focus-guard': !0, tabIndex: v ? -1 : 0, style: Nd })
    );
  });
Im.propTypes = {};
function wh(e, t) {
  return (
    (wh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    wh(e, t)
  );
}
function JL(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), wh(e, t);
}
function sa(e) {
  '@babel/helpers - typeof';
  return (
    (sa =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    sa(e)
  );
}
function eO(e, t) {
  if (sa(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (sa(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function tO(e) {
  var t = eO(e, 'string');
  return sa(t) == 'symbol' ? t : t + '';
}
function nO(e, t, n) {
  return (
    (t = tO(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function rO(e, t) {
  function n(r) {
    return r.displayName || r.name || 'Component';
  }
  return function (o) {
    var i = [],
      s;
    function a() {
      (s = e(
        i.map(function (c) {
          return c.props;
        })
      )),
        t(s);
    }
    var l = (function (c) {
      JL(u, c);
      function u() {
        return c.apply(this, arguments) || this;
      }
      u.peek = function () {
        return s;
      };
      var d = u.prototype;
      return (
        (d.componentDidMount = function () {
          i.push(this), a();
        }),
        (d.componentDidUpdate = function () {
          a();
        }),
        (d.componentWillUnmount = function () {
          var p = i.indexOf(this);
          i.splice(p, 1), a();
        }),
        (d.render = function () {
          return Fh.createElement(o, this.props);
        }),
        u
      );
    })(S.PureComponent);
    return nO(l, 'displayName', 'SideEffect(' + n(o) + ')'), l;
  };
}
var Pn = function (e) {
    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  uo = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  rk = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  oO = function (e) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
    var t = window.getComputedStyle(e, null);
    return !t || !t.getPropertyValue
      ? !1
      : t.getPropertyValue('display') === 'none' || t.getPropertyValue('visibility') === 'hidden';
  },
  ok = function (e) {
    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ? e.parentNode.host
      : e.parentNode;
  },
  ik = function (e) {
    return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
  },
  iO = function (e) {
    return e.hasAttribute('inert');
  },
  sO = function (e, t) {
    return !e || ik(e) || (!oO(e) && !iO(e) && t(ok(e)));
  },
  sk = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = sO(t, sk.bind(void 0, e));
    return e.set(t, r), r;
  },
  aO = function (e, t) {
    return e && !ik(e) ? (uO(e) ? t(ok(e)) : !1) : !0;
  },
  ak = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = aO(t, ak.bind(void 0, e));
    return e.set(t, r), r;
  },
  lk = function (e) {
    return e.dataset;
  },
  lO = function (e) {
    return e.tagName === 'BUTTON';
  },
  ck = function (e) {
    return e.tagName === 'INPUT';
  },
  uk = function (e) {
    return ck(e) && e.type === 'radio';
  },
  cO = function (e) {
    return !((ck(e) || lO(e)) && (e.type === 'hidden' || e.disabled));
  },
  uO = function (e) {
    var t = e.getAttribute(UL);
    return ![!0, 'true', ''].includes(t);
  },
  Dm = function (e) {
    var t;
    return !!(e && !((t = lk(e)) === null || t === void 0) && t.focusGuard);
  },
  kh = function (e) {
    return !Dm(e);
  },
  dO = function (e) {
    return !!e;
  },
  fO = function (e, t) {
    var n = Math.max(0, e.tabIndex),
      r = Math.max(0, t.tabIndex),
      o = n - r,
      i = e.index - t.index;
    if (o) {
      if (!n) return 1;
      if (!r) return -1;
    }
    return o || i;
  },
  hO = function (e) {
    return e.tabIndex < 0 && !e.hasAttribute('tabindex') ? 0 : e.tabIndex;
  },
  Lm = function (e, t, n) {
    return Pn(e)
      .map(function (r, o) {
        var i = hO(r);
        return {
          node: r,
          index: o,
          tabIndex: n && i === -1 ? ((r.dataset || {}).focusGuard ? 0 : -1) : i,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(fO);
  },
  pO = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]',
  ],
  Om = pO.join(','),
  mO = ''.concat(Om, ', [data-focus-guard]'),
  dk = function (e, t) {
    return Pn((e.shadowRoot || e).children).reduce(function (n, r) {
      return n.concat(r.matches(t ? mO : Om) ? [r] : [], dk(r));
    }, []);
  },
  gO = function (e, t) {
    var n;
    return e instanceof HTMLIFrameElement &&
      !((n = e.contentDocument) === null || n === void 0) &&
      n.body
      ? Ti([e.contentDocument.body], t)
      : [e];
  },
  Ti = function (e, t) {
    return e.reduce(function (n, r) {
      var o,
        i = dk(r, t),
        s = (o = []).concat.apply(
          o,
          i.map(function (a) {
            return gO(a, t);
          })
        );
      return n.concat(
        s,
        r.parentNode
          ? Pn(r.parentNode.querySelectorAll(Om)).filter(function (a) {
              return a === r;
            })
          : []
      );
    }, []);
  },
  yO = function (e) {
    var t = e.querySelectorAll('['.concat(WL, ']'));
    return Pn(t)
      .map(function (n) {
        return Ti([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  Nm = function (e, t) {
    return Pn(e)
      .filter(function (n) {
        return sk(t, n);
      })
      .filter(function (n) {
        return cO(n);
      });
  },
  _v = function (e, t) {
    return (
      t === void 0 && (t = new Map()),
      Pn(e).filter(function (n) {
        return ak(t, n);
      })
    );
  },
  Bm = function (e, t, n) {
    return Lm(Nm(Ti(e, n), t), !0, n);
  },
  aa = function (e, t) {
    return Lm(Nm(Ti(e), t), !1);
  },
  vO = function (e, t) {
    return Nm(yO(e), t);
  },
  eo = function (e, t) {
    return e.shadowRoot
      ? eo(e.shadowRoot, t)
      : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t)
        ? !0
        : Pn(e.children).some(function (n) {
            var r;
            if (n instanceof HTMLIFrameElement) {
              var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
              return o ? eo(o, t) : !1;
            }
            return eo(n, t);
          });
  },
  bO = function (e) {
    for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
      for (var o = r + 1; o < n; o += 1) {
        var i = e[r].compareDocumentPosition(e[o]);
        (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
          (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (s, a) {
      return !t.has(a);
    });
  },
  fk = function (e) {
    return e.parentNode ? fk(e.parentNode) : e;
  },
  Vm = function (e) {
    var t = uo(e);
    return t.filter(Boolean).reduce(function (n, r) {
      var o = r.getAttribute(xh);
      return (
        n.push.apply(
          n,
          o
            ? bO(
                Pn(
                  fk(r).querySelectorAll(
                    '['.concat(xh, '="').concat(o, '"]:not([').concat(Yw, '="disabled"])')
                  )
                )
              )
            : [r]
        ),
        n
      );
    }, []);
  },
  SO = function (e) {
    try {
      return e();
    } catch {
      return;
    }
  },
  la = function (e) {
    if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
      var t = e.activeElement;
      return t.shadowRoot
        ? la(t.shadowRoot)
        : t instanceof HTMLIFrameElement &&
            SO(function () {
              return t.contentWindow.document;
            })
          ? la(t.contentWindow.document)
          : t;
    }
  },
  xO = function (e, t) {
    return e === t;
  },
  wO = function (e, t) {
    return !!Pn(e.querySelectorAll('iframe')).some(function (n) {
      return xO(n, t);
    });
  },
  hk = function (e, t) {
    return (
      t === void 0 && (t = la(rk(e).ownerDocument)),
      !t || (t.dataset && t.dataset.focusGuard)
        ? !1
        : Vm(e).some(function (n) {
            return eo(n, t) || wO(n, t);
          })
    );
  },
  kO = function (e) {
    e === void 0 && (e = document);
    var t = la(e);
    return t
      ? Pn(e.querySelectorAll('['.concat(VL, ']'))).some(function (n) {
          return eo(n, t);
        })
      : !1;
  },
  CO = function (e, t) {
    return (
      t
        .filter(uk)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  Wm = function (e, t) {
    return uk(e) && e.name ? CO(e, t) : e;
  },
  TO = function (e) {
    var t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(Wm(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  Ev = function (e) {
    return e[0] && e.length > 1 ? Wm(e[0], e) : e[0];
  },
  $v = function (e, t) {
    return e.indexOf(Wm(t, e));
  },
  Ch = 'NEW_FOCUS',
  PO = function (e, t, n, r, o) {
    var i = e.length,
      s = e[0],
      a = e[i - 1],
      l = Dm(r);
    if (!(r && e.indexOf(r) >= 0)) {
      var c = r !== void 0 ? n.indexOf(r) : -1,
        u = o ? n.indexOf(o) : c,
        d = o ? e.indexOf(o) : -1;
      if (c === -1) return d !== -1 ? d : Ch;
      if (d === -1) return Ch;
      var f = c - u,
        p = n.indexOf(s),
        v = n.indexOf(a),
        g = TO(n),
        w = r !== void 0 ? g.indexOf(r) : -1,
        m = w - (o ? g.indexOf(o) : c);
      if ((!f && d >= 0) || t.length === 0) return d;
      var h = $v(e, t[0]),
        y = $v(e, t[t.length - 1]);
      if (c <= p && l && Math.abs(f) > 1) return y;
      if (c >= v && l && Math.abs(f) > 1) return h;
      if (f && Math.abs(m) > 1) return d;
      if (c <= p) return y;
      if (c > v) return h;
      if (f) return Math.abs(f) > 1 ? d : (i + d + f) % i;
    }
  },
  _O = function (e) {
    return function (t) {
      var n,
        r = (n = lk(t)) === null || n === void 0 ? void 0 : n.autofocus;
      return t.autofocus || (r !== void 0 && r !== 'false') || e.indexOf(t) >= 0;
    };
  },
  Av = function (e, t, n) {
    var r = e.map(function (i) {
        var s = i.node;
        return s;
      }),
      o = _v(r.filter(_O(n)));
    return o && o.length ? Ev(o) : Ev(_v(t));
  },
  Th = function (e, t) {
    return (
      t === void 0 && (t = []),
      t.push(e),
      e.parentNode && Th(e.parentNode.host || e.parentNode, t),
      t
    );
  },
  Bd = function (e, t) {
    for (var n = Th(e), r = Th(t), o = 0; o < n.length; o += 1) {
      var i = n[o];
      if (r.indexOf(i) >= 0) return i;
    }
    return !1;
  },
  pk = function (e, t, n) {
    var r = uo(e),
      o = uo(t),
      i = r[0],
      s = !1;
    return (
      o.filter(Boolean).forEach(function (a) {
        (s = Bd(s || a, a) || s),
          n.filter(Boolean).forEach(function (l) {
            var c = Bd(i, l);
            c && (!s || eo(c, s) ? (s = c) : (s = Bd(c, s)));
          });
      }),
      s
    );
  },
  Rv = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(vO(r, t));
    }, []);
  },
  EO = function (e, t) {
    var n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(dO)
    );
  },
  $O = function (e, t) {
    var n = la(uo(e).length > 0 ? document : rk(e).ownerDocument),
      r = Vm(e).filter(kh),
      o = pk(n || e, e, r),
      i = new Map(),
      s = aa(r, i),
      a = s.filter(function (v) {
        var g = v.node;
        return kh(g);
      });
    if (a[0]) {
      var l = aa([o], i).map(function (v) {
          var g = v.node;
          return g;
        }),
        c = EO(l, a),
        u = c.map(function (v) {
          var g = v.node;
          return g;
        }),
        d = c
          .filter(function (v) {
            var g = v.tabIndex;
            return g >= 0;
          })
          .map(function (v) {
            var g = v.node;
            return g;
          }),
        f = PO(u, d, l, n, t);
      if (f === Ch) {
        var p = Av(s, d, Rv(r, i)) || Av(s, u, Rv(r, i));
        if (p) return { node: p };
        console.warn('focus-lock: cannot find any node to move focus into');
        return;
      }
      return f === void 0 ? f : c[f];
    }
  },
  AO = function (e) {
    var t = Vm(e).filter(kh),
      n = pk(e, e, t),
      r = Lm(Ti([n], !0), !0, !0),
      o = Ti(t, !1);
    return r.map(function (i) {
      var s = i.node,
        a = i.index;
      return { node: s, index: a, lockItem: o.indexOf(s) >= 0, guard: Dm(s) };
    });
  },
  Um = function (e, t) {
    e &&
      ('focus' in e && e.focus(t),
      'contentWindow' in e && e.contentWindow && e.contentWindow.focus());
  },
  Vd = 0,
  Wd = !1,
  mk = function (e, t, n) {
    n === void 0 && (n = {});
    var r = $O(e, t);
    if (!Wd && r) {
      if (Vd > 2) {
        console.error(
          'FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting'
        ),
          (Wd = !0),
          setTimeout(function () {
            Wd = !1;
          }, 1);
        return;
      }
      Vd++, Um(r.node, n.focusOptions), Vd--;
    }
  };
function Qi(e) {
  if (!e) return null;
  if (typeof WeakRef > 'u')
    return function () {
      return e || null;
    };
  var t = e ? new WeakRef(e) : null;
  return function () {
    return (t == null ? void 0 : t.deref()) || null;
  };
}
var RO = function (e) {
    if (!e) return null;
    for (var t = [], n = e; n && n !== document.body; )
      t.push({
        current: Qi(n),
        parent: Qi(n.parentElement),
        left: Qi(n.previousElementSibling),
        right: Qi(n.nextElementSibling),
      }),
        (n = n.parentElement);
    return { element: Qi(e), stack: t, ownerDocument: e.ownerDocument };
  },
  MO = function (e) {
    var t, n, r, o, i;
    if (e)
      for (var s = e.stack, a = e.ownerDocument, l = new Map(), c = 0, u = s; c < u.length; c++) {
        var d = u[c],
          f = (t = d.parent) === null || t === void 0 ? void 0 : t.call(d);
        if (f && a.contains(f)) {
          for (
            var p = (n = d.left) === null || n === void 0 ? void 0 : n.call(d),
              v = d.current(),
              g = f.contains(v) ? v : void 0,
              w = (r = d.right) === null || r === void 0 ? void 0 : r.call(d),
              m = Bm([f], l),
              h =
                (i =
                  (o = g ?? (p == null ? void 0 : p.nextElementSibling)) !== null && o !== void 0
                    ? o
                    : w) !== null && i !== void 0
                  ? i
                  : p;
            h;

          ) {
            for (var y = 0, k = m; y < k.length; y++) {
              var P = k[y];
              if (h != null && h.contains(P.node)) return P.node;
            }
            h = h.nextElementSibling;
          }
          if (m.length) return m[0].node;
        }
      }
  },
  gk = function (e) {
    var t = RO(e);
    return function () {
      return MO(t);
    };
  },
  jO = function (e, t, n) {
    if (!e || !t) return console.error('no element or scope given'), {};
    var r = uo(t);
    if (
      r.every(function (s) {
        return !eo(s, e);
      })
    )
      return console.error('Active element is not contained in the scope'), {};
    var o = n ? Bm(r, new Map()) : aa(r, new Map()),
      i = o.findIndex(function (s) {
        var a = s.node;
        return a === e;
      });
    if (i !== -1) return { prev: o[i - 1], next: o[i + 1], first: o[0], last: o[o.length - 1] };
  },
  zO = function (e, t) {
    var n = t ? Bm(uo(e), new Map()) : aa(uo(e), new Map());
    return { first: n[0], last: n[n.length - 1] };
  },
  FO = function (e) {
    return Object.assign({ scope: document.body, cycle: !0, onlyTabbable: !0 }, e);
  },
  yk = function (e, t, n) {
    t === void 0 && (t = {});
    var r = FO(t),
      o = jO(e, r.scope, r.onlyTabbable);
    if (o) {
      var i = n(o, r.cycle);
      i && Um(i.node, r.focusOptions);
    }
  },
  IO = function (e, t) {
    t === void 0 && (t = {}),
      yk(e, t, function (n, r) {
        var o = n.next,
          i = n.first;
        return o || (r && i);
      });
  },
  DO = function (e, t) {
    t === void 0 && (t = {}),
      yk(e, t, function (n, r) {
        var o = n.prev,
          i = n.last;
        return o || (r && i);
      });
  },
  vk = function (e, t, n) {
    var r,
      o = zO(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0),
      i = o[n];
    i && Um(i.node, t.focusOptions);
  },
  LO = function (e, t) {
    t === void 0 && (t = {}), vk(e, t, 'first');
  },
  OO = function (e, t) {
    t === void 0 && (t = {}), vk(e, t, 'last');
  };
function Hm(e) {
  setTimeout(e, 1);
}
var NO = function (t) {
    return t && 'current' in t ? t.current : t;
  },
  bk = function () {
    return document && document.activeElement === document.body;
  },
  BO = function () {
    return bk() || kO();
  },
  ci = null,
  kt = null,
  Mv = function () {
    return null;
  },
  ui = null,
  ca = !1,
  Gm = !1,
  VO = function () {
    return !0;
  },
  WO = function (t) {
    return (ci.whiteList || VO)(t);
  },
  UO = function (t, n) {
    ui = { observerNode: t, portaledElement: n };
  },
  HO = function (t) {
    return ui && ui.portaledElement === t;
  };
function jv(e, t, n, r) {
  var o = null,
    i = e;
  do {
    var s = r[i];
    if (s.guard) s.node.dataset.focusAutoGuard && (o = s);
    else if (s.lockItem) {
      if (i !== e) return;
      o = null;
    } else break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var GO = function (t) {
    return t ? !!ca : ca === 'meanwhile';
  },
  KO = function e(t, n, r) {
    return (
      n &&
      ((n.host === t && (!n.activeElement || r.contains(n.activeElement))) ||
        (n.parentNode && e(t, n.parentNode, r)))
    );
  },
  YO = function (t, n) {
    return n.some(function (r) {
      return KO(t, r, r);
    });
  },
  Sk = function (t) {
    return aa(t, new Map());
  },
  XO = function (t) {
    return !Sk([t.parentNode]).some(function (n) {
      return n.node === t;
    });
  },
  Ac = function () {
    var t = !1;
    if (ci) {
      var n = ci,
        r = n.observed,
        o = n.persistentFocus,
        i = n.autoFocus,
        s = n.shards,
        a = n.crossFrame,
        l = n.focusOptions,
        c = n.noFocusGuards,
        u = r || (ui && ui.portaledElement);
      if (bk() && kt && (!document.body.contains(kt) || XO(kt))) {
        kt = null;
        var d = Mv();
        d && d.focus();
      }
      var f = document && document.activeElement;
      if (u) {
        var p = [u].concat(s.map(NO).filter(Boolean)),
          v = function () {
            if (!GO(a) || !c || !kt || Gm) return !1;
            var y = Sk(p),
              k = y.findIndex(function (P) {
                var $ = P.node;
                return $ === kt;
              });
            return k === 0 || k === y.length - 1;
          };
        if (
          ((!f || WO(f)) &&
            (o || v() || !BO() || (!kt && i)) &&
            (u &&
              !(hk(p) || (f && YO(f, p)) || HO(f)) &&
              (document && !kt && f && !i
                ? (f.blur && f.blur(), document.body.focus())
                : ((t = mk(p, kt, { focusOptions: l })), (ui = {}))),
            (ca = !1),
            (kt = document && document.activeElement),
            (Mv = gk(kt))),
          document &&
            f !== document.activeElement &&
            document.querySelector('[data-focus-auto-guard]'))
        ) {
          var g = document && document.activeElement,
            w = AO(p),
            m = w
              .map(function (h) {
                var y = h.node;
                return y;
              })
              .indexOf(g);
          m > -1 &&
            (w
              .filter(function (h) {
                var y = h.guard,
                  k = h.node;
                return y && k.dataset.focusAutoGuard;
              })
              .forEach(function (h) {
                var y = h.node;
                return y.removeAttribute('tabIndex');
              }),
            jv(m, w.length, 1, w),
            jv(m, -1, -1, w));
        }
      }
    }
    return t;
  },
  xk = function (t) {
    Ac() && t && (t.stopPropagation(), t.preventDefault());
  },
  Km = function () {
    return Hm(Ac);
  },
  qO = function (t) {
    var n = t.target,
      r = t.currentTarget;
    r.contains(n) || UO(r, n);
  },
  QO = function () {
    return null;
  },
  wk = function () {
    Gm = !0;
  },
  kk = function () {
    (Gm = !1),
      (ca = 'just'),
      Hm(function () {
        ca = 'meanwhile';
      });
  },
  ZO = function () {
    document.addEventListener('focusin', xk),
      document.addEventListener('focusout', Km),
      window.addEventListener('focus', wk),
      window.addEventListener('blur', kk);
  },
  JO = function () {
    document.removeEventListener('focusin', xk),
      document.removeEventListener('focusout', Km),
      window.removeEventListener('focus', wk),
      window.removeEventListener('blur', kk);
  };
function eN(e) {
  return e.filter(function (t) {
    var n = t.disabled;
    return !n;
  });
}
var Ck = {
  moveFocusInside: mk,
  focusInside: hk,
  focusNextElement: IO,
  focusPrevElement: DO,
  focusFirstElement: LO,
  focusLastElement: OO,
  captureFocusRestore: gk,
};
function tN(e) {
  var t = e.slice(-1)[0];
  t && !ci && ZO();
  var n = ci,
    r = n && t && t.id === n.id;
  (ci = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (o) {
        var i = o.id;
        return i === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((kt = null), (!r || n.observed !== t.observed) && t.onActivation(Ck), Ac(), Hm(Ac))
      : (JO(), (kt = null));
}
tk.assignSyncMedium(qO);
nk.assignMedium(Km);
XL.assignMedium(function (e) {
  return e(Ck);
});
const nN = rO(eN, tN)(QO);
var Ph = S.forwardRef(function (t, n) {
    return S.createElement(Im, ro({ sideCar: nN, ref: n }, t));
  }),
  Tk = Im.propTypes || {};
Tk.sideCar;
BL(Tk, ['sideCar']);
Ph.propTypes = {};
const rN = Ph.default ?? Ph,
  Pk = (e) => {
    const {
        initialFocusRef: t,
        finalFocusRef: n,
        contentRef: r,
        restoreFocus: o,
        children: i,
        isDisabled: s,
        autoFocus: a,
        persistentFocus: l,
        lockFocusAcrossFrames: c,
      } = e,
      u = S.useCallback(() => {
        t != null && t.current
          ? t.current.focus()
          : r != null &&
            r.current &&
            JT(r.current).length === 0 &&
            requestAnimationFrame(() => {
              var v;
              (v = r.current) == null || v.focus();
            });
      }, [t, r]),
      d = S.useCallback(() => {
        var p;
        (p = n == null ? void 0 : n.current) == null || p.focus();
      }, [n]),
      f = o && !n;
    return b.jsx(rN, {
      crossFrame: c,
      persistentFocus: l,
      autoFocus: a,
      disabled: s,
      onActivation: u,
      onDeactivation: d,
      returnFocus: f,
      children: i,
    });
  };
Pk.displayName = 'FocusLock';
const _k = Y(function (t, n) {
  const r = po('FormLabel', t),
    o = Yt(t),
    {
      className: i,
      children: s,
      requiredIndicator: a = b.jsx(Ek, {}),
      optionalIndicator: l = null,
      ...c
    } = o,
    u = xu(),
    d = (u == null ? void 0 : u.getLabelProps(c, n)) ?? { ref: n, ...c };
  return b.jsxs(V.label, {
    ...d,
    className: ue('chakra-form__label', o.className),
    __css: { display: 'block', textAlign: 'start', ...r },
    children: [s, u != null && u.isRequired ? a : l],
  });
});
_k.displayName = 'FormLabel';
const Ek = Y(function (t, n) {
  const r = xu(),
    o = Ww();
  if (!(r != null && r.isRequired)) return null;
  const i = ue('chakra-form__required-indicator', t.className);
  return b.jsx(V.span, {
    ...(r == null ? void 0 : r.getRequiredIndicatorProps(t, n)),
    __css: o.requiredIndicator,
    className: i,
  });
});
Ek.displayName = 'RequiredIndicator';
function Ca(e) {
  const { viewBox: t = '0 0 24 24', d: n, displayName: r, defaultProps: o = {} } = e,
    i = S.Children.toArray(e.path),
    s = Y((a, l) =>
      b.jsx(Ri, {
        ref: l,
        viewBox: t,
        ...o,
        ...a,
        children: i.length ? i : b.jsx('path', { fill: 'currentColor', d: n }),
      })
    );
  return (s.displayName = r), s;
}
const Ym = Y(function (t, n) {
  const { htmlSize: r, ...o } = t,
    i = mo('Input', o),
    s = Yt(o),
    a = Hw(s),
    l = ue('chakra-input', t.className);
  return b.jsx(V.input, { size: r, ...a, __css: i.field, ref: n, className: l });
});
Ym.displayName = 'Input';
Ym.id = 'Input';
var oN = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  To = new WeakMap(),
  hl = new WeakMap(),
  pl = {},
  Ud = 0,
  $k = function (e) {
    return e && (e.host || $k(e.parentNode));
  },
  iN = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = $k(n);
        return r && e.contains(r)
          ? r
          : (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  sN = function (e, t, n, r) {
    var o = iN(t, Array.isArray(e) ? e : [e]);
    pl[n] || (pl[n] = new WeakMap());
    var i = pl[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      c = function (d) {
        !d || a.has(d) || (a.add(d), c(d.parentNode));
      };
    o.forEach(c);
    var u = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) u(f);
          else
            try {
              var p = f.getAttribute(r),
                v = p !== null && p !== 'false',
                g = (To.get(f) || 0) + 1,
                w = (i.get(f) || 0) + 1;
              To.set(f, g),
                i.set(f, w),
                s.push(f),
                g === 1 && v && hl.set(f, !0),
                w === 1 && f.setAttribute(n, 'true'),
                v || f.setAttribute(r, 'true');
            } catch (m) {
              console.error('aria-hidden: cannot operate on ', f, m);
            }
        });
    };
    return (
      u(t),
      a.clear(),
      Ud++,
      function () {
        s.forEach(function (d) {
          var f = To.get(d) - 1,
            p = i.get(d) - 1;
          To.set(d, f),
            i.set(d, p),
            f || (hl.has(d) || d.removeAttribute(r), hl.delete(d)),
            p || d.removeAttribute(n);
        }),
          Ud--,
          Ud || ((To = new WeakMap()), (To = new WeakMap()), (hl = new WeakMap()), (pl = {}));
      }
    );
  },
  aN = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = oN(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))), sN(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  lN = Object.defineProperty,
  cN = (e, t, n) =>
    t in e ? lN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  uN = (e, t, n) => (cN(e, t + '', n), n);
class dN {
  constructor() {
    uN(this, 'modals'), (this.modals = new Set());
  }
  add(t) {
    return this.modals.add(t), this.modals.size;
  }
  remove(t) {
    this.modals.delete(t);
  }
  isTopModal(t) {
    if (!t) return !1;
    const n = Array.from(this.modals)[this.modals.size - 1];
    return t === n;
  }
}
const _h = new dN();
function Ak(e, t) {
  const [n, r] = S.useState(0);
  return (
    S.useEffect(() => {
      const o = e.current;
      if (o) {
        if (t) {
          const i = _h.add(o);
          r(i);
        }
        return () => {
          _h.remove(o), r(0);
        };
      }
    }, [t, e]),
    n
  );
}
function fN(e) {
  const {
      isOpen: t,
      onClose: n,
      id: r,
      closeOnOverlayClick: o = !0,
      closeOnEsc: i = !0,
      useInert: s = !0,
      onOverlayClick: a,
      onEsc: l,
    } = e,
    c = S.useRef(null),
    u = S.useRef(null),
    [d, f, p] = pN(r, 'chakra-modal', 'chakra-modal--header', 'chakra-modal--body');
  hN(c, t && s);
  const v = Ak(c, t),
    g = S.useRef(null),
    w = S.useCallback((j) => {
      g.current = j.target;
    }, []),
    m = S.useCallback(
      (j) => {
        j.key === 'Escape' && (j.stopPropagation(), i && (n == null || n()), l == null || l());
      },
      [i, n, l]
    ),
    [h, y] = S.useState(!1),
    [k, P] = S.useState(!1),
    $ = S.useCallback(
      (j = {}, z = null) => ({
        role: 'dialog',
        ...j,
        ref: to(z, c),
        id: d,
        tabIndex: -1,
        'aria-modal': !0,
        'aria-labelledby': h ? f : void 0,
        'aria-describedby': k ? p : void 0,
        onClick: He(j.onClick, (Q) => Q.stopPropagation()),
      }),
      [p, k, d, f, h]
    ),
    _ = S.useCallback(
      (j) => {
        j.stopPropagation(),
          g.current === j.target &&
            _h.isTopModal(c.current) &&
            (o && (n == null || n()), a == null || a());
      },
      [n, o, a]
    ),
    A = S.useCallback(
      (j = {}, z = null) => ({
        ...j,
        ref: to(z, u),
        onClick: He(j.onClick, _),
        onKeyDown: He(j.onKeyDown, m),
        onMouseDown: He(j.onMouseDown, w),
      }),
      [m, w, _]
    );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: p,
    setBodyMounted: P,
    setHeaderMounted: y,
    dialogRef: c,
    overlayRef: u,
    getDialogProps: $,
    getDialogContainerProps: A,
    index: v,
  };
}
function hN(e, t) {
  const n = e.current;
  S.useEffect(() => {
    if (!(!e.current || !t)) return aN(e.current);
  }, [t, e, n]);
}
function pN(e, ...t) {
  const n = S.useId(),
    r = e || n;
  return S.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
const [mN, Ta] = Rt({
    name: 'ModalStylesContext',
    errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
  }),
  [gN, Pi] = Rt({
    strict: !0,
    name: 'ModalContext',
    errorMessage:
      'useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`',
  }),
  Rk = (e) => {
    const t = {
        scrollBehavior: 'outside',
        autoFocus: !0,
        trapFocus: !0,
        returnFocusOnClose: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        preserveScrollBarGap: !0,
        motionPreset: 'scale',
        ...e,
        lockFocusAcrossFrames: e.lockFocusAcrossFrames || !0,
      },
      {
        portalProps: n,
        children: r,
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: s,
        finalFocusRef: a,
        returnFocusOnClose: l,
        blockScrollOnMount: c,
        allowPinchZoom: u,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: p,
        animatePresenceProps: v,
        onCloseComplete: g,
      } = t,
      w = mo('Modal', t),
      h = {
        ...fN(t),
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: s,
        finalFocusRef: a,
        returnFocusOnClose: l,
        blockScrollOnMount: c,
        allowPinchZoom: u,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: p,
      };
    return b.jsx(gN, {
      value: h,
      children: b.jsx(mN, {
        value: w,
        children: b.jsx(ya, {
          ...v,
          onExitComplete: g,
          children: h.isOpen && b.jsx(wa, { ...n, children: r }),
        }),
      }),
    });
  };
Rk.displayName = 'Modal';
var Hl = 'right-scroll-bar-position',
  Gl = 'width-before-scroll-bar',
  yN = 'with-scroll-bars-hidden',
  vN = '--removed-body-scroll-bar-size',
  Mk = Jw(),
  Hd = function () {},
  wu = S.forwardRef(function (e, t) {
    var n = S.useRef(null),
      r = S.useState({ onScrollCapture: Hd, onWheelCapture: Hd, onTouchMoveCapture: Hd }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      c = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noIsolation,
      v = e.inert,
      g = e.allowPinchZoom,
      w = e.as,
      m = w === void 0 ? 'div' : w,
      h = e.gapMode,
      y = qw(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      k = f,
      P = Xw([n, t]),
      $ = vn(vn({}, y), o);
    return S.createElement(
      S.Fragment,
      null,
      u &&
        S.createElement(k, {
          sideCar: Mk,
          removeScrollBar: c,
          shards: d,
          noIsolation: p,
          inert: v,
          setCallbacks: i,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: h,
        }),
      s
        ? S.cloneElement(S.Children.only(a), vn(vn({}, $), { ref: P }))
        : S.createElement(m, vn({}, $, { className: l, ref: P }), a)
    );
  });
wu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
wu.classNames = { fullWidth: Gl, zeroRight: Hl };
var bN = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function SN() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = bN();
  return t && e.setAttribute('nonce', t), e;
}
function xN(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function wN(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var kN = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = SN()) && (xN(t, n), wN(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  CN = function () {
    var e = kN();
    return function (t, n) {
      S.useEffect(
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
  jk = function () {
    var e = CN(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  TN = { left: 0, top: 0, right: 0, gap: 0 },
  Gd = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  PN = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Gd(n), Gd(r), Gd(o)];
  },
  _N = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return TN;
    var t = PN(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  EN = jk(),
  di = 'data-scroll-locked',
  $N = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          yN,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          di,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, 'px ')
                .concat(
                  r,
                  `;
    `
                ),
            n === 'padding' && 'padding-right: '.concat(a, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          Hl,
          ` {
    right: `
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Gl,
          ` {
    margin-right: `
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Hl, ' .')
        .concat(
          Hl,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Gl, ' .')
        .concat(
          Gl,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          di,
          `] {
    `
        )
        .concat(vN, ': ')
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  zv = function () {
    var e = parseInt(document.body.getAttribute(di) || '0', 10);
    return isFinite(e) ? e : 0;
  },
  AN = function () {
    S.useEffect(function () {
      return (
        document.body.setAttribute(di, (zv() + 1).toString()),
        function () {
          var e = zv() - 1;
          e <= 0 ? document.body.removeAttribute(di) : document.body.setAttribute(di, e.toString());
        }
      );
    }, []);
  },
  RN = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r;
    AN();
    var i = S.useMemo(
      function () {
        return _N(o);
      },
      [o]
    );
    return S.createElement(EN, { styles: $N(i, !t, o, n ? '' : '!important') });
  },
  Eh = !1;
if (typeof window < 'u')
  try {
    var ml = Object.defineProperty({}, 'passive', {
      get: function () {
        return (Eh = !0), !0;
      },
    });
    window.addEventListener('test', ml, ml), window.removeEventListener('test', ml, ml);
  } catch {
    Eh = !1;
  }
var Po = Eh ? { passive: !1 } : !1,
  MN = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  zk = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !MN(e) && n[t] === 'visible');
  },
  jN = function (e) {
    return zk(e, 'overflowY');
  },
  zN = function (e) {
    return zk(e, 'overflowX');
  },
  Fv = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
      var o = Fk(e, r);
      if (o) {
        var i = Ik(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  FN = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  IN = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Fk = function (e, t) {
    return e === 'v' ? jN(t) : zN(t);
  },
  Ik = function (e, t) {
    return e === 'v' ? FN(t) : IN(t);
  },
  DN = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  LN = function (e, t, n, r, o) {
    var i = DN(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      c = !1,
      u = s > 0,
      d = 0,
      f = 0;
    do {
      var p = Ik(e, a),
        v = p[0],
        g = p[1],
        w = p[2],
        m = g - w - i * v;
      (v || m) && Fk(e, a) && ((d += m), (f += v)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return ((u && (Math.abs(d) < 1 || !o)) || (!u && (Math.abs(f) < 1 || !o))) && (c = !0), c;
  },
  gl = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Iv = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Dv = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  ON = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  NN = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  BN = 0,
  _o = [];
function VN(e) {
  var t = S.useRef([]),
    n = S.useRef([0, 0]),
    r = S.useRef(),
    o = S.useState(BN++)[0],
    i = S.useState(jk)[0],
    s = S.useRef(e);
  S.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    S.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var g = KL([e.lockRef.current], (e.shards || []).map(Dv), !0).filter(Boolean);
          return (
            g.forEach(function (w) {
              return w.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                g.forEach(function (w) {
                  return w.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = S.useCallback(function (g, w) {
      if (('touches' in g && g.touches.length === 2) || (g.type === 'wheel' && g.ctrlKey))
        return !s.current.allowPinchZoom;
      var m = gl(g),
        h = n.current,
        y = 'deltaX' in g ? g.deltaX : h[0] - m[0],
        k = 'deltaY' in g ? g.deltaY : h[1] - m[1],
        P,
        $ = g.target,
        _ = Math.abs(y) > Math.abs(k) ? 'h' : 'v';
      if ('touches' in g && _ === 'h' && $.type === 'range') return !1;
      var A = Fv(_, $);
      if (!A) return !0;
      if ((A ? (P = _) : ((P = _ === 'v' ? 'h' : 'v'), (A = Fv(_, $))), !A)) return !1;
      if ((!r.current && 'changedTouches' in g && (y || k) && (r.current = P), !P)) return !0;
      var j = r.current || P;
      return LN(j, w, g, j === 'h' ? y : k, !0);
    }, []),
    l = S.useCallback(function (g) {
      var w = g;
      if (!(!_o.length || _o[_o.length - 1] !== i)) {
        var m = 'deltaY' in w ? Iv(w) : gl(w),
          h = t.current.filter(function (P) {
            return (
              P.name === w.type &&
              (P.target === w.target || w.target === P.shadowParent) &&
              ON(P.delta, m)
            );
          })[0];
        if (h && h.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!h) {
          var y = (s.current.shards || [])
              .map(Dv)
              .filter(Boolean)
              .filter(function (P) {
                return P.contains(w.target);
              }),
            k = y.length > 0 ? a(w, y[0]) : !s.current.noIsolation;
          k && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    c = S.useCallback(function (g, w, m, h) {
      var y = { name: g, delta: w, target: m, should: h, shadowParent: WN(m) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (k) {
            return k !== y;
          });
        }, 1);
    }, []),
    u = S.useCallback(function (g) {
      (n.current = gl(g)), (r.current = void 0);
    }, []),
    d = S.useCallback(function (g) {
      c(g.type, Iv(g), g.target, a(g, e.lockRef.current));
    }, []),
    f = S.useCallback(function (g) {
      c(g.type, gl(g), g.target, a(g, e.lockRef.current));
    }, []);
  S.useEffect(function () {
    return (
      _o.push(i),
      e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: f }),
      document.addEventListener('wheel', l, Po),
      document.addEventListener('touchmove', l, Po),
      document.addEventListener('touchstart', u, Po),
      function () {
        (_o = _o.filter(function (g) {
          return g !== i;
        })),
          document.removeEventListener('wheel', l, Po),
          document.removeEventListener('touchmove', l, Po),
          document.removeEventListener('touchstart', u, Po);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    v = e.inert;
  return S.createElement(
    S.Fragment,
    null,
    v ? S.createElement(i, { styles: NN(o) }) : null,
    p ? S.createElement(RN, { gapMode: e.gapMode }) : null
  );
}
function WN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const UN = YL(Mk, VN);
var Dk = S.forwardRef(function (e, t) {
  return S.createElement(wu, vn({}, e, { ref: t, sideCar: UN }));
});
Dk.classNames = wu.classNames;
function HN(e) {
  const {
      autoFocus: t,
      trapFocus: n,
      dialogRef: r,
      initialFocusRef: o,
      blockScrollOnMount: i,
      allowPinchZoom: s,
      finalFocusRef: a,
      returnFocusOnClose: l,
      preserveScrollBarGap: c,
      lockFocusAcrossFrames: u,
      isOpen: d,
    } = Pi(),
    [f, p] = sS();
  S.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const v = Ak(r, d);
  return b.jsx(Pk, {
    autoFocus: t,
    isDisabled: !n,
    initialFocusRef: o,
    finalFocusRef: a,
    restoreFocus: l,
    contentRef: r,
    lockFocusAcrossFrames: u,
    children: b.jsx(Dk, {
      removeScrollBar: !c,
      allowPinchZoom: s,
      enabled: v === 1 && i,
      forwardProps: !0,
      children: e.children,
    }),
  });
}
const GN = {
    initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => ({
      opacity: 0,
      x: e,
      y: t,
      transition: (n == null ? void 0 : n.exit) ?? Jr.exit(Zr.exit, o),
      transitionEnd: r == null ? void 0 : r.exit,
    }),
    enter: ({ transition: e, transitionEnd: t, delay: n }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: (e == null ? void 0 : e.enter) ?? Jr.enter(Zr.enter, n),
      transitionEnd: t == null ? void 0 : t.enter,
    }),
    exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
      const s = { x: t, y: e };
      return {
        opacity: 0,
        transition: (n == null ? void 0 : n.exit) ?? Jr.exit(Zr.exit, i),
        ...(o
          ? { ...s, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { ...s, ...(r == null ? void 0 : r.exit) } }),
      };
    },
  },
  us = { initial: 'initial', animate: 'enter', exit: 'exit', variants: GN },
  KN = S.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        className: s,
        offsetX: a = 0,
        offsetY: l = 8,
        transition: c,
        transitionEnd: u,
        delay: d,
        animatePresenceProps: f,
        ...p
      } = t,
      v = r ? o && r : !0,
      g = o || r ? 'enter' : 'exit',
      w = { offsetX: a, offsetY: l, reverse: i, transition: c, transitionEnd: u, delay: d };
    return b.jsx(ya, {
      ...f,
      custom: w,
      children:
        v &&
        b.jsx(Ai.div, {
          ref: n,
          className: ue('chakra-offset-slide', s),
          custom: w,
          ...us,
          animate: g,
          ...p,
        }),
    });
  });
KN.displayName = 'SlideFade';
const YN = {
    exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => ({
      opacity: 0,
      ...(e
        ? { scale: t, transitionEnd: r == null ? void 0 : r.exit }
        : { transitionEnd: { scale: t, ...(r == null ? void 0 : r.exit) } }),
      transition: (n == null ? void 0 : n.exit) ?? Jr.exit(Zr.exit, o),
    }),
    enter: ({ transitionEnd: e, transition: t, delay: n }) => ({
      opacity: 1,
      scale: 1,
      transition: (t == null ? void 0 : t.enter) ?? Jr.enter(Zr.enter, n),
      transitionEnd: e == null ? void 0 : e.enter,
    }),
  },
  Lk = { initial: 'exit', animate: 'enter', exit: 'exit', variants: YN },
  XN = S.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        initialScale: s = 0.95,
        className: a,
        transition: l,
        transitionEnd: c,
        delay: u,
        animatePresenceProps: d,
        ...f
      } = t,
      p = r ? o && r : !0,
      v = o || r ? 'enter' : 'exit',
      g = { initialScale: s, reverse: i, transition: l, transitionEnd: c, delay: u };
    return b.jsx(ya, {
      ...d,
      custom: g,
      children:
        p &&
        b.jsx(Ai.div, {
          ref: n,
          className: ue('chakra-offset-slide', a),
          ...Lk,
          animate: v,
          custom: g,
          ...f,
        }),
    });
  });
XN.displayName = 'ScaleFade';
const qN = {
    slideInBottom: { ...us, custom: { offsetY: 16, reverse: !0 } },
    slideInRight: { ...us, custom: { offsetX: 16, reverse: !0 } },
    slideInTop: { ...us, custom: { offsetY: -16, reverse: !0 } },
    slideInLeft: { ...us, custom: { offsetX: -16, reverse: !0 } },
    scale: { ...Lk, custom: { initialScale: 0.95, reverse: !0 } },
    none: {},
  },
  QN = V(Ai.section),
  ZN = (e) => qN[e || 'none'],
  Ok = S.forwardRef((e, t) => {
    const { preset: n, motionProps: r = ZN(n), ...o } = e;
    return b.jsx(QN, { ref: t, ...r, ...o });
  });
Ok.displayName = 'ModalTransition';
const Nk = Y((e, t) => {
  const { className: n, children: r, containerProps: o, motionProps: i, ...s } = e,
    { getDialogProps: a, getDialogContainerProps: l } = Pi(),
    c = a(s, t),
    u = l(o),
    d = ue('chakra-modal__content', n),
    f = Ta(),
    p = {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: '100%',
      outline: 0,
      ...f.dialog,
    },
    v = {
      display: 'flex',
      width: '100vw',
      height: '$100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      ...f.dialogContainer,
    },
    { motionPreset: g } = Pi();
  return b.jsx(HN, {
    children: b.jsx(V.div, {
      ...u,
      className: 'chakra-modal__content-container',
      tabIndex: -1,
      __css: v,
      children: b.jsx(Ok, { preset: g, motionProps: i, className: d, ...c, __css: p, children: r }),
    }),
  });
});
Nk.displayName = 'ModalContent';
const Bk = Y((e, t) => {
  const { className: n, ...r } = e,
    { bodyId: o, setBodyMounted: i } = Pi();
  S.useEffect(() => (i(!0), () => i(!1)), [i]);
  const s = ue('chakra-modal__body', n),
    a = Ta();
  return b.jsx(V.div, { ref: t, className: s, id: o, ...r, __css: a.body });
});
Bk.displayName = 'ModalBody';
const Vk = Y((e, t) => {
  const { className: n, ...r } = e,
    o = ue('chakra-modal__footer', n),
    i = Ta(),
    s = { display: 'flex', alignItems: 'center', justifyContent: 'flex-end', ...i.footer };
  return b.jsx(V.footer, { ref: t, ...r, __css: s, className: o });
});
Vk.displayName = 'ModalFooter';
const Wk = Y((e, t) => {
  const { className: n, ...r } = e,
    { headerId: o, setHeaderMounted: i } = Pi();
  S.useEffect(() => (i(!0), () => i(!1)), [i]);
  const s = ue('chakra-modal__header', n),
    a = Ta(),
    l = { flex: 0, ...a.header };
  return b.jsx(V.header, { ref: t, className: s, id: o, ...r, __css: l });
});
Wk.displayName = 'ModalHeader';
const JN = {
    enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => ({
      opacity: 1,
      transition: (e == null ? void 0 : e.enter) ?? Jr.enter(Zr.enter, n),
      transitionEnd: t == null ? void 0 : t.enter,
    }),
    exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => ({
      opacity: 0,
      transition: (e == null ? void 0 : e.exit) ?? Jr.exit(Zr.exit, n),
      transitionEnd: t == null ? void 0 : t.exit,
    }),
  },
  Uk = { initial: 'exit', animate: 'enter', exit: 'exit', variants: JN },
  eB = S.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        className: i,
        transition: s,
        transitionEnd: a,
        delay: l,
        animatePresenceProps: c,
        ...u
      } = t,
      d = o || r ? 'enter' : 'exit',
      f = r ? o && r : !0,
      p = { transition: s, transitionEnd: a, delay: l };
    return b.jsx(ya, {
      ...c,
      custom: p,
      children:
        f &&
        b.jsx(Ai.div, {
          ref: n,
          className: ue('chakra-fade', i),
          custom: p,
          ...Uk,
          animate: d,
          ...u,
        }),
    });
  });
eB.displayName = 'Fade';
const tB = V(Ai.div),
  Hk = Y((e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e,
      s = ue('chakra-modal__overlay', n),
      l = { pos: 'fixed', left: '0', top: '0', w: '100vw', h: '100vh', ...Ta().overlay },
      { motionPreset: c } = Pi(),
      d = o || (c === 'none' ? {} : Uk);
    return b.jsx(tB, { ...d, __css: l, ref: t, className: s, ...i });
  });
Hk.displayName = 'ModalOverlay';
function nB(e) {
  const { leastDestructiveRef: t, ...n } = e;
  return b.jsx(Rk, { ...n, initialFocusRef: t });
}
const rB = Y((e, t) => b.jsx(Nk, { ref: t, role: 'alertdialog', ...e })),
  Gk = Y(function (t, n) {
    const { children: r, placeholder: o, className: i, ...s } = t;
    return b.jsxs(V.select, {
      ...s,
      ref: n,
      className: ue('chakra-select', i),
      children: [o && b.jsx('option', { value: '', children: o }), r],
    });
  });
Gk.displayName = 'SelectField';
const Kk = Y((e, t) => {
  var y;
  const n = mo('Select', e),
    {
      rootProps: r,
      placeholder: o,
      icon: i,
      color: s,
      height: a,
      h: l,
      minH: c,
      minHeight: u,
      iconColor: d,
      iconSize: f,
      ...p
    } = Yt(e),
    [v, g] = s2(p, K2),
    w = Hw(g),
    m = { width: '100%', height: 'fit-content', position: 'relative', color: s },
    h = {
      paddingEnd: '2rem',
      ...n.field,
      _focus: { zIndex: 'unset', ...((y = n.field) == null ? void 0 : y._focus) },
    };
  return b.jsxs(V.div, {
    className: 'chakra-select__wrapper',
    __css: m,
    ...v,
    ...r,
    children: [
      b.jsx(Gk, {
        ref: t,
        height: l ?? a,
        minH: c ?? u,
        placeholder: o,
        ...w,
        __css: h,
        children: e.children,
      }),
      b.jsx(Yk, {
        'data-disabled': G(w.disabled),
        ...((d || s) && { color: d || s }),
        __css: n.icon,
        ...(f && { fontSize: f }),
        children: i,
      }),
    ],
  });
});
Kk.displayName = 'Select';
const oB = (e) =>
    b.jsx('svg', {
      viewBox: '0 0 24 24',
      ...e,
      children: b.jsx('path', {
        fill: 'currentColor',
        d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
      }),
    }),
  iB = V('div', {
    baseStyle: {
      position: 'absolute',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  }),
  Yk = (e) => {
    const { children: t = b.jsx(oB, {}), ...n } = e,
      r = S.cloneElement(t, {
        role: 'presentation',
        className: 'chakra-select__icon',
        focusable: !1,
        'aria-hidden': !0,
        style: { width: '1em', height: '1em', color: 'currentColor' },
      });
    return b.jsx(iB, {
      ...n,
      className: 'chakra-select__icon-wrapper',
      children: S.isValidElement(t) ? r : null,
    });
  };
Yk.displayName = 'SelectIcon';
const Xk = (e) =>
  b.jsx(V.div, {
    className: 'chakra-stack__item',
    ...e,
    __css: { display: 'inline-block', flex: '0 0 auto', minWidth: 0, ...e.__css },
  });
Xk.displayName = 'StackItem';
function sB(e) {
  const { spacing: t, direction: n } = e,
    r = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
      'column-reverse': { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
      row: { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
      'row-reverse': { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
    };
  return { '&': o2(n, (o) => r[o]) };
}
const Xm = Y((e, t) => {
  const {
      isInline: n,
      direction: r,
      align: o,
      justify: i,
      spacing: s = '0.5rem',
      wrap: a,
      children: l,
      divider: c,
      className: u,
      shouldWrapChildren: d,
      ...f
    } = e,
    p = n ? 'row' : (r ?? 'column'),
    v = S.useMemo(() => sB({ spacing: s, direction: p }), [s, p]),
    g = !!c,
    w = !d && !g,
    m = S.useMemo(() => {
      const y = GT(l);
      return w
        ? y
        : y.map((k, P) => {
            const $ = typeof k.key < 'u' ? k.key : P,
              _ = P + 1 === y.length,
              j = d ? b.jsx(Xk, { children: k }, $) : k;
            if (!g) return j;
            const z = S.cloneElement(c, { __css: v }),
              Q = _ ? null : z;
            return b.jsxs(S.Fragment, { children: [j, Q] }, $);
          });
    }, [c, v, g, w, d, l]),
    h = ue('chakra-stack', u);
  return b.jsx(V.div, {
    ref: t,
    display: 'flex',
    alignItems: o,
    justifyContent: i,
    flexDirection: p,
    flexWrap: a,
    gap: g ? void 0 : s,
    className: h,
    ...f,
    children: m,
  });
});
Xm.displayName = 'Stack';
const qk = Y((e, t) => b.jsx(Xm, { align: 'center', ...e, direction: 'row', ref: t }));
qk.displayName = 'HStack';
const qm = Y((e, t) => b.jsx(Xm, { align: 'center', ...e, direction: 'column', ref: t }));
qm.displayName = 'VStack';
const [aB, Pa] = Rt({
    name: 'TableStylesContext',
    errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `,
  }),
  Qm = Y((e, t) => {
    const n = mo('Table', e),
      { className: r, layout: o, ...i } = Yt(e);
    return b.jsx(aB, {
      value: n,
      children: b.jsx(V.table, {
        ref: t,
        __css: { tableLayout: o, ...n.table },
        className: ue('chakra-table', r),
        ...i,
      }),
    });
  });
Qm.displayName = 'Table';
const Qk = Y((e, t) => {
    const n = Pa();
    return b.jsx(V.tbody, { ...e, ref: t, __css: n.tbody });
  }),
  Zk = Y(({ isNumeric: e, ...t }, n) => {
    const r = Pa();
    return b.jsx(V.td, { ...t, ref: n, __css: r.td, 'data-is-numeric': e });
  }),
  Jk = Y(({ isNumeric: e, ...t }, n) => {
    const r = Pa();
    return b.jsx(V.th, { ...t, ref: n, __css: r.th, 'data-is-numeric': e });
  }),
  eC = Y((e, t) => {
    const n = Pa();
    return b.jsx(V.thead, { ...e, ref: t, __css: n.thead });
  }),
  Rc = Y((e, t) => {
    const n = Pa();
    return b.jsx(V.tr, { ...e, ref: t, __css: n.tr });
  });
function lB(e, t) {
  const n = e ?? 'bottom',
    o = {
      'top-start': { ltr: 'top-left', rtl: 'top-right' },
      'top-end': { ltr: 'top-right', rtl: 'top-left' },
      'bottom-start': { ltr: 'bottom-left', rtl: 'bottom-right' },
      'bottom-end': { ltr: 'bottom-right', rtl: 'bottom-left' },
    }[n];
  return (o == null ? void 0 : o[t]) ?? n;
}
function cB(e, t) {
  const n = (o) => ({
      ...t,
      ...o,
      position: lB((o == null ? void 0 : o.position) ?? (t == null ? void 0 : t.position), e),
    }),
    r = (o) => {
      const i = n(o),
        s = NS(i);
      return gn.notify(s, i);
    };
  return (
    (r.update = (o, i) => {
      gn.update(o, n(i));
    }),
    (r.promise = (o, i) => {
      const s = r({ ...i.loading, status: 'loading', duration: null });
      o.then((a) => r.update(s, { status: 'success', duration: 5e3, ...Vt(i.success, a) })).catch(
        (a) => r.update(s, { status: 'error', duration: 5e3, ...Vt(i.error, a) })
      );
    }),
    (r.closeAll = gn.closeAll),
    (r.close = gn.close),
    (r.isActive = gn.isActive),
    r
  );
}
function tC(e) {
  const { theme: t } = IS(),
    n = cL();
  return S.useMemo(() => cB(t.direction, { ...n, ...e }), [e, t.direction, n]);
}
const _a = Y(function (t, n) {
  const r = po('Heading', t),
    { className: o, ...i } = Yt(t);
  return b.jsx(V.h2, { ref: n, className: ue('chakra-heading', t.className), ...i, __css: r });
});
_a.displayName = 'Heading';
const Ne = Y(function (t, n) {
  const r = po('Text', t),
    { className: o, align: i, decoration: s, casing: a, ...l } = Yt(t),
    c = jc({ textAlign: t.align, textDecoration: t.decoration, textTransform: t.casing });
  return b.jsx(V.p, { ref: n, className: ue('chakra-text', t.className), ...c, ...l, __css: r });
});
Ne.displayName = 'Text';
var $h = {},
  Lv = Rm;
($h.createRoot = Lv.createRoot), ($h.hydrateRoot = Lv.hydrateRoot);
const uB = Ca({
    displayName: 'DeleteIcon',
    path: b.jsx('g', {
      fill: 'currentColor',
      children: b.jsx('path', {
        d: 'M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z',
      }),
    }),
  }),
  dB = Ca({
    displayName: 'EditIcon',
    path: b.jsxs('g', {
      fill: 'none',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '2',
      children: [
        b.jsx('path', { d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' }),
        b.jsx('path', { d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' }),
      ],
    }),
  }),
  fB = Ca({ d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z', displayName: 'ChevronLeftIcon' }),
  hB = Ca({ d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z', displayName: 'ChevronRightIcon' }),
  Zm = Ca({
    displayName: 'BellIcon',
    d: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
  }),
  Kl = (e) => b.jsx(Kk, { ...e }),
  br = ({ children: e, ...t }) => b.jsx(qk, { ...t, children: e }),
  fo = ({ children: e, ...t }) => b.jsx(qm, { ...t, children: e }),
  pB = ({ view: e, onViewChange: t, onNavigate: n }) =>
    b.jsxs(br, {
      mx: 'auto',
      justifyContent: 'space-between',
      children: [
        b.jsx(ia, { 'aria-label': 'Previous', icon: b.jsx(fB, {}), onClick: () => n('prev') }),
        b.jsxs(Kl, {
          'aria-label': 'view',
          value: e,
          onChange: (r) => t(r.target.value),
          children: [
            b.jsx('option', { value: 'week', children: 'Week' }),
            b.jsx('option', { value: 'month', children: 'Month' }),
          ],
        }),
        b.jsx(ia, { 'aria-label': 'Next', icon: b.jsx(hB, {}), onClick: () => n('next') }),
      ],
    });
function mB(e, t) {
  return new Date(e, t, 0).getDate();
}
function nC(e) {
  const t = e.getDay(),
    n = e.getDate() - t,
    r = new Date(e.setDate(n)),
    o = [];
  for (let i = 0; i < 7; i++) {
    const s = new Date(r);
    s.setDate(r.getDate() + i), o.push(s);
  }
  return o;
}
function gB(e, t) {
  return e.filter((n) => new Date(n.date).getDate() === t);
}
function yB(e) {
  const t = e.getFullYear(),
    n = e.getMonth(),
    r = mB(t, n + 1),
    o = new Date(t, n, 1).getDay(),
    i = Array.from({ length: r }, (c, u) => u + 1),
    s = [],
    a = () => Array(7).fill(null);
  let l = a();
  for (let c = 0; c < o; c++) l[c] = null;
  for (const c of i) {
    const u = (o + c - 1) % 7;
    (l[u] = c), (u === 6 || c === r) && (s.push(l), (l = a()));
  }
  return s;
}
const Kd = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate());
function vB(e, t, n) {
  const r = Kd(e),
    o = Kd(t),
    i = Kd(n);
  return r >= o && r <= i;
}
const bB = ['업무', '개인', '가족', '기타'],
  rC = ['일', '월', '화', '수', '목', '금', '토'],
  oC = [
    { value: 1, label: '1분 전' },
    { value: 10, label: '10분 전' },
    { value: 60, label: '1시간 전' },
    { value: 120, label: '2시간 전' },
    { value: 1440, label: '1일 전' },
  ];
function Ov(e, t = 2) {
  return String(e).padStart(t, '0');
}
function SB(e, t) {
  return [e.getFullYear(), Ov(e.getMonth() + 1), Ov(t ?? e.getDate())].join('-');
}
function xB(e) {
  const t = e.getFullYear(),
    n = e.getMonth() + 1;
  return `${t}년 ${n}월`;
}
function wB(e) {
  const n = 4 - e.getDay(),
    r = new Date(e);
  r.setDate(e.getDate() + n);
  const o = r.getFullYear(),
    i = r.getMonth() + 1,
    s = new Date(r.getFullYear(), r.getMonth(), 1),
    a = new Date(s);
  a.setDate(1 + ((4 - s.getDay() + 7) % 7));
  const l = Math.floor((r.getTime() - a.getTime()) / (7 * 24 * 60 * 60 * 1e3)) + 1;
  return `${o}년 ${i}월 ${l}주`;
}
const kB = ({ currentDate: e, events: t, holidays: n, notifiedEvents: r }) => {
    const o = yB(e);
    return b.jsxs(fo, {
      'data-testid': 'month-view',
      align: 'stretch',
      w: 'full',
      spacing: 4,
      children: [
        b.jsx(_a, { size: 'md', children: xB(e) }),
        b.jsxs(Qm, {
          variant: 'simple',
          w: 'full',
          children: [
            b.jsx(eC, {
              children: b.jsx(Rc, {
                children: rC.map((i) => b.jsx(Jk, { width: '14.28%', children: i }, i)),
              }),
            }),
            b.jsx(Qk, {
              children: o.map((i, s) =>
                b.jsx(
                  Rc,
                  {
                    children: i.map((a, l) => {
                      const c = a ? SB(e, a) : '',
                        u = n[c];
                      return b.jsx(
                        Zk,
                        {
                          height: '100px',
                          verticalAlign: 'top',
                          width: '14.28%',
                          position: 'relative',
                          children:
                            a &&
                            b.jsxs(b.Fragment, {
                              children: [
                                b.jsx(Ne, { fontWeight: 'bold', children: a }),
                                u && b.jsx(Ne, { color: 'red.500', fontSize: 'sm', children: u }),
                                gB(t, a).map((d) => {
                                  var p, v, g, w, m;
                                  const f = r.includes(d.id);
                                  return b.jsx(
                                    Su,
                                    {
                                      p: 1,
                                      my: 1,
                                      bg: f ? 'red.100' : 'gray.100',
                                      borderRadius: 'md',
                                      fontWeight: f ? 'bold' : 'normal',
                                      color: f ? 'red.500' : 'inherit',
                                      children: b.jsxs(br, {
                                        spacing: 1,
                                        children: [
                                          f && b.jsx(Zm, {}),
                                          ((p = d.repeat) == null ? void 0 : p.type) !== 'none' &&
                                            b.jsxs(Ne, {
                                              fontSize: 'xs',
                                              color: 'gray.500',
                                              children: [
                                                ((v = d.repeat) == null ? void 0 : v.type) ===
                                                  'daily' && '매일',
                                                ((g = d.repeat) == null ? void 0 : g.type) ===
                                                  'weekly' && '매주',
                                                ((w = d.repeat) == null ? void 0 : w.type) ===
                                                  'monthly' && '매월',
                                                ((m = d.repeat) == null ? void 0 : m.type) ===
                                                  'yearly' && '매년',
                                              ],
                                            }),
                                          b.jsx(Ne, {
                                            fontSize: 'sm',
                                            noOfLines: 1,
                                            children: d.title,
                                          }),
                                        ],
                                      }),
                                    },
                                    d.id
                                  );
                                }),
                              ],
                            }),
                        },
                        l
                      );
                    }),
                  },
                  s
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  CB = ({ event: e, isNotified: t }) =>
    b.jsx(
      Su,
      {
        p: 1,
        my: 1,
        bg: t ? 'red.100' : 'gray.100',
        borderRadius: 'md',
        fontWeight: t ? 'bold' : 'normal',
        color: t ? 'red.500' : 'inherit',
        children: b.jsxs(br, {
          spacing: 1,
          children: [
            t && b.jsx(Zm, {}),
            e.repeat.type !== 'none' &&
              b.jsxs(Ne, {
                fontSize: 'xs',
                color: 'gray.500',
                children: [
                  e.repeat.type === 'daily' && '매일',
                  e.repeat.type === 'weekly' && '매주',
                  e.repeat.type === 'monthly' && '매월',
                  e.repeat.type === 'yearly' && '매년',
                ],
              }),
            b.jsx(Ne, { fontSize: 'sm', noOfLines: 1, children: e.title }),
          ],
        }),
      },
      e.id
    ),
  TB = ({ currentDate: e, events: t, notifiedEvents: n }) => {
    const r = nC(e);
    return b.jsxs(fo, {
      'data-testid': 'week-view',
      align: 'stretch',
      w: 'full',
      spacing: 4,
      children: [
        b.jsx(_a, { size: 'md', children: wB(e) }),
        b.jsxs(Qm, {
          variant: 'simple',
          w: 'full',
          children: [
            b.jsx(eC, {
              children: b.jsx(Rc, {
                children: rC.map((o) => b.jsx(Jk, { width: '14.28%', children: o }, o)),
              }),
            }),
            b.jsx(Qk, {
              children: b.jsx(Rc, {
                children: r.map((o) =>
                  b.jsxs(
                    Zk,
                    {
                      height: '100px',
                      verticalAlign: 'top',
                      width: '14.28%',
                      children: [
                        b.jsx(Ne, { fontWeight: 'bold', children: o.getDate() }),
                        t
                          .filter((i) => new Date(i.date).toDateString() === o.toDateString())
                          .map((i) => b.jsx(CB, { event: i, isNotified: n.includes(i.id) }, i.id)),
                      ],
                    },
                    o.toISOString()
                  )
                ),
              }),
            }),
          ],
        }),
      ],
    });
  },
  PB = ({ children: e, ...t }) => b.jsx(oa, { ...t, children: e }),
  xt = ({ children: e, ...t }) => b.jsx(Uw, { ...t, children: e }),
  wt = (e) => b.jsx(_k, { ...e }),
  An = (e) => b.jsx(Ym, { ...e }),
  Nv = (e, t) => {
    if (!e || !t) return { startTime: null, endTime: null };
    const [n, r] = e.split(':').map(Number),
      [o, i] = t.split(':').map(Number);
    if (n > o || (n === o && r >= i)) {
      const s = '종료 시간은 시작 시간보다 커야 합니다.';
      return { startTime: s, endTime: s };
    }
    return { startTime: null, endTime: null };
  },
  _B = (e) => {
    const [t, n] = S.useState(e),
      [r, o] = S.useState({
        title: (e == null ? void 0 : e.title) || '',
        date: (e == null ? void 0 : e.date) || '',
        startTime: (e == null ? void 0 : e.startTime) || '',
        endTime: (e == null ? void 0 : e.endTime) || '',
        description: (e == null ? void 0 : e.description) || '',
        location: (e == null ? void 0 : e.location) || '',
        category: (e == null ? void 0 : e.category) || '',
        isRepeating: (e == null ? void 0 : e.repeat.type) !== 'none',
        repeatType: (e == null ? void 0 : e.repeat.type) || 'none',
        repeatInterval: (e == null ? void 0 : e.repeat.interval) || 1,
        repeatEndDate: (e == null ? void 0 : e.repeat.endDate) || '',
        notificationTime: (e == null ? void 0 : e.notificationTime) || 10,
      }),
      [i, s] = S.useState({ startTime: null, endTime: null }),
      a = S.useCallback((u) => {
        const { name: d, value: f } = u.target;
        o((p) => {
          const v = { ...p, [d]: f };
          if (d === 'startTime' || d === 'endTime') {
            const g = d === 'startTime' ? f : p.startTime,
              w = d === 'endTime' ? f : p.endTime;
            s(Nv(g, w));
          }
          return v;
        });
      }, []),
      l = S.useCallback((u) => {
        const { name: d, checked: f } = u.target;
        o((p) => ({ ...p, [d]: f }));
      }, []),
      c = S.useCallback(() => {
        if (!r.title || !r.date || !r.startTime || !r.endTime) return;
        const u = Nv(r.startTime, r.endTime);
        if (u.startTime || u.endTime) {
          s(u);
          return;
        }
      }, [r]);
    return {
      formState: r,
      errors: i,
      editingEvent: t,
      setEditingEvent: n,
      handleInputChange: a,
      handleCheckboxChange: l,
      handleSubmit: c,
    };
  },
  EB = S.memo(({ initialEvent: e, onSubmit: t }) => {
    const { formState: n, errors: r, handleInputChange: o, handleCheckboxChange: i } = _B(e);
    return b.jsxs(fo, {
      w: '400px',
      spacing: 5,
      align: 'stretch',
      children: [
        b.jsx(_a, { children: e ? '일정 수정' : '일정 추가' }),
        b.jsxs(xt, {
          isRequired: !0,
          children: [
            b.jsx(wt, { children: '제목' }),
            b.jsx(An, { name: 'title', value: n == null ? void 0 : n.title, onChange: o }),
          ],
        }),
        b.jsxs(xt, {
          isRequired: !0,
          children: [
            b.jsx(wt, { children: '날짜' }),
            b.jsx(An, {
              type: 'date',
              name: 'date',
              value: n == null ? void 0 : n.date,
              onChange: o,
            }),
          ],
        }),
        b.jsxs(br, {
          children: [
            b.jsxs(xt, {
              isRequired: !0,
              isInvalid: !!(r != null && r.startTime),
              children: [
                b.jsx(wt, { children: '시작 시간' }),
                b.jsx(An, {
                  type: 'time',
                  name: 'startTime',
                  value: n == null ? void 0 : n.startTime,
                  onChange: o,
                }),
              ],
            }),
            b.jsxs(xt, {
              isRequired: !0,
              isInvalid: !!(r != null && r.endTime),
              children: [
                b.jsx(wt, { children: '종료 시간' }),
                b.jsx(An, {
                  type: 'time',
                  name: 'endTime',
                  value: n == null ? void 0 : n.endTime,
                  onChange: o,
                }),
              ],
            }),
          ],
        }),
        b.jsxs(xt, {
          children: [
            b.jsx(wt, { children: '설명' }),
            b.jsx(An, {
              name: 'description',
              value: n == null ? void 0 : n.description,
              onChange: o,
            }),
          ],
        }),
        b.jsxs(xt, {
          children: [
            b.jsx(wt, { children: '위치' }),
            b.jsx(An, { name: 'location', value: n == null ? void 0 : n.location, onChange: o }),
          ],
        }),
        b.jsxs(xt, {
          children: [
            b.jsx(wt, { children: '카테고리' }),
            b.jsxs(Kl, {
              name: 'category',
              value: n == null ? void 0 : n.category,
              onChange: o,
              children: [
                b.jsx('option', { value: '', children: '카테고리 선택' }),
                bB.map((s) => b.jsx('option', { value: s, children: s }, s)),
              ],
            }),
          ],
        }),
        b.jsxs(xt, {
          children: [
            b.jsx(wt, { children: '반복 설정' }),
            b.jsx(Kw, {
              name: 'isRepeating',
              isChecked: n == null ? void 0 : n.isRepeating,
              onChange: i,
              children: '반복 일정',
            }),
          ],
        }),
        (n == null ? void 0 : n.isRepeating) &&
          b.jsxs(fo, {
            spacing: 4,
            children: [
              b.jsxs(xt, {
                children: [
                  b.jsx(wt, { children: '반복 유형' }),
                  b.jsxs(Kl, {
                    name: 'repeatType',
                    value: n == null ? void 0 : n.repeatType,
                    onChange: o,
                    children: [
                      b.jsx('option', { value: 'daily', children: '매일' }),
                      b.jsx('option', { value: 'weekly', children: '매주' }),
                      b.jsx('option', { value: 'monthly', children: '매월' }),
                      b.jsx('option', { value: 'yearly', children: '매년' }),
                    ],
                  }),
                ],
              }),
              b.jsxs(br, {
                children: [
                  b.jsxs(xt, {
                    children: [
                      b.jsx(wt, { children: '반복 간격' }),
                      b.jsx(An, {
                        type: 'number',
                        name: 'repeatInterval',
                        value: n == null ? void 0 : n.repeatInterval,
                        onChange: o,
                        min: 1,
                      }),
                    ],
                  }),
                  b.jsxs(xt, {
                    children: [
                      b.jsx(wt, { children: '반복 종료일' }),
                      b.jsx(An, {
                        type: 'date',
                        name: 'repeatEndDate',
                        value: n.repeatEndDate,
                        onChange: o,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        b.jsxs(xt, {
          children: [
            b.jsx(wt, { children: '알림 설정' }),
            b.jsx(Kl, {
              name: 'notificationTime',
              value: n == null ? void 0 : n.notificationTime,
              onChange: o,
              children: oC.map((s) =>
                b.jsx('option', { value: s.value, children: s.label }, s.value)
              ),
            }),
          ],
        }),
        b.jsx(PB, {
          onClick: (s) => {
            s.preventDefault(), t(n);
          },
          colorScheme: 'blue',
          children: e ? '일정 수정' : '일정 추가',
        }),
      ],
    });
  }),
  $B = ({ children: e, ...t }) => b.jsx(zm, { ...t, children: e }),
  AB = ({ event: e, isNotified: t, onEdit: n, onDelete: r }) => {
    var o, i, s, a, l, c, u, d, f;
    return b.jsx($B, {
      borderWidth: 1,
      borderRadius: 'lg',
      p: 3,
      width: '100%',
      children: b.jsxs(br, {
        justifyContent: 'space-between',
        children: [
          b.jsxs(fo, {
            align: 'start',
            children: [
              b.jsxs(br, {
                children: [
                  t && b.jsx(Zm, { color: 'red.500' }),
                  b.jsx(Ne, {
                    fontWeight: t ? 'bold' : 'normal',
                    color: t ? 'red.500' : 'inherit',
                    children: e == null ? void 0 : e.title,
                  }),
                ],
              }),
              b.jsx(Ne, { children: e == null ? void 0 : e.date }),
              b.jsxs(Ne, { children: [e == null ? void 0 : e.startTime, ' - ', e.endTime] }),
              e.description && b.jsx(Ne, { children: e.description }),
              e.location && b.jsx(Ne, { children: e.location }),
              e.category && b.jsxs(Ne, { children: ['카테고리: ', e.category] }),
              ((o = e.repeat) == null ? void 0 : o.type) !== 'none' &&
                b.jsxs(Ne, {
                  children: [
                    '반복: ',
                    (i = e.repeat) == null ? void 0 : i.interval,
                    ((s = e.repeat) == null ? void 0 : s.type) === 'daily' && '일',
                    ((a = e.repeat) == null ? void 0 : a.type) === 'weekly' && '주',
                    ((l = e.repeat) == null ? void 0 : l.type) === 'monthly' && '월',
                    ((c = e.repeat) == null ? void 0 : c.type) === 'yearly' && '년',
                    '마다',
                    ((u = e.repeat) == null ? void 0 : u.endDate) &&
                      ` (종료: ${(d = e.repeat) == null ? void 0 : d.endDate})`,
                  ],
                }),
              b.jsxs(Ne, {
                children: [
                  '알림:',
                  ' ',
                  (f = oC.find((p) => p.value === e.notificationTime)) == null ? void 0 : f.label,
                ],
              }),
            ],
          }),
          b.jsxs(br, {
            children: [
              b.jsx(ia, { 'aria-label': 'Edit event', icon: b.jsx(dB, {}), onClick: () => n(e) }),
              b.jsx(ia, {
                'aria-label': 'Delete event',
                icon: b.jsx(uB, {}),
                onClick: () => r(e.id),
              }),
            ],
          }),
        ],
      }),
    });
  },
  iC = (e, t) => {
    const [n, r] = S.useState([]),
      o = tC(),
      i = async () => {
        try {
          const c = await fetch('/api/events');
          if (!c.ok) throw new Error('Failed to fetch events');
          const { events: u } = await c.json();
          r(u);
        } catch (c) {
          console.error('Error fetching events:', c),
            o({ title: '이벤트 로딩 실패', status: 'error', duration: 3e3, isClosable: !0 });
        }
      },
      s = async (c) => {
        try {
          let u;
          if (
            (e
              ? (u = await fetch(`/api/events/${c.id}`, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(c),
                }))
              : (u = await fetch('/api/events', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(c),
                })),
            !u.ok)
          )
            throw new Error('Failed to save event');
          await i(),
            t == null || t(),
            o({
              title: e ? '일정이 수정되었습니다.' : '일정이 추가되었습니다.',
              status: 'success',
              duration: 3e3,
              isClosable: !0,
            });
        } catch (u) {
          console.error('Error saving event:', u),
            o({ title: '일정 저장 실패', status: 'error', duration: 3e3, isClosable: !0 });
        }
      },
      a = async (c) => {
        try {
          if (!(await fetch(`/api/events/${c}`, { method: 'DELETE' })).ok)
            throw new Error('Failed to delete event');
          await i(),
            o({ title: '일정이 삭제되었습니다.', status: 'info', duration: 3e3, isClosable: !0 });
        } catch (u) {
          console.error('Error deleting event:', u),
            o({ title: '일정 삭제 실패', status: 'error', duration: 3e3, isClosable: !0 });
        }
      };
    async function l() {
      await i(), o({ title: '일정 로딩 완료!', status: 'info', duration: 1e3 });
    }
    return (
      S.useEffect(() => {
        l();
      }, []),
      { events: n, fetchEvents: i, saveEvent: s, deleteEvent: a }
    );
  },
  RB = ({ editingEvent: e, setEditingEvent: t }) => {
    const [n, r] = S.useState(''),
      [o, i] = S.useState(null),
      { fetchEvents: s, events: a, deleteEvent: l } = iC(!!e, () => t(null));
    return (
      S.useEffect(() => {
        s();
      }, []),
      {
        searchTerm: n,
        filteredEvents: o || a,
        handleSearch: (f) => {
          const p = f.target.value.toLowerCase();
          if ((r(p), !p)) {
            i(null);
            return;
          }
          const v = a.filter((g) =>
            [g.title, g.description, g.location, g.category]
              .map((m) => (m == null ? void 0 : m.toLowerCase()) || '')
              .some((m) => m.includes(p))
          );
          i(v);
        },
        handleEdit: (f) => {
          if (!(f != null && f.id)) {
            console.error('Invalid event data:', f);
            return;
          }
          t(f);
        },
        handleDelete: async (f) => {
          try {
            await l(f), o && i((p) => (p == null ? void 0 : p.filter((v) => v.id !== f)) || null);
          } catch (p) {
            console.error('Failed to delete event:', p);
          }
        },
        fetchEvents: s,
      }
    );
  },
  MB = ({ notifiedEvents: e }) => {
    const [t, n] = S.useState(null),
      {
        searchTerm: r,
        filteredEvents: o,
        handleSearch: i,
        handleEdit: s,
        handleDelete: a,
      } = RB({ editingEvent: t, setEditingEvent: n });
    return b.jsxs(fo, {
      'data-testid': 'event-list',
      w: '500px',
      h: 'full',
      overflowY: 'auto',
      children: [
        b.jsxs(xt, {
          children: [
            b.jsx(wt, { children: '일정 검색' }),
            b.jsx(An, { placeholder: '검색어를 입력하세요', value: r, onChange: i }),
          ],
        }),
        o.length === 0
          ? b.jsx(Ne, { children: '검색 결과가 없습니다.' })
          : o.map((l) =>
              b.jsx(AB, { event: l, isNotified: e.includes(l.id), onEdit: s, onDelete: a }, l.id)
            ),
      ],
    });
  },
  jB = (e, t) =>
    e.filter((n) => {
      if (n.date !== t.date) return !1;
      const r = new Date(t.startTime).getTime(),
        o = new Date(t.endTime).getTime(),
        i = new Date(n.startTime).getTime(),
        s = new Date(n.endTime).getTime();
      return (r >= i && r <= s) || (o >= i && o <= s) || (r <= i && o >= s);
    }),
  zB = ({ events: e, onSaveSuccess: t, saveEvent: n }) => {
    const [r, o] = S.useState(!1),
      [i, s] = S.useState([]),
      [a, l] = S.useState(null),
      c = tC(),
      u = S.useCallback(
        async (p) => {
          if (!p.title || !p.date || !p.startTime || !p.endTime) {
            c({
              title: '필수 정보를 모두 입력해주세요.',
              status: 'error',
              duration: 3e3,
              isClosable: !0,
            });
            return;
          }
          const v = jB(e, p);
          if (v.length > 0) s(v), l(p), o(!0);
          else
            try {
              await n(p),
                t(),
                c({
                  title: '일정이 저장되었습니다.',
                  status: 'success',
                  duration: 2e3,
                  isClosable: !0,
                });
            } catch (g) {
              c({
                title: '일정 저장에 실패했습니다.',
                description: g instanceof Error ? g.message : '알 수 없는 오류가 발생했습니다.',
                status: 'error',
                duration: 3e3,
                isClosable: !0,
              });
            }
        },
        [e, n, t, c]
      ),
      d = S.useCallback(() => {
        o(!1), l(null), s([]);
      }, []),
      f = S.useCallback(async () => {
        if (a)
          try {
            await n(a),
              t(),
              d(),
              c({
                title: '일정이 저장되었습니다.',
                status: 'success',
                duration: 2e3,
                isClosable: !0,
              });
          } catch (p) {
            c({
              title: '일정 저장에 실패했습니다.',
              description: p instanceof Error ? p.message : '알 수 없는 오류가 발생했습니다.',
              status: 'error',
              duration: 3e3,
              isClosable: !0,
            });
          }
      }, [a, n, t, d, c]);
    return {
      isOpen: r,
      overlappingEvents: i,
      handleEventSave: u,
      handleDialogClose: d,
      handleDialogConfirm: f,
    };
  },
  FB = ({ isOpen: e, onClose: t, onConfirm: n, overlappingEvents: r, cancelRef: o }) =>
    b.jsx(nB, {
      isOpen: e,
      leastDestructiveRef: o,
      onClose: t,
      children: b.jsx(Hk, {
        children: b.jsxs(rB, {
          children: [
            b.jsx(Wk, { fontSize: 'lg', fontWeight: 'bold', children: '일정 겹침 경고' }),
            b.jsxs(Bk, {
              children: [
                '다음 일정과 겹칩니다:',
                r.map((i) =>
                  b.jsxs(
                    Ne,
                    { children: [i.title, ' (', i.date, ' ', i.startTime, '-', i.endTime, ')'] },
                    i.id
                  )
                ),
                '계속 진행하시겠습니까?',
              ],
            }),
            b.jsxs(Vk, {
              children: [
                b.jsx(oa, { ref: o, onClick: t, children: '취소' }),
                b.jsx(oa, { colorScheme: 'red', onClick: n, ml: 3, children: '계속 진행' }),
              ],
            }),
          ],
        }),
      }),
    }),
  IB = (e) => {
    const [t, n] = S.useState([]),
      [r, o] = S.useState([]);
    S.useEffect(() => {
      const c = () => {
          e.forEach((d) => {
            const f = new Date(`${d.date}T${d.startTime}`),
              p = new Date(f.getTime() - d.notificationTime * 60 * 1e3),
              v = new Date();
            v >= p &&
              v <= f &&
              !r.includes(d.id) &&
              (o((g) => [...g, d.id]),
              n((g) => [
                ...g,
                { id: `${d.id}-${Date.now()}`, message: `${d.title} 일정이 곧 시작됩니다.` },
              ]));
          });
        },
        u = setInterval(c, 6e4);
      return c(), () => clearInterval(u);
    }, [e, r]);
    const i = (c) => {
      n((u) => u.filter((d) => d.id !== c));
    };
    return {
      notifications: t,
      notifiedEvents: r,
      removeNotification: i,
      clearAllNotifications: () => {
        n([]);
      },
      resetNotifiedEvent: (c) => {
        o((u) => u.filter((d) => d !== c));
      },
      clearNotification: (c) => {
        i(c);
      },
    };
  },
  DB = ({ events: e }) => {
    const { notifications: t, clearNotification: n } = IB(e);
    return b.jsx(fo, {
      position: 'fixed',
      top: 4,
      right: 4,
      spacing: 2,
      children: t.map((r) =>
        b.jsxs(
          Dp,
          {
            status: 'info',
            children: [
              b.jsx(Lp, {}),
              b.jsx(Op, { children: r.message }),
              b.jsx(Np, { onClick: () => n(r.id) }),
            ],
          },
          r.id
        )
      ),
    });
  },
  Bv = {
    '2024-01-01': '신정',
    '2024-02-09': '설날',
    '2024-02-10': '설날',
    '2024-02-11': '설날',
    '2024-03-01': '삼일절',
    '2024-05-05': '어린이날',
    '2024-06-06': '현충일',
    '2024-08-15': '광복절',
    '2024-09-16': '추석',
    '2024-09-17': '추석',
    '2024-09-18': '추석',
    '2024-10-03': '개천절',
    '2024-10-09': '한글날',
    '2024-12-25': '크리스마스',
  };
function LB(e) {
  const t = e.getFullYear(),
    n = String(e.getMonth() + 1).padStart(2, '0');
  return Object.keys(Bv)
    .filter((o) => o.includes(`${t}-${n}`))
    .reduce((o, i) => ({ ...o, [i]: Bv[i] }), {});
}
const OB = () => {
    const [e, t] = S.useState('month'),
      [n, r] = S.useState(new Date()),
      [o, i] = S.useState({}),
      s = (a) => {
        r((l) => {
          const c = new Date(l);
          return (
            e === 'week'
              ? c.setDate(c.getDate() + (a === 'next' ? 7 : -7))
              : e === 'month' && (c.setDate(1), c.setMonth(c.getMonth() + (a === 'next' ? 1 : -1))),
            c
          );
        });
      };
    return (
      S.useEffect(() => {
        i(LB(n));
      }, [n]),
      { view: e, setView: t, currentDate: n, setCurrentDate: r, holidays: o, navigate: s }
    );
  },
  NB = 1e3,
  BB = NB * 60;
function VB(e, t, n) {
  return e.filter((r) => {
    const i = (new Date(`${r.date}T${r.startTime}`).getTime() - t.getTime()) / BB;
    return i > 0 && i <= r.notificationTime && !n.includes(r.id);
  });
}
function WB({ notificationTime: e, title: t }) {
  return `${e}분 후 ${t} 일정이 시작됩니다.`;
}
const UB = (e) => {
  const [t, n] = S.useState([]),
    [r, o] = S.useState([]),
    i = () => {
      const l = VB(e, new Date(), r);
      n((c) => [...c, ...l.map((u) => ({ id: u.id, message: WB(u) }))]),
        o((c) => [...c, ...l.map(({ id: u }) => u)]);
    },
    s = (a) => {
      n((l) => l.filter((c, u) => u !== a));
    };
  return (
    c2(i, 1e3), { notifications: t, notifiedEvents: r, setNotifications: n, removeNotification: s }
  );
};
function sC(e, t, n) {
  return e.filter((r) => {
    const o = new Date(r.date);
    return vB(o, t, n);
  });
}
function Yd(e, t) {
  return e.toLowerCase().includes(t.toLowerCase());
}
function HB(e, t) {
  return e.filter(({ title: n, description: r, location: o }) => Yd(n, t) || Yd(r, t) || Yd(o, t));
}
function GB(e, t) {
  const n = nC(t);
  return sC(e, n[0], n[6]);
}
function KB(e, t) {
  const n = new Date(t.getFullYear(), t.getMonth(), 1),
    r = new Date(t.getFullYear(), t.getMonth() + 1, 0);
  return sC(e, n, r);
}
function YB(e, t, n, r) {
  const o = HB(e, t);
  return r === 'week' ? GB(o, n) : r === 'month' ? KB(o, n) : o;
}
const XB = (e, t, n) => {
  const [r, o] = S.useState(''),
    i = S.useMemo(() => YB(e, r, t, n), [e, r, t, n]);
  return { searchTerm: r, setSearchTerm: o, filteredEvents: i };
};
function qB() {
  const [e, t] = S.useState(null),
    { events: n, saveEvent: r } = iC(!!e, () => t(null)),
    { notifiedEvents: o, notifications: i } = UB(n),
    { view: s, setView: a, currentDate: l, holidays: c, navigate: u } = OB(),
    { filteredEvents: d } = XB(n, l, s),
    {
      isOpen: f,
      overlappingEvents: p,
      handleEventSave: v,
      handleDialogClose: g,
      handleDialogConfirm: w,
    } = zB({
      events: n,
      onSaveSuccess: () => {
        t(null);
      },
      saveEvent: r,
    }),
    m = S.useRef(null);
  return b.jsxs(Su, {
    w: 'full',
    h: '100vh',
    m: 'auto',
    p: 5,
    children: [
      b.jsxs(zm, {
        gap: 6,
        h: 'full',
        children: [
          b.jsx(EB, { initialEvent: e, onSubmit: v }),
          b.jsxs(qm, {
            flex: 1,
            spacing: 5,
            align: 'stretch',
            children: [
              b.jsx(_a, { children: '일정 보기' }),
              b.jsx(pB, { view: s, onViewChange: a, onNavigate: u }),
              s === 'week'
                ? b.jsx(TB, { currentDate: l, events: d, notifiedEvents: o })
                : b.jsx(kB, { currentDate: l, events: d, holidays: c, notifiedEvents: o }),
            ],
          }),
          b.jsx(MB, { notifiedEvents: o }),
        ],
      }),
      b.jsx(FB, { isOpen: f, onClose: g, onConfirm: w, overlappingEvents: p, cancelRef: m }),
      i.length > 0 && b.jsx(DB, { events: n }),
    ],
  });
}
$h.createRoot(document.getElementById('root')).render(
  b.jsx(Fh.StrictMode, { children: b.jsx(fL, { children: b.jsx(qB, {}) }) })
);
