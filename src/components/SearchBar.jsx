import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  // const [searchText, setSearchText] = useState("");
  return (
    <Paper
      component="form"
      // onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "2px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search.."
        value=""
        onchange={() => {}}
      />
      <IconButton sx={{ p: { md: "10px", xs: "6px" }, color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
