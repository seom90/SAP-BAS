// @ts-ignore
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"../model/formatter",
], function(Controller, JSONModel,formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		
        formatter: formatter,

		onInit: function () {
            // @ts-ignore
            var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
            var oView = this.getView();
            oView.setModel(oModel);
            // this.getView().setModel(oModel);

        }
	});
});