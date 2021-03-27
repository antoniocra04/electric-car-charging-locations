import React from 'react'

import { Header } from './components/Header'
import { Map } from './components/Map'
import { Markers } from './components/Markers'

import { getElectricCarChargingLocations } from './services/api'

import './styles/main.scss'

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Map center={[52.520008, 13.404954]} zoom={9}>
                <Markers
                    requestFunction={getElectricCarChargingLocations(
                        'DE',
                        10,
                        52.52,
                        13.404954
                    )}
                />
            </Map>
        </>
    )
}

export default App
