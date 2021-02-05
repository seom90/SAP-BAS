sap.ui.define([
    './BaseController',
    'sap/ui/core/routing/History',
    'sap/m/MessageToast'
], function(BaseController, History,MessageToast) {
    'use strict';

    return BaseController.extend("opensap.webapp.controller.Add",{

        onInit:function(){

            this.getRouter().getRoute("add").attachPatternMatched(this._onRouteMatched, this);
        },

        onNavBack: function(){
            var oHistory = History.getInstance(),
                sPreviousHash = oHistory.getPreviousHash();

            if(sPreviousHash !==undefined){
                history.go(-1);
            }else{
                var bReplace = true;
                this.getRouter().navTo("worklist",{},bReplace);
            }
        },

        onCancel: function(){
            this.onNavBack();
        },

        onSave: function(){
            this.getModel().submitChanges();
        },

        _onRouteMatched:function(){

            //register for metadata loaded events
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
            var oContext = this.getModel().createEntry("/ProductSet",{
                properties: oProperties,
                success: this._onCreateSucess.bind(this)
            });

            this.getView().setBindingContext(oContext);

            
        },
        _onCreateSucess:function(oProduct){
            
            var sId  = oProduct.ProductID;

            //navigate to the new product's object view
            this.getRouter().navTo("object",{
                objectId : sId
            }, true);

            //unbind the view to not show this object again
            this.getView().unbindObject();

            //show sucess message
            var sMessage = this.getResourceBundle().getText("newObjectCreated",[oProduct.Name]);
            MessageToast.show(sMessage,{
                closeOnBrowserNavigation : false
            });
        }


    })
    
});