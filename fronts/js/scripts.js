(window.PARAM = {}),
      function (e, t) {
        e = e || {}
        var a = function (e, t) {
          return this.initialize(e, t)
        }
        ;(a.defaults = { cookieBarShowDelay: 2e3 }),
          (a.prototype = {
            initialize: function (e, t) {
              return (
                (this.$el = e),
                this.setData().setOptions(t).build().events(),
                this
              )
            },
            setData: function () {
              return this.$el.data('__ck', this), this
            },
            setOptions: function (e) {
              return (
                (this.options = t.extend(!0, {}, a.defaults, e, {
                  wrapper: this.$el
                })),
                this
              )
            },
            build: function () {
              var e = this
              if (
                (t.cookie('cookie-privacy-bar') ||
                  setTimeout(function () {
                    e.options.wrapper.addClass('show')
                  }, e.options.cookieBarShowDelay),
                t.cookie('cookie-gdpr-preferences'))
              )
                for (
                  var a = t.cookie('cookie-gdpr-preferences').split(','), o = 0;
                  o < a.length;
                  o++
                )
                  t('input[value="' + a[o] + '"]').get(0) &&
                    t('input[value="' + a[o] + '"]').is(':checkbox') &&
                    t('input[value="' + a[o] + '"]').prop('checked', !0)
              return this
            },
            events: function () {
              var e = this
              return (
                e.options.wrapper
                  .find('.gdpr-agree-trigger')
                  .on('click', function (a) {
                    a.preventDefault(),
                      t.cookie('cookie-privacy-bar', !0),
                      e.removeCookieBar()
                  }),
                e.options.wrapper
                  .find('.gdpr-preferences-trigger')
                  .on('click', function (e) {
                    e.preventDefault(),
                      t('.gdpr-preferences-popup').toggleClass('show')
                  }),
                t('.gdpr-close-popup').on('click', function (e) {
                  e.preventDefault(),
                    t('.gdpr-preferences-popup').toggleClass('show')
                }),
                t('.gdpr-preferences-popup').on('click', function (e) {
                  t(e.target)
                    .closest('.gdpr-preferences-popup-content')
                    .get(0) || t('.gdpr-preferences-popup').toggleClass('show')
                }),
                t('.gdpr-preferences-form').on('submit', function (a) {
                  a.preventDefault()
                  var o = t(this)
                  o.find('button[type="submit"]').text('En cours...')
                  var i = []
                  o.find('.gdpr-input').each(function () {
                    ;((t(this).is(':checkbox') && t(this).is(':checked')) ||
                      t(this).is(':hidden')) &&
                      i.push(t(this).val())
                  }),
                    t.cookie('cookie-privacy-bar', !0),
                    t.cookie('cookie-gdpr-preferences', i),
                    t.ajax({
                      type: 'post',
                      url: './actions/cookies-popup-sessions.php',
                      data: { cookie_array: i },
                      success: function () {}
                    }),
                    setTimeout(function () {
                      o
                        .find('button[type="submit"]')
                        .text('Enregistr\xe9e!')
                        .removeClass('btn-primary')
                        .addClass('btn-success'),
                        setTimeout(function () {
                          t('.gdpr-preferences-popup').toggleClass('show'),
                            e.removeCookieBar(),
                            o
                              .find('button[type="submit"]')
                              .text('Sauvegarder')
                              .removeClass('btn-success')
                              .addClass('btn-primary'),
                            location.reload()
                        }, 500)
                    }, 1e3)
                }),
                t('.gdpr-reset-cookies').on('click', function (a) {
                  a.preventDefault(),
                    e.clearCookies(),
                    location.reload(),
                    t.ajax({
                      type: 'post',
                      url: './actions/cookies-popup-sessions.php',
                      data: { cookie_array: [] },
                      success: function () {}
                    })
                }),
                t('.gdpr-open-preferences').on('click', function (e) {
                  e.preventDefault(),
                    t('.gdpr-preferences-popup').toggleClass('show')
                }),
                this
              )
            },
            removeCookieBar: function () {
              return this.options.wrapper.removeClass('show'), this
            },
            clearCookies: function () {
              return (
                t.removeCookie('cookie-privacy-bar'),
                t.removeCookie('cookie-gdpr-preferences'),
                this
              )
            }
          }),
          t.extend(e, { COOKIESPOP: a }),
          (t.fn.PARAMCOOKIESPOP = function (e) {
            return this.map(function () {
              var o = t(this)
              return o.data('__ck') ? o.data('__ck') : new a(o, e)
            })
          })
      }.apply(this, [window.PARAM, jQuery]),
      function (e) {
        'use strict'
        e.isFunction(e.fn.PARAMCOOKIESPOP) &&
          e(function () {
            e('[cookies-popup]:not(.manual)').each(function () {
              e(this).PARAMCOOKIESPOP(void 0)
            })
          })
      }.apply(this, [jQuery]);