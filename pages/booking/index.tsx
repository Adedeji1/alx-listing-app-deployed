import axios from "axios";
import { useState } from "react";
import { BookingData } from "@/interfaces";

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const validateForm = (): boolean => {
    for (const key in formData) {
      if (!formData[key as keyof BookingData]) {
        setError("All fields are required.");
        return false;
      }
    }

    if (!formData.email.includes("@")) {
      setError("Invalid email address.");
      return false;
    }

    if (formData.cardNumber.length < 12) {
      setError("Invalid card number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    setSuccess(false);

    if (!validateForm()) return;

    setLoading(true);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (err) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-600">Booking confirmed successfully!</p>
      )}
    </form>
  );
}
