import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./authContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry(failureCount, error: any) {
        // if (error?.status === 404) return false;
        if (error) return false;

        if (failureCount < 2) return true;
        else return false;
      },
    },
  },
});

interface AppProvidersProps {}

export function AppProviders(props: PropsWithChildren<AppProvidersProps>) {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
