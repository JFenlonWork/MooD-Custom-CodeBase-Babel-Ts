/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Generic)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/** Class representing all generic based functions needed for math calculations.
 */
var Generic = /*#__PURE__*/function () {
  function Generic() {
    _classCallCheck(this, Generic);
  }

  _createClass(Generic, null, [{
    key: "between",
    value: function between(_min, _val, _max) {
      var _eps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.001;

      if (_min == null) {
        console.error("Error trying to check if a number is between two numbers using an invalid minimum: ", _min);
        return false;
      }

      if (_val == null) {
        console.error("Error trying to check if a number is between two numbers using an invalid value: ", _val);
        return false;
      }

      if (_max == null) {
        console.error("Error trying to check if a number is between two numbers using an invalid maximum: ", _max);
        return false;
      }

      return _min - _eps < _val && _val < _max + _eps;
    }
  }]);

  return Generic;
}();

/***/ }),

/***/ 498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(955);
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(738);
/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(843);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/** Class representing a Line which hold two points.
 */

var Line = /*#__PURE__*/function () {
  /**
  * Create a Bounds
  * @param  {number} x1 - The first point x value to set
  * @param  {number} y1 - The first point y value to set
  * @param  {number} x2 - The second point x value to set
  * @param  {number} y2 - The second point y value to set
  */
  function Line(x1, y1, x2, y2) {
    _classCallCheck(this, Line);

    _defineProperty(this, "_x1", 0);

    _defineProperty(this, "_y1", 0);

    _defineProperty(this, "_x2", 0);

    _defineProperty(this, "_y2", 0);

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  /**
  * Set this Line's values to be the parameter's values and apply the values to this Line
  * @param  {number} x1 - The x1 value to set
  * @param  {number} y1 - The y1 value to set
  * @param  {number} y2 - The x2 value to set
  * @param  {number} y2 - The y2 value to set
  * @returns {Line}
  */


  _createClass(Line, [{
    key: "x1",
    get: function get() {
      return this._x1;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Lines's x1 value using an invalid input: ", value);
        value = NaN;
      }

      this._x1 = value;
    }
  }, {
    key: "y1",
    get: function get() {
      return this._y1;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Lines's y1 value using an invalid input: ", value);
        value = NaN;
      }

      this._y1 = value;
    }
  }, {
    key: "x2",
    get: function get() {
      return this._x2;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Lines's x2 value using an invalid input: ", value);
        value = NaN;
      }

      this._x2 = value;
    }
  }, {
    key: "y2",
    get: function get() {
      return this._y2;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Lines's y2 value using an invalid input: ", value);
        value = NaN;
      }

      this._y2 = value;
    }
  }, {
    key: "set",
    value: function set(x1, y1, x2, y2) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      return this;
    }
    /**
     * Create a Line filled with NaN
     * @returns {Line}
     */

  }, {
    key: "equals",
    value:
    /**
    * Returns if an object is the same as this line
    * @param  {object} o
    * @returns {boolean}
    */
    function equals(o) {
      if (!(o instanceof Line)) return false;
      return this.x1 == o.x1 && this.y1 == o.y1 && this.x2 == o.x2 && this.y2 == o.y2;
    }
    /**
     * Returns if this Line is all NaN
     * @returns {boolean}
     */

  }, {
    key: "IsNaN",
    value: function IsNaN() {
      return isNaN(this.x1) && isNaN(this.y1) && isNaN(this.x2) && isNaN(this.y2);
    }
    /**
     * Returns if this Line has a NaN value
     * @returns {boolean}
     */

  }, {
    key: "HasNaN",
    value: function HasNaN() {
      return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
    }
    /**
     * Returns if a line is all NaN
     * @param  {object} o
     * @returns {boolean}
     */

  }, {
    key: "clone",
    value:
    /**
    * Returns a new Line with the same values as this Line
    * @returns {Line}
    */
    function clone() {
      return new Line(this.x1, this.y1, this.x2, this.y2);
    }
    /**
    * Create a Line from two Vector2s
    * @param  {Vector2} _pos1
    * @param  {Vector2} _pos2
    * @returns {Line}
    */

  }, {
    key: "distance",
    value:
    /**
    * Calculate the distance the Line's two points
    * @returns {number}
    */
    function distance() {
      return Math.sqrt(this.distanceSqr());
    }
    /**
     * Calculate the squared distance the Line's two points
     * @returns {number}
     */

  }, {
    key: "distanceSqr",
    value: function distanceSqr() {
      return Math.pow(this.x1 - this.x2, 2) + Math.pow(this.y1 - this.y2, 2);
    }
    /**
    * Calculate the intersection point of two Lines
    * @param  {Vector2} _line1
    * @param  {Vector2} _line2
    * @returns {vector2}
    */

  }], [{
    key: "NaN",
    value: function (_NaN) {
      function NaN() {
        return _NaN.apply(this, arguments);
      }

      NaN.toString = function () {
        return _NaN.toString();
      };

      return NaN;
    }(function () {
      return new Line(NaN, NaN, NaN, NaN);
    }
    /**
     * Create a Line filled with 0
     * @returns {Line}
     */
    )
  }, {
    key: "Zero",
    value: function Zero() {
      return new Line(0, 0, 0, 0);
    }
  }, {
    key: "isNaN",
    value: function (_isNaN) {
      function isNaN(_x) {
        return _isNaN.apply(this, arguments);
      }

      isNaN.toString = function () {
        return _isNaN.toString();
      };

      return isNaN;
    }(function (o) {
      if (!(o instanceof Line)) return false;
      return isNaN(o.x1) && isNaN(o.y1) && isNaN(o.x2) && isNaN(o.y2);
    }
    /**
     * Returns if a line has a NaN value
     * @param  {object} o
     * @returns {boolean}
     */
    )
  }, {
    key: "hasNaN",
    value: function hasNaN(o) {
      if (!(o instanceof Line)) return false;
      return isNaN(o.x1) || isNaN(o.y1) || isNaN(o.x2) || isNaN(o.y2);
    }
  }, {
    key: "fromVector2s",
    value: function fromVector2s(_pos1, _pos2) {
      if (!(_pos1 instanceof _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F)) {
        console.error("Error trying to generate Line with invalid first Vector2: ", _pos1);
        _pos1 = new _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(NaN, NaN);
      }

      if (!(_pos2 instanceof _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F)) {
        console.error("Error trying to generate Line with invalid second Vector2: ", _pos2);
        _pos2 = new _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(NaN, NaN);
      }

      return new Line(_pos1.x, _pos1.y, _pos2.x, _pos2.y);
    }
    /**
    * Create a Line from a Vector4
    * @param  {Vector4} _vector
    * @returns {Line}
    */

  }, {
    key: "fromVector4",
    value: function fromVector4(_vector) {
      if (!(_vector instanceof _Vector4__WEBPACK_IMPORTED_MODULE_2__/* .Vector4 */ .L)) {
        console.error("Error trying to generate Line with invalid Vector4: ", _vector);
        _vector = new _Vector4__WEBPACK_IMPORTED_MODULE_2__/* .Vector4 */ .L(NaN, NaN, NaN, NaN);
      }

      return new Line(_vector.x, _vector.y, _vector.z, _vector.w);
    }
  }, {
    key: "lineIntersection",
    value: function lineIntersection(_line1, _line2) {
      //Do line intersection calculation stuff? 
      //en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Mathematics
      if (!(_line1 instanceof Line)) {
        console.error("Error trying to calculate line intersection with invalid Line1: ", _line1);
        return new _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(NaN, NaN);
      }

      if (!(_line2 instanceof Line)) {
        console.error("Error trying to calculate line intersection with invalid Line2: ", _line2);
        return new _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(NaN, NaN);
      }

      var lineIntersect = new _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(NaN, NaN);
      var div = (_line1.x1 - _line1.x2) * (_line2.y1 - _line2.y2) - (_line1.y1 - _line1.y2) * (_line2.x1 - _line2.x2);
      lineIntersect.x = (_line1.x1 * _line1.y2 - _line1.y1 * _line1.x2) * (_line2.x1 - _line2.x2) - (_line1.x1 - _line1.x2) * (_line2.x1 * _line2.y2 - _line2.y1 * _line2.x2);
      lineIntersect.x /= div;
      lineIntersect.y = (_line1.x1 * _line1.y2 - _line1.y1 * _line1.x2) * (_line2.y1 - _line2.y2) - (_line1.y1 - _line1.y2) * (_line2.x1 * _line2.y2 - _line2.y1 * _line2.x2);
      lineIntersect.y /= div;
      if (lineIntersect.HasNaN()) return new _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(NaN, NaN);
      return lineIntersect;
    }
    /**
    * Calculate the intersection point of two Lines if it is within the line
    * @param  {Vector2} _line1
    * @param  {Vector2} _line2
    * @returns {vector2}
    */

  }, {
    key: "lineIntersectionWithin",
    value: function lineIntersectionWithin(_line1, _line2) {
      var intersection = this.lineIntersection(_line1, _line2);
      if (intersection.HasNaN()) return new _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(NaN, NaN); //check if line interception is within line 1 x

      if (_line1.x1 >= _line1.x2) {
        if (_Generic__WEBPACK_IMPORTED_MODULE_0__/* .Generic.between */ .T.between(_line1.x2, intersection.x, _line1.x1)) return _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2[NaN] */ .F[NaN]();
      } else {
        if (_Generic__WEBPACK_IMPORTED_MODULE_0__/* .Generic.between */ .T.between(_line1.x1, intersection.x, _line1.x2)) return _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2[NaN] */ .F[NaN]();
      } //check if line interception is within line 1 y


      if (_line1.y1 >= _line1.y2) {
        if (_Generic__WEBPACK_IMPORTED_MODULE_0__/* .Generic.between */ .T.between(_line1.y2, intersection.y, _line1.y1)) return _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2[NaN] */ .F[NaN]();
      } else {
        if (_Generic__WEBPACK_IMPORTED_MODULE_0__/* .Generic.between */ .T.between(_line1.y1, intersection.y, _line1.y2)) return _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2[NaN] */ .F[NaN]();
      } //check if line interception is within line 2 x


      if (_line2.x1 >= _line2.x2) {
        if (_Generic__WEBPACK_IMPORTED_MODULE_0__/* .Generic.between */ .T.between(_line2.x2, intersection.x, _line2.x1)) return _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2[NaN] */ .F[NaN]();
      } else {
        if (_Generic__WEBPACK_IMPORTED_MODULE_0__/* .Generic.between */ .T.between(_line2.x1, intersection.x, _line2.x2)) return _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2[NaN] */ .F[NaN]();
      } //check if line interception is within line 2 y


      if (_line2.y1 >= _line2.y2) {
        if (_Generic__WEBPACK_IMPORTED_MODULE_0__/* .Generic.between */ .T.between(_line2.y2, intersection.y, _line2.y1)) return _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2[NaN] */ .F[NaN]();
      } else {
        if (_Generic__WEBPACK_IMPORTED_MODULE_0__/* .Generic.between */ .T.between(_line2.y1, intersection.y, _line2.y2)) return _Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2[NaN] */ .F[NaN]();
      }

      return intersection;
    }
  }]);

  return Line;
}();

/***/ }),

/***/ 888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Positioning)
/* harmony export */ });
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/** Class representing all position based functions needed for math calculations.
 */

var Positioning = /*#__PURE__*/function () {
  function Positioning() {
    _classCallCheck(this, Positioning);
  }

  _createClass(Positioning, null, [{
    key: "getPageViewportOffsetFromPage",
    value:
    /**
    * Calculate viewport offset from document origin
    * @returns {Vector2}
    */
    function getPageViewportOffsetFromPage() {
      var body = document.body;
      var docEl = document.documentElement;
      return new _Vector2__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .F((window.pageXOffset || docEl.scrollLeft || body.scrollLeft) - (docEl.clientLeft || body.clientLeft || 0), (window.pageYOffset || docEl.scrollTop || body.scrollTop) - (docEl.clientTop || body.clientTop || 0));
    }
    /**
    * Apply viewport offset to a vector to return coordinates in viewport space
    * @param  {Vector2} _vector
    */

  }, {
    key: "addPageViewportOffsetFromPage",
    value: function addPageViewportOffsetFromPage(_vector) {
      _vector.Add(Positioning.getPageViewportOffsetFromPage());
    }
    /**
    * Subtract viewport offset to a vector to return relative coordinates to the document origin
    * @param  {Vector2} _vector
    */

  }, {
    key: "subtractPageViewportOffsetFromPage",
    value: function subtractPageViewportOffsetFromPage(_vector) {
      _vector.Subtract(Positioning.getPageViewportOffsetFromPage());
    }
    /**
    * Calculate coordinates of object
    * @param  {HTMLElement} _object - The object to calculate the coordinates for
    * @param  {Document | HTMLElement | null} _relative - The object or "screen"(null) to calculate the coordinates relative to
    * @returns {Vector2}
    */

  }, {
    key: "getCoords",
    value: function getCoords(_object) {
      var _relativeTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      if (_object == null) {
        console.error("Error trying to calculate coordinates with invalid object: ", _object);
        return new _Vector2__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .F(NaN, NaN);
      }

      var ret = new _Vector2__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .F(NaN, NaN);

      if (_relativeTo == null || _relativeTo == document) {
        var box = _object.getBoundingClientRect();

        ret.x = box.left;
        ret.y = box.top;
        if (_relativeTo == document) this.subtractPageViewportOffsetFromPage(ret);
      } else {
        if (_relativeTo === _object.offsetParent) {
          ret.x = _object.offsetLeft;
          ret.y = _object.offsetTop;
        } else {
          //Calculate position offset from viewport
          var _box = _object.getBoundingClientRect();

          ret.x = _box.left;
          ret.y = _box.top; //if relative to exists then calculate offset from that

          var otherBox = _relativeTo.getBoundingClientRect();

          ret.x -= otherBox.left;
          ret.y -= otherBox.top;
        }
      }

      return ret;
    }
    /**
    * Calculate sizes of computed style
    * @param  {HTMLElement} _object - The object to calculate the size on
    * @param  {string} _css - The CSS attribute 
    * @param  {CSSStyleDeclaration} _computedStyle - The style of the DOM element 
    * @returns {number}
    */

  }, {
    key: "translateCssSizes",
    value: function translateCssSizes(_object, _css, _computedStyle) {
      if (_object == null) {
        console.error("Error trying to calculate CSS sizing with invalid object: ", _object);
        return 0;
      }

      if (_css == null) {
        console.error("Error trying to calculate CSS sizing with invalid CSS string: ", _css);
        return 0;
      }

      var computedStyle = _computedStyle != null ? _computedStyle : window.getComputedStyle(_object);
      var key = _css;

      switch (computedStyle[key]) {
        case "thin":
          return 1;

        case "medium":
          return 3;

        case "thick":
          return 5;

        case "auto":
          return 0;

        case "inherit":
          if (_object.offsetParent != null) {
            return this.translateCssSizes(_object.offsetParent, _css, undefined);
          }

          return 0;

        default:
          if (computedStyle[key] == null) return 0;
          return parseInt(computedStyle[key], 10);
      }
    }
  }]);

  return Positioning;
}();

