
import { MapPin, Phone, ArrowRight } from "lucide-react";

const locations = [
  "Hanumakonda",
  "Warangal",
  "Kazipet",
  "Mulugu",
  "Bhupalpally",
  "Jangaon",
];

export default function Locations() {
  return (
    <section id="locations" className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-blue-700">
            Our Service Areas
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Packers and Movers Across Hanumakonda,
            Warangal and Nearby Areas
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Vinay Packers and Movers provides house shifting,
            office relocation, packing and transportation services
            in Hanumakonda, Warangal and surrounding locations.
            We also offer domestic moving services across India.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div className="rounded-full bg-blue-100 p-3 text-blue-700">
                <MapPin size={22} />
              </div>

              <span className="font-semibold text-slate-800">
                {location}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-blue-800 p-7 text-center text-white sm:p-10">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Planning to Move Anywhere in India?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Contact Vinay Packers and Movers for reliable packing,
            household shifting, office relocation and transportation
            services. Available 24/7.
          </p>

          <a
            href="tel:+919014810179"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
          >
            <Phone size={19} />
            Call Now: +91 9014810179
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
