import { AIESECER_DESCRIPTION, AIESECER_TITLE, HELLO_TITLE, HOME_DESCRIPTION, INTERN_DESCRIPTION, INTERN_TITLE, PASSIONATE_DESCRIPTION, PASSIONATE_TITLE, UNDERGRADUATE_DESCRIPTION, UNDERGRADUATE_TITLE } from "@/app/lib/contants";
import ImageSection from "@/components/image_section/image_section";
import ProjectSection from "@/components/project_section/project_section";
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
      <div className="flex flex-col md:flex-row sm:flex-row pb-20 justify-center items-center">
        <TitleSection title = "Projects" />
      </div>
       <div className="flex flex-col md:flex-row sm:flex-row pb-10 justify-center items-center">
        <div className="flex-1 flex justify-center items-center pl-20">
          <ProjectSection 
            title = "Akuna Weather App" 
            description = "This weather app was developed by using Flutter. Weather API is the database which used in this application to get realtime data." 
            image_link = "/projects/weather_app.webp" 
            image_alt = "Project 1" 
            badge_names={["Flutter", "Weather-API", "Dart"]}
            badge_colors={["gray", "red", "yellow"]}
            link = "https://github.com/bhanusunrise/Akuna-Weather-App"/>

        </div>
        <div className="flex-1 flex justify-center items-center ml-5">
          <ProjectSection 
            title = "NLDS Hackathon Dashboard" 
            description = "NLDS is organized by AIESEC in Sri Lanka. This dashboard was developed by using Streamlit and Google Sheets API." 
            image_link = "/projects/exchange_marathon.webp" 
            image_alt = "Project 2" 
            badge_names={["Streamlit", "Google Sheets API", "Python"]}
            badge_colors={["pink", "green", "indigo"]}
            link = "https://github.com/AIESEC-LK/nlds-marathon"/>

        </div>
        <div className="flex-1 flex justify-center items-center pr-20 ml-5">
          <ProjectSection 
            title = "Gamini Builders Website" 
            description = "Gamini Builders was my first client for web development. I developed this website using PHP, CSS, HTML and JavaScript." 
            image_link = "/projects/gamini_builders.webp" 
            image_alt = "Project 2" 
            badge_names={["PHP", "HTML", "CSS", "JavaScript", "BootStrap"]}
            badge_colors={["blue", "purple", "red", "yellow", "gray"]}
            link = "https://www.gaminibuilders.com"/>

        </div>
      </div>
      <div className="flex flex-col md:flex-row sm:flex-row pb-20 justify-center items-center">
        <div className="flex-1 flex justify-center items-center pl-20">
          <ProjectSection 
            title = "Global Expansia Website" 
            description = "Global Expansia was organized by AIESEC in Colombo North. I developed this website using Streamlit." 
            image_link = "/projects/global_expansia.webp" 
            image_alt = "Project 1" 
            badge_names={["Streamlit", "Python"]}
            badge_colors={["green", "blue"]}
            link="https://github.com/bhanusunrise/Global-Expansia-1.0"/>

        </div>
        <div className="flex-1 flex justify-center items-center ml-5">
          <ProjectSection 
            title = "Exchange Marathon Dashboard" 
            description = "Exchange marathon is an event which organized by AIESEC International to rank their exchanges rates of each loacl committees." 
            image_link = "/projects/global_hackathon.webp" 
            image_alt = "Project 2" 
            badge_names={["Streamlit", "Google Sheets API", "Python"]}
            badge_colors={["purple", "yellow", "gray"]}
            link = "https://github.com/AIESEC-LK/exchange-marathon-dashboard"/>
            

        </div>
        <div className="flex-1 flex justify-center items-center pr-20 ml-5">
          <ProjectSection 
            title = "Business Website" 
            description = "Bhanu Sunrise Solutions is my freelancing company. I developed this website using PHP, CSS, HTML, MySQL and JavaScript." 
            image_link = "/projects/freelance.webp" 
            image_alt = "Project 2" 
            badge_names={["PHP", "HTML", "JavaScript", "BootStrap", "MySQL"]}
            badge_colors={["green", "blue", "gray", "pink", "red"]}
            link = "https://www.bhanusunrisesolutions.io"/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row sm:flex-row pb-40 justify-center items-center">
          <SeeMoreBtn text = "View All Projects" link = "/website/projects" />
      </div>
      
    </>
  );
}
