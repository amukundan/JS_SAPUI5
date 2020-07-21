sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Week1_Assignment/ZG61_ICON_TAB_BAR_WEEK1_ASSG/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("Week1_Assignment.ZG61_ICON_TAB_BAR_WEEK1_ASSG.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});