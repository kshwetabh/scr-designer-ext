Ext.define('HMSDD.controller.EditWidget', {
    extend: 'Ext.app.Controller',

    views: [
        'EditWidget'
    ],

    init: function () {
        this.control({
            'editwidget button[action=ok]': {
                click: this.updateWidget
            }
        });
    },

    updateWidget: function (button) {
    	var win = button.up('window'),
    		form = win.down('form'),
    		values = form.getValues();
    		
    		
    	if (!form.isValid()) {
    		return;
    	}
    	
    	//this was set in screendesigner controller while invoking the EditWidget widget
    	var textField1 = win.cmp;
    	
    	if (textField1) {
	    	textField1.setFieldLabel(values.fieldLabel);
    	}
    	win.close();
    }
});