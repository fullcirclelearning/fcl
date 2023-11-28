import { component$ } from '@builder.io/qwik';
import Image from '../../media/fclParade.png?jsx';

export default component$(() => {
  return (
    <div class="prose lg:prose-xl space-y-6 px-6 mx-auto mt-6">
      <h1>Contact Us</h1>
      <p>To discuss a professional development plan that meets your needs, please email
<a href="mailto:info@fullcirclelearning.org"> info@fullcirclelearning.org</a>.</p>
      <p>To make a tax-deductible contribution for the training of educators among vulnerable
populations worldwide, earmark your donation at <a href="https://www.fullcirclelearning.org">www.fullcirclelearning.org</a>.</p>
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
      <Image alt="Full circle learning participants forming a parade down a street" />
    </div>
  );
});