# WPX 18 NoDB Review

<hr/>

## Frontend Checklist

- reset.css
- change our title (in HTML)

### package-json setup

- add proxy
- add main

### dependencies

- axios

### folder structure

- src/

  - App.js => class component with state

- component/

  - HEADER/
    ~ Title
    ~ SearchBar

  - ENTRIES/
    ~ POSTS/
    `Date.js` DeleteButton.js
    ` Entry.js

    ~ INPUT/
    `updateDate.js - function to update post date` updateText.js - function to update post text
    ` SubmitButton.js - button to send post to page

<hr/>

## Backend Checklist

### dependencies

- express

### server folder structure

- server/
  - index.js
  - controller/
    - ToDoController.js

### endpoints

- get: "/api/todos"
- post: "/api/addtodo"
- put: "/api/todoupdate/:id"
- delete: "/api/deletetodo/:id"

### data

```js
// How will we structure our data?
{
    "id": 1,
    "productName": "shirt",
    "image": "url"
    "size": "small",
}
```
