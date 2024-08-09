import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "6v3hl0191gby",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});
export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = client.getEntries({ content_type: "projects" });
      const projects = (await response).items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img_url = image?.fields?.file?.url;
        return { title, url, id, img_url };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
