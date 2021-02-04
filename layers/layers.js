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
var format_MunicipiosDiplomados_7 = new ol.format.GeoJSON();
var features_MunicipiosDiplomados_7 = format_MunicipiosDiplomados_7.readFeatures(json_MunicipiosDiplomados_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosDiplomados_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosDiplomados_7.addFeatures(features_MunicipiosDiplomados_7);
var lyr_MunicipiosDiplomados_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosDiplomados_7, 
                style: style_MunicipiosDiplomados_7,
                interactive: true,
    title: 'Municipios - Diplomados<br />\
    <img src="styles/legend/MunicipiosDiplomados_7_0.png" /> -6,74 - -6 <br />\
    <img src="styles/legend/MunicipiosDiplomados_7_1.png" /> -6 - -4 <br />\
    <img src="styles/legend/MunicipiosDiplomados_7_2.png" /> -4 - -2 <br />\
    <img src="styles/legend/MunicipiosDiplomados_7_3.png" /> -2 - 0 <br />\
    <img src="styles/legend/MunicipiosDiplomados_7_4.png" /> 0 - 0,29 <br />'
        });
var format_MunicipiosDesempregados_8 = new ol.format.GeoJSON();
var features_MunicipiosDesempregados_8 = format_MunicipiosDesempregados_8.readFeatures(json_MunicipiosDesempregados_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosDesempregados_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosDesempregados_8.addFeatures(features_MunicipiosDesempregados_8);
var lyr_MunicipiosDesempregados_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosDesempregados_8, 
                style: style_MunicipiosDesempregados_8,
                interactive: true,
    title: 'Municipios - Desempregados<br />\
    <img src="styles/legend/MunicipiosDesempregados_8_0.png" /> -0,255 - -0,2 <br />\
    <img src="styles/legend/MunicipiosDesempregados_8_1.png" /> -0,2 - -0,1 <br />\
    <img src="styles/legend/MunicipiosDesempregados_8_2.png" /> -0,1 - 0 <br />'
        });
var format_MunicipiosAbandonoEscolar_9 = new ol.format.GeoJSON();
var features_MunicipiosAbandonoEscolar_9 = format_MunicipiosAbandonoEscolar_9.readFeatures(json_MunicipiosAbandonoEscolar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosAbandonoEscolar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosAbandonoEscolar_9.addFeatures(features_MunicipiosAbandonoEscolar_9);
var lyr_MunicipiosAbandonoEscolar_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosAbandonoEscolar_9, 
                style: style_MunicipiosAbandonoEscolar_9,
                interactive: true,
    title: 'Municipios - Abandono Escolar<br />\
    <img src="styles/legend/MunicipiosAbandonoEscolar_9_0.png" /> -7,3 - -6 <br />\
    <img src="styles/legend/MunicipiosAbandonoEscolar_9_1.png" /> -6 - -4 <br />\
    <img src="styles/legend/MunicipiosAbandonoEscolar_9_2.png" /> -4 - -2 <br />\
    <img src="styles/legend/MunicipiosAbandonoEscolar_9_3.png" /> -2 - 0 <br />'
        });
var format_NUTS3Operacoes_10 = new ol.format.GeoJSON();
var features_NUTS3Operacoes_10 = format_NUTS3Operacoes_10.readFeatures(json_NUTS3Operacoes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS3Operacoes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS3Operacoes_10.addFeatures(features_NUTS3Operacoes_10);
var lyr_NUTS3Operacoes_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS3Operacoes_10, 
                style: style_NUTS3Operacoes_10,
                interactive: true,
    title: 'NUTS3 - Operacoes<br />\
    <img src="styles/legend/NUTS3Operacoes_10_0.png" /> 523 - 1000 <br />\
    <img src="styles/legend/NUTS3Operacoes_10_1.png" /> 1000 - 2000 <br />\
    <img src="styles/legend/NUTS3Operacoes_10_2.png" /> 2000 - 3000 <br />\
    <img src="styles/legend/NUTS3Operacoes_10_3.png" /> 3000 - 4000 <br />\
    <img src="styles/legend/NUTS3Operacoes_10_4.png" /> 4000 - 5000 <br />\
    <img src="styles/legend/NUTS3Operacoes_10_5.png" /> 5000 - 6000 <br />\
    <img src="styles/legend/NUTS3Operacoes_10_6.png" /> 6000 - 7000 <br />\
    <img src="styles/legend/NUTS3Operacoes_10_7.png" /> 7000 - 7492 <br />'
        });
