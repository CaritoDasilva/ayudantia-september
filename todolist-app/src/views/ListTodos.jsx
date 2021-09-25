import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../contexts/ListContext";
import { Tag, Select, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Option } = Select;

const LisToDos = () => {
    const [list, setList] = useState([]);
    // const { list, setList } = useContext(ListContext)
    // console.log("🚀 ~ file: ListTodos.jsx ~ line 7 ~ LisToDos ~ list", list)

    const getAllTodos = async () => {
        try {
            let data = await axios.get('http://localhost:8000/api/todos');
            console.log("🚀 ~ file: ListTodos.jsx ~ line 16 ~ getAllTodos ~ data", data)
            setList(data.data.todos);

        } catch(err) {
            console.log("🚀 ~ file: ListTodos.jsx ~ line 19 ~ getAllTodos ~ err", err)

        }

    }

    useEffect(() => {
        getAllTodos();
    }, [])

    const onChange = async (val, id) => {
        // const newList = [...list];
        // newList[i] = {...list[i], status: val};
        // console.log("🚀 ~ file: ListTodos.jsx ~ line 13 ~ onChange ~ newList", newList)
        // setList(newList);
        try {
            let data = await axios.put(`http://localhost:8000/api/todos/update/${id}`, { status: val })
            data && getAllTodos();

        } catch(err) {
            console.log("🚀 ~ file: ListTodos.jsx ~ line 39 ~ onChange ~ err", err)
            
        }


    }

    const deleteTodo = async (id) => {
        try {
            let data = await axios.delete(`http://localhost:8000/api/todos/delete/${id}`);
            data && getAllTodos();

        } catch(err) {
            console.log("🚀 ~ file: ListTodos.jsx ~ line 43 ~ deleteTodo ~ err", err)
            
        }
    }

    return (
        <div>
            <h1>Lista de tareas</h1>
            <div  className="list-container">
                {list?.map((todo, index) => (
                    <div className={`card-container ${todo.status ? 'finished' : 'in-progress'}`} key={index}>
                        <Tag color="magenta">{todo.tag}</Tag>
                        <Button type="primary" shape="circle" icon={< DeleteOutlined />} onClick={() => deleteTodo(todo._id)} />
                        <h2>{todo.description}</h2>
                        <h3>Prioridad: {todo.priority}</h3>
                        <h3>Estatus:</h3>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={(val) => onChange(val, todo._id)}
                            value={todo.status}
                        >
                            <Option value={true}>Terminada</Option>
                            <Option value={false}>Pendiente</Option>
                        </Select>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default LisToDos;