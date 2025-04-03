(()=>{"use strict";function e(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";t.insertAdjacentElement(n,e.getElement())}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function i(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(e,t,n){return e.set(a(e,t),n),n}function o(e,t){return e.get(a(e,t))}function a(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}var l=new WeakMap,c=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}(this,l,null)},(t=[{key:"getTemplate",value:function(){throw new Error("Abstract method not implemented: getTemplate")}},{key:"getElement",value:function(){var e,t;return o(l,this)||r(l,this,(e=this.getTemplate(),(t=document.createElement("div")).innerHTML=e,t.firstElementChild)),o(l,this)}},{key:"removeElement",value:function(){r(l,this,null)}}])&&n(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,p(i.key),i)}}function p(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){return t=d(t),function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,f()?Reflect.construct(t,n||[],d(e).constructor):t.apply(e,n))}(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(t,e),n=t,(i=[{key:"getTemplate",value:function(){return'\n              <form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n            </div>\n'}}])&&u(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(c);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,h(i.key),i)}}function h(e){var t=function(e){if("object"!=b(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:t+""}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){return t=g(t),function(e,t){if(t&&("object"==b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,_()?Reflect.construct(t,n||[],g(e).constructor):t.apply(e,n))}(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(t,e),n=t,(i=[{key:"getTemplate",value:function(){return'\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>\n'}}])&&m(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(c);function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var P=function(e){return e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.toLocaleDateString("en-CA");if(!t)return n;var i=e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});return"".concat(n,"T").concat(i)},j=function(e){var t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getFullYear()).slice(2),r=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return"".concat(t,"/").concat(n,"/").concat(i," ").concat(r,":").concat(o)},x={Flight:[{id:1,type:"Flight",name:"Priority Boarding",price:10},{id:2,type:"Flight",name:"Extra Luggage",price:25},{id:3,type:"Flight",name:"Meal Service",price:15}],Train:[{id:4,type:"Train",name:"Window Seat",price:15},{id:5,type:"Train",name:"Extra Legroom",price:20},{id:6,type:"Train",name:"Quiet Zone",price:10}],Bus:[{id:7,type:"Bus",name:"Food Package",price:30},{id:8,type:"Bus",name:"Wi-Fi",price:5},{id:9,type:"Bus",name:"Power Outlet",price:3}],Sightseeing:[{id:10,type:"Sightseeing",name:"Guide",price:20},{id:11,type:"Sightseeing",name:"Skip the Line",price:40},{id:12,type:"Sightseeing",name:"VIP Access",price:50}],Taxi:[{id:13,type:"Taxi",name:"VIP Transfer",price:50},{id:14,type:"Taxi",name:"Pet-Friendly",price:15},{id:15,type:"Taxi",name:"Airport Shuttle",price:20}],Ship:[{id:16,type:"Ship",name:"Ocean View",price:30},{id:17,type:"Ship",name:"Premium Cabin",price:100},{id:18,type:"Ship",name:"All-Inclusive",price:150}],Drive:[{id:19,type:"Drive",name:"Luxury Car",price:75},{id:20,type:"Drive",name:"GPS Rental",price:10},{id:21,type:"Drive",name:"Child Seat",price:5}],"Check-in":[{id:22,type:"Check-in",name:"Express Check-in",price:5},{id:23,type:"Check-in",name:"Priority Check-in",price:15},{id:24,type:"Check-in",name:"Seat Selection",price:10}],Restaurant:[{id:25,type:"Restaurant",name:"Wine Pairing",price:30},{id:26,type:"Restaurant",name:"Tasting Menu",price:50},{id:27,type:"Restaurant",name:"Chef’s Special",price:40}]},E=[{id:1,name:"Barcelona",description:"\n      Cras aliquet varius magna, non porta ligula feugiat eget.\n      Fusce tristique felis at fermentum pharetra.\n      Aliquam id orci ut lectus varius viverra.\n      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.\n    ",photos:["https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp","https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp","https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp"]},{id:2,name:"Tokyo",description:"\n      Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.\n      Sed sed nisi sed augue convallis suscipit in sed felis.\n      Aliquam erat volutpat.\n    ",photos:["https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp"]},{id:3,name:"New York",description:"\n      Nunc fermentum tortor ac porta dapibus.\n      In rutrum ac purus sit amet tempus.\n    ",photos:["https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp","https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp"]},{id:4,name:"Sydney",description:"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Cras aliquet varius magna, non porta ligula feugiat eget.\n    ",photos:[]},{id:5,name:"Paris",description:"\n      Fusce tristique felis at fermentum pharetra.\n    ",photos:["https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp","https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp","https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp"]},{id:6,name:"Rome",description:"\n      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.\n      Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.\n    ",photos:["https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp"]},{id:7,name:"London",description:"\n      Aliquam erat volutpat.\n      Nunc fermentum tortor ac porta dapibus.\n    ",photos:["https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp","https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp"]},{id:8,name:"Berlin",description:"\n      Aliquam id orci ut lectus varius viverra.\n      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.\n      Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.\n      Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.\n      Sed sed nisi sed augue convallis suscipit in sed felis.\n    ",photos:["https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp"]},{id:9,name:"Amsterdam",description:"\n      Aliquam erat volutpat.\n    ",photos:["https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp","https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp","https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp","https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp"]}],k=[{dateFrom:new Date("2025-02-20T10:30:00"),dateTo:new Date("2025-02-20T11:30:00"),type:"Flight",city:"Barcelona",price:1500,availableOfferIds:[1,2,3],selectedOfferIds:[1],destinationId:1,isFavorite:!0},{dateFrom:new Date("2025-02-21T08:00:00"),dateTo:new Date("2025-02-21T10:00:00"),type:"Train",city:"Tokyo",price:350,availableOfferIds:[4,5,6],selectedOfferIds:[5,6],destinationId:2,isFavorite:!1},{dateFrom:new Date("2025-02-21T14:00:00"),dateTo:new Date("2025-02-21T17:00:00"),type:"Bus",city:"New York",price:80,availableOfferIds:[7,8,9],selectedOfferIds:[7],destinationId:3,isFavorite:!1},{dateFrom:new Date("2025-02-23T09:00:00"),dateTo:new Date("2025-02-23T13:00:00"),type:"Sightseeing",city:"Sydney",price:750,availableOfferIds:[10,11,12],selectedOfferIds:[10,12],destinationId:4,isFavorite:!0},{dateFrom:new Date("2025-02-24T11:00:00"),dateTo:new Date("2025-02-24T12:30:00"),type:"Taxi",city:"Paris",price:40,availableOfferIds:[13,14,15],selectedOfferIds:[13,14,15],destinationId:5,isFavorite:!1},{dateFrom:new Date("2025-02-26T15:00:00"),dateTo:new Date("2025-02-26T16:30:00"),type:"Ship",city:"Rome",price:600,availableOfferIds:[16,17,18],selectedOfferIds:[18],destinationId:6,isFavorite:!0},{dateFrom:new Date("2025-02-28T12:00:00"),dateTo:new Date("2025-02-28T13:30:00"),type:"Drive",city:"London",price:350,availableOfferIds:[19,20,21],selectedOfferIds:[21],destinationId:7,isFavorite:!1},{dateFrom:new Date("2025-03-01T09:00:00"),dateTo:new Date("2025-03-01T10:30:00"),type:"Check-in",city:"Berlin",price:200,availableOfferIds:[22,23,24],selectedOfferIds:[22,23],destinationId:8,isFavorite:!0},{dateFrom:new Date("2025-03-02T18:00:00"),dateTo:new Date("2025-03-02T18:30:00"),type:"Restaurant",city:"Amsterdam",price:500,availableOfferIds:[25,26,27],selectedOfferIds:[26,27],destinationId:9,isFavorite:!0},{dateFrom:null,dateTo:null,type:"",city:"",price:0,availableOfferIds:[],selectedOfferIds:[],destinationId:null,isFavorite:!1}];function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function I(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,F(i.key),i)}}function F(e){var t=function(e){if("object"!=C(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==C(t)?t:t+""}function D(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(D=function(){return!!e})()}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}var B=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t,n){return t=L(t),function(e,t){if(t&&("object"==C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,D()?Reflect.construct(t,n||[],L(e).constructor):t.apply(e,n))}(this,t)).routePoint=e,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(t,e),n=t,(i=[{key:"getTemplate",value:function(){return t=(e=this.routePoint).dateFrom,n=e.dateTo,i=e.type,r=e.city,o=e.availableOfferIds,a=e.selectedOfferIds,l=e.destinationId,c=t?j(t):"",s=n?j(n):"",u=l?E.find((function(e){return e.id===l})):{name:"",description:"",photos:[]},p=(x[i]||[]).filter((function(e){return o.includes(e.id)})).map((function(e){return'\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox visually-hidden" id="event-offer-'.concat(e.id,'" type="checkbox" name="event-offer-').concat(e.id,'" ').concat(a.includes(e.id)?"checked":"",'>\n      <label class="event__offer-label" for="event-offer-').concat(e.id,'">\n        <span class="event__offer-title">').concat(e.name,'</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">').concat(e.price,"</span>\n      </label>\n    </div>\n  ")})).join(""),f=u.photos.map((function(e){return'\n    <img class="event__photo" src="'.concat(e,'" alt="Event photo">\n  ')})).join(""),'\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/'.concat(i?"icons/".concat(i.toLowerCase(),".png"):"logo.png",'" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n\n              <div class="event__type-item">\n                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ').concat("taxi"===i.toLowerCase()?"checked":"",'>\n                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ').concat("bus"===i.toLowerCase()?"checked":"",'>\n                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ').concat("train"===i.toLowerCase()?"checked":"",'>\n                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ').concat("ship"===i.toLowerCase()?"checked":"",'>\n                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ').concat("drive"===i.toLowerCase()?"checked":"",'>\n                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ').concat("flight"===i.toLowerCase()?"checked":"",'>\n                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ').concat("check-in"===i.toLowerCase()?"checked":"",'>\n                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ').concat("sightseeing"===i.toLowerCase()?"checked":"",'>\n                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ').concat("restaurant"===i.toLowerCase()?"checked":"",'>\n                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n              </div>\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group event__field-group--destination">\n          <label class="event__label event__type-output" for="event-destination-1">\n            ').concat(i||"choose type",'\n          </label>\n          <input class="event__input event__input--destination" id="event-destination-1" type="text" name="event-destination" value="').concat(r||"",'" placeholder="choose city" list="destination-list-1">\n          <datalist id="destination-list-1">\n            <option value="Amsterdam"></option>\n            <option value="Geneva"></option>\n            <option value="Chamonix"></option>\n          </datalist>\n        </div>\n\n        <div class="event__field-group event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="').concat(c,'" placeholder="start time">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="').concat(s,'" placeholder="end time">\n        </div>\n\n        <div class="event__field-group event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input event__input--price" id="event-price-1" type="text" name="event-price" value="').concat(e.price||"",'" placeholder="price">\n        </div>\n\n        <button class="event__save-btn btn btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Cancel</button>\n      </header>\n      <section class="event__details">\n        <section class="event__section event__section--offers">\n          <h3 class="event__section-title event__section-title--offers">Offers</h3>\n          <div class="event__available-offers">\n            ').concat(p||"No offers",'\n          </div>\n        </section>\n\n        <section class="event__section event__section--destination">\n          <h3 class="event__section-title event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">').concat(u.description||"No description",'</p>\n\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              ').concat(f,"\n            </div>\n          </div>\n        </section>\n      </section>\n    </form>\n  ");var e,t,n,i,r,o,a,l,c,s,u,p,f}}])&&I(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(c);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function M(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,q(i.key),i)}}function q(e){var t=function(e){if("object"!=A(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==A(t)?t:t+""}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},H(e,t)}var W=function(e){var t,n,i,r,o,a=e.dateFrom,l=e.dateTo,c=e.type,s=e.city,u=e.price,p=e.availableOfferIds,f=e.selectedOfferIds,d=e.isFavorite,v=(r=a.toLocaleDateString("en-GB",{month:"short",day:"numeric"}).split(" "),o=2,t=function(e){if(Array.isArray(e))return e}(r)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,o,a,l=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=o.call(n)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return l}}(r,o)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=t[0],i=t[1],"".concat(i.toUpperCase()," ").concat(n)),y=P(a),b=P(l),m=T(a),h=T(a,!0),_=T(l,!0),g=function(e,t){var n=(t-e)/6e4;if(n<60)return"".concat(n,"M");if(n<1440){var i=Math.floor(n/60),r=n%60;return"".concat(String(i).padStart(2,"0"),"H ").concat(String(r).padStart(2,"0"),"M")}var o=Math.floor(n/1440),a=Math.floor(n%1440/60),l=n%60;return"".concat(String(o).padStart(2,"0"),"D ").concat(String(a).padStart(2,"0"),"H ").concat(String(l).padStart(2,"0"),"M")}(a,l),w=(x[c]||[]).filter((function(e){return p.includes(e.id)})).filter((function(e){return f.includes(e.id)})).map((function(e){return'\n    <li class="event__offer">\n      <span class="event__offer-title">'.concat(e.name,'</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">').concat(e.price,"</span>\n    </li>\n  ")})).join("");return'\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="'.concat(m,'">').concat(v,'</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/').concat(c.toLowerCase(),'.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">').concat(c," ").concat(s,'</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="').concat(h,'">').concat(y,'</time>\n            &mdash;\n            <time class="event__end-time" datetime="').concat(_,'">').concat(b,'</time>\n          </p>\n          <p class="event__duration">').concat(g,'</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">').concat(u,'</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ').concat(w,'\n        </ul>\n        <button class="event__favorite-btn ').concat(d?"event__favorite-btn--active":"",'" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  ')},V=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t,n){return t=G(t),function(e,t){if(t&&("object"==A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,N()?Reflect.construct(t,n||[],G(e).constructor):t.apply(e,n))}(this,t)).routePoint=e,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(t,e),n=t,(i=[{key:"getTemplate",value:function(){return W(this.routePoint)}}])&&M(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(c);function Y(e){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function z(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,U(i.key),i)}}function U(e){var t=function(e){if("object"!=Y(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=Y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Y(t)?t:t+""}function Q(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Q=function(){return!!e})()}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$(e,t)}var J=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){return t=Z(t),function(e,t){if(t&&("object"==Y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Q()?Reflect.construct(t,n||[],Z(e).constructor):t.apply(e,n))}(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(t,e),n=t,(i=[{key:"getTemplate",value:function(){return'\n  <ul class="trip-events__list"></ul>\n'}}])&&z(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(c);function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function X(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,ee(i.key),i)}}function ee(e){var t=function(e){if("object"!=K(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==K(t)?t:t+""}var te=function(){return e=function e(){var t,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,i=k,(n=ee(n="routePoints"))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i},(t=[{key:"getRoutePoints",value:function(){return this.routePoints}}])&&X(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function ne(e){return ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(e)}function ie(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,re(i.key),i)}}function re(e){var t=function(e){if("object"!=ne(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=ne(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==ne(t)?t:t+""}(new(function(){return t=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.eventsListContainer=new J,this.filterContainer=document.querySelector(".trip-controls__filters"),this.eventsContainer=document.querySelector(".trip-events"),this.routePointsModel=new te},(n=[{key:"init",value:function(){var t=this,n=this.routePointsModel.getRoutePoints();e(new y,this.filterContainer),e(new S,this.eventsContainer),e(this.eventsListContainer,this.eventsContainer),e(new B(n[9]),this.eventsListContainer.getElement()),n.forEach((function(n){n.city&&(e(new V(n),t.eventsListContainer.getElement()),e(new B(n),t.eventsListContainer.getElement()))}))}}])&&ie(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}())).init()})();
//# sourceMappingURL=bundle.db8351a6eec5cb7f9d5c.js.map