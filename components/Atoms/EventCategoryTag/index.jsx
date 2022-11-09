import styled from "styled-components";
import { useState } from "react";


const Categories = styled.div`
   display:flex;
   margin: 30px;
`

const Category = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   // background-color: ${props => (props.selected ? '#FFB800' : '#FFEAB4')};
   background-color: #FFB800;
   border: none;
   width: 100px;
   height: 40px;
   border-radius: 35px;
   margin-right: 10px;
   &:hover{
      background-color: #FFEAB4;
   }
`

export default function EventCategoryTag({ eventCategories, exisitingCategories, changeCategories }) {
   // const [btn, setBtn] = useState(true);

   const tagList = exisitingCategories;

   function AddTagToList(c) {
      // console.log(exisitingCategories)
      if (tagList.length == 0) {
         tagList.push(c);
         // setBtn(true);
      } else {
         var index = tagList.findIndex(x => x.id == c.id);
         index === -1 ? tagList.push(c) : tagList.splice(index, 1);
         // setBtn(false)
      }
      // console.log(tagList);
      changeCategories(tagList);

   }

   return (
      <Categories>
         {eventCategories.map((c) => (
            <Category key={c.id} id={c.id} onClick={() => AddTagToList(c)}>{c.categoryName}</Category>
         ))}
      </Categories>
   )
}

// selected={btn}  in btn?

// export default function EventCategoryTag({ eventCategories }) {

//    return (
//       <Categories>
//          {eventCategories.map((c) => (
//             <Category key={c} id={c}>{c}</Category>
//          ))}
//       </Categories>

//    )
// }


