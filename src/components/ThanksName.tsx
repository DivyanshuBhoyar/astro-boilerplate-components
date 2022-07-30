interface ThanksProps {
  className?: string;
  href: string;
  name: string;
}

export const ThanksName = (props: ThanksProps): JSX.Element => {
  return (
    <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
      <a href={props.href}>{props.name}</a>
    </p>
  );
};
