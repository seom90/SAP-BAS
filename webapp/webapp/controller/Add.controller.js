sap.ui.define([
    './BaseController',
    'sap/ui/core/routing/History',
    'sap/m/MessageToast'
], /**
     * @param {{ extend: (arg0: string, arg1: { onInit: () => void; onNavBack: () => void; onCancel: () => void; onSave: () => void; _onRouteMatched: () => void; _onMetadataLoaded: () => void; _onCreateSucess: (oProduct: any) => void; }) => any; }} BaseController
     * @param {{ getInstance: () => any; }} History
     * @param {{ show: (arg0: any, arg1: { closeOnBrowserNavigation: boolean; }) => void; }} MessageToast
     */
 function(BaseController, History,MessageToast) {
    'use strict';

    return BaseController.extend("opensap.webapp.controller.Add",{

        onInit:function(){

            // @ts-ignore
            this.getRouter().getRoute("add").attachPatternMatched(this._onRouteMatched, this);
        },

        onNavBack: function(){
            var oHistory = History.getInstance(),
                sPreviousHash = oHistory.getPreviousHash();

            if(sPreviousHash !==undefined){
                history.go(-1);
            }else{
                var bReplace = true;
                // @ts-ignore
                this.getRouter().navTo("worklist",{},bReplace);
            }
        },

        onCancel: function(){
            this.onNavBack();
        },

        onSave: function(){
            // @ts-ignore
            this.getModel().submitChanges();
        },

        _onRouteMatched:function(){

            //register for metadata loaded events
            // @ts-ignore
            var oModel = this.getModel();
            oModel.metadataLoaded().then(this._onMetadataLoaded.bind(this));
        },

        _onMetadataLoaded: function(){

            //create a default properties
            var oProperties = {
                // @ts-ignore
                ProductID: "" + parseInt(Math.random() * 10000000000),
                TypeCode: "PR",
                TaxTarifCode:1,
                CurrencyCode:"EUR",
                MeasureUnit: "EA"
            };

            //create new entry in the model
            // @ts-ignore
            var oContext = this.getModel().createEntry("/ProductSet",{
                properties: oProperties,
                success: this._onCreateSucess.bind(this)
            });

            // @ts-ignore
            this.getView().setBindingContext(oContext);

            
        },
        _onCreateSucess:/**
         * @param {{ ProductID: any; Name: any; }} oProduct
         */
function(oProduct){
            
            var sId  = oProduct.ProductID;

            //navigate to the new product's object view
            // @ts-ignore
            this.getRouter().navTo("object",{
                objectId : sId
            }, true);

            //unbind the view to not show this object again
            // @ts-ignore
            this.getView().unbindObject();

            //show sucess message
            // @ts-ignore
            var sMessage = this.getResourceBundle().getText("newObjectCreated",[oProduct.Name]);
            MessageToast.show(sMessage,{
                closeOnBrowserNavigation : false
            });
        }


    })
    
});