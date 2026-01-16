import { Property } from "@/interfaces";

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="p-6">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-96 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {property.name}
      </h1>

      <p className="text-xl mt-2">
        ${property.price}
      </p>

      <p className="mt-1 text-gray-600">
        ⭐ {property.rating}
      </p>

      {property.description && (
        <p className="mt-4">{property.description}</p>
      )}
    </div>
  );
};

export default PropertyDetail;
