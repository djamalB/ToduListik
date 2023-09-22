const todos = [
  {
    text: "Купить всех политиков",
    done: false,
  },
  {
    text: "Создать самый прибыльный игорный бизнес",
    done: true,
  },
  {
    text: "Уничтожить клан Лучано",
    done: false,
  },
  {
    text: "Стать самым влиятельным Доном в истории Америки",
    done: false,
  },
  {
    text: "Сделать Расула своим консильери ",
    done: false,
  },
];

const render = (listOfTodos) => {
  const mainContainerNode = document.getElementById("list");
  mainContainerNode.textContent = "";

  for (let i = 0; i < listOfTodos.length; i++) {
    const todoContainerNode = document.createElement("div");

    const checkboxNode = document.createElement("input");

    const todoTextNode = document.createElement("div");

    const removeButtonNode = document.createElement("button");

    todoContainerNode.classList.add("list__item");

    todoContainerNode.append(checkboxNode, todoTextNode, removeButtonNode);

    checkboxNode.type = "checkbox";

    checkboxNode.checked = listOfTodos[i].done;

    checkboxNode.addEventListener("change", () => {
      checkTodo(i);
    });

    if (listOfTodos[i].done === true) {
      todoContainerNode.classList.add("list__item_checked");
    }

    todoTextNode.textContent = listOfTodos[i].text;

    todoTextNode.classList.add("list__text");

    removeButtonNode.textContent = "Х";

    removeButtonNode.addEventListener("click", () => {
      remove(i);
    });

    mainContainerNode.append(todoContainerNode);
  }
};

const remove = (index) => {
  todos.splice(index, 1);

  render(todos);
};

const checkTodo = (index) => {
  todos[index].done = !todos[index].done;
  render(todos);
};

const addTodo = (text) => {
  todos.push({
    text: text,
    done: false,
  });
  render(todos);
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formInput = document.getElementById("form__input");

  addTodo(formInput.value);

  formInput.value = "";
});

render(todos);
