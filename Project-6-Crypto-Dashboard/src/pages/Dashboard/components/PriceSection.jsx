import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "8:15 PM", "9:15 PM", "10:15 PM", "11:15 PM"];

  return (
    <CustomCard>
      <Flex justify={"space-between"} align={"start"}>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={8}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="bold">
                22.39401000
              </Text>
              <HStack fontWeight="medium" color="green">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="bold">
                  0.4%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button gap={2}>
            <Icon as={FaCirclePlus} />
            <Text>Buy</Text>
          </Button>
          <Button gap={2}>
            <Icon as={FaMinusCircle} />
            <Text>Sell</Text>
          </Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="4px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
