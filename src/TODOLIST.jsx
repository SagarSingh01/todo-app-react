import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Button, Input } from "@heroui/react";
import Modal from './Features/Modal';

function TODOLIST() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const [modal, setModal] = useState(null);
  const [indexkey, setIndexkey] = useState(null);

  const toDo = () => {
    if (input.trim() === "") return setModal("Empty");
    setList([...list, { text: input, completed: false }]);
    setInput("");
  };

  const deleteList = (key) => {
    setList(list.filter((_, i) => i !== key));
  };

  const editList = (key) => {
    setEdit(true);
    setInput(list[key].text);
    setIndex(key);
  };

  const saveList = () => {
    if (input.trim() === "") return;
    const updated = [...list];
    updated[index].text = input;
    setList(updated);
    setEdit(false);
    setInput("");
  };

  const toggleTask = (key) => {
    const updated = [...list];
    updated[key].completed = !updated[key].completed;
    setList(updated);
  };


  return (
    <div className="min-h-screen flex items-center justify-center p-6
                bg-[linear-gradient(135deg,#0a0f33,#1b1f4a,#0a0f33)]">
      {/* Gradient Border Frame */}
      <div className="w-full max-w-3xl p-px rounded-3xl bg-[linear-gradient(90deg,#00ffff,#5e00ff,#ff00ff)] shadow-2xl">
        {/* Glass Panel */}
        <div className="bg-black/60 backdrop-blur-3xl rounded-3xl border border-white/10 p-6 md:p-8 relative">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-3 md:gap-0">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center md:text-left">
              My Tasks
            </h1>
            {/* Neon Task Count */}
            {
              list.length !== 0 ? <span className="text-sm md:text-base font-bold 
                 bg-[linear-gradient(90deg,#00ffff,#5e00ff,#ff00ff)] 
                 bg-clip-text text-transparent
                 px-4 py-2 rounded-full
                 shadow-[0_4px_20px_rgba(0,255,255,0.5)]
                 hover:shadow-[0_6px_25px_rgba(0,255,255,0.7)]
                 transition-all duration-300">
                {list.length} {list.length === 1 ? "task" : "tasks"}
              </span> : null
            }
          </div>

          {/* Input Section */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 w-full items-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (edit) {
                    input.trim() === "" ? setModal("Empty") : setModal("Save");
                  }
                  else {
                    toDo();
                  }
                }
              }}
              placeholder="Add your task here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 w-full bg-white/10 border border-white/20 hover:border-cyan-400 
                     focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-xl 
                     px-4 py-3 text-lg md:text-xl text-white placeholder:text-gray-400 transition-all"
            />

            {edit ? (
              <Button
                onClick={() => {
                  if (input.trim() === "") {
                    setModal("Empty");
                  }
                  else {
                    setModal("Save");
                  }
                }}
                className="bg-[linear-gradient(115deg,#00f5ff,#0a001f,#7b2cff,#ff00ff)] 
             text-white font-bold px-8 py-2 md:px-10 md:py-3 rounded-xl cursor-pointer
             shadow-[0_4px_15px_rgba(0,255,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,255,0.6)] 
             hover:scale-105 active:scale-95 transition-all duration-300 text-2xl md:text-xl w-full sm:w-auto"
              >
                Save
              </Button>
            ) : (
              <Button
                onClick={toDo}
                className="bg-[linear-gradient(90deg,#00ffff,#5e00ff,#ff00ff)] 
             text-white font-bold px-8 py-2 md:px-10 md:py-3 rounded-xl cursor-pointer
             shadow-[0_4px_15px_rgba(0,255,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,255,0.6)] 
             hover:scale-105 active:scale-95 transition-all duration-300 text-2xl md:text-xl w-full sm:w-auto"
              >
                Add
              </Button>
            )}
          </div>

          {/* Empty State */}
          {list.length === 0 && (
            <div className="text-center py-8 text-gray-400 text-base md:text-lg border border-dashed border-white/20 rounded-xl">
              No tasks yet. Add your first task ✨
            </div>
          )}

          {/* Task List */}
          <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
            {list.map((li, key) => (
              <div
                key={key}
                className="flex items-center justify-between px-4 py-3 rounded-xl 
                       bg-white/10 border border-white/20 hover:bg-white/20 
                       hover:shadow-md transition-all"
              >
                <div className="flex gap-3 items-center">
                  <span className="text-cyan-400 font-semibold text-xl md:text-2xl">
                    <input type="checkbox"
                      className="w-5 h-5 accent-cyan-400 cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95"
                      checked={li.completed}
                      onChange={() => toggleTask(key)}
                    />
                  </span>
                  <span className={`text-white text-base md:text-2xl ${li.completed ? "line-through opacity-50" : ""
                    }`}>
                    {li.text}
                  </span>
                </div>

                {/*Features*/}
                <div className="flex gap-3 items-center">
                  <MdDelete
                    size={40}
                    onClick={() => {
                      setModal("Delete");
                      setIndexkey(key);
                    }}
                    className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-red-500/20 
                           rounded-full p-1 transition-all duration-300 active:scale-95 shadow-sm"
                  />
                  <FaRegEdit
                    size={35}
                    onClick={() => editList(key)}
                    className="cursor-pointer text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20 
                           rounded-full p-1 transition-all duration-300 active:scale-95 shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}

      {
        modal && <Modal
          type={modal}
          onConfirm={() => {
            if (modal === "Delete") deleteList(indexkey);
            if (modal === "Save") saveList(indexkey);
            if (modal === "Empty") setModal(null);

            setModal(null);
          }}

          onCancel={() => {
            setModal(null);

            if (modal === "Save") {
              setEdit(false);
              setInput("");
            }
          }}
        />
      }

    </div>
  );
}

export default TODOLIST;