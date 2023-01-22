async function populateData() {
  const res = await fetch('/api/v1/tasks');
  const data = await res.json();
  const taskList = document.getElementById('taskList');

  data.map((doc) => {
    let li = document.createElement('li');
    li.className = 'task';
    const div = document.createElement('div');
    li.append(div);
    const p = document.createElement('p');

    div.append(p);
    p.append(doc.name);
    taskList.appendChild(li);
  });
}

populateData();
