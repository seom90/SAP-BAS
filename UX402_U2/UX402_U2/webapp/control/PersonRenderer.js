ux402.UX402_U2.control.PersonRenderer.render = function(oRm, oControl){
    oRm.write("<ul style:'margin:20px 50px,'");
    oRm.writeControlData(oControl);
    oRm.write(">");
    var aItems = oControl.getItems();
    for(var i = 0; i < aItems.length; i++){
        oRm.write("<li style='padding-top: 20px; font-size: 16px; color: #006699; font-weight: bold'>");
        oRm.write(aItems[i].getFirstname());
        oRm.write("&nbsp;");
        oRm.write(aItems[i].getLastname());
        oRm.write("</li>");
    }
    oRm.write("</ul>");

}