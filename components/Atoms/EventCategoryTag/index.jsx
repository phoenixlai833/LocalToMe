import styled from "styled-components";
import { useEffect, useState } from "react";


const Categories = styled.div`
   display:flex;
   margin: 30px;
`

const Category = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => (props.selected ? '#FFB800' : '#FFEAB4')};
   // background-color: #FFB800;
   border: none;
   width: 100px;
   height: 40px;
   border-radius: 35px;
   margin-right: 10px;
   &:hover{
      background-color: #FFB800;
   }
`

export default function EventCategoryTag({ eventCategories, exisitingCategories = [], changeCategories }) {
   const [tagList, setTagList] = useState(exisitingCategories)
   const [categories, setCategories] = useState(eventCategories);

   // let tagList;
   const updateCategories = () => eventCategories.map((c) => {
      // console.log(c.id)
      tagList.filter((t) => {
         // console.log(t.id)
         if (t.id == c.id) {
            c = { ...c, selected: true };
            // console.log(c)
            return { ...c, selected: true };
         }
      })
      return c;
   })

   // if (tagList.length == 0) {
   //    setTagList(tagList);
   // } else {
   //    const newTagList = tagList.map((c) => {
   //       return { ...c, selected: true };
   //    });
   //    setTagList(newTagList);
   // }

   function AddTagToList(c) {
      updateCategories()
      console.log(eventCategories)
      if (tagList.length == 0) {
         tagList.push({ ...c, selected: true });
         // setBtn(true);
      } else {
         var index = tagList.findIndex(x => x.id == c.id);
         if (index === -1) {
            tagList.push({ ...c, selected: true });
            updateCategories()
         }
         else {
            tagList.splice(index, 1);
            updateCategories()
         }
         // setBtn(false)
      }
      console.log(tagList);
      // changeCategories(tagList);

   }

   return (
      <Categories>
         {eventCategories.map((c) => (
            <Category selected={c.selected} key={c.id} id={c.id} onClick={() => AddTagToList(c)}>{c.categoryName}</Category>
         ))}
      </Categories>
   )
}

// export default function EventCategoryTag({ eventCategories }) {

//    return (
//       <Categories>
//          {eventCategories.map((c) => (
//             <Category key={c} id={c}>{c}</Category>
//          ))}
//       </Categories>

//    )
// }


