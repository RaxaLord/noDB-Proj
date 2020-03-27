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

    - input onChange >> if entry contains i then send entry to posts

  - ENTRIES/
    ~ POSTS/

    - Date.js`
    - DeleteButton.js
    - Entry.js

    ~ INPUT/
    Form >> - UpdateDate.js >> function to update post date - UpdateText.js >> function to update post text - SubmitButton.js >> button to send post to page

<hr/>

## Backend Checklist

### dependencies

- express

### server folder structure

- server/
  - index.js
  - controller/
    - controller.js

### endpoints

- get: "/api/posts"
- post: "/api/add_post"
- put: "/api/update_post/:id"
- delete: "/api/delete_post/:id"

### data

```js
// How will we structure our data?
{
  "id": 1,
  "date": "03/24/2020",
  "content": "sentences"
}
```
