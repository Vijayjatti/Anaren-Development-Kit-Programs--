
var app = {

	serviceUUID:"2b59161b-593d-40a9-ae48-cedefd816dd0",
	notifyUUID:"2b59161b-593d-40a9-ae48-cedefd816dd1",
		
		localName:"ble_test",
		
	element_Expression15_evaluated: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue =  app.element_Expression15.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.visible = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Expression15\" ]---X--->[ \"TestConnect\" ] " + err.toString());
					}
				}
				
			app.element_TestConnect.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Expression15\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"TestConnect\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue =  app.element_Expression15.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.visible = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Expression15\" ]---X--->[ \"ImagePan29\" ] " + err.toString());
					}
				}
				
			app.element_ImagePan29.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Expression15\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ImagePan29\" ]");
		})();

	},

	element_CheckName_expressionTrue: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue =  app.element_CheckName.getValue();
			var value = sourceValue;
			app.element_Scanner.stopScan();
				
			//baseApp.debugLog("Connection Event: [ \"CheckName\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Scanner\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue =  app.element_CheckName.getValues();
			var values = sourceValue;
				try {
					eval("targetValues.values = " + "values");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"CheckName\" ]---X--->[ \"Expression15\" ] " + err.toString());
					}
				}
				
			app.element_Expression15.evaluate(targetValues.values);
				
			//baseApp.debugLog("Connection Event: [ \"CheckName\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Expression15\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue =  app.element_CheckName.getValues();
			var values = sourceValue;
				try {
					eval("targetValues.values = " + "values");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"CheckName\" ]---X--->[ \"Expression17\" ] " + err.toString());
					}
				}
				
			app.element_Expression17.evaluate(targetValues.values);
				
			//baseApp.debugLog("Connection Event: [ \"CheckName\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Expression17\" ]");
		})();

	},

	element_Expression17_evaluated: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue =  app.element_Expression17.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.visible = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Expression17\" ]---X--->[ \"Button16\" ] " + err.toString());
					}
				}
				
			app.element_Button16.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Expression17\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Button16\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue =  app.element_Expression17.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.visible = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Expression17\" ]---X--->[ \"ImagePan24\" ] " + err.toString());
					}
				}
				
			app.element_ImagePan24.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Expression17\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ImagePan24\" ]");
		})();

	},

	element_Scanner_deviceDiscovered: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue =  app.element_Scanner.getValue();
			var name = sourceValue[0];
			var address = sourceValue[1];
			var rssi = sourceValue[2];
				try {
					eval("targetValues.value = " + "name");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Scanner\" ]---X--->[ \"CheckName\" ] " + err.toString());
					}
				}
				
				try {
					eval("targetValues.key = " + "\"name\"");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Scanner\" ]---X--->[ \"CheckName\" ] " + err.toString());
					}
				}
				
			app.element_CheckName.addValue(targetValues.key,targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"Scanner\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"CheckName\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue =  app.element_Scanner.getValue();
			var name = sourceValue[0];
			var address = sourceValue[1];
			var rssi = sourceValue[2];
				try {
					eval("targetValues.value = " + "address");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Scanner\" ]---X--->[ \"CheckName\" ] " + err.toString());
					}
				}
				
				try {
					eval("targetValues.key = " + "\"address\"");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Scanner\" ]---X--->[ \"CheckName\" ] " + err.toString());
					}
				}
				
			app.element_CheckName.addValue(targetValues.key,targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"Scanner\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"CheckName\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue =  app.element_Scanner.getValue();
			var name = sourceValue[0];
			var address = sourceValue[1];
			var rssi = sourceValue[2];
				try {
					eval("targetValues.value = " + "rssi");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Scanner\" ]---X--->[ \"CheckName\" ] " + err.toString());
					}
				}
				
				try {
					eval("targetValues.key = " + "\"rssi\"");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Scanner\" ]---X--->[ \"CheckName\" ] " + err.toString());
					}
				}
				
			app.element_CheckName.addValue(targetValues.key,targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"Scanner\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"CheckName\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.values = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Scanner\" ]---X--->[ \"CheckName\" ] " + err.toString());
					}
				}
				
			app.element_CheckName.evaluate(targetValues.values);
				
			//baseApp.debugLog("Connection Event: [ \"Scanner\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"CheckName\" ]");
		})();

	},

	element_ScanTask_task: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
			app.element_Scanner.startScan();
				
			//baseApp.debugLog("Connection Event: [ \"ScanTask\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Scanner\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ScanTask\" ]---X--->[ \"UARTRead19\" ] " + err.toString());
					}
				}
				
			app.element_UARTRead19.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"ScanTask\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"UARTRead19\" ]");
		})();

	},

	element_UARTRead19_valueReturned: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue =  app.element_UARTRead19.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.value = " + "value + \"MPH\"");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"UARTRead19\" ]---X--->[ \"Label24\" ] " + err.toString());
					}
				}
				
			app.element_Label24.setValue(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"UARTRead19\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Label24\" ]");
		})();

	},

	initialize: function() {

			app.layouts = {"Default": {"devicename": ".*", "elements": {"Button16": {"y": 592, "x": 97, "height": 31, "width": 211}, "Label28": {"y": 367, "x": 52, "height": 31, "width": 166}, "TestConnect": {"y": 592, "x": 97, "height": 31, "width": 211}, "ImagePan29": {"y": 412, "x": 97, "height": 166, "width": 166}, "Label24": {"y": 367, "x": 232, "height": 31, "width": 76}, "ImagePan23": {"y": 52, "x": 52, "height": 256, "width": 256}, "ImagePan24": {"y": 412, "x": 97, "height": 166, "width": 166}}, "orientation": "portrait", "platform": "", "height": 1024, "width": 768, "version": ".*", "name": "Default (768x1024)"}};
			app.currentLayout = "Default";
			var bestLayoutMatch = "Default";
			
			for(var layoutName in app.layouts) {
				if(app.layouts[layoutName].width == baseApp.screenWidth && app.layouts[layoutName].height == baseApp.screenHeight && device.platform == app.layouts[layoutName].platform) {
					bestLayoutMatch = layoutName;
					break;
				}
			
				else if(	app.layouts[layoutName].width <= baseApp.screenWidth &&
						app.layouts[layoutName].height <= baseApp.screenHeight) {
						
						if(bestLayoutMatch != "Default") {
							if(((baseApp.screenWidth - app.layouts[layoutName].width) + (baseApp.screenHeight - app.layouts[layoutName].height)) <
							((baseApp.screenWidth - app.layouts[bestLayoutMatch].width) + (baseApp.screenHeight - app.layouts[bestLayoutMatch].height))) {
								
								bestLayoutMatch = layoutName;
							}
						}
						
						else {
							bestLayoutMatch = layoutName;
						}
				}
			}
			
			if(app.layouts[bestLayoutMatch] === undefined) {
				bestLayoutMatch = "Default";
			}
			
			app.currentLayout = bestLayoutMatch;
			
			
			app.element_Expression15 = new Expression("parseInt(values.rssi)>-50");

			app.element_Expression15.trigger = function() {
				if(app.element_Expression15.onTrigger != undefined)
					app.element_Expression15.onTrigger();
			}
			
			if(app.element_Expression15_onTrigger != undefined)
				app.element_Expression15.onTrigger = app.element_Expression15_onTrigger;
		
			if(app.element_Expression15_expressionTrue != undefined)
				app.element_Expression15.expressionTrue = app.element_Expression15_expressionTrue;
		
			if(app.element_Expression15_expressionFalse != undefined)
				app.element_Expression15.expressionFalse = app.element_Expression15_expressionFalse;
		
			if(app.element_Expression15_evaluated != undefined)
				app.element_Expression15.evaluated = app.element_Expression15_evaluated;
		
			app.element_CheckName = new Expression("values.name == \"ble_test\"");

			app.element_CheckName.trigger = function() {
				if(app.element_CheckName.onTrigger != undefined)
					app.element_CheckName.onTrigger();
			}
			
			if(app.element_CheckName_onTrigger != undefined)
				app.element_CheckName.onTrigger = app.element_CheckName_onTrigger;
		
			if(app.element_CheckName_expressionTrue != undefined)
				app.element_CheckName.expressionTrue = app.element_CheckName_expressionTrue;
		
			if(app.element_CheckName_expressionFalse != undefined)
				app.element_CheckName.expressionFalse = app.element_CheckName_expressionFalse;
		
			if(app.element_CheckName_evaluated != undefined)
				app.element_CheckName.evaluated = app.element_CheckName_evaluated;
		
			app.element_Expression17 = new Expression("parseInt(values.rssi)<=-50");

			app.element_Expression17.trigger = function() {
				if(app.element_Expression17.onTrigger != undefined)
					app.element_Expression17.onTrigger();
			}
			
			if(app.element_Expression17_onTrigger != undefined)
				app.element_Expression17.onTrigger = app.element_Expression17_onTrigger;
		
			if(app.element_Expression17_expressionTrue != undefined)
				app.element_Expression17.expressionTrue = app.element_Expression17_expressionTrue;
		
			if(app.element_Expression17_expressionFalse != undefined)
				app.element_Expression17.expressionFalse = app.element_Expression17_expressionFalse;
		
			if(app.element_Expression17_evaluated != undefined)
				app.element_Expression17.evaluated = app.element_Expression17_evaluated;
		
			app.element_Label28 = new zebra.ui.MLabel("Speed of the Vehicle");
			
			app.element_Label28.setVisible(true);
			app.element_Label28.setEnabled(true);
			app.element_Label28.setColor("Black");
			app.element_Label28.setFont("14px Arial");

			app.element_Label28.trigger = function() {
				if(app.element_Label28.onTrigger != undefined)
					app.element_Label28.onTrigger();
			}
			
			app.element_Label28.setValue = function(s){
				s = s.toString();
				if (s == null) s = "";
				this.view.setValue(s);
				this.repaint();
				return this;
			};
        
			app.element_Label28.appendValue = function(value) {
				this.setValue(this.getValue() + value.toString());
			}
			
			if(app.element_Label28_onTrigger != undefined)
				app.element_Label28.onTrigger = app.element_Label28_onTrigger;
			
			if(app.element_Label28_mousePressed != undefined)
				app.element_Label28.mousePressed = app.element_Label28_mousePressed;
				
			if(app.element_Label28_mouseClicked != undefined)
				app.element_Label28.mouseClicked = app.element_Label28_mouseClicked;
			
			if(app.element_Label28_mouseReleased != undefined)
				app.element_Label28.mouseReleased = app.element_Label28_mouseReleased;
			
			if(app.element_Label28_mouseEntered != undefined)
				app.element_Label28.mouseEntered = app.element_Label28_mouseEntered;
			
			if(app.element_Label28_mouseMoved != undefined)
				app.element_Label28.mouseMoved = app.element_Label28_mouseMoved;
			
			if(app.element_Label28_mouseExited != undefined)
				app.element_Label28.mouseExited = app.element_Label28_mouseExited;
			
			app.element_Label28.setBounds(	app.layouts[app.currentLayout]["elements"].Label28.x, 
							app.layouts[app.currentLayout]["elements"].Label28.y, 
							app.layouts[app.currentLayout]["elements"].Label28.width, 
							app.layouts[app.currentLayout]["elements"].Label28.height);
							
		
			app.element_Scanner = new Scanner();

			app.element_Scanner.trigger = function() {
				if(app.element_Scanner.onTrigger != undefined)
					app.element_Scanner.onTrigger();
			}
			
			if(app.element_Scanner_onTrigger != undefined)
				app.element_Scanner.onTrigger = app.element_Scanner_onTrigger;
		
			if(app.element_Scanner_deviceDiscovered != undefined)
				app.element_Scanner.deviceDiscovered = app.element_Scanner_deviceDiscovered;
		
			if(app.element_Scanner_scanningStarted != undefined)
				app.element_Scanner.scanningStarted = app.element_Scanner_scanningStarted;
		
			if(app.element_Scanner_scanningStopped != undefined)
				app.element_Scanner.scanningStopped = app.element_Scanner_scanningStopped;
		
			app.element_Button16 = new zebra.ui.Button(new zebra.ui.MLabel("General Mode ON"));
			
			app.element_Button16.setVisible(false);
			app.element_Button16.setEnabled(true);
			app.element_Button16.properties({
				"background": {
					"out": new zebra.ui.Gradient("rgb(250, 250, 250)", "rgb(234, 234, 234)"),
					"pressed.over": new zebra.ui.Gradient("rgb(255, 255, 255)", "rgb(255, 255, 255)"),
					"over": new zebra.ui.Gradient("rgb(234, 234, 234)", "rgb(214, 214, 214)"),
					"disabled": new zebra.ui.Gradient("rgb(211, 211, 211)", "rgb(211, 211, 211)")
				}
			});
		
			app.element_Button16.setBorder("plain");

			app.element_Button16.trigger = function() {
				if(app.element_Button16.onTrigger != undefined)
					app.element_Button16.onTrigger();
			}
			
			if(app.element_Button16_onTrigger != undefined)
				app.element_Button16.onTrigger = app.element_Button16_onTrigger;
			
			if(app.element_Button16_mousePressed != undefined)
				app.element_Button16.mousePressed = app.element_Button16_mousePressed;
				
			if(app.element_Button16_mouseClicked != undefined)
				app.element_Button16.mouseClicked = app.element_Button16_mouseClicked;
			
			if(app.element_Button16_mouseReleased != undefined)
				app.element_Button16.mouseReleased = app.element_Button16_mouseReleased;
			
			if(app.element_Button16_mouseEntered != undefined)
				app.element_Button16.mouseEntered = app.element_Button16_mouseEntered;
			
			if(app.element_Button16_mouseMoved != undefined)
				app.element_Button16.mouseMoved = app.element_Button16_mouseMoved;
			
			if(app.element_Button16_mouseExited != undefined)
				app.element_Button16.mouseExited = app.element_Button16_mouseExited;
			
			app.element_Button16.setBounds(	app.layouts[app.currentLayout]["elements"].Button16.x, 
							app.layouts[app.currentLayout]["elements"].Button16.y, 
							app.layouts[app.currentLayout]["elements"].Button16.width, 
							app.layouts[app.currentLayout]["elements"].Button16.height);
			
		
			app.element_ScanTask = new zebra.util.task(function(c){
				if(app.element_ScanTask_task != undefined)
					this.element_ScanTask_task();
			});
			
			app.element_ScanTask.element_ScanTask_task = app.element_ScanTask_task;

			app.element_ScanTask.trigger = function() {
				if(app.element_ScanTask.onTrigger != undefined)
					app.element_ScanTask.onTrigger();
			}
			
			if(app.element_ScanTask_onTrigger != undefined)
				app.element_ScanTask.onTrigger = app.element_ScanTask_onTrigger;
			
			app.element_ScanTask.run(1000, 1000);
			
		
			app.element_ImagePan29 = new zebra.ui.ImagePan("http://ecx.images-amazon.com/images/I/31MGG73s0SL._SL500_AA280_.jpg");
			
			app.element_ImagePan29.airOffset = [0, 0];
			
			app.element_ImagePan29.setOffset = function (x, y) {
				if(this.airOffset === undefined) {
					this.airOffset = [0, 0];
				}
				
				if(x != this.airOffset[0] || y != this.airOffset[1]) {
					this.setLocation(this.x - this.airOffset[0], this.y - this.airOffset[1]);
				
					this.airOffset[0] = x;
					this.airOffset[1] = y;
				
					this.setLocation(this.x + this.airOffset[0], this.y + this.airOffset[1]);
				
					this.repaint();
				}
			};

			app.element_ImagePan29.getOffset = function() {
				return this.airOffset;
			};
			
			app.element_ImagePan29.setRotation = function(r) {
				if(this.airRotation != r) {
					this.airRotation = r;
					this.repaint();
				}
			};
			
			app.element_ImagePan29.getRotation = function() {
				if (this.airRotation === undefined) {
					this.airRotation = 0;
				}
				return this.airRotation;
			};
				
			app.element_ImagePan29.paint = function (g) {
				if (this.view != null) {
					var l = this.getLeft(), t = this.getTop(), w = this.width, h = this.height;
					if(this.airRotation !== undefined) {
						g.translate(this.width/2, this.height/2);
						g.rotate(this.airRotation*Math.PI/180);
						g.translate(-this.width/2, -this.height/2);
					}
					this.view.paint(g, l, t, w, h, this);
				}
			};
					
			app.element_ImagePan29.setRotation(0);
			app.element_ImagePan29.setVisible(false);
			app.element_ImagePan29.setEnabled(true);
			app.element_ImagePan29.setBackground("transparent");

			app.element_ImagePan29.trigger = function() {
				if(app.element_ImagePan29.onTrigger != undefined)
					app.element_ImagePan29.onTrigger();
			}
			
			if(app.element_ImagePan29_onTrigger != undefined)
				app.element_ImagePan29.onTrigger = app.element_ImagePan29_onTrigger;
			
			if(app.element_ImagePan29_mousePressed != undefined)
				app.element_ImagePan29.mousePressed = app.element_ImagePan29_mousePressed;
				
			if(app.element_ImagePan29_mouseClicked != undefined)
				app.element_ImagePan29.mouseClicked = app.element_ImagePan29_mouseClicked;
			
			if(app.element_ImagePan29_mouseReleased != undefined)
				app.element_ImagePan29.mouseReleased = app.element_ImagePan29_mouseReleased;
			
			if(app.element_ImagePan29_mouseEntered != undefined)
				app.element_ImagePan29.mouseEntered = app.element_ImagePan29_mouseEntered;
			
			if(app.element_ImagePan29_mouseMoved != undefined)
				app.element_ImagePan29.mouseMoved = app.element_ImagePan29_mouseMoved;
			
			if(app.element_ImagePan29_mouseExited != undefined)
				app.element_ImagePan29.mouseExited = app.element_ImagePan29_mouseExited;
			
			app.element_ImagePan29.setBounds(	app.layouts[app.currentLayout]["elements"].ImagePan29.x, 
							app.layouts[app.currentLayout]["elements"].ImagePan29.y, 
							app.layouts[app.currentLayout]["elements"].ImagePan29.width, 
							app.layouts[app.currentLayout]["elements"].ImagePan29.height);
							
		
			app.element_Label24 = new zebra.ui.MLabel("");
			
			app.element_Label24.setVisible(true);
			app.element_Label24.setEnabled(true);
			app.element_Label24.setColor("Black");
			app.element_Label24.setFont("14px Arial");

			app.element_Label24.trigger = function() {
				if(app.element_Label24.onTrigger != undefined)
					app.element_Label24.onTrigger();
			}
			
			app.element_Label24.setValue = function(s){
				s = s.toString();
				if (s == null) s = "";
				this.view.setValue(s);
				this.repaint();
				return this;
			};
        
			app.element_Label24.appendValue = function(value) {
				this.setValue(this.getValue() + value.toString());
			}
			
			if(app.element_Label24_onTrigger != undefined)
				app.element_Label24.onTrigger = app.element_Label24_onTrigger;
			
			if(app.element_Label24_mousePressed != undefined)
				app.element_Label24.mousePressed = app.element_Label24_mousePressed;
				
			if(app.element_Label24_mouseClicked != undefined)
				app.element_Label24.mouseClicked = app.element_Label24_mouseClicked;
			
			if(app.element_Label24_mouseReleased != undefined)
				app.element_Label24.mouseReleased = app.element_Label24_mouseReleased;
			
			if(app.element_Label24_mouseEntered != undefined)
				app.element_Label24.mouseEntered = app.element_Label24_mouseEntered;
			
			if(app.element_Label24_mouseMoved != undefined)
				app.element_Label24.mouseMoved = app.element_Label24_mouseMoved;
			
			if(app.element_Label24_mouseExited != undefined)
				app.element_Label24.mouseExited = app.element_Label24_mouseExited;
			
			app.element_Label24.setBounds(	app.layouts[app.currentLayout]["elements"].Label24.x, 
							app.layouts[app.currentLayout]["elements"].Label24.y, 
							app.layouts[app.currentLayout]["elements"].Label24.width, 
							app.layouts[app.currentLayout]["elements"].Label24.height);
							
		
			app.element_UARTRead19 = new Function(0, "2b59161b-593d-40a9-ae48-cedefd816dd2", "json", "json");
				
			app.element_UARTRead19.trigger = function() {
				if(app.element_UARTRead19.onTrigger != undefined)
					app.element_UARTRead19.onTrigger();
			}
			
			if(app.element_UARTRead19_onTrigger != undefined)
				app.element_UARTRead19.onTrigger = app.element_UARTRead19_onTrigger;
			
			if(app.element_UARTRead19_valueReturned != undefined)
				app.element_UARTRead19.valueReturned = app.element_UARTRead19_valueReturned;
				
			if(app.element_UARTRead19_notified != undefined)
				app.element_UARTRead19.notified = app.element_UARTRead19_notified;
		
			app.element_ImagePan23 = new zebra.ui.ImagePan("http://www.senecahs.org/vimages/shared/vnews/stories/54aaa717a8b08/1_be-safe-drive-smart-square.jpg");
			
			app.element_ImagePan23.airOffset = [0, 0];
			
			app.element_ImagePan23.setOffset = function (x, y) {
				if(this.airOffset === undefined) {
					this.airOffset = [0, 0];
				}
				
				if(x != this.airOffset[0] || y != this.airOffset[1]) {
					this.setLocation(this.x - this.airOffset[0], this.y - this.airOffset[1]);
				
					this.airOffset[0] = x;
					this.airOffset[1] = y;
				
					this.setLocation(this.x + this.airOffset[0], this.y + this.airOffset[1]);
				
					this.repaint();
				}
			};

			app.element_ImagePan23.getOffset = function() {
				return this.airOffset;
			};
			
			app.element_ImagePan23.setRotation = function(r) {
				if(this.airRotation != r) {
					this.airRotation = r;
					this.repaint();
				}
			};
			
			app.element_ImagePan23.getRotation = function() {
				if (this.airRotation === undefined) {
					this.airRotation = 0;
				}
				return this.airRotation;
			};
				
			app.element_ImagePan23.paint = function (g) {
				if (this.view != null) {
					var l = this.getLeft(), t = this.getTop(), w = this.width, h = this.height;
					if(this.airRotation !== undefined) {
						g.translate(this.width/2, this.height/2);
						g.rotate(this.airRotation*Math.PI/180);
						g.translate(-this.width/2, -this.height/2);
					}
					this.view.paint(g, l, t, w, h, this);
				}
			};
					
			app.element_ImagePan23.setRotation(0);
			app.element_ImagePan23.setVisible(true);
			app.element_ImagePan23.setEnabled(true);
			app.element_ImagePan23.setBackground("transparent");

			app.element_ImagePan23.trigger = function() {
				if(app.element_ImagePan23.onTrigger != undefined)
					app.element_ImagePan23.onTrigger();
			}
			
			if(app.element_ImagePan23_onTrigger != undefined)
				app.element_ImagePan23.onTrigger = app.element_ImagePan23_onTrigger;
			
			if(app.element_ImagePan23_mousePressed != undefined)
				app.element_ImagePan23.mousePressed = app.element_ImagePan23_mousePressed;
				
			if(app.element_ImagePan23_mouseClicked != undefined)
				app.element_ImagePan23.mouseClicked = app.element_ImagePan23_mouseClicked;
			
			if(app.element_ImagePan23_mouseReleased != undefined)
				app.element_ImagePan23.mouseReleased = app.element_ImagePan23_mouseReleased;
			
			if(app.element_ImagePan23_mouseEntered != undefined)
				app.element_ImagePan23.mouseEntered = app.element_ImagePan23_mouseEntered;
			
			if(app.element_ImagePan23_mouseMoved != undefined)
				app.element_ImagePan23.mouseMoved = app.element_ImagePan23_mouseMoved;
			
			if(app.element_ImagePan23_mouseExited != undefined)
				app.element_ImagePan23.mouseExited = app.element_ImagePan23_mouseExited;
			
			app.element_ImagePan23.setBounds(	app.layouts[app.currentLayout]["elements"].ImagePan23.x, 
							app.layouts[app.currentLayout]["elements"].ImagePan23.y, 
							app.layouts[app.currentLayout]["elements"].ImagePan23.width, 
							app.layouts[app.currentLayout]["elements"].ImagePan23.height);
							
		
			app.element_ImagePan24 = new zebra.ui.ImagePan("http://ai-i3.infcdn.net/icons_siandroid/jpg/300/1473/1473254.jpg");
			
			app.element_ImagePan24.airOffset = [0, 0];
			
			app.element_ImagePan24.setOffset = function (x, y) {
				if(this.airOffset === undefined) {
					this.airOffset = [0, 0];
				}
				
				if(x != this.airOffset[0] || y != this.airOffset[1]) {
					this.setLocation(this.x - this.airOffset[0], this.y - this.airOffset[1]);
				
					this.airOffset[0] = x;
					this.airOffset[1] = y;
				
					this.setLocation(this.x + this.airOffset[0], this.y + this.airOffset[1]);
				
					this.repaint();
				}
			};

			app.element_ImagePan24.getOffset = function() {
				return this.airOffset;
			};
			
			app.element_ImagePan24.setRotation = function(r) {
				if(this.airRotation != r) {
					this.airRotation = r;
					this.repaint();
				}
			};
			
			app.element_ImagePan24.getRotation = function() {
				if (this.airRotation === undefined) {
					this.airRotation = 0;
				}
				return this.airRotation;
			};
				
			app.element_ImagePan24.paint = function (g) {
				if (this.view != null) {
					var l = this.getLeft(), t = this.getTop(), w = this.width, h = this.height;
					if(this.airRotation !== undefined) {
						g.translate(this.width/2, this.height/2);
						g.rotate(this.airRotation*Math.PI/180);
						g.translate(-this.width/2, -this.height/2);
					}
					this.view.paint(g, l, t, w, h, this);
				}
			};
					
			app.element_ImagePan24.setRotation(0);
			app.element_ImagePan24.setVisible(false);
			app.element_ImagePan24.setEnabled(true);
			app.element_ImagePan24.setBackground("transparent");

			app.element_ImagePan24.trigger = function() {
				if(app.element_ImagePan24.onTrigger != undefined)
					app.element_ImagePan24.onTrigger();
			}
			
			if(app.element_ImagePan24_onTrigger != undefined)
				app.element_ImagePan24.onTrigger = app.element_ImagePan24_onTrigger;
			
			if(app.element_ImagePan24_mousePressed != undefined)
				app.element_ImagePan24.mousePressed = app.element_ImagePan24_mousePressed;
				
			if(app.element_ImagePan24_mouseClicked != undefined)
				app.element_ImagePan24.mouseClicked = app.element_ImagePan24_mouseClicked;
			
			if(app.element_ImagePan24_mouseReleased != undefined)
				app.element_ImagePan24.mouseReleased = app.element_ImagePan24_mouseReleased;
			
			if(app.element_ImagePan24_mouseEntered != undefined)
				app.element_ImagePan24.mouseEntered = app.element_ImagePan24_mouseEntered;
			
			if(app.element_ImagePan24_mouseMoved != undefined)
				app.element_ImagePan24.mouseMoved = app.element_ImagePan24_mouseMoved;
			
			if(app.element_ImagePan24_mouseExited != undefined)
				app.element_ImagePan24.mouseExited = app.element_ImagePan24_mouseExited;
			
			app.element_ImagePan24.setBounds(	app.layouts[app.currentLayout]["elements"].ImagePan24.x, 
							app.layouts[app.currentLayout]["elements"].ImagePan24.y, 
							app.layouts[app.currentLayout]["elements"].ImagePan24.width, 
							app.layouts[app.currentLayout]["elements"].ImagePan24.height);
							
		
			app.element_TestConnect = new zebra.ui.Button(new zebra.ui.MLabel("Silent Mode ON"));
			
			app.element_TestConnect.setVisible(false);
			app.element_TestConnect.setEnabled(true);
			app.element_TestConnect.properties({
				"background": {
					"out": new zebra.ui.Gradient("rgb(250, 250, 250)", "rgb(234, 234, 234)"),
					"pressed.over": new zebra.ui.Gradient("rgb(255, 255, 255)", "rgb(255, 255, 255)"),
					"over": new zebra.ui.Gradient("rgb(234, 234, 234)", "rgb(214, 214, 214)"),
					"disabled": new zebra.ui.Gradient("rgb(211, 211, 211)", "rgb(211, 211, 211)")
				}
			});
		
			app.element_TestConnect.setBorder("plain");

			app.element_TestConnect.trigger = function() {
				if(app.element_TestConnect.onTrigger != undefined)
					app.element_TestConnect.onTrigger();
			}
			
			if(app.element_TestConnect_onTrigger != undefined)
				app.element_TestConnect.onTrigger = app.element_TestConnect_onTrigger;
			
			if(app.element_TestConnect_mousePressed != undefined)
				app.element_TestConnect.mousePressed = app.element_TestConnect_mousePressed;
				
			if(app.element_TestConnect_mouseClicked != undefined)
				app.element_TestConnect.mouseClicked = app.element_TestConnect_mouseClicked;
			
			if(app.element_TestConnect_mouseReleased != undefined)
				app.element_TestConnect.mouseReleased = app.element_TestConnect_mouseReleased;
			
			if(app.element_TestConnect_mouseEntered != undefined)
				app.element_TestConnect.mouseEntered = app.element_TestConnect_mouseEntered;
			
			if(app.element_TestConnect_mouseMoved != undefined)
				app.element_TestConnect.mouseMoved = app.element_TestConnect_mouseMoved;
			
			if(app.element_TestConnect_mouseExited != undefined)
				app.element_TestConnect.mouseExited = app.element_TestConnect_mouseExited;
			
			app.element_TestConnect.setBounds(	app.layouts[app.currentLayout]["elements"].TestConnect.x, 
							app.layouts[app.currentLayout]["elements"].TestConnect.y, 
							app.layouts[app.currentLayout]["elements"].TestConnect.width, 
							app.layouts[app.currentLayout]["elements"].TestConnect.height);
			
		
			app.appPanel.add(app.element_TestConnect);
			
			app.appPanel.add(app.element_Button16);
			
			app.appPanel.add(app.element_Label24);
			
			app.appPanel.add(app.element_ImagePan23);
			
			app.appPanel.add(app.element_ImagePan24);
			
			app.appPanel.add(app.element_Label28);
			
			app.appPanel.add(app.element_ImagePan29);
			
	},

}