var format_NUTS3Beneficiarios_11 = new ol.format.GeoJSON();
var features_NUTS3Beneficiarios_11 = format_NUTS3Beneficiarios_11.readFeatures(json_NUTS3Beneficiarios_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS3Beneficiarios_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS3Beneficiarios_11.addFeatures(features_NUTS3Beneficiarios_11);
var lyr_NUTS3Beneficiarios_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS3Beneficiarios_11, 
                style: style_NUTS3Beneficiarios_11,
                interactive: true,
    title: 'NUTS3 - Beneficiarios<br />\
    <img src="styles/legend/NUTS3Beneficiarios_11_0.png" /> 148 - 500 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_11_1.png" /> 500 - 1000 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_11_2.png" /> 1000 - 1500 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_11_3.png" /> 1500 - 2000 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_11_4.png" /> 2000 - 2500 <br />\
    <img src="styles/legend/NUTS3Beneficiarios_11_5.png" /> 2500 - 2953 <br />'
        });
var format_NUTS3Fundos_12 = new ol.format.GeoJSON();
var features_NUTS3Fundos_12 = format_NUTS3Fundos_12.readFeatures(json_NUTS3Fundos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS3Fundos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS3Fundos_12.addFeatures(features_NUTS3Fundos_12);
var lyr_NUTS3Fundos_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS3Fundos_12, 
                style: style_NUTS3Fundos_12,
                interactive: true,
    title: 'NUTS3 - Fundos<br />\
    <img src="styles/legend/NUTS3Fundos_12_0.png" /> 135 - 500 <br />\
    <img src="styles/legend/NUTS3Fundos_12_1.png" /> 500 - 1000 <br />\
    <img src="styles/legend/NUTS3Fundos_12_2.png" /> 1000 - 1500 <br />\
    <img src="styles/legend/NUTS3Fundos_12_3.png" /> 1500 - 2000 <br />\
    <img src="styles/legend/NUTS3Fundos_12_4.png" /> 2000 - 2500 <br />\
    <img src="styles/legend/NUTS3Fundos_12_5.png" /> 2500 - 2799 <br />'
        });
var format_NUTS3Diplomados_13 = new ol.format.GeoJSON();
var features_NUTS3Diplomados_13 = format_NUTS3Diplomados_13.readFeatures(json_NUTS3Diplomados_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS3Diplomados_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS3Diplomados_13.addFeatures(features_NUTS3Diplomados_13);
var lyr_NUTS3Diplomados_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS3Diplomados_13, 
                style: style_NUTS3Diplomados_13,
                interactive: true,
    title: 'NUTS3 - Diplomados<br />\
    <img src="styles/legend/NUTS3Diplomados_13_0.png" /> -0,628 - -0,6 <br />\
    <img src="styles/legend/NUTS3Diplomados_13_1.png" /> -0,6 - -0,4 <br />\
    <img src="styles/legend/NUTS3Diplomados_13_2.png" /> -0,4 - -0,2 <br />\
    <img src="styles/legend/NUTS3Diplomados_13_3.png" /> -0,2 - 0 <br />\
    <img src="styles/legend/NUTS3Diplomados_13_4.png" /> 0 - 0,085 <br />'
        });
