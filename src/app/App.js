import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import axios from "axios"
import Navbar from "../components/Navbar"
import { Route } from "react-router-dom"
import About from "../components/About"
import Contacts from "../components/Contacts"



const App = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get("https://nurkadyrnur.pythonanywhere.com/news/").then((res) => {
            setNews(res.data.results);
        })
    }, [])
    return (
        <div>
            <Navbar />
            <div className="container border shadow-sm">
                <Route path="/" exact>
                    <h1 className="text center">Hello news</h1>
                    <div className="row mt-5 mb-5">
                        {news.map((item) => (
                            <div key={item.id} className="col-6 mt-4">
                                <Newsitem item={item} />
                            </div>
                        ))}
                    </div>
                </Route>
                <Route path="/about" exact>
                    <About />
                    </Route>
                    <Route path="/contacts">
                    <Contacts/>
                </Route>
            </div>
        </div>
    );
};

export default App;