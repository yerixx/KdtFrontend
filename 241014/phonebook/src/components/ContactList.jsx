import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import ContactItem from "./ContactItem";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 4px;
`;

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  // const contactLists = useSelector((state) => state.contactList);
  // console.log(contactLists);
  const { contactList, keyword } = useSelector((state) => state);
  console.log(contactList, keyword);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);

  return (
    <Wrapper>
      <h6>Friend List</h6>
      <SearchBar />
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </Wrapper>
  );
};

export default ContactList;
