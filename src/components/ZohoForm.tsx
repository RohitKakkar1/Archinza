import { useEffect, useState } from "react";

export default function ZohoForm() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // run on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Load external Zoho scripts dynamically
    const jqueryScript = document.createElement("script");
    jqueryScript.src =
      "https://js.zohostatic.in/support/app/js/jqueryandencoder.ef05974972bf3bca1b87.js";
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    const zohoScript = document.createElement("script");
    zohoScript.innerHTML = `
      // paste Zoho helper functions here if needed (zsValidateMandatoryFields etc.)
    `;
    document.body.appendChild(zohoScript);

    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(zohoScript);
    };
  }, []);

  return (
    <div id="zohoSupportWebToCase" align="center">
      <form
        name="zsWebToCase_208602000000300007"
        id="zsWebToCase_208602000000300007"
        action="https://desk.zoho.in/support/WebToCase"
        method="POST"
        onSubmit={() => window.zsValidateMandatoryFields?.()}
        encType="multipart/form-data"
        style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}
      >
        {/* Hidden fields */}
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
            className="zsFormClass"
            cellSpacing="0"
            cellPadding="8"
            style={{ borderCollapse: "separate", width: "100%" }}
          >
            <tbody>

              <tr>
                <td className="zsFontClass" width="25%">
                  Name
                </td>
                <td width="75%">
                  <input
                    type="text"
                    maxLength="120"
                    name="Contact Name"
                    placeholder="Enter your name"
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "6px 10px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="zsFontClass">Phone</td>
                <td width="75%">
                  <input
                    type="text"
                    maxLength="120"
                    name="Phone"
                    placeholder="Enter your phone number"
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "6px 10px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="zsFontClass">Email</td>
                <td width="75%">
                  <input
                    type="text"
                    maxLength="120"
                    name="Email"
                    placeholder="Enter your email"
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "6px 10px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="zsFontClass">Pick a topic</td>
                <td>
                  <select
                    name="Classification"
                    id="Classification"
                    onChange={(e) => window.setDependent?.(e.target, false)}
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "6px 10px",
                    }}
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
                <td className="zsFontClass">Subject</td>
                <td width="75%">
                  <input
                    type="text"
                    maxLength="255"
                    name="Subject"
                    placeholder="Enter the subject"
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "6px 10px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="zsFontClass">Description</td>
                <td width="75%">
                  <textarea
                    name="Description"
                    maxLength="3000"
                    placeholder="Enter a detailed description"
                    style={{
                      width: "100%",
                      minHeight: "96px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "8px 10px",
                      resize: "vertical",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <input
                    type="submit"
                    value="Submit"
                    style={{
                      background: "#014FE0",
                      color: "#fff",
                      border: "none",
                      borderRadius: "24px",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Mobile Layout (stacked) */}
        {isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              textAlign: "left",
            }}
          >
            <input
              type="text"
              name="Contact Name"
              maxLength="120"
              placeholder="Enter your name"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
            />

            <input
              type="text"
              name="Phone"
              maxLength="120"
              placeholder="Enter your phone number"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
            />

            <input
              type="text"
              name="Email"
              maxLength="120"
              placeholder="Enter your email"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
            />

            <select
              name="Classification"
              id="Classification"
              onChange={(e) => window.setDependent?.(e.target, false)}
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
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
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
            />

            <textarea
              name="Description"
              maxLength="3000"
              placeholder="Enter a detailed description"
              style={{
                width: "100%",
                minHeight: "120px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#014FE0",
                color: "#fff",
                border: "none",
                borderRadius: "24px",
                padding: "12px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
