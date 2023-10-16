export default function Page({ params }: { params: { slug: string } }) {
  return <div className="min-h-screen">My Post: {params.slug}</div>;
}
