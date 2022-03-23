var TestExport;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Events": function() { return /* reexport */ Events_namespaceObject; },
  "Maths": function() { return /* reexport */ Maths_namespaceObject; },
  "Timers": function() { return /* reexport */ Timers_namespaceObject; },
  "Utilities": function() { return /* reexport */ Utilities_namespaceObject; }
});

// NAMESPACE OBJECT: ./Definitions/Modules/Maths.ts
var Maths_namespaceObject = {};
__webpack_require__.r(Maths_namespaceObject);
__webpack_require__.d(Maths_namespaceObject, {
  "Bounds": function() { return Bounds; },
  "Collision": function() { return Collision; },
  "Line": function() { return Line; },
  "Positioning": function() { return Positioning; },
  "Vector2": function() { return Vector2; },
  "Vector3": function() { return Vector3; },
  "Vector4": function() { return Vector4; }
});

// NAMESPACE OBJECT: ./Definitions/Modules/Timers.ts
var Timers_namespaceObject = {};
__webpack_require__.r(Timers_namespaceObject);
__webpack_require__.d(Timers_namespaceObject, {
  "Timer": function() { return Timer; },
  "TimerController": function() { return TimerController; },
  "TimerSkipOffsetType": function() { return TimerSkipOffsetType; }
});

// NAMESPACE OBJECT: ./Definitions/Modules/Events.ts
var Events_namespaceObject = {};
__webpack_require__.r(Events_namespaceObject);
__webpack_require__.d(Events_namespaceObject, {
  "Event": function() { return Event; },
  "PubSub": function() { return PubSub; }
});

// NAMESPACE OBJECT: ./Definitions/Modules/Utilities.ts
var Utilities_namespaceObject = {};
__webpack_require__.r(Utilities_namespaceObject);
__webpack_require__.d(Utilities_namespaceObject, {
  "CompareTypes": function() { return CompareTypes; },
  "MultiKeyMap": function() { return MultiKeyMap; },
  "UniqueID": function() { return UniqueID; }
});

