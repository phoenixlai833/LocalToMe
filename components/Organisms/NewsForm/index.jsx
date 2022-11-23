import ShortTextInput from "../../Molecules/ShortTextInput";
import LongTextInput from "../../Molecules/LongTextInput";
import styled from "styled-components";
import GeneralGreenBtn from "../../Atoms/GeneralGreenBtn";
import EventCategoryTag from "../../Atoms/EventCategoryTag";

const Form = styled.form`
  width: 80vw;
  margin: 5vw 10vw;
  display: flex;
  flex-direction: column;
  align-items: left;
//   * {
//     width: 100%;
//   }
  @media (min-width: 768px) {
    width: 70%;  
  }
`;

export default function NewsForm({
    mode,
    news,
    onChangeNewsTitle,
    onChangeNewsCreator,
    onChangeNewsContent,
    image,
    onChangeNewsImage,
    onChangeNewsTags,
    categoriesList,
    onConfirm,
}) {

    function handleChangeNewsTitle(newsTitle) {
        onChangeNewsTitle(newsTitle);
    }

    function handleChangeNewsCreator(newsCreator) {
        onChangeNewsCreator(newsCreator);
    }

    function handleChangeNewsContent(newsContent) {
        onChangeNewsContent(newsContent);
    }

    function handleChangeNewsImage(newsImage) {
        onChangeNewsImage(newsImage);
    }

    function handleAddTag(newTags) {
        onChangeNewsTags(newTags);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onConfirm();
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <b>Basic Information</b>
                <br></br>
                <ShortTextInput
                    label="News Title"
                    value={news.newsTitle}
                    onChange={handleChangeNewsTitle}
                    required={true}
                />
                <br></br>
                {/* <ShortTextInput
                    label="Organizer"
                    value={news.newsCreatorId}
                    onChange={handleChangeNewsCreator}
                    required={true}
                /> */}
                <b style={{ marginTop: "5%" }}>Details about your News*</b>
                <br></br>
                <LongTextInput mode={mode} value={news.newsContent && news.newsContent} placeholder={"Tell us about your news..."} image={image} onChange={handleChangeNewsContent} onChangeImage={handleChangeNewsImage}></LongTextInput>
                {/* <b style={{ marginTop: "5%" }}>Select News Tags</b> */}
                <br></br>
                <EventCategoryTag eventCategories={categoriesList} exisitingCategories={news.newsTags} changeCategories={handleAddTag} />
                <br></br>
                <GeneralGreenBtn text="Post" />
            </Form>
        </>
    );
}

// edit/3umhg4tybhT8TWbY3vEu