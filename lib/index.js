"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  var indexName = void 0,
      dateRange = void 0,
      metrics = void 0;
  try {
    indexName = Helper.indexNameChecker(arg.indexName);
    dateRange = Helper.dateRangeChecker(arg.date);
    metrics = Helper.metricsChecker(arg.metrics);
    return Helper.getHistoricalData(indexName, dateRange, metrics);
  } catch (e) {
    return Promise.reject(e);
  }
};

var _Helper = require("./Helper");

var Helper = _interopRequireWildcard(_Helper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
//# sourceMappingURL=index.js.map