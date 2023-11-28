import { component$ } from '@builder.io/qwik';
import Image from '../../media/student.jpg?jsx';

export default component$(() => {
  return (
    <div class="prose lg:prose-xl space-y-4 px-6 mx-auto mt-6">
      <h1>Testimonials</h1>
      <div class="flex flex-col md:flex-row gap-4">
        <div class="md:w-1/2 md:pr-2">
          <p>To me Full Circle Learning is not just a simple organization, but rather a body of highly human-centric and dedicated humanitarians, working to build the better world that our hearts know.</p>
          <p class="italic">Fiston Muganda, Uganda (Nakivale Refugee Camp)</p>
        </div>
        <div class="md:w-1/2 md:pr-2">
          <Image alt="a student in their full circle learning shirt" />
        </div>
      </div>
      <p>Truly our community has embraced change through the beautiful model we emulate from the FCL, and our children are fast becoming the change agents in this human family.</p>
      <p class="italic">Sheila Tantoh, Cameroon</p>
          <p>It is clear more than ever, that the only hope for our future lies in educating the next generation to be world-embracing peacemakers.</p>
          <p class="italic">Fariba Mahjour, California</p>
          <p>I can testify with beautiful stories on how Full-circle learning has positively impacted our community and beyond.</p>
          <p class="italic">Eric Muleya, Zambia</p>
          <p>A potential shift toward a more progressive learning approach in education may occur in the near future as a result of the human family, the environment, and communities being touched and having an impact on one another's minds and hearts.</p>
          <p class="italic">Alagie NDow, The Gambia</p>
          <p>It’s a deep honor to witness young people transforming their lives and communities around the world using the Full-Circle Learning model. Thirty years of evidence-based educational excellence are giving tomorrow’s global leaders the skills and compassion to bring clean water, green energy, public health, food security, peace, racial justice, and gender equity to villages, towns, and cities from Lusaka to Los Angeles. With Full-Circle Learning, the future looks brighter every day.</p>
          <p class="italic">Henry Lake, Connecticut</p>
          <p>“This is a blueprint to help propel humanity into its next evolution of world action.” </p>
          <p class="italic">Fourth-Grade Teacher, Liberia</p>
    </div>
  );
});