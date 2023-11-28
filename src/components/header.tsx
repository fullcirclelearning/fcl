import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import Image from '../media/fclicon.png?jsx';

export default component$(() => {
  return (
    <header class="flex justify-between items-center p-4 bg-white">
      <div class="flex-grow flex justify-center">
      <Link href="/">
        <Image />
      </Link>
      </div>
    </header>
  );
});
