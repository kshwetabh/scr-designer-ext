Ext.define('HMSDD.view.TextField', {
	extend : 'Ext.container.Container',
	xtype: 'hmstextfield',
	//textfield = name, fieldLabel, maxLength, size, width, readOnly, readOnlyCls
	
	defaults: {
		msgTarget: 'side' //display validation msg by the side of fields
	},
	
	items : [{
			xtype : 'textfield',
			name : 'name',
			fieldLabel : 'Name',
			allowBlank: false
		}, {
			xtype : 'textfield',
			name : 'fieldLabel',
			fieldLabel : 'FieldLabel',
			allowBlank: false
		}, {
			xtype : 'numberfield',
			name : 'maxLength',
			fieldLabel : 'maxLength',
			value: '50'    
		}, {
			xtype: 'numberfield',
			name : 'size',
			fieldLabel : 'size',
        	value: '3'        
		}, {
			xtype : 'numberfield',
			name : 'width',
			fieldLabel : 'width',
			value: '3'
		}, {
			xtype : 'checkbox',
			name : 'readOnly',
			fieldLabel : 'ReadOnly'
		}, {
			xtype : 'textfield',
			name : 'readOnlyCls',
			fieldLabel : 'readOnlyCls'
		}
	]
});

