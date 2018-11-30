!function (e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var o = t[a] = {i: a, l: !1, exports: {}};
        return e[a].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(a, o, function (t) {
            return e[t]
        }.bind(null, o));
        return a
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), e.exports = n(11)
}, function (e, t, n) {
    var a;

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    !function e(t, n, o) {
        function i(u, l) {
            if (!n[u]) {
                if (!t[u]) {
                    if (!l && ("function" == typeof a && a)) return a(u, !0);
                    if (r) return r(u, !0);
                    var c = new Error("Cannot find module '" + u + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var p = n[u] = {exports: {}};
                t[u][0].call(p.exports, function (e) {
                    var n = t[u][1][e];
                    return i(n || e)
                }, p, p.exports, e, t, n, o)
            }
            return n[u].exports
        }

        for (var r = "function" == typeof a && a, u = 0; u < o.length; u++) i(o[u]);
        return i
    }({
        1: [function (e, t, n) {
            "use strict";
            var a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                return function (t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }();

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            !function (e, t) {
                var n = e || {} && void 0;
                n.iFDev = function () {
                    return n
                }(), "undefined" !== iFDev && iFDev === e && (iFDev.Interactive = {
                    appName: "Interactive Frond End Static Template",
                    version: "1.0",
                    location: e.location.hash = "route=home",
                    Core: function () {
                        n.get = function (t) {
                            return {
                                appCurrentDocFileName: function () {
                                    return function () {
                                        iFDev.CurrentPathDocument = function () {
                                            function t() {
                                                i(this, t)
                                            }

                                            return a(t, [{
                                                key: "getCurrentPathDoc", value: function () {
                                                    var t = {locationPath: e.location.pathname};
                                                    return this.appDocument = t.locationPath, this.appDocument.substring(this.appDocument.lastIndexOf("/") + 1)
                                                }
                                            }]), t
                                        }(), iFDev.appCurrentPathDocument = new CurrentPathDocument, iFDev.getAppCurrentDocumentName = appCurrentPathDocument.getCurrentPathDoc()
                                    }()
                                }, appRoutingPage: function () {
                                    return function () {
                                        return iFDev.RoutingPage = function () {
                                            function e() {
                                                i(this, e)
                                            }

                                            return a(e, [{
                                                key: "getRoutingPage", value: function () {
                                                    iFDev.appRouting = {
                                                        getRouting: function (e, t) {
                                                            return getAppCurrentDocumentName.replace("getAppCurrentDocumentName", "/").split("/")[0].slice(0, -5), getCheckedPageName(e) ? iFDev.location.hash = "rout=" + t : ""
                                                        }
                                                    }
                                                }
                                            }]), e
                                        }(), iFDev.appGetRoutingPage = new RoutingPage, appGetRoutingPage.getRoutingPage(), t.title = document.title = "", t.appRoute = function (e) {
                                            var n = document.querySelectorAll(".item-route-active");
                                            if (t.dataHref = e.target.getAttribute("href"), document.title = dataHref, iFDev.location.hash = "route=" + dataHref, e.target.className = "navigation__item item-route-active", [].forEach.call(n, function (e) {
                                                e.classList.remove("item-route-active")
                                            }), 2 === e.target.parentNode.parentNode.parentNode.children.length) return e.target.parentNode.parentNode.parentNode.children[1].setAttribute("data-app-page", dataHref)
                                        }, title
                                    }()
                                }, appFunction: function () {
                                    return function () {
                                        iFDev.getCheckedPageName = function (e) {
                                            return "" === getAppCurrentDocumentName || getAppCurrentDocumentName === e + ".html"
                                        }, t.Routing = function (e, t) {
                                            return new appRouting.getRouting(e, t)
                                        }, t.getSelectTemplate = function (e) {
                                            return document.querySelector('[ data-app-page="' + e + '" ]') || document.querySelector('[ class="' + e + '" ]') || document.querySelector('[ id="' + e + '" ]') || document.querySelector("[" + e + "]") || document.querySelector(e)
                                        }, t.getSelectorTag__ = function (e, t) {
                                            return document.querySelector(e).innerHTML = t
                                        }, t.appLoadTemplate = {
                                            Part__: function (e) {
                                                return template.part("view/part/" + e + ".template.es6")
                                            }, Page__: function (e) {
                                                return template.part("view/page/" + e + ".template.es6")
                                            }, Layout__: function (e) {
                                                return template.part("view/layout/" + e + ".template.es6")
                                            }
                                        }
                                    }()
                                }, appIncludeTemplate: function () {
                                    return function () {
                                        t.template = {
                                            part: function (e) {
                                                var t = document.getElementsByTagName("head")[0], n = void 0;
                                                (n = document.createElement("script")).type = "text/javascript", n.src = e, n.async = !1, t.appendChild(n).remove()
                                            }
                                        }
                                    }()
                                }, appDomParse: function () {
                                    return function () {
                                        t.Ifest = function () {
                                            iFDev.Html = function () {
                                                function e() {
                                                    i(this, e)
                                                }

                                                return a(e, [{
                                                    key: "outputDOM", value: function (e) {
                                                        var t, n = this, a = new DOMParser;
                                                        if ("undefined" === e) for (n.customElement in e) n.customElement = n.customElement + "\n"; else for (n.customElement in e) n.customElement = e + "\n";
                                                        return t = a.parseFromString(n.customElement, "text/html"), n.outputHTML = t.documentElement.outerHTML
                                                    }
                                                }]), e
                                            }(), t.MODEL_ = new Html;
                                            var e = MODEL_.outputDOM("");
                                            return function (t) {
                                                this.DOM = "undefined" === t && e || MODEL_.outputDOM(t)
                                            }
                                        }()
                                    }()
                                }, appLoadingLibrary: function () {
                                    return function () {
                                        t.Loader = function () {
                                        }, Loader.prototype = {
                                            require: function (e, t) {
                                                this.loadCount = 0, this.totalRequired = e.length, this.callback = t;
                                                for (var n = 0; n < e.length; n++) this.writeScript(e[n])
                                            }, loaded: function (e) {
                                                this.loadCount++, this.loadCount === this.totalRequired && o(this.callback) === function () {
                                                } && this.callback.call()
                                            }, writeScript: function (e) {
                                                var t = this, n = document.body, a = document.createElement("script");
                                                a.async = !1, a.src = "assets/js/" + e + ".es6", a.addEventListener("load", function (e) {
                                                    return t.loaded(e)
                                                }, !1), n.appendChild(a)
                                            }
                                        }, t.loadJS = new Loader
                                    }()
                                }
                            }
                        }(n)
                    }
                }, new Interactive.Core, n.__IFEST_GLOBAL_DEV_TOOLS_HOOKE__ = Interactive, n.exportModule = {
                    Output: function () {
                        get.appCurrentDocFileName(), get.appRoutingPage(), get.appFunction(), get.appIncludeTemplate(), get.appDomParse(), get.appLoadingLibrary()
                    }
                })
            }(window || iFDev || ("undefined" == typeof iF ? "undefined" : o(iF)) || {} && "undefined")
        }, {}]
    }, {}, [1])
}, function (e, t) {
    (e => ((e = {
        getModule: () => exportModule.Output(), getHead: () => {
            title = "home"
        }
    }).getModule(), e.getHead(), e))(iFDev)
}, function (e, t) {
    (e => {
        e = new Ifest(`\n\n        <title>${title}</title>\n        \n        <style type="text/css">\n            * {\n                margin: 0;\n                padding: 0;\n            }\n            .navigation__item {\n                width: auto;\n                display: inline-block;\n            }\n            .item-route-active {\n                color: red;\n            }\n            .img {\n                height: auto;\n                width: 100%;\n                display: block;\n            }\n            #page {\n                width: 100%;\n                display: table;\n            }\n        </style>\n        \x3c!--[if lt IE 9]>\n            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"><\/script>\n        <![endif]--\x3e\n        \n    `);
        const t = getSelectTemplate("head"), n = e.DOM;
        t.innerHTML = n
    })(iFDev)
}, function (e, t) {
    (e => {
        iFDev.get_template_header = (() => {
            return {html: new Ifest(' \n            <nav class="navigation" role="navigation" style="display: inline-block; width: auto; margin-bottom: 30px;">\n                <a class="navigation__item item-route-active" href="home" onclick="appRoute( event )">Home</a>\n                <a class="navigation__item" href="about" onclick="appRoute( event )">About</a>\n                <a class="navigation__item" href="contact" onclick="appRoute( event )">Contact</a>\n            </nav>\n            \n            <h1 style="text-align: center; width: 100%; padding-bottom: 30px; margin-bottom: 30px; border-bottom: 1px solid dimgrey;">App test...</h1>\n        ').DOM}.html
        })
    })(iFDev)
}, function (e, t) {
    (e => {
        iFDev.get_template_home = (() => {
            return {html: new Ifest('\n            <h2 style="text-align: center; text-transform: uppercase; font-weight: 700;">Home</h2>\n            <p style="padding-top: 30px;">\n                <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n                has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley \n                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also\n                 the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s \n                 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop \n                 publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n            </p>\n            <img class="img" src="https://swgfl.org.uk/Uploads/db/db7df2f2-53d3-4560-ba2b-d73d6e741f92_672_448.jpg" alt="" style="width: 25%">\n        ').DOM}.html
        })
    })(iFDev)
}, function (e, t) {
    (e => {
        iFDev.get_template_about = (() => {
            return {html: new Ifest(' \n            <h2 style="text-align: center; text-transform: uppercase; font-weight: 700;">About</h2>\n            <p style="padding-top: 30px;">\n                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration \n                in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are \n                going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the \n                middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, \n                making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined \n                with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated \n                Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.                \n            </p>\n            <img class="img" src="https://cdn.cnn.com/cnnnext/dam/assets/161201115958-68-year-in-pictures-2016-restricted-super-169.jpg" alt="" style="width: 25%; float: right;">\n        ').DOM}.html
        })
    })(iFDev)
}, function (e, t) {
    (e => {
        iFDev.get_template_contact = (() => {
            return {html: new Ifest(' \n            <h2 style="text-align: center; text-transform: uppercase; font-weight: 700;">Contact</h2>\n            <hr style="margin: 0 auto; width: auto; display: inline-block;">\n            <ul style="padding-top: 30px; width: auto; display: inline-block;">\n                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n                <hr>\n                <li>Mauris a libero quis justo pharetra eleifend et quis felis.</li>\n                <hr>\n                <li>Aliquam finibus enim et venenatis facilisis.</li>\n                <hr>\n                <li>Aenean nec turpis id neque iaculis porttitor nec et turpis.</li>                \n            </ul>            \n        ').DOM}.html
        })
    })(iFDev)
}, function (e, t) {
    (e => {
        iFDev.get_template_404 = (() => {
            return {html: new Ifest(' \n            <h1 style="font-size: 80px; line-height: 80px; text-align: center; text-transform: uppercase; font-weight: 700;">Error 404</h1>\n        ').DOM}.html
        })
    })(iFDev)
}, function (e, t) {
    (e => {
        iFDev.get_template_footer = (() => {
            return {html: new Ifest(' \n            <h3 style="text-align: center; width: 100%;">Footer</h3>  \n        ').DOM}.html
        })
    })(iFDev)
}, function (e, t) {
    (e => {
        e = new Ifest(`\n        <div class="content">\n            <header class="header" style="text-align: center;">\n                ${get_template_header()}\n            </header>\n            \n            <div id="page" data-app-page="home">\n                ${get_template_home()}\n            </div>\n        </div>\n        \n        <footer class="footer">\n            ${get_template_footer()}\n        </footer>\n    `);
        const t = getSelectTemplate("app"), n = e.DOM;
        t.innerHTML = n
    })(iFDev)
}, function (e, t) {
    (e => {
        e.initCommon = (() => {
            e.onload = (() => (getSelectTemplate("navigation").addEventListener("click", e => ("home" === getSelectTemplate("page").getAttribute("data-app-page") ? getSelectTemplate("page").innerHTML = get_template_home() : "about" === getSelectTemplate("page").getAttribute("data-app-page") ? getSelectTemplate("page").innerHTML = get_template_about() : "contact" === getSelectTemplate("page").getAttribute("data-app-page") && (getSelectTemplate("page").innerHTML = get_template_contact()), e.preventDefault()), !1), e.error404 = (() => {
                "home" === location.hash.split("=")[1] ? "onhashchange" in e && (getSelectTemplate("page").innerHTML = get_template_home()) : "about" === location.hash.split("=")[1] ? "onhashchange" in e && (getSelectTemplate("page").innerHTML = get_template_about()) : "contact" === location.hash.split("=")[1] ? "onhashchange" in e && (getSelectTemplate("page").innerHTML = get_template_contact()) : (getSelectTemplate("page").setAttribute("data-app-page", "404"), document.title = getSelectTemplate("page").getAttribute("data-app-page"), e.location.hash = "#route=404", getSelectTemplate("page").innerHTML = get_template_404())
            }), e.onhashchange = error404))
        }), initCommon()
    })(iFDev)
}]);