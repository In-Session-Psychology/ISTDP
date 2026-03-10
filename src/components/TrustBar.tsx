import { CheckCircle } from 'lucide-react';

export default function TrustBar() {
  const items = [
    "AHPRA Registered Psychologist",
    "Certified ISTDP Therapist",
    "Medicare & Private Health Rebates",
    "In-Person & Telehealth Available"
  ];

  return (
    <div className="bg-[#1a3a3a] text-white py-5 px-6 md:px-24 flex flex-wrap justify-center gap-8 md:gap-16">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2.5 text-sm tracking-wide opacity-85">
          <CheckCircle size={16} className="opacity-60" />
          {item}
        </div>
      ))}
    </div>
  );
}
