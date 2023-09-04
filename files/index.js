const usersurl = "https://reqres.in/api/users?page=2";
document.getElementById("get").addEventListener("click", users);
document.getElementById("myform").addEventListener("submit", post);
document.getElementById("del").addEventListener("click", dele);
document.getElementById("put").addEventListener("click", put);
document.getElementById("patch").addEventListener("click", patch);

function users() {
  const childs = document.getElementById("target");
  childs.innerHTML = "";
  const options = {
    method: "GET",
  };
  var html = "";
  const users = fetch(usersurl, options)
    .then((response) => response.json())
    .then((data) => {
      const users = data.data;
      console.log(users);
      for (let i = 0; i < users.length; i++) {
        html =
          html +
          `<div class='card '><div><img src=${users[i].avatar}>${users[i].email}<br>${users[i].first_name}</div></div>`;
      }

      const targ = document.getElementById("target");
      target.insertAdjacentHTML("afterbegin", html);
    });
}

function post(e) {
  const x = document.getElementById("name").value;
  const y = document.getElementById("job").value;

  if (y != "" && x != "") {
    console.log(x);
    console.log(y);
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: {
        name: x,
        job: y,
      },
    };
    const users = fetch("https://reqres.in/api/users", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`ok!! created at ${data.createdAt}`);
        document.getElementById("name").value = "";
        document.getElementById("job").value = "";
      });
  } else {
    alert("please add required credentials");
  }

  e.preventDefault();
}

function dele() {
  const delurl = "https://reqres.in/api/users/2";
  const options = {
    method: "DELETE",
  };
  const url = fetch(delurl, options).then((response) => {
    if (response.status === 204) {
      alert("successfully deleted");
    }
  });
}

function patch() {
  console.log("ok");
  const x = document.getElementById("name").value;
  const y = document.getElementById("job").value;

  if (y != "" && x != "") {
    console.log(x);
    console.log(y);
    const options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: x,
        job: y,
      }),
    };
    const users = fetch("https://reqres.in/api/users/2", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`ok!! updatad at at ${data.updatedAt}`);
        document.getElementById("name").value = "";
        document.getElementById("job").value = "";
      });
  } else {
    alert("please add required credentials");
  }
}

function put(e) {
  console.log("ok");
  const x = document.getElementById("name").value;
  const y = document.getElementById("job").value;

  if (y != "" && x != "") {
    console.log(x);
    console.log(y);
    const options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: x,
        job: y,
      }),
    };
    const users = fetch("https://reqres.in/api/users/2", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`ok!! updatad at at ${data.updatedAt}`);
        document.getElementById("name").value = "";
        document.getElementById("job").value = "";
      });
  } else {
    alert("please add required credentials");
  }
}
