import React, { useState } from "react";
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Testimonials from "../partials/Testimonials";
import StoryMenu from "../partials/StoryMenu";
import StoryOptions from "../partials/StoryOptions";

const Themes = ({ handleStory, handleData }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [data, setData] = useState({});

  const updateSelected = () => {
    setIsSelected(true);
  };
  const updateData = (received) => {
    setData(received);
  };

  console.log("In themes.js");
  console.log(data);
  return (
    <div>
      <Header />
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      {/* Unifactory text and "Begin your story" */}
      <div className="relative pt-16 pb-10 md:pt-32 md:pb-10 ">
        <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4 mt-16">
          <h1 className="h1 mt-16" data-aos="fade-up" data-aos-delay="200">
            Unifactory
          </h1>
          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Choose your story to begin with...
          </p>
        </div>
      </div>

      {/*  Story cards  */}
      {isSelected ? (
        <StoryOptions response={data} />
      ) : (
        <StoryMenu
          // handleStory={handleStory}
          handleData={updateData}
          handleSelected={updateSelected}
        />
      )}
    </div>
  );
};

export default Themes;
