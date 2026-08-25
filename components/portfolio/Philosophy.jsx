import Panel from "@/components/ui/Panel";

export default function Philosophy() {
  return (
    <Panel id="filosofia" index="02" label="Sobre" className="h-full p-6 sm:p-8">
      <h2 className="font-display text-3xl font-extrabold">Filosofia</h2>

      <div className="mt-5 flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-mist">
        <p>
          Interface não termina na aparência. O que fica é a forma como cada
          interação é sentida — o tempo de resposta, o peso do movimento, a
          clareza do próximo passo.
        </p>
        <p>
          Trabalho com código modular e decisões explícitas: cada componente
          existe por um motivo, e cada detalhe é intencional, do comportamento à
          sensação.
        </p>
      </div>
    </Panel>
  );
}
