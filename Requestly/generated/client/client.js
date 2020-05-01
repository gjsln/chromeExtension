window.RQ = window.RQ || {};
window.RQ.configs = {
  "version": "19.10.15",
  "browser": "chrome",
  "storageType": "sync",
  "contextMenuContexts": [
    "browser_action"
  ],
  "env": "prod",
  "WEB_URL": "https://app.requestly.in",
  "firebaseConfig": {
    "apiKey": "AIzaSyC2WOxTtgKH554wCezEJ4plxnMNXaUSFXY",
    "authDomain": "app.requestly.in",
    "databaseURL": "https://requestly.firebaseio.com",
    "projectId": "project-7820168409702389920",
    "storageBucket": "project-7820168409702389920.appspot.com",
    "messagingSenderId": "911299702852"
  },
  "logLevel": "info"
};

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
    "Please login to view your Shared Lists.",
  SIGN_IN_TO_CREATE_SHARED_LISTS:
    "Please login to share the selected rules",
  SIGN_IN_TO_SUBMIT_QUERY:
    "Please login to contact our support team.",
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
RQ.Utils = RQ.Utils || {};

RQ.Utils.executeJS = function(code) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.className = RQ.Utils.getScriptClassAttribute();

  script.appendChild(document.createTextNode(code));
  (document.head || document.documentElement).appendChild(script);
  return script;
};

RQ.Utils.addRemoteJS = function(src, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.className = RQ.Utils.getScriptClassAttribute();

  if (typeof callback === 'function') {
    script.onload = callback;
  }

  (document.head || document.documentElement).appendChild(script);
  return script;
};

RQ.Utils.embedCSS = function(css) {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  style.className = RQ.Utils.getScriptClassAttribute();

  (document.head || document.documentElement).appendChild(style);
  return style;
};

RQ.Utils.addRemoteCSS = function(src) {
  var link = document.createElement('link');
  link.href = src;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.className = RQ.Utils.getScriptClassAttribute();

  (document.head || document.documentElement).appendChild(link);
  return link;
};

