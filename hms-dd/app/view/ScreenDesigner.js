Ext.define('HMSDD.view.ScreenDesigner', {
	extend : 'Ext.container.Container',
	xtype : 'screendesigner',

	requires : ['Ext.resizer.Resizer'],

	layout : {
		type : 'table',
		columns : 4,
		//shrinkWrap: false,
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
		xtype : 'container',
		width: '100%',
		height: '100%'
	}]
}); 