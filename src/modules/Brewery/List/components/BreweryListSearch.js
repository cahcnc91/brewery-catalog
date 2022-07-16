import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const BreweryListSearch = () => {
  const [input, setInput] = useState("");

  const handleSetInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("hereee");
  };

  const handleonKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, m: "20px" }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Breweries" inputProps={{ "aria-label": "search breweries" }} value={input} onChange={handleSetInput} onKeyDown={(e) => handleonKeyPress(e)} />
      <IconButton sx={{ p: "10px" }} aria-label="search" onClick={handleSubmit}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default BreweryListSearch;
