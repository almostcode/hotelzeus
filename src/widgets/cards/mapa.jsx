import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const MapSection = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'TU_API_KEY', // Reemplaza con tu clave
  });

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <div className="w-full h-[400px]">
        <iframe
        className=''

        title="Mapa del hotel"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246.57226445308902!2d-71.15781229419312!3d8.580973205391105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1737715310338!5m2!1ses!2sve"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    
      
    </div>
  );
};

export default MapSection;