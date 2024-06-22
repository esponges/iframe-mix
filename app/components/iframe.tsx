type Props = {
  url: string;
};

export default function IFrame({ url }: Props) {
  return <iframe src={url} />;
}
