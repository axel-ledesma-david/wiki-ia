import React from "react";
import Header from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";
import { Categories } from "../../components/Categories/Categories";
import "../Home/Home.css";
import ListArticles from "../../components/ListArticles/ListArticles";
import { useSelector } from "react-redux";

const Home = () => {
  const readArticles = useSelector((state) => state.articles.filterData);

  const inputValue = useSelector((state) => state.articles.inputValue);

  return (
    <div className="container-home" >
      <Header />
      <Search />

      {inputValue !== "" ? (
        <ListArticles data={readArticles} />
      ) : (
        <Categories />
      )}
    </div>
  );
};

export default Home;
