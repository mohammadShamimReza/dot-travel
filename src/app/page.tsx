import ReviewCarousel from "@/components/ui/Reviews/ReviewCarousel";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline h-96">
      Hello world!
      <Spin indicator={antIcon} />
      <ReviewCarousel />
    </h1>
  );
}
