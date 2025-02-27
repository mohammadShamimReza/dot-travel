"use client";
import { useBlogQuery, useDeleteBlogMutation } from "@/redux/api/blogApi";
import { IBlog } from "@/types";
import { Avatar, Card, message } from "antd";
import { useRef } from "react";
import AddBlogModal from "../modal/blog/AddBlogModal";
import EditBlogModal from "../modal/blog/EditBlogModal";

function Manage_blog() {
  const loadingData = [1, 2, 3, 4];
  const { data, isLoading } = useBlogQuery({
    role: "user",
  });
  const [deleteBlog] = useDeleteBlogMutation();

  const blogs = data?.data;
  const avatarRef = useRef(null);

  const handleDeleteAdmin = async (id: string) => {
    try {
      message.loading("Deleteting Blog");
      const result = await deleteBlog(id);

      if (result) {
        message.success("Blog deleted successfully");
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
      <>
        <AddBlogModal />
        <div className="text-lg text-center text-blue-700">Blog Not found</div>
      </>
    );
  }

  return (
    <>
      <AddBlogModal />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs?.map((blog: IBlog) => (
          <Card
            key={blog.id}
            title={blog.title}
            extra={<a href="#"></a>}
            style={{ width: 250 }}
          >
            {/* <div ref={avatarRef} className="flex justify-center align-middle">
              <RxAvatar className="w-8 h-8 adminshover:text-blue-600 text-blue-500" />
            </div> */}
            <p className="line-clamp-5">{blog.description}</p>
            <br />
            <div className="flex justify-evenly">
              <div className="">
                <EditBlogModal blog={blog} />
              </div>

              <button
                onClick={() => handleDeleteAdmin(blog.id)}
                className="p-2 border rounded-lg transition duration-300 transform hover:scale-125"
              >
                {" "}
                Delete
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Manage_blog;
