import { component$ } from "@builder.io/qwik";

export default component$(() => {

  return (
    <footer>
      <div class="container flex justify-center my-20">
        <a href="https://www.fullcirclelearning.org/" target="_blank">
          <span>Made with ♡ by Full Circle Learning</span>
          <span class="mx-2">|</span>
          <span>2023</span>
        </a>
      </div>
    </footer>
  );
});
