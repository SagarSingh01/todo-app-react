import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Button, Input } from "@heroui/react";
import Modal from './Features/Modal';
import { styles } from './Styles/styles';
import { motion } from 'framer-motion';

function TODOLIST() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // SAVE TODOS
  const [list, setList] = useState(() => {
    const save = localStorage.getItem("Item")
    return save ? JSON.parse(save) : []
  });

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(list))
  }, [list])

  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const [modal, setModal] = useState(null);
  const [indexkey, setIndexkey] = useState(null);

  const completedTasks = list.filter(task => task.completed).length;
  const pendingTasks = list.length - completedTasks;
  const filteredTasks = list.filter(task => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
          ? task.completed
          : !task.completed;

    return matchesSearch && matchesFilter;
  });

  const toDo = () => {
    if (!input.trim()) return setModal("Empty");
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
    if (!input.trim()) return;
    const updated = [...list];
    updated[index].text = input;
    setList(updated);
    setEdit(false);
    setInput("");
  };

  const deleteAll = () => {
    setModal("DeleteAll");
    setList([]);
    localStorage.removeItem("Item");
  }

  const toggleTask = (key) => {
    const updated = [...list];
    updated[key].completed = !updated[key].completed;
    setList(updated);
  };


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.panel} relative`}>

          {/* Header */}
          <div className={styles.header}>
            <div>
              <h1 className={styles.title}>My Tasks</h1>
              <p className={styles.subtitle}>
                Stay focused. Stay productive 🚀
              </p>
            </div>

            {
              list.length !== 0 ? <span className={styles.taskCounter}>{list.length} {list.length === 1 ? "Task" : "Tasks"}</span> : null
            }

          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} border border-cyan-500/20`}>
              <p className="text-cyan-300 text-xs sm:text-sm">Total</p>
              <h2 className="text-lg sm:text-3xl font-bold text-white">
                {list.length}
              </h2>
            </div>

            <div className={`${styles.statCard} border border-yellow-500/20`}>
              <p className="text-yellow-300 text-xs sm:text-sm">Pending</p>
              <h2 className="text-lg sm:text-3xl font-bold text-white">
                {pendingTasks}
              </h2>
            </div>

            <div className={`${styles.statCard} border border-green-500/20`}>
              <p className="text-green-300 text-xs sm:text-sm">Completed</p>
              <h2 className="text-lg sm:text-3xl font-bold text-white">
                {completedTasks}
              </h2>
            </div>
          </div>

          {/* Input Section */}
          <div className={styles.inputSection}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              className={styles.input}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  edit
                    ? input.trim() === ""
                      ? setModal("Empty")
                      : setModal("Save")
                    : toDo();
                }
              }}
            />

            <Button
              onClick={() =>
                input.trim() === ""
                  ? setModal("Empty")
                  : setModal("Save")
              }
              className={edit ? styles.saveButton : styles.addButton}
            >
              {edit ? "Save Task" : "Add Task"}
            </Button>

            <Button
              onClick={() => {
                if (list.length === 0) {
                  setModal("Empty");
                  return;
                }

                setModal("DeleteAll");
              }}
              className={styles.deleteAllButton}
            >
              <span className="sm:block">
                Delete All
              </span>
            </Button>
          </div>

          {/* Filters */}
          <div className={styles.filterContainer}>
            <button
              onClick={() => setFilter("all")}
              className={`${styles.filterButton} ${filter === "all"
                ? "bg-cyan-500 text-black"
                : "bg-white/10 text-white"
                }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("pending")}
              className={`${styles.filterButton} ${filter === "pending"
                ? "bg-yellow-500 text-black"
                : "bg-white/10 text-white"
                }`}
            >
              Pending
            </button>

            <button
              onClick={() => setFilter("completed")}
              className={`${styles.filterButton} ${filter === "completed"
                ? "bg-green-500 text-black"
                : "bg-white/10 text-white"
                }`}
            >
              Completed
            </button>
          </div>

          {/* Empty State */}
          {list.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyEmoji}>🚀</div>

              <h3 className={styles.emptyTitle}>
                No Tasks Yet
              </h3>

              <p className={styles.emptyText}>
                Add your first task and start being productive.
              </p>
            </div>
          ) : (
            <div className={styles.taskList}>
              {
                list.filter((task) => {
                  if (filter === "completed") return task.completed;
                  if (filter === "pending") return !task.completed;
                  return true;
                }).map((li, key) => (
                  <div
                    key={key}
                    className={styles.taskCard}
                  >
                    <div className={styles.taskContent}>
                      <div className={styles.taskLeft}>
                        <input
                          type="checkbox"
                          checked={li.completed}
                          onChange={() => toggleTask(key)}
                          className={styles.checkbox}
                        />

                        <div className="flex-1 min-w-0">
                          <p
                            className={`${styles.taskText} ${li.completed
                              ? styles.completedTask
                              : ""
                              }`}
                          >
                            {li.text}
                          </p>

                          <span
                            className={`${styles.badge} ${li.completed
                              ? "bg-green-500/20 text-green-300"
                              : "bg-yellow-500/20 text-yellow-300"
                              }`}
                          >
                            {li.completed
                              ? "Completed"
                              : "Pending"}
                          </span>
                        </div>
                      </div>

                      <div className={styles.actionIcons}>
                        <button
                          onClick={() => {
                            setModal("Delete");
                            setIndexkey(key);
                          }}
                          className={`${styles.iconButton} bg-red-500/10 hover:bg-red-500/20`}
                        >
                          <MdDelete
                            size={20}
                            className="text-red-400"
                          />
                        </button>

                        <button
                          onClick={() => editList(key)}
                          className={`${styles.iconButton} bg-cyan-500/10 hover:bg-cyan-500/20`}
                        >
                          <FaRegEdit
                            size={18}
                            className="text-cyan-400"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {modal && (
        <Modal
          type={modal}
          onConfirm={() => {
            if (modal === "Delete") deleteList(indexkey);
            if (modal === "Save") saveList();
            if (modal === "DeleteAll") deleteAll();

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
      )}
    </div>
  );
}

export default TODOLIST;