"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bufferutil";
exports.ids = ["vendor-chunks/bufferutil"];
exports.modules = {

/***/ "(ssr)/../anchor/node_modules/bufferutil/fallback.js":
/*!*****************************************************!*\
  !*** ../anchor/node_modules/bufferutil/fallback.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/**\n * Masks a buffer using the given mask.\n *\n * @param {Buffer} source The buffer to mask\n * @param {Buffer} mask The mask to use\n * @param {Buffer} output The buffer where to store the result\n * @param {Number} offset The offset at which to start writing\n * @param {Number} length The number of bytes to mask.\n * @public\n */ const mask = (source, mask, output, offset, length)=>{\n    for(var i = 0; i < length; i++){\n        output[offset + i] = source[i] ^ mask[i & 3];\n    }\n};\n/**\n * Unmasks a buffer using the given mask.\n *\n * @param {Buffer} buffer The buffer to unmask\n * @param {Buffer} mask The mask to use\n * @public\n */ const unmask = (buffer, mask)=>{\n    // Required until https://github.com/nodejs/node/issues/9006 is resolved.\n    const length = buffer.length;\n    for(var i = 0; i < length; i++){\n        buffer[i] ^= mask[i & 3];\n    }\n};\nmodule.exports = {\n    mask,\n    unmask\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vYW5jaG9yL25vZGVfbW9kdWxlcy9idWZmZXJ1dGlsL2ZhbGxiYWNrLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7OztDQVNDLEdBQ0QsTUFBTUEsT0FBTyxDQUFDQyxRQUFRRCxNQUFNRSxRQUFRQyxRQUFRQztJQUMxQyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUQsUUFBUUMsSUFBSztRQUMvQkgsTUFBTSxDQUFDQyxTQUFTRSxFQUFFLEdBQUdKLE1BQU0sQ0FBQ0ksRUFBRSxHQUFHTCxJQUFJLENBQUNLLElBQUksRUFBRTtJQUM5QztBQUNGO0FBRUE7Ozs7OztDQU1DLEdBQ0QsTUFBTUMsU0FBUyxDQUFDQyxRQUFRUDtJQUN0Qix5RUFBeUU7SUFDekUsTUFBTUksU0FBU0csT0FBT0gsTUFBTTtJQUM1QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUQsUUFBUUMsSUFBSztRQUMvQkUsTUFBTSxDQUFDRixFQUFFLElBQUlMLElBQUksQ0FBQ0ssSUFBSSxFQUFFO0lBQzFCO0FBQ0Y7QUFFQUcsT0FBT0MsT0FBTyxHQUFHO0lBQUVUO0lBQU1NO0FBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYW5jaG9yL25vZGVfbW9kdWxlcy9idWZmZXJ1dGlsL2ZhbGxiYWNrLmpzP2UzY2IiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBzb3VyY2UgVGhlIGJ1ZmZlciB0byBtYXNrXG4gKiBAcGFyYW0ge0J1ZmZlcn0gbWFzayBUaGUgbWFzayB0byB1c2VcbiAqIEBwYXJhbSB7QnVmZmVyfSBvdXRwdXQgVGhlIGJ1ZmZlciB3aGVyZSB0byBzdG9yZSB0aGUgcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IFRoZSBvZmZzZXQgYXQgd2hpY2ggdG8gc3RhcnQgd3JpdGluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIG1hc2suXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IG1hc2sgPSAoc291cmNlLCBtYXNrLCBvdXRwdXQsIG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRbb2Zmc2V0ICsgaV0gPSBzb3VyY2VbaV0gXiBtYXNrW2kgJiAzXTtcbiAgfVxufTtcblxuLyoqXG4gKiBVbm1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byB1bm1hc2tcbiAqIEBwYXJhbSB7QnVmZmVyfSBtYXNrIFRoZSBtYXNrIHRvIHVzZVxuICogQHB1YmxpY1xuICovXG5jb25zdCB1bm1hc2sgPSAoYnVmZmVyLCBtYXNrKSA9PiB7XG4gIC8vIFJlcXVpcmVkIHVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvOTAwNiBpcyByZXNvbHZlZC5cbiAgY29uc3QgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGJ1ZmZlcltpXSBePSBtYXNrW2kgJiAzXTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IG1hc2ssIHVubWFzayB9O1xuIl0sIm5hbWVzIjpbIm1hc2siLCJzb3VyY2UiLCJvdXRwdXQiLCJvZmZzZXQiLCJsZW5ndGgiLCJpIiwidW5tYXNrIiwiYnVmZmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../anchor/node_modules/bufferutil/fallback.js\n");

/***/ }),

/***/ "(ssr)/../anchor/node_modules/bufferutil/index.js":
/*!**************************************************!*\
  !*** ../anchor/node_modules/bufferutil/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\ntry {\n    module.exports = __webpack_require__(/*! node-gyp-build */ \"node-gyp-build\")(__dirname);\n} catch (e) {\n    module.exports = __webpack_require__(/*! ./fallback */ \"(ssr)/../anchor/node_modules/bufferutil/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vYW5jaG9yL25vZGVfbW9kdWxlcy9idWZmZXJ1dGlsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSTtJQUNGQSxPQUFPQyxPQUFPLEdBQUdDLG1CQUFPQSxDQUFDLHdDQUFrQkM7QUFDN0MsRUFBRSxPQUFPQyxHQUFHO0lBQ1ZKLDZHQUF5QjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9hbmNob3Ivbm9kZV9tb2R1bGVzL2J1ZmZlcnV0aWwvaW5kZXguanM/ZmUwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnbm9kZS1neXAtYnVpbGQnKShfX2Rpcm5hbWUpO1xufSBjYXRjaCAoZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFsbGJhY2snKTtcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIl9fZGlybmFtZSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../anchor/node_modules/bufferutil/index.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/bufferutil/fallback.js":
