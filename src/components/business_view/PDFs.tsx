import { FileText, Lock, Download } from "lucide-react";

const jobsData = [
  { title: "Company Profile.pdf", locked: true },
  { title: "Hiring Guidelines.pdf", locked: false },
  { title: "Employee Handbook.pdf", locked: false },
];

const catalogueData = [
  { title: "Job Role - Architect.pdf", locked: false },
  { title: "Job Role - Interior Designer.pdf", locked: true },
  { title: "Job Role - Civil Engineer.pdf", locked: false },
];

export default function PDFs() {
  return (
    <div className="flex flex-col gap-10">
      {/* Firm/Company Profile */}
      <Section
        title="Firm/Company Profile"
        data={jobsData}
      />

      {/* Product Catalogue(s) */}
      <Section
        title="Job Catalogue(s)"
        data={catalogueData}
      />
    </div>
  );
}

function Section({ title, data }: { title: string; data: any[] }) {
  return (
    <div className="border-b pb-6">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {title} <span className="text-gray-400 text-sm">ℹ</span>
        </h2>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 hover:shadow-lg transition"
          >
            {/* PDF Icon (replace with actual PDF preview image if you have one) */}
            {/* PDF Preview Image */}
  <div className="w-50 h-28 rounded-md overflow-hidden bg-gray-100">
    <img
      src="/BusinessView/1.jpg" // 👈 replace with your thumbnail image path
      alt={item.title}
      className="w-full h-full object-cover"
    />
  </div>

            {/* Title */}
            <p className="text-sm font-medium text-center text-gray-700 line-clamp-2">
              {item.title}
            </p>

            {/* Actions */}
            <div className="absolute top-3 right-3 text-gray-500">
              {item.locked ? <Lock className="w-4 h-4" /> : null}
            </div>
            <button className="absolute bottom-3 right-3 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
