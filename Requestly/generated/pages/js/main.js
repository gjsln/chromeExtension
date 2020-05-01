window.RQ = window.RQ || {};

RQ.configs = {
  browser: ['chrome', 'firefox'][0],
  env: ['local', 'beta', 'prod'][1],
  version: '19.9.19'
};

var betaFirebaseConfig = {
  apiKey: "AIzaSyDLQVMq0xNdzr3SNrimDyvIEdBBQhpw-t8",
  authDomain: "requestly-dev.firebaseapp.com",
  databaseURL: "https://requestly-dev.firebaseio.com",
  projectId: "requestly-dev",
  storageBucket: "requestly-dev.appspot.com",
  messagingSenderId: "553216647714"
};

var prodFirebaseConfig = {
  apiKey: "AIzaSyC2WOxTtgKH554wCezEJ4plxnMNXaUSFXY",
  authDomain: "app.requestly.in",
  databaseURL: "https://requestly.firebaseio.com",
  projectId: "project-7820168409702389920",
  storageBucket: "project-7820168409702389920.appspot.com",
  messagingSenderId: "911299702852"
};

var envConfigs = {
  local: {
    WEB_URL: 'http://localhost:3000',
    firebaseConfig: betaFirebaseConfig,
    logLevel: 'debug'
  },
  beta: {
    WEB_URL: 'https://beta.requestly.in',
    firebaseConfig: betaFirebaseConfig,
    logLevel: 'debug'
  },
  prod: {
    WEB_URL: 'https://app.requestly.in',
    firebaseConfig: prodFirebaseConfig,
    logLevel: 'none'
  }
};

var browserConfigs = {
  chrome: {
    storageType: 'sync',
    contextMenuContexts: ['browser_action']
  },
  firefox: {
    storageType: 'local',
    contextMenuContexts: ['all']
  }
};

Object.assign(
  RQ.configs,
  envConfigs[RQ.configs.env],
  browserConfigs[RQ.configs.browser]
);

window.RQ = window.RQ || {};

RQ.VERSION = 3;

RQ.FILE_PICKER_URL = "/library/filepicker";

RQ.VERSIONS = {
  REPLACE_RULE: 2
};

// Url which gets opened when User clicks on browserAction (requestly icon) in toolbar
RQ.RULES_PAGE_URL = RQ.configs.WEB_URL + "/rules/";

RQ.RULES_PAGE_URL_PATTERN = RQ.RULES_PAGE_URL + "*";

RQ.PRICING_PAGE_URL = RQ.configs.WEB_URL + "/pricing/";

RQ.GOODBYE_PAGE_URL = RQ.configs.WEB_URL + "/goodbye/";

RQ.BLACK_LIST_DOMAINS = ["requestly.in"];

RQ.STRING_CONSTANTS = {
  SLASH: "/"
};

RQ.LIMITS = {
  NUMBER_SHARED_LISTS: 10
};

RQ.DEFAULTS = {
  APP_INIT_TIMEOUT: 5000
};

RQ.OBJECT_TYPES = {
  GROUP: "group",
  RULE: "rule"
};

RQ.RULE_TYPES = {
  REDIRECT: "Redirect",
  CANCEL: "Cancel",
  REPLACE: "Replace",
  HEADERS: "Headers",
  USERAGENT: "UserAgent",
  SCRIPT: "Script",
  QUERYPARAM: "QueryParam"
};

RQ.HEADER_NAMES = {
  USER_AGENT: "User-Agent"
};

RQ.RULE_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive"
};

RQ.RULE_KEYS = {
  URL: "Url",
  HOST: "host",
  PATH: "path",
  HEADER: "Header",
  OVERWRITE: "Overwrite",
  IGNORE: "Ignore",
  PARAM: "param",
  VALUE: "value"
};

RQ.URL_COMPONENTS = {
  PROTOCOL: "Protocol",
  URL: "Url",
  HOST: "host",
  PATH: "path",
  QUERY: "query",
  HASH: "hash"
};

RQ.RULE_OPERATORS = {
  EQUALS: "Equals",
  CONTAINS: "Contains",
  MATCHES: "Matches",
  WILDCARD_MATCHES: "Wildcard_Matches"
};

RQ.RULE_SOURCE_FILTER_TYPES = {
  PAGE_URL: "pageUrl",
  RESOURCE_TYPE: "resourceType",
  REQUEST_METHOD: "requestMethod"
};

RQ.MODIFICATION_TYPES = {
  ADD: "Add",
  REMOVE: "Remove",
  REMOVE_ALL: "Remove All",
  MODIFY: "Modify",
  REPLACE: "Replace"
};

RQ.NEED_HELP_QUERY_TYPES = {
  FEEDBACK: "Feedback",
  BUG: "Bug",
  QUESTION: "Question",
  FEATURE_REQUEST: "FeatureRequest"
};

RQ.CLIENT_MESSAGES = {
  GET_SCRIPT_RULES: "getScriptRules",
  GET_USER_AGENT_RULE_PAIRS: "getUserAgentRulePairs",
  NOTIFY_RULES_APPLIED: "notifyRulesApplied"
};

RQ.EXTENSION_MESSAGES = {
  FOCUS_TAB: "focusTab",
  GET_FULL_LOGS: "getFullLogs",
  CLEAR_LOGS_FOR_TAB: "clearLogsForTab",
  CLEAR_LOGS_FOR_DOMAIN: "clearLogsForDomain",
  GET_FAVOURITE_RULES: "getFavouriteRules",
  REMOTE_RULES_SETTINGS_CHANGED: 'remoteRulesSettingsChanged'
};

RQ.HEADERS_TARGET = {
  REQUEST: "Request",
  RESPONSE: "Response"
};

RQ.REQUEST_TYPES = {
  MAIN_FRAME: "mainFrame",
  PAGE_REQUEST: "pageRequest"
};

RQ.SCRIPT_TYPES = {
  URL: "url",
  CODE: "code"
};

RQ.SCRIPT_CODE_TYPES = {
  JS: "js",
  CSS: "css"
};

RQ.SCRIPT_LOAD_TIME = {
  BEFORE_PAGE_LOAD: "beforePageLoad",
  AFTER_PAGE_LOAD: "afterPageLoad"
};

RQ.SCRIPT_LIBRARIES = {
  JQUERY: { name: "jQuery", src: "https://code.jquery.com/jquery-2.2.4.js" },
  UNDERSCORE: {
    name: "Underscore",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"
  }
};

RQ.RESPONSE_CODES = {
  NOT_FOUND: 404
};

RQ.STORAGE_KEYS = {
  REQUESTLY_SETTINGS: "rq_settings",
  USER_INFO: "user_info",
  LATEST_NOTIFICATION_READ_BY_USER: "latestNotificationReadId"
};

RQ.MESSAGES = {
  DELETE_ITEMS_NO_SELECTION_WARNING:
    "Please select one or more rules to delete.",
  DELETE_ITEMS: "Are you sure you want to delete the selected items?",
  DELETE_GROUP_WITH_RULES_WARNING:
    "There are some rules contained in this group. Please delete or ungroup them before deleting the group.",
  DELETE_GROUP: "Are you sure you want to delete the group?",
  UNGROUP_ITEMS_NO_SELECTION_WARNING:
    "Please select one or more rules to ungroup.",
  UNGROUP_ITEMS: "Are you sure you want to ungroup the selected items?",
  SIGN_IN_TO_VIEW_SHARED_LISTS:
    "Please login with Google to view your Shared Lists.",
  SIGN_IN_TO_CREATE_SHARED_LISTS:
    "Please login with Google to share the selected rules",
  SIGN_IN_TO_SUBMIT_QUERY:
    "Please login with Google to contact our support team.",
  ERROR_AUTHENTICATION:
    "Received some error in authentication. Please try again later!!",
  SHARED_LISTS_LIMIT_REACHED: `You can not create more than ${
    RQ.LIMITS.NUMBER_SHARED_LISTS
  } shared lists. 
    Please <a href="/pricing" target="_blank">upgrade your plan</a> to increase the limits.`,
  ERROR_TAB_FOCUS: "The tab cannot be focused, as it might have been closed.",
  DEACTIVATE_REQUESTLY_MENU_OPTION: "Deactivate Requestly"
};

RQ.RESOURCES = {
  EXTENSION_ICON: "/resources/images/48x48.png",
  EXTENSION_ICON_GREYSCALE: "/resources/images/48x48_greyscale.png",
  EXTENSION_ICON_GREEN: "/resources/images/48x48_green.png"
};

RQ.GA_EVENTS = {
  CATEGORIES: {
    RULES: "rules",
    RULE: "rule",
    GROUP: "group",
    USER: "user",
    SHARED_LIST: "shared list",
    RULE_LOGS: "rule logs",
    EXTENSION: "extension",
    IN_APP_NOTIFICATION: "InAppNotification",
    NEED_HELP_FEATURE: "need help feature"
  },
  ACTIONS: {
    MODIFIED: "modified",
    CREATED: "created",
    DELETED: "deleted",
    ACTIVATED: "activated",
    DEACTIVATED: "deactivated",
    IMPORTED: "imported",
    EXPORTED: "exported",
    LIMIT_REACHED: "limit reached",
    AUTHENTICATED: "authenticated",
    VIEWED: "viewed",
    CLICKED: "clicked",
    COPIED: "copied",
    MARKED_FAVOURITE: "marked favourite",
    UNMARKED_FAVOURITE: "unmarked favourite",
    WORKFLOW_STARTED: "workflow started",
    ALREADY_LOGIN: "already login",
    LOGIN_REQUESTED: "login requested",
    LOGIN_DONE: "login done",
    LOGIN_REJECTED: "login rejected",
    FORM_SUBMITTED: "form submitted",
    FORM_REJECTED: "form rejected",
    INVALID_SUBMIT: "invalid submit",
    GROUPED: "grouped",
    UNGROUPED: "ungrouped"
  }
};

RQ.USER = {
  AUTHORIZED: "authorized-user",
  UNAUTHORIZED: "unauthorized-user"
};

RQ.FIREBASE_NODES = {
  USERS: "users",
  PUBLIC: "public",
  SHARED_LISTS: "sharedLists",
  FEEDBACK: "feedback"
};

RQ.DATASTORE = {
  ACTIONS: {
    CHECK_USER_AUTH: "check:userAuthenticated",
    AUTHENTICATE: "authenticate",
    FETCH_USER_DETAILS: "fetchUserDetails",
    GETVALUE: "getValue",
    SETVALUE: "setValue"
  }
};

RQ.MESSAGE_HANDLER = {
  ACTIONS: {
    SUBMIT_EVENT: "submitEvent",
    SUBMIT_ATTR: "submitAttr"
  },
  MESSAGE_TYPES: {
    EVENT: "event",
    ATTRIBUTE: "attribute"
  },
  SINKS: {
    CUSTOMERLY: "customerly"
  }
};

RQ.htmlEncode = function(value) {
  return $("<div/>")
    .text(value)
    .html();
};

RQ.getSharedURL = function(shareId, sharedListName) {
  const formattedSharedListName = sharedListName
    .replace(new RegExp(" +|/+", "g"), "-")
    .replace(/-+/g, "-");
  return (
    RQ.RULES_PAGE_URL + "#sharedList/" + shareId + "-" + formattedSharedListName
  );
};

RQ.getSharedListTimestamp = function(sharedListId) {
  return sharedListId.split("-")[0];
};

RQ.fireAjax = function(requestURL, async) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', requestURL, async);
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject();
        }
      }
    };
    request.send();
  });
};
window.RQ = window.RQ || {};
RQ.Utils = RQ.Utils || {};

RQ.Utils.regexFormat = '^\/(.+)\/(|i|g|ig|gi)$';

RQ.Utils.isValidRegex = function(regexStr) {
  return regexStr.search(new RegExp(RQ.Utils.regexFormat)) !== -1;
};

RQ.Utils.toRegex = function(regexStr) {
  var isRegexStringValid = this.isValidRegex(regexStr),
    matchRegExp;

  if (!isRegexStringValid) {
    return null;
  }
  matchRegExp = regexStr.match(new RegExp(RQ.Utils.regexFormat));

  return new RegExp(matchRegExp[1], matchRegExp[2]);
};

RQ.Utils.isValidUrl = function(url) {
  return url.search(/^http:|https:|ftp:|javascript:/) === 0;
};

RQ.Utils.getId = function() {
  return Date.now();
};

RQ.Utils.getCurrentTime = function() {
  return Date.now();
};

RQ.Utils.formatDate = function(dateInMilis, format) {
  const d = new Date(dateInMilis);

  if (dateInMilis && format === 'yyyy-mm-dd') {
    let month = d.getMonth() + 1,
      date = d.getDate();

    date = (String(date).length) < 2 ? ('0' + date) : String(date);
    month = (String(month).length) < 2 ? ('0' + month) : String(month);

    return d.getFullYear() + '-' + month + '-' + date;
  }
};

RQ.Utils.reloadPage = function(wait) {
  wait = wait || 0;

  setTimeout(function () {
    window.location.reload();
  }, wait);
};

RQ.Utils.submitEvent = function(eventCategory, eventAction, eventLabel, eventValue) {
  if (!eventLabel) {
    eventLabel = eventCategory + ' ' + eventAction;
  }

  RQ.ContentScriptMessageHandler.sendMessage({
    action: RQ.MESSAGE_HANDLER.ACTIONS.SUBMIT_EVENT,
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel,
    eventValue: eventValue
  });
};

RQ.Utils.submitAttr = function(attr, value) {
  const messageToSend = {
    action: RQ.MESSAGE_HANDLER.ACTIONS.SUBMIT_ATTR,
    attr: attr,
    value: value
  };

  RQ.ContentScriptMessageHandler.sendMessage(messageToSend);
};

RQ.Utils.removeLastPart = function(str, separater) {
  str = str || '';

  // Return original string when separator is not present
  if (str.indexOf(separater) === -1) {
    return str;
  }

  str = str.split(separater);

  // Remove last part
  str.length--;

  return str.join(separater);
};

RQ.Utils.setCookie = function(name, value, maxAge) {
  document.cookie = name + '=' + value + '; path=/' + '; max-age=' + maxAge;
};

RQ.Utils.readCookie = function(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }

  return null;
};

RQ.Utils.eraseCookie = function (name) {
  RQ.Utils.setCookie(name, '', 1);
};

/**
 *
 * @param url Url from which component has to be extracted
 * @param name Url component name - host, path, url, query, fragment etc.
 */
RQ.Utils.extractUrlComponent = function(url, name) {
  if (!window.dummyAnchor) {
    window.dummyAnchor = document.createElement('a');
  }

  window.dummyAnchor.href = url;

  switch(name) {
    case RQ.URL_COMPONENTS.URL: return url;
    case RQ.URL_COMPONENTS.PROTOCOL: return window.dummyAnchor.protocol;
    case RQ.URL_COMPONENTS.HOST: return window.dummyAnchor.host;
    case RQ.URL_COMPONENTS.PATH: return window.dummyAnchor.pathname;
    case RQ.URL_COMPONENTS.QUERY: return window.dummyAnchor.search;
    case RQ.URL_COMPONENTS.HASH: return window.dummyAnchor.hash;
  }

  console.error('Invalid source key', url, name);
};

/**
 *
 * @param queryString e.g. ?a=1&b=2 or a=1 or ''
 * @returns object { paramName -> [value1, value2] }
 */
RQ.Utils.getQueryParamsMap = function(queryString) {
  var map = {},
    queryParams;

  if (!queryString || queryString === '?') {
    return map;
  }

  if (queryString[0] === '?') {
    queryString = queryString.substr(1);
  }

  queryParams = queryString.split('&');

  queryParams.forEach(function(queryParam) {
    var paramName = queryParam.split('=')[0],
      paramValue = queryParam.split('=')[1];

    // We are keeping value of param as array so that in future we can support multiple param values of same name
    // And we do not want to lose the params if url already contains multiple params of same name
    map[paramName] = map[paramName] || [];
    map[paramName].push(paramValue);
  });

  return map;
};

/**
 * Convert a map to keyvalue pair string (Used for query params)
 * @param queryParamsMap
 * @returns {string}
 */
RQ.Utils.convertQueryParamMapToString = function(queryParamsMap) {
  var queryParamsArr = [];

  for (var paramName in queryParamsMap) {
    var values = queryParamsMap[paramName] || [];

    values.forEach(function(paramValue) {
      if (typeof paramValue === 'undefined') {
        queryParamsArr.push(paramName);
      } else {
        queryParamsArr.push(paramName + '=' + paramValue);
      }
    });
  }

  return queryParamsArr.join('&');
};

RQ.Utils.getUrlWithoutQueryParamsAndHash = function(url) {
  var urlWithoutHash = url.split('#')[0];

  return urlWithoutHash.split('?')[0];
};

window.RQ = window.RQ || {};

RQ.ContentScriptMessageHandler = {
  eventCallbackMap: {},
  requestId: 1,

  constants: {
    CONTENT_SCRIPT: 'content_script',
    PAGE_SCRIPT: 'page_script',
    DOMAIN: RQ.configs.WEB_URL,
    SOURCE_FIELD: 'source',
    ACTION_USER_LOGGED_IN: 'user:loggedIn'
  },

  addMessageListener: function() {
    window.addEventListener('message', this.handleMessageReceived.bind(this));
  },

  getSource: function() {
    return this.constants.CONTENT_SCRIPT;
  },

  registerCallback: function(message, callback) {
    if (!callback) return;

    // Message has requestId when we are sending response
    const requestIdToUse = this.requestId++;
    this.eventCallbackMap[message.action + '_' + requestIdToUse] = callback;
    message.requestId = requestIdToUse;
  },

  invokeCallback: function(event) {
    const callbackRef = this.eventCallbackMap[event.data.action + '_' + event.data.requestId];

    if (typeof callbackRef === 'function') {
      // We should remove the entry from map first before executing the callback otherwise we will store stale references of functions
      delete this.eventCallbackMap[event.data.action];
      callbackRef.call(this, event.data.response);
    }
  },

  sendMessage: function(message, callback) {
    if (!message.action) {
      Logger.error('Invalid message. Must contain some action');
      return;
    }

    this.registerCallback(message, callback);

    message[this.constants.SOURCE_FIELD] = this.getSource();
    window.postMessage(message, this.constants.DOMAIN);
  },

  sendResponse: function(originalEventData, response) {
    const message = {
      action: originalEventData.action,
      requestId: originalEventData.requestId,
      response: response
    };

    message[this.constants.SOURCE_FIELD] = this.constants.CONTENT_SCRIPT;
    window.postMessage(message, this.constants.DOMAIN);
  },

  handleMessageReceived: function(event) {
    const that = this;

    if (event && event.data && event.data.source === this.constants.PAGE_SCRIPT) {
      RQ.configs.env.logLevel === 'debug' && console.log('Received message: ' + event.data);

      // Check whether it is a response to invoke callback or a request to perform an action
      if (typeof event.data.response !== 'undefined') {
        return this.invokeCallback(event);
      }

      // Process actions
      if (event.data.action === 'GET_STORAGE_TYPE') {
        StorageService.getStorageType().then(storageType => {
          that.sendResponse(event.data, { storageType });
        });
      }

      else if (event.data.action === 'SET_STORAGE_TYPE') {
        StorageService.setStorageType(event.data.storageType).then(() => {
          that.sendResponse(event.data, {success: true});
        });
      }

      else if (event.data.action === 'GET_STORAGE_INFO') {
        StorageService.getStorageType().then(storageType => {
          chrome.storage[storageType].get(null, superObject => {
            const storageCachedRecords = [];
            for (let key in superObject) {
              if (superObject[key].hasOwnProperty('objectType') || superObject[key].hasOwnProperty('ruleType')) {
                storageCachedRecords.push(superObject[key]);
              }
            }

            that.sendResponse(event.data, {
              storageType: storageType,
              numItems: storageCachedRecords.length,
              bytesUsed: JSON.stringify(storageCachedRecords).length
            });
          });
        });
      }

      else if (event.data.action === 'GET_REMOTE_RULES_SETTINGS') {
        StorageService.getRecordFromStorage('remote_rules_settings', 'sync')
          .then(obj => that.sendResponse(event.data, obj || {}));
      }

      else if (event.data.action === 'SET_REMOTE_RULES_SETTINGS') {
        StorageService.saveRecordInStorage({ remote_rules_settings: event.data.remoteRulesSettings }, 'sync')
          .then(() => {
            // Inform background to start the import periodically
            return new Promise(resolve =>
              chrome.runtime.sendMessage({ action: RQ.EXTENSION_MESSAGES.REMOTE_RULES_SETTINGS_CHANGED }, resolve)
            );
          })
          .then(() => {
            // Send the response back to App UI to show notification
            that.sendResponse(event.data, { success: true });
          });
      }
    }
  },

  init: function() {
    this.addMessageListener();
  }
};

RQ.ContentScriptMessageHandler.init();

window.RQ = window.RQ || {};

RQ.DataStoreUtils = {
  isUserAuthenticated: function(callback) {
    RQ.ContentScriptMessageHandler.sendMessage({
      action: RQ.DATASTORE.ACTIONS.CHECK_USER_AUTH
    }, callback);
  },

  fetchUserDetails: function() {
    return new Promise((resolve, reject) => {
      try {
        RQ.ContentScriptMessageHandler.sendMessage({ action: RQ.DATASTORE.ACTIONS.FETCH_USER_DETAILS }, resolve);
      } catch(e) {
        reject(e);
      }
    });
  },

  authenticate: function(callback) {
    RQ.ContentScriptMessageHandler.sendMessage({ action: RQ.DATASTORE.ACTIONS.AUTHENTICATE }, callback);
  },

  getValue: function(pathArray) {
    return new Promise((resolve, reject) => {
      try {
        RQ.ContentScriptMessageHandler.sendMessage({ action: RQ.DATASTORE.ACTIONS.GETVALUE, pathArray: pathArray }, resolve);
      } catch(e) {
        reject(e)
      }
    });
  },

  setValue: function(pathArray, value, callback) {
    RQ.ContentScriptMessageHandler.sendMessage({ action: RQ.DATASTORE.ACTIONS.SETVALUE, pathArray: pathArray, value: value }, callback);
  }
};

window.RQ = window.RQ || {};
RQ.UserAgentLibrary = RQ.UserAgentLibrary || {};

RQ.UserAgentLibrary = {
  USER_AGENT: {
    device: {
      android: {
        name: 'Android',
        values: {
          phone: {
            name: 'Android Phone',
            value: 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Mobile Safari/537.36' // Pixel 2
          },
          tablet: {
            name: 'Android Tablet',
            value: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36' // Nexus 10
          }
        }
      },
      apple: {
        name: 'Apple',
        values: {
          iphone: {
            name: 'Apple iPhone',
            value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' // iPhone X
          },
          ipad: {
            name: 'Apple iPad',
            value: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1'
          }
        }
      },
      windows: {
        name: 'Windows',
        values: {
          phone: {
            name: 'Windows Phone',
            value: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)'
          },
          tablet: {
            name: 'Windows Tablet',
            value: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch; NOKIA; Lumia 920)'
          }
        }
      },
      blackberry: {
        name: 'Blackberry',
        values: {
          phone: {
            name: 'Blackberry Phone',
            value: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11 (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11'
          },
          tablet: {
            name: 'Blackberry Tablet',
            value: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.0.0; en-US) AppleWebKit/535.8 (KHTML, like Gecko) Version/7.2.0.0 Safari/535.8'
          }
        }
      },
      symbian_phone: {
        name: 'Symbian Phone',
        value: 'Mozilla/5.0 (SymbianOS) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.33 Mobile Safari/533.4 3gpp-gba'
      }
    },
    browser: {
      chrome: {
        name: 'Google Chrome',
        values: {
          windows: {
            name: 'Chrome on Windows',
            value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
          },
          macintosh: {
            name: 'Chrome on Macintosh',
            value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
          },
          linux: {
            name: 'Chrome on Linux',
            value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
          }
        }
      },
      firefox: {
        name: 'Mozilla Firefox',
        values: {
          windows: {
            name: 'Firefox on Windows',
            value: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0'
          },
          macintosh: {
            name: 'Firfox on Macintosh',
            value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:52.0) Gecko/20100101 Firefox/52.0'
          },
          linux: {
            name: 'Firefox on Linux',
            value: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'
          }
        }
      },
      safari: {
        name: 'Safari',
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8'
      },
      msie: {
        name: 'Microsoft Internet Explorer',
        values: {
          msie6: {
            name: 'Internet Explorer 6',
            value: 'Mozilla/4.0(compatible; MSIE 6.0; Windows NT 5.1)'
          },
          msie7: {
            name: 'Internet Explorer 7',
            value: 'Mozilla/4.0(compatible; MSIE 7.0; Windows NT 6.0)'
          },
          msie8: {
            name: 'Internet Explorer 8',
            value: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)'
          },
          msie9: {
            name: 'Internet Explorer 9',
            value: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)'
          },
          msie10: {
            name: 'Internet Explorer 10',
            value: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)'
          },
          msie11: {
            name: 'Internet Explorer 11',
            value: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
          }
        }
      },
      msedge: {
        name: 'Microsoft Edge',
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240'
      },
      opera: {
        name: 'Opera',
        value: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100'
      }
    }
  },

  getDefaultUserAgent: function() {
    return navigator && navigator.userAgent || '';
  }
};
window.RQ = window.RQ || {};
RQ.DOMUtils = RQ.DOMUtils || {};

/**
 *
 * @param $el Element on which class should be toggled
 * @param className Class to be toggled
 * @param condition Boolean Condition - When true class will be added otherwise removed
 */
RQ.DOMUtils.toggleClass = function($el, className, condition) {
  condition ? $el.addClass(className) : $el.removeClass(className);
};

/**
 * Wrapper over Chrome Storage Service APIs.
 * Usage
 * StorageService
 *  .getInstance({ cacheRecords: true }, context})
 *  .then(() => ...);
 */

