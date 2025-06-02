export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">About Calima4</h1>
        
        <section className="mb-12 opacity-0 transform translate-y-8" id="about-section-1">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Calima4 was founded with a vision to create innovative solutions that make a difference. 
            Our journey began with a simple idea and has evolved into a comprehensive platform that serves 
            users across the globe.
          </p>
          <p className="text-lg">
            We believe in the power of technology to transform lives and businesses. Our team of dedicated 
            professionals works tirelessly to bring this vision to life through cutting-edge development 
            and thoughtful design.
          </p>
        </section>
        
        <section className="mb-12 opacity-0 transform translate-y-8" id="about-section-2">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At Calima4, our mission is to deliver exceptional experiences through innovative technology. 
            We strive to create solutions that are not only functional but also intuitive and enjoyable to use.
          </p>
          <p className="text-lg">
            We are committed to continuous improvement and staying at the forefront of technological advancements. 
            This commitment drives us to explore new possibilities and push the boundaries of what's possible.
          </p>
        </section>
        
        <section className="mb-12 opacity-0 transform translate-y-8" id="about-section-3">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg mb-4">
            Behind Calima4 is a team of passionate individuals with diverse backgrounds and expertise. 
            We bring together the best talents in development, design, and business strategy to create 
            solutions that stand out.
          </p>
          <p className="text-lg">
            Our collaborative approach ensures that every project benefits from multiple perspectives, 
            resulting in well-rounded solutions that address real-world needs.
          </p>
        </section>
      </div>
    </main>
  );
}