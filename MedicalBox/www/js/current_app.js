
var app = {

	serviceUUID:"78a24a60-9faf-4561-8164-4db8fab9d413",
	notifyUUID:"78a24a60-9faf-4561-8164-4db8fab9d414",
		
		localName:"ble_test",
		
	element_Task1_task: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"GPIORead2\" ] " + err.toString());
					}
				}
				
			app.element_GPIORead2.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"GPIORead2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"GPIORead6\" ] " + err.toString());
					}
				}
				
			app.element_GPIORead6.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"GPIORead6\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"GPIORead12\" ] " + err.toString());
					}
				}
				
			app.element_GPIORead12.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"GPIORead12\" ]");
		})();

	},

	element_GPIORead2_valueReturned: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue =  app.element_GPIORead2.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.value = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"GPIORead2\" ]---X--->[ \"Label3\" ] " + err.toString());
					}
				}
				
			app.element_Label3.setValue(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"GPIORead2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Label3\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue =  app.element_GPIORead2.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.value = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"GPIORead2\" ]---X--->[ \"Buzzer12\" ] " + err.toString());
					}
				}
				
			app.element_Buzzer12.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"GPIORead2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Buzzer12\" ]");
		})();

	},

	element_GPIORead6_valueReturned: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue =  app.element_GPIORead6.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.value = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"GPIORead6\" ]---X--->[ \"Label8\" ] " + err.toString());
					}
				}
				
			app.element_Label8.setValue(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"GPIORead6\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Label8\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue =  app.element_GPIORead6.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.value = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"GPIORead6\" ]---X--->[ \"Buzzer14\" ] " + err.toString());
					}
				}
				
			app.element_Buzzer14.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"GPIORead6\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Buzzer14\" ]");
		})();

	},

	element_GPIORead12_valueReturned: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue =  app.element_GPIORead12.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.value = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"GPIORead12\" ]---X--->[ \"Buzzer13\" ] " + err.toString());
					}
				}
				
			app.element_Buzzer13.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"GPIORead12\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Buzzer13\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue =  app.element_GPIORead12.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.visible = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"GPIORead12\" ]---X--->[ \"Label14\" ] " + err.toString());
					}
				}
				
			app.element_Label14.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"GPIORead12\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Label14\" ]");
		})();

	},

	initialize: function() {

			app.layouts = {"Default": {"devicename": ".*", "elements": {"Label8": {"y": 123, "x": 167, "height": 46, "width": 146}, "Label9": {"y": 123, "x": 4, "height": 46, "width": 146}, "Label3": {"y": 37, "x": 154, "height": 46, "width": 150}, "Label4": {"y": 37, "x": 8, "height": 46, "width": 137}, "Label14": {"y": 203, "x": 173, "height": 46, "width": 146}, "Label15": {"y": 203, "x": 4, "height": 46, "width": 146}}, "orientation": "portrait", "platform": "", "height": 1024, "width": 768, "version": ".*", "name": "Default (768x1024)"}};
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
			
			
			app.element_Label8 = new zebra.ui.MLabel("New Label");
			
			app.element_Label8.setVisible(true);
			app.element_Label8.setEnabled(true);
			app.element_Label8.setColor("Black");
			app.element_Label8.setFont("14px Arial");

			app.element_Label8.trigger = function() {
				if(app.element_Label8.onTrigger != undefined)
					app.element_Label8.onTrigger();
			}
			
			app.element_Label8.setValue = function(s){
				s = s.toString();
				if (s == null) s = "";
				this.view.setValue(s);
				this.repaint();
				return this;
			};
        
			app.element_Label8.appendValue = function(value) {
				this.setValue(this.getValue() + value.toString());
			}
			
			if(app.element_Label8_onTrigger != undefined)
				app.element_Label8.onTrigger = app.element_Label8_onTrigger;
			
			if(app.element_Label8_mousePressed != undefined)
				app.element_Label8.mousePressed = app.element_Label8_mousePressed;
				
			if(app.element_Label8_mouseClicked != undefined)
				app.element_Label8.mouseClicked = app.element_Label8_mouseClicked;
			
			if(app.element_Label8_mouseReleased != undefined)
				app.element_Label8.mouseReleased = app.element_Label8_mouseReleased;
			
			if(app.element_Label8_mouseEntered != undefined)
				app.element_Label8.mouseEntered = app.element_Label8_mouseEntered;
			
			if(app.element_Label8_mouseMoved != undefined)
				app.element_Label8.mouseMoved = app.element_Label8_mouseMoved;
			
			if(app.element_Label8_mouseExited != undefined)
				app.element_Label8.mouseExited = app.element_Label8_mouseExited;
			
			app.element_Label8.setBounds(	app.layouts[app.currentLayout]["elements"].Label8.x, 
							app.layouts[app.currentLayout]["elements"].Label8.y, 
							app.layouts[app.currentLayout]["elements"].Label8.width, 
							app.layouts[app.currentLayout]["elements"].Label8.height);
							
		
			app.element_Task1 = new zebra.util.task(function(c){
				if(app.element_Task1_task != undefined)
					this.element_Task1_task();
			});
			
			app.element_Task1.element_Task1_task = app.element_Task1_task;

			app.element_Task1.trigger = function() {
				if(app.element_Task1.onTrigger != undefined)
					app.element_Task1.onTrigger();
			}
			
			if(app.element_Task1_onTrigger != undefined)
				app.element_Task1.onTrigger = app.element_Task1_onTrigger;
			
			app.element_Task1.run(2000, 1000);
			
		
			app.element_Label9 = new zebra.ui.MLabel("Tuesday (P26)");
			
			app.element_Label9.setVisible(true);
			app.element_Label9.setEnabled(true);
			app.element_Label9.setColor("Black");
			app.element_Label9.setFont("14px Arial");

			app.element_Label9.trigger = function() {
				if(app.element_Label9.onTrigger != undefined)
					app.element_Label9.onTrigger();
			}
			
			app.element_Label9.setValue = function(s){
				s = s.toString();
				if (s == null) s = "";
				this.view.setValue(s);
				this.repaint();
				return this;
			};
        
			app.element_Label9.appendValue = function(value) {
				this.setValue(this.getValue() + value.toString());
			}
			
			if(app.element_Label9_onTrigger != undefined)
				app.element_Label9.onTrigger = app.element_Label9_onTrigger;
			
			if(app.element_Label9_mousePressed != undefined)
				app.element_Label9.mousePressed = app.element_Label9_mousePressed;
				
			if(app.element_Label9_mouseClicked != undefined)
				app.element_Label9.mouseClicked = app.element_Label9_mouseClicked;
			
			if(app.element_Label9_mouseReleased != undefined)
				app.element_Label9.mouseReleased = app.element_Label9_mouseReleased;
			
			if(app.element_Label9_mouseEntered != undefined)
				app.element_Label9.mouseEntered = app.element_Label9_mouseEntered;
			
			if(app.element_Label9_mouseMoved != undefined)
				app.element_Label9.mouseMoved = app.element_Label9_mouseMoved;
			
			if(app.element_Label9_mouseExited != undefined)
				app.element_Label9.mouseExited = app.element_Label9_mouseExited;
			
			app.element_Label9.setBounds(	app.layouts[app.currentLayout]["elements"].Label9.x, 
							app.layouts[app.currentLayout]["elements"].Label9.y, 
							app.layouts[app.currentLayout]["elements"].Label9.width, 
							app.layouts[app.currentLayout]["elements"].Label9.height);
							
		
			app.element_Label3 = new zebra.ui.MLabel("New Label");
			
			app.element_Label3.setVisible(true);
			app.element_Label3.setEnabled(true);
			app.element_Label3.setColor("Black");
			app.element_Label3.setFont("14px Arial");

			app.element_Label3.trigger = function() {
				if(app.element_Label3.onTrigger != undefined)
					app.element_Label3.onTrigger();
			}
			
			app.element_Label3.setValue = function(s){
				s = s.toString();
				if (s == null) s = "";
				this.view.setValue(s);
				this.repaint();
				return this;
			};
        
			app.element_Label3.appendValue = function(value) {
				this.setValue(this.getValue() + value.toString());
			}
			
			if(app.element_Label3_onTrigger != undefined)
				app.element_Label3.onTrigger = app.element_Label3_onTrigger;
			
			if(app.element_Label3_mousePressed != undefined)
				app.element_Label3.mousePressed = app.element_Label3_mousePressed;
				
			if(app.element_Label3_mouseClicked != undefined)
				app.element_Label3.mouseClicked = app.element_Label3_mouseClicked;
			
			if(app.element_Label3_mouseReleased != undefined)
				app.element_Label3.mouseReleased = app.element_Label3_mouseReleased;
			
			if(app.element_Label3_mouseEntered != undefined)
				app.element_Label3.mouseEntered = app.element_Label3_mouseEntered;
			
			if(app.element_Label3_mouseMoved != undefined)
				app.element_Label3.mouseMoved = app.element_Label3_mouseMoved;
			
			if(app.element_Label3_mouseExited != undefined)
				app.element_Label3.mouseExited = app.element_Label3_mouseExited;
			
			app.element_Label3.setBounds(	app.layouts[app.currentLayout]["elements"].Label3.x, 
							app.layouts[app.currentLayout]["elements"].Label3.y, 
							app.layouts[app.currentLayout]["elements"].Label3.width, 
							app.layouts[app.currentLayout]["elements"].Label3.height);
							
		
			app.element_Label4 = new zebra.ui.MLabel("Monday (P27)");
			
			app.element_Label4.setVisible(true);
			app.element_Label4.setEnabled(true);
			app.element_Label4.setColor("Black");
			app.element_Label4.setFont("14px Arial");

			app.element_Label4.trigger = function() {
				if(app.element_Label4.onTrigger != undefined)
					app.element_Label4.onTrigger();
			}
			
			app.element_Label4.setValue = function(s){
				s = s.toString();
				if (s == null) s = "";
				this.view.setValue(s);
				this.repaint();
				return this;
			};
        
			app.element_Label4.appendValue = function(value) {
				this.setValue(this.getValue() + value.toString());
			}
			
			if(app.element_Label4_onTrigger != undefined)
				app.element_Label4.onTrigger = app.element_Label4_onTrigger;
			
			if(app.element_Label4_mousePressed != undefined)
				app.element_Label4.mousePressed = app.element_Label4_mousePressed;
				
			if(app.element_Label4_mouseClicked != undefined)
				app.element_Label4.mouseClicked = app.element_Label4_mouseClicked;
			
			if(app.element_Label4_mouseReleased != undefined)
				app.element_Label4.mouseReleased = app.element_Label4_mouseReleased;
			
			if(app.element_Label4_mouseEntered != undefined)
				app.element_Label4.mouseEntered = app.element_Label4_mouseEntered;
			
			if(app.element_Label4_mouseMoved != undefined)
				app.element_Label4.mouseMoved = app.element_Label4_mouseMoved;
			
			if(app.element_Label4_mouseExited != undefined)
				app.element_Label4.mouseExited = app.element_Label4_mouseExited;
			
			app.element_Label4.setBounds(	app.layouts[app.currentLayout]["elements"].Label4.x, 
							app.layouts[app.currentLayout]["elements"].Label4.y, 
							app.layouts[app.currentLayout]["elements"].Label4.width, 
							app.layouts[app.currentLayout]["elements"].Label4.height);
							
		
			app.element_GPIORead2 = new Function(0, "78a24a60-9faf-4561-8164-4db8fab9d419", "json", "json");
				
			app.element_GPIORead2.trigger = function() {
				if(app.element_GPIORead2.onTrigger != undefined)
					app.element_GPIORead2.onTrigger();
			}
			
			if(app.element_GPIORead2_onTrigger != undefined)
				app.element_GPIORead2.onTrigger = app.element_GPIORead2_onTrigger;
			
			if(app.element_GPIORead2_valueReturned != undefined)
				app.element_GPIORead2.valueReturned = app.element_GPIORead2_valueReturned;
				
			if(app.element_GPIORead2_notified != undefined)
				app.element_GPIORead2.notified = app.element_GPIORead2_notified;
		
			app.element_Buzzer13 = new Function(0, "78a24a60-9faf-4561-8164-4db8fab9d416", "json", "json");
				
			app.element_Buzzer13.trigger = function() {
				if(app.element_Buzzer13.onTrigger != undefined)
					app.element_Buzzer13.onTrigger();
			}
			
			if(app.element_Buzzer13_onTrigger != undefined)
				app.element_Buzzer13.onTrigger = app.element_Buzzer13_onTrigger;
			
			if(app.element_Buzzer13_valueReturned != undefined)
				app.element_Buzzer13.valueReturned = app.element_Buzzer13_valueReturned;
				
			if(app.element_Buzzer13_notified != undefined)
				app.element_Buzzer13.notified = app.element_Buzzer13_notified;
		
			app.element_Buzzer12 = new Function(0, "78a24a60-9faf-4561-8164-4db8fab9d415", "json", "json");
				
			app.element_Buzzer12.trigger = function() {
				if(app.element_Buzzer12.onTrigger != undefined)
					app.element_Buzzer12.onTrigger();
			}
			
			if(app.element_Buzzer12_onTrigger != undefined)
				app.element_Buzzer12.onTrigger = app.element_Buzzer12_onTrigger;
			
			if(app.element_Buzzer12_valueReturned != undefined)
				app.element_Buzzer12.valueReturned = app.element_Buzzer12_valueReturned;
				
			if(app.element_Buzzer12_notified != undefined)
				app.element_Buzzer12.notified = app.element_Buzzer12_notified;
		
			app.element_GPIORead6 = new Function(0, "78a24a60-9faf-4561-8164-4db8fab9d41a", "json", "json");
				
			app.element_GPIORead6.trigger = function() {
				if(app.element_GPIORead6.onTrigger != undefined)
					app.element_GPIORead6.onTrigger();
			}
			
			if(app.element_GPIORead6_onTrigger != undefined)
				app.element_GPIORead6.onTrigger = app.element_GPIORead6_onTrigger;
			
			if(app.element_GPIORead6_valueReturned != undefined)
				app.element_GPIORead6.valueReturned = app.element_GPIORead6_valueReturned;
				
			if(app.element_GPIORead6_notified != undefined)
				app.element_GPIORead6.notified = app.element_GPIORead6_notified;
		
			app.element_Buzzer14 = new Function(0, "78a24a60-9faf-4561-8164-4db8fab9d417", "json", "json");
				
			app.element_Buzzer14.trigger = function() {
				if(app.element_Buzzer14.onTrigger != undefined)
					app.element_Buzzer14.onTrigger();
			}
			
			if(app.element_Buzzer14_onTrigger != undefined)
				app.element_Buzzer14.onTrigger = app.element_Buzzer14_onTrigger;
			
			if(app.element_Buzzer14_valueReturned != undefined)
				app.element_Buzzer14.valueReturned = app.element_Buzzer14_valueReturned;
				
			if(app.element_Buzzer14_notified != undefined)
				app.element_Buzzer14.notified = app.element_Buzzer14_notified;
		
			app.element_GPIORead12 = new Function(0, "78a24a60-9faf-4561-8164-4db8fab9d418", "json", "json");
				
			app.element_GPIORead12.trigger = function() {
				if(app.element_GPIORead12.onTrigger != undefined)
					app.element_GPIORead12.onTrigger();
			}
			
			if(app.element_GPIORead12_onTrigger != undefined)
				app.element_GPIORead12.onTrigger = app.element_GPIORead12_onTrigger;
			
			if(app.element_GPIORead12_valueReturned != undefined)
				app.element_GPIORead12.valueReturned = app.element_GPIORead12_valueReturned;
				
			if(app.element_GPIORead12_notified != undefined)
				app.element_GPIORead12.notified = app.element_GPIORead12_notified;
		
			app.element_Label14 = new zebra.ui.MLabel("New Label");
			
			app.element_Label14.setVisible(true);
			app.element_Label14.setEnabled(true);
			app.element_Label14.setColor("Black");
			app.element_Label14.setFont("14px Arial");

			app.element_Label14.trigger = function() {
				if(app.element_Label14.onTrigger != undefined)
					app.element_Label14.onTrigger();
			}
			
			app.element_Label14.setValue = function(s){
				s = s.toString();
				if (s == null) s = "";
				this.view.setValue(s);
				this.repaint();
				return this;
			};
        
			app.element_Label14.appendValue = function(value) {
				this.setValue(this.getValue() + value.toString());
			}
			
			if(app.element_Label14_onTrigger != undefined)
				app.element_Label14.onTrigger = app.element_Label14_onTrigger;
			
			if(app.element_Label14_mousePressed != undefined)
				app.element_Label14.mousePressed = app.element_Label14_mousePressed;
				
			if(app.element_Label14_mouseClicked != undefined)
				app.element_Label14.mouseClicked = app.element_Label14_mouseClicked;
			
			if(app.element_Label14_mouseReleased != undefined)
				app.element_Label14.mouseReleased = app.element_Label14_mouseReleased;
			
			if(app.element_Label14_mouseEntered != undefined)
				app.element_Label14.mouseEntered = app.element_Label14_mouseEntered;
			
			if(app.element_Label14_mouseMoved != undefined)
				app.element_Label14.mouseMoved = app.element_Label14_mouseMoved;
			
			if(app.element_Label14_mouseExited != undefined)
				app.element_Label14.mouseExited = app.element_Label14_mouseExited;
			
			app.element_Label14.setBounds(	app.layouts[app.currentLayout]["elements"].Label14.x, 
							app.layouts[app.currentLayout]["elements"].Label14.y, 
							app.layouts[app.currentLayout]["elements"].Label14.width, 
							app.layouts[app.currentLayout]["elements"].Label14.height);
							
		
			app.element_Label15 = new zebra.ui.MLabel("Wednesday (P13)");
			
			app.element_Label15.setVisible(true);
			app.element_Label15.setEnabled(true);
			app.element_Label15.setColor("Black");
			app.element_Label15.setFont("14px Arial");

			app.element_Label15.trigger = function() {
				if(app.element_Label15.onTrigger != undefined)
					app.element_Label15.onTrigger();
			}
			
			app.element_Label15.setValue = function(s){
				s = s.toString();
				if (s == null) s = "";
				this.view.setValue(s);
				this.repaint();
				return this;
			};
        
			app.element_Label15.appendValue = function(value) {
				this.setValue(this.getValue() + value.toString());
			}
			
			if(app.element_Label15_onTrigger != undefined)
				app.element_Label15.onTrigger = app.element_Label15_onTrigger;
			
			if(app.element_Label15_mousePressed != undefined)
				app.element_Label15.mousePressed = app.element_Label15_mousePressed;
				
			if(app.element_Label15_mouseClicked != undefined)
				app.element_Label15.mouseClicked = app.element_Label15_mouseClicked;
			
			if(app.element_Label15_mouseReleased != undefined)
				app.element_Label15.mouseReleased = app.element_Label15_mouseReleased;
			
			if(app.element_Label15_mouseEntered != undefined)
				app.element_Label15.mouseEntered = app.element_Label15_mouseEntered;
			
			if(app.element_Label15_mouseMoved != undefined)
				app.element_Label15.mouseMoved = app.element_Label15_mouseMoved;
			
			if(app.element_Label15_mouseExited != undefined)
				app.element_Label15.mouseExited = app.element_Label15_mouseExited;
			
			app.element_Label15.setBounds(	app.layouts[app.currentLayout]["elements"].Label15.x, 
							app.layouts[app.currentLayout]["elements"].Label15.y, 
							app.layouts[app.currentLayout]["elements"].Label15.width, 
							app.layouts[app.currentLayout]["elements"].Label15.height);
							
		
			app.appPanel.add(app.element_Label3);
			
			app.appPanel.add(app.element_Label4);
			
			app.appPanel.add(app.element_Label8);
			
			app.appPanel.add(app.element_Label9);
			
			app.appPanel.add(app.element_Label14);
			
			app.appPanel.add(app.element_Label15);
			
	},

}
