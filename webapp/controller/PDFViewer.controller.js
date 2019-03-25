sap.ui.define([
	"nabi/demo/MyLibraryDemoApp/controller/BaseController", 
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("nabi.demo.MyLibraryDemoApp.controller.PDFViewer", {
		onInit: function() {
			this.getView().setModel(new JSONModel({
				// pdfsource: ""
				pdfSource: "static/OpenUI5.pdf" 
			}));
			// me.getView().getModel().setProperty("/pdfsource", oEvent.target.result);
		},
		onButtonPress: function() {
			 var path = $.sap.getModulePath("nabi.demo.MyLibraryDemoApp", "/png");
			 console.log( path )
			 this.getView().getModel().setProperty("/pdfsource", "static/OpenUI5.pdf" );
		}
	});
});