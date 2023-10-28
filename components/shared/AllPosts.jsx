import PostCard from "../cards/PostCard";

const AllPosts = ({ posts }) => {
  return (
   <section>
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-5">
        {posts.map((post) => (
          <PostCard 
          key={post._id}
          id={post._id}
          photo={post.photo}
          title={post.title}
          body={post.body}
          date={post.date.substring(0, 10)}
          tag={post.tags}
          /> 
        ))}
      </div>
   </section>
  )
}

export default AllPosts