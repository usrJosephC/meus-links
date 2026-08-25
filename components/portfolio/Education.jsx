import Panel from "@/components/ui/Panel";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <Panel id="formacao" index="05" label="Formação" className="h-full p-6 sm:p-8">
      <h2 className="font-display text-3xl font-extrabold">Formação</h2>

      <ol className="mt-6 flex flex-col gap-6 border-l border-lilac/15 pl-6">
        {education.map((item) => (
          <li key={item.title} className="relative">
            <span
              className={`absolute top-1.5 -left-[1.65rem] size-[9px] rounded-full ${
                item.current
                  ? "bg-amber shadow-[0_0_0_4px_rgba(245,197,66,0.15)]"
                  : "border border-lilac/40 bg-ink"
              }`}
              aria-hidden
            />
            <p className="mono">{item.period}</p>
            <h3 className="mt-1.5 font-display text-lg font-bold">
              {item.title}
            </h3>
            <p className="mt-0.5 font-mono text-xs text-mist">
              {item.place}
              {item.detail ? ` · ${item.detail}` : ""}
            </p>
          </li>
        ))}
      </ol>
    </Panel>
  );
}
