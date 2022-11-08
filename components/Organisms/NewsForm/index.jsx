import ShortTextInput from "../../Molecules/ShortTextInput";
import LongTextInput from "../../Molecules/LongTextInput";
import DateInput from "../../Atoms/DateInput";
import DateCalendar from "../../Molecules/DateCalendar";
import TimeInput from "../../Molecules/TimeInput";
import { useState } from "react";
import styled from "styled-components";
import GeneralGreenBtn from "../../Atoms/GeneralGreenBtn";

const Form = styled.form`
  width: 80vw;
  margin: 5vw 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    width: 100%;
  }
`;

const LayoutTime = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

const To = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin-left: 5%;
`;

export default function NewsForm({
    news,
    onChangeNewsTitle,
    onChangeNewsCreator,
    onChangeNewsContent,
    image,
    onChangeNewsImage,
    onChangeNewsTags,
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

    function handleChangeNewsTags(newsTags) {
        onChangeNewsTags(newsTags);
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
                <ShortTextInput
                    label="Organizer"
                    value={news.newsCreatorId}
                    onChange={handleChangeNewsCreator}
                    required={true}
                />
                <b style={{ marginTop: "5%" }}>Details about your News*</b>
                <br></br>
                <LongTextInput value={news.newsContent && news.newsContent} placeholder={"Tell us about your news..."} image={image} onChange={handleChangeNewsContent} onChangeImage={handleChangeNewsImage}></LongTextInput>
                {/* <b style={{ marginTop: "5%" }}>Select News Tags</b> */}
                <br></br>
                <GeneralGreenBtn text="Post" />
            </Form>
        </>
    );
}

// edit/3umhg4tybhT8TWbY3vEu