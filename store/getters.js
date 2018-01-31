export default {
  isAuthenticated: state => state.user,
  getDisplayName: state => state.user ? state.user.displayName : null,
  getUserPhoto: state => state.user ? state.user.photoURL : null,
  getEmail: state => state.user ? state.user.email : null,
  getUserData: state => state.userData,
  getProfile: state => state.userData || {}
}
