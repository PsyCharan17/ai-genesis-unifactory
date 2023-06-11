import { React, useState, useEffect } from "react";
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Swordsman from "../images/eldenring_style_swordsman.jpg";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import FeatImage01 from "../images/features-03-image-01.png";
import FeatImage02 from "../images/features-03-image-02.png";
import FeatImage03 from "../images/features-03-image-03.png";

const CreateStory = ({ sentData, sentPreviousStory }) => {
  // let location = useLocation();
  const [receivedState, setReceivedState] = useState();
  const [content, setContent] = useState();
  const [optionChoice, setOptionChoice] = useState("");

  useEffect(() => {}, [content]);

  // First option submit function
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
          prompt: "Select Option 1",
        },
        config
      );
      // console.log(content);
      // console.log(response);
      // console.log(response.data);
      localStorage.setItem("payload", JSON.stringify(response.data));
      setContent(response.data);
      // const res = response.data;
      // const storyElem = document.getElementById("story");
      // storyElem.innerText = res.story;
      // console.log(content);
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
          prompt: "Select Option 2",
        },
        config
      );
      // console.log(response.data);
      setContent(response.data);
      // const res = response.data;
      // const storyElem = document.getElementById("story");
      // storyElem.innerText = res.story;
      console.log(content);
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
          prompt: "Select Option 3",
        },
        config
      );
      // console.log(response.data);
      setContent(response.data);
      // const res = response.data;
      // const storyElem = document.getElementById("story");
      // storyElem.innerText = res.story;
      console.log(content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <div className="relative pt-16 pb-30 md:pt-32 md:pb-10 flex flex-row">
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
                {/* <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" /> */}
                <img src={"https://geology.com/world/world-map.gif"} />
              </div>
              <blockquote
                className="text-lg text-gray-400 grow mb-8"
                id="story"
              >
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
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow mt-4 lg:pr-16 xl:pr-16 lg:pl-12 xl:pl-16"
                onClick={optionChoosen1}
              >
                {/* /* {sentData.option1}   */}
                {JSON.parse(localStorage.getItem("payload")).option1}
              </a>

              <a
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow mt-4"
                href="#0"
                onClick={optionChoosen2}
              >
                {JSON.parse(localStorage.getItem("payload")).option2}
              </a>
              <a
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow mt-4"
                href="#0"
                onClick={optionChoosen3}
              >
                {JSON.parse(localStorage.getItem("payload")).option3}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
