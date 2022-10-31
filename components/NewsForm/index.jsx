import ShortTextInput from "../ShortTextInput";
import LongTextInput from "../LongTextInput";
import DateInput from "../DateInput";
import DateCalendar from "../DateCalendar";
import TimeInput from "../TimeInput";
import { useState } from "react";
import styled from "styled-components";
import TopBanner from "../TopBanner";
import GeneralGreenBtn from "../GeneralGreenBtn";

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
    onChangeNewsDescription,
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

    function handleChangeNewsDescription(newsDescription) {
        onChangeNewsDescription(newsDescription);
    }

    function handleChangeNewsImage(newsImage) {
        onChangeNewsImage(newsImage);
    }

    function handleChangeNewsTags(newsTags) {
        onChangeNewsTags(newsTags);
    }

    return (
        <>
            <TopBanner text={"Create a News"} />
            <Form onSubmit={onConfirm}>
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
                    value={news.newsCreator}
                    onChange={handleChangeNewsCreator}
                    required={true}
                />
                <b style={{ marginTop: "5%" }}>Describe your News*</b>
                <br></br>
                <LongTextInput value={news.newsContent} placeholder={"Tell us about your news..."} image={image} onChange={handleChangeNewsDescription} onChangeImage={handleChangeNewsImage}></LongTextInput>
                {/* <b style={{ marginTop: "5%" }}>Select News Tags</b> */}
                <br></br>
                <GeneralGreenBtn type="submit" text="Post" />
            </Form>
        </>
    );
}