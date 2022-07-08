## **To run the project**

Please make sure `Node JS` is installed in your system. Then

```shell
npm i
npm run start
```

Once the server starts, visit http://localhost:9000 to view the page.

Note: The dist directory has been pushed to make it easy to run the application.
To do a fresh build to update the dist directory 

 ```shell
npm run build
npm run start
```

## **Email logins to use**

1.  Username: emma@hogwarts.com  
    Password: herm
2.  Username: daniel@hogwarts.com  
    Password: harry
3.  Username: rupirt@hogwarts.com  
    Password: ron

Note: The login information and all the email details of the particular user are stores in local browser session storage. The value is loaded when the page is hit first time.  
To reset the values please clear the Session Storage of the http://localhost:9000 in the Application tab in developer tools or clear all the cookies.

## **Features**
1.  **Login**  
    - Using the login details mentioned above you can log into the application
2.  **Mail count**
    - The `Inbox email count` will be displayed on the `left navigator section` and the `mail icon in the top nav`.
    - `Sent Mail` count will be displayed on the `left navigator section`
    - `Draft` count is a `static value` for some users. It is not dynamic/
2. **Compose Email**
    - Compose email will open a pop up to compose the email to be sent.
    - On clicking of `Send` the Sent Mail on the navigator section will be updated and if the `To` address is one of the above mentioned emails it will be present in that user's inbox.
    - While saving the sent mail the `current time` is saved and displayed on the inbox. The `time is not` as `intelligent` as the mock to `differentiate current day and past days`. 
3. **Unread Email and Inbox**
    - Unread email are highlighted in the inbox with a darker color and bold text.
    - `Click of unread email` will open a popup to `show the mail` and `mark it as read`.
    - `Unread email count` is shown as the `bell icon in the top nav`
    - `Labels` and `Attachment` in the inbox are `static based on mock data`.
4. **Delete Email**
    - `Select` mails by clicking on the checkbox and then `click delete icon` to delete the emails.
    - Inbox mail count will be updated to reflect the new number of mails after deletion.
5. **Hamburger**
    - Click the hamburger will expand the left nav to show the `Profile Name` and `Profile Picture` of the particular user
    - The `rest of the content` on the left nav are `static`
    - Clicking the hamburger again will collapse the left nav.
6. **Logout**
    - Clicking on `Log out` at the top nav will `redirect to login page`
    - You can again login with a same or different user.
7. **Responsive View**
    - Just to make sure it doesnt look bad in small resolutions, any resolution `below 800px wont show the navigator`. The navigator can be merged with the left nav if needed but for simplicity I have just hidden it.

**Rest of the elements in the dashboard page are just static**

## **Code Base**

1. Uses `React` for UI components, `React Router Dom` for client side routing, `Webpack` for bundling, `Babel` for transpliation, `Jest and React Testing Library` for test cases.
2. To run test cases use `npm run test`.
3. The project has a sample `theme.scss` to add the priamry colors and common mixins to define the theme of the website, making it easy to modify the theme.

