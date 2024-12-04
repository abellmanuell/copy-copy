const stackOverflowCodes = document.getElementsByClassName("s-code-block");

for (let i = 0; i < stackOverflowCodes.length; i++) {
  const copyBtn = document.createElement("button");
  copyBtn.classList.add("copy_code_button");

  copyBtn.appendChild(document.createTextNode("Copy"));
  stackOverflowCodes[i].appendChild(copyBtn);
  copyBtn.style.position = "relative";

  if (
    stackOverflowCodes[i].scrollWidth === stackOverflowCodes[i].offsetWidth &&
    stackOverflowCodes[i].scrollHeight === stackOverflowCodes[i].offsetHeight
  )
    copyBtn.style.left = `${stackOverflowCodes[i].offsetWidth - 70}px`;
  else if (
    stackOverflowCodes[i].scrollWidth != stackOverflowCodes[i].offsetWidth &&
    stackOverflowCodes[i].scrollHeight === stackOverflowCodes[i].offsetWidth
  )
    copyBtn.style.left = `${stackOverflowCodes[i].offsetWidth - 200}px`;
  else copyBtn.style.left = `${stackOverflowCodes[i].offsetWidth - 150}px`;

  if (stackOverflowCodes[i].scrollHeight === stackOverflowCodes[i].offsetHeight)
    copyBtn.style.bottom = `${stackOverflowCodes[i].offsetHeight - 50}px`;
  else copyBtn.style.bottom = `${stackOverflowCodes[i].scrollHeight - 50}px`;
  //end of styling the button

  console.log("Appended");
}

const copy_code_button = document.querySelectorAll(".copy_code_button");

copy_code_button.forEach((btn) => {
  btn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(btn.parentNode.childNodes[0].innerText);
    alert("Copied to Clipload");
  });
});
