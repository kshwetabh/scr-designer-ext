Ext.define('HMSDD.view.NumberField', {
	extend : 'Ext.container.Container',
	xtype: 'hmsnumberfield',
	title: 'Number Field Properties',
	
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
			fieldLabel : 'Field Label',
			allowBlank: false
		}, {
			name : 'vtype',
			xtype:'combo',
            queryMode: 'local',
            typeAhead: true,
            grow:true,
            store:["number","integer","currency"],
			fieldLabel : 'vType',
			allowBlank: false
			
		}, {
			name: 'isModelField',
			xtype: 'checkbox',
			value: true,
			fieldLabel: 'Include in ModelFields'
		}
		]
});

