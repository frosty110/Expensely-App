import React from 'react';
import { Link } from 'react-router-dom'

// link uses client-side routing. This takes advantage of our application being local.
// alternative is to use anchor tags which would use server-side routing which would be soler for us
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link> 
    </div>
);


export default NotFoundPage;