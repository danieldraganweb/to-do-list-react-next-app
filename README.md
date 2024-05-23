This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The ToDo component is a functional component that renders a to-do list. The component uses the useState hook to manage the state of the to-do items and the input field. The component also uses the ChangeEvent type to handle input changes.

     The  handleAddTodo  function is called when the user clicks the "Add To-do" button. The function checks if the input field is empty and displays an error message if it is. If the input field is not empty, the function adds a new to-do item to the list.

     The  handleRemoveTodo  function is called when the user clicks the delete icon next to a to-do item. The function filters out the to-do item with the specified ID from the list.

     The  handleCompleteTodo  function is called when the user clicks the checkbox next to a to-do item. The function toggles the  completed  property of the to-do item with the specified ID.
     The  handleEditTodo  function is called when the user clicks the edit icon next to a to-do item. The function prompts the user to enter a new text for the to-do item and updates the text of the to-do item with the specified ID.

     The  handleInputChange  function is called when the user types in the input field. The function updates the value of the input field in the component's state.
     The component renders the to-do list, input field, and buttons. It also displays error messages if the input field is empty. The component uses the Next.js Image component to display the edit and delete icons.
