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
var format_FreguesiasOperacoes_1 = new ol.format.GeoJSON();
var features_FreguesiasOperacoes_1 = format_FreguesiasOperacoes_1.readFeatures(json_FreguesiasOperacoes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FreguesiasOperacoes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FreguesiasOperacoes_1.addFeatures(features_FreguesiasOperacoes_1);
var lyr_FreguesiasOperacoes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FreguesiasOperacoes_1, 
                style: style_FreguesiasOperacoes_1,
                interactive: true,
    title: 'Freguesias - Operacoes<br />\
    <img src="styles/legend/FreguesiasOperacoes_1_0.png" /> 1 - 200 <br />\
    <img src="styles/legend/FreguesiasOperacoes_1_1.png" /> 200 - 400 <br />\
    <img src="styles/legend/FreguesiasOperacoes_1_2.png" /> 400 - 600 <br />\
    <img src="styles/legend/FreguesiasOperacoes_1_3.png" /> 600 - 800 <br />\
    <img src="styles/legend/FreguesiasOperacoes_1_4.png" /> 800 - 1000 <br />\
    <img src="styles/legend/FreguesiasOperacoes_1_5.png" /> 1000 - 1049 <br />'
        });
var format_FreguesiasBeneficiarios_2 = new ol.format.GeoJSON();
var features_FreguesiasBeneficiarios_2 = format_FreguesiasBeneficiarios_2.readFeatures(json_FreguesiasBeneficiarios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FreguesiasBeneficiarios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FreguesiasBeneficiarios_2.addFeatures(features_FreguesiasBeneficiarios_2);
var lyr_FreguesiasBeneficiarios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FreguesiasBeneficiarios_2, 
                style: style_FreguesiasBeneficiarios_2,
                interactive: true,
    title: 'Freguesias - Beneficiarios<br />\
    <img src="styles/legend/FreguesiasBeneficiarios_2_0.png" /> 1 - 50 <br />\
    <img src="styles/legend/FreguesiasBeneficiarios_2_1.png" /> 50 - 100 <br />\
    <img src="styles/legend/FreguesiasBeneficiarios_2_2.png" /> 100 - 150 <br />\
    <img src="styles/legend/FreguesiasBeneficiarios_2_3.png" /> 150 - 151 <br />'
        });
var format_FreguesiasFundos_3 = new ol.format.GeoJSON();
var features_FreguesiasFundos_3 = format_FreguesiasFundos_3.readFeatures(json_FreguesiasFundos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FreguesiasFundos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FreguesiasFundos_3.addFeatures(features_FreguesiasFundos_3);
var lyr_FreguesiasFundos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FreguesiasFundos_3, 
                style: style_FreguesiasFundos_3,
                interactive: true,
    title: 'Freguesias - Fundos<br />\
    <img src="styles/legend/FreguesiasFundos_3_0.png" /> 0 - 10 <br />\
    <img src="styles/legend/FreguesiasFundos_3_1.png" /> 10 - 20 <br />\
    <img src="styles/legend/FreguesiasFundos_3_2.png" /> 20 - 30 <br />\
    <img src="styles/legend/FreguesiasFundos_3_3.png" /> 30 - 40 <br />\
    <img src="styles/legend/FreguesiasFundos_3_4.png" /> 40 - 50 <br />\
    <img src="styles/legend/FreguesiasFundos_3_5.png" /> 50 - 60 <br />\
    <img src="styles/legend/FreguesiasFundos_3_6.png" /> 60 - 68 <br />'
        });
