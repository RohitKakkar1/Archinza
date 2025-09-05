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
<meta charset="UTF-8">
<title>Support Form</title>
<style>
  body {
    font-family: "Segoe UI", Arial, sans-serif;
    background: #f7f9fc;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
  }

  #zohoSupportWebToCase {
    width: 100%;
    max-width: 650px;
  }

  .zsFormClass {
    width: 100%;
    background: #fff;
    border-radius: 12px;
    padding: 25px 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    border: 1px solid #e5eaf0;
  }

  .zsFormClass strong {
    font-size: 20px;
    color: #1f2937;
    display: block;
    margin-bottom: 15px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    padding: 12px 8px;
    vertical-align: middle;
  }

  td:first-child {
    font-weight: 500;
    color: #111827;
    width: 35%;
    white-space: nowrap;
  }

  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 10px 12px;
    font-size: 14px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    transition: border 0.2s ease, box-shadow 0.2s ease;
    background: #f9fafb;
  }

  input[type="text"]:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    background: #fff;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  .manfieldbdr {
    border-left: 3px solid #ef4444 !important;
  }

  .form-actions {
    text-align: center;
    margin-top: 15px;
  }

  input[type="submit"],
  input[type="button"] {
    background: #2563eb;
    color: #fff;
    font-size: 14px;
    padding: 10px 22px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 8px;
    transition: background 0.2s ease;
  }

  input[type="button"] {
    background: #6b7280;
  }

  input[type="submit"]:hover {
    background: #1e40af;
  }

  input[type="button"]:hover {
    background: #4b5563;
  }

  .wb_FtCon {
    margin-top: 25px;
    text-align: center;
    font-size: 12px;
    color: #6b7280;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wb_logo {
    margin-left: 5px;
    height: 16px;
    opacity: 0.7;
  }

  /* Mobile optimization */
  @media (max-width: 640px) {
    body {
      padding: 10px;
    }

    .zsFormClass {
      padding: 20px 15px;
    }

    td {
      display: block;
      width: 100% !important;
      padding: 8px 0;
    }

    td:first-child {
      margin-bottom: 6px;
      display: block;
      font-size: 14px;
    }

    input[type="text"],
    select,
    textarea {
      font-size: 15px;
    }

    .form-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    input[type="submit"],
    input[type="button"] {
      width: 100%;
      margin: 0;
    }
  }
</style>
</head>
<body>
<div id='zohoSupportWebToCase' align='center'>
  <!-- form kept exactly the same -->
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
    <input type="hidden" id="dependent_field_values_Cases" value="{}"/>
    <input type='hidden' name='returnURL' value='https://archinza-ai.vercel.app/'/>

    <table border='0' cellspacing='0' class='zsFormClass'>
      <tr>
        <td colspan='2'><strong>Submit a Ticket</strong></td>
      </tr>

      <tr>
        <td>First Name</td>
        <td><input type='text' maxlength='120' name='First Name'/></td>
      </tr>

      <tr>
        <td>Last Name</td>
        <td><input type='text' maxlength='120' name='Contact Name' class='manfieldbdr'/></td>
      </tr>

      <tr>
        <td>Email</td>
        <td><input type='text' maxlength='120' name='Email' class='manfieldbdr'/></td>
      </tr>

      <tr>
        <td>Pick a topic</td>
        <td>
          <select name='Classification' onchange="setDependent(this, false)">
            <option value=''>-None-</option>
            <option value='Response Quality/ Accuracy on Bot'>Response Quality/ Accuracy on Bot</option>
            <option value='Onboarding and Account'>Onboarding and Account</option>
            <option value='Suggested Features to add'>Suggested Features to add</option>
            <option value='Others'>Others</option>
          </select>
        </td>
      </tr>

      <tr>
        <td>Subject</td>
        <td><input type='text' maxlength='255' name='Subject' class='manfieldbdr'/></td>
      </tr>

      <tr>
        <td>Description</td>
        <td><textarea name='Description' maxlength='3000'></textarea></td>
      </tr>

      <tr>
        <td colspan='2' class="form-actions">
          <input type='submit' id="zsSubmitButton_208602000000300007" value='Submit'>
          <input type='button' value='Reset' onclick="zsResetWebForm('208602000000300007')">
        </td>
      </tr>

      <tr>
        <td colspan='2'>
          <div class='wb_FtCon'>
            <span>Powered by</span>
            <a target='_blank' rel='noopener noreferrer' href='https://zoho.in/desk'>
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
