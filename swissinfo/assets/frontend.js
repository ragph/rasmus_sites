/*! For license information please see frontend.js.LICENSE.txt */ ! function () {
    var e = {
        8705: function (e, t, i) {
           "use strict";
           i.r(t), i.d(t, {
              Alpine: function () {
                 return Qi
              },
              default: function () {
                 return Ji
              }
           });
           var n, s, r, o, a = !1,
              l = !1,
              c = [],
              u = -1;

           function d(e) {
              ! function (e) {
                 c.includes(e) || c.push(e);
                 l || a || (a = !0, queueMicrotask(f))
              }(e)
           }

           function h(e) {
              let t = c.indexOf(e); - 1 !== t && t > u && c.splice(t, 1)
           }

           function f() {
              a = !1, l = !0;
              for (let e = 0; e < c.length; e++) c[e](), u = e;
              c.length = 0, u = -1, l = !1
           }
           var p = !0;

           function g(e) {
              s = e
           }

           function m(e, t) {
              let i, n = !0,
                 o = s((() => {
                    let s = e();
                    JSON.stringify(s), n ? i = s : queueMicrotask((() => {
                       t(s, i), i = s
                    })), n = !1
                 }));
              return () => r(o)
           }
           var v = [],
              y = [],
              _ = [];

           function b(e, t) {
              "function" == typeof t ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : (t = e, y.push(t))
           }

           function w(e) {
              v.push(e)
           }

           function x(e, t, i) {
              e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(i)
           }

           function S(e, t) {
              e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach((([i, n]) => {
                 (void 0 === t || t.includes(i)) && (n.forEach((e => e())), delete e._x_attributeCleanups[i])
              }))
           }
           var E = new MutationObserver(T),
              C = !1;

           function P() {
              E.observe(document, {
                 subtree: !0,
                 childList: !0,
                 attributes: !0,
                 attributeOldValue: !0
              }), C = !0
           }

           function A() {
              ! function () {
                 let e = E.takeRecords();
                 k.push((() => e.length > 0 && T(e)));
                 let t = k.length;
                 queueMicrotask((() => {
                    if (k.length === t)
                       for (; k.length > 0;) k.shift()()
                 }))
              }(), E.disconnect(), C = !1
           }
           var k = [];

           function O(e) {
              if (!C) return e();
              A();
              let t = e();
              return P(), t
           }
           var L = !1,
              M = [];

           function T(e) {
              if (L) return void(M = M.concat(e));
              let t = new Set,
                 i = new Set,
                 n = new Map,
                 s = new Map;
              for (let r = 0; r < e.length; r++)
                 if (!e[r].target._x_ignoreMutationObserver && ("childList" === e[r].type && (e[r].addedNodes.forEach((e => 1 === e.nodeType && t.add(e))), e[r].removedNodes.forEach((e => 1 === e.nodeType && i.add(e)))), "attributes" === e[r].type)) {
                    let t = e[r].target,
                       i = e[r].attributeName,
                       o = e[r].oldValue,
                       a = () => {
                          n.has(t) || n.set(t, []), n.get(t).push({
                             name: i,
                             value: t.getAttribute(i)
                          })
                       },
                       l = () => {
                          s.has(t) || s.set(t, []), s.get(t).push(i)
                       };
                    t.hasAttribute(i) && null === o ? a() : t.hasAttribute(i) ? (l(), a()) : l()
                 } s.forEach(((e, t) => {
                 S(t, e)
              })), n.forEach(((e, t) => {
                 v.forEach((i => i(t, e)))
              }));
              for (let e of i) t.has(e) || y.forEach((t => t(e)));
              t.forEach((e => {
                 e._x_ignoreSelf = !0, e._x_ignore = !0
              }));
              for (let e of t) i.has(e) || e.isConnected && (delete e._x_ignoreSelf, delete e._x_ignore, _.forEach((t => t(e))), e._x_ignore = !0, e._x_ignoreSelf = !0);
              t.forEach((e => {
                 delete e._x_ignoreSelf, delete e._x_ignore
              })), t = null, i = null, n = null, s = null
           }

           function D(e) {
              return $(I(e))
           }

           function j(e, t, i) {
              return e._x_dataStack = [t, ...I(i || e)], () => {
                 e._x_dataStack = e._x_dataStack.filter((e => e !== t))
              }
           }

           function I(e) {
              return e._x_dataStack ? e._x_dataStack : "function" == typeof ShadowRoot && e instanceof ShadowRoot ? I(e.host) : e.parentNode ? I(e.parentNode) : []
           }

           function $(e) {
              return new Proxy({
                 objects: e
              }, F)
           }
           var F = {
              ownKeys({
                 objects: e
              }) {
                 return Array.from(new Set(e.flatMap((e => Object.keys(e)))))
              },
              has({
                 objects: e
              }, t) {
                 return t != Symbol.unscopables && e.some((e => Object.prototype.hasOwnProperty.call(e, t) || Reflect.has(e, t)))
              },
              get({
                 objects: e
              }, t, i) {
                 return "toJSON" == t ? N : Reflect.get(e.find((e => Reflect.has(e, t))) || {}, t, i)
              },
              set({
                 objects: e
              }, t, i, n) {
                 const s = e.find((e => Object.prototype.hasOwnProperty.call(e, t))) || e[e.length - 1],
                    r = Object.getOwnPropertyDescriptor(s, t);
                 return r?.set && r?.get ? r.set.call(n, i) || !0 : Reflect.set(s, t, i)
              }
           };

           function N() {
              return Reflect.ownKeys(this).reduce(((e, t) => (e[t] = Reflect.get(this, t), e)), {})
           }

           function z(e) {
              let t = (i, n = "") => {
                 Object.entries(Object.getOwnPropertyDescriptors(i)).forEach((([s, {
                    value: r,
                    enumerable: o
                 }]) => {
                    if (!1 === o || void 0 === r) return;
                    if ("object" == typeof r && null !== r && r.__v_skip) return;
                    let a = "" === n ? s : `${n}.${s}`;
                    var l;
                    "object" == typeof r && null !== r && r._x_interceptor ? i[s] = r.initialize(e, a, s) : "object" != typeof (l = r) || Array.isArray(l) || null === l || r === i || r instanceof Element || t(r, a)
                 }))
              };
              return t(e)
           }

           function B(e, t = () => {}) {
              let i = {
                 initialValue: void 0,
                 _x_interceptor: !0,
                 initialize(t, i, n) {
                    return e(this.initialValue, (() => function (e, t) {
                       return t.split(".").reduce(((e, t) => e[t]), e)
                    }(t, i)), (e => W(t, i, e)), i, n)
                 }
              };
              return t(i), e => {
                 if ("object" == typeof e && null !== e && e._x_interceptor) {
                    let t = i.initialize.bind(i);
                    i.initialize = (n, s, r) => {
                       let o = e.initialize(n, s, r);
                       return i.initialValue = o, t(n, s, r)
                    }
                 } else i.initialValue = e;
                 return i
              }
           }

           function W(e, t, i) {
              if ("string" == typeof t && (t = t.split(".")), 1 !== t.length) {
                 if (0 === t.length) throw error;
                 return e[t[0]] || (e[t[0]] = {}), W(e[t[0]], t.slice(1), i)
              }
              e[t[0]] = i
           }
           var R = {};

           function U(e, t) {
              R[e] = t
           }

           function q(e, t) {
              return Object.entries(R).forEach((([i, n]) => {
                 let s = null;
                 Object.defineProperty(e, `$${i}`, {
                    get() {
                       return n(t, function () {
                          if (s) return s; {
                             let [e, i] = ue(t);
                             return s = {
                                interceptor: B,
                                ...e
                             }, b(t, i), s
                          }
                       }())
                    },
                    enumerable: !1
                 })
              })), e
           }

           function H(e, t, i, ...n) {
              try {
                 return i(...n)
              } catch (i) {
                 V(i, e, t)
              }
           }

           function V(e, t, i = void 0) {
              e = Object.assign(e ?? {
                 message: "No error message given."
              }, {
                 el: t,
                 expression: i
              }), console.warn(`Alpine Expression Error: ${e.message}\n\n${i?'Expression: "'+i+'"\n\n':""}`, t), setTimeout((() => {
                 throw e
              }), 0)
           }
           var X = !0;

           function G(e) {
              let t = X;
              X = !1;
              let i = e();
              return X = t, i
           }

           function Q(e, t, i = {}) {
              let n;
              return J(e, t)((e => n = e), i), n
           }

           function J(...e) {
              return K(...e)
           }
           var K = Y;

           function Y(e, t) {
              let i = {};
              q(i, e);
              let n = [i, ...I(e)],
                 s = "function" == typeof t ? function (e, t) {
                    return (i = () => {}, {
                       scope: n = {},
                       params: s = []
                    } = {}) => {
                       ee(i, t.apply($([n, ...e]), s))
                    }
                 }(n, t) : function (e, t, i) {
                    let n = function (e, t) {
                       if (Z[e]) return Z[e];
                       let i = Object.getPrototypeOf((async function () {})).constructor,
                          n = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? `(async()=>{ ${e} })()` : e;
                       const s = () => {
                          try {
                             let t = new i(["__self", "scope"], `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);
                             return Object.defineProperty(t, "name", {
                                value: `[Alpine] ${e}`
                             }), t
                          } catch (i) {
                             return V(i, t, e), Promise.resolve()
                          }
                       };
                       let r = s();
                       return Z[e] = r, r
                    }(t, i);
                    return (s = () => {}, {
                       scope: r = {},
                       params: o = []
                    } = {}) => {
                       n.result = void 0, n.finished = !1;
                       let a = $([r, ...e]);
                       if ("function" == typeof n) {
                          let e = n(n, a).catch((e => V(e, i, t)));
                          n.finished ? (ee(s, n.result, a, o, i), n.result = void 0) : e.then((e => {
                             ee(s, e, a, o, i)
                          })).catch((e => V(e, i, t))).finally((() => n.result = void 0))
                       }
                    }
                 }(n, t, e);
              return H.bind(null, e, t, s)
           }
           var Z = {};

           function ee(e, t, i, n, s) {
              if (X && "function" == typeof t) {
                 let r = t.apply(i, n);
                 r instanceof Promise ? r.then((t => ee(e, t, i, n))).catch((e => V(e, s, t))) : e(r)
              } else "object" == typeof t && t instanceof Promise ? t.then((t => e(t))) : e(t)
           }
           var te = "x-";

           function ie(e = "") {
              return te + e
           }
           var ne = {};

           function se(e, t) {
              return ne[e] = t, {
                 before(t) {
                    if (!ne[t]) return void console.warn(String.raw`Cannot find directive \`${t}\`. \`${e}\` will use the default order of execution`);
                    const i = ye.indexOf(t);
                    ye.splice(i >= 0 ? i : ye.indexOf("DEFAULT"), 0, e)
                 }
              }
           }

           function re(e, t, i) {
              if (t = Array.from(t), e._x_virtualDirectives) {
                 let i = Object.entries(e._x_virtualDirectives).map((([e, t]) => ({
                       name: e,
                       value: t
                    }))),
                    n = oe(i);
                 i = i.map((e => n.find((t => t.name === e.name)) ? {
                    name: `x-bind:${e.name}`,
                    value: `"${e.value}"`
                 } : e)), t = t.concat(i)
              }
              let n = {},
                 s = t.map(he(((e, t) => n[e] = t))).filter(ge).map(function (e, t) {
                    return ({
                       name: i,
                       value: n
                    }) => {
                       let s = i.match(me()),
                          r = i.match(/:([a-zA-Z0-9\-_:]+)/),
                          o = i.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                          a = t || e[i] || i;
                       return {
                          type: s ? s[1] : null,
                          value: r ? r[1] : null,
                          modifiers: o.map((e => e.replace(".", ""))),
                          expression: n,
                          original: a
                       }
                    }
                 }(n, i)).sort(_e);
              return s.map((t => function (e, t) {
                 let i = () => {},
                    n = ne[t.type] || i,
                    [s, r] = ue(e);
                 x(e, t.original, r);
                 let o = () => {
                    e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, s), n = n.bind(n, e, t, s), ae ? le.get(ce).push(n) : n())
                 };
                 return o.runCleanups = r, o
              }(e, t)))
           }

           function oe(e) {
              return Array.from(e).map(he()).filter((e => !ge(e)))
           }
           var ae = !1,
              le = new Map,
              ce = Symbol();

           function ue(e) {
              let t = [],
                 [i, n] = function (e) {
                    let t = () => {};
                    return [i => {
                       let n = s(i);
                       return e._x_effects || (e._x_effects = new Set, e._x_runEffects = () => {
                          e._x_effects.forEach((e => e()))
                       }), e._x_effects.add(n), t = () => {
                          void 0 !== n && (e._x_effects.delete(n), r(n))
                       }, n
                    }, () => {
                       t()
                    }]
                 }(e);
              t.push(n);
              return [{
                 Alpine: pt,
                 effect: i,
                 cleanup: e => t.push(e),
                 evaluateLater: J.bind(J, e),
                 evaluate: Q.bind(Q, e)
              }, () => t.forEach((e => e()))]
           }
           var de = (e, t) => ({
              name: i,
              value: n
           }) => (i.startsWith(e) && (i = i.replace(e, t)), {
              name: i,
              value: n
           });

           function he(e = () => {}) {
              return ({
                 name: t,
                 value: i
              }) => {
                 let {
                    name: n,
                    value: s
                 } = fe.reduce(((e, t) => t(e)), {
                    name: t,
                    value: i
                 });
                 return n !== t && e(n, t), {
                    name: n,
                    value: s
                 }
              }
           }
           var fe = [];

           function pe(e) {
              fe.push(e)
           }

           function ge({
              name: e
           }) {
              return me().test(e)
           }
           var me = () => new RegExp(`^${te}([^:^.]+)\\b`);
           var ve = "DEFAULT",
              ye = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", ve, "teleport"];

           function _e(e, t) {
              let i = -1 === ye.indexOf(e.type) ? ve : e.type,
                 n = -1 === ye.indexOf(t.type) ? ve : t.type;
              return ye.indexOf(i) - ye.indexOf(n)
           }

           function be(e, t, i = {}) {
              e.dispatchEvent(new CustomEvent(t, {
                 detail: i,
                 bubbles: !0,
                 composed: !0,
                 cancelable: !0
              }))
           }

           function we(e, t) {
              if ("function" == typeof ShadowRoot && e instanceof ShadowRoot) return void Array.from(e.children).forEach((e => we(e, t)));
              let i = !1;
              if (t(e, (() => i = !0)), i) return;
              let n = e.firstElementChild;
              for (; n;) we(n, t), n = n.nextElementSibling
           }

           function xe(e, ...t) {
              console.warn(`Alpine Warning: ${e}`, ...t)
           }
           var Se = !1;
           var Ee = [],
              Ce = [];

           function Pe() {
              return Ee.map((e => e()))
           }

           function Ae() {
              return Ee.concat(Ce).map((e => e()))
           }

           function ke(e) {
              Ee.push(e)
           }

           function Oe(e) {
              Ce.push(e)
           }

           function Le(e, t = !1) {
              return Me(e, (e => {
                 if ((t ? Ae() : Pe()).some((t => e.matches(t)))) return !0
              }))
           }

           function Me(e, t) {
              if (e) {
                 if (t(e)) return e;
                 if (e._x_teleportBack && (e = e._x_teleportBack), e.parentElement) return Me(e.parentElement, t)
              }
           }
           var Te = [];

           function De(e, t = we, i = () => {}) {
              ! function (e) {
                 ae = !0;
                 let t = Symbol();
                 ce = t, le.set(t, []);
                 let i = () => {
                    for (; le.get(t).length;) le.get(t).shift()();
                    le.delete(t)
                 };
                 e(i), ae = !1, i()
              }((() => {
                 t(e, ((e, t) => {
                    i(e, t), Te.forEach((i => i(e, t))), re(e, e.attributes).forEach((e => e())), e._x_ignore && t()
                 }))
              }))
           }

           function je(e, t = we) {
              t(e, (e => {
                 S(e),
                    function (e) {
                       if (e._x_cleanups)
                          for (; e._x_cleanups.length;) e._x_cleanups.pop()()
                    }(e)
              }))
           }
           var Ie = [],
              $e = !1;

           function Fe(e = () => {}) {
              return queueMicrotask((() => {
                 $e || setTimeout((() => {
                    Ne()
                 }))
              })), new Promise((t => {
                 Ie.push((() => {
                    e(), t()
                 }))
              }))
           }

           function Ne() {
              for ($e = !1; Ie.length;) Ie.shift()()
           }

           function ze(e, t) {
              return Array.isArray(t) ? Be(e, t.join(" ")) : "object" == typeof t && null !== t ? function (e, t) {
                 let i = e => e.split(" ").filter(Boolean),
                    n = Object.entries(t).flatMap((([e, t]) => !!t && i(e))).filter(Boolean),
                    s = Object.entries(t).flatMap((([e, t]) => !t && i(e))).filter(Boolean),
                    r = [],
                    o = [];
                 return s.forEach((t => {
                    e.classList.contains(t) && (e.classList.remove(t), o.push(t))
                 })), n.forEach((t => {
                    e.classList.contains(t) || (e.classList.add(t), r.push(t))
                 })), () => {
                    o.forEach((t => e.classList.add(t))), r.forEach((t => e.classList.remove(t)))
                 }
              }(e, t) : "function" == typeof t ? ze(e, t()) : Be(e, t)
           }

           function Be(e, t) {
              return t = !0 === t ? t = "" : t || "", i = t.split(" ").filter((t => !e.classList.contains(t))).filter(Boolean), e.classList.add(...i), () => {
                 e.classList.remove(...i)
              };
              var i
           }

           function We(e, t) {
              return "object" == typeof t && null !== t ? function (e, t) {
                 let i = {};
                 return Object.entries(t).forEach((([t, n]) => {
                    i[t] = e.style[t], t.startsWith("--") || (t = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()), e.style.setProperty(t, n)
                 })), setTimeout((() => {
                    0 === e.style.length && e.removeAttribute("style")
                 })), () => {
                    We(e, i)
                 }
              }(e, t) : function (e, t) {
                 let i = e.getAttribute("style", t);
                 return e.setAttribute("style", t), () => {
                    e.setAttribute("style", i || "")
                 }
              }(e, t)
           }

           function Re(e, t = () => {}) {
              let i = !1;
              return function () {
                 i ? t.apply(this, arguments) : (i = !0, e.apply(this, arguments))
              }
           }

           function Ue(e, t, i = {}) {
              e._x_transition || (e._x_transition = {
                 enter: {
                    during: i,
                    start: i,
                    end: i
                 },
                 leave: {
                    during: i,
                    start: i,
                    end: i
                 },
                 in (i = () => {}, n = () => {}) {
                    He(e, t, {
                       during: this.enter.during,
                       start: this.enter.start,
                       end: this.enter.end
                    }, i, n)
                 },
                 out(i = () => {}, n = () => {}) {
                    He(e, t, {
                       during: this.leave.during,
                       start: this.leave.start,
                       end: this.leave.end
                    }, i, n)
                 }
              })
           }

           function qe(e) {
              let t = e.parentNode;
              if (t) return t._x_hidePromise ? t : qe(t)
           }

           function He(e, t, {
              during: i,
              start: n,
              end: s
           } = {}, r = () => {}, o = () => {}) {
              if (e._x_transitioning && e._x_transitioning.cancel(), 0 === Object.keys(i).length && 0 === Object.keys(n).length && 0 === Object.keys(s).length) return r(), void o();
              let a, l, c;
              ! function (e, t) {
                 let i, n, s, r = Re((() => {
                    O((() => {
                       i = !0, n || t.before(), s || (t.end(), Ne()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning
                    }))
                 }));
                 e._x_transitioning = {
                    beforeCancels: [],
                    beforeCancel(e) {
                       this.beforeCancels.push(e)
                    },
                    cancel: Re((function () {
                       for (; this.beforeCancels.length;) this.beforeCancels.shift()();
                       r()
                    })),
                    finish: r
                 }, O((() => {
                    t.start(), t.during()
                 })), $e = !0, requestAnimationFrame((() => {
                    if (i) return;
                    let r = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")),
                       o = 1e3 * Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", ""));
                    0 === r && (r = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))), O((() => {
                       t.before()
                    })), n = !0, requestAnimationFrame((() => {
                       i || (O((() => {
                          t.end()
                       })), Ne(), setTimeout(e._x_transitioning.finish, r + o), s = !0)
                    }))
                 }))
              }(e, {
                 start() {
                    a = t(e, n)
                 },
                 during() {
                    l = t(e, i)
                 },
                 before: r,
                 end() {
                    a(), c = t(e, s)
                 },
                 after: o,
                 cleanup() {
                    l(), c()
                 }
              })
           }

           function Ve(e, t, i) {
              if (-1 === e.indexOf(t)) return i;
              const n = e[e.indexOf(t) + 1];
              if (!n) return i;
              if ("scale" === t && isNaN(n)) return i;
              if ("duration" === t || "delay" === t) {
                 let e = n.match(/([0-9]+)ms/);
                 if (e) return e[1]
              }
              return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [n, e[e.indexOf(t) + 2]].join(" ") : n
           }
           se("transition", ((e, {
              value: t,
              modifiers: i,
              expression: n
           }, {
              evaluate: s
           }) => {
              "function" == typeof n && (n = s(n)), !1 !== n && (n && "boolean" != typeof n ? function (e, t, i) {
                 Ue(e, ze, "");
                 let n = {
                    enter: t => {
                       e._x_transition.enter.during = t
                    },
                    "enter-start": t => {
                       e._x_transition.enter.start = t
                    },
                    "enter-end": t => {
                       e._x_transition.enter.end = t
                    },
                    leave: t => {
                       e._x_transition.leave.during = t
                    },
                    "leave-start": t => {
                       e._x_transition.leave.start = t
                    },
                    "leave-end": t => {
                       e._x_transition.leave.end = t
                    }
                 };
                 n[i](t)
              }(e, n, t) : function (e, t, i) {
                 Ue(e, We);
                 let n = !t.includes("in") && !t.includes("out") && !i,
                    s = n || t.includes("in") || ["enter"].includes(i),
                    r = n || t.includes("out") || ["leave"].includes(i);
                 t.includes("in") && !n && (t = t.filter(((e, i) => i < t.indexOf("out"))));
                 t.includes("out") && !n && (t = t.filter(((e, i) => i > t.indexOf("out"))));
                 let o = !t.includes("opacity") && !t.includes("scale"),
                    a = o || t.includes("opacity"),
                    l = o || t.includes("scale"),
                    c = a ? 0 : 1,
                    u = l ? Ve(t, "scale", 95) / 100 : 1,
                    d = Ve(t, "delay", 0) / 1e3,
                    h = Ve(t, "origin", "center"),
                    f = "opacity, transform",
                    p = Ve(t, "duration", 150) / 1e3,
                    g = Ve(t, "duration", 75) / 1e3,
                    m = "cubic-bezier(0.4, 0.0, 0.2, 1)";
                 s && (e._x_transition.enter.during = {
                    transformOrigin: h,
                    transitionDelay: `${d}s`,
                    transitionProperty: f,
                    transitionDuration: `${p}s`,
                    transitionTimingFunction: m
                 }, e._x_transition.enter.start = {
                    opacity: c,
                    transform: `scale(${u})`
                 }, e._x_transition.enter.end = {
                    opacity: 1,
                    transform: "scale(1)"
                 });
                 r && (e._x_transition.leave.during = {
                    transformOrigin: h,
                    transitionDelay: `${d}s`,
                    transitionProperty: f,
                    transitionDuration: `${g}s`,
                    transitionTimingFunction: m
                 }, e._x_transition.leave.start = {
                    opacity: 1,
                    transform: "scale(1)"
                 }, e._x_transition.leave.end = {
                    opacity: c,
                    transform: `scale(${u})`
                 })
              }(e, i, t))
           })), window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, i, n) {
              const s = "visible" === document.visibilityState ? requestAnimationFrame : setTimeout;
              let r = () => s(i);
              t ? e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(i) : r() : e._x_transition ? e._x_transition.in(i) : r() : (e._x_hidePromise = e._x_transition ? new Promise(((t, i) => {
                 e._x_transition.out((() => {}), (() => t(n))), e._x_transitioning && e._x_transitioning.beforeCancel((() => i({
                    isFromCancelledTransition: !0
                 })))
              })) : Promise.resolve(n), queueMicrotask((() => {
                 let t = qe(e);
                 t ? (t._x_hideChildren || (t._x_hideChildren = []), t._x_hideChildren.push(e)) : s((() => {
                    let t = e => {
                       let i = Promise.all([e._x_hidePromise, ...(e._x_hideChildren || []).map(t)]).then((([e]) => e?.()));
                       return delete e._x_hidePromise, delete e._x_hideChildren, i
                    };
                    t(e).catch((e => {
                       if (!e.isFromCancelledTransition) throw e
                    }))
                 }))
              })))
           };
           var Xe = !1;

           function Ge(e, t = () => {}) {
              return (...i) => Xe ? t(...i) : e(...i)
           }
           var Qe = [];

           function Je(e) {
              Qe.push(e)
           }
           var Ke = !1;

           function Ye(e) {
              let t = s;
              g(((e, i) => {
                 let n = t(e);
                 return r(n), () => {}
              })), e(), g(t)
           }

           function Ze(e, t, i, s = []) {
              switch (e._x_bindings || (e._x_bindings = n({})), e._x_bindings[t] = i, t = s.includes("camel") ? t.toLowerCase().replace(/-(\w)/g, ((e, t) => t.toUpperCase())) : t) {
                 case "value":
                    ! function (e, t) {
                       if ("radio" === e.type) void 0 === e.attributes.value && (e.value = t), window.fromModel && (e.checked = "boolean" == typeof t ? it(e.value) === t : tt(e.value, t));
                       else if ("checkbox" === e.type) Number.isInteger(t) ? e.value = t : Array.isArray(t) || "boolean" == typeof t || [null, void 0].includes(t) ? Array.isArray(t) ? e.checked = t.some((t => tt(t, e.value))) : e.checked = !!t : e.value = String(t);
                       else if ("SELECT" === e.tagName) ! function (e, t) {
                          const i = [].concat(t).map((e => e + ""));
                          Array.from(e.options).forEach((e => {
                             e.selected = i.includes(e.value)
                          }))
                       }(e, t);
                       else {
                          if (e.value === t) return;
                          e.value = void 0 === t ? "" : t
                       }
                    }(e, i);
                    break;
                 case "style":
                    ! function (e, t) {
                       e._x_undoAddedStyles && e._x_undoAddedStyles();
                       e._x_undoAddedStyles = We(e, t)
                    }(e, i);
                    break;
                 case "class":
                    ! function (e, t) {
                       e._x_undoAddedClasses && e._x_undoAddedClasses();
                       e._x_undoAddedClasses = ze(e, t)
                    }(e, i);
                    break;
                 case "selected":
                 case "checked":
                    ! function (e, t, i) {
                       et(e, t, i),
                          function (e, t, i) {
                             e[t] !== i && (e[t] = i)
                          }(e, t, i)
                    }(e, t, i);
                    break;
                 default:
                    et(e, t, i)
              }
           }

           function et(e, t, i) {
              [null, void 0, !1].includes(i) && function (e) {
                 return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e)
              }(t) ? e.removeAttribute(t) : (nt(t) && (i = t), function (e, t, i) {
                 e.getAttribute(t) != i && e.setAttribute(t, i)
              }(e, t, i))
           }

           function tt(e, t) {
              return e == t
           }

           function it(e) {
              return !![1, "1", "true", "on", "yes", !0].includes(e) || ![0, "0", "false", "off", "no", !1].includes(e) && (e ? Boolean(e) : null)
           }

           function nt(e) {
              return ["disabled", "checked", "required", "readonly", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
           }

           function st(e, t, i) {
              let n = e.getAttribute(t);
              return null === n ? "function" == typeof i ? i() : i : "" === n || (nt(t) ? !![t, "true"].includes(n) : n)
           }

           function rt(e, t) {
              var i;
              return function () {
                 var n = this,
                    s = arguments;
                 clearTimeout(i), i = setTimeout((function () {
                    i = null, e.apply(n, s)
                 }), t)
              }
           }

           function ot(e, t) {
              let i;
              return function () {
                 let n = this,
                    s = arguments;
                 i || (e.apply(n, s), i = !0, setTimeout((() => i = !1), t))
              }
           }

           function at({
              get: e,
              set: t
           }, {
              get: i,
              set: n
           }) {
              let o, a, l = !0,
                 c = s((() => {
                    let s = e(),
                       r = i();
                    if (l) n(lt(s)), l = !1;
                    else {
                       let e = JSON.stringify(s),
                          i = JSON.stringify(r);
                       e !== o ? n(lt(s)) : e !== i && t(lt(r))
                    }
                    o = JSON.stringify(e()), a = JSON.stringify(i())
                 }));
              return () => {
                 r(c)
              }
           }

           function lt(e) {
              return "object" == typeof e ? JSON.parse(JSON.stringify(e)) : e
           }
           var ct = {},
              ut = !1;
           var dt = {};

           function ht(e, t, i) {
              let n = [];
              for (; n.length;) n.pop()();
              let s = Object.entries(t).map((([e, t]) => ({
                    name: e,
                    value: t
                 }))),
                 r = oe(s);
              return s = s.map((e => r.find((t => t.name === e.name)) ? {
                 name: `x-bind:${e.name}`,
                 value: `"${e.value}"`
              } : e)), re(e, s, i).map((e => {
                 n.push(e.runCleanups), e()
              })), () => {
                 for (; n.length;) n.pop()()
              }
           }
           var ft = {};
           var pt = {
              get reactive() {
                 return n
              },
              get release() {
                 return r
              },
              get effect() {
                 return s
              },
              get raw() {
                 return o
              },
              version: "3.14.1",
              flushAndStopDeferringMutations: function () {
                 L = !1, T(M), M = []
              },
              dontAutoEvaluateFunctions: G,
              disableEffectScheduling: function (e) {
                 p = !1, e(), p = !0
              },
              startObservingMutations: P,
              stopObservingMutations: A,
              setReactivityEngine: function (e) {
                 n = e.reactive, r = e.release, s = t => e.effect(t, {
                    scheduler: e => {
                       p ? d(e) : e()
                    }
                 }), o = e.raw
              },
              onAttributeRemoved: x,
              onAttributesAdded: w,
              closestDataStack: I,
              skipDuringClone: Ge,
              onlyDuringClone: function (e) {
                 return (...t) => Xe && e(...t)
              },
              addRootSelector: ke,
              addInitSelector: Oe,
              interceptClone: Je,
              addScopeToNode: j,
              deferMutations: function () {
                 L = !0
              },
              mapAttributes: pe,
              evaluateLater: J,
              interceptInit: function (e) {
                 Te.push(e)
              },
              setEvaluator: function (e) {
                 K = e
              },
              mergeProxies: $,
              extractProp: function (e, t, i, n = !0) {
                 if (e._x_bindings && void 0 !== e._x_bindings[t]) return e._x_bindings[t];
                 if (e._x_inlineBindings && void 0 !== e._x_inlineBindings[t]) {
                    let i = e._x_inlineBindings[t];
                    return i.extract = n, G((() => Q(e, i.expression)))
                 }
                 return st(e, t, i)
              },
              findClosest: Me,
              onElRemoved: b,
              closestRoot: Le,
              destroyTree: je,
              interceptor: B,
              transition: He,
              setStyles: We,
              mutateDom: O,
              directive: se,
              entangle: at,
              throttle: ot,
              debounce: rt,
              evaluate: Q,
              initTree: De,
              nextTick: Fe,
              prefixed: ie,
              prefix: function (e) {
                 te = e
              },
              plugin: function (e) {
                 (Array.isArray(e) ? e : [e]).forEach((e => e(pt)))
              },
              magic: U,
              store: function (e, t) {
                 if (ut || (ct = n(ct), ut = !0), void 0 === t) return ct[e];
                 ct[e] = t, "object" == typeof t && null !== t && t.hasOwnProperty("init") && "function" == typeof t.init && ct[e].init(), z(ct[e])
              },
              start: function () {
                 var e;
                 Se && xe("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), Se = !0, document.body || xe("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), be(document, "alpine:init"), be(document, "alpine:initializing"), P(), e = e => De(e, we), _.push(e), b((e => je(e))), w(((e, t) => {
                    re(e, t).forEach((e => e()))
                 })), Array.from(document.querySelectorAll(Ae().join(","))).filter((e => !Le(e.parentElement, !0))).forEach((e => {
                    De(e)
                 })), be(document, "alpine:initialized"), setTimeout((() => {
                    [
                       ["ui", "dialog", ["[x-dialog], [x-popover]"]],
                       ["anchor", "anchor", ["[x-anchor]"]],
                       ["sort", "sort", ["[x-sort]"]]
                    ].forEach((([e, t, i]) => {
                       var n;
                       n = t, Object.keys(ne).includes(n) || i.some((t => {
                          if (document.querySelector(t)) return xe(`found "${t}", but missing ${e} plugin`), !0
                       }))
                    }))
                 }))
              },
              clone: function (e, t) {
                 t._x_dataStack || (t._x_dataStack = e._x_dataStack), Xe = !0, Ke = !0, Ye((() => {
                    ! function (e) {
                       let t = !1;
                       De(e, ((e, i) => {
                          we(e, ((e, n) => {
                             if (t && function (e) {
                                   return Pe().some((t => e.matches(t)))
                                }(e)) return n();
                             t = !0, i(e, n)
                          }))
                       }))
                    }(t)
                 })), Xe = !1, Ke = !1
              },
              cloneNode: function (e, t) {
                 Qe.forEach((i => i(e, t))), Xe = !0, Ye((() => {
                    De(t, ((e, t) => {
                       t(e, (() => {}))
                    }))
                 })), Xe = !1
              },
              bound: function (e, t, i) {
                 return e._x_bindings && void 0 !== e._x_bindings[t] ? e._x_bindings[t] : st(e, t, i)
              },
              $data: D,
              watch: m,
              walk: we,
              data: function (e, t) {
                 ft[e] = t
              },
              bind: function (e, t) {
                 let i = "function" != typeof t ? () => t : t;
                 return e instanceof Element ? ht(e, i()) : (dt[e] = i, () => {})
              }
           };

           function gt(e, t) {
              const i = Object.create(null),
                 n = e.split(",");
              for (let e = 0; e < n.length; e++) i[n[e]] = !0;
              return t ? e => !!i[e.toLowerCase()] : e => !!i[e]
           }
           var mt, vt = Object.freeze({}),
              yt = (Object.freeze([]), Object.prototype.hasOwnProperty),
              _t = (e, t) => yt.call(e, t),
              bt = Array.isArray,
              wt = e => "[object Map]" === Ct(e),
              xt = e => "symbol" == typeof e,
              St = e => null !== e && "object" == typeof e,
              Et = Object.prototype.toString,
              Ct = e => Et.call(e),
              Pt = e => Ct(e).slice(8, -1),
              At = e => "string" == typeof e && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
              kt = e => {
                 const t = Object.create(null);
                 return i => t[i] || (t[i] = e(i))
              },
              Ot = /-(\w)/g,
              Lt = (kt((e => e.replace(Ot, ((e, t) => t ? t.toUpperCase() : "")))), /\B([A-Z])/g),
              Mt = (kt((e => e.replace(Lt, "-$1").toLowerCase())), kt((e => e.charAt(0).toUpperCase() + e.slice(1)))),
              Tt = (kt((e => e ? `on${Mt(e)}` : "")), (e, t) => e !== t && (e == e || t == t)),
              Dt = new WeakMap,
              jt = [],
              It = Symbol("iterate"),
              $t = Symbol("Map key iterate");
           var Ft = 0;

           function Nt(e) {
              const {
                 deps: t
              } = e;
              if (t.length) {
                 for (let i = 0; i < t.length; i++) t[i].delete(e);
                 t.length = 0
              }
           }
           var zt = !0,
              Bt = [];

           function Wt() {
              const e = Bt.pop();
              zt = void 0 === e || e
           }

           function Rt(e, t, i) {
              if (!zt || void 0 === mt) return;
              let n = Dt.get(e);
              n || Dt.set(e, n = new Map);
              let s = n.get(i);
              s || n.set(i, s = new Set), s.has(mt) || (s.add(mt), mt.deps.push(s), mt.options.onTrack && mt.options.onTrack({
                 effect: mt,
                 target: e,
                 type: t,
                 key: i
              }))
           }

           function Ut(e, t, i, n, s, r) {
              const o = Dt.get(e);
              if (!o) return;
              const a = new Set,
                 l = e => {
                    e && e.forEach((e => {
                       (e !== mt || e.allowRecurse) && a.add(e)
                    }))
                 };
              if ("clear" === t) o.forEach(l);
              else if ("length" === i && bt(e)) o.forEach(((e, t) => {
                 ("length" === t || t >= n) && l(e)
              }));
              else switch (void 0 !== i && l(o.get(i)), t) {
                 case "add":
                    bt(e) ? At(i) && l(o.get("length")) : (l(o.get(It)), wt(e) && l(o.get($t)));
                    break;
                 case "delete":
                    bt(e) || (l(o.get(It)), wt(e) && l(o.get($t)));
                    break;
                 case "set":
                    wt(e) && l(o.get(It))
              }
              a.forEach((o => {
                 o.options.onTrigger && o.options.onTrigger({
                    effect: o,
                    target: e,
                    key: i,
                    type: t,
                    newValue: n,
                    oldValue: s,
                    oldTarget: r
                 }), o.options.scheduler ? o.options.scheduler(o) : o()
              }))
           }
           var qt = gt("__proto__,__v_isRef,__isVue"),
              Ht = new Set(Object.getOwnPropertyNames(Symbol).map((e => Symbol[e])).filter(xt)),
              Vt = Jt(),
              Xt = Jt(!0),
              Gt = Qt();

           function Qt() {
              const e = {};
              return ["includes", "indexOf", "lastIndexOf"].forEach((t => {
                 e[t] = function (...e) {
                    const i = Li(this);
                    for (let e = 0, t = this.length; e < t; e++) Rt(i, "get", e + "");
                    const n = i[t](...e);
                    return -1 === n || !1 === n ? i[t](...e.map(Li)) : n
                 }
              })), ["push", "pop", "shift", "unshift", "splice"].forEach((t => {
                 e[t] = function (...e) {
                    Bt.push(zt), zt = !1;
                    const i = Li(this)[t].apply(this, e);
                    return Wt(), i
                 }
              })), e
           }

           function Jt(e = !1, t = !1) {
              return function (i, n, s) {
                 if ("__v_isReactive" === n) return !e;
                 if ("__v_isReadonly" === n) return e;
                 if ("__v_raw" === n && s === (e ? t ? Pi : Ci : t ? Ei : Si).get(i)) return i;
                 const r = bt(i);
                 if (!e && r && _t(Gt, n)) return Reflect.get(Gt, n, s);
                 const o = Reflect.get(i, n, s);
                 if (xt(n) ? Ht.has(n) : qt(n)) return o;
                 if (e || Rt(i, "get", n), t) return o;
                 if (Mi(o)) {
                    return !r || !At(n) ? o.value : o
                 }
                 return St(o) ? e ? ki(o) : Ai(o) : o
              }
           }

           function Kt(e = !1) {
              return function (t, i, n, s) {
                 let r = t[i];
                 if (!e && (n = Li(n), r = Li(r), !bt(t) && Mi(r) && !Mi(n))) return r.value = n, !0;
                 const o = bt(t) && At(i) ? Number(i) < t.length : _t(t, i),
                    a = Reflect.set(t, i, n, s);
                 return t === Li(s) && (o ? Tt(n, r) && Ut(t, "set", i, n, r) : Ut(t, "add", i, n)), a
              }
           }
           var Yt = {
                 get: Vt,
                 set: Kt(),
                 deleteProperty: function (e, t) {
                    const i = _t(e, t),
                       n = e[t],
                       s = Reflect.deleteProperty(e, t);
                    return s && i && Ut(e, "delete", t, void 0, n), s
                 },
                 has: function (e, t) {
                    const i = Reflect.has(e, t);
                    return xt(t) && Ht.has(t) || Rt(e, "has", t), i
                 },
                 ownKeys: function (e) {
                    return Rt(e, "iterate", bt(e) ? "length" : It), Reflect.ownKeys(e)
                 }
              },
              Zt = {
                 get: Xt,
                 set(e, t) {
                    return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0
                 },
                 deleteProperty(e, t) {
                    return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0
                 }
              },
              ei = e => St(e) ? Ai(e) : e,
              ti = e => St(e) ? ki(e) : e,
              ii = e => e,
              ni = e => Reflect.getPrototypeOf(e);

           function si(e, t, i = !1, n = !1) {
              const s = Li(e = e.__v_raw),
                 r = Li(t);
              t !== r && !i && Rt(s, "get", t), !i && Rt(s, "get", r);
              const {
                 has: o
              } = ni(s), a = n ? ii : i ? ti : ei;
              return o.call(s, t) ? a(e.get(t)) : o.call(s, r) ? a(e.get(r)) : void(e !== s && e.get(t))
           }

           function ri(e, t = !1) {
              const i = this.__v_raw,
                 n = Li(i),
                 s = Li(e);
              return e !== s && !t && Rt(n, "has", e), !t && Rt(n, "has", s), e === s ? i.has(e) : i.has(e) || i.has(s)
           }

           function oi(e, t = !1) {
              return e = e.__v_raw, !t && Rt(Li(e), "iterate", It), Reflect.get(e, "size", e)
           }

           function ai(e) {
              e = Li(e);
              const t = Li(this);
              return ni(t).has.call(t, e) || (t.add(e), Ut(t, "add", e, e)), this
           }

           function li(e, t) {
              t = Li(t);
              const i = Li(this),
                 {
                    has: n,
                    get: s
                 } = ni(i);
              let r = n.call(i, e);
              r ? xi(i, n, e) : (e = Li(e), r = n.call(i, e));
              const o = s.call(i, e);
              return i.set(e, t), r ? Tt(t, o) && Ut(i, "set", e, t, o) : Ut(i, "add", e, t), this
           }

           function ci(e) {
              const t = Li(this),
                 {
                    has: i,
                    get: n
                 } = ni(t);
              let s = i.call(t, e);
              s ? xi(t, i, e) : (e = Li(e), s = i.call(t, e));
              const r = n ? n.call(t, e) : void 0,
                 o = t.delete(e);
              return s && Ut(t, "delete", e, void 0, r), o
           }

           function ui() {
              const e = Li(this),
                 t = 0 !== e.size,
                 i = wt(e) ? new Map(e) : new Set(e),
                 n = e.clear();
              return t && Ut(e, "clear", void 0, void 0, i), n
           }

           function di(e, t) {
              return function (i, n) {
                 const s = this,
                    r = s.__v_raw,
                    o = Li(r),
                    a = t ? ii : e ? ti : ei;
                 return !e && Rt(o, "iterate", It), r.forEach(((e, t) => i.call(n, a(e), a(t), s)))
              }
           }

           function hi(e, t, i) {
              return function (...n) {
                 const s = this.__v_raw,
                    r = Li(s),
                    o = wt(r),
                    a = "entries" === e || e === Symbol.iterator && o,
                    l = "keys" === e && o,
                    c = s[e](...n),
                    u = i ? ii : t ? ti : ei;
                 return !t && Rt(r, "iterate", l ? $t : It), {
                    next() {
                       const {
                          value: e,
                          done: t
                       } = c.next();
                       return t ? {
                          value: e,
                          done: t
                       } : {
                          value: a ? [u(e[0]), u(e[1])] : u(e),
                          done: t
                       }
                    },
                    [Symbol.iterator]() {
                       return this
                    }
                 }
              }
           }

           function fi(e) {
              return function (...t) {
                 {
                    const i = t[0] ? `on key "${t[0]}" ` : "";
                    console.warn(`${Mt(e)} operation ${i}failed: target is readonly.`, Li(this))
                 }
                 return "delete" !== e && this
              }
           }

           function pi() {
              const e = {
                    get(e) {
                       return si(this, e)
                    },
                    get size() {
                       return oi(this)
                    },
                    has: ri,
                    add: ai,
                    set: li,
                    delete: ci,
                    clear: ui,
                    forEach: di(!1, !1)
                 },
                 t = {
                    get(e) {
                       return si(this, e, !1, !0)
                    },
                    get size() {
                       return oi(this)
                    },
                    has: ri,
                    add: ai,
                    set: li,
                    delete: ci,
                    clear: ui,
                    forEach: di(!1, !0)
                 },
                 i = {
                    get(e) {
                       return si(this, e, !0)
                    },
                    get size() {
                       return oi(this, !0)
                    },
                    has(e) {
                       return ri.call(this, e, !0)
                    },
                    add: fi("add"),
                    set: fi("set"),
                    delete: fi("delete"),
                    clear: fi("clear"),
                    forEach: di(!0, !1)
                 },
                 n = {
                    get(e) {
                       return si(this, e, !0, !0)
                    },
                    get size() {
                       return oi(this, !0)
                    },
                    has(e) {
                       return ri.call(this, e, !0)
                    },
                    add: fi("add"),
                    set: fi("set"),
                    delete: fi("delete"),
                    clear: fi("clear"),
                    forEach: di(!0, !0)
                 };
              return ["keys", "values", "entries", Symbol.iterator].forEach((s => {
                 e[s] = hi(s, !1, !1), i[s] = hi(s, !0, !1), t[s] = hi(s, !1, !0), n[s] = hi(s, !0, !0)
              })), [e, i, t, n]
           }
           var [gi, mi, vi, yi] = pi();

           function _i(e, t) {
              const i = t ? e ? yi : vi : e ? mi : gi;
              return (t, n, s) => "__v_isReactive" === n ? !e : "__v_isReadonly" === n ? e : "__v_raw" === n ? t : Reflect.get(_t(i, n) && n in t ? i : t, n, s)
           }
           var bi = {
                 get: _i(!1, !1)
              },
              wi = {
                 get: _i(!0, !1)
              };

           function xi(e, t, i) {
              const n = Li(i);
              if (n !== i && t.call(e, n)) {
                 const t = Pt(e);
                 console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${"Map"===t?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
              }
           }
           var Si = new WeakMap,
              Ei = new WeakMap,
              Ci = new WeakMap,
              Pi = new WeakMap;

           function Ai(e) {
              return e && e.__v_isReadonly ? e : Oi(e, !1, Yt, bi, Si)
           }

           function ki(e) {
              return Oi(e, !0, Zt, wi, Ci)
           }

           function Oi(e, t, i, n, s) {
              if (!St(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
              if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
              const r = s.get(e);
              if (r) return r;
              const o = (a = e).__v_skip || !Object.isExtensible(a) ? 0 : function (e) {
                 switch (e) {
                    case "Object":
                    case "Array":
                       return 1;
                    case "Map":
                    case "Set":
                    case "WeakMap":
                    case "WeakSet":
                       return 2;
                    default:
                       return 0
                 }
              }(Pt(a));
              var a;
              if (0 === o) return e;
              const l = new Proxy(e, 2 === o ? n : i);
              return s.set(e, l), l
           }

           function Li(e) {
              return e && Li(e.__v_raw) || e
           }

           function Mi(e) {
              return Boolean(e && !0 === e.__v_isRef)
           }
           U("nextTick", (() => Fe)), U("dispatch", (e => be.bind(be, e))), U("watch", ((e, {
              evaluateLater: t,
              cleanup: i
           }) => (e, n) => {
              let s = t(e),
                 r = m((() => {
                    let e;
                    return s((t => e = t)), e
                 }), n);
              i(r)
           })), U("store", (function () {
              return ct
           })), U("data", (e => D(e))), U("root", (e => Le(e))), U("refs", (e => (e._x_refs_proxy || (e._x_refs_proxy = $(function (e) {
              let t = [];
              return Me(e, (e => {
                 e._x_refs && t.push(e._x_refs)
              })), t
           }(e))), e._x_refs_proxy)));
           var Ti = {};

           function Di(e) {
              return Ti[e] || (Ti[e] = 0), ++Ti[e]
           }

           function ji(e, t, i) {
              U(t, (n => xe(`You can't use [$${t}] without first installing the "${e}" plugin here: #/${i}`, n)))
           }
           U("id", ((e, {
              cleanup: t
           }) => (i, n = null) => function (e, t, i, n) {
              e._x_id || (e._x_id = {});
              if (e._x_id[t]) return e._x_id[t];
              let s = n();
              return e._x_id[t] = s, i((() => {
                 delete e._x_id[t]
              })), s
           }(e, `${i}${n?`-${n}`:""}`, t, (() => {
              let t = function (e, t) {
                    return Me(e, (e => {
                       if (e._x_ids && e._x_ids[t]) return !0
                    }))
                 }(e, i),
                 s = t ? t._x_ids[i] : Di(i);
              return n ? `${i}-${s}-${n}` : `${i}-${s}`
           })))), Je(((e, t) => {
              e._x_id && (t._x_id = e._x_id)
           })), U("el", (e => e)), ji("Focus", "focus", "focus"), ji("Persist", "persist", "persist"), se("modelable", ((e, {
              expression: t
           }, {
              effect: i,
              evaluateLater: n,
              cleanup: s
           }) => {
              let r = n(t),
                 o = () => {
                    let e;
                    return r((t => e = t)), e
                 },
                 a = n(`${t} = __placeholder`),
                 l = e => a((() => {}), {
                    scope: {
                       __placeholder: e
                    }
                 }),
                 c = o();
              l(c), queueMicrotask((() => {
                 if (!e._x_model) return;
                 e._x_removeModelListeners.default();
                 let t = e._x_model.get,
                    i = e._x_model.set,
                    n = at({
                       get() {
                          return t()
                       },
                       set(e) {
                          i(e)
                       }
                    }, {
                       get() {
                          return o()
                       },
                       set(e) {
                          l(e)
                       }
                    });
                 s(n)
              }))
           })), se("teleport", ((e, {
              modifiers: t,
              expression: i
           }, {
              cleanup: n
           }) => {
              "template" !== e.tagName.toLowerCase() && xe("x-teleport can only be used on a <template> tag", e);
              let s = $i(i),
                 r = e.content.cloneNode(!0).firstElementChild;
              e._x_teleport = r, r._x_teleportBack = e, e.setAttribute("data-teleport-template", !0), r.setAttribute("data-teleport-target", !0), e._x_forwardEvents && e._x_forwardEvents.forEach((t => {
                 r.addEventListener(t, (t => {
                    t.stopPropagation(), e.dispatchEvent(new t.constructor(t.type, t))
                 }))
              })), j(r, {}, e);
              let o = (e, t, i) => {
                 i.includes("prepend") ? t.parentNode.insertBefore(e, t) : i.includes("append") ? t.parentNode.insertBefore(e, t.nextSibling) : t.appendChild(e)
              };
              O((() => {
                 o(r, s, t), Ge((() => {
                    De(r), r._x_ignore = !0
                 }))()
              })), e._x_teleportPutBack = () => {
                 let n = $i(i);
                 O((() => {
                    o(e._x_teleport, n, t)
                 }))
              }, n((() => r.remove()))
           }));
           var Ii = document.createElement("div");

           function $i(e) {
              let t = Ge((() => document.querySelector(e)), (() => Ii))();
              return t || xe(`Cannot find x-teleport element for selector: "${e}"`), t
           }
           var Fi = () => {};

           function Ni(e, t, i, n) {
              let s = e,
                 r = e => n(e),
                 o = {},
                 a = (e, t) => i => t(e, i);
              if (i.includes("dot") && (t = t.replace(/-/g, ".")), i.includes("camel") && (t = function (e) {
                    return e.toLowerCase().replace(/-(\w)/g, ((e, t) => t.toUpperCase()))
                 }(t)), i.includes("passive") && (o.passive = !0), i.includes("capture") && (o.capture = !0), i.includes("window") && (s = window), i.includes("document") && (s = document), i.includes("debounce")) {
                 let e = i[i.indexOf("debounce") + 1] || "invalid-wait",
                    t = zi(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                 r = rt(r, t)
              }
              if (i.includes("throttle")) {
                 let e = i[i.indexOf("throttle") + 1] || "invalid-wait",
                    t = zi(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                 r = ot(r, t)
              }
              return i.includes("prevent") && (r = a(r, ((e, t) => {
                 t.preventDefault(), e(t)
              }))), i.includes("stop") && (r = a(r, ((e, t) => {
                 t.stopPropagation(), e(t)
              }))), i.includes("once") && (r = a(r, ((e, i) => {
                 e(i), s.removeEventListener(t, r, o)
              }))), (i.includes("away") || i.includes("outside")) && (s = document, r = a(r, ((t, i) => {
                 e.contains(i.target) || !1 !== i.target.isConnected && (e.offsetWidth < 1 && e.offsetHeight < 1 || !1 !== e._x_isShown && t(i))
              }))), i.includes("self") && (r = a(r, ((t, i) => {
                 i.target === e && t(i)
              }))), (function (e) {
                 return ["keydown", "keyup"].includes(e)
              }(t) || Bi(t)) && (r = a(r, ((e, t) => {
                 (function (e, t) {
                    let i = t.filter((e => !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(e)));
                    if (i.includes("debounce")) {
                       let e = i.indexOf("debounce");
                       i.splice(e, zi((i[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                    }
                    if (i.includes("throttle")) {
                       let e = i.indexOf("throttle");
                       i.splice(e, zi((i[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                    }
                    if (0 === i.length) return !1;
                    if (1 === i.length && Wi(e.key).includes(i[0])) return !1;
                    const n = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((e => i.includes(e)));
                    if (i = i.filter((e => !n.includes(e))), n.length > 0) {
                       if (n.filter((t => ("cmd" !== t && "super" !== t || (t = "meta"), e[`${t}Key`]))).length === n.length) {
                          if (Bi(e.type)) return !1;
                          if (Wi(e.key).includes(i[0])) return !1
                       }
                    }
                    return !0
                 })(t, i) || e(t)
              }))), s.addEventListener(t, r, o), () => {
                 s.removeEventListener(t, r, o)
              }
           }

           function zi(e) {
              return !Array.isArray(e) && !isNaN(e)
           }

           function Bi(e) {
              return ["contextmenu", "click", "mouse"].some((t => e.includes(t)))
           }

           function Wi(e) {
              if (!e) return [];
              var t;
              e = [" ", "_"].includes(t = e) ? t : t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
              let i = {
                 ctrl: "control",
                 slash: "/",
                 space: " ",
                 spacebar: " ",
                 cmd: "meta",
                 esc: "escape",
                 up: "arrow-up",
                 down: "arrow-down",
                 left: "arrow-left",
                 right: "arrow-right",
                 period: ".",
                 comma: ",",
                 equal: "=",
                 minus: "-",
                 underscore: "_"
              };
              return i[e] = e, Object.keys(i).map((t => {
                 if (i[t] === e) return t
              })).filter((e => e))
           }

           function Ri(e, t, i, n) {
              return O((() => {
                 if (i instanceof CustomEvent && void 0 !== i.detail) return null !== i.detail && void 0 !== i.detail ? i.detail : i.target.value;
                 if ("checkbox" === e.type) {
                    if (Array.isArray(n)) {
                       let e = null;
                       return e = t.includes("number") ? Ui(i.target.value) : t.includes("boolean") ? it(i.target.value) : i.target.value, i.target.checked ? n.includes(e) ? n : n.concat([e]) : n.filter((t => !(t == e)))
                    }
                    return i.target.checked
                 }
                 if ("select" === e.tagName.toLowerCase() && e.multiple) return t.includes("number") ? Array.from(i.target.selectedOptions).map((e => Ui(e.value || e.text))) : t.includes("boolean") ? Array.from(i.target.selectedOptions).map((e => it(e.value || e.text))) : Array.from(i.target.selectedOptions).map((e => e.value || e.text)); {
                    let s;
                    return s = "radio" === e.type ? i.target.checked ? i.target.value : n : i.target.value, t.includes("number") ? Ui(s) : t.includes("boolean") ? it(s) : t.includes("trim") ? s.trim() : s
                 }
              }))
           }

           function Ui(e) {
              let t = e ? parseFloat(e) : null;
              return i = t, Array.isArray(i) || isNaN(i) ? e : t;
              var i
           }

           function qi(e) {
              return null !== e && "object" == typeof e && "function" == typeof e.get && "function" == typeof e.set
           }
           Fi.inline = (e, {
              modifiers: t
           }, {
              cleanup: i
           }) => {
              t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, i((() => {
                 t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
              }))
           }, se("ignore", Fi), se("effect", Ge(((e, {
              expression: t
           }, {
              effect: i
           }) => {
              i(J(e, t))
           }))), se("model", ((e, {
              modifiers: t,
              expression: i
           }, {
              effect: n,
              cleanup: s
           }) => {
              let r = e;
              t.includes("parent") && (r = e.parentNode);
              let o, a = J(r, i);
              o = "string" == typeof i ? J(r, `${i} = __placeholder`) : "function" == typeof i && "string" == typeof i() ? J(r, `${i()} = __placeholder`) : () => {};
              let l = () => {
                    let e;
                    return a((t => e = t)), qi(e) ? e.get() : e
                 },
                 c = e => {
                    let t;
                    a((e => t = e)), qi(t) ? t.set(e) : o((() => {}), {
                       scope: {
                          __placeholder: e
                       }
                    })
                 };
              "string" == typeof i && "radio" === e.type && O((() => {
                 e.hasAttribute("name") || e.setAttribute("name", i)
              }));
              var u = "select" === e.tagName.toLowerCase() || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
              let d = Xe ? () => {} : Ni(e, u, t, (i => {
                 c(Ri(e, t, i, l()))
              }));
              if (t.includes("fill") && ([void 0, null, ""].includes(l()) || "checkbox" === e.type && Array.isArray(l()) || "select" === e.tagName.toLowerCase() && e.multiple) && c(Ri(e, t, {
                    target: e
                 }, l())), e._x_removeModelListeners || (e._x_removeModelListeners = {}), e._x_removeModelListeners.default = d, s((() => e._x_removeModelListeners.default())), e.form) {
                 let i = Ni(e.form, "reset", [], (i => {
                    Fe((() => e._x_model && e._x_model.set(Ri(e, t, {
                       target: e
                    }, l()))))
                 }));
                 s((() => i()))
              }
              e._x_model = {
                 get() {
                    return l()
                 },
                 set(e) {
                    c(e)
                 }
              }, e._x_forceModelUpdate = t => {
                 void 0 === t && "string" == typeof i && i.match(/\./) && (t = ""), window.fromModel = !0, O((() => Ze(e, "value", t))), delete window.fromModel
              }, n((() => {
                 let i = l();
                 t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(i)
              }))
           })), se("cloak", (e => queueMicrotask((() => O((() => e.removeAttribute(ie("cloak")))))))), Oe((() => `[${ie("init")}]`)), se("init", Ge(((e, {
              expression: t
           }, {
              evaluate: i
           }) => "string" == typeof t ? !!t.trim() && i(t, {}, !1) : i(t, {}, !1)))), se("text", ((e, {
              expression: t
           }, {
              effect: i,
              evaluateLater: n
           }) => {
              let s = n(t);
              i((() => {
                 s((t => {
                    O((() => {
                       e.textContent = t
                    }))
                 }))
              }))
           })), se("html", ((e, {
              expression: t
           }, {
              effect: i,
              evaluateLater: n
           }) => {
              let s = n(t);
              i((() => {
                 s((t => {
                    O((() => {
                       e.innerHTML = t, e._x_ignoreSelf = !0, De(e), delete e._x_ignoreSelf
                    }))
                 }))
              }))
           })), pe(de(":", ie("bind:")));
           var Hi = (e, {
              value: t,
              modifiers: i,
              expression: n,
              original: s
           }, {
              effect: r,
              cleanup: o
           }) => {
              if (!t) {
                 let t = {};
                 return a = t, Object.entries(dt).forEach((([e, t]) => {
                    Object.defineProperty(a, e, {
                       get() {
                          return (...e) => t(...e)
                       }
                    })
                 })), void J(e, n)((t => {
                    ht(e, t, s)
                 }), {
                    scope: t
                 })
              }
              var a;
              if ("key" === t) return function (e, t) {
                 e._x_keyExpression = t
              }(e, n);
              if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract) return;
              let l = J(e, n);
              r((() => l((s => {
                 void 0 === s && "string" == typeof n && n.match(/\./) && (s = ""), O((() => Ze(e, t, s, i)))
              })))), o((() => {
                 e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedStyles && e._x_undoAddedStyles()
              }))
           };

           function Vi(e, t, i, n) {
              let s = {};
              if (/^\[.*\]$/.test(e.item) && Array.isArray(t)) {
                 e.item.replace("[", "").replace("]", "").split(",").map((e => e.trim())).forEach(((e, i) => {
                    s[e] = t[i]
                 }))
              } else if (/^\{.*\}$/.test(e.item) && !Array.isArray(t) && "object" == typeof t) {
                 e.item.replace("{", "").replace("}", "").split(",").map((e => e.trim())).forEach((e => {
                    s[e] = t[e]
                 }))
              } else s[e.item] = t;
              return e.index && (s[e.index] = i), e.collection && (s[e.collection] = n), s
           }

           function Xi() {}

           function Gi(e, t, i) {
              se(t, (n => xe(`You can't use [x-${t}] without first installing the "${e}" plugin here: #${i}`, n)))
           }
           Hi.inline = (e, {
              value: t,
              modifiers: i,
              expression: n
           }) => {
              t && (e._x_inlineBindings || (e._x_inlineBindings = {}), e._x_inlineBindings[t] = {
                 expression: n,
                 extract: !1
              })
           }, se("bind", Hi), ke((() => `[${ie("data")}]`)), se("data", ((e, {
              expression: t
           }, {
              cleanup: i
           }) => {
              if (function (e) {
                    return !!Xe && (!!Ke || e.hasAttribute("data-has-alpine-state"))
                 }(e)) return;
              t = "" === t ? "{}" : t;
              let s = {};
              q(s, e);
              let r = {};
              var o, a;
              o = r, a = s, Object.entries(ft).forEach((([e, t]) => {
                 Object.defineProperty(o, e, {
                    get() {
                       return (...e) => t.bind(a)(...e)
                    },
                    enumerable: !1
                 })
              }));
              let l = Q(e, t, {
                 scope: r
              });
              void 0 !== l && !0 !== l || (l = {}), q(l, e);
              let c = n(l);
              z(c);
              let u = j(e, c);
              c.init && Q(e, c.init), i((() => {
                 c.destroy && Q(e, c.destroy), u()
              }))
           })), Je(((e, t) => {
              e._x_dataStack && (t._x_dataStack = e._x_dataStack, t.setAttribute("data-has-alpine-state", !0))
           })), se("show", ((e, {
              modifiers: t,
              expression: i
           }, {
              effect: n
           }) => {
              let s = J(e, i);
              e._x_doHide || (e._x_doHide = () => {
                 O((() => {
                    e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0)
                 }))
              }), e._x_doShow || (e._x_doShow = () => {
                 O((() => {
                    1 === e.style.length && "none" === e.style.display ? e.removeAttribute("style") : e.style.removeProperty("display")
                 }))
              });
              let r, o = () => {
                    e._x_doHide(), e._x_isShown = !1
                 },
                 a = () => {
                    e._x_doShow(), e._x_isShown = !0
                 },
                 l = () => setTimeout(a),
                 c = Re((e => e ? a() : o()), (t => {
                    "function" == typeof e._x_toggleAndCascadeWithTransitions ? e._x_toggleAndCascadeWithTransitions(e, t, a, o) : t ? l() : o()
                 })),
                 u = !0;
              n((() => s((e => {
                 (u || e !== r) && (t.includes("immediate") && (e ? l() : o()), c(e), r = e, u = !1)
              }))))
           })), se("for", ((e, {
              expression: t
           }, {
              effect: i,
              cleanup: s
           }) => {
              let r = function (e) {
                    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                       i = /^\s*\(|\)\s*$/g,
                       n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                       s = e.match(n);
                    if (!s) return;
                    let r = {};
                    r.items = s[2].trim();
                    let o = s[1].replace(i, "").trim(),
                       a = o.match(t);
                    a ? (r.item = o.replace(t, "").trim(), r.index = a[1].trim(), a[2] && (r.collection = a[2].trim())) : r.item = o;
                    return r
                 }(t),
                 o = J(e, r.items),
                 a = J(e, e._x_keyExpression || "index");
              e._x_prevKeys = [], e._x_lookup = {}, i((() => function (e, t, i, s) {
                 let r = e => "object" == typeof e && !Array.isArray(e),
                    o = e;
                 i((i => {
                    var a;
                    a = i, !Array.isArray(a) && !isNaN(a) && i >= 0 && (i = Array.from(Array(i).keys(), (e => e + 1))), void 0 === i && (i = []);
                    let l = e._x_lookup,
                       c = e._x_prevKeys,
                       u = [],
                       d = [];
                    if (r(i)) i = Object.entries(i).map((([n, r]) => {
                       let o = Vi(t, r, n, i);
                       s((t => {
                          d.includes(t) && xe("Duplicate key on x-for", e), d.push(t)
                       }), {
                          scope: {
                             index: n,
                             ...o
                          }
                       }), u.push(o)
                    }));
                    else
                       for (let n = 0; n < i.length; n++) {
                          let r = Vi(t, i[n], n, i);
                          s((t => {
                             d.includes(t) && xe("Duplicate key on x-for", e), d.push(t)
                          }), {
                             scope: {
                                index: n,
                                ...r
                             }
                          }), u.push(r)
                       }
                    let f = [],
                       p = [],
                       g = [],
                       m = [];
                    for (let e = 0; e < c.length; e++) {
                       let t = c[e]; - 1 === d.indexOf(t) && g.push(t)
                    }
                    c = c.filter((e => !g.includes(e)));
                    let v = "template";
                    for (let e = 0; e < d.length; e++) {
                       let t = d[e],
                          i = c.indexOf(t);
                       if (-1 === i) c.splice(e, 0, t), f.push([v, e]);
                       else if (i !== e) {
                          let t = c.splice(e, 1)[0],
                             n = c.splice(i - 1, 1)[0];
                          c.splice(e, 0, n), c.splice(i, 0, t), p.push([t, n])
                       } else m.push(t);
                       v = t
                    }
                    for (let e = 0; e < g.length; e++) {
                       let t = g[e];
                       l[t]._x_effects && l[t]._x_effects.forEach(h), l[t].remove(), l[t] = null, delete l[t]
                    }
                    for (let e = 0; e < p.length; e++) {
                       let [t, i] = p[e], n = l[t], s = l[i], r = document.createElement("div");
                       O((() => {
                          s || xe('x-for ":key" is undefined or invalid', o, i, l), s.after(r), n.after(s), s._x_currentIfEl && s.after(s._x_currentIfEl), r.before(n), n._x_currentIfEl && n.after(n._x_currentIfEl), r.remove()
                       })), s._x_refreshXForScope(u[d.indexOf(i)])
                    }
                    for (let e = 0; e < f.length; e++) {
                       let [t, i] = f[e], s = "template" === t ? o : l[t];
                       s._x_currentIfEl && (s = s._x_currentIfEl);
                       let r = u[i],
                          a = d[i],
                          c = document.importNode(o.content, !0).firstElementChild,
                          h = n(r);
                       j(c, h, o), c._x_refreshXForScope = e => {
                          Object.entries(e).forEach((([e, t]) => {
                             h[e] = t
                          }))
                       }, O((() => {
                          s.after(c), Ge((() => De(c)))()
                       })), "object" == typeof a && xe("x-for key cannot be an object, it must be a string or an integer", o), l[a] = c
                    }
                    for (let e = 0; e < m.length; e++) l[m[e]]._x_refreshXForScope(u[d.indexOf(m[e])]);
                    o._x_prevKeys = d
                 }))
              }(e, r, o, a))), s((() => {
                 Object.values(e._x_lookup).forEach((e => e.remove())), delete e._x_prevKeys, delete e._x_lookup
              }))
           })), Xi.inline = (e, {
              expression: t
           }, {
              cleanup: i
           }) => {
              let n = Le(e);
              n._x_refs || (n._x_refs = {}), n._x_refs[t] = e, i((() => delete n._x_refs[t]))
           }, se("ref", Xi), se("if", ((e, {
              expression: t
           }, {
              effect: i,
              cleanup: n
           }) => {
              "template" !== e.tagName.toLowerCase() && xe("x-if can only be used on a <template> tag", e);
              let s = J(e, t);
              i((() => s((t => {
                 t ? (() => {
                    if (e._x_currentIfEl) return e._x_currentIfEl;
                    let t = e.content.cloneNode(!0).firstElementChild;
                    j(t, {}, e), O((() => {
                       e.after(t), Ge((() => De(t)))()
                    })), e._x_currentIfEl = t, e._x_undoIf = () => {
                       we(t, (e => {
                          e._x_effects && e._x_effects.forEach(h)
                       })), t.remove(), delete e._x_currentIfEl
                    }
                 })() : e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf)
              })))), n((() => e._x_undoIf && e._x_undoIf()))
           })), se("id", ((e, {
              expression: t
           }, {
              evaluate: i
           }) => {
              i(t).forEach((t => function (e, t) {
                 e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Di(t))
              }(e, t)))
           })), Je(((e, t) => {
              e._x_ids && (t._x_ids = e._x_ids)
           })), pe(de("@", ie("on:"))), se("on", Ge(((e, {
              value: t,
              modifiers: i,
              expression: n
           }, {
              cleanup: s
           }) => {
              let r = n ? J(e, n) : () => {};
              "template" === e.tagName.toLowerCase() && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
              let o = Ni(e, t, i, (e => {
                 r((() => {}), {
                    scope: {
                       $event: e
                    },
                    params: [e]
                 })
              }));
              s((() => o()))
           }))), Gi("Collapse", "collapse", "collapse"), Gi("Intersect", "intersect", "intersect"), Gi("Focus", "trap", "focus"), Gi("Mask", "mask", "mask"), pt.setEvaluator(Y), pt.setReactivityEngine({
              reactive: Ai,
              effect: function (e, t = vt) {
                 (function (e) {
                    return e && !0 === e._isEffect
                 })(e) && (e = e.raw);
                 const i = function (e, t) {
                    const i = function () {
                       if (!i.active) return e();
                       if (!jt.includes(i)) {
                          Nt(i);
                          try {
                             return Bt.push(zt), zt = !0, jt.push(i), mt = i, e()
                          } finally {
                             jt.pop(), Wt(), mt = jt[jt.length - 1]
                          }
                       }
                    };
                    return i.id = Ft++, i.allowRecurse = !!t.allowRecurse, i._isEffect = !0, i.active = !0, i.raw = e, i.deps = [], i.options = t, i
                 }(e, t);
                 return t.lazy || i(), i
              },
              release: function (e) {
                 e.active && (Nt(e), e.options.onStop && e.options.onStop(), e.active = !1)
              },
              raw: Li
           });
           var Qi = pt,
              Ji = pt
        },
        5182: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(8753);
           t.default = n.CollapserComponent
        },
        6198: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(8753);
           t.default = n.CollapserComponent
        },
        7453: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(8753);
           t.default = n.CollapserComponent
        },
        3650: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 isOpen: !1,
                 isActive: !1,
                 init: function () {
                    this.$refs.content.clientHeight > 140 && (this.isActive = !0)
                 },
                 toggle: function () {
                    this.isOpen = !this.isOpen
                 }
              }
           }
        },
        8866: function (e, t, i) {
           "use strict";
           var n = this && this.__awaiter || function (e, t, i, n) {
                 return new(i || (i = Promise))((function (s, r) {
                    function o(e) {
                       try {
                          l(n.next(e))
                       } catch (e) {
                          r(e)
                       }
                    }

                    function a(e) {
                       try {
                          l(n.throw(e))
                       } catch (e) {
                          r(e)
                       }
                    }

                    function l(e) {
                       var t;
                       e.done ? s(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                          e(t)
                       }))).then(o, a)
                    }
                    l((n = n.apply(e, t || [])).next())
                 }))
              },
              s = this && this.__generator || function (e, t) {
                 var i, n, s, r, o = {
                    label: 0,
                    sent: function () {
                       if (1 & s[0]) throw s[1];
                       return s[1]
                    },
                    trys: [],
                    ops: []
                 };
                 return r = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                 }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                 }), r;

                 function a(a) {
                    return function (l) {
                       return function (a) {
                          if (i) throw new TypeError("Generator is already executing.");
                          for (; r && (r = 0, a[0] && (o = 0)), o;) try {
                             if (i = 1, n && (s = 2 & a[0] ? n.return : a[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, a[1])).done) return s;
                             switch (n = 0, s && (a = [2 & a[0], s.value]), a[0]) {
                                case 0:
                                case 1:
                                   s = a;
                                   break;
                                case 4:
                                   return o.label++, {
                                      value: a[1],
                                      done: !1
                                   };
                                case 5:
                                   o.label++, n = a[1], a = [0];
                                   continue;
                                case 7:
                                   a = o.ops.pop(), o.trys.pop();
                                   continue;
                                default:
                                   if (!(s = o.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                      o = 0;
                                      continue
                                   }
                                   if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                                      o.label = a[1];
                                      break
                                   }
                                   if (6 === a[0] && o.label < s[1]) {
                                      o.label = s[1], s = a;
                                      break
                                   }
                                   if (s && o.label < s[2]) {
                                      o.label = s[2], o.ops.push(a);
                                      break
                                   }
                                   s[2] && o.ops.pop(), o.trys.pop();
                                   continue
                             }
                             a = t.call(e, o)
                          } catch (e) {
                             a = [6, e], n = 0
                          } finally {
                             i = s = 0
                          }
                          if (5 & a[0]) throw a[1];
                          return {
                             value: a[0] ? a[1] : void 0,
                             done: !0
                          }
                       }([a, l])
                    }
                 }
              };
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var r = i(4791),
              o = ".comment-respond-form",
              a = function (e, t) {
                 var i = new URL(e),
                    n = i.searchParams.get("source");
                 return n ? (i.searchParams.set("source", n + "/#comment-" + t), i.href) : i.href
              };
           t.default = function (e) {
              return {
                 id: e.id,
                 isHighlighted: !1,
                 isOpenOriginal: !1,
                 isShowReplies: !1,
                 isLikeButtonDisabled: !1,
                 isLikedByCurrentUser: !1,
                 isShowReplyButton: !0,
                 isUserLoggedIn: e.isUserLoggedIn,
                 init: function () {
                    var e, t = this;
                    (this.$watch("isShowReplyButton", (function (e) {
                       var i;
                       !1 !== e && (null === (i = t.$el.querySelector(o)) || void 0 === i || i.remove())
                    })), e = this.id, null !== window.location.hash.match(new RegExp("-" + e + "$")) && this.$el._x_dataStack.filter((function (e) {
                       return e.hasOwnProperty("isShowReplies")
                    })).length > 1) && (this.$el._x_dataStack[1].isShowReplies = !0)
                 },
                 like: function () {
                    var e = this;
                    if (this.isUserLoggedIn) this.isLikeButtonDisabled = !0, this.updateLikeCounter(), n(e, void 0, void 0, (function () {
                       return s(this, (function (e) {
                          switch (e.label) {
                             case 0:
                                return e.trys.push([0, 2, 3, 4]), [4, (0, r.sendLikeUnlikeRequest)(this.id)];
                             case 1:
                                return e.sent().success || this.updateLikeCounter(), [3, 4];
                             case 2:
                                return e.sent(), this.updateLikeCounter(), [3, 4];
                             case 3:
                                return this.isLikeButtonDisabled = !1, [7];
                             case 4:
                                return [2]
                          }
                       }))
                    }));
                    else {
                       var t = document.querySelector(o),
                          i = null == t ? void 0 : t.querySelector(".comment-respond-form__login-link");
                       i && (window.location.href = a(i.href, this.id))
                    }
                 },
                 updateLikeCounter: function () {
                    this.totalLikes = this.isLikedByCurrentUser ? this.totalLikes - 1 : this.totalLikes + 1, this.isLikedByCurrentUser = !this.isLikedByCurrentUser
                 },
                 replyTo: function () {
                    var e, t = null === (e = document.querySelector(o)) || void 0 === e ? void 0 : e.cloneNode(!0);
                    if (t) {
                       if (this.isUserLoggedIn) {
                          var i = t.querySelector('input[name="comment_parent"]'),
                             n = t.querySelector('textarea[name="comment"]');
                          i.value = "".concat(this.id), n.value = ""
                       }
                       if (!this.isUserLoggedIn) {
                          var s = null == t ? void 0 : t.querySelector(".comment-respond-form__login-link");
                          s.href = a(s.href, this.id)
                       }
                       this.isShowReplyButton = !1, this.$refs.footer.insertAdjacentElement("afterend", t)
                    }
                 },
                 highlightItem: function (e) {
                    var t = this;
                    this.id === e.detail.targetItemId && (this.$refs.content.scrollIntoView({
                       behavior: "smooth",
                       block: "center"
                    }), this.isHighlighted = !0, setTimeout((function () {
                       t.isHighlighted = !1
                    }), 1e3))
                 }
              }
           }
        },
        4791: function (e, t) {
           "use strict";
           var i = this && this.__awaiter || function (e, t, i, n) {
                 return new(i || (i = Promise))((function (s, r) {
                    function o(e) {
                       try {
                          l(n.next(e))
                       } catch (e) {
                          r(e)
                       }
                    }

                    function a(e) {
                       try {
                          l(n.throw(e))
                       } catch (e) {
                          r(e)
                       }
                    }

                    function l(e) {
                       var t;
                       e.done ? s(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                          e(t)
                       }))).then(o, a)
                    }
                    l((n = n.apply(e, t || [])).next())
                 }))
              },
              n = this && this.__generator || function (e, t) {
                 var i, n, s, r, o = {
                    label: 0,
                    sent: function () {
                       if (1 & s[0]) throw s[1];
                       return s[1]
                    },
                    trys: [],
                    ops: []
                 };
                 return r = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                 }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                 }), r;

                 function a(a) {
                    return function (l) {
                       return function (a) {
                          if (i) throw new TypeError("Generator is already executing.");
                          for (; r && (r = 0, a[0] && (o = 0)), o;) try {
                             if (i = 1, n && (s = 2 & a[0] ? n.return : a[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, a[1])).done) return s;
                             switch (n = 0, s && (a = [2 & a[0], s.value]), a[0]) {
                                case 0:
                                case 1:
                                   s = a;
                                   break;
                                case 4:
                                   return o.label++, {
                                      value: a[1],
                                      done: !1
                                   };
                                case 5:
                                   o.label++, n = a[1], a = [0];
                                   continue;
                                case 7:
                                   a = o.ops.pop(), o.trys.pop();
                                   continue;
                                default:
                                   if (!(s = o.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                      o = 0;
                                      continue
                                   }
                                   if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                                      o.label = a[1];
                                      break
                                   }
                                   if (6 === a[0] && o.label < s[1]) {
                                      o.label = s[1], s = a;
                                      break
                                   }
                                   if (s && o.label < s[2]) {
                                      o.label = s[2], o.ops.push(a);
                                      break
                                   }
                                   s[2] && o.ops.pop(), o.trys.pop();
                                   continue
                             }
                             a = t.call(e, o)
                          } catch (e) {
                             a = [6, e], n = 0
                          } finally {
                             i = s = 0
                          }
                          if (5 & a[0]) throw a[1];
                          return {
                             value: a[0] ? a[1] : void 0,
                             done: !0
                          }
                       }([a, l])
                    }
                 }
              };
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.sendLikeUnlikeRequest = void 0, t.sendLikeUnlikeRequest = function (e) {
              return i(this, void 0, void 0, (function () {
                 var t;
                 return n(this, (function (i) {
                    switch (i.label) {
                       case 0:
                          return (t = new FormData).append("comment_id", e), [4, fetch(swissinfoCommentLike.restUrl, {
                             method: "POST",
                             body: t,
                             headers: {
                                "X-WP-Nonce": window.swiTheme.restApi.nonce
                             }
                          })];
                       case 1:
                          return [4, i.sent().json()];
                       case 2:
                          return [2, i.sent()]
                    }
                 }))
              }))
           }
        },
        9100: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 isCancelButton: function () {
                    return void 0 !== this.isShowReplyButton && !this.isShowReplyButton
                 }
              }
           }
        },
        8126: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(3832);
           t.default = function (e) {
              return {
                 queryArgs: "newest" === e.order ? e.queryArgsNewest : e.queryArgsOldest,
                 order: e.order,
                 currentPage: 1,
                 isLoading: !1,
                 isEnd: !1,
                 init: function () {
                    var t = this;
                    this.$watch("order", (function (i) {
                       t.queryArgs = "newest" === i ? e.queryArgsNewest : e.queryArgsOldest, t.load()
                    })), this.$watch("currentPage", (function (i) {
                       t.isEnd = i === e.totalPage
                    })), this.isEnd = this.currentPage === e.totalPage;
                    var i = new URL(window.location.href).hash;
                    i && i.includes("#comment-") && this.scrollToComment(i)
                 },
                 scrollToComment: function (e) {
                    var t = this,
                       i = function () {
                          t.$dispatch("show-all-comment-item-replies");
                          var n = document.querySelector(e);
                          if (n) {
                             var s = function () {
                                var e;
                                "none" === (null === (e = n.parentElement) || void 0 === e ? void 0 : e.style.display) ? requestAnimationFrame(s): n.scrollIntoView({
                                   behavior: "smooth",
                                   block: "start"
                                })
                             };
                             requestAnimationFrame(s)
                          } else t.isEnd || t.loadNext(i)
                       };
                    i()
                 },
                 load: function () {
                    var e = this;
                    this.currentPage = 1, this.$refs.content.innerHTML = "";
                    this.request((function (t) {
                       return e.$refs.content.innerHTML = t
                    }))
                 },
                 loadNext: function (e) {
                    var t = this;
                    void 0 === e && (e = function () {}), this.currentPage++;
                    this.request((function (e) {
                       return t.$refs.content.insertAdjacentHTML("beforeend", e)
                    }), e)
                 },
                 request: function (t, i) {
                    var s = this;
                    void 0 === i && (i = function () {}), this.isLoading = !0;
                    var r = (0, n.addQueryArgs)(window.swiTheme.restApi.loadMore, {
                       page: this.currentPage,
                       view: e.view,
                       query: this.queryArgs
                    });
                    fetch(r).then((function (e) {
                       return e.json()
                    })).then((function (e) {
                       t(e.rendered)
                    })).finally((function () {
                       s.isLoading = !1, i()
                    }))
                 }
              }
           }
        },
        5348: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(8753);
           t.default = n.FlickityCarouselComponent
        },
        1734: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 errorMessage: "",
                 successMessage: "",
                 isLoading: !1,
                 isSubmitted: !1,
                 submit: function () {
                    var e = this;
                    this.isLoading = !0, this.errorMessage = "";
                    var t = new FormData(this.$refs.form);
                    fetch(window.swiTheme.restApi.contactForm, {
                       method: "POST",
                       body: t,
                       headers: {
                          "X-WP-Nonce": window.swiTheme.restApi.nonce
                       }
                    }).then((function (e) {
                       return e.json()
                    })).then((function (t) {
                       t.success ? (e.isSubmitted = !0, e.successMessage = t.message) : e.errorMessage = t.message
                    })).catch((function (t) {
                       e.errorMessage = t.message
                    })).finally((function () {
                       e.isLoading = !1
                    }))
                 }
              }
           }
        },
        421: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 isOpenInModal: !1
              }
           }
        },
        6161: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 isOpen: !1,
                 isFixed: !1,
                 open: function () {
                    var e = this;
                    this.isOpen = !0, this.isFixed = !0, setTimeout((function () {
                       e.$dispatch("add-no-scroll")
                    }), 400)
                 },
                 close: function () {
                    var e = this;
                    this.isOpen = !1, setTimeout((function () {
                       e.isFixed = !1
                    }), 400), this.$dispatch("remove-no-scroll")
                 }
              }
           }
        },
        3661: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 errorMessage: "",
                 successMessage: "",
                 isLoading: !1,
                 isSubmitted: !1,
                 submit: function () {
                    var e = this;
                    this.isLoading = !0, this.errorMessage = "";
                    var t = new FormData(this.$refs.form);
                    fetch(window.swiTheme.restApi.debateProposal, {
                       method: "POST",
                       body: t,
                       headers: {
                          "X-WP-Nonce": window.swiTheme.restApi.nonce
                       }
                    }).then((function (e) {
                       return e.json()
                    })).then((function (t) {
                       t.success ? (e.isLoading = !1, e.isSubmitted = !0, e.successMessage = t.message) : (e.errorMessage = t.message, e.isLoading = !1)
                    })).catch((function (t) {
                       e.errorMessage = t.message, e.isLoading = !1
                    }))
                 },
                 newQuestion: function () {
                    this.isSubmitted = !1, this.successMessage = "", this.$refs.textarea.value = ""
                 }
              }
           }
        },
        2515: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var i = "#",
              n = null !== document.querySelector('script[src="'.concat(i, '"]'));
           t.default = function () {
              return {
                 init: function () {
                    if (!n) {
                       var e = function () {
                          var e = document.createElement("script");
                          return e.setAttribute("src", i), e.setAttribute("type", "text/javascript"), e.setAttribute("defer", "true"), e.setAttribute("async", "true"), e
                       }();
                       e.onload = function () {
                          window.NewsPilotReco()
                       }, document.head.insertAdjacentElement("beforeend", e)
                    }
                 }
              }
           }
        },
        6894: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(8753);
           t.default = n.FlickityCarouselComponent
        },
        3414: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 isOpen: !0,
                 options: [],
                 init: function () {
                    var e = this;
                    this.$watch("options", (function (t) {
                       alert("Selected options: ".concat(t)), e.$dispatch("focus-filter-option-changed", {
                          options: t
                       })
                    }))
                 },
                 toggle: function () {
                    this.isOpen = !this.isOpen
                 },
                 removeAllFilters: function () {
                    this.options = []
                 }
              }
           }
        },
        2709: function (e, t, i) {
           "use strict";
           var n = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                 default: e
              }
           };
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var s = n(i(2522));
           i(8176), t.default = function () {
              var e;
              return {
                 currentIndex: 0,
                 init: function () {
                    var t = this,
                       i = "rtl" === document.documentElement.getAttribute("dir");
                    (e = new s.default(this.$refs.track, {
                       wrapAround: !0,
                       prevNextButtons: !1,
                       pageDots: !1,
                       adaptiveHeight: !1,
                       rightToLeft: i,
                       on: {
                          ready: function () {
                             this.resize()
                          }
                       }
                    })).on("change", (function (e) {
                       t.currentIndex = null != e ? e : 0
                    }))
                 },
                 destroy: function () {
                    e.destroy()
                 },
                 prev: function () {
                    e.previous()
                 },
                 next: function () {
                    e.next()
                 },
                 goTo: function (t) {
                    var i = e.cells.length - 1;
                    if (t === this.currentIndex || 1 === Math.abs(t - this.currentIndex) || t === i && 0 === this.currentIndex || 0 === t && this.currentIndex === i) e.select(t);
                    else {
                       var n = t > this.currentIndex ? 1 : -1,
                          s = t - n;
                       e.select(s, e.isWrapping, !0), requestAnimationFrame((function () {
                          e.select(t, e.isWrapper)
                       }))
                    }
                 }
              }
           }
        },
        2516: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 isMenuOpen: !1,
                 isSearchFormOpen: !1,
                 toggleSearchForm: function () {
                    this.isMenuOpen = !1, this.isSearchFormOpen = !this.isSearchFormOpen;
                    var e = this.$refs.headerContainer,
                       t = this.$refs.searchForm;
                    e.classList.remove("--is-fixed-header-container"), this.isSearchFormOpen ? t.classList.remove("--is-close") : setTimeout((function () {
                       t.classList.add("--is-close")
                    }), 200)
                 },
                 toggleHeaderNavigation: function () {
                    this.isMenuOpen = !this.isMenuOpen, this.isSearchFormOpen = !1;
                    var e = this.$refs.headerContainer,
                       t = this.$refs.searchForm;
                    this.isMenuOpen ? e.classList.add("--is-fixed-header-container") : setTimeout((function () {
                       e.classList.remove("--is-fixed-header-container")
                    }), 400), t.classList.add("--is-close")
                 }
              }
           }
        },
        5903: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var i = function (e, t) {
              if (window.MutationObserver) {
                 var i = new MutationObserver((function () {
                    var n = e.querySelector(t);
                    n && (! function (e, t) {
                       if (window.requestAnimationFrame && window.performance && e.scrollIntoView) {
                          var i, n = function () {
                             null !== e.offsetParent ? (e.scrollIntoView(), i || (i = performance.now()), performance.now() - i < t && requestAnimationFrame(n)) : requestAnimationFrame(n)
                          };
                          n()
                       }
                    }(n, 1e3), i.disconnect())
                 }));
                 i.observe(e, {
                    childList: !0,
                    subtree: !0
                 })
              }
           };
           t.default = function () {
              return {
                 datawrapperEmbedScript: function (e) {
                    var t = e.chartId,
                       i = e.chartPublicVersion,
                       n = e.query,
                       s = "https://datawrapper.dwcdn.net/".concat(t, "/");
                    i && (s += "".concat(i, "/")), s += "embed.js", n && (s += "?".concat(n));
                    var r = function (e) {
                       var t = document.createElement("script");
                       return t.setAttribute("src", e), t.setAttribute("async", ""), t
                    }(s);
                    this.$el.replaceWith(r)
                 },
                 alchemerSurveyScriptEmbed: function (e) {
                    var t = e.surveyId,
                       n = document.getElementById("survey-wrapper-".concat(t));
                    n && (this.$el.replaceWith(n), document.location.hash && i(n, document.location.hash))
                 }
              }
           }
        },
        3415: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 showCaption: !1,
                 init: function () {
                    var e = this;
                    window.addEventListener("scroll", (function (t) {
                       e.showCaption = !0
                    }), {
                       once: !0
                    })
                 }
              }
           }
        },
        3927: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(8753);
           t.default = n.CollapserComponent
        },
        2431: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(3832);
           t.default = function (e) {
              return {
                 currentPage: 1,
                 isLoading: !1,
                 isEnd: !1,
                 init: function () {
                    var t = this;
                    this.$watch("currentPage", (function (i) {
                       t.isEnd = i === e.totalPage
                    })), this.isEnd = this.currentPage === e.totalPage
                 },
                 loadNext: function () {
                    var t = this;
                    this.currentPage++, this.isLoading = !0;
                    var i = (0, n.addQueryArgs)(window.swiTheme.restApi.loadMore, {
                       page: this.currentPage,
                       view: e.view,
                       query: e.queryArgs,
                       utmTags: e.utmTags
                    });
                    fetch(i).then((function (e) {
                       return e.json()
                    })).then((function (e) {
                       t.$refs.content.insertAdjacentHTML("beforeend", e.rendered)
                    })).finally((function () {
                       return t.isLoading = !1
                    }))
                 }
              }
           }
        },
        5131: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 isOpen: !1,
                 isFixed: !1,
                 open: function () {
                    this.isOpen = !0, this.isFixed = !0, this.$dispatch("add-no-scroll")
                 },
                 close: function () {
                    var e = this;
                    this.isOpen = !1, setTimeout((function () {
                       e.isFixed = !1, e.$dispatch("after-modal-closed")
                    }), 400), this.$dispatch("remove-no-scroll")
                 }
              }
           }
        },
        6848: function (e, t) {
           "use strict";
           var i = this && this.__awaiter || function (e, t, i, n) {
                 return new(i || (i = Promise))((function (s, r) {
                    function o(e) {
                       try {
                          l(n.next(e))
                       } catch (e) {
                          r(e)
                       }
                    }

                    function a(e) {
                       try {
                          l(n.throw(e))
                       } catch (e) {
                          r(e)
                       }
                    }

                    function l(e) {
                       var t;
                       e.done ? s(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                          e(t)
                       }))).then(o, a)
                    }
                    l((n = n.apply(e, t || [])).next())
                 }))
              },
              n = this && this.__generator || function (e, t) {
                 var i, n, s, r, o = {
                    label: 0,
                    sent: function () {
                       if (1 & s[0]) throw s[1];
                       return s[1]
                    },
                    trys: [],
                    ops: []
                 };
                 return r = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                 }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                 }), r;

                 function a(a) {
                    return function (l) {
                       return function (a) {
                          if (i) throw new TypeError("Generator is already executing.");
                          for (; r && (r = 0, a[0] && (o = 0)), o;) try {
                             if (i = 1, n && (s = 2 & a[0] ? n.return : a[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, a[1])).done) return s;
                             switch (n = 0, s && (a = [2 & a[0], s.value]), a[0]) {
                                case 0:
                                case 1:
                                   s = a;
                                   break;
                                case 4:
                                   return o.label++, {
                                      value: a[1],
                                      done: !1
                                   };
                                case 5:
                                   o.label++, n = a[1], a = [0];
                                   continue;
                                case 7:
                                   a = o.ops.pop(), o.trys.pop();
                                   continue;
                                default:
                                   if (!(s = o.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                      o = 0;
                                      continue
                                   }
                                   if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                                      o.label = a[1];
                                      break
                                   }
                                   if (6 === a[0] && o.label < s[1]) {
                                      o.label = s[1], s = a;
                                      break
                                   }
                                   if (s && o.label < s[2]) {
                                      o.label = s[2], o.ops.push(a);
                                      break
                                   }
                                   s[2] && o.ops.pop(), o.trys.pop();
                                   continue
                             }
                             a = t.call(e, o)
                          } catch (e) {
                             a = [6, e], n = 0
                          } finally {
                             i = s = 0
                          }
                          if (5 & a[0]) throw a[1];
                          return {
                             value: a[0] ? a[1] : void 0,
                             done: !0
                          }
                       }([a, l])
                    }
                 }
              };
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function (e) {
              return {
                 isSupported: "function" == typeof navigator.canShare && navigator.canShare({
                    url: e.url
                 }),
                 invoke: function () {
                    return i(this, void 0, void 0, (function () {
                       return n(this, (function (t) {
                          switch (t.label) {
                             case 0:
                                return this.isSupported ? [4, navigator.share(e)] : [2];
                             case 1:
                                return t.sent(), [2]
                          }
                       }))
                    }))
                 }
              }
           }
        },
        9488: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var i = "swi-newsletter-modal-last-displayed";
           t.default = function () {
              return {
                 isOpen: !1,
                 isFixed: !1,
                 init: function () {
                    try {
                       var e = localStorage.getItem(i);
                       if (e && parseInt(e) + 1296e6 > Date.now()) return
                    } catch (e) {}
                    this.onScroll = this.open.bind(this), window.addEventListener("scroll", this.onScroll)
                 },
                 open: function () {
                    if (!((window.scrollY || document.documentElement.scrollTop) < 10)) {
                       this.isOpen = !0, this.isFixed = !0, this.$dispatch("add-no-scroll");
                       try {
                          localStorage.setItem(i, String(Date.now()))
                       } catch (e) {}
                       window.removeEventListener("scroll", this.onScroll)
                    }
                 },
                 close: function () {
                    var e = this;
                    this.isOpen = !1, setTimeout((function () {
                       e.isFixed = !1
                    }), 400), this.$dispatch("remove-no-scroll")
                 }
              }
           }
        },
        2381: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n, s, r = i(5753);
           ! function (e) {
              e.Inactive = "inactive", e.Playing = "playing", e.Paused = "paused"
           }(n || (n = {}));
           var o = {
              audioOnlyMode: !0,
              fluid: !0,
              playbackRates: [.5, 1, 1.5, 2],
              controlBar: {
                 skipButtons: {
                    forward: 10,
                    backward: 10
                 }
              }
           };
           t.default = function (e) {
              return {
                 tracks: [],
                 hasMultipleTracks: !1,
                 state: n.Inactive,
                 toggleState: function () {
                    this.state !== n.Inactive || this.hasMultipleTracks ? this.state === n.Inactive && this.hasMultipleTracks ? this.toggleTrackSelector() : this.state === n.Playing ? s.pause() : this.state === n.Paused && s.play() : this.listenTo(this.tracks[0].url)
                 },
                 isInactive: function () {
                    return this.state === n.Inactive
                 },
                 isPaused: function () {
                    return this.state === n.Paused
                 },
                 isPlaying: function () {
                    return this.state === n.Playing
                 },
                 listenTo: function (e) {
                    s.loadSrc(e), s.play()
                 },
                 listenToTrack: function (e) {
                    var t = this.tracks.filter((function (t) {
                       return t.id === e
                    }));
                    this.toggleTrackSelector(), this.listenTo(t[0].url)
                 },
                 isTrackSelectorOpen: !1,
                 toggleTrackSelector: function () {
                    this.isTrackSelectorOpen = !this.isTrackSelectorOpen
                 },
                 reset: function () {
                    s.reset()
                 },
                 calcPlayerHeight: function () {
                    var e = this.$refs.playerContainer.clientHeight;
                    document.documentElement.style.setProperty("--swi-theme--read-aloud-player--height", "".concat(e, "px"))
                 },
                 init: function () {
                    var t = this;
                    this.tracks = e.tracks, this.hasMultipleTracks = e.tracks.length > 1, (s = (0, r.player)(this.$refs.player, o)).listenTo("play", (function () {
                       return t.state = n.Playing
                    })), s.listenTo("pause", (function () {
                       return t.state = n.Paused
                    })), s.listenTo("playerreset", (function () {
                       return t.state = n.Inactive
                    })), this.$watch("state", (function (e, i) {
                       return i === n.Inactive && setTimeout((function () {
                          t.calcPlayerHeight()
                       }), 250)
                    }))
                 }
              }
           }
        },
        6798: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 isOpen: !1,
                 isMobile: !1,
                 init: function () {
                    var e = window.matchMedia("(max-width: 600px)");
                    this.isMobile = e.matches, e.addEventListener("change", this.setIsMobile.bind(this))
                 },
                 setIsMobile: function (e) {
                    this.isMobile = e.matches
                 },
                 toggle: function () {
                    this.isOpen = !this.isOpen
                 }
              }
           }
        },
        3205: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 init: function () {
                    window.addEventListener("scroll", this.updatePosition.bind(this))
                 },
                 updatePosition: function () {
                    var e = (window.scrollY || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
                    this.$refs.scrollProgressBar.style.setProperty("--progress", e.toString() + "%")
                 }
              }
           }
        },
        3773: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 scrollToTop: function () {
                    window.scrollTo({
                       top: 0,
                       behavior: "smooth"
                    })
                 }
              }
           }
        },
        5394: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(8753);
           t.default = n.FlickityCarouselComponent
        },
        4590: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(5753);
           t.default = function (e) {
              return {
                 aspectRatio: "",
                 isFullWidth: !1,
                 init: function () {
                    var t = this,
                       i = e.resource,
                       s = e.language,
                       r = (0, n.player)(this.$refs.player, {
                          language: s
                       });
                    fetch((0, n.buildMediaCompositionUrl)(i), {
                       cache: "no-store"
                    }).then((function (e) {
                       return e.json()
                    })).then((function (e) {
                       r.loadSrc(e), t.aspectRatio = (0, n.aspectRatioForMediaComposition)(e), t.isFullWidth = (0, n.isFullWidthVideo)(e),
                          function (e, t, i) {
                             void 0 === t && (t = function () {}), void 0 === i && (i = function () {});
                             var n = new IntersectionObserver((function (e) {
                                e.forEach((function (e) {
                                   (e.isIntersecting ? t : i)()
                                }))
                             }), {
                                threshold: .8
                             });
                             return {
                                init: function () {
                                   n.observe(e)
                                }
                             }
                          }(t.$refs.player, (function () {
                             r.mute(), r.play()
                          }), (function () {
                             r.pause()
                          })).init()
                    })).catch((function () {}))
                 }
              }
           }
        },
        1736: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(8753);
           t.default = n.FlickityCarouselComponent
        },
        8281: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var i = "tempStickyBannerShown";
           t.default = function () {
              return {
                 isVisible: !1,
                 init: function () {
                    var e = this;
                    if (!sessionStorage.getItem(i)) {
                       var t = 0,
                          n = function () {
                             var i = window.pageYOffset || document.documentElement.scrollTop;
                             e.isVisible = i <= t, t = i <= 0 ? 0 : i
                          };
                       window.addEventListener("load", (function () {
                          e.isVisible = !0, window.addEventListener("scroll", n, !1), setTimeout((function () {
                             e.isVisible = !1, sessionStorage.setItem(i, "1"), window.removeEventListener("scroll", n, !1)
                          }), 1e4)
                       }))
                    }
                 }
              }
           }
        },
        6988: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function (e) {
              return {
                 errorMessage: "",
                 successMessage: "",
                 isLoading: !1,
                 isSubmitted: !1,
                 submit: function () {
                    var t = this;
                    this.isLoading = !0, this.errorMessage = "";
                    var i = new FormData(this.$refs.form);
                    i.append("hostEmail", e.hostEmail), i.append("title", e.title), i.append("postId", e.postId), fetch(window.swiTheme.restApi.userFeedback, {
                       method: "POST",
                       body: i,
                       headers: {
                          "X-WP-Nonce": window.swiTheme.restApi.nonce
                       }
                    }).then((function (e) {
                       return e.json()
                    })).then((function (e) {
                       e.success ? (t.isSubmitted = !0, t.successMessage = e.message) : t.errorMessage = e.message
                    })).catch((function (e) {
                       t.errorMessage = e.message
                    })).finally((function () {
                       t.isLoading = !1
                    }))
                 }
              }
           }
        },
        4624: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(3832);
           t.default = function (e) {
              return {
                 isOpen: !1,
                 isLoading: !1,
                 activeItem: "",
                 open: function () {
                    this.isOpen = !0, this.$dispatch("open-modal"), this.$dispatch("toggle-user-modal-item", {
                       slug: e.activeItem
                    })
                 },
                 toggleItem: function (e) {
                    var t = this;
                    this.activeItem = e, this.$refs.item.innerHTML = "";
                    var i = sessionStorage.getItem(e);
                    if (i) this.$refs.item.innerHTML = i;
                    else {
                       this.isLoading = !0;
                       var s = (0, n.addQueryArgs)(window.swiTheme.restApi.userModal, {
                          item: e,
                          _wpnonce: window.swiTheme.restApi.nonce
                       });
                       fetch(s).then((function (e) {
                          return e.json()
                       })).then((function (i) {
                          i.message ? t.$refs.item.innerHTML = i.message : (t.$refs.item.innerHTML = i.item, sessionStorage.setItem(e, i.item))
                       })).finally((function () {
                          t.isLoading = !1
                       }))
                    }
                 }
              }
           }
        },
        4591: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function (e) {
              return {
                 slug: e.slug,
                 isActive: !1,
                 toggleItem: function (e) {
                    this.isActive = this.slug === e
                 }
              }
           }
        },
        1112: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function (e) {
              return {
                 hasAvatar: e.hasAvatar,
                 isLoading: !1,
                 selectAvatar: function () {
                    this.$refs.avatar.click()
                 },
                 updateAvatar: function () {
                    var e = this.$refs.avatar.files;
                    if (e) {
                       var t = new FormData;
                       t.append("avatarImage", e[0]), this.request("POST", t)
                    }
                 },
                 deleteAvatar: function () {
                    var e = new FormData;
                    this.request("DELETE", e)
                 },
                 request: function (e, t) {
                    var i = this;
                    this.isLoading = !0, fetch(window.swiTheme.restApi.userAvatar, {
                       method: e,
                       body: t,
                       headers: {
                          "X-WP-Nonce": window.swiTheme.restApi.nonce
                       }
                    }).then((function (e) {
                       return e.json()
                    })).then((function (e) {
                       e.success ? (sessionStorage.removeItem(window.swiTheme.userModal.UserProfile), i.$dispatch("toggle-user-modal-item", {
                          slug: window.swiTheme.userModal.UserProfile
                       })) : alert(e.message)
                    })).catch((function (e) {
                       alert(e)
                    })).finally((function () {
                       i.isLoading = !1
                    }))
                 },
                 edit: function () {
                    this.$dispatch("toggle-user-modal-item", {
                       slug: window.swiTheme.userModal.UserProfileForm
                    })
                 }
              }
           }
        },
        5750: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function (e) {
              return {
                 errorMessage: "",
                 successMessage: "",
                 isLoading: !1,
                 save: function () {
                    var e = this;
                    this.isLoading = !0, this.errorMessage = "";
                    var t = new FormData(this.$refs.form);
                    fetch(window.swiTheme.restApi.userProfileForm, {
                       method: "POST",
                       body: t,
                       headers: {
                          "X-WP-Nonce": window.swiTheme.restApi.nonce
                       }
                    }).then((function (e) {
                       return e.json()
                    })).then((function (t) {
                       t.success ? e.onSuccess(t) : (e.errorMessage = t.message, e.isLoading = !1)
                    })).catch((function (t) {
                       e.errorMessage = t.message, e.isLoading = !1
                    }))
                 },
                 onSuccess: function (t) {
                    var i = this;
                    this.successMessage = t.message, sessionStorage.removeItem(window.swiTheme.userModal.UserProfile), sessionStorage.removeItem(window.swiTheme.userModal.UserProfileForm), e.hasRedirectLink ? window.location.replace(e.redirectLink) : setTimeout((function () {
                       i.isLoading = !1, i.successMessage = "", i.$dispatch("toggle-user-modal-item", {
                          slug: window.swiTheme.userModal.UserProfile
                       })
                    }), 2e3)
                 },
                 cancel: function () {
                    this.$refs.form.reset(), this.$dispatch("toggle-user-modal-item", {
                       slug: window.swiTheme.userModal.UserProfile
                    })
                 }
              }
           }
        },
        3525: function (e, t, i) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var n = i(8753);
           t.default = n.FlickityCarouselComponent
        },
        4027: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           t.default = function () {
              return {
                 isOpen: !1,
                 isFixed: !1,
                 open: function (e) {
                    this.isOpen = !0, this.isFixed = !0, this.$dispatch("add-no-scroll"), this.insertPlayer(e)
                 },
                 close: function () {
                    var e = this;
                    this.isOpen = !1, setTimeout((function () {
                       e.isFixed = !1
                    }), 400), this.$dispatch("remove-no-scroll"), this.$refs.player.innerHTML = ""
                 },
                 insertPlayer: function (e) {
                    this.$refs.player.innerHTML = '<iframe src="'.concat("https://www.rsi.ch/play/embed?urn=urn:rsi:video:").concat(e, '&subdivisions=false"></iframe>')
                 }
              }
           }
        },
        601: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function () {
              return {
                 isOpen: !1
              }
           }
        },
        1645: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           t.default = function () {
              return {
                 init: function () {
                    var e = this.$el.closest(".content-area");
                    (this.widgets = this.$el.querySelectorAll(".widget-container__item"), null === e || this.widgets.length < 1) || new ResizeObserver(this.updateWidgetPlacements.bind(this)).observe(e)
                 },
                 updateWidgetPlacements: function (e) {
                    var t = this;
                    e.forEach((function (e) {
                       var i, n;
                       if (t.$el.style.gap = "0px", t.$el.style.top = "0px", window.innerWidth < 1200) t.widgets.forEach((function (e) {
                          return e.style.visibility = "visible"
                       }));
                       else {
                          t.widgets.forEach((function (e) {
                             return e.style.visibility = "hidden"
                          }));
                          var s = null !== (n = null === (i = document.querySelector(".page-main > :nth-child(2)")) || void 0 === i ? void 0 : i.offsetTop) && void 0 !== n ? n : 0;
                          t.$el.style.top = s + "px";
                          var r = s + t.widgets[0].clientHeight,
                             o = e.contentRect.height;
                          if (r < o && (t.widgets[0].style.visibility = "visible"), t.widgets[1]) {
                             var a = r + t.widgets[1].clientHeight;
                             a + 100 < o && (t.widgets[1].style.visibility = "visible");
                             var l = o - a,
                                c = l > 300 ? 300 : l;
                             t.$el.style.gap = c + "px"
                          }
                       }
                    }))
                 }
              }
           }
        },
        9795: function (e, t) {
           "use strict";
           var i;
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.store = void 0;
           var n = function () {
                 function e(e) {
                    void 0 === e && (e = []), this.groups = new Map(e)
                 }
                 return Object.defineProperty(e.prototype, "userConsent", {
                    set: function (e) {
                       this.groups.set("user_consent_is_given", e)
                    },
                    enumerable: !1,
                    configurable: !0
                 }), e.prototype.stringify = function () {
                    return Array.from(this.groups.entries()).map((function (t) {
                       var i = t[0],
                          n = t[1];
                       return "".concat(i).concat(e.VALUE_SEPARATOR).concat(n)
                    })).join(e.GROUP_SEPARATOR)
                 }, e.prototype.toCookie = function () {
                    return "".concat(e.COOKIE_NAME, "=").concat(this.stringify(), "; max-age=").concat(e.COOKIE_TTL, "; path=/")
                 }, e.fromCookie = function (t) {
                    var i, n;
                    return new e(null !== (n = null === (i = t.split("; ").find((function (t) {
                       return t.startsWith("".concat(e.COOKIE_NAME, "="))
                    }))) || void 0 === i ? void 0 : i.split("=")[1].split(e.GROUP_SEPARATOR).map((function (t) {
                       var i = t.split(e.VALUE_SEPARATOR),
                          n = i[0],
                          s = i[1];
                       return [n, null != s ? s : ""]
                    }))) && void 0 !== n ? n : [])
                 }, e.COOKIE_NAME = "vip-go-seg", e.COOKIE_TTL = 31536e3, e.GROUP_SEPARATOR = "---__", e.VALUE_SEPARATOR = "_--_", e
              }(),
              s = n.fromCookie(null !== (i = null === document || void 0 === document ? void 0 : document.cookie) && void 0 !== i ? i : "");
           t.default = s, t.store = function () {
              document.cookie = s.toCookie()
           }
        },
        2060: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.userConsentGivenFromBoolean = void 0;
           t.userConsentGivenFromBoolean = function (e) {
              return e ? "yes" : "no"
           }
        },
        7898: function (e, t, i) {
           "use strict";
           var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
                 void 0 === n && (n = i);
                 var s = Object.getOwnPropertyDescriptor(t, i);
                 s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                    enumerable: !0,
                    get: function () {
                       return t[i]
                    }
                 }), Object.defineProperty(e, n, s)
              } : function (e, t, i, n) {
                 void 0 === n && (n = i), e[n] = t[i]
              }),
              s = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                 Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                 })
              } : function (e, t) {
                 e.default = t
              }),
              r = this && this.__importStar || function (e) {
                 if (e && e.__esModule) return e;
                 var t = {};
                 if (null != e)
                    for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
                 return s(t, e), t
              };
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var o = r(i(9795)),
              a = i(2060),
              l = function () {
                 var e, t, i = null !== (t = null === (e = document.querySelector("#usercentrics-root")) || void 0 === e ? void 0 : e.shadowRoot) && void 0 !== t ? t : null;
                 if (null !== i) {
                    var n = document.createElement("style");
                    n.textContent = '\n    [data-testid="uc-privacy-button"] {\n        left: var(--swi-theme--usercentrics-privacy-settings-button--left);\n        bottom: var(--swi-theme--usercentrics-privacy-settings-button--bottom);\n    }\n    ', i.appendChild(n)
                 }
              },
              c = function (e) {
                 var t;
                 if ("consent_status" === (null === (t = e.detail) || void 0 === t ? void 0 : t.event)) {
                    var i = e.detail;
                    ["onAcceptAllServices", "onDenyAllServices", "onUpdateServices"].includes(i.action) && (o.default.userConsent = (0, a.userConsentGivenFromBoolean)("onAcceptAllServices" === i.action), (0, o.store)())
                 }
              };
           t.default = function () {
              return {
                 isNoScroll: !1,
                 init: function () {
                    window.addEventListener("UC_UI_INITIALIZED", l), window.addEventListener("ucEvent", c), (0, o.store)()
                 }
              }
           }
        },
        2649: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.default = function (e) {
              var t;
              return {
                 isOpen: null !== (t = null == e ? void 0 : e.isOpen) && void 0 !== t && t,
                 toggle: function () {
                    this.isOpen = !this.isOpen
                 }
              }
           }
        },
        1388: function (e, t, i) {
           "use strict";
           var n = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                 default: e
              }
           };
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var s = n(i(8705)),
              r = n(i(2522));
           i(8176), t.default = function () {
              var e;
              return {
                 showPrev: !1,
                 showNext: !1,
                 init: function () {
                    this.isRtl = "rtl" === document.documentElement.getAttribute("dir"), this.initSlider(), window.addEventListener("resize", s.default.throttle(this.initSlider.bind(this), 250))
                 },
                 initSlider: function () {
                    var t = this,
                       i = this.$refs.track.offsetWidth,
                       n = e ? e.slideableWidth : this.$refs.track.scrollWidth,
                       s = i <= 180 && window.innerWidth >= 1200;
                    if (n <= i || s) return this.showPrev = !1, this.showNext = !1, void this.destroySlider();
                    e = new r.default(this.$refs.track, {
                       wrapAround: !1,
                       percentPosition: !1,
                       cellAlign: this.isRtl ? "right" : "left",
                       contain: !0,
                       prevNextButtons: !1,
                       pageDots: !1,
                       adaptiveHeight: !1,
                       rightToLeft: this.isRtl,
                       on: {
                          ready: function () {
                             this.resize()
                          }
                       }
                    }), this.toggleButtons(), e.on("change", (function () {
                       t.toggleButtons()
                    }))
                 },
                 destroySlider: function () {
                    e && e.destroy()
                 },
                 destroy: function () {
                    this.destroySlider()
                 },
                 toggleButtons: function () {
                    this.showPrev = 0 !== e.selectedIndex, this.showNext = e.selectedCell.x < e.slidesWidth
                 },
                 prev: function () {
                    e.previous()
                 },
                 next: function () {
                    e.next()
                 }
              }
           }
        },
        8753: function (e, t, i) {
           "use strict";
           var n = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                 default: e
              }
           };
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.FlickityCarouselComponent = t.CollapserComponent = t.BodyComponent = void 0;
           var s = n(i(7898));
           t.BodyComponent = s.default;
           var r = n(i(2649));
           t.CollapserComponent = r.default;
           var o = n(i(1388));
           t.FlickityCarouselComponent = o.default
        },
        499: function (e, t, i) {
           "use strict";
           var n = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                 default: e
              }
           };
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var s = n(i(8705)),
              r = function (e, t) {
                 var i = t.modifiers,
                    n = function (e, t, i) {
                       if (-1 === e.indexOf(t)) return i;
                       var n = e[e.indexOf(t) + 1];
                       if (!n) return i;
                       if ("min" === t) {
                          var s = n.match(/([0-9]+)px/);
                          if (s) return s[1]
                       }
                       return n
                    }(i, "min", 0),
                    r = !i.includes("min");
                 e._x_isShown || (e.style.height = "".concat(n, "px"), r && (e.style.opacity = "0")), e._x_transition = {
                    in: function () {
                       e.style.display = "", e.style.height = "auto";
                       var t = e.getBoundingClientRect().height;
                       s.default.transition(e, s.default.setStyles, {
                          during: {},
                          start: {
                             height: "".concat(n, "px")
                          },
                          end: {
                             height: "".concat(t, "px")
                          }
                       }, (function () {
                          e._x_isShown = !0, r && (e.style.opacity = "1")
                       }), (function () {}))
                    },
                    out: function () {
                       var t = e.getBoundingClientRect().height;
                       s.default.transition(e, (function (e, t) {
                          return s.default.setStyles(e, t), r ? function () {
                             return s.default.setStyles(e, t)
                          } : function () {}
                       }), {
                          during: {},
                          start: {
                             height: "".concat(t, "px")
                          },
                          end: {
                             height: "".concat(n, "px")
                          }
                       }, (function () {
                          r && (e.style.opacity = "0")
                       }), (function () {
                          e._x_isShown = !1, e.style.height === "".concat(n, "px") && r && (e.style.display = "none")
                       }))
                    }
                 }
              };
           r.inline = function (e, t) {
              t.modifiers.includes("min") && (e._x_doShow = function () {}, e._x_doHide = function () {})
           }, t.default = r
        },
        6827: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var i = "article-not-published-preview-notice",
              n = function (e) {
                 return '\n        <div class="'.concat(i, '">\n            ').concat(e, "\n        </div>\n    ")
              };
         //   t.default = function (e, t) {
         //      var s = t.modifiers,
         //         r = function (e, t) {
         //            var i = t.modifiers;
         //            if (!window.swiTheme.visibilityNotice) return "";
         //            if (!e.classList.contains("--article-is-hidden")) return "";
         //            var n = window.swiTheme.visibilityNotice.text;
         //            return i.includes("detailed") && (n += " " + window.swiTheme.visibilityNotice.detailed), n
         //         }(e, {
         //            modifiers: s
         //         }) || function (e, t) {
         //            var i, n = t.modifiers;
         //            if (!window.swiTheme.previewNotice) return "";
         //            var s = e.className.match(/--post-status-([a-z]+)/);
         //            if (null === s) return "";
         //            var r = s[1],
         //               o = window.swiTheme.postStatus;
         //            if (![o.Draft, o.Future, o.Pending, o.Unpublished].includes(r)) return "";
         //            var a = null !== (i = window.swiTheme.previewNotice[r]) && void 0 !== i ? i : "";
         //            return n.includes("detailed") && (a += " " + window.swiTheme.previewNotice.detailed), a
         //         }(e, {
         //            modifiers: s
         //         });
         //      "" !== r && (e.style.position = "relative", null === e.querySelector(".".concat(i)) && e.insertAdjacentHTML("beforeend", n(r)))
         //   }
        },
        3672: function (e, t) {
           "use strict";
           Object.defineProperty(t, "__esModule", {
              value: !0
           });
           var i = function () {
                 function e(e) {
                    var t = this;
                    this.handleResize = function (e) {
                       e.forEach((function (e) {
                          var i = e.target,
                             n = t.findElementInBox(i);
                          n instanceof HTMLElement && (t.processing.has(n) || (t.processing.add(n), t.reset(n), t.truncate(n), requestAnimationFrame((function () {
                             requestAnimationFrame((function () {
                                t.processing.delete(n)
                             }))
                          }))))
                       }))
                    }, this.segmenter = new Intl.Segmenter(e, {
                       granularity: "word"
                    }), this.original = new WeakMap, this.resizeObserver = new ResizeObserver(this.handleResize), this.processing = new WeakSet, this.cache = new Map
                 }
                 return e.toHash = function (e) {
                    return e.split("").reduce((function (e, t) {
                       return (e << 5) - e + t.charCodeAt(0) | 0
                    }), 0).toString()
                 }, e.toText = function (e) {
                    return "".concat(e.map((function (e) {
                       return e.segment
                    })).join(""), "&hellip;")
                 }, e.prototype.handle = function (e) {
                    var t = e.parentElement;
                    null !== t && (this.original.set(e, e.innerText), this.resizeObserver.observe(t))
                 }, e.prototype.findElementInBox = function (e) {
                    var t = this;
                    return Array.from(e.children).find((function (e) {
                       return t.original.has(e)
                    })) || null
                 }, e.prototype.reset = function (e) {
                    this.original.has(e) && this.render(e, this.original.get(e))
                 }, e.prototype.render = function (e, t) {
                    e.innerHTML = t
                 }, e.prototype.truncate = function (t) {
                    var i = t.parentElement;
                    if (!(i.scrollHeight <= i.clientHeight)) {
                       var n = t.innerText.trim(),
                          s = "".concat(e.toHash(n), ":").concat(i.clientWidth, ":").concat(i.clientHeight);
                       if (this.cache.has(s)) this.render(t, this.cache.get(s));
                       else {
                          var r = this.segmenter.segment(n),
                             o = Array.from(r),
                             a = i.clientHeight / i.scrollHeight,
                             l = Math.ceil(a * o.length),
                             c = o.slice(0, l),
                             u = e.toText(c);
                          for (this.render(t, u); i.scrollHeight <= i.clientHeight;) c.push(o[c.length]), u = e.toText(c), this.render(t, u);
                          for (; i.scrollHeight > i.clientHeight && c.length;) {
                             do {
                                if (c.pop(), !c.length) break
                             } while (!c[c.length - 1].isWordLike);
                             u = e.toText(c), this.render(t, u)
                          }
                          this.cache.set(s, u), this.cache.size > e.CACHE_SIZE && this.cache.delete(this.cache.keys().next().value)
                       }
                    }
                 }, e.CACHE_SIZE = 100, e
              }(),
              n = document.documentElement.lang && "function" == typeof Intl.Segmenter ? new i(document.documentElement.lang) : null;
           t.default = function (e) {
              null !== n && n.handle(e)
           }
        },
        1630: function (e, t, i) {
           "use strict";
           var n = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                 default: e
              }
           };
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), i(5366);
           var s = n(i(8705)),
              r = n(i(7898)),
              o = n(i(499)),
              a = n(i(6827)),
              l = n(i(3672)),
              c = n(i(5182)),
              u = n(i(6198)),
              d = n(i(7453)),
              h = n(i(3650)),
              f = n(i(8866)),
              p = n(i(9100)),
              g = n(i(8126)),
              m = n(i(5348)),
              v = n(i(1734)),
              y = n(i(421)),
              _ = n(i(6161)),
              b = n(i(3661)),
              w = n(i(2515)),
              x = n(i(6894)),
              S = n(i(3414)),
              E = n(i(2709)),
              C = n(i(2516)),
              P = n(i(5903)),
              A = n(i(3415)),
              k = n(i(3927)),
              O = n(i(2431)),
              L = n(i(5131)),
              M = n(i(6848)),
              T = n(i(9488)),
              D = n(i(6798)),
              j = n(i(2381)),
              I = n(i(3205)),
              $ = n(i(3773)),
              F = n(i(5394)),
              N = n(i(4590)),
              z = n(i(1736)),
              B = n(i(8281)),
              W = n(i(4624)),
              R = n(i(4591)),
              U = n(i(1112)),
              q = n(i(5750)),
              H = n(i(6988)),
              V = n(i(3525)),
              X = n(i(4027)),
              G = n(i(601)),
              Q = n(i(1645));
           window.Alpine = s.default, s.default.data("body", r.default), s.default.directive("collapse", o.default), s.default.directive("preview-notice", a.default), s.default.directive("truncator", l.default), s.default.data("articleTranslations", c.default), s.default.data("audio", u.default), s.default.data("author", d.default), s.default.data("collapsedContent", h.default), s.default.data("commentItem", f.default), s.default.data("commentRespondForm", p.default), s.default.data("comments", g.default), s.default.data("compactNewsCarousel", m.default), s.default.data("contactForm", v.default), s.default.data("debateFilter", y.default), s.default.data("debateNewsletterModal", _.default), s.default.data("debateProposal", b.default), s.default.data("ebuNewsfeed", w.default), s.default.data("filmSelectionCarousel", x.default), s.default.data("focusFilter", S.default), s.default.data("gallerySlider", E.default), s.default.data("headerContainer", C.default), s.default.data("htmlFragment", P.default), s.default.data("image", A.default), s.default.data("infobox", k.default), s.default.data("loadMore", O.default), s.default.data("modal", L.default), s.default.data("navigatorShare", M.default), s.default.data("newsletterModal", T.default), s.default.data("readMoreBox", D.default), s.default.data("readAloud", j.default), s.default.data("scrollProgressBar", I.default), s.default.data("scrollToTop", $.default), s.default.data("spotlightCarousel", F.default), s.default.data("srgMedia", N.default), s.default.data("teaserCardCarousel", z.default), s.default.data("tempStickyBanner", B.default), s.default.data("userModal", W.default), s.default.data("userModalNavigationItem", R.default), s.default.data("userProfile", U.default), s.default.data("userProfileForm", q.default), s.default.data("userFeedback", H.default), s.default.data("videoOnDemandCarousel", V.default), s.default.data("videoOnDemandPlayerModal", X.default), s.default.data("wechatModal", G.default), s.default.data("widgetContainer", Q.default), s.default.start()
        },
        5753: function (e, t) {
           "use strict";
           var i = this && this.__assign || function () {
              return i = Object.assign || function (e) {
                 for (var t, i = 1, n = arguments.length; i < n; i++)
                    for (var s in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                 return e
              }, i.apply(this, arguments)
           };
           Object.defineProperty(t, "__esModule", {
              value: !0
           }), t.player = t.isFullWidthVideo = t.aspectRatioForMediaComposition = t.buildMediaCompositionUrl = t.validateUrn = void 0;
           t.validateUrn = function (e) {
              return /^urn:(swi|rts|srf|rtr|rsi):(video|audio):[0-9a-fA-F-]+$/.test(e)
           };
           t.buildMediaCompositionUrl = function (e) {
              return (0, t.validateUrn)(e) ? "#".concat(e, "?onlyChapters=true&vector=portalplay") : (i = e, n = window.swiVideoDelivery, s = n.baseUrl, r = n.locale, o = n.uniqueId, a = "" !== o ? "".concat(o, "/config") : "config", "".concat(s, "/video-delivery/player/").concat(i, "/").concat(r.toUpperCase(), "/").concat(a));
              var i, n, s, r, o, a
           };
           t.aspectRatioForMediaComposition = function (e) {
              var t, i, n;
              return (null !== (n = null === (i = null === (t = e.chapterList) || void 0 === t ? void 0 : t[0]) || void 0 === i ? void 0 : i.aspectRatio) && void 0 !== n ? n : "").replace(":", "/")
           };
           t.isFullWidthVideo = function (e) {
              return "16/9" === (0, t.aspectRatioForMediaComposition)(e)
           };
           t.player = function (e, t) {
              void 0 === t && (t = {});
              var n = new window.Pillarbox(e, i(i({}, t), {
                 titleBar: !1,
                 srgOptions: {
                    dataProvider: function (e) {
                       return JSON.parse(e)
                    }
                 }
              }));
              return {
                 play: function () {
                    return n.play()
                 },
                 pause: function () {
                    return n.pause()
                 },
                 mute: function () {
                    return n.muted(!0)
                 },
                 listenTo: function (e, t) {
                    return n.on(e, t)
                 },
                 reset: function () {
                    return n.reset()
                 },
                 loadSrc: function (e) {
                    if ("object" != typeof e) {
                       if (!e.endsWith(".mp3")) throw new Error("Unknown source type");
                       n.src(e)
                    } else n.src({
                       src: JSON.stringify(e),
                       type: "srgssr/urn"
                    })
                 }
              }
           }
        },
        2137: function (e) {
           var t, i;
           t = "undefined" != typeof window ? window : this, i = function () {
              function e() {}
              let t = e.prototype;
              return t.on = function (e, t) {
                 if (!e || !t) return this;
                 let i = this._events = this._events || {},
                    n = i[e] = i[e] || [];
                 return n.includes(t) || n.push(t), this
              }, t.once = function (e, t) {
                 if (!e || !t) return this;
                 this.on(e, t);
                 let i = this._onceEvents = this._onceEvents || {};
                 return (i[e] = i[e] || {})[t] = !0, this
              }, t.off = function (e, t) {
                 let i = this._events && this._events[e];
                 if (!i || !i.length) return this;
                 let n = i.indexOf(t);
                 return -1 != n && i.splice(n, 1), this
              }, t.emitEvent = function (e, t) {
                 let i = this._events && this._events[e];
                 if (!i || !i.length) return this;
                 i = i.slice(0), t = t || [];
                 let n = this._onceEvents && this._onceEvents[e];
                 for (let s of i) n && n[s] && (this.off(e, s), delete n[s]), s.apply(this, t);
                 return this
              }, t.allOff = function () {
                 return delete this._events, delete this._onceEvents, this
              }, e
           }, e.exports ? e.exports = i() : t.EvEmitter = i()
        },
        977: function (e) {
           var t, i;
           t = this, i = function (e) {
              let t = {
                    extend: function (e, t) {
                       return Object.assign(e, t)
                    },
                    modulo: function (e, t) {
                       return (e % t + t) % t
                    },
                    makeArray: function (e) {
                       return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? [...e] : [e]
                    },
                    removeFrom: function (e, t) {
                       let i = e.indexOf(t); - 1 != i && e.splice(i, 1)
                    },
                    getParent: function (e, t) {
                       for (; e.parentNode && e != document.body;)
                          if ((e = e.parentNode).matches(t)) return e
                    },
                    getQueryElement: function (e) {
                       return "string" == typeof e ? document.querySelector(e) : e
                    },
                    handleEvent: function (e) {
                       let t = "on" + e.type;
                       this[t] && this[t](e)
                    },
                    filterFindElements: function (e, i) {
                       return (e = t.makeArray(e)).filter((e => e instanceof HTMLElement)).reduce(((e, t) => {
                          if (!i) return e.push(t), e;
                          t.matches(i) && e.push(t);
                          let n = t.querySelectorAll(i);
                          return e = e.concat(...n)
                       }), [])
                    },
                    debounceMethod: function (e, t, i) {
                       i = i || 100;
                       let n = e.prototype[t],
                          s = t + "Timeout";
                       e.prototype[t] = function () {
                          clearTimeout(this[s]);
                          let e = arguments;
                          this[s] = setTimeout((() => {
                             n.apply(this, e), delete this[s]
                          }), i)
                       }
                    },
                    docReady: function (e) {
                       let t = document.readyState;
                       "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
                    },
                    toDashed: function (e) {
                       return e.replace(/(.)([A-Z])/g, (function (e, t, i) {
                          return t + "-" + i
                       })).toLowerCase()
                    }
                 },
                 i = e.console;
              return t.htmlInit = function (n, s) {
                 t.docReady((function () {
                    let r = "data-" + t.toDashed(s),
                       o = document.querySelectorAll(`[${r}]`),
                       a = e.jQuery;
                    [...o].forEach((e => {
                       let t, o = e.getAttribute(r);
                       try {
                          t = o && JSON.parse(o)
                       } catch (t) {
                          return void(i && i.error(`Error parsing ${r} on ${e.className}: ${t}`))
                       }
                       let l = new n(e, t);
                       a && a.data(e, s, l)
                    }))
                 }))
              }, t
           }, e.exports ? e.exports = i(t) : t.fizzyUIUtils = i(t)
        },
        9943: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(i(4831), i(977)) : n(t.Flickity, t.fizzyUIUtils)
           }("undefined" != typeof window ? window : this, (function (e, t) {
              let i = e.prototype;
              return i.insert = function (e, t) {
                 let i = this._makeCells(e);
                 if (!i || !i.length) return;
                 let n = this.cells.length;
                 t = void 0 === t ? n : t;
                 let s = function (e) {
                       let t = document.createDocumentFragment();
                       return e.forEach((e => t.appendChild(e.element))), t
                    }(i),
                    r = t === n;
                 if (r) this.slider.appendChild(s);
                 else {
                    let e = this.cells[t].element;
                    this.slider.insertBefore(s, e)
                 }
                 if (0 === t) this.cells = i.concat(this.cells);
                 else if (r) this.cells = this.cells.concat(i);
                 else {
                    let e = this.cells.splice(t, n - t);
                    this.cells = this.cells.concat(i).concat(e)
                 }
                 this._sizeCells(i), this.cellChange(t), this.positionSliderAtSelected()
              }, i.append = function (e) {
                 this.insert(e, this.cells.length)
              }, i.prepend = function (e) {
                 this.insert(e, 0)
              }, i.remove = function (e) {
                 let i = this.getCells(e);
                 if (!i || !i.length) return;
                 let n = this.cells.length - 1;
                 i.forEach((e => {
                    e.remove();
                    let i = this.cells.indexOf(e);
                    n = Math.min(i, n), t.removeFrom(this.cells, e)
                 })), this.cellChange(n), this.positionSliderAtSelected()
              }, i.cellSizeChange = function (e) {
                 let t = this.getCell(e);
                 if (!t) return;
                 t.getSize();
                 let i = this.cells.indexOf(t);
                 this.cellChange(i)
              }, i.cellChange = function (e) {
                 let t = this.selectedElement;
                 this._positionCells(e), this._updateWrapShiftCells(), this.setGallerySize();
                 let i = this.getCell(t);
                 i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [e]), this.select(this.selectedIndex)
              }, e
           }))
        },
        2121: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(i(977)) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = n(t.fizzyUIUtils))
           }("undefined" != typeof window ? window : this, (function (e) {
              let t = {
                 startAnimation: function () {
                    this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
                 },
                 animate: function () {
                    this.applyDragForce(), this.applySelectedAttraction();
                    let e = this.x;
                    this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating && requestAnimationFrame((() => this.animate()))
                 },
                 positionSlider: function () {
                    let t = this.x;
                    this.isWrapping && (t = e.modulo(t, this.slideableWidth) - this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
                 },
                 setTranslateX: function (e, t) {
                    e += this.cursorPosition, this.options.rightToLeft && (e = -e);
                    let i = this.getPositionValue(e);
                    this.slider.style.transform = t ? `translate3d(${i},0,0)` : `translateX(${i})`
                 },
                 dispatchScrollEvent: function () {
                    let e = this.slides[0];
                    if (!e) return;
                    let t = -this.x - e.target,
                       i = t / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [i, t])
                 },
                 positionSliderAtSelected: function () {
                    this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
                 },
                 getPositionValue: function (e) {
                    return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px"
                 },
                 settle: function (e) {
                    !this.isPointerDown && Math.round(100 * this.x) === Math.round(100 * e) && this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
                 },
                 shiftWrapCells: function (e) {
                    let t = this.cursorPosition + e;
                    this._shiftCells(this.beforeShiftCells, t, -1);
                    let i = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);
                    this._shiftCells(this.afterShiftCells, i, 1)
                 },
                 _shiftCells: function (e, t, i) {
                    e.forEach((e => {
                       let n = t > 0 ? i : 0;
                       this._wrapShiftCell(e, n), t -= e.size.outerWidth
                    }))
                 },
                 _unshiftCells: function (e) {
                    e && e.length && e.forEach((e => this._wrapShiftCell(e, 0)))
                 },
                 _wrapShiftCell: function (e, t) {
                    this._renderCellPosition(e, e.x + this.slideableWidth * t)
                 },
                 integratePhysics: function () {
                    this.x += this.velocity, this.velocity *= this.getFrictionFactor()
                 },
                 applyForce: function (e) {
                    this.velocity += e
                 },
                 getFrictionFactor: function () {
                    return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
                 },
                 getRestingPosition: function () {
                    return this.x + this.velocity / (1 - this.getFrictionFactor())
                 },
                 applyDragForce: function () {
                    if (!this.isDraggable || !this.isPointerDown) return;
                    let e = this.dragX - this.x - this.velocity;
                    this.applyForce(e)
                 },
                 applySelectedAttraction: function () {
                    if (this.isDraggable && this.isPointerDown || this.isFreeScrolling || !this.slides.length) return;
                    let e = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                    this.applyForce(e)
                 }
              };
              return t
           }))
        },
        4092: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(i(1485)) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = n(t.getSize))
           }("undefined" != typeof window ? window : this, (function (e) {
              const t = "flickity-cell";

              function i(e) {
                 this.element = e, this.element.classList.add(t), this.x = 0, this.unselect()
              }
              let n = i.prototype;
              return n.destroy = function () {
                 this.unselect(), this.element.classList.remove(t), this.element.style.transform = "", this.element.removeAttribute("aria-hidden")
              }, n.getSize = function () {
                 this.size = e(this.element)
              }, n.select = function () {
                 this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
              }, n.unselect = function () {
                 this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
              }, n.remove = function () {
                 this.element.remove()
              }, i
           }))
        },
        4831: function (e, t, i) {
           ! function (t, n) {
              if (e.exports) e.exports = n(t, i(2137), i(1485), i(977), i(4092), i(1331), i(2121));
              else {
                 let e = t.Flickity;
                 t.Flickity = n(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, e.Cell, e.Slide, e.animatePrototype)
              }
           }("undefined" != typeof window ? window : this, (function (e, t, i, n, s, r, o) {
              const {
                 getComputedStyle: a,
                 console: l
              } = e;
              let {
                 jQuery: c
              } = e, u = 0, d = {};

              function h(e, t) {
                 let i = n.getQueryElement(e);
                 if (i) {
                    if (this.element = i, this.element.flickityGUID) {
                       let e = d[this.element.flickityGUID];
                       return e && e.option(t), e
                    }
                    c && (this.$element = c(this.element)), this.options = {
                       ...this.constructor.defaults
                    }, this.option(t), this._create()
                 } else l && l.error(`Bad element for Flickity: ${i||e}`)
              }
              h.defaults = {
                 accessibility: !0,
                 cellAlign: "center",
                 freeScrollFriction: .075,
                 friction: .28,
                 namespaceJQueryEvents: !0,
                 percentPosition: !0,
                 resize: !0,
                 selectedAttraction: .025,
                 setGallerySize: !0
              }, h.create = {};
              let f = h.prototype;
              Object.assign(f, t.prototype), f._create = function () {
                 let {
                    resize: t,
                    watchCSS: i,
                    rightToLeft: n
                 } = this.options, s = this.guid = ++u;
                 this.element.flickityGUID = s, d[s] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.beginMargin = n ? "marginRight" : "marginLeft", this.endMargin = n ? "marginLeft" : "marginRight", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), this.focusableElems = [this.element], (t || i) && e.addEventListener("resize", this);
                 for (let e in this.options.on) {
                    let t = this.options.on[e];
                    this.on(e, t)
                 }
                 for (let e in h.create) h.create[e].call(this);
                 i ? this.watchCSS() : this.activate()
              }, f.option = function (e) {
                 Object.assign(this.options, e)
              }, f.activate = function () {
                 if (this.isActive) return;
                 this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
                 let e = this._filterFindCellElements(this.element.children);
                 this.slider.append(...e), this.viewport.append(this.slider), this.element.append(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready")
              }, f._createSlider = function () {
                 let e = document.createElement("div");
                 e.className = "flickity-slider", this.slider = e
              }, f._filterFindCellElements = function (e) {
                 return n.filterFindElements(e, this.options.cellSelector)
              }, f.reloadCells = function () {
                 this.cells = this._makeCells(this.slider.children), this.positionCells(), this._updateWrapShiftCells(), this.setGallerySize()
              }, f._makeCells = function (e) {
                 return this._filterFindCellElements(e).map((e => new s(e)))
              }, f.getLastCell = function () {
                 return this.cells[this.cells.length - 1]
              }, f.getLastSlide = function () {
                 return this.slides[this.slides.length - 1]
              }, f.positionCells = function () {
                 this._sizeCells(this.cells), this._positionCells(0)
              }, f._positionCells = function (e) {
                 e = e || 0, this.maxCellHeight = e && this.maxCellHeight || 0;
                 let t = 0;
                 if (e > 0) {
                    let i = this.cells[e - 1];
                    t = i.x + i.size.outerWidth
                 }
                 this.cells.slice(e).forEach((e => {
                    e.x = t, this._renderCellPosition(e, t), t += e.size.outerWidth, this.maxCellHeight = Math.max(e.size.outerHeight, this.maxCellHeight)
                 })), this.slideableWidth = t, this.updateSlides(), this._containSlides(), this.slidesWidth = this.cells.length ? this.getLastSlide().target - this.slides[0].target : 0
              }, f._renderCellPosition = function (e, t) {
                 let i = t * (this.options.rightToLeft ? -1 : 1);
                 this.options.percentPosition && (i *= this.size.innerWidth / e.size.width);
                 let n = this.getPositionValue(i);
                 e.element.style.transform = `translateX( ${n} )`
              }, f._sizeCells = function (e) {
                 e.forEach((e => e.getSize()))
              }, f.updateSlides = function () {
                 if (this.slides = [], !this.cells.length) return;
                 let {
                    beginMargin: e,
                    endMargin: t
                 } = this, i = new r(e, t, this.cellAlign);
                 this.slides.push(i);
                 let n = this._getCanCellFit();
                 this.cells.forEach(((s, o) => {
                    if (!i.cells.length) return void i.addCell(s);
                    let a = i.outerWidth - i.firstMargin + (s.size.outerWidth - s.size[t]);
                    n(o, a) || (i.updateTarget(), i = new r(e, t, this.cellAlign), this.slides.push(i)), i.addCell(s)
                 })), i.updateTarget(), this.updateSelectedSlide()
              }, f._getCanCellFit = function () {
                 let {
                    groupCells: e
                 } = this.options;
                 if (!e) return () => !1;
                 if ("number" == typeof e) {
                    let t = parseInt(e, 10);
                    return e => e % t != 0
                 }
                 let t = 1,
                    i = "string" == typeof e && e.match(/^(\d+)%$/);
                 i && (t = parseInt(i[1], 10) / 100);
                 let n = (this.size.innerWidth + 1) * t;
                 return (e, t) => t <= n
              }, f._init = f.reposition = function () {
                 this.positionCells(), this.positionSliderAtSelected()
              }, f.getSize = function () {
                 this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
              };
              let p = {
                 left: 0,
                 center: .5,
                 right: 1
              };
              f.setCellAlign = function () {
                 let {
                    cellAlign: e,
                    rightToLeft: t
                 } = this.options, i = p[e];
                 this.cellAlign = void 0 !== i ? i : e, t && (this.cellAlign = 1 - this.cellAlign)
              }, f.setGallerySize = function () {
                 if (!this.options.setGallerySize) return;
                 let e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                 this.viewport.style.height = `${e}px`
              }, f._updateWrapShiftCells = function () {
                 if (this.isWrapping = this.getIsWrapping(), !this.isWrapping) return;
                 this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                 let e = this.cursorPosition,
                    t = this.cells.length - 1;
                 this.beforeShiftCells = this._getGapCells(e, t, -1);
                 let i = this.size.innerWidth - this.cursorPosition;
                 this.afterShiftCells = this._getGapCells(i, 0, 1)
              }, f.getIsWrapping = function () {
                 let {
                    wrapAround: e
                 } = this.options;
                 if (!e || this.slides.length < 2) return !1;
                 if ("fill" !== e) return !0;
                 let t = this.slideableWidth - this.size.innerWidth;
                 if (t > this.size.innerWidth) return !0;
                 for (let e of this.cells)
                    if (e.size.outerWidth > t) return !1;
                 return !0
              }, f._getGapCells = function (e, t, i) {
                 let n = [];
                 for (; e > 0;) {
                    let s = this.cells[t];
                    if (!s) break;
                    n.push(s), t += i, e -= s.size.outerWidth
                 }
                 return n
              }, f._containSlides = function () {
                 if (!(this.options.contain && !this.isWrapping && this.cells.length)) return;
                 let e = this.slideableWidth - this.getLastCell().size[this.endMargin];
                 if (e < this.size.innerWidth) this.slides.forEach((t => {
                    t.target = e * this.cellAlign
                 }));
                 else {
                    let t = this.cursorPosition + this.cells[0].size[this.beginMargin],
                       i = e - this.size.innerWidth * (1 - this.cellAlign);
                    this.slides.forEach((e => {
                       e.target = Math.max(e.target, t), e.target = Math.min(e.target, i)
                    }))
                 }
              }, f.dispatchEvent = function (e, t, i) {
                 let n = t ? [t].concat(i) : i;
                 if (this.emitEvent(e, n), c && this.$element) {
                    let n = e += this.options.namespaceJQueryEvents ? ".flickity" : "";
                    if (t) {
                       let i = new c.Event(t);
                       i.type = e, n = i
                    }
                    this.$element.trigger(n, i)
                 }
              };
              const g = ["dragStart", "dragMove", "dragEnd", "pointerDown", "pointerMove", "pointerEnd", "staticClick"];
              let m = f.emitEvent;
              f.emitEvent = function (e, t) {
                 if ("staticClick" === e) {
                    let e = this.getParentCell(t[0].target),
                       i = e && e.element,
                       n = e && this.cells.indexOf(e);
                    t = t.concat(i, n)
                 }
                 if (m.call(this, e, t), !g.includes(e) || !c || !this.$element) return;
                 e += this.options.namespaceJQueryEvents ? ".flickity" : "";
                 let i = t.shift(0),
                    n = new c.Event(i);
                 n.type = e, this.$element.trigger(n, t)
              }, f.select = function (e, t, i) {
                 if (!this.isActive) return;
                 if (e = parseInt(e, 10), this._wrapSelect(e), (this.isWrapping || t) && (e = n.modulo(e, this.slides.length)), !this.slides[e]) return;
                 let s = this.selectedIndex;
                 this.selectedIndex = e, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [e]), e !== s && this.dispatchEvent("change", null, [e])
              }, f._wrapSelect = function (e) {
                 if (!this.isWrapping) return;
                 const {
                    selectedIndex: t,
                    slideableWidth: i,
                    slides: {
                       length: s
                    }
                 } = this;
                 if (!this.isDragSelect) {
                    let i = n.modulo(e, s),
                       r = Math.abs(i - t),
                       o = Math.abs(i + s - t),
                       a = Math.abs(i - s - t);
                    o < r ? e += s : a < r && (e -= s)
                 }
                 e < 0 ? this.x -= i : e >= s && (this.x += i)
              }, f.previous = function (e, t) {
                 this.select(this.selectedIndex - 1, e, t)
              }, f.next = function (e, t) {
                 this.select(this.selectedIndex + 1, e, t)
              }, f.updateSelectedSlide = function () {
                 let e = this.slides[this.selectedIndex];
                 e && (this.unselectSelectedSlide(), this.selectedSlide = e, e.select(), this.selectedCells = e.cells, this.selectedElements = e.getCellElements(), this.selectedCell = e.cells[0], this.selectedElement = this.selectedElements[0])
              }, f.unselectSelectedSlide = function () {
                 this.selectedSlide && this.selectedSlide.unselect()
              }, f.selectInitialIndex = function () {
                 let e = this.options.initialIndex;
                 if (this.isInitActivated) return void this.select(this.selectedIndex, !1, !0);
                 if (e && "string" == typeof e) {
                    if (this.queryCell(e)) return void this.selectCell(e, !1, !0)
                 }
                 let t = 0;
                 e && this.slides[e] && (t = e), this.select(t, !1, !0)
              }, f.selectCell = function (e, t, i) {
                 let n = this.queryCell(e);
                 if (!n) return;
                 let s = this.getCellSlideIndex(n);
                 this.select(s, t, i)
              }, f.getCellSlideIndex = function (e) {
                 let t = this.slides.find((t => t.cells.includes(e)));
                 return this.slides.indexOf(t)
              }, f.getCell = function (e) {
                 for (let t of this.cells)
                    if (t.element === e) return t
              }, f.getCells = function (e) {
                 return (e = n.makeArray(e)).map((e => this.getCell(e))).filter(Boolean)
              }, f.getCellElements = function () {
                 return this.cells.map((e => e.element))
              }, f.getParentCell = function (e) {
                 let t = this.getCell(e);
                 if (t) return t;
                 let i = e.closest(".flickity-slider > *");
                 return this.getCell(i)
              }, f.getAdjacentCellElements = function (e, t) {
                 if (!e) return this.selectedSlide.getCellElements();
                 t = void 0 === t ? this.selectedIndex : t;
                 let i = this.slides.length;
                 if (1 + 2 * e >= i) return this.getCellElements();
                 let s = [];
                 for (let r = t - e; r <= t + e; r++) {
                    let e = this.isWrapping ? n.modulo(r, i) : r,
                       t = this.slides[e];
                    t && (s = s.concat(t.getCellElements()))
                 }
                 return s
              }, f.queryCell = function (e) {
                 if ("number" == typeof e) return this.cells[e];
                 return "string" == typeof e && !e.match(/^[#.]?[\d/]/) && (e = this.element.querySelector(e)), this.getCell(e)
              }, f.uiChange = function () {
                 this.emitEvent("uiChange")
              }, f.onresize = function () {
                 this.watchCSS(), this.resize()
              }, n.debounceMethod(h, "onresize", 150), f.resize = function () {
                 if (!this.isActive || this.isAnimating || this.isDragging) return;
                 this.getSize(), this.isWrapping && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._updateWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                 let e = this.selectedElements && this.selectedElements[0];
                 this.selectCell(e, !1, !0)
              }, f.watchCSS = function () {
                 if (!this.options.watchCSS) return;
                 a(this.element, ":after").content.includes("flickity") ? this.activate() : this.deactivate()
              }, f.onkeydown = function (e) {
                 let {
                    activeElement: t
                 } = document, i = h.keyboardHandlers[e.key];
                 this.options.accessibility && t && i && this.focusableElems.some((e => t === e)) && i.call(this)
              }, h.keyboardHandlers = {
                 ArrowLeft: function () {
                    this.uiChange(), this[this.options.rightToLeft ? "next" : "previous"]()
                 },
                 ArrowRight: function () {
                    this.uiChange(), this[this.options.rightToLeft ? "previous" : "next"]()
                 }
              }, f.focus = function () {
                 this.element.focus({
                    preventScroll: !0
                 })
              }, f.deactivate = function () {
                 this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach((e => e.destroy())), this.viewport.remove(), this.element.append(...this.slider.children), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
              }, f.destroy = function () {
                 this.deactivate(), e.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), c && this.$element && c.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete d[this.guid]
              }, Object.assign(f, o), h.data = function (e) {
                 if (e = n.getQueryElement(e)) return d[e.flickityGUID]
              }, n.htmlInit(h, "flickity");
              let {
                 jQueryBridget: v
              } = e;
              return c && v && v("flickity", h, c), h.setJQuery = function (e) {
                 c = e
              }, h.Cell = s, h.Slide = r, h
           }))
        },
        3170: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(t, i(4831), i(6377), i(977)) : t.Flickity = n(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
           }("undefined" != typeof window ? window : this, (function (e, t, i, n) {
              Object.assign(t.defaults, {
                 draggable: ">1",
                 dragThreshold: 3
              });
              let s = t.prototype;

              function r() {
                 return {
                    x: e.pageXOffset,
                    y: e.pageYOffset
                 }
              }
              return Object.assign(s, i.prototype), s.touchActionValue = "", t.create.drag = function () {
                 this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), this.on("pointerDown", this.handlePointerDown), this.on("pointerUp", this.handlePointerUp), this.on("pointerDown", this.handlePointerDone), this.on("dragStart", this.handleDragStart), this.on("dragMove", this.handleDragMove), this.on("dragEnd", this.handleDragEnd), this.on("staticClick", this.handleStaticClick)
              }, s.onActivateDrag = function () {
                 this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
              }, s.onDeactivateDrag = function () {
                 this.unbindHandles(), this.element.classList.remove("is-draggable")
              }, s.updateDraggable = function () {
                 ">1" === this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.element.classList.toggle("is-draggable", this.isDraggable)
              }, s._uiChangeDrag = function () {
                 delete this.isFreeScrolling
              }, s.handlePointerDown = function (t) {
                 if (!this.isDraggable) return void this.bindActivePointerEvents(t);
                 let i = "touchstart" === t.type,
                    n = "touch" === t.pointerType,
                    s = t.target.matches("input, textarea, select");
                 i || n || s || t.preventDefault(), s || this.focus(), document.activeElement !== this.element && document.activeElement.blur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = r(), e.addEventListener("scroll", this), this.bindActivePointerEvents(t)
              }, s.hasDragStarted = function (e) {
                 return Math.abs(e.x) > this.options.dragThreshold
              }, s.handlePointerUp = function () {
                 delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down")
              }, s.handlePointerDone = function () {
                 e.removeEventListener("scroll", this), delete this.pointerDownScroll
              }, s.handleDragStart = function () {
                 this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), e.removeEventListener("scroll", this))
              }, s.handleDragMove = function (e, t, i) {
                 if (!this.isDraggable) return;
                 e.preventDefault(), this.previousDragX = this.dragX;
                 let n = this.options.rightToLeft ? -1 : 1;
                 this.isWrapping && (i.x %= this.slideableWidth);
                 let s = this.dragStartPosition + i.x * n;
                 if (!this.isWrapping) {
                    let e = Math.max(-this.slides[0].target, this.dragStartPosition);
                    s = s > e ? .5 * (s + e) : s;
                    let t = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                    s = s < t ? .5 * (s + t) : s
                 }
                 this.dragX = s, this.dragMoveTime = new Date
              }, s.handleDragEnd = function () {
                 if (!this.isDraggable) return;
                 let {
                    freeScroll: e
                 } = this.options;
                 e && (this.isFreeScrolling = !0);
                 let t = this.dragEndRestingSelect();
                 if (e && !this.isWrapping) {
                    let e = this.getRestingPosition();
                    this.isFreeScrolling = -e > this.slides[0].target && -e < this.getLastSlide().target
                 } else e || t !== this.selectedIndex || (t += this.dragEndBoostSelect());
                 delete this.previousDragX, this.isDragSelect = this.isWrapping, this.select(t), delete this.isDragSelect
              }, s.dragEndRestingSelect = function () {
                 let e = this.getRestingPosition(),
                    t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
                    i = this._getClosestResting(e, t, 1),
                    n = this._getClosestResting(e, t, -1);
                 return i.distance < n.distance ? i.index : n.index
              }, s._getClosestResting = function (e, t, i) {
                 let n = this.selectedIndex,
                    s = 1 / 0,
                    r = this.options.contain && !this.isWrapping ? (e, t) => e <= t : (e, t) => e < t;
                 for (; r(t, s) && (n += i, s = t, null !== (t = this.getSlideDistance(-e, n)));) t = Math.abs(t);
                 return {
                    distance: s,
                    index: n - i
                 }
              }, s.getSlideDistance = function (e, t) {
                 let i = this.slides.length,
                    s = this.options.wrapAround && i > 1,
                    r = s ? n.modulo(t, i) : t,
                    o = this.slides[r];
                 if (!o) return null;
                 let a = s ? this.slideableWidth * Math.floor(t / i) : 0;
                 return e - (o.target + a)
              }, s.dragEndBoostSelect = function () {
                 if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
                 let e = this.getSlideDistance(-this.dragX, this.selectedIndex),
                    t = this.previousDragX - this.dragX;
                 return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0
              }, s.onscroll = function () {
                 let e = r(),
                    t = this.pointerDownScroll.x - e.x,
                    i = this.pointerDownScroll.y - e.y;
                 (Math.abs(t) > 3 || Math.abs(i) > 3) && this.pointerDone()
              }, t
           }))
        },
        179: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(i(4831), i(7943)) : n(t.Flickity, t.imagesLoaded)
           }("undefined" != typeof window ? window : this, (function (e, t) {
              return e.create.imagesLoaded = function () {
                 this.on("activate", this.imagesLoaded)
              }, e.prototype.imagesLoaded = function () {
                 if (!this.options.imagesLoaded) return;
                 t(this.slider).on("progress", ((e, t) => {
                    let i = this.getParentCell(t.img);
                    this.cellSizeChange(i && i.element), this.options.freeScroll || this.positionSliderAtSelected()
                 }))
              }, e
           }))
        },
        2522: function (e, t, i) {
           if (e.exports) {
              const t = i(4831);
              i(3170), i(7824), i(7728), i(9453), i(9943), i(766), i(179), e.exports = t
           }
        },
        766: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(i(4831), i(977)) : n(t.Flickity, t.fizzyUIUtils)
           }("undefined" != typeof window ? window : this, (function (e, t) {
              const i = "data-flickity-lazyload",
                 n = `${i}-src`,
                 s = `${i}-srcset`,
                 r = `img[${i}], img[${n}], img[${s}], source[${s}]`;
              e.create.lazyLoad = function () {
                 this.on("select", this.lazyLoad), this.handleLazyLoadComplete = this.onLazyLoadComplete.bind(this)
              };
              let o = e.prototype;

              function a(e) {
                 if (e.matches("img")) {
                    let t = e.getAttribute(i),
                       r = e.getAttribute(n),
                       o = e.getAttribute(s);
                    if (t || r || o) return e
                 }
                 return [...e.querySelectorAll(r)]
              }

              function l(e, t) {
                 this.img = e, this.onComplete = t, this.load()
              }
              return o.lazyLoad = function () {
                 let {
                    lazyLoad: e
                 } = this.options;
                 if (!e) return;
                 let t = "number" == typeof e ? e : 0;
                 this.getAdjacentCellElements(t).map(a).flat().forEach((e => new l(e, this.handleLazyLoadComplete)))
              }, o.onLazyLoadComplete = function (e, t) {
                 let i = this.getParentCell(e),
                    n = i && i.element;
                 this.cellSizeChange(n), this.dispatchEvent("lazyLoad", t, n)
              }, l.prototype.handleEvent = t.handleEvent, l.prototype.load = function () {
                 this.img.addEventListener("load", this), this.img.addEventListener("error", this);
                 let e = this.img.getAttribute(i) || this.img.getAttribute(n),
                    t = this.img.getAttribute(s);
                 this.img.src = e, t && this.img.setAttribute("srcset", t), this.img.removeAttribute(i), this.img.removeAttribute(n), this.img.removeAttribute(s)
              }, l.prototype.onload = function (e) {
                 this.complete(e, "flickity-lazyloaded")
              }, l.prototype.onerror = function (e) {
                 this.complete(e, "flickity-lazyerror")
              }, l.prototype.complete = function (e, t) {
                 this.img.removeEventListener("load", this), this.img.removeEventListener("error", this), (this.img.parentNode.matches("picture") ? this.img.parentNode : this.img).classList.add(t), this.onComplete(this.img, e)
              }, e.LazyLoader = l, e
           }))
        },
        7728: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(i(4831), i(977)) : n(t.Flickity, t.fizzyUIUtils)
           }("undefined" != typeof window ? window : this, (function (e, t) {
              function i() {
                 this.holder = document.createElement("div"), this.holder.className = "flickity-page-dots", this.dots = []
              }
              i.prototype.setDots = function (e) {
                 let t = e - this.dots.length;
                 t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
              }, i.prototype.addDots = function (e) {
                 let t = new Array(e).fill().map(((e, t) => {
                    let i = document.createElement("button");
                    i.setAttribute("type", "button");
                    let n = t + 1 + this.dots.length;
                    return i.className = "flickity-page-dot", i.textContent = `View slide ${n}`, i
                 }));
                 this.holder.append(...t), this.dots = this.dots.concat(t)
              }, i.prototype.removeDots = function (e) {
                 this.dots.splice(this.dots.length - e, e).forEach((e => e.remove()))
              }, i.prototype.updateSelected = function (e) {
                 this.selectedDot && (this.selectedDot.classList.remove("is-selected"), this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[e], this.selectedDot.classList.add("is-selected"), this.selectedDot.setAttribute("aria-current", "step"))
              }, e.PageDots = i, Object.assign(e.defaults, {
                 pageDots: !0
              }), e.create.pageDots = function () {
                 this.options.pageDots && (this.pageDots = new i, this.handlePageDotsClick = this.onPageDotsClick.bind(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
              };
              let n = e.prototype;
              return n.activatePageDots = function () {
                 this.pageDots.setDots(this.slides.length), this.focusableElems.push(...this.pageDots.dots), this.pageDots.holder.addEventListener("click", this.handlePageDotsClick), this.element.append(this.pageDots.holder)
              }, n.onPageDotsClick = function (e) {
                 let t = this.pageDots.dots.indexOf(e.target); - 1 !== t && (this.uiChange(), this.select(t))
              }, n.updateSelectedPageDots = function () {
                 this.pageDots.updateSelected(this.selectedIndex)
              }, n.updatePageDots = function () {
                 this.pageDots.dots.forEach((e => {
                    t.removeFrom(this.focusableElems, e)
                 })), this.pageDots.setDots(this.slides.length), this.focusableElems.push(...this.pageDots.dots)
              }, n.deactivatePageDots = function () {
                 this.pageDots.holder.remove(), this.pageDots.holder.removeEventListener("click", this.handlePageDotsClick)
              }, e.PageDots = i, e
           }))
        },
        9453: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(i(4831)) : n(t.Flickity)
           }("undefined" != typeof window ? window : this, (function (e) {
              function t(e, t) {
                 this.autoPlay = e, this.onTick = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
              }
              t.prototype.play = function () {
                 if ("playing" === this.state) return;
                 document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick())
              }, t.prototype.tick = function () {
                 if ("playing" !== this.state) return;
                 let e = "number" == typeof this.autoPlay ? this.autoPlay : 3e3;
                 this.clear(), this.timeout = setTimeout((() => {
                    this.onTick(), this.tick()
                 }), e)
              }, t.prototype.stop = function () {
                 this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
              }, t.prototype.clear = function () {
                 clearTimeout(this.timeout)
              }, t.prototype.pause = function () {
                 "playing" === this.state && (this.state = "paused", this.clear())
              }, t.prototype.unpause = function () {
                 "paused" === this.state && this.play()
              }, t.prototype.visibilityChange = function () {
                 this[document.hidden ? "pause" : "unpause"]()
              }, t.prototype.visibilityPlay = function () {
                 this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
              }, Object.assign(e.defaults, {
                 pauseAutoPlayOnHover: !0
              }), e.create.player = function () {
                 this.player = new t(this.options.autoPlay, (() => {
                    this.next(!0)
                 })), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
              };
              let i = e.prototype;
              return i.activatePlayer = function () {
                 this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
              }, i.playPlayer = function () {
                 this.player.play()
              }, i.stopPlayer = function () {
                 this.player.stop()
              }, i.pausePlayer = function () {
                 this.player.pause()
              }, i.unpausePlayer = function () {
                 this.player.unpause()
              }, i.deactivatePlayer = function () {
                 this.player.stop(), this.element.removeEventListener("mouseenter", this)
              }, i.onmouseenter = function () {
                 this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
              }, i.onmouseleave = function () {
                 this.player.unpause(), this.element.removeEventListener("mouseleave", this)
              }, e.Player = t, e
           }))
        },
        7824: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(i(4831)) : n(t.Flickity)
           }("undefined" != typeof window ? window : this, (function (e) {
              const t = "http://www.w3.org/2000/svg";

              function i(e, t, i) {
                 this.increment = e, this.direction = t, this.isPrevious = "previous" === e, this.isLeft = "left" === t, this._create(i)
              }
              i.prototype._create = function (e) {
                 let t = this.element = document.createElement("button");
                 t.className = `flickity-button flickity-prev-next-button ${this.increment}`;
                 let i = this.isPrevious ? "Previous" : "Next";
                 t.setAttribute("type", "button"), t.setAttribute("aria-label", i), this.disable();
                 let n = this.createSVG(i, e);
                 t.append(n)
              }, i.prototype.createSVG = function (e, i) {
                 let n = document.createElementNS(t, "svg");
                 n.setAttribute("class", "flickity-button-icon"), n.setAttribute("viewBox", "0 0 100 100");
                 let s = document.createElementNS(t, "title");
                 s.append(e);
                 let r = document.createElementNS(t, "path"),
                    o = function (e) {
                       if ("string" == typeof e) return e;
                       let {
                          x0: t,
                          x1: i,
                          x2: n,
                          x3: s,
                          y1: r,
                          y2: o
                       } = e;
                       return `M ${t}, 50\n    L ${i}, ${r+50}\n    L ${n}, ${o+50}\n    L ${s}, 50\n    L ${n}, ${50-o}\n    L ${i}, ${50-r}\n    Z`
                    }(i);
                 return r.setAttribute("d", o), r.setAttribute("class", "arrow"), this.isLeft || r.setAttribute("transform", "translate(100, 100) rotate(180)"), n.append(s, r), n
              }, i.prototype.enable = function () {
                 this.element.removeAttribute("disabled")
              }, i.prototype.disable = function () {
                 this.element.setAttribute("disabled", !0)
              }, Object.assign(e.defaults, {
                 prevNextButtons: !0,
                 arrowShape: {
                    x0: 10,
                    x1: 60,
                    y1: 50,
                    x2: 70,
                    y2: 40,
                    x3: 30
                 }
              }), e.create.prevNextButtons = function () {
                 if (!this.options.prevNextButtons) return;
                 let {
                    rightToLeft: e,
                    arrowShape: t
                 } = this.options, n = e ? "right" : "left", s = e ? "left" : "right";
                 this.prevButton = new i("previous", n, t), this.nextButton = new i("next", s, t), this.focusableElems.push(this.prevButton.element), this.focusableElems.push(this.nextButton.element), this.handlePrevButtonClick = () => {
                    this.uiChange(), this.previous()
                 }, this.handleNextButtonClick = () => {
                    this.uiChange(), this.next()
                 }, this.on("activate", this.activatePrevNextButtons), this.on("select", this.updatePrevNextButtons)
              };
              let n = e.prototype;
              return n.updatePrevNextButtons = function () {
                 let e = this.slides.length ? this.slides.length - 1 : 0;
                 this.updatePrevNextButton(this.prevButton, 0), this.updatePrevNextButton(this.nextButton, e)
              }, n.updatePrevNextButton = function (e, t) {
                 if (this.isWrapping && this.slides.length > 1) return void e.enable();
                 let i = this.selectedIndex !== t;
                 e[i ? "enable" : "disable"](), !i && document.activeElement === e.element && this.focus()
              }, n.activatePrevNextButtons = function () {
                 this.prevButton.element.addEventListener("click", this.handlePrevButtonClick), this.nextButton.element.addEventListener("click", this.handleNextButtonClick), this.element.append(this.prevButton.element, this.nextButton.element), this.on("deactivate", this.deactivatePrevNextButtons)
              }, n.deactivatePrevNextButtons = function () {
                 this.prevButton.element.remove(), this.nextButton.element.remove(), this.prevButton.element.removeEventListener("click", this.handlePrevButtonClick), this.nextButton.element.removeEventListener("click", this.handleNextButtonClick), this.off("deactivate", this.deactivatePrevNextButtons)
              }, e.PrevNextButton = i, e
           }))
        },
        1331: function (e) {
           ! function (t, i) {
              e.exports ? e.exports = i() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = i())
           }("undefined" != typeof window ? window : this, (function () {
              function e(e, t, i) {
                 this.beginMargin = e, this.endMargin = t, this.cellAlign = i, this.cells = [], this.outerWidth = 0, this.height = 0
              }
              let t = e.prototype;
              return t.addCell = function (e) {
                 this.cells.push(e), this.outerWidth += e.size.outerWidth, this.height = Math.max(e.size.outerHeight, this.height), 1 === this.cells.length && (this.x = e.x, this.firstMargin = e.size[this.beginMargin])
              }, t.updateTarget = function () {
                 let e = this.getLastCell(),
                    t = e ? e.size[this.endMargin] : 0,
                    i = this.outerWidth - (this.firstMargin + t);
                 this.target = this.x + this.firstMargin + i * this.cellAlign
              }, t.getLastCell = function () {
                 return this.cells[this.cells.length - 1]
              }, t.select = function () {
                 this.cells.forEach((e => e.select()))
              }, t.unselect = function () {
                 this.cells.forEach((e => e.unselect()))
              }, t.getCellElements = function () {
                 return this.cells.map((e => e.element))
              }, e
           }))
        },
        1485: function (e) {
           ! function (t, i) {
              e.exports ? e.exports = i() : t.getSize = i()
           }(window, (function () {
              function e(e) {
                 let t = parseFloat(e);
                 return -1 == e.indexOf("%") && !isNaN(t) && t
              }
              let t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
              t.length;
              return function (i) {
                 if ("string" == typeof i && (i = document.querySelector(i)), !(i && "object" == typeof i && i.nodeType)) return;
                 let n = getComputedStyle(i);
                 if ("none" == n.display) return function () {
                    let e = {
                       width: 0,
                       height: 0,
                       innerWidth: 0,
                       innerHeight: 0,
                       outerWidth: 0,
                       outerHeight: 0
                    };
                    return t.forEach((t => {
                       e[t] = 0
                    })), e
                 }();
                 let s = {};
                 s.width = i.offsetWidth, s.height = i.offsetHeight;
                 let r = s.isBorderBox = "border-box" == n.boxSizing;
                 t.forEach((e => {
                    let t = n[e],
                       i = parseFloat(t);
                    s[e] = isNaN(i) ? 0 : i
                 }));
                 let o = s.paddingLeft + s.paddingRight,
                    a = s.paddingTop + s.paddingBottom,
                    l = s.marginLeft + s.marginRight,
                    c = s.marginTop + s.marginBottom,
                    u = s.borderLeftWidth + s.borderRightWidth,
                    d = s.borderTopWidth + s.borderBottomWidth,
                    h = e(n.width);
                 !1 !== h && (s.width = h + (r ? 0 : o + u));
                 let f = e(n.height);
                 return !1 !== f && (s.height = f + (r ? 0 : a + d)), s.innerWidth = s.width - (o + u), s.innerHeight = s.height - (a + d), s.outerWidth = s.width + l, s.outerHeight = s.height + c, s
              }
           }))
        },
        7943: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(t, i(2137)) : t.imagesLoaded = n(t, t.EvEmitter)
           }("undefined" != typeof window ? window : this, (function (e, t) {
              let i = e.jQuery,
                 n = e.console;

              function s(e, t, r) {
                 if (!(this instanceof s)) return new s(e, t, r);
                 let o = e;
                 var a;
                 ("string" == typeof e && (o = document.querySelectorAll(e)), o) ? (this.elements = (a = o, Array.isArray(a) ? a : "object" == typeof a && "number" == typeof a.length ? [...a] : [a]), this.options = {}, "function" == typeof t ? r = t : Object.assign(this.options, t), r && this.on("always", r), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error(`Bad element for imagesLoaded ${o||e}`)
              }
              s.prototype = Object.create(t.prototype), s.prototype.getImages = function () {
                 this.images = [], this.elements.forEach(this.addElementImages, this)
              };
              const r = [1, 9, 11];
              s.prototype.addElementImages = function (e) {
                 "IMG" === e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                 let {
                    nodeType: t
                 } = e;
                 if (!t || !r.includes(t)) return;
                 let i = e.querySelectorAll("img");
                 for (let e of i) this.addImage(e);
                 if ("string" == typeof this.options.background) {
                    let t = e.querySelectorAll(this.options.background);
                    for (let e of t) this.addElementBackgroundImages(e)
                 }
              };
              const o = /url\((['"])?(.*?)\1\)/gi;

              function a(e) {
                 this.img = e
              }

              function l(e, t) {
                 this.url = e, this.element = t, this.img = new Image
              }
              return s.prototype.addElementBackgroundImages = function (e) {
                 let t = getComputedStyle(e);
                 if (!t) return;
                 let i = o.exec(t.backgroundImage);
                 for (; null !== i;) {
                    let n = i && i[2];
                    n && this.addBackground(n, e), i = o.exec(t.backgroundImage)
                 }
              }, s.prototype.addImage = function (e) {
                 let t = new a(e);
                 this.images.push(t)
              }, s.prototype.addBackground = function (e, t) {
                 let i = new l(e, t);
                 this.images.push(i)
              }, s.prototype.check = function () {
                 if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
                 let e = (e, t, i) => {
                    setTimeout((() => {
                       this.progress(e, t, i)
                    }))
                 };
                 this.images.forEach((function (t) {
                    t.once("progress", e), t.check()
                 }))
              }, s.prototype.progress = function (e, t, i) {
                 this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log(`progress: ${i}`, e, t)
              }, s.prototype.complete = function () {
                 let e = this.hasAnyBroken ? "fail" : "done";
                 if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                    let e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this)
                 }
              }, a.prototype = Object.create(t.prototype), a.prototype.check = function () {
                 this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
              }, a.prototype.getIsImageComplete = function () {
                 return this.img.complete && this.img.naturalWidth
              }, a.prototype.confirm = function (e, t) {
                 this.isLoaded = e;
                 let {
                    parentNode: i
                 } = this.img, n = "PICTURE" === i.nodeName ? i : this.img;
                 this.emitEvent("progress", [this, n, t])
              }, a.prototype.handleEvent = function (e) {
                 let t = "on" + e.type;
                 this[t] && this[t](e)
              }, a.prototype.onload = function () {
                 this.confirm(!0, "onload"), this.unbindEvents()
              }, a.prototype.onerror = function () {
                 this.confirm(!1, "onerror"), this.unbindEvents()
              }, a.prototype.unbindEvents = function () {
                 this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
              }, l.prototype = Object.create(a.prototype), l.prototype.check = function () {
                 this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
              }, l.prototype.unbindEvents = function () {
                 this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
              }, l.prototype.confirm = function (e, t) {
                 this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
              }, s.makeJQueryPlugin = function (t) {
                 (t = t || e.jQuery) && (i = t, i.fn.imagesLoaded = function (e, t) {
                    return new s(this, e, t).jqDeferred.promise(i(this))
                 })
              }, s.makeJQueryPlugin(), s
           }))
        },
        8176: function (e, t, i) {
           "use strict";
           i.r(t)
        },
        5366: function (e, t, i) {
           "use strict";
           i.r(t)
        },
        6377: function (e, t, i) {
           ! function (t, n) {
              e.exports ? e.exports = n(t, i(2137)) : t.Unidragger = n(t, t.EvEmitter)
           }("undefined" != typeof window ? window : this, (function (e, t) {
              function i() {}
              let n, s, r = i.prototype = Object.create(t.prototype);
              r.handleEvent = function (e) {
                 let t = "on" + e.type;
                 this[t] && this[t](e)
              }, "ontouchstart" in e ? (n = "touchstart", s = ["touchmove", "touchend", "touchcancel"]) : e.PointerEvent ? (n = "pointerdown", s = ["pointermove", "pointerup", "pointercancel"]) : (n = "mousedown", s = ["mousemove", "mouseup"]), r.touchActionValue = "none", r.bindHandles = function () {
                 this._bindHandles("addEventListener", this.touchActionValue)
              }, r.unbindHandles = function () {
                 this._bindHandles("removeEventListener", "")
              }, r._bindHandles = function (t, i) {
                 this.handles.forEach((s => {
                    s[t](n, this), s[t]("click", this), e.PointerEvent && (s.style.touchAction = i)
                 }))
              }, r.bindActivePointerEvents = function () {
                 s.forEach((t => {
                    e.addEventListener(t, this)
                 }))
              }, r.unbindActivePointerEvents = function () {
                 s.forEach((t => {
                    e.removeEventListener(t, this)
                 }))
              }, r.withPointer = function (e, t) {
                 t.pointerId === this.pointerIdentifier && this[e](t, t)
              }, r.withTouch = function (e, t) {
                 let i;
                 for (let e of t.changedTouches) e.identifier === this.pointerIdentifier && (i = e);
                 i && this[e](t, i)
              }, r.onmousedown = function (e) {
                 this.pointerDown(e, e)
              }, r.ontouchstart = function (e) {
                 this.pointerDown(e, e.changedTouches[0])
              }, r.onpointerdown = function (e) {
                 this.pointerDown(e, e)
              };
              const o = ["TEXTAREA", "INPUT", "SELECT", "OPTION"],
                 a = ["radio", "checkbox", "button", "submit", "image", "file"];
              return r.pointerDown = function (e, t) {
                 let i = o.includes(e.target.nodeName),
                    n = a.includes(e.target.type),
                    s = !i || n;
                 !this.isPointerDown && !e.button && s && (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDownPointer = {
                    pageX: t.pageX,
                    pageY: t.pageY
                 }, this.bindActivePointerEvents(), this.emitEvent("pointerDown", [e, t]))
              }, r.onmousemove = function (e) {
                 this.pointerMove(e, e)
              }, r.onpointermove = function (e) {
                 this.withPointer("pointerMove", e)
              }, r.ontouchmove = function (e) {
                 this.withTouch("pointerMove", e)
              }, r.pointerMove = function (e, t) {
                 let i = {
                    x: t.pageX - this.pointerDownPointer.pageX,
                    y: t.pageY - this.pointerDownPointer.pageY
                 };
                 this.emitEvent("pointerMove", [e, t, i]), !this.isDragging && this.hasDragStarted(i) && this.dragStart(e, t), this.isDragging && this.dragMove(e, t, i)
              }, r.hasDragStarted = function (e) {
                 return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
              }, r.dragStart = function (e, t) {
                 this.isDragging = !0, this.isPreventingClicks = !0, this.emitEvent("dragStart", [e, t])
              }, r.dragMove = function (e, t, i) {
                 this.emitEvent("dragMove", [e, t, i])
              }, r.onmouseup = function (e) {
                 this.pointerUp(e, e)
              }, r.onpointerup = function (e) {
                 this.withPointer("pointerUp", e)
              }, r.ontouchend = function (e) {
                 this.withTouch("pointerUp", e)
              }, r.pointerUp = function (e, t) {
                 this.pointerDone(), this.emitEvent("pointerUp", [e, t]), this.isDragging ? this.dragEnd(e, t) : this.staticClick(e, t)
              }, r.dragEnd = function (e, t) {
                 this.isDragging = !1, setTimeout((() => delete this.isPreventingClicks)), this.emitEvent("dragEnd", [e, t])
              }, r.pointerDone = function () {
                 this.isPointerDown = !1, delete this.pointerIdentifier, this.unbindActivePointerEvents(), this.emitEvent("pointerDone")
              }, r.onpointercancel = function (e) {
                 this.withPointer("pointerCancel", e)
              }, r.ontouchcancel = function (e) {
                 this.withTouch("pointerCancel", e)
              }, r.pointerCancel = function (e, t) {
                 this.pointerDone(), this.emitEvent("pointerCancel", [e, t])
              }, r.onclick = function (e) {
                 this.isPreventingClicks && e.preventDefault()
              }, r.staticClick = function (e, t) {
                 let i = "mouseup" === e.type;
                 i && this.isIgnoringMouseUp || (this.emitEvent("staticClick", [e, t]), i && (this.isIgnoringMouseUp = !0, setTimeout((() => {
                    delete this.isIgnoringMouseUp
                 }), 400)))
              }, i
           }))
        },
        3832: function (e) {
           "use strict";
           e.exports = ''
        }
     },
     t = {};

  function i(n) {
     var s = t[n];
     if (void 0 !== s) return s.exports;
     var r = t[n] = {
        exports: {}
     };
     return e[n].call(r.exports, r, r.exports, i), r.exports
  }
  i.d = function (e, t) {
     for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
     })
  }, i.o = function (e, t) {
     return Object.prototype.hasOwnProperty.call(e, t)
  }, i.r = function (e) {
     "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
     }), Object.defineProperty(e, "__esModule", {
        value: !0
     })
  };
  i(1630)
}();