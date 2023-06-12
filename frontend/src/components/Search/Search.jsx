import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {
  getArticlesSearch,
  resetSearch,
} from "../../redux/slices/articleSlice";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  function handleSearch() {
    dispatch(getArticlesSearch(inputValue));
  }

  const handleReset = ()=>{
    dispatch(resetSearch())
    setInputValue("")
  }

  return (
    <div className="DivS">
      <h2 className="title-search">Buscar tema</h2>
      <div className="search">
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button onClick={handleReset} size={"sm"} variant="secondary">reset</Button>
      </div>
      <Button onClick={handleSearch} variant="transparent" className="p-0 btn-search border-0" > 
        <FontAwesomeIcon icon={faSearch} className="icon" />
      </Button>
    </div>
  );
};
