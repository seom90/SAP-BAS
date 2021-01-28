sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./WorklistJourney",
	"./NavigationJourney",
	"./NotFoundJourney",
	"./ObjectJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({

		arrangements: new Startup(),
		viewNamespace: "opensap.manageproducts.manageproducts.view.",
		autoWait: true
	});

});
