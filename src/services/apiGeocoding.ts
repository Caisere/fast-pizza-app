const BASED_ADDRESS_URL = import.meta.env.VITE_BASED_ADDRESS_URL;

type getAddressProps = {
    lat: number,
    lng: number
}

export async function getAddress({ lat, lng }: getAddressProps) {
    const res = await fetch(
        `${BASED_ADDRESS_URL}?latitude=${lat}&longitude=${lng}`
    );
    if (!res.ok) throw Error("Failed getting address");

    const data = await res.json();
    return data;
}