var format_NUTS3Desempregados_14 = new ol.format.GeoJSON();
var features_NUTS3Desempregados_14 = format_NUTS3Desempregados_14.readFeatures(json_NUTS3Desempregados_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS3Desempregados_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS3Desempregados_14.addFeatures(features_NUTS3Desempregados_14);
var lyr_NUTS3Desempregados_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS3Desempregados_14, 
                style: style_NUTS3Desempregados_14,
                interactive: true,
    title: 'NUTS3 - Desempregados<br />\
    <img src="styles/legend/NUTS3Desempregados_14_0.png" /> -0,199 - -0,15 <br />\
    <img src="styles/legend/NUTS3Desempregados_14_1.png" /> -0,15 - -0,1 <br />\
    <img src="styles/legend/NUTS3Desempregados_14_2.png" /> -0,1 - -0,05 <br />\
    <img src="styles/legend/NUTS3Desempregados_14_3.png" /> -0,05 - 0 <br />'
        });
var format_NUTS3AbandonoEscolar_15 = new ol.format.GeoJSON();
var features_NUTS3AbandonoEscolar_15 = format_NUTS3AbandonoEscolar_15.readFeatures(json_NUTS3AbandonoEscolar_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS3AbandonoEscolar_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS3AbandonoEscolar_15.addFeatures(features_NUTS3AbandonoEscolar_15);
var lyr_NUTS3AbandonoEscolar_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS3AbandonoEscolar_15, 
                style: style_NUTS3AbandonoEscolar_15,
                interactive: true,
    title: 'NUTS3 - Abandono Escolar<br />\
    <img src="styles/legend/NUTS3AbandonoEscolar_15_0.png" /> -0,387 - -0,3 <br />\
    <img src="styles/legend/NUTS3AbandonoEscolar_15_1.png" /> -0,3 - -0,2 <br />\
    <img src="styles/legend/NUTS3AbandonoEscolar_15_2.png" /> -0,2 - -0,1 <br />\
    <img src="styles/legend/NUTS3AbandonoEscolar_15_3.png" /> -0,1 - 0 <br />'
        });
var format_NUTS2Operacoes_16 = new ol.format.GeoJSON();
var features_NUTS2Operacoes_16 = format_NUTS2Operacoes_16.readFeatures(json_NUTS2Operacoes_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS2Operacoes_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS2Operacoes_16.addFeatures(features_NUTS2Operacoes_16);
var lyr_NUTS2Operacoes_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS2Operacoes_16, 
                style: style_NUTS2Operacoes_16,
                interactive: true,
    title: 'NUTS2 - Operacoes<br />\
    <img src="styles/legend/NUTS2Operacoes_16_0.png" /> 1278 - 5000 <br />\
    <img src="styles/legend/NUTS2Operacoes_16_1.png" /> 5000 - 10000 <br />\
    <img src="styles/legend/NUTS2Operacoes_16_2.png" /> 10000 - 15000 <br />\
    <img src="styles/legend/NUTS2Operacoes_16_3.png" /> 15000 - 18793 <br />'
        });
var format_NUTS2Beneficiarios_17 = new ol.format.GeoJSON();
var features_NUTS2Beneficiarios_17 = format_NUTS2Beneficiarios_17.readFeatures(json_NUTS2Beneficiarios_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS2Beneficiarios_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS2Beneficiarios_17.addFeatures(features_NUTS2Beneficiarios_17);
var lyr_NUTS2Beneficiarios_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS2Beneficiarios_17, 
                style: style_NUTS2Beneficiarios_17,
                interactive: true,
    title: 'NUTS2 - Beneficiarios<br />\
    <img src="styles/legend/NUTS2Beneficiarios_17_0.png" /> 532 - 1000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_17_1.png" /> 1000 - 2000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_17_2.png" /> 2000 - 3000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_17_3.png" /> 3000 - 4000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_17_4.png" /> 4000 - 5000 <br />\
    <img src="styles/legend/NUTS2Beneficiarios_17_5.png" /> 5000 - 5988 <br />'
        });
