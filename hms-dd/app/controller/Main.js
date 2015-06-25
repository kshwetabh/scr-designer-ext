Ext.define('HMSDD.controller.Main', {
    extend: 'Ext.app.Controller',

	requires : ['Ext.dd.DragZone'],
	
	init : function() {
		this.control({
			'widgetspanel' : {
				afterrender : this.initDrag
			},
			'screendesigner': {
				afterrender: this.initDrop
			}

		});
	},
	
    initDrag : function (cmp) {
		var overrides = {},
		    childComponents = Ext.ComponentQuery.query('widgetspanel>*');

		Ext.each(childComponents, function(component) {
			component.DragZone = Ext.create('Ext.dd.DragZone', component.getEl(), {
				// Override the getDragData function
				// Notice that we used the component element dom rather that the
				// dom returned by the event. This is to get uniform behavior for
				// containers
				getDragData : function(e) {
					var compEl = component.getEl(),
					    cloneEl;

					// Clone the dom element
					cloneEl = compEl.dom.cloneNode(true);
					// generate an new Id
					cloneEl.id = Ext.id();

					// We must return ddel, repairXY is a nice feature.
					// All other data is for the drop zone to consume
					return {
						ddel : cloneEl,
						repairXY : Ext.fly(e.getTarget()).getXY(),
						componentClone : component.cloneConfig()
					};
				},

				getRepairXY : function() {
					return this.dragData.repairXY;
				},
				ddGroup : 'ddGroup'
			});
		});
	},
	
	initDrop: function (component) {
		component.dropZone = Ext.create("Ext.dd.DropZone",component.getEl(),{
	    // Tell the zone what our target component is
	    getTargetFromEvent: function(event) { 
	        return component;
	    },
	    // When the node is dropped, add a new instance to the
	    // the component via the supplied component clone
	    onNodeDrop : function(target,dd,e,data){
	        component.add(data.componentClone);
	    },
	    ddGroup: 'ddGroup'
	  });
	}
    
    
    
});
