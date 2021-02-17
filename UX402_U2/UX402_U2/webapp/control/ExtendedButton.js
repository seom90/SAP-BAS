// @ts-ignore
sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/Button",
    "sap/m/MessageToast"
    ], 
    function(Control,Button,MessageToast) {

    "use strict";

    return Control.extend("ux402.UX402_U2.control.ExtendedButton",{
        
        metadata:{
            properties:{
                value:{type: "float", defaultValue: 2},
                "allowHover":{
                    type: "boolean",
                    defaultValue: false
                },
                "hoverText":{
                    type: "string"
                }
            },
            aggregations:{
                acceptButton:{type:"sap.m.Button",multiple: false},
                "content":{singularName: "content"},
                "worksetItems":{type: "sap.ui.core.Item",multiple:true, singularName :"worksetItem"}

            },
            events:{
                "hover":{}
            }
        },

        init: function(){
            this.setAggregation("acceptButton", new Button({
                text:"OK_2"
            }));

        },

        onmouseover: function(evt){
            if(this.getAllowHover()){
                this.fireHover();
            }
        },
        onHover : function(evt){
            MessageToast.show( evt.getSource().getHoverText(),
                    {duration:1000});
        },

        renderer: function(oRm, oControl){
            oRm.write("<div");

            oRm.writeControlData(oControl);
            oRm.addClass("sapUiSmallMarginBeginEnd");
            oRm.writeClasses();

            oRm.write(">");

            oRm.renderControl(oControl.getAggregation("acceptButton"));

            oRm.write("</div>");

        }
    });    
});