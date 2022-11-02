import styled from "styled-components";


const Categories = styled.div`
   display:flex;
   margin: 30px;
`

const Category = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   background-color: #FFB800;
   border: none;
   width: 100px;
   height: 40px;
   border-radius: 35px;
   margin-right: 10px;

`



export default function EventCategoryTag({ eventCategories }) {

   return (
      <Categories>
         {eventCategories.map((c) => (
            <Category key={c} id={c}>{c}</Category>
         ))}
      </Categories>

   )
}


