"use client";
import React from "react";

export default function ZohoForm() {
  return (
    <div className="w-full flex justify-center px-4">
      <form
        name="zsWebToCase_208602000000300007"
        id="zsWebToCase_208602000000300007"
        action="https://desk.zoho.in/support/WebToCase"
        method="POST"
        encType="multipart/form-data"
        className="w-full max-w-lg bg-white rounded-xl shadow-md border border-gray-200 p-6 space-y-4"
      >
        {/* Hidden Fields */}
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
          value="{}"
        />
        <input
          type="hidden"
          name="returnURL"
          value="https://archinza-ai.vercel.app/"
        />

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-900 text-center">
          Submit a Ticket
        </h2>

        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="First Name"
            maxLength={120}
            className="mt-1 w-full rounded-md border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Contact Name"
            maxLength={120}
            className="mt-1 w-full rounded-md border-l-4 border-red-500 border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="Email"
            maxLength={120}
            className="mt-1 w-full rounded-md border-l-4 border-red-500 border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Classification */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pick a topic
          </label>
          <select
            name="Classification"
            className="mt-1 w-full rounded-md border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Subject"
            maxLength={255}
            className="mt-1 w-full rounded-md border-l-4 border-red-500 border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="Description"
            maxLength={3000}
            className="mt-1 w-full rounded-md border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            rows={4}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            type="reset"
            className="w-full sm:w-auto rounded-md bg-gray-500 px-4 py-2 text-white text-sm font-medium hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-xs text-gray-500 flex justify-center items-center">
          <span>Powered by</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://zoho.in/desk"
          >
            <img
              src="https://img.zohostatic.in/support/app/images/portalLogo.de847024ebc0131731a3.png"
              alt="Zoho Desk"
              className="ml-2 h-4 opacity-70"
            />
          </a>
        </div>
      </form>
    </div>
  );
}
