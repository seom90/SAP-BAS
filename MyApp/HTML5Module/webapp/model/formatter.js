// eslint-disable-next-line no-undef
sap.ui.define([], function() {
    'use strict';

    return{
        delivery : /**
         * @param {number} iWeight
         * @param {string} sMeasure
         */
 function (iWeight,sMeasure) {
            var sResult = "";

            if (sMeasure === "G") {
                iWeight = iWeight / 1000 ;
            }
            if (iWeight < 0.5) {
                sResult = "Mail Deliver";
            }else if (iWeight < 5) {
                sResult = "Parcel Deliver";
            }else{
                sResult = "Carrier Delivery";
            }
            return sResult;
        }
    };
    
});