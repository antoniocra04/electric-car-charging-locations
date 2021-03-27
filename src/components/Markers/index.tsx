import React from 'react'

import { useQuery } from 'react-query'

import { Placemark } from 'react-yandex-maps'

interface IMarkers {
    requestFunction: any
}

export const Markers: React.FC<IMarkers> = (props) => {
    const { isLoading, data } = useQuery(
        'locations',
        () => props.requestFunction
    )

    return (
        <>
            {isLoading
                ? ''
                : data!.data.map((location: any, index: number) => (
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
