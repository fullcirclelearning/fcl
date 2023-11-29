import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Image from '../media/peopleAroundTable.jpg?jsx';
import ImageStudy from '../media/studentStudying.jpg?jsx';
import '../global.css';

export default component$(() => {
  return (
    <div class="space-y-6 mx-6">
          <div class="flex justify-center">
            <Image alt="educators around a table consulting" />
          </div>
          <div class="flex justify-center">
          <h1 class="text-4xl font-bold">
            <div class="text-center text-5xl">Full-Circle Learning:</div>
            <div class="text-center">Enhancing Pedagogy, Practice, Purpose</div>
          </h1>
          </div>
          <div class="flex justify-center">
          <div class="container mx-auto max-w-4xl">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="md:w-1/2 md:pr-2 mb-4 mt-2">
          <ImageStudy alt="student with school work on desk" style={{ width: '398px', height: '300px'}} />
        </div>
        <div class="md:w-1/2 prose lg:prose-xl">
        <p class="">Education typically focuses on what to learn or how to learn. Full-Circle Learning also emphasizes <span class='italic'>why</span> to learn.</p>
            <p class="">This research-based model of education cultivates the instinct to connect and to create, to balance curiosity with compassion, to problem-solve with humanitarian intent, to improve social cohesion, motivation and behavior.</p>
        </div>
      </div>
      <div class="prose lg:prose-xl mt-4">
      <p>Learners broaden their sphere of influence as change agents in the world. Their learning influences the wellbeing of other living beings. This transformative impact, in turn, renews the human desire to learn.</p>
            <p>Explore this site to discover how you and your colleagues can intensify your own sense of purpose by infusing purpose into all learning.</p>
      </div>
    </div>
          </div>

    </div>
  );
});

export const head: DocumentHead = {
  title: "Full Circle Learning Educator Site",
  meta: [
    {
      name: "description",
      content: "Full Circle Learning for Educators",
    },
  ],
};
