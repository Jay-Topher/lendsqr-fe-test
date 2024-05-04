import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // in tests any unsuccessful query should fail immediately without retrying
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

interface MemoryRenderOptions
  extends MemoryRouterProps,
    Omit<RenderOptions, "wrapper"> {}

const makeProvidersWithMemoryRouter =
  ({ ...memoryRouterProps }: MemoryRenderOptions) =>
  ({ children }: { children: React.ReactNode }) => {
    return (
      <Providers>
        <MemoryRouter {...memoryRouterProps}>{children}</MemoryRouter>
      </Providers>
    );
  };

const renderWithMemoryRouter = (
  ui: ReactElement,
  options?: MemoryRenderOptions
) => {
  const { basename, initialEntries, initialIndex } = options || {};
  const Providers = makeProvidersWithMemoryRouter({
    basename,
    initialEntries,
    initialIndex,
  });
  return render(ui, { wrapper: Providers, ...options });
};

// eslint-disable-next-line react-refresh/only-export-components
export { renderWithMemoryRouter as renderWithRouter };
