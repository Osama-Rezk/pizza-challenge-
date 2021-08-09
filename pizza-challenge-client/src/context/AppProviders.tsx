import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

interface AppProvidersProps {}
function AppProviders(props: PropsWithChildren<AppProvidersProps>) {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export { AppProviders };
