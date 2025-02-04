export default function RenderFooterLinks({ data }) {
  return data.map(({ href, title }, key) => (
    <a href={href} key={key} className="mb-3 block">
      <div className="left-underline w-fit capitalize text-gray-200 hover:after:w-full">
        {title}
      </div>
    </a>
  ));
}
