import HomePage from "src/pages/home/HomePage";
import { dehydrate, QueryClient } from "react-query";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 12 * 60 * 60, // EVERY 12 HOURS REFRESH IN PRODUCTION
  };
}

const Page = () => <HomePage />;

Page.title = null;
Page.description = null;
Page.restricted = false;
Page.layout = "default";
export default Page;
