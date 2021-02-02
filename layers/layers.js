var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_parishes_totals_1 = new ol.format.GeoJSON();
var features_parishes_totals_1 = format_parishes_totals_1.readFeatures(json_parishes_totals_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parishes_totals_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parishes_totals_1.addFeatures(features_parishes_totals_1);
var lyr_parishes_totals_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parishes_totals_1, 
                style: style_parishes_totals_1,
                interactive: true,
    title: 'parishes_totals<br />\
    <img src="styles/legend/parishes_totals_1_0.png" /> 0 milhões - 20 milhões<br />\
    <img src="styles/legend/parishes_totals_1_1.png" /> 20 milhões - 40 milhões<br />\
    <img src="styles/legend/parishes_totals_1_2.png" /> 40 milhões - 60 milhões<br />\
    <img src="styles/legend/parishes_totals_1_3.png" /> 60 milhões - 68 milhões<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_parishes_totals_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_parishes_totals_1];
lyr_parishes_totals_1.set('fieldAliases', {'parishes_id': 'parishes_id', 'name': 'name', 'num_operations': 'num_operations', 'total_fund_millions': 'total_fund_millions', 'num_beneficiaries': 'num_beneficiaries', });
lyr_parishes_totals_1.set('fieldImages', {'parishes_id': 'Range', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'total_fund_millions': 'TextEdit', 'num_beneficiaries': 'TextEdit', });
lyr_parishes_totals_1.set('fieldLabels', {'parishes_id': 'inline label', 'name': 'header label', 'num_operations': 'inline label', 'total_fund_millions': 'inline label', 'num_beneficiaries': 'inline label', });
lyr_parishes_totals_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});