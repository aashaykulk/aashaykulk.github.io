
// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-center max-w-2xl">
        This is where my blog posts will be displayed. I will use dynamic routing to handle individual blog posts.
      </p>
    </div>
  );
}
