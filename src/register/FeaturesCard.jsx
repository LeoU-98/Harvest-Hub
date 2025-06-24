import { CheckCircleIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";

////////////////////////////////////////
//////////  Merchant Features

const merchantFeatures = [
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "AI Features To Enhance Your Bussiness ",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Ability To Expand Your Business By Reaching More Clients",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Access to a large customer base",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Tools for promoting products within the marketplace",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Unlimited product listings",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Basic analytics on sales and traffic",
  },
];

////////////////////////////////////////
//////////  Customer Features

const customerFeatures = [
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "AI Features To Enhance Your Bussiness ",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Ability To Expand Your Business By Reaching More Clients",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Access to a large customer base",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Tools for promoting products within the marketplace",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Unlimited product listings",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Basic analytics on sales and traffic",
  },
];

export default function FeaturesCard({ type }) {
  const data = type === "customer" ? customerFeatures : merchantFeatures;

  return (
    <figure className="flex flex-grow flex-col items-center bg-gradient-to-tr from-[#0ea5e9] from-10% to-apple-400 to-90% p-5 text-white">
      <h2 className="mx-auto p-3 pb-0 text-xl capitalize">
        {type === "customer" ? "Customer Membership" : "Merchant Membership"}
      </h2>
      <div>
        <div className="p-4">
          {type === "customer" ? (
            <CustomerSvg />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="store"
              className="fill-white"
            >
              <path
                fillRule="evenodd"
                d="M458.333 204.379v250.477H499c2.754 0 5 2.246 5 5V495c0 2.754-2.246 5-5 5H13a5.01 5.01 0 0 1-5-5v-35.145c0-2.754 2.246-5 5-5h40.667v-250.48a68.954 68.954 0 0 0 19.467 2.792 68.942 68.942 0 0 0 22.02-3.593c17.119-5.765 30.845-17.837 38.931-33.116 11.574 21.833 34.529 36.709 60.96 36.709a68.942 68.942 0 0 0 22.02-3.593c17.119-5.765 30.845-17.837 38.931-33.116 11.574 21.833 34.529 36.709 60.96 36.709a68.942 68.942 0 0 0 22.02-3.593c17.119-5.765 30.845-17.837 38.931-33.116 11.574 21.833 34.529 36.709 60.96 36.709a69.037 69.037 0 0 0 19.466-2.788zM144.47 130.212 175.625 12H248v118.212H144.47zM159.078 12H88.223c-.84 0-1.385.331-1.773 1.075L25.372 130.212h102.552L159.078 12zm-138.3 134.212c3.856 25.453 25.825 44.956 52.355 44.956 5.754 0 11.46-.92 16.914-2.756 18.946-6.38 32.481-22.824 35.436-42.199H20.778v-.001zm121.911 0c3.856 25.453 25.825 44.956 52.355 44.956 5.754 0 11.46-.92 16.914-2.756 18.946-6.38 32.481-22.824 35.436-42.199H142.689v-.001zm121.911 0c3.856 25.453 25.825 44.956 52.355 44.956 5.754 0 11.46-.92 16.914-2.756 18.946-6.38 32.481-22.824 35.436-42.199H264.6v-.001zm102.93-16L336.376 12H264v118.212h103.53zm18.981 16c3.856 25.453 25.825 44.956 52.355 44.956 5.754 0 11.46-.92 16.914-2.756 18.946-6.38 32.481-22.824 35.436-42.199H386.511v-.001zM352.922 12h70.855c.84 0 1.385.331 1.773 1.075l61.078 117.137H384.076L352.922 12zm-63.573 353.062c-5.508 0-10 4.492-10 10v10.97c0 5.508 4.492 10 10 10h107.565c5.508 0 10-4.492 10-10v-10.97c0-5.508-4.492-10-10-10H289.349zm0-115.767c-5.508 0-10 4.492-10 10v61.111c0 5.508 4.492 10 10 10h107.565c5.508 0 10-4.492 10-10v-61.111c0-5.508-4.492-10-10-10H289.349zm-169.962 0c-5.508 0-10 4.492-10 10v195.56H220.73v-195.56c0-5.508-4.492-10-10-10h-91.343z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </div>
        <h3 className="pl-2">Features</h3>
        <figcaption>
          <ul className="flex flex-col gap-3 px-2 py-2">
            {data.map((line, key) => (
              <FeatureLine data={line} key={key} />
            ))}
          </ul>
        </figcaption>
      </div>
    </figure>
  );
}

FeaturesCard.propTypes = {
  type: propTypes.string,
};

function FeatureLine({ data }) {
  const { featureIcon, featureDesc } = data;
  return (
    <li className="flex gap-1">
      <div className="relative top-[-1px]">{featureIcon}</div>
      <p className="text-sm">{featureDesc}</p>
    </li>
  );
}

FeatureLine.propTypes = {
  data: propTypes.object,
};

function CustomerSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      id="customer "
      className="fill-white"
    >
      <path
        fill="#fff"
        d="M14.5 31h-3.1c-.3 0-.5-.2-.5-.5V30c0-1.8 1.4-3.4 3.2-3.6.2 0 .4.1.5.2.3.5.4 1 .4 1.6v2.3c0 .3-.2.5-.5.5zm-2.6-1H14v-1.8c0-.3-.1-.5-.2-.8-1.1.3-1.9 1.4-1.9 2.6zM3.5 14c-.1 0-.2 0-.2-.1-.2 0-.3-.2-.3-.4V12h-.5c-.8 0-1.5-.7-1.5-1.5v-8C1 1.7 1.7 1 2.5 1h12c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5H6.7l-2.9 1.9c-.1.1-.2.1-.3.1zm-1-12c-.3 0-.5.2-.5.5v8c0 .3.2.5.5.5h1c.3 0 .5.2.5.5v1.1l2.2-1.5c.1-.1.2-.1.3-.1h8c.3 0 .5-.2.5-.5v-8c0-.3-.2-.5-.5-.5h-12zM28.5 14c-.1 0-.2 0-.3-.1L25.4 12h-4.8c-.8 0-1.5-.7-1.5-1.5v-5c-.1-.8.6-1.5 1.4-1.5h9c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5H29v1.5c0 .2-.1.4-.3.4 0 .1-.1.1-.2.1zm-8-9c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h5c.1 0 .2 0 .3.1l2.2 1.5v-1.1c0-.3.2-.5.5-.5h1c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-9zM24 26.4c-.8 0-1.5-.3-1.9-.9-.3-.3-.4-.7-.4-1v-1.3c0-.3.2-.5.5-.5s.5.2.5.5v1.3c0 .1.1.3.2.4.5.7 1.8.7 2.3 0 .1-.1.2-.3.2-.4v-1.3c0-.3.2-.5.5-.5s.5.2.5.5v1.3c0 .3-.1.7-.4 1-.5.6-1.2.9-2 .9z"
      ></path>
      <path
        fill="#fff"
        d="M24 24.1c-2.2 0-4-1.8-4-4v-.9c0-.3.2-.5.5-.5s.5.2.5.5v.9c0 1.7 1.3 3 3 3s3-1.3 3-3v-.9c0-.3.2-.5.5-.5s.5.2.5.5v.9c0 2.2-1.8 4-4 4z"
      ></path>
      <path
        fill="#fff"
        d="M20.5 19.8h-.1c-.2 0-.3-.2-.3-.3l-.6-1.8c-.1-.6 0-1.1.3-1.6.2-.3.6-.5.9-.6.1-.5.3-.9.7-1.2.5-.4 1.1-.6 1.7-.5l3.8.6c.6.1 1.1.4 1.4.9.3.5.5 1 .4 1.6l-.7 2.5c0 .2-.2.3-.3.4-.2.1-.3 0-.5-.1l-1.3-1c-.1-.1-.2-.1-.3-.1h-3.3c-.1 0-.2 0-.3.1l-1.2 1c-.1 0-.2.1-.3.1zm2.2-5c-.3 0-.5.1-.7.3-.2.2-.4.5-.4.8 0 .3-.2.5-.5.5-.2 0-.5.1-.6.3-.2.2-.2.4-.2.7l.4 1 .7-.6c.3-.2.6-.3 1-.3h3.3c.3 0 .7.1 1 .3l.6.5.4-1.7c0-.3 0-.6-.2-.8-.2-.2-.4-.4-.7-.5l-3.8-.6c-.2.1-.2.1-.3.1zM30.5 31h-13c-.3 0-.5-.2-.5-.5v-2.3c0-1.3.9-2.5 2.1-2.9l2.9-1c.3-.1.5.1.6.3.1.3-.1.5-.3.6l-2.9 1c-.9.3-1.4 1.1-1.4 2V30h12v-1.8c0-.9-.6-1.7-1.4-2l-2.9-1c-.3-.1-.4-.4-.3-.6s.4-.4.6-.3l2.9 1c1.3.4 2.1 1.6 2.1 2.9v2.3c0 .3-.2.5-.5.5z"
      ></path>
      <path
        fill="#fff"
        d="M30.5 31h-3.1c-.3 0-.5-.2-.5-.5V30c0-1.8 1.4-3.4 3.2-3.6.2 0 .4.1.5.2.3.5.4 1 .4 1.6v2.3c0 .3-.2.5-.5.5zm-2.6-1H30v-1.8c0-.3-.1-.5-.2-.8-1.1.3-1.9 1.4-1.9 2.6zM20.6 31h-3.1c-.3 0-.5-.2-.5-.5v-2.3c0-.6.2-1.1.4-1.6.1-.2.3-.3.5-.2 1.8.2 3.2 1.8 3.2 3.6v.5c0 .3-.2.5-.5.5zM18 30h2.1c0-1.2-.8-2.2-2-2.5-.1.2-.2.5-.2.8V30zM9.5 9h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5-.2.5-.5S9.8 7 9.5 7h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9z"
      ></path>
      <path
        fill="#fff"
        d="M8.5 7h-1C6.7 7 6 6.3 6 5.5S6.7 4 7.5 4h3c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5.2.5.5s-.2.5-.5.5z"
      ></path>
      <path
        fill="#fff"
        d="M8.5 5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .3-.2.5-.5.5zM8.5 10c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .3-.2.5-.5.5zM23.5 10c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l3-3c.2-.2.5-.2.7 0s.2.5 0 .7l-3 3c0 .1-.2.1-.3.1z"
      ></path>
      <circle cx="23.8" cy="6.8" r=".8" fill="#fff"></circle>
      <circle cx="26.2" cy="9.3" r=".8" fill="#fff"></circle>
      <path
        fill="#fff"
        d="M8 26.8h-.2c-.2-.1-2.1-1-2.1-2.3V23c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0 .4.7.9 1.3 1.3.6-.3 1.3-.9 1.3-1.3V23c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0 1.3-1.9 2.2-2.1 2.3H8z"
      ></path>
      <path
        fill="#fff"
        d="M8 24c-1.7 0-3-1.3-3-3v-2.5c0-.3.2-.5.5-.5s.5.2.5.5V21c0 1.1.9 2 2 2s2-.9 2-2v-2.5c0-.3.2-.5.5-.5s.5.2.5.5V21c0 1.7-1.3 3-3 3zM14.5 31h-13c-.3 0-.5-.2-.5-.5v-2.3c0-1.3.9-2.5 2.1-2.9l2.9-1c.3-.1.5.1.6.3.1.3-.1.5-.3.6l-2.9 1c-.9.3-1.4 1.1-1.4 2V30h12v-1.8c0-.9-.6-1.7-1.4-2l-2.9-1c-.3-.1-.4-.4-.3-.6.1-.3.4-.4.6-.3l2.9 1c1.3.4 2.1 1.6 2.1 2.9v2.3c0 .3-.2.5-.5.5z"
      ></path>
      <path
        fill="#fff"
        d="M14.5 31h-3.1c-.3 0-.5-.2-.5-.5V30c0-1.8 1.4-3.4 3.2-3.6.2 0 .4.1.5.2.3.5.4 1 .4 1.6v2.3c0 .3-.2.5-.5.5zm-2.6-1H14v-1.8c0-.3-.1-.5-.2-.8-1.1.3-1.9 1.4-1.9 2.6zM4.6 31H1.5c-.3 0-.5-.2-.5-.5v-2.3c0-.6.2-1.1.4-1.6.1-.2.3-.3.5-.2 1.8.2 3.2 1.8 3.2 3.6v.5c0 .3-.2.5-.5.5zM2 30h2.1c0-1.2-.8-2.2-2-2.5 0 .2-.1.4-.1.7V30zM6 19h-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H6c.3 0 .5-.2.5-.5s.2-.5.5-.5.5.2.5.5c0 .8-.7 1.5-1.5 1.5zM12.5 22c-.3 0-.5-.2-.5-.5v-1c0-.8-.7-1.5-1.5-1.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c1.4 0 2.5 1.1 2.5 2.5v1c0 .3-.2.5-.5.5z"
      ></path>
      <path
        fill="#fff"
        d="M10 19H8c-.8 0-1.5-.7-1.5-1.5 0-.3.2-.5.5-.5s.5.2.5.5.2.5.5.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zM9 22h-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H9c.6 0 1-.4 1-1 0-.3.2-.5.5-.5s.5.2.5.5c0 1.1-.9 2-2 2z"
      ></path>
      <path
        fill="#fff"
        d="M9.8 24.5c-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.2-.4v-1c0-.3.2-.5.5-.5s.5.2.5.5v.4c.4-.1.7-.1 1-.2l.2-.1c.2 0 .4-.3.4-.5V19c0-2.2-1.8-4-4-4s-4 1.8-4 4v3.7c0 .2.2.4.4.5l.2.1c.3.1.7.1 1 .2V23c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .1-.1.3-.2.4-.1.1-.2.1-.4.1-.6-.1-1.2-.2-1.7-.3l-.2-.1c-.5-.1-1-.7-1-1.4V19c0-2.8 2.2-5 5-5s5 2.2 5 5v3.7c0 .7-.5 1.3-1.2 1.5l-.2.1c-.6.1-1.1.1-1.8.2.1 0 0 0 0 0z"
      ></path>
    </svg>
  );
}
