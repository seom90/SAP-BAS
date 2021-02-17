// @ts-ignore
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    'sap/ui/core/Fragment'
], function(Controller, JSONModel,formatter,Fragment) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		
        formatter: formatter,

		onInit: function () {
            // @ts-ignore
            var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
            var oView = this.getView();
            oView.setModel(oModel);
            // this.getView().setModel(oModel);

        },
        onNameChange: function(oEvent) {
			var oInput = oEvent.getSource();
			this._validateInput(oInput);
        },

        handleValueHelp : function (oEvent) {
		var oView = this.getView();
		this._sInputId = oEvent.getSource().getId();

		// create value help dialog
		if (!this._pValueHelpDialog) {
			this._pValueHelpDialog = Fragment.load({
				id: oView.getId(),
				name: "ux402.UX402_U2.view.Dialog",
				controller: this
			}).then(function(oValueHelpDialog){
				oView.addDependent(oValueHelpDialog);
				return oValueHelpDialog;
			});
		}

		// open value help dialog
		this._pValueHelpDialog.then(function(oValueHelpDialog){
			oValueHelpDialog.open();
		});
        },
        
        _handleValueHelpClose : function (oEvent) {
		var oSelectedItem = oEvent.getParameter("selectedItem");
		if (oSelectedItem) {
			var productInput = this.byId(this._sInputId);
			productInput.setValue(oSelectedItem.getTitle());
		}
		oEvent.getSource().getBinding("items").filter([]);
        },
        
        _validateInput: function (oInput) {
			var sValueState = "None";
			var bValidationError = false;
			var oBinding = oInput.getBinding("value");

			try {
				oBinding.getType().validateValue(oInput.getValue());
			} catch (oException) {
				sValueState = "Error";
				bValidationError = true;
			}

			oInput.setValueState(sValueState);

			return bValidationError;
		}
	});
});