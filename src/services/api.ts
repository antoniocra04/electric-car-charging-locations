import axios from 'axios'

const apiKey = '46fa1933-9db6-4395-9a01-bbb925820dc3'

const client = axios.create({
    baseURL: 'https://api.openchargemap.io',
})

export const getElectricCarChargingLocations = async (
    contryCode: string,
    maxResults: number,
    latitude: number,
    longitude: number
) => {
    return client.get(
        `/v3/poi/?output=json&countrycode=${contryCode}&maxresults=${maxResults}&compact=true&verbose=false&latitude=${latitude}&longitude=${longitude}&distance=10&distanceunit=KM&key=${apiKey}`
    )
}
