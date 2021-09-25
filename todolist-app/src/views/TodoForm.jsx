import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button, Select } from 'antd';
import { ListContext } from "../contexts/ListContext";
import axios from "axios";
import LisToDos from "./ListTodos";
const { Option } = Select;



const TodoForm = () => {
    const { list, setList } = useContext(ListContext)
    const formToDo = {
        tag: '',
        description: '',
        priority: '',
    }

    // const handleChange = (e) => {
    //     console.log({ [e.target.name]: e.target.value })
    //     setFormToDo({...formToDo, [e.target.name]: e.target.value})
    // }

    useEffect(() => {
        console.log("🚀 ~ file: TodoForm.jsx ~ line 25 ~ TodoForm ~ formToDo", list)

    }, [list])

    const onFinish = (values) => {
        console.log("🚀 ~ file: TodoForm.jsx ~ line 26 ~ onFinish ~ values", values)
        // setFormToDo(values);
        axios.post('http://localhost:8000/api/todos/new', { ...values, status: false } )
        // setList([...list, {...values, status: false}]);

    }

    return (
        <div className="form-container">
            <h1>Agregar Tareas</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={formToDo}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tag"
                    name="tag"
                    rules={[{ required: true, message: 'Debe asociar tarea a un tag' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Descripción"
                    name="description"
                    rules={[{ required: true, message: 'Tarea debe contener una descripción' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="priority" label="Prioridad Tarea" rules={[{ required: true, message: 'Debe seleccionar nivel de prioridad' }]}>
                    <Select
                        placeholder="Selecciona nivel de prioridad"
                        allowClear
                        value={formToDo.priority}
                    >
                        <Option value="alta">Alta</Option>
                        <Option value="media">Media</Option>
                        <Option value="baja">Baja</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Agregar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

}

export default TodoForm;