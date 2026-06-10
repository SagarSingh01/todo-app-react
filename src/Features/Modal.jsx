import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Modal({ type, onConfirm, onCancel }) {
  const content = {
    Delete: {
      title: "Delete Task",
      message: "Are you sure you want to delete this task?",
      button: "Delete",
      color: "bg-red-500 hover:bg-red-600"
    },
    DeleteAll: {
      title: "Delete All Tasks",
      message: "This action cannot be undone.",
      button: "Delete All",
      color: "bg-red-700 hover:bg-red-800"
    },
    Save: {
      title: "Save Changes",
      message: "Do you want to save changes?",
      button: "Save",
      color: "bg-cyan-500 hover:bg-cyan-600"
    },
    Empty: {
      title: "No Tasks",
      message: "Add a task first 🚀",
      button: "OK",
      color: "bg-purple-500 hover:bg-purple-600"
    }
  };

  const current = content[type];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        {/* MODAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{
            type: "tween",
            duration: 0.18,
            ease: "easeOut"
          }}
          className="w-[90%] max-w-md p-px rounded-2xl 
          bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500
          shadow-lg"
        >
          {/* INNER CARD */}
          <div className="bg-[#0f172a]/95 rounded-2xl p-6 text-center text-white border border-white/10">

            {/* TITLE */}
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-blue-400">
              {current.title}
            </h2>

            {/* MESSAGE */}
            <p className="text-gray-300 mb-5 text-sm md:text-base">
              {current.message}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-3 justify-center">

              <button
                onClick={onCancel}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              >
                Cancel
              </button>

              <button
                onClick={onConfirm}
                className={`px-4 py-2 rounded-lg text-white font-semibold transition ${current.color}`}
              >
                {current.button}
              </button>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;