;// CONCATENATED MODULE: ./Code/src/Maths/Vector2.ts
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
  function Vector2(x, y) {
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
    key: "setVector2",
    value:
    /**
     * Set this Vector2's values to be the parameter's values and apply the values to this Vector2
     * @param  {Vector2} _vector
     * @returns {Vector2}
     */
    function setVector2(_vector) {
      if (!(_vector instanceof Vector2)) {
        console.error("Error trying to set a Vector2's values using an invalid Vector2: ", _vector);
        _vector = new Vector2(NaN, NaN);
      }

      this.set(_vector.x, _vector.y);
      return this;
    }
    /**
     * Returns a new Vector2 with the same values as this Vector2
     * @returns {Vector2}
     */

  }, {
    key: "clone",
    value: function clone() {
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
     * Calcualte the scaled value of a Vector2 and return the result in a new Vector2
     * @param  {number} _scalar
     * @returns {Vector2}
     */

  }, {
    key: "scale",
    value: function scale(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      return new Vector2(this.x * _scalar, this.y * _scalar);
    }
    /**
     * Calcualte the scaled value of a Vector2 and apply the values to this Vector2
     * @param  {number} _scalar
     * @returns {Vector2}
     */

  }, {
    key: "Scale",
    value: function Scale(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      this.set(this.x * _scalar, this.y * _scalar);
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
;// CONCATENATED MODULE: ./Code/src/Maths/Vector3.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function Vector3_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Vector3_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Vector3_createClass(Constructor, protoProps, staticProps) { if (protoProps) Vector3_defineProperties(Constructor.prototype, protoProps); if (staticProps) Vector3_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Vector3_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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
  function Vector3(x, y, z) {
    var _this;

    Vector3_classCallCheck(this, Vector3);

    _this = _super.call(this, x, y);

    Vector3_defineProperty(_assertThisInitialized(_this), "_z", NaN);

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


  Vector3_createClass(Vector3, [{
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
      return new Vector2(this.x, this.y);
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
     * Calcualte the scaled value of a Vector3 and return the result in a new Vector3
     * @param  {number} _scalar
     * @returns {Vector3}
     */

  }, {
    key: "scale",
    value: function scale(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      return new Vector3(this.x * _scalar, this.y * _scalar, this.z * _scalar);
    }
    /**
     * Calcualte the scaled value of a Vector3 and apply the values to this Vector3
     * @param  {number} _scalar
     * @returns {Vector3}
     */

  }, {
    key: "Scale",
    value: function Scale(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      this.set(this.x * _scalar, this.y * _scalar, this.z * _scalar);
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
}(Vector2);
;// CONCATENATED MODULE: ./Code/src/Maths/Vector4.ts
function Vector4_typeof(obj) { "@babel/helpers - typeof"; return Vector4_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Vector4_typeof(obj); }

function Vector4_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Vector4_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Vector4_createClass(Constructor, protoProps, staticProps) { if (protoProps) Vector4_defineProperties(Constructor.prototype, protoProps); if (staticProps) Vector4_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Vector4_get() { if (typeof Reflect !== "undefined" && Reflect.get) { Vector4_get = Reflect.get; } else { Vector4_get = function _get(target, property, receiver) { var base = Vector4_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return Vector4_get.apply(this, arguments); }

function Vector4_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = Vector4_getPrototypeOf(object); if (object === null) break; } return object; }

function Vector4_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Vector4_setPrototypeOf(subClass, superClass); }

function Vector4_setPrototypeOf(o, p) { Vector4_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Vector4_setPrototypeOf(o, p); }

function Vector4_createSuper(Derived) { var hasNativeReflectConstruct = Vector4_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Vector4_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Vector4_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Vector4_possibleConstructorReturn(this, result); }; }

function Vector4_possibleConstructorReturn(self, call) { if (call && (Vector4_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Vector4_assertThisInitialized(self); }

function Vector4_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Vector4_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Vector4_getPrototypeOf(o) { Vector4_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Vector4_getPrototypeOf(o); }

function Vector4_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** Class representing a Vector3 which hold three floats.
 */

var Vector4 = /*#__PURE__*/function (_Vector) {
  Vector4_inherits(Vector4, _Vector);

  var _super = Vector4_createSuper(Vector4);

  /**
   * Create a Vector3
   * @param  {number} x - The x value to set
   * @param  {number} y - The y value to set
   * @param  {number} z - The z value to set
   * @param  {number} w - The w value to set
   */
  function Vector4(x, y, z, w) {
    var _this;

    Vector4_classCallCheck(this, Vector4);

    _this = _super.call(this, x, y, z);

    Vector4_defineProperty(Vector4_assertThisInitialized(_this), "_w", NaN);

    _this.w = w;
    return _this;
  }
  /**
   * Create a Vector4 filled with NaN
   * @returns {Vector4}
   */


  Vector4_createClass(Vector4, [{
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
      return new Vector3(this.x, this.y, this.z);
    }
    /**
     * Set this Vector4's x value to be the parameter's value and apply the values to this Vector4
     * @param  {number} x - The x value to set
     * @param  {number} y - The y value to set
     * @param  {number} z - The z value to set
     * @param  {number} w - The w value to set
     * @returns {Vector4}
     */

  }, {
    key: "set",
    value: function set(x, y) {
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
      var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NaN;

      Vector4_get(Vector4_getPrototypeOf(Vector4.prototype), "set", this).call(this, x, y, z);

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
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to set a Vector4's values using an invalid Vector4: ", _vector);
        _vector = new Vector4(NaN, NaN, NaN, NaN);
      }

      this.set(_vector.x, _vector.y, _vector.z, _vector.w);
      return this;
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
      if (!(_vector instanceof Vector3)) {
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
      if (!(_vector instanceof Vector3)) {
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
      if (!(_vector instanceof Vector3)) {
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
      if (!(_vector instanceof Vector3)) {
        console.error("Error trying to subtract from a vector using an invalid Vector3: ", _vector);
        return new Vector4(NaN, NaN, NaN, NaN);
      }

      this.set(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z, this.w - _vector.w);
      return this;
    }
    /**
     * Calcualte the scaled value of a Vector4 and return the result in a new Vector4
     * @param  {number} _scalar
     * @returns {Vector4}
     */

  }, {
    key: "scale",
    value: function scale(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      return new Vector4(this.x * _scalar, this.y * _scalar, this.z * _scalar, this.w * _scalar);
    }
    /**
     * Calcualte the scaled value of a Vector4 and apply the values to this Vector4
     * @param  {number} _scalar
     * @returns {Vector4}
     */

  }, {
    key: "Scale",
    value: function Scale(_scalar) {
      if (typeof _scalar != "number" || isNaN(_scalar)) {
        console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar);
        _scalar = NaN;
      }

      this.set(this.x * _scalar, this.y * _scalar, this.z * _scalar, this.w * _scalar);
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
      if (!(_vector instanceof Vector3)) {
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
      if (!(_vector instanceof Vector3)) {
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
}(Vector3);
;// CONCATENATED MODULE: ./Code/src/Maths/Positioning.ts
function Positioning_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Positioning_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Positioning_createClass(Constructor, protoProps, staticProps) { if (protoProps) Positioning_defineProperties(Constructor.prototype, protoProps); if (staticProps) Positioning_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/** Class representing all position based functions needed for math calculations.
 */

var Positioning = /*#__PURE__*/function () {
  function Positioning() {
    Positioning_classCallCheck(this, Positioning);
  }

  Positioning_createClass(Positioning, null, [{
    key: "getPageViewportOffsetFromPage",
    value:
    /**
    * Calculate viewport offset from document origin
    * @returns {Vector2}
    */
    function getPageViewportOffsetFromPage() {
      var body = document.body;
      var docEl = document.documentElement;
      return new Vector2((window.pageXOffset || docEl.scrollLeft || body.scrollLeft) - (docEl.clientLeft || body.clientLeft || 0), (window.pageYOffset || docEl.scrollTop || body.scrollTop) - (docEl.clientTop || body.clientTop || 0));
    }
    /**
    * Apply viewport offset to a vector
    * @param  {Vector2} _vector
    * @returns {Vector2}
    */

  }, {
    key: "applyPageViewportOffsetFromPage",
    value: function applyPageViewportOffsetFromPage(_vector) {
      _vector.Add(Positioning.getPageViewportOffsetFromPage());
    }
    /**
    * Calculate coordinates of object
    * @param  {HTMLElement} _object - The object to calculate the coordinates for
    * @param  {HTMLElement | string} _relative - The object or "screen" to calculate the coordinates relative to
    * @returns {Vector2}
    */

  }, {
    key: "getCoords",
    value: function getCoords(_object) {
      var _relativeTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      if (_object == null) {
        console.error("Error trying to calculate coordinates with invalid object: ", _object);
        return new Vector2(NaN, NaN);
      }

      var ret = new Vector2(NaN, NaN);

      if (_relativeTo == null) {
        var box = _object.getBoundingClientRect();

        ret.x = box.left;
        ret.y = box.top;
      } else {
        if (_relativeTo === _object.offsetParent) {
          ret.x = _object.offsetLeft;
          ret.y = _object.offsetTop;
        } else {
          //Calculate position offset from viewport
          var _box = _object.getBoundingClientRect();

          ret.x = _box.left;
          ret.y = _box.top; //if relative to exists then calculate offset from that

          if (_relativeTo !== document) {
            var otherBox = _relativeTo.getBoundingClientRect();

            ret.x -= otherBox.left;
            ret.y -= otherBox.top;
          }

          this.applyPageViewportOffsetFromPage(ret);
        }
      }

      return ret;
    }
    /**
    * Calculate sizes of computed style
    * @param  {HTMLElement} _object - The object to calculate the size on
    * @param  {string} _css - The CSS attribute 
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
          return 2;

        case "medium":
          return 4;

        case "thick":
          return 6;

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
;// CONCATENATED MODULE: ./Code/src/Maths/Bounds.ts
function Bounds_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Bounds_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Bounds_createClass(Constructor, protoProps, staticProps) { if (protoProps) Bounds_defineProperties(Constructor.prototype, protoProps); if (staticProps) Bounds_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Bounds_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/** Class representing a Bounds which hold two points and any extra variables from these points.
 */

var Bounds = /*#__PURE__*/function () {
  /**
  * Create a Bounds
  * @param  {number} x1 - The first point x value to set
  * @param  {number} y1 - The first point y value to set
  * @param  {number} x2 - The second point x value to set
  * @param  {number} y2 - The second point y value to set
  */
  function Bounds(x1, y1, x2, y2) {
    Bounds_classCallCheck(this, Bounds);

    Bounds_defineProperty(this, "_x1", NaN);

    Bounds_defineProperty(this, "_y1", NaN);

    Bounds_defineProperty(this, "_x2", NaN);

    Bounds_defineProperty(this, "_y2", NaN);

    Bounds_defineProperty(this, "_topLeft", Vector2[NaN]());

    Bounds_defineProperty(this, "_topRight", Vector2[NaN]());

    Bounds_defineProperty(this, "_bottomRight", Vector2[NaN]());

    Bounds_defineProperty(this, "_bottomLeft", Vector2[NaN]());

    Bounds_defineProperty(this, "_size", Vector2[NaN]());

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
   * @returns {Bounds}
   */


  Bounds_createClass(Bounds, [{
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
      this.size.y = this.topRight.y - this.bottomRight.y;
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

      if (value > this.y2) {
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

      this.size.x = this.topRight.x - this.topLeft.x;
      this.size.y = this.topRight.y - this.bottomRight.y;
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
      this.size.y = this.topRight.y - this.bottomRight.y;
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

      if (value > this.y1) {
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

      this.size.x = this.topRight.x - this.topLeft.x;
      this.size.y = this.topRight.y - this.bottomRight.y;
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

      return new Bounds(this.x1 + _bounds.x1, this.y1 + _bounds.y1, this.x2 + _bounds.x2, this.y2 + _bounds.y2);
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

      return new Bounds(this.x1 - _bounds.x1, this.y1 - _bounds.y1, this.x2 - _bounds.x2, this.y2 - _bounds.y2);
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

      return new Bounds(this.x1 * _scalar, this.y1 * _scalar, this.x2 * _scalar, this.y2 * _scalar);
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

      return new Bounds(this.x1 * _bounds.x1, this.y1 * _bounds.y1, this.x2 * _bounds.x2, this.y2 * _bounds.y2);
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

      this.set(this.x1 * _bounds.x1, this.y1 * _bounds.y1, this.x2 * _bounds.x2, this.y2 * _bounds.y2);
      return this;
    }
    /**
    * Create a bounds from two Vector2s
    * @param  {Vector2} _pos1
    * @param  {Vector2} _pos2
    * @returns {Bounds}
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
      if (!(_pos1 instanceof Vector2)) {
        console.error("Error trying to generate bounds with invalid first Vector2: ", _pos1);
        _pos1 = new Vector2(NaN, NaN);
      }

      if (!(_pos2 instanceof Vector2)) {
        console.error("Error trying to generate bounds with invalid second Vector2: ", _pos2);
        _pos2 = new Vector2(NaN, NaN);
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
      if (!(_vector instanceof Vector4)) {
        console.error("Error trying to generate bounds with invalid Vector4: ", _vector);
        _vector = new Vector4(NaN, NaN, NaN, NaN);
      }

      return new Bounds(_vector.x, _vector.y, _vector.z, _vector.w);
    }
    /**
    * Create a bounds from a set of HTML DOMs
    * @param  {HTMLElement | string} _objects - A DOM or JQUERY string to use to create a Bounds
    * @param  {HTMLElement} _relative - Determines if the Bounds should be created in relation to another object
    * @param  {string[]} _includeChildren - An array of strings that are used to include children DOMs of the _objects
    * @returns {Bounds | null}
    */

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

        var _position = Positioning.getCoords(dom, _relative);

        var _computedStyle = window.getComputedStyle(dom);

        var height = dom.clientHeight;
        height += Positioning.translateCssSizes(dom, "marginTop", _computedStyle);
        height += Positioning.translateCssSizes(dom, "marginBottom", _computedStyle);
        height += Positioning.translateCssSizes(dom, "borderTopWidth", _computedStyle);
        height += Positioning.translateCssSizes(dom, "borderBottomWidth", _computedStyle);
        var width = _objectJQuery[0].clientWidth;
        width += Positioning.translateCssSizes(dom, "marginLeft", _computedStyle);
        width += Positioning.translateCssSizes(dom, "marginRight", _computedStyle);
        width += Positioning.translateCssSizes(dom, "borderLeftWidth", _computedStyle);
        width += Positioning.translateCssSizes(dom, "borderRightWidth", _computedStyle);
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

      return new Bounds(_objectBounds.left, _objectBounds.top, _objectBounds.right, _objectBounds.bottom);
    }
  }]);

  return Bounds;
}();
;// CONCATENATED MODULE: ./Code/src/Maths/Generic.ts
function Generic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Generic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Generic_createClass(Constructor, protoProps, staticProps) { if (protoProps) Generic_defineProperties(Constructor.prototype, protoProps); if (staticProps) Generic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/** Class representing all generic based functions needed for math calculations.
 */
var Generic = /*#__PURE__*/function () {
  function Generic() {
    Generic_classCallCheck(this, Generic);
  }

  Generic_createClass(Generic, null, [{
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
;// CONCATENATED MODULE: ./Code/src/Maths/Line.ts
function Line_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Line_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Line_createClass(Constructor, protoProps, staticProps) { if (protoProps) Line_defineProperties(Constructor.prototype, protoProps); if (staticProps) Line_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Line_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
    Line_classCallCheck(this, Line);

    Line_defineProperty(this, "_x1", 0);

    Line_defineProperty(this, "_y1", 0);

    Line_defineProperty(this, "_x2", 0);

    Line_defineProperty(this, "_y2", 0);

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


  Line_createClass(Line, [{
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
      if (!(_pos1 instanceof Vector2)) {
        console.error("Error trying to generate Line with invalid first Vector2: ", _pos1);
        _pos1 = new Vector2(NaN, NaN);
      }

      if (!(_pos2 instanceof Vector2)) {
        console.error("Error trying to generate Line with invalid second Vector2: ", _pos2);
        _pos2 = new Vector2(NaN, NaN);
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
      if (!(_vector instanceof Vector4)) {
        console.error("Error trying to generate Line with invalid Vector4: ", _vector);
        _vector = new Vector4(NaN, NaN, NaN, NaN);
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
        return new Vector2(NaN, NaN);
      }

      if (!(_line2 instanceof Line)) {
        console.error("Error trying to calculate line intersection with invalid Line2: ", _line2);
        return new Vector2(NaN, NaN);
      }

      var lineIntersect = new Vector2(NaN, NaN);
      var div = (_line1.x1 - _line1.x2) * (_line2.y1 - _line2.y2) - (_line1.y1 - _line1.y2) * (_line2.x1 - _line2.x2);
      lineIntersect.x = (_line1.x1 * _line1.y2 - _line1.y1 * _line1.x2) * (_line2.x1 - _line2.x2) - (_line1.x1 - _line1.x2) * (_line2.x1 * _line2.y2 - _line2.y1 * _line2.x2);
      lineIntersect.x /= div;
      lineIntersect.y = (_line1.x1 * _line1.y2 - _line1.y1 * _line1.x2) * (_line2.y1 - _line2.y2) - (_line1.y1 - _line1.y2) * (_line2.x1 * _line2.y2 - _line2.y1 * _line2.x2);
      lineIntersect.y /= div;
      if (lineIntersect.HasNaN()) return new Vector2(NaN, NaN);
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
      if (intersection.HasNaN()) return new Vector2(NaN, NaN); //check if line interception is within line 1 x

      if (_line1.x1 >= _line1.x2) {
        if (Generic.between(_line1.x2, intersection.x, _line1.x1)) return Vector2[NaN]();
      } else {
        if (Generic.between(_line1.x1, intersection.x, _line1.x2)) return Vector2[NaN]();
      } //check if line interception is within line 1 y


      if (_line1.y1 >= _line1.y2) {
        if (Generic.between(_line1.y2, intersection.y, _line1.y1)) return Vector2[NaN]();
      } else {
        if (Generic.between(_line1.y1, intersection.y, _line1.y2)) return Vector2[NaN]();
      } //check if line interception is within line 2 x


      if (_line2.x1 >= _line2.x2) {
        if (Generic.between(_line2.x2, intersection.x, _line2.x1)) return Vector2[NaN]();
      } else {
        if (Generic.between(_line2.x1, intersection.x, _line2.x2)) return Vector2[NaN]();
      } //check if line interception is within line 2 y


      if (_line2.y1 >= _line2.y2) {
        if (Generic.between(_line2.y2, intersection.y, _line2.y1)) return Vector2[NaN]();
      } else {
        if (Generic.between(_line2.y1, intersection.y, _line2.y2)) return Vector2[NaN]();
      }

      return intersection;
    }
  }]);

  return Line;
}();
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

      if (!(point instanceof Vector2) || point.HasNaN()) {
        console.error("Error trying to calculate if a point is within bounds with invalid point: ", point);
        return false;
      }

      return areaBounds.topLeft.x <= point.x && areaBounds.topLeft.y <= point.y && areaBounds.bottomRight.x >= point.x && areaBounds.bottomRight.y >= point.y;
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

      return this.checkPointWithinArea(areaBounds, otherBounds.topLeft) && this.checkPointWithinArea(areaBounds, otherBounds.topRight) && this.checkPointWithinArea(areaBounds, otherBounds.bottomRight) && this.checkPointWithinArea(areaBounds, otherBounds.bottomLeft);
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

      if (this.checkPointWithinArea(areaBounds, otherBounds.topLeft) || this.checkPointWithinArea(areaBounds, otherBounds.topRight) || this.checkPointWithinArea(areaBounds, otherBounds.bottomRight) || this.checkPointWithinArea(areaBounds, otherBounds.bottomLeft)) {
        return true;
      }

      var linesToCheck = [Line.fromVector2s(otherBounds.topLeft, otherBounds.topRight), Line.fromVector2s(otherBounds.topRight, otherBounds.bottomRight), Line.fromVector2s(otherBounds.bottomRight, otherBounds.bottomLeft), Line.fromVector2s(otherBounds.bottomLeft, otherBounds.topLeft)];
      var linesToCheckAgainst = [Line.fromVector2s(areaBounds.topLeft, areaBounds.topRight), Line.fromVector2s(areaBounds.topRight, areaBounds.bottomRight), Line.fromVector2s(areaBounds.bottomRight, areaBounds.bottomLeft), Line.fromVector2s(areaBounds.bottomLeft, areaBounds.topLeft)]; //do line intersect tests between every line

      linesToCheck.forEach(function (line1) {
        linesToCheckAgainst.forEach(function (line2) {
          if (Line.lineIntersectionWithin(line1, line2)) return true;
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

      var ret = [];
      var objectsArray = objects instanceof HTMLElement ? [objects] : objects;
      objectsArray.forEach(function (dom) {
        var otherBounds = Bounds.fromObject(dom);

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
    * Calculate if objects are intersecting areaBounds
    * @param  {Bounds} areaBounds
    * @param  {HTMLElement | HTMLElement[]} objects
    * @returns {object[]}
    */

  }, {
    key: "returnObjectsIntersectArea",
    value: function returnObjectsIntersectArea(areaBounds, objects) {
      var _this2 = this;

      if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) {
        console.error("Error trying to calculate if objects are within bounds with invalid area bounds: ", areaBounds);
        return [];
      }

      if (!(objects instanceof HTMLElement || Array.isArray(objects))) {
        console.error("Error trying to calculate if objects are within bounds with invalid objects: ", objects);
        return [];
      }

      var ret = [];
      var objectsArray = objects instanceof HTMLElement ? [objects] : objects;
      objectsArray.forEach(function (dom) {
        var otherBounds = Bounds.fromObject(dom);

        if (_this2.checkAreaIntersectsArea(areaBounds, otherBounds)) {
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
;// CONCATENATED MODULE: ./Definitions/Modules/Maths.ts








;// CONCATENATED MODULE: ./Code/src/Utilities/CompareTypes.ts
function CompareTypes_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CompareTypes_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CompareTypes_createClass(Constructor, protoProps, staticProps) { if (protoProps) CompareTypes_defineProperties(Constructor.prototype, protoProps); if (staticProps) CompareTypes_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/** Class representing a utility that compares types.
 */
var CompareTypes = /*#__PURE__*/function () {
  function CompareTypes() {
    CompareTypes_classCallCheck(this, CompareTypes);
  }

  CompareTypes_createClass(CompareTypes, null, [{
    key: "same",
    value:
    /**
     * Compare two parameters and return if they are the same type
     * @param  {any} a - The value to compare
     * @param  {any} b - The value to compare to
    */
    function same(a, b) {
      return Object.prototype.toString.call(a) == Object.prototype.toString.call(b);
    }
    /**
     * Compare two parameters and return if they are not the same type
     * @param  {any} a - The value to compare
     * @param  {any} b - The value to compare to
    */

  }, {
    key: "different",
    value: function different(a, b) {
      return !CompareTypes.same(a, b);
    }
  }]);

  return CompareTypes;
}();
;// CONCATENATED MODULE: ./Code/src/Utilities/MultiKeyMap.ts
function MultiKeyMap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MultiKeyMap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MultiKeyMap_createClass(Constructor, protoProps, staticProps) { if (protoProps) MultiKeyMap_defineProperties(Constructor.prototype, protoProps); if (staticProps) MultiKeyMap_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function MultiKeyMap_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** Class that handles multiple keys to one value Map
 */

var MultiKeyMap = /*#__PURE__*/function () {
  //** Store all forward references to values to allow searching*/

  /** Store all inverse references to values to allow searching and Maps the values to void for O(1) checking*/

  /**
  * Create a map between multiple keys and a single value
  * @param  {Key | Key[]} Keys - Any key/s to add on creation
  * @param  {Value} value - The value to link these keys to
  */
  function MultiKeyMap() {
    var _this = this;

    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var value = arguments.length > 1 ? arguments[1] : undefined;

    MultiKeyMap_classCallCheck(this, MultiKeyMap);

    MultiKeyMap_defineProperty(this, "__map__", new Map());

    MultiKeyMap_defineProperty(this, "__reverseMap__", new Map());

    if (keys == null || Array.isArray(keys) && keys.length == 0 || value == null) return;
    var reverseMap = new Map();

    if (Array.isArray(keys)) {
      keys.forEach(function (element) {
        _this.__map__.set(element, value);

        reverseMap.set(element);
      });
    } else {
      this.__map__.set(keys, value);

      reverseMap.set(keys);
    }

    this.__reverseMap__.set(value, reverseMap);
  }
  /**
  * Return Value associated with a key
  * @param  {Key} key - The key to return the value for
  */


  MultiKeyMap_createClass(MultiKeyMap, [{
    key: "getValue",
    value: function getValue(key) {
      return this.__map__.get(key);
    }
    /**
    * Return Map of Value to Keys
    * @param  {Value} Value - The value to return keys Map for
    */

  }, {
    key: "getKeys",
    value: function getKeys(value) {
      return this.__reverseMap__.get(value);
    }
    /**
    * Return all keys relating to a value in array format
    * @param  {Value} Value - The value to return keys for
    */

  }, {
    key: "getKeysArray",
    value: function getKeysArray(value) {
      var keys = this.getKeys(value);
      return keys != undefined ? Array.from(keys.keys()) : [];
    }
    /**
    * Test if a value exists for a given key
    * @param  {Key} Key - The key to check if a value exists
    */

  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.getValue(key) != undefined;
    }
    /**
    * Create a map between a key and a single value
    * @param  {Key} Key - The key to add this value to
    * @param  {Value} value - The value to link this key to
    */

  }, {
    key: "setKey",
    value: function setKey(key, value) {
      var keys = this.getKeys(value);

      if (keys == undefined) {
        keys = new Map();
        keys.set(key);

        this.__map__.set(key, value);

        this.__reverseMap__.set(value, keys);
      } else {
        this.__map__.set(key, value);

        keys.set(key);

        this.__reverseMap__.set(value, keys);
      }
    }
    /**
    * Create a map between multiple keys and a single value
    * @param  {Key | Key[]} Keys - Any keys to add this value to
    * @param  {Value} value - The value to link these keys to
    */

  }, {
    key: "setKeys",
    value: function setKeys(keys, value) {
      var _this2 = this;

      keys.forEach(function (element) {
        _this2.setKey(element, value);
      });
    }
    /**
    * Remap pre-existing keys to a new value
    * @param  {Value} value - The value to get the keys from
    * @param  {Value} newValue - The new value to link the keys to
    */

  }, {
    key: "remapValue",
    value: function remapValue(value, newValue) {
      var _this3 = this;

      if (value == null) {
        console.error("Trying to remap a MultiKeyMap's value with an invalid value: ", value);
        return [];
      }

      if (newValue == null) {
        console.error("Trying to remap a MultiKeyMap's value with an invalid newValue: ", newValue);
        return [];
      }

      if (CompareTypes.different(value, newValue)) {
        console.error("Trying to remap a MultiKeyMap's value with different parameter types: ", value, " ", newValue);
        return [];
      }

      var keys = this.getKeysArray(value);
      this.deleteKeys(keys, value);
      if (keys.length == 0) return keys;
      keys.forEach(function (element) {
        _this3.setKey(element, newValue);
      });
      return keys;
    }
    /**
    * Remap pre-existing keys to a new value based on pre-existing Key->Value map
    * @param  {Key} key - The key to lookup to find the original value to get the keys from
    * @param  {Value} newValue - The new value to link the keys to
    */

  }, {
    key: "remapValueFromKey",
    value: function remapValueFromKey(key, newValue) {
      var oldValue = this.getValue(key);
      if (oldValue == undefined) return [];
      return this.remapValue(oldValue, newValue);
    }
    /**
    * Remap pre-existing key to a new value based on pre-existing Key->Value map
    * @param  {Key} key - The key to remap
    * @param  {Value} newValue - The new value to link the key to
    */

  }, {
    key: "remapKey",
    value: function remapKey(key, newValue) {
      var oldValue = this.getValue(key);

      if (oldValue == undefined) {
        this.setKey(key, newValue);
        return;
      }

      this.deleteKey(key, oldValue);
      this.setKey(key, newValue);
    }
    /**
    * Remove a key from this map
    * @param  {Key} Key - The key to remove from this value
    * @param  {Value} value - The value that this key links to
    */

  }, {
    key: "deleteKey",
    value: function deleteKey(key, value) {
      var otherKeys = this.__reverseMap__.get(value);

      if (otherKeys == undefined) {
        this.__map__.delete(key);

        return;
      }

      otherKeys.delete(key);

      if (otherKeys.size == 0) {
        this.__map__.delete(key);

        this.__reverseMap__.delete(value);

        return;
      }

      this.__reverseMap__.set(value, otherKeys);

      this.__map__.delete(key);
    }
    /**
    * Remove many keys from this map
    * @param  {Key} Keys - The keys to remove from this value
    * @param  {Value} value - The value that these keys link to
    */

  }, {
    key: "deleteKeys",
    value: function deleteKeys(keys, value) {
      var _this4 = this;

      keys.forEach(function (element) {
        _this4.deleteKey(element, value);
      });
    }
    /**
    * Remove all references to a value
    * @param  {Value} value - The value to remove
    */

  }, {
    key: "deleteValue",
    value: function deleteValue(value) {
      var _this5 = this;

      this.getKeysArray(value).forEach(function (element) {
        _this5.__map__.delete(element);
      });

      this.__reverseMap__.delete(value);
    }
    /**
    * Remove all keys and values
    */

  }, {
    key: "clear",
    value: function clear() {
      this.__map__.clear();

      this.__reverseMap__.clear();
    }
  }]);

  return MultiKeyMap;
}();
;// CONCATENATED MODULE: ./Code/src/Events/Event.ts
function Event_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Event_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Event_createClass(Constructor, protoProps, staticProps) { if (protoProps) Event_defineProperties(Constructor.prototype, protoProps); if (staticProps) Event_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Event_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/** Class that handles any event driven data for event managers.
 */
var Event = /*#__PURE__*/function () {
  /**
  * Create an Event and store it's name and callback if provided
  */
  function Event(name) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : jQuery.Callbacks("unique");

    Event_classCallCheck(this, Event);

    Event_defineProperty(this, "_name", "");

    Event_defineProperty(this, "_callback", jQuery.Callbacks("unique"));

    Event_defineProperty(this, "_subscribers", new Map());

    if (typeof name != "string" || name == "") {
      console.error("Trying to create a new event with invalid name: ", name);
      return;
    }

    this.name = name;
    if (callback == null || CompareTypes.different(callback, jQuery.Callbacks())) return;
    this.callback = callback;
  }
  /**
  * Handle setting up this event
  * @param  {string} settings - The settings to apply to this JQuery.callbacks
  */


  Event_createClass(Event, [{
    key: "name",
    get: //** The name of this event*/
    function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name;
    } //** The name of this event*/

  }, {
    key: "callback",
    get: function get() {
      return this._callback;
    },
    set: function set(callback) {
      this._callback = callback;
    } //** Handles storing subscribers to this Event as JQuery.Callbacks do not expose this*/

  }, {
    key: "subscribers",
    get: function get() {
      return this._subscribers;
    }
  }, {
    key: "setupEvent",
    value: function setupEvent(settings) {
      var _this = this;

      if (typeof settings != "string") {
        console.error("Trying to setup an Event's settings with invalid settings: ", settings);
        return false;
      }

      var jqueryCallback = jQuery.Callbacks(settings);

      if (this.callback != undefined) {
        var keys = Array.from(this.subscribers.keys());
        keys.forEach(function (element) {
          jqueryCallback.add(element);

          _this.subscribers.set(element, jqueryCallback);
        });
      }

      this.callback = jqueryCallback;
      return true;
    }
    /**
    * Handle subscribing to this event
    * @param  {Function} callback - The subscriber to be added
    */

  }, {
    key: "subscribe",
    value: function subscribe(subscriber) {
      if (typeof subscriber != "function") {
        console.error("Trying to subscribe to an Event using an invalid callback: ", subscriber);
        return false;
      }

      if (this._subscribers.get(subscriber) != undefined) {
        console.error("Trying to subscribe to an event using a callback that is already subscribed: ", subscriber);
        return false;
      }

      this._subscribers.set(subscriber, this.callback);

      this.callback.add(subscriber);
      return true;
    }
    /**
    * Handle unsubscribing to this event
    * @param  {Function} callback - The subscriber to be removed
    */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(subscriber) {
      if (typeof subscriber != "function") {
        console.error("Trying to unsubscribe from an Event using an invalid callback: ", subscriber);
        return false;
      }

      if (this._subscribers.get(subscriber) == undefined) return false;

      this._subscribers.delete(subscriber);

      this.callback.remove(subscriber);
      return true;
    }
    /**
    * Handle clearing this event
    */

  }, {
    key: "clear",
    value: function clear() {
      if (this.callback == null) return false;
      this.callback.empty();
      this.subscribers.clear();
      return true;
    }
  }]);

  return Event;
}();
;// CONCATENATED MODULE: ./Code/src/Events/PubSub.ts
function PubSub_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PubSub_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PubSub_createClass(Constructor, protoProps, staticProps) { if (protoProps) PubSub_defineProperties(Constructor.prototype, protoProps); if (staticProps) PubSub_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function PubSub_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/** Class that handles simple subscription/publish event manager.
 */

var PubSub = /*#__PURE__*/function () {
  function PubSub() {
    PubSub_classCallCheck(this, PubSub);

    PubSub_defineProperty(this, "_events", new Map());

    PubSub_defineProperty(this, "_subscribers", new MultiKeyMap());
  }

  PubSub_createClass(PubSub, [{
    key: "events",
    get: function get() {
      return this._events;
    } //** Handles storing subscribers to events that this PubSub has as JQuery.Callbacks do not expose this*/

  }, {
    key: "subscribers",
    get: function get() {
      return this._subscribers;
    }
    /**
    * Handle modifiy/creating event with specific settings
     * @link https://api.jquery.com/jquery.callbacks/
    * @param  {string} event - The event to subscribe to
    * @param  {string} settings - The JQuery.Callbacks settings to apply to this event
    * @param  {any[]} args - Any extra arguments that will be sent to EventSetup event
    */

  }, {
    key: "setupEvent",
    value: function setupEvent(event) {
      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      if (typeof event != "string" || event == "") {
        console.error("Trying to setup an event with an invalid event: ", event);
        return false;
      }

      if (typeof settings != "string") {
        console.error("Trying to setup an event's settings with invalid settings: ", settings);
        return false;
      }

      var eventCallbacks = this._events.get(event);

      if (eventCallbacks == undefined) {
        eventCallbacks = new Event(event);

        this._events.set(event, eventCallbacks);
      }

      if (!eventCallbacks.setupEvent(settings)) return false;

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      this.publish.apply(this, ["EventSetup", event].concat(args));
      return true;
    }
    /**
    * Handle subscribing to events
    * @param  {string} event - The event to subscribe to
    * @param  {Function} callback - The callback to add to this event
    * @param  {any[]} args - Any extra arguments that will be sent to EventSubscribed event
    */

  }, {
    key: "subscribe",
    value: function subscribe(event, callback) {
      var _event2;

      if (typeof event != "string" || event == "") {
        console.error("Trying to subscribe to a Timer's event with an invalid input: ", event);
        return false;
      }

      if (typeof callback != "function") {
        console.error("Trying to subscribe to a Timer's event using an invalid function: ", callback);
        return false;
      }

      var _event = this._events.get(event);

      if (_event == undefined) {
        this.setupEvent(event);
        _event = this._events.get(event);
      }

      if (!((_event2 = _event) !== null && _event2 !== void 0 && _event2.subscribe(callback))) return false;

      this._subscribers.setKey(_event, callback);

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      this.publish.apply(this, ["EventSubscribed", event, callback].concat(args));
      return true;
    }
    /**
    * Handle unsubscribing from events
    * @param  {string} event - The event to unsubscribe from
    * @param  {Function} callback - The callback to remove to this event
    * @param  {any[]} args - Any extra arguments that will be sent to EventUnsubscribed event
    */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(event, callback) {
      if (typeof event != "string") {
        console.error("Trying to subscribe to a Timer's event with an invalid input: ", event);
        return false;
      }

      if (typeof callback != "function") {
        console.error("Trying to subscribe to a Timer's event using an invalid function: ", callback);
        return false;
      }

      var _event = this._events.get(event);

      if (_event == undefined) return false;
      if (!(_event !== null && _event !== void 0 && _event.unsubscribe(callback))) return false;

      this._subscribers.deleteKey(_event, callback);

      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      this.publish.apply(this, ["EventUnsubscribed", event, callback].concat(args));
      return true;
    }
    /**
    * Handle publishing events
    */

  }, {
    key: "publish",
    value: function publish(event) {
      var _event$callback;

      if (typeof event != "string") {
        console.error("Trying to publish to a Timer's event with an invalid input: ", event);
        return false;
      }

      var _event = this._events.get(event);

      if (_event == undefined) return false;

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      (_event$callback = _event.callback).fire.apply(_event$callback, [event].concat(args));

      if (event != "EventPublished") this.publish.apply(this, ["EventPublished", event].concat(args));
      return true;
    }
    /**
    * Handle clearing specific event
    * @param  {string} event - The event to clear all subscribers from
     * This will need improving to handle event unsubscribing when clearing
    */

  }, {
    key: "clearEvent",
    value: function clearEvent(event) {
      if (typeof event != "string") {
        console.error("Trying to clear to a Timer's event with an invalid input: ", event);
        return false;
      }

      var _event = this._events.get(event);

      if (_event == undefined) return false;

      _event.clear();

      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      this.publish.apply(this, ["EventCleared", event].concat(args));
      return true;
    }
    /**
    * Handle clearing all events
    */

  }, {
    key: "clear",
    value: function clear() {
      this.events.clear();

      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      this.publish.apply(this, ["AllEventsCleared"].concat(args));
      return true;
    }
  }]);

  return PubSub;
}();
;// CONCATENATED MODULE: ./Code/src/Utilities/UniqueID.ts
function UniqueID_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UniqueID_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UniqueID_createClass(Constructor, protoProps, staticProps) { if (protoProps) UniqueID_defineProperties(Constructor.prototype, protoProps); if (staticProps) UniqueID_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function UniqueID_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Holds any properties and methods for generating Unique IDs.
 */
var UniqueID = /*#__PURE__*/function () {
  function UniqueID() {
    UniqueID_classCallCheck(this, UniqueID);

    UniqueID_defineProperty(this, "_uniqueID", 0);
  }

  UniqueID_createClass(UniqueID, [{
    key: "uniqueID",
    get: function get() {
      return this._uniqueID;
    },
    set: function set(value) {
      if (typeof value != "number") {
        console.error("Trying to set UniqueID's unique ID with an invalid input: ", value);
        return;
      }

      this._uniqueID = value;
    }
    /**
    * Return and increment a value to fake uniqueness
    */

  }, {
    key: "generateUID",
    value: function generateUID() {
      this.uniqueID++;
      return this.uniqueID;
    }
  }]);

  return UniqueID;
}();
;// CONCATENATED MODULE: ./Code/src/Timers/TimerController.ts
function TimerController_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TimerController_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TimerController_createClass(Constructor, protoProps, staticProps) { if (protoProps) TimerController_defineProperties(Constructor.prototype, protoProps); if (staticProps) TimerController_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function TimerController_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/** Class representing any utility functions or variables that help Timers.
 */
var TimerController = /*#__PURE__*/function () {
  /**
  * Return this or singleton instance of TimerController
  */
  function TimerController() {
    TimerController_classCallCheck(this, TimerController);

    TimerController_defineProperty(this, "_uniqueID", new UniqueID());

    TimerController_defineProperty(this, "_timers", new MultiKeyMap());

    if (TimerController._instance) return TimerController._instance;
    TimerController._instance = this;
  } //** Store an incrementing variable to ensure unique IDs*/


  TimerController_createClass(TimerController, [{
    key: "uniqueID",
    get: function get() {
      if (this != TimerController.Instance) return TimerController.Instance.uniqueID;
      return this._uniqueID;
    } //** Store all references to Timers to allow searching*/

  }, {
    key: "timers",
    get: function get() {
      if (this != TimerController.Instance) return TimerController.Instance.timers;
      return this._timers;
    }
    /**
    * Return the current datetime
    */

  }], [{
    key: "Instance",
    get: //** Store a singleton of TimerController to assure only one exists */
    function get() {
      return this._instance || (this._instance = new this());
    }
  }, {
    key: "Time",
    value: function Time() {
      return new Date().getTime();
    }
    /**
    * Searches for and returns a timer with a name parameter
    * @param  {string} name - The Timer to return
    */

  }, {
    key: "getTimer",
    value: function getTimer(name) {
      if (typeof name != "string") {
        console.error("Trying to get a Timer with an invalid input: ", name);
        return;
      }

      return this.Instance.timers.getValue(name);
    }
    /**
    * Searches for and returns a timer with a id parameter
    * @param  {number} id - The Timer to return
    */

  }, {
    key: "getTimerFromID",
    value: function getTimerFromID(id) {
      if (typeof id != "number") {
        console.error("Trying to get a Timer with an invalid input: ", id);
        return;
      }

      return this.Instance.timers.getValue(id);
    }
    /**
    * Searches for and returns if a timer already exists with a name
    * @param  {string} name - The Timer name to test
    */

  }, {
    key: "testTimerNameIsValid",
    value: function testTimerNameIsValid(name) {
      return this.getTimer(name) == undefined;
    }
    /**
    * Adds a timer to a singleton map and update references
    * @param  {Timer} timer - The Timer to add
    */

  }, {
    key: "addTimer",
    value: function addTimer(timer) {
      this.Instance.timers.setKeys([timer.name, timer.timerID], timer);
    }
    /**
    * Remove a timer from a singleton map and update references
    * @param  {Timer} timer - The Timer to remove
    */

  }, {
    key: "removeTimer",
    value: function removeTimer(timer) {
      this.Instance.timers.deleteValue(timer);
    }
  }]);

  return TimerController;
}();

TimerController_defineProperty(TimerController, "_instance", void 0);
;// CONCATENATED MODULE: ./Code/src/Timers/TimerSkipOffsetType.ts
/** Enum representing a offset skip type of a timer.
 */
var TimerSkipOffsetType;

(function (TimerSkipOffsetType) {
  TimerSkipOffsetType[TimerSkipOffsetType["NoSkip"] = 0] = "NoSkip";
  TimerSkipOffsetType[TimerSkipOffsetType["SkipAnyIncludingInstantLoops"] = 1] = "SkipAnyIncludingInstantLoops";
  TimerSkipOffsetType[TimerSkipOffsetType["SkipExcludingInstantLoops"] = 2] = "SkipExcludingInstantLoops";
})(TimerSkipOffsetType || (TimerSkipOffsetType = {}));
;// CONCATENATED MODULE: ./Code/src/Timers/Timer.ts
function Timer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Timer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Timer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Timer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Timer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Timer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/** Class representing a Timer that implements custom controls ontop of setTimeout to create a configurable timer.
 */

var Timer = /*#__PURE__*/function () {
  /**
  * Create a timer
  * @param  {string} name - The name of the timer
  * @param  {number} timerInterval - The time between each loop on this timer
  * @param  {boolean} startOnCreation - Determines if this timer should start running after creation
  * @param  {number} timerRunTime - The total time for this timer to run 
  * @param  {boolean} enableOffset - Determines if a timers loop should change based on browser time discrepancies
  * @param  {TimerSkipOffsetType} skipOffset - Determines if a timers should skip offsets if they are too large
  */
  function Timer(name, timingInterval) {
    var _this2 = this;

    var callbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var startOnCreation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var timerRunTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_SAFE_INTEGER;
    var enableOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var skipOffset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : TimerSkipOffsetType.NoSkip;

    Timer_classCallCheck(this, Timer);

    Timer_defineProperty(this, "_name", "");

    Timer_defineProperty(this, "_running", false);

    Timer_defineProperty(this, "_timeout", -1);

    Timer_defineProperty(this, "_timerID", -1);

    Timer_defineProperty(this, "_startDate", -1);

    Timer_defineProperty(this, "_timingInterval", -1);

    Timer_defineProperty(this, "_currentTimingInterval", -1);

    Timer_defineProperty(this, "_lastTickDate", -1);

    Timer_defineProperty(this, "_ticksRemaining", -1);

    Timer_defineProperty(this, "_ticksElapsed", -1);

    Timer_defineProperty(this, "_pausedAt", -1);

    Timer_defineProperty(this, "_lastCompletion", -1);

    Timer_defineProperty(this, "_enableOffset", false);

    Timer_defineProperty(this, "_intervalOffset", -1);

    Timer_defineProperty(this, "_skipOffset", TimerSkipOffsetType.NoSkip);

    Timer_defineProperty(this, "_skipOffsetCalculation", false);

    Timer_defineProperty(this, "_events", new PubSub());

    if (typeof name != "string" || name == "") {
      console.error("Trying to create a timer without a valid name: ", name);
      return;
    }

    if (typeof timingInterval != "number" || timingInterval <= -1) {
      console.error("Trying to create a timer without a valid timing interval: ", timingInterval);
      return;
    }

    if (typeof startOnCreation != "boolean" || startOnCreation == null) {
      console.error("Trying to create a timer without a valid start on creation: ", startOnCreation);
      return;
    }

    if (typeof enableOffset != "boolean" || enableOffset == null) {
      console.error("Trying to create a timer without a valid enable offset: ", enableOffset);
      return;
    }

    this.name = name;
    this.timerID = TimerController.Instance.uniqueID.generateUID();
    this.timingInterval = timingInterval;
    this.ticksRemaining = timerRunTime;
    this.enableOffset = enableOffset;
    this.startDate = TimerController.Time();
    this.skipOffset = skipOffset;

    if (Array.isArray(callbacks)) {
      callbacks.forEach(function (element) {
        _this2.events.subscribe("loopCompletion", element);
      });
    } else {
      this.events.subscribe("loopCompletion", callbacks);
    }

    TimerController.addTimer(this);

    if (startOnCreation) {
      this.start();
    }
  }
  /**
  * Start this Timer
  */


  Timer_createClass(Timer, [{
    key: "name",
    get: //** The name of this timer*/ 
    function get() {
      return this._name;
    },
    set: function set(name) {
      if (typeof name != "string") {
        console.error("Trying to set a Timer's name with an invalid input: ", name);
        return;
      }

      this._name = name;
    } //** Boolean representing if this timer is currently running*/ 

  }, {
    key: "running",
    get: function get() {
      return this._running;
    },
    set: function set(isRunning) {
      if (typeof isRunning != "boolean") {
        console.error("Trying to set a Timer's running status with an invalid input: ", isRunning);
        return;
      }

      this._running = isRunning;
    } //Callback
    //** The browser setTimeout for this timer*/

  }, {
    key: "timeout",
    get: function get() {
      return this._timeout;
    },
    set: function set(timeout) {
      if (typeof timeout != "number") {
        console.error("Trying to set a Timer's timeout reference with an invalid input: ", timeout);
        return;
      }

      this._timeout = timeout;
    } //** The ID of this timer*/ 

  }, {
    key: "timerID",
    get: function get() {
      return this._timerID;
    },
    set: function set(timerID) {
      if (typeof timerID != "number") {
        console.error("Trying to set a Timer's ID with an invalid input: ", timerID);
        return;
      }

      this._timerID = timerID;
    } //** The start time of this timer*/ 

  }, {
    key: "startDate",
    get: function get() {
      return this._startDate;
    },
    set: function set(date) {
      if (typeof date != "number") {
        console.error("Trying to set a Timer's start date with an invalid input: ", date);
        return;
      }

      this._startDate = date;
    } //** The time between loop completion*/ 

  }, {
    key: "timingInterval",
    get: function get() {
      return this._timingInterval;
    },
    set: function set(interval) {
      if (typeof interval != "number") {
        console.error("Trying to set a Timer's timing interval with an invalid input: ", interval);
        return;
      }

      this._timingInterval = interval;
    } //** The current time between loop completion*/ 

  }, {
    key: "currentTimingInterval",
    get: function get() {
      return this._currentTimingInterval;
    },
    set: function set(interval) {
      if (typeof interval != "number") {
        console.error("Trying to set a Timer's current timing interval with an invalid input: ", interval);
        return;
      }

      this._currentTimingInterval = interval;
    } //** The last time this timer has completed a loop*/

  }, {
    key: "lastTickDate",
    get: function get() {
      return this._lastTickDate;
    },
    set: function set(date) {
      if (typeof date != "number") {
        console.error("Trying to set a Timer's last tick date with an invalid input: ", date);
        return;
      }

      this._lastTickDate = date;
    } //** The miliseconds left of this timer*/

  }, {
    key: "ticksRemaining",
    get: function get() {
      return this._ticksRemaining;
    },
    set: function set(ticksRemaining) {
      if (typeof ticksRemaining != "number") {
        console.error("Trying to set a Timer's remaining time with an invalid input: ", ticksRemaining);
        return;
      }

      this._ticksRemaining = ticksRemaining;
    } //** The miliseconds that this timer has been running*/ 

  }, {
    key: "ticksElapsed",
    get: function get() {
      return this._ticksElapsed;
    },
    set: function set(ticksElapsed) {
      if (typeof ticksElapsed != "number") {
        console.error("Trying to set a Timer's elapsed time with an invalid input: ", ticksElapsed);
        return;
      }

      this._ticksElapsed = ticksElapsed;
    } //** The last time this timer was paused*/ 

  }, {
    key: "pausedAt",
    get: function get() {
      return this._pausedAt;
    },
    set: function set(date) {
      if (typeof date != "number") {
        console.error("Trying to set a Timer's paused time with an invalid input: ", date);
        return;
      }

      this._pausedAt = date;
    } //** The last time this timer was completed*/ 

  }, {
    key: "lastCompletion",
    get: function get() {
      return this._lastCompletion;
    },
    set: function set(date) {
      if (typeof date != "number") {
        console.error("Trying to set a Timer's last completion date with an invalid input: ", date);
        return;
      }

      this._lastCompletion = date;
    } //** Determines if this timer should take into account timer discrepancies in time*/

  }, {
    key: "enableOffset",
    get: function get() {
      return this._enableOffset;
    },
    set: function set(enabled) {
      if (typeof enabled != "boolean") {
        console.error("Trying to set a Timer's offset enabled with an invalid input: ", enabled);
        return;
      }

      this._enableOffset = enabled;
    } //** Calculate the difference between loop time and actual time*/

  }, {
    key: "intervalOffset",
    get: function get() {
      return this._intervalOffset;
    },
    set: function set(interval) {
      if (typeof interval != "number") {
        console.error("Trying to set a Timer's offset value with an invalid input: ", interval);
        return;
      }

      this._intervalOffset = interval;
    } //** Determines if this timer should apply offset to current loop time based on discrepancies*/

  }, {
    key: "skipOffset",
    get: function get() {
      return this._skipOffset;
    },
    set: function set(skipType) {
      if (!(skipType in TimerSkipOffsetType)) {
        console.error("Trying to set a Timer's offset skip type with an invalid input: ", skipType);
        return;
      }

      this._skipOffset = skipType;
    } //** Handles if the timer is currently skipping a loop*/

  }, {
    key: "skipOffsetCalculation",
    get: function get() {
      return this._skipOffsetCalculation;
    },
    set: function set(skipOffsetCalculation) {
      if (typeof skipOffsetCalculation != "boolean") {
        console.error("Trying to set a Timer's skip loop value with an invalid input: ", skipOffsetCalculation);
        return;
      }

      this._skipOffsetCalculation = skipOffsetCalculation;
    } //** Handles any custom events required by this Timer*/

  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.timingInterval == -1) {
        console.error("Trying to start a timer with an invalid timing interval: ", this.timingInterval);
        return;
      }

      this.running = true;
      this.lastTickDate = TimerController.Time();
      this.loop();
    }
    /**
    * Stop this Timer
    */

  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
      this.pausedAt = 0;
      window.clearTimeout(this.timeout);
      this.timeout = NaN;
    }
    /**
    * Restart this Timer
    */

  }, {
    key: "restart",
    value: function restart() {
      this.stop();
      this.start();
    }
    /**
    * Pause this Timer
    */

  }, {
    key: "pause",
    value: function pause() {
      if (this.running) {
        this.stop();
        this.pausedAt = TimerController.Time();
      }
    }
    /**
    * Resume this Timer
    */

  }, {
    key: "resume",
    value: function resume() {
      if (this.isPaused()) this.start();
    }
    /**
    * Resume this Timer
    */

  }, {
    key: "unpause",
    value: function unpause() {
      this.resume();
    }
    /**
    * Test if this Timer is currently pause
    */

  }, {
    key: "isPaused",
    value: function isPaused() {
      return this.pausedAt != -1;
    }
    /**
    * Handle the looping/countdown calculation of this timer
    */

  }, {
    key: "loop",
    value: function loop() {
      if (this.timingInterval == -1) {
        console.error("Trying to handle a timer's loop with an invalid timing interval: ", this.timingInterval);
        return;
      }

      this.currentTimingInterval = this.timingInterval;

      if (this.isPaused()) {
        this.currentTimingInterval = this.currentTimingInterval - (this.pausedAt - this.lastCompletion);
        this.pausedAt = -1;
      }

      var time = TimerController.Time();
      var timeSinceLastUpdate = time - this.lastTickDate;
      this.lastTickDate = time;
      this.ticksElapsed += timeSinceLastUpdate;
      this.ticksRemaining -= timeSinceLastUpdate;

      if (this.enableOffset && timeSinceLastUpdate != this.currentTimingInterval && this.skipOffsetCalculation == false) {
        if (this.skipOffset != TimerSkipOffsetType.NoSkip) {
          this.intervalOffset = this.currentTimingInterval - timeSinceLastUpdate;

          if (this.intervalOffset < -this.currentTimingInterval) {
            switch (this.skipOffset) {
              case TimerSkipOffsetType.SkipAnyIncludingInstantLoops:
                this.intervalOffset = -(this.currentTimingInterval & this.intervalOffset);
                break;

              case TimerSkipOffsetType.SkipExcludingInstantLoops:
                this.intervalOffset = -this.currentTimingInterval;
                break;
            }
          }
        } else {
          this.intervalOffset = 0;
        }
      } else {
        this.intervalOffset = 0;
        this.skipOffsetCalculation = false;
      }

      var _this = this;

      this.timeout = window.setTimeout(function () {
        return _this.runLoop();
      }, this.currentTimingInterval + this.intervalOffset);
    }
    /**
    * Handle the looping of this timer
    */

  }, {
    key: "runLoop",
    value: function runLoop() {
      var timer = this;
      this.events.publish("loopCompletion");
      this.lastCompletion = TimerController.Time();

      if (this.running) {
        if (this.ticksRemaining - this.currentTimingInterval < 0) {
          this.destroy();
          return;
        }

        this.loop();
      }
    }
    /**
    * Handle the destruction of this timer
    */

  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      this.events.publish("TimerDestroyed", this);
      this.events.clear();
      TimerController.removeTimer(this);
    }
  }]);

  return Timer;
}();
;// CONCATENATED MODULE: ./Definitions/Modules/Timers.ts




;// CONCATENATED MODULE: ./Definitions/Modules/Events.ts



;// CONCATENATED MODULE: ./Definitions/Modules/Utilities.ts




;// CONCATENATED MODULE: ./Definitions/WebpackAll.ts





TestExport = __webpack_exports__;
/******/ })()
;