var format_NUTS2Fundos_18 = new ol.format.GeoJSON();
var features_NUTS2Fundos_18 = format_NUTS2Fundos_18.readFeatures(json_NUTS2Fundos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS2Fundos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS2Fundos_18.addFeatures(features_NUTS2Fundos_18);
var lyr_NUTS2Fundos_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS2Fundos_18, 
                style: style_NUTS2Fundos_18,
                interactive: true,
    title: 'NUTS2 - Fundos<br />\
    <img src="styles/legend/NUTS2Fundos_18_0.png" /> 399 - 2000 <br />\
    <img src="styles/legend/NUTS2Fundos_18_1.png" /> 2000 - 4000 <br />\
    <img src="styles/legend/NUTS2Fundos_18_2.png" /> 4000 - 6000 <br />\
    <img src="styles/legend/NUTS2Fundos_18_3.png" /> 6000 - 7863 <br />'
        });
var format_NUTS2Diplomados_19 = new ol.format.GeoJSON();
var features_NUTS2Diplomados_19 = format_NUTS2Diplomados_19.readFeatures(json_NUTS2Diplomados_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS2Diplomados_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS2Diplomados_19.addFeatures(features_NUTS2Diplomados_19);
var lyr_NUTS2Diplomados_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS2Diplomados_19, 
                style: style_NUTS2Diplomados_19,
                interactive: true,
    title: 'NUTS2 - Diplomados<br />\
    <img src="styles/legend/NUTS2Diplomados_19_0.png" /> -0,0309 - -0,02 <br />\
    <img src="styles/legend/NUTS2Diplomados_19_1.png" /> -0,02 - 0 <br />\
    <img src="styles/legend/NUTS2Diplomados_19_2.png" /> 0 - 0,02 <br />\
    <img src="styles/legend/NUTS2Diplomados_19_3.png" /> 0,02 - 0,04 <br />\
    <img src="styles/legend/NUTS2Diplomados_19_4.png" /> 0,04 - 0,0431 <br />'
        });
var format_NUTS2Desempregados_20 = new ol.format.GeoJSON();
var features_NUTS2Desempregados_20 = format_NUTS2Desempregados_20.readFeatures(json_NUTS2Desempregados_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS2Desempregados_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS2Desempregados_20.addFeatures(features_NUTS2Desempregados_20);
var lyr_NUTS2Desempregados_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS2Desempregados_20, 
                style: style_NUTS2Desempregados_20,
                interactive: true,
    title: 'NUTS2 - Desempregados<br />\
    <img src="styles/legend/NUTS2Desempregados_20_0.png" /> -0,1568 - -0,15 <br />\
    <img src="styles/legend/NUTS2Desempregados_20_1.png" /> -0,15 - -0,1 <br />\
    <img src="styles/legend/NUTS2Desempregados_20_2.png" /> -0,1 - -0,05 <br />\
    <img src="styles/legend/NUTS2Desempregados_20_3.png" /> -0,05 - 0 <br />'
        });
var format_NUTS2AbandonoEscolar_21 = new ol.format.GeoJSON();
var features_NUTS2AbandonoEscolar_21 = format_NUTS2AbandonoEscolar_21.readFeatures(json_NUTS2AbandonoEscolar_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUTS2AbandonoEscolar_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUTS2AbandonoEscolar_21.addFeatures(features_NUTS2AbandonoEscolar_21);
var lyr_NUTS2AbandonoEscolar_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUTS2AbandonoEscolar_21, 
                style: style_NUTS2AbandonoEscolar_21,
                interactive: true,
    title: 'NUTS2 - Abandono Escolar<br />\
    <img src="styles/legend/NUTS2AbandonoEscolar_21_0.png" /> -0,257 - -0,25 <br />\
    <img src="styles/legend/NUTS2AbandonoEscolar_21_1.png" /> -0,25 - -0,2 <br />\
    <img src="styles/legend/NUTS2AbandonoEscolar_21_2.png" /> -0,2 - -0,15 <br />\
    <img src="styles/legend/NUTS2AbandonoEscolar_21_3.png" /> -0,15 - -0,1 <br />\
    <img src="styles/legend/NUTS2AbandonoEscolar_21_4.png" /> -0,1 - -0,05 <br />\
    <img src="styles/legend/NUTS2AbandonoEscolar_21_5.png" /> -0,05 - 0 <br />'
        });
