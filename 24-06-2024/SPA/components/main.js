function getMainHTML() {
  return `
        <main>
            <aside>Sidebar</aside>
            <section>Lista post</section>
        </main>
    `;
}

// const GET = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// };
// const container = document.querySelector("#app");
// const renderCard = (user) => {
//   const cardDiv = document.createElement("div");
//   const cardTitle = document.createElement("h3");
//   const cardText = document.createElement("h4");
//   const cardAuthor = document.createElement("h4");

//   cardDiv.classList.add("user-card");
//   cardTitle.textContent = user.title;
//   cardText.textContent = user.body;
//   cardAuthor.textContent = user.id;

//   cardDiv.append(cardTitle, cardText, cardAuthor);
//   container.append(cardDiv);
// };

export { getMainHTML };
