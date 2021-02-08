/*global QUnit*/

sap.ui.define([
	"opensap/webapp/model/formatter"
], /**
     * @param {{ numberUnit: (arg0: any) => any; }} formatter
     */
 function (formatter) {
	"use strict";

	// @ts-ignore
	QUnit.module("Number unit");

	/**
         * @param {{ strictEqual: (arg0: any, arg1: any, arg2: string) => void; }} assert
         * @param {any} sValue
         * @param {any} fExpectedNumber
         */
	function numberUnitValueTestCase(assert, sValue, fExpectedNumber) {
		// Act
		var fNumber = formatter.numberUnit(sValue);

		// Assert
		assert.strictEqual(fNumber, fExpectedNumber, "The rounding was correct");
	}

	// @ts-ignore
	QUnit.test("Should round down a 3 digit number", /**
         * @param {any} assert
         */
 function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.123", "3.12");
	});

	// @ts-ignore
	QUnit.test("Should round up a 3 digit number", /**
         * @param {any} assert
         */
 function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.128", "3.13");
	});

	// @ts-ignore
	QUnit.test("Should round a negative number", /**
         * @param {any} assert
         */
 function (assert) {
		numberUnitValueTestCase.call(this, assert, "-3", "-3.00");
	});

	// @ts-ignore
	QUnit.test("Should round an empty string", /**
         * @param {any} assert
         */
 function (assert) {
		numberUnitValueTestCase.call(this, assert, "", "");
	});

	// @ts-ignore
	QUnit.test("Should round a zero", /**
         * @param {any} assert
         */
 function (assert) {
		numberUnitValueTestCase.call(this, assert, "0", "0.00");
	});

});
