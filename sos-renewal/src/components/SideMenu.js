import React, { useState } from 'react';
import {
  SideMenuIcon,
  SideMenuWrapper,
} from './StyledComponent';


const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(0);

  const sideMenuOpen = () => {
    if(isOpen){
      setIsOpen(0);
    }else{
      setIsOpen(1);
    }
  }

  return (
    <>
      <SideMenuIcon onClick={sideMenuOpen}/>
      <SideMenuWrapper isOpen = {isOpen}>

      </SideMenuWrapper>
    </>
  );
}

export default SideMenu;