export const usersInfoSelector = ({user}) => ({
  users: user?.users||[],
  fetchUsersLoading: user?.fetchUsersLoading,
});
