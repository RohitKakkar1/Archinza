import ZohoForm from "./ZohoForm";
import "./ZohoFormF.scss";

export default function FeedbackSection() {
  // You can determine dark mode based on your app's theme state
  // This is a placeholder - replace with your actual dark mode logic
  const isDarkMode = false; // Replace with your dark mode state logic

  return (
    <div className={`feedback-section ${isDarkMode ? "dark" : ""}`}>

      <div className={`feedback-container ${isDarkMode ? "dark" : ""}`}>
        {/* Left Side: Heading & Image */}
        <div className={`left-content ${isDarkMode ? "dark" : ""}`}>
          {/* Heading & Subtext */}
          <div className="heading-section">
            <h1 className={`main-title ${isDarkMode ? "dark" : ""}`}>
              Archinza Feedback Form
            </h1>
            <p className={`subtitle ${isDarkMode ? "dark" : ""}`}>
              Your feedback means a lot to us. It helps us improve and serve you
              better.
            </p>
          </div>

          {/* Image */}
          <img
            src="/payment.png"
            alt="Feedback illustration"
            className="feedback-image"
          />
        </div>

        {/* Right Side: Zoho Form */}
        <div className="form-container">
          <ZohoForm />
        </div>
      </div>
    </div>
  );
}
