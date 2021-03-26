document.querySelector("#prev").addEventListener("click", () => {
  const newIndex = getCurrentIndex() - 1;
  setActive(newIndex);
  setEnabled(newIndex);
  setProgress(newIndex);
});

document.querySelector("#next").addEventListener("click", () => {
  const newIndex = getCurrentIndex() + 1;
  setActive(newIndex);
  setEnabled(newIndex);
  setProgress(newIndex);
});

function getCurrentIndex() {
  let i = 0;
  document.querySelectorAll(".circle").forEach((element, index) => {
    if (element.classList.contains("active")) {
      i = index;
    }
  });
  return i;
}

function setActive(index) {
  document.querySelectorAll(".circle").forEach((element, i) => {
    if (i !== index) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  });
}

function setEnabled(index) {
  const atFirstElement = index === 0;
  const atLastElement = index === 3;
  if (atFirstElement) {
    document.querySelector("#prev").setAttribute("disabled", "disabled");
  } else if (atLastElement) {
    document.querySelector("#next").setAttribute("disabled", "disabled");
  } else {
    document.querySelector("#prev").removeAttribute("disabled");
    document.querySelector("#next").removeAttribute("disabled");
  }
}

function setProgress(index) {
  document
    .querySelector("#progress")
    .setAttribute("style", `width: ${(index * 100) / 3}%`);
}
