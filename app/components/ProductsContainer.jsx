export default function ProducstContainer({ children }) {
  return (
    <section className="p-4 bg-slate-200 my-4 flex flex-col justify-center md:p-8 sm:flex-row sm:flex-wrap">
      {children}
    </section>
  );
}
