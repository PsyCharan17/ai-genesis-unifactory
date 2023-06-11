import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swordsman from "../images/eldenring_style_swordsman.jpg";
import Inside_build from "../images/building_inside.jpg";
import Guy_in_build from "../images/guy_in_building.jpg";
import dark from "../images/22.png";
import cyber from "../images/33.png";
import mars from "../images/44.png";

import axios from "axios";

function StoryMenu({ handleData, handleSelected }) {
  const stor1 =
    "Cursed by the undead curse, you the chosen warrior have to embark on a perilous journey through the dark and treacherous world of Lordran. Along the way, you will encounter fierce enemies, unexpected allies, and uncover the secrets of the First Flame";
  const stor2 =
    "Set in a dystopian future, where advanced technology and corrupt corporations rule the world, you must navigate through the seedy underbelly of the city. Overthrow oppressive regimes, battle dangerous adversaries, form unlikely alliances, and ultimately change the course of history.";
  const stor3 =
    "As you gaze out the window of your spacecraft, you can see the red planet growing larger and larger. In just a few hours, you'll be landing on the surface of Mars - but this time, it won't be peaceful. Tensions have been rising between the human colonies on Mars and the Moon for months, and now they've finally boiled over into all-out war. As you prepare for battle, you can't help but wonder: how did it come to this?";

  let navigate = useNavigate();

  const [story1, setStory1] = useState(stor1);
  const [story2, setStory2] = useState(stor2);
  const [story3, setStory3] = useState(stor3);
  const [commonStory, setCommonStory] = useState("");

  const sendInitialStory1 = async () => {
    handleSelected(true);
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
          prompt: "write a story on " + story1 + "in 100 words",
        },
        config
      );
      // localStorage.setItem("payload", JSON.stringify(response.data));
      // handleStory(story1);
      handleData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const sendInitialStory2 = async () => {
    handleSelected(true);
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
          prompt: "write a story on " + story2 + "in 100 words",
        },
        config
      );
      handleData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const sendInitialStory3 = async () => {
    handleSelected(true);
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
          prompt: "write a story on " + story3 + "in 100 words",
        },
        config
      );
      handleData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 mb-32 md:py-20 border-t border-gray-800">
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div className="mb-8 mt-4">
                <img src={dark} />
              </div>
              <blockquote className="text-lg text-gray-400 grow mb-8">
                {story1}
              </blockquote>

              {/* <Link to="/createstory" className="mx-auto"> */}
              <a
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow "
                href="#0"
                onClick={sendInitialStory1}
                value={story1}
              >
                Create
              </a>
              {/* </Link> */}
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div className="mb-8 mt-4">
                <img src={cyber} />
              </div>
              <blockquote className="text-lg text-gray-400 grow mb-8">
                {story2}
              </blockquote>
              {/* <Link to="/createstory" className="mx-auto"> */}
              <a
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow"
                href="#0"
                onClick={sendInitialStory2}
              >
                Create
              </a>
              {/* </Link> */}
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div className="mb-8 mt-4">
                <img src={mars} />
              </div>
              <blockquote className="text-lg text-gray-400 grow mb-8">
                {story3}
              </blockquote>
              {/* <Link to="/createstory" className="mx-auto"> */}
              <a
                className="btn text-white bg-indigo-900 hover:bg-indigo-500 shadow"
                href="#0"
                onClick={sendInitialStory3}
              >
                Create
              </a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryMenu;
