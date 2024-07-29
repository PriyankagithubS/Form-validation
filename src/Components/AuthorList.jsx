import React from 'react';
import { List, ListItem, ListItemText, Button, Paper } from '@mui/material';

const AuthorList = ({ authors, onEdit, onDelete }) => (
    <Paper style={{ padding: 16, borderColor: 'white', borderStyle: 'solid', marginBottom: 16 }}>
        <List>
            {authors.map((author, index) => (
                <ListItem key={index} style={{ color: 'white' }}>
                    <ListItemText
                        primary={author.name}
                        secondary={`Birth Date: ${author.birthDate} | Biography: ${author.biography}`}
                    />
                    <Button onClick={() => onEdit(author)} variant="contained" color="primary" style={{ marginRight: 8 }}>
                        Edit
                    </Button>
                    <Button onClick={() => onDelete(author.name)} variant="contained" color="secondary">
                        Delete
                    </Button>
                </ListItem>
            ))}
        </List>
    </Paper>
);

export default AuthorList;
