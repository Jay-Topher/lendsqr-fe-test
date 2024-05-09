import UsersTable from "./UsersTable";
import UserPagination from "./UserPagination";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/api";
import usePagination from "@/hooks/usePagination";
import CardContainer from "../CardContainer";

const Users = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const { totalPages, goToPage, setItemsPerPage, itemsPerPage, page } =
    usePagination(data?.length || 0);

  const users = data?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <h2>Users</h2>
      <CardContainer />
      {isError && <p>Something went wrong</p>}
      {isLoading && <p>Loading...</p>}
      {isSuccess && (
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
