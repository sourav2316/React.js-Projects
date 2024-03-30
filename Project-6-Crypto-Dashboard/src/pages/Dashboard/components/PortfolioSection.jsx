import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";

const PortfolioSection = () => {
  return (
    <HStack
      justify={"space-between"}
      bg={"white"}
      borderRadius={"xl"}
      p={6}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 5,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: "3",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="bold">
            ₹ 112,312.24
          </Text>
        </Stack>
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
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="bold">
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button gap={2}>
          <Icon as={LuArrowDownToLine} />
          <Text>Deposite</Text>
        </Button>
        <Button gap={2}>
          <Icon as={LuArrowUpToLine} />
          <Text>Withdraw</Text>
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
