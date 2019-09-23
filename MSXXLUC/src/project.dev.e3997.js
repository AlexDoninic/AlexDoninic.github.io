window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AdsMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5d07bLhSRFwpkOfkwHMju/", "AdsMgr");
    "use strict";
    var AdsParam = require("AdsParam");
    var AdsMgr = cc.Class({
      statics: {
        openAds: false,
        platform: "uc",
        qgAdsOK: false,
        wxAppId: "",
        bdAppId: "",
        ttAppId: "",
        bannerId_uc: "466581985",
        ucVideoId: "132387847",
        oppo_banner: "120455",
        oppo_Insert: "",
        bannerId_baidu: "",
        bannerId_wx: "adunit-068ca904a63c571d",
        bannerId_tt: "48m51jjkkhba4bm915",
        bannerId_qq: "48m51jjkkhba4bm915",
        insertId_wx_1: "adunit-3ca284c727559731",
        insertId_wx_2: "adunit-99ac89a904bdd337",
        insertId_qq_1: "adunit-3ca284c727559731",
        insertId_qq_2: "adunit-99ac89a904bdd337",
        bdVideoId_1: "",
        bdVideoId_2: "",
        bdVideoId_3: "",
        bdVideoId_4: "",
        bdVideoId_5: "",
        bdVideoId_6: "",
        bdVideoId_7: "",
        bdVideoId_8: "",
        bdVideoId_9: "",
        bdVideoId_10: "",
        wxVideoId_1: "adunit-84caca42d00167cd",
        wxVideoId_2: "adunit-d23a4dc42e147ee9",
        wxVideoId_3: "adunit-5ce4827ead730f9f",
        wxVideoId_4: "adunit-bbfa3e7a97fe68b8",
        wxVideoId_5: "adunit-1f599c0d7b4f4084",
        wxVideoId_6: "adunit-199066890e5a5ae1",
        wxVideoId_7: "adunit-a8cf91a589cfe744",
        wxVideoId_8: "adunit-5ff2910c9d66fda2",
        wxVideoId_9: "",
        wxVideoId_10: "",
        ttVideoId_1: "57we1h5gw9t98fdijc",
        ttVideoId_2: "b3h6os9egn1n8f5yl1",
        ttVideoId_3: "5761bbii51k4hfdb1l",
        ttVideoId_4: "39blffi89afh3fochm",
        ttVideoId_5: "1q7r863hrlcfgm8gcg",
        ttVideoId_6: "3l4bdlqbr4cc9s6pta",
        ttVideoId_7: "t9d21titan87p72jme",
        ttVideoId_8: "k56o7lem7o51ef9e9d",
        ttVideoId_9: "",
        ttVideoId_10: "",
        qqVideoId_1: "57we1h5gw9t98fdijc",
        qqVideoId_2: "b3h6os9egn1n8f5yl1",
        qqVideoId_3: "5761bbii51k4hfdb1l",
        qqVideoId_4: "39blffi89afh3fochm",
        qqVideoId_5: "1q7r863hrlcfgm8gcg",
        qqVideoId_6: "3l4bdlqbr4cc9s6pta",
        qqVideoId_7: "t9d21titan87p72jme",
        qqVideoId_8: "k56o7lem7o51ef9e9d",
        qqVideoId_9: "",
        qqVideoId_10: "",
        oppoVideo_1: "120457",
        oppoVideo_2: "120459",
        oppoVideo_3: "120460",
        oppoVideo_4: "120462",
        oppoVideo_5: "120464",
        oppoVideo_6: "120466",
        oppoVideo_7: "120467",
        oppoVideo_8: "120468",
        oppoVideo_9: "120469",
        oppoVideo_10: "120470",
        resizeTime: 0,
        allScreen: false,
        Init: function Init() {
          window.wx || window.tt || window.swan || window.qq || window.uc || (this.platform = "pc");
          console.log("\u9009\u62e9\u5e73\u53f0 = " + this.platform);
          this.allScreen = false;
          var self = this;
          if ("qg_oppo" == this.platform) {
            if (false == this.openAds) return;
            console.log("\u521d\u59cb\u5316oppo\u5e7f\u544a ====== ");
            qg.initAdService({
              appId: "30190736",
              isDebug: false,
              success: function success(res) {
                console.log("Ads  success");
                self.setQgGameAdsState();
                self.ShowBannerAds();
              },
              fail: function fail(res) {
                console.log("fail:" + res.code + res.msg);
              },
              complete: function complete(res) {
                console.log("complete");
              }
            });
          }
        },
        setQgGameAdsState: function setQgGameAdsState() {
          this.qgAdsOK = true;
        },
        getBannerAdId: function getBannerAdId() {
          if ("wx" == this.platform) return this.bannerId_wx;
          if ("baidu" == this.platform) return this.bannerId_baidu;
          if ("qq" == this.platform) return this.bannerId_qq;
          if ("tt" == this.platform) return this.bannerId_tt;
          if ("uc" == this.platform) return this.bannerId_uc;
          if ("qg_oppo" == this.platform) return this.oppo_banner;
          return null;
        },
        getInsertAdId: function getInsertAdId(adName) {
          if ("wx" == this.platform) {
            if (1 == adName) return this.insertId_wx_1;
            if (2 == adName) return this.insertId_wx_2;
          } else if ("qq" == this.platform) {
            if (1 == adName) return this.insertId_qq_1;
            if (2 == adName) return this.insertId_qq_2;
          } else if ("baidu" == this.platform) ; else if ("tt" == this.platform) ; else if ("qg_oppo" == this.platform) return this.oppo_Insert;
          return null;
        },
        getVideoAdId: function getVideoAdId(adName) {
          var adId;
          if ("wx" == this.platform) switch (adName) {
           case AdsParam.PointA:
            adId = this.wxVideoId_1;
            break;

           case AdsParam.PointB:
            adId = this.wxVideoId_2;
            break;

           case AdsParam.PointC:
            adId = this.wxVideoId_3;
            break;

           case AdsParam.PointD:
            adId = this.wxVideoId_4;
            break;

           case AdsParam.PointE:
            adId = this.wxVideoId_5;
            break;

           case AdsParam.PointF:
            adId = this.wxVideoId_6;
            break;

           case AdsParam.PointG:
            adId = this.wxVideoId_7;
            break;

           case AdsParam.PointH:
            adId = this.wxVideoId_8;
            break;

           case AdsParam.PointI:
            adId = this.wxVideoId_9;
            break;

           case AdsParam.PointJ:
            adId = this.wxVideoId_10;
          } else if ("qq" == this.platform) switch (adName) {
           case AdsParam.PointA:
            adId = this.qqVideoId_1;
            break;

           case AdsParam.PointB:
            adId = this.qqVideoId_2;
            break;

           case AdsParam.PointC:
            adId = this.qqVideoId_3;
            break;

           case AdsParam.PointD:
            adId = this.qqVideoId_4;
            break;

           case AdsParam.PointE:
            adId = this.qqVideoId_5;
            break;

           case AdsParam.PointF:
            adId = this.qqVideoId_6;
            break;

           case AdsParam.PointG:
            adId = this.qqVideoId_7;
            break;

           case AdsParam.PointH:
            adId = this.qqVideoId_8;
            break;

           case AdsParam.PointI:
            adId = this.qqVideoId_9;
            break;

           case AdsParam.PointJ:
            adId = this.qqVideoId_10;
          } else if ("baidu" == this.platform) switch (adName) {
           case AdsParam.PointA:
            adId = this.bdVideoId_1;
            break;

           case AdsParam.PointB:
            adId = this.bdVideoId_2;
            break;

           case AdsParam.PointC:
            adId = this.bdVideoId_3;
            break;

           case AdsParam.PointD:
            adId = this.bdVideoId_4;
            break;

           case AdsParam.PointE:
            adId = this.bdVideoId_5;
            break;

           case AdsParam.PointF:
            adId = this.bdVideoId_6;
            break;

           case AdsParam.PointG:
            adId = this.bdVideoId_7;
            break;

           case AdsParam.PointH:
            adId = this.bdVideoId_8;
            break;

           case AdsParam.PointI:
            adId = this.bdVideoId_9;
            break;

           case AdsParam.PointJ:
            adId = this.bdVideoId_10;
          } else if ("tt" == this.platform) switch (adName) {
           case AdsParam.PointA:
            adId = this.ttVideoId_1;
            break;

           case AdsParam.PointB:
            adId = this.ttVideoId_2;
            break;

           case AdsParam.PointC:
            adId = this.ttVideoId_3;
            break;

           case AdsParam.PointD:
            adId = this.ttVideoId_4;
            break;

           case AdsParam.PointE:
            adId = this.ttVideoId_5;
            break;

           case AdsParam.PointF:
            adId = this.ttVideoId_6;
            break;

           case AdsParam.PointG:
            adId = this.ttVideoId_7;
            break;

           case AdsParam.PointH:
            adId = this.ttVideoId_8;
            break;

           case AdsParam.PointI:
            adId = this.ttVideoId_9;
            break;

           case AdsParam.PointJ:
            adId = this.ttVideoId_10;
          } else if ("qg_oppo" == this.platform) switch (adName) {
           case AdsParam.PointA:
            adId = this.oppoVideo_1;
            break;

           case AdsParam.PointB:
            adId = this.oppoVideo_2;
            break;

           case AdsParam.PointC:
            adId = this.oppoVideo_3;
            break;

           case AdsParam.PointD:
            adId = this.oppoVideo_4;
            break;

           case AdsParam.PointE:
            adId = this.oppoVideo_5;
            break;

           case AdsParam.PointF:
            adId = this.oppoVideo_6;
            break;

           case AdsParam.PointG:
            adId = this.oppoVideo_7;
            break;

           case AdsParam.PointH:
            adId = this.oppoVideo_8;
            break;

           case AdsParam.PointI:
            adId = this.oppoVideo_9;
            break;

           case AdsParam.PointJ:
            adId = this.oppoVideo_10;
          }
          return adId;
        },
        ShowBannerAds: function ShowBannerAds() {
          var _this = this;
          if (false == this.openAds) return;
          if (false == this.qgAdsOK) return;
          var self = this;
          this.resizeTime = 0;
          if ("qg_oppo" == this.platform) {
            null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
            console.log("\u521b\u5efa\u5e7f\u544a === banner  Id = " + self.getBannerAdId());
            this.bannerAdCtrl = qg.createBannerAd({
              posId: self.getBannerAdId()
            });
            this.bannerAdCtrl.show();
          } else if ("wx" == this.platform) {
            null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
            var WXAD = {};
            WXAD.W = wx.getSystemInfoSync().windowWidth;
            WXAD.H = wx.getSystemInfoSync().windowHeight;
            var adWidth = 0;
            adWidth = this.allScreen ? WXAD.W : 300;
            this.bannerAdCtrl = wx.createBannerAd({
              adUnitId: this.getBannerAdId(),
              style: {
                left: 0,
                top: 0,
                width: adWidth
              }
            });
            this.bannerAdCtrl.onResize(function(res) {
              console.log("\u91cd\u7f6e\u5e7f\u544a\u5bbd\u5ea6 " + WXAD.H + " , " + self.bannerAdCtrl.style.realHeight);
              self.bannerAdCtrl.style.top = WXAD.H - self.bannerAdCtrl.style.realHeight;
              self.bannerAdCtrl.style.left = (WXAD.W - self.bannerAdCtrl.style.realWidth) / 2;
              self.bannerAdCtrl.show();
            });
            this.bannerAdCtrl.onError(function(err) {
              console.log(err);
            });
            console.log("\u663e\u793a\u5e7f\u544a");
          } else if ("qq" == this.platform) {
            null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
            var _WXAD = {};
            _WXAD.W = qq.getSystemInfoSync().windowWidth;
            _WXAD.H = qq.getSystemInfoSync().windowHeight;
            var _adWidth = 0;
            _adWidth = this.allScreen ? _WXAD.W : 320;
            this.bannerAdCtrl = qq.createBannerAd({
              adUnitId: self.getBannerAdId(),
              style: {
                left: (_WXAD.W - 320) / 2,
                top: _WXAD.H - 77,
                width: _adWidth
              }
            });
            this.bannerAdCtrl.onResize(function(res) {
              console.log("\u5e73\u53f0\u9009\u62e9 " + qq.getSystemInfoSync().platform);
              if ("ios" == qq.getSystemInfoSync().platform) ; else {
                _this.bannerAdCtrl.style.top = _WXAD.H - res.height;
                _this.bannerAdCtrl.style.left = (_WXAD.W - res.width) / 2;
              }
              console.log("\u91cd\u7f6e\u4f4d\u7f6e =  top = " + _this.bannerAdCtrl.style.top + "   left =  " + _this.bannerAdCtrl.style.left);
              self.bannerAdCtrl.show();
            });
            this.bannerAdCtrl.onError(function(err) {
              console.log(err);
            });
            console.log("\u663e\u793a\u5e7f\u544a");
          } else if ("baidu" == this.platform) {
            if ("ios" == swan.getSystemInfoSync().platform) return;
            null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
            var _WXAD2 = {};
            _WXAD2.W = swan.getSystemInfoSync().windowWidth;
            _WXAD2.H = swan.getSystemInfoSync().windowHeight;
            console.log("\u767e\u5ea6\u7684 bannerId = " + this.getBannerAdId());
            this.bannerAdCtrl = swan.createBannerAd({
              adUnitId: this.getBannerAdId(),
              appSid: "c0fb407f",
              style: {
                left: 0,
                top: 0,
                width: 321
              }
            });
            this.allScreen ? self.bannerAdCtrl.style.width = _WXAD2.H : self.bannerAdCtrl.style.width = 300;
            this.bannerAdCtrl.onResize(function(res) {
              console.log("\u91cd\u7f6e\u5e7f\u544a\u5bbd\u5ea6 ");
              self.bannerAdCtrl.style.top = _WXAD2.H - res.height;
              self.bannerAdCtrl.style.left = (_WXAD2.W - res.width) / 2;
              self.bannerAdCtrl.show();
            });
            this.bannerAdCtrl.onLoad(function() {
              console.log(" banner \u52a0\u8f7d\u5b8c\u6210");
              self.bannerAdCtrl.show();
            });
            this.bannerAdCtrl.onError(function(err) {
              console.log(err);
            });
            console.log("\u663e\u793a\u5e7f\u544a");
          } else if ("tt" == this.platform) {
            null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
            var _WXAD3 = {};
            _WXAD3.W = tt.getSystemInfoSync().windowWidth;
            _WXAD3.H = tt.getSystemInfoSync().windowHeight;
            this.bannerAdCtrl = tt.createBannerAd({
              adUnitId: this.getBannerAdId(),
              style: {
                left: (_WXAD3.W - 200) / 2,
                width: 200,
                top: _WXAD3.H - 112.5
              }
            });
            this.bannerAdCtrl.onLoad(function() {
              console.log(" banner \u52a0\u8f7d\u5b8c\u6210");
              self.bannerAdCtrl.show();
            });
            this.bannerAdCtrl.onError(function(err) {
              console.log(err);
            });
            console.log("\u663e\u793a\u5e7f\u544a");
          } else if ("uc" == this.platform) {
            null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
            var res = uc.getSystemInfoSync();
            this.bannerAdCtrl = uc.createBannerAd({
              adIntervals: 32,
              style: {
                width: 250 * res.pixelRatio,
                height: 0,
                gravity: 7
              }
            });
            this.bannerAdCtrl.onLoad(function() {
              console.log(" banner \u52a0\u8f7d\u5b8c\u6210");
              self.bannerAdCtrl.show();
            });
            this.bannerAdCtrl.onError(function(err) {
              console.log(err);
            });
          }
        },
        HideBannerAd: function HideBannerAd() {
          console.log("\u9690\u85cfbanner");
          null != this.bannerAdCtrl && this.bannerAdCtrl.hide();
          this.DestroyBanner();
        },
        RecoverShowBanner: function RecoverShowBanner() {
          if (false == this.openAds) return;
          this.DestroyBanner();
          console.log("\u91cd\u5f00banner");
          null != this.bannerAdCtrl ? this.bannerAdCtrl.show() : this.ShowBannerAds();
        },
        DestroyBanner: function DestroyBanner() {
          null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
          this.bannerAdCtrl = null;
        },
        ShowInterstitialAd: function ShowInterstitialAd(adName) {
          if (false == this.openAds) return;
          if ("wx" == this.platform) {
            if (this.CompareSdkVesrion(wx.getSystemInfoSync().SDKVersion, "2.6.0")) {
              var InterstitialAd = wx.createInterstitialAd({
                adUnitId: this.getInsertAdId(adName)
              });
              InterstitialAd.onLoad(function() {
                InterstitialAd.show();
              });
              InterstitialAd.onClose(function() {
                console.log("\u5173\u95ed\u63d2\u5c4f");
                InterstitialAd.offLoad();
                InterstitialAd.offError();
                InterstitialAd.offClose();
              });
              InterstitialAd.onError(function(err) {
                console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + err.errMsg + "  " + err.errCode);
              });
            }
          } else if ("qq" == this.platform) ; else if ("baidu" == this.platform) ; else if ("tt" == this.platform) ; else if ("qg_oppo" == this.platform) {
            var InsertAd = qg.createBannerAd({
              posId: self.getInsertAdId(1)
            });
            InsertAd.load();
            InsertAd.onLoad(function() {
              InsertAd.show();
            });
            InsertAd.onLoad(function() {
              InsertAd.show();
            });
            InsertAd.onError(function() {
              InsertAd.destroy();
            });
            InsertAd.offError(function() {
              InsertAd.destroy();
            });
          }
        },
        ShowVideoAds: function ShowVideoAds(adName, cb) {
          var _this2 = this;
          if (false == this.openAds) {
            cc.Mgr.PlatformController.showToast("\u5e7f\u544a\u529f\u80fd\u6682\u672a\u5f00\u653e");
            return;
          }
          this.cb = null;
          this.cb = cb;
          if ("qg_oppo" == this.platform) {
            console.log("\u89c6\u9891\u5e7f\u544a\u4f4d \uff1a " + this.getVideoAdId(adName));
            var videoAd = qg.createRewardedVideoAd({
              posId: self.getVideoAdId(adName)
            });
            videoAd.load();
            videoAd.onLoad(function() {
              console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f");
              videoAd.show();
            });
            videoAd.onError(function(err) {
              console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + err.errMsg);
              _this2.cb(-1);
            });
            videoAd.onClose(function(res) {
              console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + res.isEnded);
              _this2.cb(res.isEnded ? 0 : 1);
              videoAd.offLoad();
              videoAd.offError();
              videoAd.offClose();
            });
          } else if ("wx" == this.platform) {
            console.log("\u5fae\u4fe1\u7684\u89c6\u9891\u5e7f\u544a  " + this.getVideoAdId(adName));
            var _videoAd = wx.createRewardedVideoAd({
              adUnitId: this.getVideoAdId(adName)
            });
            _videoAd.load().then(function() {
              return _videoAd.show();
            }).catch(function(err) {
              return console.log(err.errMsg);
            });
            _videoAd.onError(function(err) {
              console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + err.errMsg);
              _this2.cb(-1);
            });
            _videoAd.onLoad(function() {
              console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03");
            });
            _videoAd.onClose(function(res) {
              console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + res.isEnded);
              _this2.cb(res.isEnded ? 0 : 1);
              _videoAd.offLoad();
              _videoAd.offError();
              _videoAd.offClose();
            });
          } else if ("qq" == this.platform) {
            var _videoAd2 = qq.createRewardedVideoAd({
              adUnitId: self.getVideoAdId(adName)
            });
            _videoAd2.load().then(function() {
              return _videoAd2.show();
            }).catch(function(err) {
              return console.log(err.errMsg);
            });
            _videoAd2.onError(function(err) {
              console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + err.errMsg);
              _this2.cb(-1);
            });
            _videoAd2.onLoad(function() {
              console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03");
            });
            _videoAd2.onClose(function(res) {
              console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + res.isEnded);
              res.isEnded ? cc.Mgr.PlatformController.AldEventStatis("Finish-" + cc.Mgr.global.getVedioRewardName(adName), {
                Reward: "jiba"
              }) : cc.Mgr.PlatformController.AldEventStatis("NotFinish-" + cc.Mgr.global.getVedioRewardName(adName), {
                Reward: "jiba"
              });
              _this2.cb(res.isEnded ? 0 : 1);
              _videoAd2.offLoad();
              _videoAd2.offError();
              _videoAd2.offClose();
            });
          } else if ("baidu" == this.platform) {
            console.log("\u767e\u5ea6\u7684\u89c6\u9891\u5e7f\u544a  " + this.getVideoAdId(adName));
            var _videoAd3 = swan.createRewardedVideoAd({
              adUnitId: this.getVideoAdId(adName),
              appSid: "ad8b61de"
            });
            _videoAd3.load().then(function() {
              return _videoAd3.show();
            }).catch(function(err) {
              return console.log(err.errMsg);
            });
            _videoAd3.onError(function(err) {
              console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + err.errMsg);
              _this2.cb(-1);
            });
            _videoAd3.onLoad(function() {
              console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03");
            });
            _videoAd3.onClose(function(res) {
              console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + res.isEnded);
              _this2.cb(res.isEnded ? 0 : 1);
              _videoAd3.offLoad();
              _videoAd3.offError();
              _videoAd3.offClose();
            });
          } else if ("tt" == this.platform) {
            console.log("\u5934\u6761\u7684\u89c6\u9891\u5e7f\u544a  " + this.getVideoAdId(adName));
            var _videoAd4 = tt.createRewardedVideoAd({
              adUnitId: this.getVideoAdId(adName)
            });
            _videoAd4.load().then(function() {
              return _videoAd4.show();
            }).catch(function(err) {
              return console.log(err.errMsg);
            });
            _videoAd4.onError(function(err) {
              console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + err.errMsg);
              _this2.cb(-1);
            });
            _videoAd4.onLoad(function() {
              console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03");
            });
            _videoAd4.onClose(function(res) {
              console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + res.isEnded);
              _this2.cb(res.isEnded ? 0 : 1);
              _videoAd4.offLoad();
              _videoAd4.offError();
              _videoAd4.offClose();
            });
          } else if ("uc" == this.platform) {
            var rewardedVideoAd = uc.createRewardVideoAd();
            rewardedVideoAd.show().then().catch(function(err) {
              return console.log(err);
            });
            rewardedVideoAd.onLoad(function() {
              console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
            });
            rewardedVideoAd.onClose(function(res) {
              console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + res.isEnded);
              _this2.cb(res.isEnded ? 0 : 1);
              _this2.cb = null;
            });
          } else this.cb(0);
        },
        CompareSdkVesrion: function CompareSdkVesrion(sdkV, needV) {
          var out1 = sdkV.split(".");
          var out2 = needV.split(".");
          var len = Math.max(out1.length, out2.length);
          while (out1.length < len) out1.push("0");
          while (out2.length < len) out2.push("0");
          for (var i = 0; i < len; i++) {
            if (parseInt(out1[i]) < parseInt(out2[i])) return 0;
            if (parseInt(out1[i]) > parseInt(out2[i])) return 1;
          }
          return 1;
        }
      }
    });
    module.exports = AdsMgr;
    cc._RF.pop();
  }, {
    AdsParam: "AdsParam"
  } ],
  AdsParam: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e2c1Mqx69BDIpK5wM6z6HA", "AdsParam");
    "use strict";
    var AdsParam = cc.Enum({
      PointA: 1,
      PointB: 2,
      PointC: 3,
      PointD: 4,
      PointE: 5,
      PointF: 6,
      PointG: 7,
      PointH: 8,
      PointI: 9,
      PointJ: 10
    });
    module.exports = AdsParam;
    cc._RF.pop();
  }, {} ],
  AppStart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1857aBD2CxP8r6kveq+KWQN", "AppStart");
    "use strict";
    function initMgr() {
      cc.Mgr = {};
      cc.Mgr.InitAll = false;
      var AudioMgr = require("AudioMgr");
      cc.Mgr.AudioMgr = new AudioMgr();
      cc.Mgr.AudioMgr.init();
      cc.Mgr.Global = require("Global");
      cc.Mgr.Global.InitData();
      cc.Mgr.Utils = require("Utils");
      var DataMapMgr = require("DataMapMgr");
      cc.Mgr.DataMapMgr = new DataMapMgr();
      cc.Mgr.DataMapMgr.InitMaps();
      var UserData = require("UserData");
      cc.Mgr.UserData = new UserData();
      cc.Mgr.AdsMgr = require("AdsMgr");
      cc.Mgr.AdsMgr.Init();
      cc.Mgr.ShareInfos = require("ShareInfos");
      cc.Mgr.ShareInfos.init();
      cc.Mgr.PlatformController = require("PlatformController");
      cc.Mgr.PlatformController.Init();
    }
    var UIMgr = require("UIMgr");
    cc.Class({
      extends: cc.Component,
      properties: {
        uiMgr: UIMgr
      },
      onLoad: function onLoad() {
        initMgr();
        var self = this;
        cc.director.on("DecoderMapsEnd", function(data) {
          cc.Mgr.Global.RefreshBonusData();
          cc.Mgr.UserData.initData();
          cc.Mgr.PlatformController.setUserCloudStorage(cc.Mgr.UserData.getHighScore());
          self.RefreshUI();
          cc.Mgr.InitAll = true;
        });
        cc.Mgr.Utils.GetSysTime();
      },
      RefreshUI: function RefreshUI() {
        this.uiMgr.RefreshUI();
      },
      start: function start() {
        cc.Mgr.Global.InitRewardLifeTime();
        cc.Mgr.PlatformController.ShareTopNav();
        cc.Mgr.AudioMgr.playBGM("bgm");
        cc.Mgr.AdsMgr.ShowBannerAds();
      }
    });
    cc._RF.pop();
  }, {
    AdsMgr: "AdsMgr",
    AudioMgr: "AudioMgr",
    DataMapMgr: "DataMapMgr",
    Global: "Global",
    PlatformController: "PlatformController",
    ShareInfos: "ShareInfos",
    UIMgr: "UIMgr",
    UserData: "UserData",
    Utils: "Utils"
  } ],
  AudioMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb34faItr9BNo7ofM1Dk7Xd", "AudioMgr");
    "use strict";
    var AudioMgr = cc.Class({
      extends: cc.Component,
      properties: {
        bgmVolume: .5,
        sfxVolume: .5,
        bgmAudioID: -1,
        sfxAudioID: -1,
        musicState: 1,
        voiceState: 1
      },
      init: function init() {
        cc.Mgr.loadSound = false;
        var t = cc.sys.localStorage.getItem("bgmVolume");
        null != t && (this.bgmVolume = parseFloat(t));
        var t = cc.sys.localStorage.getItem("sfxVolume");
        null != t && (this.sfxVolume = parseFloat(t));
        cc.game.on(cc.game.EVENT_HIDE, function() {
          console.log("cc.audioEngine.pauseAll");
          cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          console.log("cc.audioEngine.resumeAll");
          1 == this.musicState && cc.audioEngine.resumeAll();
        });
      },
      getUrl: function getUrl(url) {
        return cc.url.raw("resources/sound/" + url + ".mp3");
      },
      playBGM: function playBGM(url) {
        var audioUrl = this.getUrl(url);
        this.bgmAudioID >= 0 && cc.audioEngine.stop(this.bgmAudioID);
        this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume);
      },
      playSFX: function playSFX(url) {
        if (0 == this.voiceState) return;
        var audioUrl = this.getUrl(url);
        cc.audioEngine.play(audioUrl, false, this.sfxVolume);
      },
      setSFXVolume: function setSFXVolume(v) {
        if (this.sfxVolume != v) {
          cc.sys.localStorage.setItem("sfxVolume", v);
          this.sfxVolume = v;
        }
      },
      setBGMVolume: function setBGMVolume(v, force) {
        this.bgmAudioID >= 0 && (v > 0 ? cc.audioEngine.resume(this.bgmAudioID) : cc.audioEngine.pause(this.bgmAudioID));
        if (this.bgmVolume != v || force) {
          cc.sys.localStorage.setItem("bgmVolume", v);
          this.bgmVolume = v;
          cc.audioEngine.setVolume(this.bgmAudioID, v);
        }
      },
      pauseAll: function pauseAll() {
        this.musicState = 0;
        this.voiceState = 0;
        this.bgmVolume = 0;
        this.sfxVolume = 0;
        cc.audioEngine.pauseAll();
      },
      resumeAll: function resumeAll() {
        this.musicState = 1;
        this.voiceState = 1;
        this.bgmVolume = .5;
        this.sfxVolume = .5;
        cc.audioEngine.resumeAll();
      },
      pauseMusic: function pauseMusic() {
        this.musicState = 0;
        this.bgmVolume = 0;
        this.bgmAudioID >= 0 && cc.audioEngine.pause(this.bgmAudioID);
      },
      resumeMusic: function resumeMusic() {
        this.musicState = 1;
        this.bgmVolume = .5;
        this.bgmAudioID >= 0 && cc.audioEngine.resume(this.bgmAudioID);
      },
      pauseVoice: function pauseVoice() {
        this.voiceState = 0;
        this.sfxVolume = 0;
      },
      resumeVoice: function resumeVoice() {
        this.voiceState = 1;
        this.sfxVolume = .5;
      },
      getMusicState: function getMusicState() {
        return this.musicState;
      },
      getVoiceState: function getVoiceState() {
        return this.voiceState;
      }
    });
    module.exports = AudioMgr;
    cc._RF.pop();
  }, {} ],
  BirdVoiceCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36f07eHlpBG9qlBA2oJXPCk", "BirdVoiceCtrl");
    "use strict";
    var BirdVoiceCtrl = cc.Class({
      extends: cc.Component,
      properties: {
        AudioCtrl: cc.AudioSource,
        audioClip_1: {
          default: null,
          type: cc.AudioClip
        },
        audioClip_2: {
          default: null,
          type: cc.AudioClip
        },
        lastClip: 2
      },
      SetData: function SetData() {
        this.AudioCtrl.volume = .5;
        this.AudioCtrl.loop = false;
      },
      Stop: function Stop() {
        this.AudioCtrl.volume = 0;
      },
      Resume: function Resume() {
        this.AudioCtrl.volume = .5;
      },
      start: function start() {
        this.SetData();
        this.schedule(function() {
          if (2 == this.lastClip) {
            this.lastClip = 1;
            this.AudioCtrl.clip = this.audioClip_1;
          } else {
            this.lastClip = 2;
            this.AudioCtrl.clip = this.audioClip_2;
          }
          this.AudioCtrl.play();
        }, 15);
      }
    });
    module.exports = BirdVoiceCtrl;
    cc._RF.pop();
  }, {} ],
  BonusType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dce32AyQ3VKZZwIkBNZ99k4", "BonusType");
    "use strict";
    var BonusType = cc.Enum({
      CoinBonus: 1,
      RuneBonus: 2,
      DiamondBonus: 3
    });
    module.exports = BonusType;
    cc._RF.pop();
  }, {} ],
  BoxType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc8b6hIS/lE0Jme8iyOdg5h", "BoxType");
    "use strict";
    var BoxType = cc.Enum({
      Blank: 0,
      Normal: 1,
      Stone: 2,
      Bubble: 3,
      Flower: 4,
      Mine: 5
    });
    module.exports = BoxType;
    cc._RF.pop();
  }, {} ],
  Box: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e540AdGGFIb7sRN89LEHE/", "Box");
    "use strict";
    var BoxType = require("BoxType");
    var Global = require("Global");
    var DIR = require("DIR");
    var Box = cc.Class({
      extends: cc.Component,
      properties: {
        flagNum: 1,
        boxType: {
          default: BoxType.Blank,
          type: BoxType
        },
        ContentNode: cc.Node,
        ContentNodes: [ cc.Node ],
        RoleNodes: [ cc.Node ],
        coinNode: cc.Node,
        seedNode: cc.Node,
        exploreNode: cc.Node,
        boxAnima: cc.Animation,
        flowerBornAni: cc.Animation,
        effectAnima: cc.Animation,
        moveAnima: cc.Animation
      },
      start: function start() {
        var self = this;
        cc.director.on("MoveRoleBox", function(data) {
          if (data.DIR == DIR.LEFT) for (var i = 0; i < self.RoleNodes.length; i++) self.RoleNodes[i].scaleX = -1; else if (data.DIR == DIR.RIGHT) for (var i = 0; i < self.RoleNodes.length; i++) self.RoleNodes[i].scaleX = 1;
        });
      },
      InitBox: function InitBox(posX, posY, flagNum) {
        this.HideLastContentNode();
        this.flagNum = flagNum;
        this.posX = posX;
        this.posY = posY;
        this.ContentNode.setPosition(0, 0);
        this.coinNode.active = false;
        this.seedNode.active = false;
        this.RefreshBoxType();
      },
      RefreshBoxInit: function RefreshBoxInit() {
        this.HideLastContentNode();
        this.flagNum = 0;
        this.ContentNode.setPosition(0, 0);
        this.RefreshBoxType();
        this.coinNode.active = false;
        this.seedNode.active = false;
      },
      RefreshToBoxLastStep: function RefreshToBoxLastStep(param) {
        this.HideLastContentNode();
        this.flagNum = param.flagNum;
        this.ContentNode.setPosition(0, 0);
        this.RefreshBoxType();
        this.coinNode.active = param.showCoin;
        this.seedNode.active = param.showSeed;
      },
      RefreshBoxFlagNum: function RefreshBoxFlagNum(flagNum) {
        this.HideLastContentNode();
        this.flagNum = flagNum;
        this.ContentNode.setPosition(0, 0);
        this.RefreshBoxType();
      },
      RefreshBox: function RefreshBox(param) {
        var dir = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DIR.NULL;
        this.HideLastContentNode();
        this.flagNum = param.flagNum;
        if (this.flagNum != BoxType.Blank && dir != DIR.NULL) {
          this.ContentNode.stopAllActions();
          var posX = 0;
          var posY = 0;
          dir == DIR.LEFT ? posX = 112 : dir == DIR.RIGHT ? posX = -112 : dir == DIR.UP ? posY = -112 : dir == DIR.DOWN && (posY = 112);
          this.ContentNode.setPosition(posX, posY);
        } else this.flagNum != BoxType.Blank && dir != DIR.NULL || this.ContentNode.setPosition(0, 0);
        this.RefreshBoxType();
        if (this.boxType != BoxType.Blank && dir != DIR.NULL) {
          var openAction = false;
          if (openAction) {
            var action = cc.moveTo(.05, 0, 0);
            this.ContentNode.runAction(action);
          } else dir == DIR.LEFT ? this.moveAnima.play("boxmoveL") : dir == DIR.RIGHT ? this.moveAnima.play("boxmoveR") : dir == DIR.UP ? this.moveAnima.play("boxmoveU") : dir == DIR.DOWN && this.moveAnima.play("boxmoveD");
        }
        if (true == this.coinNode.active) {
          this.coinNode.active = false;
          this.effectAnima.node.active = true;
          this.effectAnima.play("coinEffect");
          cc.Mgr.AudioMgr.playSFX("coin");
          cc.director.emit("AddGameScore", {});
        } else if (true == this.seedNode.active) {
          cc.log("\u79cd\u5b50\u4eae\u8d77\u7684\u7684 \u9700\u8981\u7f6e\u9ed1  this.boxType = " + this.boxType);
          if (this.boxType == BoxType.Blank || this.boxType == BoxType.Normal) {
            this.seedNode.active = false;
            if (this.boxType == BoxType.Blank) {
              this.flagNum = 4;
              this.RefreshBoxType();
              this.flowerBornAni.play();
              this.scheduleOnce(function() {
                cc.director.emit("CheckCanMoveAllDir", {});
              }, Global.WaitCheckCanMoveAllDir);
            }
          } else this.boxType == BoxType.Mine && cc.log("\u79cd\u5b50\u4eae\u8d77\u7684\u7684 \u4e0d\u9700\u8981\u7f6e\u9ed1  this.boxType = " + this.boxType);
        }
      },
      RefreshBoxType: function RefreshBoxType() {
        if (2 == this.flagNum) {
          this.boxType = BoxType.Stone;
          cc.Mgr.UserData.IsFinishStoneTutor() || cc.director.emit("TutorialStone", {});
        } else 1 == this.flagNum ? this.boxType = BoxType.Normal : this.flagNum <= 7 && this.flagNum >= 5 ? this.boxType = BoxType.Mine : 3 == this.flagNum ? this.boxType = BoxType.Bubble : 4 == this.flagNum ? this.boxType = BoxType.Flower : 0 == this.flagNum && (this.boxType = BoxType.Blank);
        this.ContentNodes[this.flagNum].active = true;
      },
      HideLastContentNode: function HideLastContentNode() {
        this.ContentNodes[this.flagNum].active = false;
      },
      PlayAnimation: function PlayAnimation(anima) {
        "boxblink" == anima && this.setContentScale(1.1);
        this.boxAnima.play(anima);
      },
      setContentScale: function setContentScale(num) {
        this.ContentNode.setScale(num);
      },
      DisShow: function DisShow() {
        this.RefreshBoxInit();
        this.setContentScale(1);
        cc.director.emit("SetPlayState", {});
        this.coinNode.active = true;
      },
      SpwanCoinNode: function SpwanCoinNode() {
        this.RefreshBoxInit();
        this.coinNode.active = true;
      },
      SpwanSeedNode: function SpwanSeedNode() {
        this.RefreshBoxInit();
        this.seedNode.active = true;
      },
      UseBoomSkill: function UseBoomSkill() {
        if (cc.Mgr.Global.checkPos[0] == this.posX && cc.Mgr.Global.checkPos[1] == this.posY) {
          cc.log("\u4f60\u600e\u4e48\u80fd\u70b9\u51fb\u73a9\u5bb6\u8282\u70b9\u5462");
          return;
        }
        if (true == cc.Mgr.Global.UseSkillState) {
          if (this.flagNum == BoxType.Blank) {
            if (true == this.coinNode.active) return;
            if (true != this.seedNode.active) return;
          }
          cc.Mgr.AudioMgr.playSFX("coin");
          this.exploreNode.active = true;
          this.boxAnima.play("explore");
          cc.director.emit("UseBoomSkillEnd", {});
        } else if (true == cc.Mgr.Global.UseSkillSpwanNow && this.flagNum == BoxType.Blank) {
          cc.Mgr.AudioMgr.playSFX("du");
          var param = {};
          param.flagNum = BoxType.Normal;
          this.RefreshBox(param, DIR.NULL);
          this.PlayAnimation("boxSpwan");
          cc.director.emit("UseSpwanSkillEnd", {});
        }
      },
      EndExplore: function EndExplore() {
        this.RefreshBoxInit();
        this.coinNode.active = false;
        this.exploreNode.active = false;
      },
      IsCoinNodeActive: function IsCoinNodeActive() {
        return true == this.coinNode.active;
      },
      IsSeedNodeActive: function IsSeedNodeActive() {
        return true == this.seedNode.active;
      },
      PlayAction: function PlayAction() {}
    });
    module.exports = Box;
    cc._RF.pop();
  }, {
    BoxType: "BoxType",
    DIR: "DIR",
    Global: "Global"
  } ],
  BuyBoomPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5d8f2wshRJk55Sday2RNXP", "BuyBoomPanel");
    "use strict";
    var BuyBoomPanel = cc.Class({
      extends: cc.Component,
      properties: {
        coinNumLbl: cc.Label,
        btnBgSp: cc.Sprite,
        Atlas: cc.SpriteAtlas
      },
      ShowPanel: function ShowPanel() {
        var CoinNum = cc.Mgr.UserData.getCoinNum();
        this.coinNumLbl.string = CoinNum;
        CoinNum > cc.Mgr.Global.BoomCost ? this.btnBgSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_1") : this.btnBgSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_2");
      },
      ClosePanel: function ClosePanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      }
    });
    module.exports = BuyBoomPanel;
    cc._RF.pop();
  }, {} ],
  CoinEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec112Fg+QFEj7xH+P5yfcN1", "CoinEffect");
    "use strict";
    var CoinEffect = cc.Class({
      extends: cc.Component,
      properties: {
        EffectNode: cc.Node
      },
      EndCoinEffect: function EndCoinEffect() {
        this.EffectNode.active = false;
      }
    });
    module.exports = CoinEffect;
    cc._RF.pop();
  }, {} ],
  CommonTipPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06394t6pTdPzrm3EZQkpRCk", "CommonTipPanel");
    "use strict";
    var CommonTipPanel = cc.Class({
      extends: cc.Component,
      properties: {
        TipDesLbl: cc.Label
      },
      ShowPanel: function ShowPanel(des) {
        this.TipDesLbl.string = des;
      },
      ClosePanel: function ClosePanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      }
    });
    module.exports = CommonTipPanel;
    cc._RF.pop();
  }, {} ],
  CurUseData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25a22U7aqFFwb0TM9POlqqf", "CurUseData");
    "use strict";
    var CurUseData = cc.Enum({});
    module.exports = CurUseData;
    cc._RF.pop();
  }, {} ],
  DIR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "151a1l9fORPRKWDH7vY769o", "DIR");
    "use strict";
    var DIR = cc.Enum({
      LEFT: 1,
      RIGHT: 2,
      UP: 3,
      DOWN: 4,
      NULL: 5
    });
    module.exports = DIR;
    cc._RF.pop();
  }, {} ],
  DataMapMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea360DSHMNHw79ZbQP7komE", "DataMapMgr");
    "use strict";
    var SkinMap = require("SkinMap");
    var DataType = require("DataType");
    var DataMapMgr = cc.Class({
      extends: cc.Component,
      properties: {
        skinMap: null
      },
      InitMaps: function InitMaps(argument) {
        this.skinMap = new SkinMap();
        var self = this;
        this.decodeAll = 0;
        this.skinMap.DecodeJson(function(result) {
          if (result) {
            self.decodeAll += 100;
            100 == self.decodeAll && cc.director.emit("DecoderMapsEnd", {});
          }
        });
      },
      getDataByDataTypeAndId: function getDataByDataTypeAndId(dataType, itemId) {
        var data = null;
        switch (dataType) {
         case DataType.Skin:
          data = this.skinMap.getDataById(itemId);
        }
        return data;
      },
      getDataListLengthByDataType: function getDataListLengthByDataType(dataType) {
        var len = 0;
        switch (dataType) {
         case DataType.Skin:
          len = this.skinMap.getJsonLength();
        }
        return len;
      },
      getDataListByDataType: function getDataListByDataType(dataType) {
        var listData = 0;
        switch (dataType) {
         case DataType.Skin:
          listData = this.skinMap.getDataList();
        }
        return listData;
      }
    });
    module.exports = DataMapMgr;
    cc._RF.pop();
  }, {
    DataType: "DataType",
    SkinMap: "SkinMap"
  } ],
  DataType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78fc2emXFlO7LF5tmlnAtzw", "DataType");
    "use strict";
    var DataType = cc.Enum({
      Skin: 1
    });
    module.exports = DataType;
    cc._RF.pop();
  }, {} ],
  DiamondPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16cb1U33K5NiLLVQ5VdoEsb", "DiamondPanel");
    "use strict";
    var DiamondPanel = cc.Class({
      extends: cc.Component,
      properties: {
        startUiNode: cc.Node,
        Atlas: cc.SpriteAtlas,
        Icon: cc.Sprite
      },
      ShowPanel: function ShowPanel(Sptype) {
        this.Icon.spriteFrame = this.Atlas.getSpriteFrame("target_" + Sptype);
      },
      ClosePanel: function ClosePanel() {
        cc.Mgr.AdsMgr.HideBannerAd();
        false == this.startUiNode.active && cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      }
    });
    module.exports = DiamondPanel;
    cc._RF.pop();
  }, {} ],
  GameController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d84cMbAEBN570AMd9CemLg", "GameController");
    "use strict";
    var Box = require("Box");
    var DIR = require("DIR");
    var Global = require("Global");
    var UIScore = require("UIScore");
    var GameState = require("GameState");
    var BoxType = require("BoxType");
    var GameController = cc.Class({
      extends: cc.Component,
      properties: {
        colsNum: 5,
        rowsNum: 5,
        parentNode: cc.Node,
        playerFlagNum: 10,
        gameState: {
          default: GameState.Play,
          type: GameState
        },
        checkPos: {
          default: [],
          type: [ cc.Integer ]
        },
        uiScore: UIScore,
        uiOverNode: cc.Node
      },
      onLoad: function onLoad() {
        var children = this.parentNode.children;
        this.boxMap = new Array(this.rowsNum);
        for (var i = 0; i < this.rowsNum; i++) {
          var tables = new Array(this.colsNum);
          for (var j = 0; j < this.colsNum; j++) {
            var index = i * this.colsNum + j;
            tables[j] = children[index].getComponent("Box");
          }
          this.boxMap[i] = tables;
        }
        this.addListeners();
        var self = this;
        cc.director.on("SetPlayState", function(data) {
          self.gameState = GameState.Play;
        });
        cc.director.on("UseSkin", function(data) {
          self.RefreshRoleBoxFlagNum();
        });
        cc.director.on("CheckCanMoveAllDir", function(data) {
          self.CheckCanDispelAfterSpwanNewBox();
        });
        cc.director.on("UseSpwanSkillEnd", function(data) {
          self.scheduleOnce(function() {
            self.CheckCanDispelAfterSpwanNewBox();
          }, Global.WaitAfterSpwanCheck);
        });
      },
      RefreshRoleBoxFlagNum: function RefreshRoleBoxFlagNum() {
        this.boxMap[this.checkPos[0]][this.checkPos[1]].RefreshBoxFlagNum(cc.Mgr.UserData.getCurSkinId());
        cc.Mgr.UserData.RefreshBoxMapRem(this.checkPos[0], this.checkPos[1], cc.Mgr.UserData.getCurSkinId(), false, false);
      },
      SaveRememberBoxMapData: function SaveRememberBoxMapData() {
        for (var i = 0; i < this.rowsNum; i++) for (var j = 0; j < this.colsNum; j++) {
          var flagNum = this.boxMap[i][j].flagNum;
          var showCoin = this.boxMap[i][j].IsCoinNodeActive();
          var showSeed = this.boxMap[i][j].IsSeedNodeActive();
          cc.Mgr.UserData.RefreshBoxMapRem(i, j, flagNum, showCoin, showSeed);
        }
        cc.Mgr.UserData.SaveBoxMapData(this.uiScore.score, 1);
      },
      ReturnBackOneStep: function ReturnBackOneStep() {
        for (var i = 0; i < this.rowsNum; i++) for (var j = 0; j < this.colsNum; j++) {
          var param = cc.Mgr.UserData.GetReBoxParam(i, j);
          this.boxMap[i][j].RefreshToBoxLastStep(param);
          if (this.boxMap[i][j].boxType == BoxType.Mine) {
            var pos = {};
            pos.x = i;
            pos.y = j;
            this.refreshCheckPos(pos);
          }
        }
      },
      StartGameUseProgressData: function StartGameUseProgressData() {
        this.playerFlagNum = cc.Mgr.UserData.getCurSkinId();
        this.RefreshLayOutUseProgress();
      },
      RefreshLayOutUseProgress: function RefreshLayOutUseProgress() {
        for (var i = 0; i < this.rowsNum; i++) for (var j = 0; j < this.colsNum; j++) this.boxMap[i][j].InitBox(i, j, 0);
        var ProgressList = cc.Mgr.UserData.GetReBoxMapUnNullLength();
        var len = ProgressList.length - 1;
        var idx = 0;
        this.schedule(function() {
          cc.Mgr.AudioMgr.playSFX("du");
          var row = ProgressList[idx].posX;
          var col = ProgressList[idx].posY;
          var param = cc.Mgr.UserData.GetReBoxParam(row, col);
          this.boxMap[row][col].PlayAnimation("boxspwan");
          this.boxMap[row][col].RefreshToBoxLastStep(param);
          if (this.boxMap[row][col].boxType == BoxType.Mine) {
            var pos = {};
            pos.x = row;
            pos.y = col;
            this.refreshCheckPos(pos);
          }
          idx == len && (this.gameState = GameState.Play);
          idx += 1;
        }, .15, len, .5);
      },
      StartGame: function StartGame() {
        this.playerFlagNum = cc.Mgr.UserData.getCurSkinId();
        cc.Mgr.UserData.IsTutorialOver() ? this.RefreshLayOut() : this.RefreshLayOutForTutorial();
      },
      ReStartGame: function ReStartGame() {
        this.playerFlagNum = cc.Mgr.UserData.getCurSkinId();
        this.RefreshLayOut();
      },
      OffTouchEventListener: function OffTouchEventListener() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouched, this);
      },
      AddTouchEventListener: function AddTouchEventListener() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
      },
      addListeners: function addListeners() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKey, this);
      },
      ClearBoard: function ClearBoard() {
        for (var i = this.rowsNum - 1; i >= 0; i--) for (var j = 0; j < this.colsNum; j++) this.boxMap[i][j].RefreshBoxInit();
      },
      checkGameOver: function checkGameOver() {
        var canL = this.checkCanMoveToDir(DIR.LEFT);
        var canR = this.checkCanMoveToDir(DIR.RIGHT);
        var canU = this.checkCanMoveToDir(DIR.UP);
        var canD = this.checkCanMoveToDir(DIR.DOWN);
        if (false == canL.canMove && false == canR.canMove && false == canU.canMove && false == canD.canMove) {
          cc.Mgr.AudioMgr.playSFX("di");
          this.PlayScaleAnima();
          cc.Mgr.UserData.ClearReBoxMap();
          this.gameState = GameState.Over;
          this.scheduleOnce(function() {
            cc.director.emit("ShowOver", {});
          }, Global.WaitShowGameOver);
        }
      },
      PlayScaleAnima: function PlayScaleAnima() {
        for (var i = this.rowsNum - 1; i >= 0; i--) for (var j = this.colsNum - 1; j >= 0; j--) this.boxMap[i][j].boxType != BoxType.Blank && this.boxMap[i][j].PlayAnimation("boxScale");
      },
      RefreshLayOut: function RefreshLayOut() {
        for (var i = 0; i < this.rowsNum; i++) for (var j = 0; j < this.colsNum; j++) this.boxMap[i][j].InitBox(i, j, BoxType.Blank);
        var StartShowArr = this.getArrayByItems(this.rowsNum * this.colsNum, 10);
        var idx = 0;
        var seed = Math.floor(9 * Math.random());
        this.schedule(function() {
          var row = Math.floor(StartShowArr[idx] / this.colsNum);
          var col = StartShowArr[idx] % this.colsNum;
          cc.log("\u884c = " + row + "   \u5217 = " + col);
          cc.Mgr.AudioMgr.playSFX("du");
          this.boxMap[row][col].PlayAnimation("boxspwan");
          if (9 == idx) {
            this.boxMap[row][col].InitBox(row, col, this.playerFlagNum);
            this.checkPos[0] = row;
            this.checkPos[1] = col;
            cc.Mgr.Global.setCheckPos(row, col);
            this.gameState = GameState.Play;
          } else idx == seed, this.boxMap[row][col].InitBox(row, col, 1);
          idx += 1;
        }, .15, 9, .5);
      },
      RefreshLayOutForTutorial: function RefreshLayOutForTutorial() {
        for (var i = 0; i < this.rowsNum; i++) for (var j = 0; j < this.colsNum; j++) this.boxMap[i][j].InitBox(i, j, 0);
        var StartShowArr = [ 20, 8, 23, 10, 21, 24, 14, 7, 4, 2 ];
        var idx = 0;
        this.schedule(function() {
          var row = Math.floor(StartShowArr[idx] / this.colsNum);
          var col = StartShowArr[idx] % this.colsNum;
          cc.log("\u884c = " + row + "   \u5217 = " + col);
          cc.Mgr.AudioMgr.playSFX("du");
          this.boxMap[row][col].PlayAnimation("boxspwan");
          if (9 == idx) {
            this.boxMap[row][col].InitBox(row, col, this.playerFlagNum);
            this.checkPos[0] = row;
            this.checkPos[1] = col;
            cc.Mgr.Global.setCheckPos(row, col);
            this.gameState = GameState.Play;
          } else 3 == idx, this.boxMap[row][col].InitBox(row, col, 1);
          idx += 1;
        }, .15, 9, .5);
      },
      getArrayByItems: function getArrayByItems(arrNum, num) {
        var temp_array = new Array();
        for (var index = 0; index < arrNum; index++) temp_array.push(index);
        var return_array = new Array();
        for (var i = 0; i < num; i++) {
          if (!(temp_array.length > 0)) break;
          var arrIndex = Math.floor(Math.random() * temp_array.length);
          return_array[i] = temp_array[arrIndex];
          temp_array.splice(arrIndex, 1);
        }
        return return_array;
      },
      checkCanMoveToDir: function checkCanMoveToDir(dir) {
        var re = {};
        re.canMove = true;
        re.indexList = [];
        if (dir == DIR.LEFT) {
          if (0 == this.checkPos[1]) {
            re.canMove = false;
            return re;
          }
          for (var i = this.checkPos[1] - 1; i >= 0; i--) {
            if (this.boxMap[this.checkPos[0]][i].boxType == BoxType.Stone || this.boxMap[this.checkPos[0]][i].boxType == BoxType.Flower) break;
            this.boxMap[this.checkPos[0]][i].boxType == BoxType.Blank && re.indexList.push(i);
          }
          0 == re.indexList.length && (re.canMove = false);
          return re;
        }
        if (dir == DIR.RIGHT) {
          if (this.checkPos[1] == this.colsNum - 1) {
            re.canMove = false;
            return re;
          }
          for (var i = this.checkPos[1] + 1; i <= this.colsNum - 1; i++) {
            if (this.boxMap[this.checkPos[0]][i].boxType == BoxType.Stone || this.boxMap[this.checkPos[0]][i].boxType == BoxType.Flower) break;
            this.boxMap[this.checkPos[0]][i].boxType == BoxType.Blank && re.indexList.push(i);
          }
          0 == re.indexList.length && (re.canMove = false);
          return re;
        }
        if (dir == DIR.DOWN) {
          if (this.checkPos[0] == this.rowsNum - 1) {
            re.canMove = false;
            return re;
          }
          for (var i = this.checkPos[0] + 1; i <= this.rowsNum - 1; i++) {
            if (this.boxMap[i][this.checkPos[1]].boxType == BoxType.Stone || this.boxMap[i][this.checkPos[1]].boxType == BoxType.Flower) break;
            this.boxMap[i][this.checkPos[1]].boxType == BoxType.Blank && re.indexList.push(i);
          }
          0 == re.indexList.length && (re.canMove = false);
          return re;
        }
        if (dir == DIR.UP) {
          if (0 == this.checkPos[0]) {
            re.canMove = false;
            return re;
          }
          for (var i = this.checkPos[0] - 1; i >= 0; i--) {
            if (this.boxMap[i][this.checkPos[1]].boxType == BoxType.Stone || this.boxMap[i][this.checkPos[1]].boxType == BoxType.Flower) break;
            this.boxMap[i][this.checkPos[1]].boxType == BoxType.Blank && re.indexList.push(i);
          }
          0 == re.indexList.length && (re.canMove = false);
          return re;
        }
        return re;
      },
      refreshCheckPos: function refreshCheckPos(pos) {
        this.checkPos[0] = pos.x;
        this.checkPos[1] = pos.y;
        cc.Mgr.Global.setCheckPos(pos.x, pos.y);
      },
      getCheckPos: function getCheckPos() {
        var pos = {};
        pos.row = this.checkPos[0];
        pos.col = this.checkPos[1];
        return pos;
      },
      getCheckPosBoxFlagNum: function getCheckPosBoxFlagNum() {
        return this.boxMap[this.checkPos[0]][this.checkPos[1]].flagNum;
      },
      getPosBoxFlagNum: function getPosBoxFlagNum(row, col) {
        return this.boxMap[row][col].flagNum;
      },
      getNullRectPos: function getNullRectPos() {
        var posList = [];
        for (var i = 0; i < this.colsNum; i++) for (var j = 0; j < this.rowsNum; j++) if (this.boxMap[j][i].boxType == BoxType.Blank && false == this.boxMap[j][i].IsCoinNodeActive() && false == this.boxMap[j][i].IsSeedNodeActive()) {
          var pos = {};
          pos.row = j;
          pos.col = i;
          posList.push(pos);
        }
        return posList;
      },
      JudeHasCheckNumNormalBoxInCol: function JudeHasCheckNumNormalBoxInCol(checkNum, colIndex) {
        var num = 0;
        for (var k = this.rowsNum - 1; k >= 0; k--) this.boxMap[k][colIndex].boxType == BoxType.Normal && (num += 1);
        return num == checkNum;
      },
      JudeHasCheckNumNormalBoxInRow: function JudeHasCheckNumNormalBoxInRow(checkNum, rowIndex) {
        var num = 0;
        for (var k = this.colsNum - 1; k >= 0; k--) this.boxMap[rowIndex][k].boxType == BoxType.Normal && (num += 1);
        return num == checkNum;
      },
      PickOutNullPosCantDispel: function PickOutNullPosCantDispel(nullPosList) {
        var lastPosList = [];
        for (var i = nullPosList.length - 1; i >= 0; i--) {
          var canSpwan = false;
          var col = nullPosList[i].col;
          var row = nullPosList[i].row;
          var flagRow = this.JudeHasCheckNumNormalBoxInRow(this.colsNum - 1, row);
          var flagCol = this.JudeHasCheckNumNormalBoxInCol(this.rowsNum - 1, col);
          if (false == flagCol && false == flagRow) {
            var pos = {};
            pos.row = row;
            pos.col = col;
            lastPosList.push(pos);
          }
        }
        return lastPosList;
      },
      IsPosOnCheckPosWay: function IsPosOnCheckPosWay(inPos) {
        var checkPos = this.getCheckPos();
        return checkPos.row == inPos.row || checkPos.col == inPos.col;
      },
      PickOutPosOnWayDisFromCheckPos: function PickOutPosOnWayDisFromCheckPos(dis, outPosList) {
        var checkPos = this.getCheckPos();
        var mList = [];
        for (var i = outPosList.length - 1; i >= 0; i--) outPosList[i].row + dis != checkPos.row && outPosList[i].row - dis != checkPos.row && outPosList[i].col + dis != checkPos.col && outPosList[i].col - dis != checkPos.col || mList.push(outPosList[i]);
        return mList;
      },
      PickOutNullPosOnCheckPosWay: function PickOutNullPosOnCheckPosWay(lastPosList) {
        var outPosList = [];
        for (var i = lastPosList.length - 1; i >= 0; i--) this.IsPosOnCheckPosWay(lastPosList[i]) && outPosList.push(lastPosList[i]);
        return outPosList;
      },
      SpwanSeedAtBoxPos: function SpwanSeedAtBoxPos() {
        this.scheduleOnce(function() {
          var nullPosList = this.getNullRectPos();
          var lastPosList = this.PickOutNullPosCantDispel(nullPosList);
          var posOnWayList = this.PickOutNullPosOnCheckPosWay(lastPosList);
          if (0 == nullPosList.length) {
            cc.Mgr.AudioMgr.playSFX("di");
            this.gameState = GameState.Over;
            cc.Mgr.UserData.ClearReBoxMap();
            cc.director.emit("ShowOver", {});
            return;
          }
          cc.Mgr.AudioMgr.playSFX("du");
          cc.Mgr.UserData.IsFinishSeedTutor() || cc.director.emit("TutorialSeed", {});
          if (0 == lastPosList.length) {
            var seed = Math.floor(Math.random() * nullPosList.length);
            var pos = nullPosList[seed];
            this.boxMap[pos.row][pos.col].SpwanSeedNode();
          } else if (0 == posOnWayList.length) {
            var seed = Math.floor(Math.random() * lastPosList.length);
            var pos = lastPosList[seed];
            this.boxMap[pos.row][pos.col].SpwanSeedNode();
          } else {
            var seedX = Math.random();
            if (seedX < .9) {
              var seedM = Math.random();
              if (seedM < .5) {
                var disTwoList = this.PickOutPosOnWayDisFromCheckPos(2, posOnWayList);
                if (0 == disTwoList.length) {
                  var seedD = Math.floor(Math.random() * posOnWayList.length);
                  var pos = posOnWayList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanSeedNode();
                } else {
                  var seedD = Math.floor(Math.random() * disTwoList.length);
                  var pos = disTwoList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanSeedNode();
                }
              } else if (seedM < .9) {
                var disOneList = this.PickOutPosOnWayDisFromCheckPos(1, posOnWayList);
                if (0 == disOneList.length) {
                  var seedD = Math.floor(Math.random() * posOnWayList.length);
                  var pos = posOnWayList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanSeedNode();
                } else {
                  var seedD = Math.floor(Math.random() * disOneList.length);
                  var pos = disOneList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanSeedNode();
                }
              } else {
                var disThreeList = this.PickOutPosOnWayDisFromCheckPos(3, posOnWayList);
                if (0 == disThreeList.length) {
                  var seedD = Math.floor(Math.random() * posOnWayList.length);
                  var pos = posOnWayList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanSeedNode();
                } else {
                  var seedD = Math.floor(Math.random() * disThreeList.length);
                  var pos = disThreeList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanSeedNode();
                }
              }
            } else {
              var seed = Math.floor(Math.random() * lastPosList.length);
              var pos = lastPosList[seed];
              this.boxMap[pos.row][pos.col].SpwanSeedNode();
            }
          }
        }, Global.WaitSpwanInterval);
      },
      SpwanBeiKeAtBoxPos: function SpwanBeiKeAtBoxPos() {
        this.scheduleOnce(function() {
          var nullPosList = this.getNullRectPos();
          var lastPosList = this.PickOutNullPosCantDispel(nullPosList);
          var posOnWayList = this.PickOutNullPosOnCheckPosWay(lastPosList);
          if (0 == nullPosList.length) {
            cc.Mgr.AudioMgr.playSFX("di");
            this.gameState = GameState.Over;
            cc.Mgr.UserData.ClearReBoxMap();
            cc.director.emit("ShowOver", {});
            return;
          }
          cc.Mgr.AudioMgr.playSFX("du");
          if (0 == lastPosList.length) {
            var seed = Math.floor(Math.random() * nullPosList.length);
            var pos = nullPosList[seed];
            this.boxMap[pos.row][pos.col].SpwanCoinNode();
          } else if (0 == posOnWayList.length) {
            var seed = Math.floor(Math.random() * lastPosList.length);
            var pos = lastPosList[seed];
            this.boxMap[pos.row][pos.col].SpwanCoinNode();
          } else {
            var seedX = Math.random();
            if (seedX < .9) {
              var seedM = Math.random();
              if (seedM < .5) {
                var disTwoList = this.PickOutPosOnWayDisFromCheckPos(2, posOnWayList);
                if (0 == disTwoList.length) {
                  var seedD = Math.floor(Math.random() * posOnWayList.length);
                  var pos = posOnWayList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanCoinNode();
                } else {
                  var seedD = Math.floor(Math.random() * disTwoList.length);
                  var pos = disTwoList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanCoinNode();
                }
              } else if (seedM < .9) {
                var disOneList = this.PickOutPosOnWayDisFromCheckPos(1, posOnWayList);
                if (0 == disOneList.length) {
                  var seedD = Math.floor(Math.random() * posOnWayList.length);
                  var pos = posOnWayList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanCoinNode();
                } else {
                  var seedD = Math.floor(Math.random() * disOneList.length);
                  var pos = disOneList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanCoinNode();
                }
              } else {
                var disThreeList = this.PickOutPosOnWayDisFromCheckPos(3, posOnWayList);
                if (0 == disThreeList.length) {
                  var seedD = Math.floor(Math.random() * posOnWayList.length);
                  var pos = posOnWayList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanCoinNode();
                } else {
                  var seedD = Math.floor(Math.random() * disThreeList.length);
                  var pos = disThreeList[seedD];
                  this.boxMap[pos.row][pos.col].SpwanCoinNode();
                }
              }
            } else {
              var seed = Math.floor(Math.random() * lastPosList.length);
              var pos = lastPosList[seed];
              this.boxMap[pos.row][pos.col].SpwanCoinNode();
            }
          }
        }, Global.WaitSpwanInterval);
      },
      SpwanNewBoxAtPos: function SpwanNewBoxAtPos(func) {
        var self = this;
        self.func = func;
        this.scheduleOnce(function() {
          var nullPosList = this.getNullRectPos();
          var lastPosList = this.PickOutNullPosCantDispel(nullPosList);
          var posOnWayList = this.PickOutNullPosOnCheckPosWay(lastPosList);
          var ratioSpwanStone = this.getRatioSpawnStone();
          if (0 == nullPosList.length) {
            cc.Mgr.AudioMgr.playSFX("di");
            this.gameState = GameState.Over;
            cc.Mgr.UserData.ClearReBoxMap();
            cc.director.emit("ShowOver", {});
            return;
          }
          cc.Mgr.AudioMgr.playSFX("du");
          if (0 == lastPosList.length) {
            var seed = Math.floor(Math.random() * nullPosList.length);
            var pos = nullPosList[seed];
            var par = {};
            var rate = Math.random();
            par.flagNum = rate < ratioSpwanStone ? BoxType.Stone : BoxType.Normal;
            this.boxMap[pos.row][pos.col].RefreshBox(par);
            this.boxMap[pos.row][pos.col].PlayAnimation("boxspwan");
          } else if (0 == posOnWayList.length) {
            var seed = Math.floor(Math.random() * lastPosList.length);
            var pos = lastPosList[seed];
            var par = {};
            var rate = Math.random();
            par.flagNum = rate < ratioSpwanStone ? BoxType.Stone : BoxType.Normal;
            this.boxMap[pos.row][pos.col].RefreshBox(par);
            this.boxMap[pos.row][pos.col].PlayAnimation("boxspwan");
          } else {
            var seedX = Math.random();
            if (seedX < .9) {
              var seedM = Math.random();
              if (seedM < .5) {
                var disTwoList = this.PickOutPosOnWayDisFromCheckPos(2, posOnWayList);
                if (0 == disTwoList.length) {
                  var seedD = Math.floor(Math.random() * posOnWayList.length);
                  var pos = posOnWayList[seedD];
                  var par = {};
                  var rate = Math.random();
                  par.flagNum = rate < ratioSpwanStone ? BoxType.Stone : BoxType.Normal;
                  this.boxMap[pos.row][pos.col].RefreshBox(par);
                  this.boxMap[pos.row][pos.col].PlayAnimation("boxspwan");
                } else {
                  var seedD = Math.floor(Math.random() * disTwoList.length);
                  var pos = disTwoList[seedD];
                  var par = {};
                  var rate = Math.random();
                  par.flagNum = rate < ratioSpwanStone ? BoxType.Stone : BoxType.Normal;
                  this.boxMap[pos.row][pos.col].RefreshBox(par);
                  this.boxMap[pos.row][pos.col].PlayAnimation("boxspwan");
                }
              } else if (seedM < .9) {
                var disOneList = this.PickOutPosOnWayDisFromCheckPos(1, posOnWayList);
                if (0 == disOneList.length) {
                  var seedD = Math.floor(Math.random() * posOnWayList.length);
                  var pos = posOnWayList[seedD];
                  var par = {};
                  var rate = Math.random();
                  par.flagNum = rate < ratioSpwanStone ? BoxType.Stone : BoxType.Normal;
                  this.boxMap[pos.row][pos.col].RefreshBox(par);
                  this.boxMap[pos.row][pos.col].PlayAnimation("boxspwan");
                } else {
                  var seedD = Math.floor(Math.random() * disOneList.length);
                  var pos = disOneList[seedD];
                  var par = {};
                  var rate = Math.random();
                  par.flagNum = rate < ratioSpwanStone ? BoxType.Stone : BoxType.Normal;
                  this.boxMap[pos.row][pos.col].RefreshBox(par);
                  this.boxMap[pos.row][pos.col].PlayAnimation("boxspwan");
                }
              } else {
                var disThreeList = this.PickOutPosOnWayDisFromCheckPos(3, posOnWayList);
                if (0 == disThreeList.length) {
                  var seedD = Math.floor(Math.random() * posOnWayList.length);
                  var pos = posOnWayList[seedD];
                  var par = {};
                  var rate = Math.random();
                  par.flagNum = rate < ratioSpwanStone ? BoxType.Stone : BoxType.Normal;
                  this.boxMap[pos.row][pos.col].RefreshBox(par);
                  this.boxMap[pos.row][pos.col].PlayAnimation("boxspwan");
                } else {
                  var seedD = Math.floor(Math.random() * disThreeList.length);
                  var pos = disThreeList[seedD];
                  var par = {};
                  var rate = Math.random();
                  par.flagNum = rate < ratioSpwanStone ? BoxType.Stone : BoxType.Normal;
                  this.boxMap[pos.row][pos.col].RefreshBox(par);
                  this.boxMap[pos.row][pos.col].PlayAnimation("boxspwan");
                }
              }
            } else {
              var seed = Math.floor(Math.random() * lastPosList.length);
              var pos = lastPosList[seed];
              var par = {};
              var rate = Math.random();
              par.flagNum = rate < ratioSpwanStone ? BoxType.Stone : BoxType.Normal;
              this.boxMap[pos.row][pos.col].RefreshBox(par);
              this.boxMap[pos.row][pos.col].PlayAnimation("boxspwan");
            }
          }
          self.func();
        }, Global.WaitSpwanInterval);
      },
      getRatioSpawnStone: function getRatioSpawnStone() {
        var gameLv = cc.Mgr.UserData.getGameLv();
        var max = gameLv - Global.SpawnStoneLv;
        var per = Global.SpawnStoneInitRatio;
        return max > 0 ? max / 20 > per ? per : max / 20 : 0;
      },
      getRatioSpawnSeed: function getRatioSpawnSeed() {
        var gameLv = cc.Mgr.UserData.getGameLv();
        var max = gameLv - Global.SpawnSeedLv;
        var per = Global.SpawnSeedInitRatio;
        return max > 0 ? max / 20 > per ? per : max / 20 : 0;
      },
      CheckCanDispelAfterSpwanNewBox: function CheckCanDispelAfterSpwanNewBox() {
        this.scheduleOnce(function() {
          var colList = this.CheckCanDispelofAllCol();
          var rowList = this.CheckCanDispelofAllRow();
          if (0 == colList.length && 0 == rowList.length) {
            this.gameState = GameState.Play;
            this.checkGameOver();
          } else {
            var getScore = 0;
            var disStoneNum = 0;
            cc.Mgr.AudioMgr.playSFX("Crush");
            cc.Mgr.PlatformController.QuakeScreen(true);
            if (0 != colList.length) for (var i = colList.length - 1; i >= 0; i--) for (var k = this.rowsNum - 1; k >= 0; k--) {
              this.boxMap[k][colList[i]].boxType == BoxType.Stone ? getScore += Global.DispelStoneScore : getScore += Global.DispelNormalScore;
              this.boxMap[k][colList[i]].PlayAnimation("boxblink");
            }
            if (0 != rowList.length) for (var i = rowList.length - 1; i >= 0; i--) for (var k = this.colsNum - 1; k >= 0; k--) {
              this.boxMap[rowList[i]][k].boxType == BoxType.Stone ? getScore += Global.DispelStoneScore : getScore += Global.DispelNormalScore;
              this.boxMap[rowList[i]][k].PlayAnimation("boxblink");
            }
          }
        }, Global.WaitDispelInterval);
      },
      OperateDispelOperate: function OperateDispelOperate() {
        cc.Mgr.AudioMgr.playSFX("box");
        this.scheduleOnce(function() {
          var colList = this.CheckCanDispelofAllCol();
          var rowList = this.CheckCanDispelofAllRow();
          cc.log("\u7b2c\u51e0\u6b65 = " + Global.SpwanStep);
          if (0 == colList.length && 0 == rowList.length) if (2 == Global.SpwanStep) {
            var ratio = Math.random();
            if (cc.Mgr.UserData.getGameLv() >= Global.SpawnSeedLv && ratio < Global.SpwanSeedVsBoxRatio) {
              this.SpwanSeedAtBoxPos();
              this.gameState = GameState.Play;
            } else this.SpwanNewBoxAtPos(function() {
              this.CheckCanDispelAfterSpwanNewBox();
            });
          } else {
            cc.Mgr.UserData.getGameLv() >= Global.SpawnCoinLv && 1 == Global.SpwanStep && this.SpwanBeiKeAtBoxPos();
            this.gameState = GameState.Play;
          } else {
            var getScore = 0;
            var disStoneNum = 0;
            cc.Mgr.AudioMgr.playSFX("Crush");
            cc.Mgr.PlatformController.QuakeScreen(true);
            if (0 != colList.length) for (var i = colList.length - 1; i >= 0; i--) for (var k = this.rowsNum - 1; k >= 0; k--) {
              this.boxMap[k][colList[i]].boxType == BoxType.Stone ? getScore += Global.DispelStoneScore : getScore += Global.DispelNormalScore;
              this.boxMap[k][colList[i]].PlayAnimation("boxblink");
            }
            if (0 != rowList.length) for (var i = rowList.length - 1; i >= 0; i--) for (var k = this.colsNum - 1; k >= 0; k--) {
              this.boxMap[rowList[i]][k].boxType == BoxType.Stone ? getScore += Global.DispelStoneScore : getScore += Global.DispelNormalScore;
              this.boxMap[rowList[i]][k].PlayAnimation("boxblink");
            }
          }
        }, Global.WaitDispelInterval);
      },
      CheckCanDispelofAllCol: function CheckCanDispelofAllCol() {
        var colList = [];
        for (var i = this.colsNum - 1; i >= 0; i--) {
          var needDis = true;
          for (var j = 0; j < this.rowsNum; j++) if (this.boxMap[j][i].boxType != BoxType.Normal && this.boxMap[j][i].boxType != BoxType.Stone && this.boxMap[j][i].boxType != BoxType.Flower) {
            needDis = false;
            break;
          }
          true == needDis && colList.push(i);
        }
        return colList;
      },
      CheckCanDispelofAllRow: function CheckCanDispelofAllRow() {
        var rowList = [];
        for (var k = this.rowsNum - 1; k >= 0; k--) {
          var needDis = true;
          for (var u = 0; u < this.colsNum; u++) if (this.boxMap[k][u].boxType != BoxType.Normal && this.boxMap[k][u].boxType != BoxType.Stone && this.boxMap[k][u].boxType != BoxType.Flower) {
            needDis = false;
            break;
          }
          true == needDis && rowList.push(k);
        }
        return rowList;
      },
      OperateRoleMoveAction: function OperateRoleMoveAction(dir, func) {
        var out = this.checkCanMoveToDir(dir);
        if (false == out.canMove) return;
        this.gameState = GameState.Merge;
        var self = this;
        self.func = func;
        dir == DIR.LEFT ? this.scheduleOnce(function() {
          for (var i = out.indexList[0]; i < this.checkPos[1]; i++) {
            var col = i;
            var flagNum = this.getPosBoxFlagNum(this.checkPos[0], col + 1);
            var parL = {};
            parL.flagNum = BoxType.Blank;
            this.boxMap[this.checkPos[0]][col + 1].RefreshBox(parL);
            var parN = {};
            parN.flagNum = flagNum;
            this.boxMap[this.checkPos[0]][col].RefreshBox(parN, DIR.LEFT);
            if (col == this.checkPos[1] - 1) {
              var pos = {};
              pos.x = this.checkPos[0];
              pos.y = col;
              this.refreshCheckPos(pos);
            }
          }
          var reOut = this.checkCanMoveToDir(dir);
          self.func(reOut);
        }, Global.moveOneInterval) : dir == DIR.RIGHT ? this.scheduleOnce(function() {
          for (var i = out.indexList[0]; i > this.checkPos[1]; i--) {
            var col = i;
            var flagNum = this.getPosBoxFlagNum(this.checkPos[0], col - 1);
            var parL = {};
            parL.flagNum = BoxType.Blank;
            this.boxMap[this.checkPos[0]][col - 1].RefreshBox(parL);
            var parN = {};
            parN.flagNum = flagNum;
            this.boxMap[this.checkPos[0]][col].RefreshBox(parN, DIR.RIGHT);
            if (col == this.checkPos[1] + 1) {
              var pos = {};
              pos.x = this.checkPos[0];
              pos.y = col;
              this.refreshCheckPos(pos);
            }
          }
          var reOut = this.checkCanMoveToDir(dir);
          self.func(reOut);
        }, Global.moveOneInterval) : dir == DIR.UP ? this.scheduleOnce(function() {
          for (var i = out.indexList[0]; i < this.checkPos[0]; i++) {
            var row = i;
            var flagNum = this.getPosBoxFlagNum(row + 1, this.checkPos[1]);
            var parL = {};
            parL.flagNum = BoxType.Blank;
            this.boxMap[row + 1][this.checkPos[1]].RefreshBox(parL);
            var parN = {};
            parN.flagNum = flagNum;
            this.boxMap[row][this.checkPos[1]].RefreshBox(parN, DIR.UP);
            if (row == this.checkPos[0] - 1) {
              var pos = {};
              pos.x = row;
              pos.y = this.checkPos[1];
              this.refreshCheckPos(pos);
            }
          }
          var reOut = this.checkCanMoveToDir(dir);
          self.func(reOut);
        }, Global.moveOneInterval) : dir == DIR.DOWN && this.scheduleOnce(function() {
          for (var i = out.indexList[0]; i > this.checkPos[0]; i--) {
            var row = i;
            var flagNum = this.getPosBoxFlagNum(row - 1, this.checkPos[1]);
            var parL = {};
            parL.flagNum = BoxType.Blank;
            this.boxMap[row - 1][this.checkPos[1]].RefreshBox(parL);
            var parN = {};
            parN.flagNum = flagNum;
            this.boxMap[row][this.checkPos[1]].RefreshBox(parN, DIR.DOWN);
            if (row == this.checkPos[0] + 1) {
              var pos = {};
              pos.x = row;
              pos.y = this.checkPos[1];
              this.refreshCheckPos(pos);
            }
          }
          var reOut = this.checkCanMoveToDir(dir);
          self.func(reOut);
        }, Global.moveOneInterval);
      },
      MoveBoxDirLeft: function MoveBoxDirLeft(dir) {
        this.OperateRoleMoveAction(DIR.LEFT, function(dt) {
          if (false == dt.canMove) {
            Global.AddSpwanStep();
            this.gameState = GameState.Merge;
            this.OperateDispelOperate();
          } else this.MoveBoxDirLeft(DIR.LEFT);
        });
      },
      MoveBoxDirRight: function MoveBoxDirRight(dir) {
        this.OperateRoleMoveAction(DIR.RIGHT, function(dt) {
          if (false == dt.canMove) {
            Global.AddSpwanStep();
            this.gameState = GameState.Merge;
            this.OperateDispelOperate();
          } else this.MoveBoxDirRight(DIR.RIGHT);
        });
      },
      MoveBoxDirUp: function MoveBoxDirUp(dir) {
        this.OperateRoleMoveAction(DIR.UP, function(dt) {
          if (false == dt.canMove) {
            Global.AddSpwanStep();
            this.gameState = GameState.Merge;
            this.OperateDispelOperate();
          } else this.MoveBoxDirUp(DIR.UP);
        });
      },
      MoveBoxDirDown: function MoveBoxDirDown(dir) {
        this.OperateRoleMoveAction(DIR.DOWN, function(dt) {
          if (false == dt.canMove) {
            Global.AddSpwanStep();
            this.gameState = GameState.Merge;
            this.OperateDispelOperate();
          } else this.MoveBoxDirDown(DIR.DOWN);
        });
      },
      onTouched: function onTouched(event) {
        if (this.gameState != GameState.Play) return;
        this.SaveRememberBoxMapData();
        Global.hasMove = true;
        var startPos = event.getStartLocation();
        var endPos = event.getLocation();
        var offsetX = endPos.x - startPos.x;
        var offsetY = endPos.y - startPos.y;
        if (Math.abs(offsetX) > Math.abs(offsetY)) {
          if (offsetX > 0) {
            if (offsetX > 5) {
              cc.director.emit("MoveRoleBox", {
                DIR: DIR.RIGHT
              });
              this.MoveBoxDirRight(DIR.RIGHT);
            }
          } else if (offsetX < 0 && offsetX < -5) {
            cc.director.emit("MoveRoleBox", {
              DIR: DIR.LEFT
            });
            this.MoveBoxDirLeft(DIR.LEFT);
          }
        } else offsetY > 5 ? this.MoveBoxDirUp(DIR.UP) : offsetY < 0 && this.MoveBoxDirDown(DIR.DOWN);
      },
      onKey: function onKey(event) {
        if (this.gameState != GameState.Play) return;
        this.SaveRememberBoxMapData();
        Global.hasMove = true;
        switch (event.keyCode) {
         case cc.macro.KEY.up:
         case cc.macro.KEY.w:
          this.MoveBoxDirUp(DIR.UP);
          break;

         case cc.macro.KEY.down:
         case cc.macro.KEY.s:
          this.MoveBoxDirDown(DIR.DOWN);
          break;

         case cc.macro.KEY.left:
         case cc.macro.KEY.a:
          this.MoveBoxDirLeft(DIR.LEFT);
          break;

         case cc.macro.KEY.right:
         case cc.macro.KEY.d:
          this.MoveBoxDirRight(DIR.RIGHT);
        }
      }
    });
    module.exports = GameController;
    cc._RF.pop();
  }, {
    Box: "Box",
    BoxType: "BoxType",
    DIR: "DIR",
    GameState: "GameState",
    Global: "Global",
    UIScore: "UIScore"
  } ],
  GameState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8574c/3JdC3r6oCDUAjngc", "GameState");
    "use strict";
    var GameState = cc.Enum({
      Wait: 0,
      Play: 1,
      Over: 2,
      Spwan: 3,
      Merge: 4,
      Pause: 5
    });
    module.exports = GameState;
    cc._RF.pop();
  }, {} ],
  Global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2af1TemoxOJb1Yy4Sfzn0a", "Global");
    "use strict";
    var BonusType = require("BonusType");
    var DataType = require("DataType");
    var Global = cc.Class({
      statics: {
        SpwanStep: 0,
        SpwanFlag: 2,
        SpawnStoneLv: 6,
        SpawnSeedLv: 4,
        SpawnCoinLv: 2,
        DispelNormalScore: 10,
        DispelAddScore: 50,
        moveOneInterval: .0515,
        WaitSpwanInterval: .2,
        WaitShowGameOver: .5,
        WaitCheckCanMoveAllDir: .45,
        WaitAfterSpwanCheck: .35,
        WaitDispelInterval: .1,
        LvScore: 21,
        RuneRewardTimesForOneDay: 10,
        DispelStoneScore: 50,
        SpawnSeedInitRatio: .3,
        SpawnStoneInitRatio: .3,
        SpwanSeedVsBoxRatio: .12,
        ContinueRebornTimes: 3,
        rewardGetInterval: 120,
        rewardGetLifeTime: 120,
        LeftRebornTime: 3,
        UseSkillState: false,
        UseSkillSpwanNow: false,
        SKillBoomNum: 0,
        BoomCost: 800,
        ReturnStepCost: 500,
        PassLvGetCoin: 100,
        DiamondGetScore: 100,
        DiamondGetNum: 100,
        CoinBonus: 0,
        DiamondBonus: 0,
        canGetReward: false,
        hasMove: false,
        checkPos: [],
        screenStartTime: 0,
        RefreshBonusData: function RefreshBonusData() {
          var skinId = cc.Mgr.UserData.getCurSkinId();
          var bonusList = cc.Mgr.DataMapMgr.getDataByDataTypeAndId(DataType.Skin, skinId).bonusList;
          this.CoinBonus = 0;
          this.DiamondBonus = 0;
          for (var i = bonusList.length - 1; i >= 0; i--) bonusList[i].bonusType == BonusType.CoinBonus ? this.CoinBonus += bonusList[i].bonusNum : bonusList[i].bonusType == BonusType.RuneBonus && (this.DiamondBonus = bonusList[i].bonusNum);
          this.CoinBonus = 1 + this.CoinBonus / 100;
          this.DiamondBonus = 1 + this.DiamondBonus / 100;
        },
        InitRewardLifeTime: function InitRewardLifeTime() {
          this.rewardGetLifeTime = 900;
          this.canGetReward = false;
        },
        SubLeftRewardTime: function SubLeftRewardTime() {
          if (false == this.canGetReward) {
            cc.Mgr.Global.rewardGetLifeTime -= 1;
            0 == this.rewardGetLifeTime && (this.canGetReward = true);
          }
        },
        AddSpwanStep: function AddSpwanStep() {
          this.SpwanStep += 1;
          this.SpwanStep > 2 && (this.SpwanStep = 1);
        },
        clearCheckPos: function clearCheckPos() {
          this.checkPos[0] = -1;
          this.checkPos[1] = -1;
        },
        InitData: function InitData() {
          this.SpwanStep = 0;
          this.SpwanFlag = 2;
          this.SKillBoomNum = 0;
          this.UseSkillState = false;
          this.UseSkillSpwanNow = false;
          this.hasMove = false;
          this.clearCheckPos();
        },
        InitReBornTime: function InitReBornTime() {
          this.LeftRebornTime = 3;
        },
        setCheckPos: function setCheckPos(posX, PoxY) {
          this.checkPos[0] = posX;
          this.checkPos[1] = PoxY;
        }
      }
    });
    module.exports = Global;
    cc._RF.pop();
  }, {
    BonusType: "BonusType",
    DataType: "DataType"
  } ],
  LvUpPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5048b9EVlFHCLcDe/O9uWBI", "LvUpPanel");
    "use strict";
    var LvUpPanel = cc.Class({
      extends: cc.Component,
      properties: {
        getNumLbl: cc.Label
      },
      ShowPanel: function ShowPanel(data) {
        this.getNumLbl.string = data;
      }
    });
    module.exports = LvUpPanel;
    cc._RF.pop();
  }, {} ],
  MenuPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8624eSf5iNHxauwEek72C4L", "MenuPanel");
    "use strict";
    var MenuPanel = cc.Class({
      extends: cc.Component,
      properties: {
        Atlas: cc.SpriteAtlas,
        Icon: cc.Sprite
      },
      ShowPanel: function ShowPanel(spType) {
        this.Icon.spriteFrame = this.Atlas.getSpriteFrame("target_" + spType);
        cc.Mgr.AdsMgr.RecoverShowBanner();
      },
      ClosePanel: function ClosePanel() {
        cc.Mgr.AdsMgr.HideBannerAd();
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      }
    });
    module.exports = MenuPanel;
    cc._RF.pop();
  }, {} ],
  OverPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df80ee8UyRB9IE0kFIMVmvE", "OverPanel");
    "use strict";
    var OverPanel = cc.Class({
      extends: cc.Component,
      properties: {
        Atlas: cc.SpriteAtlas,
        scoreLbl: cc.Label,
        btnBgSp: cc.Sprite,
        btnLbl: cc.Label,
        shareLbl: cc.Label,
        rebornLeftLbl: cc.Label
      },
      ShowPanel: function ShowPanel() {
        this.scoreLbl.string = cc.Mgr.UserData.getCurScore();
        this.rebornLeftLbl.string = "(" + cc.Mgr.UserData.leftRebornTimes + "/3)";
        if (cc.Mgr.UserData.leftRebornTimes > 0) {
          this.shareLbl.string = "\u5206\u4eab\u6e38\u620f";
          this.btnBgSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_1");
          this.btnLbl.string = "\u89c6\u9891\u91cd\u7f6e";
        } else {
          this.shareLbl.string = "\u70ab\u8000\u4e00\u4e0b";
          this.btnBgSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_2");
          this.btnLbl.string = "\u6e38\u620f\u7ed3\u675f";
        }
        cc.Mgr.AdsMgr.RecoverShowBanner();
      }
    });
    module.exports = OverPanel;
    cc._RF.pop();
  }, {} ],
  PlatformController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "05882nT34pGTa94tDlCdCoR", "PlatformController");
    "use strict";
    var PlatformController = cc.Class({
      statics: {
        wxSubContextViewLock: 0,
        platform: "uc",
        QuakeState: 1,
        isScreen: false,
        Init: function Init() {
          window.wx || window.tt || window.swan || window.qq || window.uc || (this.platform = "pc");
        },
        IsLoginSync: function IsLoginSync() {
          if ("baidu" == this.platform) {
            var result = swan.isLoginSync();
            if (result.isLogin) {
              console.log("\u5df2\u7ecf\u6709\u767b\u9646\u4e86");
              return true;
            }
            return false;
          }
          "tt" == this.platform;
          return true;
        },
        Login: function Login() {
          var self = this;
          "baidu" == this.platform ? swan.login({
            success: function success() {},
            fail: function fail() {
              swan.showModal({
                title: "\u767b\u5f55\u5931\u8d25",
                content: "\u662f\u5426\u91cd\u65b0\u767b\u5f55\uff1f",
                cancelText: "\u9000\u51fa\u6e38\u620f",
                success: function success(res) {
                  if (res.confirm) {
                    console.log("\u70b9\u51fb\u4e86\u786e\u5b9a");
                    self.Login();
                  } else if (res.cancel) {
                    console.log("\u70b9\u51fb\u4e86\u53d6\u6d88");
                    swan.exit();
                  }
                }
              });
            }
          }) : "tt" == this.platform && tt.login({
            success: function success(res) {},
            fail: function fail(res) {
              tt.showModal({
                title: "\u767b\u5f55\u5931\u8d25",
                content: "\u662f\u5426\u91cd\u65b0\u767b\u5f55\uff1f",
                cancelText: "\u9000\u51fa\u6e38\u620f",
                success: function success(res) {
                  if (res.confirm) {
                    console.log("\u70b9\u51fb\u4e86\u786e\u5b9a");
                    self.Login();
                  } else if (res.cancel) {
                    console.log("\u70b9\u51fb\u4e86\u53d6\u6d88");
                    tt.exit();
                  }
                }
              });
            }
          });
          return true;
        },
        CreateGameClub: function CreateGameClub() {
          if ("wx" == this.platform) {
            var winSize = cc.view.getVisibleSize();
            var leftRatio = 68 / winSize.width;
            var topRatio = 275 / winSize.height;
            var sysInfo = wx.getSystemInfoSync();
            this.leftPos = sysInfo.windowWidth * leftRatio;
            this.topPos = sysInfo.windowHeight * topRatio;
            var self = this;
            this.gameClubBtn = wx.createGameClubButton({
              icon: "green",
              text: "\u6e38\u620f\u5708",
              style: {
                left: self.leftPos - 20,
                top: self.topPos - 20,
                width: 45,
                height: 45
              }
            });
          }
        },
        ShowClubButton: function ShowClubButton() {
          var flag = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          "wx" == this.platform && null != this.gameClubBtn && (true == flag ? this.gameClubBtn.show() : this.gameClubBtn.hide());
        },
        CreateFeedBackButton: function CreateFeedBackButton() {
          if ("wx" == this.platform) {
            var winSize = cc.view.getVisibleSize();
            var leftRatio = 68 / winSize.width;
            var topRatio = 275 / winSize.height;
            var sysInfo = wx.getSystemInfoSync();
            this.lPos = sysInfo.windowWidth * leftRatio;
            this.tPos = sysInfo.windowHeight * topRatio;
            var self = this;
            cc.loader.loadRes("/share.png", function(err, texture) {
              self.feedBackBtn = wx.createFeedbackButton({
                type: "image",
                image: texture,
                style: {
                  left: self.lPos - 20,
                  top: self.tPos - 20,
                  width: 45,
                  height: 45
                }
              });
            });
          }
        },
        ShowFeedbackBtn: function ShowFeedbackBtn() {
          var flag = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          "wx" == this.platform && null != this.feedBackBtn && (true == flag ? this.feedBackBtn.show() : this.feedBackBtn.hide());
        },
        ShareTopNav: function ShareTopNav() {
          var info = cc.Mgr.ShareInfos.getShareInfos(1);
          if ("wx" == this.platform) {
            wx.showShareMenu({
              withShareTicket: true
            });
            wx.onShareAppMessage(function() {
              return {
                title: info.text,
                imageUrl: info.url
              };
            });
          } else if ("qq" == this.platform) {
            qq.showShareMenu({
              showShareItems: [ "qq", "qzone", "wechatFriends", "wechatMoment" ]
            });
            qq.onShareAppMessage(function() {
              return {
                title: info.text,
                imageUrl: info.url
              };
            });
          } else if ("tt" == this.platform) {
            tt.showShareMenu(false);
            tt.onShareAppMessage(function() {
              return {
                title: info.text,
                imageUrl: info.url
              };
            });
          } else if ("baidu" == this.platform) {
            swan.showShareMenu(false);
            swan.onShareAppMessage(function() {
              return {
                title: info.text,
                imageUrl: info.url
              };
            });
          }
        },
        ShareToFriendTxt: function ShareToFriendTxt(str) {
          var info = cc.Mgr.ShareInfos.getShareInfos(0);
          if ("wx" == this.platform) {
            console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a");
            wx.shareAppMessage({
              title: str,
              imageUrl: info.url
            });
          } else if ("qq" == this.platform) {
            console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a");
            wx.shareAppMessage({
              title: str,
              imageUrl: info.url
            });
          } else if ("tt" == this.platform) tt.shareAppMessage({
            title: str
          }); else if ("baidu" == this.platform) {
            console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a");
            swan.shareAppMessage({
              title: str
            });
          } else "uc" == this.platform && uc.shareAppMessage({
            title: str,
            imageUrl: info.url,
            query: "",
            target: "wechat",
            success: function success(res) {
              console.log("shareAppMessage share success", JSON.stringify(res));
            },
            fail: function fail(err) {
              console.log("shareAppMessage share fail", JSON.stringify(err));
            }
          });
        },
        getUrl: function getUrl(url) {
          return cc.url.raw("resources/" + url + ".jpg");
        },
        ShareToFriend: function ShareToFriend(index) {
          var info = cc.Mgr.ShareInfos.getShareInfos(index);
          if ("wx" == this.platform) wx.shareAppMessage({
            title: info.text,
            imageUrl: info.url
          }); else if ("qq" == this.platform) {
            console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a");
            qq.shareAppMessage({
              title: info.text,
              imageUrl: info.url
            });
          } else if ("tt" == this.platform) tt.shareAppMessage({
            title: info.text,
            imageUrl: info.url
          }); else if ("baidu" == this.platform) {
            console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a");
            swan.shareAppMessage({
              title: info.text,
              imageUrl: info.url
            });
          } else "uc" == this.platform && uc.shareAppMessage({
            title: info.text,
            imageUrl: info.url,
            query: "",
            target: "wechat",
            success: function success(res) {
              console.log("shareAppMessage share success", JSON.stringify(res));
            },
            fail: function fail(err) {
              console.log("shareAppMessage share fail", JSON.stringify(err));
            }
          });
        },
        showToast: function showToast(text) {
          cc.log(text);
          "wx" == this.platform ? wx.showToast({
            title: text,
            icon: "none",
            duration: 1e3
          }) : "qq" == this.platform ? qq.showToast({
            title: text,
            icon: "none",
            duration: 1500
          }) : "tt" == this.platform ? tt.showToast({
            title: text,
            icon: "none",
            duration: 1e3
          }) : "baidu" == this.platform && swan.showToast({
            title: text,
            icon: "success",
            duration: 2e3
          });
        },
        setUserCloudStorage: function setUserCloudStorage(socre) {
          cc.log("setUserCloudStorage socre = " + socre);
          if ("wx" == this.platform) {
            var kvData = {};
            kvData.wxgame = {};
            kvData.wxgame.score = socre;
            kvData.wxgame.update_time = new Date().getTime();
            console.log(JSON.stringify(kvData));
            var kvDataList = new Array();
            kvDataList.push({
              key: "\bjzScore",
              value: JSON.stringify(kvData)
            });
            wx.setUserCloudStorage({
              KVDataList: kvDataList,
              success: function success(res) {
                console.log("success:" + JSON.stringify(res));
              },
              fail: function fail(res) {
                console.log("fail : " + res);
              }
            });
          } else if ("qq" == this.platform) {
            var kvData = {};
            kvData.wxgame = {};
            kvData.wxgame.score = socre;
            kvData.wxgame.update_time = new Date().getTime();
            console.log(JSON.stringify(kvData));
            var kvDataList = new Array();
            kvDataList.push({
              key: "\bjzScore",
              value: JSON.stringify(kvData)
            });
            qq.setUserCloudStorage({
              KVDataList: kvDataList,
              success: function success(res) {
                console.log("success:" + JSON.stringify(res));
              },
              fail: function fail(res) {
                console.log("fail : " + res);
              }
            });
          } else if ("baidu" == this.platform) {
            var kvData = {};
            kvData.wxgame = {};
            kvData.wxgame.score = socre;
            kvData.wxgame.update_time = new Date().getTime();
            console.log(JSON.stringify(kvData));
            var kvDataList = new Array();
            kvDataList.push({
              key: "\bjzScore",
              value: JSON.stringify(kvData)
            });
            swan.setUserCloudStorage({
              KVDataList: kvDataList,
              success: function success(res) {
                return console.log("success " + res);
              },
              fail: function fail(res) {
                return console.log("fail " + res);
              },
              complete: function complete(res) {
                return console.log("complete " + res);
              }
            });
          }
        },
        OpenServiceConversation: function OpenServiceConversation() {
          "wx" == this.platform ? wx.openCustomerServiceConversation({
            sessionFrom: "",
            showMessageCard: true
          }) : "baidu" == this.platform ? swan.openCustomerServiceConversation({}) : "tt" == this.platform;
        },
        IsSupportRank: function IsSupportRank() {
          if ("wx" == this.platform || "baidu" == this.platform || "qq" == this.platform) return true;
          return false;
        },
        showSubContentView: function showSubContentView() {
          if ("wx" == this.platform || "baidu" == this.platform || "qq" == this.platform) {
            var param = {};
            param.platform = this.platform;
            param.flag = true;
            cc.director.GlobalEvent.emit(cc.Mgr.Event.ShowRank, param);
          }
        },
        hideSubContentView: function hideSubContentView() {
          if ("wx" == this.platform || "baidu" == this.platform || "qq" == this.platform) {
            var param = {};
            param.flag = false;
            param.platform = this.platform;
            cc.director.GlobalEvent.emit(cc.Mgr.Event.ShowRank, param);
          }
        },
        SendMessageToSubView: function SendMessageToSubView(code) {
          var curScore = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          var msg = {};
          msg.code = code;
          msg.curScore = curScore;
          "wx" == this.platform ? wx.getOpenDataContext().postMessage({
            message: msg
          }) : "qq" == this.platform ? qq.getOpenDataContext().postMessage({
            message: msg
          }) : "baidu" == this.platform ? swan.getOpenDataContext().postMessage({
            message: msg
          }) : "tt" == this.platform && tt.getOpenDataContext().postMessage({
            message: msg
          });
        },
        IsSupportRecordScreen: function IsSupportRecordScreen() {
          if ("tt" == this.platform) return true;
          if ("baidu" == this.platform) return !!this.CompareSdkVesrion(swan.getSystemInfoSync().SDKVersion, "1.4.1");
          return false;
        },
        StartRecordScreen: function StartRecordScreen() {
          this.isScreen = true;
          var self = this;
          this.videoPath = "";
          if ("tt" == this.platform) {
            if (null == this.recorderManager) {
              this.recorderManager = tt.getGameRecorderManager();
              this.recorderManager.onStart(function(res) {
                cc.Mgr.Global.screenStartTime = cc.Mgr.Utils.GetSysTime();
                console.log("\u5f55\u5236\u5f00\u59cb\u4e86: " + res);
                self.showToast("\u5f00\u59cb\u5f55\u5c4f");
              });
              this.recorderManager.onStop(function(res) {
                self.showToast("\u7ed3\u675f\u5f55\u5c4f");
                self.isScreen = false;
                cc.director.emit("OnStopScreen", {});
                self.videoPath = res.videoPath;
                self.ShareRecordScreen();
              });
              this.recorderManager.onPause(function() {
                console.log("\u5f55\u5236\u6682\u505c\u4e86");
              });
              this.recorderManager.onResume(function() {
                console.log("\u5f55\u5236\u6062\u590d\u4e86");
              });
              this.recorderManager.onError(function(errMsg) {
                console.log("\u5f55\u5236\u51fa\u9519\u4e86:" + errMsg);
              });
            }
            this.recorderManager.start({
              duration: 30
            });
          } else if ("baidu" == this.platform) {
            if (null == this.recorderManager) {
              this.recorderManager = swan.getVideoRecorderManager();
              this.recorderManager.onStart(function(res) {
                console.log("\u5f55\u5236\u5f00\u59cb\u4e86: " + res);
              });
              this.recorderManager.onStop(function(res) {
                console.log("\u5f55\u5236\u7ed3\u675f\u4e86: " + res.videoPath);
                self.videoPath = res.videoPath;
              });
              this.recorderManager.onPause(function() {
                console.log("\u5f55\u5236\u6682\u505c\u4e86");
              });
              this.recorderManager.onResume(function() {
                console.log("\u5f55\u5236\u6062\u590d\u4e86");
              });
              this.recorderManager.onError(function(errMsg) {
                console.log("\u5f55\u5236\u51fa\u9519\u4e86:" + errMsg);
              });
            }
            this.recorderManager.start({
              duration: 30,
              microphoneEnabled: true
            });
          }
        },
        StopRecordScreen: function StopRecordScreen() {
          this.isScreen = false;
          if ("tt" == this.platform) {
            if (null == this.recorderManager) return;
            console.log("\u505c\u6b62\u5f55\u5236");
            this.recorderManager.stop();
          } else if ("baidu" == this.platform) {
            if (null == this.recorderManager) return;
            console.log("\u505c\u6b62\u5f55\u5236");
            this.recorderManager.stop();
          }
        },
        ShareRecordScreen: function ShareRecordScreen() {
          var self = this;
          if (cc.Mgr.Utils.GetSysTime() - cc.Mgr.Global.screenStartTime <= 3) {
            cc.Mgr.Global.screenStartTime = 0;
            this.showToast("\u5f55\u5236\u65f6\u95f4\u5c11\u4e8e\u4e09\u79d2,\u672a\u80fd\u6210\u529f\u4fdd\u5b58\u89c6\u9891");
            return;
          }
          this.showToast("\u7ed3\u675f\u5f55\u5c4f");
          if ("tt" == this.platform) {
            if (null == this.recorderManager || "" == this.videoPath) return;
            console.log("\u5206\u4eab\u5f55\u5236\u7684\u89c6\u9891");
            tt.shareVideo({
              videoPath: "" + this.videoPath,
              success: function success() {
                self.showToast("\u5206\u4eab\u6210\u529f\uff01");
                console.log("\u5206\u4eab\u6210\u529f\uff01");
              },
              fail: function fail(e) {
                self.showToast("\u5206\u4eab\u5931\u8d25\uff01");
                console.log("\u5206\u4eab\u5931\u8d25\uff01" + e);
              }
            });
          } else if ("baidu" == this.platform) {
            if (null == this.recorderManager || null == this.videoPath) return;
            console.log("\u5206\u4eab\u5f55\u5236\u7684\u89c6\u9891");
            swan.shareVideo({
              videoPath: "" + this.videoPath,
              success: function success() {
                console.log("\u5206\u4eab\u6210\u529f\uff01");
              },
              fail: function fail(e) {
                console.log("\u5206\u4eab\u5931\u8d25\uff01" + e);
              }
            });
          }
        },
        QuakeScreen: function QuakeScreen() {
          var long = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (1 != this.QuakeState) return;
          "pc" != this.platform && (true == long ? "tt" == this.platform ? tt.vibrateLong({
            success: function success(res) {
              console.log("" + res);
            },
            fail: function fail(res) {
              console.log("vibrateLong\u8c03\u7528\u5931\u8d25");
            }
          }) : "qq" == this.platform ? qq.vibrateLong({
            success: function success(res) {
              console.log("" + res);
            },
            fail: function fail(res) {
              console.log("vibrateLong\u8c03\u7528\u5931\u8d25");
            }
          }) : "baidu" == this.platform ? swan.vibrateLong({
            success: function success(res) {
              console.log("" + res);
            },
            fail: function fail(res) {
              console.log("vibrateLong\u8c03\u7528\u5931\u8d25");
            }
          }) : "wx" == this.platform ? wx.vibrateLong({
            success: function success(res) {
              console.log("" + res);
            },
            fail: function fail(res) {
              console.log("vibrateLong\u8c03\u7528\u5931\u8d25");
            }
          }) : "qg_oppo" == this.platform && qg.vibrateLong({
            success: function success(res) {},
            fail: function fail(res) {},
            complete: function complete(res) {}
          }) : "tt" == this.platform ? tt.vibrateShort({
            success: function success(res) {
              console.log("" + res);
            },
            fail: function fail(res) {
              console.log("vibrateShort\u8c03\u7528\u5931\u8d25");
            }
          }) : "baidu" == this.platform ? swan.vibrateShort({
            success: function success(res) {
              console.log("" + res);
            },
            fail: function fail(res) {
              console.log("vibrateShort\u8c03\u7528\u5931\u8d25");
            }
          }) : "qq" == this.platform ? qq.vibrateShort({
            success: function success(res) {
              console.log("" + res);
            },
            fail: function fail(res) {
              console.log("vibrateShort\u8c03\u7528\u5931\u8d25");
            }
          }) : "wx" == this.platform ? wx.vibrateShort({
            success: function success(res) {
              console.log("" + res);
            },
            fail: function fail(res) {
              console.log("vibrateLong\u8c03\u7528\u5931\u8d25");
            }
          }) : "qg_oppo" == this.platform && qg.vibrateShort({
            success: function success(res) {},
            fail: function fail(res) {},
            complete: function complete(res) {}
          }));
        },
        SetQuakeState: function SetQuakeState() {
          this.QuakeState = (this.QuakeState + 1) % 2;
        },
        GetQuakeState: function GetQuakeState() {
          return this.QuakeState;
        },
        JumpToOtherApp: function JumpToOtherApp() {
          var Id = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          var pkgStr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          "wx" == this.platform ? wx.navigateToMiniProgram({
            appId: Id,
            envVersion: "release",
            success: function success(res) {
              console.log("\u6210\u529f\u6253\u5f00\u4e86\u5176\u4ed6\u5c0f\u7a0b\u5e8f");
            }
          }) : "baidu" == this.platform || "tt" == this.platform || "qg_oppo" == this.platform && qg.navigateToMiniGame({
            pkgName: pkgStr,
            success: function success() {},
            fail: function fail(res) {
              console.log(JSON.stringify(res));
            }
          });
        },
        CompareSdkVesrion: function CompareSdkVesrion(sdkV, needV) {
          var out1 = sdkV.split(".");
          var out2 = needV.split(".");
          var len = Math.max(out1.length, out2.length);
          while (out1.length < len) out1.push("0");
          while (out2.length < len) out2.push("0");
          for (var i = 0; i < len; i++) {
            if (parseInt(out1[i]) < parseInt(out2[i])) return 0;
            if (parseInt(out1[i]) > parseInt(out2[i])) return 1;
          }
          return 1;
        },
        AldEventStatis: function AldEventStatis(eventName, data) {
          "wx" == this.platform && wx.aldSendEvent(eventName, data);
        }
      }
    });
    module.exports = PlatformController;
    cc._RF.pop();
  }, {} ],
  RankPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f97caUCsMBF4ZKKm77sXkmE", "RankPanel");
    "use strict";
    var RankPanel = cc.Class({
      extends: cc.Component,
      properties: {},
      ShowNextPage: function ShowNextPage() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowNextPage");
      },
      ShowFrontPage: function ShowFrontPage() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontPage");
      }
    });
    module.exports = RankPanel;
    cc._RF.pop();
  }, {} ],
  ReBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e788bZGBn1MUJM+EnB7LQak", "ReBox");
    "use strict";
    var ReBox = cc.Class({
      name: "ReBox",
      properties: {
        posX: -1,
        posY: -1,
        flagNum: 0,
        showCoin: false,
        showSeed: false
      },
      InitBox: function InitBox(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.flagNum = 0;
        this.showCoin = false;
        this.showSeed = false;
      },
      RefreshReBox: function RefreshReBox(flagNum, showCoin, showSeed) {
        this.flagNum = flagNum;
        this.showCoin = showCoin;
        this.showSeed = showSeed;
      }
    });
    module.exports = ReBox;
    cc._RF.pop();
  }, {} ],
  RewardGetTipPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcf345rePJFO5nS+JMrZAZb", "RewardGetTipPanel");
    "use strict";
    var RewardGetTipPanel = cc.Class({
      extends: cc.Component,
      properties: {
        numLbl: cc.Label,
        Sp: cc.Sprite,
        SpSkill: cc.Sprite,
        Atals: cc.SpriteAtlas,
        StartNode: cc.Node
      },
      ShowPanel: function ShowPanel(param) {
        this.numLbl.string = param.num;
        this.Sp.node.active = 1 == param.Tp;
        this.SpSkill.node.active = 2 == param.Tp;
        this.SpSkill.spriteFrame = this.Atals.getSpriteFrame(param.sp);
        this.Sp.spriteFrame = this.Atals.getSpriteFrame(param.sp);
        this.TimeToClose();
      },
      TimeToClose: function TimeToClose() {
        this.scheduleOnce(function() {
          this.ClosePanel();
        }, 1.5);
      },
      ClosePanel: function ClosePanel() {
        false == this.StartNode.active && cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      }
    });
    module.exports = RewardGetTipPanel;
    cc._RF.pop();
  }, {} ],
  SettingPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99a9aWFrJJGAJhbDMGJ81Rh", "SettingPanel");
    "use strict";
    var BirdVoiceCtrl = require("BirdVoiceCtrl");
    var SettingPanel = cc.Class({
      extends: cc.Component,
      properties: {
        Atlas: cc.SpriteAtlas,
        checkMarkM: cc.Sprite,
        checkMarkV: cc.Sprite,
        checkMarkQ: cc.Sprite,
        birdVoice: BirdVoiceCtrl,
        KeFuNode: cc.Node
      },
      ShowPanel: function ShowPanel() {
        0 == cc.Mgr.AudioMgr.musicState ? this.checkMarkM.spriteFrame = this.Atlas.getSpriteFrame("m_off") : this.checkMarkM.spriteFrame = this.Atlas.getSpriteFrame("m_on");
        0 == cc.Mgr.AudioMgr.voiceState ? this.checkMarkV.spriteFrame = this.Atlas.getSpriteFrame("v_off") : this.checkMarkV.spriteFrame = this.Atlas.getSpriteFrame("v_on");
        1 == cc.Mgr.PlatformController.GetQuakeState() ? this.checkMarkQ.spriteFrame = this.Atlas.getSpriteFrame("quake_on") : this.checkMarkQ.spriteFrame = this.Atlas.getSpriteFrame("quake_off");
        "wx" != cc.Mgr.PlatformController.platform && (this.KeFuNode.active = false);
      },
      MusicTog: function MusicTog() {
        if (0 == cc.Mgr.AudioMgr.musicState) {
          this.OnMusic();
          this.birdVoice.Resume();
        } else {
          this.OffMusic();
          this.birdVoice.Stop();
        }
      },
      VoiceTog: function VoiceTog() {
        0 == cc.Mgr.AudioMgr.voiceState ? this.OnVoice() : this.OffVoice();
      },
      QuakeTog: function QuakeTog() {
        0 == cc.Mgr.PlatformController.GetQuakeState() ? this.checkMarkQ.spriteFrame = this.Atlas.getSpriteFrame("quake_on") : this.checkMarkQ.spriteFrame = this.Atlas.getSpriteFrame("quake_off");
        cc.Mgr.PlatformController.SetQuakeState();
      },
      OnMusic: function OnMusic() {
        cc.Mgr.AudioMgr.resumeMusic();
        this.checkMarkM.spriteFrame = this.Atlas.getSpriteFrame("m_on");
      },
      OffMusic: function OffMusic() {
        cc.Mgr.AudioMgr.pauseMusic();
        this.checkMarkM.spriteFrame = this.Atlas.getSpriteFrame("m_off");
      },
      OnVoice: function OnVoice() {
        cc.Mgr.AudioMgr.resumeVoice();
        this.checkMarkV.spriteFrame = this.Atlas.getSpriteFrame("v_on");
      },
      OffVoice: function OffVoice() {
        cc.Mgr.AudioMgr.pauseVoice();
        this.checkMarkV.spriteFrame = this.Atlas.getSpriteFrame("v_off");
      },
      Help: function Help() {},
      KeFu: function KeFu() {
        cc.Mgr.PlatformController.OpenServiceConversation();
      },
      ClosePanel: function ClosePanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      }
    });
    module.exports = SettingPanel;
    cc._RF.pop();
  }, {
    BirdVoiceCtrl: "BirdVoiceCtrl"
  } ],
  ShareInfos: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbabaJR2rFNv4Pbgoaogc9i", "ShareInfos");
    "use strict";
    var ShareInfos = cc.Class({
      extends: cc.Component,
      statics: {
        init: function init() {
          this.Infos = [ {
            text: "\u56fd\u6f2b\u548c\u98ce,\u63a8\u7bb1\u5b50\u4e0e\u6d88\u9664\u7ed3\u5408\u73a9\u6cd5,\u8ba9\u4f60\u6e05\u65b0\u4e00\u590f",
            url: "https://mmocgame.qpic.cn/wechatgame/VW5UT1uqQ5oBqUjzhN2uaibicSTibICibjYHgdtvQea6hb8DSoibWiaTgcRPfFDNGCOksG/0"
          }, {
            text: "\u56fd\u6f2b\u548c\u98ce,\u63a8\u7bb1\u5b50\u4e0e\u6d88\u9664\u7ed3\u5408\u73a9\u6cd5,\u5feb\u6765\u4f53\u9a8c\u5427",
            url: "https://mmocgame.qpic.cn/wechatgame/VW5UT1uqQ5oBqUjzhN2uaibicSTibICibjYHgdtvQea6hb8DSoibWiaTgcRPfFDNGCOksG/0"
          }, {
            text: "\u4e0d\u540c\u89d2\u8272,\u63a8\u7bb1\u5b50\u4e0e\u6d88\u9664\u7ed3\u5408\u73a9\u6cd5,\u5feb\u6765\u4f53\u9a8c\u5427",
            url: "https://mmocgame.qpic.cn/wechatgame/VW5UT1uqQ5oabRezePO6O7kISDhVIHYWDN9KwnbiaTdwuVMOYqwIzXnxnuRC23lem/0"
          }, {
            text: "\u4f60\u7684\u597d\u53cb\u5411\u4f60\u53d1\u51fa\u4e86\u6311\u6218,\u4f60\u6562\u5e94\u6218\u5417\uff1f",
            url: ""
          }, {
            text: "\u4f60\u7684\u597d\u53cb\u5411\u4f60\u53d1\u51fa\u4e86\u6311\u6218,\u4f60\u6562\u5e94\u6218\u5417\uff1f",
            url: ""
          }, {
            text: "\u4f60\u7684\u597d\u53cb\u5411\u4f60\u53d1\u51fa\u4e86\u6311\u6218,\u4f60\u6562\u5e94\u6218\u5417\uff1f",
            url: ""
          }, {
            text: "\u4f60\u7684\u597d\u53cb\u5411\u4f60\u53d1\u51fa\u4e86\u6311\u6218,\u4f60\u6562\u5e94\u6218\u5417\uff1f",
            url: ""
          }, {
            text: "\u4f60\u7684\u597d\u53cb\u5411\u4f60\u53d1\u51fa\u4e86\u6311\u6218,\u4f60\u6562\u5e94\u6218\u5417\uff1f",
            url: ""
          }, {
            text: "\u672c\u6765\u53ea\u662f\u968f\u4fbf\u73a9\u73a9\uff0c\u5367\u69fd\u505c\u4e0d\u4e0b\u6765",
            url: ""
          } ];
        },
        getShareInfos: function getShareInfos(index) {
          return this.Infos[index];
        }
      }
    });
    module.exports = ShareInfos;
    cc._RF.pop();
  }, {} ],
  ShopPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bba64AB7eBNtIe2AywpxO+S", "ShopPanel");
    "use strict";
    var SkinItem = require("SkinItem");
    var DataType = require("DataType");
    var BonusType = require("BonusType");
    var CommonTipPanel = require("CommonTipPanel");
    var ShopPanel = cc.Class({
      extends: cc.Component,
      properties: {
        tipPanel: CommonTipPanel,
        Atlas: cc.SpriteAtlas,
        runeSp: cc.Sprite,
        nameLbl: cc.Label,
        DesLbl: cc.Label,
        priceLbl: cc.Label,
        BuyUseBtnBgSp: cc.Sprite,
        skinItemList: [ SkinItem ],
        BuyUseTxt: cc.Label,
        chooseId: 5
      },
      start: function start() {
        var self = this;
        cc.director.on("ChooseSkinItem", function(data) {
          self.RefreshPanel(data.skinId);
        });
      },
      RefreshPanel: function RefreshPanel(skinId) {
        var isunlock = cc.Mgr.UserData.IsSkinUnLock(skinId);
        var data = cc.Mgr.DataMapMgr.getDataByDataTypeAndId(DataType.Skin, skinId);
        this.BuyUseTxt.string = isunlock ? "\u4f7f  \u7528" : "\u8d2d  \u4e70";
        var str = "";
        for (var i = data.bonusList.length - 1; i >= 0; i--) {
          data.bonusList[i].bonusType == BonusType.CoinBonus ? str = str + "\u91d1\u5e01\u6536\u96c6:+" + data.bonusList[i].bonusNum + "%" : data.bonusList[i].bonusType == BonusType.RuneBonus && (str = str + "\u7b26\u6587\u6536\u96c6:+" + data.bonusList[i].bonusNum + "%");
          0 != i && (str += "\n");
        }
        this.priceLbl.string = "\u4ef7\u683c:" + data.price;
        this.DesLbl.string = str;
        this.chooseId = skinId;
        this.nameLbl.string = data.rname;
        this.runeSp.spriteFrame = this.Atlas.getSpriteFrame("target_" + data.skinRuneType);
      },
      ShowPanel: function ShowPanel() {
        var dataList = cc.Mgr.DataMapMgr.getDataListByDataType(DataType.Skin);
        for (var i = 0; i <= this.skinItemList.length - 1; i++) null != dataList[i] && this.skinItemList[i].InitItem(dataList[i].skinId);
        this.RefreshPanel(cc.Mgr.UserData.getCurSkinId());
      },
      BuyUse: function BuyUse() {
        var isunlock = cc.Mgr.UserData.IsSkinUnLock(this.chooseId);
        var data = cc.Mgr.DataMapMgr.getDataByDataTypeAndId(DataType.Skin, this.chooseId);
        if (isunlock) {
          cc.Mgr.UserData.refreshUseSkinId(this.chooseId);
          var param = {};
          param.skinId = this.chooseId;
          cc.director.emit("UseSkin", param);
          this.ClosePanel();
        } else if (cc.Mgr.UserData.getRuneNum(this.chooseId - 4) >= data.price) {
          cc.Mgr.UserData.addRuneFunc(-data.price, data.skinRuneType);
          cc.director.emit("BuySkin", {});
          cc.Mgr.UserData.UnlockSkinById(this.chooseId);
          this.BuyUseTxt.string = "\u4f7f  \u7528";
        } else {
          this.tipPanel.node.active = true;
          var des = "\u4f60\u7684\u7b26\u6587\u4e0d\u591f,\u60a8\u53ef\u4ee5\u901a\u8fc7\u89c2\u770b\u89c6\u9891\u5e7f\u544a\u83b7\u5f97,\u6216\u8005\u5728\u6e38\u620f\u4e2d\u79ef\u6512\u8db3\u591f\u7b26\u6587";
          this.tipPanel.ShowPanel(des);
        }
      },
      ClosePanel: function ClosePanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      }
    });
    module.exports = ShopPanel;
    cc._RF.pop();
  }, {
    BonusType: "BonusType",
    CommonTipPanel: "CommonTipPanel",
    DataType: "DataType",
    SkinItem: "SkinItem"
  } ],
  SkillBackTipPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99d0110CQ1C/q8O91oX/peA", "SkillBackTipPanel");
    "use strict";
    var SkillBackTipPanel = cc.Class({
      extends: cc.Component,
      properties: {
        desLbl: cc.Label
      },
      ShowPanel: function ShowPanel() {
        this.desLbl.string = "\u5269\u4f59\u4e2a\u6570:" + cc.Mgr.UserData.getSkillBackNum();
      },
      ClosePanel: function ClosePanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      }
    });
    module.exports = SkillBackTipPanel;
    cc._RF.pop();
  }, {} ],
  SkillUsePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4acb1rSvg5N94jhZH7JV1Mx", "SkillUsePanel");
    "use strict";
    var SkillUsePanel = cc.Class({
      extends: cc.Component,
      properties: {
        diamondLbl: cc.Label,
        btnBgSp: cc.Sprite,
        Atlas: cc.SpriteAtlas
      },
      ShowPanel: function ShowPanel() {
        var CoinNum = cc.Mgr.UserData.getCoinNum();
        cc.log("+++++++++++++++++++++ " + CoinNum);
        this.diamondLbl.string = CoinNum;
        CoinNum >= cc.Mgr.Global.ReturnStepCost ? this.btnBgSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_1") : this.btnBgSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_2");
      },
      ClosePanel: function ClosePanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      }
    });
    module.exports = SkillUsePanel;
    cc._RF.pop();
  }, {} ],
  SkinBonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37e20KwaXVHq6zC2dE0WfBw", "SkinBonus");
    "use strict";
    var SkinBonus = cc.Class({
      name: "SkinBonus",
      properties: {
        bonusType: cc.Integer,
        bonusNum: cc.Integer
      }
    });
    cc._RF.pop();
  }, {} ],
  SkinData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00be6HQojpEcqRlhiJGNEIw", "SkinData");
    "use strict";
    var SkinBonus = require("SkinBonus");
    var SkinData = cc.Class({
      name: "SkinData",
      properties: {
        skinId: cc.Integer,
        price: cc.Integer,
        rname: "",
        skinRuneType: 1,
        bonusList: [ SkinBonus ]
      }
    });
    module.exports = SkinData;
    cc._RF.pop();
  }, {
    SkinBonus: "SkinBonus"
  } ],
  SkinItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5451boFJshI3rdpO5cEgXWM", "SkinItem");
    "use strict";
    var SkinItem = cc.Class({
      extends: cc.Component,
      properties: {
        skinId: cc.Integer,
        tog: cc.Toggle
      },
      InitItem: function InitItem(skinId) {
        this.skinId = skinId;
        this.skinId == cc.Mgr.UserData.getCurSkinId() ? this.tog.isChecked = true : this.tog.isChecked = false;
      },
      ChooseItem: function ChooseItem() {
        var param = {};
        param.skinId = this.skinId;
        cc.director.emit("ChooseSkinItem", param);
      }
    });
    module.exports = SkinItem;
    cc._RF.pop();
  }, {} ],
  SkinMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abccajbhrJH3YbOodi4LwEo", "SkinMap");
    "use strict";
    var SkinData = require("SkinData");
    var SkinBonus = require("SkinBonus");
    var SkinMap = cc.Class({
      extends: cc.Component,
      properties: {
        jsonName: "skin",
        skinList: {
          default: [],
          type: [ SkinData ]
        }
      },
      DecodeJson: function DecodeJson(event) {
        var self = this;
        self.reCb = event;
        cc.loader.loadRes("json/" + self.jsonName, function(error, obj) {
          if (error) {
            self.reCb(false);
            return;
          }
          var jsonRoot = obj.json.skin;
          for (var i = 0; i < jsonRoot.length; i++) {
            var skinData = new SkinData();
            skinData.skinId = jsonRoot[i].skinId;
            skinData.price = jsonRoot[i].price;
            skinData.rname = jsonRoot[i].name;
            skinData.skinRuneType = jsonRoot[i].skinRuneType;
            for (var j = 0; j < jsonRoot[i].bonusList.length; j++) {
              var lp = new SkinBonus();
              lp.bonusType = jsonRoot[i].bonusList[j][0];
              lp.bonusNum = jsonRoot[i].bonusList[j][1];
              skinData.bonusList[j] = lp;
            }
            self.skinList[i] = skinData;
          }
          self.reCb(true);
        });
      },
      getDataById: function getDataById(itemId) {
        var data = null;
        for (var i = this.skinList.length - 1; i >= 0; i--) if (itemId == this.skinList[i].skinId) {
          data = this.skinList[i];
          break;
        }
        return data;
      },
      getJsonLength: function getJsonLength() {
        return this.skinList.length;
      },
      getDataList: function getDataList() {
        return this.skinList;
      }
    });
    module.exports = SkinMap;
    cc._RF.pop();
  }, {
    SkinBonus: "SkinBonus",
    SkinData: "SkinData"
  } ],
  SkinStruct: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f331O4fGJFobQN8AIUKtpF", "SkinStruct");
    "use strict";
    var SkinStruct = cc.Class({
      name: "SkinStruct",
      properties: {
        skinId: cc.Integer,
        price: cc.Integer,
        unLock: 0
      }
    });
    module.exports = SkinStruct;
    cc._RF.pop();
  }, {} ],
  StartPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a50cIF/iZHh4OK+WnBNng6", "StartPanel");
    "use strict";
    var StartPanel = cc.Class({
      extends: cc.Component,
      properties: {
        startAni: cc.Animation,
        coinNumLbl: cc.Label,
        runeBNumLbl: cc.Label,
        runeCNumLbl: cc.Label,
        rewardAni: cc.Animation,
        runeBAdd: cc.Label,
        runeCAdd: cc.Label,
        LuPingNode: cc.Node
      },
      start: function start() {
        this.startAni.play();
        var self = this;
        cc.director.on("RewardCallBack", function(data) {
          self.playAnimation(data);
        });
        "wx" == cc.Mgr.PlatformController.platform && (this.LuPingNode.active = false);
      },
      playAnimation: function playAnimation(data) {
        if (1 != data.RewardType) return;
        this.runeBAdd.string = "runeB" == data.Tp ? "+" + data.num : "";
        this.runeCAdd.string = "runeC" == data.Tp ? "+" + data.num : "";
        this.scheduleOnce(function() {
          this.rewardAni.play("startRewardAni");
          this.RefreshUI();
        }, .5);
      },
      ShowPanel: function ShowPanel() {
        this.startAni.play();
        this.RefreshUI();
      },
      RefreshUI: function RefreshUI() {
        "tt" == cc.Mgr.PlatformController.platform && (this.LuPingNode.active = true);
        this.coinNumLbl.string = cc.Mgr.UserData.getCoinNum();
        this.runeBNumLbl.string = cc.Mgr.UserData.getRuneNum(2);
        this.runeCNumLbl.string = cc.Mgr.UserData.getRuneNum(3);
      }
    });
    module.exports = StartPanel;
    cc._RF.pop();
  }, {} ],
  TipPlayPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "415ebZw2TNDtIijRAb6Xidq", "TipPlayPanel");
    "use strict";
    var TipPlayPanel = cc.Class({
      extends: cc.Component,
      properties: {},
      ClosePanel: function ClosePanel() {
        this.node.active = false;
      }
    });
    module.exports = TipPlayPanel;
    cc._RF.pop();
  }, {} ],
  TutorialPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44327xJKAVIJ5y40suV+Bs9", "TutorialPanel");
    "use strict";
    var GameController = require("GameController");
    var DIR = require("DIR");
    var TutorialPanel = cc.Class({
      extends: cc.Component,
      properties: {
        gameCtrl: GameController,
        FingerNode: cc.Node,
        Anima: cc.Animation,
        TipDesLbl: cc.Label,
        GoStep: 1
      },
      start: function start() {
        this.AddTouchEventListener();
      },
      OperFirstStep: function OperFirstStep() {
        this.GoStep = 1;
        this.Anima.play("tutorialFinger");
        this.TipDesLbl.string = "\u5411\u4e0b\u6ed1\u52a8,\u63a7\u5236\u5c0f\u5973\u5b69\u79fb\u52a8,\u5c06\u6728\u7bb1\u63a8\u79fb\u5230\u4e00\u6761\u76f4\u7ebf\u4e0a";
      },
      OperFirstSubStep: function OperFirstSubStep() {
        this.GoStep = 2;
        this.Anima.play("tutorialFinger");
        this.TipDesLbl.string = "\u5f53\u6728\u7bb1\u5f62\u6210\u4e00\u6761\u76f4\u7ebf\u65f6\uff0c\u6728\u7bb1\u4f1a\u88ab\u6253\u5f00\uff0c\u7bb1\u5b50\u6253\u5f00\u540e\u51fa\u73b0\u8d1d\u58f3,\u62fe\u53d6\u53ef\u83b7\u5f97\u79ef\u5206";
      },
      OperSecondStep: function OperSecondStep() {
        this.GoStep = 3;
        this.Anima.play("tutorialFingerH");
        this.TipDesLbl.string = "\u8ba9\u5c0f\u5973\u5b69\u5de6\u53f3\u884c\u8d70,\u62fe\u53d6\u8d1d\u58f3,\u83b7\u5f97\u79ef\u5206";
      },
      OperThirdStep: function OperThirdStep() {
        this.GoStep = 4;
        this.FingerNode.active = false;
        this.TipDesLbl.string = "\u975e\u5e38\u597d,\u4f60\u5df2\u7ecf\u638c\u63e1\u4e86\u57fa\u672c\u6e38\u620f\u89c4\u5219,\u5c3d\u60c5\u7684\u6e38\u620f\u5427";
        cc.Mgr.UserData.FinishTutorial();
      },
      OperSeedStep: function OperSeedStep() {
        this.GoStep = 5;
        this.FingerNode.active = false;
        this.TipDesLbl.string = "\u6e38\u620f\u8fbe\u5230" + cc.Mgr.Global.SpawnSeedLv + "\u7ea7\u65f6,\u6709\u51e0\u7387\u5728\u65b9\u683c\u4e2d\u51fa\u73b0\u79cd\u5b50,\u79cd\u5b50\u4e0d\u662f\u969c\u788d,\u53ef\u88ab\u63a8\u52a8\u7684\u6728\u7bb1\u538b\u788e,\u4f46\u5f53\u5c0f\u5973\u5b69\u8e29\u8e0f\u8fc7\u540e\u79cd\u5b50\u5c06\u53d1\u82bd\u957f\u6210\u82b1\u4e1b";
        cc.Mgr.UserData.FinishTutorialSeed();
      },
      OperStoneStep: function OperStoneStep() {
        this.GoStep = 6;
        this.FingerNode.active = false;
        this.TipDesLbl.string = "\u6e38\u620f\u8fbe\u5230" + cc.Mgr.Global.SpawnStoneLv + "\u7ea7\u65f6,\u6709\u51e0\u7387\u5728\u65b9\u683c\u4e2d\u51fa\u73b0\u77f3\u5757,\u77f3\u5757\u5c5e\u4e8e\u4e0d\u53ef\u63a8\u52a8\u969c\u788d,\u4f60\u53ef\u4ee5\u4f7f\u7528\u77f3\u9524\u7206\u7834\u8be5\u7c7b\u578b\u969c\u788d";
        cc.Mgr.UserData.FinishTutorialStone();
      },
      ClosePanel: function ClosePanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.node.active = false;
      },
      AddTouchEventListener: function AddTouchEventListener() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
      },
      onTouched: function onTouched(event) {
        this.gameCtrl.SaveRememberBoxMapData();
        cc.Mgr.Global.hasMove = true;
        var startPos = event.getStartLocation();
        var endPos = event.getLocation();
        var offsetX = endPos.x - startPos.x;
        var offsetY = endPos.y - startPos.y;
        if (5 == this.GoStep || 6 == this.GoStep) this.scheduleOnce(function() {
          this.ClosePanel();
        }, 2.5); else if (Math.abs(offsetX) > Math.abs(offsetY)) {
          if (offsetX > 0) {
            if (offsetX > 5) {
              cc.director.emit("MoveRoleBox", {
                DIR: DIR.RIGHT
              });
              if (3 == this.GoStep) {
                this.gameCtrl.MoveBoxDirRight(DIR.RIGHT);
                this.scheduleOnce(function() {
                  this.OperThirdStep();
                }, .1);
              } else if (4 == this.GoStep) {
                this.gameCtrl.MoveBoxDirRight(DIR.RIGHT);
                this.ClosePanel();
              }
            }
          } else if (offsetX < 0 && offsetX < -5) {
            cc.director.emit("MoveRoleBox", {
              DIR: DIR.LEFT
            });
            if (3 == this.GoStep) {
              this.gameCtrl.MoveBoxDirLeft(DIR.LEFT);
              this.scheduleOnce(function() {
                this.OperThirdStep();
              }, .1);
            } else if (4 == this.GoStep) {
              this.gameCtrl.MoveBoxDirLeft(DIR.LEFT);
              this.ClosePanel();
            }
          }
        } else if (offsetY > 5) {
          if (4 == this.GoStep) {
            this.gameCtrl.MoveBoxDirUp(DIR.UP);
            this.ClosePanel();
          }
        } else if (offsetY < 0) if (1 == this.GoStep) {
          this.gameCtrl.MoveBoxDirDown(DIR.DOWN);
          this.scheduleOnce(function() {
            this.OperFirstSubStep();
          }, .1);
        } else if (2 == this.GoStep) {
          this.gameCtrl.MoveBoxDirDown(DIR.DOWN);
          this.scheduleOnce(function() {
            this.OperSecondStep();
          }, .1);
        } else if (4 == this.GoStep) {
          this.gameCtrl.MoveBoxDirDown(DIR.DOWN);
          this.ClosePanel();
        }
      }
    });
    module.exports = TutorialPanel;
    cc._RF.pop();
  }, {
    DIR: "DIR",
    GameController: "GameController"
  } ],
  UIMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "865c6W6/69HUqhmC8vxYaPi", "UIMgr");
    "use strict";
    var GameController = require("GameController");
    var SettingPanel = require("SettingPanel");
    var GameState = require("GameState");
    var UIScore = require("UIScore");
    var SkillUsePanel = require("SkillUsePanel");
    var ShopPanel = require("ShopPanel");
    var TutorialPanel = require("TutorialPanel");
    var OverPanel = require("OverPanel");
    var CommonTipPanel = require("CommonTipPanel");
    var BuyBoomPanel = require("BuyBoomPanel");
    var TipPlayPanel = require("TipPlayPanel");
    var MenuPanel = require("MenuPanel");
    var AdsParam = require("AdsParam");
    var SkillBackTipPanel = require("SkillBackTipPanel");
    var StartPanel = require("StartPanel");
    var UIMgr = cc.Class({
      extends: cc.Component,
      properties: {
        pauseForReborn: false,
        lastShareTime: 0,
        gameCtrl: GameController,
        StartUINode: StartPanel,
        RankUINode: cc.Node,
        boomSkillBuyPanel: BuyBoomPanel,
        spwanSkillBuyPanel: BuyBoomPanel,
        BoomSkillTipNode: cc.Node,
        SpawnSkillTipNode: cc.Node,
        ProgressTipNode: cc.Node,
        LuPingNode: cc.Node,
        skillUsePanel: SkillUsePanel,
        skillBackTip: SkillBackTipPanel,
        settingPanel: SettingPanel,
        shopPanel: ShopPanel,
        tutorialPanel: TutorialPanel,
        overPanel: OverPanel,
        tipPanel: CommonTipPanel,
        tipPlayPanel: TipPlayPanel,
        menuPanel: MenuPanel,
        highScoreLbl: cc.Label,
        boomHasNumLbl: cc.Label,
        spwanHasNumLbl: cc.Label,
        backHasNumLbl: cc.Label,
        Atlas: cc.SpriteAtlas,
        screenSpA: cc.Sprite,
        screenSpB: cc.Sprite,
        uiScore: UIScore,
        wxSubContextView: cc.Node
      },
      start: function start() {
        var self = this;
        cc.director.on("ShowOver", function(data) {
          self.ShowRebornPanel();
        });
        cc.director.on("UseBoomSkillEnd", function(data) {
          self.UseBoomSkillEnd();
        });
        cc.director.on("UseSpwanSkillEnd", function(data) {
          self.UseSpwanSkillEnd();
        });
        cc.director.on("TutorialSeed", function(data) {
          self.tutorialPanel.node.active = true;
          self.tutorialPanel.OperSeedStep();
        });
        cc.director.on("TutorialStone", function(data) {
          self.tutorialPanel.node.active = true;
          self.tutorialPanel.OperStoneStep();
        });
        cc.director.on("OnStopScreen", function() {
          self.SetScreenSps();
        });
        cc.game.on(cc.game.EVENT_HIDE, function() {
          true == self.pauseForReborn && (self.lastShareTime = cc.Mgr.Utils.GetSysTime());
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          true == self.pauseForReborn && self.RebornCallFunc();
        });
      },
      RefreshUI: function RefreshUI() {
        "wx" == cc.Mgr.PlatformController.platform ? this.LuPingNode.active = false : "tt" == cc.Mgr.PlatformController.platform && (this.LuPingNode.active = true);
        this.StartUINode.RefreshUI();
        this.highScoreLbl.string = cc.Mgr.UserData.getHighScore();
        this.boomHasNumLbl.string = cc.Mgr.UserData.getSkillBoomNum();
        this.spwanHasNumLbl.string = cc.Mgr.UserData.getSkillSpwanNum();
        this.backHasNumLbl.string = cc.Mgr.UserData.getSkillBackNum();
      },
      JumpToApp: function JumpToApp(obj, str) {
        cc.log("=============== " + str);
        cc.Mgr.PlatformController.JumpToOtherApp(str);
      },
      CloseProgressTipNode: function CloseProgressTipNode() {
        this.ProgressTipNode.active = false;
      },
      BackUIMenu: function BackUIMenu() {
        cc.Mgr.UserData.leftRebornTimes = 3;
        cc.Mgr.UserData.SaveData();
        cc.Mgr.AdsMgr.RecoverShowBanner();
        this.menuPanel.node.active = false;
        this.StartUINode.node.active = true;
        this.StartUINode.ShowPanel();
        this.overPanel.node.active = false;
        this.RankUINode.active = false;
        cc.Mgr.PlatformController.SendMessageToSubView("CloseAllNodes");
        this.RefreshUI();
      },
      JustBackHome: function JustBackHome() {
        cc.Mgr.AdsMgr.ShowInterstitialAd(2);
        cc.Mgr.AdsMgr.RecoverShowBanner();
        this.menuPanel.node.active = false;
        this.StartUINode.node.active = true;
        this.StartUINode.ShowPanel();
        this.overPanel.node.active = false;
        this.RankUINode.active = false;
        cc.Mgr.PlatformController.SendMessageToSubView("CloseAllNodes");
        this.RefreshUI();
      },
      StartPlay: function StartPlay() {
        cc.Mgr.AdsMgr.HideBannerAd();
        this.overPanel.node.active = false;
        0 == cc.Mgr.UserData.hasLastProgress && cc.Mgr.AudioMgr.playSFX("dong");
        if (true == this.ProgressTipNode.active) {
          cc.Mgr.UserData.leftRebornTimes = 3;
          this.ProgressTipNode.active = false;
          cc.Mgr.UserData.ClearReBoxMap();
        }
        this.scheduleOnce(function() {
          cc.Mgr.Global.InitData();
          this.gameCtrl.gameState = GameState.Wait;
          if (1 == cc.Mgr.UserData.hasLastProgress) {
            cc.Mgr.AudioMgr.playSFX("dong");
            this.ProgressTipNode.active = true;
          } else {
            this.uiScore.ResetScore();
            this.StartUINode.node.active = false;
            this.gameCtrl.StartGame();
            cc.Mgr.UserData.leftRebornTimes = 3;
            cc.Mgr.PlatformController.SendMessageToSubView("GetRankList");
            false == cc.Mgr.UserData.IsTutorialOver() && this.scheduleOnce(function() {
              this.tutorialPanel.node.active = true;
              this.tutorialPanel.OperFirstStep();
            }, .25);
          }
        }, .25);
      },
      StartGameUseProgress: function StartGameUseProgress() {
        cc.Mgr.AdsMgr.HideBannerAd();
        cc.Mgr.AudioMgr.playSFX("dong");
        this.overPanel.node.active = false;
        this.scheduleOnce(function() {
          this.StartUINode.node.active = false;
          this.ProgressTipNode.active = false;
          cc.Mgr.PlatformController.SendMessageToSubView("GetRankList");
          this.uiScore.ResetScore();
          this.uiScore.ResetScoreUseProgress(cc.Mgr.UserData.remScore);
          cc.Mgr.Global.InitData();
          this.gameCtrl.gameState = GameState.Wait;
          this.gameCtrl.StartGameUseProgressData();
          false == cc.Mgr.UserData.IsTutorialOver() && this.scheduleOnce(function() {
            this.tutorialPanel.node.active = true;
            this.tutorialPanel.OperFirstStep();
          }, 1.5);
        }, .25);
      },
      RePlayStart: function RePlayStart() {
        cc.Mgr.AdsMgr.HideBannerAd();
        cc.Mgr.AudioMgr.playSFX("dong");
        this.overPanel.node.active = false;
        this.scheduleOnce(function() {
          this.StartUINode.node.active = false;
          cc.Mgr.PlatformController.SendMessageToSubView("GetRankList");
          this.uiScore.ResetScore();
          this.gameCtrl.ClearBoard();
          cc.Mgr.Global.InitData();
          cc.Mgr.Global.InitReBornTime();
          this.gameCtrl.gameState = GameState.Wait;
          this.gameCtrl.ReStartGame();
        }, .25);
      },
      OpenShop: function OpenShop() {
        cc.Mgr.AudioMgr.playSFX("dong");
        this.menuPanel.node.active = false;
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
        this.shopPanel.node.active = true;
        this.shopPanel.ShowPanel();
        cc.Mgr.AdsMgr.ShowInterstitialAd();
      },
      RebornGame: function RebornGame() {
        cc.Mgr.AdsMgr.HideBannerAd();
        cc.Mgr.AudioMgr.playSFX("dong");
        this.overPanel.node.active = false;
        cc.Mgr.PlatformController.SendMessageToSubView("GetRankList");
        this.scheduleOnce(function() {
          this.StartUINode.node.active = false;
          this.gameCtrl.ClearBoard();
          cc.Mgr.Global.InitData();
          this.gameCtrl.gameState = GameState.Wait;
          this.gameCtrl.ReStartGame();
        }, .25);
      },
      RebornToGame: function RebornToGame() {
        cc.Mgr.AdsMgr.HideBannerAd();
        if (cc.Mgr.Global.LeftRebornTime <= 0) this.BackUIMenu(); else {
          this.pauseForReborn = true;
          cc.Mgr.PlatformController.ShareToFriend(2);
        }
      },
      RebornCallFunc: function RebornCallFunc() {
        cc.Mgr.AdsMgr.HideBannerAd();
        console.log("\u73b0\u5728\u7684\u65f6\u95f4 = " + cc.Mgr.Utils.GetSysTime() + "    \u8bb0\u5f55\u7684\u65f6\u95f4 = " + this.lastShareTime);
        if (cc.Mgr.Utils.GetSysTime() > this.lastShareTime + 3) {
          cc.Mgr.PlatformController.SendMessageToSubView("RefreshBeyondNormalNode", this.uiScore.score);
          this.RebornGame();
          cc.Mgr.Global.LeftRebornTime -= 1;
          cc.Mgr.Global.LeftRebornTime < 0 && (cc.Mgr.Global.LeftRebornTime = 0);
        } else cc.Mgr.PlatformController.showToast("\u8bf7\u5148\u5b8c\u6210\u5206\u4eab");
        this.pauseForReborn = false;
      },
      RebornBackFunc: function RebornBackFunc() {
        cc.Mgr.PlatformController.SendMessageToSubView("RefreshBeyondNormalNode", this.uiScore.score);
        this.RebornGame();
        cc.Mgr.UserData.leftRebornTimes -= 1;
        cc.Mgr.UserData.leftRebornTimes < 0 && (cc.Mgr.UserData.leftRebornTimes = 0);
        cc.Mgr.UserData.SaveData();
      },
      ShareToFriend: function ShareToFriend() {
        if ("qg_oppo" == cc.Mgr.PlatformController.platform || "qg_vivo" == cc.Mgr.PlatformController.platform) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u5206\u4eab\u529f\u80fd\u6682\u4e0d\u53ef\u7528");
          return;
        }
        if (cc.Mgr.Global.LeftRebornTime <= 0) {
          var str = "\u6211\u5728-\u8a00\u5ead\u4e4b\u590f-\u62fe\u53d6\u4e86" + this.uiScore.score + "\u4e2a\u8d1d\u58f3,\u4e00\u8d77\u6765\u73a9\u5427?";
          cc.Mgr.PlatformController.ShareToFriendTxt(str);
        } else {
          this.pauseForReborn = true;
          var str = "\u6211\u5728-\u8a00\u5ead\u4e4b\u590f-\u62fe\u53d6\u4e86" + this.uiScore.score + "\u4e2a\u8d1d\u58f3,\u4e00\u8d77\u6765\u73a9\u5427?";
          cc.Mgr.PlatformController.ShareToFriendTxt(str);
        }
      },
      WatchAdsReborn: function WatchAdsReborn() {
        if (cc.Mgr.UserData.leftRebornTimes <= 0) {
          this.BackUIMenu();
          return;
        }
        if (false == cc.Mgr.AdsMgr.openAds) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u5e7f\u544a\u5f00\u53d1\u4e2d");
          return;
        }
        cc.Mgr.AdsMgr.HideBannerAd();
        var self = this;
        cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointA, function(out) {
          0 == out && self.RebornBackFunc();
        });
      },
      OpenRankPanel: function OpenRankPanel() {
        cc.Mgr.AudioMgr.playSFX("dong");
        if ("uc" == cc.Mgr.PlatformController.platform) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u6392\u884c\u699c\u529f\u80fd\u6682\u672a\u5f00\u653e");
          return;
        }
        if ("qg_oppo" == cc.Mgr.PlatformController.platform || "qg_vivo" == cc.Mgr.PlatformController.platform) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u6392\u884c\u699c\u529f\u80fd\u6682\u672a\u5f00\u653e");
          return;
        }
        if ("tt" == cc.Mgr.PlatformController.platform) {
          cc.Mgr.PlatformController.showToast("\u8be5\u529f\u80fd\u5c1a\u672a\u5f00\u653e");
          return;
        }
        cc.Mgr.PlatformController.SendMessageToSubView("RankPanelOpen");
        "wx" != cc.Mgr.PlatformController.platform && "qq" != cc.Mgr.PlatformController.platform || (this.RankUINode.active = true);
      },
      CloseRankPanel: function CloseRankPanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("RankPanelCloseInMainView");
        this.RankUINode.active = false;
      },
      ShowRebornPanel: function ShowRebornPanel() {
        cc.Mgr.AdsMgr.ShowInterstitialAd(1);
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
        this.overPanel.node.active = true;
        cc.Mgr.PlatformController.setUserCloudStorage(cc.Mgr.UserData.getHighScore());
        this.overPanel.ShowPanel();
        cc.Mgr.UserData.SaveData();
        cc.Mgr.PlatformController.SendMessageToSubView("ShowThreeNodes");
      },
      UseBoomSkillOpen: function UseBoomSkillOpen() {
        cc.Mgr.AudioMgr.playSFX("dong");
        if (this.gameCtrl.gameState != GameState.Play) return;
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
        if (0 == cc.Mgr.UserData.getSkillBoomNum()) {
          this.boomSkillBuyPanel.node.active = true;
          this.boomSkillBuyPanel.ShowPanel();
          return;
        }
        cc.Mgr.Global.UseSkillState = true;
        this.BoomSkillTipNode.active = true;
        this.gameCtrl.OffTouchEventListener();
      },
      CancelUseBoomSkill: function CancelUseBoomSkill() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        cc.Mgr.Global.UseSkillState = false;
        this.BoomSkillTipNode.active = false;
        this.gameCtrl.AddTouchEventListener();
      },
      UseBoomSkillEnd: function UseBoomSkillEnd() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        cc.Mgr.UserData.addSkillBoomNum(-1);
        this.boomHasNumLbl.string = cc.Mgr.UserData.getSkillBoomNum();
        cc.Mgr.Global.UseSkillState = false;
        this.BoomSkillTipNode.active = false;
        this.gameCtrl.AddTouchEventListener();
      },
      UseSpwanSkillOpen: function UseSpwanSkillOpen() {
        cc.Mgr.AudioMgr.playSFX("dong");
        if (this.gameCtrl.gameState != GameState.Play) return;
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
        if (0 == cc.Mgr.UserData.getSkillSpwanNum()) {
          this.spwanSkillBuyPanel.node.active = true;
          this.spwanSkillBuyPanel.ShowPanel();
          return;
        }
        cc.Mgr.Global.UseSkillSpwanNow = true;
        this.SpawnSkillTipNode.active = true;
        this.gameCtrl.OffTouchEventListener();
      },
      CancelUseSpwanSkill: function CancelUseSpwanSkill() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        cc.Mgr.Global.UseSkillSpwanNow = false;
        this.SpawnSkillTipNode.active = false;
        this.gameCtrl.AddTouchEventListener();
      },
      UseSpwanSkillEnd: function UseSpwanSkillEnd() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        cc.Mgr.UserData.addSkillSpwanNum(-1);
        this.spwanHasNumLbl.string = cc.Mgr.UserData.getSkillSpwanNum();
        cc.Mgr.Global.UseSkillSpwanNow = false;
        this.SpawnSkillTipNode.active = false;
        this.gameCtrl.AddTouchEventListener();
      },
      BuySpwanSkill: function BuySpwanSkill() {
        if (cc.Mgr.UserData.coin < cc.Mgr.Global.BoomCost) {
          var param = {};
          param.des = "\u60a8\u7684\u91d1\u5e01\u4e0d\u591f,\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u5de6\u4e0a\u89d2\u89c6\u9891\u6309\u94ae,\u89c2\u770b\u89c6\u9891\u5e7f\u544a\u83b7\u5f97\u6280\u80fd\u70b9,\u6216\u8005\u5728\u6e38\u620f\u4e2d\u8d5a\u8db3\u591f\u7684\u91d1\u5e01\u8d2d\u4e70\u6280\u80fd\u70b9";
          this.ShowTipDesPanel(param);
          return;
        }
        cc.Mgr.UserData.addSkillSpwanNum(1);
        cc.Mgr.UserData.coin -= cc.Mgr.Global.BoomCost;
        this.uiScore.coinLbl.string = cc.Mgr.UserData.getCoinNum();
        this.spwanHasNumLbl.string = cc.Mgr.UserData.getSkillSpwanNum();
      },
      BuyBoomSkill: function BuyBoomSkill() {
        if (cc.Mgr.UserData.coin < cc.Mgr.Global.BoomCost) {
          var param = {};
          param.des = "\u60a8\u7684\u91d1\u5e01\u4e0d\u591f,\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u5de6\u4e0a\u89d2\u89c6\u9891\u6309\u94ae,\u89c2\u770b\u89c6\u9891\u5e7f\u544a\u83b7\u5f97\u6280\u80fd\u70b9,\u6216\u8005\u5728\u6e38\u620f\u4e2d\u8d5a\u8db3\u591f\u7684\u91d1\u5e01\u8d2d\u4e70\u6280\u80fd\u70b9";
          this.ShowTipDesPanel(param);
          return;
        }
        cc.Mgr.UserData.addSkillBoomNum(1);
        cc.Mgr.UserData.coin -= cc.Mgr.Global.BoomCost;
        this.uiScore.coinLbl.string = cc.Mgr.UserData.getCoinNum();
        this.boomHasNumLbl.string = cc.Mgr.UserData.getSkillBoomNum();
      },
      CloseBuyBoomPanel: function CloseBuyBoomPanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.boomSkillBuyPanel.node.active = false;
        this.spwanSkillBuyPanel.node.active = false;
      },
      ShowTipDesPanel: function ShowTipDesPanel(param) {
        cc.Mgr.AudioMgr.playSFX("dong");
        this.tipPanel.node.active = true;
        this.tipPanel.ShowPanel(param.des);
        cc.Mgr.AdsMgr.ShowInterstitialAd();
      },
      CloseTipDesPanel: function CloseTipDesPanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.tipPanel.node.active = false;
      },
      OpenSetting: function OpenSetting() {
        cc.Mgr.AudioMgr.playSFX("dong");
        this.menuPanel.node.active = false;
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
        this.settingPanel.node.active = true;
        this.settingPanel.ShowPanel();
        cc.Mgr.AdsMgr.ShowInterstitialAd();
      },
      OpenTipPlay: function OpenTipPlay() {
        cc.Mgr.AudioMgr.playSFX("dong");
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
        this.tipPlayPanel.node.active = true;
      },
      CloseSettingPanel: function CloseSettingPanel() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.settingPanel.node.active = false;
      },
      ReturnOneStep: function ReturnOneStep() {
        if (cc.Mgr.UserData.getCoinNum() < cc.Mgr.Global.ReturnStepCost) {
          var param = {};
          param.des = "\u60a8\u7684\u91d1\u5e01\u4e0d\u591f,\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u5de6\u4e0a\u89d2\u89c6\u9891\u6309\u94ae,\u89c2\u770b\u89c6\u9891\u5e7f\u544a\u83b7\u5f97\u6280\u80fd\u70b9,\u6216\u8005\u5728\u6e38\u620f\u4e2d\u8d5a\u8db3\u591f\u7684\u91d1\u5e01\u8d2d\u4e70\u6280\u80fd\u70b9";
          this.ShowTipDesPanel(param);
          return;
        }
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        this.uiScore.AddCoinFunc(-cc.Mgr.Global.ReturnStepCost);
        this.skillUsePanel.node.active = false;
        this.skillBackTip.node.active = false;
        this.gameCtrl.ReturnBackOneStep();
        cc.Mgr.Global.hasMove = false;
      },
      ReturnOneStepUseOne: function ReturnOneStepUseOne() {
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
        cc.Mgr.UserData.addSkillBackNum(-1);
        this.backHasNumLbl.string = cc.Mgr.UserData.getSkillBackNum();
        this.skillUsePanel.node.active = false;
        this.skillBackTip.node.active = false;
        this.gameCtrl.ReturnBackOneStep();
        cc.Mgr.Global.hasMove = false;
      },
      OpenUseSkillPanel: function OpenUseSkillPanel() {
        cc.Mgr.AudioMgr.playSFX("dong");
        if (this.gameCtrl.gameState != GameState.Play) return;
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
        if (false == cc.Mgr.Global.hasMove) {
          var param = {};
          param.des = "\u65e0\u9700\u56de\u9000,\u53ea\u6709\u79fb\u52a8\u8fc7\u540e\u624d\u80fd\u6267\u884c\u56de\u9000";
          this.ShowTipDesPanel(param);
          return;
        }
        if (cc.Mgr.UserData.getSkillBackNum() > 0) {
          this.skillBackTip.node.active = true;
          this.skillBackTip.ShowPanel();
          return;
        }
        this.skillUsePanel.node.active = true;
        this.skillUsePanel.ShowPanel();
      },
      ScreenRecord: function ScreenRecord() {
        cc.Mgr.AudioMgr.playSFX("dong");
        if (false == cc.Mgr.PlatformController.isScreen) {
          cc.Mgr.PlatformController.StartRecordScreen();
          this.screenSpA.spriteFrame = this.Atlas.getSpriteFrame("luping_on");
          this.screenSpB.spriteFrame = this.Atlas.getSpriteFrame("luping_on");
        } else {
          cc.Mgr.PlatformController.StopRecordScreen();
          this.screenSpA.spriteFrame = this.Atlas.getSpriteFrame("video");
          this.screenSpB.spriteFrame = this.Atlas.getSpriteFrame("video");
        }
      },
      SetScreenSps: function SetScreenSps() {
        if (false == cc.Mgr.PlatformController.isScreen) {
          this.screenSpA.spriteFrame = this.Atlas.getSpriteFrame("video");
          this.screenSpB.spriteFrame = this.Atlas.getSpriteFrame("video");
        } else {
          this.screenSpA.spriteFrame = this.Atlas.getSpriteFrame("luping_on");
          this.screenSpB.spriteFrame = this.Atlas.getSpriteFrame("luping_on");
        }
      },
      OpenMenuPanel: function OpenMenuPanel() {
        cc.Mgr.AudioMgr.playSFX("dong");
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
        this.menuPanel.node.active = true;
        this.menuPanel.ShowPanel(this.uiScore.runeType);
      },
      OpenTimeRewardB: function OpenTimeRewardB() {
        cc.Mgr.AudioMgr.playSFX("dong");
        this.menuPanel.node.active = false;
        this.uiScore.OpenTimeReward(2);
      },
      OpenTimeRewardC: function OpenTimeRewardC() {
        cc.Mgr.AudioMgr.playSFX("dong");
        this.menuPanel.node.active = false;
        this.uiScore.OpenTimeReward(3);
      },
      OpenTimeRewardS: function OpenTimeRewardS() {
        cc.Mgr.AudioMgr.playSFX("dong");
        this.menuPanel.node.active = false;
        this.uiScore.OpenTimeRewardS();
      },
      AdsRewardSkill: function AdsRewardSkill() {
        if (false == cc.Mgr.AdsMgr.openAds) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u5e7f\u544a\u5f00\u53d1\u4e2d");
          return;
        }
        var self = this;
        cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointE, function(out) {
          if (0 == out) {
            cc.Mgr.UserData.addSkillBackNum(2);
            cc.Mgr.UserData.addSkillBoomNum(2);
            cc.Mgr.UserData.addSkillSpwanNum(2);
            var param = {};
            param.Tp = "";
            param.RewardType = 2;
            param.getAll = 1;
            param.num = 2;
            self.uiScore.playAnimationTypeB(param);
            self.RefreshUILater();
          }
        });
      },
      RefreshUILater: function RefreshUILater() {
        this.scheduleOnce(function() {
          this.RefreshUI();
        }, .65);
      },
      AdsGetReturnBackSkill: function AdsGetReturnBackSkill() {
        if (false == cc.Mgr.AdsMgr.openAds) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u5e7f\u544a\u5f00\u53d1\u4e2d");
          return;
        }
        var self = this;
        cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointF, function(out) {
          if (0 == out) {
            cc.Mgr.UserData.addSkillBackNum(3);
            self.skillUsePanel.node.active = false;
            var param = {};
            param.Tp = "skillA";
            param.RewardType = 2;
            param.getAll = 0;
            param.num = 3;
            self.OpenUseSkillPanel();
            self.RefreshUI();
          }
        });
      },
      AdsGetBoomSkill: function AdsGetBoomSkill() {
        if (false == cc.Mgr.AdsMgr.openAds) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u5e7f\u544a\u5f00\u53d1\u4e2d");
          return;
        }
        var self = this;
        cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointG, function(out) {
          if (0 == out) {
            cc.Mgr.UserData.addSkillBoomNum(3);
            var param = {};
            param.Tp = "skillB";
            param.RewardType = 2;
            param.getAll = 0;
            param.num = 3;
            self.RefreshUI();
            self.boomSkillBuyPanel.node.active = false;
            self.UseBoomSkillOpen();
          }
        });
      },
      AdsGetSpwanSkill: function AdsGetSpwanSkill() {
        if (false == cc.Mgr.AdsMgr.openAds) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u5e7f\u544a\u5f00\u53d1\u4e2d");
          return;
        }
        var self = this;
        cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointH, function(out) {
          if (0 == out) {
            cc.Mgr.UserData.addSkillSpwanNum(3);
            var param = {};
            param.Tp = "skillC";
            param.RewardType = 2;
            param.getAll = 0;
            param.num = 3;
            self.RefreshUI();
            self.spwanSkillBuyPanel.node.active = false;
            self.UseSpwanSkillOpen();
          }
        });
      }
    });
    module.exports = UIMgr;
    cc._RF.pop();
  }, {
    AdsParam: "AdsParam",
    BuyBoomPanel: "BuyBoomPanel",
    CommonTipPanel: "CommonTipPanel",
    GameController: "GameController",
    GameState: "GameState",
    MenuPanel: "MenuPanel",
    OverPanel: "OverPanel",
    SettingPanel: "SettingPanel",
    ShopPanel: "ShopPanel",
    SkillBackTipPanel: "SkillBackTipPanel",
    SkillUsePanel: "SkillUsePanel",
    StartPanel: "StartPanel",
    TipPlayPanel: "TipPlayPanel",
    TutorialPanel: "TutorialPanel",
    UIScore: "UIScore"
  } ],
  UIScore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "849e3dPAkJPLqkYfhXhB8yQ", "UIScore");
    "use strict";
    var Global = require("Global");
    var LvUpPanel = require("LvUpPanel");
    var AdsParam = require("AdsParam");
    var DiamondPanel = require("DiamondPanel");
    var CommonTipPanel = require("CommonTipPanel");
    var UIScore = cc.Class({
      extends: cc.Component,
      properties: {
        score: 0,
        gameLv: 1,
        Atlas: cc.SpriteAtlas,
        ScoreLbl: cc.Label,
        diamondLbl: cc.Label,
        runeType: 2,
        StartUiRuneSp: cc.Sprite,
        runeBNumLbl: cc.Label,
        runeCNumLbl: cc.Label,
        gameLvLbl: cc.Label,
        coinLbl: cc.Label,
        lvUpPanel: LvUpPanel,
        startUiNode: cc.Node,
        scoreGetDiaLbl: cc.Label,
        getDiamondLbl: cc.Label,
        diamondDesLbl: cc.Label,
        getDiamondDesLbl: cc.Label,
        diamondBtnSp: cc.Sprite,
        tipPanel: CommonTipPanel,
        DiamondRewardNode: DiamondPanel,
        DiamondTimePanel: DiamondPanel,
        doubleBtnSp: cc.Sprite,
        diamondForm: "Score",
        rewardGetAniA: cc.Animation,
        rewardGetAniB: cc.Animation,
        coinAdd: cc.Label,
        runeBAdd: cc.Label,
        runeCAdd: cc.Label,
        skillAddA: cc.Label,
        skillAddB: cc.Label,
        skillAddC: cc.Label
      },
      playAnimationTypeA: function playAnimationTypeA(data) {
        if (1 != data.RewardType) return;
        this.runeBAdd.string = "runeB" == data.Tp ? "+" + data.num : "";
        this.runeCAdd.string = "runeC" == data.Tp ? "+" + data.num : "";
        this.coinAdd.string = "coin" == data.Tp ? "+" + data.num : "";
        this.scheduleOnce(function() {
          this.rewardGetAniA.play("gameRewardA");
          this.RefreshUILbl();
        }, .5);
      },
      playAnimationTypeB: function playAnimationTypeB(data) {
        if (2 != data.RewardType) return;
        this.skillAddA.node.active = "skillA" == data.Tp;
        this.skillAddB.node.active = "skillB" == data.Tp;
        this.skillAddC.node.active = "skillC" == data.Tp;
        if (1 == data.getAll) {
          this.skillAddA.string = "+" + data.num;
          this.skillAddB.string = "+" + data.num;
          this.skillAddC.string = "+" + data.num;
        } else {
          this.skillAddA.string = "skillA" == data.Tp ? "+" + data.num : "";
          this.skillAddB.string = "skillB" == data.Tp ? "+" + data.num : "";
          this.skillAddC.string = "skillC" == data.Tp ? "+" + data.num : "";
        }
        this.scheduleOnce(function() {
          this.rewardGetAniB.play("gameRewardB");
        }, .5);
      },
      start: function start() {
        var self = this;
        cc.director.on("AddGameScore", function(data) {
          self.AddScoreFunc(1);
        });
        cc.director.on("BuySkin", function(data) {
          self.RefreshUILbl();
        });
        this.StartUiRuneSp.spriteFrame = this.Atlas.getSpriteFrame("target_" + this.runeType);
        this.schedule(function() {
          this.SubLeftRewardTime();
          if (true == cc.Mgr.Global.canGetReward) {
            this.diamondBtnSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_1");
            this.doubleBtnSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_1");
            this.getDiamondDesLbl.string = "\u53ef\u83b7\u5f97\u5956\u52b1";
          } else {
            this.doubleBtnSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_2");
            this.diamondBtnSp.spriteFrame = this.Atlas.getSpriteFrame("btnbg_2");
            if (cc.Mgr.UserData.gerRewardHasTimes() >= cc.Mgr.Global.RuneRewardTimesForOneDay) this.getDiamondDesLbl.string = "\u4eca\u65e5\u7684\u9886\u53d6\u6b21\u6570\u5df2\u7ecf\u7528\u5b8c"; else {
              var leftTime = cc.Mgr.UserData.getRewardLastTime() + cc.Mgr.Global.rewardGetInterval - cc.Mgr.Utils.GetSysTime();
              var outTime = cc.Mgr.Utils.FormatNumToTime(leftTime);
              this.getDiamondDesLbl.string = outTime + " \u540e\u53ef\u83b7\u5f97\u5956\u52b1\n(\u5269\u4f59" + (10 - cc.Mgr.UserData.gerRewardHasTimes()) + "/" + cc.Mgr.Global.RuneRewardTimesForOneDay + ")";
            }
          }
          this.getDiamondLbl.string = 200;
        }, 1);
      },
      RefreshUILbl: function RefreshUILbl() {
        this.runeCNumLbl.string = cc.Mgr.UserData.getRuneNum(3);
        this.runeBNumLbl.string = cc.Mgr.UserData.getRuneNum(2);
        this.coinLbl.string = cc.Mgr.UserData.getCoinNum();
      },
      SubLeftRewardTime: function SubLeftRewardTime() {
        cc.Mgr.Utils.GetSysTime() - cc.Mgr.UserData.getRewardLastTime() >= cc.Mgr.Global.rewardGetInterval && cc.Mgr.UserData.gerRewardHasTimes() < cc.Mgr.Global.RuneRewardTimesForOneDay ? cc.Mgr.Global.canGetReward = true : cc.Mgr.Global.canGetReward = false;
      },
      AddScoreFunc: function AddScoreFunc(addNum) {
        this.score += addNum;
        cc.Mgr.UserData.addScore(addNum);
        this.ScoreLbl.string = this.score;
        false == this.lvUpPanel.node.active && false == this.DiamondRewardNode.node.active && cc.Mgr.PlatformController.SendMessageToSubView("RefreshBeyondNormalNode", this.score);
        var action1 = cc.scaleTo(.01, 1, 1.5);
        var action2 = cc.scaleTo(.01, 1.5, 1);
        var action = cc.sequence(action1, action2);
        this.ScoreLbl.node.runAction(action);
        var lastLv = this.gameLv;
        this.gameLv = Math.floor(this.score / Global.LvScore) + 1;
        this.gameLvLbl.string = this.gameLv;
        this.score > cc.Mgr.UserData.getHighScore() && cc.Mgr.UserData.refreshHighScore(this.score);
        if (this.gameLv > lastLv) {
          cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
          cc.Mgr.AudioMgr.playSFX("lv");
          this.lvUpPanel.node.active = true;
          var getNum = Math.floor((cc.Mgr.Global.PassLvGetCoin + 10 * this.gameLv) * cc.Mgr.Global.CoinBonus);
          this.lvUpPanel.ShowPanel(getNum);
        }
        cc.Mgr.UserData.refreshGameLv(this.score);
        if (this.score % 100 == 0 && 0 != this.score && false == this.lvUpPanel.node.active) {
          cc.Mgr.AudioMgr.playSFX("lv");
          cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
          this.diamondForm = "Score";
          this.DiamondRewardNode.node.active = true;
          this.DiamondRewardNode.ShowPanel(this.runeType);
          this.diamondDesLbl.node.active = true;
          var getNum = Math.floor((cc.Mgr.Global.DiamondGetNum + 10 * this.gameLv) * cc.Mgr.Global.DiamondBonus);
          this.scoreGetDiaLbl.string = getNum;
        }
      },
      AddGetCoinFunc: function AddGetCoinFunc() {
        var getNum = Math.floor((cc.Mgr.Global.PassLvGetCoin + 10 * this.gameLv) * cc.Mgr.Global.CoinBonus);
        cc.Mgr.UserData.addCoinFunc(getNum);
        this.lvUpPanel.node.active = false;
        var param = {};
        param.Tp = "coin";
        param.RewardType = 1;
        param.getAll = 0;
        param.num = getNum;
        this.playAnimationTypeA(param);
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
      },
      RefreshUILblLater: function RefreshUILblLater() {
        this.scheduleOnce(function() {
          this.RefreshUILbl();
        }, .65);
      },
      ShareGetCoin: function ShareGetCoin() {
        var str = this.score + "\u4e2a\u8d1d\u58f3\u4e86,\u8fde\u6211\u81ea\u5df1\u90fd\u65e0\u6cd5\u76f8\u4fe1\u6211\u6709\u8fd9\u4e48\u5389\u5bb3";
        cc.Mgr.PlatformController.ShareToFriendTxt(str);
        this.AddGetCoinFunc();
      },
      WatchAdsAddDoubleCoin: function WatchAdsAddDoubleCoin() {
        if (false == cc.Mgr.AdsMgr.openAds) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u5e7f\u544a\u5f00\u53d1\u4e2d");
          return;
        }
        var self = this;
        cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointC, function(out) {
          0 == out && self.AddDoubleCoinFunc();
        });
      },
      WatchAdsAddDoubleDiaScore: function WatchAdsAddDoubleDiaScore() {
        if (false == cc.Mgr.AdsMgr.openAds) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u5e7f\u544a\u5f00\u53d1\u4e2d");
          return;
        }
        var self = this;
        cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointB, function(out) {
          0 == out && self.AddDoubleDiamondFunc();
        });
      },
      WatchAdsAddDoubleDiaTime: function WatchAdsAddDoubleDiaTime() {
        if (false == cc.Mgr.Global.canGetReward) return;
        if (false == cc.Mgr.AdsMgr.openAds) {
          this.tipPanel.node.active = true;
          this.tipPanel.ShowPanel("\u5e7f\u544a\u5f00\u53d1\u4e2d");
          return;
        }
        var self = this;
        cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointD, function(out) {
          0 == out && self.AddDoubleDiamondFunc();
        });
      },
      AddDoubleCoinFunc: function AddDoubleCoinFunc() {
        var getNum = 2 * Math.floor((cc.Mgr.Global.PassLvGetCoin + 10 * this.gameLv) * cc.Mgr.Global.CoinBonus);
        cc.Mgr.UserData.addCoinFunc(getNum);
        this.lvUpPanel.node.active = false;
        var param = {};
        param.Tp = "coin";
        param.RewardType = 1;
        param.getAll = 0;
        param.num = getNum;
        this.playAnimationTypeA(param);
        cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
      },
      AddCoinFunc: function AddCoinFunc(addNum) {
        cc.Mgr.UserData.addCoinFunc(addNum);
        this.coinLbl.string = cc.Mgr.UserData.getCoinNum();
      },
      AddDiamondFunc: function AddDiamondFunc(addNum) {
        cc.Mgr.UserData.addDiamondFunc(addNum);
        this.runeCNumLbl.string = cc.Mgr.UserData.getRuneNum(3);
        this.runeBNumLbl.string = cc.Mgr.UserData.getRuneNum(2);
      },
      AddGetDiamondFunc: function AddGetDiamondFunc() {
        var getNum = 400;
        var param = {};
        param.Tp = "runeC";
        var showAni = true;
        if ("Score" == this.diamondForm) {
          getNum = Math.floor((cc.Mgr.Global.DiamondGetNum + 10 * this.gameLv) * cc.Mgr.Global.DiamondBonus);
          cc.Mgr.UserData.addRuneFunc(getNum, this.runeType);
          2 == this.runeType && (param.Tp = "runeB");
          this.runeType = this.runeType + 1 > 3 ? 2 : 3;
          this.StartUiRuneSp.spriteFrame = this.Atlas.getSpriteFrame("target_" + this.runeType);
        } else if (true == cc.Mgr.Global.canGetReward) {
          getNum = 200;
          cc.Mgr.UserData.addRuneFunc(getNum, this.runeType);
          2 == this.runeType && (param.Tp = "runeB");
          this.runeType = this.runeType + 1 > 3 ? 2 : 3;
          this.StartUiRuneSp.spriteFrame = this.Atlas.getSpriteFrame("target_" + this.runeType);
          cc.Mgr.UserData.RefreshRewardTimeData();
        } else showAni = false;
        param.RewardType = 1;
        param.getAll = 0;
        param.num = getNum;
        if (true == showAni) {
          this.playAnimationTypeA(param);
          true == this.startUiNode.active && cc.director.emit("RewardCallBack", param);
        }
        this.DiamondRewardNode.node.active = false;
        this.DiamondTimePanel.node.active = false;
        false == this.startUiNode.active && cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
      },
      AddDoubleDiamondFunc: function AddDoubleDiamondFunc() {
        var getNum = 400;
        var param = {};
        param.Tp = "runeC";
        var showAni = true;
        if ("Score" == this.diamondForm) {
          getNum = 2 * Math.floor((cc.Mgr.Global.DiamondGetNum + 10 * this.gameLv) * cc.Mgr.Global.DiamondBonus);
          cc.Mgr.UserData.addRuneFunc(getNum, this.runeType);
          2 == this.runeType && (param.Tp = "runeB");
          this.runeType = this.runeType + 1 > 3 ? 2 : 3;
          this.StartUiRuneSp.spriteFrame = this.Atlas.getSpriteFrame("target_" + this.runeType);
        } else if (true == cc.Mgr.Global.canGetReward) {
          getNum = 400;
          cc.Mgr.UserData.addRuneFunc(getNum, this.runeType);
          2 == this.runeType && (param.Tp = "runeB");
          this.runeType = this.runeType + 1 > 3 ? 2 : 3;
          this.StartUiRuneSp.spriteFrame = this.Atlas.getSpriteFrame("target_" + this.runeType);
          cc.Mgr.UserData.RefreshRewardTimeData();
        } else showAni = false;
        param.RewardType = 1;
        param.getAll = 0;
        param.num = getNum;
        if (true == showAni) {
          this.playAnimationTypeA(param);
          true == this.startUiNode.active && cc.director.emit("RewardCallBack", param);
        }
        this.DiamondRewardNode.node.active = false;
        this.DiamondTimePanel.node.active = false;
        false == this.startUiNode.active && cc.Mgr.PlatformController.SendMessageToSubView("ShowFrontNodes");
      },
      ResetScore: function ResetScore() {
        this.score = 0;
        this.gameLv = 1;
        this.ScoreLbl.string = "0";
        this.gameLvLbl.string = "1";
        cc.Mgr.UserData.ResetScore();
        this.coinLbl.string = cc.Mgr.UserData.getCoinNum();
        this.runeCNumLbl.string = cc.Mgr.UserData.getRuneNum(3);
        this.runeBNumLbl.string = cc.Mgr.UserData.getRuneNum(2);
        cc.Mgr.PlatformController.SendMessageToSubView("RefreshBeyondNormalNode", this.score);
      },
      ResetScoreUseProgress: function ResetScoreUseProgress(score) {
        this.ScoreLbl.string = score;
        this.score = score;
      },
      OpenTimeReward: function OpenTimeReward() {
        var runeType = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        cc.Mgr.AdsMgr.RecoverShowBanner();
        this.runeType = runeType;
        this.diamondForm = "Time";
        this.DiamondTimePanel.node.active = true;
        this.DiamondTimePanel.ShowPanel(this.runeType);
        this.getDiamondDesLbl.node.active = true;
        this.StartUiRuneSp.spriteFrame = this.Atlas.getSpriteFrame("target_" + this.runeType);
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
        cc.Mgr.AdsMgr.ShowInterstitialAd();
      },
      OpenTimeRewardS: function OpenTimeRewardS() {
        this.diamondForm = "Time";
        this.DiamondTimePanel.node.active = true;
        this.DiamondTimePanel.ShowPanel(this.runeType);
        this.getDiamondDesLbl.node.active = true;
        cc.Mgr.PlatformController.SendMessageToSubView("CloseFrontNodes");
      }
    });
    cc._RF.pop();
  }, {
    AdsParam: "AdsParam",
    CommonTipPanel: "CommonTipPanel",
    DiamondPanel: "DiamondPanel",
    Global: "Global",
    LvUpPanel: "LvUpPanel"
  } ],
  UserData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36acdoQvwJHyaYwk2zo7hgr", "UserData");
    "use strict";
    var Global = require("Global");
    var ReBox = require("ReBox");
    var DataType = require("DataType");
    var SkinStruct = require("SkinStruct");
    var UserData = cc.Class({
      extends: cc.Component,
      properties: {
        HighScore: 0,
        coin: 0,
        diamond: 0,
        runeB: 0,
        runeC: 0,
        curUseSkinId: 5,
        skillBoomNum: 2,
        skillBackNum: 2,
        skillSpwanNum: 2,
        skinList: {
          default: [],
          type: [ SkinStruct ]
        },
        hasLastProgress: 0,
        remScore: 0,
        rewardLastTime: 0,
        rewardGetTimes: 0,
        CurUseDataType: 0,
        tutorialOver: 0,
        tutorialSeed: 0,
        tutorialStone: 0,
        tutorialFlower: 0,
        score: 0,
        gameLv: 1,
        colsNum: 5,
        rowsNum: 5,
        nextGetRewardTime: 900,
        leftRebornTimes: 3
      },
      initData: function initData() {
        var StorageData = cc.sys.localStorage.getItem("jz_userdata");
        if (null != StorageData && "" != StorageData) {
          console.log("\u5e72\uff0c\u6709\u6570\u636e");
          var Data = JSON.parse(StorageData);
          this.HighScore = Data.highscore;
          this.diamond = Data.diamond;
          this.runeB = Data.runeB;
          this.runeC = Data.runeC;
          this.coin = Data.coin;
          this.skillBoomNum = Data.skillBoomNum;
          this.skillBackNum = Data.skillBackNum;
          null != Data.leftRebornTimes && "" != Data.leftRebornTimes ? this.leftRebornTimes = Data.leftRebornTimes : this.leftRebornTimes = 3;
          null != Data.skillSpwanNum && "" != Data.skillSpwanNum ? this.skillSpwanNum = Data.skillSpwanNum : this.skillSpwanNum = 2;
          this.curUseSkinId = Data.curUseSkinId;
          this.skinList = Data.skinList;
          this.tutorialOver = Data.tutorialOver;
          this.tutorialSeed = Data.tutorialSeed;
          this.tutorialStone = Data.tutorialStone;
          this.tutorialFlower = Data.tutorialFlower;
          this.rewardLastTime = Data.rewardLastTime;
          this.rewardGetTimes = Data.rewardGetTimes;
          cc.log("\u6570\u636e = " + JSON.stringify(StorageData));
        } else {
          console.log("\u5e72\uff0c\u4e4b\u524d\u6ca1\u6709\u6570\u636e");
          var userdata = {};
          userdata.skinList = null;
          userdata.highscore = 0;
          userdata.coin = 0;
          userdata.diamond = 0;
          userdata.tutorialOver = 0;
          userdata.tutorialSeed = 0;
          userdata.tutorialStone = 0;
          userdata.tutorialFlower = 0;
          userdata.rewardGetTimes = 0;
          userdata.rewardLastTime = 0;
          userdata.curUseSkinId = 5;
          userdata.runeB = 0;
          userdata.runeC = 0;
          userdata.skillBoomNum = 2;
          userdata.skillBackNum = 2;
          userdata.skillSpwanNum = 2;
          userdata.leftRebornTimes = 3;
          this.HighScore = userdata.highscore;
          this.coin = userdata.coin;
          this.diamond = userdata.diamond;
          this.runeB = userdata.runeB;
          this.runeC = userdata.runeC;
          this.leftRebornTimes = userdata.leftRebornTimes;
          this.skillBoomNum = userdata.skillBoomNum;
          this.skillBackNum = userdata.skillBackNum;
          this.skillSpwanNum = userdata.skillSpwanNum;
          this.curUseSkinId = userdata.curUseSkinId;
          this.tutorialOver = userdata.tutorialOver;
          this.tutorialSeed = userdata.tutorialSeed;
          this.tutorialFlower = userdata.tutorialFlower;
          this.tutorialStone = userdata.tutorialStone;
          this.rewardLastTime = userdata.rewardLastTime;
          this.rewardGetTimes = userdata.rewardGetTimes;
          var SkinDatalist = cc.Mgr.DataMapMgr.getDataListByDataType(DataType.Skin);
          for (var i = 0; i < SkinDatalist.length; i++) {
            var data = SkinDatalist[i];
            var sk = new SkinStruct();
            sk.skinId = data.skinId;
            sk.price = data.price;
            5 == data.skinId ? sk.unLock = 1 : sk.unLock = 0;
            this.skinList[i] = sk;
          }
          userdata.skinList = this.skinList;
          cc.sys.localStorage.setItem("jz_userdata", JSON.stringify(userdata));
        }
        this.GetInitProgess();
        this.AdjustTimeRewardData();
        this.score = 0;
        this.gameLv = 1;
        cc.log("=============================== " + this.coin);
      },
      AdjustTimeRewardData: function AdjustTimeRewardData() {
        var dayTime = 86400;
        Math.floor(cc.Mgr.Utils.GetSysTime() / dayTime) - Math.floor(this.rewardLastTime / dayTime) >= 1 && (this.rewardGetTimes = 0);
      },
      GetInitProgess: function GetInitProgess() {
        var StorageData = cc.sys.localStorage.getItem("jz_progressdata");
        if (null == StorageData || "" == StorageData) {
          var userdata = {};
          this.ReBoxMap = new Array(this.rowsNum);
          for (var i = 0; i < this.rowsNum; i++) {
            var tables = new Array(this.colsNum);
            for (var j = 0; j < this.colsNum; j++) tables[j] = new ReBox();
            this.ReBoxMap[i] = tables;
          }
          for (var i = 0; i < this.rowsNum; i++) for (var j = 0; j < this.colsNum; j++) this.ReBoxMap[i][j].InitBox(i, j);
          this.hasLastProgress = 0;
          this.remScore = 0;
          userdata.remScore = this.remScore;
          userdata.ReBoxMap = this.ReBoxMap;
          userdata.hasLastProgress = this.hasLastProgress;
          cc.sys.localStorage.setItem("jz_progressdata", JSON.stringify(userdata));
        } else {
          var Data = JSON.parse(StorageData);
          this.remScore = Data.remScore;
          this.ReBoxMap = Data.ReBoxMap;
          this.hasLastProgress = Data.hasLastProgress;
        }
      },
      SaveBoxMapData: function SaveBoxMapData(remScore, hasLastProgress) {
        this.remScore = remScore;
        this.hasLastProgress = hasLastProgress;
        var userdata = {};
        userdata.remScore = remScore;
        userdata.ReBoxMap = this.ReBoxMap;
        userdata.hasLastProgress = this.hasLastProgress;
        cc.sys.localStorage.setItem("jz_progressdata", JSON.stringify(userdata));
      },
      GetReBoxMapUnNullLength: function GetReBoxMapUnNullLength() {
        var outList = [];
        for (var i = 0; i < this.rowsNum; i++) for (var j = 0; j < this.colsNum; j++) 0 == this.ReBoxMap[i][j].flagNum && true != this.ReBoxMap[i][j].showCoin && true != this.ReBoxMap[i][j].showSeed || outList.push(this.ReBoxMap[i][j]);
        return outList;
      },
      GetReBoxParam: function GetReBoxParam(row, col) {
        var param = {};
        param.flagNum = this.ReBoxMap[row][col].flagNum;
        param.showCoin = this.ReBoxMap[row][col].showCoin;
        param.showSeed = this.ReBoxMap[row][col].showSeed;
        return param;
      },
      RefreshBoxMapRem: function RefreshBoxMapRem(row, col, flagNum) {
        var showCoin = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var showSeed = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.ReBoxMap[row][col].showCoin = showCoin;
        this.ReBoxMap[row][col].showSeed = showSeed;
        this.ReBoxMap[row][col].flagNum = flagNum;
      },
      ClearReBoxMap: function ClearReBoxMap() {
        for (var i = 0; i < this.rowsNum; i++) for (var j = 0; j < this.colsNum; j++) {
          this.ReBoxMap[i][j].posX = i;
          this.ReBoxMap[i][j].posY = j;
          this.ReBoxMap[i][j].flagNum = 0;
          this.ReBoxMap[i][j].showCoin = false;
          this.ReBoxMap[i][j].showSeed = false;
        }
        this.SaveBoxMapData(0, 0);
      },
      getHighScore: function getHighScore() {
        return this.HighScore;
      },
      getCoinNum: function getCoinNum() {
        return this.coin;
      },
      addCoinFunc: function addCoinFunc(add) {
        this.coin += add;
      },
      addDiamondFunc: function addDiamondFunc(add) {
        this.diamond += add;
      },
      addRuneFunc: function addRuneFunc(add, type) {
        2 == type ? this.runeB += add : 3 == type && (this.runeC += add);
      },
      getRuneNum: function getRuneNum(type) {
        if (2 == type) return this.runeB;
        if (3 == type) return this.runeC;
      },
      getSkillBoomNum: function getSkillBoomNum() {
        return this.skillBoomNum;
      },
      addSkillBoomNum: function addSkillBoomNum(add) {
        this.skillBoomNum += add;
      },
      getSkillSpwanNum: function getSkillSpwanNum() {
        return this.skillSpwanNum;
      },
      addSkillSpwanNum: function addSkillSpwanNum(add) {
        this.skillSpwanNum += add;
      },
      getSkillBackNum: function getSkillBackNum() {
        return this.skillBackNum;
      },
      addSkillBackNum: function addSkillBackNum(add) {
        this.skillBackNum += add;
      },
      getDiamondNum: function getDiamondNum() {
        return this.diamond;
      },
      addScore: function addScore(add) {
        this.score += add;
      },
      ResetScore: function ResetScore() {
        this.score = 0;
      },
      getCurScore: function getCurScore() {
        return this.score;
      },
      refreshHighScore: function refreshHighScore(score) {
        score > this.HighScore && (this.HighScore = score);
      },
      getGameLv: function getGameLv() {
        return this.gameLv;
      },
      refreshGameLv: function refreshGameLv(score) {
        this.gameLv = Math.floor(score / Global.LvScore) + 1;
      },
      getCurSkinId: function getCurSkinId() {
        return this.curUseSkinId;
      },
      refreshUseSkinId: function refreshUseSkinId(skinId) {
        this.curUseSkinId = skinId;
        cc.Mgr.Global.RefreshBonusData();
        this.SaveData();
      },
      UnlockSkinById: function UnlockSkinById(skinId) {
        for (var i = this.skinList.length - 1; i >= 0; i--) if (this.skinList[i].skinId == skinId) {
          this.skinList[i].unLock = 1;
          this.SaveData();
          return true;
        }
        return false;
      },
      IsSkinUnLock: function IsSkinUnLock(skinId) {
        for (var i = this.skinList.length - 1; i >= 0; i--) if (this.skinList[i].skinId == skinId) return 1 == this.skinList[i].unLock;
        return false;
      },
      IsTutorialOver: function IsTutorialOver() {
        return 1 == this.tutorialOver;
      },
      FinishTutorial: function FinishTutorial() {
        this.tutorialOver = 1;
        this.SaveData();
      },
      IsFinishSeedTutor: function IsFinishSeedTutor() {
        return 1 == this.tutorialSeed;
      },
      FinishTutorialSeed: function FinishTutorialSeed() {
        this.tutorialSeed = 1;
        this.SaveData();
      },
      IsFinishStoneTutor: function IsFinishStoneTutor() {
        return 1 == this.tutorialStone;
      },
      FinishTutorialStone: function FinishTutorialStone() {
        this.tutorialStone = 1;
        this.SaveData();
      },
      IsFinishFlowerTutor: function IsFinishFlowerTutor() {
        return 1 == this.tutorialFlower;
      },
      FinishTutorialFlower: function FinishTutorialFlower() {
        this.tutorialFlower = 1;
        this.SaveData();
      },
      getRewardLastTime: function getRewardLastTime() {
        return this.rewardLastTime;
      },
      gerRewardHasTimes: function gerRewardHasTimes() {
        return this.rewardGetTimes;
      },
      RefreshRewardTimeData: function RefreshRewardTimeData() {
        this.rewardLastTime = cc.Mgr.Utils.GetSysTime();
        this.rewardGetTimes += 1;
        this.rewardGetTimes >= 3 && (this.rewardGetTimes = 3);
        this.SaveData();
      },
      SaveData: function SaveData() {
        var userdata = {};
        userdata.highscore = this.HighScore;
        userdata.coin = this.coin;
        userdata.diamond = this.diamond;
        userdata.runeB = this.runeB;
        userdata.runeC = this.runeC;
        userdata.skillBoomNum = this.skillBoomNum;
        userdata.skillSpwanNum = this.skillSpwanNum;
        userdata.skillBackNum = this.skillBackNum;
        userdata.curUseSkinId = this.curUseSkinId;
        userdata.skinList = this.skinList;
        userdata.tutorialOver = this.tutorialOver;
        userdata.tutorialSeed = this.tutorialSeed;
        userdata.tutorialFlower = this.tutorialFlower;
        userdata.tutorialStone = this.tutorialStone;
        userdata.rewardLastTime = this.rewardLastTime;
        userdata.rewardGetTimes = this.rewardGetTimes;
        userdata.leftRebornTimes = this.leftRebornTimes;
        cc.sys.localStorage.setItem("jz_userdata", JSON.stringify(userdata));
      }
    });
    module.exports = UserData;
    cc._RF.pop();
  }, {
    DataType: "DataType",
    Global: "Global",
    ReBox: "ReBox",
    SkinStruct: "SkinStruct"
  } ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a60aanWjolALZiocmyzHge3", "Utils");
    "use strict";
    var Utils = cc.Class({
      extends: cc.Component,
      statics: {
        FormatNumToTime: function FormatNumToTime(num) {
          var hour = Math.floor(num / 3600);
          var min = Math.floor((num - 3600 * hour) / 60);
          var sec = Math.floor(num - 3600 * hour - 60 * min);
          var str1 = hour;
          var str2 = min;
          var str3 = sec;
          hour < 10 && (str1 = "0" + hour);
          min < 10 && (str2 = "0" + min);
          sec < 10 && (str3 = "0" + sec);
          var out = str1 + ":" + str2 + ":" + str3;
          return out;
        },
        GetSysTime: function GetSysTime() {
          var timestamp = Math.round(new Date() / 1e3) - 1545264e3;
          return timestamp;
        }
      }
    });
    module.exports = Utils;
    cc._RF.pop();
  }, {} ]
}, {}, [ "AudioMgr", "BonusType", "Box", "BoxType", "CurUseData", "DIR", "DataMapMgr", "SkinBonus", "SkinData", "SkinMap", "DataType", "GameController", "GameState", "Global", "PlatformController", "ReBox", "ShareInfos", "SkinStruct", "UserData", "Utils", "AdsMgr", "AdsParam", "AppStart", "BirdVoiceCtrl", "BuyBoomPanel", "CoinEffect", "CommonTipPanel", "DiamondPanel", "LvUpPanel", "MenuPanel", "OverPanel", "RankPanel", "RewardGetTipPanel", "SettingPanel", "ShopPanel", "SkillBackTipPanel", "SkillUsePanel", "SkinItem", "StartPanel", "TipPlayPanel", "TutorialPanel", "UIMgr", "UIScore" ]);