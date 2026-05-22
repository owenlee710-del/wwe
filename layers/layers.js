var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '咖啡廳點位圖',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 咖啡廳點位圖'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1];
lyr__1.set('fieldAliases', {'fid': 'fid', '咖啡廳名': '咖啡廳名', '咖啡廳地址': '咖啡廳地址', '咖啡廳介紹': '咖啡廳介紹', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', '咖啡廳名': 'TextEdit', '咖啡廳地址': 'TextEdit', '咖啡廳介紹': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', '咖啡廳名': 'inline label - always visible', '咖啡廳地址': 'inline label - always visible', '咖啡廳介紹': 'inline label - always visible', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});