import { component$, Slot, useStore } from '@builder.io/qwik';


export default component$(() => {

    return (
        <ul class="list-group ">
            <Slot />
        </ul>
    );
});
