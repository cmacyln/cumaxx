export function BackgroundGlow() {
  return (
    <>
      {/* Fixed backdrop glows */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Cyan glow — top right */}
        <div
          className="absolute -top-1/3 -right-1/3 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,240,255,0.25) 0%, rgba(0,240,255,0.08) 35%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Purple glow — bottom left */}
        <div
          className="absolute -bottom-1/3 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(160,32,240,0.2) 0%, rgba(160,32,240,0.05) 40%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Pink accent — mid right */}
        <div
          className="absolute top-1/3 right-1/5 w-[350px] h-[350px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,0,85,0.15) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
    </>
  )
}
