import { useEffect, useState } from "react";
import PropertyCard from "@/components/common/PropertyCard";
import { Property } from "@/interfaces";
import api from "./api";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get<Property[]>("/properties");
        setProperties(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="p-4">Loading properties...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
