import { ArrowRight } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { ImageIcon } from "lucide-react";

export default function Middle() {
  return         <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
          {/* Left big card */}
          <div className="relative bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center col-span-1 aspect-square shadow">
                <img
                    src="\Personal_user\imagesss.png"
                    alt="Bubble"
                    className="w-28 h-28 object-contain"
                />
                <div className="flex flex-row items-center justify-center">
                <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200">
                    Ask Archinza
                </p>
                <div>  <ArrowRight className=" text-gray-500" /></div>

                </div>
                </div>


          {/* Right stacked cards */}
          <div className="grid grid-rows-2 gap-3 h-full">
            {/* Right top card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Business Chats
                </p>
              </div>
              <ArrowRight className="text-gray-500" />
            </div>

            {/* Right bottom card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <ImageIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Saved
                </p>
              </div>
              <ArrowRight className="text-gray-500" />
            </div>
          </div>
        </div>
        ;
}

