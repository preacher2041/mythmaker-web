import { useFetchUserQuery } from "@/features/auth";

import { Spinner } from "../Elements";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const { data, isLoading } = useFetchUserQuery();

  if (isLoading) return <Spinner variant="light" />;
  return (
    <>
      {children}
      <div>
        Welcome to the dashboard {data?.firstName} {data?.lastName}
      </div>
    </>
  );
};
