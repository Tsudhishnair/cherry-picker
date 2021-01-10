(function(){
  let all_SHA_ele = document.querySelectorAll('clipboard-copy.btn.btn-outline');
  const commitShaList = [];
  for (const element of all_SHA_ele)
    {
      commitShaList.push(element.getAttribute('value'));
    }
  alert('Hey how are uou',commitShaList);
  console.log(commitShaList);
})();
