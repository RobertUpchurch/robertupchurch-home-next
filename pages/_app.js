import { useState } from "react";
import Head from "next/head";
import "../index.css";
import { AppProvider } from "src/context/AppContext";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import DefaultLayout from "src/layout/DefaultLayout";
import Toasts from "src/components/base/Toasts";
import Modal from "src/components/base/Modal";

function RobertUpchurch({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            retry: process.env.NODE_ENV === "production" ? true : false,
          },
        },
      })
  );

  return (
    <>
      <Head>
        <title>{Component.title || "RobertUpchurch"}</title>
        <meta
          name="description"
          content={Component.description || "Ethereum Developer"}
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AppProvider>
            {getLayout(Component, pageProps)}
            <Toasts />
            <Modal />
          </AppProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

const getLayout = (Component, pageProps) => {
  switch (Component.layout) {
    case "default":
      return (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      );
    default:
      return <Component {...pageProps} />;
  }
};

export default RobertUpchurch;
