# Test NaviPDF_DEMO  back up 


lib.

				"sap.ui.layout": {},
				"sap.ushell": {},
				"sap.collaboration": {},
				"sap.ui.comp": {},
				"sap.uxap": {},
				"ui5lab.wl.pdf":{},
				
				"ui5lab.wl.pdf":{}
				"nabi.m":{}
			
-- neo-app.json
{
  "welcomeFile": "/webapp/index.html",
  "routes": [
    {
      "path": "/resources",
      "target": {
        "type": "service",
        "name": "sapui5",
        "entryPath": "/resources"
      },
      "description": "SAPUI5 Resources"
    },
    {
      "path": "/test-resources",
      "target": {
        "type": "service",
        "name": "sapui5",
        "entryPath": "/test-resources"
      },
      "description": "SAPUI5 Test Resources"
    },
	{
		"path": "/resources/nabi/m",
		"target": {
			"type": "application",
			"name": "nabimobilelib", 
			"entryPath": "/nabi/m/"
		},
		"description": "UI5 Nabi Mobile Library"
	}
  ],
  "sendWelcomeFileRedirect": true
}