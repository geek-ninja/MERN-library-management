[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

-Check out the App **https://my-mean-library.netlify.app/** <br>
Authentication for admin access(try this):<br>
username : admin<br>
password : admin123<br>

## Available Scripts

In the project directory, you can run inside library(frontend) and server(backend):

### `npm install`

### `npm start`

## screenshot of the app

![](home.png)
![](admin.png)
![](book_issue.png)
![](student.png)

set a default authentication for admin access from mongodb example:<br>
username : admin<br>
password : admin123<br>
create your own student and librarian .
<br>
- Admin
- Can add/update/delete librarians
- Can add/update/delete students
- Student
- Can request a book on a present/future date
- Can view the allotted books
- Can view the status of the request
- Can cancel the request
- Can search for the book
- Can see the outstanding balance
- Librarian
- Can view/add/update/delete a book
- Can mark the book as returned
- Can allot a book
- Can see the student-specific payment balance
- Can settle up the balance
- Can view/add/update/delete students

## setting env for mongodb atlas

```javascript
PORT = 5000
DATABASE_ACCESS = "mongodb+srv://{userName}:{password}@cluster0.jccv1.mongodb.net/qLibDb?retryWrites=true&w=majority"
JWT_KEY = secret

```

