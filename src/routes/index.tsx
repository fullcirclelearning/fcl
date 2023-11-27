import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import '../global.css';

export default component$(() => {
  return (
    <>
          <div class="flex justify-center mt-20">
            <img width="691" height="194" alt="Educators consulting around a table" src="images/peopleAroundTable.jpg" />
          </div>
          <div class="flex justify-center mt-20">
          <h1 class="text-4xl font-bold">
            <div class="text-center">Full-Circle Learning:</div>
            <div class="text-center">Enhancing Pedagogy, Practice, Purpose</div>
</h1>
          </div>
          <div class="flex justify-center">
          <div class="flex flex-col mx-6 md:mx-20 prose lg:prose-xl mt-20">
            <p class="">Education typically focuses on what to learn or how to learn. Full-Circle Learning also emphasizes why to learn.</p>
            <p class="">This research-based model of education cultivates the instinct to connect and to create, to balance curiosity with compassion, to problem-solve with humanitarian intent, to improve social cohesion, motivation and behavior.</p>
            <p>Learners broaden their sphere of influence as change agents in the world. Their learning influences the wellbeing of other living beings. This transformative impact, in turn, renews the human desire to learn.</p>
            <p>Explore this site to discover how you and your colleagues can intensify your own sense of purpose by infusing purpose into all learning.</p>
          </div>
          </div>

    </>
  );
});

export const head: DocumentHead = {
  title: "Educators at Full Circle Learning",
  meta: [
    {
      name: "description",
      content: "Full Circle Learning description",
    },
  ],
};
