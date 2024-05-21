export type ToDoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export type ToDoList = ToDoItem[];

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  ariaLabel?: string;
};
