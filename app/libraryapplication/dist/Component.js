sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/app/libraryapplication/model/models"],function(e,i,t){"use strict";return e.extend("com.app.libraryapplication.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});