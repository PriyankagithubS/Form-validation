import React, { useState } from 'react';
import BookForm from '../Components/BookForm';
import BookList from '../Components/BookList';
import AuthorForm from '../Components/AuthorForm';
import AuthorList from '../Components/AuthorList';

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [editingBook, setEditingBook] = useState(null);
    const [editingAuthor, setEditingAuthor] = useState(null);

    const handleAddBook = (book) => {
        setBooks([...books, book]);
    };

    const handleEditBook = (book) => {
        setBooks(books.map(b => (b.isbn === book.isbn ? book : b)));
        setEditingBook(null);
    };

    const handleDeleteBook = (isbn) => {
        setBooks(books.filter(b => b.isbn !== isbn));
    };

    const handleAddAuthor = (author) => {
        setAuthors([...authors, author]);
    };

    const handleEditAuthor = (author) => {
        setAuthors(authors.map(a => (a.name === author.name ? author : a)));
        setEditingAuthor(null);
    };

    const handleDeleteAuthor = (name) => {
        setAuthors(authors.filter(a => a.name !== name));
    };

    return (
        <div className="dashboard">
            <div className="form-container">
                <BookForm
                    initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
                    onSubmit={editingBook ? handleEditBook : handleAddBook}
                />
                <AuthorForm
                    initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
                    onSubmit={editingAuthor ? handleEditAuthor : handleAddAuthor}
                />
            </div>
            <div className="list-container">
                <BookList books={books} onEdit={setEditingBook} onDelete={handleDeleteBook} />
                <AuthorList authors={authors} onEdit={setEditingAuthor} onDelete={handleDeleteAuthor} />
            </div>
        </div>
    );
};

export default Dashboard;
