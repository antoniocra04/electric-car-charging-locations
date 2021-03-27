export interface IResponseGetLocation{
    IsRecentlyVerified: false
    ID: number
    UUID: string
    DataProviderID: number
    OperatorID: number
    UsageTypeID: number
    AddressInfo:{
        ID: number
        Title: string
        AddressLine1: string
        AddressLine2: string
        Town: string
        StateOrProvince: string
        Postcode: string
        CountryID: number
        Latitude: number
        Longitude: number
        AccessComments: string
        Distance: number
        DistanceUnit: number
    }
}