var format_MunicipiosOperacoes_4 = new ol.format.GeoJSON();
var features_MunicipiosOperacoes_4 = format_MunicipiosOperacoes_4.readFeatures(json_MunicipiosOperacoes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosOperacoes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosOperacoes_4.addFeatures(features_MunicipiosOperacoes_4);
var lyr_MunicipiosOperacoes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosOperacoes_4, 
                style: style_MunicipiosOperacoes_4,
                interactive: true,
    title: 'Municipios - Operacoes<br />\
    <img src="styles/legend/MunicipiosOperacoes_4_0.png" /> 13 - 500 <br />\
    <img src="styles/legend/MunicipiosOperacoes_4_1.png" /> 500 - 1000 <br />\
    <img src="styles/legend/MunicipiosOperacoes_4_2.png" /> 1000 - 1500 <br />\
    <img src="styles/legend/MunicipiosOperacoes_4_3.png" /> 1500 - 2000 <br />\
    <img src="styles/legend/MunicipiosOperacoes_4_4.png" /> 2000 - 2500 <br />\
    <img src="styles/legend/MunicipiosOperacoes_4_5.png" /> 2500 - 3000 <br />\
    <img src="styles/legend/MunicipiosOperacoes_4_6.png" /> 3000 - 3249 <br />'
        });
var format_MunicipiosBeneficiarios_5 = new ol.format.GeoJSON();
var features_MunicipiosBeneficiarios_5 = format_MunicipiosBeneficiarios_5.readFeatures(json_MunicipiosBeneficiarios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosBeneficiarios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosBeneficiarios_5.addFeatures(features_MunicipiosBeneficiarios_5);
var lyr_MunicipiosBeneficiarios_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosBeneficiarios_5, 
                style: style_MunicipiosBeneficiarios_5,
                interactive: true,
    title: 'Municipios - Beneficiarios<br />\
    <img src="styles/legend/MunicipiosBeneficiarios_5_0.png" /> 6 - 200 <br />\
    <img src="styles/legend/MunicipiosBeneficiarios_5_1.png" /> 200 - 400 <br />\
    <img src="styles/legend/MunicipiosBeneficiarios_5_2.png" /> 400 - 600 <br />\
    <img src="styles/legend/MunicipiosBeneficiarios_5_3.png" /> 600 - 769 <br />'
        });
var format_MunicipiosFundos_6 = new ol.format.GeoJSON();
var features_MunicipiosFundos_6 = format_MunicipiosFundos_6.readFeatures(json_MunicipiosFundos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosFundos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosFundos_6.addFeatures(features_MunicipiosFundos_6);
var lyr_MunicipiosFundos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosFundos_6, 
                style: style_MunicipiosFundos_6,
                interactive: true,
    title: 'Municipios - Fundos<br />\
    <img src="styles/legend/MunicipiosFundos_6_0.png" /> 1 - 200 <br />\
    <img src="styles/legend/MunicipiosFundos_6_1.png" /> 200 - 400 <br />\
    <img src="styles/legend/MunicipiosFundos_6_2.png" /> 400 - 600 <br />\
    <img src="styles/legend/MunicipiosFundos_6_3.png" /> 600 - 769 <br />'
        });
var format_NUTS3Operacoes_7 = new ol.format.GeoJSON();
var features_NUTS3Operacoes_7 = format_NUTS3Operacoes_7.readFeatures(json_NUTS3Operacoes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS3Operacoes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS3Operacoes_7.addFeatures(features_NUTS3Operacoes_7);
var lyr_NUTS3Operacoes_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS3Operacoes_7, 
                style: style_NUTS3Operacoes_7,
                interactive: true,
    title: 'NUTS3 - Operacoes<br />\
    <img src="styles/legend/NUTS3Operacoes_7_0.png" /> 523 - 1000 <br />\
    <img src="styles/legend/NUTS3Operacoes_7_1.png" /> 1000 - 2000 <br />\
    <img src="styles/legend/NUTS3Operacoes_7_2.png" /> 2000 - 3000 <br />\
    <img src="styles/legend/NUTS3Operacoes_7_3.png" /> 3000 - 4000 <br />\
    <img src="styles/legend/NUTS3Operacoes_7_4.png" /> 4000 - 5000 <br />\
    <img src="styles/legend/NUTS3Operacoes_7_5.png" /> 5000 - 6000 <br />\
    <img src="styles/legend/NUTS3Operacoes_7_6.png" /> 6000 - 7000 <br />\
    <img src="styles/legend/NUTS3Operacoes_7_7.png" /> 7000 - 7492 <br />'
        });
