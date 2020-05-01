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