/***/ }),

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Vector2)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Class representing a Vector2 which hold two floats.
 */
var Vector2 = /*#__PURE__*/function () {
  /**
   * Create a Vector2
   * @param  {number} x - The x value to set
   * @param  {number} y - The y value to set
   */
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NaN;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;

    _classCallCheck(this, Vector2);

    _defineProperty(this, "_x", NaN);

    _defineProperty(this, "_y", NaN);

    this.x = x;
    this.y = y;
  }
  /**
   * Set this Vector2's x and y value to be the parameter's value and apply the values to this Vector2
   * @param  {number} x - The x value to set
   * @param  {number} y - The y value to set
   * @returns {Vector2}
   */


  _createClass(Vector2, [{
    key: "x",
    get: function get() {
      return this._x;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Vector's x value using an invalid input: ", value);
        value = NaN;
      }

      this._x = value;
    }
  }, {
    key: "y",
    get: function get() {
      return this._y;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Vector's y value using an invalid input: ", value);
        value = NaN;
      }

      this._y = value;
    }
  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    /**
     * Set this Vector2's values to be the parameter's values and apply the values to this Vector2
     * @param  {Vector2} _vector
     * @returns {Vector2}
     */

  }, {
    key: "setVector2",
    value: function setVector2(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to set a Vector2's values using an invalid Vector2: ", _vector);
        _vector = new Vector2(NaN, NaN);
      }

      this.set(_vector.x, _vector.y);
      return this;
    }
    /**
     * Create a Vector2 filled with NaN
     * @returns {Vector2}
     */

  }, {
    key: "equals",
    value:
    /**
     * Returns if an object is the same as this Vector2
     * @param  {object} o
     * @returns {boolean}
     */
    function equals(o) {
      if (!(o instanceof Vector2)) return false;
      return this.x == o.x && this.y == o.y;
    }
    /**
     * Returns if this Vector2 is all NaN
     * @returns {boolean}
     */

  }, {
    key: "IsNaN",
    value: function IsNaN() {
      return isNaN(this.x) && isNaN(this.y);
    }
    /**
     * Returns if this Vector2 has a NaN value
     * @returns {boolean}
     */

  }, {
    key: "HasNaN",
    value: function HasNaN() {
      return isNaN(this.x) || isNaN(this.y);
    }
    /**
     * Returns if a Vector2 is all NaN
     * @param  {object} o
     * @returns {boolean}
     */

  }, {
    key: "clone",
    value:
    /**
     * Returns a new Vector2 with the same values as this Vector2
     * @returns {Vector2}
     */
    function clone() {
      return new Vector2(this.x, this.y);
    }
    /**
     * Add two Vector2's values and return the result in a new Vector2
     * @param  {Vector2} _vector
     * @returns {Vector2}
     */

  }, {
    key: "add",
    value: function add(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to add from a vector using an invalid Vector2: ", _vector);
        return new Vector2(NaN, NaN);
      }

      return new Vector2(this.x + _vector.x, this.y + _vector.y);
    }
    /**
     * Add two Vector2's values and apply the values to this Vector2
     * @param  {Vector2} _vector
     * @returns {Vector2}
     */

  }, {
    key: "Add",
    value: function Add(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to add from a vector using an invalid Vector2: ", _vector);
        return new Vector2(NaN, NaN);
      }

      this.set(this.x + _vector.x, this.y + _vector.y);
      return this;
    }
    /**
     * Subract two Vector2's values and return the result in a new Vector2
     * @param  {Vector2} _vector
     * @returns {Vector2}
     */

  }, {
    key: "subtract",
    value: function subtract(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to subtract from a vector using an invalid Vector2: ", _vector);
        return new Vector2(NaN, NaN);
      }

      return new Vector2(this.x - _vector.x, this.y - _vector.y);
    }
    /**
     * Subract two Vector2's values and apply the values to this Vector2
     * @param  {Vector2} _vector
     * @returns {Vector2}
     */

  }, {
    key: "Subtract",
    value: function Subtract(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to subtract from a vector using an invalid Vector2: ", _vector);
        return new Vector2(NaN, NaN);
      }

      this.set(this.x - _vector.x, this.y - _vector.y);
      return this;
    }
    /**
     * Calcualte the multiplied value of a Vector2 and return the result in a new Vector2
     * @param  {number} _scalar
     * @returns {Vector2}
     */

  }, {
    key: "multiply",
    value: function multiply(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate multiplied vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      return new Vector2(this.x * _scalar, this.y * _scalar);
    }
    /**
     * Calcualte the multiplied value of a Vector2 and apply the values to this Vector2
     * @param  {number} _scalar
     * @returns {Vector2}
     */

  }, {
    key: "Multiply",
    value: function Multiply(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate multiplied vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      this.set(this.x * _scalar, this.y * _scalar);
      return this;
    }
    /**
     * Calcualte the divided value of a Vector2 and return the result in a new Vector2
     * @param  {number} _scalar
     * @returns {Vector2}
     */

  }, {
    key: "divide",
    value: function divide(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate divided vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      return new Vector2(this.x / _scalar, this.y / _scalar);
    }
    /**
     * Calcualte the divided value of a Vector2 and apply the values to this Vector2
     * @param  {number} _scalar
     * @returns {Vector2}
     */

  }, {
    key: "Divide",
    value: function Divide(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate divided vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      this.set(this.x / _scalar, this.y / _scalar);
      return this;
    }
    /**
     * Calcualte the dot product of two Vector2's and return the result in a new Vector2
     * @param  {Vector2} _vector
     * @returns {Vector2}
     */

  }, {
    key: "dot",
    value: function dot(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to calculate dot product using an invalid Vector2: ", _vector);
        return new Vector2(NaN, NaN);
      }

      return new Vector2(this.x * _vector.x, this.y * _vector.y);
    }
    /**
     * Calcualte the dot product of two Vector2's and apply the values to this Vector2
     * @param  {Vector2} _vector
     * @returns {Vector2}
     */

  }, {
    key: "Dot",
    value: function Dot(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to calculate dot product using an invalid Vector2: ", _vector);
        _vector = new Vector2(NaN, NaN);
      }

      this.set(this.x * _vector.x, this.y * _vector.y);
      return this;
    }
    /**
     * Calculate the distance between two Vector2's
     * @param  {Vector2} _vector
     * @returns {number}
     */

  }, {
    key: "distance",
    value: function distance(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to calculate distance using an invalid Vector2: ", _vector);
        return NaN;
      }

      return Math.sqrt(this.distanceSqr(_vector));
    }
    /**
     * Calculate the squared distance between two Vector2's
     * @param  {Vector2} _vector
     * @returns {number}
     */

  }, {
    key: "distanceSqr",
    value: function distanceSqr(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to calculate distance squared using an invalid Vector2: ", _vector);
        return NaN;
      }

      return Math.pow(this.x - _vector.x, 2) + Math.pow(this.y - _vector.y, 2);
    }
  }], [{
    key: "NaN",
    value: function (_NaN) {
      function NaN() {
        return _NaN.apply(this, arguments);
      }

      NaN.toString = function () {
        return _NaN.toString();
      };

      return NaN;
    }(function () {
      return new Vector2(NaN, NaN);
    }
    /**
     * Create a Vector2 filled with 0
     * @returns {Vector2}
     */
    )
  }, {
    key: "Zero",
    value: function Zero() {
      return new Vector2(0, 0);
    }
    /**
     * Create a Vector2 filled with 1
     * @returns {Vector2}
     */

  }, {
    key: "One",
    value: function One() {
      return new Vector2(1, 1);
    }
  }, {
    key: "isNaN",
    value: function (_isNaN) {
      function isNaN(_x) {
        return _isNaN.apply(this, arguments);
      }

      isNaN.toString = function () {
        return _isNaN.toString();
      };

      return isNaN;
    }(function (o) {
      if (!(o instanceof Vector2)) return false;
      return isNaN(o.x) && isNaN(o.y);
    }
    /**
     * Returns if a Vector2 has a NaN value
     * @param  {object} o
     * @returns {boolean}
     */
    )
  }, {
    key: "hasNaN",
    value: function hasNaN(o) {
      if (!(o instanceof Vector2)) return false;
      return isNaN(o.x) || isNaN(o.y);
    }
  }]);

  return Vector2;
}();

/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Vector3)
/* harmony export */ });
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** Class representing a Vector3 which hold three floats.
 */

