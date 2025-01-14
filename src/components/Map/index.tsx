

import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const YandexMap = () => {
  // Координаты банкетного зала "Ревизоръ" (пример)
  const coordinates = [55.751244, 37.618423]; // Замените на реальные координаты

  return (
    <YMaps>
      <Map
        defaultState={{
          center: coordinates,
          zoom: 15,
        }}
        width="100%"
        height="400px"
      >
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
  );
};