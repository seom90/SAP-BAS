/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library studentseom.com.sap.training.ux402.controls.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "studentseom.com.sap.training.ux402.controls",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"studentseom.com.sap.training.ux402.controls.ExampleColor"
		],
		interfaces: [],
		controls: [
			"studentseom.com.sap.training.ux402.controls.Example",
			"studentseom.com.sap.train­ing.ux402.controls.PlaneInfo",
			"studentseom.com.sap.training.ux402.controls.HoverButton",
			"studentseom.com.sap.training.ux402.controls.PlaneInfoRenderer"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>controls</code>
	 *
	 * @namespace
	 * @name studentseom.com.sap.training.ux402.controls
	 * @author Khalid MORENO
	 * @version ${version}
	 * @public
	 */
	var thisLib = studentseom.com.sap.training.ux402.controls;

	/**
	 * Semantic Colors of the <code>studentseom.com.sap.training.ux402.controls.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
