import { useEffect, useState } from 'react';

declare global {
  interface Window {
     kakao: any;
  }
}

interface MapContainerProps {
  data: { x: number; y: number }[];
}

const MapContainer: React.FC<MapContainerProps> = ({ data }) => {

  useEffect(() => {
    mapscript();
  }, [data]);

  const mapscript = () => {
    const container = document.getElementById("map");

    if (!container) {
      console.error('Map container element not found');
      return;
    }
  
    if (data[0].x !== undefined && data[0].y !== undefined) {
      let options = {
        center: new window.kakao.maps.LatLng(data[0].y, data[0].x), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      const map = new window.kakao.maps.Map(container, options);

      data.forEach((el) => {
        // Check if 'lat' and 'lng' are defined before creating the marker
        if (el.y !== undefined && el.x !== undefined) {
          // Create a marker
          new window.kakao.maps.Marker({
            map ,
            position: new window.kakao.maps.LatLng(el.y, el.x),
            
          });
        } else {
          console.error('Invalid data format. Missing lat or lng property:', el);
        }
      });
    }
    // Map



  };

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default MapContainer;