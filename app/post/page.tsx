import ViewUserButton from "../components/ViewUserButton";
import Lagi from "../components/Lagi";
import CardList from "../components/CardList";
import styles from "./postPage.module.css";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

interface Ipost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const page = async () => {
  const response = await fetch(baseUrl);
  const posts: Ipost[] = await response.json();
  return (
    <>
      <div className={styles.text}>ppp</div>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
      <Lagi />
    </>
  );
};

export default page;
