export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none min-h-lvh">
      <div className="aurora-blob aurora-blob--one" />
      <div className="aurora-blob aurora-blob--two" />
    </div>
  );
}