(function(window) {
  // Karma tests complain that StorageService is already defined therefore exit when StorageService already exists
  if (window.StorageService && typeof window.StorageService === 'function') {
    return;
  }

  window.StorageService = class {
    /**
     *
     * @param options StorageService constructor options
     * @param context Context on which to bind e.g. getInstance({}, RQ).
     * Since initialization is async therefore context is taken as an argument
     * @returns {Promise<any>}
     */
    static getInstance(options, context) {
      return new Promise(resolve => {
        StorageService.getStorageType().then(storageType => {
          options.DB = storageType;
          context.StorageService = new StorageService(options);

          resolve();
        });
      });
    }

    constructor(options) {
      this.DB = options.DB ? chrome.storage[options.DB] : chrome.storage[RQ.configs.storageType];
      this.primaryKeys = options.primaryKeys || ['objectType', 'ruleType'];
      this.records = [];
      this.isRecordsFetched = false;
      this.cachingEnabled = options['cacheRecords'];

      if (this.cachingEnabled) {
        chrome.storage.onChanged.addListener(this.updateRecords.bind(this));
      }

      this.saveRecordWithID = this.saveRecordWithID.bind(this);
      this.saveRecord = this.saveRecord.bind(this);
      this.getRecord = this.getRecord.bind(this);
      this.getRecords = this.getRecords.bind(this);
    }

    static getStorageType() {
      return new Promise(resolve => {
        StorageService
          .getRecordFromStorage('storageType', 'sync')
          .then(storageType => {
            // If there is no storageType stored, fallback to default setting
            resolve(storageType || RQ.configs.storageType);
          });
      });
    }

    static setStorageType(newStorageType) {
      return StorageService.saveRecordInStorage({ 'storageType': newStorageType }, 'sync');
    }

    getRecords(objectType, forceFetch) {
      const self = this;

      return new Promise((resolve, reject) => {
        /* If records have been read from storage, return the cached values */
        if (self.cachingEnabled && self.isRecordsFetched && !forceFetch) {
          resolve(self.filterRecordsByType(self.records, objectType));
          return;
        }

        // Clear the existing records
        self.records.length = 0;

        self.DB.get(null, function(superObject) {
          for (let key in superObject) {
            if (self.hasPrimaryKey(superObject[key])) {
              self.records.push(superObject[key]);
            }
          }

          self.isRecordsFetched = true;
          resolve(self.filterRecordsByType(self.records, objectType));
        });
      });
    }

    hasPrimaryKey(record) {
      for (let index = 0; index < this.primaryKeys.length; index++) {
        if (typeof record[this.primaryKeys[index]] !== 'undefined') {
          return true;
        }
      }

      return false;
    }

    filterRecordsByType(records, requestedObjectType) {
      if (!requestedObjectType) {
        return records;
      }

      return records.filter(record => {
        let objectType = record.objectType || RQ.OBJECT_TYPES.RULE;
        return objectType === requestedObjectType;
      });
    }

    saveRecord(object) {
      return new Promise((resolve, reject) => {
        this.DB.set(object, resolve);
      });
    }

    /**
     * Saves the object which contains ID so that we do not need to specify id as the key and whole object as value
     * @param object
     * @returns {Promise<any>}
     */
    saveRecordWithID(object) {
      return new Promise(resolve => {
        this.DB.set({ [object.id]: object }, resolve);
      });
    }

    static saveRecordInStorage(object, storageType) {
      return new Promise(resolve => chrome.storage[storageType].set(object, resolve));
    }

    static getRecordFromStorage(key, storageType) {
      return new Promise(resolve => chrome.storage[storageType].get(key, obj => resolve(obj[key])));
    }

    getRecord(key) {
      const self = this;
      return new Promise(resolve => self.DB.get(key, obj => resolve(obj[key])));
    }

    removeRecord(key) {
      const self = this;
      return new Promise(resolve => self.DB.remove(key, resolve));
    }

    getCachedRecordIndex(keyToFind) {
      for (let recordIndex = 0; recordIndex < this.records.length; recordIndex++) {
        const recordKey = this.records[recordIndex].id;

        if (recordKey === keyToFind) {
          return recordIndex;
        }
      }

      return -1;
    }

    /**
     * StorageService.records are updated on every add/edit/delete operation
     * So that background rules can be updated which are executed when each request URL is intercepted
     * @param changes SuperObject with key as Object key which is changed with old and new values
     * @param namespace Storage type: 'sync' or 'local'
     */
    updateRecords(changes, namespace) {
      var changedObject,
        changedObjectIndex,
        objectExists,
        changedObjectKey;

      // If storageType is changed then source the data in new storage
      if (namespace === 'sync' && changes.hasOwnProperty('storageType') && changes['storageType'].newValue) {
        this.switchStorageType(changes['storageType'].newValue);
        return;
      }

      if (this.DB === chrome.storage[namespace]) {
        for (changedObjectKey in changes) {
          if (!changes.hasOwnProperty(changedObjectKey)) {
            continue;
          }

          changedObject = changes[changedObjectKey];
          changedObjectIndex = this.getCachedRecordIndex(changedObjectKey);
          objectExists = (changedObjectIndex !== -1);

          // Add/Update Object operation
          if (typeof changedObject.newValue !== 'undefined') {
            // Don't cache records when objects do not contain primaryKeys
            if (!this.hasPrimaryKey(changedObject.newValue)) {
              continue;
            }

            objectExists
              ? this.records[changedObjectIndex] = changedObject.newValue    /* Update existing object (Edit) */
              : this.records.push(changedObject.newValue);                   /* Create New Object */
          }

          // Delete Rule Operation
          if (typeof changedObject.oldValue !== 'undefined' && typeof changedObject.newValue === 'undefined' && objectExists) {
            this.records.splice(changedObjectIndex, 1);
          }
        }
      }
    }

    printRecords() {
      this.DB.get(null, function (o) {
        console.log(o);
      });
    }

    clearDB() {
      this.DB.clear();
    }

    switchStorageType(newStorageType) {
      if (chrome.storage[newStorageType] === this.DB) {
        Logger.log('Already on the same storage type. Doing nothing!');
        return;
      }

      Logger.log('Changing default storageType to', newStorageType);

      const existingStorage = this.DB;

      this.DB = chrome.storage[newStorageType];

      // Clear the existing records
      this.records.length = 0;

      const self = this;
      existingStorage.get(null, superObject => {
        const keysToRemove = [];
        for (let key in superObject) {
          if (superObject.hasOwnProperty(key) && self.hasPrimaryKey(superObject[key])) {
            // Save data in the new Storage
            chrome.storage[newStorageType].set({ [key]: superObject[key] });
            keysToRemove.push(key);
          }
        }

        // Remove records from existing storage
        existingStorage.remove(keysToRemove);
      });
    }
  }
})(window);

var Logger = {
  enabled: true,
  ns: 'Requestly: ',

  log: function(msg) {
    this.enabled && console.log.apply(console, [this.ns].concat(Array.prototype.slice.call(arguments)));
  },

  error: function(msg) {
    this.enabled && console.error.apply(console, [this.ns].concat(Array.prototype.slice.call(arguments)));
  }
};

