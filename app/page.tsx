import CoffeeCalculation from "@/components/CoffeeCalculation";

export default function Home() {
  return (
    <section className="m-8">
      <div className="w-full text-center">
        <h1 className="text-5xl font-bold">Coffee Timer</h1>
        <p>When will your coffee taper off, hit its peak, and leave your system?</p>
      </div>
      <CoffeeCalculation />
      
    </section>
  );
}
