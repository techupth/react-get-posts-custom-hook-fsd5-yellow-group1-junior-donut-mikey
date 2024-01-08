import { useState, useEffect } from "react";
import axios from "axios";

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const results = await axios("http://localhost:4000/posts");
        setPosts(results.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    getPosts();
  }, []);

  return { posts, isError, isLoading };
}
