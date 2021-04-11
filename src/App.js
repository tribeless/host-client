import React from "react";
import {useDispatch,useSelector} from "react-redux";
import axios from "axios";
import Header from "./containers/Header/Header";
import ImageGridList from "./containers/Main/ImageGridList";
import Navigation from "./containers/Main/Navigation";
import {pageResults} from "./redux/actions/pageAction";
import {BACKEND_URL,PAGE_SIZE} from "./api/urls";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const page = useSelector(state=>state.pageReducer.currentPage);

  React.useEffect(()=>{
    try{
        async function fetchRecord() {
            const response = await axios.get(`${BACKEND_URL}?page=${page}&pageSize=${PAGE_SIZE}`);
            dispatch(pageResults(response.data.result));
        }
        fetchRecord();
    }
    catch(e){
        console.log(e.message)
    }
  },[page]);

  return (
    <>
      <Header />
      <ImageGridList />
      <Navigation />
    </>
  );
}

export default App;
