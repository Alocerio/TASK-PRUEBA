import React, {useState, Fragment, useRef, useEffect} from 'react';

import { v4 as uuidv4} from 'uuid'
import TodoList from './components/TodoList.jsx';

import {
  ChakraProvider, Center, Box, Spacer, Flex,
  Text, Button,Heading, useColorMode, Input,
  SimpleGrid,Grid, GridItem,Textarea,Square

} from "@chakra-ui/react"

const KEY = "todoApp.todos";

const App = () => {

  const [todos, setTodos] = useState([
    {id: 1 ,task: 'tarea 1', completed: false}
  ]);

  const todoTaskRef = useRef();

  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(KEY));
    if(storeTodos){ 
      setTodos(storeTodos);} 
    }, []);
  
  useEffect(() => {
    localStorage.setItem(KEY , JSON.stringify(todos));
  } , [todos]);

  const toggleTodo =(id)=>{
    const newTodos = [...todos];
    const todo = newTodos.find((todo)=> todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleTodoAdd = ()=>{
    const task = todoTaskRef.current.value;
    if (task === '') return;

    setTodos((prevTodos)=>{
      return [...prevTodos, { id: uuidv4(), task, completed: false}]
    })

    todoTaskRef.current.value = null;
  }


  const handleDeleteTodo = ()=>{
    const newTodos = todos.filter((todo)=> !todo.completed);
    setTodos(newTodos);
  }


  return (
    <ChakraProvider >
    
     <Heading
     textShadow="1.5px 1.2px #9796ef"
      p='50px' align='center' color="#319795" fontSize="5xl">
       <Square  bg="#edf2f7" 
       >
       SIMPLE TASK
       </Square>
       </Heading>
      <Center>
       <Grid  
       mt='20px'
       h="400px"
       align="center"
       justify="center"
       templateRows="repeat(1, 1fr)"
       templateColumns="repeat(2, 1fr)"
       gap={4}>   
      
       <GridItem  bg="#edf2f7"  w='40vw' rowSpan={1} colSpan={1}> 
          <Center>    
          <TodoList todos={todos} toggleTodo={toggleTodo}/> 
          </Center>
           </GridItem> 

          
          <GridItem  colSpan={1} w='40vw' >
            
          <Textarea 
           size="sm"
           variant="filled"
           mb={4}
           ref={todoTaskRef} type='text' placeholder='Nueva Tarea'/>
       
          <Button colorScheme="teal" mr="10px" onClick={handleTodoAdd}>+</Button>
          
          <Button className='bg-dark' onClick={handleDeleteTodo} >-</Button>
          
          <Spacer mb='4'/>
          <Text as="i" m="1">Te quedan {todos.filter((todo)=> !todo.completed).length} tareas por terminar!</Text>
          
          </GridItem>
        
         </Grid> 
         </Center>  

    </ChakraProvider>
  
  );
}

export default App;
