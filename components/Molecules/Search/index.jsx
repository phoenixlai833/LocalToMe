import styled from 'styled-components';

const Searchbox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin:60px auto 2vh auto;
    width: 100%;
    @media (max-width: 767px) {
        margin-top: 20px;
    }
`

const SearchBar = styled.input`
    width:90%;
    height:45px;
    border-radius:13px;
    border:2px solid #1CAE33;
    font-size: 20px;
    font-weight: 400;
    margin:0 auto;
    padding-left:2%;
`

const SearchIcon = styled.img`
    position: absolute;
    right: 10%;
    top: 25%;
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


