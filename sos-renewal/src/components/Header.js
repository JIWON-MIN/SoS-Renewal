import {
  HeaderWrapper,
  HeaderLogo,
  HeaderSearchBox,
  HeaderSearchInput,
  HeaderSearchIcon
} from './StyledComponent';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo />
        <HeaderSearchBox>
          <HeaderSearchInput />
          <HeaderSearchIcon />
        </HeaderSearchBox>
      </HeaderWrapper>
    </>
  );
}

export default Header;