var Vector3 = /*#__PURE__*/function (_Vector) {
  _inherits(Vector3, _Vector);

  var _super = _createSuper(Vector3);

  /**
   * Create a Vector3
   * @param  {number} x - The x value to set
   * @param  {number} y - The y value to set
   * @param  {number} z - The z value to set
   */
  function Vector3() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NaN;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;

    _classCallCheck(this, Vector3);

    _this = _super.call(this, x, y);

    _defineProperty(_assertThisInitialized(_this), "_z", NaN);

    _this.z = z;
    return _this;
  }
  /**
   * Set this Vector3's x,y and z value to be the parameter's value and apply the values to this Vector3
   * @param  {number} x - The x value to set
   * @param  {number} y - The y value to set
   * @param  {number} z - The z value to set
   * @returns {Vector3}
   */


  _createClass(Vector3, [{
    key: "z",
    get: function get() {
      return this._z;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Vector's z value using an invalid input: ", value);
        value = NaN;
      }

      this._z = value;
    }
  }, {
    key: "set",
    value: function set(x, y) {
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _get(_getPrototypeOf(Vector3.prototype), "set", this).call(this, x, y);

      this.z = z;
      return this;
    }
    /**
     * Set this Vector3's values to be the parameter's values and apply the values to this Vector3
     * @param  {Vector3} _vector
     * @returns {Vector3}
     */

  }, {
    key: "setVector3",
    value: function setVector3(_vector) {
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to set a Vector3's values using an invalid Vector3: ", _vector);
        _vector = new Vector3(NaN, NaN, NaN);
      }

      this.set(_vector.x, _vector.y, _vector.z);
      return this;
    }
    /**
     * Create a Vector3 filled with NaN
     * @returns {Vector3}
     */

  }, {
    key: "equals",
    value:
    /**
     * Returns if an object is the same as this Vector3
     * @param  {object} o
     * @returns {boolean}
     */
    function equals(o) {
      if (!(o instanceof Vector3)) return false;
      return this.x == o.x && this.y == o.y && this.z == o.z;
    }
    /**
     * Returns if this Vector3 is all NaN
     * @returns {boolean}
     */

  }, {
    key: "IsNaN",
    value: function IsNaN() {
      return isNaN(this.x) && isNaN(this.y) && isNaN(this.z);
    }
    /**
     * Returns if this Vector3 has a NaN value
     * @returns {boolean}
     */

  }, {
    key: "HasNaN",
    value: function HasNaN() {
      return isNaN(this.x) || isNaN(this.y) || isNaN(this.z);
    }
    /**
     * Returns if a Vector3 is all NaN
     * @param  {object} o
     * @returns {boolean}
     */

  }, {
    key: "vector2",
    value:
    /**
     * Returns a Vector2 version of this Vector3
     * @returns {Vector2}
     */
    function vector2() {
      return new _Vector2__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .F(this.x, this.y);
    }
    /**
     * Returns a new Vector3 with the same values as this Vector3
     * @returns {Vector3}
     */

  }, {
    key: "clone",
    value: function clone() {
      return new Vector3(this.x, this.y, this.z);
    }
    /**
     * Add two Vector3's values and return the result in a new Vector3
     * @param  {Vector3} _vector
     * @returns {Vector3}
     */

  }, {
    key: "add",
    value: function add(_vector) {
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to add to a vector using an invalid Vector3: ", _vector);
        return new Vector3(NaN, NaN, NaN);
      }

      return new Vector3(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z);
    }
    /**
     * Add two Vector3's values and apply the values to this Vector3
     * @param  {Vector3} _vector
     * @returns {Vector3}
     */

  }, {
    key: "Add",
    value: function Add(_vector) {
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to add to a vector using an invalid Vector3: ", _vector);
        return new Vector3(NaN, NaN, NaN);
      }

      this.set(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z);
      return this;
    }
    /**
     * Subract two Vector3's values and return the result in a new Vector3
     * @param  {Vector3} _vector
     * @returns {Vector3}
     */

  }, {
    key: "subtract",
    value: function subtract(_vector) {
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to subtract from a vector using an invalid Vector3: ", _vector);
        return new Vector3(NaN, NaN, NaN);
      }

      return new Vector3(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z);
    }
    /**
     * Subract two Vector3's values and apply the values to this Vector3
     * @param  {Vector3} _vector
     * @returns {Vector3}
     */

  }, {
    key: "Subtract",
    value: function Subtract(_vector) {
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to subtract from a vector using an invalid Vector3: ", _vector);
        return new Vector3(NaN, NaN, NaN);
      }

      this.set(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z);
      return this;
    }
    /**
     * Calcualte the multiplied value of a Vector3 and return the result in a new Vector3
     * @param  {number} _scalar
     * @returns {Vector3}
     */

  }, {
    key: "multiply",
    value: function multiply(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate multiplied vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      return new Vector3(this.x * _scalar, this.y * _scalar, this.z * _scalar);
    }
    /**
     * Calcualte the multiplied value of a Vector3 and apply the values to this Vector3
     * @param  {number} _scalar
     * @returns {Vector3}
     */

  }, {
    key: "Multiply",
    value: function Multiply(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate multiplied vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      this.set(this.x * _scalar, this.y * _scalar, this.z * _scalar);
      return this;
    }
    /**
     * Calcualte the divided value of a Vector3 and return the result in a new Vector3
     * @param  {number} _scalar
     * @returns {Vector3}
     */

  }, {
    key: "divide",
    value: function divide(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate divided vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      return new Vector3(this.x / _scalar, this.y / _scalar, this.z / _scalar);
    }
    /**
     * Calcualte the divided value of a Vector3 and apply the values to this Vector3
     * @param  {number} _scalar
     * @returns {Vector3}
     */

  }, {
    key: "Divide",
    value: function Divide(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate divided vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      this.set(this.x / _scalar, this.y / _scalar, this.z / _scalar);
      return this;
    }
    /**
     * Calcualte the dot product of two Vector3's and return the result in a new Vector3
     * @param  {Vector3} _vector
     * @returns {Vector3}
     */

  }, {
    key: "dot",
    value: function dot(_vector) {
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to calculate dot product using an invalid Vector3: ", _vector);
        return new Vector3(NaN, NaN, NaN);
      }

      return new Vector3(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z);
    }
    /**
     * Calcualte the dot product of two Vector3's and apply the values to this Vector3
     * @param  {Vector3} _vector
     * @returns {Vector3}
     */

  }, {
    key: "Dot",
    value: function Dot(_vector) {
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to calculate dot product using an invalid Vector3: ", _vector);
        _vector = new Vector3(NaN, NaN, NaN);
      }

      this.set(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z);
      return this;
    }
    /**
     * Calculate the distance between two Vector3's
     * @param  {Vector3} _vector
     * @returns {number}
     */

  }, {
    key: "distance",
    value: function distance(_vector) {
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to calculate distance using an invalid Vector3: ", _vector);
        return NaN;
      }

      return Math.sqrt(this.distanceSqr(_vector));
    }
    /**
     * Calculate the squared distance between two Vector3's
     * @param  {Vector3} _vector
     * @returns {number}
     */

  }, {
    key: "distanceSqr",
    value: function distanceSqr(_vector) {
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to calculate distance squared using an invalid Vector3: ", _vector);
        return NaN;
      }

      return Math.pow(this.x - _vector.x, 2) + Math.pow(this.y - _vector.y, 2) + Math.pow(this.z - _vector.z, 2);
    }
  }], [{
    key: "NaN",
    value: function (_NaN) {
      function NaN() {
        return _NaN.apply(this, arguments);
      }

      NaN.toString = function () {
        return _NaN.toString();
      };

      return NaN;
    }(function () {
      return new Vector3(NaN, NaN, NaN);
    }
    /**
     * Create a Vector3 filled with 0
     * @returns {Vector3}
     */
    )
  }, {
    key: "Zero",
    value: function Zero() {
      return new Vector3(0, 0, 0);
    }
    /**
     * Create a Vector3 filled with 1
     * @returns {Vector3}
     */

  }, {
    key: "One",
    value: function One() {
      return new Vector3(1, 1, 1);
    }
  }, {
    key: "isNaN",
    value: function (_isNaN) {
      function isNaN(_x) {
        return _isNaN.apply(this, arguments);
      }

      isNaN.toString = function () {
        return _isNaN.toString();
      };

      return isNaN;
    }(function (o) {
      if (!(o instanceof Vector3)) return false;
      return isNaN(o.x) && isNaN(o.y) && isNaN(o.z);
    }
    /**
     * Returns if a Vector3 has a NaN value
     * @param  {object} o
     * @returns {boolean}
     */
    )
  }, {
    key: "hasNaN",
    value: function hasNaN(o) {
      if (!(o instanceof Vector3)) return false;
      return isNaN(o.x) || isNaN(o.y) || isNaN(o.z);
    }
  }]);

  return Vector3;
}(_Vector2__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .F);

/***/ }),

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Vector4)
/* harmony export */ });
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** Class representing a Vector3 which hold three floats.
 */

var Vector4 = /*#__PURE__*/function (_Vector) {
  _inherits(Vector4, _Vector);

  var _super = _createSuper(Vector4);

  /**
   * Create a Vector3
   * @param  {number} x - The x value to set
   * @param  {number} y - The y value to set
   * @param  {number} z - The z value to set
   * @param  {number} w - The w value to set
   */
  function Vector4() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NaN;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NaN;

    _classCallCheck(this, Vector4);

    _this = _super.call(this, x, y, z);

    _defineProperty(_assertThisInitialized(_this), "_w", NaN);

    _this.w = w;
    return _this;
  }
  /**
   * Set this Vector4's x value to be the parameter's value and apply the values to this Vector4
   * @param  {number} x - The x value to set
   * @param  {number} y - The y value to set
   * @param  {number} z - The z value to set
   * @param  {number} w - The w value to set
   * @returns {Vector4}
   */


  _createClass(Vector4, [{
    key: "w",
    get: function get() {
      return this._w;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Vector's w value using an invalid input: ", value);
        value = NaN;
      }

      this._w = value;
    }
  }, {
    key: "set",
    value: function set(x, y) {
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
      var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NaN;

      _get(_getPrototypeOf(Vector4.prototype), "set", this).call(this, x, y, z);

      this.w = w;
      return this;
    }
    /**
     * Set this Vector4's values to be the parameter's values and apply the values to this Vector4
     * @param  {Vector4} _vector
     * @returns {Vector4}
     */

  }, {
    key: "setVector4",
    value: function setVector4(_vector) {
      if (!(_vector instanceof _Vector3__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .P)) {
        console.error("Error trying to set a Vector4's values using an invalid Vector4: ", _vector);
        _vector = new Vector4(NaN, NaN, NaN, NaN);
      }

      this.set(_vector.x, _vector.y, _vector.z, _vector.w);
      return this;
    }
    /**
     * Create a Vector4 filled with NaN
     * @returns {Vector4}
     */

  }, {
    key: "equals",
    value:
    /**
     * Returns if an object is the same as this Vector4
     * @param  {object} o
     * @returns {boolean}
     */
    function equals(o) {
      if (!(o instanceof Vector4)) return false;
      return this.x == o.x && this.y == o.y && this.z == o.z && this.w == o.w;
    }
    /**
     * Returns if this Vector4 is all NaN
     * @returns {boolean}
     */

  }, {
    key: "IsNaN",
    value: function IsNaN() {
      return isNaN(this.x) && isNaN(this.y) && isNaN(this.z) && isNaN(this.w);
    }
    /**
     * Returns if this Vector4 has a NaN value
     * @returns {boolean}
     */

  }, {
    key: "HasNaN",
    value: function HasNaN() {
      return isNaN(this.x) || isNaN(this.y) || isNaN(this.z) || isNaN(this.w);
    }
    /**
     * Returns if a Vector4 is all NaN
     * @param  {object} o
     * @returns {boolean}
     */

  }, {
    key: "vector3",
    value:
    /**
     * Returns a Vector3 version of this Vector4
     * @returns {Vector3}
     */
    function vector3() {
      return new _Vector3__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .P(this.x, this.y, this.z);
    }
    /**
     * Returns a new Vector4 with the same values as this Vector4
     * @returns {Vector4}
     */

  }, {
    key: "clone",
    value: function clone() {
      return new Vector4(this.x, this.y, this.z, this.w);
    }
    /**
     * Add two Vector4's values and return the result in a new Vector4
     * @param  {Vector4} _vector
     * @returns {Vector4}
     */

  }, {
    key: "add",
    value: function add(_vector) {
      if (!(_vector instanceof _Vector3__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .P)) {
        console.error("Error trying to add to a vector using an invalid Vector4: ", _vector);
        return new Vector4(NaN, NaN, NaN, NaN);
      }

      return new Vector4(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z, this.w + _vector.w);
    }
    /**
     * Add two Vector4's values and apply the values to this Vector4
     * @param  {Vector4} _vector
     * @returns {Vector4}
     */

  }, {
    key: "Add",
    value: function Add(_vector) {
      if (!(_vector instanceof _Vector3__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .P)) {
        console.error("Error trying to add to a vector using an invalid Vector4: ", _vector);
        return new Vector4(NaN, NaN, NaN, NaN);
      }

      this.set(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z, this.w + _vector.w);
      return this;
    }
    /**
     * Subract two Vector4's values and return the result in a new Vector4
     * @param  {Vector4} _vector
     * @returns {Vector4}
     */

  }, {
    key: "subtract",
    value: function subtract(_vector) {
      if (!(_vector instanceof _Vector3__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .P)) {
        console.error("Error trying to subtract from a vector using an invalid Vector4: ", _vector);
        return new Vector4(NaN, NaN, NaN, NaN);
      }

      return new Vector4(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z, this.w - _vector.w);
    }
    /**
     * Subract two Vector4's values and apply the values to this Vector4
     * @param  {Vector4} _vector
     * @returns {Vector4}
     */

  }, {
    key: "Subtract",
    value: function Subtract(_vector) {
      if (!(_vector instanceof _Vector3__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .P)) {
        console.error("Error trying to subtract from a vector using an invalid Vector3: ", _vector);
        return new Vector4(NaN, NaN, NaN, NaN);
      }

      this.set(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z, this.w - _vector.w);
      return this;
    }
    /**
     * Calcualte the multiplied value of a Vector4 and return the result in a new Vector4
     * @param  {number} _scalar
     * @returns {Vector4}
     */

  }, {
    key: "multiply",
    value: function multiply(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate multiplied vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      return new Vector4(this.x * _scalar, this.y * _scalar, this.z * _scalar, this.w * _scalar);
    }
    /**
     * Calcualte the multiplied value of a Vector4 and apply the values to this Vector4
     * @param  {number} _scalar
     * @returns {Vector4}
     */

  }, {
    key: "Multiply",
    value: function Multiply(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate multiplied vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      this.set(this.x * _scalar, this.y * _scalar, this.z * _scalar, this.w * _scalar);
      return this;
    }
    /**
     * Calcualte the divided value of a Vector4 and return the result in a new Vector4
     * @param  {number} _scalar
     * @returns {Vector4}
     */

  }, {
    key: "divide",
    value: function divide(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate divided vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      return new Vector4(this.x / _scalar, this.y / _scalar, this.z / _scalar, this.w / _scalar);
    }
    /**
     * Calcualte the divided value of a Vector4 and apply the values to this Vector4
     * @param  {number} _scalar
     * @returns {Vector4}
     */

  }, {
    key: "Divide",
    value: function Divide(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate divided vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      this.set(this.x / _scalar, this.y / _scalar, this.z / _scalar, this.w / _scalar);
      return this;
    }
    /**
     * Calcualte the dot product of two Vector4's and return the result in a new Vector4
     * @param  {Vector4} _vector
     * @returns {Vector4}
     */

  }, {
    key: "dot",
    value: function dot(_vector) {
      if (!(_vector instanceof _Vector3__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .P)) {
        console.error("Error trying to calculate dot product using an invalid Vector4: ", _vector);
        return new Vector4(NaN, NaN, NaN, NaN);
      }

      return new Vector4(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z, this.w * _vector.w);
    }
    /**
     * Calcualte the dot product of two Vector4's and apply the values to this Vector4
     * @param  {Vector4} _vector
     * @returns {Vector4}
     */

  }, {
    key: "Dot",
    value: function Dot(_vector) {
      if (!(_vector instanceof _Vector3__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .P)) {
        console.error("Error trying to calculate dot product using an invalid Vector4: ", _vector);
        _vector = new Vector4(NaN, NaN, NaN, NaN);
      }

      this.set(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z, this.w * _vector.w);
      return this;
    }
  }], [{
    key: "NaN",
    value: function (_NaN) {
      function NaN() {
        return _NaN.apply(this, arguments);
      }

      NaN.toString = function () {
        return _NaN.toString();
      };

      return NaN;
    }(function () {
      return new Vector4(NaN, NaN, NaN, NaN);
    }
    /**
     * Create a Vector4 filled with 0
     * @returns {Vector4}
     */
    )
  }, {
    key: "Zero",
    value: function Zero() {
      return new Vector4(0, 0, 0, 0);
    }
    /**
     * Create a Vector4 filled with 1
     * @returns {Vector4}
     */

  }, {
    key: "One",
    value: function One() {
      return new Vector4(1, 1, 1, 1);
    }
  }, {
    key: "isNaN",
    value: function (_isNaN) {
      function isNaN(_x) {
        return _isNaN.apply(this, arguments);
      }

      isNaN.toString = function () {
        return _isNaN.toString();
      };

      return isNaN;
    }(function (o) {
      if (!(o instanceof Vector4)) return false;
      return isNaN(o.x) && isNaN(o.y) && isNaN(o.z) && isNaN(o.w);
    }
    /**
     * Returns if a Vector4 has a NaN value
     * @param  {object} o
     * @returns {boolean}
     */
    )
  }, {
    key: "hasNaN",
    value: function hasNaN(o) {
      if (!(o instanceof Vector4)) return false;
      return isNaN(o.x) || isNaN(o.y) || isNaN(o.z) || isNaN(o.w);
    }
  }]);

  return Vector4;
}(_Vector3__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .P);

