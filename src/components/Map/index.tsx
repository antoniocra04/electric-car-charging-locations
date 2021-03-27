import React from 'react'

import { YMaps, Map as YMap, Clusterer } from 'react-yandex-maps'

interface IMap {
    center: [number, number]
    zoom: number
}

export const Map: React.FC<IMap> = (props) => {
    return (
        <YMaps>
            <YMap
                width={'100%'}
                height={'90vh'}
                defaultState={{ center: props.center, zoom: props.zoom }}
            >
                <Clusterer
                    options={{
                        preset: 'islands#invertedVioletClusterIcons',
                        groupByCoordinates: false,
                    }}
                >
                    {props.children}
                </Clusterer>
            </YMap>
        </YMaps>
    )
}
