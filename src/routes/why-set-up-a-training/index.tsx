import { component$ } from '@builder.io/qwik';
import Image from '../../media/educatorsCertified.jpg?jsx';

export default component$(() => {
  return (
    <div class="prose lg:prose-xl space-y-6 px-6 mx-auto mt-6">
      <h1>Why Set Up a Training</h1>
      <h2>Consider the benefits of Full-Circle Learning’s
professional development for teachers:</h2>
      <ol>
      <div class="flex flex-col md:flex-row gap-4">
<div class="md:w-1/2 md:pr-2">
        <li><p>Full-Circle Learning has more than three decades of
experience training educators and parents in this
innovative model of education.</p></li>
        <li><p>Worldwide, more than a million people per year
benefit from Full-Circle Learning training programs
and projects.</p></li>


</div>
<div class="md:w-1/2 md:pr-2">
    <Image alt="educators group together for a selfie" />
        </div>
        </div>
        <li><p>Studies confirm the benefits of the model in diverse settings inside and outside the
US. Public schools, private schools, charter schools, community schools,
complementary education programs, and home schools have seen higher qualitative
and quantitative results by applying their Full-Circle Learning training.</p></li>
        <li><p>Experts in the field facilitate the learning. Both professional development and graded
Full-Circle Learning education courses are available either onsite or via zoom or in
small-group online sessions.</p></li>
        <li><p>All remuneration except hard-cost expenses apply directly to benefit learners in
vulnerable regions of the world, where student projects address sustainability goals
(the right to peace, food security, health, equity, economic wellbeing, and the
reduction of environmental or climate change impacts).</p></li>
      </ol>
    </div>
  );
});