export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-violet-100 px-6 py-16">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl"
      />

      <section className="relative w-full max-w-3xl rounded-3xl border border-white/80 bg-white/80 px-7 py-12 text-center shadow-xl shadow-slate-900/5 backdrop-blur sm:px-14 sm:py-16">
        <p className="mb-6 inline-flex rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800">
          ჩემი პირველი ნაბიჯი ვებში
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          ჩემი პირველი პროექტი
        </h1>
        <div className="mx-auto my-8 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
        <p className="text-lg text-slate-500">ავტორი</p>
        <p className="mt-3 text-2xl font-semibold text-slate-800 sm:text-3xl">
          გიორგი ბერიძე
        </p>
      </section>
    </main>
  );
}
