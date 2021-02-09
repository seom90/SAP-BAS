// @ts-ignore
sap.ui.define(function() {
	"use strict";

	var Formatter = {

		status :  function (sStatus) {
				if (sStatus === "Available") {
					return "Success";
				} else if (sStatus === "Out of Stock") {
					return "Warning";
				} else if (sStatus === "Discontinued"){
					return "Error";
				} else {
					return "None";
				}
        },
        
        getIcon:function(sStatus){
            return sStatus === "Pending" ? "sap-icon://message-warning" : "sap-icon://flag";
        }
	};

	return Formatter;

},  /* bExport= */ true);