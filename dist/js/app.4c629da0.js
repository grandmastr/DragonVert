(function(t) {
  function e(e) {
    for (
      var r, i, n = e[0], c = e[1], l = e[2], d = 0, m = [];
      d < n.length;
      d++
    )
      (i = n[d]), o[i] && m.push(o[i][0]), (o[i] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
    u && u(e);
    while (m.length) m.shift()();
    return s.push.apply(s, l || []), a();
  }
  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], r = !0, n = 1; n < a.length; n++) {
        var c = a[n];
        0 !== o[c] && (r = !1);
      }
      r && (s.splice(e--, 1), (t = i((i.s = a[0]))));
    }
    return t;
  }
  var r = {},
    o = { app: 0 },
    s = [];
  function i(e) {
    if (r[e]) return r[e].exports;
    var a = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = t),
    (i.c = r),
    (i.d = function(t, e, a) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (i.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            a,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return a;
    }),
    (i.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "/");
  var n = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var l = 0; l < n.length; l++) e(n[l]);
  var u = c;
  s.push([0, "chunk-vendors"]), a();
})({
  0: function(t, e, a) {
    t.exports = a("56d7");
  },
  "034f": function(t, e, a) {
    "use strict";
    var r = a("64a9"),
      o = a.n(r);
    o.a;
  },
  "0bb0": function(t, e, a) {},
  "1b08": function(t, e, a) {},
  "22df": function(t, e, a) {
    "use strict";
    var r = a("443e"),
      o = a.n(r);
    o.a;
  },
  "2ea0": function(t, e, a) {},
  3212: function(t, e, a) {
    "use strict";
    var r = a("f4c8"),
      o = a.n(r);
    o.a;
  },
  "32a6": function(t, e, a) {},
  3842: function(t, e, a) {
    "use strict";
    var r = a("ca83"),
      o = a.n(r);
    o.a;
  },
  "443e": function(t, e, a) {},
  4637: function(t, e, a) {
    t.exports = a.p + "img/button-loading.abade119.gif";
  },
  "4be7": function(t, e, a) {
    "use strict";
    var r = a("ffe7"),
      o = a.n(r);
    o.a;
  },
  "4c40": function(t, e, a) {},
  "56d7": function(t, e, a) {
    "use strict";
    a.r(e);
    var r,
      o,
      s = a("795b"),
      i = a.n(s),
      n = (a("cadf"), a("551c"), a("f751"), a("097d"), a("2b0e")),
      c = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { attrs: { id: "app" } },
          [
            a("quickNav"),
            a("Nav"),
            a("transition", { attrs: { name: "fade" } }, [a("router-view")], 1)
          ],
          1
        );
      },
      l = [],
      u = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !t.isDash,
                expression: "!isDash"
              }
            ],
            staticClass: "quickNav",
            attrs: { id: "quickNav" }
          },
          [
            a("ul", [
              a(
                "li",
                [
                  a("icon-living", { attrs: { icon: "phone" } }),
                  a("router-link", { attrs: { to: "/contact" } }, [
                    t._v("Customer Service")
                  ])
                ],
                1
              ),
              a(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !t.isLoggedIn,
                      expression: "!isLoggedIn"
                    }
                  ]
                },
                [
                  a("icon-living", { attrs: { icon: "user" } }),
                  a("router-link", { attrs: { to: "/register" } }, [
                    t._v("Create Account")
                  ])
                ],
                1
              ),
              a(
                "li",
                [
                  t.isLoggedIn
                    ? [
                        a("icon-living", { attrs: { icon: "sign-out-alt" } }),
                        a(
                          "a",
                          { attrs: { href: "#" }, on: { click: t.logout } },
                          [t._v("Sign Out")]
                        )
                      ]
                    : [
                        a("icon-living", { attrs: { icon: "sign-out-alt" } }),
                        a("router-link", { attrs: { to: "/login" } }, [
                          t._v("Sign in")
                        ])
                      ]
                ],
                2
              ),
              t.isLoggedIn ? a("li") : t._e(),
              "/admin" === t.$route.matched[0].path
                ? a(
                    "li",
                    [
                      a("icon-living", { attrs: { icon: "home" } }),
                      a("router-link", { attrs: { to: "/admin/user" } }, [
                        t._v("Go home")
                      ])
                    ],
                    1
                  )
                : "/admin" !== t.$route.matched[0].path && t.isLoggedIn
                ? a(
                    "li",
                    [
                      a("icon-living", { attrs: { icon: "tachometer-alt" } }),
                      a("router-link", { attrs: { to: "/admin/user" } }, [
                        t._v("Dashboard Area")
                      ])
                    ],
                    1
                  )
                : t._e()
            ])
          ]
        );
      },
      d = [],
      m = {
        name: "quickNav",
        data: function() {
          return { isDash: "/admin" === this.$route.matched[0].path };
        },
        methods: {
          logout: function() {
            var t = this;
            this.$store
              .dispatch("logout")
              .then(function() {
                t.$router.push("/login"), console.log("You are logged out");
              })
              .catch(function(t) {
                console.log(t);
              });
          }
        },
        computed: {
          isLoggedIn: function() {
            return this.$store.getters.isLoggedIn;
          }
        },
        watch: {
          $route: function(t, e) {
            this.isDash = "/admin" === t.matched[0].path;
          }
        }
      },
      p = m,
      v = a("2877"),
      h = Object(v["a"])(p, u, d, !1, null, null, null),
      g = h.exports,
      f = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "nav",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !t.isDash,
                expression: "!isDash"
              }
            ],
            staticClass: "nav",
            attrs: { id: "navbar" }
          },
          [
            a(
              "div",
              { staticClass: "nav-container" },
              [
                a("router-link", { attrs: { to: "/" } }, [
                  a("span", { staticClass: "brand-name" }, [
                    t._v("\n\t\t\t\t\tDragon\n\t\t\t\t\t"),
                    a("b"),
                    a(
                      "span",
                      {
                        staticStyle: {
                          color: "#fab000",
                          "font-weight": "bolder"
                        }
                      },
                      [t._v("Vert")]
                    ),
                    t._v("™\n\t\t\t\t")
                  ])
                ]),
                a("ul", [
                  a("li", [
                    a("form", { attrs: { action: "/search/Omron" } }, [
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.searchString,
                            expression: "searchString"
                          }
                        ],
                        staticClass: "nav-search",
                        attrs: {
                          type: "search",
                          placeholder: "Search for products"
                        },
                        domProps: { value: t.searchString },
                        on: {
                          input: function(e) {
                            e.target.composing ||
                              (t.searchString = e.target.value);
                          }
                        }
                      }),
                      a(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                t.autoCompleteActive &&
                                0 !== t.autoProducts.length,
                              expression:
                                "autoCompleteActive && autoProducts.length !== 0"
                            }
                          ],
                          staticClass: "search-autocomplete-desktop",
                          staticStyle: {
                            background: "white",
                            "text-transform": "normal"
                          }
                        },
                        t._l(t.autoProducts, function(e) {
                          return a(
                            "span",
                            { key: e.id },
                            [
                              a(
                                "router-link",
                                { attrs: { to: "/details/" + e.id } },
                                [t._v(t._s(e.name))]
                              )
                            ],
                            1
                          );
                        }),
                        0
                      )
                    ])
                  ]),
                  a("li"),
                  a("li"),
                  a("li"),
                  a("li"),
                  a("li"),
                  a(
                    "li",
                    { staticClass: "show-for-mobile account" },
                    [
                      t.isLoggedIn
                        ? [
                            a(
                              "router-link",
                              {
                                attrs: {
                                  to:
                                    null !== t.$store.state.user.merchant_id
                                      ? "/admin/merchant"
                                      : "/admin/user"
                                },
                                on: {
                                  click: function(e) {
                                    return e.preventDefault(), t.logout(e);
                                  }
                                }
                              },
                              [
                                a("icon-living", {
                                  staticStyle: { cursor: "pointer" },
                                  attrs: {
                                    icon: "tachometer-alt",
                                    title: "Go to Dashboard Area"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        : a(
                            "router-link",
                            { attrs: { to: "/login" } },
                            [
                              a("icon-living", {
                                attrs: {
                                  icon: "user-circle",
                                  title: "Client Area"
                                }
                              })
                            ],
                            1
                          )
                    ],
                    2
                  ),
                  a(
                    "li",
                    { staticClass: "show-for-mobile" },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/cart" } },
                        [
                          a("icon-living", {
                            attrs: {
                              icon: "shopping-cart",
                              title: "Go to cart"
                            }
                          }),
                          this.$store.state.cart.length > 0
                            ? a("span", { staticClass: "cart-badge" }, [
                                t._v(t._s(this.$store.state.cart.length))
                              ])
                            : a("span", { staticClass: "cart-badge" }, [
                                t._v(t._s(0))
                              ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                a(
                  "div",
                  {
                    directives: [
                      {
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: t.onOutsideClick,
                        expression: "onOutsideClick"
                      }
                    ]
                  },
                  [
                    a(
                      "svg",
                      {
                        staticClass: "dropdown-button",
                        staticStyle: { cursor: "pointer" },
                        on: {
                          click: function(e) {
                            t.navClosed = !t.navClosed;
                          }
                        }
                      },
                      [
                        t.navClosed
                          ? a(
                              "g",
                              {
                                attrs: {
                                  stroke: "#fff",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round"
                                }
                              },
                              [
                                a("line", {
                                  attrs: { x1: "8", y1: "8", x2: "24", y2: "8" }
                                }),
                                a("line", {
                                  attrs: { x1: "8", y1: "2", x2: "24", y2: "2" }
                                }),
                                a("line", {
                                  attrs: {
                                    x1: "8",
                                    y1: "14",
                                    x2: "24",
                                    y2: "14"
                                  }
                                })
                              ]
                            )
                          : a(
                              "g",
                              {
                                attrs: {
                                  stroke: "#fff",
                                  "stroke-width": "2.5",
                                  "stroke-linecap": "round"
                                }
                              },
                              [
                                a("line", {
                                  attrs: {
                                    x1: "8",
                                    y1: "1",
                                    x2: "20",
                                    y2: "14"
                                  }
                                }),
                                a("line", {
                                  attrs: {
                                    x1: "8",
                                    y1: "14",
                                    x2: "20",
                                    y2: "1"
                                  }
                                })
                              ]
                            )
                      ]
                    ),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !t.navClosed,
                            expression: "!navClosed"
                          }
                        ]
                      },
                      [
                        a(
                          "div",
                          { staticClass: "menu-for-mobile" },
                          [
                            a("h2", { staticClass: "navHeader" }, [
                              t._v("Menu")
                            ]),
                            a(
                              "span",
                              [
                                a(
                                  "router-link",
                                  {
                                    attrs: {
                                      exact: "",
                                      to: "/",
                                      title: "Back to Home"
                                    }
                                  },
                                  [t._v("home")]
                                )
                              ],
                              1
                            ),
                            a(
                              "span",
                              [
                                a(
                                  "router-link",
                                  {
                                    attrs: {
                                      exact: "",
                                      to: "/contact",
                                      title: "Contact Us"
                                    }
                                  },
                                  [t._v("contact")]
                                )
                              ],
                              1
                            ),
                            t.isLoggedIn
                              ? [
                                  null !== t.$store.state.user.merchant_id
                                    ? a(
                                        "span",
                                        [
                                          a(
                                            "router-link",
                                            {
                                              attrs: {
                                                exact: "",
                                                to: "/admin/merchant",
                                                title: "Merchant Dashboard Area"
                                              }
                                            },
                                            [t._v("Dashboard Area")]
                                          )
                                        ],
                                        1
                                      )
                                    : a(
                                        "span",
                                        [
                                          a(
                                            "router-link",
                                            {
                                              attrs: {
                                                exact: "",
                                                to: "/admin/user",
                                                title: "Dashboard Area"
                                              }
                                            },
                                            [t._v("Dashboard Area")]
                                          )
                                        ],
                                        1
                                      )
                                ]
                              : t._e(),
                            a(
                              "span",
                              [
                                a(
                                  "router-link",
                                  {
                                    attrs: {
                                      exact: "",
                                      to: "/equipments",
                                      title: "Contact Us"
                                    }
                                  },
                                  [t._v("equipments")]
                                )
                              ],
                              1
                            )
                          ],
                          2
                        ),
                        0 !== this.$store.state.categories.length
                          ? [
                              a("h2", { staticClass: "navHeader" }, [
                                t._v("Categories")
                              ]),
                              t._l(t.categories, function(e) {
                                return a(
                                  "span",
                                  {
                                    key: e.attributes.name,
                                    attrs: { title: e.attributes.slug }
                                  },
                                  [
                                    a(
                                      "router-link",
                                      {
                                        attrs: {
                                          to:
                                            "/categories/" +
                                            e.attributes.name
                                              .split(" ")
                                              .join("-")
                                              .toLowerCase()
                                        }
                                      },
                                      [
                                        t._v(
                                          t._s(e.attributes.name.substr(0, 30))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                );
                              })
                            ]
                          : [t._m(0)]
                      ],
                      2
                    )
                  ]
                )
              ],
              1
            )
          ]
        );
      },
      b = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a(
              "div",
              {
                staticClass: "lds-css ng-scope",
                staticStyle: { width: "150px", height: "150px" }
              },
              [
                a(
                  "div",
                  {
                    staticClass: "lds-blocks",
                    staticStyle: { width: "100%", height: "100%" }
                  },
                  [
                    a("div", {
                      staticStyle: {
                        left: "54px",
                        top: "54px",
                        "animation-delay": "0s"
                      }
                    }),
                    a("div", {
                      staticStyle: {
                        left: "85px",
                        top: "54px",
                        "animation-delay": "0.125s"
                      }
                    }),
                    a("div", {
                      staticStyle: {
                        left: "116px",
                        top: "54px",
                        "animation-delay": "0.25s"
                      }
                    }),
                    a("div", {
                      staticStyle: {
                        left: "54px",
                        top: "85px",
                        "animation-delay": "0.875s"
                      }
                    }),
                    a("div", {
                      staticStyle: {
                        left: "116px",
                        top: "85px",
                        "animation-delay": "0.375s"
                      }
                    }),
                    a("div", {
                      staticStyle: {
                        left: "54px",
                        top: "116px",
                        "animation-delay": "0.75s"
                      }
                    }),
                    a("div", {
                      staticStyle: {
                        left: "85px",
                        top: "116px",
                        "animation-delay": "0.625s"
                      }
                    }),
                    a("div", {
                      staticStyle: {
                        left: "116px",
                        top: "116px",
                        "animation-delay": "0.5s"
                      }
                    })
                  ]
                )
              ]
            )
          ]);
        }
      ],
      _ = a("bc3a"),
      y = a.n(_),
      C = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      w = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "loader", attrs: { id: "loader" } }, [
            a("div", { staticClass: "loader" }, [
              a(
                "div",
                {
                  staticClass: "lds-css ng-scope",
                  staticStyle: { width: "150px", height: "150px" }
                },
                [
                  a(
                    "div",
                    {
                      staticClass: "lds-blocks",
                      staticStyle: { width: "100%", height: "100%" }
                    },
                    [
                      a("div", {
                        staticStyle: {
                          left: "54px",
                          top: "54px",
                          "animation-delay": "0s"
                        }
                      }),
                      a("div", {
                        staticStyle: {
                          left: "85px",
                          top: "54px",
                          "animation-delay": "0.125s"
                        }
                      }),
                      a("div", {
                        staticStyle: {
                          left: "116px",
                          top: "54px",
                          "animation-delay": "0.25s"
                        }
                      }),
                      a("div", {
                        staticStyle: {
                          left: "54px",
                          top: "85px",
                          "animation-delay": "0.875s"
                        }
                      }),
                      a("div", {
                        staticStyle: {
                          left: "116px",
                          top: "85px",
                          "animation-delay": "0.375s"
                        }
                      }),
                      a("div", {
                        staticStyle: {
                          left: "54px",
                          top: "116px",
                          "animation-delay": "0.75s"
                        }
                      }),
                      a("div", {
                        staticStyle: {
                          left: "85px",
                          top: "116px",
                          "animation-delay": "0.625s"
                        }
                      }),
                      a("div", {
                        staticStyle: {
                          left: "116px",
                          top: "116px",
                          "animation-delay": "0.5s"
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ]);
        }
      ],
      x = { name: "loader" },
      P = x,
      k = (a("746e"), Object(v["a"])(P, C, w, !1, null, null, null)),
      N = k.exports,
      O = {
        name: "navbar",
        data: function() {
          return {
            navClosed: !0,
            searchString: "",
            autoCompleteActive: !1,
            autoProducts: [],
            isDash: "/admin" === this.$route.matched[0].path
          };
        },
        components: { Loader: N },
        methods: {
          closeNav: function() {
            this.navClosed = !0;
          },
          onOutsideClick: function(t, e) {
            this.navClosed = !0;
          },
          logout: function() {
            var t = this;
            this.$store
              .dispatch("logout")
              .then(function() {
                t.$router.push("/login");
              })
              .catch(function(t) {
                console.table(t);
              });
          }
        },
        created: function() {
          0 === this.$store.state.categories.length &&
            this.$store.dispatch("allCategories");
        },
        computed: {
          isLoggedIn: function() {
            return this.$store.getters.isLoggedIn;
          },
          categories: function() {
            return this.$store.getters.allCategories;
          }
        },
        watch: {
          $route: function(t, e) {
            (this.navClosed = !0),
              (this.autoCompleteActive = !1),
              (this.isDash = "/admin" === t.matched[0].path);
          },
          searchString: function() {
            0 === this.searchString.length
              ? (this.autoCompleteActive = !1)
              : (this.autoCompleteActive = !0),
              y.a
                .get(
                  "https://dragonvert.joppa.ng/equipments/?search=".concat(
                    this.searchString
                  )
                )
                .then(function(t) {
                  return console.log(t);
                })
                .catch(function(t) {
                  return console.log(t);
                });
          }
        }
      },
      $ = O,
      S = (a("3842"), Object(v["a"])($, f, b, !1, null, "c9dfe5d6", null)),
      E = S.exports,
      q = {
        name: "app",
        components: { Nav: E, quickNav: g },
        created: function() {
          this.$http.interceptors.response.use(void 0, function(t) {
            return new i.a(function(e, a) {
              throw (401 === t.status &&
                t.config &&
                !t.config.__isRetryRequest &&
                this.$store.dispatch("logout"),
              t);
            });
          });
        }
      },
      D = q,
      A = (a("034f"), Object(v["a"])(D, c, l, !1, null, null, null)),
      T = A.exports,
      L = a("8c4f"),
      j = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "home", attrs: { id: "home" } },
          [
            [
              a(
                "div",
                { staticClass: "home-section" },
                [
                  t.productsLoaded
                    ? [a("Loader")]
                    : t._l(t.$store.getters.allCategories.slice(0, 4), function(
                        t
                      ) {
                        return a("ProductListing", {
                          key: t.attributes.name,
                          attrs: {
                            number: 4,
                            header: t.attributes.name,
                            category: t.attributes.slug
                          }
                        });
                      }),
                  a("div", { staticClass: "home-content" })
                ],
                2
              )
            ]
          ],
          2
        );
      },
      I = [],
      M = {},
      U = Object(v["a"])(M, r, o, !1, null, null, null),
      F = U.exports,
      R = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          [
            t.productsLoaded && void 0 !== t.products
              ? a("div", { staticClass: "product-listing" }, [
                  a(
                    "div",
                    { staticClass: "grid-wrapper", attrs: { id: "products" } },
                    [
                      a(
                        "h2",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.header,
                              expression: "header"
                            }
                          ],
                          staticClass: "category-header"
                        },
                        [t._v(t._s(t.header))]
                      ),
                      Array.isArray(t.products) && t.products.length > 0
                        ? [
                            a(
                              "div",
                              { staticClass: "products-main-card grid-row" },
                              [
                                t._l(t.products, function(t) {
                                  return a(
                                    "div",
                                    {
                                      key: t.id,
                                      staticClass:
                                        "col-xsmall-6 col-small-4 col-medium-3 product-card"
                                    },
                                    [a("Product", { attrs: { product: t } })],
                                    1
                                  );
                                })
                              ],
                              2
                            ),
                            a("div", { staticClass: "view-more" }, [
                              a(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: 0 !== !t.products.length,
                                      expression: "!products.length !== 0"
                                    }
                                  ]
                                },
                                [
                                  a("router-link", { attrs: { to: t.url } }, [
                                    t._v("view all")
                                  ])
                                ],
                                1
                              )
                            ])
                          ]
                        : [a("Loader")],
                      a("div", { staticClass: "clearfix" })
                    ],
                    2
                  )
                ])
              : t.products
              ? [a("Loader")]
              : void 0
          ],
          2
        );
      },
      V = [],
      z = a("a745"),
      B = a.n(z),
      Y = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "router-link",
          { attrs: { to: "/equipments/" + t.product.id } },
          [
            a(
              "figure",
              {
                style: {
                  backgroundImage: "url(" + t.product.attributes.image + ")"
                }
              },
              [
                this.$store.state.cart.indexOf(t.product) < 0
                  ? a("p", { staticClass: "add-to-cart-button" }, [
                      a(
                        "button",
                        {
                          on: {
                            click: function(e) {
                              return (
                                e.preventDefault(), t.addToCart(t.product.id)
                              );
                            }
                          }
                        },
                        [t._v("Add To Cart")]
                      )
                    ])
                  : a("p", { staticClass: "remove-from-cart-button" }, [
                      a(
                        "button",
                        {
                          on: {
                            click: function(e) {
                              return e.preventDefault(), t.removeFromCart(t.id);
                            }
                          }
                        },
                        [t._v("Remove From Cart")]
                      )
                    ])
              ]
            ),
            a("figcaption", [
              a("span", { staticClass: "product-name" }, [
                t._v(t._s(t.product.attributes.name))
              ]),
              a("p", { staticClass: "product-price" }, [
                t._v(t._s(t.money(parseInt(t.product.attributes.price))))
              ])
            ])
          ]
        );
      },
      H = [],
      G = (a("28a5"),
      {
        name: "product",
        data: function() {
          return { cart: this.$store.state.cart, addingToCart: !1 };
        },
        props: ["product"],
        computed: {
          money: function() {
            return a("b132").money;
          },
          isAdding: function() {
            return this.cart.indexOf(this.product) < 0;
          }
        },
        methods: {
          addToCart: function(t) {
            var e = {
              data: {
                type: "Cart",
                attributes: {
                  equipment: { type: "Equipment", id: t },
                  quantity: 1
                }
              }
            };
            y()("https://dragonvert.joppa.ng/cart/", {
              method: "POST",
              headers: { "Content-Type": "application/vnd.api+json" },
              data: e
            })
              .then(function(t) {
                console.log(t);
              })
              .catch(function(t) {
                return console.log(t);
              });
          },
          removeFromCart: function(t) {
            this.$store.commit(REMOVE_FROM_CART, t);
          },
          convertToCash: function(t) {
            for (var e in ("string" !== typeof t && (t = String(t)),
            (t = t.split("").reverse()),
            t))
              (e - 3) % 3 === 0 && 0 != e && (t[e] = "".concat(t[e], ","));
            var a = t.reverse().join("");
            return a;
          }
        },
        updated: function() {}
      }),
      J = G,
      Q = Object(v["a"])(J, Y, H, !1, null, null, null),
      W = Q.exports,
      Z = {
        name: "products",
        components: { Product: W, Loader: N },
        props: ["number", "header", "all", "category"],
        data: function() {
          return {
            productsLoaded: !1,
            products: [],
            url:
              "Recently Added" !== this.header
                ? "/categories/".concat(this.category)
                : "/equipments/"
          };
        },
        methods: {},
        created: function() {
          var t = this;
          if (B()(this.products) && 0 === this.products.length) {
            var e = this.category
              ? "https://dragonvert.joppa.ng/equipments/?main_category=".concat(
                  this.category
                )
              : "https://dragonvert.joppa.ng/equipments/";
            y.a.get(e).then(function(e) {
              (t.products =
                e.data.data &&
                e.data.data.slice(
                  0,
                  t.number ? t.number : e.data.data.length + 1
                )),
                (t.productsLoaded = !0);
            });
          }
        }
      },
      K = Z,
      X = Object(v["a"])(K, R, V, !1, null, null, null),
      tt = X.exports,
      et = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div");
      },
      at = [],
      rt = { name: "Footer", props: ["isDash"] },
      ot = rt,
      st = Object(v["a"])(ot, et, at, !1, null, null, null),
      it = st.exports,
      nt = {
        name: "home",
        title: "Dragon Vert - Home",
        components: {
          Categories: F,
          ProductListing: tt,
          Footer: it,
          Loader: N
        },
        data: function() {
          return { productsLoaded: !1 };
        },
        created: function() {
          window.scrollTo(0, 0);
        }
      },
      ct = nt,
      lt = (a("8ae9"), Object(v["a"])(ct, j, I, !1, null, "0c4b160a", null)),
      ut = lt.exports,
      dt = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      mt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "about-page", attrs: { id: "about" } },
            [a("main", { staticClass: "about" })]
          );
        }
      ],
      pt = { name: "about", title: "DragonVert - About Us" },
      vt = pt,
      ht = Object(v["a"])(vt, dt, mt, !1, null, null, null),
      gt = ht.exports,
      ft = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "cart" } }, [
          a("div", { staticClass: "cart-page" }, [
            a("h2", { staticClass: "cart-header" }, [t._v("Your Cart")]),
            a(
              "div",
              { staticClass: "cart-body" },
              [
                t.loading
                  ? [a("Loader")]
                  : [
                      t.cart.length > 0
                        ? [
                            a("div", { staticClass: "table-container" }, [
                              a(
                                "table",
                                { attrs: { id: "cartTable" } },
                                [
                                  t._m(0),
                                  t._l(t.cart, function(e) {
                                    return a("tr", { key: e.id }, [
                                      a("td", [
                                        t._v(
                                          t._s(e.attributes.equipment_info.name)
                                        )
                                      ]),
                                      a("td", [
                                        t._v(
                                          t._s(
                                            t.money(
                                              e.attributes.equipment_info.price
                                            )
                                          )
                                        )
                                      ]),
                                      a("td", [
                                        t._v(t._s(e.attributes.quantity))
                                      ]),
                                      a("td", [
                                        t._v(
                                          t._s(
                                            t.money(
                                              e.attributes.quantity *
                                                e.attributes.equipment_info
                                                  .price
                                            )
                                          )
                                        )
                                      ]),
                                      a(
                                        "td",
                                        [
                                          a("icon-living", {
                                            staticStyle: {
                                              "text-align": "center"
                                            },
                                            attrs: { icon: "trash" },
                                            on: {
                                              click: function(a) {
                                                return t.removeFromCart(
                                                  e.attributes.id
                                                );
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]);
                                  })
                                ],
                                2
                              )
                            ]),
                            a("button", { staticClass: "checkout-button" }, [
                              t._v(
                                "\n\t\t\t\t\t\tProceed to checkout\n\t\t\t\t\t"
                              )
                            ])
                          ]
                        : [
                            a("div", { staticClass: "cart-empty" }, [
                              t._v("There are no items in your cart")
                            ])
                          ]
                    ]
              ],
              2
            )
          ])
        ]);
      },
      bt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("tr", [
            a("th", [t._v("Equipment Name")]),
            a("th", [t._v("Unit Price")]),
            a("th", [t._v("Equipment Quantity")]),
            a("th", [t._v("Total Price")]),
            a("th", [t._v("Action")])
          ]);
        }
      ],
      _t = void 0,
      yt = {
        name: "cart",
        components: { Loader: N },
        title: "DragonVert - Cart",
        data: function() {
          return { loading: !0 };
        },
        created: function() {
          var t = this;
          (null !== this.$store.state.token &&
            "" !== this.$store.state.token) ||
            this.$router.push({ path: "login", query: { redirectTo: "cart" } }),
            this.$store.dispatch("updateCart").then(function() {
              t.cart = t.$store.state.cart;
            }),
            window.scrollTo(0, 0);
        },
        mounted: function() {},
        computed: {
          money: function() {
            return a("b132").money;
          },
          cart: function() {
            return _t.$store.getters.cart;
          }
        },
        methods: {
          updateQty: function(t, e) {},
          removeFromCart: function() {
            console.log("Jimmy Olsen");
          }
        }
      },
      Ct = yt,
      wt = (a("a01b"), Object(v["a"])(Ct, ft, bt, !1, null, "0e1a4521", null)),
      xt = wt.exports,
      Pt = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "checkout-page", attrs: { id: "checkout" } },
          [
            this.$store.state.showLoader
              ? t._e()
              : [a("main", { staticClass: "checkout-page-body" })],
            [a("Loader")]
          ],
          2
        );
      },
      kt = [],
      Nt = {
        name: "checkout",
        title: "DragonVert - Cart | Checkout",
        components: { Loader: N },
        data: function() {
          return {};
        },
        methods: {},
        mounted: function() {},
        created: function() {
          window.scrollTo(0, 0);
        }
      },
      Ot = Nt,
      $t = Object(v["a"])(Ot, Pt, kt, !1, null, null, null),
      St = $t.exports,
      Et = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", [
          a("main", { attrs: { id: "category" } }, [
            a("div", {}, [
              a(
                "main",
                { staticClass: "category-page-body" },
                [
                  a(
                    "h2",
                    {
                      staticClass: "category-header",
                      staticStyle: { "text-transform": "capitalize" }
                    },
                    [t._v(t._s(t.category.split("-").join(" ")))]
                  ),
                  0 === this.$store.state.category.length
                    ? [a("Loader")]
                    : [
                        Array.isArray(t.products)
                          ? [
                              a(
                                "div",
                                { staticClass: "category-products" },
                                [
                                  a("CategoryProducts", {
                                    attrs: { products: t.products }
                                  })
                                ],
                                1
                              )
                            ]
                          : [
                              a(
                                "div",
                                { staticClass: "no-product" },
                                [
                                  a("icon-living", {
                                    attrs: { icon: "frown-open" }
                                  }),
                                  t._v(
                                    "\n\t\t\t\t\t\t\t" +
                                      t._s(t.products) +
                                      "\n\t\t\t\t\t\t"
                                  )
                                ],
                                1
                              )
                            ]
                      ]
                ],
                2
              )
            ])
          ])
        ]);
      },
      qt = [],
      Dt = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", [
          a("div", { staticClass: "product-listing" }, [
            a(
              "div",
              { staticClass: "grid-wrapper", attrs: { id: "products" } },
              [
                a(
                  "div",
                  { staticClass: "products-main-card grid-row" },
                  t._l(t.products, function(t) {
                    return a(
                      "div",
                      {
                        key: t.id * Math.random(1),
                        staticClass:
                          "col-xsmall-6 col-small-4 col-medium-3 product-card"
                      },
                      [a("Product", { attrs: { product: t } })],
                      1
                    );
                  }),
                  0
                ),
                a("div", { staticClass: "clearfix" })
              ]
            )
          ])
        ]);
      },
      At = [],
      Tt = {
        name: "CategoryProducts",
        data: function() {
          return { showLoader: !0 };
        },
        props: ["products"],
        components: { Product: W }
      },
      Lt = Tt,
      jt = Object(v["a"])(Lt, Dt, At, !1, null, null, null),
      It = jt.exports,
      Mt = {
        name: "category",
        data: function() {
          return { category: this.$route.params.category };
        },
        components: { CategoryProducts: It, Footer: it, Loader: N },
        title: function() {
          return "DragonVert - ".concat(this.$route.params.category);
        },
        created: function() {
          this.$store.dispatch("category", this.$route.params.category),
            window.scrollTo(0, 0);
        },
        computed: {
          products: function() {
            return this.$store.getters.getCategory;
          }
        },
        watch: {
          $route: function(t, e) {
            (this.category = this.$route.params.category),
              this.$store.dispatch("category", this.$route.params.category);
          }
        }
      },
      Ut = Mt,
      Ft = (a("5d58"), Object(v["a"])(Ut, Et, qt, !1, null, "da5a7966", null)),
      Rt = Ft.exports,
      Vt = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { attrs: { id: "productDetail" } },
          [
            0 === Object.entries(t.product).length
              ? [a("Loader")]
              : [
                  a(
                    "div",
                    { key: t.product.id, staticClass: "product-detail-page" },
                    [
                      a("main", { staticClass: "product-detail-body" }, [
                        a("div", { staticClass: "grid-wrapper" }, [
                          a("div", { staticClass: "grid-row" }, [
                            a(
                              "div",
                              { staticClass: "col-xsmall-12 col-small-6" },
                              [
                                a(
                                  "div",
                                  {
                                    staticClass: "show-for-desktop",
                                    staticStyle: { width: "500px" }
                                  },
                                  [
                                    a("vue-h-zoom", {
                                      staticClass: "image-thumbnail",
                                      staticStyle: {
                                        "background-size": "cover"
                                      },
                                      attrs: {
                                        image:
                                          t.activeImageThumbnail ||
                                          t.product.attributes.image,
                                        "image-full":
                                          t.activeImageThumbnail ||
                                          t.product.attributes.image,
                                        "zoom-window-size": 1,
                                        "zoom-level": 1.8,
                                        "zoom-window-x": 620,
                                        "zoom-window-y": 70,
                                        width: 480,
                                        height: 330
                                      }
                                    }),
                                    a("div", [
                                      a("span", {
                                        class:
                                          "img-thumbnail " +
                                          (t.activeImageThumbnail ===
                                          t.product.attributes
                                            .equipment_images[0]
                                            ? "active"
                                            : ""),
                                        style: {
                                          backgroundImage:
                                            "url(" +
                                            t.product.attributes
                                              .equipment_images[0] +
                                            ")"
                                        },
                                        on: {
                                          click: function(e) {
                                            return t.changeActiveImageThumbnail(
                                              t.product.attributes
                                                .equipment_images[0]
                                            );
                                          }
                                        }
                                      }),
                                      a("span", {
                                        class:
                                          "img-thumbnail " +
                                          (t.activeImageThumbnail ===
                                          t.product.attributes
                                            .equipment_images[1]
                                            ? "active"
                                            : ""),
                                        style: {
                                          backgroundImage:
                                            "url(" +
                                            t.product.attributes
                                              .equipment_images[1] +
                                            ")"
                                        },
                                        on: {
                                          click: function(e) {
                                            return t.changeActiveImageThumbnail(
                                              t.product.attributes
                                                .equipment_images[1]
                                            );
                                          }
                                        }
                                      }),
                                      a("span", {
                                        class:
                                          "img-thumbnail " +
                                          (t.activeImageThumbnail ===
                                          t.product.attributes
                                            .equipment_images[2]
                                            ? "active"
                                            : "") +
                                          " last",
                                        style: {
                                          backgroundImage:
                                            "url(" +
                                            t.product.attributes
                                              .equipment_images[2] +
                                            ")"
                                        },
                                        on: {
                                          click: function(e) {
                                            return t.changeActiveImageThumbnail(
                                              t.product.attributes
                                                .equipment_images[2]
                                            );
                                          }
                                        }
                                      })
                                    ])
                                  ],
                                  1
                                ),
                                a(
                                  "div",
                                  { staticClass: "show-for-mobile" },
                                  [
                                    a("vue-h-zoom", {
                                      staticClass: "image-thumbnail",
                                      staticStyle: {
                                        "background-size": "cover"
                                      },
                                      attrs: {
                                        image:
                                          t.activeImageThumbnail ||
                                          t.product.attributes.image,
                                        "image-full":
                                          t.activeImageThumbnail ||
                                          t.product.attributes.image,
                                        "zoom-window-size": 1,
                                        "zoom-level": 1.8,
                                        "zoom-window-x": 620,
                                        "zoom-window-y": 70,
                                        width: 290,
                                        height: 330
                                      }
                                    }),
                                    a("div", [
                                      a("span", {
                                        class:
                                          "img-thumbnail-mobile " +
                                          (t.activeImageThumbnail ===
                                          t.product.attributes
                                            .equipment_images[0]
                                            ? "active"
                                            : ""),
                                        style: {
                                          backgroundImage:
                                            "url(" +
                                            t.product.attributes
                                              .equipment_images[0] +
                                            ")"
                                        },
                                        on: {
                                          click: function(e) {
                                            return t.changeActiveImageThumbnail(
                                              t.product.attributes
                                                .equipment_images[0]
                                            );
                                          }
                                        }
                                      }),
                                      a("span", {
                                        class:
                                          "img-thumbnail-mobile " +
                                          (t.activeImageThumbnail ===
                                          t.product.attributes
                                            .equipment_images[1]
                                            ? "active"
                                            : ""),
                                        style: {
                                          backgroundImage:
                                            "url(" +
                                            t.product.attributes
                                              .equipment_images[1] +
                                            ")"
                                        },
                                        on: {
                                          click: function(e) {
                                            return t.changeActiveImageThumbnail(
                                              t.product.attributes
                                                .equipment_images[1]
                                            );
                                          }
                                        }
                                      }),
                                      a("span", {
                                        class:
                                          "img-thumbnail-mobile " +
                                          (t.activeImageThumbnail ===
                                          t.product.attributes
                                            .equipment_images[2]
                                            ? "active"
                                            : "") +
                                          " last",
                                        style: {
                                          backgroundImage:
                                            "url(" +
                                            t.product.attributes
                                              .equipment_images[2] +
                                            ")"
                                        },
                                        on: {
                                          click: function(e) {
                                            return t.changeActiveImageThumbnail(
                                              t.product.attributes
                                                .equipment_images[2]
                                            );
                                          }
                                        }
                                      })
                                    ])
                                  ],
                                  1
                                )
                              ]
                            ),
                            a("div", { staticClass: "space-for-mobile" }),
                            a(
                              "div",
                              { staticClass: "col-xsmall-12 col-small-6" },
                              [
                                a("div", { staticClass: "jumbo" }, [
                                  a("div", { staticClass: "jumbo" }, [
                                    a("ul", { staticClass: "details-list" }, [
                                      a("li", [
                                        a("span", [t._v("Name")]),
                                        a("span", [
                                          t._v(t._s(t.product.attributes.name))
                                        ])
                                      ]),
                                      a("li", [
                                        a("span", [t._v("Model")]),
                                        a("span", [
                                          t._v(t._s(t.product.attributes.model))
                                        ])
                                      ]),
                                      a("li", [
                                        a("span", [t._v("Manufacturer")]),
                                        a("span", [
                                          t._v(
                                            t._s(
                                              t.product.attributes.manufacturer
                                            )
                                          )
                                        ])
                                      ]),
                                      a("li", [
                                        a("span", [t._v("Category")]),
                                        a("span", [
                                          t._v(
                                            t._s(
                                              t.product.attributes.main_category
                                                .split("-")
                                                .join(" ")
                                            )
                                          )
                                        ])
                                      ]),
                                      a("li", [
                                        a("span", [t._v("Year")]),
                                        a("span", [
                                          t._v(t._s(t.product.attributes.year))
                                        ])
                                      ]),
                                      a("li", [
                                        a("span", [t._v("Location")]),
                                        a("span", [
                                          t._v(
                                            t._s(t.product.attributes.country)
                                          )
                                        ])
                                      ]),
                                      a("li", [
                                        a("span", [t._v("Condition")]),
                                        a("span", [
                                          t._v(
                                            t._s(
                                              t.product.attributes.condition
                                                .split("_")
                                                .join(" ")
                                            )
                                          )
                                        ])
                                      ]),
                                      a("li", [
                                        a("span", [t._v("Quantity")]),
                                        a("span", [
                                          t._v(
                                            t._s(t.product.attributes.quantity)
                                          )
                                        ])
                                      ]),
                                      a("li", [
                                        a("span", [t._v("Used")]),
                                        a("span", [
                                          t._v(
                                            t._s(
                                              !0 === t.product.attributes.used
                                                ? "Yes"
                                                : "No"
                                            )
                                          )
                                        ])
                                      ])
                                    ])
                                  ]),
                                  a("div"),
                                  a("p", { staticClass: "product-price" }, [
                                    t._v(
                                      t._s(
                                        t.money(
                                          parseInt(
                                            Number(t.product.attributes.price)
                                          )
                                        )
                                      )
                                    )
                                  ]),
                                  a("div", { staticClass: "detail-buttons" }, [
                                    a(
                                      "button",
                                      {
                                        staticClass: "buy-now-button",
                                        attrs: { type: "submit" },
                                        on: { click: t.buyNow }
                                      },
                                      [t._v("Buy Now")]
                                    ),
                                    t.$store.state.cart.includes(t.product)
                                      ? a(
                                          "button",
                                          {
                                            staticClass:
                                              "remove-from-cart-button",
                                            attrs: { type: "submit" },
                                            on: {
                                              click: function(e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.removeFromCart(e)
                                                );
                                              }
                                            }
                                          },
                                          [t._v("Remove from cart")]
                                        )
                                      : a(
                                          "button",
                                          {
                                            staticClass: "add-to-cart-button",
                                            attrs: { type: "submit" },
                                            on: {
                                              click: function(e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.addToCart(e)
                                                );
                                              }
                                            }
                                          },
                                          [
                                            t._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\tAdd to cart\n\t\t\t\t\t\t\t\t\t\t\t"
                                            ),
                                            a("icon-living", {
                                              attrs: { icon: "plus" }
                                            })
                                          ],
                                          1
                                        )
                                  ])
                                ]),
                                a("div", { staticClass: "jumbo mt-20" }, [
                                  a(
                                    "h3",
                                    {
                                      staticClass: "sub-t",
                                      staticStyle: { "font-size": "1.2em" }
                                    },
                                    [t._v("Delivery Information")]
                                  ),
                                  a("br"),
                                  a("ul", { staticClass: "details-list" }, [
                                    a("li", [
                                      a("span", [t._v("Local Delivery")]),
                                      a("span", [
                                        t._v(
                                          t._s(
                                            0 ===
                                              t.product.attributes
                                                .region_delivery_price
                                              ? "Not Available"
                                              : t.product.attributes
                                                  .region_delivery_price
                                          )
                                        )
                                      ])
                                    ]),
                                    a("li", [
                                      a("span", [
                                        t._v("International Delivery")
                                      ]),
                                      a("span", [
                                        t._v(
                                          t._s(
                                            0 ===
                                              t.product.attributes
                                                .outside_region_delivery_price
                                              ? "Not Available"
                                              : t.product.attributes
                                                  .outside_region_delivery_price
                                          )
                                        )
                                      ])
                                    ])
                                  ]),
                                  a("br"),
                                  a("p")
                                ]),
                                a("br"),
                                a("h3", { staticClass: "sub-t" }, [
                                  t._v("Description")
                                ]),
                                a("p", {
                                  staticClass: "description",
                                  domProps: {
                                    innerHTML: t._s(
                                      t.product.attributes.description
                                    )
                                  }
                                })
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ],
            a("Footer")
          ],
          2
        );
      },
      zt = [],
      Bt = (a("7f7f"), "ALL_PRODUCTS"),
      Yt = "ALL_PRODUCTS_SUCCESS",
      Ht = "PRODUCT_BY_ID",
      Gt = "PRODUCT_BY_ID_SUCCESS",
      Jt = "ADD_PRODUCT",
      Qt = "ADD_PRODUCT_SUCCESS",
      Wt = "UPDATE_PRODUCT",
      Zt = "UPDATE_PRODUCT_SUCCESS",
      Kt = "REMOVE_PRODUCT",
      Xt = "REMOVE_PRODUCT_SUCCESS",
      te = "ADD_TO_CART",
      ee = "REMOVE_FROM_CART",
      ae = "UPDATE_CART",
      re = "ALL_PHARMACIES",
      oe = "ALL_PHARMACIES_SUCCESS",
      se = "ALL_CATEGORIES",
      ie = "ALL_CATEGORIES_SUCCESS",
      ne = "CATEGORY",
      ce = "CATEGORY_SUCCESS",
      le = "USER_LOGIN",
      ue = "USER_LOGIN_SUCCESS",
      de = "USER_LOGOUT",
      me = "LOAD_DASH_COMPONENT",
      pe = "LOADED_DASH_COMPONENT",
      ve = "UPDATE_URL",
      he = "UPDATE_USER",
      ge = "UPDATE_MERCHANT",
      fe = "UPDATE_MERCHANT_PRODUCTS",
      be = a("e173"),
      _e = a.n(be);
    n["a"].use(_e.a);
    var ye,
      Ce,
      we,
      xe,
      Pe,
      ke,
      Ne = {
        name: "productDetail",
        title: function() {
          return this.title;
        },
        components: { Loader: N, Footer: it, VueHZoom: _e.a },
        data: function() {
          return {
            detailsLoaded: !1,
            pricePerUnit: 0,
            productQuantity: 1,
            cart: this.$store.state.cart,
            product: {},
            title: "DragonVert - ".concat(this.product),
            activeImageThumbnail: ""
          };
        },
        created: function() {
          var t = this;
          window.scrollTo(0, 0),
            y.a
              .get(
                "https://dragonvert.joppa.ng/equipments/".concat(
                  this.$route.params.id
                )
              )
              .then(function(e) {
                (t.product = e.data.data),
                  (t.activeImageThumbnail =
                    e.data.data.attributes.equipment_images[0]),
                  (t.title = "DragonVert - ".concat(t.attributes.name));
              })
              .catch(function(t) {
                console.log(t);
              });
        },
        mounted: function() {},
        computed: {
          money: function() {
            return a("b132").money;
          }
        },
        methods: {
          changeActiveImageThumbnail: function(t) {
            this.activeImageThumbnail = t;
          },
          addToCart: function() {
            this.$store.commit(te, this.product);
          },
          removeFromCart: function() {
            this.$store.commit(ee, this.product.id);
          },
          buyNow: function() {
            this.$store.commit(te, this.product), this.$router.push("/cart");
          }
        },
        watch: {
          $route: function() {
            var t = this;
            (this.product = {}),
              y.a
                .get(
                  "https://api.drugstore.ng/get/drug/info/".concat(
                    this.$route.params.id
                  )
                )
                .then(function(e) {
                  (t.product = e.data.data.stock),
                    (t.title = "DragonVert - ".concat(t.product.name));
                })
                .catch(function(t) {
                  console.log(t);
                });
          }
        }
      },
      Oe = Ne,
      $e = (a("b80f"), Object(v["a"])(Oe, Vt, zt, !1, null, "65a0eac0", null)),
      Se = $e.exports,
      Ee = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { attrs: { id: "categoriesPage" } },
          [
            a("Categories", { attrs: { title: "All Categories" } }),
            a("Footer")
          ],
          1
        );
      },
      qe = [],
      De = {
        name: "categoriesPage",
        components: { Categories: F, Footer: it }
      },
      Ae = De,
      Te = Object(v["a"])(Ae, Ee, qe, !1, null, null, null),
      Le = Te.exports,
      je = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Ie = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { attrs: { id: "404error" } }, [
            a("main", { staticClass: "404error" }, [
              a("br"),
              a("br"),
              a("br"),
              t._v("\n        404 page not found\n    ")
            ])
          ]);
        }
      ],
      Me = { name: "404error" },
      Ue = Me,
      Fe = Object(v["a"])(Ue, je, Ie, !1, null, null, null),
      Re = Fe.exports,
      Ve = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "swiper",
          { attrs: { options: t.swiperOptions } },
          [
            a(
              "swiper-slide",
              [
                a("SliderProduct", {
                  attrs: {
                    price: "21",
                    image:
                      "http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg"
                  }
                })
              ],
              1
            ),
            a(
              "swiper-slide",
              [
                a("SliderProduct", {
                  attrs: {
                    price: "121",
                    image:
                      "http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg"
                  }
                })
              ],
              1
            ),
            a(
              "swiper-slide",
              [
                a("SliderProduct", {
                  attrs: {
                    price: "21",
                    image:
                      "http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg"
                  }
                })
              ],
              1
            ),
            a("div", {
              staticClass: "swiper-button-prev",
              attrs: { slot: "button-prev" },
              slot: "button-prev"
            }),
            a("div", {
              staticClass: "swiper-button-next",
              attrs: { slot: "button-next" },
              slot: "button-next"
            })
          ],
          1
        );
      },
      ze = [],
      Be = (a("dfa4"), a("7212")),
      Ye = {
        name: "productSlider",
        components: { swiper: Be["swiper"], swiperSlide: Be["swiperSlide"] },
        props: ["category"],
        data: function() {
          return {
            swiperOptions: {
              slidesPerView: 5,
              spaceBetween: 0,
              freeMode: !0,
              loop: !0,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }
            }
          };
        }
      },
      He = Ye,
      Ge = (a("afca"), Object(v["a"])(He, Ve, ze, !1, null, "6c5b743c", null)),
      Je = Ge.exports,
      Qe = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "search-page" },
          [
            a("div", { staticClass: "search-page-body" }, [
              a("div", { staticClass: "search-section" }),
              a("h2", { staticClass: "search-result-header" }, [
                t._v("Search results for '" + t._s(t.$route.params.query) + "'")
              ]),
              a("div", { staticClass: "grid-wrapper" }, [
                a("div", { staticClass: "grid-row" }, [
                  a(
                    "div",
                    { staticClass: "col-xsmall-12 col-small-3 col-medium-2" },
                    [
                      a("div", { staticClass: "search-filter" }, [
                        a(
                          "h2",
                          {
                            staticClass: "filter-header",
                            on: {
                              click: function(e) {
                                t.catFilter = !t.catFilter;
                              }
                            }
                          },
                          [
                            t._v("\n\t\t\t\t\t\t\tCategory\n\t\t\t\t\t\t\t"),
                            a(
                              "span",
                              { staticStyle: { float: "right" } },
                              [
                                a("icon-living", {
                                  attrs: {
                                    icon: t.catFilter ? "minus" : "plus"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.catFilter,
                                expression: "catFilter"
                              }
                            ]
                          },
                          [
                            a(
                              "ul",
                              { staticClass: "categories" },
                              [
                                a("li", { staticClass: "active first" }, [
                                  t._v(t._s(t.category))
                                ]),
                                t._l(t.categories, function(e) {
                                  return a(
                                    "li",
                                    {
                                      key: e.name,
                                      class: { active: t.category === e.name },
                                      on: {
                                        click: function(a) {
                                          t.category = e.name;
                                        }
                                      }
                                    },
                                    [t._v(t._s(e.name))]
                                  );
                                })
                              ],
                              2
                            )
                          ]
                        ),
                        a(
                          "h2",
                          {
                            staticClass: "filter-header",
                            on: {
                              click: function(e) {
                                t.priceFilter = !t.priceFilter;
                              }
                            }
                          },
                          [
                            t._v("\n\t\t\t\t\t\t\tPrice\n\t\t\t\t\t\t\t"),
                            a(
                              "span",
                              { staticStyle: { float: "right" } },
                              [
                                a("icon-living", {
                                  attrs: {
                                    icon: t.priceFilter ? "minus" : "plus"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.priceFilter,
                                expression: "priceFilter"
                              }
                            ],
                            staticClass: "filter"
                          },
                          [
                            a("ul", [
                              a("li", { staticClass: "range" }, [
                                a(
                                  "label",
                                  { attrs: { for: "minPriceValue" } },
                                  [t._v(t._s(t.minPriceValue))]
                                ),
                                a("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.minPriceValue,
                                      expression: "minPriceValue"
                                    }
                                  ],
                                  ref: "range",
                                  attrs: {
                                    type: "range",
                                    name: "",
                                    min: "12",
                                    max: "10000",
                                    step: "5",
                                    id: ""
                                  },
                                  domProps: { value: t.minPriceValue },
                                  on: {
                                    __r: function(e) {
                                      t.minPriceValue = e.target.value;
                                    }
                                  }
                                }),
                                a(
                                  "label",
                                  { attrs: { for: "maxPriceValue" } },
                                  [t._v(t._s(t.maxPriceValue))]
                                ),
                                a("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.maxPriceValue,
                                      expression: "maxPriceValue"
                                    }
                                  ],
                                  ref: "range",
                                  attrs: {
                                    type: "range",
                                    name: "",
                                    min: "12",
                                    max: "10000",
                                    step: "5",
                                    id: ""
                                  },
                                  domProps: { value: t.maxPriceValue },
                                  on: {
                                    __r: function(e) {
                                      t.maxPriceValue = e.target.value;
                                    }
                                  }
                                })
                              ])
                            ])
                          ]
                        )
                      ])
                    ]
                  ),
                  a(
                    "div",
                    { staticClass: "col-xsmall-12 col-small-9 col-medium-10" },
                    [
                      a("div", { staticClass: "search-result" }, [
                        a("h3", { staticClass: "found" }, [
                          t._v(
                            t._s(t.resultLength) +
                              " product" +
                              t._s(t.resultLength > 1 ? "s" : "") +
                              " found"
                          )
                        ]),
                        a(
                          "div",
                          { staticClass: "products-section" },
                          [
                            a("ProductListing", {
                              attrs: { number: t.resultLength, all: "true" }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ])
              ])
            ]),
            a("br"),
            a("br"),
            a("br"),
            a("br"),
            a("Footer")
          ],
          1
        );
      },
      We = [],
      Ze = {
        name: "searchPage",
        title: function() {
          return "DragonVert - Search Result for ".concat(
            this.$route.params.query
          );
        },
        data: function() {
          return {
            category: "General",
            catFilter: !1,
            priceFilter: !1,
            minPriceValue: 0,
            maxPriceValue: 0,
            resultLength: 24,
            searchQuery: this.$route.params.query
          };
        },
        components: { Footer: it, ProductListing: tt },
        computed: {
          categories: function() {
            var t = this;
            return this.$store.getters.allCategories.filter(function(e) {
              return e !== t.category;
            });
          },
          filterAnswer: function() {
            var t = this;
            this.$store.dispatch("allProducts").then(function() {
              console.log(
                t.$store.getters.allProducts.filter(function(t) {
                  return t.name.toLowerCase().indexOf("omron") > 0;
                })
              );
            }),
              console.log(
                this.$store.getters.allProducts
                  .filter(function(t) {
                    return t.name.toLowerCase().indexOf("omron") > 0;
                  })
                  .map(function(t) {
                    return "<li> ".concat(t, " </li>");
                  })
              );
          }
        },
        watch: {
          $route: function(t, e) {
            this.searchQuery = e.params.query;
          }
        }
      },
      Ke = Ze,
      Xe = Object(v["a"])(Ke, Qe, We, !1, null, null, null),
      ta = Xe.exports,
      ea = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "unauthorized" } }, [
          a("main", { staticClass: "unauthorized" }, [
            a("div", { staticClass: "unauthBox" }, [
              a(
                "h2",
                [
                  t._v(
                    "\n\t\t\t\tYou are not authorized to be here. If this message persists,\n\t\t\t\t"
                  ),
                  a("router-link", { attrs: { to: "/contact" } }, [
                    t._v("contact")
                  ]),
                  a("b"),
                  t._v(
                    "\n\t\t\t\tour support center, you will being redirected to the home page in " +
                      t._s(t.countDown) +
                      "s\n\t\t\t"
                  )
                ],
                1
              )
            ])
          ])
        ]);
      },
      aa = [],
      ra = {
        name: "unauthorized",
        data: function() {
          return { countDown: 5 };
        },
        created: function() {
          console.log(this.$router);
        },
        destroyed: function() {
          window.clearInterval(this.interval);
        },
        mounted: function() {
          var t = this;
          this.interval = setInterval(function() {
            t.countDown > 0 ? t.countDown-- : t.$router.push("/");
          }, 1e3);
        }
      },
      oa = ra,
      sa = Object(v["a"])(oa, ea, aa, !1, null, null, null),
      ia = sa.exports,
      na = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", [
          a("main", { attrs: { id: "allProducts" } }, [
            a("div", {}, [
              a(
                "main",
                { staticClass: "category-page-body" },
                [
                  a("h2", { staticClass: "category-header" }, [
                    t._v("Recently Added")
                  ]),
                  0 === t.products.length
                    ? [a("Loader")]
                    : [
                        a(
                          "div",
                          { staticClass: "category-products" },
                          [
                            a("CategoryProducts", {
                              attrs: { products: t.products }
                            })
                          ],
                          1
                        ),
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.loadingMore,
                                expression: "loadingMore"
                              }
                            ]
                          },
                          [a("Loader")],
                          1
                        )
                      ]
                ],
                2
              )
            ])
          ])
        ]);
      },
      ca = [],
      la = a("5d73"),
      ua = a.n(la),
      da = {
        name: "allProducts",
        data: function() {
          return {
            bottom: !1,
            products: [],
            currentPage: 1,
            loadingMore: !0,
            totalNumberOfPages: 0
          };
        },
        components: { CategoryProducts: It, Footer: it, Loader: N },
        title: function() {
          return "DragonVert - Recently Added";
        },
        created: function() {
          var t = this;
          window.scrollTo(0, 0),
            window.addEventListener("scroll", function() {
              return (t.bottom = t.bottomVisible());
            }),
            this.loadMoreProducts();
        },
        methods: {
          bottomVisible: function() {
            var t = window.scrollY,
              e = document.documentElement.clientHeight,
              a = document.documentElement.scrollHeight,
              r = e + t >= a;
            return r || a < e;
          },
          loadMoreProducts: function() {
            var t = this;
            y.a
              .get(
                "https://dragonvert.joppa.ng/equipments/?pagenumber=".concat(
                  this.currentPage
                )
              )
              .then(function(e) {
                var a = e.data,
                  r = a.meta,
                  o = a.data,
                  s = r.pagination.count;
                (t.totalNumberOfPages = r.pagination.pages),
                  t.currentPage < s &&
                    ((t.currentPage += 1), (t.loadingMore = !0)),
                  t.bottomVisible() &&
                    (t.currentPage < s - 1
                      ? t.loadMoreProducts()
                      : (t.loadingMore = !1));
                var i = !0,
                  n = !1,
                  c = void 0;
                try {
                  for (var l, u = ua()(o); !(i = (l = u.next()).done); i = !0) {
                    var d = l.value;
                    t.products.push(d);
                  }
                } catch (m) {
                  (n = !0), (c = m);
                } finally {
                  try {
                    i || null == u.return || u.return();
                  } finally {
                    if (n) throw c;
                  }
                }
              })
              .catch(function(t) {
                return console.log(t);
              });
          }
        },
        watch: {
          bottom: function(t) {
            t && this.currentPage <= this.totalNumberOfPages
              ? this.loadMoreProducts()
              : (this.loadingMore = !1);
          }
        }
      },
      ma = da,
      pa = (a("22df"), Object(v["a"])(ma, na, ca, !1, null, "3cf9398c", null)),
      va = pa.exports,
      ha = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "f-e" },
          [
            r("div", { staticClass: "login", attrs: { id: "login" } }, [
              r("main", { staticClass: "login" }, [
                r("h2", [t._v("login")]),
                r("div", { staticClass: "f-p" }, [
                  r(
                    "span",
                    [
                      t._v("\n\t\t\t\t\tForgot password? Click\n\t\t\t\t\t"),
                      r("router-link", { attrs: { to: "/forgot-password" } }, [
                        t._v("here")
                      ])
                    ],
                    1
                  )
                ]),
                r(
                  "form",
                  {
                    staticClass: "login-form",
                    attrs: { action: "" },
                    on: {
                      submit: function(e) {
                        return e.preventDefault(), t.handleLoginSubmit(e);
                      }
                    }
                  },
                  [
                    r("div", [
                      r("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: t.email,
                            expression: "email",
                            modifiers: { trim: !0 }
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email",
                            expression: "'required|email'"
                          }
                        ],
                        class: { error: t.errors.has("email") },
                        attrs: {
                          type: "email",
                          placeholder: "Enter your email here",
                          name: "email",
                          required: "",
                          autofocus: "",
                          autocomplete: "email"
                        },
                        domProps: { value: t.email },
                        on: {
                          input: function(e) {
                            e.target.composing ||
                              (t.email = e.target.value.trim());
                          },
                          blur: function(e) {
                            return t.$forceUpdate();
                          }
                        }
                      }),
                      r(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.errors.has("email"),
                              expression: "errors.has('email')"
                            }
                          ],
                          staticClass: "help-block exception"
                        },
                        [
                          r("icon-living", {
                            staticClass: "exception",
                            attrs: { icon: "exclamation-triangle" }
                          }),
                          t._v("Invalid email format\n\t\t\t\t\t")
                        ],
                        1
                      )
                    ]),
                    r("div", [
                      r("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: t.password,
                            expression: "password",
                            modifiers: { trim: !0 }
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:6",
                            expression: "'required|min:6'"
                          }
                        ],
                        class: { error: t.errors.has("password") },
                        attrs: {
                          type: "password",
                          placeholder: "Enter your password here",
                          name: "password",
                          required: "",
                          autocomplete: "current-password"
                        },
                        domProps: { value: t.password },
                        on: {
                          input: function(e) {
                            e.target.composing ||
                              (t.password = e.target.value.trim());
                          },
                          blur: function(e) {
                            return t.$forceUpdate();
                          }
                        }
                      }),
                      r(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.errors.has("password"),
                              expression: "errors.has('password')"
                            }
                          ],
                          staticClass: "help-block exception"
                        },
                        [
                          r("icon-living", {
                            attrs: { icon: "exclamation-triangle" }
                          }),
                          t._v(
                            "Your password should not be lesser than 6 characters\n\t\t\t\t\t"
                          )
                        ],
                        1
                      )
                    ]),
                    r(
                      "ul",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.authenticationErrors.length > 0,
                            expression: "authenticationErrors.length > 0"
                          }
                        ],
                        staticClass: "error-list"
                      },
                      t._l(t.authenticationErrors, function(e) {
                        return r(
                          "li",
                          { key: e },
                          [
                            r("icon-living", {
                              attrs: { icon: "exclamation-triangle" }
                            }),
                            t._v("\n\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t")
                          ],
                          1
                        );
                      }),
                      0
                    ),
                    t.submitting
                      ? r("div", { staticClass: "button-submit" }, [
                          r(
                            "button",
                            { attrs: { type: "submit", disabled: "true" } },
                            [
                              r("img", {
                                style: { position: "relative", top: "-6px" },
                                attrs: { src: a("4637"), alt: "" }
                              })
                            ]
                          )
                        ])
                      : r("div", { staticClass: "button-submit" }, [
                          r("button", { attrs: { type: "submit" } }, [
                            t._v("Login")
                          ])
                        ]),
                    r("div", { staticClass: "no-acc" }, [
                      r(
                        "span",
                        [
                          t._v(
                            "\n\t\t\t\t\t\tDon't have account yet? Click\n\t\t\t\t\t\t"
                          ),
                          r("router-link", { attrs: { to: "/register" } }, [
                            t._v("here")
                          ]),
                          r("span"),
                          t._v(" to register\n\t\t\t\t\t")
                        ],
                        1
                      )
                    ])
                  ]
                )
              ])
            ]),
            r("Footer")
          ],
          1
        );
      },
      ga = [],
      fa = a("a4bb"),
      ba = a.n(fa),
      _a = {
        name: "login",
        title: "DragonVert - Login",
        components: { Footer: it },
        props: ["isEditing"],
        data: function() {
          return {
            email: this.$store.state.user.email || "",
            password: "",
            formPassed: !1,
            submitting: !1,
            authenticationErrors: []
          };
        },
        created: function() {
          "" !== this.$store.state.token &&
            ("merchant" === this.$store.state.user.account_type
              ? this.$router.push("/admin/merchant")
              : this.$router.push("/admin/user"));
        },
        methods: {
          handleLoginSubmit: function() {
            var t = this;
            this.submitting = !0;
            var e = {
              data: {
                type: "LoginView",
                attributes: { email: this.email, password: this.password }
              }
            };
            this.$store
              .dispatch("login", e)
              .then(function() {
                t.submitting = !1;
                try {
                  if (ba()(t.$route.query).length > 0)
                    t.$router.push(t.$route.query.redirectTo);
                  else {
                    var e = t.$store.getters.getUser.account_type;
                    "merchant" === e
                      ? t.$router.push("/admin/merchant")
                      : t.$router.push("/admin/user");
                  }
                } catch (a) {}
              })
              .catch(function(e) {
                t.submitting = !1;
              });
          }
        },
        mounted: function() {
          this.formPassed = !1;
        },
        updated: function() {
          this.authenticationErrors = this.$store.state.authErrors;
        },
        watch: { $route: function(t) {} }
      },
      ya = _a,
      Ca = (a("a64b"), Object(v["a"])(ya, ha, ga, !1, null, "4bcf7656", null)),
      wa = Ca.exports,
      xa = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "register" },
          [
            r("div", { staticClass: "register-page" }, [
              r("div", { staticClass: "register-form-body grid-wrapper" }, [
                r("div", { staticClass: "grid-row" }, [
                  r(
                    "div",
                    {
                      staticClass: "col-xsmall-12 col-medium-5",
                      staticStyle: { background: "#19253A" }
                    },
                    [
                      r(
                        "div",
                        { staticClass: "register-icon" },
                        [
                          r(
                            "router-link",
                            { attrs: { to: "/admin/edit/12" } },
                            [
                              r("icon-living", {
                                staticClass: "fa-4x",
                                attrs: { icon: "user" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  r("div", { staticClass: "col-xsmall-12 col-medium-7" }, [
                    r("main", { staticClass: "register" }, [
                      r("h2", [t._v("Register")]),
                      r(
                        "form",
                        {
                          staticClass: "register-form",
                          attrs: { method: "POST" },
                          on: {
                            submit: function(e) {
                              return (
                                e.preventDefault(), t.handleRegisterSubmit(e)
                              );
                            }
                          }
                        },
                        [
                          "" !== t.validationError.email
                            ? r(
                                "div",
                                { staticClass: "authentication-error" },
                                [t._v(t._s(t.validationError.email))]
                              )
                            : t._e(),
                          r("div", [
                            r("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: t.email,
                                  expression: "email",
                                  modifiers: { trim: !0 }
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|email",
                                  expression: "'required|email'"
                                }
                              ],
                              class: { error: t.errors.has("email") },
                              attrs: {
                                type: "email",
                                placeholder: "Enter your email here",
                                name: "email",
                                required: ""
                              },
                              domProps: { value: t.email },
                              on: {
                                input: function(e) {
                                  e.target.composing ||
                                    (t.email = e.target.value.trim());
                                },
                                blur: function(e) {
                                  return t.$forceUpdate();
                                }
                              }
                            }),
                            r(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.errors.has("email"),
                                    expression: "errors.has('email')"
                                  }
                                ],
                                staticClass: "help-block exception"
                              },
                              [
                                r("icon-living", {
                                  staticClass: "exception",
                                  attrs: { icon: "exclamation-triangle" }
                                }),
                                t._v("Invalid email format\n\t\t\t\t\t\t\t\t")
                              ],
                              1
                            )
                          ]),
                          r("div", [
                            r("label", { attrs: { for: "" } }),
                            r(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.account_type,
                                    expression: "account_type"
                                  }
                                ],
                                staticClass: "account-select",
                                attrs: { name: "" },
                                on: {
                                  change: function(e) {
                                    var a = Array.prototype.filter
                                      .call(e.target.options, function(t) {
                                        return t.selected;
                                      })
                                      .map(function(t) {
                                        var e =
                                          "_value" in t ? t._value : t.value;
                                        return e;
                                      });
                                    t.account_type = e.target.multiple
                                      ? a
                                      : a[0];
                                  }
                                }
                              },
                              [
                                r("option", { attrs: { value: "regular" } }, [
                                  t._v(
                                    "\n\t\t\t\t\t\t\t\t\t\tRegular\n\t\t\t\t\t\t\t\t\t"
                                  )
                                ]),
                                r("option", { attrs: { value: "merchant" } }, [
                                  t._v(
                                    "\n\t\t\t\t\t\t\t\t\t\tMerchant\n\t\t\t\t\t\t\t\t\t"
                                  )
                                ])
                              ]
                            ),
                            r("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.password1,
                                  expression: "password1"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|min:8",
                                  expression: "'required|min:8'"
                                }
                              ],
                              class: { error: t.errors.has("password") },
                              attrs: {
                                type: "password",
                                name: "password",
                                autocomplete: "password",
                                min: t.minPasswordLength,
                                placeholder: "Enter your password",
                                required: ""
                              },
                              domProps: { value: t.password1 },
                              on: {
                                input: function(e) {
                                  e.target.composing ||
                                    (t.password1 = e.target.value);
                                }
                              }
                            }),
                            r(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.errors.has("password"),
                                    expression: "errors.has('password')"
                                  }
                                ],
                                staticClass: "help-block exception"
                              },
                              [
                                r("icon-living", {
                                  attrs: { icon: "exclamation-triangle" }
                                }),
                                t._v(
                                  "Your password should be a minumum of " +
                                    t._s(t.minPasswordLength) +
                                    " characters\n\t\t\t\t\t\t\t\t"
                                )
                              ],
                              1
                            )
                          ]),
                          r("div", [
                            r("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.password2,
                                  expression: "password2"
                                }
                              ],
                              attrs: {
                                type: "password",
                                name: "",
                                autocomplete: "password",
                                min: t.minPasswordLength,
                                placeholder: "Confirm your password",
                                required: ""
                              },
                              domProps: { value: t.password2 },
                              on: {
                                input: function(e) {
                                  e.target.composing ||
                                    (t.password2 = e.target.value);
                                }
                              }
                            }),
                            r(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.passwordMismatch,
                                    expression: "passwordMismatch"
                                  }
                                ],
                                staticClass: "help-block exception"
                              },
                              [
                                r("icon-living", {
                                  attrs: { icon: "exclamation-triangle" }
                                }),
                                t._v("Passwords don't match\n\t\t\t\t\t\t\t\t")
                              ],
                              1
                            )
                          ]),
                          r("div", { staticClass: "button-submit" }, [
                            t.submitting
                              ? r(
                                  "button",
                                  { attrs: { type: "submit", disabled: "" } },
                                  [
                                    r("img", {
                                      style: {
                                        position: "relative",
                                        top: "-6.5px"
                                      },
                                      attrs: {
                                        src: a("4637"),
                                        alt: "",
                                        id: "buttonLoader"
                                      }
                                    })
                                  ]
                                )
                              : r("button", { attrs: { type: "submit" } }, [
                                  t._v("Register")
                                ])
                          ]),
                          r("div", { staticClass: "no-acc" }, [
                            r(
                              "span",
                              [
                                t._v(
                                  "\n\t\t\t\t\t\t\t\t\tAlready have an account? Click\n\t\t\t\t\t\t\t\t\t"
                                ),
                                r("router-link", { attrs: { to: "/login" } }, [
                                  t._v("here")
                                ]),
                                t._v(" to login\n\t\t\t\t\t\t\t\t")
                              ],
                              1
                            ),
                            r(
                              "span",
                              [
                                t._v(
                                  "\n\t\t\t\t\t\t\t\t\tWant to register as a pharmacy? Click\n\t\t\t\t\t\t\t\t\t"
                                ),
                                r(
                                  "router-link",
                                  { attrs: { to: "/pharmacy-register" } },
                                  [t._v("here")]
                                )
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ]),
            r("Footer")
          ],
          1
        );
      },
      Pa = [],
      ka = {
        name: "register",
        title: "DragonVert\t - Register",
        components: { Footer: it },
        data: function() {
          return {
            email: "",
            account_type: "regular",
            password1: "",
            password2: "",
            formPassed: !1,
            isAdmin: null,
            passwordMismatch: !1,
            minPasswordLength: 8,
            submitting: !1,
            validationError: { email: "" }
          };
        },
        updated: function() {
          this.password1 !== this.password2
            ? (this.passwordMismatch = !0)
            : (this.passwordMismatch = !1);
        },
        methods: {
          handleRegisterSubmit: function() {
            var t = this;
            if (!this.passwordMatch && 0 === this.errors.items.length) {
              this.submitting = !0;
              var e = {
                data: {
                  type: "RegisterView",
                  attributes: {
                    email: this.email,
                    account_type: this.account_type.toLowerCase(),
                    password1: this.password1,
                    password2: this.password2
                  }
                }
              };
              this.$store
                .dispatch("register", e)
                .then(function() {
                  t.submitting = !1;
                  var e = JSON.parse(localStorage.getItem("user"));
                  t.$store
                    .dispatch("updateUser", e)
                    .then(function(a) {
                      try {
                        "merchant" === e.account_type
                          ? "" === e.first_name
                            ? t.$router.push("/admin/complete-details")
                            : t.$router.push("/admin/super")
                          : t.$router.push("/admin/user");
                      } catch (r) {
                        console.log(r);
                      }
                    })
                    .catch(function(t) {
                      return console.log(t);
                    });
                })
                .catch(function(e) {
                  (t.submitting = !1),
                    400 === e.response.status
                      ? ((t.validationError.email = e.response.data.email[0]),
                        console.log(e))
                      : ((t.validationError.email = ""), console.table(e));
                });
            }
          }
        }
      },
      Na = ka,
      Oa = (a("dcc3"),
      a("6f2d"),
      Object(v["a"])(Na, xa, Pa, !1, null, "335ae6c4", null)),
      $a = Oa.exports,
      Sa = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "f-e" },
          [
            a("div", { staticClass: "login", attrs: { id: "login" } }, [
              a("main", { staticClass: "login" }, [
                a("h2", [t._v("reset password")]),
                a("div", { staticClass: "f-p" }, [
                  a(
                    "span",
                    [
                      t._v(
                        "\n\t\t\t\t\t\tAlready have an account? Click\n\t\t\t\t\t\t"
                      ),
                      a("router-link", { attrs: { to: "/login" } }, [
                        t._v("here")
                      ])
                    ],
                    1
                  )
                ]),
                a(
                  "form",
                  {
                    staticClass: "login-form",
                    attrs: { action: "" },
                    on: {
                      submit: function(e) {
                        return e.preventDefault(), t.handleLoginSubmit(e);
                      }
                    }
                  },
                  [
                    a("div", [
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.email,
                            expression: "email"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email",
                            expression: "'required|email'"
                          }
                        ],
                        class: { error: t.errors.has("email") },
                        attrs: {
                          type: "email",
                          placeholder:
                            "Enter your email here (Be sure to double check for correctness)",
                          name: "email",
                          autofocus: ""
                        },
                        domProps: { value: t.email },
                        on: {
                          input: function(e) {
                            e.target.composing || (t.email = e.target.value);
                          }
                        }
                      }),
                      a(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.errors.has("email"),
                              expression: "errors.has('email')"
                            }
                          ],
                          staticClass: "help-block exception"
                        },
                        [
                          a("icon-living", {
                            staticClass: "exception",
                            attrs: { icon: "exclamation-triangle" }
                          }),
                          t._v("Invalid email format\n\t\t\t\t\t\t")
                        ],
                        1
                      )
                    ]),
                    a("div", { staticClass: "button-submit" }, [
                      a(
                        "button",
                        { attrs: { type: "submit", disabled: !t.formPassed } },
                        [
                          t._v(
                            "\n                            Reset Password\n                        "
                          )
                        ]
                      )
                    ]),
                    a("div", { staticClass: "no-acc" }, [
                      a(
                        "span",
                        [
                          t._v("\n\t\t\t\t\t\t\tOr click\n\t\t\t\t\t\t\t"),
                          a("router-link", { attrs: { to: "/register" } }, [
                            t._v("here")
                          ]),
                          t._v(" to register\n\t\t\t\t\t\t")
                        ],
                        1
                      )
                    ])
                  ]
                )
              ])
            ]),
            a("Footer")
          ],
          1
        );
      },
      Ea = [],
      qa = {
        name: "login",
        title: "DrugStore - Forgot Password",
        components: { Footer: it },
        props: ["isEditing"],
        data: function() {
          return { email: "", formPassed: !1 };
        },
        methods: { handleLoginSubmit: function() {} },
        mounted: function() {
          this.formPassed = !1;
        },
        updated: function() {
          (this.formPassed = !(this.errors.items.length > 0)),
            console.log(this.errors);
        }
      },
      Da = qa,
      Aa = Object(v["a"])(Da, Sa, Ea, !1, null, null, null),
      Ta = Aa.exports,
      La = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "profile" } }, [a("router-view")], 1);
      },
      ja = [],
      Ia = { name: "profile" },
      Ma = Ia,
      Ua = Object(v["a"])(Ma, La, ja, !1, null, null, null),
      Fa = Ua.exports,
      Ra = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "grid-wrapper" },
          [
            r("DashNav", { attrs: { navClosed: !t.sideNavOpened } }),
            r("div", { staticClass: "grid-wrapper" }, [
              r("div", { staticClass: "grid-row" }, [
                r(
                  "div",
                  {
                    class:
                      "col-xsmall-0 col-large-" +
                      (t.sideNavOpened ? "2" : "0") +
                      " desktop-side-nav"
                  },
                  [
                    r("ul", [
                      r(
                        "li",
                        [
                          r(
                            "router-link",
                            { attrs: { to: "/" } },
                            [
                              r("icon-living", { attrs: { icon: "home" } }),
                              t._v("Go Home\n\t\t\t\t\t\t")
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      r(
                        "li",
                        {
                          class: "Dashboard" === t.activeTab ? "active" : "",
                          on: {
                            click: function(e) {
                              return t.switchTab("Dashboard");
                            }
                          }
                        },
                        [
                          r("icon-living", {
                            attrs: { icon: "tachometer-alt" }
                          }),
                          t._v("Dashboard\n\t\t\t\t\t")
                        ],
                        1
                      ),
                      r(
                        "li",
                        {
                          class: "Order" === t.activeTab ? "active" : "",
                          on: {
                            click: function(e) {
                              return t.switchTab("Order");
                            }
                          }
                        },
                        [
                          r("icon-living", { attrs: { icon: "cart-plus" } }),
                          t._v("Order History\n\t\t\t\t\t")
                        ],
                        1
                      ),
                      r(
                        "li",
                        {
                          class: "Settings" === t.activeTab ? "active" : "",
                          on: {
                            click: function(e) {
                              return t.switchTab("Settings");
                            }
                          }
                        },
                        [
                          r("icon-living", { attrs: { icon: "users-cog" } }),
                          t._v("Settings\n\t\t\t\t\t")
                        ],
                        1
                      ),
                      r(
                        "li",
                        {
                          on: {
                            click: function(e) {
                              return e.preventDefault(), t.logout(e);
                            }
                          }
                        },
                        [
                          r("icon-living", { attrs: { icon: "sign-out-alt" } }),
                          t._v("Logout\n\t\t\t\t\t")
                        ],
                        1
                      )
                    ])
                  ]
                ),
                r(
                  "div",
                  {
                    class:
                      "col-xsmall-12 col-large-" +
                      (t.sideNavOpened ? "10" : "12")
                  },
                  [
                    r("div", { attrs: { id: "dashboard" } }, [
                      r("main", { staticClass: "dashboard" }, [
                        r("h2", [t._v("Patient dashboard")]),
                        r("div", { staticClass: "grid-wrapper" }, [
                          r("div", { staticClass: "grid-row" }, [
                            r(
                              "div",
                              {
                                staticClass:
                                  "col-xsmall-12 col-small-6 col-medium-4"
                              },
                              [
                                r("div", { staticClass: "details-card b1" }, [
                                  r("div", { staticClass: "grid-wrapper" }, [
                                    r("div", { staticClass: "grid-row" }, [
                                      r(
                                        "div",
                                        {
                                          staticClass: "col-xsmall-9 card-name"
                                        },
                                        [
                                          r(
                                            "router-link",
                                            { attrs: { to: "/" } },
                                            [
                                              r("span", [
                                                t._v("Pending Orders")
                                              ]),
                                              r(
                                                "span",
                                                { staticClass: "card-number" },
                                                [t._v("23")]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      r(
                                        "div",
                                        {
                                          staticClass: "col-xsmall-3 card-icon"
                                        },
                                        [
                                          r("icon-living", {
                                            staticClass: "fa-3x",
                                            attrs: { icon: "clock" }
                                          })
                                        ],
                                        1
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            ),
                            r(
                              "div",
                              {
                                staticClass:
                                  "col-xsmall-12 col-small-6 col-medium-4"
                              },
                              [
                                r("div", { staticClass: "details-card b2" }, [
                                  r("div", { staticClass: "grid-wrapper" }, [
                                    r("div", { staticClass: "grid-row" }, [
                                      r(
                                        "div",
                                        {
                                          staticClass: "col-xsmall-9 card-name"
                                        },
                                        [
                                          r(
                                            "router-link",
                                            { attrs: { to: "/" } },
                                            [
                                              r("span", [
                                                t._v("Processed Orders")
                                              ]),
                                              r(
                                                "span",
                                                { staticClass: "card-number" },
                                                [t._v("12")]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      r(
                                        "div",
                                        {
                                          staticClass: "col-xsmall-3 card-icon"
                                        },
                                        [
                                          r("icon-living", {
                                            staticClass: "fa-3x",
                                            attrs: { icon: "tasks" }
                                          })
                                        ],
                                        1
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            ),
                            r(
                              "div",
                              {
                                staticClass:
                                  "col-xsmall-12 col-small-6 col-medium-4"
                              },
                              [
                                r("div", { staticClass: "details-card b3" }, [
                                  r("div", { staticClass: "grid-wrapper" }, [
                                    r("div", { staticClass: "grid-row" }, [
                                      r(
                                        "div",
                                        {
                                          staticClass: "col-xsmall-9 card-name"
                                        },
                                        [
                                          r(
                                            "router-link",
                                            { attrs: { to: "/" } },
                                            [
                                              r("span", [
                                                t._v("Delivered Orders")
                                              ]),
                                              r(
                                                "span",
                                                { staticClass: "card-number" },
                                                [t._v("2")]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      r(
                                        "div",
                                        {
                                          staticClass: "col-xsmall-3 card-icon"
                                        },
                                        [
                                          r("icon-living", {
                                            staticClass: "fa-2x",
                                            attrs: { icon: "check" }
                                          })
                                        ],
                                        1
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ]),
                          r("div", { staticClass: "grid-row other-body" }, [
                            r(
                              "div",
                              {
                                staticClass:
                                  "col-xsmall-12 col-medium-6 first-card"
                              },
                              [
                                r("div", { staticClass: "card" }, [
                                  r("h2", [t._v("Latest Updates")]),
                                  r("div", { staticClass: "grid-wrapper" }, [
                                    r("div", { staticClass: "grid-row" }, [
                                      r("div", { staticClass: "updates" }, [
                                        r(
                                          "ul",
                                          { staticClass: "updates-list" },
                                          [r("DashLoader")],
                                          1
                                        )
                                      ])
                                    ])
                                  ])
                                ])
                              ]
                            ),
                            r(
                              "div",
                              {
                                staticClass:
                                  "col-xsmall-12 col-medium-6 second-card"
                              },
                              [
                                r("div", { staticClass: "card" }, [
                                  r("h2", [t._v("Personal Information")]),
                                  r("div", { staticClass: "grid-wrapper" }, [
                                    r("div", { staticClass: "grid-row" }, [
                                      r(
                                        "div",
                                        { staticClass: "col-xsmall-12" },
                                        [
                                          r("form", { attrs: { action: "" } }, [
                                            r(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                r(
                                                  "label",
                                                  {
                                                    attrs: { for: "firstName" }
                                                  },
                                                  [t._v("First Name")]
                                                ),
                                                r("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: t.user.firstName,
                                                      expression:
                                                        "user.firstName"
                                                    }
                                                  ],
                                                  ref: "firstNameInput",
                                                  attrs: {
                                                    type: "text",
                                                    name: "",
                                                    placeholder: "First Name",
                                                    id: "",
                                                    disabled: !t.editActivated
                                                  },
                                                  domProps: {
                                                    value: t.user.firstName
                                                  },
                                                  on: {
                                                    input: function(e) {
                                                      e.target.composing ||
                                                        t.$set(
                                                          t.user,
                                                          "firstName",
                                                          e.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                              ]
                                            ),
                                            r(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                r(
                                                  "label",
                                                  {
                                                    attrs: { for: "lastName" }
                                                  },
                                                  [t._v("last Name")]
                                                ),
                                                r("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: t.user.lastName,
                                                      expression:
                                                        "user.lastName"
                                                    }
                                                  ],
                                                  attrs: {
                                                    type: "text",
                                                    name: "",
                                                    placeholder: "Last Name",
                                                    id: "",
                                                    disabled: !t.editActivated
                                                  },
                                                  domProps: {
                                                    value: t.user.lastName
                                                  },
                                                  on: {
                                                    input: function(e) {
                                                      e.target.composing ||
                                                        t.$set(
                                                          t.user,
                                                          "lastName",
                                                          e.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                              ]
                                            ),
                                            r(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                r(
                                                  "label",
                                                  {
                                                    attrs: {
                                                      for: "emailAddress"
                                                    }
                                                  },
                                                  [t._v("Email Address")]
                                                ),
                                                r("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: t.user.email,
                                                      expression: "user.email"
                                                    }
                                                  ],
                                                  attrs: {
                                                    type: "email",
                                                    name: "",
                                                    placeholder: "Email Adress",
                                                    id: "",
                                                    disabled: !t.editActivated
                                                  },
                                                  domProps: {
                                                    value: t.user.email
                                                  },
                                                  on: {
                                                    input: function(e) {
                                                      e.target.composing ||
                                                        t.$set(
                                                          t.user,
                                                          "email",
                                                          e.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                              ]
                                            ),
                                            r(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                r(
                                                  "label",
                                                  {
                                                    attrs: {
                                                      for: "deliveryAddress"
                                                    }
                                                  },
                                                  [t._v("Delivery Address")]
                                                ),
                                                r("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        t.user.deliveryAddress,
                                                      expression:
                                                        "user.deliveryAddress"
                                                    }
                                                  ],
                                                  attrs: {
                                                    type: "adress",
                                                    name: "",
                                                    placeholder:
                                                      "Delivery Address",
                                                    id: "",
                                                    disabled: !t.editActivated
                                                  },
                                                  domProps: {
                                                    value:
                                                      t.user.deliveryAddress
                                                  },
                                                  on: {
                                                    input: function(e) {
                                                      e.target.composing ||
                                                        t.$set(
                                                          t.user,
                                                          "deliveryAddress",
                                                          e.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                              ]
                                            ),
                                            r(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                r(
                                                  "label",
                                                  { attrs: { for: "state" } },
                                                  [t._v("State")]
                                                ),
                                                r("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: t.user.state,
                                                      expression: "user.state"
                                                    }
                                                  ],
                                                  attrs: {
                                                    type: "text",
                                                    name: "",
                                                    placeholder: "State",
                                                    id: "",
                                                    disabled: !t.editActivated
                                                  },
                                                  domProps: {
                                                    value: t.user.state
                                                  },
                                                  on: {
                                                    input: function(e) {
                                                      e.target.composing ||
                                                        t.$set(
                                                          t.user,
                                                          "state",
                                                          e.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                              ]
                                            ),
                                            r(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                t.editActivated
                                                  ? r(
                                                      "button",
                                                      {
                                                        attrs: {
                                                          type: "submit",
                                                          title:
                                                            "Click to save changes"
                                                        },
                                                        on: {
                                                          click: function(e) {
                                                            return (
                                                              e.preventDefault(),
                                                              t.handleUpdate(e)
                                                            );
                                                          }
                                                        }
                                                      },
                                                      [
                                                        t.updatingProfile
                                                          ? [
                                                              r("img", {
                                                                style: {
                                                                  position:
                                                                    "relative",
                                                                  top: "-6px"
                                                                },
                                                                attrs: {
                                                                  src: a(
                                                                    "4637"
                                                                  ),
                                                                  alt: ""
                                                                }
                                                              })
                                                            ]
                                                          : [
                                                              t._v(
                                                                "Save Changes"
                                                              )
                                                            ]
                                                      ],
                                                      2
                                                    )
                                                  : r(
                                                      "button",
                                                      {
                                                        attrs: {
                                                          type: "submit",
                                                          title: "Click to Edit"
                                                        },
                                                        on: {
                                                          click: function(e) {
                                                            return (
                                                              e.preventDefault(),
                                                              t.activate(e)
                                                            );
                                                          }
                                                        }
                                                      },
                                                      [t._v("Edit Profile")]
                                                    )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ],
          1
        );
      },
      Va = [],
      za = a("bd86"),
      Ba = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", [
          a("nav", { staticClass: "dashnav" }, [
            a("div", { staticClass: "content" }, [
              a(
                "svg",
                {
                  staticClass: "dashNavController",
                  on: {
                    click: function(e) {
                      t.navClosed = !t.navClosed;
                    }
                  }
                },
                [
                  t.navClosed
                    ? a(
                        "g",
                        {
                          attrs: {
                            stroke: "#000",
                            "stroke-width": "4",
                            "stroke-linecap": "round"
                          }
                        },
                        [
                          a("line", {
                            attrs: { x1: "8", y1: "12", x2: "24", y2: "12" }
                          }),
                          a("line", {
                            attrs: { x1: "8", y1: "2", x2: "24", y2: "2" }
                          })
                        ]
                      )
                    : a(
                        "g",
                        {
                          attrs: {
                            stroke: "#000",
                            "stroke-width": "2.8",
                            "stroke-linecap": "round"
                          }
                        },
                        [
                          a("line", {
                            attrs: { x1: "8", y1: "1", x2: "20", y2: "14" }
                          }),
                          a("line", {
                            attrs: { x1: "8", y1: "14", x2: "20", y2: "1" }
                          })
                        ]
                      )
                ]
              ),
              a("div", [
                a("ul", [
                  a("li"),
                  a("li"),
                  a(
                    "li",
                    { staticClass: "show-for-mobile" },
                    [
                      a(
                        "router-link",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !t.superAdmin,
                              expression: "!superAdmin"
                            }
                          ],
                          attrs: { to: "/cart" }
                        },
                        [
                          a("icon-living", {
                            attrs: {
                              icon: "shopping-cart",
                              title: "Go to cart"
                            }
                          }),
                          t.$store.state.cart.length > 0
                            ? a("span", { staticClass: "cart-badge" }, [
                                t._v(t._s(t.$store.state.cart.length))
                              ])
                            : a("span", { staticClass: "cart-badge" }, [
                                t._v(t._s(0))
                              ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ]);
      },
      Ya = [],
      Ha = {
        name: "DashNav",
        data: function() {
          return {};
        },
        props: ["navClosed", "superAdmin"]
      },
      Ga = Ha,
      Ja = Object(v["a"])(Ga, Ba, Ya, !1, null, null, null),
      Qa = Ja.exports,
      Wa = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div");
      },
      Za = [],
      Ka = { name: "DashLoader" },
      Xa = Ka,
      tr = Object(v["a"])(Xa, Wa, Za, !1, null, null, null),
      er = tr.exports,
      ar = {
        name: "dashboard",
        data: function() {
          return {
            sideNavOpened: !0,
            editActivated: !1,
            updatingProfile: !1,
            activeTab: "Dashboard",
            user: Object(za["a"])(
              {
                firstName: "",
                lastName: "",
                email: "",
                deliveryAddress: "",
                country: "",
                state: "",
                orders: []
              },
              "country",
              ""
            )
          };
        },
        components: { DashNav: Qa, DashLoader: er },
        computed: {
          activate: function() {
            (this.editActivated = !0), this.$refs.firstNameInput.focus();
          },
          handleUpdate: function() {
            this.updatingProfile = !0;
          }
        },
        methods: {
          logout: function() {
            var t = this;
            this.$store.dispatch("logout").then(function() {
              t.$router.push("/login"), console.log("You are logged out");
            });
          },
          switchTab: function(t) {
            this.activeTab = t;
          }
        },
        mounted: function() {
          var t = this;
          1 === this.$store.getters.getUser.id &&
            this.$router.push("/diagnozed"),
            y.a
              .get("https://api.drugstore.ng/user")
              .then(function(e) {
                var a = e.data.data.uses,
                  r = a.email,
                  o = a.created_at,
                  s = a.updated_at,
                  i = a.first_name,
                  n = a.last_name,
                  c = a.orders,
                  l = a.payment_mode,
                  u = a.country,
                  d = a.state,
                  m = a.phone,
                  p = a.delivery_address;
                (t.user.firstName = i),
                  (t.user.lastName = n),
                  (t.user.email = r),
                  (t.user.phone = m),
                  (t.user.createdAt = o),
                  (t.user.updatedAt = s),
                  (t.user.paymentMode = l),
                  (t.user.deliveryAddress = p || "Not yet field"),
                  (t.user.orders = c),
                  (t.user.country = u || "Not yet field"),
                  (t.user.state = d || "Not yet field"),
                  console.log(t.user);
              })
              .catch(function(t) {});
        },
        title: function() {
          return "DrugStore - Patient Dashboard";
        }
      },
      rr = ar,
      or = (a("4be7"), Object(v["a"])(rr, Ra, Va, !1, null, "765d41c0", null)),
      sr = (or.exports,
      function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "main",
          { attrs: { id: "superAdminDashboard" } },
          [
            a("superAdminNav"),
            a("div", { staticClass: "super-admin-body" }, [
              a("div", { staticClass: "grid-wrapper" }, [
                a("div", { staticClass: "grid-row" }, [
                  a(
                    "div",
                    { staticClass: "col-xsmall-12 col-sm-6 col-medium-6" },
                    [
                      a("div", { staticClass: "short-description-tab" }, [
                        a("div", { staticClass: "grid-row" }, [
                          a("div", { staticClass: "col-xsmall-9" }, [
                            a("span", [t._v("Total Products")]),
                            a("span", [t._v(t._s(t.productNumber))])
                          ]),
                          a(
                            "div",
                            { staticClass: "col-xsmall-3" },
                            [
                              a("icon-living", {
                                staticClass: "fa-3x",
                                attrs: { icon: "cart-plus" }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  ),
                  a(
                    "div",
                    { staticClass: "col-xsmall-12 col-sm-6 col-medium-6" },
                    [
                      a("div", { staticClass: "short-description-tab" }, [
                        a("div", { staticClass: "grid-row" }, [
                          a("div", { staticClass: "col-xsmall-9" }, [
                            a("span", [t._v("Orders")]),
                            a("span", [t._v(t._s(t.orderNumber))])
                          ]),
                          a(
                            "div",
                            { staticClass: "col-xsmall-3" },
                            [
                              a("icon-living", {
                                staticClass: "fa-3x",
                                attrs: { icon: "shopping-bag" }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                ]),
                a("div", { staticClass: "grid-row" }, [
                  a("div", { staticClass: "col-xsmall-12 m0" }, [
                    a("div", { staticClass: "dynamic-dash-body" }, [
                      a("h2", { staticClass: "section-title" }, [
                        t._v(t._s(t.activeTab))
                      ]),
                      "dashboard" === t.activeTab
                        ? a("div", { staticClass: "section-content" })
                        : "manage orders" === t.activeTab
                        ? a(
                            "div",
                            { staticClass: "section-content" },
                            [
                              t.loadedOrders
                                ? [
                                    a("manageOrders", {
                                      attrs: { orders: t.orders }
                                    })
                                  ]
                                : [t._m(0)]
                            ],
                            2
                          )
                        : "equipments" === t.activeTab
                        ? a(
                            "div",
                            { staticClass: "section-content" },
                            [
                              t.loadedProducts
                                ? [
                                    a("products", {
                                      attrs: {
                                        products:
                                          t.$store.getters.allMerchantProducts
                                      }
                                    })
                                  ]
                                : [t._m(1)]
                            ],
                            2
                          )
                        : t._e()
                    ])
                  ])
                ])
              ])
            ])
          ],
          1
        );
      }),
      ir = [
        function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "loader-container" }, [
            r("img", {
              staticStyle: { "user-select": "none" },
              attrs: { src: a("c165"), alt: "", height: "50px" }
            })
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "loader-container" }, [
            r("img", {
              staticStyle: { "user-select": "none" },
              attrs: { src: a("c165"), alt: "", height: "50px" }
            })
          ]);
        }
      ],
      nr = a("75fc"),
      cr = a("f499"),
      lr = a.n(cr),
      ur = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          {
            directives: [
              {
                name: "click-outside",
                rawName: "v-click-outside",
                value: t.onOutsideClick,
                expression: "onOutsideClick"
              }
            ],
            attrs: { id: "superAdminNav" }
          },
          [
            r(
              "nav",
              {
                staticClass: "super-admin-nav",
                staticStyle: { "z-index": "9990" }
              },
              [
                r(
                  "svg",
                  {
                    staticClass: "dropdown-button",
                    on: {
                      click: function(e) {
                        t.navClosed = !t.navClosed;
                      }
                    }
                  },
                  [
                    t.navClosed
                      ? r(
                          "g",
                          {
                            attrs: {
                              stroke: "#42B983",
                              "stroke-width": "2",
                              "stroke-linecap": "round"
                            }
                          },
                          [
                            r("line", {
                              attrs: { x1: "8", y1: "2", x2: "24", y2: "2" }
                            }),
                            r("line", {
                              attrs: { x1: "8", y1: "8", x2: "24", y2: "8" }
                            })
                          ]
                        )
                      : r(
                          "g",
                          {
                            attrs: {
                              stroke: "#42B983",
                              "stroke-width": "4",
                              "stroke-linecap": "round"
                            }
                          },
                          [
                            r("line", {
                              attrs: { x1: "8", y1: "2", x2: "24", y2: "2" }
                            }),
                            r("line", {
                              attrs: { x1: "8", y1: "8", x2: "24", y2: "8" }
                            })
                          ]
                        )
                  ]
                ),
                t.contentsLoaded
                  ? r(
                      "div",
                      { staticClass: "brand-address" },
                      [
                        r("router-link", { attrs: { to: "/" } }, [
                          t._v("Merchant Dashboard")
                        ])
                      ],
                      1
                    )
                  : r("div", { staticClass: "loader" }, [
                      r("img", {
                        staticStyle: { "user-select": "none" },
                        attrs: { src: a("bb10"), alt: "", height: "50px" }
                      })
                    ]),
                r(
                  "div",
                  {
                    directives: [
                      {
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: t.closeDropDown,
                        expression: "closeDropDown"
                      }
                    ],
                    staticClass: "account-drop",
                    on: {
                      click: function(e) {
                        t.showAccDrop = !t.showAccDrop;
                      }
                    }
                  },
                  [
                    r(
                      "span",
                      [
                        r(
                          "transition",
                          { attrs: { name: "fade" } },
                          [
                            r("icon-living", {
                              attrs: {
                                icon:
                                  "chevron-" + (t.showAccDrop ? "up" : "down")
                              }
                            })
                          ],
                          1
                        ),
                        r("icon-living", { attrs: { icon: "cog" } })
                      ],
                      1
                    ),
                    r("transition", { attrs: { name: "fade" } }, [
                      r(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.showAccDrop,
                              expression: "showAccDrop"
                            }
                          ],
                          staticClass: "acc-drop"
                        },
                        [
                          r(
                            "ul",
                            [
                              r(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function(e) {
                                      return (
                                        e.preventDefault(),
                                        t.$store.dispatch("logout")
                                      );
                                    }
                                  }
                                },
                                [
                                  r("li", [
                                    r(
                                      "span",
                                      [
                                        r("icon-living", {
                                          attrs: { icon: "sign-out-alt" }
                                        }),
                                        t._v("Log out\n\t\t\t\t\t\t\t\t")
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              ),
                              r("router-link", { attrs: { to: "/" } }, [
                                r("li", [
                                  r(
                                    "span",
                                    [
                                      r("icon-living", {
                                        attrs: { icon: "cog" }
                                      }),
                                      t._v("Account Settings\n\t\t\t\t\t\t\t\t")
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ],
                            1
                          )
                        ]
                      )
                    ])
                  ],
                  1
                ),
                r("transition", { attrs: { name: "fade" } }, [
                  r(
                    "nav",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !t.navClosed,
                          expression: "!navClosed"
                        }
                      ],
                      staticClass: "side-nav"
                    },
                    [
                      r(
                        "ul",
                        [
                          r(
                            "router-link",
                            {
                              class:
                                "dashboard" === t.activeTab ? "active" : null,
                              attrs: { to: "?activeTab=dashboard" },
                              on: {
                                click: function(e) {
                                  return e.preventDefault(), t.changeTab();
                                }
                              }
                            },
                            [
                              r(
                                "li",
                                [
                                  r("icon-living", {
                                    attrs: { icon: "tachometer-alt" }
                                  }),
                                  t._v("Dashboard\n\t\t\t\t\t\t")
                                ],
                                1
                              )
                            ]
                          ),
                          r(
                            "router-link",
                            {
                              class:
                                "manage orders" === t.activeTab
                                  ? "active"
                                  : null,
                              attrs: { to: "?activeTab=manage orders" },
                              on: {
                                click: function(e) {
                                  return e.preventDefault(), t.changeTab();
                                }
                              }
                            },
                            [
                              r(
                                "li",
                                [
                                  r("icon-living", {
                                    attrs: { icon: "cart-plus" }
                                  }),
                                  t._v("Manage Orders\n\t\t\t\t\t\t")
                                ],
                                1
                              )
                            ]
                          ),
                          r(
                            "router-link",
                            {
                              class:
                                "equipments" === t.activeTab ? "active" : null,
                              attrs: { to: "?activeTab=equipments" },
                              on: {
                                click: function(e) {
                                  return e.preventDefault(), t.changeTab();
                                }
                              }
                            },
                            [
                              r(
                                "li",
                                [
                                  r("icon-living", {
                                    attrs: { icon: "puzzle-piece" }
                                  }),
                                  t._v("Equipments\n\t\t\t\t\t\t")
                                ],
                                1
                              )
                            ]
                          ),
                          r(
                            "a",
                            {
                              on: {
                                click: function(e) {
                                  return e.preventDefault(), t.logOut(e);
                                }
                              }
                            },
                            [
                              r(
                                "li",
                                [
                                  r("icon-living", {
                                    attrs: { icon: "sign-out-alt" }
                                  }),
                                  t._v("Log Out\n\t\t\t\t\t\t")
                                ],
                                1
                              )
                            ]
                          ),
                          r("router-link", { attrs: { to: "/" } }, [
                            r(
                              "li",
                              [
                                r("icon-living", { attrs: { icon: "home" } }),
                                t._v("Go Home\n\t\t\t\t\t\t")
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                ])
              ],
              1
            )
          ]
        );
      },
      dr = [],
      mr = {
        name: "superAdminNav",
        data: function() {
          return {
            navClosed: !0,
            showAccDrop: !1,
            activeTab: this.$route.query.activeTab || "dashboard",
            contentsLoaded: !1
          };
        },
        created: function() {
          this.loadAbit();
        },
        methods: {
          loadAbit: function() {
            var t = this;
            this.contentsLoaded = !1;
            window.setTimeout(function() {
              t.contentsLoaded = !0;
            }, 2e3);
          },
          onOutsideClick: function(t, e) {
            this.navClosed = !0;
          },
          closeDropDown: function(t, e) {
            this.showAccDrop = !1;
          },
          changeTab: function() {
            (this.activeTab = this.$route.query.activeTab),
              (this.navClosed = !0);
          },
          logOut: function() {
            this.$store.dispatch("logout").then.$router.push("/login");
          }
        },
        watch: {
          $route: function(t, e) {
            this.loadAbit(),
              (this.activeTab = t.query.activeTab),
              (this.navClosed = !0);
          }
        }
      },
      pr = mr,
      vr = (a("9c48"), Object(v["a"])(pr, ur, dr, !1, null, null, null)),
      hr = vr.exports,
      gr = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "categories" } }, [
          a(
            "table",
            { staticClass: "pharmacies" },
            [
              t._m(0),
              t._l(t.categories, function(e, r) {
                return a("tr", { key: e.name }, [
                  a("td", [t._v(t._s(r + 1))]),
                  a("td", [t._v(t._s(e.name))]),
                  a("td", [t._v(t._s(e.description))]),
                  a("td", [t._v("{{}}")])
                ]);
              })
            ],
            2
          )
        ]);
      },
      fr = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("tr", [
            a("th", [t._v("#")]),
            a("th", [t._v("Category Name")]),
            a("th", [t._v("Category Description")]),
            a("th", [t._v("Action")])
          ]);
        }
      ],
      br = { name: "categories", props: ["categories"] },
      _r = br,
      yr = Object(v["a"])(_r, gr, fr, !1, null, null, null),
      Cr = (yr.exports,
      function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { attrs: { id: "products" } },
          [
            r("transition", { attrs: { name: "fade" } }, [
              t.delModalOpen
                ? r("div", { attrs: { id: "modal" } }, [
                    r(
                      "div",
                      {
                        directives: [
                          {
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.onClickOutside,
                            expression: "onClickOutside"
                          }
                        ],
                        staticClass: "modal-body"
                      },
                      [
                        r(
                          "p",
                          { staticClass: "times", on: { click: t.closeModal } },
                          [t._v("×")]
                        ),
                        r(
                          "div",
                          { staticStyle: { "text-align": "center" } },
                          [
                            t.deleted
                              ? r("div", [t._v("Product Deleted")])
                              : [
                                  r("div", [
                                    r("input", {
                                      staticClass: "delete",
                                      attrs: {
                                        required: "true",
                                        type: "submit",
                                        value: "Confirm Delete"
                                      },
                                      on: {
                                        click: function(e) {
                                          return (
                                            e.preventDefault(),
                                            t.deleteProduct(t.productID)
                                          );
                                        }
                                      }
                                    })
                                  ])
                                ]
                          ],
                          2
                        )
                      ]
                    )
                  ])
                : t._e()
            ]),
            r("transition", { attrs: { name: "fade" } }, [
              t.editModalOpen
                ? r("div", { attrs: { id: "modal" } }, [
                    r(
                      "div",
                      {
                        directives: [
                          {
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.onClickOutside,
                            expression: "onClickOutside"
                          }
                        ],
                        staticClass: "modal-body"
                      },
                      [
                        r(
                          "p",
                          { staticClass: "times", on: { click: t.closeModal } },
                          [t._v("×")]
                        ),
                        0 !== Object.keys(t.productDetails).length &&
                        t.productDetails.id === t.productID
                          ? r(
                              "div",
                              { staticStyle: { "text-align": "center" } },
                              [
                                r(
                                  "form",
                                  {
                                    on: {
                                      submit: function(e) {
                                        return t.handleEdit();
                                      }
                                    }
                                  },
                                  [
                                    r("input", {
                                      attrs: { required: "true", type: "text" }
                                    }),
                                    r("input", {
                                      attrs: { required: "true", type: "text" }
                                    })
                                  ]
                                ),
                                r("div", [
                                  r("input", {
                                    staticClass: "delete",
                                    attrs: {
                                      required: "true",
                                      type: "submit",
                                      value: "Save Edit"
                                    },
                                    on: {
                                      click: function(e) {
                                        return (
                                          e.preventDefault(),
                                          t.deleteProduct(t.productID)
                                        );
                                      }
                                    }
                                  })
                                ])
                              ]
                            )
                          : r("div", [
                              r("img", {
                                staticStyle: {
                                  "user-select": "none",
                                  margin: "auto",
                                  display: "flex"
                                },
                                attrs: {
                                  src: a("c165"),
                                  alt: "",
                                  height: "50px"
                                }
                              })
                            ])
                      ]
                    )
                  ])
                : t._e()
            ]),
            r("transition", { attrs: { name: "fade" } }, [
              t.postModalOpen
                ? r(
                    "div",
                    {
                      staticStyle: { "z-index": "9000" },
                      attrs: { id: "modal" }
                    },
                    [
                      r(
                        "div",
                        {
                          directives: [
                            {
                              name: "click-outside",
                              rawName: "v-click-outside",
                              value: t.onClickOutside,
                              expression: "onClickOutside"
                            }
                          ],
                          staticClass: "modal-body",
                          staticStyle: {
                            overflow: "auto",
                            "max-height": "450px",
                            "max-width": "800px"
                          }
                        },
                        [
                          r(
                            "p",
                            {
                              staticClass: "times",
                              on: { click: t.closeModal }
                            },
                            [t._v("×")]
                          ),
                          r("h2", { staticClass: "form-title" }, [
                            t._v("\n\t\t\t\t\t\tPost Product\n\t\t\t\t\t")
                          ]),
                          r("form", { attrs: { id: "addPharmacy" } }, [
                            r("div", { staticClass: "form-group" }, [
                              r("label", { attrs: { for: "product-name" } }, [
                                t._v("\n\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t")
                              ]),
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.product.name,
                                    expression: "product.name"
                                  }
                                ],
                                attrs: {
                                  required: "true",
                                  type: "text",
                                  placeholder: "Product Name"
                                },
                                domProps: { value: t.product.name },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      t.$set(t.product, "name", e.target.value);
                                  }
                                }
                              })
                            ]),
                            r("div", { staticClass: "form-group" }, [
                              r("label", { attrs: { for: "product-model" } }, [
                                t._v("\n\t\t\t\t\t\t\t\tModel\n\t\t\t\t\t\t\t")
                              ]),
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.product.model,
                                    expression: "product.model"
                                  }
                                ],
                                attrs: {
                                  required: "true",
                                  type: "text",
                                  placeholder: "Product Model"
                                },
                                domProps: { value: t.product.model },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.product,
                                        "model",
                                        e.target.value
                                      );
                                  }
                                }
                              })
                            ]),
                            r("div", { staticClass: "form-group" }, [
                              r(
                                "label",
                                { attrs: { for: "product-manufacturer" } },
                                [
                                  t._v(
                                    "\n\t\t\t\t\t\t\t\tManufacturer\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.product.manufacturer,
                                    expression: "product.manufacturer"
                                  }
                                ],
                                attrs: {
                                  required: "true",
                                  type: "text",
                                  placeholder: "Product Manufacturer"
                                },
                                domProps: { value: t.product.manufacturer },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.product,
                                        "manufacturer",
                                        e.target.value
                                      );
                                  }
                                }
                              })
                            ]),
                            r("div", { staticClass: "form-group" }, [
                              r("label", { attrs: { for: "product-year" } }, [
                                t._v(
                                  "\n\t\t\t\t\t\t\t\tYear of make\n\t\t\t\t\t\t\t"
                                )
                              ]),
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.product.year,
                                    expression: "product.year"
                                  }
                                ],
                                attrs: {
                                  required: "true",
                                  type: "text",
                                  placeholder: "Product Model"
                                },
                                domProps: { value: t.product.year },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      t.$set(t.product, "year", e.target.value);
                                  }
                                }
                              })
                            ]),
                            r("div", { staticClass: "form-group" }, [
                              r(
                                "label",
                                { attrs: { for: "product-country" } },
                                [
                                  t._v(
                                    "\n\t\t\t\t\t\t\t\tCountry\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.product.country,
                                    expression: "product.country"
                                  }
                                ],
                                attrs: {
                                  required: "true",
                                  type: "text",
                                  placeholder: "Product Country"
                                },
                                domProps: { value: t.product.country },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.product,
                                        "country",
                                        e.target.value
                                      );
                                  }
                                }
                              })
                            ]),
                            r("div", { staticClass: "form-group" }, [
                              r(
                                "label",
                                { attrs: { for: "product-condition" } },
                                [
                                  t._v(
                                    "\n\t\t\t\t\t\t\t\tCondition\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              r(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.product.condition,
                                      expression: "product.condition"
                                    }
                                  ],
                                  domProps: { value: t.product.condition },
                                  on: {
                                    change: function(e) {
                                      var a = Array.prototype.filter
                                        .call(e.target.options, function(t) {
                                          return t.selected;
                                        })
                                        .map(function(t) {
                                          var e =
                                            "_value" in t ? t._value : t.value;
                                          return e;
                                        });
                                      t.$set(
                                        t.product,
                                        "condition",
                                        e.target.multiple ? a : a[0]
                                      );
                                    }
                                  }
                                },
                                [
                                  r("option", { attrs: { value: "good" } }, [
                                    t._v("Good")
                                  ]),
                                  r(
                                    "option",
                                    { attrs: { value: "not_so_good" } },
                                    [t._v("Not so good(Repairable")]
                                  ),
                                  r("option", { attrs: { value: "bad" } }, [
                                    t._v("Bad")
                                  ])
                                ]
                              )
                            ]),
                            r("div", { staticClass: "form-group" }, [
                              r("label", { attrs: { for: "product-model" } }, [
                                t._v(
                                  "\n\t\t\t\t\t\t\t\tDescription\n\t\t\t\t\t\t\t"
                                )
                              ]),
                              r("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.product.description,
                                    expression: "product.description"
                                  }
                                ],
                                attrs: {
                                  required: "true",
                                  type: "text",
                                  rows: "6",
                                  placeholder: "Product Description"
                                },
                                domProps: { value: t.product.description },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.product,
                                        "description",
                                        e.target.value
                                      );
                                  }
                                }
                              })
                            ]),
                            r(
                              "div",
                              { staticClass: "form-group" },
                              [
                                r(
                                  "label",
                                  { attrs: { for: "product-main_category" } },
                                  [
                                    t._v(
                                      "\n\t\t\t\t\t\t\t\tMain Category\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                t.noCategory
                                  ? [
                                      r("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.product.main_category,
                                            expression: "product.main_category"
                                          }
                                        ],
                                        attrs: {
                                          required: "true",
                                          type: "text",
                                          placeholder: "Product Main Category"
                                        },
                                        domProps: {
                                          value: t.product.main_category
                                        },
                                        on: {
                                          input: function(e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.product,
                                                "main_category",
                                                e.target.value
                                              );
                                          }
                                        }
                                      }),
                                      t._v("\n\t\t\t\t\t\t\t\tClick "),
                                      r(
                                        "span",
                                        {
                                          staticStyle: {
                                            color: "red",
                                            "text-decoration": "underline",
                                            cursor: "pointer"
                                          },
                                          on: {
                                            click: function(e) {
                                              e.preventDefault(),
                                                e.stopPropagation(),
                                                (t.noCategory = !1);
                                            }
                                          }
                                        },
                                        [t._v("here")]
                                      ),
                                      t._v(
                                        " to see the available categories\n\t\t\t\t\t\t\t\t"
                                      ),
                                      r("br")
                                    ]
                                  : [
                                      r(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.product.main_category,
                                              expression:
                                                "product.main_category"
                                            }
                                          ],
                                          attrs: { name: "" },
                                          domProps: {
                                            value: "Select Category"
                                          },
                                          on: {
                                            change: function(e) {
                                              var a = Array.prototype.filter
                                                .call(
                                                  e.target.options,
                                                  function(t) {
                                                    return t.selected;
                                                  }
                                                )
                                                .map(function(t) {
                                                  var e =
                                                    "_value" in t
                                                      ? t._value
                                                      : t.value;
                                                  return e;
                                                });
                                              t.$set(
                                                t.product,
                                                "main_category",
                                                e.target.multiple ? a : a[0]
                                              );
                                            }
                                          }
                                        },
                                        t._l(
                                          t.$store.getters.allCategories,
                                          function(e) {
                                            return r(
                                              "option",
                                              {
                                                key: e.attributes.name,
                                                domProps: {
                                                  value: e.attributes.name.substr(
                                                    0,
                                                    30
                                                  )
                                                }
                                              },
                                              [
                                                t._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t" +
                                                    t._s(
                                                      e.attributes.name.substr(
                                                        0,
                                                        30
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ]
                                            );
                                          }
                                        ),
                                        0
                                      ),
                                      t._v("\n\t\t\t\t\t\t\t\tclick "),
                                      r(
                                        "span",
                                        {
                                          staticStyle: {
                                            color: "red",
                                            "text-decoration": "underline",
                                            cursor: "pointer"
                                          },
                                          on: {
                                            click: function(e) {
                                              e.preventDefault(),
                                                e.stopPropagation(),
                                                (t.noCategory = !0);
                                            }
                                          }
                                        },
                                        [t._v("here")]
                                      ),
                                      t._v(
                                        " if category is not available\n\t\t\t\t\t\t\t\t"
                                      ),
                                      r("br")
                                    ]
                              ],
                              2
                            ),
                            r("br"),
                            r(
                              "div",
                              { staticClass: "form-group" },
                              [
                                r(
                                  "label",
                                  { attrs: { for: "product-sub_category" } },
                                  [
                                    t._v(
                                      "\n\t\t\t\t\t\t\t\tSub Category\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                t.noSubCategory
                                  ? [
                                      r("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.product.sub_category,
                                            expression: "product.sub_category"
                                          }
                                        ],
                                        attrs: {
                                          type: "text",
                                          placeholder: "Product Sub Category"
                                        },
                                        domProps: {
                                          value: t.product.sub_category
                                        },
                                        on: {
                                          input: function(e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.product,
                                                "sub_category",
                                                e.target.value
                                              );
                                          }
                                        }
                                      }),
                                      t._v("\n\t\t\t\t\t\t\t\tClick "),
                                      r(
                                        "span",
                                        {
                                          staticStyle: {
                                            color: "red",
                                            "text-decoration": "underline",
                                            cursor: "pointer"
                                          },
                                          on: {
                                            click: function(e) {
                                              e.preventDefault(),
                                                e.stopPropagation(),
                                                (t.noSubCategory = !1);
                                            }
                                          }
                                        },
                                        [t._v("here")]
                                      ),
                                      t._v(
                                        " to see available sub categories\n\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  : void 0
                              ],
                              2
                            ),
                            r("br"),
                            r("div", { staticClass: "form-group" }, [
                              r(
                                "label",
                                { attrs: { for: "product-quantity" } },
                                [
                                  t._v(
                                    "\n\t\t\t\t\t\t\t\tQuantity\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.product.quantity,
                                    expression: "product.quantity"
                                  }
                                ],
                                attrs: {
                                  required: "true",
                                  type: "text",
                                  placeholder: "Product Quantity"
                                },
                                domProps: { value: t.product.quantity },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.product,
                                        "quantity",
                                        e.target.value
                                      );
                                  }
                                }
                              })
                            ]),
                            r("div", { staticClass: "form-group" }, [
                              r("label", { attrs: { for: "product-price" } }, [
                                t._v("\n\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t\t\t")
                              ]),
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.product.price,
                                    expression: "product.price"
                                  }
                                ],
                                attrs: {
                                  required: "true",
                                  type: "number",
                                  placeholder: "Product Price"
                                },
                                domProps: { value: t.product.price },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.product,
                                        "price",
                                        e.target.value
                                      );
                                  }
                                }
                              })
                            ]),
                            t.product.images.length < 4
                              ? r("div", { staticClass: "form-group" }, [
                                  r(
                                    "label",
                                    { attrs: { for: "product-images" } },
                                    [
                                      t._v(
                                        "\n\t\t\t\t\t\t\t\tImages\n\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  ),
                                  r(
                                    "button",
                                    {
                                      staticClass: "image-select",
                                      on: {
                                        click: function(e) {
                                          return (
                                            e.preventDefault(),
                                            t.cloudinaryWidget(e)
                                          );
                                        }
                                      }
                                    },
                                    [
                                      t._v(
                                        "\n\t\t\t\t\t\t\t\tAdd images\n\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  ),
                                  t._v(
                                    "\n\t\t\t\t\t\t\t4 images should be selected\n\t\t\t\t\t\t"
                                  )
                                ])
                              : t._e(),
                            r("br"),
                            r("div", { staticClass: "form-group" }, [
                              t.notLoading
                                ? r(
                                    "button",
                                    {
                                      staticClass: "post-product",
                                      attrs: { role: "submit" },
                                      on: {
                                        click: function(e) {
                                          return (
                                            e.preventDefault(),
                                            e.stopPropagation(),
                                            t.postProduct(e)
                                          );
                                        }
                                      }
                                    },
                                    [
                                      t._v(
                                        "\n\t\t\t\t\t\t\t\tPost Product\n\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                : r(
                                    "button",
                                    {
                                      staticClass: "post-product",
                                      attrs: { role: "submit" }
                                    },
                                    [
                                      r("img", {
                                        style: {
                                          position: "relative",
                                          top: "-6px"
                                        },
                                        attrs: { src: a("4637"), alt: "" }
                                      })
                                    ]
                                  )
                            ]),
                            r(
                              "span",
                              {
                                staticStyle: {
                                  color: "red",
                                  "text-align": "center"
                                }
                              },
                              [t._v(t._s(t.postFormError))]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                : t._e()
            ]),
            0 === t.products.length
              ? [
                  r("div", { staticClass: "no-product" }, [
                    t._v("\n\t\t\t\tYou don't have any product yet\n\t\t\t")
                  ]),
                  r(
                    "button",
                    {
                      staticClass: "post-product",
                      on: { click: t.openPostModal }
                    },
                    [t._v("\n\t\t\t\tPost Product\n\t\t\t")]
                  )
                ]
              : [
                  r(
                    "table",
                    { staticClass: "products" },
                    [
                      t._m(0),
                      t._l(t.products, function(e, a) {
                        return r("tr", { key: e.id }, [
                          r("td", { staticStyle: { color: "white" } }, [
                            t._v(t._s(a + 1))
                          ]),
                          r("td", { staticStyle: { color: "white" } }, [
                            t._v(t._s(e.id))
                          ]),
                          r("td", { staticStyle: { color: "white" } }, [
                            t._v(t._s(e.attributes.name))
                          ]),
                          r("td", { staticStyle: { color: "white" } }, [
                            t._v(t._s(e.attributes.model))
                          ]),
                          r("td", { staticStyle: { color: "white" } }, [
                            t._v(t._s(e.attributes.country))
                          ]),
                          r("td", { staticStyle: { color: "white" } }, [
                            t._v(t._s(e.attributes.main_category))
                          ]),
                          r("td", { staticStyle: { color: "white" } }, [
                            t._v(t._s(e.attributes.created_at.split("T")[0]))
                          ]),
                          r(
                            "td",
                            [
                              r("icon-living", {
                                staticStyle: {
                                  color: "red",
                                  "text-align": "center"
                                },
                                attrs: { icon: "trash" },
                                on: {
                                  click: function(a) {
                                    return t.openDelModal(e, e.id);
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ]);
                      })
                    ],
                    2
                  ),
                  r(
                    "button",
                    {
                      staticClass: "post-product",
                      on: { click: t.openPostModal }
                    },
                    [t._v("\n\t\t\t\tPost Product\n\t\t\t")]
                  )
                ]
          ],
          2
        );
      }),
      wr = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("tr", [
            a("th", [t._v("#")]),
            a("th", [t._v("ID")]),
            a("th", [t._v("Name")]),
            a("th", [t._v("Model")]),
            a("th", [t._v("Country")]),
            a("th", [t._v("Main Category")]),
            a("th", [t._v("Created At")]),
            a("th", [t._v("Action")])
          ]);
        }
      ],
      xr = {
        name: "products",
        data: function() {
          return {
            noCategory: !1,
            noSubCategory: !1,
            countries: [],
            delModalOpen: !1,
            editModalOpen: !1,
            postModalOpen: !1,
            productID: "",
            productDetails: {},
            product: {
              name: "",
              model: "".toUpperCase(),
              manufacturer: "",
              description: "",
              year: "",
              country: "",
              condition: "",
              main_category: "",
              sub_category: "",
              quantity: "",
              price: "",
              image1: "",
              image2: "",
              image3: "",
              image4: "",
              images: [],
              image: ""
            },
            postFormError: "",
            loading: !0,
            deleted: !1,
            BASE_URL: "https://api.drugstore.ng",
            flashText: "",
            notLoading: !0,
            cloudinaryCounter: 0
          };
        },
        created: function() {
          document.documentElement.style.userSelect = "none";
        },
        destroyed: function() {},
        computed: {
          annotate: function() {
            return a("b132").money;
          }
        },
        methods: {
          postProduct: function() {
            var t = this,
              e = this.product,
              a = e.name,
              r = e.model,
              o = e.description,
              s = e.manufacturer,
              i = e.year,
              n = e.country,
              c = e.condition,
              l = e.main_category,
              u = e.sub_category,
              d = e.quantity,
              m = e.price,
              p = e.image;
            if ("" !== (a && r && s && o && i && n && c && l && d && m && p)) {
              this.notLoading = !1;
              var v = {
                data: {
                  type: "Equipment",
                  attributes: {
                    name: a,
                    model: r.toUpperCase(),
                    manufacturer: s,
                    year: i,
                    country: n,
                    condition: c,
                    description: o,
                    main_category: l,
                    sub_category: u || "",
                    quantity: d,
                    price: m,
                    images: Object(nr["a"])(this.product.images),
                    image: p
                  }
                }
              };
              y()("https://dragonvert.joppa.ng/equipments/", {
                method: "POST",
                data: v,
                headers: { "Content-Type": "application/vnd.api+json" }
              })
                .then(function(e) {
                  if ("Created" === e.statusText)
                    try {
                      (t.product.name = t.product.model = t.product.manufacturer = t.product.year = t.product.country = t.product.condition = t.product.main_category = t.product.sub_category = t.product.quantity = t.product.price = t.product.image = t.product.description =
                        ""),
                        (t.product.images = []),
                        (t.notLoading = !0),
                        window.alert("Successfully posted equipment"),
                        t.closeModal(),
                        t.$store.dispatch(
                          "updateMerchantProducts",
                          t.$store.state.merchant.data.id
                        );
                    } catch (a) {
                      console.log("New Error:", a);
                    }
                  else console.log(e);
                })
                .catch(function(t) {
                  return console.log(t);
                });
            } else {
              this.postFormError = "All fields must be filled";
              var h = new Date().getFullYear();
              i >= 1984 && i > h && (this.postFormError += "<br> Invalid Year");
            }
          },
          cloudinaryWidget: function() {
            var t = this,
              e = cloudinary.createUploadWidget(
                { cloudName: "fabrixrus", uploadPreset: "iols1xvl" },
                function(e, a) {
                  if (!e && a && "success" === a.event) {
                    var r = t.product,
                      o = r.image1,
                      s = r.image2,
                      i = r.image3;
                    r.image4;
                    "" === o
                      ? ((t.product.image1 = a.info.url),
                        t.cloudinaryCounter++,
                        console.log(t.cloudinaryCounter))
                      : "" === s && "" !== o
                      ? ((t.product.image2 = a.info.url),
                        t.cloudinaryCounter++,
                        console.log(t.cloudinaryCounter))
                      : "" === i && (o === s) !== ""
                      ? ((t.product.image3 = a.info.url),
                        t.cloudinaryCounter++,
                        console.log(t.cloudinaryCounter))
                      : ((t.product.image4 = a.info.url),
                        t.cloudinaryCounter++,
                        console.log(t.cloudinaryCounter)),
                      (t.product.image = o),
                      (t.product.images = [
                        { image: o },
                        { image: s },
                        { image: i }
                      ]);
                  }
                }
              );
            e.open();
          },
          closeModal: function() {
            (this.delModalOpen = !1),
              (this.editModalOpen = !1),
              (this.postModalOpen = !1);
          },
          onClickOutside: function() {
            this.closeModal();
          },
          openEditModal: function(t, e) {
            (document.documentElement.style.overflowY = "hidden"),
              (this.editModalOpen = !0),
              (this.productDetails = t),
              (this.productID = e);
          },
          openDelModal: function(t, e) {
            (this.delModalOpen = !0),
              (this.productID = e),
              (this.productDetails = t);
          },
          openPostModal: function() {
            this.postModalOpen = !0;
          },
          deleteProduct: function(t) {}
        },
        props: ["category", "products"],
        watch: {
          BASE_URL: function() {
            this.fetchDetails();
          },
          cloudinaryCounter: function() {
            console.log(this.cloudinaryCounter);
          }
        }
      },
      Pr = xr,
      kr = (a("6323"), Object(v["a"])(Pr, Cr, wr, !1, null, "2a96cbf4", null)),
      Nr = kr.exports,
      Or = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "manageOrders" } }, [
          a(
            "table",
            { staticClass: "orders" },
            [
              t._m(0),
              t._l(t.orders, function(e, r) {
                return a("tr", { key: e.id }, [
                  a("td", [t._v(t._s(r + 1))]),
                  a(
                    "td",
                    [
                      a(
                        "router-link",
                        {
                          staticStyle: { "text-decoration": "none" },
                          attrs: { to: "" }
                        },
                        [t._v(t._s(e.order_id))]
                      )
                    ],
                    1
                  ),
                  a("td", [t._v(t._s(e.stock.name))]),
                  a("td", [t._v(t._s(e.stock.brand))]),
                  a("td", [t._v(t._s(t.money(parseInt(e.stock.price))))]),
                  a("td", [t._v(t._s(parseInt(e.quantity)))]),
                  a("td", [
                    t._v(t._s(t.money(parseInt(e.quantity * e.stock.price))))
                  ]),
                  a("td", [t._v(t._s(e.order.address))]),
                  a("td", [t._v(t._s(e.order.user.phone))]),
                  a("td", [t._v(t._s(e.order.user.email))]),
                  a("td", [t._v(t._s(e.order.created_at))])
                ]);
              })
            ],
            2
          )
        ]);
      },
      $r = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("tr", [
            a("th", [t._v("#")]),
            a("th", [t._v("Order ID")]),
            a("th", [t._v("Product Name")]),
            a("th", [t._v("Brand")]),
            a("th", [t._v("Price")]),
            a("th", [t._v("Quantity")]),
            a("th", [t._v("Total Price")]),
            a("th", [t._v("Delivery Address")]),
            a("th", [t._v("Phone Number")]),
            a("th", [t._v("Email")]),
            a("th", [t._v("Time of order")])
          ]);
        }
      ],
      Sr = {
        name: "manageOrders",
        props: ["orders"],
        computed: {
          money: function() {
            return a("b132").money;
          }
        }
      },
      Er = Sr,
      qr = Object(v["a"])(Er, Or, $r, !1, null, null, null),
      Dr = qr.exports,
      Ar = {
        name: "superAdminDashboard",
        title: function() {
          return "DragonVert - Merchant's dashboard";
        },
        data: function() {
          return {
            activeTab: this.$route.query.activeTab || "dashboard",
            secondActiveTab: "showBiz",
            loadedProducts: !1,
            products: [],
            loadedOrders: !1,
            orders: null,
            orderNumber: 0,
            productNumber: 0,
            requestsLoaded: !1,
            BASE_URL: "https://dragonvert.joppa.ng"
          };
        },
        created: function() {
          var t = this;
          window.scrollTo(0, 0),
            y.a
              .get(
                "https://dragonvert.joppa.ng/merchants/".concat(
                  JSON.parse(localStorage.getItem("user")).merchant_id
                )
              )
              .then(function(e) {
                200 === e.status &&
                  (localStorage.setItem("merchant", lr()(e.data)),
                  t.$store.dispatch("updateMerchant", e.data)),
                  t.getAllPromises();
              }),
            0 === this.$store.getters.allCategories.length &&
              this.$store.dispatch("allCategories");
        },
        components: { superAdminNav: hr, products: Nr, manageOrders: Dr },
        computed: {
          annotate: function() {
            return a("b132").money;
          },
          activate: function() {
            (this.editActivated = !0), this.$refs.firstNameInput.focus();
          },
          handleUpdate: function() {
            this.updatingProfile = !0;
          }
        },
        methods: {
          getOrders: function() {
            return y.a.get(
              ""
                .concat(this.BASE_URL, "/orders/?user=")
                .concat(this.$store.state.user.pk)
            );
          },
          getProducts: function() {
            return y.a.get(
              ""
                .concat(this.BASE_URL, "/equipments/?merchant=")
                .concat(JSON.parse(localStorage.getItem("merchant")).data.id)
            );
          },
          getAllPromises: function() {
            var t = this;
            y.a.all([this.getProducts(), this.getOrders()]).then(
              y.a.spread(function(e, a) {
                var r = e.data,
                  o = r.data,
                  s = r.meta;
                (t.productNumber = s.pagination.count),
                  (t.loadedProducts = !0),
                  t.$store.dispatch("allMerchantProducts", o);
                var i = a.data,
                  n = i.data,
                  c = i.meta;
                (t.orderNumber = c.pagination.count),
                  (t.loadedOrders = !0),
                  (t.orders = Object(nr["a"])(n));
              })
            );
          },
          logout: function() {
            var t = this;
            this.$store.dispatch("logout").then(function() {
              t.$router.push("/login");
            });
          }
        },
        destroyed: function() {},
        mounted: function() {
          "merchant" !== this.$store.state.user.account_type &&
            this.$router.push("/diagnozed");
        },
        watch: {
          $route: function(t, e) {
            this.activeTab = t.query.activeTab;
          }
        }
      },
      Tr = Ar,
      Lr = (a("3212"), Object(v["a"])(Tr, sr, ir, !1, null, "490bd3e4", null)),
      jr = Lr.exports,
      Ir = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "pharmacyRegister" } }, [
          t._v("register pharmacy")
        ]);
      },
      Mr = [],
      Ur = { name: "pharmacyRegister" },
      Fr = Ur,
      Rr = Object(v["a"])(Fr, Ir, Mr, !1, null, null, null),
      Vr = Rr.exports,
      zr = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "product-form", attrs: { id: "productForm" } },
          [
            a("main", { staticClass: "product-form-page" }, [
              a("h2", { staticClass: "category-header accounts" }, [
                t._v(
                  "\n                Complete Your Merchant Profile\n            "
                )
              ]),
              a(
                "form",
                {
                  staticClass: "product-form",
                  attrs: { action: "", method: "post" },
                  on: {
                    submit: function(e) {
                      return e.preventDefault(), t.updateProfile(e);
                    }
                  }
                },
                [
                  a("div", [
                    a("label", { attrs: { for: "first_name" } }, [
                      t._v("First Name")
                    ]),
                    a("input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.user.first_name,
                          expression: "user.first_name"
                        }
                      ],
                      class: { error: t.errors.has("first_name") },
                      attrs: {
                        type: "text",
                        placeholder: "Enter first name here",
                        name: "first_name",
                        id: "",
                        autofocus: ""
                      },
                      domProps: { value: t.user.first_name },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            t.$set(t.user, "first_name", e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("first_name"),
                            expression: "errors.has('first_name')"
                          }
                        ],
                        staticClass: "help-block email-help"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v("This field cannot be left empty\n\t\t\t\t\t")
                      ],
                      1
                    )
                  ]),
                  a("div", [
                    a("label", { attrs: { for: "last_name" } }, [
                      t._v("Last Name")
                    ]),
                    a("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.user.last_name,
                          expression: "user.last_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: { error: t.errors.has("last_name") },
                      attrs: {
                        type: "text",
                        placeholder: "Enter last name here",
                        name: "last_name",
                        idv: ""
                      },
                      domProps: { value: t.user.last_name },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            t.$set(t.user, "last_name", e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("last_name"),
                            expression: "errors.has('last_name')"
                          }
                        ],
                        staticClass: "help-block"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v(
                          "This field cannot be left empty and can only contain numbers\n\t\t\t\t\t"
                        )
                      ],
                      1
                    )
                  ]),
                  a("div", [
                    a("label", { attrs: { for: "email" } }, [
                      t._v("Email address")
                    ]),
                    a("input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|email",
                          expression: "'required|email'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.user.email,
                          expression: "user.email"
                        }
                      ],
                      class: { error: t.errors.has("email") },
                      attrs: {
                        type: "email",
                        placeholder: "Enter your email here",
                        name: "email",
                        id: "",
                        disabled: "true"
                      },
                      domProps: { value: t.user.email },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            t.$set(t.user, "email", e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("email"),
                            expression: "errors.has('email')"
                          }
                        ],
                        staticClass: "help-block email-help"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v("This field cannot be left empty\n\t\t\t\t\t")
                      ],
                      1
                    )
                  ]),
                  a("div", [
                    a("label", { attrs: { for: "name" } }, [
                      t._v("Merchant Name")
                    ]),
                    a("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.name,
                          expression: "name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: { error: t.errors.has("name") },
                      attrs: {
                        type: "text",
                        placeholder: "Enter name here",
                        name: "name",
                        id: ""
                      },
                      domProps: { value: t.name },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.name = e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("name"),
                            expression: "errors.has('name')"
                          }
                        ],
                        staticClass: "help-block"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v("This field cannot be empty\n\t\t\t\t\t")
                      ],
                      1
                    )
                  ]),
                  a("div", [
                    a("label", { attrs: { for: "address" } }, [
                      t._v("Location")
                    ]),
                    a("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.location,
                          expression: "location"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: { error: t.errors.has("location") },
                      attrs: {
                        type: "text",
                        placeholder: "Enter name here",
                        name: "location",
                        id: ""
                      },
                      domProps: { value: t.location },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.location = e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("location"),
                            expression: "errors.has('location')"
                          }
                        ],
                        staticClass: "help-block"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v("This field cannot be empty\n\t\t\t\t\t")
                      ],
                      1
                    )
                  ]),
                  a("div", [
                    a("label", { attrs: { for: "description" } }, [
                      t._v("Description")
                    ]),
                    a("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.description,
                          expression: "description"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: { error: t.errors.has("description") },
                      attrs: {
                        name: "description",
                        id: "",
                        cols: "30",
                        minlength: "50",
                        maxlength: "300",
                        rows: "10",
                        placeholder: "Not less than 30 words"
                      },
                      domProps: { value: t.description },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            (t.description = e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("description"),
                            expression: "errors.has('description')"
                          }
                        ],
                        staticClass: "help-block"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v(
                          "\n\t\t\t\t\t\tThis field cannot be left empty and must not contain less than 50 characters (" +
                            t._s(t.description.length) +
                            "/30)\n\t\t\t\t\t"
                        )
                      ],
                      1
                    ),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.description.length >= 100,
                            expression: "description.length >= 100"
                          }
                        ],
                        staticClass: "help-block-max"
                      },
                      [
                        a("icon-living", { attrs: { icon: "text-width" } }),
                        t._v(
                          "\n\t\t\t\t\t\tMaximum length reached (" +
                            t._s(t.description.length) +
                            ")\n\t\t\t\t\t"
                        )
                      ],
                      1
                    )
                  ]),
                  a("div", { staticClass: "button-submit" }, [
                    a(
                      "button",
                      { attrs: { type: "submit", disabled: !t.formPassed } },
                      [t._v("Update")]
                    )
                  ])
                ]
              )
            ])
          ]
        );
      },
      Br = [],
      Yr = {
        name: "productForm",
        data: function() {
          return {
            user: this.$store.state.user,
            name: "",
            email: "",
            description: "",
            location: "",
            formPassed: !0
          };
        },
        created: function() {
          this.email = this.$store.state.user.email;
          var t = this.$store.state,
            e = t.user,
            a = t.token;
          "" !== a &&
            "" !== e.first_name &&
            "merchant" === e.account_type &&
            (this.$router.push("/admin/merchant"),
            console.log("You don't have any more detail to fill"));
        },
        methods: {
          updateProfile: function() {
            var t = this;
            this.formPassed = !1;
            var e = {
              data: {
                type: "Merchant",
                id: this.user.merchant_id,
                attributes: {
                  name: this.name,
                  email: this.email,
                  location: this.location,
                  description: this.description
                }
              }
            };
            y()(
              "https://dragonvert.joppa.ng/merchants/".concat(
                this.user.merchant_id,
                "/"
              ),
              {
                method: "PATCH",
                data: e,
                headers: { "Content-Type": "application/vnd.api+json" }
              }
            )
              .then(function(e) {
                (t.formPassed = !0), t.$router.push("/admin/merchant");
              })
              .catch(function(e) {
                (t.formPassed = !1), console.log(e);
              });
          }
        }
      },
      Hr = Yr,
      Gr = Object(v["a"])(Hr, zr, Br, !1, null, null, null),
      Jr = Gr.exports,
      Qr = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { attrs: { id: "edit" } },
          [
            a("productForm", {
              attrs: { isEditing: "true", model: t.model },
              on: { "save-product": t.updateProduct }
            })
          ],
          1
        );
      },
      Wr = [],
      Zr = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "product-form", attrs: { id: "productForm" } },
          [
            a("main", { staticClass: "product-form-page" }, [
              a("h2", { staticClass: "category-header accounts" }, [
                t._v(t._s(t.isEditing ? "Edit Product" : "Post Product"))
              ]),
              a(
                "form",
                {
                  staticClass: "product-form",
                  attrs: { action: "", method: "post" },
                  on: {
                    submit: function(e) {
                      return e.preventDefault(), t.saveProduct(e);
                    }
                  }
                },
                [
                  a("div", [
                    a("label", { attrs: { for: "price" } }, [
                      t._v("Product Name")
                    ]),
                    a("input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.product.name,
                          expression: "product.name"
                        }
                      ],
                      class: { error: t.errors.has("name") },
                      attrs: {
                        type: "text",
                        placeholder: "Enter product name here",
                        name: "name",
                        id: "",
                        autofocus: ""
                      },
                      domProps: { value: t.product.name },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            t.$set(t.product, "name", e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("name"),
                            expression: "errors.has('name')"
                          }
                        ],
                        staticClass: "help-block email-help"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v("This field cannot be left empty\n\t\t\t\t")
                      ],
                      1
                    )
                  ]),
                  a("div", [
                    a("label", { attrs: { for: "price" } }, [t._v("Price")]),
                    a("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.product.price,
                          expression: "product.price"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: { error: t.errors.has("price") },
                      attrs: {
                        type: "number",
                        placeholder: "Enter product price here",
                        min: "0",
                        name: "price",
                        id: ""
                      },
                      domProps: { value: t.product.price },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            t.$set(t.product, "price", e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("price"),
                            expression: "errors.has('price')"
                          }
                        ],
                        staticClass: "help-block"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v(
                          "This field cannot be left empty and can only contain numbers\n\t\t\t\t"
                        )
                      ],
                      1
                    )
                  ]),
                  a("div", [
                    a("label", { attrs: { for: "image" } }, [t._v("Image")]),
                    a("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.product.image,
                          expression: "product.image"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|url",
                          expression: "'required|url'"
                        }
                      ],
                      class: { error: t.errors.has("image") },
                      attrs: {
                        type: "url",
                        placeholder: "Image",
                        name: "image",
                        id: ""
                      },
                      domProps: { value: t.product.image },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            t.$set(t.product, "image", e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("image"),
                            expression: "errors.has('image')"
                          }
                        ],
                        staticClass: "help-block"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v("This field cannot be left empty\n\t\t\t\t")
                      ],
                      1
                    )
                  ]),
                  a("div", [
                    a("label", { attrs: { for: "quantity" } }, [
                      t._v("Quantity Available")
                    ]),
                    a("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.product.quantity,
                          expression: "product.quantity"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: { error: t.errors.has("quantity") },
                      attrs: {
                        type: "number",
                        placeholder: "Enter product price here",
                        min: "0",
                        name: "quantity",
                        id: ""
                      },
                      domProps: { value: t.product.quantity },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            t.$set(t.product, "quantity", e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("quantity"),
                            expression: "errors.has('quantity')"
                          }
                        ],
                        staticClass: "help-block"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v("This field cannot be empty\n\t\t\t\t")
                      ],
                      1
                    )
                  ]),
                  a("div", [
                    a("label", { attrs: { for: "description" } }, [
                      t._v("Description")
                    ]),
                    a("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.product.description,
                          expression: "product.description"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: { error: t.errors.has("description") },
                      attrs: {
                        name: "description",
                        id: "",
                        cols: "30",
                        minlength: "50",
                        maxlength: "300",
                        rows: "10",
                        placeholder: "Not less than 30 words"
                      },
                      domProps: { value: t.product.description },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            t.$set(t.product, "description", e.target.value);
                        }
                      }
                    }),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.errors.has("description"),
                            expression: "errors.has('description')"
                          }
                        ],
                        staticClass: "help-block"
                      },
                      [
                        a("icon-living", {
                          attrs: { icon: "exclamation-triangle" }
                        }),
                        t._v(
                          "\n\t\t\t\t\tThis field cannot be left empty and must not contain less than 50 characters (" +
                            t._s(t.product.description.length) +
                            "/30)\n\t\t\t\t"
                        )
                      ],
                      1
                    ),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.product.description.length >= 300,
                            expression: "product.description.length >= 300"
                          }
                        ],
                        staticClass: "help-block-max"
                      },
                      [
                        a("icon-living", { attrs: { icon: "text-width" } }),
                        t._v(
                          "\n\t\t\t\t\tMaximum length reached (" +
                            t._s(t.product.description.length) +
                            ")\n\t\t\t\t"
                        )
                      ],
                      1
                    )
                  ]),
                  a("div", { staticClass: "button-submit" }, [
                    t.isEditing
                      ? a(
                          "button",
                          {
                            attrs: { type: "submit", disabled: !t.formPassed }
                          },
                          [t._v("Update")]
                        )
                      : a(
                          "button",
                          {
                            attrs: { type: "submit", disabled: !t.formPassed }
                          },
                          [t._v("Submit")]
                        )
                  ])
                ]
              )
            ])
          ]
        );
      },
      Kr = [],
      Xr = {
        name: "productForm",
        props: ["isEditing", "model"],
        data: function() {
          return {
            product: {
              name: "",
              price: "",
              description: "",
              image: "",
              quantity: ""
            },
            formPassed: !0
          };
        },
        methods: {
          saveProduct: function() {
            this.$emit("save-product", this.model);
          }
        }
      },
      to = Xr,
      eo = Object(v["a"])(to, Zr, Kr, !1, null, null, null),
      ao = eo.exports,
      ro = {
        name: "edit",
        data: function() {
          return { model: {} };
        },
        components: { productForm: ao },
        methods: {
          updateProduct: function(t) {
            console.log("Product Updated");
          }
        }
      },
      oo = ro,
      so = Object(v["a"])(oo, Qr, Wr, !1, null, null, null),
      io = so.exports,
      no = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { attrs: { id: "post" } },
          [
            a("productForm", {
              attrs: { model: t.model },
              on: { "save-product": t.addProduct }
            })
          ],
          1
        );
      },
      co = [],
      lo = {
        name: "edit",
        components: { productForm: ao },
        data: function() {
          return { model: {} };
        },
        methods: {
          addProduct: function(t) {
            console.log("Product Added");
          }
        }
      },
      uo = lo,
      mo = Object(v["a"])(uo, no, co, !1, null, null, null),
      po = mo.exports,
      vo = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          [
            a("div", { staticClass: "contact", attrs: { id: "contact" } }, [
              a("main", { staticClass: "contact-form-body" }, [
                a(
                  "form",
                  { staticClass: "contact-form", attrs: { action: "" } },
                  [
                    a("h2", [t._v("Contact Us")]),
                    a("div", { staticClass: "grid-wrapper" }, [
                      a("div", { staticClass: "grid-row" }, [
                        a("div", { staticClass: "col-xsmall-12" }, [
                          a("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.fullName,
                                expression: "fullName"
                              }
                            ],
                            class: { error: t.errors.has("fName") },
                            attrs: {
                              type: "text",
                              name: "fName",
                              id: "",
                              placeholder: "Enter your full name"
                            },
                            domProps: { value: t.fullName },
                            on: {
                              input: function(e) {
                                e.target.composing ||
                                  (t.fullName = e.target.value);
                              }
                            }
                          }),
                          a(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.errors.has("fName"),
                                  expression: "errors.has('fName')"
                                }
                              ],
                              staticClass: "help-block email-help"
                            },
                            [
                              a("icon-living", {
                                attrs: { icon: "exclamation-triangle" }
                              }),
                              t._v("Field cannot be left empty\n\t\t\t\t\t\t\t")
                            ],
                            1
                          )
                        ]),
                        a(
                          "div",
                          {
                            staticClass:
                              "contact-split col-xsmall-12 col-medium-6"
                          },
                          [
                            a("div", [
                              a("input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|email",
                                    expression: "'required|email'"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.email,
                                    expression: "email"
                                  }
                                ],
                                class: { error: t.errors.has("email") },
                                attrs: {
                                  type: "email",
                                  name: "email",
                                  id: "",
                                  placeholder: "Enter your email address"
                                },
                                domProps: { value: t.email },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      (t.email = e.target.value);
                                  }
                                }
                              })
                            ])
                          ]
                        ),
                        a(
                          "div",
                          { staticClass: "col-xsmall-12 col-medium-6" },
                          [
                            a("div", [
                              a("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.subject,
                                    expression: "subject"
                                  }
                                ],
                                class: { error: t.errors.has("subject") },
                                attrs: {
                                  type: "text",
                                  name: "subject",
                                  id: "",
                                  placeholder: "Enter message subject"
                                },
                                domProps: { value: t.subject },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      (t.subject = e.target.value);
                                  }
                                }
                              })
                            ])
                          ]
                        ),
                        a(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.errors.has("email"),
                                expression: "errors.has('email')"
                              }
                            ],
                            staticClass: "help-block exception"
                          },
                          [
                            a("icon-living", {
                              attrs: { icon: "exclamation-triangle" }
                            }),
                            t._v("Invalid email format\n\t\t\t\t\t\t")
                          ],
                          1
                        ),
                        a("div", { staticClass: "col-xsmall-12" }, [
                          a("div", [
                            a("textarea", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                },
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.message,
                                  expression: "message"
                                }
                              ],
                              class: { error: t.errors.has("message") },
                              attrs: {
                                name: "message",
                                id: "",
                                cols: "30",
                                rows: "5",
                                placeholder: "Enter your message here"
                              },
                              domProps: { value: t.message },
                              on: {
                                input: function(e) {
                                  e.target.composing ||
                                    (t.message = e.target.value);
                                }
                              }
                            }),
                            a(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.errors.has("message"),
                                    expression: "errors.has('message')"
                                  }
                                ],
                                staticClass: "help-block exception"
                              },
                              [
                                a("icon-living", {
                                  attrs: { icon: "exclamation-triangle" }
                                }),
                                t._v(
                                  "Field cannot be left empty\n\t\t\t\t\t\t\t\t"
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      ]),
                      t._m(0)
                    ])
                  ]
                )
              ])
            ]),
            a("Footer")
          ],
          1
        );
      },
      ho = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "button-submit" }, [
            a("button", { attrs: { type: "submit", disabled: "" } }, [
              t._v("Login")
            ])
          ]);
        }
      ],
      go = {
        name: "contact",
        title: "DragonVert - Contact Us",
        components: { Footer: it },
        created: function() {
          window.scrollTo(0, 0);
        },
        data: function() {
          return { fullName: "", email: "", message: "", subject: "" };
        }
      },
      fo = go,
      bo = Object(v["a"])(fo, vo, ho, !1, null, null, null),
      _o = bo.exports,
      yo = a("5176"),
      Co = a.n(yo),
      wo = a("2f62"),
      xo = {
        getUser: function(t) {
          return t.user;
        },
        isLoggedIn: function(t) {
          return !!t.token;
        },
        authStatus: function(t) {
          return t.userStatus;
        },
        authError: function(t) {
          return t.authError;
        }
      },
      Po = {
        allProducts: function(t, e) {
          return t.products;
        },
        allMerchantProducts: function(t, e) {
          return t.merchantProducts;
        },
        productById: function(t, e) {
          return function(a) {
            return e.allProducts.length > 0
              ? e.allProducts.filter(function(t) {
                  return t.id === a;
                })
              : t.product;
          };
        }
      },
      ko = {
        getCategory: function(t, e) {
          return t.category;
        }
      },
      No = {
        allCategories: function(t, e) {
          return t.categories;
        }
      },
      Oo = {
        allManufacturers: function(t) {
          return t.manufacturers;
        }
      },
      $o = {
        cart: function(t) {
          return t.cart;
        },
        cartLoading: function(t) {
          return t.cartLoading;
        }
      },
      So = {
        next: function(t) {
          return t.next;
        }
      },
      Eo = (a("20d6"), a("cebc")),
      qo = ((ye = {}),
      Object(za["a"])(ye, le, function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(ye, ue, function(t, e) {
        (t.showLoader = !1), (t.isLoggedIn = !0), (t.user = e);
      }),
      Object(za["a"])(ye, de, function(t) {
        t.isLoggedIn = !1;
      }),
      Object(za["a"])(ye, "auth_request", function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(ye, "auth_success", function(t, e) {
        (t.authErrors = []),
          (t.token = e),
          (t.showLoader = !1),
          (t.userStatus = "Authentication Successful");
      }),
      Object(za["a"])(ye, "auth_error", function(t, e) {
        (t.authError = e), (t.userStatus = "Authentication Error");
      }),
      Object(za["a"])(ye, "auth_errors", function(t, e) {
        (t.authErrors = e), (t.userStatus = "Authentication Error");
      }),
      Object(za["a"])(ye, "logout", function(t) {
        localStorage.removeItem("user"),
          localStorage.removeItem("token"),
          (t.showLoader = !1),
          (t.token = ""),
          (t.user = {});
      }),
      Object(za["a"])(ye, he, function(t, e) {
        t.user = e;
      }),
      Object(za["a"])(ye, ge, function(t, e) {
        t.merchant = e;
      }),
      Object(za["a"])(ye, fe, function(t, e) {
        t.merchantProducts = e;
      }),
      ye),
      Do = ((Ce = {}),
      Object(za["a"])(Ce, Bt, function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(Ce, Yt, function(t, e) {
        (t.showLoader = !1), (t.products = e);
      }),
      Object(za["a"])(Ce, Ht, function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(Ce, Gt, function(t, e) {
        (t.showLoader = !1), (t.product = e);
      }),
      Object(za["a"])(Ce, Jt, function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(Ce, Qt, function(t, e) {
        (t.showLoader = !1), t.products.push(e);
      }),
      Object(za["a"])(Ce, se, function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(Ce, ie, function(t, e) {
        (t.showLoader = !1), (t.categories = e);
      }),
      Object(za["a"])(Ce, Wt, function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(Ce, Zt, function(t, e) {
        (t.showLoader = !1),
          (t.products = t.products.map(function(a) {
            if (a.id === e.id)
              return (
                (e = Object(Eo["a"])({}, e, {
                  manufacturer: t.pharmacies.filter(function(t) {
                    return t.id === e.manufacturer[0];
                  })
                })),
                e
              );
          }));
      }),
      Object(za["a"])(Ce, Kt, function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(Ce, Xt, function(t, e) {
        t.showLoader = !1;
        var a = t.products.findIndex(function(t) {
          return t.id === e;
        });
        t.products.splice(a, 1);
      }),
      Ce),
      Ao = ((we = {}),
      Object(za["a"])(we, te, function(t, e) {
        if (t.cart.indexOf(e) > 0) {
          var a = t.cart.indexOf(e);
          t.cart[a].quantityToPurchase += 1;
        } else (e.quantityToPurchase = 1), t.cart.push(e);
      }),
      Object(za["a"])(we, ee, function(t, e) {
        var a = t.cart.findIndex(function(t) {
          return t.id === e;
        });
        t.cart.splice(a, 1);
      }),
      Object(za["a"])(we, ae, function(t, e) {
        (t.cart = e), (t.cartLoading = !1);
      }),
      we),
      To = ((xe = {}),
      Object(za["a"])(xe, re, function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(xe, oe, function(t, e) {
        (t.showLoader = !1), (t.pharmacies = e);
      }),
      xe),
      Lo = ((Pe = {}),
      Object(za["a"])(Pe, ne, function(t) {
        t.showLoader = !0;
      }),
      Object(za["a"])(Pe, ce, function(t, e) {
        (t.showLoader = !1),
          (t.category =
            void 0 === e ? "No product available in this category yet" : e);
      }),
      Pe),
      jo = Object(za["a"])({}, ve, function(t, e) {
        t.next = e;
      }),
      Io = ((ke = {}),
      Object(za["a"])(ke, me, function(t) {
        t.loadedDashComponent = !1;
      }),
      Object(za["a"])(ke, pe, function(t) {
        t.loadedDashComponent = !0;
      }),
      a("db0c")),
      Mo = a.n(Io),
      Uo = "https://dragonvert.joppa.ng",
      Fo = {
        login: function(t, e) {
          var a = t.commit;
          return new i.a(function(t, r) {
            a("auth_request"),
              y()("".concat(Uo, "/auth/login/"), {
                data: e,
                method: "POST",
                headers: { "Content-Type": "application/vnd.api+json" }
              })
                .then(function(e) {
                  if ("error" === e.data.statusText) {
                    a("auth_error", e.data.statusText);
                    var o = Object(nr["a"])(Mo()(e.data.data));
                    a("auth_errors", o), r(e.data.statusText);
                  } else {
                    var s = e.data,
                      i = s.user,
                      n = s.token;
                    localStorage.setItem("user", lr()(i)),
                      localStorage.setItem("token", n),
                      (y.a.defaults.headers.common[
                        "Authorization"
                      ] = "Bearer ".concat(n)),
                      a("auth_success", n),
                      a(ue, i),
                      t(e);
                  }
                })
                .catch(function(t) {
                  a("auth_error", t),
                    console.log(t),
                    localStorage.removeItem("token"),
                    r(t);
                });
          });
        },
        register: function(t, e) {
          var a = t.commit;
          return new i.a(function(t, r) {
            a("auth_request"),
              y()("".concat(Uo, "/auth/registration/"), {
                data: e,
                method: "POST",
                headers: { "Content-Type": "application/vnd.api+json" }
              })
                .then(function(e) {
                  var r = e.data,
                    o = r.user,
                    s = r.token;
                  localStorage.removeItem("token"),
                    localStorage.setItem("token", s),
                    localStorage.removeItem("user"),
                    localStorage.setItem("user", lr()(o)),
                    (y.a.defaults.headers.common[
                      "Authorization"
                    ] = "Bearer ".concat(s)),
                    a("auth_success", e.data),
                    t(e);
                })
                .catch(function(t) {
                  a("auth_error", t), localStorage.removeItem("token"), r(t);
                });
          });
        },
        logout: function(t) {
          var e = t.commit;
          return new i.a(function(t, a) {
            e("logout"),
              y()("https://dragonvert.joppa.ng/auth/logout/", {
                method: "POST",
                headers: { "Content-Type": "application/vnd.api+json" }
              })
                .then(function(e) {
                  localStorage.removeItem("token"),
                    localStorage.removeItem("user"),
                    localStorage.removeItem("merchant"),
                    delete y.a.defaults.headers.common["Authorization"],
                    t();
                })
                .catch(function(t) {
                  return a();
                });
          });
        },
        updateUser: function(t, e) {
          var a = t.commit;
          return new i.a(function(t, r) {
            a(he, e), t();
          });
        },
        updateMerchant: function(t, e) {
          var a = t.commit;
          return new i.a(function(t, r) {
            try {
              a(ge, e), t();
            } catch (o) {
              console.log(o);
            }
          });
        }
      },
      Ro = {
        allProducts: function(t) {
          var e = t.commit;
          e(Bt),
            y.a.get("".concat(Uo, "/equipments")).then(function(t) {
              console.log(t), e(Yt, t.data);
            });
        },
        allMerchantProducts: function(t, e) {
          var a = t.commit;
          a(fe, e);
        },
        updateMerchantProducts: function(t, e) {
          var a = t.commit;
          y.a
            .get("https://dragonvert.joppa.ng/equipments/?merchant=".concat(e))
            .then(function(t) {
              console.log(t), a(fe, t.data.data);
            });
        },
        productById: function(t, e) {
          var a = t.commit;
          a(Ht),
            y.a.get("".concat(Uo, "/products/").concat(e)).then(function(t) {
              console.log(t);
            });
        },
        updateCart: function(t) {
          var e = t.commit;
          y.a
            .get("https://dragonvert.joppa.ng/cart/")
            .then(function(t) {
              200 === t.status && e(ae, t.data.data);
            })
            .catch(function(t) {
              return console.log(t);
            });
        }
      },
      Vo = {},
      zo = {
        allCategories: function(t) {
          var e = t.commit;
          e(se),
            y.a.get("".concat(Uo, "/categories")).then(function(t) {
              e(ie, t.data.data);
            });
        },
        category: function(t, e) {
          var a = t.commit;
          a(ne),
            y.a
              .get("".concat(Uo, "/equipments/?main_category=").concat(e))
              .then(function(t) {
                console.log(t), a(ce, t.data.data);
              });
        }
      },
      Bo = {};
    n["a"].use(wo["a"]);
    var Yo = new wo["a"].Store({
      strict: !0,
      state: {
        cart: [],
        showLoader: !1,
        product: {},
        category: [],
        categories: [],
        manufacturers: [],
        token: localStorage.getItem("token") || "",
        user: JSON.parse(localStorage.getItem("user")) || {},
        merchant: JSON.parse(localStorage.getItem("merchant")) || {},
        isLoggedIn: !1,
        authError: "",
        authErrors: [],
        merchantProducts: [],
        cartLoading: !0
      },
      actions: Co()({}, Ro, Bo, zo, Vo, Fo),
      getters: Co()({}, Po, Oo, No, ko, xo, $o, So),
      mutations: Co()({}, Ao, To, Do, Lo, qo, jo)
    });
    n["a"].use(L["a"]);
    var Ho = new L["a"]({
      mode: "history",
      base: "/",
      routes: [
        { path: "/", name: "home", component: ut },
        { path: "/loader", name: "loader", component: N },
        { path: "/about", name: "about", component: gt },
        { path: "/contact", name: "contact", component: _o },
        { path: "/equipments/:id", name: "productDetails", component: Se },
        { path: "/equipments", name: "products", component: va },
        { path: "/cart", name: "cart", component: xt },
        { path: "/categories", name: "Categories", component: Le },
        { path: "/categories/:category", name: "Category", component: Rt },
        { path: "/checkout", name: "checkout", component: St },
        { path: "/product", component: Je },
        { path: "/login", name: "login", component: wa },
        { path: "/register", name: "register", component: $a },
        { path: "/pharmacy/register", name: "pharmacyRegister", component: Vr },
        { path: "/forgot-password", name: "forgotPassword", component: Ta },
        { path: "/search/:query", name: "search", component: ta },
        { path: "/diagnozed", name: "unauthorized", component: ia },
        {
          path: "/admin",
          name: "admin",
          component: Fa,
          children: [
            { path: "user", component: jr },
            { path: "merchant", component: jr },
            { path: "complete-details", component: Jr },
            { path: "edit/:id", component: io },
            { path: "post", component: po }
          ],
          meta: { requiresAuth: !0 }
        },
        { path: "*", component: Re }
      ]
    });
    Ho.beforeEach(function(t, e, a) {
      t.matched.some(function(t) {
        return t.meta.requiresAuth;
      })
        ? Yo.getters.isLoggedIn
          ? a()
          : a({ path: "/login", query: { redirectTo: t.fullPath } })
        : a();
    });
    var Go = Ho,
      Jo = a("7bb1"),
      Qo = a("2103"),
      Wo = a.n(Qo),
      Zo = a("ecee"),
      Ko = a("c074"),
      Xo = a("ad3d"),
      ts = a("f2d1");
    function es(t) {
      var e = t.$options.title;
      if (e) return "function" === typeof e ? e.call(t) : e;
    }
    var as = {
      created: function() {
        var t = es(this);
        t && (document.title = t);
      }
    };
    (y.a.defaults.headers.post["Content-Type"] = "application/vnd.api+json"),
      n["a"].mixin(as),
      a("ed18").config(),
      (n["a"].prototype.$http = y.a);
    var rs = localStorage.getItem("token");
    y.a.interceptors.response.use(
      function(t) {
        return t;
      },
      function(t) {
        return 401 === t.request.status && Go.push("/login"), i.a.reject(t);
      }
    ),
      rs &&
        (y.a.defaults.headers.common["Authorization"] = "Bearer ".concat(rs)),
      Zo["c"].add(
        ts["b"],
        ts["c"],
        ts["a"],
        Ko["v"],
        Ko["H"],
        Ko["E"],
        Ko["i"],
        Ko["B"],
        Ko["r"],
        Ko["g"],
        Ko["F"],
        Ko["I"],
        Ko["e"],
        Ko["A"],
        Ko["G"],
        Ko["b"],
        Ko["l"],
        Ko["x"],
        Ko["J"],
        Ko["w"],
        Ko["a"],
        Ko["r"],
        Ko["o"],
        Ko["n"],
        Ko["p"],
        Ko["u"],
        Ko["j"],
        Ko["k"],
        Ko["c"],
        Ko["d"],
        Ko["f"],
        Ko["J"],
        Ko["m"],
        Ko["a"],
        Ko["D"],
        Ko["C"],
        Ko["q"],
        Ko["y"],
        Ko["z"],
        Ko["t"],
        Ko["h"],
        Ko["s"]
      ),
      n["a"].use(Jo["a"]),
      n["a"].use(Wo.a),
      n["a"].use(_e.a),
      n["a"].component("icon-living", Xo["a"]),
      (n["a"].config.productionTip = !1),
      new n["a"]({
        router: Go,
        store: Yo,
        render: function(t) {
          return t(T);
        }
      }).$mount("#app");
  },
  "5d58": function(t, e, a) {
    "use strict";
    var r = a("0bb0"),
      o = a.n(r);
    o.a;
  },
  6323: function(t, e, a) {
    "use strict";
    var r = a("79b9"),
      o = a.n(r);
    o.a;
  },
  "64a9": function(t, e, a) {},
  "6f2d": function(t, e, a) {
    "use strict";
    var r = a("ed1e"),
      o = a.n(r);
    o.a;
  },
  "746e": function(t, e, a) {
    "use strict";
    var r = a("899d"),
      o = a.n(r);
    o.a;
  },
  "79b9": function(t, e, a) {},
  "824e": function(t, e, a) {},
  "899d": function(t, e, a) {},
  "8ae9": function(t, e, a) {
    "use strict";
    var r = a("4c40"),
      o = a.n(r);
    o.a;
  },
  "9bdb": function(t, e, a) {},
  "9c48": function(t, e, a) {
    "use strict";
    var r = a("1b08"),
      o = a.n(r);
    o.a;
  },
  a01b: function(t, e, a) {
    "use strict";
    var r = a("824e"),
      o = a.n(r);
    o.a;
  },
  a64b: function(t, e, a) {
    "use strict";
    var r = a("abf5"),
      o = a.n(r);
    o.a;
  },
  abf5: function(t, e, a) {},
  afca: function(t, e, a) {
    "use strict";
    var r = a("9bdb"),
      o = a.n(r);
    o.a;
  },
  b132: function(t, e, a) {
    "use strict";
    a.r(e),
      a.d(e, "money", function() {
        return r;
      });
    a("28a5");
    var r = function(t) {
      for (var e in ("string" !== typeof t && (t = String(t)),
      (t = t.split("").reverse()),
      t))
        (e - 3) % 3 === 0 && 0 != e && (t[e] = "".concat(t[e], ","));
      var a = t.reverse().join("");
      return a;
    };
  },
  b80f: function(t, e, a) {
    "use strict";
    var r = a("2ea0"),
      o = a.n(r);
    o.a;
  },
  bb10: function(t, e, a) {
    t.exports = a.p + "img/Rolling-1s-200px.14c167cf.gif";
  },
  c165: function(t, e, a) {
    t.exports = a.p + "img/rolling-1s-200px.9d883999.gif";
  },
  ca83: function(t, e, a) {},
  dcc3: function(t, e, a) {
    "use strict";
    var r = a("32a6"),
      o = a.n(r);
    o.a;
  },
  ed1e: function(t, e, a) {},
  f4c8: function(t, e, a) {},
  ffe7: function(t, e, a) {}
});
//# sourceMappingURL=app.4c629da0.js.map
