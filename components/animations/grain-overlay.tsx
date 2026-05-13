export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998] opacity-[0.03]"
      style={{
        backgroundImage: 'url("/images/grain.svg")',
        backgroundRepeat: 'repeat',
      }}
      aria-hidden="true"
    />
  )
}
