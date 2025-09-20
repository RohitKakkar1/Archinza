import { motion, AnimatePresence } from "framer-motion";

export default function SidePanel({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 border-r"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={onClose} className="text-gray-600">×</button>
          </div>

          {/* Panel Content */}
          <div className="h-[calc(100%-4rem)] overflow-y-auto p-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
