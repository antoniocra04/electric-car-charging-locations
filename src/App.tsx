import React from 'react'

import { Header } from './components/Header'
import { Map } from './components/Map'
import { Markers } from './components/Markers'

import './styles/main.scss'

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Map center={[52.520008, 13.404954]} zoom={9}>
                <Markers
                    contryCode={'DE'}
                    maxResult={10}
                    latitude={52.52}
                    longitude={13.404954}
                />
            </Map>
        </>
    )
}

export default App
