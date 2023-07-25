import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/slice";
import { selectFilter } from "../../redux/selectors";
import { useGetContactsQuery } from "../../services/services";
import { Input } from "./Filter.styled";
import { MdOutlineSearch } from "react-icons/md";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";
import { useTheme } from "styled-components";
import { FindWrap } from "../../style/Button.styled";

const Filter = () => {
  const { current } = useTheme();
  const { data: contacts } = useGetContactsQuery();
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FindWrap>
      <Input
        type="text"
        placeholder="Find contact by name"
        value={value}
        onChange={(evt) => dispatch(filter(evt.target.value.trim()))}
        disabled={contacts && contacts.length === 0}
      />
      <MdOutlineSearch
        className="react-icons"
        color={current === Theme.LIGHT ? ColorDark.BG : ColorLight.SEARCHBTN}
        size={20}
      />
    </FindWrap>
  );
};

export default Filter;
