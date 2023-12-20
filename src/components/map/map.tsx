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

  const [centerMarker,setCenterMarker] = useState<any>();

  useEffect(()=>{
    setCenterMarker(data[0]);
  },[data])


  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    const container = document.getElementById("map");

    if (!container) {
      console.error('Map container element not found');
      return;
    }
  
    const options = {
      center: new window.kakao.maps.LatLng(),
      level: 5,
    };

    // Map
    const map = new window.kakao.maps.Map(container, options);


    data.forEach((el) => {
      // Check if 'lat' and 'lng' are defined before creating the marker
      if (el.y !== undefined && el.x !== undefined) {
        // Create a marker
        new window.kakao.maps.Marker({
          map,
          position: new window.kakao.maps.LatLng(el.y, el.x),
          
        });
      } else {
        console.error('Invalid data format. Missing lat or lng property:', el);
      }
    });
  };

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default MapContainer;