/***/ }),

/***/ 599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ random)
/* harmony export */ });
//Create a random variable between 0 and x
function random(x) {
  return Math.floor(Math.random() * x);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

// EXTERNAL MODULE: ./Jasmine/Tests/Helpers/spec_helper.ts
var spec_helper = __webpack_require__(599);
// EXTERNAL MODULE: ./Code/src/Maths/Positioning.ts
var Positioning = __webpack_require__(888);
// EXTERNAL MODULE: ./Code/src/Maths/Vector2.ts
var Vector2 = __webpack_require__(738);
// EXTERNAL MODULE: ./Code/src/Maths/Vector4.ts
var Vector4 = __webpack_require__(843);
;// CONCATENATED MODULE: ./Code/src/Maths/Bounds.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/** Class representing a Bounds which hold two points and any extra variables from these points.
 */

var Bounds = /*#__PURE__*/function () {
  /**
  * Create a Bounds
  * @param  {number} x1 - The first point x value to set
  * @param  {number} y1 - The first point y value to set
  * @param  {number} x2 - The second point x value to set
  * @param  {number} y2 - The second point y value to set
  * @param  {boolean} isWebFormat - If this bounds is in web format (Y's are flipped)
  */
  function Bounds(x1, y1, x2, y2) {
    var isWebFormat = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _classCallCheck(this, Bounds);

    _defineProperty(this, "_webFormat", false);

    _defineProperty(this, "_x1", NaN);

    _defineProperty(this, "_y1", NaN);

    _defineProperty(this, "_x2", NaN);

    _defineProperty(this, "_y2", NaN);

    _defineProperty(this, "_topLeft", Vector2/* Vector2.NaN */.F[NaN]());

    _defineProperty(this, "_topRight", Vector2/* Vector2.NaN */.F[NaN]());

    _defineProperty(this, "_bottomRight", Vector2/* Vector2.NaN */.F[NaN]());

    _defineProperty(this, "_bottomLeft", Vector2/* Vector2.NaN */.F[NaN]());

    _defineProperty(this, "_size", Vector2/* Vector2.NaN */.F[NaN]());

    this.webFormat = isWebFormat;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  /**
   * Set this Bounds's values to be the parameter's values and apply the values to this Bounds
   * @param  {number} x1 - The x1 value to set
   * @param  {number} y1 - The y1 value to set
   * @param  {number} y2 - The x2 value to set
   * @param  {number} y2 - The y2 value to set
   * @param  {boolean} isWebFormat - If this bounds is in web format (Y's are flipped)
   * @returns {Bounds}
   */


  _createClass(Bounds, [{
    key: "webFormat",
    get: //** Whether the bounds has it's Y values flipped to account for web origin*/
    function get() {
      return this._webFormat;
    },
    set: function set(isWebFormat) {
      this._webFormat = isWebFormat;
    }
  }, {
    key: "x1",
    get: function get() {
      return this._x1;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Bounds's x1 value using an invalid input: ", value);
        value = NaN;
      }

      this._x1 = value;

      if (value > this.x2) {
        this.topRight.x = value;
        this.bottomRight.x = value;
        this.topLeft.x = this.x2;
        this.bottomLeft.x = this.x2;
      } else {
        this.topRight.x = this.x2;
        this.bottomRight.x = this.x2;
        this.topLeft.x = value;
        this.bottomLeft.x = value;
      }

      this.size.x = this.topRight.x - this.topLeft.x;
    }
  }, {
    key: "y1",
    get: function get() {
      return this._y1;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Bounds's y1 value using an invalid input: ", value);
        value = NaN;
      }

      this._y1 = value;

      if (this.webFormat == true ? value < this.y2 : value > this.y2) {
        this.topLeft.y = value;
        this.topRight.y = value;
        this.bottomLeft.y = this.y2;
        this.bottomRight.y = this.y2;
      } else {
        this.topLeft.y = this.y2;
        this.topRight.y = this.y2;
        this.bottomLeft.y = value;
        this.bottomRight.y = value;
      }

      this.size.y = this.webFormat == true ? this.bottomRight.y - this.topRight.y : this.topRight.y - this.bottomRight.y;
    }
  }, {
    key: "x2",
    get: function get() {
      return this._x2;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Bounds's x2 value using an invalid input: ", value);
        value = NaN;
      }

      this._x2 = value;

      if (value > this.x1) {
        this.topRight.x = value;
        this.bottomRight.x = value;
        this.topLeft.x = this.x1;
        this.bottomLeft.x = this.x1;
      } else {
        this.topRight.x = this.x1;
        this.bottomRight.x = this.x1;
        this.topLeft.x = value;
        this.bottomLeft.x = value;
      }

      this.size.x = this.topRight.x - this.topLeft.x;
    }
  }, {
    key: "y2",
    get: function get() {
      return this._y2;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Error trying to set a Bounds's y2 value using an invalid input: ", value);
        value = NaN;
      }

      this._y2 = value;

      if (this.webFormat == true ? value < this.y1 : value > this.y1) {
        this.topLeft.y = value;
        this.topRight.y = value;
        this.bottomLeft.y = this.y1;
        this.bottomRight.y = this.y1;
      } else {
        this.topLeft.y = this.y1;
        this.topRight.y = this.y1;
        this.bottomLeft.y = value;
        this.bottomRight.y = value;
      }

      this.size.y = this.webFormat == true ? this.bottomRight.y - this.topRight.y : this.topRight.y - this.bottomRight.y;
    } //** The minimum x and y point*/

  }, {
    key: "topLeft",
    get: function get() {
      return this._topLeft;
    },
    set: function set(vector) {
      this._topLeft = vector;
    } //** The maximum x and y point*/

  }, {
    key: "topRight",
    get: function get() {
      return this._topRight;
    },
    set: function set(vector) {
      this._topRight = vector;
    } //** The maximum x and minimum y point*/

  }, {
    key: "bottomRight",
    get: function get() {
      return this._bottomRight;
    },
    set: function set(vector) {
      this._bottomRight = vector;
    } //** The minimum x and y point*/

  }, {
    key: "bottomLeft",
    get: function get() {
      return this._bottomLeft;
    },
    set: function set(vector) {
      this._bottomLeft = vector;
    } //** The total size of this Bound*/

  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(vector) {
      this._size = vector;
    }
  }, {
    key: "set",
    value: function set(x1, y1, x2, y2) {
      var isWebFormat = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.webFormat;
      this.webFormat = isWebFormat;
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      return this;
    }
    /**
     * Create a Bounds filled with NaN
     * @returns {Bounds}
     */

  }, {
    key: "equals",
    value:
    /**
    * Returns if an object is the same as this Bound
    * @param  {object} o
    * @returns {boolean}
    */
    function equals(o) {
      if (!(o instanceof Bounds)) return false;
      return this.x1 == o.x1 && this.y1 == o.y1 && this.x2 == o.x2 && this.y2 == o.y2;
    }
    /**
     * Returns if this Bounds is all NaN
     * @returns {boolean}
     */

  }, {
    key: "IsNaN",
    value: function IsNaN() {
      return isNaN(this.x1) && isNaN(this.y1) && isNaN(this.x2) && isNaN(this.y2);
    }
    /**
     * Returns if this Bounds has a NaN value
     * @returns {boolean}
     */

  }, {
    key: "HasNaN",
    value: function HasNaN() {
      return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
    }
    /**
     * Returns if a bounds is all NaN
     * @param  {object} o
     * @returns {boolean}
     */

  }, {
    key: "clone",
    value:
    /**
    * Returns a new Bounds with the same values as this Bounds
    * @returns {Bounds}
    */
    function clone() {
      return new Bounds(this.x1, this.y1, this.x2, this.y2);
    }
    /**
    * Add two Bounds's values and return the result in a new Bounds
    * @param  {Bounds} _bounds
    * @returns {Bounds}
    */

  }, {
    key: "add",
    value: function add(_bounds) {
      if (!(_bounds instanceof Bounds)) {
        console.error("Error trying to add to a Bounds's values using an invalid Bound");
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      if (_bounds.webFormat != this.webFormat) {
        console.error("Error trying to add to a Bounds's values when the formats are different, Web vs Non-Web ", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      return new Bounds(this.x1 + _bounds.x1, this.y1 + _bounds.y1, this.x2 + _bounds.x2, this.y2 + _bounds.y2, this.webFormat);
    }
    /**
    * Add two Bounds's values and apply the values to this Bounds
    * @param  {Bounds} _bounds
    * @returns {Bounds}
    */

  }, {
    key: "Add",
    value: function Add(_bounds) {
      if (!(_bounds instanceof Bounds)) {
        console.error("Error trying to add to a Bounds's values using an invalid Bound: ", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      if (_bounds.webFormat != this.webFormat) {
        console.error("Error trying to add to a Bounds's values when the formats are different, Web vs Non-Web ", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      this.set(this.x1 + _bounds.x1, this.y1 + _bounds.y1, this.x2 + _bounds.x2, this.y2 + _bounds.y2);
      return this;
    }
    /**
    * Subtract two Bounds's values and return the result in a new Bounds
    * @param  {Bounds} _bounds
    * @returns {Bounds}
    */

  }, {
    key: "subtract",
    value: function subtract(_bounds) {
      if (!(_bounds instanceof Bounds)) {
        console.error("Error trying to subtract from a Bounds's values using an invalid Bound: ", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      if (_bounds.webFormat != this.webFormat) {
        console.error("Error trying to subtract from a Bounds's values when the formats are different, Web vs Non-Web ", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      return new Bounds(this.x1 - _bounds.x1, this.y1 - _bounds.y1, this.x2 - _bounds.x2, this.y2 - _bounds.y2, this.webFormat);
    }
    /**
    * Subtract two Bounds's values and apply the values to this Bounds
    * @param  {Bounds} _bounds
    * @returns {Bounds}
    */

  }, {
    key: "Subtract",
    value: function Subtract(_bounds) {
      if (!(_bounds instanceof Bounds)) {
        console.error("Error trying to subtract from a Bounds's values using an invalid Bound: ", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      if (_bounds.webFormat != this.webFormat) {
        console.error("Error trying to subtract from a Bounds's values when the formats are different, Web vs Non-Web ", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      this.set(this.x1 - _bounds.x1, this.y1 - _bounds.y1, this.x2 - _bounds.x2, this.y2 - _bounds.y2);
      return this;
    }
    /**
    * Calcualte the scaled value of a Bounds and return the result in a new Bounds
    * @param  {number} _scalar
    * @returns {Bounds}
    */

  }, {
    key: "scale",
    value: function scale(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate scaled Bounds using an invalid scaler: ", {
          _scalar: _scalar
        });
        _scalar = NaN;
      }

      return new Bounds(this.x1 * _scalar, this.y1 * _scalar, this.x2 * _scalar, this.y2 * _scalar, this.webFormat);
    }
    /**
     * Calcualte the scaled value of a Bounds and apply the values to this Bounds
     * @param  {number} _scalar
     * @returns {Bounds}
     */

  }, {
    key: "Scale",
    value: function Scale(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate scaled Bounds using an invalid scaler: ", {
          _scalar: _scalar
        });
        _scalar = NaN;
      }

      this.set(this.x1 * _scalar, this.y1 * _scalar, this.x2 * _scalar, this.y2 * _scalar);
      return this;
    }
    /**
     * Calcualte the dot product of two Bounds's and return the result in a new Bounds
     * @param  {Bounds} _bounds
     * @returns {Bounds}
     */

  }, {
    key: "dot",
    value: function dot(_bounds) {
      if (!(_bounds instanceof Bounds)) {
        console.error("Error trying to calculate dot product using an invalid Bounds: ", {
          _bounds: _bounds
        });
        return new Bounds(NaN, NaN, NaN, NaN);
      }

      if (_bounds.webFormat != this.webFormat) {
        console.error("Error trying to calculate dot product when the formats are different, Web vs Non-Web ", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      return new Bounds(this.x1 * _bounds.x1, this.y1 * _bounds.y1, this.x2 * _bounds.x2, this.y2 * _bounds.y2, this.webFormat);
    }
    /**
     * Calcualte the dot product of two Bounds's and apply the values to this Bounds
     * @param  {Bounds} _vector
     * @returns {Bounds}
     */

  }, {
    key: "Dot",
    value: function Dot(_bounds) {
      if (!(_bounds instanceof Bounds)) {
        console.error("Error trying to calculate dot product using an invalid Bounds", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      if (_bounds.webFormat != this.webFormat) {
        console.error("Error trying to calculate dot product when the formats are different, Web vs Non-Web ", {
          _bounds: _bounds
        });
        _bounds = new Bounds(NaN, NaN, NaN, NaN);
      }

      this.set(this.x1 * _bounds.x1, this.y1 * _bounds.y1, this.x2 * _bounds.x2, this.y2 * _bounds.y2);
      return this;
    }
    /**
    * Create a bounds from two Vector2s
    * @param  {Vector2} _pos1
    * @param  {Vector2} _pos2
    * @returns {Bounds}
    */

  }, {
    key: "convertFromWeb",
    value:
    /**
     * Returns a new Bounds that has it's Y's respective of origin in bottom left
     * @returns {Bounds}
     */
    function convertFromWeb() {
      if (!this.webFormat) return this;
      return new Bounds(this.x1, this.y2, this.x2, this.y1);
    }
    /**
     * Returns a this bound with it's Y's respective of origin in bottom left
     * @returns {Bounds}
     */

  }, {
    key: "ConvertFromWeb",
    value: function ConvertFromWeb() {
      if (!this.webFormat) return this;
      this.webFormat = false;
      return this.set(this.x1, this.y2, this.x2, this.y1);
    }
    /**
     * Returns a new Bounds that has it's Y's respective of origin in top left
     * @returns {Bounds}
     */

  }, {
    key: "convertToWeb",
    value: function convertToWeb() {
      if (this.webFormat) return this;
      return new Bounds(this.x1, this.y2, this.x2, this.y1, true);
    }
    /**
     * Returns this bound with it's Y's respective of origin in top left
     * @returns {Bounds}
     */

  }, {
    key: "ConvertToWeb",
    value: function ConvertToWeb() {
      if (this.webFormat) return this;
      this.webFormat = true;
      return this.set(this.x1, this.y2, this.x2, this.y1);
    }
    /**
    * Create a bounds from a set of HTML DOMs
    * @param  {HTMLElement | string} _objects - A DOM or JQUERY string to use to create a Bounds
    * @param  {HTMLElement | Document | null} _relative - Determines if the Bounds should be created in relation to another object
    * @param  {string[]} _includeChildren - An array of strings that are used to include children DOMs of the _objects
    * @returns {Bounds | null}
    */

  }], [{
    key: "NaN",
    value: function (_NaN) {
      function NaN() {
        return _NaN.apply(this, arguments);
      }

      NaN.toString = function () {
        return _NaN.toString();
      };

      return NaN;
    }(function () {
      return new Bounds(NaN, NaN, NaN, NaN);
    }
    /**
     * Create a Bounds filled with 0
     * @returns {Bounds}
     */
    )
  }, {
    key: "Zero",
    value: function Zero() {
      return new Bounds(0, 0, 0, 0);
    }
  }, {
    key: "isNaN",
    value: function (_isNaN) {
      function isNaN(_x) {
        return _isNaN.apply(this, arguments);
      }

      isNaN.toString = function () {
        return _isNaN.toString();
      };

      return isNaN;
    }(function (o) {
      if (!(o instanceof Bounds)) return false;
      return isNaN(o.x1) && isNaN(o.y1) && isNaN(o.x2) && isNaN(o.y2);
    }
    /**
     * Returns if a bounds has a NaN value
     * @param  {object} o
     * @returns {boolean}
     */
    )
  }, {
    key: "hasNaN",
    value: function hasNaN(o) {
      if (!(o instanceof Bounds)) return false;
      return isNaN(o.x1) || isNaN(o.y1) || isNaN(o.x2) || isNaN(o.y2);
    }
  }, {
    key: "fromVector2s",
    value: function fromVector2s(_pos1, _pos2) {
      if (!(_pos1 instanceof Vector2/* Vector2 */.F)) {
        console.error("Error trying to generate bounds with invalid first Vector2: ", _pos1);
        _pos1 = new Vector2/* Vector2 */.F(NaN, NaN);
      }

      if (!(_pos2 instanceof Vector2/* Vector2 */.F)) {
        console.error("Error trying to generate bounds with invalid second Vector2: ", _pos2);
        _pos2 = new Vector2/* Vector2 */.F(NaN, NaN);
      }

      return new Bounds(_pos1.x, _pos1.y, _pos2.x, _pos2.y);
    }
    /**
    * Create a bounds from a Vector4
    * @param  {Vector4} _vector
    * @returns {Bounds}
    */

  }, {
    key: "fromVector4",
    value: function fromVector4(_vector) {
      if (!(_vector instanceof Vector4/* Vector4 */.L)) {
        console.error("Error trying to generate bounds with invalid Vector4: ", _vector);
        _vector = new Vector4/* Vector4 */.L(NaN, NaN, NaN, NaN);
      }

      return new Bounds(_vector.x, _vector.y, _vector.z, _vector.w);
    }
  }, {
    key: "fromObject",
    value: function fromObject(_object) {
      var _relative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      var _includeChildren = arguments.length > 2 ? arguments[2] : undefined;

      if (_object == null) {
        console.error("Error trying to generate bounds fromObject with invalid object: ", _object);
        return new Bounds(NaN, NaN, NaN, NaN);
      }

      var _objectBounds = {
        left: NaN,
        top: NaN,
        right: NaN,
        bottom: NaN
      };

      var _objectJQuery = $(_object); //Calculate bounds of object as long as it isn't hidden


      if (_objectJQuery.attr("type") !== "hidden" && _objectJQuery.attr("display") !== "hidden") {
        var dom = _objectJQuery[0];
        var boundingRect = dom.getBoundingClientRect();

        var _position = Positioning/* Positioning.getCoords */.J.getCoords(dom, _relative);

        var _computedStyle = window.getComputedStyle(dom);

        var height = boundingRect.height;
        _objectBounds.top -= Positioning/* Positioning.translateCssSizes */.J.translateCssSizes(dom, "marginTop", _computedStyle);
        height += Positioning/* Positioning.translateCssSizes */.J.translateCssSizes(dom, "marginTop", _computedStyle);
        height += Positioning/* Positioning.translateCssSizes */.J.translateCssSizes(dom, "marginBottom", _computedStyle);
        var width = boundingRect.width;
        _position.x -= Positioning/* Positioning.translateCssSizes */.J.translateCssSizes(dom, "marginLeft", _computedStyle);
        width += Positioning/* Positioning.translateCssSizes */.J.translateCssSizes(dom, "marginLeft", _computedStyle);
        width += Positioning/* Positioning.translateCssSizes */.J.translateCssSizes(dom, "marginRight", _computedStyle);
        _objectBounds.left = _position.x;
        _objectBounds.top = _position.y;
        _objectBounds.right = _objectBounds.left + width;
        _objectBounds.bottom = _objectBounds.top + height;
      } else {
        console.error("Error trying to generate bounds fromObject with object as it is hidden: ", _object);
        return new Bounds(NaN, NaN, NaN, NaN);
      } //Calculate bounds of any children objects and apply them to
      // the current bounds if required


      if (_includeChildren != null && _includeChildren.length > 0) {
        _includeChildren.forEach(function (searchString) {
          var childrenJQuery = $(searchString);
          childrenJQuery.each(function (index, childDOM) {
            var childBounds = Bounds.fromObject(childDOM);

            if (!Bounds.isNaN(childBounds)) {
              if (childBounds.x1 < _objectBounds.left) _objectBounds.left = childBounds.x1;
              if (childBounds.y1 < _objectBounds.top) _objectBounds.top = childBounds.y1;
              if (childBounds.x2 > _objectBounds.right) _objectBounds.right = childBounds.x2;
              if (childBounds.y2 > _objectBounds.bottom) _objectBounds.bottom = childBounds.y2;
            }
          });
        });
      }

      return new Bounds(_objectBounds.left, _objectBounds.top, _objectBounds.right, _objectBounds.bottom, true);
    }
  }]);

  return Bounds;
}();
// EXTERNAL MODULE: ./Code/src/Maths/Line.ts
var Line = __webpack_require__(498);
;// CONCATENATED MODULE: ./Code/src/Maths/Collision.ts
function Collision_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Collision_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Collision_createClass(Constructor, protoProps, staticProps) { if (protoProps) Collision_defineProperties(Constructor.prototype, protoProps); if (staticProps) Collision_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




/** Class representing all collision based functions needed for math calculations.
 */

var Collision = /*#__PURE__*/function () {
  function Collision() {
    Collision_classCallCheck(this, Collision);
  }

  Collision_createClass(Collision, null, [{
    key: "checkPointWithinArea",
    value:
    /**
    * Calculate if a point is within an area bounds
    * @param  {Bounds} areaBounds
    * @param  {Vector2} point
    * @returns {boolean}
    */
    function checkPointWithinArea(areaBounds, point) {
      if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) {
        console.error("Error trying to calculate if a point is within bounds with invalid area bounds: ", areaBounds);
        return false;
      }

      if (!(point instanceof Vector2/* Vector2 */.F) || point.HasNaN()) {
        console.error("Error trying to calculate if a point is within bounds with invalid point: ", point);
        return false;
      }

      if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
      return areaBounds.topLeft.x <= point.x && areaBounds.topLeft.y >= point.y && areaBounds.bottomRight.x >= point.x && areaBounds.bottomRight.y <= point.y;
    }
    /**
    * Calculate if otherBounds is within areaBounds
    * @param  {Bounds} areaBounds
    * @param  {Bounds} otherBounds
    * @returns {boolean}
    */

  }, {
    key: "checkAreaWithinArea",
    value: function checkAreaWithinArea(areaBounds, otherBounds) {
      if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) {
        console.error("Error trying to calculate if an area is within bounds with invalid area bounds: ", areaBounds);
        return false;
      }

      if (!(otherBounds instanceof Bounds) || otherBounds.HasNaN()) {
        console.error("Error trying to calculate if an area is within bounds with invalid other bounds: ", otherBounds);
        return false;
      }

      if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
      if (otherBounds.webFormat) otherBounds = otherBounds.convertFromWeb();
      return this.checkPointWithinArea(areaBounds, otherBounds.topLeft) && this.checkPointWithinArea(areaBounds, otherBounds.topRight) && this.checkPointWithinArea(areaBounds, otherBounds.bottomRight) && this.checkPointWithinArea(areaBounds, otherBounds.bottomLeft);
    }
    /**
    * Calculate if otherBounds is overlapping areaBounds
    * @param  {Bounds} areaBounds
    * @param  {Bounds} otherBounds
    * @returns {boolean}
    */

  }, {
    key: "checkAreaOverlapArea",
    value: function checkAreaOverlapArea(areaBounds, otherBounds) {
      if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) {
        console.error("Error trying to calculate if an area is within bounds with invalid area bounds: ", areaBounds);
        return false;
      }

      if (!(otherBounds instanceof Bounds) || otherBounds.HasNaN()) {
        console.error("Error trying to calculate if an area is within bounds with invalid other bounds: ", otherBounds);
        return false;
      }

      if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
      if (otherBounds.webFormat) otherBounds = otherBounds.convertFromWeb();
      return Collision.checkAreaWithinArea(otherBounds, areaBounds);
    }
    /**
    * Calculate if otherBounds is intersects areaBounds
    * @param  {Bounds} areaBounds
    * @param  {Bounds} otherBounds
    * @returns {boolean}
    */

  }, {
    key: "checkAreaIntersectsArea",
    value: function checkAreaIntersectsArea(areaBounds, otherBounds) {
      if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) {
        console.error("Error trying to calculate if an area is intersecting bounds with invalid area bounds: ", areaBounds);
        return false;
      }

      if (!(otherBounds instanceof Bounds) || otherBounds.HasNaN()) {
        console.error("Error trying to calculate if an area is intersecting bounds with invalid other bounds: ", otherBounds);
        return false;
      }

      if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
      if (otherBounds.webFormat) otherBounds = otherBounds.convertFromWeb(); //Check if any otherBounds corners are within areaBounds

      if (this.checkPointWithinArea(areaBounds, otherBounds.topLeft) || this.checkPointWithinArea(areaBounds, otherBounds.topRight) || this.checkPointWithinArea(areaBounds, otherBounds.bottomRight) || this.checkPointWithinArea(areaBounds, otherBounds.bottomLeft)) {
        return true;
      } //Check if any areaBounds corners are within otherBounds


      if (this.checkPointWithinArea(otherBounds, areaBounds.topLeft) || this.checkPointWithinArea(otherBounds, areaBounds.topRight) || this.checkPointWithinArea(otherBounds, areaBounds.bottomRight) || this.checkPointWithinArea(otherBounds, areaBounds.bottomLeft)) {
        return true;
      }

      var linesToCheck = [Line/* Line.fromVector2s */.x.fromVector2s(otherBounds.topLeft, otherBounds.topRight), Line/* Line.fromVector2s */.x.fromVector2s(otherBounds.topRight, otherBounds.bottomRight), Line/* Line.fromVector2s */.x.fromVector2s(otherBounds.bottomRight, otherBounds.bottomLeft), Line/* Line.fromVector2s */.x.fromVector2s(otherBounds.bottomLeft, otherBounds.topLeft)];
      var linesToCheckAgainst = [Line/* Line.fromVector2s */.x.fromVector2s(areaBounds.topLeft, areaBounds.topRight), Line/* Line.fromVector2s */.x.fromVector2s(areaBounds.topRight, areaBounds.bottomRight), Line/* Line.fromVector2s */.x.fromVector2s(areaBounds.bottomRight, areaBounds.bottomLeft), Line/* Line.fromVector2s */.x.fromVector2s(areaBounds.bottomLeft, areaBounds.topLeft)]; //do line intersect tests between every line

      linesToCheck.forEach(function (line1) {
        linesToCheckAgainst.forEach(function (line2) {
          if (Line/* Line.lineIntersectionWithin */.x.lineIntersectionWithin(line1, line2)) return true;
        });
      });
      return false;
    }
    /**
    * Calculate if objects are within areaBounds
    * @param  {Bounds} areaBounds
    * @param  {HTMLElement | HTMLElement[]} objects
    * @returns {object[]}
    */

  }, {
    key: "returnObjectsWithinArea",
    value: function returnObjectsWithinArea(areaBounds, objects) {
      var _this = this;

      if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) {
        console.error("Error trying to calculate if objects are within bounds with invalid area bounds: ", areaBounds);
        return [];
      }

      if (!(objects instanceof HTMLElement || Array.isArray(objects))) {
        console.error("Error trying to calculate if objects are within bounds with invalid objects: ", objects);
        return [];
      }

      if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
      var ret = [];
      var objectsArray = objects instanceof HTMLElement ? [objects] : objects;
      objectsArray.forEach(function (dom) {
        var otherBounds = Bounds.fromObject(dom, document);

        if (_this.checkAreaWithinArea(areaBounds, otherBounds)) {
          ret.push({
            object: dom,
            bounds: otherBounds
          });
        }
      });
      return ret;
    }
    /**
    * Calculate if objects are overlapping areaBounds
    * @param  {Bounds} areaBounds
    * @param  {HTMLElement | HTMLElement[]} objects
    * @returns {object[]}
    */

  }, {
    key: "returnObjectsOverlapArea",
    value: function returnObjectsOverlapArea(areaBounds, objects) {
      var _this2 = this;

      if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) {
        console.error("Error trying to calculate if objects are within bounds with invalid area bounds: ", areaBounds);
        return [];
      }

      if (!(objects instanceof HTMLElement || Array.isArray(objects))) {
        console.error("Error trying to calculate if objects are within bounds with invalid objects: ", objects);
        return [];
      }

      if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
      var ret = [];
      var objectsArray = objects instanceof HTMLElement ? [objects] : objects;
      objectsArray.forEach(function (dom) {
        var otherBounds = Bounds.fromObject(dom, document);

        if (_this2.checkAreaOverlapArea(areaBounds, otherBounds)) {
          ret.push({
            object: dom,
            bounds: otherBounds
          });
        }
      });
      return ret;
    }
    /**
    * Calculate if objects are intersecting areaBounds
    * @param  {Bounds} areaBounds
    * @param  {HTMLElement | HTMLElement[]} objects
    * @returns {object[]}
    */

  }, {
    key: "returnObjectsIntersectArea",
    value: function returnObjectsIntersectArea(areaBounds, objects) {
      var _this3 = this;

      if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) {
        console.error("Error trying to calculate if objects are within bounds with invalid area bounds: ", areaBounds);
        return [];
      }

      if (!(objects instanceof HTMLElement || Array.isArray(objects))) {
        console.error("Error trying to calculate if objects are within bounds with invalid objects: ", objects);
        return [];
      }

      if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
      var ret = [];
      var objectsArray = objects instanceof HTMLElement ? [objects] : objects;
      objectsArray.forEach(function (dom) {
        var otherBounds = Bounds.fromObject(dom, document);

        if (_this3.checkAreaIntersectsArea(areaBounds, otherBounds)) {
          ret.push({
            object: dom,
            bounds: otherBounds
          });
        }
      });
      return ret;
    }
  }]);

  return Collision;
}();
;// CONCATENATED MODULE: ./Jasmine/Tests/Modules/Maths/Collision.spec.ts




var x1 = 1 + (0,spec_helper/* random */.M)(100),
    y1 = 1 + (0,spec_helper/* random */.M)(100),
    x2 = x1 + 10 + (0,spec_helper/* random */.M)(100),
    y2 = y1 + 10 + (0,spec_helper/* random */.M)(100);
var areaBounds = new Bounds(x1, y1, x2, y2);
var insideBounds = new Bounds(x1 + 5, y1 + 5, x2 - 5, y2 - 5);
var outsideBounds = new Bounds(x1 - 5, y1 - 5, x2 + 5, y2 + 5);
var intersectBounds = new Bounds(x1 - 5, (y1 + y2) / 2 - 1, x1 + 5, (y1 + y2) / 2 + 1);
var insideObject = document.createElement("div");
insideObject.style.position = "absolute";
insideObject.style.left = insideBounds.x1 + "px";
insideObject.style.top = insideBounds.y1 + "px";
insideObject.style.width = insideBounds.x2 - insideBounds.x1 + "px";
insideObject.style.height = insideBounds.y2 - insideBounds.y1 + "px";
var outsideObject = document.createElement("div");
outsideObject.style.position = "absolute";
outsideObject.style.left = outsideBounds.x1 + "px";
outsideObject.style.top = outsideBounds.y1 + "px";
outsideObject.style.width = outsideBounds.x2 - outsideBounds.x1 + "px";
outsideObject.style.height = outsideBounds.y2 - outsideBounds.y1 + "px";
var intersectObject = document.createElement("div");
intersectObject.style.position = "absolute";
intersectObject.style.left = intersectBounds.x1 + "px";
intersectObject.style.top = intersectBounds.y1 + "px";
intersectObject.style.width = intersectBounds.x2 - intersectBounds.x1 + "px";
intersectObject.style.height = intersectBounds.y2 - intersectBounds.y1 + "px";
describe("Collision", function () {
  beforeAll(function () {
    document.body.appendChild(insideObject);
    document.body.appendChild(outsideObject);
    document.body.appendChild(intersectObject);
  });
  afterAll(function () {
    document.body.removeChild(insideObject);
    document.body.removeChild(outsideObject);
    document.body.removeChild(intersectObject);
  });
  it("Should test if a vector2 point is within a bounds", function () {
    //  act
    var result = Collision.checkPointWithinArea(areaBounds, new Vector2/* Vector2 */.F((x1 + x2) / 2, (y1 + y2) / 2)); //  arrange

    expect(result).toBe(true);
  });
  it("Should test if an area is within another area", function () {
    //  act
    var result = Collision.checkAreaWithinArea(areaBounds, insideBounds);
    var result2 = Collision.checkAreaWithinArea(insideBounds, areaBounds); //  arrange

    expect(result).toBe(true);
    expect(result2).toBe(false);
  });
  it("Should test if an area is overlapping another area", function () {
    //  act
    var result = Collision.checkAreaOverlapArea(areaBounds, insideBounds);
    var result2 = Collision.checkAreaOverlapArea(areaBounds, outsideBounds); //  arrange

    expect(result).toBe(false);
    expect(result2).toBe(true);
  });
  it("Should test if an area intersects another area", function () {
    //  act
    var result = Collision.checkAreaIntersectsArea(areaBounds, intersectBounds);
    var result2 = Collision.checkAreaIntersectsArea(areaBounds, outsideBounds); //  arrange

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });
  it("Should test if objects are within an area", function () {
    //  act
    var result = Collision.returnObjectsWithinArea(areaBounds, insideObject);
    var result2 = Collision.returnObjectsWithinArea(areaBounds, [insideObject, intersectObject]);
    var result3 = Collision.returnObjectsWithinArea(areaBounds, outsideObject); //  arrange

    expect(result.length).toBe(1);
    expect(result2.length).toBe(1);
    expect(result3.length).toBe(0);
  });
  it("Should test if objects are overlapping an area", function () {
    //  act
    var result = Collision.returnObjectsOverlapArea(areaBounds, insideObject);
    var result2 = Collision.returnObjectsOverlapArea(areaBounds, [insideObject, intersectObject]);
    var result3 = Collision.returnObjectsOverlapArea(areaBounds, outsideObject); //  arrange

    expect(result.length).toBe(0);
    expect(result2.length).toBe(0);
    expect(result3.length).toBe(1);
  });
  it("Should test if objects intersect an area", function () {
    //  act
    var result = Collision.returnObjectsIntersectArea(areaBounds, insideObject);
    var result2 = Collision.returnObjectsIntersectArea(areaBounds, [insideObject, outsideObject]); //  arrange

    expect(result.length).toBe(1);
    expect(result2.length).toBe(2);
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/* harmony import */ var _Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(955);


var x = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100);
describe("Generic", function () {
  it("Should test if a value is between two numbers", function () {
    expect(_Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__/* .Generic.between */ .T.between(-1, x, 101)).toBe(true);
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/* harmony import */ var _Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(955);
/* harmony import */ var _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(498);
/* harmony import */ var _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(738);
/* harmony import */ var _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(843);





var x1 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y1 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    x2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    x3 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y3 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    x4 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y4 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100);
describe("Line", function () {
  beforeEach(function () {
    x1 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y1 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), x2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), x3 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y3 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), x4 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y4 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100);
  });
  it("should create a Line", function () {
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2);
    expect(line.x1).toBe(x1);
    expect(line.y1).toBe(y1);
    expect(line.x2).toBe(x2);
    expect(line.y2).toBe(y2);
  });
  it("should have a x1 property", function () {
    expect(new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2).x1).toBe(x1);
  });
  it("should set a x1 property", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    line.x1 = x3; //  arrange

    expect(line.x1).toBe(x3);
  });
  it("should have a y1 property", function () {
    expect(new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2).y1).toBe(y1);
  });
  it("should set a y1 property", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    line.y1 = y3; //  arrange

    expect(line.y1).toBe(y3);
  });
  it("should have a x2 property", function () {
    expect(new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2).x2).toBe(x2);
  });
  it("should set a x2 property", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    line.x2 = x4; //  arrange

    expect(line.x2).toBe(x4);
  });
  it("should have a y2 property", function () {
    expect(new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2).y2).toBe(y2);
  });
  it("should set a y2 property", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    line.y2 = y4; //  arrange

    expect(line.y2).toBe(y4);
  });
  it("should set all properties", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //act

    line.set(x3, y3, x4, y4); //  arrange

    expect(line.x1).toBe(x3);
    expect(line.y1).toBe(y3);
    expect(line.x2).toBe(x4);
    expect(line.y2).toBe(y4);
  });
  it("Should return a line with all NaN values using static method", function () {
    //  arrange
    var line = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line[NaN] */ .x[NaN]();
    expect(line.x1).toBeNaN();
    expect(line.y1).toBeNaN();
    expect(line.x2).toBeNaN();
    expect(line.y2).toBeNaN();
  });
  it("Should return a line with all zero values using static method", function () {
    //  arrange
    var line = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line.Zero */ .x.Zero();
    expect(line.x1).toBe(0);
    expect(line.y1).toBe(0);
    expect(line.x2).toBe(0);
    expect(line.y2).toBe(0);
  });
  it("Should compare two lines using equals method", function () {
    //  arrange
    var line1 = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2);
    var line2 = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    var result = line1.equals(line2); //  arrange

    expect(result).toBe(true);
  });
  it("Should test if a line is full of NaN values", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    var result = line.IsNaN(); //  arrange

    expect(result).toBe(false);
  });
  it("Should test if a line has any NaN values", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    var result = line.HasNaN(); //  arrange

    expect(result).toBe(false);
  });
  it("Should test if a line is full of NaN values using static method", function () {
    //  arrange
    var line = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line[NaN] */ .x[NaN](); //  act

    var result = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line.isNaN */ .x.isNaN(line); //  arrange

    expect(result).toBe(true);
  });
  it("Should test if a line has any NaN values using static method", function () {
    //  arrange
    var line = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line[NaN] */ .x[NaN](); //  act

    var result = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line.hasNaN */ .x.hasNaN(line); //  arrange

    expect(result).toBe(true);
  });
  it("Should clone a line", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    var result = line.clone(); //  arrange

    expect(result.x1).toBe(x1);
    expect(result.y1).toBe(y1);
    expect(result.x2).toBe(x2);
    expect(result.y2).toBe(y2);
  });
  it("Should create a line from two vector2s", function () {
    //  arrange
    var vector1 = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2 */ .F(x1, y1);
    var vector2 = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2 */ .F(x2, y2); //  act

    var result = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line.fromVector2s */ .x.fromVector2s(vector1, vector2); //  arrange

    expect(result.x1).toBe(x1);
    expect(result.y1).toBe(y1);
    expect(result.x2).toBe(x2);
    expect(result.y2).toBe(y2);
  });
  it("Should create a line from a vector4", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_4__/* .Vector4 */ .L(x1, y1, x2, y2); //  act

    var result = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line.fromVector4 */ .x.fromVector4(vector); //  arrange

    expect(result.x1).toBe(x1);
    expect(result.y1).toBe(y1);
    expect(result.x2).toBe(x2);
    expect(result.y2).toBe(y2);
  });
  it("Should calculate the distance of this line", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    var result = line.distance(); //  arrange

    expect(result).toBe(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
  });
  it("Should calculate the distance squared of this line", function () {
    //  arrange
    var line = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2); //  act

    var result = line.distanceSqr(); //  arrange

    expect(result).toBe(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  });
  it("Should calculate the intersection point of two lines", function () {
    //  arrange
    var line1 = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2);
    var line2 = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x3, y3, x4, y4); //  act

    var result = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line.lineIntersection */ .x.lineIntersection(line1, line2);
    var lineIntersect = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2 */ .F(NaN, NaN);
    var div = (line1.x1 - line1.x2) * (line2.y1 - line2.y2) - (line1.y1 - line1.y2) * (line2.x1 - line2.x2);
    lineIntersect.x = (line1.x1 * line1.y2 - line1.y1 * line1.x2) * (line2.x1 - line2.x2) - (line1.x1 - line1.x2) * (line2.x1 * line2.y2 - line2.y1 * line2.x2);
    lineIntersect.x /= div;
    lineIntersect.y = (line1.x1 * line1.y2 - line1.y1 * line1.x2) * (line2.y1 - line2.y2) - (line1.y1 - line1.y2) * (line2.x1 * line2.y2 - line2.y1 * line2.x2);
    lineIntersect.y /= div; //  arrange

    expect(result.x).toBe(lineIntersect.x);
    expect(result.y).toBe(lineIntersect.y);
  });
  it("Should calculate if a line intersection is within two points", function () {
    //  arrange
    var line1 = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x1, y1, x2, y2);
    var line2 = new _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x(x3, y3, x4, y4); //  act

    var intersection = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line.lineIntersection */ .x.lineIntersection(line1, line2);
    var result = _Code_src_Maths_Line__WEBPACK_IMPORTED_MODULE_2__/* .Line.lineIntersectionWithin */ .x.lineIntersectionWithin(line1, line2);
    var intersectionResult = intersection;
    if (intersection.HasNaN()) intersectionResult = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2 */ .F(NaN, NaN); //check if line interception is within line 1 x

    if (line1.x1 >= line1.x2) {
      if (_Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__/* .Generic.between */ .T.between(line1.x2, intersection.x, line1.x1)) intersectionResult = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2[NaN] */ .F[NaN]();
    } else {
      if (_Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__/* .Generic.between */ .T.between(line1.x1, intersection.x, line1.x2)) intersectionResult = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2[NaN] */ .F[NaN]();
    } //check if line interception is within line 1 y


    if (line1.y1 >= line1.y2) {
      if (_Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__/* .Generic.between */ .T.between(line1.y2, intersection.y, line1.y1)) intersectionResult = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2[NaN] */ .F[NaN]();
    } else {
      if (_Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__/* .Generic.between */ .T.between(line1.y1, intersection.y, line1.y2)) intersectionResult = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2[NaN] */ .F[NaN]();
    } //check if line interception is within line 2 x


    if (line2.x1 >= line2.x2) {
      if (_Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__/* .Generic.between */ .T.between(line2.x2, intersection.x, line2.x1)) intersectionResult = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2[NaN] */ .F[NaN]();
    } else {
      if (_Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__/* .Generic.between */ .T.between(line2.x1, intersection.x, line2.x2)) intersectionResult = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2[NaN] */ .F[NaN]();
    } //check if line interception is within line 2 y


    if (line2.y1 >= line2.y2) {
      if (_Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__/* .Generic.between */ .T.between(line2.y2, intersection.y, line2.y1)) intersectionResult = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2[NaN] */ .F[NaN]();
    } else {
      if (_Code_src_Maths_Generic__WEBPACK_IMPORTED_MODULE_1__/* .Generic.between */ .T.between(line2.y1, intersection.y, line2.y2)) intersectionResult = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_3__/* .Vector2[NaN] */ .F[NaN]();
    } //  arrange


    if (isNaN(intersectionResult.x)) {
      expect(result.x).toBeNaN();
    } else {
      expect(result.x).toBe(intersectionResult.x);
    }

    if (isNaN(intersectionResult.y)) {
      expect(result.y).toBeNaN();
    } else {
      expect(result.y).toBe(intersectionResult.y);
    }
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/* harmony import */ var _Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(888);
/* harmony import */ var _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(738);



describe("Positioning", function () {
  it("Should return the viewport offset from the page", function () {
    expect(_Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.getPageViewportOffsetFromPage */ .J.getPageViewportOffsetFromPage().x).toBe(window.pageXOffset);
    expect(_Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.getPageViewportOffsetFromPage */ .J.getPageViewportOffsetFromPage().y).toBe(window.pageYOffset);
  });
  it("Should apply the viewport offset from the page to a vector2", function () {
    // arrange
    var vectorOriginal = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_2__/* .Vector2 */ .F((0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100));
    var vector = vectorOriginal; // act

    _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.addPageViewportOffsetFromPage */ .J.addPageViewportOffsetFromPage(vector); // arrange

    expect(vector.x).toBe(vectorOriginal.x + (window.pageXOffset - document.documentElement.clientLeft));
    expect(vector.y).toBe(vectorOriginal.y + (window.pageYOffset - document.documentElement.clientTop));
  });
  it("Should subtract the viewport offset from the page to a vector2", function () {
    // arrange
    var vectorOriginal = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_2__/* .Vector2 */ .F((0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100));
    var vector = vectorOriginal; // act

    _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.subtractPageViewportOffsetFromPage */ .J.subtractPageViewportOffsetFromPage(vector); // arrange

    expect(vector.x).toBe(vectorOriginal.x - (window.pageXOffset - document.documentElement.clientLeft));
    expect(vector.y).toBe(vectorOriginal.y - (window.pageYOffset - document.documentElement.clientTop));
  });
  it("Should return the coordinates of a HTMLElement", function () {
    // arrange
    var parent = document.createElement("div");
    document.body.appendChild(parent);
    parent.style.position = "absolute";
    parent.style.left = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100) + "px";
    parent.style.top = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100) + "px";
    var child = document.createElement("div");
    parent.appendChild(child);
    child.style.position = "relative";
    child.style.left = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100) + "px";
    child.style.top = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100) + "px";
    var another = document.createElement("div");
    document.body.appendChild(another);
    another.style.position = "absolute";
    another.style.left = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100) + "px";
    another.style.top = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100) + "px"; // act

    var result1 = _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.getCoords */ .J.getCoords(parent);
    var result2 = _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.getCoords */ .J.getCoords(child, parent);
    var result3 = _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.getCoords */ .J.getCoords(child);
    var result4 = _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.getCoords */ .J.getCoords(parent, another); // arrange

    expect(result1.x).toBe(parseInt(parent.style.left));
    expect(result1.y).toBe(parseInt(parent.style.top));
    expect(result2.x).toBe(parseInt(child.style.left));
    expect(result2.y).toBe(parseInt(child.style.top));
    expect(result3.x).toBe(parseInt(parent.style.left) + parseInt(child.style.left));
    expect(result3.y).toBe(parseInt(parent.style.top) + parseInt(child.style.top));
    expect(result4.x).toBe(parseInt(parent.style.left) - parseInt(another.style.left));
    expect(result4.y).toBe(parseInt(parent.style.top) - parseInt(another.style.top));
  });
  it("Should return the CSS sizes of a HTMLElement", function () {
    // arrange
    var parent = document.createElement("div");
    document.body.appendChild(parent);
    parent.style.width = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100) + "px";
    parent.style.height = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100) + "px";
    parent.style.border = "solid thin black";
    var child = document.createElement("div");
    parent.appendChild(child);
    child.style.width = "inherit"; // act

    var result1 = _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.translateCssSizes */ .J.translateCssSizes(parent, "width");
    var result2 = _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.translateCssSizes */ .J.translateCssSizes(parent, "height");
    var result3 = _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.translateCssSizes */ .J.translateCssSizes(parent, "borderWidth");
    var result4 = _Code_src_Maths_Positioning__WEBPACK_IMPORTED_MODULE_1__/* .Positioning.translateCssSizes */ .J.translateCssSizes(child, "width");
    ; // arrange

    expect(result1).toBe(parseInt(parent.style.width));
    expect(result2).toBe(parseInt(parent.style.height));
    expect(result3).toBe(1);
    expect(result4).toBe(parseInt(parent.style.width)); // cleanup

    parent.removeChild(child);
    document.body.removeChild(parent);
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/* harmony import */ var _Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(738);


