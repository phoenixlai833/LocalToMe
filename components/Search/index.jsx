import styled from 'styled-components';

const Searchbox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin:1em auto;
    // width: 100%;
`

const SearchBar = styled.input`
    background-color:#E4E4E4;
    width:90%;
    height:45px;
    border-radius:13px;
    border: none;
    font-size: 20px;
    fobnt-weight: 400;
    margin:0 auto;
    padding-left:2%;
`

const SearchIcon = styled.img`
    position: absolute;
    right: 10%;
    top: 30%;
`

export default function Search({ onSearch }) {
  function handleSearch(e) {
    onSearch(e.target.value);
  }

  return (
    <Searchbox>
      <SearchBar onChange={handleSearch}>
      </SearchBar>
      <SearchIcon src="./searchIcon.png"></SearchIcon>
    </Searchbox>
  );
}


