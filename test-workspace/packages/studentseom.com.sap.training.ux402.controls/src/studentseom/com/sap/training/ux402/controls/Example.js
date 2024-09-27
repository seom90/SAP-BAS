/*!
 * ${copyright}
 */

// Provides control studentseom.com.sap.training.ux402.controls.Example.
sap.ui.define([
	"./library", 
	"sap/ui/core/Control", 
	"./ExampleRenderer"
], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	var ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>studentseom.com.sap.training.ux402.controls.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author Khalid MORENO
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias studentseom.com.sap.training.ux402.controls.Example
	 */
	var Example = Control.extend("studentseom.com.sap.training.ux402.controls.Example", /** @lends studentseom.com.sap.training.ux402.controls.Example.prototype */ {
		metadata: {
			library: "studentseom.com.sap.training.ux402.controls",
			properties: {
				/**
				 * The text to display.
				 */
				text: {
					type: "string",
					group: "Data",
					defaultValue: null
				},
				/**
				 * The color to use (default to "Default" color).
				 */
				color: {
					type: "studentseom.com.sap.training.ux402.controls.ExampleColor",
					group: "Appearance",
					defaultValue: ExampleColor.Default
				}
			},
			events: {
				/**
				 * Event is fired when the user clicks the control.
				 */
				press: {}
			}
		},
		renderer: ExampleRenderer,
    onclick: function() {
      this.firePress();
    }
	});
	return Example;

});
