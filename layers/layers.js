var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KWAMEASAH_1 = new ol.format.GeoJSON();
var features_KWAMEASAH_1 = format_KWAMEASAH_1.readFeatures(json_KWAMEASAH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KWAMEASAH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KWAMEASAH_1.addFeatures(features_KWAMEASAH_1);
var lyr_KWAMEASAH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KWAMEASAH_1, 
                style: style_KWAMEASAH_1,
                popuplayertitle: 'KWAME ASAH',
                interactive: true,
                title: '<img src="styles/legend/KWAMEASAH_1.png" /> KWAME ASAH'
            });
var format_PERMITDATABASE_2 = new ol.format.GeoJSON();
var features_PERMITDATABASE_2 = format_PERMITDATABASE_2.readFeatures(json_PERMITDATABASE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERMITDATABASE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMITDATABASE_2.addFeatures(features_PERMITDATABASE_2);
var lyr_PERMITDATABASE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERMITDATABASE_2, 
                style: style_PERMITDATABASE_2,
                popuplayertitle: 'PERMIT DATABASE',
                interactive: true,
                title: '<img src="styles/legend/PERMITDATABASE_2.png" /> PERMIT DATABASE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KWAMEASAH_1.setVisible(true);lyr_PERMITDATABASE_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KWAMEASAH_1,lyr_PERMITDATABASE_2];
lyr_KWAMEASAH_1.set('fieldAliases', {'id': 'id', });
lyr_PERMITDATABASE_2.set('fieldAliases', {'N': 'N', 'E': 'E', 'NAME': 'NAME', 'LOCATION': 'LOCATION', 'MUNICIPALITY': 'MUNICIPALITY', 'BUILDING PERMIT STATUS': 'BUILDING PERMIT STATUS', 'DURATION': 'DURATION', 'PLOT SIZE': 'PLOT SIZE', });
lyr_KWAMEASAH_1.set('fieldImages', {'id': '', });
lyr_PERMITDATABASE_2.set('fieldImages', {'N': '', 'E': '', 'NAME': '', 'LOCATION': '', 'MUNICIPALITY': '', 'BUILDING PERMIT STATUS': '', 'DURATION': '', 'PLOT SIZE': '', });
lyr_KWAMEASAH_1.set('fieldLabels', {'id': 'no label', });
lyr_PERMITDATABASE_2.set('fieldLabels', {'N': 'hidden field', 'E': 'hidden field', 'NAME': 'inline label - visible with data', 'LOCATION': 'inline label - visible with data', 'MUNICIPALITY': 'inline label - visible with data', 'BUILDING PERMIT STATUS': 'inline label - visible with data', 'DURATION': 'inline label - visible with data', 'PLOT SIZE': 'inline label - visible with data', });
lyr_PERMITDATABASE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});