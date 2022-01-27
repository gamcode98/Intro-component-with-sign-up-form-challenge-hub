const d = document;

export default function validatorForm() {
  const $inputs = d.querySelectorAll("form [required]");

  $inputs.forEach((input) => {
    const $div = d.createElement("div");
    const $span = d.createElement("span");
    $span.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`;
    $div.id = input.name;
    $div.textContent = input.title;
    $div.classList.add("error", "none");
    $span.classList.add("icon-error", "none");
    input.insertAdjacentElement("afterend", $div);
    input.insertAdjacentElement("afterend", $span);
  });
}
