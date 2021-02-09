/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ux402/UX402_U2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
