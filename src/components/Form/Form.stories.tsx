import { Meta, Story } from "@storybook/react";
import * as Yup from "yup";

import { Form } from "./Form";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";

const schema = Yup.object().shape({
  firstName: Yup.string().label("First name").min(2).max(10).required(),
  lastName: Yup.string().label("Last name").min(2).max(10).required(),
  email: Yup.string().label("Email").email().required(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  streetAddress: "",
  city: "",
  county: "",
  postcode: "",
};

const ExampleForm = () => {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={(values: any, actions: any) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      schema={schema}
    >
      <InputField
        type="text"
        label="First name"
        name="firstName"
        placeholder=""
      />
      <InputField
        type="text"
        label="Last name"
        name="lastName"
        placeholder=""
      />
      <InputField
        type="email"
        label="Email address"
        name="email"
        placeholder=""
        width="col4"
      />
      <SelectField
        type="text"
        label="Country"
        name="country"
        placeholder=""
        width="col3"
        options={["United Kingdom", "United States", "Rest of the World"].map(
          (type) => ({
            label: type,
            value: type,
          })
        )}
      />
      <InputField
        type="text"
        label="Street address"
        name="streetAddress"
        placeholder=""
        width="col6"
      />
      <InputField
        type="text"
        label="City"
        name="city"
        placeholder=""
        width="col2"
      />
      <InputField
        type="text"
        label="County"
        name="county"
        placeholder=""
        width="col2"
      />
      <InputField
        type="text"
        label="Postcode"
        name="postcode"
        placeholder=""
        width="col2"
      />
    </Form>
  );
};

const meta: Meta = {
  title: "Components/Form",
  component: ExampleForm,
};

export default meta;

const Template: Story = () => <ExampleForm />;

export const Default = Template.bind({});
Default.args = {};
