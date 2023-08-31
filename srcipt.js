const dragableBox = document.querySelector(".dragable__box");
const items = dragableBox.querySelectorAll(".deatils");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => {
            item.classList.add("dragging");
        }, 0)
    })
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    })
})

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = dragableBox.querySelector(".dragging");
    const siblings = [...dragableBox.querySelectorAll(".deatils:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    dragableBox.insertBefore(draggingItem, nextSibling);

}

dragableBox.addEventListener("dragover", initSortableList);
dragableBox.addEventListener("dragenter", e => e.preventDefault());