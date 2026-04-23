const concepts = [
  'Coffee Shop',
  'Restaurant',
  'BBQ Steak House',
  'Artisan Pizza',
  'Wine & Cocktail Bar',
  'Bakery',
]

export default function Strip() {
  return (
    <div className="bg-teal-dark border-y border-cream/10 py-4 overflow-x-auto">
      <div className="flex items-center gap-0 px-6 whitespace-nowrap min-w-max mx-auto">
        {concepts.map((concept, i) => (
          <span key={concept} className="flex items-center">
            <span className="text-cream/80 text-xs font-semibold tracking-[0.15em] uppercase px-5">{concept}</span>
            {i < concepts.length - 1 && (
              <span className="text-gold/60 text-[10px]">◆</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
