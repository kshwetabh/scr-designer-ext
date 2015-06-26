Ext.define('HMSDD.controller.ScreenDesigner', {
    extend: 'Ext.app.Controller',

    views: ['ScreenDesigner'],

    init: function() {
    	this.contextMenu = new Ext.menu.Menu({
    										  itemId: 'screendesignerctxmenu',
											  items: [{
											    text: 'Edit',
											    iconCls: 'edit',
											    handler: function() {
											    	debugger
											    }
											  }]
											});
    	
        this.control({
        	'*': {
	        	afterrender: {
	        		fn: function(cmp) {
	        			switch(cmp.xtype) {
	        				case 'textfield': 
	        							{
	        								cmp.getEl().on('contextmenu', function(e) {
											     e.preventDefault();
											     var ctxmenu = Ext.ComponentQuery.query('#screendesignerctxmenu')[0]; //TODO: Very bad practice
											     ctxmenu.show(e.getXY());
											     e.stopEvent();
											});
	        								
				        					cmp.inputEl.on('dblclick', function() {									            
									            var view = Ext.widget('editwidget', {
									            	compType: 'hmstextfield',
									            	cmp: cmp
									            });
									        });	
				        				};
				        				break;
	        				case 'numberfield': 
										{
				        					cmp.inputEl.on('dblclick', function() {									            
									            var view = Ext.widget('editwidget', {
									            	compType: 'hmsnumberfield',
									            	cmp: cmp
									            });
									        });	
				        				};
				        				break;
				        	default:
        							console.log('Default block');
	        			};
	        		},
	        		//element: 'el'
	        	} 
        	}
        });
    }
});