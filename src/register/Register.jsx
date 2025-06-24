import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SignupForm from "./SignupForm";
import FeaturesCard from "./FeaturesCard";
import propTypes from "prop-types";

export default function Register() {
  const data = [
    {
      label: "Customer",
      value: "customer",
      form: <SignupMembership type="customer" />,
    },
    {
      label: "Merchant",
      value: "merchant",
      form: <SignupMembership type="merchant" />,
    },
  ];

  return (
    <Tabs id="custom-animation" value={"customer"}>
      <TabsHeader className="p-0">
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="text-gray-900 hover:text-apple-500"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 2000 },
          mount: { y: 0 },
          unmount: { y: 2000 },
        }}
      >
        {data.map(({ value, form }) => (
          <TabPanel
            key={value}
            value={value}
            className="mt-4 overflow-hidden rounded-2xl p-0"
          >
            {form}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

function SignupMembership({ type }) {
  return (
    <div className="flex flex-col-reverse gap-0 xl:flex-row">
      <SignupForm />
      <FeaturesCard type={type} />
    </div>
  );
}

SignupMembership.propTypes = { type: propTypes.string };
