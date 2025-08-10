export default function ThemeDemoPage() {
  return (
    <div className="min-h-screen p-6 md:p-10 bg-background text-foreground">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">
            Theme Preview
          </h1>
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground shadow-[var(--shadow-sm)]">
            Primary Action
          </button>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="rounded-[var(--radius-md)] bg-card border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-5">
            <div className="text-sm text-[var(--text-muted)]">Card</div>
            <div className="mt-2 text-foreground">
              Neutral surface with subtle border.
            </div>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-2 rounded-md bg-primary/10 text-[color:var(--primary-700)]">
                Soft
              </button>
              <button className="px-3 py-2 rounded-md bg-primary text-primary-foreground">
                Solid
              </button>
              <button className="px-3 py-2 rounded-md border border-[var(--color-border)]">
                Ghost
              </button>
            </div>
          </div>

          <div className="rounded-[var(--radius-md)] bg-card border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-5">
            <div className="text-sm text-[var(--text-muted)]">Inputs</div>
            <div className="mt-2 space-y-3">
              <input
                className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-white"
                placeholder="Text input"
              />
              <select className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-white">
                <option>Option A</option>
                <option>Option B</option>
              </select>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-[var(--primary-600)]"
                  id="chk"
                />
                <label
                  htmlFor="chk"
                  className="text-sm text-[var(--text-muted)]"
                >
                  Use blue accents
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-[var(--radius-md)] bg-card border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-5">
            <div className="text-sm text-[var(--text-muted)]">States</div>
            <div className="mt-4">
              <div className="h-2 rounded-full bg-primary/20">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: "60%" }}
                />
              </div>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-[color:var(--primary-700)] text-xs">
                  Primary
                </span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--bg-muted)] text-xs">
                  Muted
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-xs text-[var(--text-muted)]">
          This page showcases the professional, mature palette with white/gray
          backgrounds and light blue accents.
        </footer>
      </div>
    </div>
  );
}
