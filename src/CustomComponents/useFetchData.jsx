import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "mhms9uzxftj2",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchData = () => {
  const [projectData, setProjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const { items } = await client.getEntries({ content_type: "portFolio" });

    const data = items.map((item) => {
      const {
        blurHashCode,
        title,
        projectType,
        description,
        gitLink,
        liveSite,
      } = item.fields;
      const img = item.fields.projectScreenshot.fields.file.url;
      const id = item.sys.id;
      return {
        id,
        img,
        blurHashCode,
        title,
        projectType,
        description,
        gitLink,
        liveSite,
      };
    });
    setProjectData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { projectData, isLoading };
};

export default useFetchData;