var format_NUTS3Beneficiarios_8 = new ol.format.GeoJSON();
var features_NUTS3Beneficiarios_8 = format_NUTS3Beneficiarios_8.readFeatures(json_NUTS3Beneficiarios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS3Beneficiarios_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS3Beneficiarios_8.addFeatures(features_NUTS3Beneficiarios_8);
var lyr_NUTS3Beneficiarios_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS3Beneficiarios_8, 
                style: style_NUTS3Beneficiarios_8,
                interactive: true,
    title: 'NUTS3 - Beneficiarios<br />\
    <img src="styles/legend/NUTS3Beneficiarios_8_0.png" /> 148 - 500 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_8_1.png" /> 500 - 1000 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_8_2.png" /> 1000 - 1500 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_8_3.png" /> 1500 - 2000 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_8_4.png" /> 2000 - 2500 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_8_5.png" /> 2500 - 2953 <br />'
        });
var format_NUTS3Fundos_9 = new ol.format.GeoJSON();
var features_NUTS3Fundos_9 = format_NUTS3Fundos_9.readFeatures(json_NUTS3Fundos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS3Fundos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS3Fundos_9.addFeatures(features_NUTS3Fundos_9);
var lyr_NUTS3Fundos_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS3Fundos_9, 
                style: style_NUTS3Fundos_9,
                interactive: true,
    title: 'NUTS3 - Fundos<br />\
    <img src="styles/legend/NUTS3Fundos_9_0.png" /> 135 - 500 <br />\
    <img src="styles/legend/NUTS3Fundos_9_1.png" /> 500 - 1000 <br />\
    <img src="styles/legend/NUTS3Fundos_9_2.png" /> 1000 - 1500 <br />\
    <img src="styles/legend/NUTS3Fundos_9_3.png" /> 1500 - 2000 <br />\
    <img src="styles/legend/NUTS3Fundos_9_4.png" /> 2000 - 2500 <br />\
    <img src="styles/legend/NUTS3Fundos_9_5.png" /> 2500 - 2799 <br />'
        });
var format_NUTS2Operacoes_10 = new ol.format.GeoJSON();
var features_NUTS2Operacoes_10 = format_NUTS2Operacoes_10.readFeatures(json_NUTS2Operacoes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS2Operacoes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS2Operacoes_10.addFeatures(features_NUTS2Operacoes_10);
var lyr_NUTS2Operacoes_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS2Operacoes_10, 
                style: style_NUTS2Operacoes_10,
                interactive: true,
    title: 'NUTS2 - Operacoes<br />\
    <img src="styles/legend/NUTS2Operacoes_10_0.png" /> 1278 - 5000 <br />\
    <img src="styles/legend/NUTS2Operacoes_10_1.png" /> 5000 - 10000 <br />\
    <img src="styles/legend/NUTS2Operacoes_10_2.png" /> 10000 - 15000 <br />\
    <img src="styles/legend/NUTS2Operacoes_10_3.png" /> 15000 - 18793 <br />'
        });
var format_NUTS2Beneficiarios_11 = new ol.format.GeoJSON();
var features_NUTS2Beneficiarios_11 = format_NUTS2Beneficiarios_11.readFeatures(json_NUTS2Beneficiarios_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS2Beneficiarios_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS2Beneficiarios_11.addFeatures(features_NUTS2Beneficiarios_11);
var lyr_NUTS2Beneficiarios_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS2Beneficiarios_11, 
                style: style_NUTS2Beneficiarios_11,
                interactive: true,
    title: 'NUTS2 - Beneficiarios<br />\
    <img src="styles/legend/NUTS2Beneficiarios_11_0.png" /> 532 - 1000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_11_1.png" /> 1000 - 2000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_11_2.png" /> 2000 - 3000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_11_3.png" /> 3000 - 4000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_11_4.png" /> 4000 - 5000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_11_5.png" /> 5000 - 5988 <br />'
        });
