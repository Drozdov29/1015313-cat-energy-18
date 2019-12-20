ymaps.ready(init);

  function init () {
    var myMap = new ymaps.Map("map", {
      // Центр карты, указываем коордианты
      center: [59.93863106417265, 30.3230545],
      // Масштаб, тут все просто
      zoom: 17,
      // Отключаем все элементы управления
      controls: ["zoomControl"],
      // zoom при ctrl
      behaviors: ["drag"]
      });

      var myGeoObjects = [];

      // Наша метка, указываем коордианты
      myGeoObjects = new ymaps.Placemark([59.9385395452995, 30.323354907409684],{
        balloonContentBody: 'Текст в балуне',
        },{
        iconLayout: 'default#image',
        // Путь до нашей картинки
        iconImageHref: '../img/map-pin.png',
        // Размер по ширине и высоте
        iconImageSize: [113, 106],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [0, 0]
      });

      var clusterer = new ymaps.Clusterer({
          clusterDisableClickZoom: false,
          clusterOpenBalloonOnClick: false,
      });

      clusterer.add(myGeoObjects);
      myMap.geoObjects.add(clusterer);
      // Отлючаем возможность изменения масштаба
      myMap.behaviors.disable('scrollZoom');

  }
