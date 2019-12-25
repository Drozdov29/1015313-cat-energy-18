ymaps.ready(init);

  function init () {
    var myMap = new ymaps.Map("map", {
      center: [59.93863106417265,30.3230545], // Центр карты, указываем коордианты
      zoom: 17,                    // Масштаб, тут все просто
      controls: ["zoomControl"],  // Отключаем все элементы управления
      behaviors: ["drag"]
    });

      // Наша метка, указываем коордианты
      var myGeoObjects = [];
      if (document.body.clientWidth < 768) {
        myGeoObjects = new ymaps.Placemark([59.93863106417265,30.3230545],{
          balloonContentBody: 'HTML Academy: Кэт Энерджи',
          },{
          iconLayout: 'default#image',
          // Путь до нашей картинки
          iconImageHref: '../img/map-pin.png',
          // Размер по ширине и высоте
          iconImageSize: [55, 53],
          // Смещение левого верхнего угла иконки относительно
          // её «ножки» (точки привязки).
          iconImageOffset: [-30, -40]
        });

          } else {
          myGeoObjects = new ymaps.Placemark([59.9385395452995, 30.323354907409684],{
          balloonContentBody: 'HTML Academy: Кэт Энерджи',
          },{
          iconLayout: 'default#image',
          // Путь до нашей картинки
          iconImageHref: '../img/map-pin.png',
          // Размер по ширине и высоте
          iconImageSize: [113, 106],
          // Смещение левого верхнего угла иконки относительно
          // её «ножки» (точки привязки).
          iconImageOffset: [-87, -100]
          });
      }

      var clusterer = new ymaps.Clusterer({
          clusterDisableClickZoom: false,
          clusterOpenBalloonOnClick: false,
      });

      clusterer.add(myGeoObjects);
      myMap.geoObjects.add(clusterer);
      myMap.behaviors.disable('scrollZoom'); // Отлючаем возможность изменения масштаба
  }
