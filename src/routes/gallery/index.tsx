import { component$ } from '@builder.io/qwik';
import Image from '../../media/fclgreen.jpg?jsx';
import Image1 from '../../media/fclgroup.jpg?jsx';
import Image2 from '../../media/fclteachersonsteps.jpg?jsx';
import Image3 from '../../media/fclgroup1.jpg?jsx';
import Image4 from '../../media/fclcb.jpg?jsx';
import Image5 from '../../media/educatorsCertified.jpg?jsx';
import Image6 from '../../media/fclstringgroup.jpg?jsx';
import Image7 from '../../media/fclteachersalongwall.jpg?jsx';
import Image8 from '../../media/fclteacherstudy.jpg?jsx';

export default component$(() => {
  return (
    <div class="prose lg:prose-xl space-y-6 px-6 mx-auto mt-6">
      <h1>Gallery</h1>
      <h2>Scenes from sample teacher training locations, left to right: </h2>
      <p>Piru California, Nigeria, China, The Gambia, Zambia, Rwanda, Chapman University (California), El Salvador, and Papua New Guinea; for more activities across 40 countries, visit 
      <a href="https://www.fullcirclelearning.org"> www.fullcirclelearning.org</a>.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2">

      <Image alt="Teacher training in front of craft tree" />
      <Image1 alt="Teacher training in Nigeria" />
      <Image2 alt="Teacher training in China" />

      <Image3 alt="Teacher training group in classroom" />
      <Image4 alt="Teacher training on conflict bridge" />
      <Image5 alt="Teacher training group selfie" />

      <Image6 alt="Teacher training with group string project" />
      <Image7 alt="Teacher training holding certifications" />
      <Image8 alt="Teacher training in study" />
      </div>
      
    </div>
  );
});