var format_Portugal_22 = new ol.format.GeoJSON();
var features_Portugal_22 = format_Portugal_22.readFeatures(json_Portugal_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Portugal_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portugal_22.addFeatures(features_Portugal_22);
var lyr_Portugal_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Portugal_22, 
                style: style_Portugal_22,
                interactive: true,
                title: '<img src="styles/legend/Portugal_22.png" /> Portugal'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FreguesiasOperacoes_1.setVisible(false);lyr_FreguesiasBeneficiarios_2.setVisible(false);lyr_FreguesiasFundos_3.setVisible(false);lyr_MunicipiosOperacoes_4.setVisible(false);lyr_MunicipiosBeneficiarios_5.setVisible(false);lyr_MunicipiosFundos_6.setVisible(false);lyr_MunicipiosDiplomados_7.setVisible(false);lyr_MunicipiosDesempregados_8.setVisible(false);lyr_MunicipiosAbandonoEscolar_9.setVisible(false);lyr_NUTS3Operacoes_10.setVisible(false);lyr_NUTS3Beneficiarios_11.setVisible(false);lyr_NUTS3Fundos_12.setVisible(false);lyr_NUTS3Diplomados_13.setVisible(false);lyr_NUTS3Desempregados_14.setVisible(false);lyr_NUTS3AbandonoEscolar_15.setVisible(false);lyr_NUTS2Operacoes_16.setVisible(false);lyr_NUTS2Beneficiarios_17.setVisible(false);lyr_NUTS2Fundos_18.setVisible(false);lyr_NUTS2Diplomados_19.setVisible(false);lyr_NUTS2Desempregados_20.setVisible(false);lyr_NUTS2AbandonoEscolar_21.setVisible(false);lyr_Portugal_22.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FreguesiasOperacoes_1,lyr_FreguesiasBeneficiarios_2,lyr_FreguesiasFundos_3,lyr_MunicipiosOperacoes_4,lyr_MunicipiosBeneficiarios_5,lyr_MunicipiosFundos_6,lyr_MunicipiosDiplomados_7,lyr_MunicipiosDesempregados_8,lyr_MunicipiosAbandonoEscolar_9,lyr_NUTS3Operacoes_10,lyr_NUTS3Beneficiarios_11,lyr_NUTS3Fundos_12,lyr_NUTS3Diplomados_13,lyr_NUTS3Desempregados_14,lyr_NUTS3AbandonoEscolar_15,lyr_NUTS2Operacoes_16,lyr_NUTS2Beneficiarios_17,lyr_NUTS2Fundos_18,lyr_NUTS2Diplomados_19,lyr_NUTS2Desempregados_20,lyr_NUTS2AbandonoEscolar_21,lyr_Portugal_22];
