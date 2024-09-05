import * as Location from "expo-location";

// Función para obtener dirección a partir de coordenadas
export const getAddressFromCoordinates = async (coords) => {
    try {
        const geocode = await Location.reverseGeocodeAsync(coords);
        if (geocode.length > 0) {
            const { street, city, region, postalCode } = geocode[0];
            return `${street}, ${city}, ${region} ${postalCode}`;
        }
    } catch (error) {
        console.error("Error al obtener la dirección:", error);
        return null;
    }
};

// Función para manejar el arrastre del marcador
export const handleMarkerDragEnd = async (e, setCoords, setAddress) => {
    try {
        const newCoords = e.nativeEvent.coordinate;
        setCoords(newCoords);
        const newAddress = await getAddressFromCoordinates(newCoords);
        setAddress(newAddress);
    } catch (error) {
        console.error("Error al actualizar el marcador:", error);
    }
};

// Función para buscar una dirección por texto
export const handleSearch = async (text, setCoords, mapRef, setAddress) => {
    if (text.trim().length > 0) {
        try {
            const geocode = await Location.geocodeAsync(text);
            if (geocode.length > 0) {
                const { latitude, longitude } = geocode[0];
                const newCoords = {
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                };
                setCoords(newCoords);
                const newAddress = await getAddressFromCoordinates(newCoords);
                setAddress(newAddress);
                mapRef.current.animateToRegion(newCoords, 1000);
            }
        } catch (error) {
            console.error("Error al buscar la ubicación:", error);
        }
    }
};

// Función para seleccionar una dirección desde el mapa
export const handleMapPress = async (e, setSelectedAddress, toggleModal, setMapClicked) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    try {
        const geocode = await Location.reverseGeocodeAsync({
            latitude,
            longitude,
        });

        if (geocode.length > 0) {
            const { street, city, region, postalCode } = geocode[0];
            const address = `${street}, ${city}, ${region} ${postalCode}`;

            setSelectedAddress(address);
            toggleModal();
        }
    } catch (error) {
        console.error("Error al obtener la dirección:", error);
    }
    setMapClicked(true);
};
