import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { FaSearch } from "react-icons/fa";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify={"end"} mt={4} mb={4}>
        <Button leftIcon={<Icon as={IoMdDownload} />}>Export</Button>
      </Flex>
      <Card borderRadius={"1rem"}>
        <Tabs>
          <TabList
            pt={4}
            display={"flex"}
            w={"full"}
            justifyContent={"space-between"}
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab} display="flex" gap="2" pb={4}>
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW={"200px"} pr={6}>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
