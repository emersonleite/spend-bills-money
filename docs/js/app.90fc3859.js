(function(t) {
  function e(e) {
    for (
      var a, r, i = e[0], c = e[1], u = e[2], l = 0, p = [];
      l < i.length;
      l++
    )
      (r = i[l]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && p.push(s[r][0]),
        (s[r] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    m && m(e);
    while (p.length) p.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], a = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== s[c] && (a = !1);
      }
      a && (o.splice(e--, 1), (t = r((r.s = n[0]))));
    }
    return t;
  }
  var a = {},
    s = { app: 0 },
    o = [];
  function r(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = a),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            n,
            a,
            function(e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/spend-bills-money/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = i.push.bind(i);
  (i.push = e), (i = i.slice());
  for (var u = 0; u < i.length; u++) e(i[u]);
  var m = c;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  2383: function(t, e, n) {
    t.exports = n.p + "img/ad.39a93d37.jpg";
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "BillsMoney", function() {
        return nt;
      });
    n("4de4"), n("fb6a"), n("a9e3"), n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var a = n("2b0e"),
      s = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("TheHeader"),
            n("SpendBill"),
            n("MoneyLeft"),
            n("ItemsList"),
            n("ShoppingSpree"),
            n("TheFooter"),
          ],
          1
        );
      },
      o = [],
      r = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      i = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "theHeader" }, [
            n("div", { staticClass: "theHeader__container" }, [
              n("p", { staticClass: "theHeader__logo" }, [
                n("a", { attrs: { href: "https://neal.fun/" } }, [
                  t._v("Neal.fun"),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      c = {},
      u = c,
      m = n("2877"),
      l = Object(m["a"])(u, r, i, !1, null, null, null),
      p = l.exports,
      d = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      h = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "spendBill" }, [
            a("div", [
              a("img", {
                staticClass: "spendBill__image",
                attrs: { src: n("dbc0"), alt: "" },
              }),
            ]),
            a("h1", { staticClass: "spendBill__title" }, [
              t._v("Spend Bill Gates' Money"),
            ]),
          ]);
        },
      ],
      f = {},
      _ = f,
      b = Object(m["a"])(_, d, h, !1, null, null, null),
      v = b.exports,
      y = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "moneyLeft" }, [
          n("p", [t._v(t._s(t._f("toDollar")(this.moneyLeft)) + " left")]),
        ]);
      },
      g = [],
      S = n("5530"),
      O = n("2f62"),
      C = {
        name: "MoneyLeft",
        computed: Object(S["a"])({}, Object(O["c"])(["moneyLeft"])),
      },
      j = C,
      w = Object(m["a"])(j, y, g, !1, null, null, null),
      x = w.exports,
      M = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "ul",
          { staticClass: "itemsList" },
          t._l(t.arrayItems, function(e, a) {
            return n(
              "li",
              { key: e.name, staticClass: "itemsList__list" },
              [
                n("div", [
                  n("img", {
                    staticClass: "itemsList__image",
                    attrs: {
                      src: "/spend-bills-money/img/" + e.src + ".jpg",
                      alt: e.name,
                    },
                  }),
                ]),
                n("h2", { staticClass: "itemsList__name" }, [
                  t._v(t._s(e.name)),
                ]),
                n("p", { staticClass: "itemsList__cost" }, [
                  t._v(t._s(t._f("toDollar")(e.cost))),
                ]),
                n("CommandButtons", {
                  attrs: {
                    cost: e.cost,
                    limit: e.limit,
                    amount: e.amount,
                    indexItem: a,
                  },
                }),
              ],
              1
            );
          }),
          0
        );
      },
      T = [],
      k = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "commandButtons" }, [
          n(
            "button",
            {
              staticClass: "commandButtons__buttonSell",
              class: {
                "commandButtons__buttonSell--disabled": 0 === t.inputValue,
              },
              attrs: { disabled: 0 === t.inputValue },
              on: { click: t.toSell },
            },
            [t._v("Sell")]
          ),
          n("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: t.inputValue,
                expression: "inputValue",
              },
            ],
            staticClass: "commandButtons__input",
            attrs: { type: "text" },
            domProps: { value: t.inputValue },
            on: {
              change: t.inputChanged,
              input: function(e) {
                e.target.composing || (t.inputValue = e.target.value);
              },
            },
          }),
          n(
            "button",
            {
              staticClass: "commandButtons__buttonBuy",
              class: {
                "commandButtons__buttonSell--disabled":
                  t.inputValue >= t.limit || t.negative,
              },
              attrs: { disabled: t.inputValue >= t.limit },
              on: { click: t.toBuy },
            },
            [t._v("Buy")]
          ),
        ]);
      },
      B = [],
      L =
        (n("13d5"),
        {
          name: "CommandButtons",
          props: ["cost", "limit", "amount", "indexItem"],
          data: function() {
            return { inputValue: 0, negative: !1 };
          },
          computed: Object(S["a"])(
            Object(S["a"])({}, Object(O["c"])(["moneyLeft", "arrayItems"])),
            {},
            {
              moneySpend: function() {
                var t = this.arrayItems.reduce(function(t, e) {
                  return t + e.cost * e.amount;
                }, 0);
                return t > nt ? nt : t;
              },
              dataItem: function() {
                return { index: this.indexItem, input: this.inputValue };
              },
            }
          ),
          methods: Object(S["a"])(
            Object(S["a"])({}, Object(O["b"])(["updateMoney"])),
            {},
            {
              moneySpend2: function() {
                var t = this.arrayItems.reduce(function(t, e) {
                  return t + e.cost * e.amount;
                }, 0);
                return t > nt ? nt : t;
              },
              inputChanged: function() {
                Number(this.inputValue) * this.cost > nt - this.moneySpend &&
                  (this.inputValue = Math.floor(
                    (nt - this.moneySpend) / this.cost
                  )),
                  this.inputValue > this.limit &&
                    (this.inputValue = this.limit),
                  this.$store.commit("UPDATE_AMOUNT_CHANGE", this.dataItem),
                  this.$store.dispatch("updateMoney", this.moneySpend);
              },
              toSell: function() {
                this.$store.commit("UPDATE_AMOUNT_DOWN", this.indexItem),
                  this.$store.dispatch("updateMoney", this.moneySpend),
                  this.inputValue--;
              },
              toBuy: function() {
                this.$store.commit("UPDATE_AMOUNT_UP", this.indexItem),
                  this.$store.dispatch("updateMoney", this.moneySpend),
                  console.log(this.moneySpend),
                  this.moneySpend >= nt
                    ? (this.negative = !0)
                    : this.inputValue++;
              },
            }
          ),
        }),
      E = L,
      N = Object(m["a"])(E, k, B, !1, null, null, null),
      I = N.exports,
      A = {
        components: { CommandButtons: I },
        name: "ItemsList",
        computed: Object(S["a"])({}, Object(O["c"])(["arrayItems"])),
      },
      P = A,
      V = Object(m["a"])(P, M, T, !1, null, null, null),
      $ = V.exports,
      D = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: t.moneyLeft < 9e10,
                expression: "moneyLeft < 90000000000",
              },
            ],
            staticClass: "shoppingSpree",
          },
          [
            n("h2", { staticClass: "shoppingSpree__title" }, [
              t._v("Your Shopping Spree"),
            ]),
            n(
              "ul",
              { staticClass: "shoppingSpree__items" },
              t._l(t.arrayItems, function(e) {
                return n(
                  "li",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.amount > 0,
                        expression: "item.amount > 0",
                      },
                    ],
                    key: e.name,
                    staticClass: "shoppingSpree__item",
                  },
                  [
                    n("img", {
                      staticClass: "shoppingSpree__image",
                      attrs: {
                        src: "/spend-bills-money/img/" + e.src + ".jpg",
                        alt: "",
                      },
                    }),
                    n("p", [
                      n("span", { staticClass: "shoppingSpree__name" }, [
                        t._v(t._s(e.name) + " x"),
                      ]),
                      n("span", { staticClass: "shoppingSpree__amount" }, [
                        t._v(t._s(e.amount)),
                      ]),
                    ]),
                  ]
                );
              }),
              0
            ),
          ]
        );
      },
      U = [],
      F = {
        computed: Object(S["a"])(
          {},
          Object(O["c"])(["arrayItems", "moneyLeft"])
        ),
      },
      H = F,
      G = Object(m["a"])(H, D, U, !1, null, null, null),
      J = G.exports,
      Y = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      z = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "theFooter" }, [
            a("div", { staticClass: "theFooter__ad" }, [
              a("p", [t._v("You may also like")]),
              a("div", [a("img", { attrs: { src: n("2383"), alt: "" } })]),
            ]),
            a("p", { staticClass: "theFooter__copyright" }, [
              t._v(" Made with ❤️ by "),
              a("a", { attrs: { href: "http://www.emersonleite.dev" } }, [
                t._v("Emerson Leite"),
              ]),
            ]),
            a("p", { staticClass: "theFooter__link" }, [
              a("a", { attrs: { href: "http://www.neal.fun" } }, [
                t._v("Neal.fun"),
              ]),
            ]),
          ]);
        },
      ],
      R = {},
      W = R,
      K = Object(m["a"])(W, Y, z, !1, null, null, null),
      q = K.exports,
      Q = {
        name: "App",
        components: {
          TheHeader: p,
          SpendBill: v,
          MoneyLeft: x,
          ItemsList: $,
          ShoppingSpree: J,
          TheFooter: q,
        },
      },
      X = Q,
      Z = (n("5c0b"), Object(m["a"])(X, s, o, !1, null, null, null)),
      tt = Z.exports;
    a["a"].use(O["a"]);
    var et = new O["a"].Store({
      state: {
        moneyLeft: 9e10,
        spree: !1,
        arrayItems: [
          { name: "Big Mac", cost: 2, amount: 0, src: "bigmac" },
          { name: "Cup of Coffee", cost: 4, amount: 0, src: "cupofcoffee" },
          { name: "Book", cost: 15, amount: 0, src: "book" },
          { name: "Video Game", cost: 60, amount: 0, src: "videogame" },
          { name: "Charity", cost: 100, amount: 0, src: "charity" },
          { name: "Headphones", cost: 200, amount: 0, src: "headphones" },
          { name: "Air Jordans", cost: 200, amount: 0, src: "airjordans" },
          { name: "Skateboard", cost: 300, amount: 0, src: "skateboard" },
          { name: "Smartphone", cost: 600, amount: 0, src: "smartphone" },
          {
            name: "Gaming Console",
            cost: 600,
            amount: 0,
            src: "gamingconsole",
          },
          { name: "Bike", cost: 800, amount: 0, src: "bike" },
          { name: "Drone", cost: 800, amount: 0, src: "drone" },
          {
            name: "Designer Handbag",
            cost: 1e3,
            amount: 0,
            src: "designerhandbag",
          },
          { name: "Jet Ski", cost: 8e3, amount: 0, src: "jetski" },
          { name: "4K TV", cost: 1e4, amount: 0, src: "4ktv" },
          { name: "Diamond Ring", cost: 1e4, amount: 0, src: "diamondring" },
          { name: "Rolex", cost: 15e3, amount: 0, src: "rolex" },
          { name: "Speed boat", cost: 3e4, amount: 0, src: "speedboat" },
          { name: "Food Truck", cost: 5e4, amount: 0, src: "foodtruck" },
          { name: "Tesla", cost: 7e4, amount: 0, src: "tesla" },
          { name: "Monster Truck", cost: 15e4, amount: 0, src: "monstertruck" },
          { name: "Helicopter", cost: 175e3, amount: 0, src: "helicopter" },
          { name: "Ferrari", cost: 2e5, amount: 0, src: "ferrari" },
          { name: "Lamborghini", cost: 2e5, amount: 0, src: "lamborghini" },
          { name: "Firetruck", cost: 2e5, amount: 0, src: "firetruck" },
          { name: "Townhouse", cost: 2e5, amount: 0, src: "townhouse" },
          { name: "Bar", cost: 3e5, amount: 0, src: "bar" },
          { name: "Pizza Shop", cost: 5e5, amount: 0, src: "pizzashop" },
          { name: "Bar of Gold", cost: 5e5, amount: 0, src: "barofgold" },
          { name: "Superbowl Ad", cost: 5e6, amount: 0, src: "superbowlad" },
          { name: "Beach House", cost: 5e6, amount: 0, src: "beachhouse" },
          { name: "Yacht", cost: 1e7, amount: 0, src: "yacht" },
          { name: "F16", cost: 15e6, amount: 0, src: "f16" },
          { name: "Skyscraper", cost: 5e7, amount: 0, src: "skyscraper" },
          { name: "Mansion", cost: 5e7, amount: 0, src: "mansion" },
          { name: "Rocket", cost: 6e7, amount: 0, src: "rocket" },
          { name: "Passenger Jet", cost: 15e7, amount: 0, src: "passengerjet" },
          {
            name: "Mona Lisa",
            cost: 78e7,
            amount: 0,
            limit: 1,
            src: "monalisa",
          },
          { name: "Cruise Ship", cost: 12e8, amount: 0, src: "cruiseship" },
          {
            name: "NBA Team",
            cost: 13e8,
            amount: 0,
            limit: 30,
            src: "nbateam",
          },
          {
            name: "MLB Team",
            cost: 15e8,
            amount: 0,
            limit: 30,
            src: "mlbteam",
          },
          {
            name: "NFL Team",
            cost: 23e8,
            amount: 0,
            limit: 32,
            src: "nflteam",
          },
        ],
      },
      mutations: {
        UPDATE_MONEY: function(t, e) {
          t.moneyLeft = nt - e;
        },
        UPDATE_AMOUNT_UP: function(t, e) {
          t.arrayItems[e].amount++;
        },
        UPDATE_AMOUNT_DOWN: function(t, e) {
          t.arrayItems[e].amount--;
        },
        UPDATE_AMOUNT_CHANGE: function(t, e) {
          t.arrayItems[e.index].amount = e.input;
        },
      },
      actions: {
        updateMoney: function(t, e) {
          t.commit("UPDATE_MONEY", e);
        },
      },
      modules: {},
    });
    a["a"].config.productionTip = !1;
    var nt = 9e10;
    a["a"].filter("toDollar", function(t) {
      return (
        (t = Number(t)),
        isNaN(t)
          ? ""
          : t
              .toLocaleString("en-us", { style: "currency", currency: "USD" })
              .slice(0, -3)
      );
    }),
      new a["a"]({
        store: et,
        render: function(t) {
          return t(tt);
        },
      }).$mount("#app");
  },
  "5c0b": function(t, e, n) {
    "use strict";
    var a = n("9c0c"),
      s = n.n(a);
    s.a;
  },
  "9c0c": function(t, e, n) {},
  dbc0: function(t, e, n) {
    t.exports = n.p + "img/billgates.9d2f569b.png";
  },
});
//# sourceMappingURL=app.90fc3859.js.map
