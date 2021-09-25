
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: [true, 'No puede enviar un todo sin tag asociado'],
        maxLength: [150, 'No debe excer los 150 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Este campo es requerido']
    },
    priority: {
        type: String,
        required: [true, 'Este campo es requerido']
    },  
    status: {
        type: Boolean, 
        default: false
    }  
},
{timestamps: true}
);

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;