var format_NUTS2Fundos_12 = new ol.format.GeoJSON();
var features_NUTS2Fundos_12 = format_NUTS2Fundos_12.readFeatures(json_NUTS2Fundos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS2Fundos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS2Fundos_12.addFeatures(features_NUTS2Fundos_12);
var lyr_NUTS2Fundos_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS2Fundos_12, 
                style: style_NUTS2Fundos_12,
                interactive: true,
    title: 'NUTS2 - Fundos<br />\
    <img src="styles/legend/NUTS2Fundos_12_0.png" /> 399 - 2000 <br />\
    <img src="styles/legend/NUTS2Fundos_12_1.png" /> 2000 - 4000 <br />\
    <img src="styles/legend/NUTS2Fundos_12_2.png" /> 4000 - 6000 <br />\
    <img src="styles/legend/NUTS2Fundos_12_3.png" /> 6000 - 7863 <br />'
        });
var format_Portugal_13 = new ol.format.GeoJSON();
var features_Portugal_13 = format_Portugal_13.readFeatures(json_Portugal_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Portugal_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portugal_13.addFeatures(features_Portugal_13);
var lyr_Portugal_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Portugal_13, 
                style: style_Portugal_13,
                interactive: true,
                title: '<img src="styles/legend/Portugal_13.png" /> Portugal'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FreguesiasOperacoes_1.setVisible(true);lyr_FreguesiasBeneficiarios_2.setVisible(true);lyr_FreguesiasFundos_3.setVisible(true);lyr_MunicipiosOperacoes_4.setVisible(true);lyr_MunicipiosBeneficiarios_5.setVisible(true);lyr_MunicipiosFundos_6.setVisible(true);lyr_NUTS3Operacoes_7.setVisible(true);lyr_NUTS3Beneficiarios_8.setVisible(true);lyr_NUTS3Fundos_9.setVisible(true);lyr_NUTS2Operacoes_10.setVisible(true);lyr_NUTS2Beneficiarios_11.setVisible(true);lyr_NUTS2Fundos_12.setVisible(true);lyr_Portugal_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FreguesiasOperacoes_1,lyr_FreguesiasBeneficiarios_2,lyr_FreguesiasFundos_3,lyr_MunicipiosOperacoes_4,lyr_MunicipiosBeneficiarios_5,lyr_MunicipiosFundos_6,lyr_NUTS3Operacoes_7,lyr_NUTS3Beneficiarios_8,lyr_NUTS3Fundos_9,lyr_NUTS2Operacoes_10,lyr_NUTS2Beneficiarios_11,lyr_NUTS2Fundos_12,lyr_Portugal_13];
lyr_FreguesiasOperacoes_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_FreguesiasBeneficiarios_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_FreguesiasFundos_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_MunicipiosOperacoes_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_MunicipiosBeneficiarios_5.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_MunicipiosFundos_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_NUTS3Operacoes_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_NUTS3Beneficiarios_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_NUTS3Fundos_9.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_NUTS2Operacoes_10.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_NUTS2Beneficiarios_11.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_NUTS2Fundos_12.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_Portugal_13.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_FreguesiasOperacoes_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_FreguesiasBeneficiarios_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_FreguesiasFundos_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_MunicipiosOperacoes_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_MunicipiosBeneficiarios_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_MunicipiosFundos_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_NUTS3Operacoes_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_NUTS3Beneficiarios_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_NUTS3Fundos_9.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_NUTS2Operacoes_10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_NUTS2Beneficiarios_11.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_NUTS2Fundos_12.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_Portugal_13.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_FreguesiasOperacoes_1.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_FreguesiasBeneficiarios_2.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_FreguesiasFundos_3.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_MunicipiosOperacoes_4.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_MunicipiosBeneficiarios_5.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_MunicipiosFundos_6.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_NUTS3Operacoes_7.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_NUTS3Beneficiarios_8.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_NUTS3Fundos_9.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_NUTS2Operacoes_10.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_NUTS2Beneficiarios_11.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_NUTS2Fundos_12.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_Portugal_13.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_Portugal_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});