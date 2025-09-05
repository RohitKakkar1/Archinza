import ZohoForm from "./ZohoForm"

export default function FeedbackSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-2">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
        
        {/* Left Side: Heading & Image */}
        <div className="flex-1 flex flex-col items-center md:items-start space-y-6">
          {/* Heading & Subtext */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Archinza Feedback Form
            </h1>
            <p className="mt-2 text-gray-600">
              Your feedback means a lot to us. It helps us improve and serve you better.
            </p>
          </div>

          {/* Image */}
          <img
            src="/payment.png"
            alt="Feedback illustration"
            className="w-full max-h-64 object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Zoho Form */}
        <div className="flex-1 w-full">
          <ZohoForm />
        </div>
      </div>
    </div>
  )
}
