import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import UserList from './users';
import { PostCreate, PostEdit, PostList } from './posts';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider} >
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
