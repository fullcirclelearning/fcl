import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="flex justify-between items-center p-4 bg-white">
      {/* Logo in the Center */}
      <div class="flex-grow flex justify-center">
        <img width="88" height="155" src="src/media/fclicon.png" />
      </div>
      {/* Hamburger Menu (visible only on small screens) */}
      <div class="block lg:hidden">
        <button class="p-2">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
});
