Ext.define('HMSDD.controller.Main', {
	extend : 'Ext.app.Controller',

	requires : ['Ext.dd.DragZone'],

	init : function() {
		this.control({
			'widgetspanel' : {
				afterrender : this.initDrag
			},
			'screendesigner' : {
				//afterrender : this.initDrop
			},
			'screendesigner>container': {
				afterrender: this.initDropInContainer
			},
			'screendesigner>container>container': {
				//added: this.onContainerDropped
			},
			'screendesigner>container>panel': {
				//added: this.onPanelDropped
			},
			'toolbar #generatecode': {
				click: this.generateCode
			},
			'toolbar #reset': {
				click: this.resetScreen
			}
		});
	},

	initDrag : function(cmp) {
		var me = this,
			overrides = {},
		    childComponents = Ext.ComponentQuery.query('widgetspanel>*');
		
		Ext.each(childComponents, function(component) {
			me.attachDragZone(component, 'ddGroup', true);
		}, me);
	},
	
	attachDragZone: function (component, ddGrp, isClone) {
		return component.DragZone = Ext.create('Ext.dd.DragZone', component.getEl(), {
				// Override the getDragData function
				// Notice that we used the component element dom rather that the
				// dom returned by the event. This is to get uniform behavior for
				// containers
				getDragData : function(e) {
					if (isClone) {
						var compEl = component.getEl(),
						    cloneEl;
	
						// Clone the dom element
						cloneEl = compEl.dom.cloneNode(true);
						// generate an new Id
						cloneEl.id = Ext.id();
					}
					// We must return ddel, repairXY is a nice feature.
					// All other data is for the drop zone to consume
					return {
						ddel : isClone ? cloneEl: component.getEl().dom,
						repairXY : Ext.fly(e.getTarget()).getXY(),
						componentClone : component.cloneConfig(),
						origComponent: component
					};
				},

				getRepairXY : function() {
					return this.dragData.repairXY;
				},
				ddGroup : (component.xtype == 'container' ||  component.xtype == 'panel') ? 'ddContainerGroup' : 'ddGroup'
				//ddGroup : ddGrp
			});
	},

	initDropInContainer: function (component) {
		var me = this;
		console.log("initDropInContainer->" + component);
		
		//if container/panel		
		component.dropZone = Ext.create("Ext.dd.DropZone", component.getEl(), {
			// Tell the zone what our target component is
			getTargetFromEvent : function(event) {
				return component;
			},
			// When the node is dropped, add a new instance to the
			// the component via the supplied component clone
			onNodeDrop : function(target, dd, e, data) {
				component.add(data.componentClone);
				
				//Remove the original component if rearranged inside ScreenDesigner panel
				component.remove(data.origComponent);
				
				//make the new component draggable inside the Screendesigner panel also
				me.attachDragZone(data.componentClone, 'ddGroup', false);
			},
			//ddGroup : (component.xtype == 'container' ||  component.xtype == 'panel') ? 'ddContainerGroup' : 'ddGroup'
			ddGroup : 'ddContainerGroup'
		});
		
	},

	onPanelDropped: function (component) {
		console.log('Panel Dropped');
	},
	onContainerDropped: function(component) {
		console.log('Container Dropped');
		
		component.dropZone = Ext.create("Ext.dd.DropZone", component, {
			// Tell the zone what our target component is
			getTargetFromEvent : function(event) {
				return component;
			},
			// When the node is dropped, add a new instance to the
			// the component via the supplied component clone
			onNodeDrop : function(target, dd, e, data) {
				//component.add(data.componentClone);
			},
			//ddGroup : (component.xtype == 'container' ||  component.xtype == 'panel') ? 'ddContainerGroup' : 'ddGroup'
			ddGroup : 'ddGroup'
		});
		if (component.dropZone) {
			//component.dropZone.addToGroup('ddGroup');
		}
	},

	/*initDrop : function (component) {
		component.dropZone = Ext.create("Ext.dd.DropZone", component.getEl(), {
			// Tell the zone what our target component is
			getTargetFromEvent : function(event) {
				return component;
			},
			// When the node is dropped, add a new instance to the
			// the component via the supplied component clone
			onNodeDrop : function(target, dd, e, data) {
				component.add(data.componentClone);
			},
			ddGroup : 'ddGroup'
		});
	},*/

	generateCode : function (tool) {
		//Get all components inside the screendesigner view
		var sDComponents = Ext.ComponentQuery.query('screendesigner>container>*'), //TODO: look for a better way to locate the SD View
			logPanel = Ext.ComponentQuery.query('#log')[0],
			msg = '';
		
		Ext.each(sDComponents, function(component) {		  
		  msg = msg + component.xtype +" : "+ component.name+ '<br/>';
		});
		
		logPanel.update('Tabs List</br>List of all tabs:<br/><br/>' + msg);
	},
	
	resetScreen: function (tool) {
		Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete all components in the ScreenDesigner?', function (choice, value) {
			if (choice === 'yes') {
				console.log('yes');
				//delete all the components inside the screendesigner
				var sDComponents = Ext.ComponentQuery.query('screendesigner>container')[0];
				if(sDComponents) {
					sDComponents.items.each(function(item, index, len) {
			            this.remove(item, true); //and remove from DOM !
			        },sDComponents); 	
				}
			} else {
				console.log('no');
			}
		});
	}
});
