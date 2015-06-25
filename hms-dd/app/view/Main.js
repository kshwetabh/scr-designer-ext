Ext.define('HMSDD.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.window.MessageBox'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border',
        padding: 5
    },

	layout:'border',
	defaults: {
	    collapsible: true,
	    split: true,
	    bodyStyle: 'padding:15px'
	},
	items: [{
	    title: 'Generated Code',
	    region: 'south',
	    height: 150,
	    minSize: 75,
	    maxSize: 250,
	    cmargins: '5 0 0 0'
	},{
	    title: 'Widgets',
	    region:'west',
	    margins: '5 0 0 0',
	    cmargins: '5 5 0 0',
	    width: 250,
	    minWidth: 250,
	    items: [{
            xtype: 'widgetspanel'
        }],
	},{
	    title: 'Screen Designer',
	    collapsible: false,
	    region:'center',
	    margins: '5 0 0 0',
	    items: [{
	    	xtype: 'screendesigner'
	    }],
	    tools: [{
	    	type: 'refresh',
	    	handler: function() {
	    		Ext.MessageBox.alert('Work In Progress...', 'Not implemented yet.');
	    	}
	    }],
		tbar: [{
			text: 'Screen Config'
		},'-',{
			text: 'Generate Code',
	    	iconCls: 'icon-send'
		},'-',{
			text: 'Reset',
		    iconCls: 'icon-save'
		}
		    /*,{
		         text: 'Check Spelling',
		         iconCls: 'icon-spell'
		    },'-',{
		         text: 'Print',
		         iconCls: 'icon-print'
		    }*/,'->',{
		         text: 'Help',
		         iconCls: 'icon-help'
		}]
	}]
	     
    
    
    
    
    
    
    
    
    
});