var x = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    x2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100);
describe("Vector2", function () {
  beforeEach(function () {
    x = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), x2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100);
  });
  it("should be able to create a new vector", function () {
    // arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y);
    expect(vector.x).toBe(x);
    expect(vector.y).toBe(y);
  });
  it("should be able to set the X value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    vector.x = x2; //  arrange

    expect(vector.x).toBe(x2);
  });
  it("should be able to get the X value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y);
    expect(vector.x).toBe(x);
  });
  it("should be able to set the Y value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    vector.y = y2; //  arrange

    expect(vector.y).toBe(y2);
  });
  it("should be able to get the Y value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y);
    expect(vector.y).toBe(y);
  });
  it("should be able to set the values of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    vector.set(x2, y2); //  arrange

    expect(vector.x).toBe(x2);
    expect(vector.y).toBe(y2);
  });
  it("should be able to set the values of a vector from a vector2", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    vector.setVector2(new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2)); //  arrange

    expect(vector.x).toBe(x2);
    expect(vector.y).toBe(y2);
  });
  it("should be able to return a vector with NaN as values", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2[NaN] */ .F[NaN](); //  arrange

    expect(vector.x).toBeNaN();
    expect(vector.y).toBeNaN();
  });
  it("should be able to return a vector with 0 as values", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2.Zero */ .F.Zero(); //  arrange

    expect(vector.x).toBe(0);
    expect(vector.y).toBe(0);
  });
  it("should be able to return a vector with 1 as values", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2.One */ .F.One(); //  arrange

    expect(vector.x).toBe(1);
    expect(vector.y).toBe(1);
  });
  it("should be able to return if a vector equals another", function () {
    //  arrange
    var vector1 = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2.One */ .F.One();
    var result = vector1.equals(_Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2.One */ .F.One()); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector is only NaN values", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(NaN, NaN); //  act

    var result = vector.IsNaN(); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector has any NaN values", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, NaN); //  act

    var result = vector.HasNaN(); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector is only NaN values using static function", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(NaN, NaN); //  act

    var result = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2.isNaN */ .F.isNaN(vector); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector has any NaN values using static function", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, NaN); //  act

    var result = _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2.hasNaN */ .F.hasNaN(vector); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return a clone of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    var resultVec = vector.clone(); //  arrange

    expect(resultVec.x).toBe(x);
    expect(resultVec.y).toBe(y);
  });
  it("should be able to add a vector onto another and return a new vector", function () {
    //  arrange
    var vector1 = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y);
    var vector2 = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2); //  act

    var resultVec = vector1.add(vector2); //  arrange

    expect(resultVec.x).toBe(x + x2);
    expect(resultVec.y).toBe(y + y2);
  });
  it("should be able to add a vector to another", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    vector.Add(new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2)); //  arrange

    expect(vector.x).toBe(x + x2);
    expect(vector.y).toBe(y + y2);
  });
  it("should be able to subtract a vector from another vector and return a new vector", function () {
    //  arrange
    var vector1 = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y);
    var vector2 = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2); //  act

    var resultVec = vector1.subtract(vector2); //  arrange

    expect(resultVec.x).toBe(x - x2);
    expect(resultVec.y).toBe(y - y2);
  });
  it("should be able to subtract a vector from another", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    vector.Subtract(new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2)); //  arrange

    expect(vector.x).toBe(x - x2);
    expect(vector.y).toBe(y - y2);
  });
  it("should be able to multiply a vector by a scalar and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    var resultVec = vector.multiply(x2); //  arrange

    expect(resultVec.x).toBe(x * x2);
    expect(resultVec.y).toBe(y * x2);
  });
  it("should be able to multiply a vector by a scalar", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    vector.Multiply(x2); //  arrange

    expect(vector.x).toBe(x * x2);
    expect(vector.y).toBe(y * x2);
  });
  it("should be able to divide a vector by a scalar and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    var resultVec = vector.divide(x2); //  arrange

    expect(resultVec.x).toBe(x / x2);
    expect(resultVec.y).toBe(y / x2);
  });
  it("should be able to divide a vector by a scalar", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    vector.Divide(x2); //  arrange

    expect(vector.x).toBe(x / x2);
    expect(vector.y).toBe(y / x2);
  });
  it("should be able to calculate the dot product of two vectors and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    var resultVec = vector.dot(new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2)); //  arrange

    expect(resultVec.x).toBe(x * x2);
    expect(resultVec.y).toBe(y * y2);
  });
  it("should be able to calculate the dot product of two vectors and apply it to a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    vector.Dot(new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2)); //  arrange

    expect(vector.x).toBe(x * x2);
    expect(vector.y).toBe(y * y2);
  });
  it("should be able to get the distance squared between two vectors", function () {
    //  arrange
    var vector1 = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    var distance = vector1.distanceSqr(new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2)); //  arrange

    expect(distance).toBe(Math.pow(x - x2, 2) + Math.pow(y - y2, 2));
  });
  it("should be able to get the distance between two vectors", function () {
    //  arrange
    var vector1 = new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x, y); //  act

    var distance = vector1.distance(new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2)); //  arrange

    expect(distance).toBe(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)));
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/* harmony import */ var _Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(738);
/* harmony import */ var _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);



