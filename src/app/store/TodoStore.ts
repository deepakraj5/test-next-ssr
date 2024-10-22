import { create } from 'zustand';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todos: Todo[]) => set({ todos }),
}));
