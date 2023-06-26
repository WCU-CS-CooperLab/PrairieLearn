# WCU changes to get prairielearn to work

1. got prairielearn to startup with default database
2. tarred /var/postgress
3. copyed using docker cp
4. unzipped on server
5. chowned to correct user and group recursively
6. addded server postgress directory in docker config file.
7. set up reverse proxy and google oauth api
8. set up ssl for oauth
9. made changes so only WCUPA email would work
   - [apps/prairielearn/src/pages/authCallbackOAuth2/authCallbackOAuth2.js](apps/prairielearn/src/pages/authCallbackOAuth2/authCallbackOAuth2.js)
   - [apps/prairielearn/src/pages/authLogin/authLogin.html.ts](apps/prairielearn/src/pages/authLogin/authLogin.html.ts)
10. set up admin access
11. set up csc240 prairielearn course with github deploy key for our server.
12. added csc240 to our server prairielearn using admin page
13. added instructors to csc240
