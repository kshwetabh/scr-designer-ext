Ext.define('HMSDD.controller.ScreenDesigner', {
    extend: 'Ext.app.Controller',

    views: ['ScreenDesigner'],

    init: function() {
        this.control({
        	'*': {
	        	afterrender: {
	        		fn: function(cmp) {
	        			switch(cmp.xtype) {
	        				case 'textfield': 
	        							{
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