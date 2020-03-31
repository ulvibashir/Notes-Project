## React Step Project

Create Note application with several pages and following functionality. Design is up to you, no needs to add any fancy styles. No styles at all is prohibited too, so there should be at least basic styles to make the page looks accurate.

This step project is dedicated to develop in small teams with 2 people, so you need to create only one repository. Also `master` branch of your repo should be protected from push by 1 approval review from your teammate.

Every time you need to update the master branch - Pull Request/Merge Request should be created, reviewed and approved.

Here is the links to guides about how to use advanced Git features:
 - [How to create protection rule for master branch](https://www.youtube.com/watch?v=s2dcCfGYQkY&t=8s)
 - [How to manage git branches](https://www.youtube.com/watch?v=nqVxeNWT20U&t=6s)
 - [How to manage Pull Requests](https://www.youtube.com/watch?v=1iikxkn2ZVk)
 
#### Dividing of your tasks 
It is up to you, **but** every teammate should complete **50% of the whole step project**. It can be easily checked by the mentor while grading process, so be honest with your teammate and yourself.

## API
To have ability to send HTTP requests and have responses you should use JSON server to simulate working with a real backend.

Here is the [link](https://github.com/typicode/json-server) to documentation.

To create your fake data base follow the steps in [this tutorial](https://www.youtube.com/watch?v=1zkgdLZEdwM)

### Home page
Show the list of Note items with short information about each of them.
You need to get the list of items from your json server that you created following the tutorial above.

## Header
It should contain simple navigation bar with logo (picture is up to you) and 3 buttons:
1) `Actual` - after a click on this button user should see filtered list of Notes. Filter rule is - leave only Note items that are **not** completed.
2) `Archive` - after a click on this button user should see filtered list of Notes. Filter rule is - leave only Note items that are **completed**.
3) `Create` - after click on this button user should be redirected to the `/create` page of your application, which contains the form to create new Note item. After submission of this form you should send request to jason server to create new Note item, and only after having a success response - redirect user back to the `/` homepage to see updated list of Note items.

## Single note page
The address string of this page should be dynamically changed depending of each item that user try to see.

`/notes/1` = means that user is trying to see the information about Note item with `id` 1. 
`/notes/44Ffhu2` = means that user is trying to see the information about Note item with `id` 44Ffhu2. 

And so on.

User should have ability to edit Note item after click on the `Edit` button. After click on `Edit` button it's text should be changed to `Save`. After all edits was done, user can click the `Save` button and you need to send async request to json server to update the information about this Note item.

Similar thing with `Archive` button. After click on it - send async request to json server to update the status of this Note item.

`Delete` button should be implemented too. After click user should see confirmation window. After confirmation you send async request tot json server and delete this Note item from your server. After you have success response, user should be redirected to the `/` homepage to see updated list of Note items. If user did not comfirm the deletion of the Note item - you don't need to send any request, just hide the confirmation window and let user on the same page.

## Create page
Place a form on this page, that will allow the user create a new Note item. 

Required fields are - Title and Note text. If color wasn't selected - use random default color for created item.

#### Advanced create page feature
Implementing of this feature is **not required**, but if you are interested and did all previous requirements - try to implement adding a checklist into the Note text as an option for user.
