/**
 * Painel de vidro do layout. Quando recebe `index` e `label`, ganha o trilho
 * numerado à esquerda — o índice de leitura da página, não um enfeite.
 */
export default function Panel({
  index,
  label,
  hover = false,
  className = "",
  bodyClassName = "",
  children,
  ...rest
}) {
  const railed = Boolean(index && label);

  return (
    <section
      className={`panel ${hover ? "panel-hover" : ""} ${className}`}
      {...rest}
    >
      {railed && (
        <div className="rail">
          <span>
            {index} / {label}
          </span>
        </div>
      )}
      <div className={`h-full ${railed ? "md:pl-9" : ""} ${bodyClassName}`}>
        {children}
      </div>
    </section>
  );
}
