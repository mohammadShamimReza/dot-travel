"use client";
import { useBlogQuery } from "@/redux/api/blogApi";
import { useFAQQuery } from "@/redux/api/faqApi";
import { IBlog, IFaq } from "@/types";
import { Collapse, Divider, Typography } from "antd";

const { Panel } = Collapse;
const { Title, Text } = Typography;

const AboutUs = () => {
  const { data: faqDatas, isLoading: faqIsLoading } = useFAQQuery({});
  const { data: blogDatas, isLoading: blogIsLoading } = useBlogQuery({});

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 min-h-screen">
      {blogDatas?.data?.map((blogData: IBlog) => (
        <div className="" key={blogData.id}>
          <Title
            level={2}
            className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6"
          >
            {blogData.title}
          </Title>

          <Text className="text-gray-700 mb-4 md:mb-6">
            {blogData.description}
          </Text>
        </div>
      ))}

      <Divider />

      <Title
        level={3}
        className="text-2xl md:text-2xl font-extrabold mb-4 md:mb-6"
      >
        Frequently Asked Questions
      </Title>

      <Collapse defaultActiveKey={["1"]}>
        {faqDatas?.data?.map((faqData: IFaq) => (
          <Panel
            header={faqData.title}
            key={faqData.id}
            className="bg-blue-50 text-center"
          >
            <Text className="text-gray-700">{faqData.description}</Text>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default AboutUs;
