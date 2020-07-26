export interface Address {
    description?: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    addressID?: string;
    placeID?: string;
    addressStatus?: 'GEOCODED' | 'PROVISIONED';
    lattitude: number;
    longitude: number;
}
