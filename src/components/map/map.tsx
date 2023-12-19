import React, { useEffect } from 'react'
import styled from 'styled-components'

declare global {
  interface Window {
    kakao: any
  }
}

const Map = styled.div`
  width: 100%;
  height: 300px;
`

function MapContainer() {
  const markers: any[] = [
    new window.kakao.maps.LatLng(33.45023, 126.572965),
    new window.kakao.maps.LatLng(33.455529, 126.561838),
  ]

  const setMarkers = (map: any) => {
    markers.forEach((obj) => {
      new window.kakao.maps.Marker({
        map: map,
        position: obj,
        title: '테스트',
      })
    })
  }

  const init = (map: any) => {
    window.kakao.maps.event.addListener(
      map,
      'click',
      function (mouseEvent: any) {
        // 클릭한 위치에 마커를 표시합니다
        console.log(mouseEvent.latLng)
      },
    )
  }

  useEffect(() => {
    const container = document.getElementById('map')
    const mainPosition = new window.kakao.maps.LatLng(33.453502, 126.569894)
    const options = {
      center: mainPosition, // 지도의 중심 좌표
      level: 5, // 지도의 레벨(확대, 축소 정도)
    }

    const mainMarker = new window.kakao.maps.Marker({
      position: mainPosition,
    })

    const map = new window.kakao.maps.Map(container, options)

    init(map)
    mainMarker.setMap(map) // 메인 위치 set
    setMarkers(map) // 마커 배열 set
  }, [])

  return <Map id="map" />
}

export default MapContainer