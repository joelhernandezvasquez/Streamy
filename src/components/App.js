import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

// CLIENT ID 
// 441421263988-j641c773han6mtt6q9qqn40d65oeibif.apps.googleusercontent.com
const App = () => {
    return (
        <div className="ui container">
           <BrowserRouter>
            <div>
            <Header/>
              <Route path="/" exact component = {StreamList}/>
              <Route path="/streams/new" exact component = {StreamCreate}/>
              <Route path="/streams/edit" exact component = {StreamEdit}/>
              <Route path="/streams/delete" exact component = {StreamDelete}/>
              <Route path="/streams/show" exact component = {StreamShow}/>
            </div>
           </BrowserRouter> 
        </div>
    )
}

export default App;
