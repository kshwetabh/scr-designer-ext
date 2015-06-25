Ext.define('HMSDD.view.ScreenDesigner', {
	extend : 'Ext.container.Container',
	xtype : 'screendesigner',

	requires : ['Ext.resizer.Resizer'],

	layout : {
		type : 'table',
		columns : 4,
		tdAttrs : {
			style : {
				colspan: 2
			}
		}
	},

	defaults : {
		border : 1,
		style : {
			outline : 'red dotted 1px',
			outlineOffset : '5px'
		},
		margin : 10,
		padding : 5
	},

	items : [{
		xtype : 'container'
	}]

	/*items: [
	 {
	 name: 'textfield1',
	 xtype: 'textfield',
	 fieldLabel: 'Text Field',
	 value: 'Text'
	 },{
	 name: 'numberfield1',
	 xtype: 'numberfield',
	 fieldLabel: 'Number',
	 value: '1.2',

	 },{
	 xtype: 'datefield',
	 fieldLabel: 'Date'
	 },
	 {
	 xtype:'checkbox',
	 fieldLabel: 'Check Box',
	 name: 'checkbox'
	 },
	 {
	 xtype: 'combobox',
	 fieldLabel: 'Combo',
	 name: 'uxcombo'
	 },
	 {
	 xtype: 'fieldset',
	 height: 100,
	 minwidth: 200,
	 title: 'Container'
	 }]*/
}); 