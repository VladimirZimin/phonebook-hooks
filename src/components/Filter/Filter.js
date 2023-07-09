import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/slice";
import { selectFilter } from "../../redux/selectors";
import { useGetContactsQuery } from "../../services/services";
import { Input } from "./Filter.styled";

const Filter = () => {
  const { data: contacts } = useGetContactsQuery();
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Input
        type="text"
        placeholder="Find contact by name"
        value={value}
        onChange={(evt) => dispatch(filter(evt.target.value.trim()))}
        disabled={contacts && contacts.length === 0}
      />
    </>
  );
};

export default Filter;
