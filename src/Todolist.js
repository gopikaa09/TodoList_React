
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Todolist() {
//     const [input, setInput] = useState('');
//     const [data, setData] = useState([]);
//     const [editingId, setEditingId] = useState(null);

//     const handleInput = (e) => {
//         setInput(e.target.value);
//     };

//     const handleAdd = () => {
//         if (input.trim() !== '') {
//             const newItem = {
//                 title: input,
//                 completed: false,
//             };
//             axios
//                 .post('https://jsonplaceholder.typicode.com/users/1/todos', newItem)
//                 .then((res) => {
//                     setData([...data, res.data]);
//                     setInput('');
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleEdit = (id) => {
//         setEditingId(id);
//     };

//     const handleUpdate = (id, updatedTitle) => {
//         const updatedData = data.map((item) => {
//             if (item.id === id) {
//                 return { ...item, title: updatedTitle };
//             }
//             return item;
//         });
//         axios
//             .put(`https://jsonplaceholder.typicode.com/users/1/todos/${id}`, {
//                 title: updatedTitle,
//             })
//             .then(() => {
//                 setData(updatedData);
//                 setEditingId(null);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
    

//     const handleDelete = (id) => {
//         axios
//             .delete(`https://jsonplaceholder.typicode.com/users/1/todos/${id}`)
//             .then(() => {
//                 const updatedData = data.filter((item) => item.id !== id);
//                 setData(updatedData);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     useEffect(() => {
//         axios
//             .get('https://jsonplaceholder.typicode.com/users/1/todos')
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>ToDo List</h1>
//             <input type="text" value={input} onChange={handleInput} />
//             <button onClick={handleAdd}>Add</button>
//             <table>
//                 <tbody>
//                     {data.map((val) => (
//                         <tr key={val.id}>
//                             <td>
//                                 {val.id === editingId ? (
//                                     <input
//                                         type="text"
//                                         value={val.title}
//                                         onChange={(e) => handleUpdate(val.id, e.target.value)}
//                                     />
//                                 ) : (
//                                     <p>{val.title}</p>
//                                 )}
//                             </td>
//                             <td>{val.completed ? 'Completed' : 'Not Completed'}</td>
//                             <td>
//                                 {val.id === editingId ? (
//                                     <button onClick={() => handleUpdate(val.id, val.title)}>Save</button>
//                                 ) : (
//                                     <button onClick={() => handleEdit(val.id)}>Edit</button>
//                                 )}
//                             </td>
//                             <td>
//                                 <button onClick={() => handleDelete(val.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Todolist;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Todolist() {
//     const [input, setInput] = useState('');
//     const [data, setData] = useState([]);
//     const [editingId, setEditingId] = useState(null);

//     const handleInput = (e) => {
//         setInput(e.target.value);
//     };

//     const handleAdd = () => {
//         if (input.trim() !== '') {
//             const newItem = {
//                 title: input,
//                 completed: false,
//             };
//             axios
//                 .post('https://jsonplaceholder.typicode.com/users/1/todos', newItem)
//                 .then((res) => {
//                     setData([...data, res.data]);
//                     setInput('');
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleEdit = (id) => {
//         setEditingId(id);
//     };

//     const handleUpdate = (id, updatedTitle) => {
//         const updatedData = data.map((item) => {
//             if (item.id === id) {
//                 return { ...item, title: updatedTitle };
//             }
//             return item;
//         });
//         axios
//             .put(`https://jsonplaceholder.typicode.com/users/1/todos/${id}`, {
//                 id: id,
//                 title: updatedTitle,
//                 completed: false, // Consider sending the 'completed' status if necessary
//             })
//             .then(() => {
//                 setData(updatedData);
//                 setEditingId(null);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     const handleDelete = (id) => {
//         axios
//             .delete(`https://jsonplaceholder.typicode.com/users/1/todos/${id}`)
//             .then(() => {
//                 const updatedData = data.filter((item) => item.id !== id);
//                 setData(updatedData);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     useEffect(() => {
//         axios
//             .get('https://jsonplaceholder.typicode.com/users/1/todos')
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>ToDo List</h1>
//             <input type="text" value={input} onChange={handleInput} />
//             <button onClick={handleAdd}>Add</button>
//             <table>
//                 <tbody>
//                     {data.map((val) => (
//                         <tr key={val.id}>
//                             <td>
//                                 {val.id === editingId ? (
//                                     <input
//                                         type="text"
//                                         value={val.title}
//                                         onChange={(e) => handleUpdate(val.id, e.target.value)}
//                                     />
//                                 ) : (
//                                     <p>{val.title}</p>
//                                 )}
//                             </td>
//                             <td>{val.completed ? 'Completed' : 'Not Completed'}</td>
//                             <td>
//                                 {val.id === editingId ? (
//                                     <button onClick={() => handleUpdate(val.id, val.title)}>Save</button>
//                                 ) : (
//                                     <button onClick={() => handleEdit(val.id)}>Edit</button>
//                                 )}
//                             </td>
//                             <td>
//                                 <button onClick={() => handleDelete(val.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Todolist;


import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Todolist() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleAdd = () => {
        if (input.trim() !== '') {
            const newItem = {
                title: input,
                completed: false,
            };
            axios
                .post('https://jsonplaceholder.typicode.com/users/1/todos', newItem)
                .then((res) => {
                    setData([...data, res.data]);
                    setInput('');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleEdit = (id) => {
        setEditingId(id);
    };

    const handleUpdate = (id, updatedTitle) => {
        const updatedData = data.map((item) => {
            if (item.id === id) {
                return { ...item, title: updatedTitle };
            }
            return item;
        });

        axios
            .put(`https://jsonplaceholder.typicode.com/users/1/todos/${id}`, {
                id: id,
                title: updatedTitle,
                completed: false, // Consider sending the 'completed' status if necessary
            })
            .then(() => {
                setData(updatedData);
                setEditingId(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/1/todos/${id}`)
            .then(() => {
                const updatedData = data.filter((item) => item.id !== id);
                setData(updatedData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>ToDo List</h1>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={handleAdd}>Add</button>
            <table>
                <tbody>
                    {data.map((val) => (
                        <tr key={val.id}>
                            <td>
                                {val.id === editingId ? (
                                    <input
                                        type="text"
                                        value={val.title}
                                        onChange={(e) => handleUpdate(val.id, e.target.value)}
                                    />
                                ) : (
                                    <p>{val.title}</p>
                                )}
                            </td>
                            <td>{val.completed ? 'Completed' : 'Not Completed'}</td>
                            <td>
                                {val.id === editingId ? (
                                    <button onClick={() => handleUpdate(val.id, val.title)}>Save</button>
                                ) : (
                                    <button onClick={() => handleEdit(val.id)}>Edit</button>
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(val.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Todolist;
