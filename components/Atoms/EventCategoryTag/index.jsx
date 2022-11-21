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

export default function EventCategoryTag({ eventCategories, existingCategories = [], changeCategories, selected }) {
   const [tagList, setTagList] = useState(existingCategories);
   const [categories, setCategories] = useState(eventCategories);

   function updateCategories(tl) {
      const newCategories = eventCategories.map((c) => {
         if (tl.length !== 0) {
            tl.filter((t) => {
               if (t.id == c.id) {
                  c = { ...c, selected: true }
                  return c;
               } else {
                  return c;
               }
            })
         }
         return c;
      })
      setCategories(newCategories);
      return newCategories;
   }

   useEffect(() => {
      updateCategories(tagList);
      changeCategories ? changeCategories(tagList) : null;
      console.log(tagList)
   }, [tagList]);

   // onclick of button, toggle selected and toggle add to taglist
   function AddTagToList(c) {
      if (tagList.length == 0) {
         tagList.push({ ...c, selected: true });
      } else {
         var index = tagList.findIndex(x => x.id == c.id);
         if (index === -1) {
            const addTl = [...tagList, c]
            console.log(addTl)
            setTagList(addTl)
         }
         else {
            const id = tagList.splice(index, 1)[0].id;
            const removeTl = tagList.filter((t) => {
               return t.id !== id
            })
            setTagList(removeTl)
         }
      }
   }

   return (
      <Categories>
         {categories.map((c) => (
            <Category selected={c.selected || selected} key={c.id} id={c.id} onClick={() => AddTagToList(c)}>{c.categoryName}</Category>
         ))}
      </Categories>
   )
}