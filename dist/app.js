/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://prueba_LikeU/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/services */ \"./src/service/services.js\");\n\r\n\r\n\r\n/** Función que renderiza las cards con los personajes*/\r\nasync function showCard() {\r\n\r\n    let infoCharacter = await (0,_service_services__WEBPACK_IMPORTED_MODULE_1__.apiCharacters)();\r\n    let main = document.querySelector('#main');\r\n    \r\n    infoCharacter.forEach(item => {\r\n        let cardItem = document.createElement('div')\r\n        cardItem.innerHTML = ` \r\n        <div class=\"card text-dark bg-light mb-3\" style=\"border-radius: 0.5em; cursor:pointer;\" \r\n            data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasRight\" aria-controls=\"offcanvasRight\">\r\n            <div class=\"card-header text-center\"><strong>${item.name}</strong></div>\r\n            <div class=\"card-body\">\r\n                <img src=\"${item.image}\" class=\"img-fluid\" alt=\"Avatar\" style=\"width: 100%; border-radius: 0.5em;\">\r\n            </div>\r\n        </div>\r\n        `\r\n        /**Muestra un offcanvas con información del personaje seleccionado */\r\n        cardItem.addEventListener(\"mouseenter\", function (event) {\r\n            event.onclick = showDetailCharacter(item.id);\r\n        });\r\n        /** Hover sobre las cards */\r\n        cardItem.addEventListener(\"mouseover\", function( event ) {\r\n            event.target.style.transform = `scale(1.009)`;\r\n            setTimeout(function() {\r\n                event.target.style.transform = \"\";\r\n            }, 500);\r\n        });\r\n        /** Agrega cada card al elemento main */\r\n        main?.appendChild(cardItem);\r\n    })\r\n}\r\n\r\n/** Función que muestra el detalle del personaje */\r\nasync function showDetailCharacter(itemId) {\r\n    /** infoCharacter representa la información del personaje traido de la api*/\r\n    let infoCharacter = await (0,_service_services__WEBPACK_IMPORTED_MODULE_1__.apiShowDetailCharacter)(itemId);\r\n    let totalEpisodes = infoCharacter.episode;\r\n    let totalNameEpisode = [];\r\n\r\n    let title = document.querySelector('h5');\r\n    title.innerHTML = infoCharacter.name;\r\n    document.getElementById(\"avatar\").src = infoCharacter.image;\r\n\r\n    let species = document.querySelector('#infoGeneral');\r\n    species.innerHTML = `\r\n        <p>${infoCharacter.status} - ${infoCharacter.species}</p>\r\n        <p><strong> Género:</strong> ${infoCharacter.gender}</p>\r\n        `\r\n    /** Renderiza todos los episodios de la info del personaje y muestra el nombre de cada uno */\r\n    totalEpisodes.forEach(async (item) => {    \r\n        let apiEpisodes = await fetch(`${item}`);\r\n        let data = await apiEpisodes.json();\r\n       \r\n        let ol = document.querySelector('ol') \r\n        /**Guarda en localstorage el id del episodio */\r\n        totalNameEpisode.push( `<li>\r\n            <a href=\"episode.html\" onclick = 'localStorage.setItem(\"idUrl\", ${data.id})'; \r\n                style=\"text-decoration: underline; color: blue; cursor:pointer;\">${data.name}\r\n            </a></li>`\r\n        )\r\n        /** Renderiza la lista de los nombres de los episodios */\r\n        ol.innerHTML = totalNameEpisode.join('');\r\n    });\r\n}\r\n\r\nshowCard();\r\n\n\n//# sourceURL=webpack://prueba_LikeU/./src/index.js?");

/***/ }),

/***/ "./src/service/services.js":
/*!*********************************!*\
  !*** ./src/service/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiCharacters\": () => (/* binding */ apiCharacters),\n/* harmony export */   \"apiShowDetailCharacter\": () => (/* binding */ apiShowDetailCharacter),\n/* harmony export */   \"apiShowDetailEpisode\": () => (/* binding */ apiShowDetailEpisode)\n/* harmony export */ });\nconst urlCharacter=\"https://rickandmortyapi.com/api/character\";\r\nconst urlEpisode=\"https://rickandmortyapi.com/api/episode\";\r\n\r\n/** Función que retorna la información de todos los personajes */\r\nasync function apiCharacters() {\r\n    \r\n    let api = await fetch(urlCharacter);\r\n    let characters = await api.json(); \r\n    let informationCharacter = characters.results;\r\n   \r\n    return informationCharacter; \r\n}\r\n/** Función que retorna la información de un personaje */\r\nasync function apiShowDetailCharacter(itemId) {\r\n\r\n    let id = itemId;\r\n    let api = await fetch(`${urlCharacter}/${id}`);\r\n    let character = await api.json();\r\n   \r\n    console.log('Episodios del personaje', character.episode); \r\n    console.log('Personaje', character); \r\n    \r\n    return character;\r\n}\r\n/** Función que retorna la información del episodio */\r\nasync function apiShowDetailEpisode() {\r\n\r\n    let idUrl = localStorage.getItem('idUrl');\r\n    let api = await fetch(`${urlEpisode}/${idUrl}`);\r\n    let informationEpisode = await api.json();\r\n   \r\n    console.log('Información del episodio', informationEpisode); \r\n    \r\n    return informationEpisode;\r\n}\n\n//# sourceURL=webpack://prueba_LikeU/./src/service/services.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;