export default function ({ $state, $actions, redirect, req }) {
  if (process.server && req.email) {
    $actions.authUser({
      token: req.token,
      email: req.email
    })
  }
  if (!$state.user.authenticated) {
    return redirect('/register')
  }
}
