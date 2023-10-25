import { useState , useEffect} from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css';

const App = () => {
    const [books, setBooks] = useState([]);
    const fetchBooks = async () =>{
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }
    useEffect(()=>{
        fetchBooks();
    },[]);
    const editBook = async(id,newTitle)=>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        })
        const updateBooks = books.map((book)=>{
            if(book.id === id)  return {...book,...response.data};
            else return book;
        })
        setBooks(updateBooks);
    }
    const deleteBook = async (id) =>{
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updateList = books.filter((book)=>book.id !== id);
        setBooks(updateList);
    }
    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books",{
            title
        })

        console.log(response);
        const updateBooks = [
            ...books,
            response.data
        ];
        setBooks(updateBooks);
    }
    return (
        <div>
            <div>now we have {books.length} books.</div>
            <BookList onEdit={editBook} onDelete = {deleteBook} books = {books}/>
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;