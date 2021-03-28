import React from 'react'

import { useQuery } from 'react-query'
import { getElectricCarChargingLocations } from '../../services/api'

import { Placemark } from 'react-yandex-maps'

interface IMarkers {
    contryCode: string
    maxResult: number
    latitude: number
    longitude: number
}

export const Markers: React.FC<IMarkers> = (props) => {
    const { isLoading, data } = useQuery('locations', () =>
        getElectricCarChargingLocations(
            props.contryCode,
            props.maxResult,
            props.latitude,
            props.longitude
        )
    )

    return (
        <>
            {isLoading
                ? ''
                : data!.data.map((location, index: number) => (
                      <Placemark
                          key={index}
                          geometry={[
                              location.AddressInfo.Latitude,
                              location.AddressInfo.Longitude,
                          ]}
                      />
                  ))}
        </>
    )
}
