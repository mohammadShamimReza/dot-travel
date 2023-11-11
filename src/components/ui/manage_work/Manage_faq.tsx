"use client";
import { useDeleteFAQMutation, useFAQQuery } from "@/redux/api/faqApi";

import { IFaq } from "@/types";
import { Avatar, Card, message } from "antd";
import { useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import AddFaqModal from "../modal/faq/AddFaqModal";
import EditFaqModal from "../modal/faq/EditFaqModal";

function Manage_faq() {
  const loadingData = [1, 2, 3, 4];
  const { data, isLoading } = useFAQQuery({
    role: "user",
  });
  const [deleteUser] = useDeleteFAQMutation();

  const faqs = data?.data;
  const avatarRef = useRef(null);

  const handleDeleteAdmin = async (id: string) => {
    try {
      message.loading("Deleteting faq");
      const result = await deleteUser(id);
      if (result) {
        message.success("faq deleted successfully");
      }
    } catch (error) {}
  };

  if (!data) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loadingData.map((item) => (
          <Card key={item} style={{ width: 250, marginTop: 16 }} loading={true}>
            <Card.Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        ))}
      </div>
    );
  }

  if (data?.data?.length === 0) {
    return (
      <div className="text-lg text-center text-pink-700">User Not found</div>
    );
  }

  return (
    <>
      <AddFaqModal />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {faqs?.map((faq: IFaq) => (
          <Card
            key={faq.id}
            title={faq.title}
            extra={<a href="#"></a>}
            style={{ width: 250 }}
          >
            <div ref={avatarRef} className="flex justify-center align-middle">
              <FaQuestion />
            </div>
            <p>{faq.description}</p>
            <br />
            <div className="flex justify-evenly">
              <div className="">
                <EditFaqModal faqs={faq} />
              </div>

              <button onClick={() => handleDeleteAdmin(faq.id)}>
                {" "}
                <AiFillDelete className="h-5 w-5 hover:text-pink-600 text-pink-500 hover:cursor-pointer transition duration-300 transform hover:scale-125" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Manage_faq;
