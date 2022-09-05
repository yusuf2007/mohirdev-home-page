import React from "react";
import Filter from "./Filter";
import filters from "./Filters";

const FilterList = () => {
  const filterList = filters.map((filter) => <Filter filter={filter}></Filter>);

  return <>{filterList}</>;
};

export default FilterList;