/*!**********************************************!*\
  !*** ../node_modules/bufferutil/fallback.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n/**\n * Masks a buffer using the given mask.\n *\n * @param {Buffer} source The buffer to mask\n * @param {Buffer} mask The mask to use\n * @param {Buffer} output The buffer where to store the result\n * @param {Number} offset The offset at which to start writing\n * @param {Number} length The number of bytes to mask.\n * @public\n */ const mask = (source, mask, output, offset, length)=>{\n    for(var i = 0; i < length; i++){\n        output[offset + i] = source[i] ^ mask[i & 3];\n    }\n};\n/**\n * Unmasks a buffer using the given mask.\n *\n * @param {Buffer} buffer The buffer to unmask\n * @param {Buffer} mask The mask to use\n * @public\n */ const unmask = (buffer, mask)=>{\n    // Required until https://github.com/nodejs/node/issues/9006 is resolved.\n    const length = buffer.length;\n    for(var i = 0; i < length; i++){\n        buffer[i] ^= mask[i & 3];\n    }\n};\nmodule.exports = {\n    mask,\n    unmask\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2J1ZmZlcnV0aWwvZmFsbGJhY2suanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7O0NBU0MsR0FDRCxNQUFNQSxPQUFPLENBQUNDLFFBQVFELE1BQU1FLFFBQVFDLFFBQVFDO0lBQzFDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRCxRQUFRQyxJQUFLO1FBQy9CSCxNQUFNLENBQUNDLFNBQVNFLEVBQUUsR0FBR0osTUFBTSxDQUFDSSxFQUFFLEdBQUdMLElBQUksQ0FBQ0ssSUFBSSxFQUFFO0lBQzlDO0FBQ0Y7QUFFQTs7Ozs7O0NBTUMsR0FDRCxNQUFNQyxTQUFTLENBQUNDLFFBQVFQO0lBQ3RCLHlFQUF5RTtJQUN6RSxNQUFNSSxTQUFTRyxPQUFPSCxNQUFNO0lBQzVCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRCxRQUFRQyxJQUFLO1FBQy9CRSxNQUFNLENBQUNGLEVBQUUsSUFBSUwsSUFBSSxDQUFDSyxJQUFJLEVBQUU7SUFDMUI7QUFDRjtBQUVBRyxPQUFPQyxPQUFPLEdBQUc7SUFBRVQ7SUFBTU07QUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYnVmZmVydXRpbC9mYWxsYmFjay5qcz9iNmI2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNYXNrcyBhIGJ1ZmZlciB1c2luZyB0aGUgZ2l2ZW4gbWFzay5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gc291cmNlIFRoZSBidWZmZXIgdG8gbWFza1xuICogQHBhcmFtIHtCdWZmZXJ9IG1hc2sgVGhlIG1hc2sgdG8gdXNlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gb3V0cHV0IFRoZSBidWZmZXIgd2hlcmUgdG8gc3RvcmUgdGhlIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBUaGUgb2Zmc2V0IGF0IHdoaWNoIHRvIHN0YXJ0IHdyaXRpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBieXRlcyB0byBtYXNrLlxuICogQHB1YmxpY1xuICovXG5jb25zdCBtYXNrID0gKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCkgPT4ge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0W29mZnNldCArIGldID0gc291cmNlW2ldIF4gbWFza1tpICYgM107XG4gIH1cbn07XG5cbi8qKlxuICogVW5tYXNrcyBhIGJ1ZmZlciB1c2luZyB0aGUgZ2l2ZW4gbWFzay5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gdW5tYXNrXG4gKiBAcGFyYW0ge0J1ZmZlcn0gbWFzayBUaGUgbWFzayB0byB1c2VcbiAqIEBwdWJsaWNcbiAqL1xuY29uc3QgdW5tYXNrID0gKGJ1ZmZlciwgbWFzaykgPT4ge1xuICAvLyBSZXF1aXJlZCB1bnRpbCBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzkwMDYgaXMgcmVzb2x2ZWQuXG4gIGNvbnN0IGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBidWZmZXJbaV0gXj0gbWFza1tpICYgM107XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBtYXNrLCB1bm1hc2sgfTtcbiJdLCJuYW1lcyI6WyJtYXNrIiwic291cmNlIiwib3V0cHV0Iiwib2Zmc2V0IiwibGVuZ3RoIiwiaSIsInVubWFzayIsImJ1ZmZlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/bufferutil/fallback.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/bufferutil/index.js":
/*!*******************************************!*\
  !*** ../node_modules/bufferutil/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\ntry {\n    module.exports = __webpack_require__(/*! node-gyp-build */ \"node-gyp-build\")(__dirname);\n} catch (e) {\n    module.exports = __webpack_require__(/*! ./fallback */ \"(ssr)/../node_modules/bufferutil/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2J1ZmZlcnV0aWwvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJO0lBQ0ZBLE9BQU9DLE9BQU8sR0FBR0MsbUJBQU9BLENBQUMsd0NBQWtCQztBQUM3QyxFQUFFLE9BQU9DLEdBQUc7SUFDVkosc0dBQXlCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9idWZmZXJ1dGlsL2luZGV4LmpzPzBkOWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG50cnkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ25vZGUtZ3lwLWJ1aWxkJykoX19kaXJuYW1lKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhbGxiYWNrJyk7XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJfX2Rpcm5hbWUiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/bufferutil/index.js\n");

/***/ })

};
;