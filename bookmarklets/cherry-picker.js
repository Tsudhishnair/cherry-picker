// Code that copies gets the SHA's from the PR and shows them in the alert popup
(function () {
  let all_SHA_ele = document.querySelectorAll("clipboard-copy.btn.btn-outline");
  const commitShaList = [];
  for (const element of all_SHA_ele) {
    commitShaList.push(element.getAttribute("value"));
  }
  let cmd = `git cherry-pick ${commitShaList.join(" ")}`;
  window.alert(cmd);
  console.log(cmd);
})();