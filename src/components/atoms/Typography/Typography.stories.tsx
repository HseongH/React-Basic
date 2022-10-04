import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from ".";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => (
  <>
    <Typography variant="h1">This is Heading</Typography>
    <Typography variant="h2">This is Heading</Typography>
    <Typography variant="h3">This is Heading</Typography>
    <Typography variant="h4">This is Heading</Typography>
    <Typography variant="h5">This is Heading</Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan
      venenatis scelerisque. Sed mi velit, posuere a condimentum euismod, luctus
      sed urna. Proin orci erat, gravida quis mauris varius, aliquet convallis
      dui. Donec pretium, tellus in rhoncus luctus, nunc lacus vulputate enim,
      scelerisque varius neque augue vel erat. Pellentesque gravida, neque in
      semper vehicula, ipsum erat blandit felis, in imperdiet arcu turpis in
      magna. Cras nulla neque, pharetra vel risus non, vestibulum tempus nisi.
      Suspendisse et erat nec augue gravida tincidunt a viverra nibh. Aenean
      nisl augue, dignissim eget sapien maximus, pellentesque ornare odio.
      Maecenas ultrices convallis vestibulum. Fusce massa erat, volutpat vitae
      ultrices et, vehicula ac risus.
    </Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan
      venenatis scelerisque. Sed mi velit, posuere a condimentum euismod, luctus
      sed urna. Proin orci erat, gravida quis mauris varius, aliquet convallis
      dui. Donec pretium, tellus in rhoncus luctus, nunc lacus vulputate enim,
      scelerisque varius neque augue vel erat. Pellentesque gravida, neque in
      semper vehicula, ipsum erat blandit felis, in imperdiet arcu turpis in
      magna. Cras nulla neque, pharetra vel risus non, vestibulum tempus nisi.
      Suspendisse et erat nec augue gravida tincidunt a viverra nibh. Aenean
      nisl augue, dignissim eget sapien maximus, pellentesque ornare odio.
      Maecenas ultrices convallis vestibulum. Fusce massa erat, volutpat vitae
      ultrices et, vehicula ac risus.
    </Typography>
  </>
);

export const Basic = Template.bind({});
