import { Card } from "antd";

function Manage_client() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <Card
        title="Default size card"
        extra={<a href="#">manage</a>}
        style={{ width: 250 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">manage</a>}
        style={{ width: 250 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">manage</a>}
        style={{ width: 250 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">manage</a>}
        style={{ width: 250 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default Manage_client;
