import { Card, CardBody, HStack, IconButton, Text } from "@chakra-ui/react";
import { CardFavoriteCourseProps } from "./interface";
import { GoArrowUpRight } from "@/components/Icons";

export const CardFavoriteCourse = ({ course }: CardFavoriteCourseProps) => {
  return (
    <Card>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={"lg"} color={"white"}>{course.name}</Text>
          <IconButton
            variant={"unstyled"}
            cursor={"pointer"}
            as={GoArrowUpRight}
            aria-label={"redirect"}
          />
        </HStack>
      </CardBody>
    </Card>
  );
};
