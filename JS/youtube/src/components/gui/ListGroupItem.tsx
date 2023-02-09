import { component$, Slot } from "@builder.io/qwik";

export default component$(({items}:any) => {

    return (
        <li
        class={`list-group-item border-0 text-start btn btn-secondary`}
      >
              <Slot />
      </li>
    );
  });