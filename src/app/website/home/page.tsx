import { AIESECER_DESCRIPTION, AIESECER_TITLE, HELLO_TITLE, HOME_DESCRIPTION, INTERN_DESCRIPTION, INTERN_TITLE, PASSIONATE_DESCRIPTION, PASSIONATE_TITLE, UNDERGRADUATE_DESCRIPTION, UNDERGRADUATE_TITLE } from "@/app/lib/contants";
import ImageSection from "@/components/image_section/image_section";
import SeeMoreBtn from "@/components/see_more_button/see_more_btn";
import TextSection from "@/components/text_section/text-section";
import TitleSection from "@/components/title_section/title_section";

export default function HomePage() {
  return (
    <>
       {/* Home Section */}
      <div className="flex flex-col md:flex-row sm:flex-row pb-40">
        {/* Left Column */}
        <div className="flex-1 pt-28 pl-40">
          <TitleSection title = "Welcome!" />
          <br /><br />
          <TextSection title = {HELLO_TITLE} subtitle = {HOME_DESCRIPTION} />
          <br />
          <hr />
          <br />
          <br />
          <TextSection title = {PASSIONATE_TITLE} subtitle = {PASSIONATE_DESCRIPTION} />
          <br />
          <hr />
        </div>

        {/* Right Column */}
        <div className="flex-1 flex justify-center items-center pt-28">
          <ImageSection image_path = "/profile.webp" />
        </div>
      </div>

      {/* About Me Section */}

      <div className="flex flex-col md:flex-row sm:flex-row pb-40">
        <div className="flex-1 flex justify-center items-center pt-28 pl-20">
          <ImageSection image_path = "/about.webp" />
        </div>
        <div className="flex-1 flex-col flex pt-28 pr-40">
          <TitleSection title = "About Me" />
          <br/>
          <br/>
          <TextSection title = {INTERN_TITLE} subtitle = {INTERN_DESCRIPTION} />         
          <br/>
          <hr/>
          <br/>
          <TextSection title = {UNDERGRADUATE_TITLE} subtitle = {UNDERGRADUATE_DESCRIPTION} />         
           <br/>
          <hr/>
          <br/>
          <TextSection title = {AIESECER_TITLE} subtitle = {AIESECER_DESCRIPTION} />
          <br/>
          <hr/>
          <br/>
          <br/>
          <SeeMoreBtn text = "See More" link = "/website/about_me" />
        </div>
      </div>

      {/** Projects Section */}
      <div className="flex flex-col md:flex-row sm:flex-row pb-40 justify-center items-center">
        <TitleSection title = "Projects" />
      </div>
    </>
  );
}
