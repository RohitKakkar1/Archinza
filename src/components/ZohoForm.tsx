"use client";
import React, { useEffect } from "react";

export default function ZohoForm() {
  useEffect(() => {
    // Load Zoho Desk script dynamically
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        dangerouslySetInnerHTML={{
          __html: `
<!DOCTYPE html>
<html>
<head>
<META HTTP-EQUIV='content-type' CONTENT='text/html; charset=UTF-8'>
<style>
  /* ✅ You can keep Zoho’s CSS */
  #zohoSupportWebToCase textarea, 
  #zohoSupportWebToCase input[type='text'], 
  #zohoSupportWebToCase input[type='date'], 
  #zohoSupportWebToCase select, 
  .wb_common { width: 280px; }

  #zohoSupportWebToCase td { padding: 11px 5px; }
  #zohoSupportWebToCase textarea, 
  #zohoSupportWebToCase input[type='text'], 
  #zohoSupportWebToCase input[type='date'], 
  #zohoSupportWebToCase select {
    border: 1px solid #ddd;
    padding: 3px 5px;
    border-radius: 3px;
  }

  .zsFormClass {
    background-color: #fff;
    width: 600px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  }
</style>
</head>
<body>
  <!-- ✅ Your full Zoho form HTML -->
  <div id='zohoSupportWebToCase' align='center'>
    <form name='zsWebToCase_208602000000300007' 
          id='zsWebToCase_208602000000300007' 
          action='https://desk.zoho.in/support/WebToCase' 
          method='POST' 
          onSubmit='return zsValidateMandatoryFields()' 
          enctype='multipart/form-data'>
      
      <input type='hidden' name='xnQsjsdp' value='edbsnf444fb3f21df1fab1f3f201cc2fb74bc'/>
      <input type='hidden' name='xmIwtLD' value='edbsn47a9f25ae6ed595cd86df7631eb5171e5150438d4228252a2aef6ea9f68c8208'/>
      <input type='hidden' name='xJdfEaS' value=''/>
      <input type='hidden' name='actionType' value='Q2FzZXM='/>
      <input type="hidden" id="property(module)" value="Cases"/>
      <input type="hidden" id="dependent_field_values_Cases" value='{"JSON_VALUES":{},"JSON_SELECT_VALUES":{},"JSON_MAP_DEP_LABELS":[]}'/>
      <input type='hidden' name='returnURL' value='https://archinza-ai.vercel.app/'/>

      <table border='0' cellspacing='0' class='zsFormClass'>
        <tr><td colspan='2' class='zsFontClass'><strong>Web Form</strong></td></tr>
        
        <tr>
          <td nowrap class='zsFontClass'>First Name&nbsp;&nbsp;</td>
          <td><input type='text' maxlength='120' name='First Name'/></td>
        </tr>

        <tr>
          <td nowrap class='zsFontClass'>Last Name&nbsp;&nbsp;</td>
          <td><input type='text' maxlength='120' name='Contact Name' class='manfieldbdr'/></td>
        </tr>

        <tr>
          <td nowrap class='zsFontClass'>Email&nbsp;&nbsp;</td>
          <td><input type='text' maxlength='120' name='Email' class='manfieldbdr'/></td>
        </tr>

        <tr>
          <td nowrap class='zsFontClass'>Pick a topic&nbsp;&nbsp;</td>
          <td>
            <select name='Classification' id='Classification'>
              <option value=''>-None-</option>
              <option value='Response Quality/ Accuracy on Bot'>Response Quality/ Accuracy on Bot</option>
              <option value='Onboarding and Account'>Onboarding and Account</option>
              <option value='Suggested Features to add'>Suggested Features to add</option>
              <option value='Others'>Others</option>
            </select>
          </td>
        </tr>

        <tr>
          <td nowrap class='zsFontClass'>Subject&nbsp;&nbsp;</td>
          <td><input type='text' maxlength='255' name='Subject' class='manfieldbdr'/></td>
        </tr>

        <tr>
          <td nowrap class='zsFontClass'>Description&nbsp;&nbsp;</td>
          <td><textarea name='Description' maxlength='3000'></textarea></td>
        </tr>

        <tr>
          <td colspan='2' align='center'>
            <input type='submit' id="zsSubmitButton_208602000000300007" value='Submit'/>
            &nbsp;&nbsp;
            <input type='button' value='Reset' onclick="zsResetWebForm('208602000000300007')"/>
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <div class='wb_FtCon wb_common'>
              <span>powered by</span>
              <a target='_blank' href='https://zoho.in/desk' class='wb_logoCon'>
                <img class='wb_logo' src='https://img.zohostatic.in/support/app/images/portalLogo.de847024ebc0131731a3.png'/>
              </a>
            </div>
          </td>
        </tr>
      </table>
    </form>
  </div>
</body>
</html>
          `,
        }}
      />
    </div>
  );
}
