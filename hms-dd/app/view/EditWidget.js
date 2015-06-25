Ext.define('HMSDD.view.EditWidget', {
    extend: 'Ext.window.Window',
    alias: 'widget.editwidget',

    title: 'Widget Properties',
    layout: 'fit',
    autoShow: true,
    
	initComponent: function() {
    	this.items = [{
            xtype: 'form',
            items: [
                {
                	xtype: this.initialConfig.compType
                }
            ],
            defaults: {
				border: 0,
		    	margin: 2,
		    	padding: 5
		    }
    	}];

        this.buttons = [
            {
                text: 'OK',
                action: 'ok'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];
		
        this.callParent(arguments);
    }
});