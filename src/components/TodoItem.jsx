import React from 'react';
import { Box , HStack,ListItem,Checkbox} from "@chakra-ui/react";
const TodoItem = ({todo, toggleTodo}) => {
    const {id, task, completed } = todo;

    const handleTodoClick = () => {
    toggleTodo(id);
}

    return (
        <HStack >
            <Box >
            <ListItem>
            <Checkbox p={2} type="checkbox"
            colorScheme="teal"
             checked={completed} onChange={handleTodoClick} />
           {task}
              </ListItem>
            </Box>
            
        </HStack>
        
    );
}

export default TodoItem;
