
# Login UI for Qencode

This project was done using Next.js with TypeScript and TailwindCSS.
Additional libraries used:
- React-hook form
- Axios
- NextUI


## Run Locally

Clone the project

```bash
  git clone https://github.com/davinnchii/qencode_tt.git
```

Go to the project directory

```bash
  cd qencode_tt
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Demo

[Netlify Deploy](https://dapper-tarsier-99201b.netlify.app/)


## Project Details
Here are few notes about current implementation:
- General
  - On a design there is a link to Sign Up page, and it is also on a demo, which isn't described in the API documentation and can't be implemented with the data I had at the moment of completing a task, so it is just a link to '#'.
- Login
  - There is no any UI for successful login on the design, so I decided just to notify the user with the modal, which tells that the login is successful and this modal can be modified and styled in a more better way, but at the moment it just kind of a notification for a user.
  - In case of some errors(failed login), validation problems are displayed on the page. I didn't saw all possible server login errors, but covered the probably most usual ones. If it is necessary to cover all the server-side errors, I'd like to do that if I have them described.
- Password reset
  - There is no API endpoint to check if the user with provided email exists, so on that page there is no validation for that.
  - In the `password set` request, both a `token` and a `secret` are required. However, I couldn't obtain them from the data I had. Nevertheless, I described them in the request. From what I understood, you can retrieve the token from the URL, which can be achieved either through the Next.js App router or simply by parsing the current URL.
  - I couldn't reproduce all of the server errors on this page, so validation error is only made for new password and confirm password being different.
  - After entering the email user is redirected to new password page just to show all the functionality in simpler way.
