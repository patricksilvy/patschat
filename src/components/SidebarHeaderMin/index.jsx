import React from 'react';
import { Container } from './style'
import {
    AiOutlineMenuUnfold,
} from "react-icons/ai"

const SidebarHeaderMin = ({ openSidebar, setOpenSidebar }) => {
  return (
    <Container>
        <AiOutlineMenuUnfold onClick={() => setOpenSidebar(!openSidebar)}/>
    </Container>
  );
};

export default SidebarHeaderMin;