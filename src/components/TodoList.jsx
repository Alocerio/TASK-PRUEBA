import React from 'react';
import TodoItem from './TodoItem';
import { Box , HStack, List,Center,UnorderedList,} from "@chakra-ui/react";
const TodoList = ({ todos, toggleTodo }) => { 
    return (
       
        <Center  p={4} color="dark">
        <List >
            {todos.map((todo)=> (
                <TodoItem  key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </List>
        </Center>
       
    );
}

export default TodoList;
