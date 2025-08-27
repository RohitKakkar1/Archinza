import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown, Upload, Search, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ThankYou(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30">
            <svg
              className="w-7 h-7 text-green-600 dark:text-green-300"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold text-gray-900 dark:text-white">
            🎉 Congratulations!
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            You've upgraded to the{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Supporter Plan
            </span>
            .
          </p>
        </div>

        {/* Benefits Accordion */}
        <div className="mt-6 space-y-2">
          <Disclosure>
            {({ open }) => (
              <div className="border rounded-lg overflow-hidden">
                <Disclosure.Button className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <Upload className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                        5× Upload Capacity
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        More storage & autofetch
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      open ? "rotate-180" : ""
                    } text-gray-500`}
                    aria-hidden
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 py-3 bg-gray-50 dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300">
                  More storage. More auto-fetched data. More credibility — minus
                  the manual effort.
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <div className="border rounded-lg overflow-hidden">
                <Disclosure.Button className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                        Smarter Discovery • Wider Reach
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Intelligent text + image search
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      open ? "rotate-180" : ""
                    } text-gray-500`}
                    aria-hidden
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 py-3 bg-gray-50 dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300">
                  Get matched through intelligent text + image search. Be seen
                  by the right clients, faster.
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <div className="border rounded-lg overflow-hidden">
                <Disclosure.Button className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                        Control Your Visibility
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Share only with chosen audiences
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      open ? "rotate-180" : ""
                    } text-gray-500`}
                    aria-hidden
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 py-3 bg-gray-50 dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300">
                  Want to stay public but hide from competitors? Share only with
                  audiences you choose.
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/wriver-edit")}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Continue to Edit
          </button>
        </div>
      </div>
    </div>
  );
}
