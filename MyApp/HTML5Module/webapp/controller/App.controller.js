// @ts-nocheck
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "opensap/HTML5Module/model/formatter",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     **/
	function (Controller, MessageToast,formatter,Filter,FilterOperator) {
		"use strict";

		return Controller.extend("opensap.HTML5Module.controller.App", {
			onInit: function () {

            },

            formatter : formatter,

            onPressPublish: function () {

                MessageToast.show("you clicked Publish Button");

            },
            
            onShowhello: function () {
                //read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel('helloPanel').getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                // show message
                MessageToast.show(sMsg);
            },

            onItemSelected: function (oEvent){

                var oSelectedItem = oEvent.getParameter("listItem");
                var oContext = oSelectedItem.getBindingContext();
                var sPath = oContext.getPath();
                var oPanel = this.byId("productDetailsPanel");

                oPanel.bindElement({path: sPath});
                oPanel.setVisible(true);

            },

            onFilterProducts: function (oEvent){

                var aFilter = [],
                    sQuery = oEvent.getParameter("query"),

                    oList = this.getView().byId("invoiceList"),

                    oBinding = oList.getBinding("items");

                
                if(sQuery){
                    aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
                }

                oBinding.filter(aFilter);
            }

		});
	});
