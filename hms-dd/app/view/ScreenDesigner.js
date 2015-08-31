Ext.define('HMSDD.view.ScreenDesigner', {
	extend : 'Ext.container.Container',
	xtype : 'screendesigner',

	requires : ['Ext.resizer.Resizer'],
	layout: {
		type: 'fit'
	},
	style : {
				outline : 'red dotted 1px',
				outlineOffset : '5px'
			},
	
	items : [{
		xtype : 'container',
		itemId: 'designerContainer',
		width: 800,
		height: 600,
		
		defaults : {
			border : 1,
			style : {
				outline : 'red dotted 1px',
				outlineOffset : '5px'
			},
			margin : 10,
			padding : 5		
		},
		
		layout: {
			type : 'table',
			columns : 4,
			//shrinkWrap: false,
			tdAttrs : {
				style : {
					colspan: 2
				}
			}
		}
	}]
}); 