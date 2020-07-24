sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Week1_Assignment.ZG61_ICON_TAB_BAR_WEEK1_ASSG.controller.Icon_tab_bar", {
		onInit: function () {
			/*	if (!this.oPersonalInfo) {
					this.oPersonalInfo = sap.ui.xmlfragment("Week1_Assignment.ZG61_ICON_TAB_BAR_WEEK1_ASSG.fragments.personalinformation", this)
				},*/

		},
		handleIconTabBarSelect: function () {
			//set the values in fragments from corresponding xml view controls
			this.byId("inpfrgsummryFirst").setValue(this.byId("inpfrgFirst").getValue());
			this.byId("inpfrgsummryLast").setValue(this.byId("inpfrgLast").getValue());
			this.byId("iddpfrgsummaryDoB").setValue(this.byId("iddpfrgDoB").getValue());
			this.byId("inpfrgsummryline1").setValue(this.byId("inpfrgline1").getValue());
			this.byId("inpfrgsummryline2").setValue(this.byId("inpfrgline2").getValue());

			this.byId("inpfrgsummryHD").setValue(this.byId("inpfrgHD").getValue());
			this.byId("inpfrgsummryUniv").setValue(this.byId("inpfrgUniv").getValue());
			this.byId("iddpfrgsummaryMop").setValue(this.byId("iddpfrgMop").getValue());
			return;
		},
		/*handleNext: function () {

		},*/
	});
});