var x = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    z = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    x2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    z2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100);
describe("Vector3", function () {
  beforeEach(function () {
    x = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), z = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), x2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), z2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100);
  });
  it("should be able to create a new vector", function () {
    // arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z);
    expect(vector.x).toBe(x);
    expect(vector.y).toBe(y);
    expect(vector.z).toBe(z);
  });
  it("should be able to set the X value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.x = x2; //  arrange

    expect(vector.x).toBe(x2);
  });
  it("should be able to get the X value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z);
    expect(vector.x).toBe(x);
  });
  it("should be able to set the Y value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.y = y2; //  arrange

    expect(vector.y).toBe(y2);
  });
  it("should be able to get the Y value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z);
    expect(vector.y).toBe(y);
  });
  it("should be able to set the Z value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.z = z2; //  arrange

    expect(vector.z).toBe(z2);
  });
  it("should be able to get the Z value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z);
    expect(vector.z).toBe(z);
  });
  it("should be able to set the values of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.set(x2, y2, z2); //  arrange

    expect(vector.x).toBe(x2);
    expect(vector.y).toBe(y2);
    expect(vector.z).toBe(z2);
  });
  it("should be able to set the values of a vector from a vector2", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.setVector2(new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2)); //  arrange

    expect(vector.x).toBe(x2);
    expect(vector.y).toBe(y2);
  });
  it("should be able to set the values of a vector from a vector3", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.setVector3(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(vector.x).toBe(x2);
    expect(vector.y).toBe(y2);
    expect(vector.z).toBe(z2);
  });
  it("should be able to return a vector with NaN as values", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3[NaN] */ .P[NaN](); //  arrange

    expect(vector.x).toBeNaN();
    expect(vector.y).toBeNaN();
    expect(vector.z).toBeNaN();
  });
  it("should be able to return a vector with 0 as values", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3.Zero */ .P.Zero(); //  arrange

    expect(vector.x).toBe(0);
    expect(vector.y).toBe(0);
    expect(vector.z).toBe(0);
  });
  it("should be able to return a vector with 1 as values", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3.One */ .P.One(); //  arrange

    expect(vector.x).toBe(1);
    expect(vector.y).toBe(1);
    expect(vector.z).toBe(1);
  });
  it("should be able to return if a vector equals another", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3.One */ .P.One();
    var result = vector.equals(_Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3.One */ .P.One()); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector is only NaN values", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(NaN, NaN, NaN); //  act

    var result = vector.IsNaN(); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector has any NaN values", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, NaN, z); //  act

    var result = vector.HasNaN(); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector is only NaN values using static function", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(NaN, NaN, NaN); //  act

    var result = _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3.isNaN */ .P.isNaN(vector); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector has any NaN values using static function", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, NaN, z); //  act

    var result = _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3.hasNaN */ .P.hasNaN(vector); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return a clone of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    var resultVec = vector.clone(); //  arrange

    expect(resultVec.x).toBe(x);
    expect(resultVec.y).toBe(y);
    expect(resultVec.z).toBe(z);
  });
  it("should be able to add a vector onto another and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    var resultVec = vector.add(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(resultVec.x).toBe(x + x2);
    expect(resultVec.y).toBe(y + y2);
    expect(resultVec.z).toBe(z + z2);
  });
  it("should be able to add a vector to another", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.Add(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(vector.x).toBe(x + x2);
    expect(vector.y).toBe(y + y2);
    expect(vector.z).toBe(z + z2);
  });
  it("should be able to subtract a vector from another vector and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    var resultVec = vector.subtract(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(resultVec.x).toBe(x - x2);
    expect(resultVec.y).toBe(y - y2);
    expect(resultVec.z).toBe(z - z2);
  });
  it("should be able to subtract a vector from another", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.Subtract(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(vector.x).toBe(x - x2);
    expect(vector.y).toBe(y - y2);
    expect(vector.z).toBe(z - z2);
  });
  it("should be able to multiply a vector by a scalar and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    var resultVec = vector.multiply(x2); //  arrange

    expect(resultVec.x).toBe(x * x2);
    expect(resultVec.y).toBe(y * x2);
    expect(resultVec.z).toBe(z * x2);
  });
  it("should be able to multiply a vector by a scalar", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.Multiply(x2); //  arrange

    expect(vector.x).toBe(x * x2);
    expect(vector.y).toBe(y * x2);
    expect(vector.z).toBe(z * x2);
  });
  it("should be able to divide a vector by a scalar and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    var resultVec = vector.divide(x2); //  arrange

    expect(resultVec.x).toBe(x / x2);
    expect(resultVec.y).toBe(y / x2);
    expect(resultVec.z).toBe(z / x2);
  });
  it("should be able to divide a vector by a scalar", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.Divide(x2); //  arrange

    expect(vector.x).toBe(x / x2);
    expect(vector.y).toBe(y / x2);
    expect(vector.z).toBe(z / x2);
  });
  it("should be able to calculate the dot product of two vectors and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    var resultVec = vector.dot(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(resultVec.x).toBe(x * x2);
    expect(resultVec.y).toBe(y * y2);
    expect(resultVec.z).toBe(z * z2);
  });
  it("should be able to calculate the dot product of two vectors and apply it to a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    vector.Dot(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(vector.x).toBe(x * x2);
    expect(vector.y).toBe(y * y2);
    expect(vector.z).toBe(z * z2);
  });
  it("should be able to get the distance squared between two vectors", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    var result = vector.distanceSqr(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(result).toBe(Math.pow(x - x2, 2) + Math.pow(y - y2, 2) + Math.pow(z - z2, 2));
  });
  it("should be able to get the distance between two vectors", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x, y, z); //  act

    var result = vector.distance(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(result).toBe(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2) + Math.pow(z - z2, 2)));
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(738);
/* harmony import */ var _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);
/* harmony import */ var _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(843);




