
import React from "react";

export interface TherapistCardProps {
  therapist: {
    name: string;
    image: string;
    role: string;
    qualifications: string;
    specialties: string[];
    bio: string;
  };
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="w-20 h-20 rounded-full bg-wellness-100 mx-auto mb-4 overflow-hidden">
          <img src={therapist.image} alt={therapist.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-1">{therapist.name}</h3>
        <p className="text-wellness-500 text-center mb-3">{therapist.role}</p>
        <p className="text-sm text-gray-600 text-center mb-4">{therapist.qualifications}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {therapist.specialties.map((specialty, index) => (
              <span key={index} className="bg-wellness-50 text-wellness-600 text-xs px-3 py-1 rounded-full">
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-sm text-gray-700">{therapist.bio}</p>
      </div>
    </div>
  );
};

export default TherapistCard;
