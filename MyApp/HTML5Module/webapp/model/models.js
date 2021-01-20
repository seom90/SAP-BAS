sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], /**
     * @param {new (arg0: any) => any} JSONModel
     * @param {any} Device
     */
 function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});