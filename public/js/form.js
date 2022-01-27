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
  d.addEventListener("keyup", (e) => {
    if (e.target.matches("form [required]")) {
      let $input = e.target;
      let iconError = e.target.nextElementSibling;
      let colorInput = e.target.closest("input");
      let pattern = $input.pattern;
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? (d.getElementById($input.name).classList.add("is-active"),
            iconError.classList.add("is-active"),
            colorInput.classList.add("is-invalid"))
          : (d.getElementById($input.name).classList.remove("is-active"),
            iconError.classList.remove("is-active"),
            colorInput.classList.remove("is-invalid"));
      }
    }

    d.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
}
