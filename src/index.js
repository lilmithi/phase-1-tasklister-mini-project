document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const select = document.getElementById("priority");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    let mybtn = document.createElement("button");
    let p = document.createElement("p");

    if (select.value === "high-priority") {
      p.style.color = "red";
    } else if (select.value === "medium-priority") {
      p.style.color = "orange";
    } else {
      p.style.color = "green";
    }

    p.textContent = e.target["new-task-description"].value;
    mybtn.textContent = "X";
    p.appendChild(mybtn);
    li.appendChild(p);
    ul.appendChild(li);
    mybtn.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
    });
    form.reset();
  });
});
