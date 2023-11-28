import { component$ } from '@builder.io/qwik';
import Image from '../../media/studentsGarden.jpg?jsx';

export default component$(() => {
  return (
    <div class="prose lg:prose-xl space-y-6 px-6 mx-auto mt-6">
      <h1>Cost</h1>
      <p>Rest assured that when you schedule a workshop, you are serving education and teacher development in vulnerable regions of the world. Thanks to our pro bono services, all but the hard costs incurred will directly fund global humanitarian teacher training programs.</p>
      <p>Choose from Three Options (with the most effective listed first):</p>
      <ol>
        <li><p>In-person, synchronous professional development: 
        $2,000 per teacher or student teacher (for a 10-hour program) 
        </p></li>
        <li><p>Zoom-based synchronous professional development: 
$1,000 per teacher or student teacher (for a 10-hour program)
        </p></li>
        <li><p>FCL mentorship for 10-session individual online course with practicum: 
$200 per person
        </p></li>
      </ol>
      <Image alt="Three students holding vegetables in a garden" />
    </div>
  );
});