webpackJsonp([16],{127:function(module,exports){eval('jQuery.fn.farbtastic = function (e) {\n  $.farbtastic(this, e);return this;\n};jQuery.farbtastic = function (e, t) {\n  var e = $(e).get(0);return e.farbtastic || (e.farbtastic = new jQuery._farbtastic(e, t));\n};jQuery._farbtastic = function (e, t) {\n  var n = this;$(e).html(\'<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>\');var r = $(".farbtastic", e);n.wheel = $(".wheel", e).get(0);n.radius = 84;n.square = 100;n.width = 194;if (navigator.appVersion.match(/MSIE [0-6]\\./)) {\n    $("*", r).each(function () {\n      if (this.currentStyle.backgroundImage != "none") {\n        var e = this.currentStyle.backgroundImage;e = this.currentStyle.backgroundImage.substring(5, e.length - 2);$(this).css({ backgroundImage: "none", filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src=\'" + e + "\')" });\n      }\n    });\n  }n.linkTo = function (e) {\n    if (typeof n.callback == "object") {\n      $(n.callback).unbind("keyup", n.updateValue);\n    }n.color = null;if (typeof e == "function") {\n      n.callback = e;\n    } else if (typeof e == "object" || typeof e == "string") {\n      n.callback = $(e);n.callback.bind("keyup", n.updateValue);if (n.callback.get(0).value) {\n        n.setColor(n.callback.get(0).value);\n      }\n    }return this;\n  };n.updateValue = function (e) {\n    if (this.value && this.value != n.color) {\n      n.setColor(this.value);\n    }\n  };n.setColor = function (e) {\n    var t = n.unpack(e);if (n.color != e && t) {\n      n.color = e;n.rgb = t;n.hsl = n.RGBToHSL(n.rgb);n.updateDisplay();\n    }return this;\n  };n.setHSL = function (e) {\n    n.hsl = e;n.rgb = n.HSLToRGB(e);n.color = n.pack(n.rgb);n.updateDisplay();return this;\n  };n.widgetCoords = function (e) {\n    var t, r;var i = e.target || e.srcElement;var s = n.wheel;if (typeof e.offsetX != "undefined") {\n      var o = { x: e.offsetX, y: e.offsetY };var u = i;while (u) {\n        u.mouseX = o.x;u.mouseY = o.y;o.x += u.offsetLeft;o.y += u.offsetTop;u = u.offsetParent;\n      }var u = s;var a = { x: 0, y: 0 };while (u) {\n        if (typeof u.mouseX != "undefined") {\n          t = u.mouseX - a.x;r = u.mouseY - a.y;break;\n        }a.x += u.offsetLeft;a.y += u.offsetTop;u = u.offsetParent;\n      }u = i;while (u) {\n        u.mouseX = undefined;u.mouseY = undefined;u = u.offsetParent;\n      }\n    } else {\n      var o = n.absolutePosition(s);t = (e.pageX || 0 * (e.clientX + $("html").get(0).scrollLeft)) - o.x;r = (e.pageY || 0 * (e.clientY + $("html").get(0).scrollTop)) - o.y;\n    }return { x: t - n.width / 2, y: r - n.width / 2 };\n  };n.mousedown = function (e) {\n    if (!document.dragging) {\n      $(document).bind("mousemove", n.mousemove).bind("mouseup", n.mouseup);document.dragging = true;\n    }var t = n.widgetCoords(e);n.circleDrag = Math.max(Math.abs(t.x), Math.abs(t.y)) * 2 > n.square;n.mousemove(e);return false;\n  };n.mousemove = function (e) {\n    var t = n.widgetCoords(e);if (n.circleDrag) {\n      var r = Math.atan2(t.x, -t.y) / 6.28;if (r < 0) r += 1;n.setHSL([r, n.hsl[1], n.hsl[2]]);\n    } else {\n      var i = Math.max(0, Math.min(1, -(t.x / n.square) + .5));var s = Math.max(0, Math.min(1, -(t.y / n.square) + .5));n.setHSL([n.hsl[0], i, s]);\n    }return false;\n  };n.mouseup = function () {\n    $(document).unbind("mousemove", n.mousemove);$(document).unbind("mouseup", n.mouseup);document.dragging = false;\n  };n.updateDisplay = function () {\n    var e = n.hsl[0] * 6.28;$(".h-marker", r).css({ left: Math.round(Math.sin(e) * n.radius + n.width / 2) + "px", top: Math.round(-Math.cos(e) * n.radius + n.width / 2) + "px" });$(".sl-marker", r).css({ left: Math.round(n.square * (.5 - n.hsl[1]) + n.width / 2) + "px", top: Math.round(n.square * (.5 - n.hsl[2]) + n.width / 2) + "px" });$(".color", r).css("backgroundColor", n.pack(n.HSLToRGB([n.hsl[0], 1, .5])));if (typeof n.callback == "object") {\n      $(n.callback).css({ backgroundColor: n.color, color: n.hsl[2] > .5 ? "#000" : "#fff" });$(n.callback).each(function () {\n        if (this.value && this.value != n.color) {\n          this.value = n.color;\n        }\n      });\n    } else if (typeof n.callback == "function") {\n      n.callback.call(n, n.color);\n    }\n  };n.absolutePosition = function (e) {\n    var t = { x: e.offsetLeft, y: e.offsetTop };if (e.offsetParent) {\n      var r = n.absolutePosition(e.offsetParent);t.x += r.x;t.y += r.y;\n    }return t;\n  };n.pack = function (e) {\n    var t = Math.round(e[0] * 255);var n = Math.round(e[1] * 255);var r = Math.round(e[2] * 255);return "#" + (t < 16 ? "0" : "") + t.toString(16) + (n < 16 ? "0" : "") + n.toString(16) + (r < 16 ? "0" : "") + r.toString(16);\n  };n.unpack = function (e) {\n    if (e.length == 7) {\n      return [parseInt("0x" + e.substring(1, 3)) / 255, parseInt("0x" + e.substring(3, 5)) / 255, parseInt("0x" + e.substring(5, 7)) / 255];\n    } else if (e.length == 4) {\n      return [parseInt("0x" + e.substring(1, 2)) / 15, parseInt("0x" + e.substring(2, 3)) / 15, parseInt("0x" + e.substring(3, 4)) / 15];\n    }\n  };n.HSLToRGB = function (e) {\n    var t, n, r, i, s;var o = e[0],\n        u = e[1],\n        a = e[2];n = a <= .5 ? a * (u + 1) : a + u - a * u;t = a * 2 - n;return [this.hueToRGB(t, n, o + .33333), this.hueToRGB(t, n, o), this.hueToRGB(t, n, o - .33333)];\n  };n.hueToRGB = function (e, t, n) {\n    n = n < 0 ? n + 1 : n > 1 ? n - 1 : n;if (n * 6 < 1) return e + (t - e) * n * 6;if (n * 2 < 1) return t;if (n * 3 < 2) return e + (t - e) * (.66666 - n) * 6;return e;\n  };n.RGBToHSL = function (e) {\n    var t, n, r, i, s, o;var u = e[0],\n        a = e[1],\n        f = e[2];t = Math.min(u, Math.min(a, f));n = Math.max(u, Math.max(a, f));r = n - t;o = (t + n) / 2;s = 0;if (o > 0 && o < 1) {\n      s = r / (o < .5 ? 2 * o : 2 - 2 * o);\n    }i = 0;if (r > 0) {\n      if (n == u && n != a) i += (a - f) / r;if (n == a && n != f) i += 2 + (f - u) / r;if (n == f && n != u) i += 4 + (u - a) / r;i /= 6;\n    }return [i, s, o];\n  };$("*", r).mousedown(n.mousedown);n.setColor("#000000");if (t) {\n    n.linkTo(t);\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZmFyYnRhc3RpYy9mYXJidGFzdGljLm1pbi5qcz9iZTVmIl0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeS5mbi5mYXJidGFzdGljID0gZnVuY3Rpb24gKGUpIHtcbiAgJC5mYXJidGFzdGljKHRoaXMsIGUpO3JldHVybiB0aGlzO1xufTtqUXVlcnkuZmFyYnRhc3RpYyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gIHZhciBlID0gJChlKS5nZXQoMCk7cmV0dXJuIGUuZmFyYnRhc3RpYyB8fCAoZS5mYXJidGFzdGljID0gbmV3IGpRdWVyeS5fZmFyYnRhc3RpYyhlLCB0KSk7XG59O2pRdWVyeS5fZmFyYnRhc3RpYyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gIHZhciBuID0gdGhpczskKGUpLmh0bWwoJzxkaXYgY2xhc3M9XCJmYXJidGFzdGljXCI+PGRpdiBjbGFzcz1cImNvbG9yXCI+PC9kaXY+PGRpdiBjbGFzcz1cIndoZWVsXCI+PC9kaXY+PGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj48ZGl2IGNsYXNzPVwiaC1tYXJrZXIgbWFya2VyXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNsLW1hcmtlciBtYXJrZXJcIj48L2Rpdj48L2Rpdj4nKTt2YXIgciA9ICQoXCIuZmFyYnRhc3RpY1wiLCBlKTtuLndoZWVsID0gJChcIi53aGVlbFwiLCBlKS5nZXQoMCk7bi5yYWRpdXMgPSA4NDtuLnNxdWFyZSA9IDEwMDtuLndpZHRoID0gMTk0O2lmIChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5tYXRjaCgvTVNJRSBbMC02XVxcLi8pKSB7XG4gICAgJChcIipcIiwgcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U3R5bGUuYmFja2dyb3VuZEltYWdlICE9IFwibm9uZVwiKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5jdXJyZW50U3R5bGUuYmFja2dyb3VuZEltYWdlO2UgPSB0aGlzLmN1cnJlbnRTdHlsZS5iYWNrZ3JvdW5kSW1hZ2Uuc3Vic3RyaW5nKDUsIGUubGVuZ3RoIC0gMik7JCh0aGlzKS5jc3MoeyBiYWNrZ3JvdW5kSW1hZ2U6IFwibm9uZVwiLCBmaWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhSW1hZ2VMb2FkZXIoZW5hYmxlZD10cnVlLCBzaXppbmdNZXRob2Q9Y3JvcCwgc3JjPSdcIiArIGUgKyBcIicpXCIgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1uLmxpbmtUbyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHR5cGVvZiBuLmNhbGxiYWNrID09IFwib2JqZWN0XCIpIHtcbiAgICAgICQobi5jYWxsYmFjaykudW5iaW5kKFwia2V5dXBcIiwgbi51cGRhdGVWYWx1ZSk7XG4gICAgfW4uY29sb3IgPSBudWxsO2lmICh0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIG4uY2FsbGJhY2sgPSBlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICBuLmNhbGxiYWNrID0gJChlKTtuLmNhbGxiYWNrLmJpbmQoXCJrZXl1cFwiLCBuLnVwZGF0ZVZhbHVlKTtpZiAobi5jYWxsYmFjay5nZXQoMCkudmFsdWUpIHtcbiAgICAgICAgbi5zZXRDb2xvcihuLmNhbGxiYWNrLmdldCgwKS52YWx1ZSk7XG4gICAgICB9XG4gICAgfXJldHVybiB0aGlzO1xuICB9O24udXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUgIT0gbi5jb2xvcikge1xuICAgICAgbi5zZXRDb2xvcih0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH07bi5zZXRDb2xvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSBuLnVucGFjayhlKTtpZiAobi5jb2xvciAhPSBlICYmIHQpIHtcbiAgICAgIG4uY29sb3IgPSBlO24ucmdiID0gdDtuLmhzbCA9IG4uUkdCVG9IU0wobi5yZ2IpO24udXBkYXRlRGlzcGxheSgpO1xuICAgIH1yZXR1cm4gdGhpcztcbiAgfTtuLnNldEhTTCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgbi5oc2wgPSBlO24ucmdiID0gbi5IU0xUb1JHQihlKTtuLmNvbG9yID0gbi5wYWNrKG4ucmdiKTtuLnVwZGF0ZURpc3BsYXkoKTtyZXR1cm4gdGhpcztcbiAgfTtuLndpZGdldENvb3JkcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQsIHI7dmFyIGkgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7dmFyIHMgPSBuLndoZWVsO2lmICh0eXBlb2YgZS5vZmZzZXRYICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHZhciBvID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O3ZhciB1ID0gaTt3aGlsZSAodSkge1xuICAgICAgICB1Lm1vdXNlWCA9IG8ueDt1Lm1vdXNlWSA9IG8ueTtvLnggKz0gdS5vZmZzZXRMZWZ0O28ueSArPSB1Lm9mZnNldFRvcDt1ID0gdS5vZmZzZXRQYXJlbnQ7XG4gICAgICB9dmFyIHUgPSBzO3ZhciBhID0geyB4OiAwLCB5OiAwIH07d2hpbGUgKHUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB1Lm1vdXNlWCAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgdCA9IHUubW91c2VYIC0gYS54O3IgPSB1Lm1vdXNlWSAtIGEueTticmVhaztcbiAgICAgICAgfWEueCArPSB1Lm9mZnNldExlZnQ7YS55ICs9IHUub2Zmc2V0VG9wO3UgPSB1Lm9mZnNldFBhcmVudDtcbiAgICAgIH11ID0gaTt3aGlsZSAodSkge1xuICAgICAgICB1Lm1vdXNlWCA9IHVuZGVmaW5lZDt1Lm1vdXNlWSA9IHVuZGVmaW5lZDt1ID0gdS5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvID0gbi5hYnNvbHV0ZVBvc2l0aW9uKHMpO3QgPSAoZS5wYWdlWCB8fCAwICogKGUuY2xpZW50WCArICQoXCJodG1sXCIpLmdldCgwKS5zY3JvbGxMZWZ0KSkgLSBvLng7ciA9IChlLnBhZ2VZIHx8IDAgKiAoZS5jbGllbnRZICsgJChcImh0bWxcIikuZ2V0KDApLnNjcm9sbFRvcCkpIC0gby55O1xuICAgIH1yZXR1cm4geyB4OiB0IC0gbi53aWR0aCAvIDIsIHk6IHIgLSBuLndpZHRoIC8gMiB9O1xuICB9O24ubW91c2Vkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWRvY3VtZW50LmRyYWdnaW5nKSB7XG4gICAgICAkKGRvY3VtZW50KS5iaW5kKFwibW91c2Vtb3ZlXCIsIG4ubW91c2Vtb3ZlKS5iaW5kKFwibW91c2V1cFwiLCBuLm1vdXNldXApO2RvY3VtZW50LmRyYWdnaW5nID0gdHJ1ZTtcbiAgICB9dmFyIHQgPSBuLndpZGdldENvb3JkcyhlKTtuLmNpcmNsZURyYWcgPSBNYXRoLm1heChNYXRoLmFicyh0LngpLCBNYXRoLmFicyh0LnkpKSAqIDIgPiBuLnNxdWFyZTtuLm1vdXNlbW92ZShlKTtyZXR1cm4gZmFsc2U7XG4gIH07bi5tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0gbi53aWRnZXRDb29yZHMoZSk7aWYgKG4uY2lyY2xlRHJhZykge1xuICAgICAgdmFyIHIgPSBNYXRoLmF0YW4yKHQueCwgLXQueSkgLyA2LjI4O2lmIChyIDwgMCkgciArPSAxO24uc2V0SFNMKFtyLCBuLmhzbFsxXSwgbi5oc2xbMl1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAtKHQueCAvIG4uc3F1YXJlKSArIC41KSk7dmFyIHMgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAtKHQueSAvIG4uc3F1YXJlKSArIC41KSk7bi5zZXRIU0woW24uaHNsWzBdLCBpLCBzXSk7XG4gICAgfXJldHVybiBmYWxzZTtcbiAgfTtuLm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJChkb2N1bWVudCkudW5iaW5kKFwibW91c2Vtb3ZlXCIsIG4ubW91c2Vtb3ZlKTskKGRvY3VtZW50KS51bmJpbmQoXCJtb3VzZXVwXCIsIG4ubW91c2V1cCk7ZG9jdW1lbnQuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfTtuLnVwZGF0ZURpc3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSBuLmhzbFswXSAqIDYuMjg7JChcIi5oLW1hcmtlclwiLCByKS5jc3MoeyBsZWZ0OiBNYXRoLnJvdW5kKE1hdGguc2luKGUpICogbi5yYWRpdXMgKyBuLndpZHRoIC8gMikgKyBcInB4XCIsIHRvcDogTWF0aC5yb3VuZCgtTWF0aC5jb3MoZSkgKiBuLnJhZGl1cyArIG4ud2lkdGggLyAyKSArIFwicHhcIiB9KTskKFwiLnNsLW1hcmtlclwiLCByKS5jc3MoeyBsZWZ0OiBNYXRoLnJvdW5kKG4uc3F1YXJlICogKC41IC0gbi5oc2xbMV0pICsgbi53aWR0aCAvIDIpICsgXCJweFwiLCB0b3A6IE1hdGgucm91bmQobi5zcXVhcmUgKiAoLjUgLSBuLmhzbFsyXSkgKyBuLndpZHRoIC8gMikgKyBcInB4XCIgfSk7JChcIi5jb2xvclwiLCByKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIiwgbi5wYWNrKG4uSFNMVG9SR0IoW24uaHNsWzBdLCAxLCAuNV0pKSk7aWYgKHR5cGVvZiBuLmNhbGxiYWNrID09IFwib2JqZWN0XCIpIHtcbiAgICAgICQobi5jYWxsYmFjaykuY3NzKHsgYmFja2dyb3VuZENvbG9yOiBuLmNvbG9yLCBjb2xvcjogbi5oc2xbMl0gPiAuNSA/IFwiIzAwMFwiIDogXCIjZmZmXCIgfSk7JChuLmNhbGxiYWNrKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZSAhPSBuLmNvbG9yKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG4uY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG4uY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBuLmNhbGxiYWNrLmNhbGwobiwgbi5jb2xvcik7XG4gICAgfVxuICB9O24uYWJzb2x1dGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSB7IHg6IGUub2Zmc2V0TGVmdCwgeTogZS5vZmZzZXRUb3AgfTtpZiAoZS5vZmZzZXRQYXJlbnQpIHtcbiAgICAgIHZhciByID0gbi5hYnNvbHV0ZVBvc2l0aW9uKGUub2Zmc2V0UGFyZW50KTt0LnggKz0gci54O3QueSArPSByLnk7XG4gICAgfXJldHVybiB0O1xuICB9O24ucGFjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSBNYXRoLnJvdW5kKGVbMF0gKiAyNTUpO3ZhciBuID0gTWF0aC5yb3VuZChlWzFdICogMjU1KTt2YXIgciA9IE1hdGgucm91bmQoZVsyXSAqIDI1NSk7cmV0dXJuIFwiI1wiICsgKHQgPCAxNiA/IFwiMFwiIDogXCJcIikgKyB0LnRvU3RyaW5nKDE2KSArIChuIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgbi50b1N0cmluZygxNikgKyAociA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIHIudG9TdHJpbmcoMTYpO1xuICB9O24udW5wYWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5sZW5ndGggPT0gNykge1xuICAgICAgcmV0dXJuIFtwYXJzZUludChcIjB4XCIgKyBlLnN1YnN0cmluZygxLCAzKSkgLyAyNTUsIHBhcnNlSW50KFwiMHhcIiArIGUuc3Vic3RyaW5nKDMsIDUpKSAvIDI1NSwgcGFyc2VJbnQoXCIweFwiICsgZS5zdWJzdHJpbmcoNSwgNykpIC8gMjU1XTtcbiAgICB9IGVsc2UgaWYgKGUubGVuZ3RoID09IDQpIHtcbiAgICAgIHJldHVybiBbcGFyc2VJbnQoXCIweFwiICsgZS5zdWJzdHJpbmcoMSwgMikpIC8gMTUsIHBhcnNlSW50KFwiMHhcIiArIGUuc3Vic3RyaW5nKDIsIDMpKSAvIDE1LCBwYXJzZUludChcIjB4XCIgKyBlLnN1YnN0cmluZygzLCA0KSkgLyAxNV07XG4gICAgfVxuICB9O24uSFNMVG9SR0IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0LCBuLCByLCBpLCBzO3ZhciBvID0gZVswXSxcbiAgICAgICAgdSA9IGVbMV0sXG4gICAgICAgIGEgPSBlWzJdO24gPSBhIDw9IC41ID8gYSAqICh1ICsgMSkgOiBhICsgdSAtIGEgKiB1O3QgPSBhICogMiAtIG47cmV0dXJuIFt0aGlzLmh1ZVRvUkdCKHQsIG4sIG8gKyAuMzMzMzMpLCB0aGlzLmh1ZVRvUkdCKHQsIG4sIG8pLCB0aGlzLmh1ZVRvUkdCKHQsIG4sIG8gLSAuMzMzMzMpXTtcbiAgfTtuLmh1ZVRvUkdCID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICBuID0gbiA8IDAgPyBuICsgMSA6IG4gPiAxID8gbiAtIDEgOiBuO2lmIChuICogNiA8IDEpIHJldHVybiBlICsgKHQgLSBlKSAqIG4gKiA2O2lmIChuICogMiA8IDEpIHJldHVybiB0O2lmIChuICogMyA8IDIpIHJldHVybiBlICsgKHQgLSBlKSAqICguNjY2NjYgLSBuKSAqIDY7cmV0dXJuIGU7XG4gIH07bi5SR0JUb0hTTCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQsIG4sIHIsIGksIHMsIG87dmFyIHUgPSBlWzBdLFxuICAgICAgICBhID0gZVsxXSxcbiAgICAgICAgZiA9IGVbMl07dCA9IE1hdGgubWluKHUsIE1hdGgubWluKGEsIGYpKTtuID0gTWF0aC5tYXgodSwgTWF0aC5tYXgoYSwgZikpO3IgPSBuIC0gdDtvID0gKHQgKyBuKSAvIDI7cyA9IDA7aWYgKG8gPiAwICYmIG8gPCAxKSB7XG4gICAgICBzID0gciAvIChvIDwgLjUgPyAyICogbyA6IDIgLSAyICogbyk7XG4gICAgfWkgPSAwO2lmIChyID4gMCkge1xuICAgICAgaWYgKG4gPT0gdSAmJiBuICE9IGEpIGkgKz0gKGEgLSBmKSAvIHI7aWYgKG4gPT0gYSAmJiBuICE9IGYpIGkgKz0gMiArIChmIC0gdSkgLyByO2lmIChuID09IGYgJiYgbiAhPSB1KSBpICs9IDQgKyAodSAtIGEpIC8gcjtpIC89IDY7XG4gICAgfXJldHVybiBbaSwgcywgb107XG4gIH07JChcIipcIiwgcikubW91c2Vkb3duKG4ubW91c2Vkb3duKTtuLnNldENvbG9yKFwiIzAwMDAwMFwiKTtpZiAodCkge1xuICAgIG4ubGlua1RvKHQpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvZmFyYnRhc3RpYy9mYXJidGFzdGljLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9')}});