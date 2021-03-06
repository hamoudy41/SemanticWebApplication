!(function (t, e, n, i) {
  function o(e, n) {
    (this.element = e),
      (this.options = t.extend({}, d, n)),
      (this._defaults = d),
      (this._name = l),
      this.init();
  }
  var r,
    s,
    a,
    p,
    l = "preloader",
    d = { text: "", percent: "", duration: "" },
    h = '<span class="preloader-text"></span>',
    c = '<span class="preloader-percent"></span>',
    u = !1,
    f = {
      remove: function () {
        r && ((u = !1), r.remove());
      },
      update: function (t) {
        var e = t[1];
        if (e.percent.length > 0 && p) p.text(e.percent + "%");
        else if (e.text.length > 0 && a) a.text(e.text);
        else if (!a || !p)
          return console.warn("Значение не может быть обновлено"), !1;
      },
    };
  (o.prototype.init = function () {
    function e() {
      var t,
        e = f.scrollTop(),
        n = s.height();
      (t = Math.round(i / 2 - n / 2 + e) + "px"), s.css({ top: t });
    }
    var n,
      i,
      o,
      d,
      f = t(this.element);
    return u
      ? (console.warn("Plugin " + l + " is already initialized"), !1)
      : (f.prepend(
          '<div class="preloader"><div class="preloader-animation"></div></div>'
        ),
        (r = f.find(".preloader")),
        (s = r.find(".preloader-animation")),
        (i = f.height()),
        (o = f[0].scrollHeight),
        (d = r.height()),
        o > d && (r.height(o), f.on("scroll", e).trigger("scroll")),
        (u = !0),
        this.options.text.length > 0 &&
          (r.prepend(h),
          (a = f.find(".preloader-text")),
          a.text(this.options.text)),
        this.options.percent.length > 0 &&
          ((n = this.options.percent),
          n < 0 ? (n = 0) : n > 100 && (n = 100),
          r.prepend(c),
          (p = f.find(".preloader-percent")),
          p.text(n + "%")),
        void (
          this.options.duration.length > 0 &&
          setTimeout(function () {
            r.remove(), (u = !1);
          }, this.options.duration)
        ));
  }),
    (t.fn[l] = function (e, n) {
      var i = arguments[0],
        r = Array.prototype.slice.call(arguments);
      return f[i]
        ? this.each(function () {
            f[i].call(this, r);
          })
        : "object" != typeof i && i
        ? void t.error("Method " + i + " does not exist on jQuery." + l)
        : this.each(function () {
            t.data(this, "plugin_" + l) || t.data(this, "plugin_" + l),
              new o(this, i);
          });
    });
})(jQuery, window, document);
