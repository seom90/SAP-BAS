// @ts-ignore
sap.ui.define([
    "sap/ui/core/Control"
    ], 
    function(Control) {

        "use strict";
        return Control.extend("ux402.UX402_U2.control..Person", {
        metadata : {
            aggregations : {
                "items":{
                    type: "ux402.UX402_U2.control.PersonItem",
                    multiple:true,
                    singularName:"item"
                }
            },
            defaultAggregation:"items"            
        },

        renderer: "ux402.UX402_U2.control.PersonRenderer",

        init : function() {

        }

    });
});