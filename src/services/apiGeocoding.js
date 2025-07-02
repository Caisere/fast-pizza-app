const BASED_ADDRESS_URL = import.meta.env.VITE_BASED_ADDRESS_URL;

export async function getAddress({ latitude, longitude }) {
    const res = await fetch(
        `${BASED_ADDRESS_URL}?latitude=${latitude}&longitude=${longitude}`
    );
    if (!res.ok) throw Error("Failed getting address");

    const data = await res.json();
    return data;
}
