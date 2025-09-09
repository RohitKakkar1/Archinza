import { useEffect, useState } from "react";
import "./ZohoForm.scss";

export default function ZohoForm() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // run on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Custom submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // stop normal form submission

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Post to Zoho WebToCase
      await fetch("https://desk.zoho.in/support/WebToCase", {
        method: "POST",
        body: formData,
      });

      // Instantly redirect to your return URL (skips Zoho's "thank you" page)
      window.location.href = "https://archinza-ai.vercel.app/";
    } catch (err) {
      console.error("Zoho form submission failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="zohoSupportWebToCase" className="zoho-form-container">
      <form
        name="zsWebToCase_208602000000300007"
        id="zsWebToCase_208602000000300007"
        method="POST"
        encType="multipart/form-data"
        className="zoho-form"
        onSubmit={handleSubmit}
      >
        {/* Hidden fields (important for Zoho Desk) */}
        <input
          type="hidden"
          name="xnQsjsdp"
          value="edbsnf444fb3f21df1fab1f3f201cc2fb74bc"
        />
        <input
          type="hidden"
          name="xmIwtLD"
          value="edbsn47a9f25ae6ed595cd86df7631eb5171e5150438d4228252a2aef6ea9f68c8208"
        />
        <input type="hidden" name="xJdfEaS" value="" />
        <input type="hidden" name="actionType" value="Q2FzZXM=" />
        <input type="hidden" id="property(module)" value="Cases" />
        <input
          type="hidden"
          id="dependent_field_values_Cases"
          value='{"JSON_VALUES":{},"JSON_SELECT_VALUES":{},"JSON_MAP_DEP_LABELS":[]}'
        />
        <input
          type="hidden"
          name="returnURL"
          value="https://archinza-ai.vercel.app/"
        />

        {/* Desktop Layout (table) */}
        {!isMobile && (
          <table
            className="zoho-table zsFormClass"
            cellSpacing="0"
            cellPadding="8"
          >
            <tbody>
              <tr>
                <td className="table-cell label-cell zsFontClass">Name</td>
                <td className="table-cell input-cell">
                  <input
                    type="text"
                    maxLength="120"
                    name="Contact Name"
                    placeholder="Enter your name"
                    className="form-input"
                  />
                </td>
              </tr>
              <tr>
                <td className="table-cell label-cell zsFontClass">Phone</td>
                <td className="table-cell input-cell">
                  <input
                    type="text"
                    maxLength="120"
                    name="Phone"
                    placeholder="Enter your phone number"
                    className="form-input"
                  />
                </td>
              </tr>
              <tr>
                <td className="table-cell label-cell zsFontClass">Email</td>
                <td className="table-cell input-cell">
                  <input
                    type="text"
                    maxLength="120"
                    name="Email"
                    placeholder="Enter your email"
                    className="form-input"
                  />
                </td>
              </tr>
              <tr>
                <td className="table-cell label-cell zsFontClass">
                  Pick a topic
                </td>
                <td className="table-cell input-cell">
                  <select
                    name="Classification"
                    id="Classification"
                    className="form-select"
                  >
                    <option value="">-None-</option>
                    <option value="Response Quality/ Accuracy on Bot">
                      Response Quality/ Accuracy on Bot
                    </option>
                    <option value="Onboarding and Account">
                      Onboarding and Account
                    </option>
                    <option value="Suggested Features to add">
                      Suggested Features to add
                    </option>
                    <option value="Others">Others</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="table-cell label-cell zsFontClass">Subject</td>
                <td className="table-cell input-cell">
                  <input
                    type="text"
                    maxLength="255"
                    name="Subject"
                    placeholder="Enter the subject"
                    className="form-input"
                  />
                </td>
              </tr>
              <tr>
                <td className="table-cell label-cell zsFontClass">
                  Description
                </td>
                <td className="table-cell input-cell">
                  <textarea
                    name="Description"
                    maxLength="3000"
                    placeholder="Enter a detailed description"
                    className="form-textarea"
                  />
                </td>
              </tr>
              <tr>
                <td className="table-cell submit-cell" colSpan="2">
                  <input
                    type="submit"
                    value="Submit"
                    className="submit-button"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <div className="mobile-form">
            <input
              type="text"
              name="Contact Name"
              maxLength="120"
              placeholder="Enter your name"
              className="mobile-input"
            />

            <input
              type="text"
              name="Phone"
              maxLength="120"
              placeholder="Enter your phone number"
              className="mobile-input"
            />

            <input
              type="text"
              name="Email"
              maxLength="120"
              placeholder="Enter your email"
              className="mobile-input"
            />

            <select
              name="Classification"
              id="Classification"
              className="mobile-select"
            >
              <option value="">Pick a topic</option>
              <option value="Response Quality/ Accuracy on Bot">
                Response Quality/ Accuracy on Bot
              </option>
              <option value="Onboarding and Account">
                Onboarding and Account
              </option>
              <option value="Suggested Features to add">
                Suggested Features to add
              </option>
              <option value="Others">Others</option>
            </select>

            <input
              type="text"
              name="Subject"
              maxLength="255"
              placeholder="Enter the subject"
              className="mobile-input"
            />

            <textarea
              name="Description"
              maxLength="3000"
              placeholder="Enter a detailed description"
              className="mobile-textarea"
            />

            <button type="submit" className="mobile-submit-button">
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
