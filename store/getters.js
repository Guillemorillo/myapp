export default {
  isAuthenticated: state => state.user,
  getDisplayName: state => state.displayName,
  getUsers: state => state.users
}
