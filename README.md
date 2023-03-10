# Plan

## Done
1. Add React-router-dom: https://blog.webdevsimplified.com/2022-07/react-router/
1. Add *public* and *dashboard* section
1. Add Auth
1. Restrict access to dashboard to logged-in users only
1. Enable API
1. Make it so all users are added to the "nonAdmin" group by default.

## In progress
1. Show "Login" or "Welcome user" on header depending on login status. Fix bug that requires reload to change status. https://dev.to/kwhitejr/useauth-aws-amplify-auth-react-hooks-easy-auth-management-2hon

## Pending
1. Allow only "owner" and "admin" to update enterprises
1. Disallow duplicated emails, use pre-sign-up lambda and search for email in Cognito.
1. Allow users to change password (see https://dev.to/erikch/react-signuplogindelete-user-application-with-amplify-1722)

# Nice to have
1. Make it so when logging out the user is redirected to the home page.
1. Add Google Captcha on Sign-up and Login 
1. Styling: https://www.youtube.com/watch?v=weT3YwBZt-k
1. My email account should be automatically validated and added to the "admin" group.