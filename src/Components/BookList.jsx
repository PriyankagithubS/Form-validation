import React from 'react';
import { List, ListItem, ListItemText, Button, Paper } from '@mui/material';

const BookList = ({ books, onEdit, onDelete }) => (
    <Paper style={{ padding: 16, borderColor: 'white', borderStyle: 'solid', marginBottom: 16 }}>
        <List>
            {books.map((book, index) => (
                <ListItem key={index} style={{ color: 'white' }}>
                    <ListItemText
                        primary={book.title}
                        secondary={`Author: ${book.author} | ISBN: ${book.isbn}`}
                    />
                    <Button onClick={() => onEdit(book)} variant="contained" color="primary" style={{ marginRight: 8 }}>
                        Edit
                    </Button>
                    <Button onClick={() => onDelete(book.isbn)} variant="contained" color="secondary">
                        Delete
                    </Button>
                </ListItem>
            ))}
        </List>
    </Paper>
);

export default BookList;
