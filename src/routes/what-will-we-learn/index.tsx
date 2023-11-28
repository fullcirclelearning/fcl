import { component$ } from '@builder.io/qwik';
import Image from '../../media/fclSystem.jpg?jsx';

export default component$(() => {
  return (
    <div class="prose lg:prose-xl space-y-6 px-6 mx-auto mt-8">
      <h1>What Will We Learn</h1>
      <ol>
      <div class="flex flex-col md:flex-row gap-4">
      <div class="md:w-1/2 md:pr-2">
        <li><p>This integrated education model enhances motivation for socio emotional as well as cognitive and creative development among learners.</p></li>
        <li><p>Teachers work together with a common vision to apply a system of steps and strategies that integrate character, academic, arts-based, and conflict-resolution and service learning.</p></li>
      </div>
      <div class="md:w-1/2 md:pr-2">
        <Image alt="diagram of the FCL educator training. Clockwise: Character Education/Self-mastery, Academics, Art/Music, Peacemaking Skills, Local & Global Community Service" />
      </div>
      </div>
        <li><p>Educators learn to set up lesson plans and pacing guides that customize projects for relevant needs and education standards.</p></li>
        <li><p>The supporting classroom management approach offers strategies that nurture altruistic identities and positive school culture.</p></li>
        <li><p>Classrooms have the option to connect across borders in wisdom exchanges on like minded projects and habits-of-heart, thus enhancing learning motivation while also building leadership capacities and broader perspectives on problem solving.</p></li>
      </ol>
    </div>
  );
});