/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"Week1_Assignment/ZG61_ICON_TAB_BAR_WEEK1_ASSG/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Week1_Assignment/ZG61_ICON_TAB_BAR_WEEK1_ASSG/test/integration/pages/Icon_tab_bar",
	"Week1_Assignment/ZG61_ICON_TAB_BAR_WEEK1_ASSG/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Week1_Assignment.ZG61_ICON_TAB_BAR_WEEK1_ASSG.view.",
		autoWait: true
	});
});