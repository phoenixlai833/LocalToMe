import styled from "styled-components";
import { useEffect, useState } from "react";


const Categories = styled.div`
   display:flex;
   margin: 20px 8% 20px 8%;
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

export default function EventCategoryTag({ eventCategories, exisitingCategories = [], changeCategories, selected }) {
   const [tagList, setTagList] = useState(exisitingCategories);
   const [categories, setCategories] = useState(eventCategories);
   // const [newCategories, setNewCategories] = useState(categories);

   // loop through event catrgories and add selected true to the same ones
   function updateCategories(tl) {
      const newCategories = eventCategories.map((c) => {
         if (tl.length !== 0) {
            tl.filter((t) => {
               if (t.id == c.id) {
                  c = { ...c, selected: true }
                  return c;
               } else {
                  // c = { ...c, selected: false } 
                  return c;
               }
            })
         }
         return c;
      })
      // console.log(updatedCategories)
      setCategories(newCategories);
      // setNewCategories(newCategories);
      return newCategories;
   }

   useEffect(() => {
      updateCategories(tagList);
      changeCategories ? changeCategories(tagList) : null;
      console.log(tagList)
      // console.log(categories)
   }, [tagList]);

   // onclick of button, toggle selected and toggle add to taglist
   function AddTagToList(c) {
      // console.log(tagList)
      if (tagList.length == 0) {
         tagList.push({ ...c, selected: true });
      } else {
         var index = tagList.findIndex(x => x.id == c.id);
         if (index === -1) {
            const addTl = [...tagList, c]
            console.log(addTl)
            setTagList(addTl)
            // updateCategories(newTl);
            // console.log(tagList)
         }
         else {
            // console.log(index)
            const id = tagList.splice(index, 1)[0].id;
            const removeTl = tagList.filter((t) => {
               return t.id !== id
            })
            // console.log(removeTl)
            setTagList(removeTl)
            // updateCategories(newTl);
         }
         // setBtn(false)
      }
      // console.log(tagList);
      // updateCategories();
      // console.log(categories)
   }

   return (
      <Categories>
         {categories.map((c) => (
            <Category selected={c.selected || selected} key={c.id} id={c.id} onClick={() => AddTagToList(c)}>{c.categoryName}</Category>
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


