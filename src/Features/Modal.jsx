import React from "react";

function Modal({ type, onConfirm, onCancel }) {

  const content = {
    Delete: {
      title: "Delete Task",
      message: "Are you sure you want to delete this task?",
      button: "Delete",
      color: "bg-red-500 hover:bg-red-600 cursor-pointer"
    },
    Save: {
      title: "Save Changes",
      message: "Do you want to save changes?",
      button: "Save",
      color: "bg-cyan-500 hover:bg-cyan-600 cursor-pointer"
    },
    Empty: {
      title: "No Tasks",
      message: "Your list is empty. Add a new task 🚀",
      button: "Add Task",
      color: "bg-purple-500 hover:bg-purple-600 cursor-pointer"
    }
  };

  const current = content[type];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">

      {/* Gradient Border */}
      <div className="w-[90%] max-w-md p-px rounded-2xl 
    bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 
    shadow-[0_0_40px_rgba(0,200,255,0.4)]">

        {/* Glass Panel */}
        <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl p-6 text-white text-center
      border border-white/10">

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2 
        bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {current.title}
          </h2>

          {/* Message */}
          <p className="text-gray-300 mb-6 text-sm md:text-base opacity-90">
            {current.message}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">

            {/* Cancel */}
            <button
              onClick={onCancel}
              className="px-5 py-2 rounded-lg bg-white/10 border border-white/20
          hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
          transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Cancel
            </button>

            {/* Confirm */}
            <button
              onClick={onConfirm}
              className={`px-5 py-2 rounded-lg text-white font-semibold
          ${current.color}
          shadow-[0_4px_20px_rgba(0,255,255,0.4)]
          hover:shadow-[0_6px_25px_rgba(0,255,255,0.6)]
          hover:scale-105 active:scale-95
          transition-all duration-300`}
            >
              {current.button}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Modal;