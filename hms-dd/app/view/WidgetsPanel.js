Ext.define('HMSDD.view.WidgetsPanel', {
    extend: 'Ext.container.Container',
    xtype: 'widgetspanel',
        
    requires:[
        'Ext.panel.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Number',
        'Ext.form.field.Date',
        'Ext.form.field.Checkbox',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldSet',
        'Ext.layout.container.Absolute'
        // 'Ext.ux.dd.CellFieldDropZone',  //This should be required in the Designer view, not here     
        // 'Ext.ux.dd.PanelFieldDragZone',
    ],
   
   layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    defaults: {
        anchor: '100%',
        padding: '1 0 1 0'
    },
    
     fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side',
        width: 50,
        flex: 1
    },
    
   /* plugins: new Ext.ux.dd.PanelFieldDragZone({
		        ddGroup: group
		    }),*/

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Text Field',        
        value: 'Text'
    },{
        xtype: 'numberfield',
        fieldLabel: 'Number',
        value: '1.2',
        hideTrigger: true,
    },{
        xtype: 'datefield',
        fieldLabel: 'Date'
    },{
        xtype:'checkbox',
        fieldLabel: 'Check Box',
        name: 'checkbox'
    },{
    	xtype: 'combobox',
        fieldLabel: 'Combo',
        name: 'uxcombo'
    },{
        xtype: 'container',
        style: "width:50px;background-color:rgba(152, 200, 255, 0.1);border:'red dotted 1px';",
        html: 'cont',
        minwidth: 100,
        width: 200,
        height:50
    },{
    	xtype: 'panel',
    	height: 50,
    	width: 800,
    	title: 'Block',
    	collapsible: true,
    	animCollapse: false,
    },
    {
        xtype: 'button',
        style: "width:50px;",       
        
        height: 30,
        text: 'Button'
    },
    
    
    ]
});