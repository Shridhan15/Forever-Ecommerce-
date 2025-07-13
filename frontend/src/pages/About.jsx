import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut alias,
            nemo animi aperiam magnam facere maxime architecto suscipit
            reprehenderit rerum voluptatibus nesciunt maiores voluptatum esse
            laudantium omnis est, incidunt quam mollitia debitis. Facere!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sit
            dolorem aperiam earum alias ipsam, molestias, neque id, blanditiis
            facilis incidunt velit ab?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            accusantium quod numquam mollitia dicta et?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b className="">Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
            voluptatum cum, inventore odio reprehenderit perspiciatis, eius esse
            autem natus deserunt et!
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b className="">Convinience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            natus asperiores dolorem at, nisi laudantium.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b className="">Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi ab
            sed magni quidem consequuntur neque perferendis qui optio, excepturi
            nobis ut libero, unde at esse natus!
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
