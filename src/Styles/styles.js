export const styles = {
    // Main Layout
    container:
        "min-h-screen bg-[linear-gradient(135deg,#050816,#0a0f33,#121a52,#050816)] p-2 sm:p-4 md:p-6 flex items-center justify-center",

    wrapper:
        "w-full max-w-6xl rounded-3xl p-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-[0_0_60px_rgba(168,85,247,0.25)]",

    panel:
        "relative rounded-3xl bg-black/60 backdrop-blur-3xl border border-white/10 p-4 sm:p-6 md:p-8 overflow-hidden",

    // Header
    header:
        "relative flex flex-col items-center text-center gap-3 mb-8 pb-6 border-b border-white/10",

    title:
        "text-4xl leading-tight sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight",

    subtitle:
        "text-gray-400 text-sm sm:text-base max-w-md leading-relaxed",

    taskCounter:
        "absolute top-0 right-0 hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-cyan-500/20 text-cyan-300 font-semibold backdrop-blur-xl",

    // Stats (Hidden on Mobile)
    statsGrid:
        "hidden md:grid md:grid-cols-3 gap-4 mb-8",

    statCard:
        "bg-white/10 rounded-2xl p-5 text-center backdrop-blur-xl hover:bg-white/15 transition-all duration-300",

    // Input Area
    inputSection:
        "flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8",

    input:
        "w-full flex-1 h-11 sm:h-12 md:h-14 px-4 py-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/10 text-lg sm:text-base text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all",

    // Buttons
    addButton:
        "cursor-pointer h-11 sm:h-12 md:h-14 w-full sm:w-auto px-4 sm:px-5 md:px-6 text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-300",

    saveButton:
        "cursor-pointer h-11 sm:h-12 md:h-14 w-full sm:w-auto px-4 sm:px-5 md:px-6 text-sm sm:text-base font-bold rounded-xl sm:rounded-2xl text-black bg-gradient-to-r from-cyan-300 to-cyan-500 shadow-md hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-300",

    deleteAllButton:
        "cursor-pointer h-11 sm:h-12 md:h-14 w-full sm:w-auto px-4 sm:px-5 md:px-6 text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-md hover:shadow-red-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-300",

    // Filters
    filterContainer:
        "flex flex-wrap justify-center gap-2 sm:gap-3 mb-8",

    filterButton:
        "cursor-pointer px-4 sm:px-5 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105",

    // Task List
    taskList:
        "flex flex-col gap-4 max-h-[450px] overflow-y-auto pr-1",

    taskCard:
        "bg-white/10 border border-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-xl hover:border-cyan-500/30 hover:bg-white/15 transition-all duration-300",

    taskContent:
        "flex flex-col sm:flex-row sm:items-center justify-between gap-4",

    taskLeft:
        "flex gap-3 flex-1 min-w-0",

    checkbox:
        "w-5 h-5 mt-1 accent-cyan-400 shrink-0 cursor-pointer",

    taskText:
        "break-words text-sm sm:text-lg text-white leading-relaxed",

    completedTask:
        "line-through opacity-50 text-gray-400",

    badge:
        "inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium cursor-default",

    // Actions
    actionIcons:
        "flex justify-end gap-2 shrink-0",

    iconButton:
        "cursor-pointer w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 active:scale-95",

    icon:
        "cursor-pointer transition-all duration-300",

    // Empty State
    emptyState:
        "text-center py-12 border border-dashed border-white/20 rounded-2xl bg-white/5",

    emptyEmoji:
        "text-5xl sm:text-6xl mb-3",

    emptyTitle:
        "text-lg sm:text-xl font-bold text-white",

    emptyText:
        "text-sm sm:text-base text-gray-400 mt-2",
};