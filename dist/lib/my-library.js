function g() {
}
function O(t) {
  return t();
}
function H() {
  return /* @__PURE__ */ Object.create(null);
}
function C(t) {
  t.forEach(O);
}
function S(t) {
  return typeof t == "function";
}
function R(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function z(t) {
  return Object.keys(t).length === 0;
}
function y(t, e) {
  t.appendChild(e);
}
function v(t, e, n) {
  t.insertBefore(e, n || null);
}
function x(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function D(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function h(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function F(t) {
  return document.createTextNode(t);
}
function P() {
  return F("");
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function V(t) {
  return Array.from(t.childNodes);
}
function q(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let E;
function w(t) {
  E = t;
}
function G() {
  if (!E)
    throw new Error("Function called outside component initialization");
  return E;
}
function J(t) {
  G().$$.on_mount.push(t);
}
const b = [], T = [];
let k = [];
const B = [], K = /* @__PURE__ */ Promise.resolve();
let N = !1;
function Q() {
  N || (N = !0, K.then(I));
}
function A(t) {
  k.push(t);
}
const M = /* @__PURE__ */ new Set();
let $ = 0;
function I() {
  if ($ !== 0)
    return;
  const t = E;
  do {
    try {
      for (; $ < b.length; ) {
        const e = b[$];
        $++, w(e), U(e.$$);
      }
    } catch (e) {
      throw b.length = 0, $ = 0, e;
    }
    for (w(null), b.length = 0, $ = 0; T.length; )
      T.pop()();
    for (let e = 0; e < k.length; e += 1) {
      const n = k[e];
      M.has(n) || (M.add(n), n());
    }
    k.length = 0;
  } while (b.length);
  for (; B.length; )
    B.pop()();
  N = !1, M.clear(), w(t);
}
function U(t) {
  if (t.fragment !== null) {
    t.update(), C(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A);
  }
}
function W(t) {
  const e = [], n = [];
  k.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), k = e;
}
const X = /* @__PURE__ */ new Set();
function Y(t, e) {
  t && t.i && (X.delete(t), t.i(e));
}
function Z(t, e, n, r) {
  const { fragment: a, after_update: o } = t.$$;
  a && a.m(e, n), r || A(() => {
    const l = t.$$.on_mount.map(O).filter(S);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : C(l), t.$$.on_mount = [];
  }), o.forEach(A);
}
function tt(t, e) {
  const n = t.$$;
  n.fragment !== null && (W(n.after_update), C(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function et(t, e) {
  t.$$.dirty[0] === -1 && (b.push(t), Q(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function nt(t, e, n, r, a, o, l, u = [-1]) {
  const f = E;
  w(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: g,
    not_equal: a,
    bound: H(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: H(),
    dirty: u,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  l && l(s.root);
  let p = !1;
  if (s.ctx = n ? n(t, e.props || {}, (d, _, ...i) => {
    const m = i.length ? i[0] : _;
    return s.ctx && a(s.ctx[d], s.ctx[d] = m) && (!s.skip_bound && s.bound[d] && s.bound[d](m), p && et(t, d)), _;
  }) : [], s.update(), p = !0, C(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = V(e.target);
      s.fragment && s.fragment.l(d), d.forEach(x);
    } else
      s.fragment && s.fragment.c();
    e.intro && Y(t.$$.fragment), Z(t, e.target, e.anchor, e.customElement), I();
  }
  w(f);
}
let L;
typeof HTMLElement == "function" && (L = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(O).filter(S);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    C(this.$$.on_disconnect);
  }
  $destroy() {
    tt(this, 1), this.$destroy = g;
  }
  $on(t, e) {
    if (!S(e))
      return g;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !z(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function rt(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r;
}
function ot(t, e, n) {
  const r = t.slice();
  return r[7] = e[n], r;
}
function ct(t) {
  let e;
  return {
    c() {
      e = h("line"), c(e, "class", "minor"), c(e, "y1", "42"), c(e, "y2", "45"), c(e, "transform", "rotate(" + 6 * /*minute*/
      (t[4] + /*offset*/
      t[7]) + ")");
    },
    m(n, r) {
      v(n, e, r);
    },
    p: g,
    d(n) {
      n && x(e);
    }
  };
}
function st(t) {
  let e, n, r = [1, 2, 3, 4], a = [];
  for (let o = 0; o < 4; o += 1)
    a[o] = ct(ot(t, r, o));
  return {
    c() {
      e = h("line");
      for (let o = 0; o < 4; o += 1)
        a[o].c();
      n = P(), c(e, "class", "major"), c(e, "y1", "35"), c(e, "y2", "45"), c(e, "transform", "rotate(" + 30 * /*minute*/
      t[4] + ")");
    },
    m(o, l) {
      v(o, e, l);
      for (let u = 0; u < 4; u += 1)
        a[u] && a[u].m(o, l);
      v(o, n, l);
    },
    p: g,
    d(o) {
      o && x(e), D(a, o), o && x(n);
    }
  };
}
function it(t) {
  let e, n, r, a, o, l, u, f, s, p, d = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], _ = [];
  for (let i = 0; i < 12; i += 1)
    _[i] = st(rt(t, d, i));
  return {
    c() {
      e = h("svg"), n = h("circle");
      for (let i = 0; i < 12; i += 1)
        _[i].c();
      r = h("line"), o = h("line"), u = h("g"), f = h("line"), s = h("line"), this.c = g, c(n, "class", "clock-face"), c(n, "r", "48"), c(r, "class", "hour"), c(r, "y1", "2"), c(r, "y2", "-20"), c(r, "transform", a = "rotate(" + (30 * /*hours*/
      t[2] + /*minutes*/
      t[1] / 2) + ")"), c(o, "class", "minute"), c(o, "y1", "4"), c(o, "y2", "-30"), c(o, "transform", l = "rotate(" + (6 * /*minutes*/
      t[1] + /*seconds*/
      t[0] / 10) + ")"), c(f, "class", "second"), c(f, "y1", "10"), c(f, "y2", "-38"), c(s, "class", "second-counterweight"), c(s, "y1", "10"), c(s, "y2", "2"), c(u, "transform", p = "rotate(" + 6 * /*seconds*/
      t[0] + ")"), c(e, "viewBox", "-50 -50 100 100");
    },
    m(i, m) {
      v(i, e, m), y(e, n);
      for (let j = 0; j < 12; j += 1)
        _[j] && _[j].m(e, null);
      y(e, r), y(e, o), y(e, u), y(u, f), y(u, s);
    },
    p(i, [m]) {
      m & /*hours, minutes*/
      6 && a !== (a = "rotate(" + (30 * /*hours*/
      i[2] + /*minutes*/
      i[1] / 2) + ")") && c(r, "transform", a), m & /*minutes, seconds*/
      3 && l !== (l = "rotate(" + (6 * /*minutes*/
      i[1] + /*seconds*/
      i[0] / 10) + ")") && c(o, "transform", l), m & /*seconds*/
      1 && p !== (p = "rotate(" + 6 * /*seconds*/
      i[0] + ")") && c(u, "transform", p);
    },
    i: g,
    o: g,
    d(i) {
      i && x(e), D(_, i);
    }
  };
}
function lt(t, e, n) {
  let r, a, o, l = /* @__PURE__ */ new Date();
  return J(() => {
    const u = setInterval(
      () => {
        n(3, l = /* @__PURE__ */ new Date());
      },
      1e3
    );
    return () => {
      clearInterval(u);
    };
  }), t.$$.update = () => {
    t.$$.dirty & /*time*/
    8 && n(2, r = l.getHours()), t.$$.dirty & /*time*/
    8 && n(1, a = l.getMinutes()), t.$$.dirty & /*time*/
    8 && n(0, o = l.getSeconds());
  }, [o, a, r, l];
}
class at extends L {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = "svg{width:100%;height:100%}.clock-face{stroke:#333;fill:white}.minor{stroke:#999;stroke-width:0.5}.major{stroke:#333;stroke-width:1}.hour{stroke:#333}.minute{stroke:#666}.second,.second-counterweight{stroke:rgb(180,0,0)}.second-counterweight{stroke-width:3}", this.shadowRoot.appendChild(n), nt(
      this,
      {
        target: this.shadowRoot,
        props: q(this.attributes),
        customElement: !0
      },
      lt,
      it,
      R,
      {},
      null
    ), e && e.target && v(e.target, this, e.anchor);
  }
}
customElements.define("my-component", at);
export {
  at as MyComponent
};
