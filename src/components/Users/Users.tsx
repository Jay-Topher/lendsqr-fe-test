import UsersTable from "./UsersTable";
import UserPagination from "./UserPagination";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/api";
import usePagination from "@/hooks/usePagination";
import CardContainer from "../CardContainer";
import { fetchLocalUsers } from "@/utils";

const Users = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const { data: localData, isLoading: localLoading, isSuccess: localSuccess } = useQuery({
    queryKey: ["localUsers"],
    queryFn: fetchLocalUsers,
    enabled: isError,
  });

  const { totalPages, goToPage, setItemsPerPage, itemsPerPage, page } =
    usePagination(data?.length || 0);

  const userData = data || localData;
  const users = userData?.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const dataLoading = isLoading || (isError && localLoading);

  return (
    <div>
      <h2>Users</h2>
      <CardContainer />
      {isError && <p>Something went wrong, serving local users instead</p>}
      {dataLoading && <p>Loading...</p>}
      {(isSuccess || localSuccess) && (
        <>
          <UsersTable users={users || []} />
          <UserPagination
            totalItems={data?.length || 0}
            totalPages={totalPages}
            goToPage={goToPage}
            setItemsPerPage={setItemsPerPage}
            itemsPerPage={itemsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default Users;
