type SectionTitleProps = {
  prefix: string;
  accent: string;
  suffix?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionTitle({
  prefix,
  accent,
  suffix,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={[
        'text-4xl md:text-5xl font-bold text-white',
        align === 'center' ? 'text-center' : 'text-left',
        className || '',
      ].join(' ')}
    >
      <span className="font-bold text-white tracking-tight">{prefix} </span>
      <span className="text-blue-500 italic font-serif">{accent}</span>
      {suffix ? (
        <span className="font-bold text-white tracking-tight"> {suffix}</span>
      ) : null}
    </h2>
  );
}

