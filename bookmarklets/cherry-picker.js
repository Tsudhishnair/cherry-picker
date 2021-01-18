// Code that copies gets the SHA's from the PR and shows them in the alert popup

// (function () {let all_SHA_ele = document.querySelectorAll('clipboard-copy.btn.btn-outline');let all_or_some = window.prompt(`Want to cherry-pick the 'entire' thing or 'some' commits `);let selected_commit_id;if(all_or_some == 'some'){selected_commit_id = window.prompt('Specify the commit position/index Eg: 1,2,4...')}const commitShaList = [];for (const element of all_SHA_ele) {commitShaList.push(element.getAttribute('value'));}let filtered_commit_list;if(all_or_some == 'some'){let index_array_list = selected_commit_id.split(',');filtered_commit_list = commitShaList.filter(function(element, index ){if(index_array_list.includes(`${index+1}`)){return element}});}let cmd = all_or_some == 'some' ? `git cherry-pick ${filtered_commit_list.join(' ')}`  : `git cherry-pick ${commitShaList.join(' ')}`;window.alert(cmd);console.log(cmd);})();

(function () {
  let all_SHA_ele = document.querySelectorAll("clipboard-copy.btn.btn-outline");
  let all_or_some = window.prompt("Want to cherry-pick the 'entire' thing or 'some' commits ");
  let selected_commit_id;
  if(all_or_some == 'some'){
    selected_commit_id = window.prompt("Specify the commit position/index Eg: 1,2,4...")
  }
  const commitShaList = [];
  for (const element of all_SHA_ele) {
    commitShaList.push(element.getAttribute("value"));
  }
  let filtered_commit_list;
  if(all_or_some == 'some'){
    let index_array_list = selected_commit_id.split(',');
    filtered_commit_list = commitShaList.filter(function(element, index ){
      if(index_array_list.includes(`${index+1}`)){
        return element
      }
    });
  }
  let cmd = all_or_some == 'some' ? `git cherry-pick ${filtered_commit_list.join(" ")}`  : `git cherry-pick ${commitShaList.join(" ")}`;
  window.alert(cmd);
  console.log(cmd);
})();