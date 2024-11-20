export default function HomePage() {
  return (
    <>
      <div className="flex flex-col md:flex-row sm:flex-row container">
        {/* Left Column */}
         <div
            className="flex-1"
            style={{
              height: '100%',
              backgroundImage: `url('/profile.webp')`, // Correctly set the background image
              backgroundSize: 'contain', // Ensures the image fits inside the div
              backgroundPosition: 'center', // Centers the image
              backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              height: 1000,
            }}
          ></div>
          {/* Right Column */}
        <div className="flex-1  pt-28">
          <h1 className="text-7xl text-gray-50">Hello Everyone!</h1>
          <br/>
          <p className="text-2xl text-gray-200 text-justify">
            I am Pasindu Bhanuka, a third year Information Technology student at University of Kelaniya, Sri Lanka. 
            Currently I am persuing my third year 6 month internship in the field of Software Development as a Software Engineer - Team Lead at AIESEC in Sri Lanka.
            Apart from that, I am working as a Freelance Web Developer at Bhanu Sunrise Solutions.
          </p>
          <br/>
          <hr/>
          <br /><br /><br />
          <h1 className="text-7xl text-gray-50">Passionate in IT</h1>
          <br/>
          <p className="text-2xl text-gray-200 text-justify">
            Since I was a student at Bandaranayake College Gampaha, I show some skills in Information Technology.
            During that time I have a curiosity about the field of Video Game Development and due to that curiosity I have been learning about the field.
            Then I developed wide variety of 2D video games by using Game Maker 8.0. After leavinf school, I have done a YouTube Channel regarding Video Games.
          </p>
          <br/>
          <hr/>
          
        </div>
        
        

         
      </div>
    </>
  );
}
