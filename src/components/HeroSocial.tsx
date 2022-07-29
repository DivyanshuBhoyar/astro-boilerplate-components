type IHeroSocialProps = {
  src: string;
  alt: string;
  className?: string;
};

const HeroSocial = (props: IHeroSocialProps) => (
  <img
    className={`h-12 w-12 hover:translate-y-1 ${props.className} `}
    src={props.src}
    alt={props.alt}
    loading="lazy"
  />
);

export { HeroSocial };