const Notification = {
  Types: {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
  },

  NotificationTypeHandler: {
    success: toastr.success,
    error: toastr.error,
    info: toastr.info,
    warning: toastr.warning
  },

  defaultOptions: {
    closeButton: true,
    debug: false,
    positionClass: 'toast-top-right',
    onclick: null,
    showDuration: '2000',
    hideDuration: '1000',
    timeOut: '3000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  },

  show: function(type, message, heading, opts) {
    const options = _.extend({}, this.defaultOptions, opts);

    this.NotificationTypeHandler[type].call(null, message, heading, options);
  }
};

(function($) {
  function getOrCreateDownloadLink() {
    var $link = $('#downloadLink');

    if ($link.length === 0) {
      $link = $('<a id="downloadLink">download</a>').appendTo('body');
    }

    $link.hide();
    return $link;
  }

  function saveAsTextFile(text, fileName) {
    var textFileAsBlob = new Blob([text], { type:'text/plain' }),
      $downloadLink = getOrCreateDownloadLink();

    $downloadLink.attr('download', fileName || 'file');

    if (typeof window.URL !== 'undefined') {
      $downloadLink.attr('href', window.URL.createObjectURL(textFileAsBlob));
    }

    $downloadLink.get(0).click();
  }

  function getOrCreateUploadLink() {
    var $link = $('#uploadLink');

    if ($link.length === 0) {
      $link = $('<input type="file" id="uploadLink" />').appendTo('body');
    }

    $link.hide();
    return $link;
  }

  function loadTextFile(callback) {
    var $link = getOrCreateUploadLink(),
      reader = new FileReader();

    reader.onload = function(evt) {
      callback(evt.target.result);
    };

    $link.change(function() {
      reader.readAsText($link.get(0).files[0], 'UTF-8');
      $link.val('');
    });

    $link.click();
  }

  Backbone.on('file:save', saveAsTextFile);
  Backbone.on('file:load', loadTextFile);
}(jQuery));
var KeyboardEvents = function() {
  this.eventConsumers = {};

  $(document).on('keydown', this._keyboardEventHandler.bind(this));
};

KeyboardEvents.prototype.on = function(keysCombination, callback, context) {
  var consumers = this.eventConsumers[keysCombination] = this.eventConsumers[keysCombination] || [];

  if (consumers.indexOf(callback) === -1) {
    consumers.push({
      callback: callback,
      context: context
    });
  }
};

KeyboardEvents.prototype.off = function(keysCombination, callback) {
  var consumers = this.eventConsumers[keysCombination] || [];

  for (var index = consumers.length - 1; index >= 0; index--) {
    var consumer = consumers[index];
    if (consumer.callback === callback) {
      consumers.splice(index, 1);
    }
  }

  if (consumers.length === 0) {
    delete this.eventConsumers[keysCombination];
  }
};

KeyboardEvents.prototype._keyboardEventHandler = function(event) {
  for (var keysCombination in this.eventConsumers) {
    if (this._matches(keysCombination, event)) {
      var consumers = this.eventConsumers[keysCombination];

      for (var index = 0; index < consumers.length; index++) {
        var consumer = consumers[index];
        Logger.log('Invoking handler for keyboard event: ', keysCombination);
        consumer.callback.apply(consumer.context || this, arguments);
      }
    }
  }
};

KeyboardEvents.prototype._matches = function(keysCombination, keyboardEvent) {
  keysCombination = keysCombination.toLowerCase();

  var keys = keysCombination.split('+'),
    charKey = keysCombination[keysCombination.length - 1];

  if (keys.indexOf('ctrl') > -1 && !keyboardEvent.ctrlKey && !keyboardEvent.metaKey) {
    return false;
  }

  if (keys.indexOf('alt') > -1 && !keyboardEvent.altKey) {
    return false;
  }

  if (keys.indexOf('shift') > -1 && !keyboardEvent.shiftKey) {
    return false;
  }

  return String.fromCharCode(keyboardEvent.which).toLowerCase() === charKey;
};

RQ.CodeMirror = {
  init: function (textarea, mode) {
    CodeMirror.fromTextArea(textarea, {
      lineNumbers: true,
      matchBrackets: {
        strict: true
      },
      autoCloseBrackets: true,
      autoRefresh: true,
      theme: 'eclipse',
      mode: mode
    })
    .on('change', function (cm) {
      $(textarea).val(cm.getValue()).trigger('change');
    });
  }
};

class FeatureManager {
  static allPlanNames() {
    return {
      BRONZE: 'bronze',
      SILVER: 'silver',
      GOLD: 'gold'
    }
  };

  static allFeatureIds() {
    return {
      RULES: 'rules',
      ACTIVE_RULES: 'active_rules',
      GROUPS: 'groups',
      SHARED_LISTS: 'sharedLists',
      FILES: 'files',
      EXPORT_IMPORT: 'export_import',
      ADS: 'ads',
      LOGS: 'logs',
      FAV_RULES: 'favourite_rules'
    }
  }

  constructor(plansList, featuresList, userPlanDetails) {
    this.featuresList = featuresList || [];
    this.userPlanDetails = userPlanDetails || {};
    this.userPlanName = FeatureManager.getPlanName(plansList, this.userPlanDetails);
  }

  static getEndDate(planDetails) {
    if (!planDetails || !planDetails.subscription) {
      return null;
    }

    let endDate = planDetails.subscription.endDate;

    // Handle Backward Compatibility (Initially we saved current_period_end in the sub object (e.g. 1585497103.984)
    if (planDetails.subscription.current_period_end) {
      endDate = (new Date(planDetails.subscription.current_period_end * 1000)).toISOString().split('T')[0];
    }

    return endDate;
  }

  static isExpired(planDetails) {
    if (!planDetails || !planDetails.subscription) {
      return false;
    }

    return FeatureManager.getEndDate(planDetails) < (new Date()).toISOString().split('T')[0];
  }

  static getPlanName(plansList, planDetails) {
    if (!planDetails || !planDetails.planId || !planDetails.subscription || !plansList) {
      return FeatureManager.allPlanNames().BRONZE;
    }

    if (FeatureManager.isExpired(planDetails)) {
      return FeatureManager.allPlanNames().BRONZE;
    }

    const planId = planDetails.planId;

    for (const planObjectKey in plansList) {
      const planObject = plansList[planObjectKey];

      for (const planType in planObject) {
        if (typeof planObject[planType] === 'object' && planObject[planType]['planId'] === planId) {
          return planObject.name.toLowerCase();
        }
      }
    }

    return FeatureManager.allPlanNames().BRONZE;
  }

  static isFeatureEnabled(featureId, userPlanName) {
    switch(featureId) {
      case FeatureManager.allFeatureIds().LOGS: return userPlanName === FeatureManager.allPlanNames().GOLD;
      case FeatureManager.allFeatureIds().ADS: return userPlanName === FeatureManager.allPlanNames().BRONZE;
    }

    return false;
  }

  getFeatureLimits(featureId) {
    const featureObj = this.__getFeatureObject(featureId);

    if (!featureObj) {
      // Give Bronze Plan to users whenever we are unable to fetch features from firebase (e.g. China users)
      switch (featureId) {
        case FeatureManager.allFeatureIds().RULES: return 10;
        case FeatureManager.allFeatureIds().ACTIVE_RULES: return 3;
        case FeatureManager.allFeatureIds().FAV_RULES: return 3;
        case FeatureManager.allFeatureIds().SHARED_LISTS: return 3;
      }
    } else {
      return featureObj[this.userPlanName]['limit'];
    }
  }

  __getFeatureObject(featureId) {
    return this.featuresList.filter(featureObj => featureObj.id === featureId)[0];
  }
}

FeatureManager.premiumReleaseTime = new Date('March 30, 2019 00:00:00 GMT+00:00').getTime();
FeatureManager.maxLogImpressions = 5;

RQ.Mixins = RQ.Mixins || {};

RQ.Mixins.LimitsValidator = {
  validateRuleCreationLimits: function(event) {
    const that = this;

    return new Promise(resolve => {
      RQ.StorageService.getRecords(RQ.OBJECT_TYPES.RULE).then(rules => {
        const maxRules = RQ.featureManager.getFeatureLimits('rules');
        const plan = RQ.featureManager.userPlanName;

        if (rules && rules.length > maxRules) {
          that.showDropdown(event, RQ.Templates.RulesCreationLimitMessage({rulesLimit: maxRules, planName: plan}));
          RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULES, RQ.GA_EVENTS.ACTIONS.LIMIT_REACHED);
          resolve(false);
        } else {
          that.hideDropdown(event);
          resolve(true);
        }
      });
    });
  },

  validateRuleActivationLimits: function(event) {
    const that = this;

    return new Promise(resolve => {
      RQ.StorageService.getRecords(RQ.OBJECT_TYPES.RULE).then(rules => {
        const activeRules = rules.filter(rule => rule.status === RQ.RULE_STATUS.ACTIVE),
          maxActiveRules = RQ.featureManager.getFeatureLimits('active_rules'),
          plan = RQ.featureManager.userPlanName;

        if (activeRules && activeRules.length >= maxActiveRules) {
          that.showUpgradeModal(RQ.Templates.LimitExceededMessage({
            rulesLimit: maxActiveRules, planName: plan, featureName: 'active rules'
          }));

          RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULES, RQ.GA_EVENTS.ACTIONS.LIMIT_REACHED, 'Active Rules limit reached');
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  },

  validateFavouriteRulesLimit: function(event) {
    return new Promise(resolve => {
      RQ.StorageService.getRecords(RQ.OBJECT_TYPES.RULE).then(rules => {
        const favoriteRules = rules.filter(rule => rule.isFavourite),
          maxFavouriteRules = RQ.featureManager.getFeatureLimits('favourite_rules');

        if (favoriteRules && favoriteRules.length >= maxFavouriteRules) {
          this.showUpgradeModal(RQ.Templates.LimitExceededMessage({
            rulesLimit: maxFavouriteRules, planName: RQ.featureManager.userPlanName, featureName: 'favourite rules'
          }));

          RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULES, RQ.GA_EVENTS.ACTIONS.LIMIT_REACHED, 'Favourite Rules limit reached');
          resolve(false);
        } else {
          RQ.Mixins.LimitsValidator.hideDropdown(event);
          resolve(true);
        }
      });
    });
  },

  validateSharedListLimit: function(event) {
    const that = this;

    return new Promise(resolve => {
      const userSharedListsNodePath = RQ.currentUser.getUserSharedListsPath();

      RQ.DataStoreUtils.getValue(userSharedListsNodePath).then(sharedLists => {
        const maxSharedLists = RQ.featureManager.getFeatureLimits('shared_lists'),
          numSharedLists = _.keys(sharedLists).length;

        if (numSharedLists >= maxSharedLists) {
          that.showUpgradeModal(RQ.Templates.LimitExceededMessage({
            rulesLimit: maxSharedLists, planName: RQ.featureManager.userPlanName, featureName: 'shared lists'
          }));

          RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.LIMIT_REACHED, 'Shared List limit reached');
          RQ.Utils.submitAttr('num_shared_lists', numSharedLists);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  },

  showUpgradeModal: function(body) {
    RQ.showModalView(new Modal(), {
      model: {
        type: 'info',
        heading: 'Upgrade Plan',
        content: body,
        upgradeButton: true
      }
    });
  },

  showDropdown: function(event, dropdownMarkup) {
    const $dropdownTrigger = $(event.target).parents('.dropdown').find('.dropdown-trigger');

    $dropdownTrigger
      .attr('data-toggle', 'dropdown')
      .next('.dropdown-menu').html(dropdownMarkup);

    $dropdownTrigger.dropdown('toggle');
  },

  hideDropdown: function(event) {
    const $dropdownTrigger = $(event.target).parents('.dropdown').find('.dropdown-trigger');

    // Hack for now, Empty the contents of dropdown next to the element so that it doesn't come next time
    $dropdownTrigger.next('.dropdown-menu').empty().removeClass('show');
  }
};

RQ.Mixins = RQ.Mixins || {};
RQ.Mixins.InputValidation = {
  validateSourceField: function(source, allowEmptyWithFilters) {
    var errorMessage = null,
      value = source.value,
      operator = source.operator;

    if (!source.value) {
      if (!allowEmptyWithFilters || _.isEmpty(source.filters)) {
        errorMessage = 'Error: Source Field cannot be empty';
      } else {
        return true;
      }
    }

    if (operator === RQ.RULE_OPERATORS.MATCHES && !RQ.Utils.isValidRegex(value)) {
      errorMessage = 'Error: "' + value + '" is not a valid regular expression';
    }

    if (source.key === RQ.RULE_KEYS.URL && operator === RQ.RULE_OPERATORS.EQUALS && !RQ.Utils.isValidUrl(value)) {
      errorMessage = 'Error: Source Url should begin with a valid protocol (http: | https: | ftp:)'
    }

    if (errorMessage != null) {
      Notification.show('error', errorMessage);
      return false;
    }

    return true;
  },

  validateDestinationField: function(operator, destinationField) {
    var errorMessage = null;

    if (!destinationField) {
      errorMessage = 'Error: Destination Field can not be empty';
    }

    if ([RQ.RULE_OPERATORS.CONTAINS, RQ.RULE_OPERATORS.EQUALS].indexOf(operator) >=0
      && !RQ.Utils.isValidUrl(destinationField)) {
        errorMessage = 'Error: Destination Url should begin with a valid protocol (http: | https: | ftp:)'
    }

    if (errorMessage != null) {
      Notification.show('error', errorMessage);
      return false;
    }

    return true;
  },

  validateFieldNonEmpty: function(name, value) {
    if (!value) {
      Notification.show('error', 'Error: "' + name + '" field cannot be empty');
      return false;
    }
    return true;
  }
};

RQ.Mixins = RQ.Mixins || {};
RQ.Mixins.FilePickerMixin = {
  setRuleIndexForWhichPickerOpened: function(index) {
    this.set('ruleIndexForWhichPickerOpened', index);
  },

  getRuleIndexForWhichPickerOpened: function() {
    return this.get('ruleIndexForWhichPickerOpened');
  }
};

var BaseModel = Backbone.Model.extend({
  Mixins: [],

  loadMixin: function(mixin) {
    _.extend(this, mixin);
  },

  loadMixins: function(mixins) {
    _.each(mixins, this.loadMixin, this);
  },

  initialize: function() {
    this.transformAttributes();
    this.loadMixins(this.Mixins);
    this.alsoInitialize();
  },

  // Functions to be over-written by child
  transformAttributes: function() { /* No Op */},
  alsoInitialize: function() { /* No Op */ }
});

var PushNotificationModel = Backbone.Model.extend({
  defaults: {
    id: 0,
    type: 'primary',
    label: '',
    heading: '',
    contentType: 'para',
    content: '',
    isRead: false
  }
});

var SharedListModel = Backbone.Model.extend({
  defaults: {
    listName: '',
    sharedUrl: '',
    shareId: '',
    creationDate: '',
    isEnabled: true
  }
});
var UserModel = BaseModel.extend({
  defaults: {
    profile: {
      provider: '',
      uid: '',
      displayName: '',
      email: '',
      profileImageURL: ''
    },
    isLoggedIn: null,
    planDetails: ''
  },

  initialize: function(data) {
    this.registerBinders();

    if (!data.isLoggedIn) {
      this.setUserLoggedIn(false);
    } else {
      data.profile && this.setProfile(data.profile).setUserLoggedIn(true);
      data.planDetails && this.setPlanDetails(data.planDetails);
    }
  },

  registerBinders: function() {

  },

  /**
   * If isLoggedIn is null then we do not know the status of user authentication and callee is expected to pass a callback
   * to get the boolean statue of user auth state
   * @param callback
   */
  isUserAuthenticated: function(callback) {
    const that = this;

    if (this.getUserLoggedIn() !== null) {
      callback.call(null, this.getUserLoggedIn());
      return;
    }

    RQ.DataStoreUtils.isUserAuthenticated(function(authData) {
      if (authData) {
        that.setProfile(authData).setUserLoggedIn(true);
      } else {
        that.setUserLoggedIn(false);
      }

      callback.call(null, that.getUserLoggedIn());
    });
  },

  createSharedList: function(shareId, sharedListName, entities) {
    var listNodePath = this.getPublicSharedListPath(shareId);

    // Set uid of owner in access node
    RQ.DataStoreUtils.setValue(listNodePath, {
      access: {
        owner: this.getProfile().uid
      },
      shareId: shareId,
      rules: entities.rules,
      groups: entities.groups,
      isEnabled: true
    });

    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.CREATED, 'Shared List created');

    return RQ.getSharedURL(shareId, sharedListName);
  },

  setSharedListName: function(shareId, listName) {
    var sharedListPath = this.getUserSharedListsPath();

    sharedListPath.push(shareId);

    RQ.DataStoreUtils.setValue(sharedListPath, {
      listName: listName,
      shareId: shareId,
      creationDate: RQ.Utils.getCurrentTime()
    });
  },

  authenticate: function(callback) {
    const that = this;

    RQ.DataStoreUtils.authenticate(function(authData) {
      that.setUserLoggedIn(true).setProfile(authData);
      callback();
    });
  },

  getProfile: function() {
    return this.get('profile');
  },

  setProfile: function(profile) {
    this.set('profile', profile);
    return this;
  },

  setUserLoggedIn: function(isLoggedIn) {
    this.set('isLoggedIn', isLoggedIn);
    return this;
  },

  getUserLoggedIn: function() {
    return this.get('isLoggedIn');
  },

  setPlanDetails: function(s) {
    this.set('planDetails', s);
    return this;
  },

  getPlanDetails: function() {
    return this.get('planDetails');
  },

  /**
   *
   * @returns Path of current User node in array form ["users", "uid1"] otherwise null
   */
  getUserNodePath: function() {
    return this.getProfile().uid ? [RQ.FIREBASE_NODES.USERS, this.getProfile().uid ] : null;
  },

  getUserSharedListsPath: function() {
    var currentUserPath = this.getUserNodePath();

    if (currentUserPath) {
      currentUserPath.push(RQ.FIREBASE_NODES.SHARED_LISTS);
    }

    return currentUserPath
  },

  getPublicSharedListPath: function(sharedListId) {
    return [ RQ.FIREBASE_NODES.PUBLIC, RQ.FIREBASE_NODES.SHARED_LISTS, sharedListId ];
  }
});

var StorageObjectModel = BaseModel.extend({
  defaults: function() {
    // to be overridden by child
    return {
      id: '',
      objectType: '',
      name: '',
      description: '',
      creationDate: ''
    };
  },

  getObjectType: function() {
    return this.get('objectType');
  },

  setObjectType: function(objectType) {
    this.set('objectType', objectType, { silent: true });
  },

  getId: function() {
    return this.get('id');
  },

  setId: function(id) {
    this.set('id', id, { silent: true });
  },

  generateId: function() {
    var creationDate = this.hasCreationDate() ? this.getCreationDate() : this.getTimestamp(),
      id = this.getIdPrefix() + '_' + creationDate;

    this.setId(id);
    return id;
  },

  getName: function() {
    return this.get('name');
  },

  setName: function(name) {
    this.set('name', name, {silent: true});
  },

  getDescription: function() {
    return this.get('description');
  },

  setDescription: function(des) {
    this.set('description', des);
  },

  getTimestamp: function() {
    return Date.now();
  },

  getTimestampFromId: function() {
    return this.getId().split('_')[1];
  },

  setCreationDate: function(date) {
    this.set('creationDate', date);
  },

  getCreationDate: function() {
    return this.get('creationDate');
  },

  hasCreationDate: function() {
    return typeof this.get('creationDate') !== 'undefined' && this.get('creationDate');
  },

  save: function(options) {
    const storageObject = this.toJSON();
    storageObject['id'] = storageObject['id'] || this.generateId();

    options = options || {};
    options.callback = options.callback || (() => Logger.log('Object saved'));

    RQ.StorageService.saveRecordWithID(storageObject).then(options.callback);
  },

  isValid: function() {
    // to be overridden by child
    return true;
  },

  remove: function(options) {
    const id = this.getId();

    options = options || {};
    options.callback = options.callback || function() {
      Logger.log('Object removed');
    };

    RQ.StorageService.removeRecord(id).then(options.callback);
  }
});

var RuleGroupModel = StorageObjectModel.extend({

  defaults: function() {
    return _.extend(StorageObjectModel.prototype.defaults(), {
      objectType: RQ.OBJECT_TYPES.GROUP,
      status: RQ.RULE_STATUS.ACTIVE
    });
  },

  getIdPrefix: function() {
    return 'Group';
  },

  getStatus: function() {
    return this.get('status');
  },

  setStatus: function(status) {
    this.set('status', status, { silent: true });
  }
});

var BaseRuleModel = StorageObjectModel.extend({
  defaults: function() {
    return _.extend(StorageObjectModel.prototype.defaults(), {
      objectType: RQ.OBJECT_TYPES.RULE,
      ruleType: '',
      status: RQ.RULE_STATUS.ACTIVE,
      groupId: '',
      isSample: false
    });
  },

  getGroupId: function() {
    return this.get('groupId');
  },

  setGroupId: function(groupId) {
    this.set('groupId', groupId, {silent: true});
  },

  ungroup: function() {
    this.unset('groupId', {silent: true});
  },

  getDefaultSource: function() {
    return {
      key: RQ.RULE_KEYS.URL,
      operator: RQ.RULE_OPERATORS.CONTAINS,
      value: '',
      filters: {}
    };
  },

  /**
   * Adds default Source to rule pairs whenever not present
   * @returns {boolean} true if Source is added to any of the pairs
   */
  insertDefaultSourceInPairs: function() {
    var pairs = this.getPairs(),
      isSourceAdded = false;

    _.each(pairs, function(pair) {
      if (typeof pair.source === 'undefined') {
        pair.source = this.getDefaultSource();
        isSourceAdded = true;
      }
    }, this);

    return isSourceAdded;
  },

  getVersion: function() {
    return this.get('version');
  },

  setVersion: function(v) {
    return this.set('version', v, { silent: true });
  },

  getIdPrefix: function() {
    return this.getRuleType();
  },

  getRuleType: function() {
    return this.get('ruleType');
  },

  setRuleType: function(ruleType) {
    this.set('ruleType', ruleType);
  },

  getStatus: function() {
    return this.get('status');
  },

  setStatus: function(status) {
    this.set('status', status, { silent: true });
  },

  setFavourite: function(isFavourite) {
    this.set('isFavourite', isFavourite, { silent: true });
  },

  getPair: function(index) {
    var pairs = this.getPairs();
    return pairs && pairs[index];
  },

  getPairs: function() {
    return this.get('pairs');
  },

  setPair: function(index, pair) {
    var pairs = this.getPairs();
    pairs[index] = pair;
  },

  isValid: function() {
    var ruleName = this.getName(),
      ruleType = this.getRuleType();

    if (!ruleName || !ruleType) {
      return false;
    }

    if (!RQ.RULE_TYPES.hasOwnProperty(ruleType.toUpperCase())) {
      return false;
    }

    return true;
  },

  removeUnwantedRuleFields: function() {
    //no-op
  }
});
var RedirectRuleModel = BaseRuleModel.extend({
  Mixins: [ RQ.Mixins.FilePickerMixin ],

  defaults: function() {
    return _.extend(BaseRuleModel.prototype.defaults(), {
      ruleType: RQ.RULE_TYPES.REDIRECT,
      pairs: [
        this.getDefaultPair()
      ]
    });
  },

  getDefaultPair: function() {
    return {
      source: this.getDefaultSource(),
      destination: ''
    }
  },

  isDeprecatedFormat: function() {
    var sourceObject = this.get('source'),
      destination = this.get('destination');

    return (typeof sourceObject !== 'undefined' && typeof destination !== 'undefined');
  },

  introducePairs: function () {
    var pairs = this.getPairs(),
      defaultPair,
      sourceObject = this.get('source'),
      destination = this.get('destination');

    // Add Pair if Redirect Rule contains Source and Destination instead of pair
    if (this.isDeprecatedFormat()) {
      defaultPair = this.getDefaultPair();
      defaultPair['source']['value'] = sourceObject['values'][0];
      defaultPair['source']['operator'] = sourceObject['operator'];
      defaultPair['destination'] = destination;

      this.set('pairs', [ defaultPair ]);
      this.unset('source');
      this.unset('destination');
    }
  },

  removeUnwantedRuleFields: function() {
    var pairs = this.getPairs();
    _.each(pairs, function(pair) {
      delete pair['fileName'];
    });
  },

  /**
   * Transform Attributes to support multiple entries in Single Redirect Rule
   * Wiki: https://github.com/blunderboy/requestly/wiki/Format-of-different-Rule-Types
   */
  transformAttributes: function() {
    this.introducePairs();
  }
});
/**
 * Cancel Rule is a special type of Redirect Rule where destination is falsy (null | undefined | notset | '')
 */
var CancelRuleModel = RedirectRuleModel.extend({
  defaults: function() {
    return _.extend(RedirectRuleModel.prototype.defaults(), {
      ruleType: RQ.RULE_TYPES.CANCEL
    });
  },

  isDeprecatedFormat: function() {
    return typeof this.get('source') !== 'undefined';
  }
});
var ReplaceRuleModel = BaseRuleModel.extend({
  defaults: function() {
    return _.extend(BaseRuleModel.prototype.defaults(), {
      ruleType: RQ.RULE_TYPES.REPLACE,
      pairs: [
        this.getDefaultPair()
      ]
    });
  },

  getDefaultPair: function() {
    return {
      from: '',
      to: '',
      status: RQ.RULE_STATUS.INACTIVE,
      source: this.getDefaultSource()
    };
  },

  upgradeToV2: function() {
    this.insertDefaultSourceInPairs();
    this.setVersion(2);
  },

  transformAttributes: function() {
    // There was no "version" field before v2
    if (!this.getVersion()) {
      this.upgradeToV2();
    }
  }
});

var HeadersRuleModel = BaseRuleModel.extend({
  defaults: function() {
    return _.extend(BaseRuleModel.prototype.defaults(), {
      ruleType: RQ.RULE_TYPES.HEADERS,
      pairs: [
        this.getDefaultPair()
      ]
    });
  },

  getDefaultPair: function() {
    return {
      type: RQ.MODIFICATION_TYPES.ADD,
      target: RQ.HEADERS_TARGET.REQUEST,
      header: '',
      value: '',
      source: this.getDefaultSource()
    };
  },

  transformAttributes: function() {
    this.insertDefaultSourceInPairs();
  },

  getHeadersForAutoComplete:function() {
    return   ['Accept','Accept-Charset','Accept-Encoding','Accept-Language',
              'Accept-Datetime','Access-Control-Request-Method','Authorization','Cache-Control',
              'Connection','Cookie','Content-Length','Content-MD5','Content-Type','Date',
              'Expect','Forwarded','From','Host','If-Match','If-Modified-Since','If-None-Match','If-Range','If-Unmodified-Since',
              'Max-Forwards', 'Origin','Pragma','Proxy-Authorization','Range','Referer','TE','User-Agent','Upgrade','Via','Warning',
              'Upgrade-Insecure-Requests','X-Requested-With','DNT','X-Forwarded-For','X-Forwarded-Host',
              'X-Forwarded-Proto','Front-End-Https','X-Http-Method-Override','X-ATT-DeviceId','X-Wap-Profile',
              'Proxy-Connection','X-UIDH','X-Csrf-Token','X-Request-ID','X-Correlation-ID', 'X-Frame-Options'
    ];
  },

  getForbiddenHeaders: function() {
    return ['Accept-Charset','Accept-Encoding','Access-Control-Request-Headers','Access-Control-Request-Method','Connection',
    'Content-Length','Cookie','Cookie2','Date','DNT','Expect','Host','Keep-Alive','Origin','Proxy-Authorization',
    'Proxy-Connection','Referer','TE','Trailer','Transfer-Encoding','Upgrade','Via'
    ]
  },
  
  isForbiddenHeader: function(headerName) {
    return this.getForbiddenHeaders().indexOf(headerName) > -1;
  }
});
var UserAgentRuleModel = BaseRuleModel.extend({
  defaults: function() {
    return _.extend(BaseRuleModel.prototype.defaults(), {
      ruleType: RQ.RULE_TYPES.USERAGENT,
      pairs: [
        this.getDefaultPair()
      ]
    });
  },

  getDefaultPair: function() {
    return {
      source: this.getDefaultSource(),
      userAgent: ''
    };
  },

  getDefaultSource: function() {
    return _.extend(BaseRuleModel.prototype.getDefaultSource(), {
      requestType: RQ.REQUEST_TYPES.MAIN_FRAME
    });
  }
});

var ScriptRuleModel = BaseRuleModel.extend({
  Mixins: [ RQ.Mixins.FilePickerMixin ],

  defaults: function() {
    return _.extend(BaseRuleModel.prototype.defaults(), {
      ruleType: RQ.RULE_TYPES.SCRIPT,
      pairs: [
        this.getDefaultPair()
      ]
    });
  },

  getDefaultPair: function() {
    return {
      source: BaseRuleModel.prototype.getDefaultSource(),
      libraries: [],
      scripts: []
    };
  },

  setLibraries: function(libraries, pairIndex) {
    pairIndex = pairIndex || 0;

    this.getPair(pairIndex)['libraries'] = libraries;
  },

  getScripts: function(pairIndex) {
    pairIndex = pairIndex || 0;

    return this.getPair(pairIndex)['scripts'];
  },

  removeUnwantedRuleFields: function() {
    var pairs = this.getPairs();
    _.each(pairs, function(pair) {
      _.each(pair.scripts, function (script) {
        delete script['fileName'];
      });
    });
  },

  transformAttributes: function() {
    this.addCodeTypeIfMissing();
  },

  addCodeTypeIfMissing: function() {
    var pairs = this.getPairs();

    _.each(pairs, function(pair) {
      _.each(pair.scripts, function(script) {
        script.codeType = script.codeType || RQ.SCRIPT_CODE_TYPES.JS;
      });
    });
  },

  getDefaultScript: function() {
    return {
      codeType: RQ.SCRIPT_CODE_TYPES.JS,
      type: RQ.SCRIPT_TYPES.URL,
      value: '',
      loadTime: RQ.SCRIPT_LOAD_TIME.AFTER_PAGE_LOAD
    };
  }
});

var QueryParamsRuleModel = BaseRuleModel.extend({
  defaults: function() {
    return _.extend(BaseRuleModel.prototype.defaults(), {
      ruleType: RQ.RULE_TYPES.QUERYPARAM,
      pairs: [
        this.getDefaultPair()
      ]
    });
  },

  getDefaultPair: function() {
    return {
      modifications: [
        this.getDefaultModification()
      ],
      source: this.getDefaultSource()
    };
  },

  getDefaultModification: function() {
    return {
      type: RQ.MODIFICATION_TYPES.ADD,
      actionWhenParamExists: RQ.RULE_KEYS.OVERWRITE,
      param: '',
      value: ''
    };
  }
});

window.RQ = window.RQ || {};

StorageService.getInstance({ cacheRecords: true }, RQ);

RQ.Mixins = RQ.Mixins || {};

RQ.TemplateHelpers = RQ.TemplateHelpers || {};

RQ.KeyboardEvents = new KeyboardEvents();

RQ.init = function(userDetails, plansList, featuresList) {
  // There should be only one instance of User
  this.currentUser = new UserModel(userDetails);
  this.featureManager = new FeatureManager(plansList, featuresList, userDetails.planDetails);

  // Store UserDetails and PlanName in storage to make accessible by popup
  this.updateUserInfo();

  this.router = new RQ.Router();

  this.fetchSettings();

  this.addListenerForBackgroundMessages();

  this.addVersionClass();

  this.logAttrsAndEvents();

  RQ.KeyboardEvents.on('Ctrl+S', RQ.saveCurrentEditorState, this);

  Backbone.history.start();
};

RQ.saveCurrentEditorState = function(event) {
  if (this.currentView instanceof BaseRuleEditorView) {
    this.currentView.saveRule();

    // Prevent default behavior of Ctrl+S in browser
    event && event.preventDefault();
  }
};

RQ.showView = function(view, options) {
  if (this.currentView) {
    this.currentView.close();
  }

  this.currentView = view;
  this.currentView.render(options);

  $('#content').html(this.currentView.el);
};

RQ.showModalView = function(modalView, options) {
  var isModalAlreadyRendered = !!modalView.rendered;

  if (this.currentModalView) {
    this.currentModalView.close();
  }

  this.currentModalView = modalView;
  this.currentModalView.render(options);

  $('#modal-container').html(this.currentModalView.el);
  isModalAlreadyRendered && this.currentModalView.delegateEvents();

  options = _.extend({}, options, {
    show: true,
    keyboard: true,
    focus: true
  });

  $(this.currentModalView.el).modal(options);
};

RQ.fetchSettings = function() {
  RQ.StorageService.getRecord(RQ.STORAGE_KEYS.REQUESTLY_SETTINGS).then(alreadyStoredSettings => {
    const settings = alreadyStoredSettings || { isExtensionEnabled: 1 };

    if (!settings['isExtensionEnabled']) {
      RQ.showBackdrop();
    }

    RQ.Utils.submitAttr('extension_enabled', !!settings['isExtensionEnabled']);
  });
};

RQ.showBackdrop = function() {
  $('#extension-disable-backdrop').show();
  $('#extension-disable-backdrop-message').show();
};

RQ.hideBackdrop = function() {
  $('#extension-disable-backdrop').hide();
  $('#extension-disable-backdrop-message').hide();
};

RQ.addListenerForBackgroundMessages = function() {
  chrome.runtime.onMessage.addListener(function(request) {
    if (request.isExtensionEnabled === true) {
      RQ.hideBackdrop();
    }

    if (request.isExtensionEnabled === false) {
      RQ.showBackdrop();
    }
  });
};

RQ.addListenerForAuthenticationChanged = function() {
  RQ.currentUser.on('change:isLoggedIn', function() {
    var isAuthorized = RQ.currentUser.getUserLoggedIn();

    $('body')
      .removeClass(RQ.USER.AUTHORIZED)
      .removeClass(RQ.USER.UNAUTHORIZED)
      .addClass(isAuthorized ? RQ.USER.AUTHORIZED : RQ.USER.UNAUTHORIZED);
  });
};

RQ.addVersionClass = function() {
  // We introduced Share Rules (Issue-93) in version 1
  if (RQ.VERSION >= 1) {
    $('body').addClass('shared-rules-enabled');
  }
};

RQ.logAttrsAndEvents = function() {
  RQ.Utils.submitAttr('ext_version', chrome.runtime.getManifest().version);
  RQ.Utils.submitAttr('ext_id', chrome.runtime.id);
  RQ.Utils.submitAttr('planName', RQ.featureManager.userPlanName);
};

RQ.updateUserInfo = function() {
  RQ.StorageService.getRecord(RQ.STORAGE_KEYS.USER_INFO).then(storedUserInfo => {
    const userInfo = storedUserInfo || {};
    userInfo['planName'] = RQ.featureManager.userPlanName;
    userInfo['isLoggedIn'] = RQ.currentUser.getUserLoggedIn();

    RQ.StorageService.saveRecord({ user_info: userInfo });
    RQ.Utils.submitAttr('install_date', RQ.Utils.formatDate(userInfo['installationDate'], 'yyyy-mm-dd'));
  });
};

RQ.getRuleModelFromAction = function(ruleType, modelJson) {
  const actionUpperCase = ruleType.toUpperCase();
  modelJson = modelJson || {};

  if (RQ.RuleModelMap[actionUpperCase]) {
    return new RQ.RuleModelMap[actionUpperCase](modelJson);
  }
  return new BaseRuleModel(modelJson);
};

RQ.RuleModelMap = {
    REDIRECT: RedirectRuleModel,
    CANCEL: CancelRuleModel,
    REPLACE: ReplaceRuleModel,
    HEADERS: HeadersRuleModel,
    USERAGENT: UserAgentRuleModel,
    SCRIPT: ScriptRuleModel,
    QUERYPARAM: QueryParamsRuleModel
};

Backbone.View.prototype.close = function() {
  if (this.childViews && this.childViews instanceof Backbone.View) {
    for (var i = 0; i < this.childViews.length; i++) {
      this.childViews[i].close();
    }
  }

  if (typeof this.destructWidgets === 'function') {
    this.destructWidgets();
  }

  this.remove();
  this.unbind();
};

RQ.HandlebarHelpers = RQ.HandlebarHelpers || {};

RQ.HandlebarHelpers.DebugHelper = function(optionalValue) {
  console.group('DebugHelper');
  console.log(this);

  if (optionalValue) {
    console.log(optionalValue);
  }

  console.groupEnd('DebugHelper');
};

RQ.HandlebarHelpers.EqualsHelper = function(a, b, options) {
  if (arguments.length < 3) {
    console.error('Handlebars#equals helper expect 2 arguments');
  }

  if (a === b) {
    return options.fn(this);
  }

  return options.inverse(this);
};

RQ.HandlebarHelpers.GreaterThanHelper = function(a, b, options) {
  if (arguments.length < 3) {
    console.error('Handlebars#gt helper expect 2 arguments');
  }

  if (a > b) {
    return options.fn(this);
  }

  return options.inverse(this);
};

RQ.HandlebarHelpers.toLowerCaseHelper = function(value) {
  if (value && typeof value === 'string') {
    return value.toLowerCase();
  }

  return '';
};

RQ.HandlebarHelpers.charAtHelper = function(value, index) {
  if (value && typeof value === 'string') {
    return value.charAt(index);
  }

  return '';
};

RQ.HandlebarHelpers.formatDate = function(dateInMiliseconds, options) {
  var date = new Date(Number(dateInMiliseconds));

  if (options.hash.locale) {
    return options.hash.full ? date.toLocaleString() : date.toLocaleDateString();
  }

  if (options.hash.full) {
    return date.toUTCString();
  }

  date = date.toUTCString().split(' ');
  date = date[1] + ' ' + date[2] + ', ' + date[3];

  return date;
};

RQ.HandlebarHelpers.readGlobalVar = function(value) {
  var result = RQ;

  value = value.split('.');

  for (var i = 1; i < value.length; i++) {
    result = result[ value[i] ]
  }

  return result;
};

RQ.HandlebarHelpers.equalsGlobalVar = function(globalVarString, operand, options) {
  var globalVar = RQ.HandlebarHelpers.readGlobalVar(globalVarString);

  if (globalVar === operand) {
    return options.fn(this);
  }

  return options.inverse(this);
};

RQ.HandlebarHelpers.unequalsGlobalVar = function(globalVarString, operand, options) {
  var globalVar = RQ.HandlebarHelpers.readGlobalVar(globalVarString);

  if (globalVar !== operand) {
    return options.fn(this);
  }

  return options.inverse(this);
};

RQ.HandlebarHelpers.eachGlobalVar = function(globalVarString, options) {
  var globalVar = RQ.HandlebarHelpers.readGlobalVar(globalVarString);
  return Handlebars.helpers.each.call(this, globalVar, options);
};

RQ.HandlebarHelpers.concat = function() {
  var values = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
  return values.join('');
};

RQ.HandlebarHelpers.contains = function(array, value, options) {
  if (array && array.indexOf(value) > -1) {
    return options.fn(this);
  }
  return options.inverse(this);
};

RQ.HandlebarHelpers.subtract = function(lvalue, rvalue) {
  return parseFloat(lvalue) - parseFloat(rvalue);
};

RQ.HandlebarHelpers.isEmpty = function(obj, options) {
  return _.isEmpty(obj) ? options.fn(this): options.inverse(this);
};

RQ.HandlebarHelpers.sizeOf = function(obj, options) {
  return _.size(obj);
};

RQ.HandlebarHelpers.getRuleIconClass = function(ruleType) {
  switch (ruleType) {
    case RQ.RULE_TYPES.REDIRECT: return 'fa fa-random';
    case RQ.RULE_TYPES.CANCEL: return 'fa fa-ban';
    case RQ.RULE_TYPES.REPLACE: return 'fa fa-exchange';
    case RQ.RULE_TYPES.HEADERS: return 'fa fa-header';
    case RQ.RULE_TYPES.USERAGENT: return 'fa fa-tablet';
    case RQ.RULE_TYPES.SCRIPT: return 'fa fa-code';
    case RQ.RULE_TYPES.QUERYPARAM: return 'fa fa-question';
  }
};

Handlebars.registerHelper('debug', RQ.HandlebarHelpers.DebugHelper);
Handlebars.registerHelper('equals', RQ.HandlebarHelpers.EqualsHelper);
Handlebars.registerHelper('gt', RQ.HandlebarHelpers.GreaterThanHelper);
Handlebars.registerHelper('toLowerCase', RQ.HandlebarHelpers.toLowerCaseHelper);
Handlebars.registerHelper('formatDate', RQ.HandlebarHelpers.formatDate);
Handlebars.registerHelper('charAt', RQ.HandlebarHelpers.charAtHelper);
Handlebars.registerHelper('readGlobalVar', RQ.HandlebarHelpers.readGlobalVar);
Handlebars.registerHelper('equalsGlobalVar', RQ.HandlebarHelpers.equalsGlobalVar);
Handlebars.registerHelper('unequalsGlobalVar', RQ.HandlebarHelpers.unequalsGlobalVar);
Handlebars.registerHelper('eachGlobalVar', RQ.HandlebarHelpers.eachGlobalVar);
Handlebars.registerHelper('concat', RQ.HandlebarHelpers.concat);
Handlebars.registerHelper('contains', RQ.HandlebarHelpers.contains);
Handlebars.registerHelper('subtract', RQ.HandlebarHelpers.subtract);
Handlebars.registerHelper('isEmpty', RQ.HandlebarHelpers.isEmpty);
Handlebars.registerHelper('sizeOf', RQ.HandlebarHelpers.sizeOf);

Handlebars.registerHelper('getRuleIconClass', RQ.HandlebarHelpers.getRuleIconClass);

RQ.TemplateHelpers.commonHelper = function(ruleJson) {
  ruleJson.RULE_STATUS = RQ.RULE_STATUS;
  ruleJson.RULE_OPERATORS = RQ.RULE_OPERATORS;

  return ruleJson;
};

RQ.TemplateHelpers.placeholders = {
  SOURCE_EQUALS: 'e.g. http://www.example.com',
  SOURCE_CONTAINS: 'e.g. google',
  SOURCE_MATCHES: 'e.g. /example-([0-9]+)/ig',
  SOURCE_WILDCARD_MATCHES: 'e.g. *://*.mydomain.com/* (Each * can be replaced with respective $ in destination)',
  DESTINATION_MATCHES: 'e.g. http://www.new-example.com?queryParam=$1&searchParam=$2',
  DESTINATION_WILDCARD_MATCHES: 'e.g. $1://$2.newdomain.com/$3'
};

RQ.TemplateHelpers.getPlaceholder = function(options) {
  var field = (options.field || '').toUpperCase(),
    operator = (options.operator || '').toUpperCase(),
    DEFAULT_PLACEHOLDER = 'e.g. http://www.new-example.com';

  return this.placeholders[field + '_' + operator] || DEFAULT_PLACEHOLDER;
};

RQ.TemplateHelpers.redirectRuleHelper = function(ruleJson) {
  ruleJson = this.commonHelper(ruleJson);

  _.each(ruleJson.pairs, function(pair) {
    pair['sourcePlaceholder'] = this.getPlaceholder({ field: 'source', operator: pair.source.operator });
    pair['destinationPlaceholder'] = this.getPlaceholder({ field: 'destination', operator: pair.source.operator });
  }, this);

  return ruleJson;
};
this["RQ"] = this["RQ"] || {};
this["RQ"]["Templates"] = this["RQ"]["Templates"] || {};

Handlebars.registerPartial("FilePickerOptions", this["RQ"]["Templates"]["FilePickerOptions"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"padded-options\">Selected File:\n      <span class=\"selected-file-name\">"
    + this.escapeExpression(((helper = (helper = helpers.fileName || (depth0 != null ? depth0.fileName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fileName","hash":{},"data":data}) : helper)))
    + "</span>\n    </span>\n";
},"3":function(depth0,helpers,partials,data) {
    return "    <button type=\"button\" class=\"btn btn-flat clear-destination padded-options\">clear</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"file-picker-options\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.fileName : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <span class=\"file-picker-placeholder padded-options\"></span>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.fileName : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

Handlebars.registerPartial("NeedHelpModalActivate", this["RQ"]["Templates"]["NeedHelpModalActivate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Button trigger modal -->\n<button id=\"needHelpModalActivate\" type=\"button\" class=\"btn\">\n  <i class=\"fa fa-envelope\"></i>&nbsp;&nbsp;\n  Need Help ?\n</button>\n";
},"useData":true}));

Handlebars.registerPartial("PremiumBadge", this["RQ"]["Templates"]["PremiumBadge"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "title=\""
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<a class=\"premium-badge\"\n   href=\"https://www.requestly.in/blog/2019/02/18/introducing-premium-plans-free-plan-limits\" target=\"_blank\">\n  <span class=\"badge badge-success\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n    <i class=\"fa fa-star\"></i>\n    <span>Premium</span>\n  </span>\n</a>\n";
},"useData":true}));

Handlebars.registerPartial("RuleItemRow", this["RQ"]["Templates"]["RuleItemRow"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "is-favourite";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<tr class=\"rule-item-row item-row rule-theme-"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.ruleType : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" data-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <td class=\"item-selection-cell actionable\">\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"filled-in select-row-checkbox form-check-input\" id=\"filled-in-box-"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" title=\"Select Rule\"/>\n      <label for=\"filled-in-box-"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></label>\n    </div>\n  </td>\n\n\n  <td class=\"fav-cell "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isFavourite : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <i class=\"fa fa-heart fav-icon fav-icon-favourite\" title=\"Favourite\"></i>\n    <i class=\"fa fa-heart-o fav-icon fav-icon-not-favourite\" title=\"Not Favourite\"></i>\n  </td>\n\n  <td class=\"badge-cell\">\n    <span class=\"rule-type badge\">\n      <i class=\""
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(depth0 != null ? depth0.ruleType : depth0),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\" title=\""
    + alias2(((helper = (helper = helpers.ruleType || (depth0 != null ? depth0.ruleType : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"ruleType","hash":{},"data":data}) : helper)))
    + " Rule\"></i>\n    </span>\n  </td>\n\n  <td class=\"name-cell\">\n    <a class=\"ruleName\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n    <div class=\"ruleDescription\">"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n  </td>\n\n  <td class=\"status-cell actionable\"> "
    + ((stack1 = this.invokePartial(partials.StatusToggle,depth0,{"name":"StatusToggle","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " </td>\n\n  <td class=\"createdOn-cell\">"
    + alias2((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.creationDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\n\n  <td class=\"more-cell\">\n    <div class=\"hover-actions\">\n      <i class=\"fa fa-share-alt share-rule-button action-button\" title=\"Share Rule\"></i>\n      <i class=\"fa fa-download download-rule-button action-button\" title=\"Download Rule\"></i>\n      <i class=\"fa fa-copy copy-rule-button action-button\" title=\"Copy Rule\"></i>\n      <i class=\"fa fa-trash delete-item-button\" title=\"Delete Rule\"></i>\n    </div>\n  </td>\n</tr>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("RuleLogItemRow", this["RQ"]["Templates"]["RuleLogItemRow"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "        <a href=\"#edit/"
    + alias1(((helper = (helper = helpers.ruleId || (depth0 != null ? depth0.ruleId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ruleId","hash":{},"data":data}) : helper)))
    + "\" class=\"ruleName\">"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.ruleData : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "      <span class=\"log-description\">"
    + this.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr class=\"list-item-row item-row\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <td class=\"log-timestamp-cell\">"
    + alias3((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.timestamp : depth0),{"name":"formatDate","hash":{"full":true,"locale":true},"data":data}))
    + "</td>\n  <td class=\"log-details-cell\">\n    <span class=\"log-rulename\">\n      <span>Applied rule</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.ruleData : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      <span>on</span>\n    </span>\n    <span class=\"log-url\">"
    + alias3(((helper = (helper = helpers.requestURL || (depth0 != null ? depth0.requestURL : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"requestURL","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </td>\n</tr>\n";
},"useData":true}));

Handlebars.registerPartial("RulesList", this["RQ"]["Templates"]["RulesList"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"group rq-table card "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.status : depth0),"Inactive",{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-group-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n       data-expanded=\""
    + alias3(((helper = (helper = helpers.expanded || (depth0 != null ? depth0.expanded : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expanded","hash":{},"data":data}) : helper)))
    + "\">\n    <table class=\"table\">\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,((stack1 = (depths[1] != null ? depths[1].groups : depths[1])) != null ? stack1.length : stack1),1,{"name":"gt","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "      <tbody>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rules : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "disabled-item";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <thead>\n"
    + ((stack1 = this.invokePartial(partials.TableHeader,depth0,{"name":"TableHeader","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </thead>\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "          <thead>\n"
    + ((stack1 = this.invokePartial(partials.TableHeader,depth0,{"name":"TableHeader","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </thead>\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rules : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleItemRow,depth0,{"name":"RuleItemRow","data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("SharedListIndexToolbar", this["RQ"]["Templates"]["SharedListIndexToolbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"content-header\">\n  <span>Shared List</span>\n\n  <div class=\"right right-corner-icongroup\">\n    <a class=\"btn-floating btn-sm waves-effect waves-light delete-items-button action-button\"\n       data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Delete\">\n      <i class=\"fa fa-trash\"></i>\n    </a>\n  </div>\n</nav>\n";
},"useData":true}));

Handlebars.registerPartial("SharedListItemRow", this["RQ"]["Templates"]["SharedListItemRow"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr class=\"list-item-row item-row\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <td class=\"item-selection-cell\">\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"filled-in select-row-checkbox form-check-input\" id=\"filled-in-box-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" title=\"Select Rule\"/>\n      <label for=\"filled-in-box-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></label>\n    </div>\n  </td>\n\n  <td class=\"list-name-cell\">"
    + alias3(((helper = (helper = helpers.listName || (depth0 != null ? depth0.listName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"listName","hash":{},"data":data}) : helper)))
    + "</td>\n\n  <td class=\"url-cell\">\n    <a href=\""
    + alias3(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + "</a>\n  </td>\n\n  <td class=\"createdOn-cell\">"
    + alias3((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.creationDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\n\n  <td class=\"more-cell\">\n    <div class=\"hover-actions\">\n      <i class=\"fa fa-files-o copy-action\" data-clipboard-text=\""
    + alias3(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + "\"></i>\n      <i class=\"fa fa-trash delete-item-button\"></i>\n    </div>\n  </td>\n</tr>\n";
},"useData":true}));

Handlebars.registerPartial("SharedRuleItemRow", this["RQ"]["Templates"]["SharedRuleItemRow"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<tr class=\"rule-item-row "
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.ruleType : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" data-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <td class=\"badge-cell\">\n    <span class=\"rule-type badge\">\n      <i class=\""
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(depth0 != null ? depth0.ruleType : depth0),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\" title=\""
    + alias2(((helper = (helper = helpers.ruleType || (depth0 != null ? depth0.ruleType : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"ruleType","hash":{},"data":data}) : helper)))
    + " Rule\"></i>\n    </span>\n  </td>\n\n  <td class=\"name-cell\">\n    <a class=\"ruleName\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n    <div class=\"ruleDescription\">"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n  </td>\n\n  <td class=\"status-cell\"> "
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + " </td>\n\n  <td class=\"more-cell\">"
    + alias2((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.creationDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\n</tr>\n";
},"useData":true}));

Handlebars.registerPartial("SharedRulesIndexToolbar", this["RQ"]["Templates"]["SharedRulesIndexToolbar"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"content-header\">\n  <span>Shared Rules</span>\n  <div class=\"right right-corner-actions\">\n    <a class=\"import-rules-button action-button btn btn-primary\" "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1),0,{"name":"equals","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Import List</a>\n  </div>\n</nav>\n";
},"useData":true}));

Handlebars.registerPartial("StatusToggle", this["RQ"]["Templates"]["StatusToggle"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "checked";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<a class=\"switch square\">\n  <label>\n    Off\n    <input type=\"checkbox\" class=\"status-toggle\" "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.status : depth0),"Active",{"name":"equals","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " />\n    <span class=\"lever\"></span>\n    On\n  </label>\n</a>\n";
},"useData":true}));

Handlebars.registerPartial("TableHeader", this["RQ"]["Templates"]["TableHeader"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <td class=\"item-selection-cell\">\n      <div class=\"form-check\">\n        <input\n          type=\"checkbox\"\n          class=\"filled-in select-all-rows-checkbox form-check-input\"\n          id=\"select-all-group-rules-checkbox"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n          title=\"Select All\"/>\n        <label for=\"select-all-group-rules-checkbox"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></label>\n      </div>\n    </td>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <span class=\"readonly\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.readonly : depth0),{"name":"unless","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return "          <i class=\"action edit-group-name fa fa-pencil actionable\"></i>\n          <input class=\"editable actionable\" type=\"text\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n";
},"6":function(depth0,helpers,partials,data) {
    return "        <span class=\"readonly\">Ungrouped</span>\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.equals || (depth0 && depth0.equals) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1),1,{"name":"equals","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "");
},"9":function(depth0,helpers,partials,data) {
    return "          <span>(1 rule)</span>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return "          <span>("
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1), depth0))
    + " rules)</span>\n";
},"13":function(depth0,helpers,partials,data) {
    return "        <span>(empty group)</span>\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rules : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <span>"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.readonly : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"17":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)));
},"19":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.StatusToggle,depth0,{"name":"StatusToggle","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"21":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(22, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"22":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <i class=\"action more-group-actions fa fa-ellipsis-v actionable\" data-toggle=\"dropdown\"></i>\n        <div class=\"dropdown-menu more-actions\">\n          <a class=\"dropdown-item add-rule-to-group\" href=\"#selectRule/"
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Add rule</a>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rules : depth0),{"name":"if","hash":{},"fn":this.program(23, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          <a class=\"dropdown-item delete-group\">Delete group</a>\n        </div>\n";
},"23":function(depth0,helpers,partials,data) {
    return "            <a class=\"dropdown-item ungroup-rules\">Ungroup selected rules</a>\n            <a class=\"dropdown-item delete-rules-in-group\">Delete selected rules</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<tr class=\"group-header rq-table-header\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.readonly : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <td class=\"fav-cell\">\n    <i class=\"fa fa-heart-o hidden\"></i>\n  </td>\n\n  <td class=\"badge-cell\">\n    <i class=\"action collapse-button hidden-when-collapsed fa fa-minus-square\" title=\"Collapse\"></i>\n    <i class=\"action expand-button hidden-when-expanded fa fa-plus-square\" title=\"Expand\"></i>\n  </td>\n\n  <td class=\"name-cell\">\n    <span class=\"group-name\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "    </span>\n\n    <span class=\"group-rules-count\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rules : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "    </span>\n  </td>\n\n  <td class=\"status-cell actionable\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </td>\n\n  <td class=\"createdOn-cell\"></td>\n\n  <td class=\"more-cell\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.readonly : depth0),{"name":"unless","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </td>\n\n</tr>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("Toolbar", this["RQ"]["Templates"]["Toolbar"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " / Group Rules";
},"3":function(depth0,helpers,partials,data) {
    return "    <a class=\"btn-floating btn-sm waves-effect waves-light share-rules-button action-button\" role=\"button\"\n      aria-label=\"Share Rule\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Share\">\n      <i class=\"fa fa-share-alt\"/>\n    </a>\n\n    <a class=\"btn-floating btn-sm waves-effect waves-light delete-items-button action-button\" role=\"button\"\n      aria-label=\"Delete Rule\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Delete\">\n      <i class=\"fa fa-trash\"/>\n    </a>\n";
},"5":function(depth0,helpers,partials,data) {
    return "        <li class=\"dropdown-item\">\n          <a class=\"download-rules-button\" aria-label=\"Download Rules\">\n            <i class=\"fa fa-download\"/> Download Rules\n          </a>\n        </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<nav class=\"content-header\">\n  <span>Rules</span>\n  <div class=\"right right-corner-icongroup\">\n\n    <div class=\"dropdown\">\n      <a class=\"btn btn-with-text select-rule-button green dropdown-trigger\" role=\"button\" aria-label=\"Create New Rule\"\n        aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fa fa-plus\"/> New Rule\n      </a>\n\n      <div class=\"dropdown-menu upgrade-plan-message\"></div>\n    </div>\n\n    <a class=\"btn-floating btn-sm waves-effect waves-light blue group-rules-button action-button\" role=\"button\"\n      aria-label=\"Create New Group of Rules\" data-toggle=\"tooltip\" data-placement=\"bottom\"\n      data-original-title=\"New Group"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.groups : depth0)) != null ? stack1.length : stack1),0,{"name":"gt","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n      <i class=\"fa fa-folder\"/>\n    </a>\n\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.totalRules : depth0),0,{"name":"gt","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"notification-container\"></div>\n\n    <!-- Show Additional Options here like Import, Export & Settings -->\n    <div class=\"more-actions-container\" style=\"display: inline-block\">\n      <a class=\"btn-sm btn-floating action-button grey darken-1\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-ellipsis-v\"/>\n      </a>\n\n      <ul class=\"dropdown-menu more-actions\">\n        <li class=\"dropdown-item\">\n          <a class=\"upload-rules-button\" aria-label=\"Upload Rules\">\n            <i class=\"fa fa-upload\"/> Upload Rules\n          </a>\n        </li>\n\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.totalRules : depth0),0,{"name":"gt","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        <!--\n        <li class=\"dropdown-item\">\n          <a class=\"settings-button\" aria-label=\"Settings\" href=\"/settings\">\n            <i class=\"fa fa-gear\"></i> Settings\n          </a>\n        </li>\n        -->\n      </ul>\n    </div>\n  </div>\n</nav>";
},"useData":true}));

Handlebars.registerPartial("AddPairCTA", this["RQ"]["Templates"]["AddPairCTA"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button type=\"button\" class=\"right btn btn-default add-pair\">\n  <i class=\"fa fa-plus-circle\"></i>\n  <span>New</span>\n</button>";
},"useData":true}));

Handlebars.registerPartial("ContainerHeading", this["RQ"]["Templates"]["ContainerHeading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-heading\">\n  <span>"
    + this.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("DropdownButton", this["RQ"]["Templates"]["DropdownButton"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"btn dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n  <span class=\"dropdown-value\" data-value=\"\">Select</span>\n</button>";
},"useData":true}));

Handlebars.registerPartial("PairsContainerHeading", this["RQ"]["Templates"]["PairsContainerHeading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"title\">\n  <span>"
    + this.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = this.invokePartial(partials.AddPairCTA,depth0,{"name":"AddPairCTA","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("RuleEditorHeader", this["RQ"]["Templates"]["RuleEditorHeader"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"rule-status-container\">\n          <strong class=\"margin-r-0-5\">Status</strong>\n"
    + ((stack1 = this.invokePartial(partials.StatusToggle,depth0,{"name":"StatusToggle","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<nav class=\"content-header\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-5 text-left\">\n      <span>"
    + this.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n\n    <div class=\"col-md-4\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isViewMode : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"col-md-3 text-right\">\n"
    + ((stack1 = this.invokePartial(partials.SaveRuleCTA,depth0,{"name":"SaveRuleCTA","data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</nav>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("RuleProperties", this["RQ"]["Templates"]["RuleProperties"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "col-md-5";
},"3":function(depth0,helpers,partials,data) {
    return "col-md-4";
},"5":function(depth0,helpers,partials,data) {
    return "      <div class=\"group-info-container\"></div>\n";
},"7":function(depth0,helpers,partials,data) {
    return "col-md-6";
},"9":function(depth0,helpers,partials,data) {
    return "col-md-7";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row rule-properties\">\n  <div class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.groupId : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " input-field name-container md-form form-sm\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.groupId : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <input type=\"text\" class=\"rule-name-input form-control form-control-sm\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Rule Name\">\n  </div>\n\n  <div class=\"col-md-1\"></div>\n\n  <div class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.groupId : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + " input-field description-container md-form form-sm\">\n    <input type=\"text\" class=\"rule-description form-control form-control-sm\" value=\""
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Description (optional)\">\n  </div>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("SaveRuleCTA", this["RQ"]["Templates"]["SaveRuleCTA"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <div class=\"dropdown\">\n    <a class=\"btn save-rule dropdown-trigger\"\n       role=\"button\"\n       aria-label=\"Save Rule\"\n       aria-haspopup=\"true\"\n       aria-expanded=\"false\">Save</a>\n    <div class=\"dropdown-menu upgrade-plan-message\"></div>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isViewMode : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<a class=\"btn btn-default close-editor\">Exit</a>\n";
},"useData":true}));

Handlebars.registerPartial("SourceField", this["RQ"]["Templates"]["SourceField"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "selected";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <a class=\"open-source-filters\">\n"
    + ((stack1 = (helpers.isEmpty || (depth0 && depth0.isEmpty) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.filters : stack1),{"name":"isEmpty","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "    </a>\n";
},"4":function(depth0,helpers,partials,data) {
    return "        Add Filters\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "        Edit Filters ("
    + this.escapeExpression((helpers.sizeOf || (depth0 && depth0.sizeOf) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.filters : stack1),{"name":"sizeOf","hash":{},"data":data}))
    + ")\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"source-container\">\n  <label class=\"active\">Request</label>\n\n  <!-- Write the dropdown here -->\n  <div class=\"source-key-container\">\n    <div class=\"dropdown-container\">\n      <div class=\"dropdown\" data-key=\"source.key\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.URL",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.URL",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.key : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Url</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.HOST",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.HOST",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.key : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Host</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.PATH",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.PATH",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.key : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Path</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"source-operator-container\">\n    <div class=\"dropdown-container\">\n      <div class=\"dropdown\" data-key=\"source.operator\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.EQUALS",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.EQUALS",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.operator : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Equals</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.CONTAINS",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.CONTAINS",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.operator : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Contains</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.MATCHES",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.MATCHES",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.operator : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Matches (regex)</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.WILDCARD_MATCHES",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.WILDCARD_MATCHES",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.operator : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Matches (wildcard)</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <input type=\"text\" class=\"form-control source-value-input\" data-key=\"source.value\" value=\""
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.value : stack1), depth0))
    + "\" placeholder=\""
    + alias2(((helper = (helper = helpers.sourcePlaceholder || (depth0 != null ? depth0.sourcePlaceholder : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"sourcePlaceholder","hash":{},"data":data}) : helper)))
    + "\" />\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.withFilters : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <span class=\"fa fa-trash-o delete-pair action-icon\"></span>\n</div>";
},"usePartial":true,"useData":true}));

this["RQ"]["Templates"]["FilePicker"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button type=\"button\" class=\"btn btn-flat open-file-picker\" data-toggle=\"modal\" data-target=\"#filePickerModal\">\n  Select from library\n</button>\n<div class=\"modal fade file-picker-modal\" id=\"filePickerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"filePickerModalLabel\"\n  aria-hidden=\"true\" data-backdrop=\"false\">\n  <div class=\"modal-dialog file-picker-modal modal-full-height modal-right \" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"filePickerModalLabel\">Select File</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <iframe src=\""
    + this.escapeExpression(((helper = (helper = helpers.filePickerUrl || (depth0 != null ? depth0.filePickerUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"filePickerUrl","hash":{},"data":data}) : helper)))
    + "\" width=\"100%\" height=\"100%\" \n          class=\"file-picker-iframe modal-full-height\" frameborder=\"0\" allowtransparency=\"true\"></iframe>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["RQ"]["Templates"]["PushNotification"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "hasNotifications";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "      <span class=\"badge unread-notifications-badge\">"
    + this.escapeExpression(((helper = (helper = helpers.unReadNotificationsCount || (depth0 != null ? depth0.unReadNotificationsCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"unReadNotificationsCount","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"5":function(depth0,helpers,partials,data) {
    return "    <span class=\"new new-text-badge danger-color\">New</span>\n";
},"7":function(depth0,helpers,partials,data) {
    return "          <span class=\"mark-all-read-action\">Mark All as Read</span>\n";
},"9":function(depth0,helpers,partials,data) {
    return "          <span>Close</span>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"12":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li class=\"dropdown-divider\"></li>\n\n        <li class=\"dropdown-item "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.isRead : depth0),false,{"name":"equals","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n          <div class=\"row\">\n            <div class=\"col-md-2 ntf-type-container\">\n              <span class=\"badge badge-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n            <div class=\"ntf-content col-md-10\">"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n          </div>\n        </li>\n";
},"13":function(depth0,helpers,partials,data) {
    return "unread";
},"15":function(depth0,helpers,partials,data) {
    return "      <li class=\"no-notifications-item dropdown-item\">Yo! Nothing to catch up</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<div class=\"btn-group\">\n  <a class=\"btn-floating btn-sm notifications-button action-button dropdown-toggle "
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.unReadNotificationsCount : depth0),0,{"name":"gt","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-toggle=\"dropdown\"\n     aria-label=\"Notifications\"\n     aria-haspopup=\"true\"\n     aria-expanded=\"false\">\n    <i class=\"fa fa-bell\"></i>\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.unReadNotificationsCount : depth0),0,{"name":"gt","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </a>\n\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.unReadNotificationsCount : depth0),0,{"name":"gt","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <ul class=\"dropdown-menu\">\n    <li class=\"notifications-header\">\n      <h6>Notifications</h6>\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.unReadNotificationsCount : depth0),0,{"name":"gt","hash":{},"fn":this.program(7, data, 0),"inverse":this.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "    </li>\n\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),0,{"name":"gt","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n";
},"useData":true});

this["RQ"]["Templates"]["RuleCardsView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<nav class=\"content-header rq-dimgrey\">\n  <a href=\"#\" role=\"button\" class=\"back-button fa fa-chevron-left\" title=\"Go Back\"></a>\n  <span>Select Rule</span>\n</nav>\n\n<section class=\"rule-cards content-body\">\n  <div class=\"row\">\n    <div class=\"col-md-3 rule-theme-redirect rule-card\" data-type=\"Redirect\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.REDIRECT",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Redirect Request</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Redirect a request URL</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 rule-theme-cancel rule-card\" data-type=\"Cancel\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content bigger "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.CANCEL",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Cancel Request</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Block Urls by specifying keywords or entire Urls</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 rule-theme-replace rule-card\" data-type=\"Replace\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.REPLACE",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Replace Host</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Replace parts of URL like hostname, query value</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 rule-theme-headers rule-card\" data-type=\"headers\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.HEADERS",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Modify Headers</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Modify HTTP headers in request and response</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 rule-theme-queryparam rule-card\" data-type=\"QueryParam\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.QUERYPARAM",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Modify Query Parameters</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Add or Remove Query Parameters</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 rule-theme-script rule-card\" data-type=\"Script\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.SCRIPT",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Insert Scripts</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Add custom JS / CSS to any website</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 rule-theme-useragent rule-card\" data-type=\"UserAgent\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.USERAGENT",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Override User-Agent</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Emulate for different devices by varying user-agent</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n";
},"useData":true});

this["RQ"]["Templates"]["RuleIndex"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <div class=\"placeholder-message\">\n      <h3 class=\"heading row\">Get Started</h3>\n      <div class=\"body row\">Please click on <i class=\"add-rule-icon fa fa-plus-circle\"></i> button in the toolbar to setup rules to modify network requests.</div>\n      <div class=\"actions row\">\n        <a class=\"btn btn-info waves-effect waves-light\" target=\"_blank\" href=\"http://www.requestly.in\">Home</a>\n        <a class=\"btn btn-warning waves-effect waves-light\" href=\"http://www.requestly.in/blog/\">Blog</a>\n      </div>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"list-index-header\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th class=\"item-selection-cell\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" class=\"filled-in select-all-groups-checkbox form-check-input\" id=\"select-all-rows-checkbox\" title=\"Select All\"/>\n                <label for=\"select-all-rows-checkbox\"></label>\n              </div>\n            </th>\n            <th class=\"fav-cell\">\n              <i class=\"fa fa-heart-o hidden\"></i>\n            </th>\n            <th class=\"badge-cell\"> <span class=\"rules-number badge\">"
    + alias3(((helper = (helper = helpers.totalRules || (depth0 != null ? depth0.totalRules : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalRules","hash":{},"data":data}) : helper)))
    + "</span> </th>\n            <th class=\"name-cell\">\n              <div>\n                <span>Name</span>\n                <input class=\"form-control form-control-sm search-filter\" type=\"search\" placeholder=\"Search...\" value=\""
    + alias3(((helper = (helper = helpers.search || (depth0 != null ? depth0.search : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"search","hash":{},"data":data}) : helper)))
    + "\"/>\n              </div>\n            </th>\n            <th class=\"status-cell\">Status</th>\n            <th class=\"createdOn-cell\">Created on</th>\n            <th class=\"more-cell\">Actions</th>\n          </tr>\n        </thead>\n      </table>\n    </div>\n\n    <div class=\"list-index-content\">\n"
    + ((stack1 = this.invokePartial(partials.RulesList,depth0,{"name":"RulesList","data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.Toolbar,depth0,{"name":"Toolbar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"list-index content-body\">\n"
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.totalRules : depth0),0,{"name":"equals","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["RuleLogs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"rq-table card\" data-domain=\""
    + alias3(((helper = (helper = helpers.domain || (depth0 != null ? depth0.domain : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"domain","hash":{},"data":data}) : helper)))
    + "\" data-expanded=\"true\">\n        <table class=\"table\">\n          <thead>\n            <tr class=\"rq-table-header\">\n              <td colspan=\"2\">\n                <i class=\"action collapse-button hidden-when-collapsed fa fa-minus-square\" title=\"Collapse\"></i>\n                <i class=\"action expand-button hidden-when-expanded fa fa-plus-square\" title=\"Expand\"></i>\n                <span>"
    + alias3(((helper = (helper = helpers.domain || (depth0 != null ? depth0.domain : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"domain","hash":{},"data":data}) : helper)))
    + "</span>\n                <span class=\"clear-domain-logs\">Clear</span>\n              </td>\n            </tr>\n          </thead>\n          <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.logs : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </tbody>\n        </table>\n      </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleLogItemRow,depth0,{"name":"RuleLogItemRow","data":data,"indent":"              ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    return "      <div class=\"placeholder-message\">\n        <div class=\"body row\">No Logs found.</div>\n      </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"content-header\">\n  <span class=\"page-heading\">Logs</span>\n"
    + ((stack1 = this.invokePartial(partials.PremiumBadge,depth0,{"name":"PremiumBadge","hash":{"title":"Logs is a Premium Requestly feature."},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  <div class=\"actions-toolbar\">\n    <a class=\"btn btn-primary reload-tab-logs\">Reload</a>\n    <a class=\"btn btn-secondary focus-tab\">Focus tab</a>\n  </div>\n</nav>\n\n<section class=\"list-index content-body\">\n  <div class=\"list-index-content\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.domains : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["SharedListIndex"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.SharedListItemRow,depth0,{"name":"SharedListItemRow","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.SharedListIndexToolbar,depth0,{"name":"SharedListIndexToolbar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"list-index content-body\">\n  <div class=\"card rq-table\">\n    <div class=\"card-body\">\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th class=\"item-selection-cell\">\n            <div class=\"form-check\">\n              <input type=\"checkbox\" class=\"filled-in select-all-rows-checkbox form-check-input\" id=\"select-all-rows-checkbox\" title=\"Select All\"/>\n              <label for=\"select-all-rows-checkbox\"></label>\n            </div>\n          </th>\n          <th class=\"list-name-cell\">Name</th>\n          <th class=\"url-cell\">Link</th>\n          <th class=\"createdOn-cell\">Created on</th>\n          <th class=\"more-cell\">Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\n      </table>\n    </div>\n  </div>\n</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["SharedRulesIndex"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <div class=\"card-container-404\">\n      <div class=\"col-md-8\">\n        <div class=\"card hoverable\">\n          <div class=\"card-image\">\n            <div class=\"view overlay hm-white-slight z-depth-1\">\n              <img src=\"https://app.requestly.in/rules/resources/images/404-page-error.png\">\n              <div class=\"mask waves-effect activator\"></div>\n            </div>\n          </div>\n\n          <div class=\"card-content\">\n            <span class=\"card-title activator grey-text text-darken-4\">SharedList url is invalid or is deleted by Author</span>\n          </div>\n        </div>\n      </div>\n    </div>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "    <div class=\"list-index-header\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th class=\"badge-cell\"> <span class=\"rules-number badge\">"
    + this.escapeExpression(((helper = (helper = helpers.totalRules || (depth0 != null ? depth0.totalRules : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"totalRules","hash":{},"data":data}) : helper)))
    + "</span> </th>\n            <th class=\"name-cell\">Name & Description</th>\n            <th class=\"status-cell\">Status</th>\n            <th class=\"more-cell\">Created on</th>\n          </tr>\n        </thead>\n      </table>\n    </div>\n\n    <div class=\"list-index-content\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "        <div class=\"group rq-table card "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.status : depth0),"Inactive",{"name":"equals","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-group-id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n             data-expanded=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\">\n          <table class=\"table\">\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,((stack1 = (depths[1] != null ? depths[1].groups : depths[1])) != null ? stack1.length : stack1),1,{"name":"gt","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "            <tbody>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rules : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\n          </table>\n        </div>\n";
},"5":function(depth0,helpers,partials,data) {
    return "disabled";
},"7":function(depth0,helpers,partials,data) {
    return "false";
},"9":function(depth0,helpers,partials,data) {
    return "true";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return "              <thead>\n"
    + ((stack1 = this.invokePartial(partials.TableHeader,depth0,{"name":"TableHeader","hash":{"readonly":true},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "              </thead>\n";
},"13":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <thead>\n"
    + ((stack1 = this.invokePartial(partials.TableHeader,depth0,{"name":"TableHeader","hash":{"readonly":true},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "              </thead>\n";
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rules : depth0),{"name":"each","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"17":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.SharedRuleItemRow,depth0,{"name":"SharedRuleItemRow","data":data,"indent":"                  ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.SharedRulesIndexToolbar,depth0,{"name":"SharedRulesIndexToolbar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-index content-body list-index\">\n"
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.groups : depth0)) != null ? stack1.length : stack1),0,{"name":"equals","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});

this["RQ"]["Templates"]["LimitExceededMessage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<p>\n  You can have at max "
    + alias3(((helper = (helper = helpers.rulesLimit || (depth0 != null ? depth0.rulesLimit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rulesLimit","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.featureName || (depth0 != null ? depth0.featureName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"featureName","hash":{},"data":data}) : helper)))
    + " in <strong class=\"text-capitalize\">"
    + alias3(((helper = (helper = helpers.planName || (depth0 != null ? depth0.planName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"planName","hash":{},"data":data}) : helper)))
    + " plan</strong>.\n  Please <a href=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.PRICING_PAGE_URL",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\" target=\"_blank\">upgrade your plan</a>\n  to enhance the limits.\n</p>\n";
},"useData":true});

this["RQ"]["Templates"]["RulesCreationLimitMessage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<p>\n  You can create at max "
    + alias3(((helper = (helper = helpers.rulesLimit || (depth0 != null ? depth0.rulesLimit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rulesLimit","hash":{},"data":data}) : helper)))
    + " rules in <strong class=\"text-capitalize\">"
    + alias3(((helper = (helper = helpers.planName || (depth0 != null ? depth0.planName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"planName","hash":{},"data":data}) : helper)))
    + " plan</strong>.\n  Please <a href=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.PRICING_PAGE_URL",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\" target=\"_blank\">upgrade your plan</a>\n  to increase the limits.\n</p>\n<div class=\"text-right\">\n  <a role=\"button\" class=\"btn btn-primary\" href=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.PRICING_PAGE_URL",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\" target=\"_blank\">\n    Upgrade\n  </a>\n</div>\n";
},"useData":true});

this["RQ"]["Templates"]["GroupRulesModal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "Group Selected Rules";
},"3":function(depth0,helpers,partials,data) {
    return "Create New Group";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"modal-row\">\n              <label>Existing group</label>\n              <div class=\"dropdown-container\">\n                <div class=\"dropdown\">\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"                  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                  <ul class=\"dropdown-menu\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"modal-row\">OR</div>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                      <li><a class=\"dropdown-item\" data-value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Central Modal Medium Warning -->\n<div class=\"modal-dialog modal-notify\" role=\"document\">\n  <!--Content-->\n  <div class=\"modal-content\">\n    <!--Header-->\n    <div class=\"modal-header\">\n      <p class=\"heading lead\">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selectedRules : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</p>\n\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n      </button>\n    </div>\n\n    <!--Body-->\n    <div class=\"modal-body\">\n      <div class=\"text-center\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selectedRules : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"modal-row\">\n          <label>New group name</label>\n          <input class=\"new-group-name-field\" type=\"text\" placeholder=\"My Group\">\n        </div>\n      </div>\n    </div>\n\n    <!--Footer-->\n    <div class=\"modal-footer justify-content-center\">\n      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-primary-modal\">Save</button>\n    </div>\n  </div>\n  <!--/.Content-->\n</div>\n<!-- Central Modal Medium Warning-->\n";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["Modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <button type=\"button\" class=\"btn btn-outline-"
    + this.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + " close-modal\">Cancel</button>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "        <button type=\"button\" class=\"btn btn-primary-modal btn-"
    + alias1(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.primaryButton : depth0)) != null ? stack1.name : stack1), depth0))
    + "</button>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "        <a type=\"button\" class=\"btn btn-primary-modal btn-"
    + this.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" href=\"/pricing\" target=\"_blank\">Upgrade</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"modal-dialog modal-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + " modal-notify\" role=\"document\">\n\n  <!-- Modal content-->\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <p class=\"heading lead\">"
    + alias3(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</p>\n\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n      </button>\n    </div>\n\n    <div class=\"modal-body\">\n      <p class=\"text-center\">"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n    </div>\n\n    <div class=\"modal-footer\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cancelButton : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.primaryButton : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.upgradeButton : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n  </div> <!-- /modal-content -->\n</div>\n";
},"useData":true});

this["RQ"]["Templates"]["NeedHelpModal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "active";
},"3":function(depth0,helpers,partials,data) {
    return "selected";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!-- Modal Body-->\n<div class=\"modal-dialog modal-side modal-bottom-right cascading-modal\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header white-text\">\n      <h5 class=\"modal-title\" id=\"needHelpModalLabel\">\n        <i class=\"fa fa-envelope\"></i>\n        Need Help\n      </h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"text-center\">\n\n        <div class=\"form-row md-form\">\n          <div class=\"col\">\n            <!-- Name -->\n            <div class=\"md-form\">\n              <input type=\"text\" id=\"needHelpFormName\" data-key=\"name\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n              <label for=\"needHelpFormName\" class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">Your Name</label>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <!-- E-mail -->\n            <div class=\"md-form\">\n              <input type=\"text\" id=\"needHelpFormEmail\" data-key=\"email\" value=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n              <label for=\"needHelpFormEmail\" class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.email : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">Email</label>\n            </div>\n          </div>\n        </div>\n\n        <!-- Query Type -->\n        <div class=\"md-form\">\n          <div class=\"dropdown-container\">\n            <div class=\"dropdown\" data-key=\"queryType\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"              ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n              <ul class=\"dropdown-menu\">\n                <li>\n                  <a class=\"dropdown-item\"\n                     data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.NEED_HELP_QUERY_TYPES.QUESTION",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                     "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.NEED_HELP_QUERY_TYPES.QUESTION",(depth0 != null ? depth0.queryType : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Question</a>\n                </li>\n                <li>\n                  <a class=\"dropdown-item\"\n                     data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.NEED_HELP_QUERY_TYPES.FEEDBACK",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                     "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.NEED_HELP_QUERY_TYPES.FEEDBACK",(depth0 != null ? depth0.queryType : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Feedback</a>\n                </li>\n                <li>\n                  <a class=\"dropdown-item\"\n                     data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.NEED_HELP_QUERY_TYPES.BUG",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                     "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.NEED_HELP_QUERY_TYPES.FEEDBACK",(depth0 != null ? depth0.queryType : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Report a Bug</a>\n                </li>\n\n                <li>\n                <a class=\"dropdown-item\"\n                   data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.NEED_HELP_QUERY_TYPES.FEATURE_REQUEST",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                   "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.NEED_HELP_QUERY_TYPES.FEATURE_REQUEST",(depth0 != null ? depth0.queryType : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Feature Request</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!--Subject-->\n        <div class=\"md-form\">\n          <input type=\"text\" id=\"needHelpFormSubject\" data-key=\"subject\" value=\""
    + alias3(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"subject","hash":{},"data":data}) : helper)))
    + "\">\n          <label for=\"needHelpFormSubject\" class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.subject : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">Subject</label>\n        </div>\n\n        <!--Message-->\n        <div class=\"md-form\">\n          <textarea type=\"text\" id=\"needHelpFormMessage\" class=\"form-control md-textarea\" rows=\"3\" placeholder=\"Message\" data-key=\"message\">"
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</textarea>\n        </div>\n      </form>\n\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn close-modal\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary-modal\">Send Message</button>\n    </div>\n  </div>\n</div>\n<!-- Modal -->\n";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["RuleSourceFiltersModal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div class=\"row page-url-filter\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n              <select class=\"mdb-select operator-selector col-md-4\">\n                <option value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.EQUALS",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                        "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.EQUALS",(depth0 != null ? depth0.operator : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Equals</option>\n                <option value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.CONTAINS",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                        "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.CONTAINS",(depth0 != null ? depth0.operator : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Contains</option>\n                <option value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.MATCHES",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                        "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.MATCHES",(depth0 != null ? depth0.operator : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Matches (regex)</option>\n                 <option value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.WILDCARD_MATCHES",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                        "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.WILDCARD_MATCHES",(depth0 != null ? depth0.operator : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Matches (wildcard)</option>\n              </select>\n              <div class=\"operand-input col-md-8\">\n                <input type=\"text\" class=\"form-control\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"e.g. google\"/>\n              </div>\n            </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "selected";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"modal-dialog modal-notify\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <p class=\"heading lead\">Edit source filters</p>\n\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n      </button>\n    </div>\n\n    <div class=\"modal-body\">\n      <div class=\"row modal-row\">\n        <label class=\"filter-label active col-md-3\">Page URL</label>\n\n        <div class=\"filter-value-selector col-md-8\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.pageUrl : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n\n        <button type=\"button\" class=\"btn btn-link clear-filter col-md-1\" data-filter=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_SOURCE_FILTER_TYPES.PAGE_URL",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\">Clear</button>\n      </div>\n\n      <div class=\"row modal-row\">\n        <label class=\"filter-label active col-md-3\">Resource Type</label>\n\n        <div class=\"filter-value-selector resource-type-filter col-md-8\">\n          <select class=\"mdb-select\" multiple>\n            <option value=\"\" disabled "
    + ((stack1 = helpers.unless.call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),{"name":"unless","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">All</option>\n            <option value=\"xmlhttprequest\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),"xmlhttprequest",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">XHR</option>\n            <option value=\"script\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),"script",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">JS</option>\n            <option value=\"stylesheet\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),"stylesheet",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">CSS</option>\n            <option value=\"image\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),"image",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Image</option>\n            <option value=\"media\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),"media",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Media</option>\n            <option value=\"font\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),"font",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Font</option>\n            <option value=\"websocket\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),"websocket",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Web Socket</option>\n            <option value=\"main_frame\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),"main_frame",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Main Document</option>\n            <option value=\"sub_frame\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.resourceType : stack1),"sub_frame",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">IFrame Document</option>\n          </select>\n        </div>\n\n        <button type=\"button\" class=\"btn btn-link clear-filter col-md-1\" data-filter=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_SOURCE_FILTER_TYPES.RESOURCE_TYPE",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\">Clear</button>\n      </div>\n\n      <div class=\"row modal-row\">\n        <label class=\"filter-label active col-md-3\">Request Method</label>\n\n        <div class=\"filter-value-selector request-method-filter col-md-8\">\n          <select class=\"mdb-select\" multiple>\n            <option value=\"\" disabled "
    + ((stack1 = helpers.unless.call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.requestMethod : stack1),{"name":"unless","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">All</option>\n            <option value=\"GET\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.requestMethod : stack1),"GET",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">GET</option>\n            <option value=\"POST\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.requestMethod : stack1),"POST",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">POST</option>\n            <option value=\"PUT\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.requestMethod : stack1),"PUT",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">PUT</option>\n            <option value=\"DELETE\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.requestMethod : stack1),"DELETE",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">DELETE</option>\n            <option value=\"OPTIONS\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.requestMethod : stack1),"OPTIONS",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">OPTIONS</option>\n            <option value=\"TRACE\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.requestMethod : stack1),"TRACE",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">TRACE</option>\n            <option value=\"CONNECT\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.requestMethod : stack1),"CONNECT",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">CONNECT</option>\n            <option value=\"HEAD\" "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.requestMethod : stack1),"HEAD",{"name":"contains","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">HEAD</option>\n          </select>\n        </div>\n\n        <button type=\"button\" class=\"btn btn-link clear-filter col-md-1\" data-filter=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_SOURCE_FILTER_TYPES.REQUEST_METHOD",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\">Clear</button>\n      </div>\n    </div>\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-primary-modal\">Save</button>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["RQ"]["Templates"]["ShareRulesModal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "     <div class=\"modal-body\">\n      <div class=\"text-center\">\n        <div class=\"text-center\">\n          <p>Here's the generated Shared List url.<br/>You can share the url with other requestly users.</p>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-describedby=\"basic-addon2\" value="
    + alias3(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + " readonly>\n            <div class=\"input-group-append\">\n              <button type=\"button\"\n                data-clipboard-text=\""
    + alias3(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + "\"\n                class=\"btn btn-primary-modal btn-success sharedUrl-copy-button trial input-group-text\" \n                id=\"basic-addon2\">\n                <i class=\"fa fa-copy\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "    <div class=\"modal-body\">\n      <div class=\"text-center\">\n        <i class=\"fa fa-check fa-4x fas mb-3 animated rotateIn\"></i>\n        <div class=\"text-center\">\n          <p>Please enter a name for your shared list of rules</p>\n          <input id=\"shared-list-name-field\" type=\"text\" class=\"form-control\" placeholder=\"My Shared list\" data-key=\"listName\">\n        </div>\n      </div>\n    </div>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "      <button type=\"button\"\n         data-event=\"modal:closed\"\n         data-dismiss=\"modal\"\n         data-clipboard-text=\""
    + this.escapeExpression(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + "\"\n         class=\"btn btn-primary-modal btn-success sharedUrl-copy-button trial\">Copy URL & Close <i class=\"fa fa-diamond ml-1\"></i></button>\n";
},"7":function(depth0,helpers,partials,data) {
    return "      <button type=\"button\" \n        data-event=\"enterSharedListName\" \n        class=\"btn btn-primary-modal btn-success\">Generate SharedList Url</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Central Modal Medium Warning -->\n<div class=\"modal-dialog modal-notify modal-success\" role=\"document\">\n  <!--Content-->\n  <div class=\"modal-content\">\n    <!--Header-->\n    <div class=\"modal-header\">\n      <p class=\"heading lead\">Share Rules</p>\n\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n      </button>\n    </div>\n\n    <!--Body-->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.sharedUrl : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n    <!--Footer-->\n    <div class=\"modal-footer justify-content-center\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.sharedUrl : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <!--/.Content-->\n</div>\n<!-- Central Modal Medium Warning-->\n";
},"useData":true});

this["RQ"]["Templates"]["SusiModal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "            "
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
    return "            Please login with Google to share your rules with other users.\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal-dialog modal-notify modal-danger\" role=\"document\">\n  <!--Content-->\n  <div class=\"modal-content\">\n    <!--Header-->\n    <div class=\"modal-header\">\n      <p class=\"heading lead\">Sign In</p>\n\n      <button type=\"button\" class=\"close close-modal\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n      </button>\n    </div>\n\n    <!--Body-->\n    <div class=\"modal-body\">\n      <div class=\"text-center\">\n        <i class=\"fa fa-google-plus fa-4x mb-3 animated rotateIn\"></i>\n        <p>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </p>\n      </div>\n    </div>\n\n    <!--Footer-->\n    <div class=\"modal-footer justify-content-center\">\n      <button type=\"button\" class=\"btn btn-outline-grey waves-effect close-modal\" data-dismiss=\"modal\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-danger btn-primary-modal auth-provider\">SignIn <i class=\"fa fa-sign-in ml-1\"></i></button>\n    </div>\n  </div>\n  <!--/.Content-->\n</div>";
},"useData":true});

this["RQ"]["Templates"]["CancelRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <div class=\"well pair-container\" data-index=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"withFilters":true},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "      </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Block/Cancel Network Requests"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Enter Keywords or Urls or Domains to be blocked"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["GroupInfo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"group-name\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n<span>/</span>\n";
},"useData":true});

this["RQ"]["Templates"]["HeadersRuleTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"well pair-container\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"pb-2\">\n\n            <div class=\"header-modification-type-container\">\n              <div class=\"dropdown-container\">\n                <div class=\"dropdown\" data-key=\"type\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"                  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n                  <ul class=\"dropdown-menu\">\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.ADD",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.ADD",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Add</a>\n                    </li>\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Remove</a>\n                    </li>\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.MODIFY",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.MODIFY",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Modify</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"header-target-container\">\n              <div class=\"dropdown-container\">\n                <div class=\"dropdown\" data-key=\"target\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"                  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n                  <ul class=\"dropdown-menu\">\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.HEADERS_TARGET.REQUEST",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.HEADERS_TARGET.REQUEST",(depth0 != null ? depth0.target : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Request</a>\n                    </li>\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.HEADERS_TARGET.RESPONSE",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.HEADERS_TARGET.RESPONSE",(depth0 != null ? depth0.target : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Response</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"input-group header-name-input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Header</span>\n              </div>\n\n              <input id=\"form-autocomplete\" type=\"text\" class=\"form-control header-input mdb-autocomplete\" data-key=\"header\" placeholder=\"Header Name\" value=\""
    + alias3(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper)))
    + "\">\n              <span class=\"warning-icon hidden\"><i class=\"warning fa fa-exclamation-triangle\" data-toggle=\"tooltip\"\n               aria-hidden=\"true\" title = \"Browser extensions are not allowed to modify this header!\" data-placement = \"bottom\"></i></span>\n            </div>\n\n"
    + ((stack1 = (helpers.unequalsGlobalVar || (depth0 && depth0.unequalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE",(depth0 != null ? depth0.type : depth0),{"name":"unequalsGlobalVar","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"withFilters":true,"sourcePlaceholder":"Leave this field Empty to apply above modification to all urls"},"data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "selected";
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return "              <div class=\"input-group header-value-input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Value</span>\n                </div>\n                <input type=\"text\" class=\"form-control value-input\" data-key=\"value\" placeholder=\"Header Value\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\"/>\n              </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Modify Headers in HTTP Request and Response"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n\n\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Headers Modification Rules"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["QueryParamsRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <div class=\"pair-container well\" data-index=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n\n"
    + ((stack1 = this.invokePartial(partials.ContainerHeading,depth0,{"name":"ContainerHeading","hash":{"heading":"Request Url on which modifications will be applied"},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        <div>\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"withFilters":true,"sourcePlaceholder":"Leave this field Empty to apply below modifications to all urls"},"data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n\n"
    + ((stack1 = this.invokePartial(partials.ContainerHeading,depth0,{"name":"ContainerHeading","hash":{"heading":"Modifications"},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        <div class=\"modifications-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modifications : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n\n        <button type=\"button\" class=\"btn btn-default add-modification\">\n          <i class=\"fa fa-plus-circle\"></i>\n          <span>Add Modification</span>\n        </button>\n      </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div class=\"modification-container\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n              <div class=\"modification-type-container\">\n                <div class=\"dropdown-container\">\n                  <div class=\"dropdown\" data-key=\"modifications."
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + ".type\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n                    <ul class=\"dropdown-menu\">\n                      <li>\n                        <a class=\"dropdown-item\"\n                           data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.ADD",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                           "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.ADD",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Add/Replace</a>\n                      </li>\n                      <li>\n                        <a class=\"dropdown-item\"\n                           data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                           "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Remove</a>\n                      </li>\n                      <li>\n                        <a class=\"dropdown-item\"\n                           data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE_ALL",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                           "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE_ALL",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Remove All</a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n\n"
    + ((stack1 = (helpers.unequalsGlobalVar || (depth0 && depth0.unequalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE_ALL",(depth0 != null ? depth0.type : depth0),{"name":"unequalsGlobalVar","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.ADD",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n              <div class=\"modification-actions-container inline-container\">\n                <span class=\"fa fa-trash-o delete-modification action-icon\"></span>\n              </div>\n\n"
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE_ALL",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "selected";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <div class=\"input-group param-name-input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Param</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control param-input\" data-key=\"modifications."
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + ".param\" placeholder=\"Param Name\" value=\""
    + alias3(((helper = (helper = helpers.param || (depth0 != null ? depth0.param : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"param","hash":{},"data":data}) : helper)))
    + "\">\n                </div>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <div class=\"input-group param-value-input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Value</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control param-value\" data-key=\"modifications."
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + ".value\" placeholder=\"Param Value\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">\n                </div>\n";
},"9":function(depth0,helpers,partials,data) {
    return "                <div class=\"inline-container\">\n                  <span class=\"remove-all-params-message\">(Remove all query parameters)</span>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Modify query parameters"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Query Parameter Modifications"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["RedirectRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"well pair-container\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"withFilters":true},"data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n      <div class=\"destination-container row\">\n        <div class=\"col-md-1 pl-0 \">\n          <label class=\"active destination-label mt-2\">Destination Url</label>\n        </div>\n\n        <div class=\"col-md-11 pl-0\">\n          <input type=\"url\" class=\"destination-url-input form-control\" data-key=\"destination\"\n                 value=\""
    + alias3(((helper = (helper = helpers.destination || (depth0 != null ? depth0.destination : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"destination","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias3(((helper = (helper = helpers.destinationPlaceholder || (depth0 != null ? depth0.destinationPlaceholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"destinationPlaceholder","hash":{},"data":data}) : helper)))
    + "\"  "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.fileName : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        </div>\n      </div>\n\n"
    + ((stack1 = helpers.unless.call(depth0,(depths[1] != null ? depths[1].isViewMode : depths[1]),{"name":"unless","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return " disabled ";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"file-picker-container\">"
    + ((stack1 = this.invokePartial(partials.FilePickerOptions,depth0,{"name":"FilePickerOptions","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Redirect Request Rule"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n  "
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " "
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Source Destination Pairs"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n\n  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});

this["RQ"]["Templates"]["ReplaceRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"well pair-container\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"from-to-container\">\n          <div class=\"input-group from-input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Replace</span>\n            </div>\n\n            <input type=\"text\" class=\"form-control from-input\" data-key=\"from\" placeholder=\"This part in URL\" value=\""
    + alias3(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">\n          </div>\n\n          <div class=\"input-group to-input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">With</span>\n            </div>\n            <input type=\"text\" class=\"form-control to-input\" data-key=\"to\" placeholder=\"Will be replaced by this string\" value=\""
    + alias3(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"to","hash":{},"data":data}) : helper)))
    + "\">\n          </div>\n        </div>\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"withFilters":true,"sourcePlaceholder":"Leave this field Empty to apply above modification to all urls"},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "      </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Replace Host or some part of URL"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Pairs"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["ScriptRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "      <div class=\"pair-container\" data-index=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"well\">\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"sourcePlaceholder":"Leave this field Empty to add below scripts to all websites"},"data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"title\">Scripts</div>\n        <div class=\"library-section well\">\n          <label class=\"active\">Library:</label>\n"
    + ((stack1 = (helpers.eachGlobalVar || (depth0 && depth0.eachGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LIBRARIES",{"name":"eachGlobalVar","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.scripts : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <button type=\"button\" class=\"btn btn-default add-script\">\n          <i class=\"fa fa-plus-circle\"></i>\n          <span>Add Custom Script</span>\n        </button>\n      </div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div class=\"library-option form-check\">\n              <input type=\"checkbox\" class=\"filled-in form-check-input\" id=\"checkbox-"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" name=\"library\" value=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\"\n              "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,(depths[1] != null ? depths[1].libraries : depths[1]),(data && data.key),{"name":"contains","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n              <label for=\"checkbox-"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <div class=\"script-section well\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"row form-check\">\n              <label class=\"active\">Code Type:</label>\n\n              <input type=\"radio\" name=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-codeType\" id=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-codeType-1\" class=\"with-gap script-codeType form-check-input\"\n                value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_CODE_TYPES.JS",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_CODE_TYPES.JS",(depth0 != null ? depth0.codeType : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n              <label class=\"script-codeType-label\" for=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-codeType-1\">JavaScript</label>\n\n              <input type=\"radio\" name=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-codeType\" id=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-codeType-2\" class=\"with-gap script-codeType form-check-input\"\n                value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_CODE_TYPES.CSS",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_CODE_TYPES.CSS",(depth0 != null ? depth0.codeType : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n              <label class=\"script-codeType-label\" for=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-codeType-2\">CSS</label>\n\n              <span class=\"fa fa-trash-o remove-script\" title=\"Remove\"></span>\n            </div>\n\n            <div class=\"script-code-block\">\n              <div class=\"script-options row\">\n                <div class=\"script-source-container form-check\">\n                  <label class=\"active\">Insert from:</label>\n                  <input type=\"radio\" name=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type\" id=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type-1\" class=\"with-gap script-type form-check-input\"\n                    value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.URL",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.URL",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <label class=\"script-type-label\" for=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type-1\">URL</label>\n\n                  <input type=\"radio\" name=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type\" id=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type-2\" class=\"with-gap script-type form-check-input\"\n                    value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.CODE",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.CODE",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <label class=\"script-type-label\" for=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type-2\">Custom Code</label>\n                </div>\n\n"
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_CODE_TYPES.JS",(depth0 != null ? depth0.codeType : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n\n"
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.URL",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.CODE",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n          </div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "checked";
},"8":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                  <div class=\"script-load-time-container dropdown-container\">\n                    <label class=\"active\">Insert on:</label>\n                    <div class=\"script-load-time dropdown\">\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"                      ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                      <ul class=\"dropdown-menu\">\n                        <li>\n                          <a class=\"dropdown-item\" data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LOAD_TIME.BEFORE_PAGE_LOAD",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                            "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LOAD_TIME.BEFORE_PAGE_LOAD",(depth0 != null ? depth0.loadTime : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Before Page Load</a>\n                        </li>\n                        <li>\n                          <a class=\"dropdown-item\" data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LOAD_TIME.AFTER_PAGE_LOAD",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                            "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LOAD_TIME.AFTER_PAGE_LOAD",(depth0 != null ? depth0.loadTime : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">After Page Load</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n";
},"9":function(depth0,helpers,partials,data) {
    return "selected";
},"11":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "                <input type=\"text\" class=\"form-control script-url-input\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\"\n                  placeholder=\"Enter source URL (relative or absolute)\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.fileName : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "/>\n                <div class=\"file-picker-container\">"
    + ((stack1 = this.invokePartial(partials.FilePickerOptions,depth0,{"name":"FilePickerOptions","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n";
},"12":function(depth0,helpers,partials,data) {
    return " disabled ";
},"14":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <div class=\"script-code-container\">\n                  <textarea type=\"text\" class=\"form-control md-textarea script-code-input\" rows=\"5\" cols=\"130\"\n                    placeholder=\"Enter code snippet here (max 500 characters)...\" data-codeType=\""
    + alias3(((helper = (helper = helpers.codeType || (depth0 != null ? depth0.codeType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"codeType","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</textarea>\n                  <div class=\"script-code-characters\"><span class=\"count\">"
    + alias3((helpers.subtract || (depth0 && depth0.subtract) || alias1).call(depth0,500,((stack1 = (depth0 != null ? depth0.value : depth0)) != null ? stack1.length : stack1),{"name":"subtract","hash":{},"data":data}))
    + "</span> characters</div>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Insert custom JS / CSS in a website"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});

this["RQ"]["Templates"]["UserAgentRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"well pair-container\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"row\">\n          <div class=\"user-agent-container\">\n            <label class=\"active row-label\">"
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.HEADER_NAMES.USER_AGENT",{"name":"readGlobalVar","hash":{},"data":data}))
    + "</label>\n            <div class=\"dropdown-container\">\n              <div class=\"dropdown env-type-selector\" data-key=\"envType\">\n                <button class=\"btn dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n                  <span class=\"dropdown-value\" data-value=\"\">Select</span>\n                  <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li>\n                    <a class=\"dropdown-item\" data-value=\"device\"\n                      "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"device",{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Device</a>\n                  </li>\n                  <li>\n                    <a class=\"dropdown-item\" data-value=\"browser\"\n                      "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"browser",{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Browser</a>\n                  </li>\n                  <li>\n                    <a class=\"dropdown-item\" data-value=\"custom\"\n                      "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"custom",{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Custom</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n"
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"device",{"name":"equals","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"browser",{"name":"equals","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"custom",{"name":"equals","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </div>\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"withFilters":true,"sourcePlaceholder":"Leave this field Empty to apply above modification to all urls"},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        <div class=\"request-type custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"request-type-checkbox custom-control-input\" id=\"checkbox-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n            "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.REQUEST_TYPES.MAIN_FRAME",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.requestType : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <label for=\"checkbox-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"custom-control-label\">If the source points to a website URL, rule will apply on all requests originated from the page.</label>\n        </div>\n      </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "selected";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "              <div class=\"dropdown-container\">\n                <div class=\"dropdown env-value-selector\" data-key=\"env\">\n                  <button class=\"btn dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n                    <span class=\"dropdown-value\" data-value=\"\">Select device</span>\n                    <span class=\"caret\"></span>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n"
    + ((stack1 = (helpers.eachGlobalVar || (depth0 && depth0.eachGlobalVar) || helpers.helperMissing).call(depth0,"RQ.UserAgentLibrary.USER_AGENT.device",{"name":"eachGlobalVar","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                  </ul>\n                </div>\n              </div>\n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.values : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "                        <li class=\"dropdown-submenu\">\n                          <a class=\"dropdown-item\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n                          <ul class=\"dropdown-menu\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                          </ul>\n                        </li>\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                              <li>\n                                <a class=\"dropdown-item\" data-value=\""
    + alias2((helpers.concat || (depth0 && depth0.concat) || alias1).call(depth0,(this.data(data, 1) && this.data(data, 1).key),".",(data && data.key),{"name":"concat","hash":{},"data":data}))
    + "\"\n                                  "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depths[3] != null ? depths[3].env : depths[3]),(helpers.concat || (depth0 && depth0.concat) || alias1).call(depth0,(this.data(data, 1) && this.data(data, 1).key),".",(data && data.key),{"name":"concat","hash":{},"data":data}),{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n                              </li>\n";
},"9":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <li>\n                          <a class=\"dropdown-item\" data-value=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\"\n                            "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depths[2] != null ? depths[2].env : depths[2]),(data && data.key),{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n                        </li>\n";
},"11":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "              <div class=\"dropdown-container\">\n                <div class=\"dropdown env-value-selector\" data-key=\"env\">\n                  <button class=\"btn dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n                    <span class=\"dropdown-value\" data-value=\"\">Select browser</span>\n                    <span class=\"caret\"></span>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n"
    + ((stack1 = (helpers.eachGlobalVar || (depth0 && depth0.eachGlobalVar) || helpers.helperMissing).call(depth0,"RQ.UserAgentLibrary.USER_AGENT.browser",{"name":"eachGlobalVar","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                  </ul>\n                </div>\n              </div>\n";
},"13":function(depth0,helpers,partials,data) {
    var helper;

  return "              <input type=\"text\" class=\"user-agent-input form-control\" data-key=\"userAgent\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.userAgent || (depth0 != null ? depth0.userAgent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"userAgent","hash":{},"data":data}) : helper)))
    + "\"\n                 placeholder=\"Enter user agent string\">\n";
},"15":function(depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Override User-Agent in HTTP Request"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Source User-Agent Pairs"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n\n"
    + ((stack1 = this.invokePartial(partials.NeedHelpModalActivate,depth0,{"name":"NeedHelpModalActivate","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
var StorageObjectCollection = Backbone.Collection.extend({
  model: StorageObjectModel,

  objectType: '', // to be overridden by child

  fetch: function(options) {
    options = options || {};

    const that = this,
      doForceFetch = _.isUndefined(options.forceFetch) ? true : options.forceFetch;

    RQ.StorageService.getRecords(this.objectType, doForceFetch).then(records => {
      that.models.length = 0;

      _.each(records, function(record) {
        const model = new that.model(record);
        that.add(model);
      });

      if (typeof options.success === 'function') {
        options.success(that);
      }

      that.trigger('loaded');
    });
  },

  comparator: function(model) {
    // By default rules should be sorted by timestamp in decreasing order
    // Latest rule should come on top
    return -1 * model.getTimestampFromId();
  }
});

var RulesCollection = StorageObjectCollection.extend({
  model: BaseRuleModel,

  objectType: RQ.OBJECT_TYPES.RULE
});
var RuleGroupsCollection = StorageObjectCollection.extend({
  model: RuleGroupModel,

  objectType: RQ.OBJECT_TYPES.GROUP
});

var PushNotificationCollection = Backbone.Collection.extend({
  model: PushNotificationModel,

  // jQuery throws an error in Firefox when we passed relative URL (Malformed URI)
  url: RQ.configs.WEB_URL + '/rules/assets/external/static/notifications.json',

  handleItemsFetched: function() {
    const that = this;

    RQ.StorageService.getRecord(RQ.STORAGE_KEYS.LATEST_NOTIFICATION_READ_BY_USER).then(lastNotificationRead => {
      const notificationIdReadByUser = lastNotificationRead || -1;
      _.each(that.models, model => model.set('isRead', model.get('id') <= notificationIdReadByUser));

      that.trigger('loaded');
    });
  },

  fetchItems: function() {
    this.fetch({
      success: this.handleItemsFetched.bind(this)
    });
  },

  parse: function(response) {
    return response.items;
  }
});

var SharedRulesCollection = RulesCollection.extend({
  fetch: function(fetchSharedListDataPromise) {
    var that = this;

    fetchSharedListDataPromise.then(function(sharedList) {
      Logger.log('SharedList object is - ', sharedList);

      // When user opens a deleted or invalid sharedList, sharedListRef does not exist and thus sharedList object is undefined
      sharedList = sharedList || {};
      var rules = sharedList.rules || [];

      _.each(rules, function(ruleObject) {
        var model = new that.model(ruleObject);
        that.add(model);
      });

      that.trigger('loaded');
    });
  }
});

var SharedRuleGroupsCollection = RuleGroupsCollection.extend({
  fetch: function(fetchSharedListDataPromise) {
    var that = this;

    fetchSharedListDataPromise.then(function(sharedList) {
      // When user opens a deleted or invalid sharedList, sharedListRef does not exist and thus sharedList object is undefined
      sharedList = sharedList || {};
      var groups = sharedList.groups || [];

      _.each(groups, function(groupObject) {
        var model = new that.model(groupObject);
        that.add(model);
      });

      that.trigger('loaded');
    });
  }
});

var SharedListCollection = Backbone.Collection.extend({
  model: SharedListModel,

  /**
   * Shared Lists are stored partially under User Node and partially under Public Node
   * Rules, access, isEnabled, shareId are under public Node
   * listName, shareId, creationDate are under user Node
   * We do not need isEnabled flag on ShareLists screen
   */
  fetchSharedLists: function() {
    var that = this,
      currentUserSharedLists = RQ.currentUser.getUserSharedListsPath();

    RQ.DataStoreUtils.getValue(currentUserSharedLists)
      .then(list => {
        _.each(list, function(listItem) {
          // Set List Name and shareId from sharedList under User Node
          var listModel = new that.model(listItem);

          listModel.set('id', listItem.shareId);
          listModel.set('sharedUrl', RQ.getSharedURL(listItem.shareId, listItem.listName));

          that.add(listModel);
        });

        that.trigger('loaded');
      }, function(error) {
        alert('Error fetching rules from sharedList: ' + error.code);
      }
    );
  }
});

/**
 * BaseView is a thin wrapper over Backbone View
 * Provides Utility methods and defines a worfklow for registeringEvents, loading data, mixins and initializing additional components
 */
var BaseView = Backbone.View.extend({
  Mixins: [],

  /**
   * Only concrete classes should enable inclusion of components
   */
  includeComponents: {
    needHelpModal: false,
    susiModal: false
  },

  events: {
    'click #needHelpModalActivate': 'showNeedHelpModal'
  },

  loadMixin: function(mixin) {
    _.extend(this, mixin);
  },

  loadMixins: function(mixins) {
    _.each(mixins, this.loadMixin, this);
  },

  initialize: function(options) {
    this.registerBinders();
    this.loadMixins(this.Mixins);
    this.addCommonComponents();
    this.alsoInitialize(options);
  },

  alsoInitialize: function(options) { /* No Op */ },

  /**
   * Load data as model/collection
   */
  loadData: function(options) {
    throw new Error('Child class must implement loadData and create/update its model/collection');
  },

  render: function(options) {
    options = options || {};

    var scrollTop = this.$el.find('.rule-body').scrollTop();

    this.onBeforeRender(options);

    /* If template is not passed as option,
     every editor view has to provide its own template by getTemplate method */
    this.template = options.template || this.getTemplate();

    this.$el.html(this.getMarkup(this.template));
    this.rendered = new Date().getTime();

    this.onRenderComplete();

    this.$el.find('.rule-body').scrollTop(scrollTop);
  },

  onBeforeRender: function(options) {
    if (this.childViews && this.childViews.length) {
      _.each(this.childViews, function(childView) {
        childView.close();
      })
    }
    this.childViews = [];

    this.loadData(options);
  },

  onRenderComplete: function() {
    this.initWidgets();
    this.renderSubComponents();
  },

  getMarkup: function(template) {
    return template(this.model.toJSON());
  },

  addCommonComponents: function() {
    this.includeComponents.needHelpModal && this.addNeedHelpModal();
    this.includeComponents.susiModal && this.addSusiModal();
  },

  addNeedHelpModal: function() {
    this.needHelpModal = new NeedHelpModal();
  },

  addSusiModal: function() {
    this.susiModal = new SusiModal();
  },

  showNeedHelpModal: function(event) {
    const that = this,
      needHelpFeature = RQ.GA_EVENTS.CATEGORIES.NEED_HELP_FEATURE,
      workflowStarted = RQ.GA_EVENTS.ACTIONS.WORKFLOW_STARTED,
      loginRequested = RQ.GA_EVENTS.ACTIONS.LOGIN_REQUESTED,
      loginRejected = RQ.GA_EVENTS.ACTIONS.LOGIN_REJECTED,
      loginDone = RQ.GA_EVENTS.ACTIONS.LOGIN_DONE,
      alreadyLoggedIn = RQ.GA_EVENTS.ACTIONS.ALREADY_LOGIN;

    RQ.Utils.submitEvent(needHelpFeature, workflowStarted, needHelpFeature + ' ' + workflowStarted);

    RQ.currentUser.isUserAuthenticated(function(isLoggedIn) {
      if (!isLoggedIn) {
        RQ.Utils.submitEvent(needHelpFeature, loginRequested, needHelpFeature + ' ' + loginRequested);

        that.showLoginModal(
          function() {
            RQ.Utils.submitEvent(needHelpFeature, loginDone, needHelpFeature + ' ' + loginDone);

            that.susiModal.hide();

            Logger.log('User successfully authenticated with name', RQ.currentUser.getProfile()['displayName']);

            that.needHelpModal.show({
              model: {
                name: RQ.currentUser.getProfile()['displayName'],
                email: RQ.currentUser.getProfile()['email']
              },
              update: true
            });
          },
          function() {
            RQ.Utils.submitEvent(needHelpFeature, loginRejected, needHelpFeature + ' ' + loginRejected);
            that.needHelpModal.show();
          }
        );
      } else {
        RQ.Utils.submitEvent(needHelpFeature, alreadyLoggedIn, needHelpFeature + ' user already logged in');

        that.needHelpModal.show({
          model: {
            name: RQ.currentUser.getProfile()['displayName'],
            email: RQ.currentUser.getProfile()['email']
          }
        });
      }
    });
  },

  showLoginModal: function(loginCallback, closeModalCallback, model) {
    model = model || { content: RQ.MESSAGES.SIGN_IN_TO_SUBMIT_QUERY };

    this.susiModal.show({
      model: model,
      loginCallback: loginCallback,
      closeModalCallback: closeModalCallback
    });
  },

  registerBinders: function() { /* No Op */ },

  // To be overridden by inheriting component
  alsoValidate: function() { return true; },

  removeAdditionalFields: function() { /* No Op */ },

  initWidgets: function() { /* No Op */ },

  renderSubComponents: function() { /* No Op */ }
});

/**
 * BaseModelView is a BackBone view backed by Backbone Model
 * Provides Utility methods and defines a workflow for registeringEvents, loading model or collection, mixins and initializing additional components
 */
var BaseModelView = BaseView.extend({
  toString: 'BaseModelView',

  Mixins: [],

  Model: Backbone.Model,

  events: _.extend(BaseView.prototype.events, {
    'click .dropdown .dropdown-item': 'handleDropdownValueChanged'
  }),

  /**
   * loadModel: loads model and binds to the view
   * Called before rendering is done. Need to ensure that rendering works for first time (model does not exist) and re-rendering
   * @param options.model Backbone Model instance or just a backbone model class
   * optins.update Update the model or not. In case re-rendering we may not want to update the model again
   */
  loadData: function(options) {
    var modelOrData = options.model;

    // Update model either update is passed or model was not created previously
    // We may want to call render again & again on same model
    if (!this.isBackboneModel(this.model) || options.update) {
      Logger.log(this.toString, 'Updating model with new data', modelOrData);
      this.updateModel(modelOrData)
    }
  },

  updateModel: function(modelOrData) {
    if (modelOrData instanceof Backbone.Model) {
      this.model = modelOrData;
    } else {
      this.model = new this.Model(modelOrData);
    }
  },

  isBackboneModel: function(model) {
    return model && model instanceof Backbone.Model;
  },

  updateDropdownSelectionState: function($dropdown) {
    $dropdown = $($dropdown);

    var $selectedOption = $dropdown.find('.dropdown-item[selected]'),
      $displayButton = $dropdown.find('.dropdown-toggle');

    $displayButton.find('.dropdown-value')
      .html($selectedOption.html())
      .attr('data-value', $selectedOption.attr('data-value'));
  },

  initDropdowns: function() {
    _.each(this.$el.find('.dropdown'), this.updateDropdownSelectionState, this);
  }

});

/**
 * BaseIndexView is usually backed by a Collection.
 * BaseIndexView should be used for rendering a table
 */
var BaseIndexView = BaseView.extend({
  events: _.extend(BaseView.prototype.events, {
    'click .select-all-rows-checkbox': 'selectAllRows',
    'click .select-row-checkbox': 'handleSelectionCheckboxClick',
    'click .item-row': 'handleRowClick',
    'click .delete-items-button': 'handleSelectedItemsDelete',
    'click .delete-item-button': 'handleItemDelete',
    'click .action-button': 'hideActionTooltip'
  }),

  loadData: function(options) {
    if (options && options.update) {
      // updateCollection will trigger 'loaded' event which will render the view
      this.updateCollection(options);
    }
  },

  handleSelectionCheckboxClick: function(event) {
    var $checkbox = $(event.currentTarget);
    this.selectRow($checkbox.closest('.item-row'), $checkbox.is(':checked'));
  },

  handleRowClick: function(event) {
    if ($(event.target).closest('.actionable').length > 0) {
      return;
    }

    var $row = $(event.currentTarget),
      $checkbox = $row.find('.select-row-checkbox'),
      isChecked = $checkbox.is(':checked');

    $checkbox.prop('checked', !isChecked);
    this.selectRow($row, !isChecked);
  },

  selectRow: function($row, flag) {
    $row.toggleClass('selected', flag);

    if (!flag) {
      this.getTable($row).find('.select-all-rows-checkbox').prop('checked', false);
    }
  },

  selectAllRows: function(event) {
    var $selectAllCheckbox = $(event.currentTarget),
      $table = this.getTable($selectAllCheckbox),
      isChecked = $selectAllCheckbox.is(':checked');

    $table.find('.select-row-checkbox').prop('checked', isChecked);
    $table.find('.item-row').toggleClass('selected', isChecked);
  },

  getTable: function(elem) {
    return $(elem).closest('.rq-table');
  },

  /**
   * Get selected rows to perform bulk action like Delete, Share, Group, etc.
   * @param $table the containing table, if not passed all selected rows in page will be returned
   * @returns {Array} selected rows in specified table or in page
   */
  getSelectedRows: function($table) {
    var $checkboxes = $table ? $table.find('.select-row-checkbox:checked') : $('.select-row-checkbox:checked'),
      $selectedRows = $checkboxes.closest('.item-row'),
      items = [];

    _.each($selectedRows, function(row) {
      items.push(this.getItemFromRow(row));
    }, this);

    return items;
  },

  getItemFromRow: function(row) {
    var $row = $(row),
      itemId = $row.data('id');

    return this.collection.get(itemId);
  },

  handleSelectedItemsDelete: function() {
    this.confirmAndDeleteSelectedItems(this.getSelectedRows());
  },

  handleItemDelete: function(event) {
    var $targetRule = $(event.target).closest('.item-row'),
      row = this.getItemFromRow($targetRule);

    event.stopPropagation();

    this.confirmAndDeleteSelectedItems([row]);
  },

  confirmAndDeleteSelectedItems: function(selectedItems) {
    var numSelectedItems = selectedItems.length;

    if (!numSelectedItems) {
      alert(RQ.MESSAGES.DELETE_ITEMS_NO_SELECTION_WARNING);
      return;
    }

    if (confirm(RQ.MESSAGES.DELETE_ITEMS)) {
      this.deleteItems(selectedItems);
    }
  },

  hideActionTooltip: function(event) {
    $(event.currentTarget).tooltip('hide');
  },

  initWidgets: function() { },
  deleteItems: function() { },

  updateCollection: function() {
    throw new Error('Child class must implement logic to updateCollection');
  }
});

/**
 * Usage: RQ.showModalView(modalView, {
 *   model: {
 *     type: 'success', // success, danger
 *     heading: 'Confirm Delete',
 *     content: 'Are you sure you want to delete the rule ?'
 *     cancelButton: true,
 *     primaryButton: {
 *       text: 'Delete'
 *     }
 *  });
 */
const Modal = BaseModelView.extend({
  className: 'modal fade',

  attributes: {
    role: 'dialog'
  },

  getTemplate: function() {
    return RQ.Templates.Modal;
  },

  events: _.extend(BaseModelView.prototype.events, {
    'change input[data-key]': 'updateValueFromInput',
    'change textarea[data-key]': 'updateValueFromInput',
    'click .modal-footer .btn-primary-modal': 'handlePrimaryButtonClicked',
    'click .close-modal': 'handleCloseModalClicked'
  }),

  handlePrimaryButtonClicked: function() { /* No Op */ },

  handleCloseModalClicked: function() { /* No Op */ },

  updateValueFromInput: function(event) {
    this.model.set(event.target.getAttribute('data-key'), event.target.value);
  },

  initWidgets: function() { /* No Op */},

  show: function(options) {
    RQ.showModalView(this, options);
  },

  hide: function() {
    $(this.el).modal('hide');
  }
});

var SusiModal = Modal.extend({
  id: 'susi-modal',
  className: 'modal',

  getTemplate: function() {
    return RQ.Templates.SusiModal;
  },

  registerBinders: function() {
    this.handleLoginError = this.handleLoginError.bind(this);
  },

  handlePrimaryButtonClicked: function() {
    RQ.currentUser.authenticate(this.loginCallback);
  },

  show: function(options) {
    RQ.showModalView(this, options);

    if (options.loginCallback) {
      this.loginCallback = options.loginCallback;
    }

    if (options.closeModalCallback) {
      this.closeModalCallback = options.closeModalCallback;
    }
  },

  handleLoginError: function(error) {
    console.log('Error signin in:', error);
  },

  handleCloseModalClicked: function() {
    if (this.closeModalCallback) {
      this.closeModalCallback();
    }
  }
});
var ShareRulesModal = Modal.extend({
  id: 'share-rules-modal',

  getTemplate: function() {
    return RQ.Templates.ShareRulesModal;
  },

  initWidgets: function() {
    this.clipboard = new Clipboard('.sharedUrl-copy-button');
    const that = this;

    this.clipboard.on('success', function(e) {
      RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.COPIED, 'SharedList url copied from dialog');
      Notification.show('success', 'Success: SharedList url copied to clipboard!');
    });
  },

  handlePrimaryButtonClicked: function(event) {
    var eventName = event.currentTarget.getAttribute('data-event');
    this.trigger(eventName, this.model.toJSON());
  },

  destructWidgets: function() {
    this.clipboard.destroy();
  }
});

/**
 * Created by sachinjain on 13/08/18.
 */
var NeedHelpModal = Modal.extend({
  className: 'modal',

  Model: Backbone.Model.extend({
    defaults: {
      'name': '',
      'email': '',
      'queryType': RQ.NEED_HELP_QUERY_TYPES.QUESTION,
      'subject': '',
      'message': ''
    }
  }),

  id: 'need-help-modal',

  getTemplate: function() {
    return RQ.Templates.NeedHelpModal;
  },

  show: function(options) {
    RQ.showModalView(this, options);
  },

  initWidgets: function() {
    this.initDropdowns();
  },

  handleDropdownValueChanged: function(event) {
    var $target = $(event.target),
      value = $target.attr('data-value');

    if (value === void 0) {
      return false;
    }

    var $dropdown = $target.parents('.dropdown'),
      key = $dropdown.attr('data-key');

    $dropdown.find('.dropdown-item').removeAttr('selected');
    $target.attr('selected', true);

    this.updateDropdownSelectionState($dropdown);

    this.model.set(key, value);
  },

  handlePrimaryButtonClicked: function(event) {
    const needHelpFeature = RQ.GA_EVENTS.CATEGORIES.NEED_HELP_FEATURE,
      formSubmitted = RQ.GA_EVENTS.ACTIONS.FORM_SUBMITTED;

    if (!this.validate()) {
      return false;
    }

    const d = new Date(),
      feedbackId = [d.getFullYear(), d.getMonth(), d.getDate(), d.getTime(), Math.floor(Math.random()*10)].join('_'),
      that = this;

    RQ.DataStoreUtils.setValue([RQ.FIREBASE_NODES.FEEDBACK, feedbackId], this.model.toJSON(), function() {
      that.hide();
      Notification.show('success', 'Query submitted successfully! Our support team will reach out to you soon.');
      RQ.Utils.submitEvent(needHelpFeature, formSubmitted, needHelpFeature + ' ' + that.model.get('queryType') + ' submitted');
    });
  },

  validate: function() {
    const requiredFields = ['name', 'email', 'queryType', 'subject', 'message'],
      missingFields = [],
      that = this;

    const needHelpFeature = RQ.GA_EVENTS.CATEGORIES.NEED_HELP_FEATURE,
      invalidFormSubmitted = RQ.GA_EVENTS.ACTIONS.INVALID_SUBMIT;

    requiredFields.forEach(function(fieldName) {
      if (!that.model.get(fieldName)) {
        missingFields.push(fieldName);
      }
    });

    if (missingFields.length > 0) {
      Notification.show('error', 'Fields: ' + missingFields.join(', ') + ' are empty');
      RQ.Utils.submitEvent(needHelpFeature, invalidFormSubmitted, needHelpFeature + ' ' + invalidFormSubmitted + ' ' + missingFields.join(','));
      return false;
    }

    return true;
  }
});

var GroupRulesModal = Modal.extend({
  id: 'group-rules-modal',

  events: {
    'click .btn-primary-modal': 'onSave',
    'click .dropdown .dropdown-item': 'handleDropdownValueChanged'
  },

  getTemplate: function() {
    return RQ.Templates.GroupRulesModal;
  },

  initWidgets: function() {
    this.$('.new-group-name-field').get(0).focus();
  },

  show: function(groups, selectedRules) {
    RQ.showModalView(this, {
      model: {
        groups: groups,
        selectedRules: selectedRules
      },
      update: true
    });
  },

  onSave: function(event) {
    var newGroupName = this.$('.new-group-name-field').val(),
      selectedGroupId,
      selectedRules = this.model.get('selectedRules'),
      that = this;

    if (newGroupName) {
      this.trigger('createGroup', newGroupName, function(group) {
        if (_.size(selectedRules) > 0) {
          that.trigger('groupSelectedRules', group.getId(), selectedRules);
        }
        that.hide();
      });
    } else {
      selectedGroupId = this.$('.dropdown-value').attr('data-value');
      if (selectedGroupId) {
        this.trigger('groupSelectedRules', selectedGroupId, selectedRules);
        this.hide();
      }
    }
  },

  handleDropdownValueChanged: function(event) {
    var $selectedOption = $(event.target),
      $dropdown = $selectedOption.parents('.dropdown');

    $dropdown.find('.dropdown-value')
      .html($selectedOption.html())
      .attr('data-value', $selectedOption.attr('data-value'));
  }
});

var RuleSourceFiltersModal = Modal.extend({
  id: 'rule-source-filters-modal',

  events: {
    'click .btn-primary-modal': 'onSave',
    'change .page-url-filter .operator-selector': 'onURLFilterOperatorChange',
    'input .page-url-filter .operand-input input': 'onURLFilterInputChange',
    'change .resource-type-filter': 'onResourceTypeChange',
    'change .request-method-filter': 'onRequestMethodChange',
    'click .clear-filter': 'onClearFilterClick'
  },

  getDefaultFilterValues: function() {
    return {
      [RQ.RULE_SOURCE_FILTER_TYPES.PAGE_URL]: [{operator: RQ.RULE_OPERATORS.CONTAINS, value: ''}],
      [RQ.RULE_SOURCE_FILTER_TYPES.RESOURCE_TYPE]: [],
      [RQ.RULE_SOURCE_FILTER_TYPES.REQUEST_METHOD]: []
    };
  },

  getTemplate: function() {
    return RQ.Templates.RuleSourceFiltersModal;
  },

  show: function(filters) {
    RQ.showModalView(this, {
      model: {
        filters: this.initFilters(filters)
      },
      update: true
    });

    this.initMDBDropdowns();
  },

  initMDBDropdowns: function() {
    this.$('.mdb-select').materialSelect();

     // MDB (Chrome 73 issue): https://mdbootstrap.com/support/jquery/dropdown-needs-2-clicks-to-activate/
    this.$('.mdb-select').click(e => e.stopPropagation());
  },

  renderView: function() {
    this.render();
    this.initMDBDropdowns();
  },

  initFilters: function(filters) {
    return _.extend({}, this.getDefaultFilterValues(), filters);
  },

  cleanFilters: function(filters) {
    return _.omit(filters, filterValues => {
      // remove any filter which has empty value attribute
      filterValues = _.reject(filterValues, filterValue => _.isObject(filterValue) && _.isEmpty(filterValue.value));

      return _.isEmpty(filterValues);
    });
  },

  onSave: function() {
    this.trigger('save', this.cleanFilters(this.model.get('filters')));
    this.hide();
  },

  onURLFilterOperatorChange: function(evt) {
    const $select = $(evt.target),
      index = $select.closest('.row').attr('data-index'),
      urlFilter = this.model.get('filters')[RQ.RULE_SOURCE_FILTER_TYPES.PAGE_URL][index];

    urlFilter.operator = $select.val();
  },

  onURLFilterInputChange: function(evt) {
    const $input = $(evt.target),
      index = $input.closest('.page-url-filter').attr('data-index'),
      urlFilter = this.model.get('filters')[RQ.RULE_SOURCE_FILTER_TYPES.PAGE_URL][index];

    urlFilter.value = $input.val();
    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULE, RQ.GA_EVENTS.ACTIONS.MODIFIED, 'Rule source pageUrl filter modified');
  },

  onResourceTypeChange: function(evt) {
    this.model.get('filters')[RQ.RULE_SOURCE_FILTER_TYPES.RESOURCE_TYPE] = $(evt.target).val();
    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULE, RQ.GA_EVENTS.ACTIONS.MODIFIED, 'Rule source resourceType filter modified');
  },

  onRequestMethodChange: function(evt) {
    this.model.get('filters')[RQ.RULE_SOURCE_FILTER_TYPES.REQUEST_METHOD] = $(evt.target).val();
    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULE, RQ.GA_EVENTS.ACTIONS.MODIFIED, 'Rule source requestMethod filter modified');
  },

  onClearFilterClick: function(evt) {
    const filterName = $(evt.currentTarget).attr('data-filter');

    this.model.get('filters')[filterName] = this.getDefaultFilterValues()[filterName];
    this.renderView();
    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULE, RQ.GA_EVENTS.ACTIONS.DELETED, 'Rule source ' + filterName + ' filter modified');
  }
});

var GroupInfoView = BaseModelView.extend({

  className: 'group-info',

  Model: RuleGroupModel,

  getTemplate: function() {
    return RQ.Templates.GroupInfo;
  }
});

const BaseRuleEditorView = BaseModelView.extend({
  includeComponents: {
    needHelpModal: true,
    susiModal: true
  },

  Mixins: [ RQ.Mixins.LimitsValidator ],

  events: _.extend(BaseModelView.prototype.events, {
    'keyup .rule-name-input': 'updateRuleName',
    'change .status-toggle': 'updateRuleStatus',
    'keyup .rule-description': 'updateRuleDescription',
    'click .add-pair': 'addPair',
    'click .delete-pair': 'deletePair',
    'click .add-modification': 'addModification',
    'click .delete-modification': 'deleteModification',
    'click .close-editor': 'closeEditor',
    'click .save-rule': 'saveRule',
    'click .open-source-filters': 'handleEditSourceFiltersClicked'
  }),

  initWidgets: function() {
    this.initGroupInfo();
    this.$el.find('[data-toggle="dropdown"]').dropdown();
    // To initialize all the tooltips.
    this.$el.find('[data-toggle="tooltip"]').tooltip();
    this.initDropdowns();
    this.initAutoCompleteWidgets();
    this.initSourceFilters();
  },

  initSourceFilters: function() {
    this.ruleSourceFiltersModal = new RuleSourceFiltersModal();
  },

  handleEditSourceFiltersClicked: function(evt) {
    const index = this.getRuleIndex($(evt.target)),
      pair = this.model.getPairs()[index];

    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULE, RQ.GA_EVENTS.ACTIONS.WORKFLOW_STARTED, 'Rule source filters workflow started');

    this.ruleSourceFiltersModal.show(pair.source.filters);
    this.ruleSourceFiltersModal.on('save', filters => {
      this.updateFieldInPair(pair, 'source.filters', filters);
      this.render();
      RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULE, RQ.GA_EVENTS.ACTIONS.MODIFIED, 'Rule source filters modified');
    });
  },

  initGroupInfo: function() {
    const that = this,
      groupId = this.model && this.model.getGroupId();

    if (groupId) {
      if (this.group) {
        this.renderGroupInfo();
      } else {
        if (this.isSharedRule()) {
          RQ.DataStoreUtils.getValue(RQ.currentUser.getPublicSharedListPath(this.model.get('sharedListId')))
            .then(sharedListNode => {
              that.group = _.findWhere(sharedListNode.groups, { id: groupId });
              that.renderGroupInfo();
            }
          );
        } else {
          RQ.StorageService.getRecord(groupId).then(groupObj => {
            that.group = groupObj;
            that.renderGroupInfo();
          });
        }
      }
    }
  },

  renderGroupInfo: function() {
    var groupInfoView = new GroupInfoView({
      el: this.$el.find('.group-info-container')
    });

    groupInfoView.render({model: this.group});
    this.childViews.push(groupInfoView);
  },

  updateRuleName: function(event) {
    this.model.setName(event.target.value);
  },

  updateRuleStatus: function(event) {
    var status = $(event.currentTarget).is(':checked') ? RQ.RULE_STATUS.ACTIVE : RQ.RULE_STATUS.INACTIVE;
    this.model.setStatus(status);
  },

  updateRuleDescription: function(event) {
    this.model.setDescription(event.target.value);
  },

  addPair: function() {
    var newPair = this.model.getDefaultPair(),
      pairs = this.model.getPairs();

    pairs.push(newPair);
    this.render();
  },

  addModification: function(event) {
    var currentPairIndex = Number($(event.target).parents('.pair-container').attr('data-index')),
      currentPair = this.model.getPair(currentPairIndex),
      modifications = currentPair.modifications;

    modifications.push(this.model.getDefaultModification());
    this.render();
  },

  deletePair: function(event) {
    var $target = $(event.target),
      pairIndex = Number($target.parents('.pair-container').attr('data-index')),
      pairs = this.model.getPairs();

    pairs.splice(pairIndex, 1);
    this.render();
  },

  deleteModification: function(event) {
    var $target = $(event.target),
      currentPairIndex = Number($target.parents('.pair-container').attr('data-index')),
      modificationIndex = Number($target.parents('.modification-container').attr('data-index')),
      currentPair = this.model.getPair(currentPairIndex),
      modifications = currentPair.modifications;

    modifications.splice(modificationIndex, 1);
    this.render();
  },

  /**
   * If key is complex, e.g source.operator then drill down to leaf node and add the value to corresponding key
   *
   * @param pair
   * @param key
   * @param value
   * @returns Updated pair
   */
  updateFieldInPair: function(pair, key, value) {
    var nestedKeys = key.split('.'),
      index,
      currentNode = pair;

    // Reach the leaf node
    for (index = 0; index < nestedKeys.length - 1; index++) {
      currentNode = currentNode[ nestedKeys[index] ];
    }

    // Finally Set the value once we reach the leaf node
    currentNode[ nestedKeys[index] ] = value;

    this.onFieldUpdatedInPair(pair, key, value);
    return pair;
  },

   /**
   * Optional; can be implemented to do some processing after a field is updated in a pair.
   *
   * @param pair
   * @param key
   * @param value
   */
  onFieldUpdatedInPair: function(pair, key, value) {
     // no-op
  },

  validateUserInput: function($inputField) {
    return true;
  },

  updateRulePair: function(event) {
    var $target = $(event.target),
      index = this.getRuleIndex($target),
      key = $target.attr('data-key'),
      pairs = this.model.getPairs();

    if (event.target.tagName === 'INPUT') {
      this.updateFieldInPair(pairs[index], key, event.target.value);
      this.validateUserInput($target);
    }
  },

  getRuleIndex: function($target) {
    return Number($target.parents('.pair-container').attr('data-index'));
  },

  handleDropdownValueChanged: function(event) {
    var $target = $(event.target),
      value = $target.attr('data-value');

    if (value === void 0) {
      return false;
    }

    var $dropdown = $target.parents('.dropdown'),
      index = Number($target.parents('.pair-container').attr('data-index')),
      key = $dropdown.attr('data-key'),
      pairs = this.model.getPairs();

    $dropdown.find('.dropdown-item').removeAttr('selected');
    $target.attr('selected', true);

    this.updateDropdownSelectionState($dropdown);
    this.updateFieldInPair(pairs[index], key, value);
    this.render();
  },

  // To be overridden by Child components by providing the auto complete values.
  initAutoCompleteWidgets: function() {},

  initAutoComplete: function(selector, data) {
    var that = this;

    this.$el.find(selector).mdb_autocomplete({
      data: data
    });

    // Trigger change event on corresponding input element so that model is populated
    this.$el.find('.mdb-autocomplete-wrap').on('click', 'li', function() {
      Logger.log('Triggering change event on AutoComplete input elements');
      that.$el.find(selector).trigger('change');
    });
  },

  validateRule: function() {
    if (!this.model.isValid()) {
      Notification.show('error', 'Error: Rule Name can not be empty');
      return false;
    }

    return this.alsoValidate();
  },

  alsoValidate: function() {
    var pairs = this.model.getPairs(),
      pairIndex;

    for (pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
      if (!this.isValidPair(pairs[pairIndex])) {
        return false;
      }
    }

    return true;
  },

  saveRule: function(event) {
    let ts = this.model.getTimestamp(),
      ruleName = this.model.getName(),
      eventAction = RQ.GA_EVENTS.ACTIONS.MODIFIED,
      that = this;

    // Set Creation date if not exists
    if (!this.model.hasCreationDate()) {
      eventAction = RQ.GA_EVENTS.ACTIONS.CREATED;
      this.model.setCreationDate(ts);
    }

    if (!this.validateRule()) {
      return false;
    }

    this
      .validateRuleCreationLimits(event)
      .then(isAllowed => {
        if (isAllowed) {
          this.removeAdditionalFields();

          this.model.save({
            callback: function() {
              Notification.show('success', ruleName + ' has been saved successfully!');
              RQ.Utils.submitEvent('rule', eventAction, that.model.getRuleType().toLowerCase() + ' rule ' + eventAction);
              // To redirect the URL to edit mode when saving a new rule so that on refresh
              // user can still see the rule.
              RQ.router.navigate('/edit/' + that.model.getId() , { silent : true });
            }
          });
        }
      });
  },

  closeEditor: function() {
    // In case of shared Rule Delete last part from current route -> rule Index inside the sharedList
    const route = this.isSharedRule()
      ? RQ.Utils.removeLastPart(Backbone.history.fragment, '/')
      : '';

    RQ.router.navigate(route, { trigger: true });
  },

  isSharedRule: function() {
    return this.model.get('isSharedRule');
  },

  /**
   *
   * @Override Child classes should override this function to define validation of each pair
   */
  isValidPair: function() { return true; }
});
const RedirectRuleEditorView = BaseRuleEditorView.extend({

  Model: RedirectRuleModel,

  Mixins: [].concat(BaseRuleEditorView.prototype.Mixins, [ RQ.Mixins.InputValidation ]),

  id: 'redirect-rule-editor',

  className: 'rule-editor rule-theme-' + RQ.RULE_TYPES.REDIRECT.toLowerCase(),

  childViews: [],

  getTemplate: function() {
    return RQ.Templates.RedirectRuleEditor;
  },

  getMarkup: function(template) {
    var ruleJson = RQ.TemplateHelpers.redirectRuleHelper(this.model.toJSON());
    return template(ruleJson);
  },

  events: _.extend({}, BaseRuleEditorView.prototype.events, {
    'keyup .pair-container input': 'updateRulePair',
    'change .pair-container select': 'updateRulePair',
    'click .clear-destination': 'handleClearDestinationClicked'
  }),

  renderSubComponents: function() {
    var filePickerComponent = this.getFilePickerComponent();
    filePickerComponent.render();
    this.childViews.push(filePickerComponent);
  },

  getFilePickerComponent: function() {
    return new FilePickerView({
      el: this.$el.find('.file-picker-placeholder'),
      model : new Backbone.Model({
        filePickerUrl: RQ.FILE_PICKER_URL
      })
    })
    .on('filePicker:opened', this.handleFilePickerOpened, this)
    .on('fileSelected', this.handleFilePickedFromLibrary, this);
  },

  handleClearDestinationClicked: function(event) {
    const ruleIndex = this.getRuleIndex($(event.target));
    this.updateFieldInPair(this.model.getPairs()[ruleIndex], 'destination', '');
    this.updateFieldInPair(this.model.getPairs()[ruleIndex], 'fileName', '');
    this.render();
  },

  handleFilePickerOpened: function(event) {
    this.model.setRuleIndexForWhichPickerOpened(this.getRuleIndex($(event.target)));
  },

  handleFilePickedFromLibrary: function(fileDetails) {
    const index = this.model.getRuleIndexForWhichPickerOpened();
    this.updateFieldInPair(this.model.getPairs()[index], 'destination', fileDetails.shortUrl);
    this.updateFieldInPair(this.model.getPairs()[index], 'fileName', fileDetails.name);
    this.render();
  },

  isValidPair: function(pair) {
    var source = pair['source'],
      destinationField = pair['destination'];

    return this.validateSourceField(source)
      && this.validateDestinationField(source.operator, destinationField);
  },

  removeAdditionalFields: function() {
    var pairs = this.model.getPairs();

    _.each(pairs, function(pair) {
      delete pair['sourcePlaceholder'];
      delete pair['destinationPlaceholder'];
    });
  }
});
var CancelRuleEditorView = RedirectRuleEditorView.extend({

  Model: CancelRuleModel,

  id: 'cancel-rule-editor',

  className: 'rule-editor rule-theme-' + RQ.RULE_TYPES.CANCEL.toLowerCase(),

  getTemplate: function() {
    return RQ.Templates.CancelRuleEditor;
  },

  isValidPair: function(pair) {
    var source = pair['source'];

    return this.validateSourceField(source, true);
  },

  removeAdditionalFields: function() {
    var pairs = this.model.getPairs();

    _.each(pairs, function(pair) {
      delete pair['sourcePlaceholder'];
      delete pair['destinationPlaceholder'];
      delete pair['destination'];
    });
  }
});
const ReplaceRuleEditorView = BaseRuleEditorView.extend({

  Model: ReplaceRuleModel,

  Mixins: [].concat(BaseRuleEditorView.prototype.Mixins, [ RQ.Mixins.InputValidation ]),

  id: 'replace-rule-editor',

  className: 'replace-rule-editor rule-editor rule-theme-' + RQ.RULE_TYPES.REPLACE.toLowerCase(),

  getTemplate: function() {
    return RQ.Templates.ReplaceRuleEditor;
  },

  events: _.extend({}, BaseRuleEditorView.prototype.events, {
    'keyup .pair-container input': 'updateRulePair'
  }),

  isValidPair: function(pair) {
    return this.validateFieldNonEmpty('replace', pair['from']);
  }
});

var HeadersEditorView = BaseRuleEditorView.extend({

  Model: HeadersRuleModel,

  getTemplate: function () {
    return RQ.Templates.HeadersRuleTemplate;
  },

  id: 'headers-rule-editor',

  className: 'rule-editor rule-theme-' + RQ.RULE_TYPES.HEADERS.toLowerCase(),

  events: _.extend({}, BaseRuleEditorView.prototype.events, {
    'keyup .pair-container input': 'updateRulePair',
    'change .pair-container input': 'updateRulePair'
  }),

  hideMessage: function () {
    $(this.el).find('.message').hide();
  },

  initAutoCompleteWidgets: function () {
    this.initAutoComplete('.header-input', this.model.getHeadersForAutoComplete());
  },

  validateUserInput: function($inputElement) {
    if ($inputElement.hasClass('header-input')) {
      this.validateHeaderValues($inputElement);
    }
  },

  // When editor is opened as new page
  validateHeaderValues: function($headerInput) {
    Logger.log('Validating header values');

    var $warningIcon = $headerInput.parent().find('.warning-icon');
    var selectedHeader = $headerInput[0].value;

    RQ.DOMUtils.toggleClass($headerInput, 'forbidden-header', this.model.isForbiddenHeader(selectedHeader));
    RQ.DOMUtils.toggleClass($warningIcon, 'hidden', !this.model.isForbiddenHeader(selectedHeader));
  },

  onRenderComplete: function() {
    this.initWidgets();
    this.renderSubComponents();

    var that = this;
    this.$el.find('.header-input').each(function(index, inputField) {
      that.validateHeaderValues($(inputField));
    });
  }
});
var UserAgentRuleEditorView = BaseRuleEditorView.extend({
  Model: UserAgentRuleModel,

  Mixins: [].concat(BaseRuleEditorView.prototype.Mixins, [ RQ.Mixins.InputValidation ]),

  id: 'useragent-rule-editor',

  className: 'rule-editor rule-theme-' + RQ.RULE_TYPES.USERAGENT.toLowerCase(),

  getTemplate: function() {
    return RQ.Templates.UserAgentRuleEditor;
  },

  events: _.extend({}, BaseRuleEditorView.prototype.events, {
    'keyup .pair-container input': 'updateRulePair',
    'change .pair-container select': 'updateRulePair',
    'change .pair-container .request-type-checkbox': 'updateRequestType'
  }),

  isValidPair: function(pair) {
    var source = pair['source'],
      userAgent = pair['userAgent'];

    return (!source.value || this.validateSourceField(source, true))
      && this.validateFieldNonEmpty(RQ.HEADER_NAMES.USER_AGENT, userAgent);
  },

  alsoValidate: function() {
    var pairs = this.model.getPairs(),
      pairIndex,
      inValidPairIndex = -1,
      isValid;

    for (pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
      isValid = this.isValidPair(pairs[pairIndex]);

      if (!isValid) {
        inValidPairIndex = pairIndex;
        return false;
      }
    }

    return true;
  },

  onFieldUpdatedInPair: function(pair, key, value) {
    if (key === 'envType') {
      pair.userAgent = value === 'custom' ? RQ.UserAgentLibrary.getDefaultUserAgent() : '';
      pair.env = '';
    }

    if (key === 'env') {
      pair.userAgent = this.getUserAgent(pair.envType, value);
    }
  },

  getUserAgent: function(envType, env) {
    var userAgentData = RQ.UserAgentLibrary.USER_AGENT[envType],
      envParts = env.split('.'),
      index = 0;

    while (index < envParts.length - 1) {
      userAgentData = userAgentData[envParts[index]].values;
      index++;
    }

    return userAgentData[envParts[index]].value;
  },

  updateRequestType: function(event) {
    var $target = $(event.target),
      index = Number($target.parents('.pair-container').attr('data-index')),
      requestType = $target.is(':checked') ? RQ.REQUEST_TYPES.MAIN_FRAME : RQ.REQUEST_TYPES.PAGE_REQUEST,
      pairs = this.model.getPairs();

    this.updateFieldInPair(pairs[index], 'source.requestType', requestType);
  }
});

const ScriptRuleEditorView = BaseRuleEditorView.extend({
  Model: ScriptRuleModel,

  Mixins: [].concat(BaseRuleEditorView.prototype.Mixins, [ RQ.Mixins.InputValidation ]),

  id: 'script-rule-editor',

  className: 'rule-editor rule-theme-' + RQ.RULE_TYPES.SCRIPT.toLowerCase(),

  CODE_MAX_LENGTH: 500,

  CODE_MAX_RULES: 3,

  getTemplate: function() {
    return RQ.Templates.ScriptRuleEditor;
  },

  events: _.extend({}, BaseRuleEditorView.prototype.events, {
    'keyup .source-value-input': 'updateRulePair',
    'click .add-script': 'addScript',
    'click .remove-script': 'removeScript',
    'click .script-codeType': 'handleCodeTypeChange',
    'click .script-type': 'handleScriptTypeChange',
    'keyup .script-url-input': 'updateScriptValue',
    'change .script-code-input': 'updateScriptCode',
    'click .clear-destination': 'handleClearDestinationClicked',
    'change input[name="library"]': 'handleLibrarySelection'
  }),

  renderSubComponents: function() {
    this.addFilePickerComponent();
    this.addCodeMirror();
  },

  addFilePickerComponent: function() {
    var filePickerComponent = this.getFilePickerComponent();
    filePickerComponent.render();
    this.childViews.push(filePickerComponent);
  },

  getFilePickerComponent: function() {
    return new FilePickerView({
      el: this.$el.find('.file-picker-placeholder'),
      model : new Backbone.Model({
        filePickerUrl: RQ.FILE_PICKER_URL
      })
    })
    .on('filePicker:opened', this.handleFilePickerOpened, this)
    .on('fileSelected', this.handleFilePickedFromLibrary, this);
  },

  addCodeMirror: function() {
    this.$el.find('.script-code-input').each(function(i, codeInput) {
      var mode = codeInput.getAttribute('data-codeType') === RQ.SCRIPT_CODE_TYPES.CSS ? 'css' : 'javascript';
      RQ.CodeMirror.init(codeInput, mode);
    });
  },

  handleClearDestinationClicked: function(event) {
    this.clearUrlInput(this.getScriptRuleIndex(event));
    this.render();
  },

  handleFilePickerOpened: function(event) {
    this.model.setRuleIndexForWhichPickerOpened(this.getScriptRuleIndex(event));
  },

  handleFilePickedFromLibrary: function(fileDetails) {
    const index = this.model.getRuleIndexForWhichPickerOpened();
    this.model.getScripts()[index].value = fileDetails.shortUrl;
    this.model.getScripts()[index].fileName = fileDetails.name;
    this.render();
  },

  clearUrlInput: function(ruleIndex) {
    this.model.getScripts()[ruleIndex].value = '';
    this.model.getScripts()[ruleIndex].fileName = '';
  },

  addScript: function() {
    var newScript = this.model.getDefaultScript(),
      scripts = this.model.getScripts();

    scripts.push(newScript);
    this.render();
  },

  removeScript: function(event) {
    var scriptIndex = this.getScriptRuleIndex(event),
      scripts = this.model.getScripts();

    scripts.splice(scriptIndex, 1);
    this.render();
  },

  updateScriptValue: function(event) {
    var scriptIndex = this.getScriptRuleIndex(event),
      scripts = this.model.getScripts();

    scripts[scriptIndex].value = $(event.target).val();
  },

  getScriptRuleIndex: function(event) {
    var $target = $(event.target),
      scriptIndex = Number($target.closest('.script-section').attr('data-index'));
    return scriptIndex;
  },

  updateScriptCode: function(event) {
    var $textArea = $(event.target),
      code = $textArea.val();

    this.updateScriptValue(event);
    $textArea.siblings('.script-code-characters').find('.count').text(this.CODE_MAX_LENGTH - code.length);
  },

  handleLibrarySelection: function(event) {
    var libraries = this.$el.find('input[name="library"]:checked')
      .map(function() { return this.value; })
      .get();
    this.model.setLibraries(libraries);
  },

  handleCodeTypeChange: function(event) {
    var $target = $(event.target),
      scriptIndex = Number($target.closest('.script-section').attr('data-index')),
      scripts = this.model.getScripts(),
      currentScript = scripts[scriptIndex];

    currentScript.codeType = $target.val();
    this.render();
  },

  handleScriptTypeChange: function(event) {
    var $target = $(event.target),
      scriptIndex = Number($target.closest('.script-section').attr('data-index')),
      scripts = this.model.getScripts();

    scripts[scriptIndex].type = $target.val();
    this.clearUrlInput(scriptIndex);
    this.render();
  },

  handleDropdownValueChanged: function(event) {
    var $target = $(event.target),
      $dropdown = $target.closest('.dropdown');

    if (!$dropdown.hasClass('script-load-time')) {
      BaseRuleEditorView.prototype.handleDropdownValueChanged.apply(this, arguments);
      return;
    }

    $dropdown.find('.dropdown-item').removeAttr('selected');
    $target.attr('selected', true);

    var scriptIndex = Number($target.closest('.script-section').attr('data-index')),
      scripts = this.model.getScripts();

    this.updateDropdownSelectionState($dropdown);
    scripts[scriptIndex].loadTime = $target.attr('data-value');
  },

  isValidPair: function(pair) {
    var source = pair['source'],
      scripts = pair['scripts'];

    return (!source.value || this.validateSourceField(source))
      && (!_.isEmpty(scripts) ? this.validateScripts(scripts) : this.validateLibraries(pair['libraries']));
  },

  validateScripts: function(scripts) {
    var customCodeScripts = _.filter(scripts, function(script) { return script.type === RQ.SCRIPT_TYPES.CODE; });

    if (customCodeScripts.length > this.CODE_MAX_RULES) {
      RQ.Utils.submitEvent('rule', RQ.GA_EVENTS.ACTIONS.LIMIT_REACHED, 'Script rule: number of scripts exceeded');
      Notification.show('error', 'Error: You cannot add more than 3 custom code scripts in a rule.');
      return false;
    }

    return _.every(scripts, function(script) {
      if (script.type === RQ.SCRIPT_TYPES.CODE && script.value.length > this.CODE_MAX_LENGTH) {
        Notification.show('error', 'Error: Code should not exceed ' + this.CODE_MAX_LENGTH + ' characters.');
        RQ.Utils.submitEvent('rule', RQ.GA_EVENTS.ACTIONS.LIMIT_REACHED, 'Script rule: code limit exceeded');
        return false;
      }
      return this.validateFieldNonEmpty(script.type === RQ.SCRIPT_TYPES.CODE ? 'Script Code': 'Script URL', script.value);
    }, this);
  },

  validateLibraries: function(libraries) {
    if (_.isEmpty(libraries)) {
      Notification.show('error', 'Error: No library or script is added.');
      return false;
    }
    return true;
  }
});

const QueryParamsRuleEditorView = BaseRuleEditorView.extend({

  Model: QueryParamsRuleModel,

  Mixins: [].concat(BaseRuleEditorView.prototype.Mixins, [ RQ.Mixins.InputValidation ]),

  getTemplate: function() {
    return RQ.Templates.QueryParamsRuleEditor;
  },

  id: 'queryparams-rule-editor',

  className: 'rule-editor rule-theme-' + RQ.RULE_TYPES.QUERYPARAM.toLowerCase(),

  events: _.extend({}, BaseRuleEditorView.prototype.events, {
    'keyup .pair-container input': 'updateRulePair'
  }),

  isValidPair: function(pair) {
    var modifications = pair.modifications;

    for (var m = 0; m < modifications.length; m++) {
      if (!this.isValidModification(modifications[m])) {
        return false;
      }
    }

    return true;
  },

  isValidModification: function(modification) {
    if (modification.type === RQ.MODIFICATION_TYPES.ADD || modification.type === RQ.MODIFICATION_TYPES.REMOVE) {
      return this.validateFieldNonEmpty('param', modification.param);
    }

    return true;
  }
});

var FilePickerView = BaseModelView.extend({

  events: {
    'click .open-file-picker': 'openFilePicker'
  },

  getTemplate: function() {
    return RQ.Templates.FilePicker;
  },

  registerBinders: function() {
    var that = this;
    this.bindEvent(window, 'message', function (event) {
      if (event.data && event.data.shortUrl) {
        that.hideFilePickerModal();
        that.trigger('fileSelected', event.data);
      }
    });
  },

  bindEvent: function (element, eventName, eventHandler) {
    if (element.addEventListener) {
      element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + eventName, eventHandler);
    }
  },

  openFilePicker: function(event) {
    this.trigger('filePicker:opened', event);
  },

  hideFilePickerModal: function() {
    $('#filePickerModal').modal('hide');
  }

});
var PushNotificationView = BaseIndexView.extend({
  className: 'push-notifications-container',

  Collection: PushNotificationCollection,

  events: {
    'click .mark-all-read-action': 'markNotificationsAsRead',
    'click .link-inside-notification': 'handleLinkInNotificationClicked'
  },

  getTemplate: function() {
    return RQ.Templates.PushNotification;
  },

  getMarkup: function(template) {
    var unReadNotificationsCount = this.getUnReadNotificationsCount(this.collection.models);

    return template({
      items: this.collection.toJSON(),
      unReadNotificationsCount: unReadNotificationsCount
    });
  },

  getUnReadNotificationsCount: function(models) {
    return models.reduce(function(sum, model) {
      return model.get('isRead') ? sum : sum + 1
    }, 0);
  },

  getLatestNotificationId: function(models) {
    return models.reduce(function(currentMax, model) {
      return Math.max(model.get('id'), currentMax);
    }, -1);
  },

  initialize: function() {
    this.collection = new this.Collection();
    this.registerListeners();
  },

  registerListeners: function() {
    this.listenTo(this.collection, 'loaded', this.render);
  },

  updateCollection: function() {
    this.collection.fetchItems();
  },

  markNotificationsAsRead: function() {
    const notificationID = this.getLatestNotificationId(this.collection.models),
      objectToSave = {
        [RQ.STORAGE_KEYS.LATEST_NOTIFICATION_READ_BY_USER]: notificationID
      },
      that = this;

    RQ.StorageService.saveRecord(objectToSave).then(() => that.updateCollection());

    RQ.Utils.submitEvent(
      RQ.GA_EVENTS.CATEGORIES.IN_APP_NOTIFICATION,
      `Mark Read ${RQ.GA_EVENTS.ACTIONS.CLICKED}`,
      `Notification v${notificationID} marked read`
    )
  },

  handleLinkInNotificationClicked: (event) => {
    RQ.Utils.submitEvent(
      RQ.GA_EVENTS.CATEGORIES.IN_APP_NOTIFICATION, `Link ${RQ.GA_EVENTS.ACTIONS.CLICKED}`, event.currentTarget.innerHTML
    );
  }
});

const RuleIndexView = BaseIndexView.extend({
  includeComponents: {
    needHelpModal: true,
    susiModal: true
  },

  className: 'rule-index',
  Collection: RulesCollection,
  childViews: [],
  Mixins: [ RQ.Mixins.LimitsValidator ],

  events: _.extend(BaseIndexView.prototype.events, {
    'click .select-rule-button': 'handleSelectRuleButtonClicked',
    'click .ruleName': 'showRuleEditor',
    'change .rule-item-row .status-toggle': 'handleRuleStatusToggle',
    'click .download-rules-button': 'downloadRules',
    'click .download-rule-button': 'downloadRule',
    'click .upload-rules-button': 'uploadRulesAndGroups',
    'click .share-rules-button': 'handleShareRulesButtonClicked',
    'click .share-rule-button': 'handleShareRuleButtonClicked',
    'click .copy-rule-button': 'handleCopyRuleButtonClicked',
    'change .group-header .status-toggle': 'handleGroupStatusToggle',
    'click .collapse-button': 'collapseTable',
    'click .expand-button': 'expandTable',
    'click .group-header': 'handleTableHeaderClick',
    'click .group-rules-button': 'handleGroupButtonClicked',
    'click .edit-group-name': 'editGroupName',
    'keypress .group-name .editable': 'focusOutGroupNameInput',
    'blur .group-name .editable': 'saveEditedGroupName',
    'click .ungroup-rules': 'ungroupSelectedRules',
    'click .delete-rules-in-group': 'deleteSelectedRulesInGroup',
    'click .delete-group': 'handleDeleteGroup',
    'click .select-all-groups-checkbox': 'selectAllGroups',
    'click .fav-icon': 'handleRuleFavouriteClicked',
    'input .search-filter': 'filterRulesByName'
  }),

  initialize: function() {
    BaseIndexView.prototype.initialize.apply(this, arguments);

    this.rules = this.collection = new this.Collection(); // BaseIndexView needs this.collection to be defined
    this.groups = new RuleGroupsCollection();
    this.shareRulesModal = new ShareRulesModal({});
    this.groupRulesModal = new GroupRulesModal();

    this.registerListeners();
    this.saveSharedListName = this.saveSharedListName.bind(this);
  },

  registerListeners: function() {
    // We don't need to listen on add event because rule is always created from editor
    // And on route change we always fetch the latest rules from DB
    this.listenTo(this.rules, 'change', this.render);
    this.listenTo(this.rules, 'remove', this.render);
    this.listenTo(this.rules, 'reset', this.render);

    this.listenTo(this.groups, 'change', this.render);
    this.listenTo(this.groups, 'add', this.render);
    this.listenTo(this.groups, 'remove', this.render);

    this.listenTo(this.rules, 'loaded', function() {
      const activeRules = this.rules.filter(rule => rule.getStatus() === RQ.RULE_STATUS.ACTIVE);

      RQ.Utils.submitAttr('num_rules', this.rules.length);
      RQ.Utils.submitAttr('num_active_rules', activeRules.length);
      this.render();
    });

    this.listenTo(this.groups, 'loaded', function() {
      const activeGroups = this.groups.filter(group => group.getStatus() === RQ.RULE_STATUS.ACTIVE);

      RQ.Utils.submitAttr('num_active_groups', activeGroups.length);
      RQ.Utils.submitAttr('num_groups', this.groups.length);
    });
  },

  initWidgets: function() {
    this.$el = $(this.el);
    this.$el.find('[data-toggle="tooltip"]').tooltip();
  },

  updateCollection: function() {
    var that = this;

    this.groups.fetch({
      success: function() {
        that.rules.fetch({
          forceFetch: false
        });
      }
    });
  },

  getTemplate: function() {
    return RQ.Templates.RuleIndex;
  },

  getMarkup: function(template) {
    return template(this.getRenderData());
  },

  getRenderData: function() {
    return {
      groups: this.getGroups(),
      totalRules: this.rules.length,
      user: RQ.currentUser.toJSON(),
      search: this.search
    };
  },

  getGroups: function() {
    var ungroupedGroupId = '',
      filteredRules = this.getFilteredRules(),
      groupedRules = _.groupBy(filteredRules, function(rule) {
        return rule.groupId || ungroupedGroupId;
      }, this),
      ungroupedRules = groupedRules[ungroupedGroupId],
      groups,
      expandedByDefault = !!this.search || filteredRules.length <= 10 || false;

    groups = _.map(this.groups.toJSON(), function(group) {
      return _.extend({rules: groupedRules[group.id], expanded: expandedByDefault}, group);
    });

    if (this.search) {
      groups = groups.filter(group => _.size(group.rules) > 0);
    }

    if (_.size(ungroupedRules) > 0) {
      groups.push({rules: ungroupedRules, expanded: true}); // ungrouped rules
    } else if (groups.length === 1) {
      groups[0].expanded = true;
    }

    return groups;
  },

  getFilteredRules: function() {
    var rules = this.rules.toJSON();
    return this.search ?
      rules.filter(rule => rule.name.toLowerCase().includes(this.search.toLowerCase())) :
      rules;
  },

  filterRulesByName: function(evt) {
    this.search = evt.target.value;
    this.renderRulesList();
  },

  renderRulesList: function() {
    this.$el.find('.list-index-content').html(RQ.Templates.RulesList(this.getRenderData()));
  },

  getRulesInGroup: function(groupId) {
    return this.rules.filter(function(rule) {
       return rule.getGroupId() === groupId;
    });
  },

  renderSubComponents: function() {
    this.childViews.push(this.renderPushNotificationComponent());
  },

  renderPushNotificationComponent: function() {
    this.pushNotificationView = new PushNotificationView({
      el: this.$el.find('.notification-container')
    });

    this.pushNotificationView.render({ update: true });

    return this.pushNotificationView;
  },

  handleSelectRuleButtonClicked: function(event) {
    this
      .validateRuleCreationLimits(event)
      .then(isAllowed => isAllowed && RQ.router.navigate('selectRule', { trigger: true }))
  },

  showRuleEditor: function(event) {
    let $ruleItemRow = $(event.target).parents('.rule-item-row'),
      id = $ruleItemRow.data('id');

    RQ.router.navigate('/edit/' + id, { trigger: true });
  },

  handleRuleStatusToggle: function(event) {
    let $ruleItemRow = $(event.currentTarget).parents('.rule-item-row'),
      ruleModel = this.rules.get($ruleItemRow.data('id'));

    // Check for limits validation only when status is changed from Inactive -> Active
    if (ruleModel.getStatus() === RQ.RULE_STATUS.INACTIVE) {
      this
        .validateRuleActivationLimits(event)
        .then(isAllowed => isAllowed ? this.toggleRuleStatus(ruleModel) : event.target.checked = false)
    } else {
      this.toggleRuleStatus(ruleModel);
    }
  },

  toggleRuleStatus: function(ruleModel) {
    let ruleName = ruleModel.getName(),
      eventAction,
      ruleStatus;

    if (ruleModel.getStatus() === RQ.RULE_STATUS.ACTIVE) {
      ruleModel.setStatus(RQ.RULE_STATUS.INACTIVE);
      eventAction = RQ.GA_EVENTS.ACTIONS.DEACTIVATED;
    } else {
      ruleModel.setStatus(RQ.RULE_STATUS.ACTIVE);
      eventAction = RQ.GA_EVENTS.ACTIONS.ACTIVATED;
    }

    ruleStatus = ruleModel.getStatus();

    ruleModel.save({
      callback: function() {
        Notification.show('info', ruleName + ' is now ' + ruleStatus);
        RQ.Utils.submitEvent('rule', eventAction, ruleModel.getRuleType().toLowerCase() + ' rule ' + eventAction);

        if (ruleModel.get('isSample')) {
          RQ.Utils.submitEvent('Sample Rule', eventAction, ruleModel.getName() + " sample rule" + eventAction);
        }
      }
    });
    return false;
  },

  handleGroupStatusToggle: function(event) {
    const $groupTable = this.getTable(event.currentTarget),
      groupModel = this.groups.get($groupTable.attr('data-group-id'));

    $groupTable.toggleClass('disabled-item');
    return this.toggleGroupStatus(groupModel);
  },

  toggleGroupStatus: function(groupModel) {
    var groupName = groupModel.getName(),
      eventAction,
      groupStatus;

    if (groupModel.getStatus() === RQ.RULE_STATUS.ACTIVE) {
      groupModel.setStatus(RQ.RULE_STATUS.INACTIVE);
      eventAction = RQ.GA_EVENTS.ACTIONS.DEACTIVATED;
    } else {
      groupModel.setStatus(RQ.RULE_STATUS.ACTIVE);
      eventAction = RQ.GA_EVENTS.ACTIONS.ACTIVATED;
    }

    groupStatus = groupModel.getStatus();

    groupModel.save({
      callback: function() {
        Notification.show('info', 'Group ' + groupName + ' is now ' + groupStatus);
        RQ.Utils.submitEvent('group', eventAction, 'group ' + eventAction);

        if (groupModel.get('isSample')) {
          RQ.Utils.submitEvent('Sample Rules Group', eventAction, groupModel.getName() + " sample group " + eventAction);
        }
      }
    });
    return false;
  },

  deleteItems: function(selectedItems) {
    // Trigger the model remove routine for each selected rule
    selectedItems.forEach(function(rule) {
      rule.remove();
    });

    // Remove the selected rules from the rules
    this.rules.remove(selectedItems);

    // Show notification
    Notification.show(
      'success',
      selectedItems.length + (selectedItems.length === 1 ? ' rule has ' : ' rules have ') + 'been deleted!'
    );

    RQ.Utils.submitEvent('rules', RQ.GA_EVENTS.ACTIONS.DELETED, `rules ${RQ.GA_EVENTS.ACTIONS.DELETED}`, selectedItems.length);
  },

  downloadRules: function() {
    let selectedRulesAndGroups = this.getExportableEntities(this.getSelectedRows(), this.getSelectedGroups());

    if (selectedRulesAndGroups.rules.length === 0) {
      selectedRulesAndGroups = this.getExportableEntities(this.rules.models, this.groups.models);
    }

    if (selectedRulesAndGroups.rules.length === 0) {
      alert('There are no rules to download.');
      return;
    }

    Backbone.trigger('file:save',
      JSON.stringify(selectedRulesAndGroups.rules.concat(selectedRulesAndGroups.groups), null, 2), 'requestly_rules');

    RQ.Utils.submitEvent('rules', RQ.GA_EVENTS.ACTIONS.EXPORTED, 'rules ' + RQ.GA_EVENTS.ACTIONS.EXPORTED, selectedRulesAndGroups.rules.length);
  },

  downloadRule: function(event) {
    var $targetRule = $(event.target).closest('.item-row'),
      row = this.getItemFromRow($targetRule);

    Backbone.trigger(
      'file:save',
      JSON.stringify([row], null, 2),
      'requestly_rules'
    );

    RQ.Utils.submitEvent('rule', RQ.GA_EVENTS.ACTIONS.EXPORTED, 'rules ' + RQ.GA_EVENTS.ACTIONS.EXPORTED, 1);

    return false;
  },

  uploadRulesAndGroups: function() {
    var that = this;
    Backbone.trigger('file:load', function(data) {
      var validRulesCount = 0,
        totalRulesCount = 0,
        entities = JSON.parse(data);

      _.each(entities, function(entity) {
        if (entity.objectType === RQ.OBJECT_TYPES.GROUP) {
          const groupModel = new RuleGroupModel(entity);
          that.groups.set(groupModel, {remove: false, silent: true});
          groupModel.save();
        } else {
          var ruleModel = RQ.getRuleModelFromAction(entity.ruleType, entity);
          ruleModel.removeUnwantedRuleFields();
          totalRulesCount++;
          if (ruleModel.isValid()) {
            validRulesCount++;
            // Update / add the rule to rules.
            that.rules.set(ruleModel, {remove: false, silent: true});
            ruleModel.save();
          }
        }
      });

      // Show notification : depends on the number of rules imported
      if (totalRulesCount === validRulesCount){
        Notification.show('success', 'All Rules Imported Successfully');
      } else if (validRulesCount === 0) {
        Notification.show('error', 'Imported Rules are invalid');
      } else {
        Notification.show('success', validRulesCount + ' out of ' + totalRulesCount + ' rules imported successfully');
      }

      that.render();
      RQ.Utils.submitEvent('rules', RQ.GA_EVENTS.ACTIONS.IMPORTED, 'rules ' + RQ.GA_EVENTS.ACTIONS.IMPORTED, validRulesCount);
    });
  },

  getExportableEntities: function(rules, groups) {
    var ruleEntities = _.pluck(rules, 'attributes'),
      groupEntities = _.pluck(groups, 'attributes'),
      allGroupIds = _.pluck(groupEntities, 'id'),
      usedGroupIds = _.compact(_.uniq(_.pluck(ruleEntities, 'groupId')));

    // filter out empty groups
    groupEntities = _.filter(groupEntities, function(groupEntity) {
      return _.contains(usedGroupIds, groupEntity.id);
    });

    // clear groupId from rule if corresponding group is not exported
    _.each(ruleEntities, function(ruleEntity) {
      if (ruleEntity.groupId && !_.contains(allGroupIds, ruleEntity.groupId)) {
        delete ruleEntity.groupId;
      }
      this.sanitizeRuleBeforeExport(ruleEntity);
    }, this);

    return {
      rules: ruleEntities,
      groups: groupEntities
    };
  },

  sanitizeRuleBeforeExport: function(rule) {
    delete rule.isFavourite;
  },

  getSelectedGroups: function() {
    var $checkboxes = $('.select-all-rows-checkbox:checked'),
      groups = [];

    _.each($checkboxes, function(checkbox) {
      var group = this.getGroupFromElement(checkbox);
      if (group) {
        groups.push(group);
      }
    }, this);

    return groups;
  },

  handleShareRuleButtonClicked: function(event) {
    const $targetRule = $(event.target).closest('.item-row'),
      row = this.getItemFromRow($targetRule);

    event.stopPropagation();

    this.startSharedListCreationWorkflow(this.getExportableEntities([row], []));
  },

  handleShareRulesButtonClicked: function() {
    this.startSharedListCreationWorkflow(this.getExportableEntities(this.getSelectedRows(), this.getSelectedGroups()));
  },

  startSharedListCreationWorkflow: function(itemsToShare) {
    const that = this;

    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.WORKFLOW_STARTED, 'SharedList creation workflow started');

    RQ.currentUser.isUserAuthenticated(function(isLoggedIn) {
      if (!isLoggedIn) {
        RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.LOGIN_REQUESTED, 'Login requested in SharedList creation workflow');

        that.showLoginModal(
          function() {
            RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.LOGIN_DONE, 'Login done in SharedList creation workflow');
            that.susiModal.hide();
            that.createSharedList(itemsToShare);
          },
          function() {
            RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.LOGIN_REJECTED, 'Login rejected in SharedList creation workflow');
          },
          { content: RQ.MESSAGES.SIGN_IN_TO_CREATE_SHARED_LISTS }
        )
      } else {
        RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.ALREADY_LOGIN, 'User already login in SharedList creation workflow');
        that.createSharedList(itemsToShare);
      }
    });
  },

  createSharedList: function(itemsToShare) {
    const that = this;

    if (itemsToShare.rules.length === 0) {
      alert('Please select one or more rules to share');
      return;
    }

    this.validateSharedListLimit(event).then(isAllowed => {
      if (isAllowed) {
        const shareId = RQ.Utils.getId();
        that.shareRulesModal = new ShareRulesModal({});
        that.shareRulesModal.on('enterSharedListName', this.saveSharedListName);
        that.shareRulesModal.show({ model: { shareId: shareId, itemsToShare: itemsToShare}});
      }
    });
  },

  saveSharedListName: function(shareData) {
    const sharedListName = shareData.listName;
    const shareId = shareData.shareId;
    const itemsToShare = shareData.itemsToShare;

    if(!sharedListName)
    {
      alert("Enter SharedList Name");
      return;
    }
    const sharedUrl = RQ.currentUser.createSharedList(shareId, sharedListName, itemsToShare);
    RQ.currentUser.setSharedListName(shareId, sharedListName);
    this.shareRulesModal.hide();
    this.shareRulesModal.model.set("sharedUrl", sharedUrl);
    this.shareRulesModal.show();
  },

  handleCopyRuleButtonClicked: function(event) {
    var $ruleItemRow = $(event.target).closest('.item-row'),
      ruleId = $ruleItemRow.data('id');

    RQ.router.navigate('/copy/' + ruleId, { trigger: true });
    RQ.Utils.submitEvent('rule', RQ.GA_EVENTS.ACTIONS.COPIED, 'Rule ' + RQ.GA_EVENTS.ACTIONS.COPIED);

    return false;
  },

  handleRuleFavouriteClicked: function(event) {
    let $favIcon = $(event.target),
      $favCell = $favIcon.closest('.fav-cell'),
      $ruleItemRow = $favIcon.closest('.item-row'),
      ruleId = $ruleItemRow.data('id'),
      markFavourite = !$favCell.hasClass('is-favourite');

    const ruleModel = this.rules.get(ruleId);

    // Check if the limits are violated
    if (markFavourite) {
      this
        .validateFavouriteRulesLimit(event)
        .then(isAllowed => isAllowed && this.updateFavourite(ruleModel, markFavourite, $favCell))
    } else {
      this.updateFavourite(ruleModel, markFavourite, $favCell);
    }

    return false;
  },

  updateFavourite: function(ruleModel, markFavourite, $favCell) {
    const gaEventAction = markFavourite ? RQ.GA_EVENTS.ACTIONS.MARKED_FAVOURITE : RQ.GA_EVENTS.ACTIONS.UNMARKED_FAVOURITE;

    $favCell.toggleClass('is-favourite', markFavourite);

    ruleModel.setFavourite(markFavourite);
    ruleModel.save({
      callback: function() {
        RQ.Utils.submitEvent('rule', gaEventAction, 'Rule ' + gaEventAction);
      }
    });
  },

  selectAllGroups: function(event) {
    var $selectAllCheckbox = $(event.currentTarget),
      isChecked = $selectAllCheckbox.is(':checked');

    $('.select-all-rows-checkbox, .select-row-checkbox').prop('checked', isChecked);
    $('.item-row').toggleClass('selected', isChecked);
  },

  collapseTable: function(event) {
    this.getTable(event.target).attr('data-expanded', 'false');
    event.stopPropagation();
  },

  expandTable: function(event) {
    this.getTable(event.target).attr('data-expanded', 'true');
    event.stopPropagation();
  },

  handleTableHeaderClick: function(event) {
    var $target = $(event.target),
      $table;

    if ($target.closest('.actionable').length > 0) {
      return;
    }

    $table = this.getTable($target);
    $table.attr('data-expanded', $table.attr('data-expanded') === 'false');
  },

  handleGroupButtonClicked: function(event) {
    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.GROUP, RQ.GA_EVENTS.ACTIONS.WORKFLOW_STARTED, 'Group rules workflow started');

    this.groupRulesModal.show(this.groups.toJSON(), this.getSelectedRows());
    this.groupRulesModal
      .on('createGroup', this.createNewGroup, this)
      .on('groupSelectedRules', this.groupSelectedRules, this);
  },

  groupSelectedRules: function(groupId, selectedRules) {
    var group = this.groups.get(groupId),
      movedRules = 0;

    if (_.size(selectedRules) > 0) {
      selectedRules.forEach(function (selectedItem) {
        if (selectedItem.getGroupId() !== groupId) {
          selectedItem.setGroupId(groupId);
          selectedItem.save();
          movedRules++;
        }
      });
      this.render();
    }

    if (movedRules > 0) {
      Notification.show('success', 'Moved ' + movedRules + ' rule(s) to Group "' + group.getName() + '"');
      RQ.Utils.submitEvent(
        'rules',
        RQ.GA_EVENTS.ACTIONS.GROUPED,
        ['Multiple', 'rules', RQ.GA_EVENTS.ACTIONS.GROUPED].join(' ')
      );
    }
  },

  createNewGroup: function(groupName, callback) {
    var group = new RuleGroupModel(),
      that = this;

    if (this.checkIfGroupNameAvailable(groupName)) {
      group.setName(groupName);
      group.setCreationDate(group.getTimestamp());

      group.save({
        callback: function() {
          that.groups.add(group);
          Notification.show('success', 'Group "' + group.getName() + '" has been created!');
          RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.GROUP, RQ.GA_EVENTS.ACTIONS.CREATED, 'New group created');
          callback.call(null, group);
        }
      });
    }
  },

  ungroupSelectedRules: function(event) {
    var selectedItems = this.getSelectedRows(this.getTable(event.target)),
      numSelectedItems = selectedItems.length;

    // not stopping event will trigger click on group header which will eventually expand/collapse the table
    event.stopPropagation();

    if (!numSelectedItems) {
      alert('Please select one or more rules to ungroup');
      return;
    }

    if (confirm(RQ.MESSAGES.UNGROUP_ITEMS)) {
      this.ungroupRules(selectedItems);
      this.render();
    }
  },

  ungroupRules: function(rules) {
    // Trigger the model remove routine for each selected rule
    rules.forEach(function(rule) {
      rule.ungroup();
      rule.save();
    });

    // Show notification
    Notification.show('success', rules.length + (rules.length === 1 ? ' rule is ': ' rules are ') + 'now ungrouped!');

    RQ.Utils.submitEvent(
      'rules',
      RQ.GA_EVENTS.ACTIONS.UNGROUPED,
      ['Multiple', 'rules', RQ.GA_EVENTS.ACTIONS.UNGROUPED].join(' ')
    );
  },

  deleteSelectedRulesInGroup: function(event) {
    var selectedItems = this.getSelectedRows(this.getTable(event.target));

    event.stopPropagation();
    this.confirmAndDeleteSelectedItems(selectedItems);
  },

  handleDeleteGroup: function(event) {
    var group = this.getGroupFromElement(event.target),
      rulesInGroup = this.getRulesInGroup(group.getId());

    event.stopPropagation();

    if (rulesInGroup.length) {
      alert(RQ.MESSAGES.DELETE_GROUP_WITH_RULES_WARNING);
      return;
    }

    if (confirm(RQ.MESSAGES.DELETE_GROUP)) {
      this.deleteGroup(group);
    }
  },

  deleteGroup: function(group) {
    group.remove();
    this.groups.remove(group);
    Notification.show('success', 'Group "' + group.getName() + '" has been deleted!');
    RQ.Utils.submitEvent('group', RQ.GA_EVENTS.ACTIONS.DELETED, 'Group deleted');
  },

  editGroupName: function(event) {
    var $groupName = $(event.currentTarget).closest('.group-name'),
      group = this.getGroupFromElement($groupName),
      $groupNameInput = $groupName.find('.editable');

    $groupName.addClass('edit-mode');

    $groupNameInput.get(0).focus();

    // move cursor to end
    $groupNameInput.val('');
    $groupNameInput.val(group.getName());
  },

  focusOutGroupNameInput: function(event) {
    if (event.which === 13) {
      $(event.currentTarget).blur();
    }
  },

  saveEditedGroupName: function(event) {
    var $groupNameInput = $(event.currentTarget),
      editedName = $(event.currentTarget).val(),
      group = this.getGroupFromElement(event.target);

    if (editedName && this.checkIfGroupNameAvailable(editedName, group)) {
      group.setName(editedName);
      group.save();
      RQ.Utils.submitEvent('group', RQ.GA_EVENTS.ACTIONS.MODIFIED, 'Group renamed');
      $groupNameInput.siblings('.readonly').text(editedName);
    }
    $groupNameInput.closest('.group-name').removeClass('edit-mode');
  },

  getGroupFromElement: function(elem) {
    var groupId = this.getTable(elem).attr('data-group-id');
    return this.groups.get(groupId);
  },

  checkIfGroupNameAvailable: function(name, currentGroup) {
    var isNameAlreadyUsed =  _.some(this.groups.models, function(group) {
      return group !== currentGroup && group.getName() === name;
    });

    if (isNameAlreadyUsed) {
      Notification.show('error', 'A group with name "' + name + '" already exists.');
    }

    return !isNameAlreadyUsed;
  }
});

var SharedRulesIndexView = BaseIndexView.extend({
  includeComponents: {
    needHelpModal: true,
    susiModal: true
  },

  Collection: SharedRulesCollection,

  GroupsCollection: SharedRuleGroupsCollection,

  className: 'shared-rules-index',

  events: _.extend(BaseIndexView.prototype.events, {
    'click .ruleName': 'showRuleEditor',
    'click .import-rules-button': 'importRules',
    'click .collapse-button': 'collapseTable',
    'click .expand-button': 'expandTable',
    'click .group-header': 'handleTableHeaderClick'
  }),

  getTemplate: function() {
    return RQ.Templates.SharedRulesIndex;
  },

  getMarkup: function(template) {
    return template({
      groups: this.getGroups(),
      totalRules: this.rules.length,
      user: RQ.currentUser.toJSON()
    });
  },

  initialize: function(options) {
    BaseIndexView.prototype.initialize.apply(this, arguments);

    this.rules = this.collection = new this.Collection(); // BaseIndexView needs this.collection to be defined
    this.groups = new this.GroupsCollection();
    this.options = options || {};

    this.listenTo(this.rules, 'loaded', this.render);
    this.listenTo(this.groups, 'loaded', this.render);
  },

  updateCollection: function(options) {
    const sharedListTimestamp = RQ.getSharedListTimestamp(options.sharedListId);
    var fetchSharedListDataPromise = this.fetchSharedListData(sharedListTimestamp);
    this.rules.fetch(fetchSharedListDataPromise);
    this.groups.fetch(fetchSharedListDataPromise);
  },

  fetchSharedListData: function(sharedListId) {
    return RQ.DataStoreUtils.getValue(RQ.currentUser.getPublicSharedListPath(sharedListId));
  },

  getGroups: function() {
    var ungroupedGroupId = '',
      groupedRules = _.groupBy(this.rules.toJSON(), function(rule) {
        return rule.groupId || ungroupedGroupId;
      }, this),
      ungroupedRules = groupedRules[ungroupedGroupId],
      groups;

    groups = _.map(this.groups.toJSON(), function(group) {
      return _.extend({rules: groupedRules[group.id]}, group);
    });

    if (_.size(ungroupedRules) > 0) {
      groups.push({rules: ungroupedRules}); // ungrouped rules
    }

    return groups;
  },

  showRuleEditor: function(event) {
    var $ruleItemRow = $(event.target).parents('.rule-item-row'),
      sharedListId = this.options.sharedListId,
      ruleId = $ruleItemRow.data('id');

    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.VIEWED, 'SharedList Rule viewed');
    RQ.router.navigate('/sharedList/' + sharedListId + '/' + ruleId, { trigger: true });
  },

  importRules: function() {
    var rules = this.rules.toJSON(),
      groups = this.groups.toJSON();

    _.each(rules, function(rule) {
      var ruleModel = RQ.getRuleModelFromAction(rule.ruleType, rule);
      ruleModel.removeUnwantedRuleFields();
      ruleModel.save();
    });

    _.each(groups, function(group) {
      var groupModel = new RuleGroupModel(group);
      groupModel.save();
    });

    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.IMPORTED, 'Shared List imported');
    Notification.show('success', 'Rules Imported Successfully');
  },

  collapseTable: function(event) {
    this.getTable(event.target).attr('data-expanded', 'false');
    event.stopPropagation();
  },

  expandTable: function(event) {
    this.getTable(event.target).attr('data-expanded', 'true');
    event.stopPropagation();
  },

  handleTableHeaderClick: function(event) {
    var $target = $(event.target),
      $table;

    if ($target.closest('.actionable').length > 0) {
      return;
    }

    $table = this.getTable($target);
    $table.attr('data-expanded', $table.attr('data-expanded') === 'false');
  }
});

var SharedListIndexView = BaseIndexView.extend({

  includeComponents: {
    needHelpModal: true,
    susiModal: true
  },

  Collection: SharedListCollection,

  className: 'shared-list-index',

  getTemplate: function() {
    return RQ.Templates.SharedListIndex;
  },

  getMarkup: function(template) {
    return template({
      list: this.collection.toJSON(),
      user: RQ.currentUser.toJSON()
    });
  },

  initialize: function(options) {
    BaseIndexView.prototype.initialize.apply(this, arguments);

    this.collection = new this.Collection();
    this.options = options || {};

    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'reset', this.render);

    this.listenTo(this.collection, 'loaded', function() {
      RQ.Utils.submitAttr('num_shared_lists', this.collection.length);
      this.render();
    });
  },

  updateCollection: function() {
    this.collection.fetchSharedLists();
  },

  initWidgets: function() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }

    this.clipboard = new Clipboard('.copy-action');

    this.clipboard.on('success', function(e) {
      RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.COPIED, 'SharedList url copied from index page');
      Notification.show('success', 'SharedList url copied to clipboard!');
    });
  },

  /**
   * @recursive
   * @param selectedItems List of Backbone Models of SharedLists which are to be removed
   */
  deleteItems: function(selectedItems) {
    var userSharedListsPath = RQ.currentUser.getUserSharedListsPath(),
      publicSharedListPath,
      selectedItemsLength = selectedItems.length,
      that = this,
      lastItem,
      lastItemId;

    if (selectedItemsLength > 0) {
      lastItem = selectedItems[selectedItemsLength - 1];
      lastItemId = lastItem.get('id');

      // https://firebase.google.com/docs/database/web/read-and-write#delete_data
      var sharedListToDeletePath = [].concat(userSharedListsPath);
      sharedListToDeletePath.push(lastItemId);

      RQ.DataStoreUtils.setValue(sharedListToDeletePath, null, function() {
        publicSharedListPath = RQ.currentUser.getPublicSharedListPath(lastItemId);

        // Also delete the node under public/sharedList node
        RQ.DataStoreUtils.setValue(publicSharedListPath, null, function() {
          selectedItems.length = selectedItems.length - 1;
          that.collection.remove(lastItemId);
          that.deleteItems(selectedItems);
        });
      });
    } else {
      Notification.show('success', 'Selected shared lists have been deleted!');

      RQ.Utils.submitEvent(
        RQ.GA_EVENTS.CATEGORIES.SHARED_LIST,
        RQ.GA_EVENTS.ACTIONS.DELETED,
        ['Multiple', 'shared lists', RQ.GA_EVENTS.ACTIONS.DELETED].join(' ')
      );
    }
  }
});

var RuleCardsView = Backbone.View.extend({

  events: {
    'click .rule-card': 'selectRule'
  },

  render: function(options) {
    this.groupId = options && options.groupId;

    var markup = RQ.Templates.RuleCardsView;
    $(this.el).html(markup);
  },

  selectRule: function(event) {
    var $ruleCard = $(event.currentTarget),
      ruleType = $ruleCard.attr('data-type'),
      ruleEditorRoute = '#new/' + (this.groupId ? this.groupId + '/' : '') + ruleType;

    RQ.router.navigate(ruleEditorRoute, true);
  }
});
var RuleLogsView = BaseModelView.extend({
  className: 'rule-logs',

  events: {
    'click .collapse-button': 'collapseTable',
    'click .expand-button': 'expandTable',
    'click .rq-table-header': 'handleTableHeaderClick',
    'click .clear-domain-logs': 'clearDomainLogs',
    'click .clear-tab-logs': 'clearTabLogs',
    'click .focus-tab': 'focusTab',
    'click .reload-tab-logs': 'reloadLogsAndRender'
  },

  getTemplate: function() {
    return RQ.Templates.RuleLogs;
  },

  alsoInitialize: function(options) {
    this.tabId = options && options.tabId;
  },

  show: function() {
    this.reloadLogs().then(() => {
      RQ.showView(this);
      RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.RULE_LOGS, RQ.GA_EVENTS.ACTIONS.VIEWED, 'RuleLogs Viewed');
    });
  },

  reloadLogsAndRender: function() {
    this.reloadLogs().then(() => {
      this.render();
    });
  },

  reloadLogs: function() {
    return new Promise(resolve => {
      chrome.runtime.sendMessage({action: RQ.EXTENSION_MESSAGES.GET_FULL_LOGS, tabId: this.tabId}, logs => {
        this.model = new Backbone.Model({domains: this.parseLogs(logs)});
        resolve();
      });
    });
  },

  parseLogs: function(logs) {
    const domains = [];

    for (let domain in logs) {
      let domainLogs = logs[domain];

      if (domainLogs.length > 0) {
        domains.push({
          domain: domain,
          logs: _.clone(domainLogs).reverse() // latest log on top
        });
      }
    }

    // last visited domain should always be on top
    domains.sort(function(domain1, domain2) {
      return domain2.logs[0].timestamp - domain1.logs[0].timestamp;
    });

    return domains;
  },

  getTable: function(elem) {
    return $(elem).closest('.rq-table');
  },

  collapseTable: function(event) {
    this.getTable(event.target).attr('data-expanded', 'false');
    event.stopPropagation();
  },

  expandTable: function(event) {
    this.getTable(event.target).attr('data-expanded', 'true');
    event.stopPropagation();
  },

  handleTableHeaderClick: function(event) {
    var $target = $(event.target),
      $table;

    if ($target.closest('.actionable').length > 0) {
      return;
    }

    $table = this.getTable($target);
    $table.attr('data-expanded', $table.attr('data-expanded') === 'false');
  },

  clearDomainLogs: function(event) {
    var domain = this.getTable(event.target).attr('data-domain');
    chrome.runtime.sendMessage({ action: RQ.EXTENSION_MESSAGES.CLEAR_LOGS_FOR_TAB, tabId: this.tabId, domain: domain }, () => {
      this.reloadLogsAndRender();
    });
  },

  clearTabLogs: function() {
    chrome.runtime.sendMessage({ action: RQ.EXTENSION_MESSAGES.CLEAR_LOGS_FOR_TAB, tabId: this.tabId }, () => {
      this.reloadLogsAndRender();
    });
  },

  focusTab: function() {
    chrome.runtime.sendMessage({ action: RQ.EXTENSION_MESSAGES.FOCUS_TAB, tabId: this.tabId }, function(focussed) {
      if (!focussed) {
        alert(RQ.MESSAGES.ERROR_TAB_FOCUS);
      }
    });
  }
});
RQ.Router = Backbone.Router.extend({
  routes: {
    '': 'showRulesList',
    'selectRule': 'showRuleCardsView',
    'selectRule/:groupId': 'showRuleCardsView',
    'new/:type': 'showRuleCreator',
    'new/:groupId/:type': 'showGroupedRuleCreator',
    'edit/:id': 'showRuleEditor',
    'copy/:id': 'showCopyRuleEditor',
    'sharedLists': 'showSharedLists',
    'sharedList/:id': 'showSharedRulesList',
    'sharedList/:id/:ruleId': 'showSharedRuleEditor',
    'logs/:tabId': 'showLogs'
  },

  ruleViewMap: {
    REDIRECT: RedirectRuleEditorView,
    CANCEL: CancelRuleEditorView,
    REPLACE: ReplaceRuleEditorView,
    HEADERS: HeadersEditorView,
    USERAGENT: UserAgentRuleEditorView,
    SCRIPT: ScriptRuleEditorView,
    QUERYPARAM: QueryParamsRuleEditorView
  },

  showRulesList: function() {
    var ruleIndexView = new RuleIndexView();
    RQ.showView(ruleIndexView, { update: true });
  },

  showSharedLists: function() {
    var sharedListsIndexView = new SharedListIndexView();

    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.WORKFLOW_STARTED, 'SharedList index page opened');

    RQ.currentUser.isUserAuthenticated(function(isAuthenticated) {
      var susiModal;

      if (!isAuthenticated) {
        RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.LOGIN_REQUESTED, 'Login requested on SharedList index page');

        susiModal = new SusiModal({ model: RQ.currentUser });
        susiModal.show({
          model: { content: RQ.MESSAGES.SIGN_IN_TO_VIEW_SHARED_LISTS },
          loginCallback: function(userProfile) {
            susiModal.hide();
            RQ.showView(sharedListsIndexView, { update: true });

            RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.LOGIN_DONE, 'Login done on SharedList index page');
          },
          closeModalCallback: function() {
            RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.LOGIN_REJECTED, 'Login rejected on SharedList index page');
          }
        });
      } else {
        RQ.showView(sharedListsIndexView, { update: true });
        RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.ALREADY_LOGIN, 'Already login on SharedList index page');
      }
    });
  },

  showSharedRulesList: function(sharedListId) {
    var sharedRulesIndexView = new SharedRulesIndexView({ sharedListId: sharedListId });
    RQ.showView(sharedRulesIndexView, { update: true, sharedListId: sharedListId });
    RQ.Utils.submitEvent(RQ.GA_EVENTS.CATEGORIES.SHARED_LIST, RQ.GA_EVENTS.ACTIONS.VIEWED, 'SharedList Viewed');
  },

  showRuleCardsView: function(groupId) {
    var ruleCardsView = new RuleCardsView();
    RQ.showView(ruleCardsView, {groupId: groupId});
  },

  showRuleCreator: function(ruleType) {
    var ruleTypeUpperCase = ruleType.toUpperCase(),
      editorView = new this.ruleViewMap[ruleTypeUpperCase]();

    RQ.showView(editorView);
  },

  showGroupedRuleCreator: function(groupId, ruleType) {
    var ruleTypeUpperCase = ruleType.toUpperCase(),
      editorView = new this.ruleViewMap[ruleTypeUpperCase](),
      model = new RQ.getRuleModelFromAction(ruleTypeUpperCase);

    model.setGroupId(groupId);
    RQ.showView(editorView, { model: model });
  },

  showRuleEditor: function(ruleId) {
    const that = this;

    RQ.StorageService.getRecord(ruleId).then(ruleModelJSON => {
      const ruleTypeUpperCase = ruleModelJSON.ruleType.toUpperCase(),
        editorView = new that.ruleViewMap[ruleTypeUpperCase](),
        model = new RQ.getRuleModelFromAction(ruleTypeUpperCase, ruleModelJSON);

      RQ.showView(editorView, { model: model, update: true });
    });
  },

  showCopyRuleEditor: function(ruleId) {
    const that = this;

    RQ.StorageService.getRecord(ruleId).then(ruleModelJSON => {
      const ruleTypeUpperCase = ruleModelJSON.ruleType.toUpperCase(),
        editorView = new that.ruleViewMap[ruleTypeUpperCase](),
        model = new RQ.getRuleModelFromAction(ruleTypeUpperCase, ruleModelJSON),
        defaultModel = model.defaults(),
        attributesToOverride = _.pick(defaultModel, 'id', 'creationDate');

      attributesToOverride.name = model.getName() + ' Copy';
      model.set(attributesToOverride, {silent: true});

      RQ.showView(editorView, { model: model, update: true });
    });
  },

  showSharedRuleEditor: function(sharedListId, ruleId) {
    const sharedListTimestamp = RQ.getSharedListTimestamp(sharedListId);

    const sharedListNodePathArray = RQ.currentUser.getPublicSharedListPath(sharedListTimestamp),
      that = this;

    RQ.DataStoreUtils.getValue(sharedListNodePathArray)
      .then(sharedListNode => {
        var ruleModelJSON = _.findWhere(sharedListNode.rules, {id: ruleId}),
          ruleTypeUpperCase,
          editorView,
          model;

        if (!ruleModelJSON || _.isEmpty(ruleModelJSON)) {
          alert('Rule does not exist');
          return;
        }

        ruleModelJSON['isViewMode'] = true;
        ruleModelJSON['isSharedRule'] = true;
        ruleModelJSON['sharedListId'] = RQ.getSharedListTimestamp(sharedListId);

        ruleTypeUpperCase = ruleModelJSON.ruleType.toUpperCase();
        editorView = new that.ruleViewMap[ruleTypeUpperCase]();
        model = new RQ.getRuleModelFromAction(ruleTypeUpperCase, ruleModelJSON);
        RQ.showView(editorView, { model: model });
      }
    );
  },

  showLogs: function(tabId) {
    new RuleLogsView({ tabId: tabId }).show();
  }
});

const userDetailsPromise = RQ.DataStoreUtils.fetchUserDetails();
const featuresListPromise = RQ.DataStoreUtils.getValue(['features']);
const plansListPromise = RQ.DataStoreUtils.getValue(['plans']);

let app_initialized = false;

Promise.all([userDetailsPromise, plansListPromise, featuresListPromise])
  .then(values => {
    app_initialized = true;

    Logger.log('Initializing App with the following details', values[0], values[1], values[2]);
    RQ.init(values[0], values[1], values[2]);
  })
  .catch(error => {
    Logger.error(error);
  });

setTimeout(() => {
  // Issue-375: Firebase is blocked in China
  // In general, Initialize with Bronze Plan whenever there is any network error connecting to Firebase
  if (!app_initialized) {
    Logger.log('App not initialized in default timeout window so initializing with default bronze plan');
    RQ.init({ isLoggedIn: false });
  }
}, RQ.DEFAULTS.APP_INIT_TIMEOUT);
