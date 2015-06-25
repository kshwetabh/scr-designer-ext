Ext.define('HMSDD.Application', {
    name: 'HMSDD',
    extend: 'Ext.app.Application',

    views: [
    	'HMSDD.view.Main',
        'HMSDD.view.WidgetsPanel',
        'HMSDD.view.ScreenDesigner',
        'HMSDD.view.EditWidget',
        'HMSDD.view.TextField',
        'HMSDD.view.NumberField'
    ],

    controllers: [
        'HMSDD.controller.Main',
        'HMSDD.controller.EditWidget',
        'HMSDD.controller.ScreenDesigner',
        'HMSDD.controller.WidgetsPanel'
    ],

    stores: [
        
    ]
});
