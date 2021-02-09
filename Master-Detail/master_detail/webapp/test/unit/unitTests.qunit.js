/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ux402/master_detail/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});