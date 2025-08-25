import GalleryUnit from "./GalleryUnit";
import { MapPin, Globe, Ruler, Wrench, FileText, Users, Calendar } from "lucide-react";

export default function AboutDesktop() {
  return (
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6">
      {/* Business Name */}
      <h2 className="text-2xl font-bold text-gray-900">Attinner Interior Firm</h2>

      {/* About */}
      <p className="text-gray-600 text-sm">
        We believe architecture is a blend of art, science, and environmental care.
      </p>

      {/* Quick Stats */}
      <div className="flex flex-wrap gap-3">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          Estb. 1998
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-500" />
          100+ Employees
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
          💾 152 Saves
        </span>
      </div>

      {/* Location & Reach */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Location & Reach</h3>
        <div className="flex items-start gap-3 text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
          <span>
            2nd Floor, Pushpak 132 Ring Road, Satellite, Ahmedabad,
            Gujarat 380015, India
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Globe className="w-4 h-4 shrink-0" />
          <span>Can do Projects: <strong>Globally</strong></span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Globe className="w-4 h-4 shrink-0" />
          <span>Can do Projects: <strong>Globally</strong></span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Globe className="w-4 h-4 shrink-0" />
          <span>Can do Projects: <strong>Globally</strong></span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Globe className="w-4 h-4 shrink-0" />
          <span>Can do Projects: <strong>Globally</strong></span>
        </div>
      </div>

      {/* Project Capabilities */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Project Capabilities</h3>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Ruler className="w-4 h-4 shrink-0" />
          <span>Min. Project Size: 2000 – 5000 sq.ft.</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Wrench className="w-4 h-4 shrink-0" />
          <span>Renovation Work: True</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <FileText className="w-4 h-4 shrink-0" />
          <span>Project Scope: Lorem Ipsum</span>
        </div>
      </div>
    </div>


  );
}