var x = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    z = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    w = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    x2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    y2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    z2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100),
    w2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100);
describe("Vector4", function () {
  beforeEach(function () {
    x = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), z = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), w = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), x2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), y2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), z2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100), w2 = (0,_Helpers_spec_helper__WEBPACK_IMPORTED_MODULE_0__/* .random */ .M)(100);
  });
  it("should be able to create a new vector", function () {
    // arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w);
    expect(vector.x).toBe(x);
    expect(vector.y).toBe(y);
    expect(vector.z).toBe(z);
    expect(vector.w).toBe(w);
  });
  it("should be able to set the X value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.x = x2; //  arrange

    expect(vector.x).toBe(x2);
  });
  it("should be able to get the X value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w);
    expect(vector.x).toBe(x);
  });
  it("should be able to set the Y value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.y = y2; //  arrange

    expect(vector.y).toBe(y2);
  });
  it("should be able to get the Y value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w);
    expect(vector.y).toBe(y);
  });
  it("should be able to set the Z value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.z = z2; //  arrange

    expect(vector.z).toBe(z2);
  });
  it("should be able to get the Z value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w);
    expect(vector.z).toBe(z);
  });
  it("should be able to set the W value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.w = w2; //  arrange

    expect(vector.w).toBe(w2);
  });
  it("should be able to get the W value of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w);
    expect(vector.w).toBe(w);
  });
  it("should be able to set the values of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.set(x2, y2, z2, w2); //  arrange

    expect(vector.x).toBe(x2);
    expect(vector.y).toBe(y2);
    expect(vector.z).toBe(z2);
    expect(vector.w).toBe(w2);
  });
  it("should be able to set the values of a vector from a vector2", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.setVector2(new _Code_src_Maths_Vector2__WEBPACK_IMPORTED_MODULE_1__/* .Vector2 */ .F(x2, y2)); //  arrange

    expect(vector.x).toBe(x2);
    expect(vector.y).toBe(y2);
  });
  it("should be able to set the values of a vector from a vector3", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.setVector3(new _Code_src_Maths_Vector3__WEBPACK_IMPORTED_MODULE_2__/* .Vector3 */ .P(x2, y2, z2)); //  arrange

    expect(vector.x).toBe(x2);
    expect(vector.y).toBe(y2);
    expect(vector.z).toBe(z2);
  });
  it("should be able to set the values of a vector from a vector4", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.setVector4(new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x2, y2, z2, w2)); //  arrange

    expect(vector.x).toBe(x2);
    expect(vector.y).toBe(y2);
    expect(vector.z).toBe(z2);
    expect(vector.w).toBe(w2);
  });
  it("should be able to return a vector with NaN as values", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4[NaN] */ .L[NaN](); //  arrange

    expect(vector.x).toBeNaN();
    expect(vector.y).toBeNaN();
    expect(vector.z).toBeNaN();
    expect(vector.w).toBeNaN();
  });
  it("should be able to return a vector with 0 as values", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4.Zero */ .L.Zero(); //  arrange

    expect(vector.x).toBe(0);
    expect(vector.y).toBe(0);
    expect(vector.z).toBe(0);
    expect(vector.w).toBe(0);
  });
  it("should be able to return a vector with 1 as values", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4.One */ .L.One(); //  arrange

    expect(vector.x).toBe(1);
    expect(vector.y).toBe(1);
    expect(vector.z).toBe(1);
    expect(vector.w).toBe(1);
  });
  it("should be able to return if a vector equals another", function () {
    //  arrange
    var vector = _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4.One */ .L.One();
    var result = vector.equals(_Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4.One */ .L.One()); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector is only NaN values", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(NaN, NaN, NaN, NaN); //  act

    var result = vector.IsNaN(); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector has any NaN values", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, NaN, z, w); //  act

    var result = vector.HasNaN(); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector is only NaN values using static function", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(NaN, NaN, NaN, NaN); //  act

    var result = _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4.isNaN */ .L.isNaN(vector); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return if a vector has any NaN values using static function", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, NaN, z, w); //  act

    var result = _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4.hasNaN */ .L.hasNaN(vector); //  arrange

    expect(result).toBe(true);
  });
  it("should be able to return a clone of a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    var resultVec = vector.clone(); //  arrange

    expect(resultVec.x).toBe(x);
    expect(resultVec.y).toBe(y);
    expect(resultVec.z).toBe(z);
    expect(resultVec.w).toBe(w);
  });
  it("should be able to add a vector onto another and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    var resultVec = vector.add(new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x2, y2, z2, w2)); //  arrange

    expect(resultVec.x).toBe(x + x2);
    expect(resultVec.y).toBe(y + y2);
    expect(resultVec.z).toBe(z + z2);
    expect(resultVec.w).toBe(w + w2);
  });
  it("should be able to add a vector to another", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.Add(new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x2, y2, z2, w2)); //  arrange

    expect(vector.x).toBe(x + x2);
    expect(vector.y).toBe(y + y2);
    expect(vector.z).toBe(z + z2);
    expect(vector.w).toBe(w + w2);
  });
  it("should be able to subtract a vector from another vector and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    var resultVec = vector.subtract(new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x2, y2, z2, w2)); //  arrange

    expect(resultVec.x).toBe(x - x2);
    expect(resultVec.y).toBe(y - y2);
    expect(resultVec.z).toBe(z - z2);
    expect(resultVec.w).toBe(w - w2);
  });
  it("should be able to subtract a vector from another", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.Subtract(new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x2, y2, z2, w2)); //  arrange

    expect(vector.x).toBe(x - x2);
    expect(vector.y).toBe(y - y2);
    expect(vector.z).toBe(z - z2);
    expect(vector.w).toBe(w - w2);
  });
  it("should be able to multiply a vector by a scalar and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    var resultVec = vector.multiply(x2); //  arrange

    expect(resultVec.x).toBe(x * x2);
    expect(resultVec.y).toBe(y * x2);
    expect(resultVec.z).toBe(z * x2);
    expect(resultVec.w).toBe(w * x2);
  });
  it("should be able to multiply a vector by a scalar", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.Multiply(x2); //  arrange

    expect(vector.x).toBe(x * x2);
    expect(vector.y).toBe(y * x2);
    expect(vector.z).toBe(z * x2);
    expect(vector.w).toBe(w * x2);
  });
  it("should be able to divide a vector by a scalar and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    var resultVec = vector.divide(x2); //  arrange

    expect(resultVec.x).toBe(x / x2);
    expect(resultVec.y).toBe(y / x2);
    expect(resultVec.z).toBe(z / x2);
    expect(resultVec.w).toBe(w / x2);
  });
  it("should be able to divide a vector by a scalar", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.Divide(x2); //  arrange

    expect(vector.x).toBe(x / x2);
    expect(vector.y).toBe(y / x2);
    expect(vector.z).toBe(z / x2);
    expect(vector.w).toBe(w / x2);
  });
  it("should be able to calculate the dot product of two vectors and return a new vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    var resultVec = vector.dot(new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x2, y2, z2, w2)); //  arrange

    expect(resultVec.x).toBe(x * x2);
    expect(resultVec.y).toBe(y * y2);
    expect(resultVec.z).toBe(z * z2);
    expect(resultVec.w).toBe(w * w2);
  });
  it("should be able to calculate the dot product of two vectors and apply it to a vector", function () {
    //  arrange
    var vector = new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x, y, z, w); //  act

    vector.Dot(new _Code_src_Maths_Vector4__WEBPACK_IMPORTED_MODULE_3__/* .Vector4 */ .L(x2, y2, z2, w2)); //  arrange

    expect(vector.x).toBe(x * x2);
    expect(vector.y).toBe(y * y2);
    expect(vector.z).toBe(z * z2);
    expect(vector.w).toBe(w * w2);
  });
});
})();

window.TestExport = __webpack_exports__;
/******/ })()
;