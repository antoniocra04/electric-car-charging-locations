import React from 'react'

import { useQuery } from 'react-query'
import {AxiosResponse} from 'axios'

import { Placemark } from 'react-yandex-maps'

interface IMarkers {
    requestFunction: Promise<AxiosResponse<any>>
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
