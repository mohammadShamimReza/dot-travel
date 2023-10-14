"use client";
import { Collapse, Divider, Typography } from "antd";

const { Panel } = Collapse;
const { Title, Text } = Typography;

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 min-h-screen">
      <Title
        level={2}
        className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6"
      >
        About Us
      </Title>

      <Text className="text-gray-700 mb-4 md:mb-6">
        At Dot-travel, we believe that travel can be made easy, enjoyable, and
        more sustainable. Our mission is to create a world where anyone can
        belong anywhere and explore the unique experiences the world has to
        offer.
      </Text>

      <Text className="text-gray-700 mb-4 md:mb-6">
        Whether an apartment for a night, a castle for a week, or a villa for a
        month, Dot-travel connects people to unique travel experiences at any
        price point, in more than 220 countries and territories.
      </Text>

      <Text className="text-gray-700 mb-4 md:mb-6">
        Were a community built on trust, creating a safe and welcoming
        environment for guests and hosts. We aim to be inclusive, diverse, and
        available for everyone, everywhere.
      </Text>

      <Divider />

      <Title
        level={3}
        className="text-2xl md:text-2xl font-extrabold mb-4 md:mb-6"
      >
        Frequently Asked Questions
      </Title>

      <Collapse defaultActiveKey={["1"]}>
        <Panel header="What is Dot-travel?" key="1" className="bg-pink-50">
          <Text className="text-gray-700">
            Dot-travel is an online platform that connects travelers with unique
            places to stay and experiences around the world. You can book
            accommodations and explore activities hosted by local hosts in over
            220 countries and territories.
          </Text>
        </Panel>
        <Panel
          header="How do I become an Dot-travel host?"
          key="2"
          className="bg-pink-50"
        >
          <Text className="text-gray-700">
            Becoming an Dot-travel host is easy. You can create a listing, set
            your own price, and decide when and how you want to host guests.
            Dot-travel provides tools, information, and support to help you get
            started.
          </Text>
        </Panel>
        <Panel header="Is Dot-travel safe?" key="3" className="bg-pink-50">
          <Text className="text-gray-700">
            Safety is a top priority at Dot-travel. We have features like
            reviews, host guarantee, and secure payment processing to ensure the
            safety of our community.
          </Text>
        </Panel>
      </Collapse>

      <Title
        level={3}
        className="text-2xl md:text-2xl font-extrabold mt-4 mb-4 md:mt-8 md:mb-6"
      >
        Our Team
      </Title>

      <Text className="text-gray-700 mb-4 md:mb-6">
        Meet the dedicated team behind Dot-travel s mission. We come from
        diverse backgrounds and share a common passion for making travel
        experiences extraordinary.
      </Text>

      <Title
        level={3}
        className="text-2xl md:text-2xl font-extrabold mt-4 mb-4 md:mt-8 md:mb-6"
      >
        Our Values
      </Title>

      <Text className="text-gray-700 mb-4 md:mb-6">
        Our values drive everything we do. They guide our decisions and shape
        our interactions with our community of guests, hosts, and partners.
      </Text>

      <Title
        level={3}
        className="text-2xl md:text-2xl font-extrabold mt-4 mb-4 md:mt-8 md:mb-6"
      >
        Sustainability
      </Title>

      <Text className="text-gray-700 mb-4 md:mb-6">
        We are committed to sustainability and responsible travel. Dot-travel is
        taking steps to reduce our environmental footprint and support
        eco-friendly travel experiences.
      </Text>
    </div>
  );
};

export default AboutUs;