lyr_FreguesiasOperacoes_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_FreguesiasBeneficiarios_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_FreguesiasFundos_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_MunicipiosOperacoes_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_MunicipiosBeneficiarios_5.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_MunicipiosFundos_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_MunicipiosDiplomados_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_MunicipiosDesempregados_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_MunicipiosAbandonoEscolar_9.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS3Operacoes_10.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS3Beneficiarios_11.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS3Fundos_12.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS3Diplomados_13.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS3Desempregados_14.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS3AbandonoEscolar_15.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS2Operacoes_16.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS2Beneficiarios_17.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS2Fundos_18.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS2Diplomados_19.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS2Desempregados_20.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_NUTS2AbandonoEscolar_21.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', 'school_dropout': 'school_dropout', 'unemployment': 'unemployment', 'graduates': 'graduates', });
lyr_Portugal_22.set('fieldAliases', {'id': 'id', 'name': 'name', 'num_operations': 'num_operations', 'num_beneficiaries': 'num_beneficiaries', 'total_fund_millions': 'total_fund_millions', });
lyr_FreguesiasOperacoes_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_FreguesiasBeneficiarios_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_FreguesiasFundos_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_MunicipiosOperacoes_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': '', 'unemployment': '', 'graduates': '', });
lyr_MunicipiosBeneficiarios_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': '', 'unemployment': '', 'graduates': '', });
lyr_MunicipiosFundos_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': '', 'unemployment': '', 'graduates': '', });
lyr_MunicipiosDiplomados_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': 'TextEdit', 'unemployment': 'TextEdit', 'graduates': 'TextEdit', });
lyr_MunicipiosDesempregados_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': 'TextEdit', 'unemployment': 'TextEdit', 'graduates': 'TextEdit', });
lyr_MunicipiosAbandonoEscolar_9.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': 'TextEdit', 'unemployment': 'TextEdit', 'graduates': 'TextEdit', });
lyr_NUTS3Operacoes_10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': '', 'unemployment': '', 'graduates': '', });
lyr_NUTS3Beneficiarios_11.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': '', 'unemployment': '', 'graduates': '', });
lyr_NUTS3Fundos_12.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': '', 'unemployment': '', 'graduates': '', });
lyr_NUTS3Diplomados_13.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': 'TextEdit', 'unemployment': 'TextEdit', 'graduates': 'TextEdit', });
lyr_NUTS3Desempregados_14.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': 'TextEdit', 'unemployment': 'TextEdit', 'graduates': 'TextEdit', });
lyr_NUTS3AbandonoEscolar_15.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': 'TextEdit', 'unemployment': 'TextEdit', 'graduates': 'TextEdit', });
lyr_NUTS2Operacoes_16.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': '', 'unemployment': '', 'graduates': '', });
lyr_NUTS2Beneficiarios_17.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': '', 'unemployment': '', 'graduates': '', });
lyr_NUTS2Fundos_18.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': '', 'unemployment': '', 'graduates': '', });
lyr_NUTS2Diplomados_19.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': 'TextEdit', 'unemployment': 'TextEdit', 'graduates': 'TextEdit', });
lyr_NUTS2Desempregados_20.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': 'TextEdit', 'unemployment': 'TextEdit', 'graduates': 'TextEdit', });
lyr_NUTS2AbandonoEscolar_21.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', 'school_dropout': 'TextEdit', 'unemployment': 'TextEdit', 'graduates': 'TextEdit', });
lyr_Portugal_22.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'num_operations': 'TextEdit', 'num_beneficiaries': 'TextEdit', 'total_fund_millions': 'TextEdit', });
lyr_FreguesiasOperacoes_1.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_FreguesiasBeneficiarios_2.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_FreguesiasFundos_3.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_MunicipiosOperacoes_4.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_MunicipiosBeneficiarios_5.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_MunicipiosFundos_6.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_MunicipiosDiplomados_7.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_MunicipiosDesempregados_8.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_MunicipiosAbandonoEscolar_9.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS3Operacoes_10.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS3Beneficiarios_11.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS3Fundos_12.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS3Diplomados_13.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS3Desempregados_14.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS3AbandonoEscolar_15.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS2Operacoes_16.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS2Beneficiarios_17.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS2Fundos_18.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS2Diplomados_19.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS2Desempregados_20.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_NUTS2AbandonoEscolar_21.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', 'school_dropout': 'header label', 'unemployment': 'header label', 'graduates': 'header label', });
lyr_Portugal_22.set('fieldLabels', {'id': 'header label', 'name': 'header label', 'num_operations': 'header label', 'num_beneficiaries': 'header label', 'total_fund_millions': 'header label', });
lyr_Portugal_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});