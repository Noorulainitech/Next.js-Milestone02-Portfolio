import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-[200px]">
      {/* First Section */}
      <div className="max-w-4xl flex items-center mb-16">
        {/* Text Section */}
        <div className="text-left space-y-4">
          <h1 className="text-4xl font-bold">HI!</h1>
          <p className="text-gray-400">
            Im, a passionate and innovative web developer dedicated to creating
            dynamic, user-centric, and visually captivating websites and applications.
            With a strong foundation in front-end and back-end development, I specialize
            in crafting seamless digital experiences that blend creativity with functionality.
          </p>
        </div>

        {/* Image Section */}
        <div className="ml-8">
          <div className="rounded-full overflow-hidden border-4 border-gray-600 w-48 h-48">
            <Image
              src="/images/noorr.jpg" // Ensure the image is in the public folder
              alt="Lego Character"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-center text-xl text-gray-400 text-semibold">
            Noor Ul Ain
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full px-4 pb-[100px]">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg p-4 w-64 shadow-lg">
            <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
              <a href="https://next-js-milestone1-hello-world-qvzoc1m54.vercel.app">
                <Image
                  src="/images/hello world.png" // Replace with your image in the public folder
                  alt="Project Three"
                  width={256}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </a>

            </div>
            <h3 className="text-xl font-bold mb-2">Hello World</h3>
            <p className="text-gray-400">
              A brief description of the first project. Itss a fantastic one!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg p-4 w-64 shadow-lg">
            <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
              <a href="https://static-resume-hackathon-milestone-6bl8aa6i4.vercel.app">
                <Image
                  src="/images/static resume builder.jpg" // Replace with your image in the public folder
                  alt="Project One"
                  width={256}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </a>

            </div>
            <h3 className="text-xl font-bold mb-2">Static Resume Builder</h3>
            <p className="text-gray-400">
              A short overview of the second project. Truly remarkable!
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-lg p-4 w-64 shadow-lg">
            <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">

              <a href="https://dynamic-resume-builder-hackathon-milestone-fosj73t8d.vercel.app/">
                <Image
                  src="/images/resume builder.jpg" // Replace with your image in the public folder
                  alt="resume builder"
                  width={256}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </a>

            </div>
            <h3 className="text-xl font-bold mb-2">Dynamic Resume Builder</h3>
            <p className="text-gray-400">
              Details about the third project. Its absolutely incredible!
            </p>
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="max-w-4xl flex items-center mb-16">
        {/* Text Section */}
        <div className="text-left space-y-6">
          <h1 className="text-4xl font-bold mb-6">What I Bring to the Table!</h1>
          <ul className="space-y-4">
            <li className="flex">
              <span className="font-semibold text-gray-300 mr-8">Front-End Expertise:</span>
              <span className="text-gray-400">
                Skilled in HTML, CSS, JavaScript, and frameworks like Next.js and Tailwind CSS, 
                I translate design visions into pixel-perfect interfaces.
              </span>
            </li>
            <li className="flex">
              <span className="font-semibold text-gray-300 mr-2">Responsive Design:</span>
              <span className="text-gray-400 mr-1">
                Ensuring every project is optimized for desktops, tablets, and smartphones.
              </span>
            </li>
            <li className="flex">
              <span className="font-semibold text-gray-300 mr-2">Problem Solver:</span>
              <span className="text-gray-400 mr-2">
                I thrive on challenges, tackling complex coding problems to deliver elegant solutions.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
