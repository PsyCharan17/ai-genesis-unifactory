import { React, useEffect, useState } from "react";
import axios from "axios";

const StoryOptions = (props) => {
  const [content, setContent] = useState(props.response);
  console.log("inside story options");
  console.log(content);

  const endStory = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/storypdf",
        {
          storyname: "Cyberpunk Underworld",
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const optionChoosen1 = async () => {
    console.log("Option 1");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/storygen",
        {
          prompt: "Select Option 1 continue in 100 words",
        },
        config
      );
      setContent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Second option submit function
  const optionChoosen2 = async () => {
    console.log("Option 2 ");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/storygen",
        {
          prompt: "Select Option 2 continue in 100 words",
        },
        config
      );
      setContent(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Third option submit function
  const optionChoosen3 = async () => {
    console.log("Option 3");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/storygen",
        {
          prompt: "Select Option 3 continue in 100 words",
        },
        config
      );
      setContent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <p>{response.story}</p> */}
      <div className="relative pt-4 pb-30 md:pt-8 md:pb-10 flex flex-row">
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center mt-16">
          {/* Image */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              className="flex flex-col h-full p-6 bg-gray-800 w-200 justify-center items-center"
              data-aos="fade-up"
              style={{ marginLeft: "50px" }}
            >
              <div className="mb-8 mt-4">
                <img
                  src={`data:image/png;base64,${content.image}`}
                  width="500"
                  height="600"
                />
                {/* <img src={"https://geology.com/world/world-map.gif"} /> */}
              </div>
              <blockquote
                className="text-lg text-gray-400 grow mb-8"
                id="story"
              >
                {content.story}
                {/* {JSON.parse(localStorage.getItem("payload")).story} */}
                {}
              </blockquote>
            </div>
          </div>
          {/* Options */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="md:pl-4 lg:pl-12 xl:pl-16 lg:pr-16 xl:pr-16 min-h-500">
              <h3 className="h3 mb-3">What happens next...</h3>
              <a
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow mt-4 mb-4"
                href="#0"
                onClick={endStory}
              >
                End Story
              </a>

              <a
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow mt-4 lg:pr-16 xl:pr-16 lg:pl-12 xl:pl-16"
                onClick={optionChoosen1}
              >
                {content.option1}
                {/* /* {sentData.option1}   */}
                {/* {JSON.parse(localStorage.getItem("payload")).option1} */}
              </a>

              <a
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow mt-4"
                href="#0"
                onClick={optionChoosen2}
              >
                {content.option2}
                {/* {JSON.parse(localStorage.getItem("payload")).option2} */}
              </a>
              <a
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow mt-4"
                href="#0"
                onClick={optionChoosen3}
              >
                {" "}
                {content.option3}
                {/* {JSON.parse(localStorage.getItem("payload")).option3} */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryOptions;
