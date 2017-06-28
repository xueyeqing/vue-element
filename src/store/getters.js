/**
 * Created by a1 on 17/6/26.
 */
const getters = {
  token: state => state.user.token,
  addRouters: state => state.permission.addRouters,
  permission_routers: state => state.permission.routers,
  roles: state => state.user.roles
}

export default getters
