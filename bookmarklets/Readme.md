# Cherry picking using - bookmarklets
This uses the bookmark concept in the browser,hence unlike extensions this is suitable across different browsers. 

## How this works
The user need to add the cherry-pick-bookmarklet link as a bookmark in the browser they are using. In order to use this, the user needs to be in the commits tab of the PR which they want to cherry pick. In order to get the commits in one go the user just needs to click on the `cherry-picker` bookmark, a window alert wil be shown with all the commits in that PR along with `git cherry-pick` added as prefix to the list of commits. Copy the text shown in the alert and use.

### Steps
* Clone the repo and run index.html in the browser you want to add this.
* Copy the `cherry-picker` link to the bookmark section simply by dragging the link
* Done - The bookmark is ready to use.