import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ViewMoreButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* The button itself */}
      <button
        onClick={() => setOpen(true)}
        className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
      >
        View More
      </button>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-lg z-50"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <h3 className="text-lg font-semibold">About LTDF </h3>
                <button onClick={() => setOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 h-[50vh]">
                <p>This is the bottom sheet content that opens from the "View More" button.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
