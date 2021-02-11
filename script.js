async function getUsers() { 
    const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await usersResponse.json();
    // console.log(users);

    return users;
}

async function onLoad() {
    var users = await getUsers();

    const userList = document.querySelector("#userList");
    var html = "";

    users.forEach(user => {
        html += `
            <tr>
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.website}</td>
            </tr>
        `;
    });

    userList.innerHTML = html;
}

// window.addEventListener("load", onLoad);
 // ya da
window.addEventListener("load", () => {
    getUsers().then(res => {
        const userList = document.querySelector("#userList");
        var html = "";
    
        res.forEach(user => {
            html += `
                <tr>
                    <th scope="row">${user.id}</th>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.website}</td>
                </tr>
            `;
        });
    
        userList.innerHTML = html;
    }).catch(err => {
        console.log(err);
    });
});