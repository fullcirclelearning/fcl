import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="prose lg:prose-xl space-y-6 mx-auto">
      <h1>About Us</h1>
      <p>The Full-Circle Learning (FCL) educational model was piloted in 1992 in Los Angeles California, initially to
help traumatized learners re-envision their capacities and connections by embracing their role as society’s
change agents.</p>
      <p>The nonprofit organization of the same name, based on this educational model, has trained participants
across 40 nations at this writing. In any given year, up to a dozen countries also receive community impact
grants, capacity building programs, wisdom exchange alliances, and scholarships in regions where public
education is not free. (Pictured, a fundraiser in Nevada City, California)</p>
      <p>This nonprofit organization, headquartered in the USA, is operated by a board of directors who bring
diverse backgrounds and unique professional experiences to educator development services. Their career
assets include curriculum development, writing and research, human resources, and teaching and/or
administering at universities, school districts, individual schools, and complementary learning or arts
programs. Board members bring 200 years of collective experience to the organization.</p>
<div class="flex flex-col md:flex-row gap-4">
<div class="md:w-1/2 md:pr-2">
      <p>Picture: A board-sponsored event in Nevada City,
California. FCL receives top ratings from
Guidestar, Candid, and Great Nonprofits.</p>
</div>
<div class="md:w-1/2 md:pr-2">
          <img width="320" height="180" src="images/ranch.jpg" alt="people sit at tables oustide of a house" />
        </div>
        </div>
      <p>The US Full-Circle Learning board liaises with a
global team of skilled facilitators and dedicated
trainers to deliver professional development
worldwide. (For more information about Full-Circle
Learners and Leaders around the world, click on
the map dots at <a href="https://www.fullcirclelearning.org">www.fullcirclelearning.org</a>.)</p>
      <p>Full-Circle Learning Board Members Include:</p>
      <div class="overflow-x-auto">
        <table class="table">
          <tbody>
            <tr>
              <td>Teresa Langness, PhD <br/> Board President</td>
              <td>Lily T. Ning, MAEx <br /> Programs</td>
              <td>Henry Wilson Lake <br /> Communications</td>
            </tr>
            <tr>
              <td>Marisol Rexach, PhD <br/> Board Secretary</td>
              <td>Sana Moussavi <br /> Human Resources</td>
              <td>Rodney Hume Dawson, PhD <br /> Programs</td>
            </tr>          
            <tr>
              <td>Fariba Mahjour <br/> Board Vice-President</td>
              <td>Taraneh Darabi, PhD <br /> Global Outreach</td>
              <td>Zack Daffallah, MBA <br /> Finance</td>
            </tr>
            <tr>
              <td>Rene Sprattling <br/> Board Treasurer</td>
              <td>Baktash Aazami, MEd <br /> Events</td>
              <td>Debbie Posada, CPA <br /> Financial Advisor</td>
            </tr>  
          </tbody>
        </table>
      </div>
      <p>For more information about Full-Circle
Learners and Leaders around the world, click on
the map dots at <a href="https://www.fullcirclelearning.org">www.fullcirclelearning.org</a>.</p>
    </div>
  );
});