RQ.Utils.onPageLoad = function() {
  return new Promise(function(resolve) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
};

RQ.Utils.getScriptClassAttribute = function() {
  return 'RQ_SCRIPT';
};
RQ.ScriptRuleHandler = {};

RQ.ScriptRuleHandler.handleRules = function(rules) {
  return new Promise(function(resolve) {
    var libraries = [],
      scripts = [];

    rules.forEach(function (rule) {
      var pair = rule.pairs[0];

      pair.libraries && pair.libraries.forEach(function(library) {
        if (!libraries.includes(library)) {
          libraries.push(library);
        }
      });

      scripts = scripts.concat(pair.scripts || []);
    });

    var cssScripts = scripts.filter(function (script) {
      return script.codeType === RQ.SCRIPT_CODE_TYPES.CSS;
    });

    var jsScripts = scripts.filter(function (script) {
      return !script.codeType || script.codeType === RQ.SCRIPT_CODE_TYPES.JS;
    });

    RQ.ScriptRuleHandler.handleCSSScripts(cssScripts)
      .then(function() { return RQ.ScriptRuleHandler.handleJSLibraries(libraries); })
      .then(function() { return RQ.ScriptRuleHandler.handleJSScripts(jsScripts); })
      .then(resolve);
  });
};

RQ.ScriptRuleHandler.handleCSSScripts = function(cssScripts) {
  return new Promise(function(resolve) {
    cssScripts.forEach(RQ.ScriptRuleHandler.includeCSS);
    resolve();
  });
};

RQ.ScriptRuleHandler.handleJSLibraries = function(libraries) {
  return new Promise(function(resolve) {
    RQ.ScriptRuleHandler.addLibraries(libraries, resolve);
  });
};

RQ.ScriptRuleHandler.handleJSScripts = function(jsScripts) {
  return new Promise(function(resolve) {
    var prePageLoadScripts = [],
      postPageLoadScripts = [];

    jsScripts.forEach(function(script) {
      if (script.loadTime === RQ.SCRIPT_LOAD_TIME.BEFORE_PAGE_LOAD) {
        prePageLoadScripts.push(script);
      } else {
        postPageLoadScripts.push(script);
      }
    });

    RQ.ScriptRuleHandler.includeJSScriptsInOrder(prePageLoadScripts, function() {
      RQ.Utils.onPageLoad().then(function() {
        RQ.ScriptRuleHandler.includeJSScriptsInOrder(postPageLoadScripts, resolve);
      });
    });
  });
};

RQ.ScriptRuleHandler.addLibraries = function(libraries, callback, index) {
  index = index || 0;

  if (index >= libraries.length) {
    typeof callback === 'function' && callback();
    return;
  }

  var libraryKey = libraries[index],
    library = RQ.SCRIPT_LIBRARIES[libraryKey],
    addNextLibraries = function() {
      RQ.ScriptRuleHandler.addLibraries(libraries, callback, index + 1);
    };

  if (library) {
    RQ.Utils.addRemoteJS(library.src, addNextLibraries);
  } else {
    addNextLibraries();
  }
};

RQ.ScriptRuleHandler.includeJSScriptsInOrder = function(scripts, callback, index) {
  index = index || 0;

  if (index >= scripts.length) {
    typeof callback === 'function' && callback();
    return;
  }

  RQ.ScriptRuleHandler.includeJS(scripts[index], function() {
    RQ.ScriptRuleHandler.includeJSScriptsInOrder(scripts, callback, index + 1);
  });
};

RQ.ScriptRuleHandler.includeJS = function(script, callback) {
  if (script.type === RQ.SCRIPT_TYPES.URL) {
    RQ.Utils.addRemoteJS(script.value, callback);
    return;
  }

  if (script.type === RQ.SCRIPT_TYPES.CODE) {
    RQ.Utils.executeJS(script.value);
  }

  typeof callback === 'function' && callback();
};

RQ.ScriptRuleHandler.includeCSS = function(script, callback) {
  if (script.type === RQ.SCRIPT_TYPES.URL) {
    RQ.Utils.addRemoteCSS(script.value);
  } else if (script.type === RQ.SCRIPT_TYPES.CODE) {
    RQ.Utils.embedCSS(script.value);
  }

  typeof callback === 'function' && callback();
};

RQ.UserAgentRuleHandler = {};

RQ.UserAgentRuleHandler.handleRulePairs = function(rulePairs) {
  var finalUserAgentRulePair = rulePairs[rulePairs.length - 1], // only last user agent will finally be applied
    userAgent = finalUserAgentRulePair.userAgent,
    platform = RQ.UserAgentRuleHandler.getPlatformFromUserAgent(userAgent),
    vendor = RQ.UserAgentRuleHandler.getVendorFromUserAgent(userAgent);

  RQ.Utils.executeJS(`Object.defineProperty(window.navigator, 'userAgent', { get: function() { return '${userAgent}'; } });`);
  RQ.Utils.executeJS(`Object.defineProperty(window.navigator, 'vendor', { get: function() { return '${vendor}'; } });`);

  if (platform) {
    // override platform only if it could be derived from userAgent
    RQ.Utils.executeJS(`Object.defineProperty(window.navigator, 'platform', { get: function() { return '${platform}'; } });`);
  }
};

RQ.UserAgentRuleHandler.getPlatformFromUserAgent = function(userAgent) {
  var PLATFORMS = {
    Macintosh: 'MacIntel',
    Android: 'Android',
    Linux: 'Linux',
    iPhone: 'iPhone',
    iPad: 'iPad',
    Windows: 'Win32'
  };

  for (var key in PLATFORMS) {
    if (userAgent.includes(key)) {
      return PLATFORMS[key];
    }
  }
};

RQ.UserAgentRuleHandler.getVendorFromUserAgent = function(userAgent) {
  var VENDORS = {
    iPhone: 'Apple Computer, Inc.',
    iPad: 'Apple Computer, Inc.',
    Chrome: 'Google Inc.'
  };

  for (var key in VENDORS) {
    if (userAgent.includes(key)) {
      return VENDORS[key];
    }
  }

  return ''; // vendor is empty string for others
};


(function executeScriptRules() {
  const message = { action: RQ.CLIENT_MESSAGES.GET_SCRIPT_RULES, url: window.location.href };
  chrome.runtime.sendMessage(message, function(rules) {
    if (rules && rules.constructor === Array) {
      RQ.ScriptRuleHandler.handleRules(rules);

      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.NOTIFY_RULES_APPLIED,
        url: window.location.href,
        rules: rules
      });
    }
  });
})();

(function overrideUserAgent() {
  const message = { action: RQ.CLIENT_MESSAGES.GET_USER_AGENT_RULE_PAIRS, url: window.location.href };
  chrome.runtime.sendMessage(message, function (rulePairs) {
    if (rulePairs && rulePairs.constructor === Array && rulePairs.length > 0) {
      RQ.UserAgentRuleHandler.handleRulePairs(rulePairs);
    }
  });
})();
