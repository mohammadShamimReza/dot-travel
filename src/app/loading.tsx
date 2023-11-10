import { Row, Space } from "antd";
import Image from "next/image";
import LoadingImgae from "../assets/Fast loading-rafiki.png";

const Loading = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Space>
        {/* <Spin tip="Loading" size="large" className="text-pink-500"></Spin> */}
        {/* <div className="text-pink-500 text-lg">Loading ...</div> */}
        <Image
          src={LoadingImgae}
          width={500}
          height={500}
          alt="Loading"
        ></Image>
      </Space>
    </Row>
  );
};

export default Loading;
