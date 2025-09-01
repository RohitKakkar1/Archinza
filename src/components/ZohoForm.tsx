import React, { useEffect } from "react";

export default function ZohoForm() {
  useEffect(() => {
    // load Zoho's extra script (needed for validation, dependencies etc.)
    const script = document.createElement("script");
    script.src =
      "https://js.zohostatic.in/support/app/js/jqueryandencoder.ef05974972bf3bca1b87.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <!-- START Zoho Desk Web Form -->
          <div id='zohoSupportWebToCase' align='center'>
            <form
              name='zsWebToCase_208602000000300007'
              id='zsWebToCase_208602000000300007'
              action='https://desk.zoho.in/support/WebToCase'
              method='POST'
              enctype='multipart/form-data'
            >
              <input type='hidden' name='xnQsjsdp' value='edbsnf444fb3f21df1fab1f3f201cc2fb74bc'/>
              <input type='hidden' name='xmIwtLD' value='edbsn47a9f25ae6ed595cd86df7631eb5171e5150438d4228252a2aef6ea9f68c8208'/>
              <input type='hidden' name='xJdfEaS' value=''/>
              <input type='hidden' name='actionType' value='Q2FzZXM='/>
              <input type="hidden" id="property(module)" value="Cases"/>
              <input type='hidden' name='returnURL' value='https://archinza-ai.vercel.app/ticket-submitted'/>

              <table border='0' cellspacing='0' class='zsFormClass'>
                <tr>
                  <td colspan='2'><strong>Submit a Ticket</strong></td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td><input type='text' maxlength='120' name='Contact Name' required/></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><input type='email' maxlength='120' name='Email' required/></td>
                </tr>
                <tr>
                  <td>Classification</td>
                  <td>
                    <select name='Classification'>
                      <option value=''>-None-</option>
                      <option value='Question'>Question</option>
                      <option value='Problem'>Problem</option>
                      <option value='Feature'>Feature</option>
                      <option value='Others'>Others</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Subject</td>
                  <td><input type='text' maxlength='255' name='Subject' required/></td>
                </tr>
                <tr>
                  <td colspan='2' align='center'>
                    <input type='submit' value='Submit'/>
                    &nbsp;
                    <input type='reset' value='Reset'/>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <!-- END Zoho Desk Web Form -->
        `,
      }}
    />
  );
}
