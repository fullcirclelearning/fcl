import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="flex justify-between items-center p-4 bg-white">
      <div class="flex-grow flex justify-center">
        <img width="88" height="155" src="images/fclicon.png" />
      </div>
    </header>
  );
});
