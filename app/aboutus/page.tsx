"use client";

export default function AboutUs() {
  return (
    <div className="bg-n-7 text-white py-20 px-8">
      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 pr-8">
          <h2 className="text-5xl font-bold mb-4">
            RADOLYTECH: WHERE TECHNOLOGY MEETS INNOVATION
          </h2>
          <p className="text-lg mb-4">
            Welcome to <strong>RadolyTech</strong>, where technology transforms
            into innovation, and imagination knows no bounds. Our company is
            more than a place—it's a hub for creators, developers, and
            visionaries. Let us introduce ourselves:
          </p>
        </div>
        <div className="lg:w-1/2">
          {/* Add any suitable logo or placeholder image */}
          <img
            src="path/to/your/logo1.png"
            alt="RadolyTech"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 pr-8">
          {/* Add any suitable logo or placeholder image */}
          <img
            src="path/to/your/logo2.png"
            alt="Innovation"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 pl-8">
          <h3 className="text-4xl font-bold mb-4">
            TECHNOLOGY DEVELOPMENT: DRIVING THE FUTURE
          </h3>
          <p className="text-lg mb-4">
            At RadolyTech, we harness the power of technology to create
            groundbreaking solutions.
          </p>
          <p className="text-lg mb-4">
            RadolyTech operates at the intersection of technology and
            innovation. Our developers sculpt software solutions, blurring the
            lines between possible and impossible. Whether it's a complex
            application or an innovative platform, our tech wizards create
            solutions that leave users in awe.
          </p>
          <p className="text-lg mb-4">
            Our team builds immersive experiences where users engage with
            cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="flex flex-col items-center text-center">
          <img
            src="path/to/your/icon1.png"
            alt="Project Management"
            className="mb-4"
          />
          <h4 className="text-xl font-bold mb-2">PROJECT MANAGEMENT</h4>
          <p>Our expertise</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="path/to/your/icon2.png" alt="Design" className="mb-4" />
          <h4 className="text-xl font-bold mb-2">DESIGN</h4>
          <p>Our expertise</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="path/to/your/icon3.png"
            alt="Development"
            className="mb-4"
          />
          <h4 className="text-xl font-bold mb-2">DEVELOPMENT</h4>
          <p>Our expertise</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="path/to/your/icon4.png" alt="Marketing" className="mb-4" />
          <h4 className="text-xl font-bold mb-2">MARKETING</h4>
          <p>Our expertise</p>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h3 className="text-4xl font-bold mb-8">
          OUR APPROACH TO TECHNOLOGY PROJECTS
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">1. CONCEPTUALIZATION</h4>
            <p className="mb-4">
              Brainstorming: We gather around the virtual table—designers,
              developers, and visionaries. Ideas flow freely. What&apos;s the core
              concept? Is it a complex application, a new platform, or an
              innovative solution?
              <br />
              Project Documentation: We pen down the project&apos;s essence—a
              detailed document that outlines mechanics, features, and the
              journey we want users to experience.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">2. PRE-PRODUCTION</h4>
            <p className="mb-4">
              Art Direction: Our designers sketch interfaces, user flows, and
              interactions. We define the visual style—modern, intuitive, or
              something in between.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">3. PRODUCTION</h4>
            <p className="mb-4">
              Development and Testing: Our developers write the code—the
              backbone of our projects. Rigorous testing ensures quality and
              functionality.
              <br />
              Design Implementation: We craft interfaces that are not only
              functional but also visually appealing.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">
              4. DEPLOYMENT AND ITERATION
            </h4>
            <p className="mb-4">
              Goals & Metrics: We deploy and monitor rigorously, ensuring each
              element aligns with our vision. We set goals and key performance
              indicators to measure success and iterate based on feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
